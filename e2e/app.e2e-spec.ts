import { CRSPage } from './app.po';

describe('crs App', function() {
  let page: CRSPage;

  beforeEach(() => {
    page = new CRSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
