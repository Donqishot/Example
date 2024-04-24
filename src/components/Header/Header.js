import './Header.css'
import {Link} from "react-router-dom";
import {useTranslation} from "../../Context/languageContext";


const Header = () => {

  const {t,changeLanguage} = useTranslation()

  const onSelectChange = (e) =>{
    changeLanguage(e.target.value)
  }

  return  <div className={'header'}>
    <Link to={'/home'}>{t('Home')}</Link>
    <Link to={'/about_us'}>{t('About Us')}</Link>
    <Link to={'/contact_us'}>{t('Contact Us')}</Link>
    <select onChange={onSelectChange}>
      <option value="EN">EN</option>
      <option value="RU">RU</option>
      <option value="AM">AM</option>
    </select>

  </div>
}

export default Header
