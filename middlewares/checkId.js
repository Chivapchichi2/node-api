import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const checkId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid`));
    return;
  }
  next();
};

export default checkId;
