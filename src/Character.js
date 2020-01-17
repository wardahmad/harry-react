import React, {Component} from 'react';


class Character extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.char.charName}</h3>
        <img src={this.props.char.imgSrc}/>
      </div>
    )
  }

}
export default Character