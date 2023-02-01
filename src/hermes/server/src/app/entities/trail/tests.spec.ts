import { Trail } from './index';
describe('Trail', () => {
  it('should be able to create a new `Trail`', () => {
    const trail = new Trail({
      name: 'Negociador',
    });

    expect(trail).toBeTruthy();
  });
});
