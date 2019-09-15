// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// // Ant Design UI
// import 'antd/dist/antd.css';
// import './index.css';
// import { Input } from 'antd';


// class SearchBar extends Component {
//   render() {
// ReactDOM.render(<Input placeholder="search" />, document.getElementById('container'));
// }        
// }


// export default SearchBar;

import React from "react";


function SearchBar(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default SearchBar;
