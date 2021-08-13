import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false);
  const [username, setusername] = useState();

  useEffect(() => {
    setusername(`${'malik'} ${'korucu'}`);
  }, []);

  return (
    <>
      {false ? (
        <i className="dripicons-loading" />
      ) : (
        <Dropdown
          isOpen={menu}
          toggle={() => setMenu(!menu)}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            tag="button"
          >
            <span className="d-none d-xl-inline-block ml-2 mr-1">
              {username}
            </span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </DropdownToggle>
          <DropdownMenu right>
            <Link to="/cikis-yap" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger" />
              <span>Çıkış Yap</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
};

export default ProfileMenu;
