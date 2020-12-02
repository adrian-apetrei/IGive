import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DonationMethodDto } from './dto/donation-method.dto';
import { DonationMethod } from './interfaces/donation.interface';

@Injectable()
export class DonationService {
  constructor(
    @InjectModel('Donation-Method') private readonly DonationModel: Model<DonationMethod>,
  ) {}

  // CREATE Donation method
  async addDonationMethod(
    createDonationMethod: DonationMethodDto,
  ): Promise<DonationMethod> {
    const newDonationMethod = await new this.DonationModel(createDonationMethod);
    return newDonationMethod.save();
  }
}
