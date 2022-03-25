import dynamic from "next/dynamic";
import Head from "next/head";

const Landing = dynamic(() => import("../components/home"), { ssr: false });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>KAIJU FRENZ NFT</title>
          <meta name="description" content="KAIJU FRENZ NFT" />
        </Head>
        <Landing />
      </div>
    </>
  );
}
