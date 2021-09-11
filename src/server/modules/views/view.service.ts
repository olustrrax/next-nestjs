import { Injectable, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import next from 'next'
import { NextServer } from 'next/dist/server/next'

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer
  constructor(private configService: ConfigService) {}
  private NODE_ENV = this.configService.get<string>('server.NODE_ENV')
  async onModuleInit(): Promise<void> {
    try {
      this.server = next({
        dev: this.NODE_ENV !== 'production',
        dir: './src/client',
      })
      await this.server.prepare()
    } catch (error) {
      console.error(error)
    }
  }

  getNextServer(): NextServer {
    return this.server
  }
}
