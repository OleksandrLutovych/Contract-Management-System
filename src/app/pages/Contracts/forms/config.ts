import { ContractAddForm } from "../types";

const defaultValues: ContractAddForm = {
  numer: "",
  nazwa: "",
  partner: "",
  dataPodpisania: "",
  dataWaznosci: "",
  status: "",
};

const formFields = [
  {
    type: 'standard',
    numer: "numer",
    placeholder: "xxx",
    label: "Numer",
  },
];

export { defaultValues, formFields };