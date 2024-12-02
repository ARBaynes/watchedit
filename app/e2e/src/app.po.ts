import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
  // ---------------------------------
  getHeading(): Promise<string> {
    return element(by.css('app-root h2')).get(1).getText() as Promise<string>;
  }
  getGrid(): Promise<string> {
    return element(by.id('programmes__grid')).getText() as Promise<string>;
  }
  getCard(): Promise<string> {
    return element(by.css('programmes__grid__item')).getText() as Promise<string>;
  }
}
