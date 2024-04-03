import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class InputMessageDto {
  @ApiProperty({
    example: 'Hello world!',
    description: 'Текст сообщения',
  })
  @IsString()
  message: string;
}
