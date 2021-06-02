import React from "react";
import classes from '../CSS/ImageDisplay.module.css'

interface IImageDisplayProps {
  src: string
  alt: string
  width?: string
  height?: string
}

export class ImageDisplay extends React.Component<IImageDisplayProps> {
  imgRef = React.createRef<HTMLImageElement>()

  componentDidMount() {
    let elm = this.imgRef.current as HTMLImageElement
    elm.style.setProperty('--custom-width', this.props.width || '50%')
    elm.style.setProperty('--custom-height', this.props.height || '50%')
  }

  render() {
    return <img ref={this.imgRef} className={classes.imageDisplay} src={this.props.src} alt={this.props.alt}/>
  }
}