import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { useCallback, useState } from 'react';
import { getBalance, requestAirdrop } from '../utils';

export function useSolanaProgram() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get account balance
  const getAccountBalance = useCallback(async () => {
    if (!publicKey) {
      setError('Wallet not connected');
      return null;
    }

    try {
      setLoading(true);
      setError(null);
      return await getBalance(connection, publicKey);
    } catch (err) {
      console.error('Error getting balance:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setLoading(false);
    }
  }, [connection, publicKey]);

  // Request airdrop (for devnet/testnet only)
  const requestDevnetAirdrop = useCallback(
    async (amount: number = 1) => {
      if (!publicKey) {
        setError('Wallet not connected');
        return false;
      }

      try {
        setLoading(true);
        setError(null);
        await requestAirdrop(connection, publicKey, amount);
        return true;
      } catch (err) {
        console.error('Error requesting airdrop:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [connection, publicKey]
  );

  // Example function to call a custom program
  const callProgram = useCallback(
    async (programId: string, data: Buffer) => {
      if (!publicKey) {
        setError('Wallet not connected');
        return null;
      }

      try {
        setLoading(true);
        setError(null);

        const programPubkey = new PublicKey(programId);

        const instruction = new TransactionInstruction({
          keys: [{ pubkey: publicKey, isSigner: true, isWritable: true }],
          programId: programPubkey,
          data: data,
        });

        const transaction = new Transaction().add(instruction);

        const signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'confirmed');

        return signature;
      } catch (err) {
        console.error('Error calling program:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        return null;
      } finally {
        setLoading(false);
      }
    },
    [connection, publicKey, sendTransaction]
  );

  return {
    callProgram,
    getAccountBalance,
    requestDevnetAirdrop,
    loading,
    error,
    connected: !!publicKey,
    walletAddress: publicKey?.toBase58(),
  };
}
