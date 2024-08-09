export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const post: Post[] = await awaitPost();

  return post.map((post) => ({
    slug: post.slug,
  }));
}

async function awaitPost(): Promise<Post[]> {
  return await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await awaitPost();
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
