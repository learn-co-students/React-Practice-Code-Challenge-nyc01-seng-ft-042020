import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: []
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then((sushis) => {
      this.setState({
        sushiList: sushis
      })
    })
  }

  render() {
    let {sushiList} = this.state
    return (
      <div className="app">
        <SushiContainer 
          sushis={sushiList}
        />
        <Table />
      </div>
    );
  }
}

export default App;