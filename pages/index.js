import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-tr from-blue-300 to-indigo-500">
      <Head>
        <title>Bedroom</title>
        <meta
          name="description"
          content="Bedroom is a series of mini games to do with friends from your bedroom"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="container rounded bg-white p-2 w-4/5 m-20">
        <h1 className="flex text-3xl font-black font-sans">
          Bedroom{" "}
          <span>
            <Image
              src="/vercel.svg"
              alt="Bedroom Logo"
              width={96}
              height={16}
            />
          </span>
        </h1>
        <div className="container m-10 flex">
          <div></div>
        </div>
        </div>
      </main>

      <footer className="flex flex-col container mx-auto">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mx-auto"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
