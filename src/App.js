

import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { myData } from './Data/NodeLinks'

const MyGraph = () => (
    <ForceGraph2D
        graphData={myData}
        nodeAutoColorBy="id"
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={d => d.value * 0.001}
    />
);

export default MyGraph;


//import { useState } from 'react';

//const ColoToggle = () => {
//    const [color, setColor] = useState('red');
//    const handleColorChange = () => {
//        const colors = ['red', 'orange', 'yellow'];
//        const currentIndex = colors.indexof(color);
//        if (currentIndex != 1) {
//            setColor(colors[(curentIndex + 1) % colors.length]);
//        }
//    };
//    return (

//        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >

//            <button onClick={handleColorChange}>
//                Toggle Color
//            </button>
//            <div

//                style={{
//                    width: '200px',
//                    height: '200px',
//                    borderRadius: '50%',
//                    backgroundColor: color,
//                    marginTop: '20px',

//                }}
//            >
//                {color}
//            </div>
//        </div>

//    );
//};

//export default ColoToggle;