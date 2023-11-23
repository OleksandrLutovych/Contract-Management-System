import { Mongoose } from 'mongoose';
import { ContractorSchema } from './contractors.schema';

export const contractorsProvider = [
  {
    provide: 'CONTRACTOR_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Contractor', ContractorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
