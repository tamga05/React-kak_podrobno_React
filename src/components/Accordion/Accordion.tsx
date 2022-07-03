import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}


function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle titleValueNext={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


//
//
// function Accordion(props: AccordionPropsType) {
//
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle titleValueNext={props.titleValue}/>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <AccordionTitle titleValueNext={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         );
//     }
// }


type AccordionTitlePropsType = {
    titleValueNext: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.titleValueNext}</h3>;
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


export default Accordion;