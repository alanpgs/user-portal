import { createContext, useContext, useEffect, useState } from "react";

const UserDetailsContext = createContext();

export const UserDetailsProvider = ({children})=> {

    const [userData, setUserData] = useState('');
    const [showData, setShowData] = useState(false);

    const getUserDetails = async (id)=> {
        try {
            let url_ = `https://dummyapi.io/data/v1/user/${id}`;
            let respone = await fetch(url_, {
                method: 'GET',
                headers: {
                    'app-id': '62397bb1bb759e527cacb6f1',
                },
            })
            let data = await respone.json();
            setUserData(data);
            setShowData(true);
        }
        catch(err){
            console.log(err) 
        }
    }

    return (
        <UserDetailsContext.Provider value={{userData, getUserDetails, showData}}>
            {children}
        </UserDetailsContext.Provider>
    )
}

export const useUserDetails = ()=> {
    const {userData, getUserDetails, showData} = useContext(UserDetailsContext);
    return {userData, getUserDetails, showData};
}

export default UserDetailsContext;