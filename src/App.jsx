import './App.css';
import Parent from './componants/parent';
import React from 'react';
import CountdownTimer from './componants/currentT&T';
function App() {
  const futureDateTime = '2023-04-01T00:00:00';
//  const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
//  const renderList = itemList.map((item, index) => 
//                                <div key={index}>{item}</div>
//                              );
  return (
    <div className="App">
            <h1>Countdown Timer</h1>
      <CountdownTimer futureDateTime={futureDateTime} />
      {/* <Parent/> */}
      {/* <div>The List contains:</div>
      {renderList} */}
    </div>
  );
}

export default App;
