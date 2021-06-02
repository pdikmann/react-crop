import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import '../CSS/ImageDisplay.css'

interface IImageDisplayProps {
  src: string
  alt: string
  width?: string
  height?: string
}

class ImageDisplay extends React.Component<IImageDisplayProps> {
  imgRef = React.createRef<HTMLImageElement>()

  componentDidMount() {
    let elm = this.imgRef.current as HTMLImageElement
    elm.style.setProperty('--custom-width', this.props.width || '50%')
    elm.style.setProperty('--custom-height', this.props.height || '50%')
  }

  render() {
    return <img ref={this.imgRef} className="image-display" src={this.props.src} alt={this.props.alt}/>
  }
}

function App() {
  return (
    <div className="App">
      <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>
    </div>
  );
}

export default App;
