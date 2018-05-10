import React, { Component } from "react";
import Slider from "react-slick";
import ImageLoader from "./imageloader.js";
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
        <h4 />
        <div className="containerDiv" style={{ margin: "0px -15px" }}>
          <div className="row" style={{ margin: "0px 20px" }}>
            {images.map(image => {
              return (
                <div className="col-xs imageryImg pointer">
                  <ImageLoader
                    image={image.image}
                    siteURL={siteURL}
                    imageDimentions={{
                      height: 300,
                      width: "100%"
                    }}
                  />
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
