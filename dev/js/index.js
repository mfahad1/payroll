import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from "./components/app";
import PdfHtml from "./components/pdfHtmlView";
import allReducers from './reducers';	


const store =  createStore(allReducers);


ReactDOM.render(
   <Provider store = {store}>
   	<Router history={hashHistory}>
     <Route path='/' component={App} />
     <Route path='/pdfView' component={PdfHtml} />
    </Router>
   </Provider>

   ,
    document.getElementById('root')
);
