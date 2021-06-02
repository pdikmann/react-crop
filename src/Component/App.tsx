import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import {Wrapper} from "./Wrapper";
import {ImageDisplay} from "./ImageDisplay";
import classes from '../CSS/Crop.module.css'

interface ICropProps {
}

function Crop(){
  return (
    <div className={classes.crop}>
      <div className={classes.handle}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Crop/>
        <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>
      </Wrapper>
    </div>
  );
}

export default App;
