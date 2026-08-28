import { getDetailPost } from "@/lib/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function page({ params }: PageProps) {
  const { id } = await params;
  const post = await getDetailPost(Number(id));

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <div className="content">{post.body}</div>
    </div>
  );
}

export default page;