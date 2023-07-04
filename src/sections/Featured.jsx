import React from 'react';
import "../styles/Featured.css";

// Featured Brand Image
import Washington from "../assets/wahington.PNG";
import TechCrunch from "../assets/techcrunch.PNG";
import Wired from "../assets/wired.PNG";
import FastCompany from "../assets/fastcompnay.PNG";

const Featured = () => {

    const imageData = [
        Washington,
        TechCrunch,
        Wired,
        FastCompany
    ]

  return (
    <>
        <div id="featured-main">
            <p id="featured-p">Featured in</p>

            <div id="featured-brands">
                {
                    imageData.map((data)=> {
                        return (
                            <img src={data} alt="featured_brand_image" id="featured-brand-img" />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Featured