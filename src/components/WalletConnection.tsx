import { FC, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL, Connection } from '@solana/web3.js';
import { useConnection } from '@solana/wallet-adapter-react';

export const WalletConnection: FC = () => {
  const { publicKey, wallet, disconnect, connected } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey && connection) {
        try {
          const bal = await connection.getBalance(publicKey);
          setBalance(bal);
        } catch (e) {
          console.error('Failed to fetch balance', e);
          setBalance(null);
        }
      } else {
        setBalance(null);
      }
    };

    getBalance();
    // Set up polling to update balance regularly
    const intervalId = setInterval(getBalance, 10000);
    
    return () => clearInterval(intervalId);
  }, [publicKey, connection]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="wallet-connection">
      <WalletMultiButton />
      
      {connected && publicKey && (
        <div className="wallet-info">
          <p>Connected with: {wallet?.adapter.name}</p>
          <p>Address: {formatAddress(publicKey.toBase58())}</p>
          {balance !== null && (
            <p>Balance: {(balance / LAMPORTS_PER_SOL).toFixed(4)} SOL</p>
          )}
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )}
    </div>
  );
};