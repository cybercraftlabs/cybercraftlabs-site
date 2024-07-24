import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import BlogItem from "@/components/Blog/BlogItem";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import NewBlogItem from "./NewBlogItem";


const Blog = async () => {
  const blogData = sortPosts(posts.filter((post) => post.published)).slice(0, 3);
  return (
    <section className="md:py-20 sm:py-15 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay updated with the latest insights and trends in software development, DevOps, and cybersecurity. Our blog features expert articles, industry news, and practical tips to help you stay ahead in the tech world. Discover how our innovative solutions can drive your business forward.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
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
          {/* {blogData.map((post) => {
            const { slug, title, mainImage, description } = post;
            return (
              <BlogItem
                key={slug}
                slug={slug}
                title={title}
                mainImage={mainImage}
                description={description}
              />
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
