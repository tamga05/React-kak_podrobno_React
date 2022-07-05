import React from 'react';
import s from './OnOffWithoutUseState.module.css';


type OnOffPropsType = {
    tumbler: boolean
    onClick: () => void
}


export function OnOffUncontrolled(props: OnOffPropsType) {

    const onStyle = {
        width: '80px',
        height: '50px',
        border: props.tumbler ? '1px solid black' : '2px solid black',
        marginRight: '10px',
        fontWeight: 'bold',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: props.tumbler ? 'white' : 'black',
        backgroundColor: props.tumbler ? 'green' : 'white'
    }

    const offStyle = {
        width: '80px',
        height: '50px',
        border: props.tumbler ? '2px solid black' : '1px solid black',
        marginRight: '10px',
        fontWeight: 'bold',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: props.tumbler ? 'black' : 'white',
        backgroundColor: props.tumbler ? 'white' : 'red'
    }

    const lampStyle = {
        width: '50px',
        height: '50px',
        border: 'none',
        borderRadius: '50%',
        marginLeft: '15px',
        backgroundColor: props.tumbler ? 'green' : 'red',
        boxShadow: props.tumbler ? '0 0 20px 3px #008000' : '0 0 20px 3px #FF0000'
    }


    return (
        <div className={s.wrapperMain}>
            <h3 className={s.titleMain}>12. callback, onClick OnOff<span className={s.span}> Uncontrolled</span> component</h3>


            {
                <div className={s.wrapper}>

                    <div style={onStyle} onClick={props.onClick}>ON</div>

                    <div style={offStyle} onClick={props.onClick}>OFF</div>

                    <div style={lampStyle}></div>

                </div>
            }
        </div>
    )
}

