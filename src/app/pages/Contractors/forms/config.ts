import { ContractorAddForm } from "../types";

const defaultValues: ContractorAddForm = {
  name: "",
  nip: "",
  city: "",
  postcode: "",
  country: "",
  phonenumber: "",
  email: "",
  regon: "",
  street: "",
};

const formFields = [
  {
    type: 'standard',
    name: "name",
    placeholder: "Atos sp. z o.o.",
    label: "Nazwa",
  },
];

export { defaultValues, formFields };
