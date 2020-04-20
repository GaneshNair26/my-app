import React from 'react';

import Button from '../Button/Button';

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div> Click tyhe below button to signout
            <Button   backgroundColor={""} color={""} click={false} >Sign out</Button>
            </div>
        </nav>
    );
}

export default Navigation;