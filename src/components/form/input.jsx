import './form.scss';

function UInput(props) {

    let title_ = props.title;

    return (
        <div className="field_">
            <label>{title_}</label>
        </div>
    )
}

export default UInput;