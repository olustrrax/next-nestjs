import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import ServerConfig from 'config/server.config'
import { ViewModule } from './modules/views/view.module'
import { GraphQLModule } from '@nestjs/graphql'
import { GraphqlOptions } from './graphql.option'
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ServerConfig],
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
