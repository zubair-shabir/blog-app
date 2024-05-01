import React, { useState, useEffect } from "react";
import { Container, PostCard, EditForm } from "../components";
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [post, SetPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
         

          SetPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container><EditForm {...post} /></Container>
    </div>
  ) : null;
};

export default EditPost;
