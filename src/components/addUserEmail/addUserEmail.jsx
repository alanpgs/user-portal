import { useState, useContext } from "react";
import {UserButton, ButtonGroup} from "../button/button";
import { UInput } from "../form/input";
import LoaderContext from "../../store/loaderContext";
import { addDoc, collection } from "@firebase/firestore"; 
import { db } from "../../../firebase/firebase";
import "./addUserEmail.scss";
 
const AddUserEmail = ()=> {

    const {loaderStatus, setLoaderStatusFunc} = useContext(LoaderContext);
    const [userEmail, setUserEmail] = useState('');
    const emailInputFunc = (event)=> {
        setUserEmail(event)
    }

    const submitEmailFun = async (event)=> {
        event.preventDefault();
        try {
            setLoaderStatusFunc(true);
            const docRef = await addDoc(collection(db, "useremails"), {
                email: userEmail,
            });
            setUserEmail('');
            setTimeout(()=> {
                setLoaderStatusFunc(false);
            },1000)
        } catch (e) {
            console.log(e)
            setLoaderStatusFunc(false);
        }

    }

    return (
        
            <form onSubmit={submitEmailFun} className="add_email_wrapper">
                <UInput title="User Email" type="email" value={userEmail} getData={emailInputFunc} />
                <ButtonGroup>
                    <UserButton title="Add Email" type="submit"/> 
                </ButtonGroup>
            </form>

    )
}

export default AddUserEmail;