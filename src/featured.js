import React, { Component } from "react";
import Slider from "react-slick";
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let { images, siteURL } = this.props;
    return (
      <div>
        <h4>Single Item</h4>
        <div className='row'>
          <div className='col-xs'>
            
          </div>
          <div className='col-xs'>
            <div className="row center-xs sliderparent">
              <div className="sliderDiv">
                <Slider {...settings}>
                  {images.map(image => {
                    return (
                      <div >
                        <div className="multiTile-Slick-item">
                          <img height="150px" width="100%" alt="" src={`${siteURL}/${image}`} />
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