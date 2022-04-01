import { createContext, useState } from "react";
// import { addDoc, collection } from "@firebase/firestore"; 
// import { db } from "../../firebase/firebase";

const DBEmailContext = createContext();

export const DBEmailProvider = ({children})=> { 

    const [isLoading, setIsLoading] = useState(false)

    const submitEmail = (event)=> {
        // try {
        //     setIsLoading(true);
        //     const docRef = await addDoc(collection(db, "useremails"), {
        //         email: event,
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //     setIsLoading(false);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        //     setIsLoading(false);
        // }

    }

    return(
        <DBEmailProvider.Provider value={'not working'}>
            {children}
        </DBEmailProvider.Provider>
    )

};


export default DBEmailContext;