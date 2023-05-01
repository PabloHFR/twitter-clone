import { CommentItem } from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

export function CommentFeed({ comments }: CommentFeedProps) {
  return (
    <>
      {comments?.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
}
