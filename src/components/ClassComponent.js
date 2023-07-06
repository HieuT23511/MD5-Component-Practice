import {Component} from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Exercise",
            inp1: "",
            inp2: "",
            total:""
        }
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                Number 1: <input type="number" onChange={e => {
                this.setState({
                    inp1: e.target.value
                })
            }}/>
                <br/>
                Number 2: <input type="number" onChange={e => {
                this.setState({
                    inp2: e.target.value
                })
            }}/>
                <br/>
                <button onClick={(inp1, inp2) => {
                    inp1 = this.state.inp1;
                    inp2 = this.state.inp2;
                    this.setState({
                        total : parseInt(inp1) + parseInt(inp2)
                    })
                }
                }> Calculator
                </button>
                <br/>
                The result is: {this.state.total}
            </>
        )
    }
}
