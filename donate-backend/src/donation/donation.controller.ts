import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DonationMethodDto } from './dto/donation-method.dto';
import { DonationService } from './donation.service';

@Controller('donation')
export class DonationController {
  constructor(private donationService: DonationService) {}

  //   @UseGuards(AuthGuard())
  @Post()
  async addDonationMethod(
    @Res() res,
    @Body() createDonationMethod: DonationMethodDto,
  ) {
    try {
      const donationMethod = await this.donationService.addDonationMethod(
        createDonationMethod,
      );
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
}
