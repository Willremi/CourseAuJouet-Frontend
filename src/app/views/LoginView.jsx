import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate } from '../api/backend/account';
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

    return (
            <Login submit={handleLogin} errorLog={errorLog} />
    );
};

export default LoginView