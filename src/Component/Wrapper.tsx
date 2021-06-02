import classes from "../CSS/Wrapper.module.css";
import React from "react";

interface IWrapperProps {
  children: React.ReactNode
}

export function Wrapper(props: IWrapperProps) {
  return (
    <div className={classes.imageWrapper}>
      {props.children}
    </div>
  )
}