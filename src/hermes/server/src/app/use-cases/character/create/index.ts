import { Character } from '@app/entities/character';
import { CharacterRepository } from '@app/repositories/character';
import { Injectable } from '@nestjs/common';

interface CreateCharacterRequest {
  character: Character;
}

interface CreateCharacterResponse {
  character: Character;
}

@Injectable()
export class CreateCharacter {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(
    request: CreateCharacterRequest,
  ): Promise<CreateCharacterResponse> {
    const data = request;

    await this.characterRepository.create(data.character);

    return data;
  }
}
