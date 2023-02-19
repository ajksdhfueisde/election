import request, { IPromise } from "./request";

interface ICreate {
  key: string;
  privateKey: string;
}

interface ILock {
  key: string;
  privateKey: string;
}

interface ISign {
  blinded: string;
  key: string;
  singed: string;
  privateKey: string;
}

interface IAddBlind {
  blinded: string;
  key: string;
}

export interface ISubmitMessage {
  key: string;
  signedPubKey: string;
  publicKey: string;
  message: string;
  signedMessage: string;
}

interface IResponse<T = string | object> {
  success: boolean;
  data: T;
}

export interface IKeys {
  blinded: { [key: string]: string };
  messages: ISubmitMessage[];
  isLock: boolean;
  createTime: string;
  updateTime: string;
  privateKey: string;
}

export const Service = {
  postCreate: (payload: ICreate): IPromise<IResponse<{ url: string }>> =>
    request(`/api/create`, {
      method: "post",
      body: payload,
    }),
  getAll: (key: string): IPromise<IResponse<IKeys>> =>
    request(`/api/getAll?key=${key}`, {
      method: "get",
    }),
  putLock: (payload: ILock): IPromise<IResponse> =>
    request(`/api/lock`, {
      method: "put",
      body: payload,
    }),
  putSign: (payload: ISign): IPromise<IResponse> =>
    request(`/api/sign`, {
      method: "put",
      body: payload,
    }),
  putAddBlind: (payload: IAddBlind): IPromise<IResponse> =>
    request(`/api/addBlind`, {
      method: "put",
      body: payload,
    }),
  putSubmitMessage: (payload: ISubmitMessage): IPromise<IResponse> =>
    request(`/api/submitMessage`, {
      method: "put",
      body: payload,
    }),
};
