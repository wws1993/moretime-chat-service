import express, { type Express } from 'express'
import responseHeader from './responseHeader'
import routes from '../routes'

function initMiddleware(app: Express) {
  app.use(routes)
  app.use(express.json())
  app.use(responseHeader)
  app.use(express.static('src/static'))
}

export default initMiddleware
