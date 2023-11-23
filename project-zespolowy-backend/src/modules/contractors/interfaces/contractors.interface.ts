import { Document } from 'mongoose';

export interface Contractor extends Document {
  readonly name: string;
  readonly country: string;
  readonly city: string;
  readonly street: string;
  readonly postcode: string;
  readonly email: string;
  readonly phonenumber: string;
  readonly nip: string;
  readonly regon: string;
}
