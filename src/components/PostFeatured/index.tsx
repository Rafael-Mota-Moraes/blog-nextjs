import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostConverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
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
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postHeading="h1"
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
}
