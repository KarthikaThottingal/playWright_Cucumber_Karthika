import { Given, When, Then, } from "@cucumber/cucumber";
import dotenv from 'dotenv';
import { demoQAActions } from '../pageMethods/demoQAActions.js';
dotenv.config();

Given('User navigate to url', async function () {
    console.log("Karthika Testing in Given ");
    console.log("navigate to url :", process.env.URL);
    await this.page.goto(process.env.URL);
});

Given('User navigate to demourl', async function () {
    console.log("Demoqa Testing");
    await this.page.goto(process.env.DEMOURL);
});

When('User click on Elements', async function () {
    await this.demoQAActions_Object.clickElements();
});


// RadioButton
Then('User click on RadioButtons', async function () {
    await this.demoQAActions_Object.clickRadioButtons();
});

Then('User User click Yes option and check the display message', async function () {
    await this.demoQAActions_Object.verifyRadioYes();
});


Then('User click on Impressive  and check the display message', async function () {
    await this.demoQAActions_Object.verifyRadioImpressive();
});

Then('User try to click on No option', async function () {
    await this.demoQAActions_Object.verifyRadioNo();
});



// TestBox
Then('User click on TextBox', async function () {
    await this.demoQAActions_Object.clickTextBox();
});

Then('User fill the Full Name, Email, Current Address and Permanent Address', async function () {
    await this.demoQAActions_Object.fillTextBox();
});

Then('User click on Submit Button', async function () {
    await this.demoQAActions_Object.clickSubmitButton();

});


// Checkbox
Then('User click on CheckBox', async function () {
    await this.demoQAActions_Object.clickCheckBox();
});

Then('User click on plus Button', async function () {
    await this.demoQAActions_Object.clickPlusButton();
});

Then(/^User check the boxes (.+) and then (.+)$/, async function (header, value) {
  await this.demoQAActions_Object.clickCheckBoxOptions(header.trim(), value.trim());
});

Then('User click on expand button after Desktop', async function () {
    await this.demoQAActions_Object.clickExpandButton();
});



