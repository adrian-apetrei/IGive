import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DonationMethodDto } from './dto/donation-method.dto';
import { DonationService } from './donation.service';

@Controller('donation')
export class DonationController {
  constructor(private donationService: DonationService) {}

  @UseGuards(AuthGuard())
  @Post()
  async addDonationMethod(
    @Req() req,
    @Res() res,
    @Body() createDonationMethod: DonationMethodDto,
  ) {
    try {
      const user = req.user;
      const donationMethod = await this.donationService.addDonationMethod({
        userId: user._id,
        ...createDonationMethod,
      });
      return res.status(HttpStatus.OK).json({
        msg: 'Donation method has been added successfully',
        donationMethod,
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        msg: 'Error registering donation method',
      });
    }
  }

  @UseGuards(AuthGuard())
  @Get('/methods/:charityId')
  async getPaymentMethods(@Req() request, @Res() res, @Param('charityId') charityId) {
    const user = request.user;
    try {
      const donationMethods = await this.donationService.getDonationMethods(
        user._id,
        charityId,
      );
      return res.status(HttpStatus.OK).json({
        msg: 'Donations methods successfully retrieved',
        donationMethods,
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        msg: 'This user has no donation methods',
        donationMethods: [],
      });
    }
  }
}
