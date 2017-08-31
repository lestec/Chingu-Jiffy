import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'Router/index'

const TodoDisplayFilters = () => {
  return (
    <div className= 'display-filters'>
      <Link to='/'> All </Link>
      <Link to='/active'> Active </Link>
      <Link to='/complete'> Complete </Link>
    </div>
  )
}

export default TodoDisplayFilters;
