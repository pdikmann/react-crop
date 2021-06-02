import classes from "../CSS/CenteringWrapper.module.css";
import React from "react";

interface IWrapperProps {
  children: React.ReactNode
}

export function CenteringWrapper(props: IWrapperProps) {
  return (
    <div className={classes.centeringWrapper}>
      {props.children}
    </div>
  )
}