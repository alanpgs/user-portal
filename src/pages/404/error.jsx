import Section from "../../components/sections/section";
import img from '../../assets/images/404-image.jpg';
import './error.scss';

const ErrorPage = ()=> {
    return (
        <Section padding="no_padding">
            <div className="error_wrapper">
                <img src={img} loading="lazy" /> 
            </div>
        </Section>
    )
}

export default ErrorPage;