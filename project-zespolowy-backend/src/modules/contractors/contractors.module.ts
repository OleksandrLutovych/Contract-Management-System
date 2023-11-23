import { Module } from '@nestjs/common';
import { ContractorsController } from './contractors.controller';
import { ContractorsService } from './contractors.service';
import { DatabaseModule } from 'src/database/database.module';
import { contractorsProvider } from './contractors.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ContractorsController],
  providers: [ContractorsService, ...contractorsProvider],
})
export class ContractorsModule {}
