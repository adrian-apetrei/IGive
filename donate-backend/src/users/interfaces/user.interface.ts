import { Document } from 'mongoose';

export interface UserPreferences {
  readonly selectedTopics: [];
  readonly optimizeDonations: boolean;
  readonly goLocal: boolean;
  readonly taxReturns: boolean;
}

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly password: string;
  readonly email: string;
  readonly avatar: string;
  readonly bio: string;
  readonly firstLogin: boolean;
  readonly userPreferences: UserPreferences;
}
