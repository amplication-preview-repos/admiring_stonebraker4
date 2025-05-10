import * as graphql from "@nestjs/graphql";
import { IndicatorResolverBase } from "./base/indicator.resolver.base";
import { Indicator } from "./base/Indicator";
import { IndicatorService } from "./indicator.service";

@graphql.Resolver(() => Indicator)
export class IndicatorResolver extends IndicatorResolverBase {
  constructor(protected readonly service: IndicatorService) {
    super(service);
  }
}
