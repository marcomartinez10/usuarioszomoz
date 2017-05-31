import { UsuarioszomozPage } from './app.po';

describe('usuarioszomoz App', function() {
  let page: UsuarioszomozPage;

  beforeEach(() => {
    page = new UsuarioszomozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
