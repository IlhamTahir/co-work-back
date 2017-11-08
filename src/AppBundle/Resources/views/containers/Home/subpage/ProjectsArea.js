import React, {Component, PropTypes} from 'react'
import {getProjects} from '../../../fetch/home/home'
import ProjectList from '../../../components/ProjectList/index'
import CircleLoading from '../../../components/circular-loading'
import { connect } from 'react-redux'
import {reloadProjects} from '../../../actions/projectList'


class ProjectsArea extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {

        return (
           <div className="project-area">
               {
                   this.props.projectList.loading
                   ? <CircleLoading/>
                   : <ProjectList data={this.props.projectList.data}/>

               }

           </div>
        )
    }
    componentDidMount(){
        const {dispatch} = this.props
        dispatch(reloadProjects())
    }
}

function mapStateToProps(state) {
    return {
        projectList: state.projectList
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default connect(mapStateToProps)(ProjectsArea)