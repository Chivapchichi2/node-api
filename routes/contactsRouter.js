import express from "express";
import {
  getAllContacts,
  // getOneContact,
  deleteContact,
  createContact,
  // updateContact,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import { createContactSchema } from "../schemas/contactsSchemas.js";
import checkId from "../middlewares/checkId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", checkId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

// contactsRouter.put("/:id", updateContact);

export default contactsRouter;
