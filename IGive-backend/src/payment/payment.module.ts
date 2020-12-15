import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentMethodsSchema } from './schemas/payment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Payment-Method', schema: PaymentMethodsSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    HttpModule,
  ],
  providers: [PaymentService, ConfigService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
