import { Component } from 'react';

import './index.css'

class SearchInput extends Component {
  render() {

    return(
      <input 
      className={this.props.className}
      type="search"
      placeholder={this.props.placeholder}
      onChange={this.props.changeHandler}
      />
    )
  }
}

export default SearchInput; 