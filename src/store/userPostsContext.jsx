import { createContext, useContext, useState } from "react";

const UserPostsContext = createContext();

export const UserPostsProvider = ({children})=> {

    const [userPosts, setUserPosts] = useState([]);
    const [showPost, setShowPost] = useState(false);

    const getUserPosts = async (id)=> {
        try {
            let url_ = `https://dummyapi.io/data/v1/user/${id}/post?limit=10`;
            let respone = await fetch(url_, {
                method: 'GET',
                headers: {
                    'app-id': '62397bb1bb759e527cacb6f1',
                },
            })
            let data = await respone.json();
            setUserPosts(data.data);
            setShowPost(true);
        }
        catch(err){
            console.log(err) 
        }
    }

    return (
        <UserPostsContext.Provider value={{userPosts, getUserPosts, showPost}}>
            {children}
        </UserPostsContext.Provider>
    )
}

export const useUserPosts = ()=> {
    const {userPosts, getUserPosts, showPost} = useContext(UserPostsContext);
    return {userPosts, getUserPosts, showPost};
}

export default UserPostsContext;