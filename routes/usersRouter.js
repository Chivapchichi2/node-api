import express from 'express';
import { signupUser } from '../controllers/usersControllers.js';

const usersRouter = express.Router();

usersRouter.post('/signup', signupUser)

export default usersRouter;
