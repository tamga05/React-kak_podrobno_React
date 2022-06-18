import React from 'react';
import s from './OnOffWithoutUseState.module.css';
import OnOffWithUseState from './OnOffWithUseState';


type OnOffPropsType = {
    switch?: boolean
    off?: boolean
}


function OnOffWithoutUseState(props: OnOffPropsType) {


    return (
        <div>
            <h3 className={s.title}>Component OnOff<span className={s.span}>Without</span>UseState</h3>
            {
                props.off
                    ? <div className={s.wrapper}>
                        <button className={s.buttonOn}>ON</button>
                        <button className={s.buttonOff}>OFF</button>
                        <div className={s.lamp}></div>
                    </div>
                    :

                    <div className={s.wrapper}>
                        {props.switch ? <div className={`${s.buttonOn} ${s.buttonOnSwitch}`}>ON</div> : <div className={s.buttonOn}>ON</div>}
                        {/*{props.switch === true && <div className={`${s.buttonOn} ${s.buttonOnSwitch}`}>ON</div>}*/}
                        {/*{props.switch === false && <div className={s.buttonOn}>ON</div>}*/}

                        {props.switch ? <div className={s.buttonOff}>OFF</div> : <div className={`${s.buttonOff} ${s.buttonOffSwitch}`}>OFF</div>}
                        {/*{props.switch === true && <div className={s.buttonOff}>OFF</div>}*/}
                        {/*{props.switch === false && <div className={`${s.buttonOff} ${s.buttonOffSwitch}`}>OFF</div>}*/}

                        {props.switch ? <div className={`{${s.lamp} ${s.lampOnSwitch}`}></div> :
                            <div className={`${s.lamp} ${s.lampOffSwitch}`}></div>}
                        {/*{props.switch === true && <div className={`{${s.lamp} ${s.lampOnSwitch}`}></div>}*/}
                        {/*{props.switch === false && <div className={`${s.lamp} ${s.lampOffSwitch}`}></div>}*/}
                    </div>
            }
        </div>
    );
}


export default OnOffWithoutUseState;
