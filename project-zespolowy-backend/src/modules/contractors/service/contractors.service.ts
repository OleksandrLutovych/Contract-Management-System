import { Contractors } from '../entity/contractors.entity';
import { CreateContractorDto } from './../request/dto/create-contractor.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractorsService {
  private readonly contractors: Contractors[] = [];

  findAll() {
    return this.contractors;
  }
  create(dto: CreateContractorDto) {
    this.contractors.push(dto);
  }
}
