import React from 'react';
// sim1: 36E, 38D
export default function List(props){
    // sim1: 38C
    let oranges = props.lists.map(item=>{
        return (
            <div key={item.id}>{item.name}</div>
        )
    })

    return oranges;
}