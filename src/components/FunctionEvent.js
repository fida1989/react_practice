function FunctionEvent() {
    return (
        <div>
            <h3>Functional Component</h3>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

function handleClick() {
    console.log("Clicked!");
    alert("Function Event!");
}

export default FunctionEvent;