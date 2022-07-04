import React from 'react';
import s from './Accordion2.module.css'


export type Accordion2ValueType = boolean


type AccordionPropsType = {
    titleValue: string
    value: Accordion2ValueType
    onClick: (value: Accordion2ValueType) => void
}


function Accordion2(props: AccordionPropsType) {


    return (
        <div className={s.wrapper}>
            <h4>11. callback, onClick at Accordion2 component</h4>
            <div className={s.main}>
                <AccordionTitle titleValueNext={props.titleValue} onClick={props.onClick} value={props.value}/>
                {props.value && <AccordionBody/>}
            </div>
        </div>
    )
}


type AccordionTitlePropsType = {
    titleValueNext: string
    value: Accordion2ValueType
    onClick: (value: Accordion2ValueType) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.onClick(!props.value)
    }}>{props.titleValueNext}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion2;