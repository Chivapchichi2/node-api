// import contactsService from "../services/contactsServices.js";
import { add, getAll, deleteOne } from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// export const getOneContact = (req, res) => {};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOne(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const result = await add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// export const updateContact = (req, res) => {};
