import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import UserForm from '../components/UserForm';
import Loading from '../components/Loading';
import { SIGNUP_USER } from '../gql/mutation';

const SignUp = (props) => {
  const [values, setValues] = useState();
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    signUp({
      variables: {
        ...values,
      },
    });
    console.log(values);
  };

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      // store the token
      localStorage.setItem('token', data.signUp);
      // update the local cache
      client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      props.history.push('/');
    },
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {loading && <Loading />}
      {error && <p>Error...</p>}
    </React.Fragment>
  );
};

export default SignUp;

// const Wrapper = styled.div`
//   border: 1px solid #f5f4f0;
//   max-width: 500px;
//   padding: 1em;
//   margin: 0 auto;
// `;

// const Form = styled.form`
//   label,
//   input {
//     display: block;
//     line-height: 2em;
//   }

//   input {
//     width: 100%;
//     margin-bottom: 1em;
//   }
// `;
