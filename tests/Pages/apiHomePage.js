export class apiHomePage {
    constructor(page) {
        // API Homepage
        this.apiHomePageGET = page.locator("//a[text()  = ' List users ']");
        this.apiHomePageGETResponse = page.locator("//span[@class = 'response-code'  and text() ='200']");
        this.apiHomePageResBody = page.locator("//pre[@data-key = 'output-response']");


        //Single User
        this.apiHomePageGETSingleUser = page.locator("//a[text() = ' Single user ']");
    }
}