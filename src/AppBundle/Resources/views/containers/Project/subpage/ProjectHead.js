import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';


class ProjectHead extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Grid className="project-head">
                <Row>
                    <Col mdOffset={2} md={10}>
                        <h1>项目{this.props.id}</h1>
                        <p>项目描述</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default ProjectHead