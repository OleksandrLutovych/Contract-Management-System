import { ContractorsService } from './../service/contractors.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateContractorDto } from '../request/dto/create-contractor.dto';


@Controller('contractors')
export class ContractorsController {
  constructor(private contractorsService: ContractorsService) {}
  @Get()
  async findAll(): Promise<any> {
    this.contractorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return `find ${id} contractors`;
  }

  @Post()
  async create(@Body() dto: CreateContractorDto): Promise<any> {
    this.contractorsService.create(dto);
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
