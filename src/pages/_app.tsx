import type { AppProps } from 'next/app';
import { SolanaWalletProvider } from '../contexts/SolanaWalletProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SolanaWalletProvider>
      <Component {...pageProps} />
    </SolanaWalletProvider>
  );
}

export default MyApp;
