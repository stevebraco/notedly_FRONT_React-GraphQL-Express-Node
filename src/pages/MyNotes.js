import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes - Notedly';
  });

  const { loading, error, data } = useQuery(GET_MY_NOTES);
  if (loading) return <Loading />;
  if (error) return `Error ${error.message}`;
  // if the query is successful and there are notes, return the feed of notes
  // else if the query is successful and there aren't notes, display a message
  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes yet</p>;
  }
};

export default MyNotes;
