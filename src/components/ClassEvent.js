import { Component } from "react";

class ClassEvent extends Component {
    render() {
        return (
            <div>
                <h3>Class Component</h3>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }

    handleClick() {
        console.log("Clicked!");
        alert("Class Event!");
    }
}

export default ClassEvent;