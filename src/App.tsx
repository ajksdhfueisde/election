import { useState } from 'react';
import './App.css';
import { BlindSignature, genBigInteger } from './rsa/rsablind';

const key = BlindSignature.keyGeneration();
const {e, d, n} = key.keyPair;

const blind = BlindSignature.blind({ message: key.public, key });
let blinded = blind.blinded.toString();
let r = blind.r.toString();
let D = d.toString();
let N = n.toString();
console.log({ blinded, r, e, D, N });
console.log(genBigInteger(D).equals(d));
/*
https://zh.m.wikipedia.org/zh-sg/RSA%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95
https://zh.m.wikipedia.org/zh-sg/%E6%AC%A7%E6%8B%89%E5%87%BD%E6%95%B0
https://github.com/kevinejohn/blind-signatures
https://en.wikipedia.org/wiki/Blind_signature
https://github.com/travist/jsencrypt
https://www.zhihu.com/question/23994473
http://www-cs-students.stanford.edu/~tjw/jsbn/
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>思路：</p>
      <p>
        1.
        主持人生成在初始页面生成公私钥，公钥用于路由供其他人加入；私钥用于辨别访问者是否为主持人。公私钥储存于localstorage中，有效期待定。。。主持人可凭私钥加密信息请求后端接口清除该匿名系统,锁定签名等，签名过程主持人页面轮询
      </p>
      <p>
        2.
        参与者（不能用WIFI，避免中间人）可通过主持人公钥生成的路由进入页面，生成对应公私钥并发送盲化公钥请求完成签名（此过程仅在锁定签名前有效）。该页面需轮询后端接口查看是否当前签名可用。（参与者公私钥存放session
        storage还是local有待思考）
      </p>
      <p>
        3. deno后台仅保存如下结构：
        {`
        key: [{hostKey: "xxxxx", data: [{blindKey: "xxxxx"}, ...]， message: [{pubKey: "xxx", sign: "xxx", mess: "xxx", priMess: "xxx"}]}]
      `}
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {key.keyPair.e}
      </p>
      <div style={{ wordBreak: 'break-all' }}>{key.public}</div>
      <br />
      <div style={{ wordBreak: 'break-all' }}>{key.private}</div>
      <br />
      {/* <div style={{ wordBreak: 'break-all' }}>{blind.blinded}</div> */}
    </div>
  );
}

export default App;
