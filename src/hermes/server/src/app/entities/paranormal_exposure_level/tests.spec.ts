import { ParanormalExposureLevel } from '.';

describe('Paranormal Exposure Level', () => {
  it('should be able to create a new `ParanormalExposureLevel`', () => {
    const pel = new ParanormalExposureLevel({ percentage: '5%' });

    expect(pel).toBeTruthy();
    expect(pel.percentage).toEqual('5%');
  });

  it('should not be able to create a new `ParanormalExposureLevel` with percentage greater than 99 or less than 0', () => {
    const pelLessThan0 = new ParanormalExposureLevel({ percentage: '-5%' });
    const pelGreaterThan99 = new ParanormalExposureLevel({
      percentage: '100%',
    });

    expect(pelLessThan0).toBeTruthy();
    expect(pelLessThan0.percentage).toEqual('5%');

    expect(pelGreaterThan99).toBeTruthy();
    expect(pelGreaterThan99.percentage).toEqual('99%');
  });
});
