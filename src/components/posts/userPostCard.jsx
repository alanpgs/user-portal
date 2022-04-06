import './userPosts.scss';

const UserPostCard = ({data})=> {

    const {id, owner, image, likes, publishDate, tags, text} = data;

    return (
        <div className='user_post_wrapper'>
            <div className='user_post_top'>
                <div className='u_p_t_img'>
                    <img src={owner.picture} alt={owner.firstName} loading='lazy'/>
                </div>

                <div className='u_p_t_name'>
                    <h4>{`${owner.firstName} ${owner.lastName}`}</h4>
                    <p>{new Date(publishDate).toDateString()}</p>
                </div>
            </div>

            <div className='user_post_image'>
                <picture>
                    <source srcSet={image}></source>
                    <img src={image} loading="lazy" />
                </picture>
            </div>

            <div className='user_post_desc'>
                <p>{text}</p>
                <ul className='tags_'>
                    {   
                        tags.length &&

                        tags.map((tag, index)=> 
                            <li key={index}>#{tag}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserPostCard;