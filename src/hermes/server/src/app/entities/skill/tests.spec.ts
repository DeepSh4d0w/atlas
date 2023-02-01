import { Skill } from './index';
describe('Skill', () => {
  it('should be able to create a new `Skill`', () => {
    const skill = new Skill({
      name: 'Investigação',
      value: +5,
    });

    expect(skill).toBeTruthy();
  });
});
