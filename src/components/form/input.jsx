import { useContext } from 'react';
import { useUserReg } from '../../store/userRegistration';
import './form.scss';


export const UInput = (props)=> {

    let title_ = props.title;
    let type_ = props.type ? props.type : 'text';
    let value_ = props.value ? props.value : '';

    const setData = (event)=> {
        props.getData(event.target.value)
    }

    return (
        <div className="field_">
            <label>{title_}</label>
            <input type={type_} value={value_} onChange={setData}/>
        </div>
    )
}

export const USelect = (props)=> {

    let title_ = props.title;

    return (
        <div className="field_">
            <label>{title_}</label>
        </div>
    )
}

export const UUpload = (props)=> {

    const {fileUpload} = useUserReg();
    let title_ = props.title;

    const setData = (event)=> {

        let file = event.target.files[0];
        let meta = event.target.files[0].type;

        if(!file) return;

        fileUpload(file, meta);
        props.getData('test')
    }   

    return (
        <div className="field_ attachment_">
            <label>{title_}</label>
            <input type="file" onChange={setData}/>
        </div>
    )
}


export const  UDate = (props)=> {

    let title_ = props.title;
    let value_ = props.value ? props.value : '';

    const setData = (event)=> {
        props.getData(event.target.value)
    }

    return (
        <div className="field_">
            <label>{title_}</label>
            <input type="date" value={value_} onChange={setData}/>
        </div>
    )
}

