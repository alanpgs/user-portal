import UserBanner from "../../components/userbanner/userbanner";
import Section from "../../components/sections/section";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import RecentUsers from "../../components/recentusers/recentusers";
import UserTable from "../../components/usertable/usertable";
import "./userpage.scss";

function UserPage() {
    return(
        <main className="page_">
            <UserBanner/> 
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

        </main>
    )
}

export default UserPage;