export class loginpage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("//input[@name='username']");
        this.password = page.locator("//input[@name='password']");
        this.button = page.locator("//button[@type= 'submit']");
    }
}