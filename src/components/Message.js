import { Component } from "react";

class Message extends Component {
    render(){
        return <h2>Message: {this.props.text}</h2>;
    }
}

export default Message;