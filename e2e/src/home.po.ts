import { browser, by, element } from 'protractor';

export class Home {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }
}
