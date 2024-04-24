import React from "react";
import './App.css'
import LifeCyrcle from "./components/LifeCyrcle";
import Header from "./components/Header";


class Appclass extends React.Component {

  constructor() {
    super();
    this.state ={
      count:1,
      color:'orange'



    }
  }

  onChangeColor= () => {
    if(this.state.color === 'orange'){
      this.setState({color:'green'})
    }
    if(this.state.color === 'green'){
      this.setState({color:'orange'})
    }
  }

  onChangeCount= () =>{
    this.setState({count:this.state.count+1})
  }


  // state = {
  //   name: 'Vahe',
  //   count: 1
  // }
  // age = 25
  //
  // onClickButton = () => {
  //   // this.state.name = 'Donqishot'
  //   this.setState({name:'Donqishot'})
  //   this.setState({count:this.state.count +1})
  // }
  // onClickCar = () =>{
  //   console.log()
  // }


  handlerButton = () =>{
    this.setState({show:!this.state.show})
  }

  render() {
    return (
      <div className={'App'}>
        <Header color={this.state.color}/>
        <div>{this.state.count}</div>
        <button onClick={this.onChangeCount}>Change Count</button>
        <button onClick={this.onChangeColor}>Change Color</button>
      </div>
    )
  }
}

export default Appclass


