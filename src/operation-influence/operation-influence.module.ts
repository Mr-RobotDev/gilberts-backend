import { Module } from '@nestjs/common';
import { OperationInfluenceService } from './operation-influence.service';
import { OperationInfluenceController } from './operation-influence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  OperationInfluence,
  OperationInfluenceSchema,
} from './schema/operation-influence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OperationInfluence.name,
        schema: OperationInfluenceSchema,
      },
    ]),
  ],
  controllers: [OperationInfluenceController],
  providers: [OperationInfluenceService],
})
export class OperationInfluenceModule {}
