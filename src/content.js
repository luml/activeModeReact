import React from 'react';
import LightImage from './images/light.jpeg';
import DarkImage from './images/dark.jpeg';

const Content = ({theme}) => {
    if(theme === 'light'){
        return <img alt="light mode" src={LightImage} />
    }else{
        return <img alt="light mode" src={DarkImage} />
    }
}

export default Content;