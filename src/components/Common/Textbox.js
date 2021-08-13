import React from 'react';
import TextBox from 'devextreme-react/text-box';
import PropTypes from 'prop-types';
import { LoadIndicator } from 'devextreme-react/load-indicator';

const Textbox = ({ isLoading, children, ...props }) => (
  <>
    <TextBox {...props}>{children}</TextBox>
    {isLoading && (
      <LoadIndicator
        width={24}
        height={24}
        style={{
          position: 'absolute',
          right: '1.5em',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        visible
      />
    )}
  </>
);

Textbox.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.any,
  props: PropTypes.any,
};

Textbox.defaultProps = {
  isLoading: false,
  props: null,
  children: null,
};

export default Textbox;
