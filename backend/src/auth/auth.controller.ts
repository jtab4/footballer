import { Controller, Post, Body, UnauthorizedException, ConflictException, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: { email: string, password: string }) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() registerDto: { email: string, password: string }) {
    
    const existingUser = await this.userService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = await this.userService.create({
      email: registerDto.email,
      password: hashedPassword, 
    });
    return this.authService.login(newUser);
  }
  @UseGuards(JwtAuthGuard)
  @Get('verify-token')
  verifyToken() {
    return { message: 'Token is valid' };
  }
}
