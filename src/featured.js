import React, { Component } from "react";
import Slider from "react-slick";
import timediff from "timediff";
import ImageLoader from "./imageloader.js";
class SimpleSlider extends Component {
  constructor() {
    super();
    this.state = { expireTime: "" };
  }
  componentDidMount() {
    let { expireTime } = this.props;
    setInterval(() => {
      let dateDiff = timediff(new Date(), new Date(expireTime));
      this.setState({
        expireTime: `${dateDiff.hours} : ${dateDiff.minutes} : ${
          dateDiff.seconds
        }`
      });
    }, 1000);
  }
  getTimeRemail(expireTime) {
    return <div className="timeRemail">{expireTime}</div>;
  }
  getItem(product) {
    let { siteURL } = this.props;
    return (
      <div className="multiTile-Slick-item">
        <ImageLoader
          image={product.image}
          siteURL={siteURL}
          imageDimentions={{
            height: 150,
            width: "100%"
          }}
        />
        <div className="productDesc">
          <div className="fea-product-title"> {product.title}</div>
          <div className="fea-product-desc"> {product.description}</div>
          <div className="fea-product-category"> {product.category}</div>
        </div>
      </div>
    );
  }
  render() {
    let {
      images,
      siteURL,
      buttonLabel,
      sectionTitle,
      noOfProductsToShow
    } = this.props;
    let settings = {
      infinite: true,
      speed: 200,
      slidesToShow: noOfProductsToShow,
      slidesToScroll: noOfProductsToShow
    };
    let { expireTime } = this.state;
    return (
      <div>
        <h4 />
        <div className="row ">
          <div className="col-xs-2 vertMiddle center-xs sectionBackground">
            <div className="">
              <div className="featuredTitle"> {sectionTitle}</div>
              <div className="">{this.getTimeRemail(expireTime)}</div>
              <div className="">
                <button type="button" class="btn btn-primary">
                  {buttonLabel}
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-10 containerDivSpecial">
            <div className="row center-xs ">
              <div className="sliderDiv">
                <Slider {...settings}>
                  {images.map(image => {
                    return <div>{this.getItem(image)}</div>;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SimpleSlider;
