import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from 'src/config/config.service';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { DonationMethodsSchema } from './schemas/donation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Donation-Method', schema: DonationMethodsSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    HttpModule,
  ],
  providers: [DonationService, ConfigService],
  controllers: [DonationController],
  exports: [DonationService],
})
export class DonationModule {}
