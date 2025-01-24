import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskRequestsServiceBase } from "./base/taskRequests.service.base";

@Injectable()
export class TaskRequestsService extends TaskRequestsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
