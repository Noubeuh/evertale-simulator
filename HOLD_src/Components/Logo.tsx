import React from 'react';
import logo from './../Assets/img/logo.svg';

const Logo = () => {

    return(
        <header className='App-header text-center'>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Logo;