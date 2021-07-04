import { Injectable, OnModuleInit } from '@nestjs/common'
import next from 'next'
import { NextServer } from 'next/dist/server/next'

@Injectable()
export class ViewService implements OnModuleInit {
  private server: NextServer
  private dev = process.env.NODE_ENV !== 'production'
  async onModuleInit(): Promise<void> {
    try {
      this.server = next({ dev: this.dev, dir: './src/client' })
      await this.server.prepare()
    } catch (error) {
      console.log(error)
    }
  }

  getNextServer(): NextServer {
    return this.server
  }
}
