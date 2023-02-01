import { AttributeProps } from '@app/entities/attribute';
import { Character, CharacterProps } from '@app/entities/character';
import { GradeProps } from '@app/entities/grade';
import { HealthStatusProps } from '@app/entities/health_status';
import { OriginProps } from '@app/entities/origin';
import { ParanormalExposureLevelProps } from '@app/entities/paranormal_exposure_level';
import { SkillProps } from '@app/entities/skill';
import { TrailProps } from '@app/entities/trail';
import { Replace } from '@helpers/replace';

type Override = Partial<
  Replace<
    CharacterProps,
    {
      paranormalExposureLevel?: ParanormalExposureLevelProps;
      origin: OriginProps;
      grade: GradeProps;
      trail?: TrailProps | null;
      healthStatus: HealthStatusProps;
      attributes: AttributeProps[];
      skills: SkillProps[];
      createdAt?: Date;
    }
  >
>;

export function makeCharacter(override: Override = {}) {
  return new Character({
    playerName: 'Deepsh',
    characterName: 'Glumb Blumb',
    origin: { name: 'Investigador' },
    grade: { name: 'Especialista' },
    paranormalExposureLevel: { percentage: '5%' },
    attributes: [
      { name: 'Agilidade', value: 1 },
      { name: 'Força', value: 2 },
      { name: 'Intelecto', value: 3 },
      { name: 'Presença', value: 1 },
      { name: 'Vigor', value: 2 },
    ],
    skills: [
      { name: 'Crime', value: 5 },
      { name: 'Diplomacia', value: 5 },
      { name: 'Enganação', value: 5 },
      { name: 'Fortitude', value: 5 },
      { name: 'Furtividade', value: 5 },
      { name: 'Intuição', value: 5 },
      { name: 'Investigação', value: 5 },
      { name: 'Luta', value: 5 },
      { name: 'Percepção', value: 5 },
      { name: 'Reflexos', value: 5 },
      { name: 'Tecnologia', value: 5 },
      { name: 'Vontade', value: 5 },
    ],
    healthStatus: {
      hitPoints: {
        amount: 16,
        current: 16,
      },
      effortPoints: {
        amount: 3,
        current: 3,
      },
      sanity: {
        amount: 16,
        current: 16,
      },
    },
    ...override,
  });
}
