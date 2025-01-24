import { TaskRecipientsWhereInput } from "./TaskRecipientsWhereInput";
import { TaskRecipientsOrderByInput } from "./TaskRecipientsOrderByInput";

export type TaskRecipientsFindManyArgs = {
  where?: TaskRecipientsWhereInput;
  orderBy?: Array<TaskRecipientsOrderByInput>;
  skip?: number;
  take?: number;
};
