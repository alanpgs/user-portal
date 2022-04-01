
import { useContext } from 'react';
import { storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoaderContext from '../../store/loaderContext';

const FileUpload = (props)=> {

    const {setLoaderStatusFunc} = useContext(LoaderContext)

    let title_ = props.title;

    const setData = async (event)=> {

        let file = event.target.files[0];
        let meta = event.target.files[0].type;

        if(!file) return;

        try{
            setLoaderStatusFunc(true, 'upload');
            const nameRef = +Math.floor(Date.now() * Math.random());
            const storageRef = ref(storage, `/userimages/img-${nameRef}`);
            const metadata = {
                contentType: meta,
            };

            const uploadTask = await uploadBytes(storageRef, file, metadata);
            getDownloadURL(storageRef).then((url)=> {
                props.getData(url)
            })

            setTimeout(()=> {
                setLoaderStatusFunc(false, 'default');
            },500);
            
        }catch{
            e=> console.log(e)
            setLoaderStatusFunc(false, 'default');
        }

    }   

    return (
        <div className="field_ attachment_">
            <label>{title_}</label>
            <input type="file" onChange={setData}/>
        </div>
    )
}

export default FileUpload;
