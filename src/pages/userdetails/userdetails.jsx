
import { useEffect } from "react";
import UserBanner from "../../components/userbanner/userbanner";
import {  useParams } from "react-router-dom";
import { useUserDetails } from "../../store/userDetailsContext";
import Section from "../../components/sections/section";
import UserTimeline from "../../components/userTimeline/userTimeline";


const UserDetails = (props)=> {

    const {userid} = useParams()
    const {userData, getUserDetails, showData} = useUserDetails();

    useEffect(()=> {
        getUserDetails(userid);
    },[]);

   return (
        <main className="page_">

            {
                showData && 

                <UserBanner 
                    title={`${userData.firstName} ${userData.lastName}`} 
                    img={userData.picture} 
                    designation={userData.email}
                /> 
            }
            

            <Section padding="no_padding_top">
                <UserTimeline data={userData} />
            </Section>
        </main>
   )
}
 
export default UserDetails;