import React from 'react'
import { Link } from 'gatsby'

export default props =>
  <Link
    {...props}
    activeClassName='active'
  />
