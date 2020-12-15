import * as mongoose from 'mongoose';

export const PaymentMethodsSchema = new mongoose.Schema({
  userId: String,
  paymentMethod: String,
  bankName: String,
  accountNumber: String,
  accessCode: String,
});
