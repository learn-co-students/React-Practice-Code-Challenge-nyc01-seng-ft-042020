import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  state = {
    limitTo: 4
  }

  onLoadMore = (evt) => {
    console.log(evt)
    this.setState({
      limitTo: this.state.limitTo + 4
   });
  }

  render(){
    let sushiArray = this.props.sushis.slice(0, this.state.limitTo).map((sushiPOJO) => {
      return <Sushi
        sushi={sushiPOJO}
        key={sushiPOJO.id}
      />
    })

    return (
      <Fragment>
        <div className="belt">
          {
            sushiArray
          }
          <MoreButton onLoadMore={this.onLoadMore}/>
        </div>
      </Fragment>
    )
  }
}
  

export default SushiContainer