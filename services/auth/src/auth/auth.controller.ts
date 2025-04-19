import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubLogin() {
  }

  @Get('github/redirect')
  @UseGuards(AuthGuard('github'))
  githubLoginCallback(@Req() req) {
    return {
      message: 'GitHub Auth successful',
      user: req.user,
    };
  }
}
