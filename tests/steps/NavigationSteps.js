import { Given} from "@cucumber/cucumber";
import dotenv from 'dotenv' ;
dotenv.config();

Given('User navigate to url', async  function () {
console.log("Karthika Testing in Given ");
console.log("navigate to url :", process.env.URL);
await this.page.goto(process.env.URL);
 });