import { Character } from '@app/entities/character';
import { CharacterRepository } from '@app/repositories/character';
import { CharacterNotFound } from '@app/use-cases/errors/character/not-found';
import { Injectable } from '@nestjs/common';

interface UpdateCharacterRequest {
  character: Character;
}

@Injectable()
export class UpdateCharacter {
  constructor(private charactersRepository: CharacterRepository) {}

  async execute(request: UpdateCharacterRequest): Promise<void> {
    const { character } = request;

    const rawCharacter = await this.charactersRepository.findById(character.id);

    if (!rawCharacter) {
      throw new CharacterNotFound();
    }

    await this.charactersRepository.update(
      new Character(
        {
          playerName: character.playerName,
          characterName: character.characterName,
          origin: character.origin,
          grade: character.grade,
          trail: character.trail,
          healthStatus: character.healthStatus,
          paranormalExposureLevel: {
            percentage: character.paranormalExposureLevel.percentage,
          },
          attributes: character.attributes,
          skills: character.skills,
          createdAt: rawCharacter.createdAt,
          updatedAt: new Date(),
        },
        character.id,
      ),
    );
  }
}
