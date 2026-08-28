import PostsList from "@/components/PostsList";
import { getAllPost } from "@/lib/api";
import { use } from "react";

export default async function Page() {
  const posts = await getAllPost();

  return (
    <div className="wrap">
      <div className="main-heading">
        <h2>Writings</h2>
        <p className="subtitle">
          Data placeholder — nanti diganti dengan tulisan asli.
        </p>
      </div>
      <PostsList posts={posts} />
    </div>
  );
}
