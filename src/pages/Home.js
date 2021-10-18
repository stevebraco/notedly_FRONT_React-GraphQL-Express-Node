import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '../components/NoteFeed';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { GET_NOTES } from '../gql/query';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [
              ...previousResult.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes,
            ],
            __typename: 'noteFeed',
          },
        };
      },
    });
  };
  return (
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button onClick={handleFetchMore}>Load more</Button>
      )}
    </React.Fragment>
  );
};

export default Home;
