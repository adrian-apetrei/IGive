export class CharityOrganization {
  topic: string;
  regionFocus: string;
  country: string;
  name: string;
  websiteUrl: string;
}

export interface Topic {
  name: string;
  icon: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  bio: string;
  createdAt: string;
  id: string;
  firstLogin: boolean;
}

export interface PaymentMethod {
  userId: string;
  paymentMethod: 'BANK_ACCOUNT' | 'PAYPAL' | 'OTHER';
  bankName: string;
  accountNumber: string;
  accessCode: string;
}
