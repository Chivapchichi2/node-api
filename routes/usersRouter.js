import express from 'express';
import { changePassword, signupUser } from '../controllers/usersControllers.js';
import authenticate from '../middlewares/authenticate.js';
import {createUsersSchema, changePasswordSchema} from '../schemas/usersSchemas.js';
import validateBody from '../helpers/validateBody.js';

const usersRouter = express.Router();

usersRouter.post('/signup', validateBody(createUsersSchema), signupUser)
usersRouter.patch('/password', validateBody(changePasswordSchema), authenticate, changePassword);

export default usersRouter;
