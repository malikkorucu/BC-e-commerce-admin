/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLightSvg from '../../assets/images/logo-light.svg';
import logoLightPng from '../../assets/images/logo_white.png';
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu';

const Header = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (state) {
      document.body.classList.add('sidebar-enable');
      document.body.classList.add('vertical-collpsed');
    } else {
      document.body.classList.remove('sidebar-enable');
      document.body.classList.remove('vertical-collpsed');
    }
  }, [state]);

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                LOGO
                </span>
                <span className="logo-lg">
                  LOGO
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                setState(!state);
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>

          <div className="d-flex">
            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
