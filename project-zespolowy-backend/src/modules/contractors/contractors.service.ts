import { CreateContractorDto } from './dto/create-contractor.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Contractor } from './interfaces/contractors.interface';

@Injectable()
export class ContractorsService {
  constructor(
    @Inject('CONTRACTOR_MODEL')
    private contractorModel: Model<Contractor>,
  ) {}

  async findAll(): Promise<Contractor[]> {
    return this.contractorModel.find().exec();
  }
  async create(dto: CreateContractorDto): Promise<Contractor> {
    const createdContractor = new this.contractorModel(dto);
    return createdContractor.save();
  }
}
