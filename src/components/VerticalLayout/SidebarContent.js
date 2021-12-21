import React, { useEffect } from 'react';
// MetisMenu
import MetisMenu from 'metismenujs';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

const SidebarContent = props => {
  const activateParentDropdown = item => {
    item.classList.add('active');
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== 'side-menu') {
      parent2El.classList.add('mm-show');
    }

    if (parent) {
      parent.classList.add('mm-active');
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add('mm-show'); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add('mm-active'); // li
          parent3.childNodes[0].classList.add('mm-active'); // a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add('mm-show'); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add('mm-show'); // li
              parent5.childNodes[0].classList.add('mm-active'); // a tag
            }
          }
        }
      }
      return false;
    }
    return false;
  };

  useEffect(() => {
    const pathName = `/oysapp${props.location.pathname}`;

    const initMenu = () => {
      // eslint-disable-next-line no-new
      new MetisMenu('#side-menu');
      let matchingMenuItem = null;
      const ul = document.getElementById('side-menu');
      const items = ul.getElementsByTagName('a');
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/" className="waves-effect mock">
              <i className="bx bx-home-circle" />
              <span>Anasayfa</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect mock">
              <i className="bx bxs-user-detail" />
              <span>Kullanıcı Yönetimi</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/kullanici-yonetimi/kullanicilar" className="mock">
                  Kullanıcılar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect mock">
              <i className="bx bxs-user-detail" />
              <span>Ürün Yönetimi</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/urun-yonetimi/urun-listesi" className="mock">
                  Ürün Listesi
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
};

SidebarContent.defaultProps = {
  location: null,
};

export default withRouter(SidebarContent);
