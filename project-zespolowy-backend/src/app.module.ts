import { Module } from '@nestjs/common';
import { ContractorsModule } from './modules/contractors/contractors.module';

@Module({
  imports: [ContractorsModule],
})
export class AppModule {}
