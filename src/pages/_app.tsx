import { Header } from '@/components/header';
import type { AppProps } from 'next/app';
import { SolanaWalletProvider } from '../contexts/SolanaWalletProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SolanaWalletProvider>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header />
        <Component {...pageProps} />
      </div>
    </SolanaWalletProvider>
  );
}

export default MyApp;
