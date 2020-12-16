import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as gravatar from 'gravatar';

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    displayName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: String,
    bio: String,
    firstLogin: Boolean,
    userPreferences: {
      selectedTopics: Array,
      optimizeDonations: Boolean,
      goLocal: Boolean,
      taxReturns: Boolean,
    },
    userSettings: {
      notifications: {
        charityUpdates: String,
        email: Boolean,
        sms: Boolean,
      },
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', function (next) {
  const user: any = this;

  // Set Gravatar image
  if (!user.avatar) {
    user.avatar = gravatar.url(user.email, { protocol: 'https' });
  }

  // Make sure not to rehash the password if it is already hashed
  if (!user.isModified('password')) {
    return next();
  }
  // Generate a salt and use it to hash the user's password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // tslint:disable-next-line: no-shadowed-variable
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.checkPassword = function (attempt, callback) {
  const user = this;
  bcrypt.compare(attempt, user.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};