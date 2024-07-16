"use server";

import {
  databases,
  DATABASE_ID,
  NEWSLETTER_COLLECTION_ID,
} from "@/lib/appwrite.config";

export const createDocument = async (
  data: Record<string, any>,
): Promise<{ success: boolean; message: string }> => {
  try {
    await databases.createDocument(
      DATABASE_ID!,
      NEWSLETTER_COLLECTION_ID!,
      "unique()",
      data,
    );
    return {
      success: true,
      message: "You've successfully subscribed to our newsletter!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "There was an error while adding you to our list.",
    };
  }
};
