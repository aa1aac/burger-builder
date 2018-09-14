import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props)=>{
    return(
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo></Logo>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default Toolbar