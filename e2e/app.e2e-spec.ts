import { Ng4CliToUniversalPage } from './app.po';

describe('ng4-cli-to-universal App', () => {
  let page: Ng4CliToUniversalPage;

  beforeEach(() => {
    page = new Ng4CliToUniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
