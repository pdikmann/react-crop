import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import {ImageDisplay} from "./ImageDisplay";

function App() {
  return (
    <div className="App">
      <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>
    </div>
  );
}

export default App;
