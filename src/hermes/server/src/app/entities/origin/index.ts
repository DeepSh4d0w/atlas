import { capitalizeWords } from '@helpers/utils';

export interface OriginProps {
  name: string;
  byname?: string | null;
  description?: string | null;
}

export class Origin {
  private props: OriginProps;

  private validateOriginName(name: string) {
    if (name.trim() === '') {
      return null;
    }

    return capitalizeWords(name);
  }

  constructor(props: OriginProps) {
    this.props = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      name: this.validateOriginName(props.name)!,
      byname: this.validateOriginName(props.byname ?? ''),
    };
  }

  public get name() {
    return this.props.byname ?? this.props.name;
  }

  public get description() {
    return this.props.description;
  }
}
