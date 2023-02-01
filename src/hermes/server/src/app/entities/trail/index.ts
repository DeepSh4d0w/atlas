export interface TrailProps {
  name: string;
  byname?: string | null;
  description?: string | null;
}

export class Trail {
  private props: TrailProps;

  constructor(props: TrailProps) {
    this.props = props;
  }

  public get name() {
    return this.props.byname ?? this.props.name;
  }

  public get description() {
    return this.props.description;
  }
}
