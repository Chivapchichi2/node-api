import HttpError from "../helpers/HttpError.js";
import { createUser, findUserByEmail, findUserById } from "../services/usersServices.js"

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

export const changePassword = async (req, res, next) => {
	console.log(req.body);
	// const { oldPassword, newPassword } = req.body;
	// const { id } = req.user;
	try {
		const user = await findUserById(req.user.id);
		const compared = await user.comparePassword(req.body.oldPassword);
		if (!compared) {
			throw HttpError(403);
		}
		await changePassword(req.user.id, req.body.newPassword);
		res.sendStatus(204);

	} catch (error) {
		next(error);
	}
}
