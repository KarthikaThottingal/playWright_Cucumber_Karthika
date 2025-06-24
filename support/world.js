import { setWorldConstructor, World } from '@cucumber/cucumber';

class CustomWorld extends World {
  constructor(options) {
    super(options);
    console.log("Custom world created");
    this.browser = null;
    this.context = null;
    this.page = null;
    this.request = null;
    this.loginhomePageOperations_Object = null;
  }
}
setWorldConstructor(CustomWorld);