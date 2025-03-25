import { Client, Account } from "appwrite";

const client = new Client().setProject(import.meta.env.VITE_PROJECT_ID);

export const account = new Account(client);
