import React from 'react';
import '../CSS/App.css';
import image from '../andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg'
import {CenteringWrapper} from "./CenteringWrapper";
import {ImageDisplay} from "./ImageDisplay";
import {Crop} from "./Crop"
import {SizeWrapper} from "./SizeWrapper"

function App() {
  return (
    <div className="App">
      <CenteringWrapper>
        <SizeWrapper width={'400px'} height={'300px'}>
          <Crop>
            <ImageDisplay src={image} alt={'Photo by Andriyko Podilnyk (https://unsplash.com/@yirage)'}/>
          </Crop>
        </SizeWrapper>
      </CenteringWrapper>
    </div>
  );
}

export default App;
