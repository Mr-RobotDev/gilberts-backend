import { Module } from '@nestjs/common';
import { OperatorInfluenceService } from './operator-influence.service';
import { OperatorInfluenceController } from './operator-influence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  OperatorInfluence,
  OperatorInfluenceSchema,
} from './schema/operator-influence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OperatorInfluence.name,
        schema: OperatorInfluenceSchema,
      },
    ]),
  ],
  controllers: [OperatorInfluenceController],
  providers: [OperatorInfluenceService],
})
export class OperatorInfluenceModule {}
