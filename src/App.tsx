import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOffWithoutUseState from './components/OnOff/OnOffWithoutUseState';
import OnOffWithUseState from './components/OnOff/OnOffWithUseState';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledRating2} from './components/UncontrolledRating/UncontrolledRating2';
import UncontrolledAccordion2 from './components/UncontrolledAccordion/UncontrolledAccordion2';
import {Rating2, RatingValueType} from './components/Rating/Rating2';
import {UncontrolledRating3} from './components/UncontrolledRating/UncontrolledRating3';
import {OnOffUncontrolled} from './components/OnOff/OnOffUncontrolled';
import AccordionUncontrolled from './components/Accordion/AccordionUncontrolled';


function App() {

    const callBackHello = () => {
        alert('Hello, Andrey !!!')
    }


    let [rating2Value, setRating2Value] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState<boolean>(false)

    let [tumbler, setTumbler] = useState<boolean>(false)

    const string = {
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '20px',
        color: tumbler ? 'green' : 'red'
    }


    return (

        <div className={'.App'}>
            <div className={'wrapper'}>
                {/*<img src={'https://99px.ru/sstorage/53/2016/02/tmb_158067_5866.jpg'} alt="parrot"/>*/}
                <PageTitle title={'This is App component'}/>
                {/*<PageTitle title={'My friends'}/>*/}
                {/*Article 1*/}
                {/*<Rating value={1}/>*/}
                <Accordion titleValue={'Menu'} collapsed={true}/>
                <Accordion titleValue={'Users'} collapsed={false}/>
                {/*Article 2*/}
                <h4>5. Условный рендеринг</h4>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
                <OnOffWithoutUseState off={false} switch={true}/>
                <OnOffWithUseState/>
                <OnOffWithUseState/>
                {/*<OnOffWithUseState on={true}/>*/}
                <UncontrolledAccordion titleValue={'Menu'}/>
                {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
                <UncontrolledRating callBack={callBackHello}/>
                <UncontrolledRating2/>
                <UncontrolledAccordion2 titleValue={'Menu'}/>
                <Rating2 value={rating2Value} onClick={setRating2Value}/>
                <UncontrolledRating3/>
                <AccordionUncontrolled titleValue={'Menu'} value={collapsed} onClick={() => setCollapsed(!collapsed)}/>
                <OnOffUncontrolled tumbler={tumbler} onClick={setTumbler}/>
                <div style={string}>{tumbler.toString()}</div>
            </div>
        </div>
    )
}


type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;
