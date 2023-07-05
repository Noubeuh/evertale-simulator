import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Navigation = () => {

    let navlinkClasses = 'text-white text-decoration-none';

    return(
        <nav className='navigation text-white'>

            <Menu />

            <ul className='menu'>
                <NavLink to='/' className={(nav) => nav.isActive ? navlinkClasses+' nav-active' : navlinkClasses}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/users' className={(nav) => nav.isActive ? navlinkClasses+' nav-active' : navlinkClasses}>
                    <li>Utilisateurs</li>
                </NavLink>
                <NavLink to='/clients' className={(nav) => nav.isActive ? navlinkClasses+' nav-active' : navlinkClasses}>
                    <li>Clients</li>
                </NavLink>
                <NavLink to='/settings' className={(nav) => nav.isActive ? navlinkClasses+' nav-active' : navlinkClasses}>
                    <li>Paramètres</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navigation;