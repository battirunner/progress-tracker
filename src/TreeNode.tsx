// import React from "react";
import { TreeNodeProps, NodeDetailShowFunction } from './type/type';

const TreeNode: React.FC<TreeNodeProps> = ({node}) => {
    const nodeDetailShow: NodeDetailShowFunction = (nodeVal) => {
        console.log(nodeVal.nodeDatum.name);
    }   
    return (
        <>
            <g onClick={() =>nodeDetailShow(node)}>
                <rect width="120" height="40" x="-30" y="-15" onClick={node.toggleNode} fill={node.nodeDatum.fillColor ? node.nodeDatum.fillColor : 'black'} />
                <text x="-20" y="0" strokeWidth="1" fontSize={14} style={{ font: '16px', fill: 'white', stroke: 'white' }}>
                    {node.nodeDatum.name}
                </text>
            </g>
        </>
    )
}

export default TreeNode;