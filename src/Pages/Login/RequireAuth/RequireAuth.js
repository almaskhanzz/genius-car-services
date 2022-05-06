import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    // console.log(user);
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='container w-50 mx-auto my-4'>
            <h3 className='text-danger text-center'>Your Email is not verified!!!</h3>
            <h5 className='text-danger text-center'>Please verify your email address</h5>
            <div className='w-25 mx-auto'>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('Sent email');
                    }}
                >
                    Send Verification email again
                </button>
            </div>

        </div>
    }
    return children;
};

export default RequireAuth;