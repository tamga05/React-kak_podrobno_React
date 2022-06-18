import React, {useState} from 'react';
import s from './OnOffWithoutUseState.module.css';


type OnOffWithUseStatePropsType = {
    //on: boolean
}


const OnOffWithUseState = (props: OnOffWithUseStatePropsType) => {


    let [on, setOn] = useState(false);


    const onStyle = {
        width: '80px',
        height: '50px',
        marginRight: '10px',
        fontWeight: 'bold',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white',
        color: on ? 'white' : 'black',
        border: on ? '1px solid black' : '2px solid black'
    };


    const offStyle = {
        width: '80px',
        height: '50px',
        marginRight: '25px',
        fontWeight: 'bold',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red',
        color: on ? 'black' : 'white',
        border: on ? '2px solid black' : '1px solid black'
    };


    const lampStyle = {
        width: '50px',
        height: '50px',
        border: on ? 'none' : '2px solid black' || !on ? 'none' : '2px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red',
        boxShadow: on ? '0 0 20px 3px #008000' : 'none' || !on ? '0 0 20px 3px #FF0000' : 'none'
    };


    return (
        <div>
            <h3 className={s.title}>Component OnOff<span className={s.span}>With</span>UseState</h3>
            <div className={s.wrapper}>
                <button style={onStyle} onClick={() => {
                    setOn(true);
                }}>ON
                </button>
                <button style={offStyle} onClick={() => {
                    setOn(false);
                }}>OFF
                </button>
                <div style={lampStyle}></div>
            </div>
        </div>
    );
};


export default OnOffWithUseState;