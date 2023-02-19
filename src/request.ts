type IResponseType = "TEXT" | "JSON" | "BLOB" | "ARRAYBUFFER";

interface IConfig {
  method: RequestInit["method"];
  params?: string;
  body?: any;
  headers?: any;
  responseType?: IResponseType;
}

let initial: IConfig = {
  method: "GET",
  params: "",
  body: null,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "JSON",
};

const isPlainObject = (obj: any) => {
  var proto, Ctor;
  if (!obj || typeof obj !== "object") return false;
  proto = Object.getPrototypeOf(obj);
  if (!proto) return true;
  Ctor = proto.hasOwnProperty("constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor === Object;
};

export interface IPromise<T> extends Promise<T> {
  abort?: () => void;
}

const request = (inputURL: string, config: IConfig) => {
  let url = `${inputURL}`;
  // console.log(url, "url");
  const siteHeader = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Accept-Language": "en-US",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    mode: "cors",
  };
  config == null || typeof config !== "object" ? (config = {} as IConfig) : null;
  if (config.headers && isPlainObject(config.headers)) {
    config.headers = Object.assign({}, initial.headers, config.headers);
  }
  let { method = "get", params, body, headers, responseType = "JSON" } = Object.assign({}, initial, config);

  if (typeof url !== "string") throw new TypeError(` ${url} is not an string! `);
  // if (!/^http(s?):///i.test(url)) url = baseURL + url;
  if (params) {
    url += `${url.includes("?") ? "&" : "?"}${params}`;
  }

  if (body != null) {
    if (isPlainObject(body)) {
      let contentType = headers["Content-Type"] || "application/json";
      // if (contentType.includes('urlencoded')) body = Qs.stringify(body);
      if (contentType.includes("json")) body = JSON.stringify(body);
    }
  }

  method = method.toUpperCase();
  responseType = responseType.toUpperCase() as IResponseType;
  config = {
    method,
    headers: Object.assign({}, headers, siteHeader),
  };
  /^(POST|PUT|PATCH)$/i.test(method) ? (config.body = body) : null;
  const controller = new AbortController();
  const signal = controller.signal;
  const result: IPromise<any> = fetch(url, signal ? { ...config, signal } : config)
    .then((response) => {
      let { status, statusText } = response;
      if (status >= 200 && status < 400) {
        let result;
        switch (responseType) {
          case "TEXT":
            result = response.text();
            break;
          case "JSON":
            result = response.json();
            break;
          case "BLOB":
            result = response.blob();
            break;
          case "ARRAYBUFFER":
            result = response.arrayBuffer();
            break;
        }
        return result;
      }
      return Promise.reject({
        code: "STATUS ERROR",
        status,
        statusText,
      });
    })
    .catch((reason) => {
      if (reason && reason.code === "STATUS ERROR") {
        switch (reason.status) {
          case 401:
            break;
          case 403:
            break;
          case 500:
            break;
        }
      }

      //   if (!navigator.onLine) {
      //     // ...
      //   }

      return Promise.reject(reason);
    });
  result.abort = () => controller.abort();
  return result;
};
export default request;