import { Character } from '@app/entities/character';

export abstract class CharacterRepository {
  abstract create(character: Character): Promise<void>;
  abstract findById(characterId: string): Promise<Character | null>;
  abstract update(character: Character): Promise<void>;
}
