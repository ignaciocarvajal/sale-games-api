import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GamesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/gamesApp')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
