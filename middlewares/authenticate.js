import HttpError from "../helpers/HttpError.js";
import { findUserById } from '../services/usersServices.js';
import jwt from 'jsonwebtoken';

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
	const { authorization = '' } = req.headers;
	const [bearer, token] = authorization.split(' ');
	if (bearer !== 'Bearer' || !token) {
		throw HttpError(401);
	}

	try {
		const { id } = jwt.verify(token, SECRET_KEY);
		const user = await findUserById(id);
		if (!user || !user.token || user.token !== token) {
			throw HttpError(401);
		}
		req.user = user;
		next();
	} catch (error) {
		next(error);
	}
}

export default authenticate;
