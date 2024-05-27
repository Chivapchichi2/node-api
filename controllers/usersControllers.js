import HttpError from "../helpers/HttpError.js";
import { createUser, findUserByEmail } from "../services/usersServices.js"

export const signupUser = async (req, res, next) => {
	try {
		const { email, name } = req.body;
		const candidate = await findUserByEmail(email);
		if (candidate) {
			throw HttpError(409);
		}
		const { token } = await createUser(req.body);
		res.status(201).json({
			token,
			user: { name, email },
		});
	} catch (error) {
		next(error);
	}
}
