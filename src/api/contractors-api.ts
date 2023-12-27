import { Api } from "./axios-instance";

const getAll = async () => await Api.get("/contractors")
const create = async () => await Api.post("/contractors");
const update = async () =>
  await Api.put("/contractors").then((res) => res.data);
const remove = async () =>
  await Api.delete("/contractors").then((res) => res.data);

const ContractorsApi = { getAll, create, update, remove };


export { ContractorsApi };
