import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  something(): string {
    return 'Hello! Say something about yourself';
  }
}
