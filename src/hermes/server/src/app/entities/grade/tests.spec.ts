import { Grade } from './index';

describe('Grade', () => {
  it('should be able to create a new `Grade`', () => {
    const grade = new Grade({
      name: 'Combatente',
    });

    expect(grade).toBeTruthy();
  });
});
