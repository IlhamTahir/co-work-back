import React from 'react'
import RouterMap from "../router/router-map";
import CircularLoading from '../components/circular-loading'
import Header from "./Common/Header/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                {
                    this.state.initDone
                        ?
                        <div>
                            <Header/>
                        <RouterMap/>
                        </div>
                        :<CircularLoading/>

                }
                </MuiThemeProvider>
            </div>
        )
    }
    componentDidMount() {
            this.setState({
                initDone: true
            })
    }
}
export default App