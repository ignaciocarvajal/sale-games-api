import { ApiProperty } from '@nestjs/swagger';
export class CreateGamesDTO {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly imageUrl: string;
  @ApiProperty()
  readonly category: string;
}