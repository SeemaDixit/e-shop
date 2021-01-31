import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {

            alert("passwords don'nt match");
            return;
        }

        try {

            //Create the user in firebase and then create the user document
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            console.log(user);
            await createUserProfileDocument(user, { displayName });
            
            //clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log(error);
        }
    }

    handleChange = (event)=> {
        const { name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                        label= 'Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        label='Confirm Password'
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;