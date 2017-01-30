import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { authenticate } from '../actions';

class Header extends Component {

  authButton() {
    return <button onClick={this.onAuthenticate.bind(this)}>{ this.props.authenticated ? 'Sign Out' : 'Sign In' }</button>;
  }

  onAuthenticate() {
    this.props.authenticate( ! this.props.authenticated );
  };

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            { this.authButton() }
          </li>
        </ul>
      </nav>
    );

  }

}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
};

export default connect(mapStateToProps, { authenticate })(Header);
