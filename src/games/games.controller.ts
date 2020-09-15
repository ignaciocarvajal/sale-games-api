import { Controller, HttpStatus, Post, Res, Body, Get, Query, NotFoundException, Put, Delete, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDTO } from './dto/games.dto';

@Controller('api/games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    @Post('/create')
    async addCustomer(@Res() res, @Body() createGamesDTO: CreateGamesDTO) {
      const lists = await this.gamesService.create(createGamesDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Post has been created successfully',
        lists,
      });
    }
    @Get('/')
    async findAll(@Res() res) {
      const lists = await this.gamesService.findAll();
      return res.status(HttpStatus.OK).json(lists);
    }
    
    @Get('/:id')
    async findById(@Res() res, @Param('id') id: string) {
      const lists = await this.gamesService.findById(id);
      if (!lists) throw new NotFoundException('Id does not exist!');
      return res.status(HttpStatus.OK).json(lists);
    }
    @Put('/update/:id')
    async update(
      @Res() res,
      @Param('id') id: string,
      @Body() createGamesDTO: CreateGamesDTO,
    ) {
      const lists = await this.gamesService.update(id, createGamesDTO);
      if (!lists) throw new NotFoundException('Id does not exist!');
      return res.status(HttpStatus.OK).json({
        message: 'Post has been successfully updated',
        lists,
      });
    }
    @Delete('/delete/:id')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async delete(@Res() res, @Param('id') id: string) {
      const lists = await this.gamesService.delete(id);
      if (!lists) throw new NotFoundException('Post does not exist');
      return res.status(HttpStatus.OK).json({
        message: 'Post has been deleted',
        lists,
      });
    }
}
