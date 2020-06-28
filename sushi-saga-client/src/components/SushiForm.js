import React from 'react';


class SushiForm extends React.Component{

    state = {
        value: 0
    }

    changeValue = (evt) => { 
        this.setState({value: evt.target.value})
        
    }

    // handleSubmit = () => {
    //     changeSubmit(this.state.value)
    // }

render (){
   return ( 
   <form onSubmit={(evt)=>{
    evt.preventDefault()
   this.props.changeSubmit(this.state.value)}
   }>
    <label className="addCash">Add Some Cash!
    <input type="text" name="moneyLeft" value={this.state.value} onChange={this.changeValue}></input></label>
    <input type="submit"></input>
    </form>
   )
}

}

export default SushiForm