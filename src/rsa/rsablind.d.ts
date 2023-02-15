interface IBlindSignature {
  keyGeneration: Function;
  messageToHash: Function;
  blind: Function;
  sign: Function;
  unblind: Function;
  verify: Function;
  verify2: Function;
  verifyBlinding: Function;
}

export var BlindSignature: IBlindSignature;
export var genBigInteger: Function;
