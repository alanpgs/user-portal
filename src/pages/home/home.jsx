import HomeBanner from "../../components/banner/banner";
import Section from "../../components/sections/section";
import HomeForm from "./home-form/homeForm";

function HomeMain() {
    return (
        <main className="home_">
            <HomeBanner />
            <Section theme="grey_" padding="no_padding_top">
                <HomeForm/>
            </Section>
        </main>
    )
}

export default HomeMain;