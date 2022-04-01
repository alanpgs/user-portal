import { useLottie } from "lottie-react";
import loaderFile from '../../assets/lottie/loader.json'
import uploadFile from '../../assets/lottie/upload.json'
import './loader.scss';

const DOMLoader = (props)=> {

    let loaderType = loaderFile;

    if(props.type == 'upload'){
        loaderType = uploadFile;
    }

    const options = {
        animationData: loaderType,
        loop: true,
        autoplay: true,
    };
    
    const { View } = useLottie(options);

    return (

        <div className='dom_loader'>
            <div className='dom_loader_overlay'></div>

            <div className='dom_loader_content'>
                {View}
            </div>
        </div>
        
    )
}

export default DOMLoader;