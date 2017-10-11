import React from 'react'
import {getProjects} from '../../../fetch/home/home'
import Projects from '../../../components/ProjectList/index'
import CircleLoading from '../../../components/circular-loading'

class Project extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }
    render() {
        return (
           <div>
               {
                   this.state.data.length
                   ?  <Projects data={this.state.data}/>
                       : <CircleLoading/>
               }

           </div>
        )
    }
    componentDidMount(){
        const result = getProjects()
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({
                    data : data
                })
            }
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Project