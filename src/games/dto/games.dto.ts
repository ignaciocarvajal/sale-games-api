import { ApiProperty } from '@nestjs/swagger';
export class CreateGamesDTO {
  @ApiProperty()
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly category: string;
}