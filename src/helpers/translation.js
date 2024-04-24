export const EN = {
  Home: 'Home',
  'About Us': 'About Us',
  'Contact Us': 'Contact Us',
}

export const RU = {
  Home: 'Дом',
  'About Us': 'О нас',
  'Contact Us': 'Связаться с нами',
}

export const AM = {
  Home: 'Տուն',
  'About Us': 'Մեր Մասին',
  'Contact Us': 'Կապ',
}


export const LANGUAGES =['EN',"RU",'AM']

export const languages = {
  EN,
  RU,
  AM
}

export const getLanguage = lang =>languages[lang]
