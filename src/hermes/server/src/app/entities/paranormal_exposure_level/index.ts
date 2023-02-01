import { Replace } from '@helpers/replace';
import { clamp } from '@helpers/utils';

export interface ParanormalExposureLevelProps {
  percentage: string;
}

const MIN_PARANORMAL_EXPOSURE_LEVEL = 0;
const MAX_PARANORMAL_EXPOSURE_LEVEL = 99;

export class ParanormalExposureLevel {
  private props: ParanormalExposureLevelProps;

  private validatePercentage(percentage: string): string {
    const amountPercentage = clamp(
      parseInt(percentage.replace(/[^0-9]/g, '')),
      MIN_PARANORMAL_EXPOSURE_LEVEL,
      MAX_PARANORMAL_EXPOSURE_LEVEL,
    );

    return `${amountPercentage}%`;
  }

  constructor(
    props?: Replace<ParanormalExposureLevelProps, { percentage?: string }>,
  ) {
    this.props = {
      percentage: this.validatePercentage(props?.percentage ?? '5%'),
    };
  }

  public get percentage(): string {
    return this.props.percentage;
  }

  public set percentage(percentage: string) {
    this.props.percentage = this.validatePercentage(percentage);
  }
}
