import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

let count = 1
let API = `http://localhost:3000/sushis/?_page=${count}&_limit=4`

class App extends Component {
  
  state = {
    sushi: [],
    eaten: [],
    moneyLeft: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(fetchedSushi => {
      this.setState({
        sushi: fetchedSushi
      })
    })
  }

  changeSubmit = (value) => {
    console.log(value, "is value")
    this.setState((prevState)=>{
      return {moneyLeft: prevState.moneyLeft + parseInt(value)}
    })

  }

  handleButton = () => {
    console.log("running this function")
    console.log(count)
    count += 1     
    fetch(`http://localhost:3000/sushis/?_page=${count}&_limit=4`)
    .then(resp => resp.json())
    .then(fetchedSushi => {
      this.setState({
        sushi: fetchedSushi
      })
    })
  
  }

  handleSushiClick = (sushi) => {
    //pass this down to CONTAINER --> SUSHI 
    //call when clicked to change
    if (!this.state.eaten.includes(sushi) && sushi.price <= this.state.moneyLeft) {
      this.setState((prevState) => {
        return {
          eaten: [...this.state.eaten, sushi],
          moneyLeft: prevState.moneyLeft - sushi.price
        }
      })
    }
  }
  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi} 
          handleSushiClick={this.handleSushiClick}
          eaten={this.state.eaten}
          handleButton={this.handleButton}
          />
        <Table 
          moneyLeft={this.state.moneyLeft}
          eaten={this.state.eaten}
          changeSubmit={this.changeSubmit}
          />
      </div>
    );
  }
}

export default App;