import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Loading from '../components/Loading';
import { GET_ME, GET_NOTE } from '../gql/query';
import NoteForm from '../components/NoteForm';
import { EDIT_NOTE } from '../gql/mutation';

const EditNotePage = (props) => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  // fetch the current user's data
  const { data: userData } = useQuery(GET_ME);
  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id,
    },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    },
  });
  if (loading) return <Loading />;
  if (error) return <p>Error! not found.</p>;
  if (userData && userData.me.id !== data.note.author.id) {
    return <p> You do not have access to edit this note </p>;
  }
  return <NoteForm note={data.note.content} action={editNote} />;
};

export default EditNotePage;
