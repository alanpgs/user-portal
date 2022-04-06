import './button.scss';
import icon from '../../assets/images/theme.svg';
import { Link } from "react-router-dom";

export const UserButton = (props)=>{ 

    let title_ = props.title ? props.title : '';
    let type_ = props.type ? props.type : 'button';
    let style_ = props.style ? props.style : 'default';

    const triggerMe = (event)=> {
        if(props.trigger){
            props.trigger(event)
        }
    }


    return (

        <button className={'btn_primary' + ' ' + style_} type={type_} onClick={triggerMe} >
            <span>{title_}</span>
        </button>

    )

}

export const RoutBtn = (props)=>{ 

    let title_ = props.title ? props.title : '';
    let style_ = props.style ? props.style : 'default';
    let link_ = props.link ? props.link : '/';

    return (

        <Link to={link_} className={'btn_primary' + ' ' + style_}>
            <span>{title_}</span>
        </Link>

    )

}

export const IconButton = (props)=>{ 

    let type_ = props.button ? props.button : 'button';

    const triggerFun = (event)=> {
        props.setFun(event)
    }

    return (

        <button className={'btn_primary icon_'} type={type_} onClick={triggerFun}>
            <span>
                <img src={icon} />
            </span>
        </button>

    )

}


export const ButtonGroup = (props)=>{ 

    let align_ = props.align ? props.align : 'start_';

    return (

        <div className={'btn_group' + ' ' + align_}>
            {props.children}
        </div>


    )

}

export default UserButton;