import React, { Component } from "react";
import Slider from "react-slick";
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let { images, siteURL } = this.props;
    return (
      <div>
        <h4>Single Item</h4>
        <div className="row center-xs sliderparent">
          <div className="sliderDiv">
            <Slider {...settings}>
              {images.map(image => {
                return (
                  <div>
                    <img height="400px" alt="" src={`${siteURL}/${image}`} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default SimpleSlider;