import { Before, BeforeAll, After, AfterStep } from '@cucumber/cucumber';
import { chromium, request } from 'playwright';
import './world.js';
import path from 'path';
import fs from 'fs';

Before(async function () {
  // Browser Launch
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(30000);

  //API Testing Launch
  this.request = await request.newContext();
  const { apiUIActions } = await import('../tests/pageMethods/apiUIActions.js');
  this.apiUIActions_Object = new apiUIActions(this.page);
  this.apiUIActions_Object.attach = this.attach;

  //Homepage object
  const { demoQAActions } = await import('../tests/pageMethods/demoQAActions.js');
  this.demoQAActions_Object = new demoQAActions(this.page);
  this.demoQAActions_Object.attach = this.attach;
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

AfterStep(async function ({ result, pickleStep }) {
  if (!this.page) return;
  const screenshotDir = path.join('Reports', 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true }); // create a folder if it doesnot exist
  }

  //create filename
  const stepName = pickleStep.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
  const reportName = 'cucumber-report';
  const timestamp = Date.now();
  const filepath = path.join(screenshotDir, `${stepName}_${timestamp}.png`);
  console.log("filepath : ", filepath);
  const reportPath = path.join('Reports', `${reportName}_${timestamp}.html`);

  //save it in drive
  await this.page.screenshot({ path: filepath, fullpage: true });

  // add it into the report
  const imageBuffer = fs.readFileSync(filepath);
  await this.attach(imageBuffer, `image/png`);

  if (result.status == 'failed') {
    const errorMessage = result.exception?.stack || result.exception?.message || 'Unknown error';
    await this.attach(`❌ Step failed:\n\n${errorMessage}`, 'text/plain');
  }
});