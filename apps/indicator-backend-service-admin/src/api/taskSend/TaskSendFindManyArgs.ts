import { TaskSendWhereInput } from "./TaskSendWhereInput";
import { TaskSendOrderByInput } from "./TaskSendOrderByInput";

export type TaskSendFindManyArgs = {
  where?: TaskSendWhereInput;
  orderBy?: Array<TaskSendOrderByInput>;
  skip?: number;
  take?: number;
};
