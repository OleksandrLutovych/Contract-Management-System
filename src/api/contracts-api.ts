import { Api } from "./axios-instance";

const getAll = async () => await Api.get("/contracts")
const create = async () => await Api.post("/contracts");
const update = async () =>
  await Api.put("/contracts").then((res) => res.data);
const remove = async () =>
  await Api.delete("/contracts").then((res) => res.data);

const ContractsApi = { getAll, create, update, remove };


export { ContractsApi };