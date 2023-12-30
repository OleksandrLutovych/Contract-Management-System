import { ContractAddForm } from "../app/pages/Contracts/types";
import { Api } from "./axios-instance";

const getAll = async () => await Api.get("/contracts")
const create = async (value: ContractAddForm) => 
await Api.post("/contracts", value);
const update = async () =>
  await Api.put("/contracts").then((res) => res.data);
const remove = async () =>
  await Api.delete("/contracts").then((res) => res.data);

const ContractsApi = { getAll, create, update, remove };


export { ContractsApi };