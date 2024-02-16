import React from 'react'
import PropTypes from 'prop-types'

function DemoProps({text}: any) {
    return (
      <button>{text}</button>
    );
}

DemoProps.propTypes = {
  text: PropTypes.string.isRequired,
}

export default DemoProps;
