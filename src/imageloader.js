import React, { Component } from "react";
import ImageLoader from 'react-imageloader';
import LazyLoad from 'react-lazyload';

class MyImageLoader extends Component{
  preloader() {
    return <img src="spinner.gif" />;
  }
  render(){
    let { siteURL, image, imageDimentions} = this.props;
    return (<LazyLoad height={200}>
              <ImageLoader
                src={`${siteURL}/${image}`}
                wrapper={React.createFactory('div')}
                style={imageDimentions} 
                preloader={this.preloader}>
                {"Image load failed!"} 
              </ImageLoader>
      </LazyLoad>)
  }
}

export default MyImageLoader;