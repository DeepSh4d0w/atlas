export interface HealthPointsProps {
  amount: number;
  current: number;
}

export interface HealthStatusProps {
  hitPoints: HealthPointsProps;
  effortPoints: HealthPointsProps;
  sanity: HealthPointsProps;

  deadAt?: Date | null;
  crazedAt?: Date | null;
}

export class HealthStatus {
  private props: HealthStatusProps;

  constructor(props: HealthStatusProps) {
    this.props = props;
  }

  public get hitPoints() {
    return this.props.hitPoints;
  }

  public get effortPoints() {
    return this.props.effortPoints;
  }

  public get sanity() {
    return this.props.sanity;
  }

  public get deadAt() {
    return this.props.deadAt;
  }

  public get crazedAt() {
    return this.props.crazedAt;
  }
}
