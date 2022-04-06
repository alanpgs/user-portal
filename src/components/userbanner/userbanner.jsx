import bgLayer from '../../assets/images/bg_pattern-01.svg';
import './userbanner.scss';


function UserBanner(props) {

    const bg_ = bgLayer;
    let title_ = props.title;
    let img_ = props.img;
    let designnation_ = props.designation

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

                    {
                        img_ && 

                        <div className="profile_icon">
                            <picture>
                                <source srcSet={img_} type="image/png"></source>
                                <img src={img_} loading="lazy" />
                            </picture>
                        </div>
                    }

                    

                    <div className="content_">
                        {
                            title_ && 
                            <h1>{title_}</h1>
                        }

                        {
                            designnation_ && 
                            <p>{designnation_}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserBanner;