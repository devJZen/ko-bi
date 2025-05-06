import type { NextPage } from 'next';
import Head from 'next/head';
import { WalletConnection } from '../components/WalletConnection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Solana + Next.js App</title>
        <meta
          name="description"
          content="A Next.js app integrated with Solana blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Solana + Next.js App</h1>
        <WalletConnection />
        <p>Connect your wallet to interact with Solana blockchain</p>
      </main>
    </div>
  );
};

export default Home;
