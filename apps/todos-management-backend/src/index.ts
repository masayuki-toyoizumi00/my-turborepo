import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prisma } from "@repo/db";

const app = new Hono()

app.get('/', async (c) => {
  const result = await prisma.user.findMany()
  return c.json(result)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
