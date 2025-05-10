import * as graphql from "@nestjs/graphql";
import { TaskSendResolverBase } from "./base/taskSend.resolver.base";
import { TaskSend } from "./base/TaskSend";
import { TaskSendService } from "./taskSend.service";

@graphql.Resolver(() => TaskSend)
export class TaskSendResolver extends TaskSendResolverBase {
  constructor(protected readonly service: TaskSendService) {
    super(service);
  }
}
