import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  const configService = app.get(ConfigService)
  const PORT = configService.get('server.PORT')

  await app.listen(PORT)
  console.log(`🚀 Application is running on: ${await app.getUrl()}`)
}
bootstrap()
