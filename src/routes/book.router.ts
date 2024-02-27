import { Router } from "express";

import {
  getAllBooks,
  getBookByID,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookByID);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
