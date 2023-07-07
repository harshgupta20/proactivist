import React from 'react';

import "../styles/Blogs.css";

// IMAGES
// (Passing these image as prop in BlogCard Components, because by folder stucture path import path is same for all images)
import BlogImage1 from "../assets/blogs_image/1.png";
import BlogImage2 from "../assets/blogs_image/2.png";
import BlogImage3 from "../assets/blogs_image/3.png";
import BlogImage4 from "../assets/blogs_image/4.png";
import BlogImage5 from "../assets/blogs_image/5.png";
import BlogImage6 from "../assets/blogs_image/6.png";

import BlogCard from "../components/BlogCard";

const Blogs = () => {

  const blogData = [
    {
      title: "Job Referrals",
      desc: "Get into top tier companies",
      imageURL: BlogImage1
    },
    {
      title: "Resume reviews",
      desc: "Have an irresistible document",
      imageURL: BlogImage2
    },
    {
      title: "Learning resources",
      desc: "Stay industry ready",
      imageURL: BlogImage3
    },
    {
      title: "Interview experiences",
      desc: "From rejection to acceptance",
      imageURL: BlogImage4
    },
    {
      title: "networking",
      desc: "Be with like-minded",
      imageURL: BlogImage5
    },
    {
      title: "discussions",
      desc: "Feeling stuck? Ask it",
      imageURL: BlogImage6
    },

  ]


  return (
    <>
      <div id="blog-main">
        <div id="blog_box1">
          <div id="blog_card">
            <BlogCard title={blogData[0].title} desc={blogData[0].desc} image={blogData[0].imageURL} />
          </div>
        </div>
        <div id="blog_box2">
          <div id="blog_card2_1">
            <BlogCard title={blogData[1].title} desc={blogData[1].desc} image={blogData[1].imageURL} />
          </div>
          <div id="blog_card2_2">
            <BlogCard title={blogData[2].title} desc={blogData[2].desc} image={blogData[2].imageURL} />
          </div>
        </div>
        <div id="blog_box1">
          <BlogCard title={blogData[3].title} desc={blogData[3].desc} image={blogData[3].imageURL} />
        </div>
        <div id="blog_box2">
          <div id="blog_card2_1">
            <BlogCard title={blogData[4].title} desc={blogData[4].desc} image={blogData[4].imageURL} />
          </div>
          <div id="blog_card2_2">
            <BlogCard title={blogData[5].title} desc={blogData[5].desc} image={blogData[5].imageURL} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs