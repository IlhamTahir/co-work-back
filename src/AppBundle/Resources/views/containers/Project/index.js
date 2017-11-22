import React from 'react'

import ProjectHead from './subpage/ProjectHead'
import './style.less'
import { Table } from 'antd';

const columns = [{
    title: '用户故事ID',
    dataIndex: 'id',
    key: 'id',
    },
    {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
    },
    {
    title: '用户故事',
    dataIndex: 'userStory',
    key: 'userStory',
    },
    {
        title: '估点',
        dataIndex: 'storyPoint',
        key: 'storyPoint',
    },
    {
        title: 'BA',
        dataIndex: 'ba',
        key: 'ba',
    },
    {
        title: 'PM',
        dataIndex: 'pm',
        key: 'pm',
    },
    {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
    },
];

const data = [{
    key: 1,
    id: 'BA20171122001',
    priority: 'John Brown',
    storyPoint: 60,
    userStory: 'New York No. 1 Lake Park',
    ba: 'John Brown',
    children: [{
        key: 11,
        id: 'BA20171122001',
        priority: 'John Brown',
        storyPoint: 42,
        userStory: 'New York No. 2 Lake Park',
        ba: 'John Brown',
    }, {
        key: 12,
        id: 'BA20171122001',
        priority: 'John Brown jr.',
        storyPoint: 30,
        userStory: 'New York No. 3 Lake Park',
        ba: 'John Brown',
        children: [{
            key: 121,
            id: 'BA20171122001',
            priority: 'Jimmy Brown',
            storyPoint: 16,
            userStory: 'New York No. 3 Lake Park',
            ba: 'John Brown',
        }],
    }, {
        key: 13,
        id: 'BA20171122001',
        priority: 'Jim Green sr.',
        storyPoint: 72,
        userStory: 'London No. 1 Lake Park',
        ba: 'John Brown',
        children: [{
            key: 131,
            id: 'BA20171122001',
            priority: 'Jim Green',
            storyPoint: 42,
            userStory: 'London No. 2 Lake Park',
            ba: 'John Brown',
            children: [{
                key: 1311,
                id: 'BA20171122001',
                priority: 'Jim Green jr.',
                storyPoint: 25,
                userStory: 'London No. 3 Lake Park',
                ba: 'John Brown',
            }, {
                key: 1312,
                id: 'BA20171122001',
                priority: 'Jimmy Green sr.',
                storyPoint: 18,
                userStory: 'London No. 4 Lake Park',
                ba: 'John Brown',
            }],
        }],
    }],
}, {
    key: 2,
    id: 'BA20171122001',
    priority: 'Joe Black',
    storyPoint: 32,
    userStory: 'Sidney No. 1 Lake Park',
    ba: 'John Brown',
}];

class Project extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <ProjectHead id={id}/>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Project