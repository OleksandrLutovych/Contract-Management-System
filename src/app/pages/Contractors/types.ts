type ContractorAddForm = {
  name: string;
  country: string;
  city: string;
  street: string;
  postcode: string;
  email: string;
  phonenumber: string;
  nip: string;
  regon: string;
};

type Contractor = {
  _id: string;
  name: string;
  country: string;
  city: string;
  street: string;
  postcode: string;
  email: string;
  phonenumber: string;
  nip: string;
  regon: string;
};

export type { ContractorAddForm, Contractor };
