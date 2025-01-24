import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegionsServiceBase } from "./base/regions.service.base";

@Injectable()
export class RegionsService extends RegionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
