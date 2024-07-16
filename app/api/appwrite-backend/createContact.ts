"use server";

import {
  databases,
  DATABASE_ID,
  CONTACT_COLLECTION_ID,
} from "@/lib/appwrite.config";

export const createContactDocument = async (
  data: Record<string, any>,
): Promise<{ success: boolean; message: string }> => {
  try {
    await databases.createDocument(
      DATABASE_ID!,
      CONTACT_COLLECTION_ID!,
      "unique()",
      data,
    );
    return {
      success: true,
      message: "Your message has been successfully sent!",
    };
  } catch (error) {
    console.error("Error creating document:", error);
    return {
      success: false,
      message: "There was an error while sending your message.",
    };
  }
};
