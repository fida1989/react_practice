import { Component } from "react";

class Resume extends Component {
    render() {
        const { name } = this.props;
        return <h2>Name in resume: {name}.</h2>;
    }
}

export default Resume;