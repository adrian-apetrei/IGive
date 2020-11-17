import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentMethodDto } from './dto/payment-method.dto';
import { PaymentMethod } from './interfaces/payment.interface';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel('Payment-Method') private readonly paymentModel: Model<PaymentMethod>,
  ) {}

  // CREATE payment method
  async addPaymentMethod(
    createPaymentMethod: PaymentMethodDto,
  ): Promise<PaymentMethod> {
    const newPaymentMethod = await new this.paymentModel(createPaymentMethod);
    return newPaymentMethod.save();
  }
}
