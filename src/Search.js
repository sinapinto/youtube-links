import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends React.Component {
  render() {
    const { value, onChange, inputRef, ...rest } = this.props;
    return (
      <input
        {...rest}
        autoFocus
        className="search"
        onChange={onChange}
        value={value}
        type="text"
        ref={inputRef}
      />
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  inputRef: PropTypes.func,
};
