import React from 'react'

import ProjectHead from './subpage/ProjectHead'
import './style.less'

class Project extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <ProjectHead id={id}/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Project