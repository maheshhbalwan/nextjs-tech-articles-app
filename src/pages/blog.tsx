import Link from "next/link";
import Posts from "../db/posts.json";

export default function Blog() {
  return (
    <>
      <h2>The Blog</h2>
      {Posts &&
        Posts.map((post) => {
          return (
            <div className="box" key={post.title}>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
              <hr />
            </div>
          );
        })}
    </>
  );
}

// export default function Blog(props) {
//   return (
//     <>
//       <h2>The Blog</h2>
//       {props.posts.map((post, index) => {
//         return (
//           <div key={index}>
//             <h3>
//               <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//             </h3>
//             <p>{post.content}</p>
//             <hr />
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://maheshhbalwan.github.io/json-example/posts.json"
//   );
//   const data = await response.json();

//   return {
//     props: {
//       posts: data.posts,
//     },
//   };
// }
