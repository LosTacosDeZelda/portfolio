import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import English from '../lang/en.json';

export const Context = React.createContext("fr");

const local = "fr";

let lang;
if (local === 'en') {
   lang = English;
}else {
   if (local === 'fr') {
       lang = French;
   } else {
       
   }
}

const Wrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);

   function selectLanguage(lan) {
       
       setLocale(lan);
       if (lan === 'en') {
           setMessages(English);
       } else {
           if (lan === 'fr'){
               setMessages(French);
           } else {
               
           }
       }
   }

   return (
       <Context.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>

   );
}

export default Wrapper;