import React from "react";
import classes from '../CSS/SizeWrapper.module.css'

interface ISizeWrapperProps {
  children: React.ReactNode
  width: string
  height: string
}

export function SizeWrapper(props: ISizeWrapperProps) {
  return (
    <div className={classes.sizeWrapper} style={{width: props.width, height: props.height}}>
      {props.children}
    </div>
  )
}