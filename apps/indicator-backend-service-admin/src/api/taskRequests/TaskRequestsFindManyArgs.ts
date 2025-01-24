import { TaskRequestsWhereInput } from "./TaskRequestsWhereInput";
import { TaskRequestsOrderByInput } from "./TaskRequestsOrderByInput";

export type TaskRequestsFindManyArgs = {
  where?: TaskRequestsWhereInput;
  orderBy?: Array<TaskRequestsOrderByInput>;
  skip?: number;
  take?: number;
};
