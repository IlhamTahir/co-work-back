import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
export const ItemTypes = {
    TASK_CARD: 'task-card'
};
const styles = {
    cardStyle: {

    }
};
const taskCardSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class TaskCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <div style={{
                background: isDragging ? '#f1f1f1' : 'none',
                zIndex: isDragging ? '2' : '0',
            }}>

            <Card style={{
                cursor: 'move'
            }} zDepth={0}>
                <CardHeader
                    title="创建课程、编辑课程创建课程、编辑课程创建课程、编辑课程创建课程、编辑课程"
                    avatar=""
                />
            </Card>

            </div>
        )
    }
}

TaskCard.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};


export default DragSource(ItemTypes.TASK_CARD, taskCardSource, collect) (TaskCard)