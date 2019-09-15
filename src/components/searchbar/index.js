import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Ant Design UI
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import Search from 'antd/lib/transfer/search';


class Search extends Component {
  render() {
ReactDOM.render(<Input placeholder="search" />, document.getElementById('container'));
}        
}


export default Search;