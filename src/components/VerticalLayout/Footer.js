/*eslint-disable */
import React /* useEffect, useState */ from 'react';

import { Col, Container, Row } from 'reactstrap';

const Footer = () => (
  <>
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6}>{new Date().getFullYear()} © Pudo</Col>
        </Row>
      </Container>
    </footer>
  </>
);

export default Footer;
