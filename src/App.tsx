import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOffWithoutUseState from './components/OnOff/OnOffWithoutUseState';
import OnOffWithUseState from './components/OnOff/OnOffWithUseState';


function App() {
    return (
        <div>
            {/*<img src={'https://99px.ru/sstorage/53/2016/02/tmb_158067_5866.jpg'} alt="parrot"/>*/}
            <PageTitle title={'This is App component'}/>
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            {/*Article 2*/}
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
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}


export default App;
