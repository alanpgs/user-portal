import Button from "../button/button";
import "./banner.scss";

function HomeBanner() {
    return (
        <section className="home_banner">
            <div className="container">
                <div className="banner_content">
                    <h1>Create, <span>Search</span> & Explore</h1>
                    <p>Start Creating Your New Profile and Explore</p>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner;