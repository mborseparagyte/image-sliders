
import React, { Component } from "react";
import Slider from "react-slick";
import { render } from 'react-dom';
import Hello from './Hello';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./styles.css";
import flexboxgrid from "flexboxgrid";
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const images=[
  "images/slide_1.jpg",
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg",
  "images/slide_5.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg"
],
siteURL = `https://react-slideshow.herokuapp.com`;

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h4>Single Item</h4>
        <div className="row center-xs">
          <div className="sliderparent">
            <Slider {...settings}>
              {images.map((image) => {
                return <div>
                  <img alt="" src={`${siteURL}/${image}`} />
                </div>
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
const App = () => (
  <div style={styles}>
    <SimpleSlider />
  </div>
);

render(<App />, document.getElementById('root'));
