"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// ✅ Enable body parser
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
//create course router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
//use router
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User is created successfully',
        data: user
    });
});
courseRouter.post('/inroll-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'Course is inrolled successfully',
        data: course
    });
});
app.get('/', logger, (req, res, next) => {
    try {
        res.send('hello world');
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('user is ');
});
// Handle undefined routes (404)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: 'Route not found'
    });
});
//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
});
exports.default = app;
