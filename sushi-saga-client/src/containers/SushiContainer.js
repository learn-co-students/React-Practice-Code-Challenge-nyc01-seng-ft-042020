import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi) => {
            return <Sushi 
            key={sushi.id} 
            sushiInfo={sushi} 
            handleSushiClick={props.handleSushiClick}
            eaten={props.eaten.includes(sushi)}/>
          })
        }
        <MoreButton handleButton={props.handleButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer