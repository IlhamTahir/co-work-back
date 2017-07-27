import React from 'react'
import {Board} from 'react-trello'

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
                {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
        },
        {
            id: 'lane2',
            title: 'Completed',
            label: '1/1',
            cards: [
                {id: 'Card3', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
            ]
        }
    ]
}

const handleDragStart = (cardId, laneId) => {
    console.log("drag started");
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`);
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log("drag ended");
    console.log(`cardId: ${cardId}`);
    console.log(`sourceLaneId: ${sourceLaneId}`);
    console.log(`targetLaneId: ${targetLaneId}`);
};


class BoardSmple extends React.Component {
    render() {
        return  <Board data={data} draggable
                       handleDragStart={handleDragStart}
                       handleDragEnd={handleDragEnd} />
    }
}

export default BoardSmple