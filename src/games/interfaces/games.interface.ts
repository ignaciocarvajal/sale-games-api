import { Document } from 'mongoose';
export interface Games extends Document {
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly category: string;
  readonly created_at: Date;
}
