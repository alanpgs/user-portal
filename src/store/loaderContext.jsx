import { createContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({children})=> {

    const [loaderStatus, setLoaderStatus] = useState(false);
    const [loaderType, setLoaderType] = useState('default');
    
    const setLoaderStatusFunc = (value, type)=> {

        if(type == undefined){
            setLoaderType('default');
        }else{
            setLoaderType(type);
        }
        setLoaderStatus(value); 
    }; 

    return (
        <LoaderContext.Provider value={{loaderStatus, loaderType, setLoaderStatusFunc}}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderContext;