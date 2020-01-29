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
    <div id='app'>
      <Container data={this.state.data}/>
    </div>
  );
  }
}

export default App;




