import React from 'react';
import s from './OnOff.module.css';


type OnOffPropsType = {
    switch?: boolean
    off?: boolean
}

function OnOff(props: OnOffPropsType) {

    return (
        <div>
            {props.off
                ? <div className={s.wrapper}>
                    <div className={s.buttonOn}>ON</div>
                    <div className={s.buttonOff}>OFF</div>
                    <div className={s.lamp}></div>
                </div>
                : <div className={s.wrapper}>
                    {props.switch ? <div className={`${s.buttonOn} ${s.buttonOnSwitch}`}>ON</div> : <div className={s.buttonOn}>ON</div>}
                    {/*{props.switch === true && <div className={`${s.buttonOn} ${s.buttonOnSwitch}`}>ON</div>}*/}
                    {/*{props.switch === false && <div className={s.buttonOn}>ON</div>}*/}

                    {props.switch ? <div className={s.buttonOff}>OFF</div> : <div className={`${s.buttonOff} ${s.buttonOffSwitch}`}>OFF</div>}
                    {/*{props.switch === true && <div className={s.buttonOff}>OFF</div>}*/}
                    {/*{props.switch === false && <div className={`${s.buttonOff} ${s.buttonOffSwitch}`}>OFF</div>}*/}

                    {props.switch ? <div className={`{${s.lamp} ${s.lampOnSwitch}`}></div> : <div className={`${s.lamp} ${s.lampOffSwitch}`}></div>}
                    {/*{props.switch === true && <div className={`{${s.lamp} ${s.lampOnSwitch}`}></div>}*/}
                    {/*{props.switch === false && <div className={`${s.lamp} ${s.lampOffSwitch}`}></div>}*/}
                </div>
            }
        </div>
    );
}

export default OnOff;
