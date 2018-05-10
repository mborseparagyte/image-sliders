import React, { Component } from "react";
import ImageLoader from 'react-imageloader';


class MyImageLoader extends Component{
  preloader() {
    return <img src="spinner.gif" />;
  }
  render(){
    let { siteURL, image, imageDimentions} = this.props;
    return <ImageLoader
      src={`${siteURL}/${image}`}
      wrapper={React.createFactory('div')}
      style={imageDimentions}
      preloader={this.preloader}>
      {"Image load failed!"}
    </ImageLoader>
  }
}

export default MyImageLoader;