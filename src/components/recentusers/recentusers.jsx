import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import UserCard from "../usercard/usercard";
import 'swiper/css';
import './recentuser.scss';

const RecentUsers = ()=> {

    const [userList, setUserList] = useState(null);
    const [showData, SetShowData] = useState(false);

    useEffect(()=> {

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