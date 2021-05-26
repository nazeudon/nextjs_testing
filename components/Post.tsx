import Link from "next/link";
import { POST } from "../types/Types";

const Post: React.FC<POST> = ({ id, title }) => {
  return (
    <div>
      <span>{id}</span>
      {" : "}
      <Link href={`/posts/${id}`}>
        <a className="border-b border-gray-500 cursor-pointer hover:border-gray-300">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default Post;
