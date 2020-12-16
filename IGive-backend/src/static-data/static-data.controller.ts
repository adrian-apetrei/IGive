import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CharityDto } from './dto/charity.dto';
import { StaticDataService } from './static-data.service';

@Controller('static-data')
export class StaticDataController {
  constructor(private staticDataService: StaticDataService) {}

  //   @UseGuards(AuthGuard())
  @Get('topics')
  async getTopics(@Res() res) {
    const topics = await this.staticDataService.getTopics();
    if (!topics) {
      throw new NotFoundException('There are no topics');
    }
    return res.status(HttpStatus.OK).json(topics);
  }

  //   @UseGuards(AuthGuard())
  @Get('charities')
  async getCharities(@Res() res) {
    const charities = await this.staticDataService.getCharities();
    if (!charities) {
      throw new NotFoundException('There are no charities');
    }
    return res.status(HttpStatus.OK).json(charities);
  }

  @Put(':charityID')
  async updateUser(
    @Res() res,
    @Param('charityID') charityID,
    @Body() charityBody: CharityDto,
  ) {
    const charity = await this.staticDataService.updateCharityCurrentEffort(
      charityID,
      charityBody.newEffort,
    );
    if (!charity) {
      throw new NotFoundException('Charity does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      msg: 'Charity has been successfully updated',
      charity,
    });
  }
}