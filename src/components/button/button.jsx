import "./button.scss";

function Button(props){ 

    let mainClass = 'btn_primary';
    let style = props.style ? props.style : 'default';

    return (
        <button className={`${mainClass} ${style}`}>
            <span>{props.title}</span>
        </button>
    )

}

export default Button;