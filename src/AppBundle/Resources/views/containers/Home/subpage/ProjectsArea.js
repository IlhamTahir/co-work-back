import React from 'react'
import {getProjects} from '../../../fetch/home/home'
import ProjectList from '../../../components/ProjectList/index'
import CircleLoading from '../../../components/circular-loading'

class ProjectsArea extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            loading: false
        }
    }
    render() {
        return (
           <div className="project-area">
               {
                   this.state.loading
                   ? <CircleLoading/>
                   : <ProjectList data={this.state.data}/>

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
                    data : data,
                    loading: false
                })
            }
        })
    }

    reloadData(){
        const result = getProjects()
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json;
            if (data.length) {
                this.setState({
                    data : data,
                    loading: false
                })
            }
            this.props.transferLoadingStatus(false)
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            loading: nextProps.loadingStatus
        });
        this.reloadData()
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default ProjectsArea