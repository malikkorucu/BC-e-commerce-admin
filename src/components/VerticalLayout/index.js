/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Layout Related Components
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    };
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this);
  }

  componentDidMount() {
    if (this.props.isPreloader === true) {
      document.getElementById('preloader').style.display = 'block';
      document.getElementById('status').style.display = 'block';

      setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('status').style.display = 'none';
      }, 2500);
    } else {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('status').style.display = 'none';
    }

    // Scroll Top to 0
    window.scrollTo(0, 0);

    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth);
    }

    if (this.props.leftSideBarType) {
      this.props.changeSidebarType(this.props.leftSideBarType);
    }
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme);
    }
  }

  capitalizeFirstLetter = string =>
    string.charAt(1).toUpperCase() + string.slice(2);

  toggleMenuCallback = () => {
    if (this.props.leftSideBarType === 'default') {
      this.props.changeSidebarType('condensed', this.state.isMobile);
    } else if (this.props.leftSideBarType === 'condensed') {
      this.props.changeSidebarType('default', this.state.isMobile);
    }
  };

  render() {
    return (
      <>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
            </div>
          </div>
        </div>

        <div id="layout-wrapper">
          <Header toggleMenuCallback={this.toggleMenuCallback} />
          <Sidebar
            theme={this.props.leftSideBarTheme}
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
          />
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  topbarTheme: PropTypes.any,
};

Layout.defaultProps = {
  changeLayoutWidth: () => {},
  changeSidebarType: () => {},
  changeTopbarTheme: () => {},
  children: null,
  isPreloader: null,
  layoutWidth: null,
  leftSideBarTheme: null,
  leftSideBarType: null,
  topbarTheme: null,
};

export default Layout;
