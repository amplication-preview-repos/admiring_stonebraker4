import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskRecipientsService } from "./taskRecipients.service";
import { TaskRecipientsControllerBase } from "./base/taskRecipients.controller.base";

@swagger.ApiTags("taskRecipients")
@common.Controller("taskRecipients")
export class TaskRecipientsController extends TaskRecipientsControllerBase {
  constructor(protected readonly service: TaskRecipientsService) {
    super(service);
  }
}
