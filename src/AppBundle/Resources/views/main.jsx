import React from 'react';
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from "./containers/index";
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

injectTapEventPlugin();

const store = configureStore()
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)