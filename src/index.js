import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./styles.css";
import flexboxgrid from "flexboxgrid";
import SimpleSlider from "./simpleslider.js";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const images = [
    "images/slide_1.jpg",
    "images/slide_2.jpg",
    "images/slide_3.jpg",
    "images/slide_4.jpg",
    "images/slide_5.jpg",
    "images/slide_6.jpg",
    "images/slide_7.jpg"
  ],
  siteURL = `https://react-slideshow.herokuapp.com`;

const App = () => (
  <div style={styles}>
    <SimpleSlider images={images} siteURL = {siteURL}/>
  </div>
);

render(<App />, document.getElementById("root"));
