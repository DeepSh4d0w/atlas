import { Attribute } from './index';
describe('Attribute', () => {
  it('should be able to create a new `Attribute`', () => {
    const attribute = new Attribute({
      name: 'Agilidade',
      value: 2,
    });

    expect(attribute).toBeTruthy();
  });
});
