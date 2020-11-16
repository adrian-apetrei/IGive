import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './interfaces/topic.interface';
import { Charity } from './interfaces/charity.interface';

@Injectable()
export class StaticDataService {
  constructor(
    @InjectModel('Topic') private readonly topicModel: Model<Topic>,
    @InjectModel('Charity') private readonly charityModel: Model<Charity>,
  ) {}

  // GET topics
  async getTopics(): Promise<Topic[]> {
    const topics = await this.topicModel.find().exec();
    return topics;
  }

  // GET charities
  async getCharities(): Promise<Charity[]> {
    const charities = await this.charityModel.find().exec();
    return charities;
  }
}
