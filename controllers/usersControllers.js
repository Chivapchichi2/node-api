import HttpError from "../helpers/HttpError.js";
import * as usersServices from "../services/usersServices.js"

export const signupUser = async (req, res, next) => {
	try {
		const { email, name } = req.body;
		const candidate = await usersServices.findUserByEmail(email);
		if (candidate) {
			throw HttpError(409);
		}
		const { token } = await usersServices.createUser(req.body);
		res.status(201).json({
			token,
			user: { name, email },
		});
	} catch (error) {
		next(error);
	}
}

export const changePassword = async (req, res, next) => {
	const { oldPassword, newPassword } = req.body;
	const { id: userId  } = req.user;
	try {
		const user = await usersServices.findUserById(userId);
		const compared = await user.comparePassword(oldPassword);
		if (!compared) {
			throw HttpError(403);
		}
		await usersServices.changePassword(userId, newPassword);
		res.sendStatus(204);

	} catch (error) {
		next(error);
	}
}
