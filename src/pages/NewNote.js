import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import NoteForm from '../components/NoteForm';
import Loading from '../components/Loading';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import { NEW_NOTE } from '../gql/mutation';

const NewNote = (props) => {
  useEffect(() => {
    document.title = 'New Note - Notedly';
  });
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
    onCompleted: (data) => {
      //when complete, redirect the user to the note page
      props.history.push(`note/${data.newNote.id}`);
    },
  });
  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <p>Error saving the note</p>}
      <NoteForm action={data} />
    </React.Fragment>
  );
};

export default NewNote;
