import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems=()=>(
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/" active>Burger Builder</NavigationItem>
       <NavigationItem limk="/">Checkout</NavigationItem>
    </ul>
)
export default NavigationItems