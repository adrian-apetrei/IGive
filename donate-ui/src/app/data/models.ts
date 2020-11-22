export class CharityOrganization {
  topic: string;
  regionFocus: string;
  country: string;
  name: string;
  websiteUrl: string;
  description: string;
  latestUpdates: LatestUpdates[];
  goal: number;
  currentEffort: number;
  currentEffortDescription: string;
}

export interface LatestUpdates {
  title: string;
  description: string;
  date: string;
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
  paymentMethod: "BANK_ACCOUNT" | "PAYPAL" | "OTHER";
  bankName: string;
  accountNumber: string;
  accessCode: string;
}
