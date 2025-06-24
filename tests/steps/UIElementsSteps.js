import { Given, When, Then } from '@cucumber/cucumber';
import { loginHomePageOperations } from '../pageMethods/loginHomePageOperations.js';
import dotenv from 'dotenv';


dotenv.config();
const userNameTest = process.env.USERNAMETESTING;
const passWord = process.env.PASSWORD;

When('User login with username and Password', async function () {
    console.log("\n\n Second step");
    this.loginhomePageOperations_Object = new loginHomePageOperations(this.page);
    console.log("\n\n username :", userNameTest); console.log("\n\npassword :", passWord);
    await this.loginhomePageOperations_Object.login(userNameTest, passWord);
});

Then('User click on  Admin', async function () {
    console.log("\n\n Third step");
    await this.loginhomePageOperations_Object.clickAdmin();
});

When('In System users, enter username and search', async function () {
    console.log("\n\n Fourth Step");
    await this.loginhomePageOperations_Object.searchUsername(userNameTest);

});

Then('You should get one record for this  username', async function () {
    console.log("\n\n Fifth Step");
    await this.loginhomePageOperations_Object.recordValidation();
});

Then('User click edit in record', async function () {
    console.log("\n\n  Sixth Step");
    await this.loginhomePageOperations_Object.clickEditRecord();

});

Then('user change the employee name', async function () {

});
