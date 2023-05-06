import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  get(): string {
    return process.env.PORT;
  }
}
