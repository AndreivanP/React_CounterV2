import React, { Component } from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    render() {
        return (
            <div className="counter">
                <button onClick={ () => this.props.increment(this.props.by)}>+{this.props.by}</button>
                <button onClick={ () => this.props.decrement(this.props.by)}>-{this.props.by}</button>                             
            </div>
        )
    }    
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}


export default CounterButton;