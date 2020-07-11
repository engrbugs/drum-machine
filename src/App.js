import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const KEYS = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];


class Box extends React.Component {

  playSound = (e) => {
    const sound = document.getElementById(this.props.keyTrigger);
    console.log(sound.currentSrc);
    sound.currentTime = 0;
    sound.play();
  }
  render () {
    return  (
      <div id={this.props.clipId}
        onClick={this.playSound} 
        className="box" 
         >
          <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
          {this.props.keyTrigger}
      </div>

      // <div id={this.props.clipId} onClick={this.playSound}
      // className="box">
      //   <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
      //   {this.props.keyTrigger}</div>
    )

    
            // <div className="box" onClick={this.playSound}
        // text={ key.keyTrigger } key={ idx }>
        //   { key.keyTrigger }
        // <audio ref={this.audio} id={key.keyTrigger}src={key.url}
        // />
        //   </div>
  }
}

class App extends React.Component {

  render() {
    return (
    <div id="display" className="App display">
      {KEYS.map((key, idx)=>(
        <Box
          clipId={idx} 
					clip={key.url}
					keyTrigger={key.keyTrigger}
					keyCode={key.keyCode} />

        // <div className="box" onClick={this.playSound}
        // text={ key.keyTrigger } key={ idx }>
        //   { key.keyTrigger }
        // <audio ref={this.audio} id={key.keyTrigger}src={key.url}
        // />
        //   </div>
      ))}
      
    </div>
    );
  }
}




export default App;
