import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    if (user) {
        // navigate('/home');
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = event.target.terms.checked;
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }
        await createUserWithEmailAndPassword(email, password);

    }
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='container w-50 mx-auto my-4'>
            <h1 className='text-primary text-center'>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius car terms & conditions.</label>
                    {/* <Form.Check type="checkbox" name="terms" className='text-primary' label="Accept Genius car terms & conditions." /> */}
                </Form.Group>
                <Button disabled={!agree} className="w-50 d-block mx-auto" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>Already registered? <span className='text-danger register-nav' onClick={navigateLogin} >Please Login</span></p>
            <SocialLogin />
        </div>
    );
};

export default Register;