import { makeCharacter } from '@test/factories/character';
import { InMemoryCharacterRepository } from '@test/repositories/in-memory/character';
import { CreateCharacter } from './index';

describe('Create Character', () => {
  const characterRepository = new InMemoryCharacterRepository();
  const createCharacter = new CreateCharacter(characterRepository);

  it('should be able to create a new `Character`', async () => {
    const character = makeCharacter();

    expect(async () => {
      await createCharacter.execute({
        character,
      });
    }).toBeTruthy();
  });
});
