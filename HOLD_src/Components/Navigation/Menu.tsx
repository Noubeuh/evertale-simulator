import React from 'react';

const Menu = () => {
    return(
        <>
            <input id='menu-toggle' type='checkbox' />
            <label className='menu-button-container' htmlFor='menu-toggle'>
                <div className='menu-button'></div>
            </label>
        </>
    );
}

export default Menu;