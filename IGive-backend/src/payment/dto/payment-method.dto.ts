export class PaymentMethodDto {
  readonly userId: string;
  readonly paymentMethod: 'BANK_ACCOUNT' | 'PAYPAL' | 'OTHER';
  readonly bankName: string;
  readonly accountNumber: string;
  readonly accessCode: string;
}

// tslint:disable-next-line: max-classes-per-file
export class PaymentDto {
  readonly amount: string;
  readonly description: string;
}
