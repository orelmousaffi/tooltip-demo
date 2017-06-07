import { TooltipDemoPage } from './app.po';

describe('tooltip-demo App', () => {
  let page: TooltipDemoPage;

  beforeEach(() => {
    page = new TooltipDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
