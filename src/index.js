import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import * as d3 from 'd3';


ReactDOM.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App width={400} height={330} />,
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);