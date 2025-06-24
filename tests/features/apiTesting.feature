Feature: API Testing with integration to UI

Background: Loading Test Data
Given User load the test Data


Scenario: Validate GET- List Users service
Given User sent Get LIST USERS service request
Then User validate the response
Then User check the API response with the one in UI

Scenario: Validate POST - Create Users service
Given User sent Post Create User service request
Then User validate the response - Create User
Then User check the API response with the one in UI - Create User

@APITesting
Scenario: Validate GET - Single Users service
Given User sent Get Single User service request
Then User validate the response - Single User
Then User check the API response with the one in UI - Single User




