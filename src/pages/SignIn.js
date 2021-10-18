import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql, useQuery } from '@apollo/client';
import UserForm from '../components/UserForm';
import Loading from '../components/Loading';
import { SIGNIN_USER } from '../gql/mutation';
import { IS_LOGGED_IN } from '../gql/query';

const SignIn = (props) => {
  const { data } = useQuery(IS_LOGGED_IN);
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  useEffect(() => {
    document.title = 'Sign In - Notedly';
    data.isLoggedIn && props.history.push(redirect);
  }, [props.history, redirect, data]);

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      // store the token
      localStorage.setItem('token', data.signIn);
      // update the local cache
      client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      props.history.push('/');
    },
  });

  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signin" />
      {loading && <Loading />}
      {error && <p>Error...</p>}{' '}
    </React.Fragment>
  );
};

export default SignIn;
