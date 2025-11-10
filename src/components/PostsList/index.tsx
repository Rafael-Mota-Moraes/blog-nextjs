import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostConverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export default async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex group flex-col gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
                priority: true,
              }}
            />
            <PostSummary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
