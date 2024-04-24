import React . {useState, useEffect} from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";


const AllPosts = () => {
    const [posts, SetPosts] = useState([])
    useEffect(() => {} , [])
      
    
    appwriteService.getPosts([]).then((posts) => {
        if(posts){SetPosts(posts.documents)}
    })
    
  return <div className="w-full py-8">
    <Container>
        <div className="flex flex-wrap">
        {posts.map((post) => (
            <div className="p-2 w-1" key={post.$id}>
                <PostCard post={post}/>
            </div>
        ))}
        </div>
    </Container>
  </div>;
};

export default AllPosts;
