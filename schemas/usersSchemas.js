import Joi from "joi";

export const createUsersSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
	password: Joi.string().required(),
});

export const changePasswordSchema = Joi.object({
	oldPassword: Joi.string().required(),
	newPassword: Joi.string().required(),
})
