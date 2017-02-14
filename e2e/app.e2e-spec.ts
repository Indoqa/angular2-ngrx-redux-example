import { AngularSpikePage } from './app.po';

describe('angular-spike App', function() {
  let page: AngularSpikePage;

  beforeEach(() => {
    page = new AngularSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
