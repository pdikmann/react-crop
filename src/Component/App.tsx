import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import {Wrapper} from "./Wrapper";
import {ImageDisplay} from "./ImageDisplay";
import {Crop} from "./Crop";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Crop/>
        {/*<ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>*/}
      </Wrapper>
    </div>
  );
}

export default App;
