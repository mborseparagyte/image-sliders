import React, { Component } from "react";
import Slider from "react-slick";
class ImageryTitle extends Component {
  render() {
    const settings = {
      infinite: true,
      //autoplay: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let { images, siteURL, sectionTitle } = this.props;
    return (
      <div>
        <h4></h4>
        <div className="">
          <div className="start-xs imageryTitle" style={{ margin: "0px 20px" }}>
            {sectionTitle}
          </div>
          <div className="row" style={{ margin: "0px 20px" }}>
            {images.map(image => {
              return (
                <div className="col-xs imageryImg">
                  <img height="250px" width="100%" alt="" src={`${siteURL}/${image.image}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ImageryTitle;