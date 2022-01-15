import React, { Component } from 'react';
import TriviaInfo from './components/TriviaInfo'
import './App.css'

class App extends Component {

  state = {
    triviaInfo: {},
    show: false
  }

  handleSubmit = e => {
    e.preventDefault()

          fetch("http://jservice.io/api/random")
          .then(response => response.json())
          .then(data => this.setState({triviaInfo: data[0]}))
          .then(() => console.log(this.state.triviaInfo))
          .catch(error => console.error(error))
      }

  handleSubmitTwo = e => {
    e.preventDefault()

          fetch("http://jservice.io/api/random")
          .then(response => response.json())
          .then(data => this.setState({triviaInfo: data[0]}))
          .then(() => console.log(this.state.triviaInfo))
          .catch(error => console.error(error))
      }
    

  render() {
    const {show} = this.state
    return (
      <div id="container">
        <div>
        <h1>Welcome to Jeopardy!</h1>
        <button id="answerbtn" type="submit" onClick={this.handleSubmit} >Get Answer</button><br></br><br></br>
        
        <button id="decrease">Decrease</button>
        <button id="increase">Increase</button>
        <button id="reset">Reset</button>

        <TriviaInfo triviaInfo ={this.state.triviaInfo} /> 
        
        <button id="questionBtn" type="submit" onClick={() => this.setState({show: !show})} >Get Question</button>

        <h4 style={{display: (show ? "block" : "none")}}>Question: {this.state.triviaInfo?.answer}</h4>
        </div>
      </div>
    );
  }
}

export default App;

