import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { CharitySchema } from './schemas/charities.schema';
import { TopicSchema } from './schemas/topics.schema';
import { StaticDataController } from './static-data.controller';
import { StaticDataService } from './static-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Topic', schema: TopicSchema },
      { name: 'Charity', schema: CharitySchema },
    ]),
    // PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  providers: [StaticDataService],
  controllers: [StaticDataController],
  exports: [StaticDataService],
})
export class StaticDataModule {}
