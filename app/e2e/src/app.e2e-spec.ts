import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Watched it!');
  });

  it('should follow the given test case', () => {
    /**
     *  Load page
     *  Ensure the list of programmes heading is displayed
     *  Ensure headings are displayed.
     *  Ensure there are three rows displayed.
     *  For each row, ensure the data displayed matches what was entered when it was created:
     * ◦ Poster
     * ◦ Name
     * ◦ Genre
     * ◦ Rating
     * ◦ Comments
     *  Ensure the action buttons are displayed.
     */
    page.navigateTo();
    expect(page.getHeading).toEqual('List of Programmes');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
