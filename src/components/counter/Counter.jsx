import React, { Component } from 'react'
import './Counter.css'
import CounterButton from './CounterButton.jsx'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.resetValue = this.resetValue.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton increment={this.incrementCounter} decrement={this.decrementCounter}/>
                <CounterButton by={5} increment={this.incrementCounter} decrement={this.decrementCounter}/>
                <CounterButton by={10} increment={this.incrementCounter} decrement={this.decrementCounter}/>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.resetValue}>Reset</button></div>          
            </div>
        )
    }

    incrementCounter(by) {       
        this.setState(
            (previousState) => {
                return {counter: previousState.counter + by}
            }
        )
    }

    decrementCounter(by) {       
        this.setState(
            (previousState) => {
                return {counter: previousState.counter - by}
            }
        )
    }

    resetValue() {
        this.setState({
            counter : 0
        })
    }

}

export default Counter