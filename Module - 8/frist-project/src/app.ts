import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  const a = 20

  res.send(a)
})
console.log(process.cwd())
export default app
