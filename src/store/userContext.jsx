import { createContext, useState, useLayoutEffect } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children})=> {

    // const [userList, setUserList] = useState(null);
    // const [showData, SetShowData] = useState(false);

    // useLayoutEffect(()=> {

    //     let url_ = 'https://dummyapi.io/data/v1/user?limit=10';
    
    //     let fetch_ = fetch(url_, {method: 'GET',
    //     headers: {
    //         'app-id': '62397bb1bb759e527cacb6f1',
    //     },})
    //     .then((res) => {return res.json()})
    //     .then((data)=> {
    //         setUserList(data.data)
    //         SetShowData(true)
    //     });

    // }, [])

    const userList = [
        {
            "id": "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cb",
            "title": "miss",
            "firstName": "Edita",
            "lastName": "Vestering",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cc",
            "title": "ms",
            "firstName": "Adina",
            "lastName": "Barbosa",
            "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cd",
            "title": "mr",
            "firstName": "Roberto",
            "lastName": "Vega",
            "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109ce",
            "title": "mr",
            "firstName": "Rudi",
            "lastName": "Droste",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109cf",
            "title": "mrs",
            "firstName": "Carolina",
            "lastName": "Lima",
            "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d0",
            "title": "mr",
            "firstName": "Emre",
            "lastName": "Asikoglu",
            "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d1",
            "title": "mr",
            "firstName": "Kent",
            "lastName": "Brewer",
            "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d2",
            "title": "mr",
            "firstName": "Evan",
            "lastName": "Carlson",
            "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
        },
        {
            "id": "60d0fe4f5311236168a109d3",
            "title": "mr",
            "firstName": "Friedrich-Karl",
            "lastName": "Brand",
            "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
        }
    ]

    return (
        <UserContext.Provider value={{userList}}>
            {children}
        </UserContext.Provider>
    )
}
;

export default UserContext;