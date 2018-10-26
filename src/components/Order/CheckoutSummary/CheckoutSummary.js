import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const CheckoutSummary=(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taastes well</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredient={props.ingredient}></Burger>
                <Button btnType='Danger ' clicked>Cancel</Button>
                <Button btnType='Success ' clicked>Continue</Button>
            </div>
        </div>
    )
}

export default CheckoutSummary