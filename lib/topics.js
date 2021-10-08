import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getGraphQLData() {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.KEY}`,
    }

  });

  const { data } = await client.query({
    query: gql`
    query {
      search(query: "topic:react", type:REPOSITORY, first: 3){
        repositoryCount
        nodes{
          ... on Repository {
            name
            stargazerCount
          }
        }
      }
    }
  `
  });
  
  return {
    data
  }
}