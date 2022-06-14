import Navbar from "../component/navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const contact = ({ data }) => {
  console.log(data.posts, "data");
  return (
    <div>
      <Navbar />
      {data.posts.slice(0, 5).map((item) => (
        <div>
          <span>
            <h3> ID:{item.id}</h3>
            <Link href={`/blogdata/${item.id}`}>
              <h3>Title: {item.title} </h3>
            </Link>
            <h3>Body: {item.body} </h3>
          </span>
        </div>
      ))}
      <h1>Heloo contact</h1>
    </div>
  );
};

export default contact;
