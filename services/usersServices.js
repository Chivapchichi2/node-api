import User from '../db/models/User.js';
import jwt from 'jsonwebtoken';

const { SECRET_KEY } = process.env;

export const findUserByEmail = (email) => User.findOne({ email });

const updateUserWithToken = async (id) => {
	const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: '24h' })
	return await User.findByIdAndUpdate(id, { token }, { new: true });
}

export const createUser = async (userData) => {
	const user = new User(userData);
	await user.hashPassword();
	await user.save();
	return updateUserWithToken(user._id);
}
