import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.css";

function BlogCard({data:{image, title,description,link}}) {

  const navigation = useNavigate();
  return (
    <div className="blog-block">
      <div className="blog-image-container">
        <img src={image} alt="blog" />
      </div>
      <div className="blog-content-container">
        <h1>{title}</h1>
        <p>{description} 
        </p>

        <button className="blog-button"  onClick={() =>navigation(`./${link}`)}>
          Read more
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
