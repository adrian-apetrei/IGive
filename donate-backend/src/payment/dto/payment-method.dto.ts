export class PaymentMethodDto {
  readonly userId: string;
  readonly paymentMethod: 'BANK_ACCOUNT' | 'PAYPAL' | 'OTHER';
  readonly bankName: string;
  readonly accountNumber: string;
  readonly accessCode: string;
}
