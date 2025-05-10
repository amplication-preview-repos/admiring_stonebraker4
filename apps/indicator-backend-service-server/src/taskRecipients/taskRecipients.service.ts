import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskRecipientsServiceBase } from "./base/taskRecipients.service.base";

@Injectable()
export class TaskRecipientsService extends TaskRecipientsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
