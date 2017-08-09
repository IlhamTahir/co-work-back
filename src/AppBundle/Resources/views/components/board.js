import React from 'react'
import {Board} from 'react-trello'

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
                {id: '1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: '2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
        },
        {
            id: 'lane2',
            title: 'Completed',
            label: '1/1',
            cards: [
                {id: '3', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
            ]
        }
    ]
}

const handleDragStart = (cardId, laneId) => {

};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
};


class BoardSmple extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data,
        };
    }
    render() {
        return  <Board data={this.state.data} draggable
                       handleDragStart={handleDragStart}
                       handleDragEnd={handleDragEnd}
                        onDataChange={(newData) => {
                            this.switchData(newData)
                        }}/>
    }

    switchData(newData) {
        this.setState({data: newData});
    }

}



export default BoardSmple