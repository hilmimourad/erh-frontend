import { ErhFrontendPage } from './app.po';

describe('erh-frontend App', () => {
  let page: ErhFrontendPage;

  beforeEach(() => {
    page = new ErhFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
