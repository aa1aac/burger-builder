import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './layout.css'
import Toolbar from '../Navigation/Toolbar/toolbar'
const Layout =(props)=> (
    <Aux>
    <Toolbar></Toolbar>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)
export default Layout