import { Document } from 'mongoose';

export interface Topic extends Document {
  readonly name: string;
  readonly icon: string;
}
