import { Module } from "@nestjs/common";
import { UserRoleModule } from "./userRole/userRole.module";
import { OrganizationsModule } from "./organizations/organizations.module";
import { TaskRecipientsModule } from "./taskRecipients/taskRecipients.module";
import { DocumentTypesModule } from "./documentTypes/documentTypes.module";
import { DocumentsModule } from "./documents/documents.module";
import { TaskSendModule } from "./taskSend/taskSend.module";
import { TaskRequestsModule } from "./taskRequests/taskRequests.module";
import { TasksModule } from "./tasks/tasks.module";
import { RegionsModule } from "./regions/regions.module";
import { IndicatorModule } from "./indicator/indicator.module";
import { KpiModule } from "./kpi/kpi.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserRoleModule,
    OrganizationsModule,
    TaskRecipientsModule,
    DocumentTypesModule,
    DocumentsModule,
    TaskSendModule,
    TaskRequestsModule,
    TasksModule,
    RegionsModule,
    IndicatorModule,
    KpiModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
