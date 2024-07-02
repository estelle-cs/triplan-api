import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SetMetadata } from '@nestjs/common';


export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

}

