import { WechatyBuilder, ScanStatus, log } from 'wechaty'
import * as qrcodeTerminal from 'qrcode-terminal'

/** @type {import('wechaty').WechatyEventListenerMessage} */
const bot = WechatyBuilder.build({
  name: 'ding-dong-bot',
})

bot.on('scan', (qrcode, status) => {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    qrcodeTerminal.generate(qrcode, { small: true })  // show qrcode on console

    const qrcodeImageUrl = ['https://wechaty.js.org/qrcode/', encodeURIComponent(qrcode)].join('')
    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
})

bot.on('message', client => {
  const msg = client.text()
  console.log(msg);

  // 如果不是关键词开头，则直接返回
  if (msg.indexOf('@bot ')) {
    return
  }
  
  if (msg.replace('@bot ', '') === 'ding') {
    client.say('dong')
  }
})

bot.start()

export default {
  async open() { await bot.start() },
}
