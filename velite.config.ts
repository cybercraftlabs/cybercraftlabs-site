import { defineConfig, defineCollection, s } from "velite";

//blog/hello-world

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      mainImage: s.string(),
      slug: s.path(),
      author: s.string().max(50),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash-6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
