import { Injectable } from '@nestjs/common'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
import { join } from 'path'

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      typePaths: ['./src/**/*.gql'],
      path: '/',
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: 'ignore',
      },
      definitions: {
        path: join(process.cwd(), 'src/server/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      context: ({ req }) => ({ req }),
    }
  }
}
