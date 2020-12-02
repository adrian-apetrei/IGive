import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
import { NeconfigModule } from 'neconfig';
import { StaticDataModule } from './static-data/static-data.module';
import { PaymentModule } from './payment/payment.module';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    StaticDataModule,
    PaymentModule,
    NeconfigModule.register({
      readers: [{ name: 'env', file: path.resolve(process.cwd(), '.env') }],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    DonationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
