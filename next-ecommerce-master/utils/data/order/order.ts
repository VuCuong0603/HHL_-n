import { client } from "../../index";

export const putOrderProductApi = (
  id: string,
  total: number,
  phoneNumber: string,
  address: string
) => {
  return client
    .put("/customer", { id, total, phoneNumber, address })
    .then((res) => res.data);
};
