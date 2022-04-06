import { useEffect } from 'react';
import { useUserPosts } from '../../store/userPostsContext';
import UserPostCard from '../posts/userPostCard';
import './userTimelinePosts.scss';

const UserTimelinePosts = ({id})=> {

    const {userPosts, getUserPosts, showPost} = useUserPosts();

    useEffect(()=> {
        getUserPosts(id)
    }, [])

    return (
        <div className="timeline_posts_list">
            {
                showPost &&
                userPosts.map((data)=> 
                    <UserPostCard key={data.id} data={data} />
                )
            }
        </div>
    )
}

export default UserTimelinePosts;