import DropDownBox from 'devextreme-react/drop-down-box';
import List from 'devextreme-react/list';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const Dropdown = ({
  dataSource,
  value,
  valueExpr,
  displayExpr,
  placeholder,
  onValueChanged,
  onOptionChanged,
  selectedItemKeys,
  itemRender,
  showSelectionControls,
  isMultiple,
  listHeight,
  readOnly,
  children,
  disabled,
  grouped,
  groupRender,
  contentRender,
  ...props
}) => {
  const dropdown = useRef(null);

  return (
    <DropDownBox
      ref={dropdown}
      value={value}
      valueExpr={valueExpr}
      displayExpr={displayExpr}
      disabled={disabled}
      placeholder={placeholder}
      showClearButton
      dataSource={dataSource}
      onValueChanged={onValueChanged}
      readOnly={readOnly}
      contentRender={
        contentRender ||
        (() => (
          <List
            dataSource={dataSource}
            grouped={grouped}
            groupRender={groupRender}
            showSelectionControls={showSelectionControls}
            selectionMode={isMultiple ? 'multiple' : 'single'}
            selectAllMode="page"
            selectedItemKeys={selectedItemKeys}
            onOptionChanged={onOptionChanged}
            onSelectionChanged={() => {
              if (!isMultiple) {
                dropdown.current?.instance?.close();
              }
            }}
            height={listHeight}
            itemRender={itemRender}
            searchExpr={displayExpr}
            searchEnabled
            searchMode="contains"
          />
        ))
      }
      {...props}
    >
      {children}
    </DropDownBox>
  );
};

Dropdown.propTypes = {
  dataSource: PropTypes.any,
  value: PropTypes.any,
  valueExpr: PropTypes.string,
  displayExpr: PropTypes.string,
  placeholder: PropTypes.string,
  onValueChanged: PropTypes.func,
  onOptionChanged: PropTypes.func,
  selectedItemKeys: PropTypes.any,
  showSelectionControls: PropTypes.bool,
  itemRender: PropTypes.func,
  readOnly: PropTypes.bool,
  grouped: PropTypes.bool,
  isMultiple: PropTypes.bool,
  listHeight: PropTypes.string,
  children: PropTypes.any,
  contentRender: PropTypes.any,
  groupRender: PropTypes.any,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  dataSource: [],
  selectedItemKeys: [],
  value: null,
  placeholder: '',
  displayExpr: 'label',
  valueExpr: 'value',
  isMultiple: false,
  listHeight: '400px',
  showSelectionControls: false,
  children: null,
  contentRender: null,
  groupRender: null,
  readOnly: false,
  grouped: false,
  disabled: false,
  itemRender: () => {},
  onValueChanged: () => {},
  onOptionChanged: () => {},
};

export default Dropdown;
