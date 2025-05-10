import { Module } from "@nestjs/common";
import { TaskSendModuleBase } from "./base/taskSend.module.base";
import { TaskSendService } from "./taskSend.service";
import { TaskSendController } from "./taskSend.controller";
import { TaskSendResolver } from "./taskSend.resolver";

@Module({
  imports: [TaskSendModuleBase],
  controllers: [TaskSendController],
  providers: [TaskSendService, TaskSendResolver],
  exports: [TaskSendService],
})
export class TaskSendModule {}
