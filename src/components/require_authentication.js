import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
export default function(ComposedComponent) {

  class Authentication extends Component {

    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      /*
      if ( ! this.props.authenticated )
        this.context.router.push('/');
      */
    }

    componentWillUpdate(nextProps) {
      if ( ! nextProps.authenticated ) // log out
        this.context.router.push('/');
    }

    render() {
      if ( this.props.authenticated )
        return <ComposedComponent {...this.props} />;
      return <div>Unauthorized</div>;
    };
  }

  function mapStateToProps(state) {
    return { authenticated : state.authenticated };
  }
  return connect(mapStateToProps)(Authentication)
}
