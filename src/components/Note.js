import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';
import Loading from './Loading';
import NoteUser from './NoteUser';

const date = new Date();

const Note = ({ note }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <Loading />;
  if (error) return <p> Error! </p>;
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <UserName>{note.author.username}</UserName>
          {moment(note.createdAt).fromNow()}
        </MetaInfo>
        {data.isLoggedIn && (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>
        )}
      </MetaData>
      <ReactMarkdown children={note.content} />
    </StyledNote>
  );
};

export default Note;

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

// Style the note metadata
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

// add some space between the avatar and meta info
const MetaInfo = styled.div`
  padding-right: 1em;
`;

// align 'UserActions' to the right on large screens
const UserActions = styled.div`
  margin-left: auto;
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  text-transform: capitalize;
  margin: 0;
`;
