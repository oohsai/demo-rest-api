import { PrismaClient } from "@prisma/client";

//Controller.ts for writing the logic required

const bookClient = new PrismaClient().book;

//Basic CRUD Operations

//getAllAuthors
export const getAllBooks = async (req: any, res: any) => {
  try {
    const allAuthors = await bookClient.findMany();
    res.status(200).json({ data: allAuthors });
  } catch (e) {
    console.log(e);
  }
};

//getAuthorByID

export const getBookByID = async (req: any, res: any) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
    });
    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

//create Author
// type newAuthor {
//   userName: string;
//   lastName: string;
//   email?: string;
// }
export const createBook = async (req: any, res: any) => {
  try {
    const bookData = req.body;
    const book = await bookClient.create({
      data: {
        title: bookData.title,
        author: {
          connect: { id: bookData.authorId }, ///  Relation create
        },
      },
    });
    res.status(201).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};
//   const newAuth: newAuthor = req.body;

//updateAuthor

export const updateBook = async (req: any, res: any) => {
  try {
    const bookId = req.params.id;
    const book = req.body;
    const author = await bookClient.update({
      where: {
        id: bookId,
      },
      data: book,
    });
    res.status(201).json({ data: book });
  } catch (error) {
    console.log(error);
  }
};

//deleteAuthor

export const deleteBook = async (req: any, res: any) => {
  try {
    const bookId = req.params.id;
    const author = await bookClient.delete({
      where: {
        id: bookId,
      },
    });
    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};
