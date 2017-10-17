import { NgChartsPage } from './app.po';

describe('ngz-charts App', () => {
  let page: NgChartsPage;

  beforeEach(() => {
    page = new NgChartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
