import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";
import { PostModel } from "@/models/post-model";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight block"
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
