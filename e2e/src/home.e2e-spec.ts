import { Home } from './home.po';

describe('Home', () => {
  let page: Home;

  beforeEach(() => {
    page = new Home();
  });

  it('should display correct title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pig Latin Translator');
  });
});
