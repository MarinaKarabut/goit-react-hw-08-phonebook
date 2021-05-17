import { Component } from 'react';
import { connect } from 'react-redux';



import FormField from '../../../../shared/components/FormField'
import Button from '../../../../shared/components/Button'
import { fields } from './fields'

import { register} from '../../../../redux/auth/auth-operations'

import styles from './RegisterPage.module.css'



class RegisterPage extends Component {
    state = {
        name: '',
        email:'',
        password:'',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]:value
        })
     }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onRegister(this.state)
        this.setState({
            name: '',
            email:'',
            password:'',
        })
    }
    

    
    render() {
        const { name, email, password } = this.state
        const { handleChange, handleSubmit}= this
         return (
            <div className={styles.formGroup}>
                     <form onSubmit={ handleSubmit}>
                            <FormField {...fields.username} value={ name} onChange={handleChange }/>
                            <FormField {...fields.email} value={ email} onChange={handleChange }/>
                            <FormField {...fields.password} value={ password} onChange={handleChange }/>
                            <Button type="submit">SING UP</Button>
                    </form>
                 </div>
            )
    }

   
};


const mapDispatchToProps = dispatch => ({
    onRegister: (body)=> dispatch(register(body))
})


export default connect(null,mapDispatchToProps)(RegisterPage);
