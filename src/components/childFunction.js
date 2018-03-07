import React from 'react';

export default function ChildFunction(props){
    let bathtub = 'rubber ducky'
    return <button onClick={e=>props.childFunc(bathtub)}>Click Me. Please...</button>
}