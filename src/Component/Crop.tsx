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

interface CropFrameDimensions {
  top: number
  left: number
  width: number
  height: number
}

type PixelDimensions = {
  [key in keyof CropFrameDimensions]: string;
};

interface ICropState {
  cropFrameDimensions: CropFrameDimensions
}

export class Crop extends React.Component<ICropProps, ICropState> {
  cropFrame = React.createRef<HTMLDivElement>()
  handleRoles = [HandleRoles.TopLeft, HandleRoles.BottomRight] //[HandleRoles.TopLeft, HandleRoles.TopRight, HandleRoles.BottomRight, HandleRoles.BottomLeft]

  constructor(props: ICropProps) {
    super(props);
    this.state = {
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

  componentDidMount() {
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
        return nextState
      })
    }
  }

  dragHandler(e: DraggableEvent, data: DraggableData): void {
    console.log('dragged')
  }

  render() {
    return (
      <div className={classes.wrapper}>
        {this.props.children}
        <div className={classes.crop}>
          <Draggable bounds='parent'>
            <div ref={this.cropFrame} className={classes.cropFrame} style={this.pixelDimensions()}/>
          </Draggable>
          {this.handleRoles.map((role: HandleRoles) => (
            <Handle role={role} dragHandler={this.createDragHandler(role)}/>
          ))}
        </div>
      </div>
    )
  }
}