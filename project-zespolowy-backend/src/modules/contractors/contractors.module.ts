import { Module } from '@nestjs/common';
import { ContractorsController } from './controller/contractors.controller';
import { ContractorsService } from './service/contractors.service';

@Module({
  controllers: [ContractorsController],
  providers: [ContractorsService],
})
export class ContractorsModule {}
