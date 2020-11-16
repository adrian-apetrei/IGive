import * as mongoose from 'mongoose';

export const TopicSchema = new mongoose.Schema({
  name: String,
  icon: String,
});
