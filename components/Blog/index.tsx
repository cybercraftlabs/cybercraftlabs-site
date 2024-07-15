import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "@/components/Blog/BlogItem";
import { posts } from "#site/content";


const Blog = async () => {
  const blogData = posts;
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogData.map((post) => {
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
