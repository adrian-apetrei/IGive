import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // CREATE user
  async addUser(createUserDTO: UserDto): Promise<User> {
    const newUser = await new this.userModel(createUserDTO);
    return newUser.save();
  }

  // READ user
  async getUser(userID): Promise<User> {
    const customer = await this.userModel.findById(userID).exec();
    return customer;
  }

  // UPDATE user details
  async updateUser(userID, data): Promise<User> {
    if (data.hasOwnProperty('password')) {
      const newPassword = await bcrypt.hash(data.password, 10);
      data.password = newPassword;
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(userID, data, {
      new: true,
    });
    return updatedUser;
  }

  // DELETE user
  async deleteUser(userID): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }

  // For JWT checking
  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }, '+password');
  }

  // UPDATE user preferences
  async updateUserPreferences(userId, data): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { userPreferences: data },
      {
        new: true,
      },
    );
    return updatedUser;
  }

  // UPDATE user settings
  async updateUserSettings(userId, data): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { userSettings: data },
      {
        new: true,
      },
    );
    return updatedUser;
  }
}
