import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import Page from './components/Page';
// import * as serviceWorker from './serviceWorker';
// import {IntlProvider} from 'react-intl';
import Wrapper from './components/Wrapper';


ReactDOM.render(
  
  <React.StrictMode>
       <Wrapper>
          <Page date={Date.now()} />
       </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')

  
);

//serviceWorker.unregister();


