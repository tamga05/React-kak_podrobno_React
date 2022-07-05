import React, {useState} from 'react';
import s from '../UncontrolledRating/UncontrolledRating2.module.css';


export function UncontrolledRating3() {

    const resetStyle = {
        marginLeft: '15px',
        cursor: 'pointer'
    }


    let [value, setValue] = useState(0)


    return (
        <div>
            <h4>10. callback, onClick at Rating3 Uncontrolled component</h4>

            <div className={s.starBlock}>
                <Star selected={value >= 1} setValue={() => {
                    setValue(1)
                }}/>
                <Star selected={value >= 2} setValue={() => {
                    setValue(2)
                }}/>
                <Star selected={value >= 3} setValue={() => {
                    setValue(3)
                }}/>
                <Star selected={value >= 4} setValue={() => {
                    setValue(4)
                }}/>
                <Star selected={value >= 5} setValue={() => {
                    setValue(5)
                }}/>

                <button onClick={() => {
                    setValue(0)
                }} style={resetStyle}>Reset
                </button>
            </div>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}


function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue()
    }} className={s.star}>{props.selected ? <b>star</b> : 'star'}</span>
}
