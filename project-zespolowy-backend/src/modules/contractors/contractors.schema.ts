import * as mongoose from 'mongoose';

export const ContractorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  city: String,
  street: String,
  postcode: String,
  email: String,
  phonenumber: String,
  nip: Number,
  regon: Number,
});
