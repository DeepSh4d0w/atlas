import { makeCharacter } from '@test/factories/character';
import { InMemoryCharacterRepository } from '@test/repositories/in-memory/character';
import { GetCharacter } from './';
import { CharacterNotFound } from './../../errors/character/not-found';

describe('Get Character', () => {
  const characterRepository = new InMemoryCharacterRepository();
  const getCharacter = new GetCharacter(characterRepository);

  it('should be able to get character', async () => {
    const rawCharacter = makeCharacter();

    await characterRepository.create(rawCharacter);

    const { character } = await getCharacter.execute({
      characterId: rawCharacter.id,
    });

    expect(character).toBeTruthy();
  });

  it('should not be able to get character that does not exists', async () => {
    const rawCharacter = makeCharacter();

    expect(() => {
      return getCharacter.execute({
        characterId: rawCharacter.id,
      });
    }).rejects.toThrow(CharacterNotFound);
  });
});
