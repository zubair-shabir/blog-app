import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const PostCard = ({ $id, title, featuredImage, content }) => {
  if (title == null || content === null) return;

  return (
    <Link to={`/post/${$id}`}>
      {/* <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt="title"
            className="rounded-xl w-60"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div> */}
      <div className="relative h-[400px] w-[300px] rounded-md">
        {featuredImage && (
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <p className="mt-2 text-sm text-gray-300 line-clamp-2 ">
            {parse(content)}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Artical &rarr;
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
