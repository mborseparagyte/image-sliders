import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./styles.css";
import flexboxgrid from "flexboxgrid";
import SimpleSlider from "./simpleslider.js";
import Featured from "./featured.js";
import Trending from "./trending.js";
import Imagery from "./imagery.js";
import ImageryTitle from "./imageryTitle.js";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const images = [
    {
      image: "images/slide_1.jpg",
      title: "Sparx, Stylar & more",
      description: "Upto 60+Extra 10% Off",
      category: "Slippers & Sandals"
    },
    {
      image: "images/slide_2.jpg",
      title: "Puma, Adidas & more",
      description: "Under ₹1999+Extra 10%",
      category: "Men's Footwear"
    },
    {
      image: "images/slide_3.jpg",
      title: "Aero, Kraasa & more",
      description: "Under ₹1499+Extra10% ",
      category: "Men's Shoes"
    },
    {
      image: "images/slide_4.jpg",
      title: "Oomph!, Ishin, Reya...",
      description: "Min 60% Off",
      category: "Sarees, Dress Materials..."
    },
    {
      image: "images/slide_5.jpg",
      title: "3D Printed Bedsheets",
      description: "₹169-₹399",
      category: "Colorful Collection"
    },
    {
      image: "images/slide_6.jpg",
      title: "Bath Furnishing Range",
      description: "From ₹149",
      category: "Towels, Bath Robes & more"
    },
    {
      image: "images/slide_7.jpg",
      title: "Wall Stickers ",
      description: "From ₹109",
      category: "Flipkart SmartBuy"
    }
  ],
  imageryImages = [
    {
      image: "images/slide_1.jpg",
      title: "Sparx, Stylar & more",
      description: "Upto 60+Extra 10% Off",
      category: "Slippers & Sandals"
    },
    {
      image: "images/slide_2.jpg",
      title: "Puma, Adidas & more",
      description: "Under ₹1999+Extra 10%",
      category: "Men's Footwear"
    },
    {
      image: "images/slide_3.jpg",
      title: "Aero, Kraasa & more",
      description: "Under ₹1499+Extra10% ",
      category: "Men's Shoes"
    }
  ],
  imageryTitleImages = [
    {
      image: "images/slide_1.jpg",
      title: "Sparx, Stylar & more",
      description: "Upto 60+Extra 10% Off",
      category: "Slippers & Sandals"
    },
    {
      image: "images/slide_2.jpg",
      title: "Puma, Adidas & more",
      description: "Under ₹1999+Extra 10%",
      category: "Men's Footwear"
    },
    {
      image: "images/slide_3.jpg",
      title: "Aero, Kraasa & more",
      description: "Under ₹1499+Extra10% ",
      category: "Men's Shoes"
    },
    {
      image: "images/slide_4.jpg",
      title: "Oomph!, Ishin, Reya...",
      description: "Min 60% Off",
      category: "Sarees, Dress Materials..."
    }
  ],
  siteURL = `https://react-slideshow.herokuapp.com`;
//expireTime in ISO string
const App = () => (
  <div className="row center-xs" style={{ background: "#d3d3d345" }}>
    <div className="col-xs-10" style={styles}>
      <SimpleSlider images={images} siteURL={siteURL} />
      <Imagery images={imageryImages} siteURL={siteURL} />
      <ImageryTitle
        images={imageryTitleImages}
        siteURL={siteURL}
        sectionTitle={"Featured Brands"}
      />
      <Featured
        images={images}
        sectionTitle={"Deals of the Day"}
        siteURL={siteURL}
        buttonLabel={"View All"}
        expireTime={"2018-05-10T12:28:03.000Z"}
        noOfProductsToShow={5}
      />
      <Trending
        sectionTitle={"Trending Offers"}
        images={images}
        siteURL={siteURL}
        buttonLabel={"View All"}
        noOfProductsToShow={5}
      />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
