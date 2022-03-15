import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import Button from "../../../components/button/button";
import { useState } from "react";
import "./homeForm.scss";

function HomeForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        city: '',
        imageUrl: ''
    });

    const firstNameFun = (event)=> {
        setFormData({
            ...formData,
            firstName: event.target.value
        })
    }

    const lastNameFun = (event)=> {
        setFormData({
            ...formData,
            lastName: event.target.value
        })
    }

    const emailFun = (event)=> {
        setFormData({
            ...formData,
            email: event.target.value
        })
    }

    const phoneFun = (event)=> {
        setFormData({
            ...formData,
            phone: event.target.value
        })
    }

    const dobFun = (event)=> {
        setFormData({
            ...formData,
            dob: event.target.value
        })
    }

    const cityFun = (event)=> {
        setFormData({
            ...formData,
            city: event.target.value
        })
    }

    const imageFun = (event)=> {
        setFormData({
            ...formData,
            imageUrl: event.target.value
        })
    }

    const submitFormFun = (event)=> {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div className="container">
            <form onSubmit={submitFormFun} className="form_wrapper">
                <div className="field_ full_">
                    <div className="urv_title_wrapper">
                        <SectionTitle title="Create a User" />
                    </div>
                </div>
                <div className="field_">
                    <label>First Name</label>
                    <input type="text" onChange={firstNameFun}/>
                </div>

                <div className="field_">
                    <label>Last Name</label>
                    <input type="text" onChange={lastNameFun}/>
                </div>

                <div className="field_">
                    <label>Email</label>
                    <input type="email" onChange={emailFun}/>
                </div>

                <div className="field_">
                    <label>Phone</label>
                    <input type="number" onChange={phoneFun}/>
                </div>

                <div className="field_">
                    <label>Date of Birth</label>
                    <input type="date" onChange={dobFun}/>
                </div>

                <div className="field_">
                    <label>City</label>
                    <input type="text" onChange={cityFun}/>
                </div>

                <div className="field_ attachment_">
                    <label>Picture</label>
                    <input type="file" onChange={imageFun}/>
                </div>

                <div className="field_ full_">
                    <div className="btn_group">
                        <button type="submit">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default HomeForm;