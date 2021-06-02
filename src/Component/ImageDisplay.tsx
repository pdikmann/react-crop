import React from "react";
import classes from '../CSS/ImageDisplay.module.css'

interface IImageDisplayProps {
  src: string
  alt: string
}

export class ImageDisplay extends React.Component<IImageDisplayProps> {
  render() {
    return <img className={classes.imageDisplay} src={this.props.src} alt={this.props.alt}/>
  }
}