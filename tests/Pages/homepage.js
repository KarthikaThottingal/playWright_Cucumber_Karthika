export class homepage {
    constructor(page) {

        // OrangeHRM
        this.page = page;
        this.Admin = page.locator("//div[@id='app']//div[@class = 'oxd-sidepanel-body']//span[text()='Admin']");
        this.SystemUser = page.locator("//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title']");
        this.enterUsernameField = page.locator("//label[contains(text(), 'Username')]//following::input[@class='oxd-input oxd-input--active']");
        this.search = page.locator("//button[@type='submit']");
        this.recordFind= page.getByText('(1) Record Found'); // need to validate text
        this.username=page.getByRole('columnheader', { name: 'Username ' });
        this.userRole = page.getByRole('columnheader', { name: 'User Role ' });
        this.employeeName = page.getByRole('columnheader', { name: 'Employee Name ' });
        this.status= page.getByRole('columnheader', { name: 'Status ' });
        this.actions = page.getByRole('columnheader', { name: 'Actions' });
        //validate 1 record
        this.recordUsername = page.locator("//div[@class = 'oxd-table-row oxd-table-row--with-border' ]/div[2]/div[text()='Admin']");
        this.recordUserRole = page.locator("//div[@class = 'oxd-table-row oxd-table-row--with-border' ]/div[3]/div[text()='Admin']");
        this.recordEmployeeName = page.locator("//div[text()='Vatta Pichal']");
        this.recordStatus = page.locator("//div[text()='Enabled']");
        this.editOption = page.locator("//button[@type='button' and  @class = 'oxd-icon-button oxd-table-cell-action-space']//i[@class ='oxd-icon bi-pencil-fill' ]");

        //demoQA
        this.elements = page.getByText("Elements");
        this.forms = page.getByText("Forms");
        this.AlertsFrameWindows = page.getByText("Alerts, Frame & Windows");
        this.widgets = page.getByText("Widgets");
        this.interactions = page.getByText("Interactions");
        this.BookStoreApplication = page.getByText("Book Store Application");
    }
}