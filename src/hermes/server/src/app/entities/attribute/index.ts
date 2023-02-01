export interface AttributeProps {
  name: string;
  byname?: string | null;
  description?: string | null;
  value: number;
}

export class Attribute {
  private props: AttributeProps;

  constructor(props: AttributeProps) {
    this.props = props;
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
