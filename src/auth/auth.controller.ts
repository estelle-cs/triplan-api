import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
  import { SetMetadata } from '@nestjs/common';

    export const IS_PUBLIC_KEY = 'isPublic';
    export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        console.log("signInDto", signInDto);
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Public()
    @Post('register')
    signUp(@Body() signUpDto: Record<string, any>) {
        console.log("signUpDto", signUpDto);
        return this.authService.signUp(signUpDto.email, signUpDto.password);
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      console.log(req.user)
      return req.user;
    }
  }