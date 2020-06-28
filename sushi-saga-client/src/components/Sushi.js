import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {props.handleSushiClick(props.sushiInfo)}}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten ?
            null
          :
            <img src={props.sushiInfo.img_url} alt="" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiInfo.name} - ${props.sushiInfo.price}
      </h4>
    </div>
  )
}

export default Sushi