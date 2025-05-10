import { Module } from "@nestjs/common";
import { DocumentTypesModuleBase } from "./base/documentTypes.module.base";
import { DocumentTypesService } from "./documentTypes.service";
import { DocumentTypesController } from "./documentTypes.controller";
import { DocumentTypesResolver } from "./documentTypes.resolver";

@Module({
  imports: [DocumentTypesModuleBase],
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService, DocumentTypesResolver],
  exports: [DocumentTypesService],
})
export class DocumentTypesModule {}
