import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GithubStrategy } from './strategies/github.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, GithubStrategy],
})
export class AuthModule {}
