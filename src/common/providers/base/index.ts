import { Injectable } from '@nestjs/common';
import { TProviderStatus } from './interfaces';

const defaultStatus: TProviderStatus = {
  status: 'not initialized',
  message: 'Base provider not initialized',
};

@Injectable()
class BaseProvider {
  private status: TProviderStatus = defaultStatus;

  checkStatus() {
    return this.status;
  }
  updateStatus(status: TProviderStatus) {
    this.status = status;
  }
}

export { BaseProvider };
