import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { InputMessageDto } from 'src/dto/InputMessage.dto';
import { OutputProcessedMessageDto } from 'src/dto/OutputProcessedMessage.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message')
  @ApiResponse({
    status: 200,
    type: OutputProcessedMessageDto,
  })
  async processMessage(@Body() body: InputMessageDto) {
    return await this.appService.processMessage(body.message);
  }
}
