import "./section.scss"

function Section(props) {

    let theme_ = props.theme ? props.theme : 'default';
    let padding_ = props.padding ? props.padding : '';
     
   return (
    <section className={'section_ ' + theme_ + ' ' + padding_}>
        {props.children}
    </section>
   )
}

export default Section;