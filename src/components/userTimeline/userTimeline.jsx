import UserTimelinePosts from "./userTimelinePosts";
import { UserPostsProvider } from "../../store/userPostsContext";
import "./userTimeline.scss";

const UserTimeline = (props)=> {

    const data = props.data;

    return (
        <div className="user_timeline_wrapper">
            {
                data &&

                <UserPostsProvider>
                    <UserTimelinePosts id={data.id} />
                </UserPostsProvider>
            }
            
           
        </div>
    )
}

export default UserTimeline;