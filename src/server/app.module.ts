import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import ServerConfig from 'config/server.config'
import { ViewModule } from './modules/views/view.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ServerConfig],
    }),
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
