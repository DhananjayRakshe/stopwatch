
function BtnComponent(props) {
    return (
        <div className="App">

            {(props.status === 0) ?
                <button onClick={props.start}>Start</button>
                : ""
            }

            {(props.status === 1) ?
                <div>
                    <button onClick={props.stop}>Stop</button>
                    <button onClick={props.reset}>Reset</button>
                </div>
                : ""
            } 

        </div>
    );
}

export default BtnComponent;
