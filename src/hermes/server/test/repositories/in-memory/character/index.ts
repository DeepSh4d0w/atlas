import { Character } from '@app/entities/character';
import { CharacterRepository } from '@app/repositories/character';

export class InMemoryCharacterRepository implements CharacterRepository {
  public characters: Character[] = [];

  async create(character: Character): Promise<void> {
    this.characters.push(character);
  }

  async findById(characterId: string): Promise<Character | null> {
    const character = this.characters.find((item) => item.id === characterId);

    if (!character) {
      return null;
    }

    return character;
  }

  async update(character: Character): Promise<void> {
    const characterIndex = this.characters.findIndex(
      (item) => item.id === character.id,
    );

    if (characterIndex >= 0) {
      this.characters[characterIndex] = character;
    }
  }
}
