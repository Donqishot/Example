import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Memocomponent from "./components/Memocomponent/Memocomponent";
import Cbmemocomponent from "./components/Cbmemocomponent/Cbmemocomponent";
import ButtonContext from "./Context/buttonContext";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import LanguageProvider from "./Context/languageContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LanguageProvider>
    <Provider store={store}>
  <ButtonContext.Provider value={{name: 'Click Me'}}>
    <App/>
  </ButtonContext.Provider>
    </Provider>
    </LanguageProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

