import { Module } from "@nestjs/common";
import { RegionsModuleBase } from "./base/regions.module.base";
import { RegionsService } from "./regions.service";
import { RegionsController } from "./regions.controller";
import { RegionsResolver } from "./regions.resolver";

@Module({
  imports: [RegionsModuleBase],
  controllers: [RegionsController],
  providers: [RegionsService, RegionsResolver],
  exports: [RegionsService],
})
export class RegionsModule {}
