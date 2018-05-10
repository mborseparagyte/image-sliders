import React, { Component } from "react";
import Slider from "react-slick";
import timediff from 'timediff';
class SimpleSlider extends Component {
  constructor(){
    super();
    this.state = { expireTime:""}
  }
  componentDidMount(){
    let { expireTime} = this.props;
    // setInterval(()=>{
    // let dateDiff = timediff(new Date(), new Date(expireTime));
    // this.setState({ expireTime: `${dateDiff.hours} : ${dateDiff.minutes} : ${dateDiff.seconds}` })
    // },1000)
  }
  getTimeRemail(expireTime) {
    return <div className="timeRemail">{expireTime}</div>
  }
  getItem(product){
    let { siteURL} =this.props;
    return <div className="multiTile-Slick-item">
      <img height="150px" width="100%" alt="" src={`${siteURL}/${product.image}`} />
      <div className='fea-product-title'> {product.title}</div>
      <div className='fea-product-desc'> {product.description}</div>
      <div className='fea-product-category'> {product.category}</div>
    </div>
  }
  render() {
    const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let { images, siteURL, buttonLabel, sectionTitle } = this.props;
    let { expireTime} = this.state;
    return (
      <div>
        <h4></h4>
        <div className='row sliderparent'>
          <div className='col-xs-3 vertMiddle center-xs'>

            <div className=''>
              <div className='featuredTitle'> {sectionTitle}</div>
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
                        {this.getItem(image)}
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