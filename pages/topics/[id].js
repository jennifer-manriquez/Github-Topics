import { useRouter } from "next/router";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { getGraphQLData } from '../../lib/topics';

export async function getServerSideProps({params}) {
  const allTopicsData = await getGraphQLData(params.id);
  return {
    props: {
      allTopicsData
    }
  }
}

export default function Post({ allTopicsData }) {
  const router = useRouter();
  const topicString = router.query.id;
  let stargazers = allTopicsData.data.topic.stargazerCount;
  let relatedTopics = allTopicsData.data.topic.relatedTopics;
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Topics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Github Topics
        </h1>
          <p className={styles.description}>
          {`Find GitHub Topics related to ${router.query.id}`}
          </p>
        <h2>{topicString}</h2>
          <span>{`stargazers: ${stargazers}`}</span> 
        <h2>Related Topics</h2>
          <ul>
          {relatedTopics.map((topic, index) => (
            <li key={index}>
              <Link href={`/topics/${topic.name}`}>
                <a>{topic.name}</a>
              </Link>
            </li>
          ))}
          </ul>
      </main>

      <footer className={styles.footer}>
        GitHub Topics | 2021
      </footer>
    </div>
  )
}


