import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import './index.scss';
//////////////////////////////////
import './asset/Css/bootstrap-rtl.min.css';
import './asset/Css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";

ReactDOM.render(
        <Provider store = {store}>
           <BrowserRouter>
              <App/>
           </BrowserRouter>
        </Provider>
,document.getElementById('root'));