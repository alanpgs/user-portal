import { useEffect, useState } from 'react';
import './userimages.scss';

const UserImages = (props)=> {

    const [userImagesList, setUserImagesList] = useState();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=> {

        let url_ = 'https://picsum.photos/v2/list?limit=5';

        const getImages = fetch(url_, {
            method: 'GET'
        })
        .then((res)=> {return res.json()})
        .then((data)=> {

            data.map((item)=> {
                item.isSelect = false
            })
            setUserImagesList(data)
            console.log(userImagesList)
            setIsVisible(true)
        }).catch(e=> console.log(e))
  
    }, [])

    const imageSelectFn = (value)=> {
        // userImagesList.map((item)=> {
        //     if(value == item.id){
        //        item.isSelect = !item.isSelect;
               
        //        setUserImagesList({
        //             ...userImagesList,   
        //             item
        //        })
        //     }
        // })
    }
    

    return (
       <div className="userImages_wrapper">


            {
                isVisible && 

                userImagesList.map( (list)=> 
                    <div key={list.id} className="item_" onClick={()=> imageSelectFn(list.id)}>
                        <h1>{list.author}</h1>
                        <picture>
                            <source srcSet={list.download_url}></source>
                            <img src={list.download_url} loading="lazy"/>
                        </picture>
                    </div>
                )
            }


       </div>
    )
}

export default UserImages;