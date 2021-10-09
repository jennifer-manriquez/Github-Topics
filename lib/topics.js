import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getGraphQLData(id) {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.KEY}`,
    }

  });

  const { data } = await client.query({
    variables: {
      "topic": id
    },
    query: gql`
    query getTopic($topic: String!){
      topic(name: $topic) {
        stargazerCount
        relatedTopics (first: 10){
          name
        }
      }
    }
  `
  });
  
  return {
    data
  }
}