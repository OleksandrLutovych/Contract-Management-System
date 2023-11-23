import { ContractorsService } from './contractors.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { Contractor } from './interfaces/contractors.interface';


@Controller('contractors')
export class ContractorsController {
  constructor(private contractorsService: ContractorsService) {}
  @Get()
  async findAll(): Promise<Contractor[]> {
    return this.contractorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return `find ${id} contractors`;
  }

  @Post()
  async create(@Body() dto: CreateContractorDto): Promise<any> {
    return this.contractorsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateContractorDto): string {
    return 'update contractors';
  }

  @Delete(':id')
  remove(): string {
    return;
  }
}
