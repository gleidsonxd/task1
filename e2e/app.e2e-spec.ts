import { Task1Page } from './app.po';

describe('task1 App', () => {
  let page: Task1Page;

  beforeEach(() => {
    page = new Task1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
