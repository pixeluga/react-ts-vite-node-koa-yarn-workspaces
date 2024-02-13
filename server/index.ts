import Koa, { Context, Next } from 'koa'
import cors from '@koa/cors'
import Router from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

type HelloRequest = {
  name: string
}

router.get('/', async (ctx: Context, next: Next) => {
  ctx.body = { name: 'John Doe' }

  await next()
})

router.post('/', async (ctx: Context, next: Next) => {
  const data = <HelloRequest>ctx.request.body
  ctx.body = { name: data.name }

  await next()
})

// Middlewares
app.use(cors())
app.use(json())
app.use(logger())
app.use(bodyParser())

// Routes
app.use(router.routes()).use(router.allowedMethods())

const port = 3200
app.listen(port, () => {
  console.log(`🚀 Koa server is running on port http://localhost:${port}/`)
})
