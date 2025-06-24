export class elementpage{
    constructor(page){
        // TextBox
        this.elementPageTextBox = page.locator("//span[@class ='text'  and  text() = 'Text Box']");
        this.elementPageTextBoxHeader = page.locator("//h1[text() = 'Text Box']");
        this.elementPageFullName= page.locator("//input[@id = 'userName']");
        this.elementPageEmail= page.locator("//input[@id = 'userEmail']");
        this.elementPageCurrentAddress= page.locator("//*[@id = 'currentAddress']");
        this.elementPagePermanentAddress= page.locator("//*[@id = 'permanentAddress']");
        this.elementPageButton = page.locator("//*[@id = 'submit']");

        //checkBox
        this.elementPageCheckBox = page.locator("//span[@class ='text'  and  text() = 'Check Box']");
        this.elementPageCheckBoxHearder = page.locator("//h1[text() ='Check Box' ]");
        this.elementPagePlusButton = page.locator("//button[@class = 'rct-option rct-option-expand-all']");
        this.elementPageToggleButton = page.locator("(//button[@type='button' and @title= 'Toggle' ])[3]");
             
        // ElementPage    
        // RadioButton  
        this.elementPageRadioButton = page.locator("//span[@class ='text'  and  text() = 'Radio Button']");
        this.RadioButtonHeader = page.locator("//h1[text() = 'Radio Button']");
        this.RadioButtonYes = page.locator("//label[@class = 'custom-control-label' and @for = 'yesRadio']");
        this.YesVerifiedText = page.locator("//p[@class = 'mt-3' and text()= 'You have selected ']/span[@class = 'text-success' and text() = 'Yes']");
        this.RadioButtonNo = page.locator("//label[@class = 'custom-control-label disabled' and @for = 'noRadio']");
        this.RadioButtonImpressive = page.locator("//label[@class = 'custom-control-label' and @for = 'impressiveRadio']");
        this.ImpressiveVerifiedText = page.locator("//p[@class = 'mt-3' and text()= 'You have selected ']/span[@class = 'text-success' and text() = 'Impressive']");

        this.elementPageWebTables = page.locator("//span[@class ='text'  and  text() = 'Web Tables']");
        this.elementPageButtons = page.locator("//span[@class ='text'  and  text() = 'Buttons']");
        this.elementPageLinks = page.locator("//span[@class ='text'  and  text() = 'Links']");
        this.elementPageBrokenLinks = page.locator("//span[@class ='text'  and  text() = 'Broken Links - Images']");
        this.elementPageUploadAndDownload = page.locator("//span[@class ='text'  and  text() = 'Upload and Download']");
        this.elementPageDynamicProperties = page.locator("//span[@class ='text'  and  text() = 'Dynamic Properties']");
    }
}