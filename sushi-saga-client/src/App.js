import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    money: 100,
    displayIndex: 0,
  } 

  componentDidMount() {
    fetch(API)
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          sushis: json 
        })
      })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price 

    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney 
      })
    }
  }

  chooseFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  more = (e) => {
    let newDisplayIndex = this.state.displayIndex + 4

    if (newDisplayIndex >= this.state.sushis.length) {
      newDisplayIndex = 0
    } 

    this.setState({
      displayIndex: newDisplayIndex 
    })
  }

  addMoney = (e) => {
    e.preventDefault() 
    let addedMoney = parseInt(e.currentTarget.children[0].value)
    if (!addedMoney) {addedMoney = 0} 
    this.setState({
      money: this.state.money + addedMoney 
    })
  }
  render() {
    return (
      <div className="app">
        <form onSubmit={this.addMoney}>Add $ to Budget
          <input type="text" /> 
          <input type="submit" />
        </form> 
        <SushiContainer sushis={this.chooseFourSushis()} 
                        more={this.more} 
                        eat={this.eat}
                        eaten={this.state.eaten}
        />
        <Table remainingBudget={this.state.money}
               eaten={this.state.eaten} 
        />
      </div>
    );
  }
}

export default App;