import * as mongoose from 'mongoose';

export const DonationMethodsSchema = new mongoose.Schema({
  userId: String,
  charityId: String,
  donationMethod: String,
  roundUpMethod: {
    donateUntilGoal: Boolean,
    donateUntilDate: Boolean,
    donationDate: Date,
    donateUntilLimit: Boolean,
    donationLimit: Number,
  },
  incognitoMethod: {
    donationAmount: Number,
    when: String,
    donationLimit: Number,
    period: String,
  },
  determinedMethod: {
    donationAmount: Number,
    when: String,
  },
});
