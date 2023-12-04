import { Component } from "react";

class Message extends Component {
    render(){
        return <h1>Message: {this.props.text}</h1>;
    }
}

export default Message;