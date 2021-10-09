# Github-Topics-Project

This is a solution app written in React and NextSJ, which allows you to see GitHub topics related to the term React, and when you click have access to the related to others and so on, and their number of stars.  It makes use of the Github GraphQL API implemented with Apollo.

This project makes use of the NextJS framework, which allow this project to have better performance by taking advantage of pre-rendering features and Server Side Rendering, which prove beneficial when consuming data that is supposed to be updated frequently. 
## Run Locally

First you will need 

Clone the project

```bash
  git clone https://github.com/jennifer-manriquez/Github-Topics.git
```

Install the dependencies using 
```bash
   npm install
```

Then go to the project

```bash
  cd aspiration-challenge
```
You will need to create a .env file and place a key

You will also need to get a GitHub key to make use of Github GraphQL API. To get one, follow the instructions of the site: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token 

```bash
  KEY=your-github-key-here
```

Start the server

```bash
  npm run dev
```

## Future Improvements for this project include
- Making a more appropriate error handling. 
- Including unit tests for the GraphQL queries implemented in Apollo
- Include a components folder with at least a Layout Component to reuse footer and titles. 
- Make use of a React Components Library for a better design and Use styled components
- Refactor repeated code in index.js and [id].js. 
