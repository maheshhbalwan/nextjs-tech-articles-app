import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/post.module.css";
import posts from "../../db/posts.json";

export default function Post(props) {
  const router = useRouter();
  return (
    <>
      <h3>Hello</h3>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <h2 className={styles.title}>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <button className={styles.button} onClick={() => router.push("/blog")}>
        Click me to programmatically navigate or redirect
      </button>
    </>
  );
}

export async function getStaticPaths() {
  const thePaths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const thePost = posts.filter((post) => post.slug === context.params.slug)[0];

  return {
    props: {
      post: thePost,
      title: thePost.title,
    },
  };
}
