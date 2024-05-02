import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

const AllPosts = () => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        SetPosts(posts.documents);
      }
    });
  }, []);
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
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
