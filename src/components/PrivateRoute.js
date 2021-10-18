import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import { IS_LOGGED_IN } from '../gql/query';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <Loading />;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  // if the user is logged in, route them to the requested component
  //else redirect them to the sign-in page
  return (
    <Route
      {...rest}
      render={(props) =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
