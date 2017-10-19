import React from 'react';
import { render } from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
import RouterMap from "./router/router-map";
import App from "./containers/index";
render(
        <App/>
    ,
    document.getElementById('root')
)