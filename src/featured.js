import React, { Component } from "react";
import Slider from "react-slick";
class SimpleSlider extends Component {
  getTimeRemail(expireTime) {
    return <div className="timeRemail">{"10:15:20"}</div>
  }
  render() {
    const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let { images, siteURL, expireTime, buttonLabel } = this.props;
    return (
      <div>
        <h4>Single Item</h4>
        <div className='row sliderparent'>
          <div className='col-xs-3'>

            <div className=''>
              <div className='featuredTitle'> {"Deals of the Day"}</div>
              <div className=''>
                {this.getTimeRemail(expireTime)}
              </div>
              <div className=''>
                <button type="button" class="btn btn-primary">{buttonLabel}</button>
              </div>
            </div>
          </div>
          <div className='col-xs-9'>
            <div className="row center-xs ">
              <div className="sliderDiv">
                <Slider {...settings}>
                  {images.map(image => {
                    return (
                      <div >
                        <div className="multiTile-Slick-item">
                          <img height="200px" width="100%" alt="" src={`${siteURL}/${image}`} />
                        </div>
                      </div>
                    );
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