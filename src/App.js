import React, {Component} from 'react';

import './App.css';
import House from './House'
import Character from './Character'
import houses from './DB'

class App extends Component{
  state={
    currentIndex: 0,
    char: ""
  }
  nextHouse(e){
   
    if(houses[this.state.currentIndex+1]){
    this.setState({currentIndex: this.state.currentIndex +1, char:"" })
  }
  
  else{
    this.setState({currentIndex: 0,char:""})
  }
  // console.log(houses[this.state.currentIndex+1])
}
showCharacter(e){
  this.setState({char: <Character char={houses[this.state.currentIndex].notableCharacter}/>})
}
  render(){
    return(
      <div className="card">
        <button onClick={(e)=>this.nextHouse(e)}>Next House</button>
        <button onClick={(e) => this.showCharacter(e)}>Notable Character</button>
        <House house={houses[this.state.currentIndex]}/>
        {this.state.char}
      </div>
    )
  }

}
export default App
