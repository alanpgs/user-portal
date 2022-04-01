import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({children})=> {

    const html = document.querySelector('html');
    const ls = localStorage;
    const [lang, setLang] = useState('en');
    const [langString, setLangString] = useState('عربي');

    useEffect(()=> {
    
        let dir = lang == 'en' ? 'ltr' : 'rtl';

        if(!ls.getItem('lang')){
            ls.setItem('lang', lang)
        }else{
            setLang(ls.getItem('lang'))
        }

        if(lang == 'ar'){
            setLangString('English') 
        }

        html.setAttribute('lang', lang)
        html.setAttribute('dir', dir)

    }, [lang])

    const langSwitcher = (value)=> {
        setLang(value);
        ls.setItem('lang', value);
    }

    return (
        <LanguageContext.Provider value={{lang, setLang, langString, langSwitcher}}>
            {children}
        </LanguageContext.Provider>
    )

}

export const useLanguageContext = ()=> {

    const {lang, setLang, langString, langSwitcher} = useContext(LanguageContext);
    return {lang, setLang, langString, langSwitcher};
    
}

export default LanguageContext;
