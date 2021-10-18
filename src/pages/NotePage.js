import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Note from '../components/Note';
import Loading from '../components/Loading';
import { GET_NOTE } from '../gql/query';

const NotePage = (props) => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <Loading />;
  if (error) return <p>Error! Note not found.</p>;
  return <Note note={data.note} />;
};

export default NotePage;
