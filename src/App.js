/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useEffect } from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Import Routes all
import trMessages from 'devextreme/localization/messages/tr.json';
import { locale, loadMessages } from 'devextreme/localization';
import { oysRoutes, authRoutes } from './routes/allRoutes';

// Import all middleware
import Authmiddleware from './routes/middleware/Authmiddleware';

// layouts Format
import VerticalLayout from './components/VerticalLayout';
import NonAuthLayout from './components/NonAuthLayout';

// 404
import { ErrorPage } from './pages';

// Import scss
import './assets/scss/theme.scss';

// devExpress
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

// Import toastr
import 'toastr/build/toastr.min.css';

const App = () => {
  useEffect(() => {
    loadMessages(trMessages);
    locale('tr');
  }, []);

  return (
    <>
      <Router basename="/">
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {oysRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              routes={oysRoutes}
              key={idx}
              isAuthProtected
              exact
            />
          ))}
          <Route path="*">{ErrorPage}</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
