import React, { Component } from "react";
import Slider from "react-slick";
class Imagery extends Component {
  render() {
    const settings = {
      infinite: true,
      //autoplay: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let { images, siteURL } = this.props;
    return (
      <div>
        <h4></h4>
        <div className="">
          <div className="row">
              {images.map(image => {
                return (
                  <div className="col-xs">
                    <img height="400px" width="100%" alt="" src={`${siteURL}/${image.image}`} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default Imagery;