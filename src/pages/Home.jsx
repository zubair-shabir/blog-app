import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        SetPosts(posts.documents);
      }
    });
  }, []);
  if (!userData) {
    return (
      <Container>
        <div className="flex flex-wrap p-2 w-full min-h-[80vh] justify-center items-center">
          <h1 className="text-2xl font-bold ">
            <Link className="hover:text-gray-500" to="/login">
              Login
            </Link>{" "}
            to Read Posts
          </h1>
        </div>
      </Container>
    );
  }

  if (posts && posts.length === 0) {
    return (
      <Container>
        <div className="flex flex-wrap p-2 w-full min-h-[80vh] justify-center items-center">
          <h1 className="text-2xl font-bold hover:text-gray-500">
            No Posts Availabe to Read
          </h1>
        </div>
      </Container>
    );
  }
  return (
    <div className="w-full py-8 flex justify-evenly flex-wrap">
      {posts.map((post) => (
        <div className="p-2  " key={post.$id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
