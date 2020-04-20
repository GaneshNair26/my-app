import React from 'react';
import { storiesOf, getStorybook } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs'

import Button from '../Button/Button';
import './Logo.css'
//import ironman from './ironman.png'

const Logo = () => {
    return (
        <div className= ' Tilt ma4 mt0 shadow-5' >
            
                <Button  backgroundColor={""} color={"blue"} click={true} >Click Me!</Button>

        
               </div>
           
        
    );
}

export default Logo;