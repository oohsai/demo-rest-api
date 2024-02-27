import { Router } from "express";

import {
  getAllAuthors,
  getAuthorByID,
  deleteAuthor,
  updateAuthor,
  createAuthor,
} from "../controllers/author.controller";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorByID);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;
