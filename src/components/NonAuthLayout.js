import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NonAuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.capitalizeFirstLetter.bind(this);
  }

  componentDidMount() {
    const currentage = this.capitalizeFirstLetter(this.props.location.pathname);

    // eslint-disable-next-line no-undef
    document.title = `${currentage} | Pudo Operasyon Yönetim Merkezi`;
  }

  capitalizeFirstLetter = string =>
    string.charAt(1).toUpperCase() + string.slice(2);

  render() {
    return <>{this.props.children}</>;
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

NonAuthLayout.defaultProps = {
  children: null,
  location: null,
};

export default withRouter(NonAuthLayout);
