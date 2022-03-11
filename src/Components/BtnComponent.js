
function BtnComponent(props) {
    return (

        <div className="App">
            {(props.status === 0) ?
                <button style={{margin: "5px"}} className="btn btn-primary" onClick={props.start}>Start</button>
                : ""
            }

            {(props.status === 1) ?
                <div>
                    <button style={{margin: "5px"}} className="btn btn-danger" onClick={props.stop}>Stop</button>
                    <button className="btn btn-info" onClick={props.reset}>Reset</button>
                </div>
                : ""
            }

            {(props.status === 2) ?
                <div>
                    <button style={{margin: "5px"}} className="btn btn-success" onClick={props.resume}>Resume</button>
                    <button  className="btn btn-info" onClick={props.reset}>Reset</button>
                </div>
                : ""
            }

        </div>
    );
}

export default BtnComponent;
