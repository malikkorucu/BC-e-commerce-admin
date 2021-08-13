import PropTypes from 'prop-types';
import React from 'react';
// Import Scrollbar
import SimpleBar from 'simplebar-react';
import SidebarContent from './SidebarContent';

const Sidebar = props => (
  <>
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        {props.type !== 'condensed' ? (
          <SimpleBar style={{ maxHeight: '100%' }}>
            <SidebarContent />
          </SimpleBar>
        ) : (
          <SidebarContent />
        )}
      </div>
    </div>
  </>
);

Sidebar.propTypes = {
  type: PropTypes.string,
};
Sidebar.defaultProps = {
  type: '',
};

export default Sidebar;
