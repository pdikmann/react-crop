import classes from "../CSS/Crop.module.css";
import React from "react";
import Draggable, {DraggableData, DraggableEvent, DraggableEventHandler} from 'react-draggable'

export interface CropRect {
  x: number
  y: number
  width: number
  height: number
}

enum HandleRoles {
  TopLeft,
  TopRight,
  BottomRight,
  BottomLeft,
  MAX
}

interface IHandleProps {
  dragHandler: DraggableEventHandler
  role: HandleRoles
}

function Handle(props: IHandleProps) {
  let ref = React.createRef<HTMLDivElement>()
  let label = ['tl', 'tr', 'br', 'bl'][props.role as number]
  return (
    <Draggable bounds='parent' nodeRef={ref} onDrag={props.dragHandler}>
      <div ref={ref} className={classes.handle}>{label}</div>
    </Draggable>
  )
}

interface CropFrameDimensions {
  top: number
  left: number
  width: number
  height: number
}

type PixelDimensions = {
  [key in keyof CropFrameDimensions]: string;
};

interface ICropProps {
  onChange: (e: CropRect) => any
}

interface ICropState {
  cropRect: CropRect
  cropFrameDimensions: CropFrameDimensions
}

export default class Crop extends React.Component<ICropProps, ICropState> {
  cropFrame = React.createRef<HTMLDivElement>()
  handleRoles = [HandleRoles.TopLeft, HandleRoles.BottomRight] //[HandleRoles.TopLeft, HandleRoles.TopRight, HandleRoles.BottomRight, HandleRoles.BottomLeft]

  constructor(props: ICropProps) {
    super(props);
    this.state = {
      cropRect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      cropFrameDimensions: {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }
    }
    this.createDragHandler = this.createDragHandler.bind(this)
    this.pixelDimensions = this.pixelDimensions.bind(this)
  }

  pixelDimensions() {
    let dims: PixelDimensions = {top: '', left: '', width: '', height: ''}
    for (let k in this.state.cropFrameDimensions) {
      dims[k as keyof PixelDimensions] = `${this.state.cropFrameDimensions[k as keyof CropFrameDimensions]}px`
    }
    return dims as PixelDimensions
  }

  createDragHandler(role: HandleRoles) {
    return (e: DraggableEvent, data: DraggableData) => {
      // if (role === HandleRoles.TopLeft) return false
      this.setState(prevState => {
        let nextState = {...prevState}
        let dims = nextState.cropFrameDimensions
        switch (role) {
          case HandleRoles.TopLeft:
            dims.top = data.y
            dims.left = data.x
            dims.width = dims.width - (data.deltaX / 2)
            dims.height = dims.height - (data.deltaY / 2)
            break
          case HandleRoles.BottomRight:
            dims.width = data.x - dims.left
            dims.height = data.y - dims.top
            break
        }
        nextState.cropRect = {
          x: dims.left,
          y: dims.top,
          width: dims.width,
          height: dims.height
        }
        this.props.onChange(nextState.cropRect)
        return nextState
      })
    }
  }

  render() {
    return (
      <div className={classes.wrapper}>
        {this.props.children}
        <div className={classes.crop}>
          <Draggable bounds='parent' nodeRef={this.cropFrame}>
            <div ref={this.cropFrame} className={classes.cropFrame} style={this.pixelDimensions()}/>
          </Draggable>
          {this.handleRoles.map((role: HandleRoles, i: number) => (
            <Handle key={i} role={role} dragHandler={this.createDragHandler(role)}/>
          ))}
        </div>
      </div>
    )
  }
}