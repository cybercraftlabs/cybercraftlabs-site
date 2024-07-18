import { Post } from "#site/content";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
