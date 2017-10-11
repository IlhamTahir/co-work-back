import React from 'react'
import RouterMap from "../router/router-map";
import CircularLoading from '../components/circular-loading'
import Header from "./Common/header";
import Home from "./Home/index";
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
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 1000)
    }
}
export default App