import React from 'react';

import "../styles/BlogCard.css";

const BlogCard = ({title, desc, image}) => {


  const Bcard_main = {
    backgroundImage: `url(${image})`,
  }

  return (
    <>
        <div id="Bcard-main" style={Bcard_main} >
            <div id="Bcard-content">
                <p id="Bcard-p">{title}</p>
                <h2 id="Bcard-h2">{desc}</h2>
            </div>
        </div>
    </>
  )
}

export default BlogCard