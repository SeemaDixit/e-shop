import React from 'react';
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/sign-up/sign-up';

import './signin-signup.scss';

const SigninAndSignupPage = () => {
    return (
        <div className='sign-in-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SigninAndSignupPage;