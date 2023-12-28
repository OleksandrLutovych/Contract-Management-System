type ContractAddForm = {
    numer: string;
    nazwa: string;
    partner: string;
    dataPodpisania: string;
    dataWaznosci: string;
    status: string;
  };
  
  type Contract = {
    _id: string;
    numer: string;
    nazwa: string;
    partner: string;
    dataPodpisania: string;
    dataWaznosci: string;
    status: string;
  };
  
  export type { ContractAddForm, Contract };
  