import { AttributeProps } from '@app/entities/attribute';
import { Character } from '@app/entities/character';
import { HealthStatusProps } from '@app/entities/health_status';
import { SkillProps } from '@app/entities/skill';
import { CharacterRepository } from '@app/repositories/character';
import { CharacterNotFound } from '@app/use-cases/errors/character/not-found';
import { Replace } from '@helpers/replace';
import { Injectable } from '@nestjs/common';

interface GetCharacterRequest {
  characterId: string;
}

interface GetCharacterResponse {
  character: Replace<
    Partial<Character>,
    {
      healthStatus: HealthStatusProps;
      attributes: AttributeProps[];
      skills: SkillProps[];
    }
  >;
}

@Injectable()
export class GetCharacter {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(request: GetCharacterRequest): Promise<GetCharacterResponse> {
    const data = request;

    const character = await this.characterRepository.findById(data.characterId);

    if (!character) {
      throw new CharacterNotFound();
    }

    return {
      character: {
        id: character.id,
        playerName: character.playerName,
        characterName: character.characterName,
        paranormalExposureLevel: character.paranormalExposureLevel,
        origin: character.origin,
        grade: character.grade,
        trail: character.trail,
        attributes: character.attributes,
        skills: character.skills,
        healthStatus: character.healthStatus,
        createdAt: character.createdAt,
        updatedAt: character.updatedAt,
      },
    };
  }
}
