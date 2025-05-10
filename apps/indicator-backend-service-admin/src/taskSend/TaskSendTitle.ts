import { TaskSend as TTaskSend } from "../api/taskSend/TaskSend";

export const TASKSEND_TITLE_FIELD = "id";

export const TaskSendTitle = (record: TTaskSend): string => {
  return record.id?.toString() || String(record.id);
};
