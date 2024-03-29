import React from 'react'
import RouterMap from "../router/router-map";
import CircularLoading from '../components/circular-loading'
import Header from "./common/header";





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
                {
                    this.state.initDone
                        ?
                        <div>
                            <Header/>
                        <RouterMap/>
                        </div>
                        :<CircularLoading/>

                }
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