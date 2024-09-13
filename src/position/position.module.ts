import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';

@Module({
  controllers: [PositionController],
})
export class PositionModule {}
