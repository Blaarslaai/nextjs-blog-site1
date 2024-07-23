import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex justify-center text-center">
        <p>
          Hi! I am Valdez Pretorius, a Full-Stack Developer from South Africa.
          <br />
          Welcome to my tech blog.
        </p>
      </section>

      <section className="py-10">
        <div className="flex justify-center">
          <h2 className="text-xl text-accent">Blog Posts</h2>
        </div>
        <br />
        <ul>
          {allPostsData &&
            allPostsData.map(({ id, date, title }, index) => (
              <>
                <li key={id}>
                  <span className="link">
                    {index + 1 + " "}-{" "}
                    <Link href={`/posts/${id}`}>{title}</Link>
                  </span>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
                <br />
              </>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
