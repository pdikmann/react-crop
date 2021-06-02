import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import {CenteringWrapper} from "./CenteringWrapper";
import {ImageDisplay} from "./ImageDisplay";
import Crop, {CropRect} from "./Crop"
import {SizeWrapper} from "./SizeWrapper"

function cropCallback(e: CropRect) {
  console.log(e)
}

function App() {
  return (
    <div className="App">
      <CenteringWrapper>
        <SizeWrapper width={'400px'} height={'300px'}>
          <Crop onChange={cropCallback}>
            <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>
          </Crop>
        </SizeWrapper>
      </CenteringWrapper>
    </div>
  );
}

export default App;
