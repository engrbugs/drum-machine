import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const KEYS = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Sega',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Oscillation',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Guitar',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Bass',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Close',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];


class BeatBox extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  handleKeyPress = (e)=> {
    if (e.keyCode === this.props.keyCode) {
      const parent = document.getElementById(this.props.keyTrigger);
      parent.parentNode.classList.toggle('drum-pad-active');
      console.log(parent.parentNode);
      this.playSound();
      setTimeout(() => parent.parentNode.classList.toggle('drum-pad-active'), 100);
    }
  }



  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }


  playSound = () => {
    const sound = document.getElementById(this.props.keyTrigger);
    console.log(sound.currentSrc);
    this.props.updateDisplay(this.props.clipId);
    sound.currentTime = 0;
    sound.play();
  }
  render () {
    return  (
      <div id={this.props.keyCode}
        onClick={this.playSound} 
        ref={this.audio}
        className="drum-pad" 
         >
          <audio className='clip'  id={this.props.keyTrigger} src={this.props.clip}></audio>
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
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
    }
    this.displayClipName = this.displayClipName.bind(this);
  }
  displayClipName(name) {
      this.setState({
        display: name
      });
  }
  render() {
    return (
    <div id="drum-machine" className="App display">
              <div className="logo">
            <div className="inner-logo">{'BeatBox'}<small>{' by angerBUGS'}</small></div>
          </div>
      {KEYS.map((key, idx)=>(
        <BeatBox
          clipId={key.id} 
					clip={key.url}
					keyTrigger={key.keyTrigger}
					keyCode={key.keyCode} 
					updateDisplay={this.displayClipName} />
         
        // <div className="box" onClick={this.playSound}
        // text={ key.keyTrigger } key={ idx }>
        //   { key.keyTrigger }
        // <audio ref={this.audio} id={key.keyTrigger}src={key.url}
        // />
        //   </div>
      ))}
       <div id="display" className="display-text">
          <div className="inner-text">{this.state.display}</div>
        </div>
    </div>
    );
  }
}




export default App;
