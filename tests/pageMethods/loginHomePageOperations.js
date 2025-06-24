import { loginpage } from '../Pages/loginpage.js';
import { homepage } from '../Pages/homepage.js';
import {expect} from '@playwright/test';

export class loginHomePageOperations {
    constructor(page) {
        this.page = page;
        this.loginPage = new loginpage(page);
        this.homepage = new homepage(page);
    }

    async login(username, password) {
        await this.loginPage.userName.fill(username);
        await this.loginPage.password.fill(password);
        await this.loginPage.button.click();

    }

    async clickAdmin() {
        await this.homepage.Admin.click();
        await expect(this.homepage.SystemUser).toBeVisible();

    }

    async searchUsername(username) {
        await this.homepage.enterUsernameField.fill(username);
        await this.homepage.search.click();
        await expect(this.homepage.recordFind).toBeVisible();
    }

    async recordValidation(){
        
        await expect(this.homepage.username).toBeVisible();
        await expect(this.homepage.userRole).toBeVisible();
        await expect(this.homepage.employeeName).toBeVisible();
        await expect(this.homepage.status).toBeVisible();
        await expect(this.homepage.actions).toBeVisible();

        // Validate the record with test

        await expect(this.homepage.recordUsername).toBeVisible();
        await expect(this.homepage.recordUserRole).toBeVisible();
        await expect(this.homepage.recordEmployeeName).toBeVisible();
        await expect(this.homepage.recordStatus).toBeVisible();
    }

    async clickEditRecord()
    {
        await expect(this.homepage.editOption).toBeVisible();
        await this.homepage.editOption.click();

    }

}
