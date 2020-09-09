import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesSchema } from './schemas/games.schema';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'Games',
          schema: GamesSchema 
        }
      ]
      )
    ],
  
})
export class GamesModule {}
