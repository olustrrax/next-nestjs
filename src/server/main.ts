import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const PORT = configService.get('server.port')

  await app.listen(PORT, (): void => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
  })
}
bootstrap()
