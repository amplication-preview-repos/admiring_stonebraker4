import * as graphql from "@nestjs/graphql";
import { RegionsResolverBase } from "./base/regions.resolver.base";
import { Regions } from "./base/Regions";
import { RegionsService } from "./regions.service";

@graphql.Resolver(() => Regions)
export class RegionsResolver extends RegionsResolverBase {
  constructor(protected readonly service: RegionsService) {
    super(service);
  }
}
