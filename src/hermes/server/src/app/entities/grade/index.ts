import { capitalizeWords } from '@helpers/utils';

export interface GradeProps {
  name: string;
  byname?: string | null;
  description?: string | null;
}

export class Grade {
  private props: GradeProps;

  private validateGradeName(name: string) {
    if (name.trim() === '') {
      return null;
    }

    return capitalizeWords(name);
  }

  constructor(props: GradeProps) {
    this.props = props;
  }

  public get name() {
    return this.props.byname ?? this.props.name;
  }

  public get description() {
    return this.props.description;
  }
}
