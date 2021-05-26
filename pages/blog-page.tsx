import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/fetch";
import { POST } from "../types/Types";

interface STATICPROPS {
  posts: POST[];
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="mb-10 text-4xl">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPostsData();

  return {
    props: { posts },
  };
};
