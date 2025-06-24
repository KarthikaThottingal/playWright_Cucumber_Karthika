import { apiHomePage } from '../Pages/apiHomePage.js';
import { expect } from '@playwright/test';

export class apiUIActions {
    constructor(page) {
        this.page = page;
        this.attach = null;
        this.apiHomePage = new apiHomePage(page);
    }

    async validateUiWithAPI(responseBody) {
        try {
            console.log("IN Function");
            await this.apiHomePage.apiHomePageGET.scrollIntoViewIfNeeded();
            await this.apiHomePage.apiHomePageGET.click();
            const statusCode = await this.apiHomePage.apiHomePageGETResponse.textContent();
            await expect(statusCode).toEqual("200");
            const uiText = await this.apiHomePage.apiHomePageResBody.textContent();
            const actualResponseBody = JSON.parse(uiText);

            console.log("API Response is ", responseBody);
            console.log("Value from UI is", actualResponseBody);

            expect(responseBody).toEqual(actualResponseBody);

        } catch (error) {
            console.log("\n\n❌ Failed Message:", error.stack || error.message);
            if (this.attach) {
                const message = `❌ Error in validateUiWithAPI:\n\n${error.stack || error.message}`;
                await this.attach(message, 'text/plain');  // Attach readable text
            }
            throw error; // So AfterStep takes screenshot
        }
    }
 
 async validateUiWithAPISingleUser(responseBody) {
            try {
                console.log("IN Single User Function");
                await this.apiHomePage.apiHomePageGETSingleUser.scrollIntoViewIfNeeded();
                await expect(this.apiHomePage.apiHomePageGET).toBeVisible();
                await this.apiHomePage.apiHomePageGETSingleUser.click();
                const statusCode = await this.apiHomePage.apiHomePageGETResponse.textContent();
                await expect(statusCode).toEqual("200");
                await expect(this.apiHomePage.apiHomePageResBody).toBeVisible();
                const uiText = await this.apiHomePage.apiHomePageResBody.textContent();
                console.log("\nUI Text is ",uiText);
                const actualResponseBody = JSON.parse(uiText);

                console.log("API Response is ", responseBody);
                console.log("Value from UI is", actualResponseBody);

                expect(responseBody).toEqual(actualResponseBody);

            } catch (error) {
                console.log("\n\n❌ Failed Message:", error.stack || error.message);
                if (this.attach) {
                    const message = `❌ Error in validateUiWithAPISingleUser:\n\n${error.stack || error.message}`;
                    await this.attach(message, 'text/plain');  // Attach readable text
                }
                throw error; // So AfterStep takes screenshot
            }


        }
    }
