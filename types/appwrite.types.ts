import { Models } from "node-appwrite";

export interface Blog extends Models.Document {
    coverImage: string;
    title: string;
    description: string;
    author: string;
    content: string;
    category: string;
    tags: string[];
}