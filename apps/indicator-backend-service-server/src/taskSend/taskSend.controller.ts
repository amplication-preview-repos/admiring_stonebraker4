import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskSendService } from "./taskSend.service";
import { TaskSendControllerBase } from "./base/taskSend.controller.base";

@swagger.ApiTags("taskSends")
@common.Controller("taskSends")
export class TaskSendController extends TaskSendControllerBase {
  constructor(protected readonly service: TaskSendService) {
    super(service);
  }
}
