import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changePassword } from "../api/backend/account";
import ChangePassword from "../components/layouts/ChangePassword"
import { selectIsLogged } from "../shared/redux-store/authenticationSlice";
import { getPayloadToken } from "../shared/services/tokenServices";

const ChangePasswordView = () => {
    const isLogged = useSelector(selectIsLogged)
    const [User, setUser] = useState()

    useEffect(()=> {
        if(isLogged){
            setUser(getPayloadToken())
        } else {
            setUser(undefined)
        }
    },[isLogged])
    
    const handleChangePassword = (values) => {
        let dataArr = [User.userId,values]
        changePassword(dataArr)

    }
 return (
    <div className="mt-40 text-center w-11/12 mx-auto space-y-3 border border-gray-300 shadow-2xl p-3
    xl:w-6/12
    2xl:w-4/12  ">
        <h2 className="text-2xl font-semibold">Changement de votre mot de passe</h2>
        <ChangePassword submit={handleChangePassword} />
        
    </div>
 )
}
export default ChangePasswordView