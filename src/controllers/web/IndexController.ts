import { Controller, Body, Param, Get, Post, Put, Delete, Render } from 'routing-controllers';

@Controller('/index')
export class IndexController {
  @Get('/')
  @Render('index.ejs')
  index() {
    return { title: 'express' }
  }
}