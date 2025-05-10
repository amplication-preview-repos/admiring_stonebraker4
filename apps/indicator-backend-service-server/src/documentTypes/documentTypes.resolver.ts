import * as graphql from "@nestjs/graphql";
import { DocumentTypesResolverBase } from "./base/documentTypes.resolver.base";
import { DocumentTypes } from "./base/DocumentTypes";
import { DocumentTypesService } from "./documentTypes.service";

@graphql.Resolver(() => DocumentTypes)
export class DocumentTypesResolver extends DocumentTypesResolverBase {
  constructor(protected readonly service: DocumentTypesService) {
    super(service);
  }
}
