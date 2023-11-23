import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://seethelight1997:20091977@cluster0.jqxrjda.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
