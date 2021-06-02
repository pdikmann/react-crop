import classes from "../CSS/Crop.module.css";
import React from "react";
import Draggable, {DraggableData, DraggableEvent, DraggableEventHandler} from 'react-draggable'

interface ICropProps {
}

interface IHandleProps {
  dragHandler: DraggableEventHandler
  role: HandleRoles
}

function Handle(props: IHandleProps) {
  let ref = React.createRef<HTMLDivElement>()
  let label = ['tl', 'tr', 'br', 'bl'][props.role as number]
  return (
    <Draggable nodeRef={ref} onDrag={props.dragHandler}>
      <div ref={ref} className={classes.handle}>{label}</div>
    </Draggable>
  )
}

enum HandleRoles {
  TopLeft,
  TopRight,
  BottomRight,
  BottomLeft,
  MAX
}

enum OverlayRoles {
  Top,
  Right,
  Bottom,
  Left,
  MAX
}

type Test = 'a'


export class Crop extends React.Component<ICropProps> {
  // overlays: {
  //   [OverlayRoles]: React.Ref<HTMLDivElement>
  // }
  overlayRoles = [OverlayRoles.Left]
  cropFrame = React.createRef<HTMLDivElement>()
  handleRoles = [HandleRoles.TopLeft, HandleRoles.BottomRight] //[HandleRoles.TopLeft, HandleRoles.TopRight, HandleRoles.BottomRight, HandleRoles.BottomLeft]
  cropFrameDimensions : {
    top: number
    left: number
    width: number
    height: number
  }

  constructor(props: ICropProps) {
    super(props);
    this.cropFrameDimensions = {top: 0, left: 0, width: 0, height: 0}
    // this.overlays = this.overlayRoles.map((role) => ({role, ref: React.createRef<HTMLDivElement>()}))
    this.createDragHandler = this.createDragHandler.bind(this)
  }

  createDragHandler(role: HandleRoles) {
    let cropFrame = this.cropFrame
    return (e: DraggableEvent, data: DraggableData) => {
      let cropFrame = this.cropFrame.current as HTMLDivElement;
      switch (role) {
        case HandleRoles.TopLeft:
          cropFrame.style.setProperty('left', `${data.x}px`)
          cropFrame.style.setProperty('top', `${data.y}px`)
          break
        case HandleRoles.BottomRight:

          break
      }
    }
  }

  dragHandler(e: DraggableEvent, data: DraggableData): void {
    console.log('dragged')
  }

  render() {
    return (
      <div className={classes.crop}>
        <div ref={this.cropFrame} className={classes.cropFrame} style={{top: '100px'}}/>
        {/*{this.overlays.map(({role, ref}) => (*/}
        {/*  <div ref={ref} className={classes.overlay}/>*/}
        {/*))}*/}
        {this.handleRoles.map((role: HandleRoles) => (
          <Handle role={role} dragHandler={this.createDragHandler(role)}/>
        ))}
      </div>
    )
  }
}