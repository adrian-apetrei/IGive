import { Document } from 'mongoose';

export interface Charity extends Document {
  readonly topic: string;
  readonly regionFocus: string;
  readonly country: string;
  readonly name: string;
  readonly websiteUrl: string;
}
