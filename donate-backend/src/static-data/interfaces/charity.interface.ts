import { Document } from 'mongoose';

export interface LatestUpdates {
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

export interface Charity extends Document {
  readonly topic: string;
  readonly regionFocus: string;
  readonly country: string;
  readonly name: string;
  readonly websiteUrl: string;
  readonly description: string;
  readonly latestUpdates: LatestUpdates[];
  readonly goal: number;
  readonly currentEffort: number;
  readonly currentEffortDescription: string;
}
