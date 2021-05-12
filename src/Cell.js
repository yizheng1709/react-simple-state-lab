import React, { Component } from 'react';

class Cell extends Component {
    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        }
    }

    changeColor () {
        // debugger
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor.bind(this)}>
                
            </div>
        )
    }
}

export default Cell 