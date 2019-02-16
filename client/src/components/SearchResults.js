import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    return (
      <div>
        <h2>
          Search Results:
        </h2>
        <Search/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps, null) (SearchResults);
