import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should not display ConnectedOverlay without any action', async () => {
    await page.navigateTo();

    expect(await page.getOverlayPane().isPresent()).toBeFalsy();
  });

  it('should display ConnectedOverlayPane after button click', async () => {
    await page.navigateTo();

    expect(await page.getOverlayPane().isPresent()).toBeFalsy();

    await page.getButtonOverlayOrigin().click();
    expect(await page.getOverlayPane().isPresent()).toBeTruthy();
  });

  it('should hide ConnectedOverlayPane after OverlayBackdrop click', async () => {
    await page.navigateTo();

    expect(await page.getOverlayBackdrop().isPresent()).toBeFalsy();

    await page.getButtonOverlayOrigin().click();
    expect(await page.getOverlayBackdrop().isPresent()).toBeTruthy();

    await page.getOverlayBackdrop().click();
    expect(await page.getOverlayPane().isPresent()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
