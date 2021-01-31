import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth, signInWithGoogle} from '../../firebase/firebase.util'
import './signin.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            //On success clear the fields
            this.state({
                email: '',
                password: ''
            });
        
        } catch(errors) {
            console.log(errors);
        } 

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
                    <div className='buttons'>
                        <CustomButton name='submit' value='Submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            
            </div>
        )  
    }
}

export default Signin;