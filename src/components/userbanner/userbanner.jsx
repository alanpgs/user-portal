import userImage from '../../assets/images/alan-user.png';
import bgLayer from '../../assets/images/bg_pattern-01.svg';
import './userbanner.scss';


function UserBanner() {

    const img_ = userImage;
    const bg_ = bgLayer;

    return(
        <section className="page_banner">

            <div className='bg_layer'>
                <picture>
                    <source srcSet={bg_}></source>
                    <img src={bg_} loading="lazy" />
                </picture>
            </div>

            <div className="container">
                <div className="inner_">
                    <div className="profile_icon">
                        <picture>
                            <source srcSet={img_} type="image/png"></source>
                            <img src={img_} loading="lazy" />
                        </picture>
                    </div>

                    <div className="content_">
                        <h1>Welcome Alan Sha Salim !</h1>
                        <p>UI Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserBanner;