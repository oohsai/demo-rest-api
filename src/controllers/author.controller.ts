import { PrismaClient } from "@prisma/client";

//Controller.ts for writing the logic required

const authorClient = new PrismaClient().author;

//Basic CRUD Operations

//getAllAuthors
export const getAllAuthors = async (req: any, res: any) => {
  try {
    const allAuthors = await authorClient.findMany({
      include: {
        books: true,
      },
    });
    res.status(200).json({ data: allAuthors });
  } catch (e) {
    console.log(e);
  }
};

//getAuthorByID

export const getAuthorByID = async (req: any, res: any) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });
    res.status(200).json({ data: author });
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
export const createAuthor = async (req: any, res: any) => {
  try {
    const newAuth = req.body;
    const author = await authorClient.create({
      data: newAuth,
    });
    res.status(201).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};
//   const newAuth: newAuthor = req.body;

//updateAuthor

export const updateAuthor = async (req: any, res: any) => {
  try {
    const authorId = req.params.id;
    const newAuth = req.body;
    const author = await authorClient.update({
      where: {
        id: authorId,
      },
      data: newAuth,
    });
    res.status(201).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};

//deleteAuthor

export const deleteAuthor = async (req: any, res: any) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.delete({
      where: {
        id: authorId,
      },
    });
    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
};
