import { registerAs } from '@nestjs/config'

export default registerAs('server', () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  NODE_ENV: process.env.NODE_ENV,
}))
