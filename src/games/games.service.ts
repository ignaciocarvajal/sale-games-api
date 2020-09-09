import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Games } from './interfaces/games.interface';
import { Model } from 'mongoose';
import { CreateGamesDTO } from './dto/games.dto';

@Injectable()
export class GamesService {
  constructor(@InjectModel('Games') private GamesModel: Model<Games>) {}

  async create(createAboutDTO: CreateGamesDTO): Promise<any> {
    const createdCat = new this.GamesModel(createAboutDTO);
    return createdCat.save();
  }

  async findAll(): Promise<any> {
    return await this.GamesModel.find().exec();
  }

  async findById(id: string): Promise<Games> {
    const game = await this.GamesModel.findById(id).exec();
    return game;
  }
  async find(req: (err: any, res: Games[]) => void): Promise<any> {
    return await this.GamesModel.find(req).exec();
  }
  async update(id: string, createGamesDTO: CreateGamesDTO): Promise<any> {
    return await this.GamesModel.findByIdAndUpdate(id, createGamesDTO, {
      new: true,
    });
  }
  async delete(id: string): Promise<any> {
    return await this.GamesModel.findByIdAndRemove(id);
  }
}
