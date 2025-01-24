import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskSendServiceBase } from "./base/taskSend.service.base";

@Injectable()
export class TaskSendService extends TaskSendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
