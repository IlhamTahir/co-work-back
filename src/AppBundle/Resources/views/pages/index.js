import React from 'react'
import RouterMap from "../router/router-map";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularLoading from '../components/circular-loading'




class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <MuiThemeProvider>
                {
                    this.state.initDone
                        ? <RouterMap/>
                        : <CircularLoading/>
                }
            </MuiThemeProvider>
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