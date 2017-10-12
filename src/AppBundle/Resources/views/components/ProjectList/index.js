import React from 'react'
import { Grid, Row } from 'react-flexbox-grid';

import ProjectGrid from "./ProjectGrid/index";



class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;
        return (
            <Grid fluid>
                <Row>
                {data.map((item, index) => {
                    return (
                        <ProjectGrid key={index} data={item}/>
                    )
                })}
                </Row>
            </Grid>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Projects