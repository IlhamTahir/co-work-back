import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data
        return (
            <div>
                {data.map((item, index) => {
                    return <div key={index}>
                        <Card>
                            <CardTitle title={item.name} />
                            <CardText>
                                {item.description}
                            </CardText>
                        </Card>
                    </div>
                })}
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Projects