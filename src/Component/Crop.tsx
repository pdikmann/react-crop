import classes from "../CSS/Crop.module.css";
import React from "react";
import Draggable, {DraggableEventHandler} from 'react-draggable'

interface ICropProps {
}

interface IHandleProps {
  dragHandler: DraggableEventHandler
}

function Handle(props: IHandleProps) {
  let ref = React.createRef<HTMLDivElement>()
  return (
    <Draggable nodeRef={ref} onDrag={props.dragHandler}>
      <div ref={ref} className={classes.handle}/>
    </Draggable>
  )
}

export class Crop extends React.Component<ICropProps> {
  constructor(props: ICropProps) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag() {
    console.log('dragged')
  }

  render() {
    return (
      <div className={classes.crop}>
        <Handle dragHandler={this.handleDrag}/>
      </div>
    )
  }
}