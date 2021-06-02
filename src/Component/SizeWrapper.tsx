import React from "react";
import classes from '../CSS/SizeWrapper.module.css'

interface ISizeWrapperProps {
  children: React.ReactNode
  width?: string
  height?: string
}

export class SizeWrapper extends React.Component<ISizeWrapperProps> {
  wrapperRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    let elm = this.wrapperRef.current as HTMLDivElement
    elm.style.setProperty('--custom-width', this.props.width || '50%')
    elm.style.setProperty('--custom-height', this.props.height || '50%')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className={classes.sizeWrapper}>
        {this.props.children}
      </div>
    )
  }
}