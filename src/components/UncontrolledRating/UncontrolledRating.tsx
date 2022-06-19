import React, {useState} from 'react';


export function UncontrolledRating() {


    let [value, setValue] = useState(0);


    const resetStyle = {
        marginLeft: '20px'
    };


    return (
        <div>
            <br/>

            <Star selected={value >= 1}/>
            <button onClick={() => {
                setValue(1);
            }}>1
            </button>
            <Star selected={value >= 2}/>
            <button onClick={() => {
                setValue(2);
            }}>2
            </button>
            <Star selected={value >= 3}/>
            <button onClick={() => {
                setValue(3);
            }}>3
            </button>
            <Star selected={value >= 4}/>
            <button onClick={() => {
                setValue(4);
            }}>4
            </button>
            <Star selected={value >= 5}/>
            <button onClick={() => {
                setValue(5);
            }}>5
            </button>


            <button onClick={() => {
                setValue(0);
            }} style={resetStyle}>Reset
            </button>

            <br/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    // if (props.selected) {
    //     return <span> <b>star</b> </span>;
    // } else {
    //     return <span> star </span>;
    // }

    return (props.selected ? <span> <b>star</b> </span> : <span> star </span>);
}
