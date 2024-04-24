import React from 'react'

class LifeCyrcle extends React.Component{

  state = {
    count: 1
  }

  listener = () =>{
    console.log('Listener')
  }

  componentWillMount() {
    console.log('componentWillmount')
    document.addEventListener('click',this.listener)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    document.removeEventListener("click", this.listener)
  }

  handleButton = () =>{
    this.setState({count:this.state.count +1})
  }





render(){
  console.log('render')
  return (
    <div>
      <h1>Hello World</h1>
      <p>{this.state.count}</p>
      <button onClick={this.handleButton}>Click Me</button>
    </div>
  )
}
}

export default LifeCyrcle
