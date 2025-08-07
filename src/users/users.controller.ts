import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto';
import { AuthGuard } from '../common/guards';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return this.userService.login(body);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getCurrentUser(@Req() req) {
    const email = req.user.email;
    return email;
  }
}
