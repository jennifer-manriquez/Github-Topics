import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getGraphQLData(topicString) {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${process.env.KEY}`,
    }

  });

  const reactvar = "react"
  // const reactvar = topicString

  const { data } = await client.query({
    variables: {
      "topic": `${reactvar}`
    },
    query: gql`
    query getTopic($topic: String!){
      topic(name: $topic) {
        stargazerCount
        relatedTopics {
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