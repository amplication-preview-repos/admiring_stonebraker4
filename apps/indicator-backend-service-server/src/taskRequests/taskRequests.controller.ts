import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskRequestsService } from "./taskRequests.service";
import { TaskRequestsControllerBase } from "./base/taskRequests.controller.base";

@swagger.ApiTags("taskRequests")
@common.Controller("taskRequests")
export class TaskRequestsController extends TaskRequestsControllerBase {
  constructor(protected readonly service: TaskRequestsService) {
    super(service);
  }
}
