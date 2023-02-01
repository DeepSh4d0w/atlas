import { makeCharacter } from '@test/factories/character';
import { InMemoryCharacterRepository } from '@test/repositories/in-memory/character';
import { UpdateCharacter } from './';

describe('Update Character', () => {
  it('should be able to update new details from character', async () => {
    const characterRepository = new InMemoryCharacterRepository();
    const setCharacter = new UpdateCharacter(characterRepository);

    const character = makeCharacter();

    await characterRepository.create(character);

    expect(async () => {
      await setCharacter.execute({
        character,
      });
    }).not.toThrowError();
  });

  it('should not be able to update new details to a character that does not exist', async () => {
    const characterRepository = new InMemoryCharacterRepository();
    const setCharacter = new UpdateCharacter(characterRepository);

    const character = makeCharacter();

    expect(() => {
      return setCharacter.execute({
        character,
      });
    }).rejects.toThrowError();
  });
});
