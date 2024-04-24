import {createContext, useCallback, useContext, useState} from "react";
import {getLanguage, languages, LANGUAGES} from "../helpers/translation";

const LaguageContext = createContext(null)

const LanguageProvider = ({children}) =>{

  const [activeLanguage,setActiveLanguage] = useState(
    getLanguage(localStorage.getItem('language') || LANGUAGES[0])
  )

  const changeLanguage = useCallback((lang) =>{
    setActiveLanguage(languages[lang])
    localStorage.setItem('language',lang.toString())
  },[])

  const t = useCallback((word)=>{
    return activeLanguage[word] || word

  },[activeLanguage])

  return <LaguageContext.Provider value={{t,changeLanguage,activeLanguage}}>
    {children}
  </LaguageContext.Provider>
}
export const useTranslation = () => useContext(LaguageContext)
export default LanguageProvider
