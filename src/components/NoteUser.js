import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ME } from '../gql/query';
import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';
import Loading from './Loading';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <Loading />;
  if (error) return <p> Error! </p>;
  return (
    <React.Fragment>
      <UserWrapper>
        <FavoriteNote
          me={data.me}
          noteId={props.note.id}
          favoriteCount={props.note.id}
        ></FavoriteNote>
        {data.me.id === props.note.author.id && (
          <React.Fragment>
            <Link to={`/edit/${props.note.id}`}>
              <FiEdit />
            </Link>
            <DeleteNote noteId={props.note.id} />
          </React.Fragment>
        )}
      </UserWrapper>
      Favorites: {props.note.favoriteCount}
    </React.Fragment>
  );
};

export default NoteUser;

const UserWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
