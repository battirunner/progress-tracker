// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Tree from 'react-d3-tree';
import sampleData from './data/sample-data.json';
import './App.css'
// import { ReactElement } from 'react';
// import { NodeDatumType } from "./type/type";

function App() {
  const renderRectSvgNode = (reactD3Node) => (
    <g>
      <rect width="140" height="80" x="-10" y="-40" onClick={reactD3Node.toggleNode} fill={reactD3Node.nodeDatum.fillColor ? reactD3Node.nodeDatum.fillColor : 'black'} />
      <text x="-3" y="-15" strokeWidth="1" fontSize={14} style={{font: '16px', fill: 'white', stroke: 'white'}}>
        {reactD3Node.nodeDatum.name}
      </text>
      
    </g>
  );

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
        Production Progress
      </p>
      <div style={{
        height: '75vh',
        width: '500px'
      }}>
        <Tree 
          hasInteractiveNodes
          data={sampleData}
          renderCustomNodeElement={(reactD3Node) => renderRectSvgNode(reactD3Node)}
          pathFunc="step"
        />
      </div>
    </>
  )
}

export default App
