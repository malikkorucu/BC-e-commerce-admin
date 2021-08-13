/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <>
      <div className="pudo-breadcrumb-container px-4">
        <Row>
          <Col md={12}>
            <div className="page-title-box d-block align-items-center justify-content-between">
              <div className="page-title-right">
                <nav>
                  <ol className="breadcrumb m-0">
                    {crumbs
                      .filter(x => x.title)
                      .map((item, indexKey) =>
                        indexKey + 1 === crumbs.length || !item.component ? (
                          <BreadcrumbItem>
                            <Link key={indexKey} className="font-size-13">
                              <b>{item.title}</b>
                            </Link>
                          </BreadcrumbItem>
                        ) : (
                          <BreadcrumbItem active>
                            <Link
                              key={indexKey}
                              to={item.path}
                              className="font-size-13"
                            >
                              <b>{item.title}</b>
                            </Link>
                          </BreadcrumbItem>
                        )
                      )}
                  </ol>
                </nav>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Breadcrumbs;
