import { ViewPagesModule } from './view-pages.module';

describe('ViewPagesModule', () => {
  let viewPagesModule: ViewPagesModule;

  beforeEach(() => {
    viewPagesModule = new ViewPagesModule();
  });

  it('should create an instance', () => {
    expect(viewPagesModule).toBeTruthy();
  });
});
