import './form.scss';

function UDate(props) {

    let title_ = props.title;

    return (
        <div className="field_">
            <label>{title_}</label>
        </div>
    )
}

export default UDate;