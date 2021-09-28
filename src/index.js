import React from "react";
import ReactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import {Provider} from './context/context'
import App from './App';
import './index.css';
ReactDom.render(
    // using context 
    <SpeechProvider appId="47864982-c458-4340-a31a-42cf8ad13418" language="en-US">
        <Provider>    
        <App/>
        </Provider>

    </SpeechProvider>
    
,document.getElementById('root'));