import React, { Component } from 'react';
import { connect } from 'react-redux';

import {logIn} from '../../../../redux/auth/auth-operations'

import FormField from '../../../../shared/components/FormField'
import Button from '../../../../shared/components/Button'
import { fields } from './fields'

import styles from './LoginPage.module.css'


class LoginPage extends Component {
    state = {
        email: '',
        password:'',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]:value
        })
     }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onLogin(this.state)
        this.setState({
            email:'',
            password:'',
        })
    }

    render() {
        const { email, password } = this.state
        const {handleChange, handleSubmit }= this
        return (
        <>
            <div className={styles.formGroup}>
                    <form onSubmit={handleSubmit }>
                        <FormField {...fields.email} value={email} onChange={handleChange }/>
                        <FormField {...fields.password} value={password } onChange={handleChange }/>
                        <Button type="submit">LOG IN</Button>
                     </form>
            </div>
           
        </>)
    }
    
            
};



const mapDispatchToProps = {
    onLogin: logIn
}


export default connect(null, mapDispatchToProps)(LoginPage);
