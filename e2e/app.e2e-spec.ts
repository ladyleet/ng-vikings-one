import { NgVikingsOnePage } from './app.po';

describe('ng-vikings-one App', function() {
  let page: NgVikingsOnePage;

  beforeEach(() => {
    page = new NgVikingsOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
