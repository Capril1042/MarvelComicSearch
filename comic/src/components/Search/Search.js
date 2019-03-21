import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends Component {
    constructor() {
        super();
    }

handleInput=(event)=> {
    this.props.onInput(event.target.value);
  }

render() {
return (
    <div className="SearchContainer">
    <input   className="Filter"
        onInput={this.handleInput}
        placeholder="Search by Character Name"
      />
    </div>
)
}
}

Search.propTypes = {
  onInput: PropTypes.func,
};

Search.defaultProps = {
  onInput: () => {},
};

export default Search;