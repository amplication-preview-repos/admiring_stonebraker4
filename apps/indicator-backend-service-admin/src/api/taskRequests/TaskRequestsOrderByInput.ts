import { SortOrder } from "../../util/SortOrder";

export type TaskRequestsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
