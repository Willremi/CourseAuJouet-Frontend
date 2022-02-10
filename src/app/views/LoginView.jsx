import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate, connectWithFacebook, connectWithGoogle } from '../api/backend/account';
import { URL_HOME } from '../shared/constants/urls/urlConstants';
import { isAuthenticated } from '../shared/services/accountServices';
import Login from '../components/account/Login';
import { useHistory } from 'react-router';


/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const LoginView = ({hideModal}) => {
    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleLogin = (values) => {
        authenticate(values).then(res => {
            if(res.status === 200 && res.data.id_token) {
                dispatch(signIn(res.data.id_token))
                if(isAuthenticated)history.push(URL_HOME);
                hideModal(false)
            }
        }).catch(() => setErrorLog(true))
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj; // ?. => ne donne pas d'erreur si profileObj est undefined
        console.log(result);
        connectWithGoogle(result)
            .then(res => {
                if(res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token))
                    if(isAuthenticated)history.push(URL_HOME);
                    hideModal(false)
                }
            }).catch(() => setErrorLog(true))
    }

    const googleFailure = async (error) => {
        console.log(error);
    }
    
    const facebookSuccess = async (res) => {
        connectWithFacebook(res)
            .then(res => {
                if(res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token))
                    if(isAuthenticated)history.push(URL_HOME);
                    hideModal(false)
                }
            }).catch(() => setErrorLog(true))
    }    
        

    return (
            <Login
            submit={handleLogin}
            errorLog={errorLog}
            hideModal={hideModal}
            googleSuccess={googleSuccess}
            googleFailure={googleFailure}
            facebookSuccess={facebookSuccess}
            />
    );
};

export default LoginView