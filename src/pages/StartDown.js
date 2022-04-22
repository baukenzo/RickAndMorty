import { Component } from "react";

export class StartDown extends Component {
    constructor() {
        super()
        this.state = {
            count: null
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    interval = null;

    startCountDown = () => {
        this.setState({
            count: 60
        })
        this.interval = setInterval(() => {
            console.log(this.state.count)
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            } else {
                clearInterval(this.interval)
            }
        }, 1000)
    }



    render() {
        return (
            <div>
                <button onClick={this.startCountDown} >Start CountDown</button>
                {this.state?.count}
            </div>
        )
    }
}