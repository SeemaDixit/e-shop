import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './signin.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    } 

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required 
                        label='Email'
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <CustomButton name='submit' value='Submit'>SIGN IN</CustomButton>
                </form>
            
            </div>
        )
    }
}

export default Signin;