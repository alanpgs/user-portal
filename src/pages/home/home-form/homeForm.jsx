import { useState, useContext, useRef } from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import {UserButton, ButtonGroup} from "../../../components/button/button";
import {UInput, UDate, UUpload} from "../../../components/form/input";
import FileUpload from "../../../components/form/fileupload";
import UserRegContext from "../../../store/userRegistration";
import DOMLoader from "../../../components/loader/loader";

import "./homeForm.scss";


function HomeForm() {

    const {formLoader, loaderType, submitForm} = useContext(UserRegContext)
    const formElement = useRef(null)

    let obj = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: +971, 
        dob: '',
        city: 'Dubai',
        imageUrl: ''
    }

    const [formData, setFormData] = useState(obj);

    const firstNameFun = (event)=> {
        setFormData({
            ...formData,
            firstName: event
        })
    }

    const lastNameFun = (event)=> {
        setFormData({
            ...formData,
            lastName: event
        })
    }

    const emailFun = (event)=> {
        setFormData({
            ...formData,
            email: event
        })
    }

    const passwordFun = (event)=> {
        setFormData({
            ...formData,
            password: event
        })
    }

    const phoneFun = (event)=> {
        setFormData({
            ...formData,
            phone: event
        })
    }

    const dobFun = (event)=> {
        setFormData({
            ...formData,
            dob: event
        })
    }

    const cityFun = (event)=> {
        setFormData({
            ...formData,
            city: event
        })
    }

    const imageFun = (event)=> {
        setFormData({
            ...formData,
            imageUrl: event
        })
    }

    const submitFormFun = (event)=> {
        event.preventDefault();
        submitForm(formData);
        formElement.current.reset;
    }

    return (
        <div className="container">
            <form onSubmit={submitFormFun} className="form_wrapper" ref={formElement}>
                <div className="field_ full_">
                    <div className="urv_title_wrapper">
                        <SectionTitle title="Create a User" />
                    </div>
                </div>

                <UInput title="First Name" value={formData.firstName} getData={firstNameFun} />
                <UInput title="Last Name" value={formData.lastName} getData={lastNameFun} />
                <UInput title="Email" value={formData.email} type="email" getData={emailFun} />
                <UInput title="Password" value={formData.password} type="password" getData={passwordFun} />
                <UInput title="Phone" value={formData.phone} type="number" getData={phoneFun} />
                <UDate title="Date of Birth" value={formData.dob} getData={dobFun} />
                <UInput title="City" value={formData.city} getData={cityFun} />
                <FileUpload title="Picture" getData={imageFun} />

                <div className="field_ full_">
                    <ButtonGroup>
                         <UserButton title="Create Account" type="submit"/> 
                    </ButtonGroup>
                </div>

                {
                    formLoader&&

                    <DOMLoader type={loaderType}></DOMLoader>

                }

            </form>
        </div>
    )
}

export default HomeForm;