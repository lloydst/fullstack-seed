import { MeanAppSeedPage } from './app.po';

describe('mean-app-seed App', () => {
  let page: MeanAppSeedPage;

  beforeEach(() => {
    page = new MeanAppSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
