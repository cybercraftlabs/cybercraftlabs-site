import { posts } from '#site/content'
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import { MDXContent } from '@/components/Blog/mdxComponents';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFormParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFormParams(params);

  if (!post) {
    return {
      title: "Post not found - Cybercraft Labs",
      description: "This post could not be found.",
    };
  }

  return {
    title: `${post.title} - Cybercraft Labs`,
    description: post.description,
    // other metadata
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFormParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <section className="pb-20 pt-25 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50 sm:mx-4">
        <div className="flex justify-center content-center mx-auto gap-5 p-5">
          <div className="lg:w-[80%] sm:w-full md:w-full">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden ">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {post.title}
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span>{" "}
                  {post.author}
                </li>
                <li>
                  <span className="text-black dark:text-white">
                    Published On: {formatDate(post.date)}
                  </span>{" "}
                </li>
                <li>
                  <span className="text-black dark:text-white">
                    Category:
                  </span>{" "}
                  {post.category}
                </li>
              </ul>

              <div className="blog-details">
                <MDXContent code={post.body} />
                {/* {post.body} */}
              </div>

              <SharePost />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section >
    </>
  );
};

export default PostPage;
