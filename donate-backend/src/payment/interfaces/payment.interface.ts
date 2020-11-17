import { Document } from 'mongoose';

export interface PaymentMethod extends Document {
  readonly userId: string;
  readonly paymentMethod: string;
  readonly bankName: string;
  readonly accountNumber: string;
  readonly accessCode: string;
}
