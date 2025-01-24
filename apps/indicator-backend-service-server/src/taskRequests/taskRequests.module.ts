import { Module } from "@nestjs/common";
import { TaskRequestsModuleBase } from "./base/taskRequests.module.base";
import { TaskRequestsService } from "./taskRequests.service";
import { TaskRequestsController } from "./taskRequests.controller";
import { TaskRequestsResolver } from "./taskRequests.resolver";

@Module({
  imports: [TaskRequestsModuleBase],
  controllers: [TaskRequestsController],
  providers: [TaskRequestsService, TaskRequestsResolver],
  exports: [TaskRequestsService],
})
export class TaskRequestsModule {}
