import { SortOrder } from "../../util/SortOrder";

export type TaskSendOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
