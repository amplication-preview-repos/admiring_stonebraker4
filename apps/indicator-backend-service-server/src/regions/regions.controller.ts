import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegionsService } from "./regions.service";
import { RegionsControllerBase } from "./base/regions.controller.base";

@swagger.ApiTags("regions")
@common.Controller("regions")
export class RegionsController extends RegionsControllerBase {
  constructor(protected readonly service: RegionsService) {
    super(service);
  }
}
