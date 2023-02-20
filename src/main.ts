
import express from 'express'
import { log } from 'wechaty'
import baseConfig from '../config/base.config'
import initMiddleware from './middleware'

const app = express()

initMiddleware(app)

const PORT = baseConfig.port
// 启动
app.listen(PORT, async () => {
  log.info(`http://localhost:${PORT}`)
})
