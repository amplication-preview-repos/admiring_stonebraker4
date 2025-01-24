import * as graphql from "@nestjs/graphql";
import { TaskRecipientsResolverBase } from "./base/taskRecipients.resolver.base";
import { TaskRecipients } from "./base/TaskRecipients";
import { TaskRecipientsService } from "./taskRecipients.service";

@graphql.Resolver(() => TaskRecipients)
export class TaskRecipientsResolver extends TaskRecipientsResolverBase {
  constructor(protected readonly service: TaskRecipientsService) {
    super(service);
  }
}
