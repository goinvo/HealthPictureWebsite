import React from "react"
import PropTypes from "prop-types"
import Link from './link'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <header>
        <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              Health Picture
            </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded={ this.state.menuOpen ? true : false } onClick={ this.toggleMenu }>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${ this.state.menuOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to='/' className="navbar-item is-primary">
                Home
              </Link>
              <Link to='/about' className="navbar-item">
                About
              </Link>
              <Link to='/design-strategy' className="navbar-item">
                Design Strategy
              </Link>
              <Link to='/implementation' className="navbar-item">
                Implementation
              </Link>
              <Link to='/join' className="navbar-item">
                Join
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
