import { ContractorAddForm } from "../app/pages/Contractors/types";
import { Api } from "./axios-instance";

const getAll = async () => await Api.get("/contractors");
const create = async (value: ContractorAddForm) =>
  await Api.post("/contractors", value);
const update = async () =>
  await Api.put("/contractors").then((res) => res.data);
const remove = async () =>
  await Api.delete("/contractors").then((res) => res.data);

const ContractorsApi = { getAll, create, update, remove };

export { ContractorsApi };
