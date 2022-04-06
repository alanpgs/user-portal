import { UserProvider } from "../../store/userContext";
import UserBanner from "../../components/userbanner/userbanner";
import Section from "../../components/sections/section";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import RecentUsers from "../../components/recentusers/recentusers";
import UserTable from "../../components/usertable/usertable";
import AddUserEmail from "../../components/addUserEmail/addUserEmail";
import UserImages from "../../components/userimages/userimages";
import userImage from '../../assets/images/alan-user.png';
import "./userpage.scss";

function UserPage() {

   

    return(
        
            
                <main className="page_">
                    <UserBanner
                        title="Alan Sha Salim"
                        designation="Frontend Developer"
                        img = {userImage}
                    /> 

                    <Section padding="no_padding_top">
                            <div className="container">
                                <SectionTitle title="Add User Email"/>
                                <AddUserEmail />
                            </div>
                    </Section>

                    <Section padding="no_padding_top">
                            <div className="container">
                                <SectionTitle title="User Images"/>
                                <UserImages/>
                            </div>
                    </Section>


                    <UserProvider>
                        <Section padding="no_padding_top">
                            <div className="container">
                                <SectionTitle title="Recent Users"/>
                                <RecentUsers />
                            </div>
                        </Section>

                        <Section padding="no_padding_top">
                            <div className="container">
                                <SectionTitle title="Users List" />
                                <UserTable />
                            </div>
                        </Section>
                    </UserProvider>

                    

                </main>

        
    )
}

export default UserPage;