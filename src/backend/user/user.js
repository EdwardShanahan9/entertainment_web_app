import { account } from "../appwrite";
import { ID } from "appwrite";

export const createUser = async (email, password) => {
  try {
    const newUser = await account.create(ID.unique(), email, password);

    return newUser;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
