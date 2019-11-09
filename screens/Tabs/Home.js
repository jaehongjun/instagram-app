import React, { useState } from "react";
import styled from "styled-components/native";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import { ScrollView, RefreshControl } from "react-native";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  const [refresing, setRefresing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY);
  const refresh = async () => {
    try {
      setRefresing(true);
      await refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setRefresing(false);
    }
  };
  console.log(loading, data);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          onRefresh={refresh}
        ></RefreshControl>
      }
    >
      {loading ? <Loader /> : <Text>Hello</Text>}
    </ScrollView>
  );
};
