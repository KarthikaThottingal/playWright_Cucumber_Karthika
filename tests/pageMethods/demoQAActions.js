import { elementpage } from '../Pages/elementpage.js';
import { homepage } from '../Pages/homepage.js';
import { expect } from '@playwright/test';

export class demoQAActions {
    constructor(page) {
        this.page = page;
        this.attach = null;
        this.homePage = new homepage(page);
        this.ElementPage = new elementpage(page);
    }

    async clickElements() {
        try {
            console.log("User click on elements");
            await this.homePage.elements.click()
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickElements:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }

    //RadioButton
    async clickRadioButtons() {
        try {
            await this.ElementPage.elementPageRadioButton.click();
            await expect(this.ElementPage.RadioButtonHeader).toBeVisible();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickRadioButtons:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }

    }

    async verifyRadioYes() {
        try {
            await expect(this.ElementPage.RadioButtonYes).toBeEnabled();
            console.log("Element is stable");
            await this.ElementPage.RadioButtonYes.click();
            await expect(this.ElementPage.YesVerifiedText).toBeVisible();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in verifyRadioYes:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }

    async verifyRadioImpressive() {
        try {
            await this.ElementPage.RadioButtonImpressive.click();
            await expect(this.ElementPage.ImpressiveVerifiedText).toBeVisible();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in verifyRadioImpressive:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }

    async verifyRadioNo() {
        try {
            await expect(this.ElementPage.RadioButtonNo).toBeDisabled();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in verifyRadioNo:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }
    // TextBox
    async clickTextBox() {
        try {
            await this.ElementPage.elementPageTextBox.click();
            // await expect(this.Elementpage.elementPageTextBoxHeader).toBeVisible();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickTextBox:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }

    async fillTextBox() {
        try {
            // await expect(this.Elementpage.elementPageTextBoxHeader).toBeVisible();
            await this.ElementPage.elementPageFullName.click();
            await this.ElementPage.elementPageFullName.fill("TextBoxKarthika");
            await this.ElementPage.elementPageEmail.click();
            await this.ElementPage.elementPageEmail.fill("text@email.com");
            await this.ElementPage.elementPageCurrentAddress.click();
            await this.ElementPage.elementPageCurrentAddress.fill("Erfjb str 9");
            await this.ElementPage.elementPagePermanentAddress.click();
            await this.ElementPage.elementPagePermanentAddress.fill("jhsdhsiuhjdfdfg");

        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in fillTextBox:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }
    async clickSubmitButton() {
        try {
            await this.ElementPage.elementPageButton.click();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickSubmitButton:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }

    //check box
    async clickCheckBox() {
        try {
            await this.ElementPage.elementPageCheckBox.click();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickCheckBox:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach as readable text
            }
            throw error;
        }

    }


    async clickPlusButton() {
        try {
            await expect(this.ElementPage.elementPageCheckBoxHearder).toBeVisible;
            await this.ElementPage.elementPagePlusButton.click();
            await this.attach(await this.page.screenshot({fullPage: true}), 'image/png')
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickPlusButton:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach as readable text
            }
            throw error;
        }
    }


    async clickCheckBoxOptions(header, value) {
        try {
            console.log("\n\nHeader is ", header);
            console.log(`/label/*[contains(text(),'${header}')]` );
            this.page.locator(`//label/*[contains(text(),'${header}')]` ).click();
            console.log("\n\nValue is ", value);
            console.log(`/label/*[contains(text(),'${value}')]` );
            this.page.locator(`//label/*[contains(text(),'${value}')]` ).click();
     
        
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickCheckBoxOptions:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach as readable text
            }
            throw error;
        }
    }

async clickExpandButton() {
        try {
            await this.ElementPage.elementPageToggleButton.click();
        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in clickExpandButton:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach as readable text
            }
            throw error;
        }
    }

}