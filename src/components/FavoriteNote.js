import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MY_FAVORITES } from '../gql/query';
import ButtonAsLink from './ButtonAsLink';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

const FavoriteNote = props => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorites, setFavorites] = useState(
    // store if the user has favorites the note as state
    props.me.favorites.filter(note => note.id === props.noteId).length > 0
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId
    },
    //refetch the GET_MY_FAVORITES query to update the cache
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });
  // if the user has favorited the note, display the option to remove the favorite
  // else, display the option to add as a favorite
  return (
    <React.Fragment>
      {favorites ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorites(false);
            setCount(count - 1);
          }}
        >
          <MdFavorite />
        </ButtonAsLink>
      ) : (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorites(true);
            setCount(count + 1);
          }}
        >
          <MdOutlineFavoriteBorder />
        </ButtonAsLink>
      )}
    </React.Fragment>
  );
};

export default FavoriteNote;
