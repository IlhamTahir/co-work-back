import React from 'react'
import Board from 'react-trello'


const data = {
    lanes: [
        {
            id: 'lane1',
            title: '待处理',
            label: '2/2',
            cards: [
                {id: 'Card1', title: '测试站搭建', description: '测试站搭建程序', label: '30 mins'},
                {id: 'Card2', title: '测试站建设', description: '测试站搭建并建设', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
        },
        {
            id: 'lane2',
            title: '已完成',
            label: '0/0',
            cards: []
        }
    ]
}

class Project extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Board data={data} draggable={true}/>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Project