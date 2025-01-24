import { Module } from "@nestjs/common";
import { TaskRecipientsModuleBase } from "./base/taskRecipients.module.base";
import { TaskRecipientsService } from "./taskRecipients.service";
import { TaskRecipientsController } from "./taskRecipients.controller";
import { TaskRecipientsResolver } from "./taskRecipients.resolver";

@Module({
  imports: [TaskRecipientsModuleBase],
  controllers: [TaskRecipientsController],
  providers: [TaskRecipientsService, TaskRecipientsResolver],
  exports: [TaskRecipientsService],
})
export class TaskRecipientsModule {}
