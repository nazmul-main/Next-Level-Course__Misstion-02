import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req : Request, res: Response) => {
  res.send('server is runing!')
})

export default app