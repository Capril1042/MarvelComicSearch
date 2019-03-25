import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './Search.css';


export default class Search extends PureComponent {
   

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

