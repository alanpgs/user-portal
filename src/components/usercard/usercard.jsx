import { useRef } from 'react';
import './usercard.scss';

const UserCard = ({item})=> {

    const domContent = useRef();
    
    const cardClick = ()=> {
        domContent.current.remove();
        console.log(domContent)
    }

    return(
        <div className='user_item' onClick={()=> cardClick()} ref={domContent}>
            <div className='inner_profile_image'> 
                <div className='image_'>
                    <picture>
                        <source srcSet={item.picture}></source>
                        <img src={item.picture} loading='lazy'/>
                    </picture>
                </div>
               
            </div>

            <div className='content_'>
                <h4>{item.firstName + ' ' + item.lastName}</h4>
                <p>User Designation</p>
            </div>
        </div>
    )
}

export default UserCard;