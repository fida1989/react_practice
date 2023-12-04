import { Component } from "react";

class Resume extends Component {
    render() {
        const { name } = this.props;
        return <h2>Name In Resume: {name}</h2>;
    }
}

export default Resume;