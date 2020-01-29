import React from 'react';
import './App.css';
import Container from './components/container/Container'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: null
    }
  }

  render(){
  return (
    <Container data={this.state.data}/>
  );
  }
}

export default App;




