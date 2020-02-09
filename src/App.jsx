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
      <div id='nav'>
        <h2>ZipApp</h2>
      </div>
      <Container data={this.state.data}/>
      <div id='app_desc'>
        <h3>This is an app that takes two zip-codes, and calculates the distance between them, as the crow flies.
        Which means the distance from one point, directly to the next, ignoring any obstructions.</h3>
      </div>
    </div>
  );
  }
}

export default App;




