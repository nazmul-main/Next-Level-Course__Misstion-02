import { error } from 'console'
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
const userRouter = express.Router()
const courseRouter = express.Router()

//use router
app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', courseRouter)

userRouter.post('/create-user', (req: Request, res: Response) => {
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

app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('hello world')
  } catch (error) {
    console.log(error); 
    next(error)
  }

})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('user is ')
})


// Handle undefined routes (404)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    error: 'Route not found'
  });
});



//global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message
    })
  }

})

export default app
  