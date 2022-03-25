import { createContext, useState, useLayoutEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({children})=> {
    const [userList, setUserList] = useState(null);
    const [showData, SetShowData] = useState(false);

    useLayoutEffect(()=> {

        let url_ = 'https://dummyapi.io/data/v1/user?limit=20';
    
        let fetch_ = fetch(url_, {
            method: 'GET',
            headers: {
                'app-id': '62397bb1bb759e527cacb6f1',
            },
        })
        .then((res) => {return res.json()})
        .then((data)=> {
            setUserList(data.data)
            SetShowData(true)
        });

    }, [])

    return (
        <UserContext.Provider value={{userList, showData}}>
            {children}
        </UserContext.Provider>
    )

};

export default UserContext;