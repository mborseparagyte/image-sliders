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
        <h4 />
        <div className="containerDiv" style={{ margin: "0px -15px" }}>
          <div className="row" style={{ margin: "0px 20px" }}>
            {images.map(image => {
              return (
                <div className="col-xs imageryImg pointer">
                  <img
                    height="300px"
                    width="100%"
                    alt=""
                    src={`${siteURL}/${image.image}`}
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
