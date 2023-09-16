import React from "react";
import "./blog.css";
import BlogCard from "./BlogCard";
import { cards } from "./blogs";

function Blog() {

  return (
    <div className="blog">
      <div className="blog-banner">
        <div className="blog-content-container">
          <h1 className="blog-title">Blog's</h1>
        </div>
      </div>

      <div className="container">
        <div className="blog-block-container">
          {cards.map((card,index) => (
            <BlogCard key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
