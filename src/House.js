import React, {Component} from 'react';

class House extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.house.houseName}</h1>
        <img src={this.props.house.imgSrc}/>
        <h3>Fouder: {this.props.house.founder}</h3>
        <h3>Element:{this.props.house.element}</h3>
      </div>
    )
  }

}
export default House