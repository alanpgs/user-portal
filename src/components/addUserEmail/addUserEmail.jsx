import { useState, useContext } from "react";
import DBEmailContext, {DBEmailProvider} from "../../store/emailContext";
import {UserButton, ButtonGroup} from "../button/button";
import { UInput } from "../form/input";

import "./addUserEmail.scss";
 
const AddUserEmail = ()=> {

    const [userEmail, setUserEmail] = useState('');
    const {submitEmail, isLoading, setIsLoading} = useContext(DBEmailContext)

    const emailInputFunc = (event)=> {
        setUserEmail(event)
    }

    const submitEmailFun = (event)=> {
        event.preventDefault();
        submitEmail(userEmail);
    }

    return (
        
            <form onSubmit={submitEmailFun} className="add_email_wrapper">
                <DBEmailProvider>
                    <UInput title="User Email" type="email" value={userEmail} getData={emailInputFunc} />
                    <ButtonGroup>
                        <UserButton title="Add Email" type="submit"/> 
                    </ButtonGroup>
                </DBEmailProvider>
            </form>

    )
}

export default AddUserEmail;