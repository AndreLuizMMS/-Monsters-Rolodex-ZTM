import { Component } from 'react'


class SearchBox extends Component {

  render() {
    return (
      <>
        <input
          // className="search-box"
          placeholder='Search'
          type="search"
          onChange={onSearchChange}
        />
      </>
    )
  }

}

export default SearchBox;