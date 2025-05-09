import { HeroSection } from '@/components/hero-section';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Welcome to Ko-bi</title>
        <meta
          name="description"
          content="A Next.js app integrated with Solana blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
      </main>
    </div>
  );
}
