Feature: UI validation for OrangeHRM

Scenario: For OrangeHRM
Given User navigate to url
Then User login with username and Password

@login
Scenario: Fill the first form
Then User click on  Admin
When In System users, enter username and search
Then You should get one record for this  username
Then User click edit in record
Then user change the employee name

@InputCheckBox
Scenario Outline: Check the InputCheckBox
Given User navigate to demourl
When User click on Elements
Then User click on CheckBox
Then User click on plus Button
Then User check the boxes <Header> and then <Value>
Then User click on expand button after Desktop

Examples:
  | Header    | Value           |
  | Downloads | Excel File.doc  |
  | Documents | Classified      |

@InputWebTables
Scenario: Check and explore WebTables
Given User navigate to demourl
When User click on Elements
Then User click on Web Tables
Then User click on add Button
Then User Enter Data in the registration form
Then User click on Submit button
Then User Delete a row in the table by clicking on delete button
Then User Edit a row by clicking on the edit button
Then User  click on the rows arrow button  and choose 25 rows option


@InputTextBox

Scenario: Check the Input field and the TetxBox 
Given User navigate to demourl
When User click on Elements
Then User click on TextBox
Then User fill the Full Name, Email, Current Address and Permanent Address
Then User click on Submit Button

@InputRadioButton

Scenario: Check the Radio Buttons
Given User navigate to demourl
When User click on Elements
Then User click on RadioButtons
Then User User click Yes option and check the display message
Then User click on Impressive  and check the display message
Then User try to click on No option


