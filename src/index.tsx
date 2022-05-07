import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/base.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import store from './_helpers/store';

import App from './App';
import Detail from "./Detail"

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<App />} />
                     <Route  path="/detail/:id"  element={<Detail/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
