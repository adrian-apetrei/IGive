import * as mongoose from 'mongoose';

export const DonationMethodsSchema = new mongoose.Schema(
  {
    userId: String,
    charityId: String,
    donationMethod: String,
    paymentMethod: {
      donateUntilGoal: Boolean,
      donateUntilDate: Boolean,
      donationDate: Date,
      donateUntilLimit: Boolean,
      donationLimit: Number,
      donationAmount: Number,
      when: String,
      period: String,
    },
  },
  { timestamps: { createdAt: 'created_at' } },
);
