import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOffWithoutUseState from './components/OnOff/OnOffWithoutUseState';
import OnOffWithUseState from './components/OnOff/OnOffWithUseState';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledRating2} from './components/UncontrolledRating/UncontrolledRating2';
import UncontrolledAccordion2 from './components/UncontrolledAccordion/UncontrolledAccordion2';


function App() {

    const callBackHello = () => {
        alert('Hello, Andrey !!!')
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
