import express from 'express'

const router = express.Router()

// 路由配置
router.get('/bot', (_, res) => res.send('hi, bot!'))

export default router
