import React, { Component } from 'react'

class Cell extends Component {
    
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    colorChange = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return (
            <div 
            className = "cell"
            style={{backgroundColor: this.state.color}}
            onClick= {this.colorChange}>
                
            </div>
        )
    }

}

export default Cell