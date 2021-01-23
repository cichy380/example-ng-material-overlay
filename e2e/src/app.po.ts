import {$, browser, ElementFinder} from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getButtonOverlayOrigin(): ElementFinder {
    return $('button[cdkoverlayorigin]');
  }

  getOverlayPane(): ElementFinder {
    return $('.cdk-overlay-pane');
  }

  getOverlayBackdrop(): ElementFinder {
    return $('.cdk-overlay-backdrop');
  }
}
