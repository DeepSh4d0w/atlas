import { makeCharacter } from '@test/factories/character';

describe('Character', () => {
  it('should be able to create a new `Character`', () => {
    const character = makeCharacter();

    expect(character).toBeTruthy();
    expect(character.trail).toEqual(null);
  });
});
