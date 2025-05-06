import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

// Example function to get account info
export async function getAccountInfo(
  connection: Connection,
  publicKey: PublicKey
) {
  return await connection.getAccountInfo(publicKey);
}

// Example function to check balance
export async function getBalance(connection: Connection, publicKey: PublicKey) {
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
}

// Example function to send SOL
export async function transferSOL(
  connection: Connection,
  fromWallet: Keypair,
  toPublicKey: PublicKey,
  amount: number
) {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: toPublicKey,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  return await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
}

// Example: Request airdrop (for devnet/testnet)
export async function requestAirdrop(
  connection: Connection,
  publicKey: PublicKey,
  amount: number = 1
) {
  const signature = await connection.requestAirdrop(
    publicKey,
    amount * LAMPORTS_PER_SOL
  );

  return await connection.confirmTransaction(signature, 'confirmed');
}
