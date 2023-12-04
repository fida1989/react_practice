const name = "Fida";

function getName() {
    return name;
}

function Hello() {
    return <h1>Hello World! My name is {getName()}.</h1>;
}

export default Hello;