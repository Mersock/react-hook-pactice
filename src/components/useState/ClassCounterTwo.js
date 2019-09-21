import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    inCrementCount = () => {
        this.setState(prveState => {
            return {
                count: prveState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.inCrementCount}>Count is {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounterTwo;