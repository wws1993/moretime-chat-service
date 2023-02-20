import pino from 'pino'
import pretty from 'pino-pretty'
import dayjs from 'dayjs'

const stream = pretty({
  colorize: true,
  translateTime: 'yyyy/mm/dd hh:mm:ss:l'
})
const Logger = pino(stream)

export default Logger
