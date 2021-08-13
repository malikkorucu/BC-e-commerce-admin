/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Breadcrumbs } from '../../components';

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  routes,
  ...rest
}) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={props => {
        if (
          isAuthProtected &&
          // eslint-disable-next-line no-undef
          !localStorage.getItem('loginHash') &&
          !isAuthenticated
        ) {
          return (
            <Redirect
              to={{ pathname: '/giris', state: { from: props.location } }}
            />
          );
        }

        if (
          !isAuthProtected &&
          isAuthenticated &&
          props.location.pathname !== '/cikis-yap'
        ) {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }

        let crumbs = null;

        if (isAuthProtected) {
          crumbs = routes
            .filter(({ path }) => props.match.path.includes(path))
            .map(({ path, ...otherProps }) => ({
              path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                    (_path, param) =>
                      _path.replace(`:${param}`, props.match.params[param]),
                    path
                  )
                : path,
              ...otherProps,
            }));
        }

        return (
          <Layout>
            {isAuthProtected && (
              <Breadcrumbs component={Component} crumbs={crumbs} />
            )}
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default Authmiddleware;
