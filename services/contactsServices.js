import Contact from "../db/models/Contact.js";

export const getAll = () => Contact.find();

export const add = (data) => Contact.create(data);

export const deleteOne = (id) => Contact.findByIdAndDelete(id);
