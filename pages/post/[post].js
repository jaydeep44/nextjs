import React from "react";

const Post = ({ user }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body text-center">
            <h3>{user.name}</h3>
            <p>Email: {user.email} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/posts");
  const users = await res.json();

  console.log(users);
  // params: { id: user.id.toString() },

  //return { paths, fallback: false };
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const user = await res.json();

//   return { props: { user } };
// }
