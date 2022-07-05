import React from 'react';
import s from './OnOffWithoutUseState.module.css';


type OnOffPropsType = {
    switchOnOff: boolean
    // off?: boolean
}


export function OnOffUncontrolled(props: OnOffPropsType) {


    return (
        <div className={s.wrapper12}>
            <h3 className={s.title12}>12. callback, onClick OnOff<span className={s.span}> Uncontrolled</span> component</h3>
            {
                // props.off
                //     ? <div className={s.wrapper}>
                //         <button className={s.buttonOn}>ON</button>
                //         <button className={s.buttonOff}>OFF</button>
                //         <div className={s.lamp}></div>
                //     </div>
                //     :

                <div className={s.wrapper}>
                    {props.switchOnOff ? <div className={`${s.buttonOn} ${s.buttonOnSwitch}`}>ON</div> : <div className={s.buttonOn}>ON</div>}


                    {props.switchOnOff ? <div className={s.buttonOff}>OFF</div> : <div className={`${s.buttonOff} ${s.buttonOffSwitch}`}>OFF</div>}


                    {props.switchOnOff ? <div className={`{${s.lamp} ${s.lampOnSwitch}`}></div> :
                        <div className={`${s.lamp} ${s.lampOffSwitch}`}></div>}
                </div>
            }
        </div>
    )
}

