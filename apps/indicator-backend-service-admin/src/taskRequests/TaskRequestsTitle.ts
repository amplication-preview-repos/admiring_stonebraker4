import { TaskRequests as TTaskRequests } from "../api/taskRequests/TaskRequests";

export const TASKREQUESTS_TITLE_FIELD = "id";

export const TaskRequestsTitle = (record: TTaskRequests): string => {
  return record.id?.toString() || String(record.id);
};
