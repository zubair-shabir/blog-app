import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        SetPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              No Posts Availabe to Read to Read Post
            </h1>
          </div>
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
