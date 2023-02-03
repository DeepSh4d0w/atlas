import { randomUUID } from 'crypto';

export interface SkillProps {
  name: string;
  byname?: string | null;
  description?: string | null;
  value: number;
}

export class Skill {
  private _id: string;
  private props: SkillProps;

  constructor(props: SkillProps, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.byname ?? this.props.name;
  }

  public get description() {
    return this.props.description;
  }

  public get value() {
    return this.props.value;
  }
}
