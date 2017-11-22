import React from 'react'
//import { Grid, Row } from 'react-flexbox-grid';
import { Row } from 'antd';

import ProjectGrid from "./ProjectGrid/index";



class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;
        return (
                <Row gutter={16}>
                {data.map((item, index) => {
                    return (
                        <ProjectGrid key={index} data={item}/>
                    )
                })}
                </Row>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Projects