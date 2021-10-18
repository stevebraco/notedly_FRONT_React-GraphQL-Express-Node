import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import ButtonAsLink from './ButtonAsLink';
import { ImBin } from 'react-icons/im';

const DeleteNote = props => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: data => {
      //redirect the user to the "my notes" page
      props.history.push('/myNotes');
    }
  });
  return (
    <ButtonAsLink onClick={deleteNote}>
      <ImBin />
    </ButtonAsLink>
  );
};

export default withRouter(DeleteNote);
