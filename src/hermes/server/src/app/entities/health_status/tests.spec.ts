import { HealthStatus } from './index';
describe('Health Status', () => {
  it('should be able to create a new `HealthStatus`', () => {
    const healthStatus = new HealthStatus({
      hitPoints: {
        amount: 0,
        current: 0,
      },
      effortPoints: {
        amount: 0,
        current: 0,
      },
      sanity: {
        amount: 0,
        current: 0,
      },
    });

    expect(healthStatus).toBeTruthy();
  });
});
