import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Street'
                },
                value:'',
                
                validation:{
                    required:true
                },valid:false
            },
                          
            postalCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CODE'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5,
                }
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'COUNTRY'
                },
                value:'',
                validation:{
                    required:true
                },valid:false
            },
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true
                },valid:false
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[{
                        value:'fastest'
                        ,displayValue:'fastest'
                    },
                    {
                        value:'cheapest',
                        displayValue:'cheapest'
                    }]
                },
                value:'',
        },
        loading: false
    }
}
    checkValidity(value,rules){
        let isValid =false
        if (rules.required){
            isValid = value.trim !== ''
        }
        if (rules.minLength){
            isValid = value.trim >= rules.minLength
        }
        
        if (rules.maxLength){
            isValid = value.trim <= rules.maxLength
        }
        return isValid
    }
    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData={}
        for (let formELementIdentifier in this.state.orderForm){
            formData[formELementIdentifier]= this.state.orderForm[formELementIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData:formData
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }
    inputChangedHandeler =(event,inputIdentifier)=>{
        const updatedOrderform={
            ...this.state.orderForm
        }
        const updatedFormElement={
            ...updatedOrderform[inputIdentifier]
        }
        updatedFormElement.value =event.target.value
        updatedFormElement.valid =this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedOrderform[inputIdentifier]=updatedFormElement
        this.setState({
            orderForm:updatedOrderform
        })
    }
    render () {
        const formElementsArray = []
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandeler(event,formElement.id)}/>
                ))}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;