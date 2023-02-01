import { Origin } from './index';

describe('Origin', () => {
  it('should be able to create a new `Origin`', () => {
    const origin = new Origin({
      name: 'investigador',
    });

    expect(origin).toBeTruthy();
    expect(origin.name).toEqual('Investigador');
  });
});
