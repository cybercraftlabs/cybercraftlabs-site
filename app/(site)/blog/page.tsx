import BlogItem from "@/components/Blog/BlogItem";
import { posts } from "#site/content";
import { Metadata } from "next";
import { sortPosts } from "@/lib/utils";
import NewBlogItem from "@/components/Blog/NewBlogItem";

export const metadata: Metadata = {
  title: "Cybercraft Labs - Blog",
  description: "Blog page for Cybercraft Labs Pvt Ltd.",
  // other metadata
};

const BlogPage = async () => {
  const blogData = sortPosts(posts.filter((post) => post.published));
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-10 lg:py-25 xl:py-5">
        <div className="mx-auto mt-5 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogData.map((post) => {
              const { slug, title, mainImage, description, category } = post;
              return (
                <NewBlogItem
                  key={slug}
                  slug={slug}
                  title={title}
                  mainImage={mainImage}
                  description={description}
                  category={category}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
