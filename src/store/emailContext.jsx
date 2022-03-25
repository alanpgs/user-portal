import { createContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";

const DBEmailContext = createContext();

export const DBEmailProvider = ({children})=> { 

    const [isLoading, setIsLoading] = useState(false)

    const submitEmail = async (event)=> {
        try {
            setIsLoading(true);
            const docRef = await addDoc(collection(db, "useremails"), {
                email: userEmail,
            });
        console.log("Document written with ID: ", docRef.id);
        setIsLoading(false);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    return(
        <DBEmailProvider.Provider value={{submitEmail, isLoading, setIsLoading}}>
            {children}
        </DBEmailProvider.Provider>
    )

};


export default DBEmailContext;
