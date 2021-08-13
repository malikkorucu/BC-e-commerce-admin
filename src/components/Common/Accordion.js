import React, { useState } from 'react';
import { Button as DevButton } from 'devextreme-react/button';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Col, Collapse, Row } from 'reactstrap';

const Accordion = ({
  title,
  isOpen,
  isHtmlTitle,
  isToggle,
  children,
  clickCallback,
  ...props
}) => {
  const [isAccordionOpen, setIsAccordionOneOpen] = useState(isOpen);
  const toggle = () => setIsAccordionOneOpen(!isAccordionOpen);

  const clickHandler = () => {
    if (isToggle) {
      toggle();
    }
    if (clickCallback) {
      clickCallback();
    }
  };

  return (
    <>
      <Card {...props}>
        <CardHeader
          onClick={() => clickHandler()}
          style={{ cursor: isToggle && 'pointer' }}
        >
          <Row className="p-0 m-0">
            <Col md={8} className="p-0 m-0 d-flex align-items-center">
              {isHtmlTitle ? title : <h5 className="p-0 m-0">{title}</h5>}
            </Col>
            {isToggle ? (
              <Col md={4} className="p-0 m-0 d-flex justify-content-end">
                <DevButton
                  icon={
                    isAccordionOpen
                      ? 'bx bx-chevron-down'
                      : 'bx bx-chevron-right'
                  }
                />
              </Col>
            ) : (
              <Col md={4} className="p-0 m-0 d-flex justify-content-end">
                <DevButton icon="bx bx-minus" />
              </Col>
            )}
          </Row>
        </CardHeader>
        <Collapse isOpen={isAccordionOpen}>
          <CardBody>{children}</CardBody>
        </Collapse>
      </Card>
    </>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  isHtmlTitle: PropTypes.bool,
  isToggle: PropTypes.bool,
  children: PropTypes.any,
  props: PropTypes.any,
  clickCallback: PropTypes.func,
};

Accordion.defaultProps = {
  title: '',
  isOpen: false,
  isHtmlTitle: false,
  isToggle: true,
  props: null,
  children: null,
  clickCallback: null,
};

export default Accordion;
