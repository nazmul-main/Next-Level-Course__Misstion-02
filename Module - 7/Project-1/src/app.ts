import express, { NextFunction, Request, Response } from 'express'
const app = express()

// ✅ Enable body parser
app.use(express.json())
app.use(express.text())

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}
//create course router
const useRouter = express.Router()
const courseRouter = express.Router()

//use router
app.use('/api/v1/users', useRouter)
app.use('/api/v1/courses', courseRouter)



useRouter.post('/create-user', (req: Request, res: Response) => {
  const user = req.body
  console.log(user);
  res.json({
    success: true,
    message: 'User is created successfully',
    data: user
  })
})

courseRouter.post('/inroll-course', (req: Request, res: Response) => {
  const course = req.body
  console.log(course);
  res.json({
    success: true,
    message: 'Course is inrolled successfully',
    data: course
  })
})

app.get('/', logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send('server is running!');
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('user is ')
})

export default app
