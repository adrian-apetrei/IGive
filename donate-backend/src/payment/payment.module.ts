import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
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
    HttpModule,
  ],
  providers: [PaymentService, ConfigService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
