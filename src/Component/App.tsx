import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'

interface IImageDisplay {
  src: string
  alt: string
}

function ImageDisplay (props: IImageDisplay){
  return <img src={props.src} alt={props.alt} />
}

function App() {
  return (
    <div className="App">
      <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'} />
    </div>
  );
}

export default App;
