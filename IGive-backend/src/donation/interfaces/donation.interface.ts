import { Document } from 'mongoose';

export interface RoundUpMethod extends Document {
  readonly donateUntilGoal: boolean;
  readonly donateUntilDate: boolean;
  readonly donationDate: string;
  readonly donateUntilLimit: boolean;
  readonly donationLimit: number;
}

export interface IncognitoMethod extends Document {
  readonly donationAmount: number;
  readonly when: string;
  readonly donationLimit: number;
  readonly period: number;
}

export interface DeterminedMethod extends Document {
  readonly donationAmount: number;
  readonly when: string;
}

export interface DonationMethod extends Document {
  readonly userId: string;
  readonly charityId: string;
  readonly donationMethod: string;
  readonly paymentMethod: RoundUpMethod | IncognitoMethod | DeterminedMethod;
}
