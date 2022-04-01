import { createContext, useContext, useState } from "react";
import {storage, db} from '../../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UserRegContext = createContext();

export const UserRegProvider = ({children})=> {

    const [formLoader, setFormLoader] = useState(false);
    const [loaderType, setLoaderType] = useState('default');
    const [fileURL, setFileURL] = useState('');
    
    const fileUpload =  async (file, meta)=> {
        try{
            setFormLoader(true);
            setLoaderType('upload');
            const nameRef = +Math.floor(Date.now() * Math.random());
            const storageRef = ref(storage, `/userimages/img-${nameRef}-${nameRef/2}`);
            const metadata = {
                contentType: meta,
            };
            const uploadTask = await uploadBytesResumable(storageRef, file, metadata);

            const uploadUrl = await storageRef.getDownloadURL()
            .then((url)=> {
                setFileURL(url);
                return setFileURL(url)
            })

            setTimeout(()=> {
                setFormLoader(false);
            },1000);
            
        }catch{
            e=> console.log(e)
            setFormLoader(false);
        }
    }

    const submitForm = async (data)=> {
        try{
            setFormLoader(true);
            setLoaderType('default');

            const docRef = await addDoc(collection(db, "userLists"), data);

            setTimeout(()=> {
                setFormLoader(false);
            },1000)

        }catch{
            e=> console.log(e)
            setFormLoader(false);
        }
    }


    return (
        <UserRegContext.Provider value={{formLoader, loaderType, fileUpload, submitForm}}>
            {children}
        </UserRegContext.Provider>
    )
}

export const useUserReg = ()=> {

    const {formLoader, loaderType, fileUpload, submitForm} = useContext(UserRegContext);
    return {formLoader, loaderType, fileUpload, submitForm};

}


export default UserRegContext;