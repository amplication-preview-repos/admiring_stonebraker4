import { TaskRecipients as TTaskRecipients } from "../api/taskRecipients/TaskRecipients";

export const TASKRECIPIENTS_TITLE_FIELD = "id";

export const TaskRecipientsTitle = (record: TTaskRecipients): string => {
  return record.id?.toString() || String(record.id);
};
