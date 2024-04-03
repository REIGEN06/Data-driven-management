import { ApiProperty } from '@nestjs/swagger';

export class OutputProcessedMessageDto {
  @ApiProperty({
    example: 0.8,
  })
  toxicLevel: number;

  @ApiProperty({
    example: 'Слишком токсично',
  })
  text: string;
}
