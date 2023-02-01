import { Replace } from '@helpers/replace';
import { capitalizeWords, parsePercentageToNumber } from '@helpers/utils';
import { randomUUID } from 'node:crypto';
import { Attribute, AttributeProps } from '../attribute';
import { Grade, GradeProps } from '../grade';
import { HealthStatus, HealthStatusProps } from '../health_status';
import { Origin, OriginProps } from '../origin';
import {
  ParanormalExposureLevel,
  // eslint-disable-next-line prettier/prettier
  ParanormalExposureLevelProps
} from '../paranormal_exposure_level';
import { Skill, SkillProps } from '../skill';
import { Trail, TrailProps } from '../trail';

export interface CharacterProps {
  playerName: string;
  characterName: string;
  paranormalExposureLevel: ParanormalExposureLevel;
  origin: Origin;
  grade: Grade;
  trail?: Trail | null;
  healthStatus: HealthStatus;
  attributes: Attribute[];
  skills: Skill[];
  createdAt: Date;
  updatedAt?: Date | null;
}

const POINTS_TO_DISTRIBUTE = {
  UP_TO_20_PERCENT: 4,
  UP_TO_50_PERCENT: 5,
  UP_TO_80_PERCENT: 6,
  UP_TO_95_PERCENT: 7,
};

const MAX_TO_DISTRIBUTE = {
  BEGINNER: 3,
  VETERAN: 5,
};

export class Character {
  private _id: string;
  private props: CharacterProps;

  private validateName(name: string) {
    if (name.trim() === '') {
      throw new Error('O nome é obrigatório');
    }

    return capitalizeWords(name.trim());
  }

  private validateAttributeDistribution(
    attributes: Attribute[],
    toDistribute: number,
    maxPoints: number,
  ) {
    if (attributes.length < 5 || attributes.length > 5) {
      throw new Error('Quantidade de atributos inesperado');
    }

    let distributionOfPoints = 0;

    attributes.forEach((attribute) => {
      if (attribute.value > maxPoints) {
        throw new Error(
          `${attribute.name} excede o total de pontos permitidos`,
        );
      }

      if (attribute.value <= 1) {
        if (attribute.value === 1) {
          distributionOfPoints = distributionOfPoints;
        } else if (attribute.value === 0) {
          distributionOfPoints = distributionOfPoints - 1;
        }
      } else {
        distributionOfPoints += attribute.value - 1;
      }
    });

    if (
      distributionOfPoints < toDistribute ||
      distributionOfPoints > toDistribute
    ) {
      throw new Error('Pontos distribuídos de forma errada');
    }

    return attributes;
  }

  constructor(
    props: Replace<
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
    >,
    id?: string,
  ) {
    const isAllowedTrail =
      parsePercentageToNumber(
        props.paranormalExposureLevel?.percentage ?? '5%',
      ) >= 10
        ? true
        : null;

    const toDistribute = () => {
      const percentage = parsePercentageToNumber(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
        props.paranormalExposureLevel?.percentage!,
      );

      if (percentage < 20) {
        return POINTS_TO_DISTRIBUTE.UP_TO_20_PERCENT;
      } else if (percentage < 50) {
        return POINTS_TO_DISTRIBUTE.UP_TO_50_PERCENT;
      } else if (percentage < 80) {
        return POINTS_TO_DISTRIBUTE.UP_TO_80_PERCENT;
      } else {
        return POINTS_TO_DISTRIBUTE.UP_TO_95_PERCENT;
      }
    };

    const maxPoints = () => {
      const percentage = parsePercentageToNumber(
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
        props.paranormalExposureLevel?.percentage!,
      );

      if (percentage < 10) {
        return MAX_TO_DISTRIBUTE.BEGINNER;
      } else {
        return MAX_TO_DISTRIBUTE.VETERAN;
      }
    };

    const attributes = this.validateAttributeDistribution(
      props.attributes.map((attribute) => {
        return new Attribute(attribute);
      }),
      toDistribute(),
      maxPoints(),
    );

    const skills = props.skills.map((skill) => {
      return new Skill(skill);
    });

    this.props = {
      ...props,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      playerName: this.validateName(props.playerName),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      characterName: this.validateName(props.characterName),
      paranormalExposureLevel: new ParanormalExposureLevel(
        props.paranormalExposureLevel ?? '5%',
      ),
      origin: new Origin(props.origin),
      grade: new Grade(props.grade),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      trail: isAllowedTrail && new Trail(props.trail!),
      attributes,
      skills,
      healthStatus: new HealthStatus(props.healthStatus),
      createdAt: props.createdAt ?? new Date(),
    };

    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get playerName() {
    return this.props.playerName;
  }

  public get characterName() {
    return this.props.characterName;
  }

  public get paranormalExposureLevel() {
    return this.props.paranormalExposureLevel;
  }

  public get origin() {
    return this.props.origin;
  }

  public get grade() {
    return this.props.grade;
  }

  public get trail() {
    return this.props.trail;
  }

  public get healthStatus() {
    return this.props.healthStatus;
  }

  public get attributes() {
    return this.props.attributes;
  }

  public get skills() {
    return this.props.skills;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
