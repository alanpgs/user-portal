import { useContext } from "react";
import UserContext from "../../store/userContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import UserCard from "../usercard/usercard";
import 'swiper/css';
import './recentuser.scss';

const RecentUsers = ()=> {

    const {userList, showData} = useContext(UserContext);

    return(
        <div className="recent_user_wrapper">
        <Swiper
            spaceBetween={40}
            slidesPerView={4}
        >

        {
            showData && 

            userList.map((item)=> 
                <SwiperSlide key={item.id}>
                    <UserCard item={item} />
                </SwiperSlide>
            )
        }
        
        </Swiper>
        </div>
    )
}

export default RecentUsers;