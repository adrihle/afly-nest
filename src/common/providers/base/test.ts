import { BaseProvider } from '.';
import { TProviderStatus } from './interfaces';

type TMock = Record<string, TProviderStatus | any>;

const MOCK: TMock = {
  STATUS_OK: {
    status: 'ok',
    message: 'Provider initialized correctly',
  },
};

describe('[PROVIDER] BASE', () => {
  class Test extends BaseProvider {}
  const test = new Test();

  it('Should be defined', () => {
    expect(test.updateStatus).toBeDefined();
  });

  it('Status should not be initialized', () => {
    expect(test.checkStatus().status).toBe('not initialized');
  });

  it('Base provider should update status ok', () => {
    test.updateStatus(MOCK.STATUS_OK);
    expect(test.checkStatus()).toBe(MOCK.STATUS_OK);
  });
});
