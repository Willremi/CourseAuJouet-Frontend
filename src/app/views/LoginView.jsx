import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectIsLogged, signIn } from '../shared/redux-store/authenticationSlice';
import { authenticate } from '../api/backend/account';
import { URL_HOME } from '../shared/constants/urls/urlConstants';
import { isAuthenticated } from '../shared/services/accountServices';
import Login from '../components/account/Login';
import { useSelector } from 'react-redux';

/**
 * View/Page Login
 * 
 * @param {object} history 
 * @author Peter Mollet
 */
 const LoginView = ({ history }) => {
    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()
    const isLogged = useSelector(selectIsLogged)

    const handleLogin = (values) => {
        console.log(values);
        authenticate(values).then(res => {
            if(res.status === 200 && res.data.id_token) {
                dispatch(signIn(res.data.id_token))
                if(isAuthenticated){
                    console.log(isLogged);   
                    history.push(URL_HOME)
                } 
            }  
        }).catch(() => setErrorLog(true))
    }

    return (
            <Login submit={handleLogin} errorLog={errorLog} />
    );
};

export default LoginView