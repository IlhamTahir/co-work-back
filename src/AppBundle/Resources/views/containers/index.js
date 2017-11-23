import React from 'react'
import RouterMap from "../router/router-map";
//import Header from "./Common/Header/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { Spin } from 'antd';

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
                        <Layout className="layout">
                            <Header>
                              <h1>首页</h1>
                            </Header>
                            <Content style={{ padding: '0 50px' }}>
                                <RouterMap/>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                CoWork ©2017
                            </Footer>
                        </Layout>
                        :<Spin size="large"/>

                }
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