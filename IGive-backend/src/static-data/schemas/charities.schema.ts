import * as mongoose from 'mongoose';

export const CharitySchema = new mongoose.Schema({
  topic: String,
  regionFocus: String,
  country: String,
  name: String,
  websiteUrl: String,
  description: String,
  latestUpdates: Array,
  goal: Number,
  currentEffort: Number,
  currentEffortDescription: String,
});
