import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Social Network</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-1 text-center py-5">Main Page</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
