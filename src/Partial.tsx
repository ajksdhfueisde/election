import { FC, useEffect, useState } from "react";
import { Service, IKeys, ISubmitMessage } from "./service";
import { initKey, IRSA } from "./App";
import { BlindSignature, genBigInteger } from "./rsa/rsablind";
import { QRCodeCanvas } from "qrcode.react";

let timer: any;
let getData: any;

const Host: FC<{ data?: IKeys, signCallback: () => void; pubKey: string }> = ({ data, signCallback, pubKey }) => {
  const onSign = async (blinded: string, signed?: string) => {
    const cache = JSON.parse(localStorage.getItem("rsa") || "{}");
    const payload =
      signed ??
      BlindSignature.sign({ blinded, N: cache.N, D: cache.D }).toString();
    const res = await Service.putSign({
      blinded: blinded,
      key: cache.N,
      singed: payload,
      privateKey: cache.D,
    });
    signCallback();
  };
  const onSignAll = async () => {
    const allData = Object.keys(data?.blinded || {});
    const len = allData.length || 0;
    for (let i = 0; i < len; i++) {
      // const element = params[i];
      if (data?.blinded && data?.blinded[allData[i]] === null) {
        await onSign(allData[i]);
      }
    }
  };
  const onLock = async () => {
    const cache = JSON.parse(localStorage.getItem("rsa") || "{}");
    const res = await Service.putLock({
      key: cache.N,
      privateKey: cache.D,
    });
  };
  return (
    <>
    <div className="host-wrapper">
      <div style={{border: "1px solid #333", padding: "8px", borderRadius: "5px"}}>
        <div>
          <button disabled={data?.isLock} onClick={() => onLock()}>
            Lock
          </button>
        </div>
        <QRCodeCanvas
          value={window.location.href}
          fgColor={data?.isLock ? "#ff6633" : "#000"}
          size={200}
        />
        <a
          style={{ display: "block", wordBreak: "break-all" }}
          href={window.location.href}
        >
          URL: {window.location.href}
        </a>
      </div>
      <div  style={{border: "1px solid #333", padding: "8px", borderRadius: "5px"}}>
        <div>
          <b>Joiner: {Object.keys(data?.blinded || {}).length}</b>
          <button
            hidden={data?.isLock}
            disabled={Object.keys(data?.blinded || {}).length === 0}
            onClick={() => onSignAll()}
          >
            Sign All
          </button>
        </div>
        {Object.keys(data?.blinded || {}).map((key) => (
          <div className="blind-list" key={key}>
            <div title={key} className="ellipsis">
              {key}
            </div>
            <div title={data?.blinded[key]} className="ellipsis">
              {data?.blinded[key]}
            </div>
            <button disabled={!!data?.blinded[key]} onClick={() => onSign(key)}>
              Sign
            </button>
          </div>
        ))}
      </div>
    </div>
      
      {<MessageTable data={data?.messages} globalPubKey={pubKey} />}
    </>
  );
};

const Joiner: FC<{ data?: IKeys; roomRsa?: IRSA; pubKey: string }> = ({
  data,
  roomRsa,
  pubKey,
}) => {
  const [message, setMessage] = useState("")
  const onAddBlind = async () => {
    if (!roomRsa?.N || !roomRsa?.D) {
      return;
    }
    const res = await Service.putAddBlind({
      key: pubKey,
      blinded: roomRsa.blinded,
    });
  };
  const signed = data?.blinded && data?.blinded[roomRsa?.blinded || ""];
  const isJoined = Object.keys(data?.blinded || {}).includes(
    roomRsa?.blinded || ""
  );
  const unblinded =
    (signed &&
      roomRsa?.r &&
      BlindSignature.unblind({ signed, r: roomRsa.r, N: pubKey }).toString()) ||
    "";
  const isSignedSuccessfully =
    unblinded && data?.isLock &&
    BlindSignature.verify({
      unblinded,
      message: roomRsa?.N,
      E: roomRsa?.e,
      N: pubKey,
    });
  const onSubmit = async () => {
    if (!roomRsa?.N || !roomRsa?.D || !unblinded || !message) {
      return;
    }
    const signedMessage = BlindSignature.sign({ blinded: BlindSignature.messageToHashInt(message).toString(), N: roomRsa?.N, D: roomRsa?.D }).toString();
    const res = await Service.putSubmitMessage({
      key: pubKey,
      signedPubKey: unblinded,
      publicKey: roomRsa?.N,
      message,
      signedMessage,
    });
  };
  return (
    <>
      <div className="host-wrapper">
        <div style={{border: "1px solid #333", padding: "8px", borderRadius: "5px"}}>
          <button
            hidden={!!signed || data?.isLock}
            disabled={isJoined}
            onClick={() => onAddBlind()}
          >
            Join
          </button>
          <summary>
            Blind key{" "}
            {isJoined
              ? isSignedSuccessfully
                ? ": You have joined"
                : ": You have clicked join"
              : ": You are not join"}
            <details style={{ wordBreak: "break-all" }}>
              {roomRsa?.blinded}
            </details>
          </summary>
        </div>
        <div style={{border: "1px solid #333", padding: "8px", borderRadius: "5px"}}>
          <div>
            <div>
              <b>Joiner: {Object.keys(data?.blinded || {}).length}</b>
            </div>
            {Object.keys(data?.blinded || {}).map((key) => (
              <div className="blind-list" key={key}>
                <div title={key} className="ellipsis">
                  {key}
                </div>
                <div title={data?.blinded[key]} className="ellipsis">
                  {data?.blinded[key]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isSignedSuccessfully && <div style={{border: "1px solid #333", padding: "8px", borderRadius: "5px", margin: "10px 0"}}>
        <textarea maxLength={1000} rows={6} cols={40} style={{padding: "8px", textSizeAdjust: "none", resize: "none"}} value={message} onChange={evt => setMessage(evt.target.value)} placeholder="Please input your message" />
        <button disabled={!message} type="submit" onClick={() => onSubmit()}>Submit</button>
      </div>}
      {<MessageTable data={data?.messages} globalPubKey={pubKey} />}
    </>
  );
};


const MessageTable: FC<{ data?: ISubmitMessage[]; globalPubKey: string }> = ({
  data,
  globalPubKey,
}) => {
  const source = data?.map(item => {
    const {signedMessage, signedPubKey, message, publicKey} = item;
    const isLegal = BlindSignature.verify({
      unblinded: signedPubKey,
      message: publicKey,
      E: "65537",
      N: globalPubKey,
    });
    const isLegal2 = BlindSignature.verify({
      unblinded: signedMessage,
      message,
      E: "65537",
      N: publicKey,
    });
    return {...item, isLegal, isLegal2}
  })
  return (
    <table style={{margin: "50px auto"}}>
      <thead>
        <th>CONTENT</th>
        <th>LEGAL</th>
        <th>SIGNED VERIFY</th>
      </thead>
      <tbody>
      {source?.map(item => <tr key={item.publicKey}>
        <td><textarea style={{padding: "8px", textSizeAdjust: "none", resize: "none"}} rows={6} cols={40} readOnly value={item.message}></textarea></td>
        <td style={{color: item.isLegal ? "green" : "red"}}>{item.isLegal + ""}</td>
        <td style={{color: item.isLegal2 ? "green" : "red"}}>{item.isLegal2 + ""}</td>
      </tr>)}
      </tbody>
    </table>
  );
};

export function Partial() {
  const pathname = window.location.pathname;
  const pubKey = pathname.replace("/", "");
  const [data, setData] = useState<IKeys>();
  const [roomRsa, setRoomRsa] = useState<IRSA>();
  const [isHost, setIsHost] = useState(false);
  getData = async () => {
    const res = await Service.getAll(pubKey);
    const result = (res.success && res.data) || undefined;
    setData(result);
  };
  useEffect(() => {
    // console.log({ getData });
    getData();
    timer = setInterval(() => {
      getData();
    }, 10000);
    const cache = JSON.parse(localStorage.getItem("rsa") || "{}");
    if (cache && cache.N && cache.N === pubKey) {
      setIsHost(true);
      return () => clearInterval(timer);
    }
    const roomCache = JSON.parse(localStorage.getItem(pubKey) || "{}");
    if (roomCache && roomCache.N) {
      setRoomRsa(roomCache);
      return () => clearInterval(timer);
    }
    const temp = initKey(pubKey);
    localStorage.setItem(pubKey, JSON.stringify(temp));
    setRoomRsa(temp);
    return () => clearInterval(timer);
  }, []);
  if (isHost) {
    return <Host data={data} signCallback={() => getData()} pubKey={pubKey} />;
  } else {
    return <Joiner data={data} roomRsa={roomRsa} pubKey={pubKey} />;
  }
}

/*********************************** Deno code ******************************************************

import { serve } from "https://deno.land/std@0.155.0/http/server.ts";


function App() {
    const prifix = `https://raw.githubusercontent.com/ajksdhfueisde/election/main/dist`;
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Election</title>
            <script type="module" crossorigin src="https://fetch-url.deno.dev/?url=https://election.pages.dev/assets/index-ad2550db.js"></script>
            <link rel="stylesheet" href="https://fetch-url.deno.dev/?url=https://election.pages.dev/assets/index-ac38ee3f.css">
        </head>
        <body>
            <div id="root"></div>
            
        </body>
        </html>
    `;
}

interface IKeys {
    blinded: {[key: string]: string};
    messages: Array<{signedPubKey: string; publicKey: string; message: string, signedMessage: string}>;
    isLock: boolean;
    createTime: string;
    updateTime: string;
    privateKey: string;
}

const Rooms: {[key: string]: IKeys} = {};

const channel = new BroadcastChannel("earth");
channel.onmessage = (event: MessageEvent) => {
  const newRoom = event.data;
  Object.keys(newRoom).forEach(key => {
      Rooms[key] = newRoom[key];
  });
};

function updateRoom(newRoom: {[key: string]: IKeys}) {
  Object.keys(newRoom).forEach(key => {
      Rooms[key] = newRoom[key];
  });
  channel.postMessage(newRoom);
}

function genResponse(isSuccess = true, data: any) {
    const result = {
        success: isSuccess,
        data,
    };
    const body = JSON.stringify(result, null, 2);
    return new Response(body, {
        headers: { 
            "content-type": "application/json; charset=utf-8", 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Expose-Headers": "Request-Context,api-supported-versions,Content-Length,Date,Server", 
        },
    });
}

serve((req: Request) => handler(req));

async function handler(req: Request) {
    const url = req.url;
    const method = req.method;
    const isGET = method === "GET";
    const isPOST = method === "POST";
    const isPUT = method === "PUT";
    if (!url) {
        return genResponse(false, "no url");
    }
    const urlParse = new URL(url);
    if (!urlParse.pathname.startsWith("/api")) {
        
        const html = App();
        return new Response(html, {
            headers: {
                "content-type": "text/html",
            },
        });
        // const prifix = `https://raw.githubusercontent.com/ajksdhfueisde/election/main/dist`;
        // if (urlParse.pathname === "/") {
        //     return await fetch(`${prifix}/index.html`);
        // }
        // return genResponse(`${prifix}${urlParse.pathname}`);
    }

    if (urlParse.pathname.endsWith("/create") && isPOST) {
        // data: {key: string, privateKey: string}
        const data = await req.json();
        if (data && data.key && !Rooms[data.key] && data.privateKey) {
            const now = new Date().valueOf();
            const newRoom = {blinded: {}, messages:[], createTime: now, isLock: false, updateTime: now, privateKey: data.privateKey};
            updateRoom({[data.key]: newRoom})
            return genResponse(true, {url: `/${data.key}`});
        }
        return genResponse(false);
    } else if (urlParse.pathname.endsWith("/getAll") && isGET) {
        const search = urlParse.search;
        if (!search.startsWith("?key=")) {
            return genResponse(false, "unable request path");
        }
        const keyValue = search.split("key=")[1];
        if (!Rooms[keyValue]) {
            return genResponse(false, "No data");
        }
        const {privateKey, ...others} = Rooms[keyValue];
        return genResponse(true, others);
    } else if (urlParse.pathname.endsWith("/lock") && isPUT) {
        // data: {key: string,privateKey: string}
        const data = await req.json();
        const {key, privateKey} = data || {};
        if (Rooms[key]?.privateKey === privateKey) {
            updateRoom({[key]: {...Rooms[key], isLock: true}})
            return genResponse(true, "Lock successfully");
        }
        return genResponse(false, "privateKey no match");
    } else if (urlParse.pathname.endsWith("/sign") && isPUT) {
        // data: {blinded: string, key: string, singed: string, privateKey: string}
        const data = await req.json();
        const {blinded, key, singed, privateKey} = data || {};
        const current = Rooms[key];
        if (current?.privateKey === privateKey && current.blinded[blinded]===null) {
            current.blinded[blinded] = singed;
            updateRoom({[key]: {...current}})
            return genResponse(true, "Signed successfully");
        }
        return genResponse(false);
    } else if (urlParse.pathname.endsWith("/addBlind") && isPUT) {
        // data: {blinded: string, key: string}
        const data = await req.json();
        // console.log({data, room: Rooms[data.key]})
        if (data && data.key && Rooms[data.key] && data.blinded) {
            const current = Rooms[data.key];
            if (current.isLock) {
                return genResponse(false, "Key has been locked");
            }
            if (!current.blinded[data.blinded]) {
                current.blinded[data.blinded] = null;
                const now = new Date().valueOf();
                current.updateTime = now;
                updateRoom({[data.key]: {...current}})
                return genResponse(true, "Blinded add successfully");
            }
        }
        return genResponse(false);
    } else if (urlParse.pathname.endsWith("/submitMessage") && isPUT) {
        // data: {key:string, signedPubKey: string; publicKey: string; message: string, signedMessage: string}
        const data = await req.json();
        const {signedPubKey, publicKey, message, signedMessage} = (data || {});
        // console.log({data, room: Rooms[data.key]})
        if (signedPubKey && publicKey && message && signedMessage && Rooms[data.key]) {
            const currentRoom = Rooms[data.key];
            if (!currentRoom.isLock) {
                return genResponse(false, "Room not lock");
            }
            const current = currentRoom.messages.find(item => item.signedPubKey === signedPubKey && item.publicKey === publicKey)
            if (current) {
                current.message = message;
                current.signedMessage = signedMessage;
            } else {
                currentRoom.messages.push({signedPubKey, publicKey, message, signedMessage});
            }
            const now = new Date().valueOf();
            currentRoom.updateTime = now;
            updateRoom({[data.key]: {...currentRoom}})
            return genResponse(true, "Message add successfully");
        }
        return genResponse(false);
    } else {
        return genResponse(false, "unable request path");
    }
}
************************************************************************************************** */
