import dotenv from 'dotenv'
import { readExcelData } from '../../tests/utilities/readExcel.js';
import { apiUIActions } from '../pageMethods/apiUIActions.js';
import { Given, Then, } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { json } from 'stream/consumers';
import { error } from 'console';
dotenv.config();

const testDataSheet = process.env.DATAPATH;
const sheet = process.env.SHEET;

let inputData = null;
let selectedData = null;
let apiResponse = null;
let responseBody = null;
let expectedBody = null;

Given('User load the test Data', async function () {
    inputData = await readExcelData(testDataSheet, sheet);
});

Given('User sent Get LIST USERS service request', async function () {
    selectedData = inputData.find(row => row.Service_Name === 'LIST USERS');
    if (!selectedData) { throw new Error("No test data for service LIST USER"); }
    console.log("URI is ", selectedData.URI);
    const url = `${process.env.APIUIURL}${selectedData.URI}`;
    console.log("url is ", url);

    // Sent API Request

    try {
        apiResponse = await this.request.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.APIKEY}`,  // fixed quotes here
                'Content-Type': 'application/json'               // fixed quotes here
            }
        });
    } catch (err) {
        console.error("API Request failed :", err.message);
        throw err;
    }
});


Then('User validate the response', async function () {

    responseBody = await apiResponse.json();
    expectedBody = JSON.parse(selectedData.Response_Payload);

    console.log("API Response is ", responseBody);
    console.log("Excel read value is", expectedBody);

    expect(apiResponse.status()).toBe(200);
    expect(responseBody).toEqual(expectedBody);
});

Then('User check the API response with the one in UI', { timeout: 10000 }, async function () {
    console.log(" In UI API Validation");
    await this.page.goto(process.env.APIUIURL);
    const responseBody = await apiResponse.json();
    await this.apiUIActions_Object.validateUiWithAPI(responseBody);
});

Given('User sent Get Single User service request', async function () {

    selectedData = inputData.find(row => row.Service_Name === 'SINGLE USER');
    if (!selectedData) { throw new Error("No test data for service Single User"); }
    console.log("URI is ", selectedData.URI);
    const url = `${process.env.APIUIURL}${selectedData.URI}`;
    console.log("url is ", url);

    // Sent API Request

    try {
        apiResponse = null;
        apiResponse = await this.request.get(url);
        console.log("\n\n apiResponse is", apiResponse.json());
    } catch (err) {
        console.error("API Request failed :", err.message);
        throw err;
    }
});

Then('User validate the response - Single User', async function () {
    responseBody = null;
    responseBody = await apiResponse.json();
    expectedBody = JSON.parse(selectedData.Response_Payload);

    console.log("\n\n Response Body ", responseBody);
    console.log("\n\n expectedBody  ", expectedBody);

    expect(apiResponse.status()).toBe(200);
    expect(responseBody).toEqual(expectedBody);

});


Then('User check the API response with the one in UI - Single User', { timeout: 10000 }, async function () {
    console.log(" In UI API Validation");
    await this.page.goto(process.env.APIUIURL);
    const responseBody = await apiResponse.json();
    await this.apiUIActions_Object.validateUiWithAPISingleUser(responseBody);
});

Given('User sent Post Create User service request', async function () {
    selectedData = inputData.find(row => row.Service_Name === 'CREATE USER');

    if(!selectedData) {throw new error("No Data for this service")}
    const url = `${process.env.APIUIURL}${selectedData.URI}`;
    const data = `${selectedData.Request_Payload}`;
    const jsonData  = JSON.parse(selectedData.Request_Payload);

    console.log("\n\nURL is ", url);
    console.log("\n\nInput data is ",jsonData );

    apiResponse = await this.request.post(url,{
        data: jsonData,
        headers: {
                'Authorization': `Bearer ${process.env.APIKEY}`,  // fixed quotes here
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'               // fixed quotes here
            }
        });
    console.log(" \nAPI Response is ", apiResponse);

});

Then('User validate the response - Create User', async function () {
    
});


Then('User check the API response with the one in UI - Create User', async function () {

});