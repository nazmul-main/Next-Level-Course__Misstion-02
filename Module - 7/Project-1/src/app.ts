import express, { NextFunction, Request, Response } from 'express'
const app = express()

// ✅ Enable body parser
app.use(express.json())

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}

app.get('/', logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send('server is running!');
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('user is ')
})

export default app
