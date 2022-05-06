import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ResetPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent email');
    }
    return (
        <div className='container w-50 mx-auto my-4'>
            <h2 className='text-center mb-4'>Reset password</h2>
            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Button className='rounded w-50 d-block mx-auto' variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;