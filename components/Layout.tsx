import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface TITLE {
  title: string;
}

const Layout: React.FC<TITLE> = ({ children, title = "Nextjs" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="home-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a
                  data-testid="blog-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Blog
                </a>
              </Link>
              <Link href="/comment-page">
                <a
                  data-testid="comment-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Comment
                </a>
              </Link>
              <Link href="/context-page">
                <a
                  data-testid="context-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Context
                </a>
              </Link>
              <Link href="/task-page">
                <a
                  data-testid="task-nav"
                  className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700"
                >
                  Todos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-12 border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
