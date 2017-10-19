import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <ProjectList/>
            </div>
        )
    }

}

export default Home