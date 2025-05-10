import * as graphql from "@nestjs/graphql";
import { TaskRequestsResolverBase } from "./base/taskRequests.resolver.base";
import { TaskRequests } from "./base/TaskRequests";
import { TaskRequestsService } from "./taskRequests.service";

@graphql.Resolver(() => TaskRequests)
export class TaskRequestsResolver extends TaskRequestsResolverBase {
  constructor(protected readonly service: TaskRequestsService) {
    super(service);
  }
}
