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

  // UPDATE payment method
  async updatePaymentMethod(methodId, data): Promise<PaymentMethod> {
    const updatedPaymentMethod = await this.paymentModel.findByIdAndUpdate(
      methodId,
      data,
      {
        new: true,
      },
    );
    return updatedPaymentMethod;
  }

  // GET USER payment methods
  async getPaymentMethods(userID): Promise<PaymentMethod[]> {
    const paymentMethods = await this.paymentModel.find().where('userId').in(userID).exec();
    return paymentMethods;
  }
}
