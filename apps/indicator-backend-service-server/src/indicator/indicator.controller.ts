import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndicatorService } from "./indicator.service";
import { IndicatorControllerBase } from "./base/indicator.controller.base";

@swagger.ApiTags("indicators")
@common.Controller("indicators")
export class IndicatorController extends IndicatorControllerBase {
  constructor(protected readonly service: IndicatorService) {
    super(service);
  }
}
