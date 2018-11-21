import { JsonController, Body, Param, Get, Post, Put, Delete } from 'routing-controllers';
import { EntityFromParam } from "typeorm-routing-controllers-extensions";
import { Inject } from 'typedi';
import { UserService } from '../../services/UserService';
import { User } from '../../entities/User';

//@JsonController('/v1')
@JsonController()
export class UserController {
  @Inject() private userService: UserService;

  @Get('/') async getAll() {
    return this.userService.findAll();
  };

  // 此方式不需要经过service repositiory
  @Get("/users/:id")
  get(@EntityFromParam("id") user: User) {
    return user;
  }

  @Post('/users')
  addUser(@Body() user: User) {
    console.log(user);
    return this.userService.addOne(user);
  }
}