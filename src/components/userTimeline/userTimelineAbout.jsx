import './userTimelineAbout.scss';

const UserTimelineAbout = (props)=> {

    const {firstName, lastName, email, phone, gender, dateOfBirth } = props.data;

    return (
        <div className="user_timeline_about">
            <div className="item_">
                <label>Name</label>
                <p>{`${firstName} ${lastName}`}</p>
            </div>

            <div className="item_">
                <label>Email</label>
                <p>{email}</p>
            </div>

            <div className="item_">
                <label>Phone</label>
                <p>{phone}</p>
            </div>

            <div className="item_">
                <label>Gender</label>
                <p>{gender}</p>
            </div>

            <div className="item_">
                <label>DOB</label>
                <p>{new Date(dateOfBirth).toDateString()}</p>
            </div>
        </div>
    )
}

export default UserTimelineAbout;