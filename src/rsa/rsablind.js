import secureRandom from 'secure-random';
import sha256 from 'js-sha256';
import { BigInteger } from 'jsbn';
import JSEncrypt from './jsencrypt.js';

// const ss = `-----BEGIN PUBLIC KEY-----
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD7QP7GmGR9V4OVYFvr4O20zlA+gIWEWar9o/3X+3dpVNF/Y8K+9E7K1AYI8PaXEWqEzRhBTv7mB6wmeo8iYa5LaLisc1DRpOapGZ3ST0zmRcu/5SXa+ZaGkIjjx52RvGtuCU91HpzBnV5iKUAEmGnyhkVVLtHc32Venvd3dTC2WwIDAQAB
// -----END PUBLIC KEY-----`;
// const tt = new JSEncrypt();
// // tt.setPublicKey(ss);
// console.log(tt, '_______pub______');
// console.log(tt.getPublicKeyB64(), '_______pub______');

function keyGeneration(params) {
  const temp = new JSEncrypt();
  const key = {
    keyPair: temp.getKey(),
    public: temp.getPublicKeyB64(),
    private: temp.getPrivateKeyB64(),
  }; //new NodeRSA(params || { b: 2048 });
  return key;
}

function keyProperties(key) {
  return {
    E: new BigInteger(key.keyPair.e.toString()),
    N: key.keyPair.n,
    D: key.keyPair.d,
  };
}

function messageToHash(message) {
  const messageHash = sha256(message);
  return messageHash;
}

function messageToHashInt(message) {
  const messageHash = messageToHash(message);
  const messageBig = new BigInteger(messageHash, 16);
  return messageBig;
}

function blind({ message, key, N, E }) {
  const messageHash = messageToHashInt(message);
  N = key ? key.keyPair.n : new BigInteger(N.toString());
  E = key
    ? new BigInteger(key.keyPair.e.toString())
    : new BigInteger(E.toString());

  const bigOne = new BigInteger('1');
  let gcd;
  let r;
  do {
    r = new BigInteger(secureRandom(64)).mod(N);
    gcd = r.gcd(N);
  } while (
    !gcd.equals(bigOne) ||
    r.compareTo(N) >= 0 ||
    r.compareTo(bigOne) <= 0
  );
  const blinded = messageHash.multiply(r.modPow(E, N)).mod(N);
  return {
    blinded,
    r,
  };
}

function sign({ blinded, key }) {
  const { N, D } = keyProperties(key);
  blinded = new BigInteger(blinded.toString());
  const signed = blinded.modPow(D, N);
  return signed;
}

function unblind({ signed, key, r, N }) {
  r = new BigInteger(r.toString());
  N = key ? key.keyPair.n : new BigInteger(N.toString());
  signed = new BigInteger(signed.toString());
  const unblinded = signed.multiply(r.modInverse(N)).mod(N);
  return unblinded;
}

function verify({ unblinded, key, message, E, N }) {
  unblinded = new BigInteger(unblinded.toString());
  const messageHash = messageToHashInt(message);
  N = key ? key.keyPair.n : new BigInteger(N.toString());
  E = key
    ? new BigInteger(key.keyPair.e.toString())
    : new BigInteger(E.toString());

  const originalMsg = unblinded.modPow(E, N);
  const result = messageHash.equals(originalMsg);
  return result;
}

function verify2({ unblinded, key, message }) {
  unblinded = new BigInteger(unblinded.toString());
  const messageHash = messageToHashInt(message);
  const { D, N } = keyProperties(key);
  const msgSig = messageHash.modPow(D, N);
  const result = unblinded.equals(msgSig);
  return result;
}

function verifyBlinding({ blinded, r, unblinded, key, E, N }) {
  const messageHash = messageToHashInt(unblinded);
  r = new BigInteger(r.toString());
  N = key ? key.keyPair.n : new BigInteger(N.toString());
  E = key
    ? new BigInteger(key.keyPair.e.toString())
    : new BigInteger(E.toString());

  const blindedHere = messageHash.multiply(r.modPow(E, N)).mod(N);
  const result = blindedHere.equals(blinded);
  return result;
}

export function genBigInteger(ss) {
  return new BigInteger(ss);
}

export const BlindSignature = {
  keyGeneration,
  messageToHash,
  blind,
  sign,
  unblind,
  verify,
  verify2,
  verifyBlinding,
};
