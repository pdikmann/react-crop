import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import '../CSS/ImageDisplay.css'

interface IImageDisplay {
  src: string
  alt: string
  width?: number
  height?: number
}

function ImageDisplay (props: IImageDisplay){
  return <img className="image-display" src={props.src} alt={props.alt} />
}

function App() {
  return (
    <div className="App">
      <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'} />
    </div>
  );
}

export default App;
