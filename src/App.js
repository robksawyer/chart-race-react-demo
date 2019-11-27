/**
 * @file App.js
 */
import React from 'react'
// import BarChart from 'chart-race-react'

import logo from './logo.svg'

import data from './data'

// Local components
import BarChart from './components/BarChart'

const randomColor = () => {
  return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255})`
}

const len = data[Object.keys(data)[0]].length;
const keys = Object.keys(data);
const colors = keys.reduce((res, item) => ({
    ...res,
    ...{ [item]: randomColor() }
}), {});

const labels = keys.reduce((res, item, idx) => {
  return{
  ...res,
  ...{[item]: (
    <div style={{textAlign:"center",}}>
      <div>{item}</div>
    </div>
    )}
}}, {});

const time = Array(20).fill(0).map((itm, idx) => idx + 1);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="container text-sans px-40 mx-auto my-40">
        <BarChart
          start={true}
          data={data}
          timeline={time}
          labels={labels}
          colors={colors}
          len={len}
          timeout={400}
          delay={100}
          timelineStyle={{
            textAlign: "center",
            fontSize: "50px",
            color: "rgb(148, 148, 148)",
            marginBottom: "100px"
          }}
          textBoxStyle={{
            textAlign: "right",
            color: "rgb(133, 131, 131)",
            fontSize: "30px",
          }}
          barStyle={{
            height: "60px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          width={[15, 75, 10]}
          maxItems={5}
        />
      </div>
    </div>
  );
}

export default App;
