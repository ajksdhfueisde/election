(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerPolicy&&(a.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?a.credentials="include":c.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(c){if(c.ep)return;c.ep=!0;const a=s(c);fetch(c.href,a)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function getAugmentedNamespace(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var s=function o(){if(this instanceof o){var c=[null];c.push.apply(c,arguments);var a=Function.bind.apply(i,c);return new a}return i.apply(this,arguments)};s.prototype=i.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var c=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(s,o,c.get?c:{enumerable:!0,get:function(){return e[o]}})}),s}var jsxRuntimeExports={},jsxRuntime={get exports(){return jsxRuntimeExports},set exports(e){jsxRuntimeExports=e}},reactJsxRuntime_production_min={},reactExports={},react={get exports(){return reactExports},set exports(e){reactExports=e}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(e,i,s){this.props=e,this.context=i,this.refs=D$1,this.updater=s||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,i){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,i,s){this.props=e,this.context=i,this.refs=D$1,this.updater=s||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,i,s){var o,c={},a=null,h=null;if(i!=null)for(o in i.ref!==void 0&&(h=i.ref),i.key!==void 0&&(a=""+i.key),i)J.call(i,o)&&!L$1.hasOwnProperty(o)&&(c[o]=i[o]);var _=arguments.length-2;if(_===1)c.children=s;else if(1<_){for(var d=Array(_),j=0;j<_;j++)d[j]=arguments[j+2];c.children=d}if(e&&e.defaultProps)for(o in _=e.defaultProps,_)c[o]===void 0&&(c[o]=_[o]);return{$$typeof:l$1,type:e,key:a,ref:h,props:c,_owner:K$1.current}}function N$1(e,i){return{$$typeof:l$1,type:e.type,key:i,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$1}function escape(e){var i={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return i[s]})}var P$1=/\/+/g;function Q$1(e,i){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):i.toString(36)}function R$1(e,i,s,o,c){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var h=!1;if(e===null)h=!0;else switch(a){case"string":case"number":h=!0;break;case"object":switch(e.$$typeof){case l$1:case n$1:h=!0}}if(h)return h=e,c=c(h),e=o===""?"."+Q$1(h,0):o,I$1(c)?(s="",e!=null&&(s=e.replace(P$1,"$&/")+"/"),R$1(c,i,s,"",function(j){return j})):c!=null&&(O$1(c)&&(c=N$1(c,s+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+e)),i.push(c)),1;if(h=0,o=o===""?".":o+":",I$1(e))for(var _=0;_<e.length;_++){a=e[_];var d=o+Q$1(a,_);h+=R$1(a,i,s,d,c)}else if(d=A$1(e),typeof d=="function")for(e=d.call(e),_=0;!(a=e.next()).done;)a=a.value,d=o+Q$1(a,_++),h+=R$1(a,i,s,d,c);else if(a==="object")throw i=String(e),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return h}function S$1(e,i,s){if(e==null)return e;var o=[],c=0;return R$1(e,o,"","",function(a){return i.call(s,a,c++)}),o}function T$1(e){if(e._status===-1){var i=e._result;i=i(),i.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$1,forEach:function(e,i,s){S$1(e,function(){i.apply(this,arguments)},s)},count:function(e){var i=0;return S$1(e,function(){i++}),i},toArray:function(e){return S$1(e,function(i){return i})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.cloneElement=function(e,i,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=C$1({},e.props),c=e.key,a=e.ref,h=e._owner;if(i!=null){if(i.ref!==void 0&&(a=i.ref,h=K$1.current),i.key!==void 0&&(c=""+i.key),e.type&&e.type.defaultProps)var _=e.type.defaultProps;for(d in i)J.call(i,d)&&!L$1.hasOwnProperty(d)&&(o[d]=i[d]===void 0&&_!==void 0?_[d]:i[d])}var d=arguments.length-2;if(d===1)o.children=s;else if(1<d){_=Array(d);for(var j=0;j<d;j++)_[j]=arguments[j+2];o.children=_}return{$$typeof:l$1,type:e.type,key:c,ref:a,props:o,_owner:h}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var i=M$1.bind(null,e);return i.type=e,i};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v$1,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,i){return{$$typeof:x,type:e,compare:i===void 0?null:i}};react_production_min.startTransition=function(e){var i=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=i}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function(e,i){return U$1.current.useCallback(e,i)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,i){return U$1.current.useEffect(e,i)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,i,s){return U$1.current.useImperativeHandle(e,i,s)};react_production_min.useInsertionEffect=function(e,i){return U$1.current.useInsertionEffect(e,i)};react_production_min.useLayoutEffect=function(e,i){return U$1.current.useLayoutEffect(e,i)};react_production_min.useMemo=function(e,i){return U$1.current.useMemo(e,i)};react_production_min.useReducer=function(e,i,s){return U$1.current.useReducer(e,i,s)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,i,s){return U$1.current.useSyncExternalStore(e,i,s)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.2.0";(function(e){e.exports=react_production_min})(react);const React=getDefaultExportFromCjs(reactExports);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(e,i,s){var o,c={},a=null,h=null;s!==void 0&&(a=""+s),i.key!==void 0&&(a=""+i.key),i.ref!==void 0&&(h=i.ref);for(o in i)m$1.call(i,o)&&!p$1.hasOwnProperty(o)&&(c[o]=i[o]);if(e&&e.defaultProps)for(o in i=e.defaultProps,i)c[o]===void 0&&(c[o]=i[o]);return{$$typeof:k,type:e,key:a,ref:h,props:c,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;(function(e){e.exports=reactJsxRuntime_production_min})(jsxRuntime);const Fragment=jsxRuntimeExports.Fragment,jsx=jsxRuntimeExports.jsx,jsxs=jsxRuntimeExports.jsxs;var client={},reactDomExports={},reactDom={get exports(){return reactDomExports},set exports(e){reactDomExports=e}},reactDom_production_min={},schedulerExports={},scheduler={get exports(){return schedulerExports},set exports(e){schedulerExports=e}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function i(vn,Sn){var wn=vn.length;vn.push(Sn);n:for(;0<wn;){var Dn=wn-1>>>1,Tn=vn[Dn];if(0<c(Tn,Sn))vn[Dn]=Sn,vn[wn]=Tn,wn=Dn;else break n}}function s(vn){return vn.length===0?null:vn[0]}function o(vn){if(vn.length===0)return null;var Sn=vn[0],wn=vn.pop();if(wn!==Sn){vn[0]=wn;n:for(var Dn=0,Tn=vn.length,$n=Tn>>>1;Dn<$n;){var Fn=2*(Dn+1)-1,Zn=vn[Fn],Hn=Fn+1,Gn=vn[Hn];if(0>c(Zn,wn))Hn<Tn&&0>c(Gn,Zn)?(vn[Dn]=Gn,vn[Hn]=wn,Dn=Hn):(vn[Dn]=Zn,vn[Fn]=wn,Dn=Fn);else if(Hn<Tn&&0>c(Gn,wn))vn[Dn]=Gn,vn[Hn]=wn,Dn=Hn;else break n}}return Sn}function c(vn,Sn){var wn=vn.sortIndex-Sn.sortIndex;return wn!==0?wn:vn.id-Sn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var h=Date,_=h.now();e.unstable_now=function(){return h.now()-_}}var d=[],j=[],nn=1,en=null,tn=3,ln=!1,un=!1,cn=!1,mn=typeof setTimeout=="function"?setTimeout:null,an=typeof clearTimeout=="function"?clearTimeout:null,rn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function sn(vn){for(var Sn=s(j);Sn!==null;){if(Sn.callback===null)o(j);else if(Sn.startTime<=vn)o(j),Sn.sortIndex=Sn.expirationTime,i(d,Sn);else break;Sn=s(j)}}function fn(vn){if(cn=!1,sn(vn),!un)if(s(d)!==null)un=!0,Qn(dn);else{var Sn=s(j);Sn!==null&&Xn(fn,Sn.startTime-vn)}}function dn(vn,Sn){un=!1,cn&&(cn=!1,an(bn),bn=-1),ln=!0;var wn=tn;try{for(sn(Sn),en=s(d);en!==null&&(!(en.expirationTime>Sn)||vn&&!kn());){var Dn=en.callback;if(typeof Dn=="function"){en.callback=null,tn=en.priorityLevel;var Tn=Dn(en.expirationTime<=Sn);Sn=e.unstable_now(),typeof Tn=="function"?en.callback=Tn:en===s(d)&&o(d),sn(Sn)}else o(d);en=s(d)}if(en!==null)var $n=!0;else{var Fn=s(j);Fn!==null&&Xn(fn,Fn.startTime-Sn),$n=!1}return $n}finally{en=null,tn=wn,ln=!1}}var En=!1,yn=null,bn=-1,Rn=5,xn=-1;function kn(){return!(e.unstable_now()-xn<Rn)}function Ln(){if(yn!==null){var vn=e.unstable_now();xn=vn;var Sn=!0;try{Sn=yn(!0,vn)}finally{Sn?Kn():(En=!1,yn=null)}}else En=!1}var Kn;if(typeof rn=="function")Kn=function(){rn(Ln)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,Yn=qn.port2;qn.port1.onmessage=Ln,Kn=function(){Yn.postMessage(null)}}else Kn=function(){mn(Ln,0)};function Qn(vn){yn=vn,En||(En=!0,Kn())}function Xn(vn,Sn){bn=mn(function(){vn(e.unstable_now())},Sn)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(vn){vn.callback=null},e.unstable_continueExecution=function(){un||ln||(un=!0,Qn(dn))},e.unstable_forceFrameRate=function(vn){0>vn||125<vn?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<vn?Math.floor(1e3/vn):5},e.unstable_getCurrentPriorityLevel=function(){return tn},e.unstable_getFirstCallbackNode=function(){return s(d)},e.unstable_next=function(vn){switch(tn){case 1:case 2:case 3:var Sn=3;break;default:Sn=tn}var wn=tn;tn=Sn;try{return vn()}finally{tn=wn}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(vn,Sn){switch(vn){case 1:case 2:case 3:case 4:case 5:break;default:vn=3}var wn=tn;tn=vn;try{return Sn()}finally{tn=wn}},e.unstable_scheduleCallback=function(vn,Sn,wn){var Dn=e.unstable_now();switch(typeof wn=="object"&&wn!==null?(wn=wn.delay,wn=typeof wn=="number"&&0<wn?Dn+wn:Dn):wn=Dn,vn){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=wn+Tn,vn={id:nn++,callback:Sn,priorityLevel:vn,startTime:wn,expirationTime:Tn,sortIndex:-1},wn>Dn?(vn.sortIndex=wn,i(j,vn),s(d)===null&&vn===s(j)&&(cn?(an(bn),bn=-1):cn=!0,Xn(fn,wn-Dn))):(vn.sortIndex=Tn,i(d,vn),un||ln||(un=!0,Qn(dn))),vn},e.unstable_shouldYield=kn,e.unstable_wrapCallback=function(vn){var Sn=tn;return function(){var wn=tn;tn=Sn;try{return vn.apply(this,arguments)}finally{tn=wn}}}})(scheduler_production_min);(function(e){e.exports=scheduler_production_min})(scheduler);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,i){ha(e,i),ha(e+"Capture",i)}function ha(e,i){for(ea[e]=i,e=0;e<i.length;e++)da.add(i[e])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function pa(e,i,s,o){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qa(e,i,s,o){if(i===null||typeof i>"u"||pa(e,i,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function v(e,i,s,o,c,a,h){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=o,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=e,this.type=i,this.sanitizeURL=a,this.removeEmptyString=h}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new v(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];z[i]=new v(i,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new v(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new v(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new v(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new v(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,i,s,o){var c=z.hasOwnProperty(i)?z[i]:null;(c!==null?c.type!==0:o||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(qa(i,s,c,o)&&(s=null),o||c===null?oa(i)&&(s===null?e.removeAttribute(i):e.setAttribute(i,""+s)):c.mustUseProperty?e[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,o=c.attributeNamespace,s===null?e.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,o?e.setAttributeNS(o,i,s):e.setAttribute(i,s))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,La;function Ma(e){if(La===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);La=i&&i[1]||""}return`
`+La+e}var Na=!1;function Oa(e,i){if(!e||Na)return"";Na=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var o=j}Reflect.construct(e,[],i)}else{try{i.call()}catch(j){o=j}e.call(i.prototype)}else{try{throw Error()}catch(j){o=j}e()}}catch(j){if(j&&o&&typeof j.stack=="string"){for(var c=j.stack.split(`
`),a=o.stack.split(`
`),h=c.length-1,_=a.length-1;1<=h&&0<=_&&c[h]!==a[_];)_--;for(;1<=h&&0<=_;h--,_--)if(c[h]!==a[_]){if(h!==1||_!==1)do if(h--,_--,0>_||c[h]!==a[_]){var d=`
`+c[h].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=h&&0<=_);break}}}finally{Na=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?Ma(e):""}function Pa(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ca:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Da:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return i=e.displayName||null,i!==null?i:Qa(e.type)||"Memo";case Ha:i=e._payload,e=e._init;try{return Qa(e(i))}catch{}}return null}function Ra(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(i);case 8:return i===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ua(e){var i=Ta(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,a=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(h){o=""+h,a.call(this,h)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(h){o=""+h},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Va(e){e._valueTracker||(e._valueTracker=Ua(e))}function Wa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ta(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,i){var s=i.checked;return A({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Za(e,i){var s=i.defaultValue==null?"":i.defaultValue,o=i.checked!=null?i.checked:i.defaultChecked;s=Sa(i.value!=null?i.value:s),e._wrapperState={initialChecked:o,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ab(e,i){i=i.checked,i!=null&&ta(e,"checked",i,!1)}function bb(e,i){ab(e,i);var s=Sa(i.value),o=i.type;if(s!=null)o==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?cb(e,i.type,s):i.hasOwnProperty("defaultValue")&&cb(e,i.type,Sa(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function db(e,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var o=i.type;if(!(o!=="submit"&&o!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,s||i===e.value||(e.value=i),e.defaultValue=i}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function cb(e,i,s){(i!=="number"||Xa(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var eb=Array.isArray;function fb(e,i,s,o){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Sa(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function gb(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hb(e,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(p(92));if(eb(s)){if(1<s.length)throw Error(p(93));s=s[0]}i=s}i==null&&(i=""),s=i}e._wrapperState={initialValue:Sa(s)}}function ib(e,i){var s=Sa(i.value),o=Sa(i.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),i.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),o!=null&&(e.defaultValue=""+o)}function jb(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?kb(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mb,nb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,o,c){MSApp.execUnsafeLocalFunction(function(){return e(i,s,o,c)})}:e}(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=mb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function ob(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(e){qb.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),pb[i]=pb[e]})});function rb(e,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||pb.hasOwnProperty(e)&&pb[e]?(""+i).trim():i+"px"}function sb(e,i){e=e.style;for(var s in i)if(i.hasOwnProperty(s)){var o=s.indexOf("--")===0,c=rb(s,i[s],o);s==="float"&&(s="cssFloat"),o?e.setProperty(s,c):e[s]=c}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(e,i){if(i){if(tb[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(p(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(p(61))}if(i.style!=null&&typeof i.style!="object")throw Error(p(62))}}function vb(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yb=null,zb=null,Ab=null;function Bb(e){if(e=Cb(e)){if(typeof yb!="function")throw Error(p(280));var i=e.stateNode;i&&(i=Db(i),yb(e.stateNode,e.type,i))}}function Eb(e){zb?Ab?Ab.push(e):Ab=[e]:zb=e}function Fb(){if(zb){var e=zb,i=Ab;if(Ab=zb=null,Bb(e),i)for(e=0;e<i.length;e++)Bb(i[e])}}function Gb(e,i){return e(i)}function Hb(){}var Ib=!1;function Jb(e,i,s){if(Ib)return e(i,s);Ib=!0;try{return Gb(e,i,s)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(e,i){var s=e.stateNode;if(s===null)return null;var o=Db(s);if(o===null)return null;s=o[i];n:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break n;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(p(231,i,typeof s));return s}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(e,i,s,o,c,a,h,_,d){var j=Array.prototype.slice.call(arguments,3);try{i.apply(s,j)}catch(nn){this.onError(nn)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(e){Ob=!0,Pb=e}};function Tb(e,i,s,o,c,a,h,_,d){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(e,i,s,o,c,a,h,_,d){if(Tb.apply(this,arguments),Ob){if(Ob){var j=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=j)}}function Vb(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function Wb(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function Xb(e){if(Vb(e)!==e)throw Error(p(188))}function Yb(e){var i=e.alternate;if(!i){if(i=Vb(e),i===null)throw Error(p(188));return i!==e?null:e}for(var s=e,o=i;;){var c=s.return;if(c===null)break;var a=c.alternate;if(a===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===a.child){for(a=c.child;a;){if(a===s)return Xb(c),e;if(a===o)return Xb(c),i;a=a.sibling}throw Error(p(188))}if(s.return!==o.return)s=c,o=a;else{for(var h=!1,_=c.child;_;){if(_===s){h=!0,s=c,o=a;break}if(_===o){h=!0,o=c,s=a;break}_=_.sibling}if(!h){for(_=a.child;_;){if(_===s){h=!0,s=a,o=c;break}if(_===o){h=!0,o=a,s=c;break}_=_.sibling}if(!h)throw Error(p(189))}}if(s.alternate!==o)throw Error(p(190))}if(s.tag!==3)throw Error(p(188));return s.stateNode.current===s?e:i}function Zb(e){return e=Yb(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=$b(e);if(i!==null)return i;e=e.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(e){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(pc(e)/qc|0)|0}var rc=64,sc=4194304;function tc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uc(e,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,a=e.pingedLanes,h=s&268435455;if(h!==0){var _=h&~c;_!==0?o=tc(_):(a&=h,a!==0&&(o=tc(a)))}else h=s&~c,h!==0?o=tc(h):a!==0&&(o=tc(a));if(o===0)return 0;if(i!==0&&i!==o&&!(i&c)&&(c=o&-o,a=i&-i,c>=a||c===16&&(a&4194240)!==0))return i;if(o&4&&(o|=s&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=o;0<i;)s=31-oc(i),c=1<<s,o|=e[s],i&=~c;return o}function vc(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,a=e.pendingLanes;0<a;){var h=31-oc(a),_=1<<h,d=c[h];d===-1?(!(_&s)||_&o)&&(c[h]=vc(_,i)):d<=i&&(e.expiredLanes|=_),a&=~_}}function xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=rc;return rc<<=1,!(rc&4194240)&&(rc=64),e}function zc(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ac(e,i,s){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-oc(i),e[i]=s}function Bc(e,i){var s=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<s;){var c=31-oc(s),a=1<<c;i[c]=0,o[c]=-1,e[c]=-1,s&=~a}}function Cc(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-oc(s),c=1<<o;c&i|e[o]&i&&(e[o]|=i),s&=~c}}var C=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,i){switch(e){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(i.pointerId)}}function Tc(e,i,s,o,c,a){return e===null||e.nativeEvent!==a?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:a,targetContainers:[c]},i!==null&&(i=Cb(i),i!==null&&Fc(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function Uc(e,i,s,o,c){switch(i){case"focusin":return Lc=Tc(Lc,e,i,s,o,c),!0;case"dragenter":return Mc=Tc(Mc,e,i,s,o,c),!0;case"mouseover":return Nc=Tc(Nc,e,i,s,o,c),!0;case"pointerover":var a=c.pointerId;return Oc.set(a,Tc(Oc.get(a)||null,e,i,s,o,c)),!0;case"gotpointercapture":return a=c.pointerId,Pc.set(a,Tc(Pc.get(a)||null,e,i,s,o,c)),!0}return!1}function Vc(e){var i=Wc(e.target);if(i!==null){var s=Vb(i);if(s!==null){if(i=s.tag,i===13){if(i=Wb(s),i!==null){e.blockedOn=i,Ic(e.priority,function(){Gc(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Yc(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);wb=o,s.target.dispatchEvent(o),wb=null}else return i=Cb(s),i!==null&&Fc(i),e.blockedOn=s,!1;i.shift()}return!0}function Zc(e,i,s){Xc(e)&&s.delete(i)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(e,i){e.blockedOn===i&&(e.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(e){function i(c){return ad(c,e)}if(0<Kc.length){ad(Kc[0],e);for(var s=1;s<Kc.length;s++){var o=Kc[s];o.blockedOn===e&&(o.blockedOn=null)}}for(Lc!==null&&ad(Lc,e),Mc!==null&&ad(Mc,e),Nc!==null&&ad(Nc,e),Oc.forEach(i),Pc.forEach(i),s=0;s<Qc.length;s++)o=Qc[s],o.blockedOn===e&&(o.blockedOn=null);for(;0<Qc.length&&(s=Qc[0],s.blockedOn===null);)Vc(s),s.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(e,i,s,o){var c=C,a=cd.transition;cd.transition=null;try{C=1,fd(e,i,s,o)}finally{C=c,cd.transition=a}}function gd(e,i,s,o){var c=C,a=cd.transition;cd.transition=null;try{C=4,fd(e,i,s,o)}finally{C=c,cd.transition=a}}function fd(e,i,s,o){if(dd){var c=Yc(e,i,s,o);if(c===null)hd(e,i,o,id,s),Sc(e,o);else if(Uc(c,e,i,s,o))o.stopPropagation();else if(Sc(e,o),i&4&&-1<Rc.indexOf(e)){for(;c!==null;){var a=Cb(c);if(a!==null&&Ec(a),a=Yc(e,i,s,o),a===null&&hd(e,i,o,id,s),a===c)break;c=a}c!==null&&o.stopPropagation()}else hd(e,i,o,null,s)}}var id=null;function Yc(e,i,s,o){if(id=null,e=xb(o),e=Wc(e),e!==null)if(i=Vb(e),i===null)e=null;else if(s=i.tag,s===13){if(e=Wb(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return id=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var e,i=ld,s=i.length,o,c="value"in kd?kd.value:kd.textContent,a=c.length;for(e=0;e<s&&i[e]===c[e];e++);var h=s-e;for(o=1;o<=h&&i[s-o]===c[a-o];o++);return md=c.slice(e,1<o?1-o:void 0)}function od(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pd(){return!0}function qd(){return!1}function rd(e){function i(s,o,c,a,h){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=a,this.target=h,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(s=e[_],this[_]=s?s(a):a[_]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),i}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yd&&(yd&&e.type==="mousemove"?(wd=e.screenX-yd.screenX,xd=e.screenY-yd.screenY):xd=wd=0,yd=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Od[e])?!!i[e]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(e){if(e.key){var i=Md[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=od(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?od(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?od(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;function ge(e,i){switch(e){case"keyup":return $d.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ie=!1;function je(e,i){switch(e){case"compositionend":return he(i);case"keypress":return i.which!==32?null:(fe=!0,ee);case"textInput":return e=i.data,e===ee&&fe?null:e;default:return null}}function ke(e,i){if(ie)return e==="compositionend"||!ae&&ge(e,i)?(e=nd(),md=ld=kd=null,ie=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return de&&i.locale!=="ko"?null:i.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!le[e.type]:i==="textarea"}function ne(e,i,s,o){Eb(o),i=oe(i,"onChange"),0<i.length&&(s=new td("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var pe=null,qe=null;function re(e){se(e,0)}function te(e){var i=ue(e);if(Wa(i))return e}function ve(e,i){if(e==="change")return i}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(e){if(e.propertyName==="value"&&te(qe)){var i=[];ne(i,qe,e,xb(e)),Jb(re,i)}}function Ce(e,i,s){e==="focusin"?(Ae(),pe=i,qe=s,pe.attachEvent("onpropertychange",Be)):e==="focusout"&&Ae()}function De(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return te(qe)}function Ee(e,i){if(e==="click")return te(i)}function Fe(e,i){if(e==="input"||e==="change")return te(i)}function Ge(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(e,i){if(He(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!ja.call(i,c)||!He(e[c],i[c]))return!1}return!0}function Je(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ke(e,i){var s=Je(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}n:{for(;s;){if(s.nextSibling){s=s.nextSibling;break n}s=s.parentNode}s=void 0}s=Je(s)}}function Le(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Le(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Me(){for(var e=window,i=Xa();i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Xa(e.document)}return i}function Ne(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function Oe(e){var i=Me(),s=e.focusedElem,o=e.selectionRange;if(i!==s&&s&&s.ownerDocument&&Le(s.ownerDocument.documentElement,s)){if(o!==null&&Ne(s)){if(i=o.start,e=o.end,e===void 0&&(e=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(e,s.value.length);else if(e=(i=s.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var c=s.textContent.length,a=Math.min(o.start,c);o=o.end===void 0?a:Math.min(o.end,c),!e.extend&&a>o&&(c=o,o=a,a=c),c=Ke(s,a);var h=Ke(s,o);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),e.removeAllRanges(),a>o?(e.addRange(i),e.extend(h.node,h.offset)):(i.setEnd(h.node,h.offset),e.addRange(i)))}}for(i=[],e=s;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)e=i[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Te||Qe==null||Qe!==Xa(o)||(o=Qe,"selectionStart"in o&&Ne(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Se&&Ie(Se,o)||(Se=o,o=oe(Re,"onSelect"),0<o.length&&(i=new td("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Qe)))}function Ve(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(e){if(Xe[e])return Xe[e];if(!We[e])return e;var i=We[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ye)return Xe[e]=i[s];return e}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(e,i){df.set(e,i),fa(i,[e])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(e,i,s){var o=e.type||"unknown-event";e.currentTarget=s,Ub(o,i,void 0,e),e.currentTarget=null}function se(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;n:{var a=void 0;if(i)for(var h=o.length-1;0<=h;h--){var _=o[h],d=_.instance,j=_.currentTarget;if(_=_.listener,d!==a&&c.isPropagationStopped())break n;nf(c,_,j),a=d}else for(h=0;h<o.length;h++){if(_=o[h],d=_.instance,j=_.currentTarget,_=_.listener,d!==a&&c.isPropagationStopped())break n;nf(c,_,j),a=d}}}if(Qb)throw e=Rb,Qb=!1,Rb=null,e}function D(e,i){var s=i[of];s===void 0&&(s=i[of]=new Set);var o=e+"__bubble";s.has(o)||(pf(i,e,2,!1),s.add(o))}function qf(e,i,s){var o=0;i&&(o|=4),pf(s,e,o,i)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[rf]){e[rf]=!0,da.forEach(function(s){s!=="selectionchange"&&(mf.has(s)||qf(s,!1,e),qf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rf]||(i[rf]=!0,qf("selectionchange",!1,i))}}function pf(e,i,s,o){switch(jd(i)){case 1:var c=ed;break;case 4:c=gd;break;default:c=fd}s=c.bind(null,i,s,e),c=void 0,!Lb||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function hd(e,i,s,o,c){var a=o;if(!(i&1)&&!(i&2)&&o!==null)n:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var _=o.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(h===4)for(h=o.return;h!==null;){var d=h.tag;if((d===3||d===4)&&(d=h.stateNode.containerInfo,d===c||d.nodeType===8&&d.parentNode===c))return;h=h.return}for(;_!==null;){if(h=Wc(_),h===null)return;if(d=h.tag,d===5||d===6){o=a=h;continue n}_=_.parentNode}}o=o.return}Jb(function(){var j=a,nn=xb(s),en=[];n:{var tn=df.get(e);if(tn!==void 0){var ln=td,un=e;switch(e){case"keypress":if(od(s)===0)break n;case"keydown":case"keyup":ln=Rd;break;case"focusin":un="focus",ln=Fd;break;case"focusout":un="blur",ln=Fd;break;case"beforeblur":case"afterblur":ln=Fd;break;case"click":if(s.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ln=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ln=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ln=Vd;break;case $e:case af:case bf:ln=Hd;break;case cf:ln=Xd;break;case"scroll":ln=vd;break;case"wheel":ln=Zd;break;case"copy":case"cut":case"paste":ln=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ln=Td}var cn=(i&4)!==0,mn=!cn&&e==="scroll",an=cn?tn!==null?tn+"Capture":null:tn;cn=[];for(var rn=j,sn;rn!==null;){sn=rn;var fn=sn.stateNode;if(sn.tag===5&&fn!==null&&(sn=fn,an!==null&&(fn=Kb(rn,an),fn!=null&&cn.push(tf(rn,fn,sn)))),mn)break;rn=rn.return}0<cn.length&&(tn=new ln(tn,un,null,s,nn),en.push({event:tn,listeners:cn}))}}if(!(i&7)){n:{if(tn=e==="mouseover"||e==="pointerover",ln=e==="mouseout"||e==="pointerout",tn&&s!==wb&&(un=s.relatedTarget||s.fromElement)&&(Wc(un)||un[uf]))break n;if((ln||tn)&&(tn=nn.window===nn?nn:(tn=nn.ownerDocument)?tn.defaultView||tn.parentWindow:window,ln?(un=s.relatedTarget||s.toElement,ln=j,un=un?Wc(un):null,un!==null&&(mn=Vb(un),un!==mn||un.tag!==5&&un.tag!==6)&&(un=null)):(ln=null,un=j),ln!==un)){if(cn=Bd,fn="onMouseLeave",an="onMouseEnter",rn="mouse",(e==="pointerout"||e==="pointerover")&&(cn=Td,fn="onPointerLeave",an="onPointerEnter",rn="pointer"),mn=ln==null?tn:ue(ln),sn=un==null?tn:ue(un),tn=new cn(fn,rn+"leave",ln,s,nn),tn.target=mn,tn.relatedTarget=sn,fn=null,Wc(nn)===j&&(cn=new cn(an,rn+"enter",un,s,nn),cn.target=sn,cn.relatedTarget=mn,fn=cn),mn=fn,ln&&un)e:{for(cn=ln,an=un,rn=0,sn=cn;sn;sn=vf(sn))rn++;for(sn=0,fn=an;fn;fn=vf(fn))sn++;for(;0<rn-sn;)cn=vf(cn),rn--;for(;0<sn-rn;)an=vf(an),sn--;for(;rn--;){if(cn===an||an!==null&&cn===an.alternate)break e;cn=vf(cn),an=vf(an)}cn=null}else cn=null;ln!==null&&wf(en,tn,ln,cn,!1),un!==null&&mn!==null&&wf(en,mn,un,cn,!0)}}n:{if(tn=j?ue(j):window,ln=tn.nodeName&&tn.nodeName.toLowerCase(),ln==="select"||ln==="input"&&tn.type==="file")var dn=ve;else if(me(tn))if(we)dn=Fe;else{dn=De;var En=Ce}else(ln=tn.nodeName)&&ln.toLowerCase()==="input"&&(tn.type==="checkbox"||tn.type==="radio")&&(dn=Ee);if(dn&&(dn=dn(e,j))){ne(en,dn,s,nn);break n}En&&En(e,tn,j),e==="focusout"&&(En=tn._wrapperState)&&En.controlled&&tn.type==="number"&&cb(tn,"number",tn.value)}switch(En=j?ue(j):window,e){case"focusin":(me(En)||En.contentEditable==="true")&&(Qe=En,Re=j,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(en,s,nn);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(en,s,nn)}var yn;if(ae)n:{switch(e){case"compositionstart":var bn="onCompositionStart";break n;case"compositionend":bn="onCompositionEnd";break n;case"compositionupdate":bn="onCompositionUpdate";break n}bn=void 0}else ie?ge(e,s)&&(bn="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(bn="onCompositionStart");bn&&(de&&s.locale!=="ko"&&(ie||bn!=="onCompositionStart"?bn==="onCompositionEnd"&&ie&&(yn=nd()):(kd=nn,ld="value"in kd?kd.value:kd.textContent,ie=!0)),En=oe(j,bn),0<En.length&&(bn=new Ld(bn,e,null,s,nn),en.push({event:bn,listeners:En}),yn?bn.data=yn:(yn=he(s),yn!==null&&(bn.data=yn)))),(yn=ce?je(e,s):ke(e,s))&&(j=oe(j,"onBeforeInput"),0<j.length&&(nn=new Ld("onBeforeInput","beforeinput",null,s,nn),en.push({event:nn,listeners:j}),nn.data=yn))}se(en,i)})}function tf(e,i,s){return{instance:e,listener:i,currentTarget:s}}function oe(e,i){for(var s=i+"Capture",o=[];e!==null;){var c=e,a=c.stateNode;c.tag===5&&a!==null&&(c=a,a=Kb(e,s),a!=null&&o.unshift(tf(e,a,c)),a=Kb(e,i),a!=null&&o.push(tf(e,a,c))),e=e.return}return o}function vf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,i,s,o,c){for(var a=i._reactName,h=[];s!==null&&s!==o;){var _=s,d=_.alternate,j=_.stateNode;if(d!==null&&d===o)break;_.tag===5&&j!==null&&(_=j,c?(d=Kb(s,a),d!=null&&h.unshift(tf(s,d,_))):c||(d=Kb(s,a),d!=null&&h.push(tf(s,d,_)))),s=s.return}h.length!==0&&e.push({event:i,listeners:h})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function Af(e,i,s){if(i=zf(i),zf(e)!==i&&s)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(If)}:Ff;function If(e){setTimeout(function(){throw e})}function Kf(e,i){var s=i,o=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(o===0){e.removeChild(c),bd(i);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=c}while(s);bd(i)}function Lf(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(e){var i=e[Of];if(i)return i;for(var s=e.parentNode;s;){if(i=s[uf]||s[Of]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Mf(e);e!==null;){if(s=e[Of])return s;e=Mf(e)}return i}e=s,s=e.parentNode}return null}function Cb(e){return e=e[Of]||e[uf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ue(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Db(e){return e[Pf]||null}var Sf=[],Tf=-1;function Uf(e){return{current:e}}function E(e){0>Tf||(e.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(e,i){Tf++,Sf[Tf]=e.current,e.current=i}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(e,i){var s=e.type.contextTypes;if(!s)return Vf;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===i)return o.__reactInternalMemoizedMaskedChildContext;var c={},a;for(a in s)c[a]=i[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=c),c}function Zf(e){return e=e.childContextTypes,e!=null}function $f(){E(Wf),E(H)}function ag(e,i,s){if(H.current!==Vf)throw Error(p(168));G(H,i),G(Wf,s)}function bg(e,i,s){var o=e.stateNode;if(i=i.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var c in o)if(!(c in i))throw Error(p(108,Ra(e)||"Unknown",c));return A({},s,o)}function cg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,e),G(Wf,Wf.current),!0}function dg(e,i,s){var o=e.stateNode;if(!o)throw Error(p(169));s?(e=bg(e,i,Xf),o.__reactInternalMemoizedMergedChildContext=e,E(Wf),E(H),G(H,e)):E(Wf),G(Wf,s)}var eg=null,fg=!1,gg=!1;function hg(e){eg===null?eg=[e]:eg.push(e)}function ig(e){fg=!0,hg(e)}function jg(){if(!gg&&eg!==null){gg=!0;var e=0,i=C;try{var s=eg;for(C=1;e<s.length;e++){var o=s[e];do o=o(!0);while(o!==null)}eg=null,fg=!1}catch(c){throw eg!==null&&(eg=eg.slice(e+1)),ac(fc,jg),c}finally{C=i,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(e,i){kg[lg++]=ng,kg[lg++]=mg,mg=e,ng=i}function ug(e,i,s){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=e;var o=rg;e=sg;var c=32-oc(o)-1;o&=~(1<<c),s+=1;var a=32-oc(i)+c;if(30<a){var h=c-c%5;a=(o&(1<<h)-1).toString(32),o>>=h,c-=h,rg=1<<32-oc(i)+c|s<<c|o,sg=a+e}else rg=1<<a|s<<c|o,sg=e}function vg(e){e.return!==null&&(tg(e,1),ug(e,1,0))}function wg(e){for(;e===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;e===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(e,i){var s=Bg(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=e,i=e.deletions,i===null?(e.deletions=[s],e.flags|=16):i.push(s)}function Cg(e,i){switch(e.tag){case 5:var s=e.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,xg=e,yg=Lf(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,xg=e,yg=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=qg!==null?{id:rg,overflow:sg}:null,e.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bg(18,null,null,0),s.stateNode=i,s.return=e,e.child=s,xg=e,yg=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eg(e){if(I){var i=yg;if(i){var s=i;if(!Cg(e,i)){if(Dg(e))throw Error(p(418));i=Lf(s.nextSibling);var o=xg;i&&Cg(e,i)?Ag(o,s):(e.flags=e.flags&-4097|2,I=!1,xg=e)}}else{if(Dg(e))throw Error(p(418));e.flags=e.flags&-4097|2,I=!1,xg=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xg=e}function Gg(e){if(e!==xg)return!1;if(!I)return Fg(e),I=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!Ef(e.type,e.memoizedProps)),i&&(i=yg)){if(Dg(e))throw Hg(),Error(p(418));for(;i;)Ag(e,i),i=Lf(i.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));n:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(i===0){yg=Lf(e.nextSibling);break n}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}e=e.nextSibling}yg=null}}else yg=xg?Lf(e.stateNode.nextSibling):null;return!0}function Hg(){for(var e=yg;e;)e=Lf(e.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(e){zg===null?zg=[e]:zg.push(e)}var Kg=ua.ReactCurrentBatchConfig;function Lg(e,i){if(e&&e.defaultProps){i=A({},i),e=e.defaultProps;for(var s in e)i[s]===void 0&&(i[s]=e[s]);return i}return i}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(e){var i=Mg.current;E(Mg),e._currentValue=i}function Sg(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Tg(e,i){Ng=e,Pg=Og=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&i&&(Ug=!0),e.firstContext=null)}function Vg(e){var i=e._currentValue;if(Pg!==e)if(e={context:e,memoizedValue:i,next:null},Og===null){if(Ng===null)throw Error(p(308));Og=e,Ng.dependencies={lanes:0,firstContext:e}}else Og=Og.next=e;return i}var Wg=null;function Xg(e){Wg===null?Wg=[e]:Wg.push(e)}function Yg(e,i,s,o){var c=i.interleaved;return c===null?(s.next=s,Xg(i)):(s.next=c.next,c.next=s),i.interleaved=s,Zg(e,o)}function Zg(e,i){e.lanes|=i;var s=e.alternate;for(s!==null&&(s.lanes|=i),s=e,e=e.return;e!==null;)e.childLanes|=i,s=e.alternate,s!==null&&(s.childLanes|=i),s=e,e=e.return;return s.tag===3?s.stateNode:null}var $g=!1;function ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ch(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function dh(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,K&2){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,Zg(e,s)}return c=o.interleaved,c===null?(i.next=i,Xg(o)):(i.next=c.next,c.next=i),o.interleaved=i,Zg(e,s)}function eh(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Cc(e,s)}}function fh(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,a=null;if(s=s.firstBaseUpdate,s!==null){do{var h={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};a===null?c=a=h:a=a.next=h,s=s.next}while(s!==null);a===null?c=a=i:a=a.next=i}else c=a=i;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}function gh(e,i,s,o){var c=e.updateQueue;$g=!1;var a=c.firstBaseUpdate,h=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var d=_,j=d.next;d.next=null,h===null?a=j:h.next=j,h=d;var nn=e.alternate;nn!==null&&(nn=nn.updateQueue,_=nn.lastBaseUpdate,_!==h&&(_===null?nn.firstBaseUpdate=j:_.next=j,nn.lastBaseUpdate=d))}if(a!==null){var en=c.baseState;h=0,nn=j=d=null,_=a;do{var tn=_.lane,ln=_.eventTime;if((o&tn)===tn){nn!==null&&(nn=nn.next={eventTime:ln,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});n:{var un=e,cn=_;switch(tn=i,ln=s,cn.tag){case 1:if(un=cn.payload,typeof un=="function"){en=un.call(ln,en,tn);break n}en=un;break n;case 3:un.flags=un.flags&-65537|128;case 0:if(un=cn.payload,tn=typeof un=="function"?un.call(ln,en,tn):un,tn==null)break n;en=A({},en,tn);break n;case 2:$g=!0}}_.callback!==null&&_.lane!==0&&(e.flags|=64,tn=c.effects,tn===null?c.effects=[_]:tn.push(_))}else ln={eventTime:ln,lane:tn,tag:_.tag,payload:_.payload,callback:_.callback,next:null},nn===null?(j=nn=ln,d=en):nn=nn.next=ln,h|=tn;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;tn=_,_=tn.next,tn.next=null,c.lastBaseUpdate=tn,c.shared.pending=null}}while(1);if(nn===null&&(d=en),c.baseState=d,c.firstBaseUpdate=j,c.lastBaseUpdate=nn,i=c.shared.interleaved,i!==null){c=i;do h|=c.lane,c=c.next;while(c!==i)}else a===null&&(c.shared.lanes=0);hh|=h,e.lanes=h,e.memoizedState=en}}function ih(e,i,s){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var o=e[i],c=o.callback;if(c!==null){if(o.callback=null,o=s,typeof c!="function")throw Error(p(191,c));c.call(o)}}}var jh=new aa.Component().refs;function kh(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:A({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var nh={isMounted:function(e){return(e=e._reactInternals)?Vb(e)===e:!1},enqueueSetState:function(e,i,s){e=e._reactInternals;var o=L(),c=lh(e),a=ch(o,c);a.payload=i,s!=null&&(a.callback=s),i=dh(e,a,c),i!==null&&(mh(i,e,c,o),eh(i,e,c))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=L(),c=lh(e),a=ch(o,c);a.tag=1,a.payload=i,s!=null&&(a.callback=s),i=dh(e,a,c),i!==null&&(mh(i,e,c,o),eh(i,e,c))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=L(),o=lh(e),c=ch(s,o);c.tag=2,i!=null&&(c.callback=i),i=dh(e,c,o),i!==null&&(mh(i,e,o,s),eh(i,e,o))}};function oh(e,i,s,o,c,a,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,h):i.prototype&&i.prototype.isPureReactComponent?!Ie(s,o)||!Ie(c,a):!0}function ph(e,i,s){var o=!1,c=Vf,a=i.contextType;return typeof a=="object"&&a!==null?a=Vg(a):(c=Zf(i)?Xf:H.current,o=i.contextTypes,a=(o=o!=null)?Yf(e,c):Vf),i=new i(s,a),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nh,e.stateNode=i,i._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=a),i}function qh(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&nh.enqueueReplaceState(i,i.state,null)}function rh(e,i,s,o){var c=e.stateNode;c.props=s,c.state=e.memoizedState,c.refs=jh,ah(e);var a=i.contextType;typeof a=="object"&&a!==null?c.context=Vg(a):(a=Zf(i)?Xf:H.current,c.context=Yf(e,a)),c.state=e.memoizedState,a=i.getDerivedStateFromProps,typeof a=="function"&&(kh(e,i,a,s),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&nh.enqueueReplaceState(c,c.state,null),gh(e,s,c,o),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function sh(e,i,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(p(309));var o=s.stateNode}if(!o)throw Error(p(147,e));var c=o,a=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===a?i.ref:(i=function(h){var _=c.refs;_===jh&&(_=c.refs={}),h===null?delete _[a]:_[a]=h},i._stringRef=a,i)}if(typeof e!="string")throw Error(p(284));if(!s._owner)throw Error(p(290,e))}return e}function th(e,i){throw e=Object.prototype.toString.call(i),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function uh(e){var i=e._init;return i(e._payload)}function vh(e){function i(an,rn){if(e){var sn=an.deletions;sn===null?(an.deletions=[rn],an.flags|=16):sn.push(rn)}}function s(an,rn){if(!e)return null;for(;rn!==null;)i(an,rn),rn=rn.sibling;return null}function o(an,rn){for(an=new Map;rn!==null;)rn.key!==null?an.set(rn.key,rn):an.set(rn.index,rn),rn=rn.sibling;return an}function c(an,rn){return an=wh(an,rn),an.index=0,an.sibling=null,an}function a(an,rn,sn){return an.index=sn,e?(sn=an.alternate,sn!==null?(sn=sn.index,sn<rn?(an.flags|=2,rn):sn):(an.flags|=2,rn)):(an.flags|=1048576,rn)}function h(an){return e&&an.alternate===null&&(an.flags|=2),an}function _(an,rn,sn,fn){return rn===null||rn.tag!==6?(rn=xh(sn,an.mode,fn),rn.return=an,rn):(rn=c(rn,sn),rn.return=an,rn)}function d(an,rn,sn,fn){var dn=sn.type;return dn===ya?nn(an,rn,sn.props.children,fn,sn.key):rn!==null&&(rn.elementType===dn||typeof dn=="object"&&dn!==null&&dn.$$typeof===Ha&&uh(dn)===rn.type)?(fn=c(rn,sn.props),fn.ref=sh(an,rn,sn),fn.return=an,fn):(fn=yh(sn.type,sn.key,sn.props,null,an.mode,fn),fn.ref=sh(an,rn,sn),fn.return=an,fn)}function j(an,rn,sn,fn){return rn===null||rn.tag!==4||rn.stateNode.containerInfo!==sn.containerInfo||rn.stateNode.implementation!==sn.implementation?(rn=zh(sn,an.mode,fn),rn.return=an,rn):(rn=c(rn,sn.children||[]),rn.return=an,rn)}function nn(an,rn,sn,fn,dn){return rn===null||rn.tag!==7?(rn=Ah(sn,an.mode,fn,dn),rn.return=an,rn):(rn=c(rn,sn),rn.return=an,rn)}function en(an,rn,sn){if(typeof rn=="string"&&rn!==""||typeof rn=="number")return rn=xh(""+rn,an.mode,sn),rn.return=an,rn;if(typeof rn=="object"&&rn!==null){switch(rn.$$typeof){case va:return sn=yh(rn.type,rn.key,rn.props,null,an.mode,sn),sn.ref=sh(an,null,rn),sn.return=an,sn;case wa:return rn=zh(rn,an.mode,sn),rn.return=an,rn;case Ha:var fn=rn._init;return en(an,fn(rn._payload),sn)}if(eb(rn)||Ka(rn))return rn=Ah(rn,an.mode,sn,null),rn.return=an,rn;th(an,rn)}return null}function tn(an,rn,sn,fn){var dn=rn!==null?rn.key:null;if(typeof sn=="string"&&sn!==""||typeof sn=="number")return dn!==null?null:_(an,rn,""+sn,fn);if(typeof sn=="object"&&sn!==null){switch(sn.$$typeof){case va:return sn.key===dn?d(an,rn,sn,fn):null;case wa:return sn.key===dn?j(an,rn,sn,fn):null;case Ha:return dn=sn._init,tn(an,rn,dn(sn._payload),fn)}if(eb(sn)||Ka(sn))return dn!==null?null:nn(an,rn,sn,fn,null);th(an,sn)}return null}function ln(an,rn,sn,fn,dn){if(typeof fn=="string"&&fn!==""||typeof fn=="number")return an=an.get(sn)||null,_(rn,an,""+fn,dn);if(typeof fn=="object"&&fn!==null){switch(fn.$$typeof){case va:return an=an.get(fn.key===null?sn:fn.key)||null,d(rn,an,fn,dn);case wa:return an=an.get(fn.key===null?sn:fn.key)||null,j(rn,an,fn,dn);case Ha:var En=fn._init;return ln(an,rn,sn,En(fn._payload),dn)}if(eb(fn)||Ka(fn))return an=an.get(sn)||null,nn(rn,an,fn,dn,null);th(rn,fn)}return null}function un(an,rn,sn,fn){for(var dn=null,En=null,yn=rn,bn=rn=0,Rn=null;yn!==null&&bn<sn.length;bn++){yn.index>bn?(Rn=yn,yn=null):Rn=yn.sibling;var xn=tn(an,yn,sn[bn],fn);if(xn===null){yn===null&&(yn=Rn);break}e&&yn&&xn.alternate===null&&i(an,yn),rn=a(xn,rn,bn),En===null?dn=xn:En.sibling=xn,En=xn,yn=Rn}if(bn===sn.length)return s(an,yn),I&&tg(an,bn),dn;if(yn===null){for(;bn<sn.length;bn++)yn=en(an,sn[bn],fn),yn!==null&&(rn=a(yn,rn,bn),En===null?dn=yn:En.sibling=yn,En=yn);return I&&tg(an,bn),dn}for(yn=o(an,yn);bn<sn.length;bn++)Rn=ln(yn,an,bn,sn[bn],fn),Rn!==null&&(e&&Rn.alternate!==null&&yn.delete(Rn.key===null?bn:Rn.key),rn=a(Rn,rn,bn),En===null?dn=Rn:En.sibling=Rn,En=Rn);return e&&yn.forEach(function(kn){return i(an,kn)}),I&&tg(an,bn),dn}function cn(an,rn,sn,fn){var dn=Ka(sn);if(typeof dn!="function")throw Error(p(150));if(sn=dn.call(sn),sn==null)throw Error(p(151));for(var En=dn=null,yn=rn,bn=rn=0,Rn=null,xn=sn.next();yn!==null&&!xn.done;bn++,xn=sn.next()){yn.index>bn?(Rn=yn,yn=null):Rn=yn.sibling;var kn=tn(an,yn,xn.value,fn);if(kn===null){yn===null&&(yn=Rn);break}e&&yn&&kn.alternate===null&&i(an,yn),rn=a(kn,rn,bn),En===null?dn=kn:En.sibling=kn,En=kn,yn=Rn}if(xn.done)return s(an,yn),I&&tg(an,bn),dn;if(yn===null){for(;!xn.done;bn++,xn=sn.next())xn=en(an,xn.value,fn),xn!==null&&(rn=a(xn,rn,bn),En===null?dn=xn:En.sibling=xn,En=xn);return I&&tg(an,bn),dn}for(yn=o(an,yn);!xn.done;bn++,xn=sn.next())xn=ln(yn,an,bn,xn.value,fn),xn!==null&&(e&&xn.alternate!==null&&yn.delete(xn.key===null?bn:xn.key),rn=a(xn,rn,bn),En===null?dn=xn:En.sibling=xn,En=xn);return e&&yn.forEach(function(Ln){return i(an,Ln)}),I&&tg(an,bn),dn}function mn(an,rn,sn,fn){if(typeof sn=="object"&&sn!==null&&sn.type===ya&&sn.key===null&&(sn=sn.props.children),typeof sn=="object"&&sn!==null){switch(sn.$$typeof){case va:n:{for(var dn=sn.key,En=rn;En!==null;){if(En.key===dn){if(dn=sn.type,dn===ya){if(En.tag===7){s(an,En.sibling),rn=c(En,sn.props.children),rn.return=an,an=rn;break n}}else if(En.elementType===dn||typeof dn=="object"&&dn!==null&&dn.$$typeof===Ha&&uh(dn)===En.type){s(an,En.sibling),rn=c(En,sn.props),rn.ref=sh(an,En,sn),rn.return=an,an=rn;break n}s(an,En);break}else i(an,En);En=En.sibling}sn.type===ya?(rn=Ah(sn.props.children,an.mode,fn,sn.key),rn.return=an,an=rn):(fn=yh(sn.type,sn.key,sn.props,null,an.mode,fn),fn.ref=sh(an,rn,sn),fn.return=an,an=fn)}return h(an);case wa:n:{for(En=sn.key;rn!==null;){if(rn.key===En)if(rn.tag===4&&rn.stateNode.containerInfo===sn.containerInfo&&rn.stateNode.implementation===sn.implementation){s(an,rn.sibling),rn=c(rn,sn.children||[]),rn.return=an,an=rn;break n}else{s(an,rn);break}else i(an,rn);rn=rn.sibling}rn=zh(sn,an.mode,fn),rn.return=an,an=rn}return h(an);case Ha:return En=sn._init,mn(an,rn,En(sn._payload),fn)}if(eb(sn))return un(an,rn,sn,fn);if(Ka(sn))return cn(an,rn,sn,fn);th(an,sn)}return typeof sn=="string"&&sn!==""||typeof sn=="number"?(sn=""+sn,rn!==null&&rn.tag===6?(s(an,rn.sibling),rn=c(rn,sn),rn.return=an,an=rn):(s(an,rn),rn=xh(sn,an.mode,fn),rn.return=an,an=rn),h(an)):s(an,rn)}return mn}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(e){if(e===Dh)throw Error(p(174));return e}function Ih(e,i){switch(G(Gh,i),G(Fh,e),G(Eh,Dh),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lb(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=lb(i,e)}E(Eh),G(Eh,i)}function Jh(){E(Eh),E(Fh),E(Gh)}function Kh(e){Hh(Gh.current);var i=Hh(Eh.current),s=lb(i,e.type);i!==s&&(G(Fh,e),G(Eh,s))}function Lh(e){Fh.current===e&&(E(Eh),E(Fh))}var M=Uf(0);function Mh(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nh=[];function Oh(){for(var e=0;e<Nh.length;e++)Nh[e]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321))}function Wh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!He(e[s],i[s]))return!1;return!0}function Xh(e,i,s,o,c,a){if(Rh=a,N=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ph.current=e===null||e.memoizedState===null?Yh:Zh,e=s(o,c),Th){a=0;do{if(Th=!1,Uh=0,25<=a)throw Error(p(301));a+=1,P=O=null,i.updateQueue=null,Ph.current=$h,e=s(o,c)}while(Th)}if(Ph.current=ai,i=O!==null&&O.next!==null,Rh=0,P=O=N=null,Sh=!1,i)throw Error(p(300));return e}function bi(){var e=Uh!==0;return Uh=0,e}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?N.memoizedState=P=e:P=P.next=e,P}function di(){if(O===null){var e=N.alternate;e=e!==null?e.memoizedState:null}else e=O.next;var i=P===null?N.memoizedState:P.next;if(i!==null)P=i,O=e;else{if(e===null)throw Error(p(310));O=e,e={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null},P===null?N.memoizedState=P=e:P=P.next=e}return P}function ei(e,i){return typeof i=="function"?i(e):i}function fi(e){var i=di(),s=i.queue;if(s===null)throw Error(p(311));s.lastRenderedReducer=e;var o=O,c=o.baseQueue,a=s.pending;if(a!==null){if(c!==null){var h=c.next;c.next=a.next,a.next=h}o.baseQueue=c=a,s.pending=null}if(c!==null){a=c.next,o=o.baseState;var _=h=null,d=null,j=a;do{var nn=j.lane;if((Rh&nn)===nn)d!==null&&(d=d.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),o=j.hasEagerState?j.eagerState:e(o,j.action);else{var en={lane:nn,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};d===null?(_=d=en,h=o):d=d.next=en,N.lanes|=nn,hh|=nn}j=j.next}while(j!==null&&j!==a);d===null?h=o:d.next=_,He(o,i.memoizedState)||(Ug=!0),i.memoizedState=o,i.baseState=h,i.baseQueue=d,s.lastRenderedState=o}if(e=s.interleaved,e!==null){c=e;do a=c.lane,N.lanes|=a,hh|=a,c=c.next;while(c!==e)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function gi(e){var i=di(),s=i.queue;if(s===null)throw Error(p(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,a=i.memoizedState;if(c!==null){s.pending=null;var h=c=c.next;do a=e(a,h.action),h=h.next;while(h!==c);He(a,i.memoizedState)||(Ug=!0),i.memoizedState=a,i.baseQueue===null&&(i.baseState=a),s.lastRenderedState=a}return[a,o]}function hi(){}function ii(e,i){var s=N,o=di(),c=i(),a=!He(o.memoizedState,c);if(a&&(o.memoizedState=c,Ug=!0),o=o.queue,ji(ki.bind(null,s,o,e),[e]),o.getSnapshot!==i||a||P!==null&&P.memoizedState.tag&1){if(s.flags|=2048,li(9,mi.bind(null,s,o,c,i),void 0,null),R===null)throw Error(p(349));Rh&30||ni(s,i,c)}return c}function ni(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=N.updateQueue,i===null?(i={lastEffect:null,stores:null},N.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function mi(e,i,s,o){i.value=s,i.getSnapshot=o,oi(i)&&pi(e)}function ki(e,i,s){return s(function(){oi(i)&&pi(e)})}function oi(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!He(e,s)}catch{return!0}}function pi(e){var i=Zg(e,1);i!==null&&mh(i,e,1,-1)}function qi(e){var i=ci();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},i.queue=e,e=e.dispatch=ri.bind(null,N,e),[i.memoizedState,e]}function li(e,i,s,o){return e={tag:e,create:i,destroy:s,deps:o,next:null},i=N.updateQueue,i===null?(i={lastEffect:null,stores:null},N.updateQueue=i,i.lastEffect=e.next=e):(s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e)),e}function si(){return di().memoizedState}function ti(e,i,s,o){var c=ci();N.flags|=e,c.memoizedState=li(1|i,s,void 0,o===void 0?null:o)}function ui(e,i,s,o){var c=di();o=o===void 0?null:o;var a=void 0;if(O!==null){var h=O.memoizedState;if(a=h.destroy,o!==null&&Wh(o,h.deps)){c.memoizedState=li(i,s,a,o);return}}N.flags|=e,c.memoizedState=li(1|i,s,a,o)}function vi(e,i){return ti(8390656,8,e,i)}function ji(e,i){return ui(2048,8,e,i)}function wi(e,i){return ui(4,2,e,i)}function xi(e,i){return ui(4,4,e,i)}function yi(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function zi(e,i,s){return s=s!=null?s.concat([e]):null,ui(4,4,yi.bind(null,i,e),s)}function Ai(){}function Bi(e,i){var s=di();i=i===void 0?null:i;var o=s.memoizedState;return o!==null&&i!==null&&Wh(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Ci(e,i){var s=di();i=i===void 0?null:i;var o=s.memoizedState;return o!==null&&i!==null&&Wh(i,o[1])?o[0]:(e=e(),s.memoizedState=[e,i],e)}function Di(e,i,s){return Rh&21?(He(s,i)||(s=yc(),N.lanes|=s,hh|=s,e.baseState=!0),i):(e.baseState&&(e.baseState=!1,Ug=!0),e.memoizedState=s)}function Ei(e,i){var s=C;C=s!==0&&4>s?s:4,e(!0);var o=Qh.transition;Qh.transition={};try{e(!1),i()}finally{C=s,Qh.transition=o}}function Fi(){return di().memoizedState}function Gi(e,i,s){var o=lh(e);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},Hi(e))Ii(i,s);else if(s=Yg(e,i,s,o),s!==null){var c=L();mh(s,e,o,c),Ji(s,i,o)}}function ri(e,i,s){var o=lh(e),c={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hi(e))Ii(i,c);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=i.lastRenderedReducer,a!==null))try{var h=i.lastRenderedState,_=a(h,s);if(c.hasEagerState=!0,c.eagerState=_,He(_,h)){var d=i.interleaved;d===null?(c.next=c,Xg(i)):(c.next=d.next,d.next=c),i.interleaved=c;return}}catch{}finally{}s=Yg(e,i,c,o),s!==null&&(c=L(),mh(s,e,o,c),Ji(s,i,o))}}function Hi(e){var i=e.alternate;return e===N||i!==null&&i===N}function Ii(e,i){Th=Sh=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Ji(e,i,s){if(s&4194240){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Cc(e,s)}}var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(e,i){return ci().memoizedState=[e,i===void 0?null:i],e},useContext:Vg,useEffect:vi,useImperativeHandle:function(e,i,s){return s=s!=null?s.concat([e]):null,ti(4194308,4,yi.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ti(4194308,4,e,i)},useInsertionEffect:function(e,i){return ti(4,2,e,i)},useMemo:function(e,i){var s=ci();return i=i===void 0?null:i,e=e(),s.memoizedState=[e,i],e},useReducer:function(e,i,s){var o=ci();return i=s!==void 0?s(i):i,o.memoizedState=o.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=Gi.bind(null,N,e),[o.memoizedState,e]},useRef:function(e){var i=ci();return e={current:e},i.memoizedState=e},useState:qi,useDebugValue:Ai,useDeferredValue:function(e){return ci().memoizedState=e},useTransition:function(){var e=qi(!1),i=e[0];return e=Ei.bind(null,e[1]),ci().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,s){var o=N,c=ci();if(I){if(s===void 0)throw Error(p(407));s=s()}else{if(s=i(),R===null)throw Error(p(349));Rh&30||ni(o,i,s)}c.memoizedState=s;var a={value:s,getSnapshot:i};return c.queue=a,vi(ki.bind(null,o,a,e),[e]),o.flags|=2048,li(9,mi.bind(null,o,a,s,i),void 0,null),s},useId:function(){var e=ci(),i=R.identifierPrefix;if(I){var s=sg,o=rg;s=(o&~(1<<32-oc(o)-1)).toString(32)+s,i=":"+i+"R"+s,s=Uh++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Vh++,i=":"+i+"r"+s.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},useDebugValue:Ai,useDeferredValue:function(e){var i=di();return Di(i,O.memoizedState,e)},useTransition:function(){var e=fi(ei)[0],i=di().memoizedState;return[e,i]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(e){var i=di();return O===null?i.memoizedState=e:Di(i,O.memoizedState,e)},useTransition:function(){var e=gi(ei)[0],i=di().memoizedState;return[e,i]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(e,i){try{var s="",o=i;do s+=Pa(o),o=o.return;while(o);var c=s}catch(a){c=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:i,stack:c,digest:null}}function Li(e,i,s){return{value:e,source:null,stack:s??null,digest:i??null}}function Mi(e,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var Ni=typeof WeakMap=="function"?WeakMap:Map;function Oi(e,i,s){s=ch(-1,s),s.tag=3,s.payload={element:null};var o=i.value;return s.callback=function(){Pi||(Pi=!0,Qi=o),Mi(e,i)},s}function Ri(e,i,s){s=ch(-1,s),s.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;s.payload=function(){return o(c)},s.callback=function(){Mi(e,i)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(s.callback=function(){Mi(e,i),typeof o!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})}),s}function Ti(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Ni;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(s)||(c.add(s),e=Ui.bind(null,e,i,s),i.then(e,e))}function Vi(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function Wi(e,i,s,o,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===i?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=ch(-1,1),i.tag=2,dh(s,i,1))),s.lanes|=1),e)}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(e,i,s,o){i.child=e===null?Ch(i,null,s,o):Bh(i,e.child,s,o)}function Zi(e,i,s,o,c){s=s.render;var a=i.ref;return Tg(i,c),o=Xh(e,i,s,o,a,c),s=bi(),e!==null&&!Ug?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~c,$i(e,i,c)):(I&&s&&vg(i),i.flags|=1,Yi(e,i,o,c),i.child)}function aj(e,i,s,o,c){if(e===null){var a=s.type;return typeof a=="function"&&!bj(a)&&a.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=a,cj(e,i,a,o,c)):(e=yh(s.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(a=e.child,!(e.lanes&c)){var h=a.memoizedProps;if(s=s.compare,s=s!==null?s:Ie,s(h,o)&&e.ref===i.ref)return $i(e,i,c)}return i.flags|=1,e=wh(a,o),e.ref=i.ref,e.return=i,i.child=e}function cj(e,i,s,o,c){if(e!==null){var a=e.memoizedProps;if(Ie(a,o)&&e.ref===i.ref)if(Ug=!1,i.pendingProps=o=a,(e.lanes&c)!==0)e.flags&131072&&(Ug=!0);else return i.lanes=e.lanes,$i(e,i,c)}return dj(e,i,s,o,c)}function ej(e,i,s){var o=i.pendingProps,c=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=s;else{if(!(s&1073741824))return e=a!==null?a.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,G(fj,gj),gj|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:s,G(fj,gj),gj|=o}else a!==null?(o=a.baseLanes|s,i.memoizedState=null):o=s,G(fj,gj),gj|=o;return Yi(e,i,c,s),i.child}function hj(e,i){var s=i.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function dj(e,i,s,o,c){var a=Zf(s)?Xf:H.current;return a=Yf(i,a),Tg(i,c),s=Xh(e,i,s,o,a,c),o=bi(),e!==null&&!Ug?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~c,$i(e,i,c)):(I&&o&&vg(i),i.flags|=1,Yi(e,i,s,c),i.child)}function ij(e,i,s,o,c){if(Zf(s)){var a=!0;cg(i)}else a=!1;if(Tg(i,c),i.stateNode===null)jj(e,i),ph(i,s,o),rh(i,s,o,c),o=!0;else if(e===null){var h=i.stateNode,_=i.memoizedProps;h.props=_;var d=h.context,j=s.contextType;typeof j=="object"&&j!==null?j=Vg(j):(j=Zf(s)?Xf:H.current,j=Yf(i,j));var nn=s.getDerivedStateFromProps,en=typeof nn=="function"||typeof h.getSnapshotBeforeUpdate=="function";en||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==o||d!==j)&&qh(i,h,o,j),$g=!1;var tn=i.memoizedState;h.state=tn,gh(i,o,h,c),d=i.memoizedState,_!==o||tn!==d||Wf.current||$g?(typeof nn=="function"&&(kh(i,s,nn,o),d=i.memoizedState),(_=$g||oh(i,s,_,o,tn,d,j))?(en||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=d),h.props=o,h.state=d,h.context=j,o=_):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,bh(e,i),_=i.memoizedProps,j=i.type===i.elementType?_:Lg(i.type,_),h.props=j,en=i.pendingProps,tn=h.context,d=s.contextType,typeof d=="object"&&d!==null?d=Vg(d):(d=Zf(s)?Xf:H.current,d=Yf(i,d));var ln=s.getDerivedStateFromProps;(nn=typeof ln=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==en||tn!==d)&&qh(i,h,o,d),$g=!1,tn=i.memoizedState,h.state=tn,gh(i,o,h,c);var un=i.memoizedState;_!==en||tn!==un||Wf.current||$g?(typeof ln=="function"&&(kh(i,s,ln,o),un=i.memoizedState),(j=$g||oh(i,s,j,o,tn,un,d)||!1)?(nn||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,un,d),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,un,d)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&tn===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tn===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=un),h.props=o,h.state=un,h.context=d,o=j):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&tn===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tn===e.memoizedState||(i.flags|=1024),o=!1)}return kj(e,i,s,o,a,c)}function kj(e,i,s,o,c,a){hj(e,i);var h=(i.flags&128)!==0;if(!o&&!h)return c&&dg(i,s,!1),$i(e,i,a);o=i.stateNode,Xi.current=i;var _=h&&typeof s.getDerivedStateFromError!="function"?null:o.render();return i.flags|=1,e!==null&&h?(i.child=Bh(i,e.child,null,a),i.child=Bh(i,null,_,a)):Yi(e,i,_,a),i.memoizedState=o.state,c&&dg(i,s,!0),i.child}function lj(e){var i=e.stateNode;i.pendingContext?ag(e,i.pendingContext,i.pendingContext!==i.context):i.context&&ag(e,i.context,!1),Ih(e,i.containerInfo)}function mj(e,i,s,o,c){return Ig(),Jg(c),i.flags|=256,Yi(e,i,s,o),i.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(e){return{baseLanes:e,cachePool:null,transitions:null}}function pj(e,i,s){var o=i.pendingProps,c=M.current,a=!1,h=(i.flags&128)!==0,_;if((_=h)||(_=e!==null&&e.memoizedState===null?!1:(c&2)!==0),_?(a=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),G(M,c&1),e===null)return Eg(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(i.mode&1?e.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(h=o.children,e=o.fallback,a?(o=i.mode,a=i.child,h={mode:"hidden",children:h},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=h):a=qj(h,o,0,null),e=Ah(e,o,s,null),a.return=i,e.return=i,a.sibling=e,i.child=a,i.child.memoizedState=oj(s),i.memoizedState=nj,e):rj(i,h));if(c=e.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return sj(e,i,h,o,_,c,s);if(a){a=o.fallback,h=i.mode,c=e.child,_=c.sibling;var d={mode:"hidden",children:o.children};return!(h&1)&&i.child!==c?(o=i.child,o.childLanes=0,o.pendingProps=d,i.deletions=null):(o=wh(c,d),o.subtreeFlags=c.subtreeFlags&14680064),_!==null?a=wh(_,a):(a=Ah(a,h,s,null),a.flags|=2),a.return=i,o.return=i,o.sibling=a,i.child=o,o=a,a=i.child,h=e.child.memoizedState,h=h===null?oj(s):{baseLanes:h.baseLanes|s,cachePool:null,transitions:h.transitions},a.memoizedState=h,a.childLanes=e.childLanes&~s,i.memoizedState=nj,o}return a=e.child,e=a.sibling,o=wh(a,{mode:"visible",children:o.children}),!(i.mode&1)&&(o.lanes=s),o.return=i,o.sibling=null,e!==null&&(s=i.deletions,s===null?(i.deletions=[e],i.flags|=16):s.push(e)),i.child=o,i.memoizedState=null,o}function rj(e,i){return i=qj({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function tj(e,i,s,o){return o!==null&&Jg(o),Bh(i,e.child,null,s),e=rj(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function sj(e,i,s,o,c,a,h){if(s)return i.flags&256?(i.flags&=-257,o=Li(Error(p(422))),tj(e,i,h,o)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(a=o.fallback,c=i.mode,o=qj({mode:"visible",children:o.children},c,0,null),a=Ah(a,c,h,null),a.flags|=2,o.return=i,a.return=i,o.sibling=a,i.child=o,i.mode&1&&Bh(i,e.child,null,h),i.child.memoizedState=oj(h),i.memoizedState=nj,a);if(!(i.mode&1))return tj(e,i,h,null);if(c.data==="$!"){if(o=c.nextSibling&&c.nextSibling.dataset,o)var _=o.dgst;return o=_,a=Error(p(419)),o=Li(a,o,void 0),tj(e,i,h,o)}if(_=(h&e.childLanes)!==0,Ug||_){if(o=R,o!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(o.suspendedLanes|h)?0:c,c!==0&&c!==a.retryLane&&(a.retryLane=c,Zg(e,c),mh(o,e,c,-1))}return uj(),o=Li(Error(p(421))),tj(e,i,h,o)}return c.data==="$?"?(i.flags|=128,i.child=e.child,i=vj.bind(null,e),c._reactRetry=i,null):(e=a.treeContext,yg=Lf(c.nextSibling),xg=i,I=!0,zg=null,e!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=e.id,sg=e.overflow,qg=i),i=rj(i,o.children),i.flags|=4096,i)}function wj(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Sg(e.return,i,s)}function xj(e,i,s,o,c){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(a.isBackwards=i,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=s,a.tailMode=c)}function yj(e,i,s){var o=i.pendingProps,c=o.revealOrder,a=o.tail;if(Yi(e,i,o.children,s),o=M.current,o&2)o=o&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)n:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wj(e,s,i);else if(e.tag===19)wj(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break n;for(;e.sibling===null;){if(e.return===null||e.return===i)break n;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(G(M,o),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&Mh(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),xj(i,!1,c,s,a);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Mh(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}xj(i,!0,s,null,a);break;case"together":xj(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jj(e,i){!(i.mode&1)&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function $i(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),hh|=i.lanes,!(s&i.childLanes))return null;if(e!==null&&i.child!==e.child)throw Error(p(153));if(i.child!==null){for(e=i.child,s=wh(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=wh(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function zj(e,i,s){switch(i.tag){case 3:lj(i),Ig();break;case 5:Kh(i);break;case 1:Zf(i.type)&&cg(i);break;case 4:Ih(i,i.stateNode.containerInfo);break;case 10:var o=i.type._context,c=i.memoizedProps.value;G(Mg,o._currentValue),o._currentValue=c;break;case 13:if(o=i.memoizedState,o!==null)return o.dehydrated!==null?(G(M,M.current&1),i.flags|=128,null):s&i.child.childLanes?pj(e,i,s):(G(M,M.current&1),e=$i(e,i,s),e!==null?e.sibling:null);G(M,M.current&1);break;case 19:if(o=(s&i.childLanes)!==0,e.flags&128){if(o)return yj(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(M,M.current),o)break;return null;case 22:case 23:return i.lanes=0,ej(e,i,s)}return $i(e,i,s)}var Aj,Bj,Cj,Dj;Aj=function(e,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Bj=function(){};Cj=function(e,i,s,o){var c=e.memoizedProps;if(c!==o){e=i.stateNode,Hh(Eh.current);var a=null;switch(s){case"input":c=Ya(e,c),o=Ya(e,o),a=[];break;case"select":c=A({},c,{value:void 0}),o=A({},o,{value:void 0}),a=[];break;case"textarea":c=gb(e,c),o=gb(e,o),a=[];break;default:typeof c.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Bf)}ub(s,o);var h;s=null;for(j in c)if(!o.hasOwnProperty(j)&&c.hasOwnProperty(j)&&c[j]!=null)if(j==="style"){var _=c[j];for(h in _)_.hasOwnProperty(h)&&(s||(s={}),s[h]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(ea.hasOwnProperty(j)?a||(a=[]):(a=a||[]).push(j,null));for(j in o){var d=o[j];if(_=c!=null?c[j]:void 0,o.hasOwnProperty(j)&&d!==_&&(d!=null||_!=null))if(j==="style")if(_){for(h in _)!_.hasOwnProperty(h)||d&&d.hasOwnProperty(h)||(s||(s={}),s[h]="");for(h in d)d.hasOwnProperty(h)&&_[h]!==d[h]&&(s||(s={}),s[h]=d[h])}else s||(a||(a=[]),a.push(j,s)),s=d;else j==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,_=_?_.__html:void 0,d!=null&&_!==d&&(a=a||[]).push(j,d)):j==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(j,""+d):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(ea.hasOwnProperty(j)?(d!=null&&j==="onScroll"&&D("scroll",e),a||_===d||(a=[])):(a=a||[]).push(j,d))}s&&(a=a||[]).push("style",s);var j=a;(i.updateQueue=j)&&(i.flags|=4)}};Dj=function(e,i,s,o){s!==o&&(i.flags|=4)};function Ej(e,i){if(!I)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function S(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&14680064,o|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Fj(e,i,s){var o=i.pendingProps;switch(wg(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(i),null;case 1:return Zf(i.type)&&$f(),S(i),null;case 3:return o=i.stateNode,Jh(),E(Wf),E(H),Oh(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Gg(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zg!==null&&(Gj(zg),zg=null))),Bj(e,i),S(i),null;case 5:Lh(i);var c=Hh(Gh.current);if(s=i.type,e!==null&&i.stateNode!=null)Cj(e,i,s,o,c),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!o){if(i.stateNode===null)throw Error(p(166));return S(i),null}if(e=Hh(Eh.current),Gg(i)){o=i.stateNode,s=i.type;var a=i.memoizedProps;switch(o[Of]=i,o[Pf]=a,e=(i.mode&1)!==0,s){case"dialog":D("cancel",o),D("close",o);break;case"iframe":case"object":case"embed":D("load",o);break;case"video":case"audio":for(c=0;c<lf.length;c++)D(lf[c],o);break;case"source":D("error",o);break;case"img":case"image":case"link":D("error",o),D("load",o);break;case"details":D("toggle",o);break;case"input":Za(o,a),D("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},D("invalid",o);break;case"textarea":hb(o,a),D("invalid",o)}ub(s,a),c=null;for(var h in a)if(a.hasOwnProperty(h)){var _=a[h];h==="children"?typeof _=="string"?o.textContent!==_&&(a.suppressHydrationWarning!==!0&&Af(o.textContent,_,e),c=["children",_]):typeof _=="number"&&o.textContent!==""+_&&(a.suppressHydrationWarning!==!0&&Af(o.textContent,_,e),c=["children",""+_]):ea.hasOwnProperty(h)&&_!=null&&h==="onScroll"&&D("scroll",o)}switch(s){case"input":Va(o),db(o,a,!0);break;case"textarea":Va(o),jb(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Bf)}o=c,i.updateQueue=o,o!==null&&(i.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kb(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=h.createElement(s,{is:o.is}):(e=h.createElement(s),s==="select"&&(h=e,o.multiple?h.multiple=!0:o.size&&(h.size=o.size))):e=h.createElementNS(e,s),e[Of]=i,e[Pf]=o,Aj(e,i,!1,!1),i.stateNode=e;n:{switch(h=vb(s,o),s){case"dialog":D("cancel",e),D("close",e),c=o;break;case"iframe":case"object":case"embed":D("load",e),c=o;break;case"video":case"audio":for(c=0;c<lf.length;c++)D(lf[c],e);c=o;break;case"source":D("error",e),c=o;break;case"img":case"image":case"link":D("error",e),D("load",e),c=o;break;case"details":D("toggle",e),c=o;break;case"input":Za(e,o),c=Ya(e,o),D("invalid",e);break;case"option":c=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},c=A({},o,{value:void 0}),D("invalid",e);break;case"textarea":hb(e,o),c=gb(e,o),D("invalid",e);break;default:c=o}ub(s,c),_=c;for(a in _)if(_.hasOwnProperty(a)){var d=_[a];a==="style"?sb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&nb(e,d)):a==="children"?typeof d=="string"?(s!=="textarea"||d!=="")&&ob(e,d):typeof d=="number"&&ob(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ea.hasOwnProperty(a)?d!=null&&a==="onScroll"&&D("scroll",e):d!=null&&ta(e,a,d,h))}switch(s){case"input":Va(e),db(e,o,!1);break;case"textarea":Va(e),jb(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Sa(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?fb(e,!!o.multiple,a,!1):o.defaultValue!=null&&fb(e,!!o.multiple,o.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Bf)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break n;case"img":o=!0;break n;default:o=!1}}o&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return S(i),null;case 6:if(e&&i.stateNode!=null)Dj(e,i,e.memoizedProps,o);else{if(typeof o!="string"&&i.stateNode===null)throw Error(p(166));if(s=Hh(Gh.current),Hh(Eh.current),Gg(i)){if(o=i.stateNode,s=i.memoizedProps,o[Of]=i,(a=o.nodeValue!==s)&&(e=xg,e!==null))switch(e.tag){case 3:Af(o.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Af(o.nodeValue,s,(e.mode&1)!==0)}a&&(i.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[Of]=i,i.stateNode=o}return S(i),null;case 13:if(E(M),o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&yg!==null&&i.mode&1&&!(i.flags&128))Hg(),Ig(),i.flags|=98560,a=!1;else if(a=Gg(i),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(p(318));if(a=i.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[Of]=i}else Ig(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;S(i),a=!1}else zg!==null&&(Gj(zg),zg=null),a=!0;if(!a)return i.flags&65536?i:null}return i.flags&128?(i.lanes=s,i):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(i.child.flags|=8192,i.mode&1&&(e===null||M.current&1?T===0&&(T=3):uj())),i.updateQueue!==null&&(i.flags|=4),S(i),null);case 4:return Jh(),Bj(e,i),e===null&&sf(i.stateNode.containerInfo),S(i),null;case 10:return Rg(i.type._context),S(i),null;case 17:return Zf(i.type)&&$f(),S(i),null;case 19:if(E(M),a=i.memoizedState,a===null)return S(i),null;if(o=(i.flags&128)!==0,h=a.rendering,h===null)if(o)Ej(a,!1);else{if(T!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(h=Mh(e),h!==null){for(i.flags|=128,Ej(a,!1),o=h.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),i.subtreeFlags=0,o=s,s=i.child;s!==null;)a=s,e=o,a.flags&=14680066,h=a.alternate,h===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=h.childLanes,a.lanes=h.lanes,a.child=h.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=h.memoizedProps,a.memoizedState=h.memoizedState,a.updateQueue=h.updateQueue,a.type=h.type,e=h.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return G(M,M.current&1|2),i.child}e=e.sibling}a.tail!==null&&B()>Hj&&(i.flags|=128,o=!0,Ej(a,!1),i.lanes=4194304)}else{if(!o)if(e=Mh(h),e!==null){if(i.flags|=128,o=!0,s=e.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ej(a,!0),a.tail===null&&a.tailMode==="hidden"&&!h.alternate&&!I)return S(i),null}else 2*B()-a.renderingStartTime>Hj&&s!==1073741824&&(i.flags|=128,o=!0,Ej(a,!1),i.lanes=4194304);a.isBackwards?(h.sibling=i.child,i.child=h):(s=a.last,s!==null?s.sibling=h:i.child=h,a.last=h)}return a.tail!==null?(i=a.tail,a.rendering=i,a.tail=i.sibling,a.renderingStartTime=B(),i.sibling=null,s=M.current,G(M,o?s&1|2:s&1),i):(S(i),null);case 22:case 23:return Ij(),o=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(i.flags|=8192),o&&i.mode&1?gj&1073741824&&(S(i),i.subtreeFlags&6&&(i.flags|=8192)):S(i),null;case 24:return null;case 25:return null}throw Error(p(156,i.tag))}function Jj(e,i){switch(wg(i),i.tag){case 1:return Zf(i.type)&&$f(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Jh(),E(Wf),E(H),Oh(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 5:return Lh(i),null;case 13:if(E(M),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(p(340));Ig()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(i.type._context),null;case 22:case 23:return Ij(),null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Mj(e,i){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){W(e,i,o)}else s.current=null}function Nj(e,i,s){try{s()}catch(o){W(e,i,o)}}var Oj=!1;function Pj(e,i){if(Cf=dd,e=Me(),Ne(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else n:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{s.nodeType,a.nodeType}catch{s=null;break n}var h=0,_=-1,d=-1,j=0,nn=0,en=e,tn=null;e:for(;;){for(var ln;en!==s||c!==0&&en.nodeType!==3||(_=h+c),en!==a||o!==0&&en.nodeType!==3||(d=h+o),en.nodeType===3&&(h+=en.nodeValue.length),(ln=en.firstChild)!==null;)tn=en,en=ln;for(;;){if(en===e)break e;if(tn===s&&++j===c&&(_=h),tn===a&&++nn===o&&(d=h),(ln=en.nextSibling)!==null)break;en=tn,tn=en.parentNode}en=ln}s=_===-1||d===-1?null:{start:_,end:d}}else s=null}s=s||{start:0,end:0}}else s=null;for(Df={focusedElem:e,selectionRange:s},dd=!1,V=i;V!==null;)if(i=V,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,V=e;else for(;V!==null;){i=V;try{var un=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(un!==null){var cn=un.memoizedProps,mn=un.memoizedState,an=i.stateNode,rn=an.getSnapshotBeforeUpdate(i.elementType===i.type?cn:Lg(i.type,cn),mn);an.__reactInternalSnapshotBeforeUpdate=rn}break;case 3:var sn=i.stateNode.containerInfo;sn.nodeType===1?sn.textContent="":sn.nodeType===9&&sn.documentElement&&sn.removeChild(sn.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(fn){W(i,i.return,fn)}if(e=i.sibling,e!==null){e.return=i.return,V=e;break}V=i.return}return un=Oj,Oj=!1,un}function Qj(e,i,s){var o=i.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&e)===e){var a=c.destroy;c.destroy=void 0,a!==void 0&&Nj(i,s,a)}c=c.next}while(c!==o)}}function Rj(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.create;s.destroy=o()}s=s.next}while(s!==i)}}function Sj(e){var i=e.ref;if(i!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof i=="function"?i(e):i.current=e}}function Tj(e){var i=e.alternate;i!==null&&(e.alternate=null,Tj(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[Of],delete i[Pf],delete i[of],delete i[Qf],delete i[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uj(e){return e.tag===5||e.tag===3||e.tag===4}function Vj(e){n:for(;;){for(;e.sibling===null;){if(e.return===null||Uj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue n;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wj(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(e,i):s.insertBefore(e,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(e,s)):(i=s,i.appendChild(e)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Bf));else if(o!==4&&(e=e.child,e!==null))for(Wj(e,i,s),e=e.sibling;e!==null;)Wj(e,i,s),e=e.sibling}function Xj(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Xj(e,i,s),e=e.sibling;e!==null;)Xj(e,i,s),e=e.sibling}var X=null,Yj=!1;function Zj(e,i,s){for(s=s.child;s!==null;)ak(e,i,s),s=s.sibling}function ak(e,i,s){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,s)}catch{}switch(s.tag){case 5:U||Mj(s,i);case 6:var o=X,c=Yj;X=null,Zj(e,i,s),X=o,Yj=c,X!==null&&(Yj?(e=X,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):X.removeChild(s.stateNode));break;case 18:X!==null&&(Yj?(e=X,s=s.stateNode,e.nodeType===8?Kf(e.parentNode,s):e.nodeType===1&&Kf(e,s),bd(e)):Kf(X,s.stateNode));break;case 4:o=X,c=Yj,X=s.stateNode.containerInfo,Yj=!0,Zj(e,i,s),X=o,Yj=c;break;case 0:case 11:case 14:case 15:if(!U&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){c=o=o.next;do{var a=c,h=a.destroy;a=a.tag,h!==void 0&&(a&2||a&4)&&Nj(s,i,h),c=c.next}while(c!==o)}Zj(e,i,s);break;case 1:if(!U&&(Mj(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(_){W(s,i,_)}Zj(e,i,s);break;case 21:Zj(e,i,s);break;case 22:s.mode&1?(U=(o=U)||s.memoizedState!==null,Zj(e,i,s),U=o):Zj(e,i,s);break;default:Zj(e,i,s)}}function bk(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Lj),i.forEach(function(o){var c=ck.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}}function dk(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];try{var a=e,h=i,_=h;n:for(;_!==null;){switch(_.tag){case 5:X=_.stateNode,Yj=!1;break n;case 3:X=_.stateNode.containerInfo,Yj=!0;break n;case 4:X=_.stateNode.containerInfo,Yj=!0;break n}_=_.return}if(X===null)throw Error(p(160));ak(a,h,c),X=null,Yj=!1;var d=c.alternate;d!==null&&(d.return=null),c.return=null}catch(j){W(c,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ek(i,e),i=i.sibling}function ek(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dk(i,e),fk(e),o&4){try{Qj(3,e,e.return),Rj(3,e)}catch(cn){W(e,e.return,cn)}try{Qj(5,e,e.return)}catch(cn){W(e,e.return,cn)}}break;case 1:dk(i,e),fk(e),o&512&&s!==null&&Mj(s,s.return);break;case 5:if(dk(i,e),fk(e),o&512&&s!==null&&Mj(s,s.return),e.flags&32){var c=e.stateNode;try{ob(c,"")}catch(cn){W(e,e.return,cn)}}if(o&4&&(c=e.stateNode,c!=null)){var a=e.memoizedProps,h=s!==null?s.memoizedProps:a,_=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{_==="input"&&a.type==="radio"&&a.name!=null&&ab(c,a),vb(_,h);var j=vb(_,a);for(h=0;h<d.length;h+=2){var nn=d[h],en=d[h+1];nn==="style"?sb(c,en):nn==="dangerouslySetInnerHTML"?nb(c,en):nn==="children"?ob(c,en):ta(c,nn,en,j)}switch(_){case"input":bb(c,a);break;case"textarea":ib(c,a);break;case"select":var tn=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!a.multiple;var ln=a.value;ln!=null?fb(c,!!a.multiple,ln,!1):tn!==!!a.multiple&&(a.defaultValue!=null?fb(c,!!a.multiple,a.defaultValue,!0):fb(c,!!a.multiple,a.multiple?[]:"",!1))}c[Pf]=a}catch(cn){W(e,e.return,cn)}}break;case 6:if(dk(i,e),fk(e),o&4){if(e.stateNode===null)throw Error(p(162));c=e.stateNode,a=e.memoizedProps;try{c.nodeValue=a}catch(cn){W(e,e.return,cn)}}break;case 3:if(dk(i,e),fk(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{bd(i.containerInfo)}catch(cn){W(e,e.return,cn)}break;case 4:dk(i,e),fk(e);break;case 13:dk(i,e),fk(e),c=e.child,c.flags&8192&&(a=c.memoizedState!==null,c.stateNode.isHidden=a,!a||c.alternate!==null&&c.alternate.memoizedState!==null||(gk=B())),o&4&&bk(e);break;case 22:if(nn=s!==null&&s.memoizedState!==null,e.mode&1?(U=(j=U)||nn,dk(i,e),U=j):dk(i,e),fk(e),o&8192){if(j=e.memoizedState!==null,(e.stateNode.isHidden=j)&&!nn&&e.mode&1)for(V=e,nn=e.child;nn!==null;){for(en=V=nn;V!==null;){switch(tn=V,ln=tn.child,tn.tag){case 0:case 11:case 14:case 15:Qj(4,tn,tn.return);break;case 1:Mj(tn,tn.return);var un=tn.stateNode;if(typeof un.componentWillUnmount=="function"){o=tn,s=tn.return;try{i=o,un.props=i.memoizedProps,un.state=i.memoizedState,un.componentWillUnmount()}catch(cn){W(o,s,cn)}}break;case 5:Mj(tn,tn.return);break;case 22:if(tn.memoizedState!==null){hk(en);continue}}ln!==null?(ln.return=tn,V=ln):hk(en)}nn=nn.sibling}n:for(nn=null,en=e;;){if(en.tag===5){if(nn===null){nn=en;try{c=en.stateNode,j?(a=c.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(_=en.stateNode,d=en.memoizedProps.style,h=d!=null&&d.hasOwnProperty("display")?d.display:null,_.style.display=rb("display",h))}catch(cn){W(e,e.return,cn)}}}else if(en.tag===6){if(nn===null)try{en.stateNode.nodeValue=j?"":en.memoizedProps}catch(cn){W(e,e.return,cn)}}else if((en.tag!==22&&en.tag!==23||en.memoizedState===null||en===e)&&en.child!==null){en.child.return=en,en=en.child;continue}if(en===e)break n;for(;en.sibling===null;){if(en.return===null||en.return===e)break n;nn===en&&(nn=null),en=en.return}nn===en&&(nn=null),en.sibling.return=en.return,en=en.sibling}}break;case 19:dk(i,e),fk(e),o&4&&bk(e);break;case 21:break;default:dk(i,e),fk(e)}}function fk(e){var i=e.flags;if(i&2){try{n:{for(var s=e.return;s!==null;){if(Uj(s)){var o=s;break n}s=s.return}throw Error(p(160))}switch(o.tag){case 5:var c=o.stateNode;o.flags&32&&(ob(c,""),o.flags&=-33);var a=Vj(e);Xj(e,a,c);break;case 3:case 4:var h=o.stateNode.containerInfo,_=Vj(e);Wj(e,_,h);break;default:throw Error(p(161))}}catch(d){W(e,e.return,d)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ik(e,i,s){V=e,jk(e)}function jk(e,i,s){for(var o=(e.mode&1)!==0;V!==null;){var c=V,a=c.child;if(c.tag===22&&o){var h=c.memoizedState!==null||Kj;if(!h){var _=c.alternate,d=_!==null&&_.memoizedState!==null||U;_=Kj;var j=U;if(Kj=h,(U=d)&&!j)for(V=c;V!==null;)h=V,d=h.child,h.tag===22&&h.memoizedState!==null?kk(c):d!==null?(d.return=h,V=d):kk(c);for(;a!==null;)V=a,jk(a),a=a.sibling;V=c,Kj=_,U=j}lk(e)}else c.subtreeFlags&8772&&a!==null?(a.return=c,V=a):lk(e)}}function lk(e){for(;V!==null;){var i=V;if(i.flags&8772){var s=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:U||Rj(5,i);break;case 1:var o=i.stateNode;if(i.flags&4&&!U)if(s===null)o.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Lg(i.type,s.memoizedProps);o.componentDidUpdate(c,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=i.updateQueue;a!==null&&ih(i,a,o);break;case 3:var h=i.updateQueue;if(h!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}ih(i,h,s)}break;case 5:var _=i.stateNode;if(s===null&&i.flags&4){s=_;var d=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&s.focus();break;case"img":d.src&&(s.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var nn=j.memoizedState;if(nn!==null){var en=nn.dehydrated;en!==null&&bd(en)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||i.flags&512&&Sj(i)}catch(tn){W(i,i.return,tn)}}if(i===e){V=null;break}if(s=i.sibling,s!==null){s.return=i.return,V=s;break}V=i.return}}function hk(e){for(;V!==null;){var i=V;if(i===e){V=null;break}var s=i.sibling;if(s!==null){s.return=i.return,V=s;break}V=i.return}}function kk(e){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Rj(4,i)}catch(d){W(i,s,d)}break;case 1:var o=i.stateNode;if(typeof o.componentDidMount=="function"){var c=i.return;try{o.componentDidMount()}catch(d){W(i,c,d)}}var a=i.return;try{Sj(i)}catch(d){W(i,a,d)}break;case 5:var h=i.return;try{Sj(i)}catch(d){W(i,h,d)}}}catch(d){W(i,i.return,d)}if(i===e){V=null;break}var _=i.sibling;if(_!==null){_.return=i.return,V=_;break}V=i.return}}var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=1/0,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return K&6?B():Bk!==-1?Bk:Bk=B()}function lh(e){return e.mode&1?K&2&&Z!==0?Z&-Z:Kg.transition!==null?(Ck===0&&(Ck=yc()),Ck):(e=C,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function mh(e,i,s,o){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(e,s,o),(!(K&2)||e!==R)&&(e===R&&(!(K&2)&&(rk|=s),T===4&&Dk(e,Z)),Ek(e,o),s===1&&K===0&&!(i.mode&1)&&(Hj=B()+500,fg&&jg()))}function Ek(e,i){var s=e.callbackNode;wc(e,i);var o=uc(e,e===R?Z:0);if(o===0)s!==null&&bc(s),e.callbackNode=null,e.callbackPriority=0;else if(i=o&-o,e.callbackPriority!==i){if(s!=null&&bc(s),i===1)e.tag===0?ig(Fk.bind(null,e)):hg(Fk.bind(null,e)),Jf(function(){!(K&6)&&jg()}),s=null;else{switch(Dc(o)){case 1:s=fc;break;case 4:s=gc;break;case 16:s=hc;break;case 536870912:s=jc;break;default:s=hc}s=Gk(s,Hk.bind(null,e))}e.callbackPriority=i,e.callbackNode=s}}function Hk(e,i){if(Bk=-1,Ck=0,K&6)throw Error(p(327));var s=e.callbackNode;if(Ik()&&e.callbackNode!==s)return null;var o=uc(e,e===R?Z:0);if(o===0)return null;if(o&30||o&e.expiredLanes||i)i=Jk(e,o);else{i=o;var c=K;K|=2;var a=Kk();(R!==e||Z!==i)&&(vk=null,Hj=B()+500,Lk(e,i));do try{Mk();break}catch(_){Nk(e,_)}while(1);Qg(),nk.current=a,K=c,Y!==null?i=0:(R=null,Z=0,i=T)}if(i!==0){if(i===2&&(c=xc(e),c!==0&&(o=c,i=Ok(e,c))),i===1)throw s=qk,Lk(e,0),Dk(e,o),Ek(e,B()),s;if(i===6)Dk(e,o);else{if(c=e.current.alternate,!(o&30)&&!Pk(c)&&(i=Jk(e,o),i===2&&(a=xc(e),a!==0&&(o=a,i=Ok(e,a))),i===1))throw s=qk,Lk(e,0),Dk(e,o),Ek(e,B()),s;switch(e.finishedWork=c,e.finishedLanes=o,i){case 0:case 1:throw Error(p(345));case 2:Qk(e,uk,vk);break;case 3:if(Dk(e,o),(o&130023424)===o&&(i=gk+500-B(),10<i)){if(uc(e,0)!==0)break;if(c=e.suspendedLanes,(c&o)!==o){L(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Ff(Qk.bind(null,e,uk,vk),i);break}Qk(e,uk,vk);break;case 4:if(Dk(e,o),(o&4194240)===o)break;for(i=e.eventTimes,c=-1;0<o;){var h=31-oc(o);a=1<<h,h=i[h],h>c&&(c=h),o&=~a}if(o=c,o=B()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*mk(o/1960))-o,10<o){e.timeoutHandle=Ff(Qk.bind(null,e,uk,vk),o);break}Qk(e,uk,vk);break;case 5:Qk(e,uk,vk);break;default:throw Error(p(329))}}}return Ek(e,B()),e.callbackNode===s?Hk.bind(null,e):null}function Ok(e,i){var s=tk;return e.current.memoizedState.isDehydrated&&(Lk(e,i).flags|=256),e=Jk(e,i),e!==2&&(i=uk,uk=s,i!==null&&Gj(i)),e}function Gj(e){uk===null?uk=e:uk.push.apply(uk,e)}function Pk(e){for(var i=e;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var c=s[o],a=c.getSnapshot;c=c.value;try{if(!He(a(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dk(e,i){for(i&=~sk,i&=~rk,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var s=31-oc(i),o=1<<s;e[s]=-1,i&=~o}}function Fk(e){if(K&6)throw Error(p(327));Ik();var i=uc(e,0);if(!(i&1))return Ek(e,B()),null;var s=Jk(e,i);if(e.tag!==0&&s===2){var o=xc(e);o!==0&&(i=o,s=Ok(e,o))}if(s===1)throw s=qk,Lk(e,0),Dk(e,i),Ek(e,B()),s;if(s===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Qk(e,uk,vk),Ek(e,B()),null}function Rk(e,i){var s=K;K|=1;try{return e(i)}finally{K=s,K===0&&(Hj=B()+500,fg&&jg())}}function Sk(e){xk!==null&&xk.tag===0&&!(K&6)&&Ik();var i=K;K|=1;var s=pk.transition,o=C;try{if(pk.transition=null,C=1,e)return e()}finally{C=o,pk.transition=s,K=i,!(K&6)&&jg()}}function Ij(){gj=fj.current,E(fj)}function Lk(e,i){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Gf(s)),Y!==null)for(s=Y.return;s!==null;){var o=s;switch(wg(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&$f();break;case 3:Jh(),E(Wf),E(H),Oh();break;case 5:Lh(o);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(o.type._context);break;case 22:case 23:Ij()}s=s.return}if(R=e,Y=e=wh(e.current,null),Z=gj=i,T=0,qk=null,sk=rk=hh=0,uk=tk=null,Wg!==null){for(i=0;i<Wg.length;i++)if(s=Wg[i],o=s.interleaved,o!==null){s.interleaved=null;var c=o.next,a=s.pending;if(a!==null){var h=a.next;a.next=c,o.next=h}s.pending=o}Wg=null}return e}function Nk(e,i){do{var s=Y;try{if(Qg(),Ph.current=ai,Sh){for(var o=N.memoizedState;o!==null;){var c=o.queue;c!==null&&(c.pending=null),o=o.next}Sh=!1}if(Rh=0,P=O=N=null,Th=!1,Uh=0,ok.current=null,s===null||s.return===null){T=1,qk=i,Y=null;break}n:{var a=e,h=s.return,_=s,d=i;if(i=Z,_.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var j=d,nn=_,en=nn.tag;if(!(nn.mode&1)&&(en===0||en===11||en===15)){var tn=nn.alternate;tn?(nn.updateQueue=tn.updateQueue,nn.memoizedState=tn.memoizedState,nn.lanes=tn.lanes):(nn.updateQueue=null,nn.memoizedState=null)}var ln=Vi(h);if(ln!==null){ln.flags&=-257,Wi(ln,h,_,a,i),ln.mode&1&&Ti(a,j,i),i=ln,d=j;var un=i.updateQueue;if(un===null){var cn=new Set;cn.add(d),i.updateQueue=cn}else un.add(d);break n}else{if(!(i&1)){Ti(a,j,i),uj();break n}d=Error(p(426))}}else if(I&&_.mode&1){var mn=Vi(h);if(mn!==null){!(mn.flags&65536)&&(mn.flags|=256),Wi(mn,h,_,a,i),Jg(Ki(d,_));break n}}a=d=Ki(d,_),T!==4&&(T=2),tk===null?tk=[a]:tk.push(a),a=h;do{switch(a.tag){case 3:a.flags|=65536,i&=-i,a.lanes|=i;var an=Oi(a,d,i);fh(a,an);break n;case 1:_=d;var rn=a.type,sn=a.stateNode;if(!(a.flags&128)&&(typeof rn.getDerivedStateFromError=="function"||sn!==null&&typeof sn.componentDidCatch=="function"&&(Si===null||!Si.has(sn)))){a.flags|=65536,i&=-i,a.lanes|=i;var fn=Ri(a,_,i);fh(a,fn);break n}}a=a.return}while(a!==null)}Tk(s)}catch(dn){i=dn,Y===s&&s!==null&&(Y=s=s.return);continue}break}while(1)}function Kk(){var e=nk.current;return nk.current=ai,e===null?ai:e}function uj(){(T===0||T===3||T===2)&&(T=4),R===null||!(hh&268435455)&&!(rk&268435455)||Dk(R,Z)}function Jk(e,i){var s=K;K|=2;var o=Kk();(R!==e||Z!==i)&&(vk=null,Lk(e,i));do try{Uk();break}catch(c){Nk(e,c)}while(1);if(Qg(),K=s,nk.current=o,Y!==null)throw Error(p(261));return R=null,Z=0,T}function Uk(){for(;Y!==null;)Vk(Y)}function Mk(){for(;Y!==null&&!cc();)Vk(Y)}function Vk(e){var i=Wk(e.alternate,e,gj);e.memoizedProps=e.pendingProps,i===null?Tk(e):Y=i,ok.current=null}function Tk(e){var i=e;do{var s=i.alternate;if(e=i.return,i.flags&32768){if(s=Jj(s,i),s!==null){s.flags&=32767,Y=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{T=6,Y=null;return}}else if(s=Fj(s,i,gj),s!==null){Y=s;return}if(i=i.sibling,i!==null){Y=i;return}Y=i=e}while(i!==null);T===0&&(T=5)}function Qk(e,i,s){var o=C,c=pk.transition;try{pk.transition=null,C=1,Xk(e,i,s,o)}finally{pk.transition=c,C=o}return null}function Xk(e,i,s,o){do Ik();while(xk!==null);if(K&6)throw Error(p(327));s=e.finishedWork;var c=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var a=s.lanes|s.childLanes;if(Bc(e,a),e===R&&(Y=R=null,Z=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||wk||(wk=!0,Gk(hc,function(){return Ik(),null})),a=(s.flags&15990)!==0,s.subtreeFlags&15990||a){a=pk.transition,pk.transition=null;var h=C;C=1;var _=K;K|=4,ok.current=null,Pj(e,s),ek(s,e),Oe(Df),dd=!!Cf,Df=Cf=null,e.current=s,ik(s),dc(),K=_,C=h,pk.transition=a}else e.current=s;if(wk&&(wk=!1,xk=e,yk=c),a=e.pendingLanes,a===0&&(Si=null),mc(s.stateNode),Ek(e,B()),i!==null)for(o=e.onRecoverableError,s=0;s<i.length;s++)c=i[s],o(c.value,{componentStack:c.stack,digest:c.digest});if(Pi)throw Pi=!1,e=Qi,Qi=null,e;return yk&1&&e.tag!==0&&Ik(),a=e.pendingLanes,a&1?e===Ak?zk++:(zk=0,Ak=e):zk=0,jg(),null}function Ik(){if(xk!==null){var e=Dc(yk),i=pk.transition,s=C;try{if(pk.transition=null,C=16>e?16:e,xk===null)var o=!1;else{if(e=xk,xk=null,yk=0,K&6)throw Error(p(331));var c=K;for(K|=4,V=e.current;V!==null;){var a=V,h=a.child;if(V.flags&16){var _=a.deletions;if(_!==null){for(var d=0;d<_.length;d++){var j=_[d];for(V=j;V!==null;){var nn=V;switch(nn.tag){case 0:case 11:case 15:Qj(8,nn,a)}var en=nn.child;if(en!==null)en.return=nn,V=en;else for(;V!==null;){nn=V;var tn=nn.sibling,ln=nn.return;if(Tj(nn),nn===j){V=null;break}if(tn!==null){tn.return=ln,V=tn;break}V=ln}}}var un=a.alternate;if(un!==null){var cn=un.child;if(cn!==null){un.child=null;do{var mn=cn.sibling;cn.sibling=null,cn=mn}while(cn!==null)}}V=a}}if(a.subtreeFlags&2064&&h!==null)h.return=a,V=h;else n:for(;V!==null;){if(a=V,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qj(9,a,a.return)}var an=a.sibling;if(an!==null){an.return=a.return,V=an;break n}V=a.return}}var rn=e.current;for(V=rn;V!==null;){h=V;var sn=h.child;if(h.subtreeFlags&2064&&sn!==null)sn.return=h,V=sn;else n:for(h=rn;V!==null;){if(_=V,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Rj(9,_)}}catch(dn){W(_,_.return,dn)}if(_===h){V=null;break n}var fn=_.sibling;if(fn!==null){fn.return=_.return,V=fn;break n}V=_.return}}if(K=c,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,e)}catch{}o=!0}return o}finally{C=s,pk.transition=i}}return!1}function Yk(e,i,s){i=Ki(s,i),i=Oi(e,i,1),e=dh(e,i,1),i=L(),e!==null&&(Ac(e,1,i),Ek(e,i))}function W(e,i,s){if(e.tag===3)Yk(e,e,s);else for(;i!==null;){if(i.tag===3){Yk(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Si===null||!Si.has(o))){e=Ki(s,e),e=Ri(i,e,1),i=dh(i,e,1),e=L(),i!==null&&(Ac(i,1,e),Ek(i,e));break}}i=i.return}}function Ui(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),i=L(),e.pingedLanes|=e.suspendedLanes&s,R===e&&(Z&s)===s&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-gk?Lk(e,0):sk|=s),Ek(e,i)}function Zk(e,i){i===0&&(e.mode&1?(i=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):i=1);var s=L();e=Zg(e,i),e!==null&&(Ac(e,i,s),Ek(e,s))}function vj(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Zk(e,s)}function ck(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(p(314))}o!==null&&o.delete(i),Zk(e,s)}var Wk;Wk=function(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps||Wf.current)Ug=!0;else{if(!(e.lanes&s)&&!(i.flags&128))return Ug=!1,zj(e,i,s);Ug=!!(e.flags&131072)}else Ug=!1,I&&i.flags&1048576&&ug(i,ng,i.index);switch(i.lanes=0,i.tag){case 2:var o=i.type;jj(e,i),e=i.pendingProps;var c=Yf(i,H.current);Tg(i,s),c=Xh(null,i,o,e,c,s);var a=bi();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Zf(o)?(a=!0,cg(i)):a=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ah(i),c.updater=nh,i.stateNode=c,c._reactInternals=i,rh(i,o,e,s),i=kj(null,i,o,!0,a,s)):(i.tag=0,I&&a&&vg(i),Yi(null,i,c,s),i=i.child),i;case 16:o=i.elementType;n:{switch(jj(e,i),e=i.pendingProps,c=o._init,o=c(o._payload),i.type=o,c=i.tag=$k(o),e=Lg(o,e),c){case 0:i=dj(null,i,o,e,s);break n;case 1:i=ij(null,i,o,e,s);break n;case 11:i=Zi(null,i,o,e,s);break n;case 14:i=aj(null,i,o,Lg(o.type,e),s);break n}throw Error(p(306,o,""))}return i;case 0:return o=i.type,c=i.pendingProps,c=i.elementType===o?c:Lg(o,c),dj(e,i,o,c,s);case 1:return o=i.type,c=i.pendingProps,c=i.elementType===o?c:Lg(o,c),ij(e,i,o,c,s);case 3:n:{if(lj(i),e===null)throw Error(p(387));o=i.pendingProps,a=i.memoizedState,c=a.element,bh(e,i),gh(i,o,null,s);var h=i.memoizedState;if(o=h.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},i.updateQueue.baseState=a,i.memoizedState=a,i.flags&256){c=Ki(Error(p(423)),i),i=mj(e,i,o,s,c);break n}else if(o!==c){c=Ki(Error(p(424)),i),i=mj(e,i,o,s,c);break n}else for(yg=Lf(i.stateNode.containerInfo.firstChild),xg=i,I=!0,zg=null,s=Ch(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ig(),o===c){i=$i(e,i,s);break n}Yi(e,i,o,s)}i=i.child}return i;case 5:return Kh(i),e===null&&Eg(i),o=i.type,c=i.pendingProps,a=e!==null?e.memoizedProps:null,h=c.children,Ef(o,c)?h=null:a!==null&&Ef(o,a)&&(i.flags|=32),hj(e,i),Yi(e,i,h,s),i.child;case 6:return e===null&&Eg(i),null;case 13:return pj(e,i,s);case 4:return Ih(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Bh(i,null,o,s):Yi(e,i,o,s),i.child;case 11:return o=i.type,c=i.pendingProps,c=i.elementType===o?c:Lg(o,c),Zi(e,i,o,c,s);case 7:return Yi(e,i,i.pendingProps,s),i.child;case 8:return Yi(e,i,i.pendingProps.children,s),i.child;case 12:return Yi(e,i,i.pendingProps.children,s),i.child;case 10:n:{if(o=i.type._context,c=i.pendingProps,a=i.memoizedProps,h=c.value,G(Mg,o._currentValue),o._currentValue=h,a!==null)if(He(a.value,h)){if(a.children===c.children&&!Wf.current){i=$i(e,i,s);break n}}else for(a=i.child,a!==null&&(a.return=i);a!==null;){var _=a.dependencies;if(_!==null){h=a.child;for(var d=_.firstContext;d!==null;){if(d.context===o){if(a.tag===1){d=ch(-1,s&-s),d.tag=2;var j=a.updateQueue;if(j!==null){j=j.shared;var nn=j.pending;nn===null?d.next=d:(d.next=nn.next,nn.next=d),j.pending=d}}a.lanes|=s,d=a.alternate,d!==null&&(d.lanes|=s),Sg(a.return,s,i),_.lanes|=s;break}d=d.next}}else if(a.tag===10)h=a.type===i.type?null:a.child;else if(a.tag===18){if(h=a.return,h===null)throw Error(p(341));h.lanes|=s,_=h.alternate,_!==null&&(_.lanes|=s),Sg(h,s,i),h=a.sibling}else h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===i){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}Yi(e,i,c.children,s),i=i.child}return i;case 9:return c=i.type,o=i.pendingProps.children,Tg(i,s),c=Vg(c),o=o(c),i.flags|=1,Yi(e,i,o,s),i.child;case 14:return o=i.type,c=Lg(o,i.pendingProps),c=Lg(o.type,c),aj(e,i,o,c,s);case 15:return cj(e,i,i.type,i.pendingProps,s);case 17:return o=i.type,c=i.pendingProps,c=i.elementType===o?c:Lg(o,c),jj(e,i),i.tag=1,Zf(o)?(e=!0,cg(i)):e=!1,Tg(i,s),ph(i,o,c),rh(i,o,c,s),kj(null,i,o,!0,e,s);case 19:return yj(e,i,s);case 22:return ej(e,i,s)}throw Error(p(156,i.tag))};function Gk(e,i){return ac(e,i)}function al(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(e,i,s,o){return new al(e,i,s,o)}function bj(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $k(e){if(typeof e=="function")return bj(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ga)return 14}return 2}function wh(e,i){var s=e.alternate;return s===null?(s=Bg(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function yh(e,i,s,o,c,a){var h=2;if(o=e,typeof e=="function")bj(e)&&(h=1);else if(typeof e=="string")h=5;else n:switch(e){case ya:return Ah(s.children,c,a,i);case za:h=8,c|=8;break;case Aa:return e=Bg(12,s,i,c|2),e.elementType=Aa,e.lanes=a,e;case Ea:return e=Bg(13,s,i,c),e.elementType=Ea,e.lanes=a,e;case Fa:return e=Bg(19,s,i,c),e.elementType=Fa,e.lanes=a,e;case Ia:return qj(s,c,a,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:h=10;break n;case Ca:h=9;break n;case Da:h=11;break n;case Ga:h=14;break n;case Ha:h=16,o=null;break n}throw Error(p(130,e==null?e:typeof e,""))}return i=Bg(h,s,i,c),i.elementType=e,i.type=o,i.lanes=a,i}function Ah(e,i,s,o){return e=Bg(7,e,o,i),e.lanes=s,e}function qj(e,i,s,o){return e=Bg(22,e,o,i),e.elementType=Ia,e.lanes=s,e.stateNode={isHidden:!1},e}function xh(e,i,s){return e=Bg(6,e,null,i),e.lanes=s,e}function zh(e,i,s){return i=Bg(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function bl(e,i,s,o,c){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=o,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function cl(e,i,s,o,c,a,h,_,d){return e=new bl(e,i,s,_,d),i===1?(i=1,a===!0&&(i|=8)):i=0,a=Bg(3,null,null,i),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(a),e}function dl(e,i,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:o==null?null:""+o,children:e,containerInfo:i,implementation:s}}function el(e){if(!e)return Vf;e=e._reactInternals;n:{if(Vb(e)!==e||e.tag!==1)throw Error(p(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break n;case 1:if(Zf(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break n}}i=i.return}while(i!==null);throw Error(p(171))}if(e.tag===1){var s=e.type;if(Zf(s))return bg(e,s,i)}return i}function fl(e,i,s,o,c,a,h,_,d){return e=cl(s,o,!0,e,c,a,h,_,d),e.context=el(null),s=e.current,o=L(),c=lh(s),a=ch(o,c),a.callback=i??null,dh(s,a,c),e.current.lanes=c,Ac(e,c,o),Ek(e,o),e}function gl(e,i,s,o){var c=i.current,a=L(),h=lh(c);return s=el(s),i.context===null?i.context=s:i.pendingContext=s,i=ch(a,h),i.payload={element:e},o=o===void 0?null:o,o!==null&&(i.callback=o),e=dh(c,i,h),e!==null&&(mh(e,c,h,a),eh(e,c,h)),h}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function il(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function jl(e,i){il(e,i),(e=e.alternate)&&il(e,i)}function kl(){return null}var ll=typeof reportError=="function"?reportError:function(e){console.error(e)};function ml(e){this._internalRoot=e}nl.prototype.render=ml.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(p(409));gl(e,i,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Sk(function(){gl(null,e,null,null)}),i[uf]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Hc();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Qc.length&&i!==0&&i<Qc[s].priority;s++);Qc.splice(s,0,e),s===0&&Vc(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ql(){}function rl(e,i,s,o,c){if(c){if(typeof o=="function"){var a=o;o=function(){var j=hl(h);a.call(j)}}var h=fl(i,o,e,0,null,!1,!1,"",ql);return e._reactRootContainer=h,e[uf]=h.current,sf(e.nodeType===8?e.parentNode:e),Sk(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof o=="function"){var _=o;o=function(){var j=hl(d);_.call(j)}}var d=cl(e,0,!1,null,null,!1,!1,"",ql);return e._reactRootContainer=d,e[uf]=d.current,sf(e.nodeType===8?e.parentNode:e),Sk(function(){gl(i,d,s,o)}),d}function sl(e,i,s,o,c){var a=s._reactRootContainer;if(a){var h=a;if(typeof c=="function"){var _=c;c=function(){var d=hl(h);_.call(d)}}gl(i,h,e,c)}else h=rl(s,i,e,c,o);return hl(h)}Ec=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var s=tc(i.pendingLanes);s!==0&&(Cc(i,s|1),Ek(i,B()),!(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var o=Zg(e,1);if(o!==null){var c=L();mh(o,e,1,c)}}),jl(e,1)}};Fc=function(e){if(e.tag===13){var i=Zg(e,134217728);if(i!==null){var s=L();mh(i,e,134217728,s)}jl(e,134217728)}};Gc=function(e){if(e.tag===13){var i=lh(e),s=Zg(e,i);if(s!==null){var o=L();mh(s,e,i,o)}jl(e,i)}};Hc=function(){return C};Ic=function(e,i){var s=C;try{return C=e,i()}finally{C=s}};yb=function(e,i,s){switch(i){case"input":if(bb(e,s),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var c=Db(o);if(!c)throw Error(p(90));Wa(o),bb(o,c)}}}break;case"textarea":ib(e,s);break;case"select":i=s.value,i!=null&&fb(e,!!s.multiple,i,!1)}};Gb=Rk;Hb=Sk;var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zb(e),e===null?null:e.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;reactDom_production_min.createPortal=function(e,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(i))throw Error(p(200));return dl(e,i,null,s)};reactDom_production_min.createRoot=function(e,i){if(!ol(e))throw Error(p(299));var s=!1,o="",c=ll;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=cl(e,1,!1,null,null,s,!1,o,c),e[uf]=i.current,sf(e.nodeType===8?e.parentNode:e),new ml(i)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zb(i),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Sk(e)};reactDom_production_min.hydrate=function(e,i,s){if(!pl(i))throw Error(p(200));return sl(null,e,i,!0,s)};reactDom_production_min.hydrateRoot=function(e,i,s){if(!ol(e))throw Error(p(405));var o=s!=null&&s.hydratedSources||null,c=!1,a="",h=ll;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),i=fl(i,null,e,1,s??null,c,!1,a,h),e[uf]=i.current,sf(e),o)for(e=0;e<o.length;e++)s=o[e],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new nl(i)};reactDom_production_min.render=function(e,i,s){if(!pl(i))throw Error(p(200));return sl(null,e,i,!1,s)};reactDom_production_min.unmountComponentAtNode=function(e){if(!pl(e))throw Error(p(40));return e._reactRootContainer?(Sk(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,i,s,o){if(!pl(s))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return sl(e,i,s,!1,o)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";(function(e){function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}i(),e.exports=reactDom_production_min})(reactDom);var m=reactDomExports;client.createRoot=m.createRoot,client.hydrateRoot=m.hydrateRoot;const App$1="";var secureRandomExports={},secureRandom$1={get exports(){return secureRandomExports},set exports(e){secureRandomExports=e}};const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);(function(e){(function(i){e.exports?e.exports=s:i.secureRandom=s;function s(a,h){if(h=h||{type:"Array"},typeof process<"u"&&typeof process.pid=="number"&&process.versions&&process.versions.node)return o(a,h);var _=window.crypto||window.msCrypto;if(!_)throw new Error("Your browser does not support window.crypto.");return c(a,h)}function o(a,h){var _=require$$0,d=_.randomBytes(a);switch(h.type){case"Array":return[].slice.call(d);case"Buffer":return d;case"Uint8Array":for(var j=new Uint8Array(a),nn=0;nn<a;++nn)j[nn]=d.readUInt8(nn);return j;default:throw new Error(h.type+" is unsupported.")}}function c(a,h){var _=new Uint8Array(a),d=window.crypto||window.msCrypto;switch(d.getRandomValues(_),h.type){case"Array":return[].slice.call(_);case"Buffer":try{var j=new Buffer(1)}catch{throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")}return new Buffer(_);case"Uint8Array":return _;default:throw new Error(h.type+" is unsupported.")}}s.randomArray=function(a){return s(a,{type:"Array"})},s.randomUint8Array=function(a){return s(a,{type:"Uint8Array"})},s.randomBuffer=function(a){return s(a,{type:"Buffer"})}})(commonjsGlobal)})(secureRandom$1);const secureRandom=secureRandomExports;var sha256Exports={},sha256$1={get exports(){return sha256Exports},set exports(e){sha256Exports=e}};/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root=commonjsGlobal:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,i){return function(s){return new Sha256(i,!0).update(s)[e]()}},createMethod=function(e){var i=createOutputMethod("hex",e);NODE_JS&&(i=nodeWrap(i,e)),i.create=function(){return new Sha256(e)},i.update=function(c){return i.create().update(c)};for(var s=0;s<OUTPUT_TYPES.length;++s){var o=OUTPUT_TYPES[s];i[o]=createOutputMethod(o,e)}return i},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if(typeof e=="string")return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(e==null)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,i){return function(s,o){return new HmacSha256(s,i,!0).update(o)[e]()}},createHmacMethod=function(e){var i=createHmacOutputMethod("hex",e);i.create=function(c){return new HmacSha256(c,e)},i.update=function(c,a){return i.create(c).update(a)};for(var s=0;s<OUTPUT_TYPES.length;++s){var o=OUTPUT_TYPES[s];i[o]=createHmacOutputMethod(o,e)}return i};function Sha256(e,i){i?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Sha256.prototype.update=function(e){if(!this.finalized){var i,s=typeof e;if(s!=="string"){if(s==="object"){if(e===null)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw new Error(ERROR)}else throw new Error(ERROR);i=!0}for(var o,c=0,a,h=e.length,_=this.blocks;c<h;){if(this.hashed&&(this.hashed=!1,_[0]=this.block,_[16]=_[1]=_[2]=_[3]=_[4]=_[5]=_[6]=_[7]=_[8]=_[9]=_[10]=_[11]=_[12]=_[13]=_[14]=_[15]=0),i)for(a=this.start;c<h&&a<64;++c)_[a>>2]|=e[c]<<SHIFT[a++&3];else for(a=this.start;c<h&&a<64;++c)o=e.charCodeAt(c),o<128?_[a>>2]|=o<<SHIFT[a++&3]:o<2048?(_[a>>2]|=(192|o>>6)<<SHIFT[a++&3],_[a>>2]|=(128|o&63)<<SHIFT[a++&3]):o<55296||o>=57344?(_[a>>2]|=(224|o>>12)<<SHIFT[a++&3],_[a>>2]|=(128|o>>6&63)<<SHIFT[a++&3],_[a>>2]|=(128|o&63)<<SHIFT[a++&3]):(o=65536+((o&1023)<<10|e.charCodeAt(++c)&1023),_[a>>2]|=(240|o>>18)<<SHIFT[a++&3],_[a>>2]|=(128|o>>12&63)<<SHIFT[a++&3],_[a>>2]|=(128|o>>6&63)<<SHIFT[a++&3],_[a>>2]|=(128|o&63)<<SHIFT[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=_[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,i=this.lastByteIndex;e[16]=this.block,e[i>>2]|=EXTRA[i&3],this.block=e[16],i>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e=this.h0,i=this.h1,s=this.h2,o=this.h3,c=this.h4,a=this.h5,h=this.h6,_=this.h7,d=this.blocks,j,nn,en,tn,ln,un,cn,mn,an,rn,sn;for(j=16;j<64;++j)ln=d[j-15],nn=(ln>>>7|ln<<25)^(ln>>>18|ln<<14)^ln>>>3,ln=d[j-2],en=(ln>>>17|ln<<15)^(ln>>>19|ln<<13)^ln>>>10,d[j]=d[j-16]+nn+d[j-7]+en<<0;for(sn=i&s,j=0;j<64;j+=4)this.first?(this.is224?(mn=300032,ln=d[0]-1413257819,_=ln-150054599<<0,o=ln+24177077<<0):(mn=704751109,ln=d[0]-210244248,_=ln-1521486534<<0,o=ln+143694565<<0),this.first=!1):(nn=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),en=(c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7),mn=e&i,tn=mn^e&s^sn,cn=c&a^~c&h,ln=_+en+cn+K[j]+d[j],un=nn+tn,_=o+ln<<0,o=ln+un<<0),nn=(o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10),en=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7),an=o&e,tn=an^o&i^mn,cn=_&c^~_&a,ln=h+en+cn+K[j+1]+d[j+1],un=nn+tn,h=s+ln<<0,s=ln+un<<0,nn=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),en=(h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7),rn=s&o,tn=rn^s&e^an,cn=h&_^~h&c,ln=a+en+cn+K[j+2]+d[j+2],un=nn+tn,a=i+ln<<0,i=ln+un<<0,nn=(i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10),en=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),sn=i&s,tn=sn^i&o^rn,cn=a&h^~a&_,ln=c+en+cn+K[j+3]+d[j+3],un=nn+tn,c=e+ln<<0,e=ln+un<<0;this.h0=this.h0+e<<0,this.h1=this.h1+i<<0,this.h2=this.h2+s<<0,this.h3=this.h3+o<<0,this.h4=this.h4+c<<0,this.h5=this.h5+a<<0,this.h6=this.h6+h<<0,this.h7=this.h7+_<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,i=this.h1,s=this.h2,o=this.h3,c=this.h4,a=this.h5,h=this.h6,_=this.h7,d=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[e&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[i&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[s&15]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[o&15]+HEX_CHARS[c>>28&15]+HEX_CHARS[c>>24&15]+HEX_CHARS[c>>20&15]+HEX_CHARS[c>>16&15]+HEX_CHARS[c>>12&15]+HEX_CHARS[c>>8&15]+HEX_CHARS[c>>4&15]+HEX_CHARS[c&15]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[a&15]+HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[h&15];return this.is224||(d+=HEX_CHARS[_>>28&15]+HEX_CHARS[_>>24&15]+HEX_CHARS[_>>20&15]+HEX_CHARS[_>>16&15]+HEX_CHARS[_>>12&15]+HEX_CHARS[_>>8&15]+HEX_CHARS[_>>4&15]+HEX_CHARS[_&15]),d},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,i=this.h1,s=this.h2,o=this.h3,c=this.h4,a=this.h5,h=this.h6,_=this.h7,d=[e>>24&255,e>>16&255,e>>8&255,e&255,i>>24&255,i>>16&255,i>>8&255,i&255,s>>24&255,s>>16&255,s>>8&255,s&255,o>>24&255,o>>16&255,o>>8&255,o&255,c>>24&255,c>>16&255,c>>8&255,c&255,a>>24&255,a>>16&255,a>>8&255,a&255,h>>24&255,h>>16&255,h>>8&255,h&255];return this.is224||d.push(_>>24&255,_>>16&255,_>>8&255,_&255),d},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),i=new DataView(e);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),e};function HmacSha256(e,i,s){var o,c=typeof e;if(c==="string"){var a=[],h=e.length,_=0,d;for(o=0;o<h;++o)d=e.charCodeAt(o),d<128?a[_++]=d:d<2048?(a[_++]=192|d>>6,a[_++]=128|d&63):d<55296||d>=57344?(a[_++]=224|d>>12,a[_++]=128|d>>6&63,a[_++]=128|d&63):(d=65536+((d&1023)<<10|e.charCodeAt(++o)&1023),a[_++]=240|d>>18,a[_++]=128|d>>12&63,a[_++]=128|d>>6&63,a[_++]=128|d&63);e=a}else if(c==="object"){if(e===null)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw new Error(ERROR)}else throw new Error(ERROR);e.length>64&&(e=new Sha256(i,!0).update(e).array());var j=[],nn=[];for(o=0;o<64;++o){var en=e[o]||0;j[o]=92^en,nn[o]=54^en}Sha256.call(this,i,s),this.update(nn),this.oKeyPad=j,this.inner=!0,this.sharedMemory=s}HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224)})()})(sha256$1);const sha256=sha256Exports;var jsbnExports={},jsbn={get exports(){return jsbnExports},set exports(e){jsbnExports=e}};(function(e,i){(function(){var s,o=0xdeadbeefcafe,c=(o&16777215)==15715070;function a(g,b,$){g!=null&&(typeof g=="number"?this.fromNumber(g,b,$):b==null&&typeof g!="string"?this.fromString(g,256):this.fromString(g,b))}function h(){return new a(null)}function _(g,b,$,on,pn,hn){for(;--hn>=0;){var gn=b*this[g++]+$[on]+pn;pn=Math.floor(gn/67108864),$[on++]=gn&67108863}return pn}function d(g,b,$,on,pn,hn){for(var gn=b&32767,_n=b>>15;--hn>=0;){var An=this[g]&32767,In=this[g++]>>15,Cn=_n*An+In*gn;An=gn*An+((Cn&32767)<<15)+$[on]+(pn&1073741823),pn=(An>>>30)+(Cn>>>15)+_n*In+(pn>>>30),$[on++]=An&1073741823}return pn}function j(g,b,$,on,pn,hn){for(var gn=b&16383,_n=b>>14;--hn>=0;){var An=this[g]&16383,In=this[g++]>>14,Cn=_n*An+In*gn;An=gn*An+((Cn&16383)<<14)+$[on]+pn,pn=(An>>28)+(Cn>>14)+_n*In,$[on++]=An&268435455}return pn}var nn=typeof navigator<"u";nn&&c&&navigator.appName=="Microsoft Internet Explorer"?(a.prototype.am=d,s=30):nn&&c&&navigator.appName!="Netscape"?(a.prototype.am=_,s=26):(a.prototype.am=j,s=28),a.prototype.DB=s,a.prototype.DM=(1<<s)-1,a.prototype.DV=1<<s;var en=52;a.prototype.FV=Math.pow(2,en),a.prototype.F1=en-s,a.prototype.F2=2*s-en;var tn="0123456789abcdefghijklmnopqrstuvwxyz",ln=new Array,un,cn;for(un="0".charCodeAt(0),cn=0;cn<=9;++cn)ln[un++]=cn;for(un="a".charCodeAt(0),cn=10;cn<36;++cn)ln[un++]=cn;for(un="A".charCodeAt(0),cn=10;cn<36;++cn)ln[un++]=cn;function mn(g){return tn.charAt(g)}function an(g,b){var $=ln[g.charCodeAt(b)];return $??-1}function rn(g){for(var b=this.t-1;b>=0;--b)g[b]=this[b];g.t=this.t,g.s=this.s}function sn(g){this.t=1,this.s=g<0?-1:0,g>0?this[0]=g:g<-1?this[0]=g+this.DV:this.t=0}function fn(g){var b=h();return b.fromInt(g),b}function dn(g,b){var $;if(b==16)$=4;else if(b==8)$=3;else if(b==256)$=8;else if(b==2)$=1;else if(b==32)$=5;else if(b==4)$=2;else{this.fromRadix(g,b);return}this.t=0,this.s=0;for(var on=g.length,pn=!1,hn=0;--on>=0;){var gn=$==8?g[on]&255:an(g,on);if(gn<0){g.charAt(on)=="-"&&(pn=!0);continue}pn=!1,hn==0?this[this.t++]=gn:hn+$>this.DB?(this[this.t-1]|=(gn&(1<<this.DB-hn)-1)<<hn,this[this.t++]=gn>>this.DB-hn):this[this.t-1]|=gn<<hn,hn+=$,hn>=this.DB&&(hn-=this.DB)}$==8&&g[0]&128&&(this.s=-1,hn>0&&(this[this.t-1]|=(1<<this.DB-hn)-1<<hn)),this.clamp(),pn&&a.ZERO.subTo(this,this)}function En(){for(var g=this.s&this.DM;this.t>0&&this[this.t-1]==g;)--this.t}function yn(g){if(this.s<0)return"-"+this.negate().toString(g);var b;if(g==16)b=4;else if(g==8)b=3;else if(g==2)b=1;else if(g==32)b=5;else if(g==4)b=2;else return this.toRadix(g);var $=(1<<b)-1,on,pn=!1,hn="",gn=this.t,_n=this.DB-gn*this.DB%b;if(gn-- >0)for(_n<this.DB&&(on=this[gn]>>_n)>0&&(pn=!0,hn=mn(on));gn>=0;)_n<b?(on=(this[gn]&(1<<_n)-1)<<b-_n,on|=this[--gn]>>(_n+=this.DB-b)):(on=this[gn]>>(_n-=b)&$,_n<=0&&(_n+=this.DB,--gn)),on>0&&(pn=!0),pn&&(hn+=mn(on));return pn?hn:"0"}function bn(){var g=h();return a.ZERO.subTo(this,g),g}function Rn(){return this.s<0?this.negate():this}function xn(g){var b=this.s-g.s;if(b!=0)return b;var $=this.t;if(b=$-g.t,b!=0)return this.s<0?-b:b;for(;--$>=0;)if((b=this[$]-g[$])!=0)return b;return 0}function kn(g){var b=1,$;return($=g>>>16)!=0&&(g=$,b+=16),($=g>>8)!=0&&(g=$,b+=8),($=g>>4)!=0&&(g=$,b+=4),($=g>>2)!=0&&(g=$,b+=2),($=g>>1)!=0&&(g=$,b+=1),b}function Ln(){return this.t<=0?0:this.DB*(this.t-1)+kn(this[this.t-1]^this.s&this.DM)}function Kn(g,b){var $;for($=this.t-1;$>=0;--$)b[$+g]=this[$];for($=g-1;$>=0;--$)b[$]=0;b.t=this.t+g,b.s=this.s}function qn(g,b){for(var $=g;$<this.t;++$)b[$-g]=this[$];b.t=Math.max(this.t-g,0),b.s=this.s}function Yn(g,b){var $=g%this.DB,on=this.DB-$,pn=(1<<on)-1,hn=Math.floor(g/this.DB),gn=this.s<<$&this.DM,_n;for(_n=this.t-1;_n>=0;--_n)b[_n+hn+1]=this[_n]>>on|gn,gn=(this[_n]&pn)<<$;for(_n=hn-1;_n>=0;--_n)b[_n]=0;b[hn]=gn,b.t=this.t+hn+1,b.s=this.s,b.clamp()}function Qn(g,b){b.s=this.s;var $=Math.floor(g/this.DB);if($>=this.t){b.t=0;return}var on=g%this.DB,pn=this.DB-on,hn=(1<<on)-1;b[0]=this[$]>>on;for(var gn=$+1;gn<this.t;++gn)b[gn-$-1]|=(this[gn]&hn)<<pn,b[gn-$]=this[gn]>>on;on>0&&(b[this.t-$-1]|=(this.s&hn)<<pn),b.t=this.t-$,b.clamp()}function Xn(g,b){for(var $=0,on=0,pn=Math.min(g.t,this.t);$<pn;)on+=this[$]-g[$],b[$++]=on&this.DM,on>>=this.DB;if(g.t<this.t){for(on-=g.s;$<this.t;)on+=this[$],b[$++]=on&this.DM,on>>=this.DB;on+=this.s}else{for(on+=this.s;$<g.t;)on-=g[$],b[$++]=on&this.DM,on>>=this.DB;on-=g.s}b.s=on<0?-1:0,on<-1?b[$++]=this.DV+on:on>0&&(b[$++]=on),b.t=$,b.clamp()}function vn(g,b){var $=this.abs(),on=g.abs(),pn=$.t;for(b.t=pn+on.t;--pn>=0;)b[pn]=0;for(pn=0;pn<on.t;++pn)b[pn+$.t]=$.am(0,on[pn],b,pn,0,$.t);b.s=0,b.clamp(),this.s!=g.s&&a.ZERO.subTo(b,b)}function Sn(g){for(var b=this.abs(),$=g.t=2*b.t;--$>=0;)g[$]=0;for($=0;$<b.t-1;++$){var on=b.am($,b[$],g,2*$,0,1);(g[$+b.t]+=b.am($+1,2*b[$],g,2*$+1,on,b.t-$-1))>=b.DV&&(g[$+b.t]-=b.DV,g[$+b.t+1]=1)}g.t>0&&(g[g.t-1]+=b.am($,b[$],g,2*$,0,1)),g.s=0,g.clamp()}function wn(g,b,$){var on=g.abs();if(!(on.t<=0)){var pn=this.abs();if(pn.t<on.t){b!=null&&b.fromInt(0),$!=null&&this.copyTo($);return}$==null&&($=h());var hn=h(),gn=this.s,_n=g.s,An=this.DB-kn(on[on.t-1]);An>0?(on.lShiftTo(An,hn),pn.lShiftTo(An,$)):(on.copyTo(hn),pn.copyTo($));var In=hn.t,Cn=hn[In-1];if(Cn!=0){var Nn=Cn*(1<<this.F1)+(In>1?hn[In-2]>>this.F2:0),Vn=this.FV/Nn,et=(1<<this.F1)/Nn,Mn=1<<this.F2,Un=$.t,tt=Un-In,Jn=b??h();for(hn.dlShiftTo(tt,Jn),$.compareTo(Jn)>=0&&($[$.t++]=1,$.subTo(Jn,$)),a.ONE.dlShiftTo(In,Jn),Jn.subTo(hn,hn);hn.t<In;)hn[hn.t++]=0;for(;--tt>=0;){var ot=$[--Un]==Cn?this.DM:Math.floor($[Un]*Vn+($[Un-1]+Mn)*et);if(($[Un]+=hn.am(0,ot,$,tt,0,In))<ot)for(hn.dlShiftTo(tt,Jn),$.subTo(Jn,$);$[Un]<--ot;)$.subTo(Jn,$)}b!=null&&($.drShiftTo(In,b),gn!=_n&&a.ZERO.subTo(b,b)),$.t=In,$.clamp(),An>0&&$.rShiftTo(An,$),gn<0&&a.ZERO.subTo($,$)}}}function Dn(g){var b=h();return this.abs().divRemTo(g,null,b),this.s<0&&b.compareTo(a.ZERO)>0&&g.subTo(b,b),b}function Tn(g){this.m=g}function $n(g){return g.s<0||g.compareTo(this.m)>=0?g.mod(this.m):g}function Fn(g){return g}function Zn(g){g.divRemTo(this.m,null,g)}function Hn(g,b,$){g.multiplyTo(b,$),this.reduce($)}function Gn(g,b){g.squareTo(b),this.reduce(b)}Tn.prototype.convert=$n,Tn.prototype.revert=Fn,Tn.prototype.reduce=Zn,Tn.prototype.mulTo=Hn,Tn.prototype.sqrTo=Gn;function dt(){if(this.t<1)return 0;var g=this[0];if(!(g&1))return 0;var b=g&3;return b=b*(2-(g&15)*b)&15,b=b*(2-(g&255)*b)&255,b=b*(2-((g&65535)*b&65535))&65535,b=b*(2-g*b%this.DV)%this.DV,b>0?this.DV-b:-b}function zn(g){this.m=g,this.mp=g.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<g.DB-15)-1,this.mt2=2*g.t}function gt(g){var b=h();return g.abs().dlShiftTo(this.m.t,b),b.divRemTo(this.m,null,b),g.s<0&&b.compareTo(a.ZERO)>0&&this.m.subTo(b,b),b}function mt(g){var b=h();return g.copyTo(b),this.reduce(b),b}function _t(g){for(;g.t<=this.mt2;)g[g.t++]=0;for(var b=0;b<this.m.t;++b){var $=g[b]&32767,on=$*this.mpl+(($*this.mph+(g[b]>>15)*this.mpl&this.um)<<15)&g.DM;for($=b+this.m.t,g[$]+=this.m.am(0,on,g,b,0,this.m.t);g[$]>=g.DV;)g[$]-=g.DV,g[++$]++}g.clamp(),g.drShiftTo(this.m.t,g),g.compareTo(this.m)>=0&&g.subTo(this.m,g)}function yt(g,b){g.squareTo(b),this.reduce(b)}function vt(g,b,$){g.multiplyTo(b,$),this.reduce($)}zn.prototype.convert=gt,zn.prototype.revert=mt,zn.prototype.reduce=_t,zn.prototype.mulTo=vt,zn.prototype.sqrTo=yt;function Et(){return(this.t>0?this[0]&1:this.s)==0}function bt(g,b){if(g>4294967295||g<1)return a.ONE;var $=h(),on=h(),pn=b.convert(this),hn=kn(g)-1;for(pn.copyTo($);--hn>=0;)if(b.sqrTo($,on),(g&1<<hn)>0)b.mulTo(on,pn,$);else{var gn=$;$=on,on=gn}return b.revert($)}function St(g,b){var $;return g<256||b.isEven()?$=new Tn(b):$=new zn(b),this.exp(g,$)}a.prototype.copyTo=rn,a.prototype.fromInt=sn,a.prototype.fromString=dn,a.prototype.clamp=En,a.prototype.dlShiftTo=Kn,a.prototype.drShiftTo=qn,a.prototype.lShiftTo=Yn,a.prototype.rShiftTo=Qn,a.prototype.subTo=Xn,a.prototype.multiplyTo=vn,a.prototype.squareTo=Sn,a.prototype.divRemTo=wn,a.prototype.invDigit=dt,a.prototype.isEven=Et,a.prototype.exp=bt,a.prototype.toString=yn,a.prototype.negate=bn,a.prototype.abs=Rn,a.prototype.compareTo=xn,a.prototype.bitLength=Ln,a.prototype.mod=Dn,a.prototype.modPowInt=St,a.ZERO=fn(0),a.ONE=fn(1);function xt(){var g=h();return this.copyTo(g),g}function wt(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Rt(){return this.t==0?this.s:this[0]<<24>>24}function Tt(){return this.t==0?this.s:this[0]<<16>>16}function At(g){return Math.floor(Math.LN2*this.DB/Math.log(g))}function Dt(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function kt(g){if(g==null&&(g=10),this.signum()==0||g<2||g>36)return"0";var b=this.chunkSize(g),$=Math.pow(g,b),on=fn($),pn=h(),hn=h(),gn="";for(this.divRemTo(on,pn,hn);pn.signum()>0;)gn=($+hn.intValue()).toString(g).substr(1)+gn,pn.divRemTo(on,pn,hn);return hn.intValue().toString(g)+gn}function Ot(g,b){this.fromInt(0),b==null&&(b=10);for(var $=this.chunkSize(b),on=Math.pow(b,$),pn=!1,hn=0,gn=0,_n=0;_n<g.length;++_n){var An=an(g,_n);if(An<0){g.charAt(_n)=="-"&&this.signum()==0&&(pn=!0);continue}gn=b*gn+An,++hn>=$&&(this.dMultiply(on),this.dAddOffset(gn,0),hn=0,gn=0)}hn>0&&(this.dMultiply(Math.pow(b,hn)),this.dAddOffset(gn,0)),pn&&a.ZERO.subTo(this,this)}function It(g,b,$){if(typeof b=="number")if(g<2)this.fromInt(1);else for(this.fromNumber(g,$),this.testBit(g-1)||this.bitwiseTo(a.ONE.shiftLeft(g-1),rt,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>g&&this.subTo(a.ONE.shiftLeft(g-1),this);else{var on=new Array,pn=g&7;on.length=(g>>3)+1,b.nextBytes(on),pn>0?on[0]&=(1<<pn)-1:on[0]=0,this.fromString(on,256)}}function Bt(){var g=this.t,b=new Array;b[0]=this.s;var $=this.DB-g*this.DB%8,on,pn=0;if(g-- >0)for($<this.DB&&(on=this[g]>>$)!=(this.s&this.DM)>>$&&(b[pn++]=on|this.s<<this.DB-$);g>=0;)$<8?(on=(this[g]&(1<<$)-1)<<8-$,on|=this[--g]>>($+=this.DB-8)):(on=this[g]>>($-=8)&255,$<=0&&($+=this.DB,--g)),on&128&&(on|=-256),pn==0&&(this.s&128)!=(on&128)&&++pn,(pn>0||on!=this.s)&&(b[pn++]=on);return b}function jt(g){return this.compareTo(g)==0}function Nt(g){return this.compareTo(g)<0?this:g}function Ct(g){return this.compareTo(g)>0?this:g}function Pt(g,b,$){var on,pn,hn=Math.min(g.t,this.t);for(on=0;on<hn;++on)$[on]=b(this[on],g[on]);if(g.t<this.t){for(pn=g.s&this.DM,on=hn;on<this.t;++on)$[on]=b(this[on],pn);$.t=this.t}else{for(pn=this.s&this.DM,on=hn;on<g.t;++on)$[on]=b(pn,g[on]);$.t=g.t}$.s=b(this.s,g.s),$.clamp()}function Mt(g,b){return g&b}function Ut(g){var b=h();return this.bitwiseTo(g,Mt,b),b}function rt(g,b){return g|b}function Lt(g){var b=h();return this.bitwiseTo(g,rt,b),b}function at(g,b){return g^b}function Kt(g){var b=h();return this.bitwiseTo(g,at,b),b}function lt(g,b){return g&~b}function Ft(g){var b=h();return this.bitwiseTo(g,lt,b),b}function Ht(){for(var g=h(),b=0;b<this.t;++b)g[b]=this.DM&~this[b];return g.t=this.t,g.s=~this.s,g}function Vt(g){var b=h();return g<0?this.rShiftTo(-g,b):this.lShiftTo(g,b),b}function Jt(g){var b=h();return g<0?this.lShiftTo(-g,b):this.rShiftTo(g,b),b}function zt(g){if(g==0)return-1;var b=0;return g&65535||(g>>=16,b+=16),g&255||(g>>=8,b+=8),g&15||(g>>=4,b+=4),g&3||(g>>=2,b+=2),g&1||++b,b}function Wt(){for(var g=0;g<this.t;++g)if(this[g]!=0)return g*this.DB+zt(this[g]);return this.s<0?this.t*this.DB:-1}function qt(g){for(var b=0;g!=0;)g&=g-1,++b;return b}function $t(){for(var g=0,b=this.s&this.DM,$=0;$<this.t;++$)g+=qt(this[$]^b);return g}function Gt(g){var b=Math.floor(g/this.DB);return b>=this.t?this.s!=0:(this[b]&1<<g%this.DB)!=0}function Yt(g,b){var $=a.ONE.shiftLeft(g);return this.bitwiseTo($,b,$),$}function Qt(g){return this.changeBit(g,rt)}function Xt(g){return this.changeBit(g,lt)}function Zt(g){return this.changeBit(g,at)}function nr(g,b){for(var $=0,on=0,pn=Math.min(g.t,this.t);$<pn;)on+=this[$]+g[$],b[$++]=on&this.DM,on>>=this.DB;if(g.t<this.t){for(on+=g.s;$<this.t;)on+=this[$],b[$++]=on&this.DM,on>>=this.DB;on+=this.s}else{for(on+=this.s;$<g.t;)on+=g[$],b[$++]=on&this.DM,on>>=this.DB;on+=g.s}b.s=on<0?-1:0,on>0?b[$++]=on:on<-1&&(b[$++]=this.DV+on),b.t=$,b.clamp()}function er(g){var b=h();return this.addTo(g,b),b}function tr(g){var b=h();return this.subTo(g,b),b}function rr(g){var b=h();return this.multiplyTo(g,b),b}function ir(){var g=h();return this.squareTo(g),g}function sr(g){var b=h();return this.divRemTo(g,b,null),b}function or(g){var b=h();return this.divRemTo(g,null,b),b}function ar(g){var b=h(),$=h();return this.divRemTo(g,b,$),new Array(b,$)}function lr(g){this[this.t]=this.am(0,g-1,this,0,0,this.t),++this.t,this.clamp()}function ur(g,b){if(g!=0){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=g;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}}function _e(){}function ut(g){return g}function cr(g,b,$){g.multiplyTo(b,$)}function fr(g,b){g.squareTo(b)}_e.prototype.convert=ut,_e.prototype.revert=ut,_e.prototype.mulTo=cr,_e.prototype.sqrTo=fr;function pr(g){return this.exp(g,new _e)}function hr(g,b,$){var on=Math.min(this.t+g.t,b);for($.s=0,$.t=on;on>0;)$[--on]=0;var pn;for(pn=$.t-this.t;on<pn;++on)$[on+this.t]=this.am(0,g[on],$,on,0,this.t);for(pn=Math.min(g.t,b);on<pn;++on)this.am(0,g[on],$,on,0,b-on);$.clamp()}function dr(g,b,$){--b;var on=$.t=this.t+g.t-b;for($.s=0;--on>=0;)$[on]=0;for(on=Math.max(b-this.t,0);on<g.t;++on)$[this.t+on-b]=this.am(b-on,g[on],$,0,0,this.t+on-b);$.clamp(),$.drShiftTo(1,$)}function Wn(g){this.r2=h(),this.q3=h(),a.ONE.dlShiftTo(2*g.t,this.r2),this.mu=this.r2.divide(g),this.m=g}function gr(g){if(g.s<0||g.t>2*this.m.t)return g.mod(this.m);if(g.compareTo(this.m)<0)return g;var b=h();return g.copyTo(b),this.reduce(b),b}function mr(g){return g}function _r(g){for(g.drShiftTo(this.m.t-1,this.r2),g.t>this.m.t+1&&(g.t=this.m.t+1,g.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);g.compareTo(this.r2)<0;)g.dAddOffset(1,this.m.t+1);for(g.subTo(this.r2,g);g.compareTo(this.m)>=0;)g.subTo(this.m,g)}function yr(g,b){g.squareTo(b),this.reduce(b)}function vr(g,b,$){g.multiplyTo(b,$),this.reduce($)}Wn.prototype.convert=gr,Wn.prototype.revert=mr,Wn.prototype.reduce=_r,Wn.prototype.mulTo=vr,Wn.prototype.sqrTo=yr;function Er(g,b){var $=g.bitLength(),on,pn=fn(1),hn;if($<=0)return pn;$<18?on=1:$<48?on=3:$<144?on=4:$<768?on=5:on=6,$<8?hn=new Tn(b):b.isEven()?hn=new Wn(b):hn=new zn(b);var gn=new Array,_n=3,An=on-1,In=(1<<on)-1;if(gn[1]=hn.convert(this),on>1){var Cn=h();for(hn.sqrTo(gn[1],Cn);_n<=In;)gn[_n]=h(),hn.mulTo(Cn,gn[_n-2],gn[_n]),_n+=2}var Nn=g.t-1,Vn,et=!0,Mn=h(),Un;for($=kn(g[Nn])-1;Nn>=0;){for($>=An?Vn=g[Nn]>>$-An&In:(Vn=(g[Nn]&(1<<$+1)-1)<<An-$,Nn>0&&(Vn|=g[Nn-1]>>this.DB+$-An)),_n=on;!(Vn&1);)Vn>>=1,--_n;if(($-=_n)<0&&($+=this.DB,--Nn),et)gn[Vn].copyTo(pn),et=!1;else{for(;_n>1;)hn.sqrTo(pn,Mn),hn.sqrTo(Mn,pn),_n-=2;_n>0?hn.sqrTo(pn,Mn):(Un=pn,pn=Mn,Mn=Un),hn.mulTo(Mn,gn[Vn],pn)}for(;Nn>=0&&!(g[Nn]&1<<$);)hn.sqrTo(pn,Mn),Un=pn,pn=Mn,Mn=Un,--$<0&&($=this.DB-1,--Nn)}return hn.revert(pn)}function br(g){var b=this.s<0?this.negate():this.clone(),$=g.s<0?g.negate():g.clone();if(b.compareTo($)<0){var on=b;b=$,$=on}var pn=b.getLowestSetBit(),hn=$.getLowestSetBit();if(hn<0)return b;for(pn<hn&&(hn=pn),hn>0&&(b.rShiftTo(hn,b),$.rShiftTo(hn,$));b.signum()>0;)(pn=b.getLowestSetBit())>0&&b.rShiftTo(pn,b),(pn=$.getLowestSetBit())>0&&$.rShiftTo(pn,$),b.compareTo($)>=0?(b.subTo($,b),b.rShiftTo(1,b)):($.subTo(b,$),$.rShiftTo(1,$));return hn>0&&$.lShiftTo(hn,$),$}function Sr(g){if(g<=0)return 0;var b=this.DV%g,$=this.s<0?g-1:0;if(this.t>0)if(b==0)$=this[0]%g;else for(var on=this.t-1;on>=0;--on)$=(b*$+this[on])%g;return $}function xr(g){var b=g.isEven();if(this.isEven()&&b||g.signum()==0)return a.ZERO;for(var $=g.clone(),on=this.clone(),pn=fn(1),hn=fn(0),gn=fn(0),_n=fn(1);$.signum()!=0;){for(;$.isEven();)$.rShiftTo(1,$),b?((!pn.isEven()||!hn.isEven())&&(pn.addTo(this,pn),hn.subTo(g,hn)),pn.rShiftTo(1,pn)):hn.isEven()||hn.subTo(g,hn),hn.rShiftTo(1,hn);for(;on.isEven();)on.rShiftTo(1,on),b?((!gn.isEven()||!_n.isEven())&&(gn.addTo(this,gn),_n.subTo(g,_n)),gn.rShiftTo(1,gn)):_n.isEven()||_n.subTo(g,_n),_n.rShiftTo(1,_n);$.compareTo(on)>=0?($.subTo(on,$),b&&pn.subTo(gn,pn),hn.subTo(_n,hn)):(on.subTo($,on),b&&gn.subTo(pn,gn),_n.subTo(hn,_n))}if(on.compareTo(a.ONE)!=0)return a.ZERO;if(_n.compareTo(g)>=0)return _n.subtract(g);if(_n.signum()<0)_n.addTo(g,_n);else return _n;return _n.signum()<0?_n.add(g):_n}var Bn=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],wr=(1<<26)/Bn[Bn.length-1];function Rr(g){var b,$=this.abs();if($.t==1&&$[0]<=Bn[Bn.length-1]){for(b=0;b<Bn.length;++b)if($[0]==Bn[b])return!0;return!1}if($.isEven())return!1;for(b=1;b<Bn.length;){for(var on=Bn[b],pn=b+1;pn<Bn.length&&on<wr;)on*=Bn[pn++];for(on=$.modInt(on);b<pn;)if(on%Bn[b++]==0)return!1}return $.millerRabin(g)}function Tr(g){var b=this.subtract(a.ONE),$=b.getLowestSetBit();if($<=0)return!1;var on=b.shiftRight($);g=g+1>>1,g>Bn.length&&(g=Bn.length);for(var pn=h(),hn=0;hn<g;++hn){pn.fromInt(Bn[Math.floor(Math.random()*Bn.length)]);var gn=pn.modPow(on,this);if(gn.compareTo(a.ONE)!=0&&gn.compareTo(b)!=0){for(var _n=1;_n++<$&&gn.compareTo(b)!=0;)if(gn=gn.modPowInt(2,this),gn.compareTo(a.ONE)==0)return!1;if(gn.compareTo(b)!=0)return!1}}return!0}a.prototype.chunkSize=At,a.prototype.toRadix=kt,a.prototype.fromRadix=Ot,a.prototype.fromNumber=It,a.prototype.bitwiseTo=Pt,a.prototype.changeBit=Yt,a.prototype.addTo=nr,a.prototype.dMultiply=lr,a.prototype.dAddOffset=ur,a.prototype.multiplyLowerTo=hr,a.prototype.multiplyUpperTo=dr,a.prototype.modInt=Sr,a.prototype.millerRabin=Tr,a.prototype.clone=xt,a.prototype.intValue=wt,a.prototype.byteValue=Rt,a.prototype.shortValue=Tt,a.prototype.signum=Dt,a.prototype.toByteArray=Bt,a.prototype.equals=jt,a.prototype.min=Nt,a.prototype.max=Ct,a.prototype.and=Ut,a.prototype.or=Lt,a.prototype.xor=Kt,a.prototype.andNot=Ft,a.prototype.not=Ht,a.prototype.shiftLeft=Vt,a.prototype.shiftRight=Jt,a.prototype.getLowestSetBit=Wt,a.prototype.bitCount=$t,a.prototype.testBit=Gt,a.prototype.setBit=Qt,a.prototype.clearBit=Xt,a.prototype.flipBit=Zt,a.prototype.add=er,a.prototype.subtract=tr,a.prototype.multiply=rr,a.prototype.divide=sr,a.prototype.remainder=or,a.prototype.divideAndRemainder=ar,a.prototype.modPow=Er,a.prototype.modInverse=xr,a.prototype.pow=pr,a.prototype.gcd=br,a.prototype.isProbablePrime=Rr,a.prototype.square=ir,a.prototype.Barrett=Wn;var nt,jn,On;function Ar(g){jn[On++]^=g&255,jn[On++]^=g>>8&255,jn[On++]^=g>>16&255,jn[On++]^=g>>24&255,On>=st&&(On-=st)}function ct(){Ar(new Date().getTime())}if(jn==null){jn=new Array,On=0;var Pn;if(typeof window<"u"&&window.crypto){if(window.crypto.getRandomValues){var ft=new Uint8Array(32);for(window.crypto.getRandomValues(ft),Pn=0;Pn<32;++Pn)jn[On++]=ft[Pn]}else if(navigator.appName=="Netscape"&&navigator.appVersion<"5"){var pt=window.crypto.random(32);for(Pn=0;Pn<pt.length;++Pn)jn[On++]=pt.charCodeAt(Pn)&255}}for(;On<st;)Pn=Math.floor(65536*Math.random()),jn[On++]=Pn>>>8,jn[On++]=Pn&255;On=0,ct()}function Dr(){if(nt==null){for(ct(),nt=Br(),nt.init(jn),On=0;On<jn.length;++On)jn[On]=0;On=0}return nt.next()}function kr(g){var b;for(b=0;b<g.length;++b)g[b]=Dr()}function ht(){}ht.prototype.nextBytes=kr;function it(){this.i=0,this.j=0,this.S=new Array}function Or(g){var b,$,on;for(b=0;b<256;++b)this.S[b]=b;for($=0,b=0;b<256;++b)$=$+this.S[b]+g[b%g.length]&255,on=this.S[b],this.S[b]=this.S[$],this.S[$]=on;this.i=0,this.j=0}function Ir(){var g;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,g=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=g,this.S[g+this.S[this.i]&255]}it.prototype.init=Or,it.prototype.next=Ir;function Br(){return new it}var st=256;e.exports={default:a,BigInteger:a,SecureRandom:ht}}).call(commonjsGlobal)})(jsbn);const JSEncrypt=(()=>(()=>{var __webpack_modules__={"./lib/JSEncrypt.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSEncrypt": () => (/* binding */ JSEncrypt)
/* harmony export */ });
/* harmony import */ var _lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsbn/base64 */ "./lib/lib/jsbn/base64.js");
/* harmony import */ var _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSEncryptRSAKey */ "./lib/JSEncryptRSAKey.js");


var version = "3.2.1";
/**
 *
 * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
 * possible parameters are:
 * - default_key_size        {number}  default: 1024 the key size in bit
 * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
 * - log                     {boolean} default: false whether log warn/error or not
 * @constructor
 */
var JSEncrypt = /** @class */ (function () {
    function JSEncrypt(options) {
        if (options === void 0) { options = {}; }
        options = options || {};
        this.default_key_size = options.default_key_size
            ? parseInt(options.default_key_size, 10)
            : 1024;
        this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type
        this.log = options.log || false;
        // The private and public key.
        this.key = null;
    }
    /**
     * Method to set the rsa key parameter (one method is enough to set both the public
     * and the private key, since the private key contains the public key paramenters)
     * Log a warning if logs are enabled
     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
     * @public
     */
    JSEncrypt.prototype.setKey = function (key) {
        if (this.log && this.key) {
            console.warn("A key was already set, overriding existing.");
        }
        this.key = new _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__.JSEncryptRSAKey(key);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
    JSEncrypt.prototype.setPrivateKey = function (privkey) {
        // Create the key.
        this.setKey(privkey);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
    JSEncrypt.prototype.setPublicKey = function (pubkey) {
        // Sets the public key.
        this.setKey(pubkey);
    };
    /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public
     */
    JSEncrypt.prototype.decrypt = function (str) {
        // Return the decrypted string.
        try {
            return this.getKey().decrypt((0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.b64tohex)(str));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public
     */
    JSEncrypt.prototype.encrypt = function (str) {
        // Return the encrypted string.
        try {
            return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getKey().encrypt(str));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's sign.
     * @param {string} str the string to sign
     * @param {function} digestMethod hash method
     * @param {string} digestName the name of the hash algorithm
     * @return {string} the signature encoded in base64
     * @public
     */
    JSEncrypt.prototype.sign = function (str, digestMethod, digestName) {
        // return the RSA signature of 'str' in 'hex' format.
        try {
            return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getKey().sign(str, digestMethod, digestName));
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Proxy method for RSAKey object's verify.
     * @param {string} str the string to verify
     * @param {string} signature the signature encoded in base64 to compare the string to
     * @param {function} digestMethod hash method
     * @return {boolean} whether the data and signature match
     * @public
     */
    JSEncrypt.prototype.verify = function (str, signature, digestMethod) {
        // Return the decrypted 'digest' of the signature.
        try {
            return this.getKey().verify(str, (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.b64tohex)(signature), digestMethod);
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
     * will be created and returned
     * @param {callback} [cb] the callback to be called if we want the key to be generated
     * in an async fashion
     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
     * @public
     */
    JSEncrypt.prototype.getKey = function (cb) {
        // Only create new if it does not exist.
        if (!this.key) {
            // Get a new private key.
            this.key = new _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__.JSEncryptRSAKey();
            if (cb && {}.toString.call(cb) === "[object Function]") {
                this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                return;
            }
            // Generate the key.
            this.key.generate(this.default_key_size, this.default_public_exponent);
        }
        return this.key;
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITH header and footer
     * @public
     */
    JSEncrypt.prototype.getPrivateKey = function () {
        // Return the private representation of this key.
        return this.getKey().getPrivateKey();
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITHOUT header and footer
     * @public
     */
    JSEncrypt.prototype.getPrivateKeyB64 = function () {
        // Return the private representation of this key.
        return this.getKey().getPrivateBaseKeyB64();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITH header and footer
     * @public
     */
    JSEncrypt.prototype.getPublicKey = function () {
        // Return the private representation of this key.
        return this.getKey().getPublicKey();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITHOUT header and footer
     * @public
     */
    JSEncrypt.prototype.getPublicKeyB64 = function () {
        // Return the private representation of this key.
        return this.getKey().getPublicBaseKeyB64();
    };
    JSEncrypt.version = version;
    return JSEncrypt;
}());



//# sourceURL=webpack://JSEncrypt/./lib/JSEncrypt.js?`)},"./lib/JSEncryptRSAKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSEncryptRSAKey": () => (/* binding */ JSEncryptRSAKey)
/* harmony export */ });
/* harmony import */ var _lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsbn/base64 */ "./lib/lib/jsbn/base64.js");
/* harmony import */ var _lib_asn1js_hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/asn1js/hex */ "./lib/lib/asn1js/hex.js");
/* harmony import */ var _lib_asn1js_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/asn1js/base64 */ "./lib/lib/asn1js/base64.js");
/* harmony import */ var _lib_asn1js_asn1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/asn1js/asn1 */ "./lib/lib/asn1js/asn1.js");
/* harmony import */ var _lib_jsbn_rsa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/jsbn/rsa */ "./lib/lib/jsbn/rsa.js");
/* harmony import */ var _lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/jsbn/jsbn */ "./lib/lib/jsbn/jsbn.js");
/* harmony import */ var _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/jsrsasign/asn1-1.0 */ "./lib/lib/jsrsasign/asn1-1.0.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







/**
 * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
 * This object is just a decorator for parsing the key parameter
 * @param {string|Object} key - The key in string format, or an object containing
 * the parameters needed to build a RSAKey object.
 * @constructor
 */
var JSEncryptRSAKey = /** @class */ (function (_super) {
    __extends(JSEncryptRSAKey, _super);
    function JSEncryptRSAKey(key) {
        var _this = _super.call(this) || this;
        // Call the super constructor.
        //  RSAKey.call(this);
        // If a key key was provided.
        if (key) {
            // If this is a string...
            if (typeof key === "string") {
                _this.parseKey(key);
            }
            else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) ||
                JSEncryptRSAKey.hasPublicKeyProperty(key)) {
                // Set the values for the key.
                _this.parsePropertiesFrom(key);
            }
        }
        return _this;
    }
    /**
     * Method to parse a pem encoded string containing both a public or private key.
     * The method will translate the pem encoded string in a der encoded string and
     * will parse private key and public key parameters. This method accepts public key
     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
     *
     * @todo Check how many rsa formats use the same format of pkcs #1.
     *
     * The format is defined as:
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * it's possible to examine the structure of the keys obtained from openssl using
     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
     * @private
     */
    JSEncryptRSAKey.prototype.parseKey = function (pem) {
        try {
            var modulus = 0;
            var public_exponent = 0;
            var reHex = /^\\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\\s*)+$/;
            var der = reHex.test(pem) ? _lib_asn1js_hex__WEBPACK_IMPORTED_MODULE_1__.Hex.decode(pem) : _lib_asn1js_base64__WEBPACK_IMPORTED_MODULE_2__.Base64.unarmor(pem);
            var asn1 = _lib_asn1js_asn1__WEBPACK_IMPORTED_MODULE_3__.ASN1.decode(der);
            // Fixes a bug with OpenSSL 1.0+ private keys
            if (asn1.sub.length === 3) {
                asn1 = asn1.sub[2].sub[0];
            }
            if (asn1.sub.length === 9) {
                // Parse the private key.
                modulus = asn1.sub[1].getHexStringValue(); // bigint
                this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);
                public_exponent = asn1.sub[2].getHexStringValue(); // int
                this.e = parseInt(public_exponent, 16);
                var private_exponent = asn1.sub[3].getHexStringValue(); // bigint
                this.d = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(private_exponent, 16);
                var prime1 = asn1.sub[4].getHexStringValue(); // bigint
                this.p = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(prime1, 16);
                var prime2 = asn1.sub[5].getHexStringValue(); // bigint
                this.q = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(prime2, 16);
                var exponent1 = asn1.sub[6].getHexStringValue(); // bigint
                this.dmp1 = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(exponent1, 16);
                var exponent2 = asn1.sub[7].getHexStringValue(); // bigint
                this.dmq1 = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(exponent2, 16);
                var coefficient = asn1.sub[8].getHexStringValue(); // bigint
                this.coeff = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(coefficient, 16);
            }
            else if (asn1.sub.length === 2) {
                if (asn1.sub[0].sub) {
                    // Parse ASN.1 SubjectPublicKeyInfo type as defined by X.509
                    var bit_string = asn1.sub[1];
                    var sequence = bit_string.sub[0];
                    modulus = sequence.sub[0].getHexStringValue();
                    this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);
                    public_exponent = sequence.sub[1].getHexStringValue();
                    this.e = parseInt(public_exponent, 16);
                }
                else {
                    // Parse ASN.1 RSAPublicKey type as defined by PKCS #1
                    modulus = asn1.sub[0].getHexStringValue();
                    this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);
                    public_exponent = asn1.sub[1].getHexStringValue();
                    this.e = parseInt(public_exponent, 16);
                }
            }
            else {
                return false;
            }
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa key.
     *
     * The translation follow the ASN.1 notation :
     * RSAPrivateKey ::= SEQUENCE {
     *   version           Version,
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER,  -- e
     *   privateExponent   INTEGER,  -- d
     *   prime1            INTEGER,  -- p
     *   prime2            INTEGER,  -- q
     *   exponent1         INTEGER,  -- d mod (p1)
     *   exponent2         INTEGER,  -- d mod (q-1)
     *   coefficient       INTEGER,  -- (inverse of q) mod p
     * }
     * @returns {string}  DER Encoded String representing the rsa private key
     * @private
     */
    JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {
        var options = {
            array: [
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: 0 }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.n }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: this.e }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.d }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.p }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.q }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.coeff }),
            ],
        };
        var seq = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence(options);
        return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {
        return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getPrivateBaseKey());
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa public key.
     * The representation follow the ASN.1 notation :
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * @returns {string} DER Encoded String representing the rsa public key
     * @private
     */
    JSEncryptRSAKey.prototype.getPublicBaseKey = function () {
        var first_sequence = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({
            array: [
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERNull(),
            ],
        });
        var second_sequence = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({
            array: [
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.n }),
                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: this.e }),
            ],
        });
        var bit_string = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERBitString({
            hex: "00" + second_sequence.getEncodedHex(),
        });
        var seq = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({
            array: [first_sequence, bit_string],
        });
        return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {
        return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getPublicBaseKey());
    };
    /**
     * wrap the string in block of width chars. The default value for rsa keys is 64
     * characters.
     * @param {string} str the pem encoded string without header and footer
     * @param {Number} [width=64] - the length the string has to be wrapped at
     * @returns {string}
     * @private
     */
    JSEncryptRSAKey.wordwrap = function (str, width) {
        width = width || 64;
        if (!str) {
            return str;
        }
        var regex = "(.{1," + width + "})( +|$\\n?)|(.{1," + width + "})";
        return str.match(RegExp(regex, "g")).join("\\n");
    };
    /**
     * Retrieve the pem encoded private key
     * @returns {string} the pem encoded private key with header/footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPrivateKey = function () {
        var key = "-----BEGIN RSA PRIVATE KEY-----\\n";
        key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\\n";
        key += "-----END RSA PRIVATE KEY-----";
        return key;
    };
    /**
     * Retrieve the pem encoded public key
     * @returns {string} the pem encoded public key with header/footer
     * @public
     */
    JSEncryptRSAKey.prototype.getPublicKey = function () {
        var key = "-----BEGIN PUBLIC KEY-----\\n";
        key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\\n";
        key += "-----END PUBLIC KEY-----";
        return key;
    };
    /**
     * Check if the object contains the necessary parameters to populate the rsa modulus
     * and public exponent parameters.
     * @param {Object} [obj={}] - An object that may contain the two public key
     * parameters
     * @returns {boolean} true if the object contains both the modulus and the public exponent
     * properties (n and e)
     * @todo check for types of n and e. N should be a parseable bigInt object, E should
     * be a parseable integer number
     * @private
     */
    JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {
        obj = obj || {};
        return obj.hasOwnProperty("n") && obj.hasOwnProperty("e");
    };
    /**
     * Check if the object contains ALL the parameters of an RSA key.
     * @param {Object} [obj={}] - An object that may contain nine rsa key
     * parameters
     * @returns {boolean} true if the object contains all the parameters needed
     * @todo check for types of the parameters all the parameters but the public exponent
     * should be parseable bigint objects, the public exponent should be a parseable integer number
     * @private
     */
    JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {
        obj = obj || {};
        return (obj.hasOwnProperty("n") &&
            obj.hasOwnProperty("e") &&
            obj.hasOwnProperty("d") &&
            obj.hasOwnProperty("p") &&
            obj.hasOwnProperty("q") &&
            obj.hasOwnProperty("dmp1") &&
            obj.hasOwnProperty("dmq1") &&
            obj.hasOwnProperty("coeff"));
    };
    /**
     * Parse the properties of obj in the current rsa object. Obj should AT LEAST
     * include the modulus and public exponent (n, e) parameters.
     * @param {Object} obj - the object containing rsa parameters
     * @private
     */
    JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {
        this.n = obj.n;
        this.e = obj.e;
        if (obj.hasOwnProperty("d")) {
            this.d = obj.d;
            this.p = obj.p;
            this.q = obj.q;
            this.dmp1 = obj.dmp1;
            this.dmq1 = obj.dmq1;
            this.coeff = obj.coeff;
        }
    };
    return JSEncryptRSAKey;
}(_lib_jsbn_rsa__WEBPACK_IMPORTED_MODULE_4__.RSAKey));



//# sourceURL=webpack://JSEncrypt/./lib/JSEncryptRSAKey.js?`)},"./lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSEncrypt": () => (/* reexport safe */ _JSEncrypt__WEBPACK_IMPORTED_MODULE_0__.JSEncrypt),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _JSEncrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEncrypt */ "./lib/JSEncrypt.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_JSEncrypt__WEBPACK_IMPORTED_MODULE_0__.JSEncrypt);


//# sourceURL=webpack://JSEncrypt/./lib/index.js?`)},"./lib/lib/asn1js/asn1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASN1": () => (/* binding */ ASN1),
/* harmony export */   "ASN1Tag": () => (/* binding */ ASN1Tag),
/* harmony export */   "Stream": () => (/* binding */ Stream)
/* harmony export */ });
/* harmony import */ var _int10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./int10 */ "./lib/lib/asn1js/int10.js");
// ASN.1 JavaScript decoder
// Copyright (c) 2008-2014 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
/*global oids */

var ellipsis = "\\u2026";
var reTimeS = /^(\\d\\d)(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])([01]\\d|2[0-3])(?:([0-5]\\d)(?:([0-5]\\d)(?:[.,](\\d{1,3}))?)?)?(Z|[-+](?:[0]\\d|1[0-2])([0-5]\\d)?)?$/;
var reTimeL = /^(\\d\\d\\d\\d)(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])([01]\\d|2[0-3])(?:([0-5]\\d)(?:([0-5]\\d)(?:[.,](\\d{1,3}))?)?)?(Z|[-+](?:[0]\\d|1[0-2])([0-5]\\d)?)?$/;
function stringCut(str, len) {
    if (str.length > len) {
        str = str.substring(0, len) + ellipsis;
    }
    return str;
}
var Stream = /** @class */ (function () {
    function Stream(enc, pos) {
        this.hexDigits = "0123456789ABCDEF";
        if (enc instanceof Stream) {
            this.enc = enc.enc;
            this.pos = enc.pos;
        }
        else {
            // enc should be an array or a binary string
            this.enc = enc;
            this.pos = pos;
        }
    }
    Stream.prototype.get = function (pos) {
        if (pos === undefined) {
            pos = this.pos++;
        }
        if (pos >= this.enc.length) {
            throw new Error("Requesting byte offset ".concat(pos, " on a stream of length ").concat(this.enc.length));
        }
        return ("string" === typeof this.enc) ? this.enc.charCodeAt(pos) : this.enc[pos];
    };
    Stream.prototype.hexByte = function (b) {
        return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
    };
    Stream.prototype.hexDump = function (start, end, raw) {
        var s = "";
        for (var i = start; i < end; ++i) {
            s += this.hexByte(this.get(i));
            if (raw !== true) {
                switch (i & 0xF) {
                    case 0x7:
                        s += "  ";
                        break;
                    case 0xF:
                        s += "\\n";
                        break;
                    default:
                        s += " ";
                }
            }
        }
        return s;
    };
    Stream.prototype.isASCII = function (start, end) {
        for (var i = start; i < end; ++i) {
            var c = this.get(i);
            if (c < 32 || c > 176) {
                return false;
            }
        }
        return true;
    };
    Stream.prototype.parseStringISO = function (start, end) {
        var s = "";
        for (var i = start; i < end; ++i) {
            s += String.fromCharCode(this.get(i));
        }
        return s;
    };
    Stream.prototype.parseStringUTF = function (start, end) {
        var s = "";
        for (var i = start; i < end;) {
            var c = this.get(i++);
            if (c < 128) {
                s += String.fromCharCode(c);
            }
            else if ((c > 191) && (c < 224)) {
                s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
            }
            else {
                s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
            }
        }
        return s;
    };
    Stream.prototype.parseStringBMP = function (start, end) {
        var str = "";
        var hi;
        var lo;
        for (var i = start; i < end;) {
            hi = this.get(i++);
            lo = this.get(i++);
            str += String.fromCharCode((hi << 8) | lo);
        }
        return str;
    };
    Stream.prototype.parseTime = function (start, end, shortYear) {
        var s = this.parseStringISO(start, end);
        var m = (shortYear ? reTimeS : reTimeL).exec(s);
        if (!m) {
            return "Unrecognized time: " + s;
        }
        if (shortYear) {
            // to avoid querying the timer, use the fixed range [1970, 2069]
            // it will conform with ITU X.400 [-10, +40] sliding window until 2030
            m[1] = +m[1];
            m[1] += (+m[1] < 70) ? 2000 : 1900;
        }
        s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
        if (m[5]) {
            s += ":" + m[5];
            if (m[6]) {
                s += ":" + m[6];
                if (m[7]) {
                    s += "." + m[7];
                }
            }
        }
        if (m[8]) {
            s += " UTC";
            if (m[8] != "Z") {
                s += m[8];
                if (m[9]) {
                    s += ":" + m[9];
                }
            }
        }
        return s;
    };
    Stream.prototype.parseInteger = function (start, end) {
        var v = this.get(start);
        var neg = (v > 127);
        var pad = neg ? 255 : 0;
        var len;
        var s = "";
        // skip unuseful bits (not allowed in DER)
        while (v == pad && ++start < end) {
            v = this.get(start);
        }
        len = end - start;
        if (len === 0) {
            return neg ? -1 : 0;
        }
        // show bit length of huge integers
        if (len > 4) {
            s = v;
            len <<= 3;
            while (((+s ^ pad) & 0x80) == 0) {
                s = +s << 1;
                --len;
            }
            s = "(" + len + " bit)\\n";
        }
        // decode the integer
        if (neg) {
            v = v - 256;
        }
        var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10(v);
        for (var i = start + 1; i < end; ++i) {
            n.mulAdd(256, this.get(i));
        }
        return s + n.toString();
    };
    Stream.prototype.parseBitString = function (start, end, maxLength) {
        var unusedBit = this.get(start);
        var lenBit = ((end - start - 1) << 3) - unusedBit;
        var intro = "(" + lenBit + " bit)\\n";
        var s = "";
        for (var i = start + 1; i < end; ++i) {
            var b = this.get(i);
            var skip = (i == end - 1) ? unusedBit : 0;
            for (var j = 7; j >= skip; --j) {
                s += (b >> j) & 1 ? "1" : "0";
            }
            if (s.length > maxLength) {
                return intro + stringCut(s, maxLength);
            }
        }
        return intro + s;
    };
    Stream.prototype.parseOctetString = function (start, end, maxLength) {
        if (this.isASCII(start, end)) {
            return stringCut(this.parseStringISO(start, end), maxLength);
        }
        var len = end - start;
        var s = "(" + len + " byte)\\n";
        maxLength /= 2; // we work in bytes
        if (len > maxLength) {
            end = start + maxLength;
        }
        for (var i = start; i < end; ++i) {
            s += this.hexByte(this.get(i));
        }
        if (len > maxLength) {
            s += ellipsis;
        }
        return s;
    };
    Stream.prototype.parseOID = function (start, end, maxLength) {
        var s = "";
        var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();
        var bits = 0;
        for (var i = start; i < end; ++i) {
            var v = this.get(i);
            n.mulAdd(128, v & 0x7F);
            bits += 7;
            if (!(v & 0x80)) { // finished
                if (s === "") {
                    n = n.simplify();
                    if (n instanceof _int10__WEBPACK_IMPORTED_MODULE_0__.Int10) {
                        n.sub(80);
                        s = "2." + n.toString();
                    }
                    else {
                        var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                        s = m + "." + (n - m * 40);
                    }
                }
                else {
                    s += "." + n.toString();
                }
                if (s.length > maxLength) {
                    return stringCut(s, maxLength);
                }
                n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();
                bits = 0;
            }
        }
        if (bits > 0) {
            s += ".incomplete";
        }
        return s;
    };
    return Stream;
}());

var ASN1 = /** @class */ (function () {
    function ASN1(stream, header, length, tag, sub) {
        if (!(tag instanceof ASN1Tag)) {
            throw new Error("Invalid tag value.");
        }
        this.stream = stream;
        this.header = header;
        this.length = length;
        this.tag = tag;
        this.sub = sub;
    }
    ASN1.prototype.typeName = function () {
        switch (this.tag.tagClass) {
            case 0: // universal
                switch (this.tag.tagNumber) {
                    case 0x00:
                        return "EOC";
                    case 0x01:
                        return "BOOLEAN";
                    case 0x02:
                        return "INTEGER";
                    case 0x03:
                        return "BIT_STRING";
                    case 0x04:
                        return "OCTET_STRING";
                    case 0x05:
                        return "NULL";
                    case 0x06:
                        return "OBJECT_IDENTIFIER";
                    case 0x07:
                        return "ObjectDescriptor";
                    case 0x08:
                        return "EXTERNAL";
                    case 0x09:
                        return "REAL";
                    case 0x0A:
                        return "ENUMERATED";
                    case 0x0B:
                        return "EMBEDDED_PDV";
                    case 0x0C:
                        return "UTF8String";
                    case 0x10:
                        return "SEQUENCE";
                    case 0x11:
                        return "SET";
                    case 0x12:
                        return "NumericString";
                    case 0x13:
                        return "PrintableString"; // ASCII subset
                    case 0x14:
                        return "TeletexString"; // aka T61String
                    case 0x15:
                        return "VideotexString";
                    case 0x16:
                        return "IA5String"; // ASCII
                    case 0x17:
                        return "UTCTime";
                    case 0x18:
                        return "GeneralizedTime";
                    case 0x19:
                        return "GraphicString";
                    case 0x1A:
                        return "VisibleString"; // ASCII subset
                    case 0x1B:
                        return "GeneralString";
                    case 0x1C:
                        return "UniversalString";
                    case 0x1E:
                        return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();
            case 1:
                return "Application_" + this.tag.tagNumber.toString();
            case 2:
                return "[" + this.tag.tagNumber.toString() + "]"; // Context
            case 3:
                return "Private_" + this.tag.tagNumber.toString();
        }
    };
    ASN1.prototype.content = function (maxLength) {
        if (this.tag === undefined) {
            return null;
        }
        if (maxLength === undefined) {
            maxLength = Infinity;
        }
        var content = this.posContent();
        var len = Math.abs(this.length);
        if (!this.tag.isUniversal()) {
            if (this.sub !== null) {
                return "(" + this.sub.length + " elem)";
            }
            return this.stream.parseOctetString(content, content + len, maxLength);
        }
        switch (this.tag.tagNumber) {
            case 0x01: // BOOLEAN
                return (this.stream.get(content) === 0) ? "false" : "true";
            case 0x02: // INTEGER
                return this.stream.parseInteger(content, content + len);
            case 0x03: // BIT_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseBitString(content, content + len, maxLength);
            case 0x04: // OCTET_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseOctetString(content, content + len, maxLength);
            // case 0x05: // NULL
            case 0x06: // OBJECT_IDENTIFIER
                return this.stream.parseOID(content, content + len, maxLength);
            // case 0x07: // ObjectDescriptor
            // case 0x08: // EXTERNAL
            // case 0x09: // REAL
            // case 0x0A: // ENUMERATED
            // case 0x0B: // EMBEDDED_PDV
            case 0x10: // SEQUENCE
            case 0x11: // SET
                if (this.sub !== null) {
                    return "(" + this.sub.length + " elem)";
                }
                else {
                    return "(no elem)";
                }
            case 0x0C: // UTF8String
                return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);
            case 0x12: // NumericString
            case 0x13: // PrintableString
            case 0x14: // TeletexString
            case 0x15: // VideotexString
            case 0x16: // IA5String
            // case 0x19: // GraphicString
            case 0x1A: // VisibleString
                // case 0x1B: // GeneralString
                // case 0x1C: // UniversalString
                return stringCut(this.stream.parseStringISO(content, content + len), maxLength);
            case 0x1E: // BMPString
                return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);
            case 0x17: // UTCTime
            case 0x18: // GeneralizedTime
                return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));
        }
        return null;
    };
    ASN1.prototype.toString = function () {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? "null" : this.sub.length) + "]";
    };
    ASN1.prototype.toPrettyString = function (indent) {
        if (indent === undefined) {
            indent = "";
        }
        var s = indent + this.typeName() + " @" + this.stream.pos;
        if (this.length >= 0) {
            s += "+";
        }
        s += this.length;
        if (this.tag.tagConstructed) {
            s += " (constructed)";
        }
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null)) {
            s += " (encapsulates)";
        }
        s += "\\n";
        if (this.sub !== null) {
            indent += "  ";
            for (var i = 0, max = this.sub.length; i < max; ++i) {
                s += this.sub[i].toPrettyString(indent);
            }
        }
        return s;
    };
    ASN1.prototype.posStart = function () {
        return this.stream.pos;
    };
    ASN1.prototype.posContent = function () {
        return this.stream.pos + this.header;
    };
    ASN1.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
    };
    ASN1.prototype.toHexString = function () {
        return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };
    ASN1.decodeLength = function (stream) {
        var buf = stream.get();
        var len = buf & 0x7F;
        if (len == buf) {
            return len;
        }
        // no reason to use Int10, as it would be a huge buffer anyways
        if (len > 6) {
            throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
        }
        if (len === 0) {
            return null;
        } // undefined
        buf = 0;
        for (var i = 0; i < len; ++i) {
            buf = (buf * 256) + stream.get();
        }
        return buf;
    };
    /**
     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
     * @returns {string}
     * @public
     */
    ASN1.prototype.getHexStringValue = function () {
        var hexString = this.toHexString();
        var offset = this.header * 2;
        var length = this.length * 2;
        return hexString.substr(offset, length);
    };
    ASN1.decode = function (str) {
        var stream;
        if (!(str instanceof Stream)) {
            stream = new Stream(str, 0);
        }
        else {
            stream = str;
        }
        var streamStart = new Stream(stream);
        var tag = new ASN1Tag(stream);
        var len = ASN1.decodeLength(stream);
        var start = stream.pos;
        var header = start - streamStart.pos;
        var sub = null;
        var getSub = function () {
            var ret = [];
            if (len !== null) {
                // definite length
                var end = start + len;
                while (stream.pos < end) {
                    ret[ret.length] = ASN1.decode(stream);
                }
                if (stream.pos != end) {
                    throw new Error("Content size is not correct for container starting at offset " + start);
                }
            }
            else {
                // undefined length
                try {
                    for (;;) {
                        var s = ASN1.decode(stream);
                        if (s.tag.isEOC()) {
                            break;
                        }
                        ret[ret.length] = s;
                    }
                    len = start - stream.pos; // undefined lengths are represented as negative values
                }
                catch (e) {
                    throw new Error("Exception while decoding undefined length content: " + e);
                }
            }
            return ret;
        };
        if (tag.tagConstructed) {
            // must have valid content
            sub = getSub();
        }
        else if (tag.isUniversal() && ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {
            // sometimes BitString and OctetString are used to encapsulate ASN.1
            try {
                if (tag.tagNumber == 0x03) {
                    if (stream.get() != 0) {
                        throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    }
                }
                sub = getSub();
                for (var i = 0; i < sub.length; ++i) {
                    if (sub[i].tag.isEOC()) {
                        throw new Error("EOC is not supposed to be actual content.");
                    }
                }
            }
            catch (e) {
                // but silently ignore when they don't
                sub = null;
            }
        }
        if (sub === null) {
            if (len === null) {
                throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
            }
            stream.pos = start + Math.abs(len);
        }
        return new ASN1(streamStart, header, len, tag, sub);
    };
    return ASN1;
}());

var ASN1Tag = /** @class */ (function () {
    function ASN1Tag(stream) {
        var buf = stream.get();
        this.tagClass = buf >> 6;
        this.tagConstructed = ((buf & 0x20) !== 0);
        this.tagNumber = buf & 0x1F;
        if (this.tagNumber == 0x1F) { // long tag
            var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();
            do {
                buf = stream.get();
                n.mulAdd(128, buf & 0x7F);
            } while (buf & 0x80);
            this.tagNumber = n.simplify();
        }
    }
    ASN1Tag.prototype.isUniversal = function () {
        return this.tagClass === 0x00;
    };
    ASN1Tag.prototype.isEOC = function () {
        return this.tagClass === 0x00 && this.tagNumber === 0x00;
    };
    return ASN1Tag;
}());



//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/asn1.js?`)},"./lib/lib/asn1js/base64.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": () => (/* binding */ Base64)
/* harmony export */ });
// Base64 JavaScript decoder
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var decoder;
var Base64 = {
    decode: function (a) {
        var i;
        if (decoder === undefined) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var ignore = "= \\f\\n\\r\\t\\u00A0\\u2028\\u2029";
            decoder = Object.create(null);
            for (i = 0; i < 64; ++i) {
                decoder[b64.charAt(i)] = i;
            }
            decoder['-'] = 62; //+
            decoder['_'] = 63; //-
            for (i = 0; i < ignore.length; ++i) {
                decoder[ignore.charAt(i)] = -1;
            }
        }
        var out = [];
        var bits = 0;
        var char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if (c == "=") {
                break;
            }
            c = decoder[c];
            if (c == -1) {
                continue;
            }
            if (c === undefined) {
                throw new Error("Illegal character at offset " + i);
            }
            bits |= c;
            if (++char_count >= 4) {
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                out[out.length] = bits & 0xFF;
                bits = 0;
                char_count = 0;
            }
            else {
                bits <<= 6;
            }
        }
        switch (char_count) {
            case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
            case 2:
                out[out.length] = (bits >> 10);
                break;
            case 3:
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                break;
        }
        return out;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\\/=\\s]+)-----END [^-]+-----|begin-base64[^\\n]+\\n([A-Za-z0-9+\\/=\\s]+)====/,
    unarmor: function (a) {
        var m = Base64.re.exec(a);
        if (m) {
            if (m[1]) {
                a = m[1];
            }
            else if (m[2]) {
                a = m[2];
            }
            else {
                throw new Error("RegExp out of sync");
            }
        }
        return Base64.decode(a);
    }
};


//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/base64.js?`)},"./lib/lib/asn1js/hex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hex": () => (/* binding */ Hex)
/* harmony export */ });
// Hex JavaScript decoder
// Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var decoder;
var Hex = {
    decode: function (a) {
        var i;
        if (decoder === undefined) {
            var hex = "0123456789ABCDEF";
            var ignore = " \\f\\n\\r\\t\\u00A0\\u2028\\u2029";
            decoder = {};
            for (i = 0; i < 16; ++i) {
                decoder[hex.charAt(i)] = i;
            }
            hex = hex.toLowerCase();
            for (i = 10; i < 16; ++i) {
                decoder[hex.charAt(i)] = i;
            }
            for (i = 0; i < ignore.length; ++i) {
                decoder[ignore.charAt(i)] = -1;
            }
        }
        var out = [];
        var bits = 0;
        var char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if (c == "=") {
                break;
            }
            c = decoder[c];
            if (c == -1) {
                continue;
            }
            if (c === undefined) {
                throw new Error("Illegal character at offset " + i);
            }
            bits |= c;
            if (++char_count >= 2) {
                out[out.length] = bits;
                bits = 0;
                char_count = 0;
            }
            else {
                bits <<= 4;
            }
        }
        if (char_count) {
            throw new Error("Hex encoding incomplete: 4 bits missing");
        }
        return out;
    }
};


//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/hex.js?`)},"./lib/lib/asn1js/int10.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Int10": () => (/* binding */ Int10)
/* harmony export */ });
// Big integer base-10 printing library
// Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256
var Int10 = /** @class */ (function () {
    function Int10(value) {
        this.buf = [+value || 0];
    }
    Int10.prototype.mulAdd = function (m, c) {
        // assert(m <= 256)
        var b = this.buf;
        var l = b.length;
        var i;
        var t;
        for (i = 0; i < l; ++i) {
            t = b[i] * m + c;
            if (t < max) {
                c = 0;
            }
            else {
                c = 0 | (t / max);
                t -= c * max;
            }
            b[i] = t;
        }
        if (c > 0) {
            b[i] = c;
        }
    };
    Int10.prototype.sub = function (c) {
        // assert(m <= 256)
        var b = this.buf;
        var l = b.length;
        var i;
        var t;
        for (i = 0; i < l; ++i) {
            t = b[i] - c;
            if (t < 0) {
                t += max;
                c = 1;
            }
            else {
                c = 0;
            }
            b[i] = t;
        }
        while (b[b.length - 1] === 0) {
            b.pop();
        }
    };
    Int10.prototype.toString = function (base) {
        if ((base || 10) != 10) {
            throw new Error("only base 10 is supported");
        }
        var b = this.buf;
        var s = b[b.length - 1].toString();
        for (var i = b.length - 2; i >= 0; --i) {
            s += (max + b[i]).toString().substring(1);
        }
        return s;
    };
    Int10.prototype.valueOf = function () {
        var b = this.buf;
        var v = 0;
        for (var i = b.length - 1; i >= 0; --i) {
            v = v * max + b[i];
        }
        return v;
    };
    Int10.prototype.simplify = function () {
        var b = this.buf;
        return (b.length == 1) ? b[0] : this;
    };
    return Int10;
}());



//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/int10.js?`)},"./lib/lib/jsbn/base64.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b64toBA": () => (/* binding */ b64toBA),
/* harmony export */   "b64tohex": () => (/* binding */ b64tohex),
/* harmony export */   "hex2b64": () => (/* binding */ hex2b64)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/lib/jsbn/util.js");

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
function hex2b64(h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += b64map.charAt(c << 2);
    }
    else if (i + 2 == h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0) {
        ret += b64pad;
    }
    return ret;
}
// convert a base64 string to hex
function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3
    var slop = 0;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) == b64pad) {
            break;
        }
        var v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue;
        }
        if (k == 0) {
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if (k == 1) {
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if (k == 2) {
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(slop);
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)((slop << 2) | (v >> 4));
            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v & 0xf);
            k = 0;
        }
    }
    if (k == 1) {
        ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(slop << 2);
    }
    return ret;
}
// convert a base64 string to a byte/number array
function b64toBA(s) {
    // piggyback on b64tohex for now, optimize later
    var h = b64tohex(s);
    var i;
    var a = [];
    for (i = 0; 2 * i < h.length; ++i) {
        a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
    }
    return a;
}


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/base64.js?`)},"./lib/lib/jsbn/jsbn.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigInteger": () => (/* binding */ BigInteger),
/* harmony export */   "intAt": () => (/* binding */ intAt),
/* harmony export */   "nbi": () => (/* binding */ nbi),
/* harmony export */   "nbits": () => (/* binding */ nbits),
/* harmony export */   "nbv": () => (/* binding */ nbv),
/* harmony export */   "parseBigInt": () => (/* binding */ parseBigInt)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/lib/jsbn/util.js");
// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var dbits;
// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary & 0xffffff) == 0xefcafe);
//#region
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
//#endregion
// (public) Constructor
var BigInteger = /** @class */ (function () {
    function BigInteger(a, b, c) {
        if (a != null) {
            if ("number" == typeof a) {
                this.fromNumber(a, b, c);
            }
            else if (b == null && "string" != typeof a) {
                this.fromString(a, 256);
            }
            else {
                this.fromString(a, b);
            }
        }
    }
    //#region PUBLIC
    // BigInteger.prototype.toString = bnToString;
    // (public) return string representation in given radix
    BigInteger.prototype.toString = function (b) {
        if (this.s < 0) {
            return "-" + this.negate().toString(b);
        }
        var k;
        if (b == 16) {
            k = 4;
        }
        else if (b == 8) {
            k = 3;
        }
        else if (b == 2) {
            k = 1;
        }
        else if (b == 32) {
            k = 5;
        }
        else if (b == 4) {
            k = 2;
        }
        else {
            return this.toRadix(b);
        }
        var km = (1 << k) - 1;
        var d;
        var m = false;
        var r = "";
        var i = this.t;
        var p = this.DB - (i * this.DB) % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(d);
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & ((1 << p) - 1)) << (k - p);
                    d |= this[--i] >> (p += this.DB - k);
                }
                else {
                    d = (this[i] >> (p -= k)) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if (d > 0) {
                    m = true;
                }
                if (m) {
                    r += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(d);
                }
            }
        }
        return m ? r : "0";
    };
    // BigInteger.prototype.negate = bnNegate;
    // (public) -this
    BigInteger.prototype.negate = function () {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
    };
    // BigInteger.prototype.abs = bnAbs;
    // (public) |this|
    BigInteger.prototype.abs = function () {
        return (this.s < 0) ? this.negate() : this;
    };
    // BigInteger.prototype.compareTo = bnCompareTo;
    // (public) return + if this > a, - if this < a, 0 if equal
    BigInteger.prototype.compareTo = function (a) {
        var r = this.s - a.s;
        if (r != 0) {
            return r;
        }
        var i = this.t;
        r = i - a.t;
        if (r != 0) {
            return (this.s < 0) ? -r : r;
        }
        while (--i >= 0) {
            if ((r = this[i] - a[i]) != 0) {
                return r;
            }
        }
        return 0;
    };
    // BigInteger.prototype.bitLength = bnBitLength;
    // (public) return the number of bits in "this"
    BigInteger.prototype.bitLength = function () {
        if (this.t <= 0) {
            return 0;
        }
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
    };
    // BigInteger.prototype.mod = bnMod;
    // (public) this mod a
    BigInteger.prototype.mod = function (a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            a.subTo(r, r);
        }
        return r;
    };
    // BigInteger.prototype.modPowInt = bnModPowInt;
    // (public) this^e % m, 0 <= e < 2^32
    BigInteger.prototype.modPowInt = function (e, m) {
        var z;
        if (e < 256 || m.isEven()) {
            z = new Classic(m);
        }
        else {
            z = new Montgomery(m);
        }
        return this.exp(e, z);
    };
    // BigInteger.prototype.clone = bnClone;
    // (public)
    BigInteger.prototype.clone = function () {
        var r = nbi();
        this.copyTo(r);
        return r;
    };
    // BigInteger.prototype.intValue = bnIntValue;
    // (public) return value as integer
    BigInteger.prototype.intValue = function () {
        if (this.s < 0) {
            if (this.t == 1) {
                return this[0] - this.DV;
            }
            else if (this.t == 0) {
                return -1;
            }
        }
        else if (this.t == 1) {
            return this[0];
        }
        else if (this.t == 0) {
            return 0;
        }
        // assumes 16 < DB < 32
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
    };
    // BigInteger.prototype.byteValue = bnByteValue;
    // (public) return value as byte
    BigInteger.prototype.byteValue = function () {
        return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
    };
    // BigInteger.prototype.shortValue = bnShortValue;
    // (public) return value as short (assumes DB>=16)
    BigInteger.prototype.shortValue = function () {
        return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
    };
    // BigInteger.prototype.signum = bnSigNum;
    // (public) 0 if this == 0, 1 if this > 0
    BigInteger.prototype.signum = function () {
        if (this.s < 0) {
            return -1;
        }
        else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
            return 0;
        }
        else {
            return 1;
        }
    };
    // BigInteger.prototype.toByteArray = bnToByteArray;
    // (public) convert to bigendian byte array
    BigInteger.prototype.toByteArray = function () {
        var i = this.t;
        var r = [];
        r[0] = this.s;
        var p = this.DB - (i * this.DB) % 8;
        var d;
        var k = 0;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
                r[k++] = d | (this.s << (this.DB - p));
            }
            while (i >= 0) {
                if (p < 8) {
                    d = (this[i] & ((1 << p) - 1)) << (8 - p);
                    d |= this[--i] >> (p += this.DB - 8);
                }
                else {
                    d = (this[i] >> (p -= 8)) & 0xff;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if ((d & 0x80) != 0) {
                    d |= -256;
                }
                if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
                    ++k;
                }
                if (k > 0 || d != this.s) {
                    r[k++] = d;
                }
            }
        }
        return r;
    };
    // BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.equals = function (a) {
        return (this.compareTo(a) == 0);
    };
    // BigInteger.prototype.min = bnMin;
    BigInteger.prototype.min = function (a) {
        return (this.compareTo(a) < 0) ? this : a;
    };
    // BigInteger.prototype.max = bnMax;
    BigInteger.prototype.max = function (a) {
        return (this.compareTo(a) > 0) ? this : a;
    };
    // BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.and = function (a) {
        var r = nbi();
        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_and, r);
        return r;
    };
    // BigInteger.prototype.or = bnOr;
    BigInteger.prototype.or = function (a) {
        var r = nbi();
        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_or, r);
        return r;
    };
    // BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.xor = function (a) {
        var r = nbi();
        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_xor, r);
        return r;
    };
    // BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.andNot = function (a) {
        var r = nbi();
        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_andnot, r);
        return r;
    };
    // BigInteger.prototype.not = bnNot;
    // (public) ~this
    BigInteger.prototype.not = function () {
        var r = nbi();
        for (var i = 0; i < this.t; ++i) {
            r[i] = this.DM & ~this[i];
        }
        r.t = this.t;
        r.s = ~this.s;
        return r;
    };
    // BigInteger.prototype.shiftLeft = bnShiftLeft;
    // (public) this << n
    BigInteger.prototype.shiftLeft = function (n) {
        var r = nbi();
        if (n < 0) {
            this.rShiftTo(-n, r);
        }
        else {
            this.lShiftTo(n, r);
        }
        return r;
    };
    // BigInteger.prototype.shiftRight = bnShiftRight;
    // (public) this >> n
    BigInteger.prototype.shiftRight = function (n) {
        var r = nbi();
        if (n < 0) {
            this.lShiftTo(-n, r);
        }
        else {
            this.rShiftTo(n, r);
        }
        return r;
    };
    // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    // (public) returns index of lowest 1-bit (or -1 if none)
    BigInteger.prototype.getLowestSetBit = function () {
        for (var i = 0; i < this.t; ++i) {
            if (this[i] != 0) {
                return i * this.DB + (0,_util__WEBPACK_IMPORTED_MODULE_0__.lbit)(this[i]);
            }
        }
        if (this.s < 0) {
            return this.t * this.DB;
        }
        return -1;
    };
    // BigInteger.prototype.bitCount = bnBitCount;
    // (public) return number of set bits
    BigInteger.prototype.bitCount = function () {
        var r = 0;
        var x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i) {
            r += (0,_util__WEBPACK_IMPORTED_MODULE_0__.cbit)(this[i] ^ x);
        }
        return r;
    };
    // BigInteger.prototype.testBit = bnTestBit;
    // (public) true iff nth bit is set
    BigInteger.prototype.testBit = function (n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t) {
            return (this.s != 0);
        }
        return ((this[j] & (1 << (n % this.DB))) != 0);
    };
    // BigInteger.prototype.setBit = bnSetBit;
    // (public) this | (1<<n)
    BigInteger.prototype.setBit = function (n) {
        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_or);
    };
    // BigInteger.prototype.clearBit = bnClearBit;
    // (public) this & ~(1<<n)
    BigInteger.prototype.clearBit = function (n) {
        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_andnot);
    };
    // BigInteger.prototype.flipBit = bnFlipBit;
    // (public) this ^ (1<<n)
    BigInteger.prototype.flipBit = function (n) {
        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_xor);
    };
    // BigInteger.prototype.add = bnAdd;
    // (public) this + a
    BigInteger.prototype.add = function (a) {
        var r = nbi();
        this.addTo(a, r);
        return r;
    };
    // BigInteger.prototype.subtract = bnSubtract;
    // (public) this - a
    BigInteger.prototype.subtract = function (a) {
        var r = nbi();
        this.subTo(a, r);
        return r;
    };
    // BigInteger.prototype.multiply = bnMultiply;
    // (public) this * a
    BigInteger.prototype.multiply = function (a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r;
    };
    // BigInteger.prototype.divide = bnDivide;
    // (public) this / a
    BigInteger.prototype.divide = function (a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r;
    };
    // BigInteger.prototype.remainder = bnRemainder;
    // (public) this % a
    BigInteger.prototype.remainder = function (a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r;
    };
    // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    // (public) [this/a,this%a]
    BigInteger.prototype.divideAndRemainder = function (a) {
        var q = nbi();
        var r = nbi();
        this.divRemTo(a, q, r);
        return [q, r];
    };
    // BigInteger.prototype.modPow = bnModPow;
    // (public) this^e % m (HAC 14.85)
    BigInteger.prototype.modPow = function (e, m) {
        var i = e.bitLength();
        var k;
        var r = nbv(1);
        var z;
        if (i <= 0) {
            return r;
        }
        else if (i < 18) {
            k = 1;
        }
        else if (i < 48) {
            k = 3;
        }
        else if (i < 144) {
            k = 4;
        }
        else if (i < 768) {
            k = 5;
        }
        else {
            k = 6;
        }
        if (i < 8) {
            z = new Classic(m);
        }
        else if (m.isEven()) {
            z = new Barrett(m);
        }
        else {
            z = new Montgomery(m);
        }
        // precomputation
        var g = [];
        var n = 3;
        var k1 = k - 1;
        var km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
            var g2 = nbi();
            z.sqrTo(g[1], g2);
            while (n <= km) {
                g[n] = nbi();
                z.mulTo(g2, g[n - 2], g[n]);
                n += 2;
            }
        }
        var j = e.t - 1;
        var w;
        var is1 = true;
        var r2 = nbi();
        var t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
            if (i >= k1) {
                w = (e[j] >> (i - k1)) & km;
            }
            else {
                w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
                if (j > 0) {
                    w |= e[j - 1] >> (this.DB + i - k1);
                }
            }
            n = k;
            while ((w & 1) == 0) {
                w >>= 1;
                --n;
            }
            if ((i -= n) < 0) {
                i += this.DB;
                --j;
            }
            if (is1) { // ret == 1, don't bother squaring or multiplying it
                g[w].copyTo(r);
                is1 = false;
            }
            else {
                while (n > 1) {
                    z.sqrTo(r, r2);
                    z.sqrTo(r2, r);
                    n -= 2;
                }
                if (n > 0) {
                    z.sqrTo(r, r2);
                }
                else {
                    t = r;
                    r = r2;
                    r2 = t;
                }
                z.mulTo(r2, g[w], r);
            }
            while (j >= 0 && (e[j] & (1 << i)) == 0) {
                z.sqrTo(r, r2);
                t = r;
                r = r2;
                r2 = t;
                if (--i < 0) {
                    i = this.DB - 1;
                    --j;
                }
            }
        }
        return z.revert(r);
    };
    // BigInteger.prototype.modInverse = bnModInverse;
    // (public) 1/this % m (HAC 14.61)
    BigInteger.prototype.modInverse = function (m) {
        var ac = m.isEven();
        if ((this.isEven() && ac) || m.signum() == 0) {
            return BigInteger.ZERO;
        }
        var u = m.clone();
        var v = this.clone();
        var a = nbv(1);
        var b = nbv(0);
        var c = nbv(0);
        var d = nbv(1);
        while (u.signum() != 0) {
            while (u.isEven()) {
                u.rShiftTo(1, u);
                if (ac) {
                    if (!a.isEven() || !b.isEven()) {
                        a.addTo(this, a);
                        b.subTo(m, b);
                    }
                    a.rShiftTo(1, a);
                }
                else if (!b.isEven()) {
                    b.subTo(m, b);
                }
                b.rShiftTo(1, b);
            }
            while (v.isEven()) {
                v.rShiftTo(1, v);
                if (ac) {
                    if (!c.isEven() || !d.isEven()) {
                        c.addTo(this, c);
                        d.subTo(m, d);
                    }
                    c.rShiftTo(1, c);
                }
                else if (!d.isEven()) {
                    d.subTo(m, d);
                }
                d.rShiftTo(1, d);
            }
            if (u.compareTo(v) >= 0) {
                u.subTo(v, u);
                if (ac) {
                    a.subTo(c, a);
                }
                b.subTo(d, b);
            }
            else {
                v.subTo(u, v);
                if (ac) {
                    c.subTo(a, c);
                }
                d.subTo(b, d);
            }
        }
        if (v.compareTo(BigInteger.ONE) != 0) {
            return BigInteger.ZERO;
        }
        if (d.compareTo(m) >= 0) {
            return d.subtract(m);
        }
        if (d.signum() < 0) {
            d.addTo(m, d);
        }
        else {
            return d;
        }
        if (d.signum() < 0) {
            return d.add(m);
        }
        else {
            return d;
        }
    };
    // BigInteger.prototype.pow = bnPow;
    // (public) this^e
    BigInteger.prototype.pow = function (e) {
        return this.exp(e, new NullExp());
    };
    // BigInteger.prototype.gcd = bnGCD;
    // (public) gcd(this,a) (HAC 14.54)
    BigInteger.prototype.gcd = function (a) {
        var x = (this.s < 0) ? this.negate() : this.clone();
        var y = (a.s < 0) ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t;
        }
        var i = x.getLowestSetBit();
        var g = y.getLowestSetBit();
        if (g < 0) {
            return x;
        }
        if (i < g) {
            g = i;
        }
        if (g > 0) {
            x.rShiftTo(g, x);
            y.rShiftTo(g, y);
        }
        while (x.signum() > 0) {
            if ((i = x.getLowestSetBit()) > 0) {
                x.rShiftTo(i, x);
            }
            if ((i = y.getLowestSetBit()) > 0) {
                y.rShiftTo(i, y);
            }
            if (x.compareTo(y) >= 0) {
                x.subTo(y, x);
                x.rShiftTo(1, x);
            }
            else {
                y.subTo(x, y);
                y.rShiftTo(1, y);
            }
        }
        if (g > 0) {
            y.lShiftTo(g, y);
        }
        return y;
    };
    // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    // (public) test primality with certainty >= 1-.5^t
    BigInteger.prototype.isProbablePrime = function (t) {
        var i;
        var x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
            for (i = 0; i < lowprimes.length; ++i) {
                if (x[0] == lowprimes[i]) {
                    return true;
                }
            }
            return false;
        }
        if (x.isEven()) {
            return false;
        }
        i = 1;
        while (i < lowprimes.length) {
            var m = lowprimes[i];
            var j = i + 1;
            while (j < lowprimes.length && m < lplim) {
                m *= lowprimes[j++];
            }
            m = x.modInt(m);
            while (i < j) {
                if (m % lowprimes[i++] == 0) {
                    return false;
                }
            }
        }
        return x.millerRabin(t);
    };
    //#endregion PUBLIC
    //#region PROTECTED
    // BigInteger.prototype.copyTo = bnpCopyTo;
    // (protected) copy this to r
    BigInteger.prototype.copyTo = function (r) {
        for (var i = this.t - 1; i >= 0; --i) {
            r[i] = this[i];
        }
        r.t = this.t;
        r.s = this.s;
    };
    // BigInteger.prototype.fromInt = bnpFromInt;
    // (protected) set from integer value x, -DV <= x < DV
    BigInteger.prototype.fromInt = function (x) {
        this.t = 1;
        this.s = (x < 0) ? -1 : 0;
        if (x > 0) {
            this[0] = x;
        }
        else if (x < -1) {
            this[0] = x + this.DV;
        }
        else {
            this.t = 0;
        }
    };
    // BigInteger.prototype.fromString = bnpFromString;
    // (protected) set from string and radix
    BigInteger.prototype.fromString = function (s, b) {
        var k;
        if (b == 16) {
            k = 4;
        }
        else if (b == 8) {
            k = 3;
        }
        else if (b == 256) {
            k = 8;
            /* byte array */
        }
        else if (b == 2) {
            k = 1;
        }
        else if (b == 32) {
            k = 5;
        }
        else if (b == 4) {
            k = 2;
        }
        else {
            this.fromRadix(s, b);
            return;
        }
        this.t = 0;
        this.s = 0;
        var i = s.length;
        var mi = false;
        var sh = 0;
        while (--i >= 0) {
            var x = (k == 8) ? (+s[i]) & 0xff : intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-") {
                    mi = true;
                }
                continue;
            }
            mi = false;
            if (sh == 0) {
                this[this.t++] = x;
            }
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh));
            }
            else {
                this[this.t - 1] |= x << sh;
            }
            sh += k;
            if (sh >= this.DB) {
                sh -= this.DB;
            }
        }
        if (k == 8 && ((+s[0]) & 0x80) != 0) {
            this.s = -1;
            if (sh > 0) {
                this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
            }
        }
        this.clamp();
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    // BigInteger.prototype.clamp = bnpClamp;
    // (protected) clamp off excess high words
    BigInteger.prototype.clamp = function () {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) {
            --this.t;
        }
    };
    // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    // (protected) r = this << n*DB
    BigInteger.prototype.dlShiftTo = function (n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + n] = this[i];
        }
        for (i = n - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r.t = this.t + n;
        r.s = this.s;
    };
    // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    // (protected) r = this >> n*DB
    BigInteger.prototype.drShiftTo = function (n, r) {
        for (var i = n; i < this.t; ++i) {
            r[i - n] = this[i];
        }
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
    };
    // BigInteger.prototype.lShiftTo = bnpLShiftTo;
    // (protected) r = this << n
    BigInteger.prototype.lShiftTo = function (n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB);
        var c = (this.s << bs) & this.DM;
        for (var i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = (this[i] >> cbs) | c;
            c = (this[i] & bm) << bs;
        }
        for (var i = ds - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
    };
    // BigInteger.prototype.rShiftTo = bnpRShiftTo;
    // (protected) r = this >> n
    BigInteger.prototype.rShiftTo = function (n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) {
            r[this.t - ds - 1] |= (this.s & bm) << cbs;
        }
        r.t = this.t - ds;
        r.clamp();
    };
    // BigInteger.prototype.subTo = bnpSubTo;
    // (protected) r = this - a
    BigInteger.prototype.subTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c -= a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c < -1) {
            r[i++] = this.DV + c;
        }
        else if (c > 0) {
            r[i++] = c;
        }
        r.t = i;
        r.clamp();
    };
    // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyTo = function (a, r) {
        var x = this.abs();
        var y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < y.t; ++i) {
            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        }
        r.s = 0;
        r.clamp();
        if (this.s != a.s) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    // BigInteger.prototype.squareTo = bnpSquareTo;
    // (protected) r = this^2, r != this (HAC 14.16)
    BigInteger.prototype.squareTo = function (r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1;
            }
        }
        if (r.t > 0) {
            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        }
        r.s = 0;
        r.clamp();
    };
    // BigInteger.prototype.divRemTo = bnpDivRemTo;
    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    BigInteger.prototype.divRemTo = function (m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0) {
            return;
        }
        var pt = this.abs();
        if (pt.t < pm.t) {
            if (q != null) {
                q.fromInt(0);
            }
            if (r != null) {
                this.copyTo(r);
            }
            return;
        }
        if (r == null) {
            r = nbi();
        }
        var y = nbi();
        var ts = this.s;
        var ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
        if (nsh > 0) {
            pm.lShiftTo(nsh, y);
            pt.lShiftTo(nsh, r);
        }
        else {
            pm.copyTo(y);
            pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) {
            return;
        }
        var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt;
        var d2 = (1 << this.F1) / yt;
        var e = 1 << this.F2;
        var i = r.t;
        var j = i - ys;
        var t = (q == null) ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y); // "negative" y so we can replace sub with am later
        while (y.t < ys) {
            y[y.t++] = 0;
        }
        while (--j >= 0) {
            // Estimate quotient digit
            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
                y.dlShiftTo(j, t);
                r.subTo(t, r);
                while (r[i] < --qd) {
                    r.subTo(t, r);
                }
            }
        }
        if (q != null) {
            r.drShiftTo(ys, q);
            if (ts != ms) {
                BigInteger.ZERO.subTo(q, q);
            }
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) {
            r.rShiftTo(nsh, r);
        } // Denormalize remainder
        if (ts < 0) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    // BigInteger.prototype.invDigit = bnpInvDigit;
    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    BigInteger.prototype.invDigit = function () {
        if (this.t < 1) {
            return 0;
        }
        var x = this[0];
        if ((x & 1) == 0) {
            return 0;
        }
        var y = x & 3; // y == 1/x mod 2^2
        y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
        y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
        y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
        // last step - calculate inverse mod DV directly;
        // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
        y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
        // we really want the negative inverse, and -DV < y < DV
        return (y > 0) ? this.DV - y : -y;
    };
    // BigInteger.prototype.isEven = bnpIsEven;
    // (protected) true iff this is even
    BigInteger.prototype.isEven = function () {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
    };
    // BigInteger.prototype.exp = bnpExp;
    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    BigInteger.prototype.exp = function (e, z) {
        if (e > 0xffffffff || e < 1) {
            return BigInteger.ONE;
        }
        var r = nbi();
        var r2 = nbi();
        var g = z.convert(this);
        var i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
            z.sqrTo(r, r2);
            if ((e & (1 << i)) > 0) {
                z.mulTo(r2, g, r);
            }
            else {
                var t = r;
                r = r2;
                r2 = t;
            }
        }
        return z.revert(r);
    };
    // BigInteger.prototype.chunkSize = bnpChunkSize;
    // (protected) return x s.t. r^x < DV
    BigInteger.prototype.chunkSize = function (r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r));
    };
    // BigInteger.prototype.toRadix = bnpToRadix;
    // (protected) convert to radix string
    BigInteger.prototype.toRadix = function (b) {
        if (b == null) {
            b = 10;
        }
        if (this.signum() == 0 || b < 2 || b > 36) {
            return "0";
        }
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a);
        var y = nbi();
        var z = nbi();
        var r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
            r = (a + z.intValue()).toString(b).substr(1) + r;
            y.divRemTo(d, y, z);
        }
        return z.intValue().toString(b) + r;
    };
    // BigInteger.prototype.fromRadix = bnpFromRadix;
    // (protected) convert from radix string
    BigInteger.prototype.fromRadix = function (s, b) {
        this.fromInt(0);
        if (b == null) {
            b = 10;
        }
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs);
        var mi = false;
        var j = 0;
        var w = 0;
        for (var i = 0; i < s.length; ++i) {
            var x = intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-" && this.signum() == 0) {
                    mi = true;
                }
                continue;
            }
            w = b * w + x;
            if (++j >= cs) {
                this.dMultiply(d);
                this.dAddOffset(w, 0);
                j = 0;
                w = 0;
            }
        }
        if (j > 0) {
            this.dMultiply(Math.pow(b, j));
            this.dAddOffset(w, 0);
        }
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    // BigInteger.prototype.fromNumber = bnpFromNumber;
    // (protected) alternate constructor
    BigInteger.prototype.fromNumber = function (a, b, c) {
        if ("number" == typeof b) {
            // new BigInteger(int,int,RNG)
            if (a < 2) {
                this.fromInt(1);
            }
            else {
                this.fromNumber(a, c);
                if (!this.testBit(a - 1)) {
                    // force MSB set
                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util__WEBPACK_IMPORTED_MODULE_0__.op_or, this);
                }
                if (this.isEven()) {
                    this.dAddOffset(1, 0);
                } // force odd
                while (!this.isProbablePrime(b)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > a) {
                        this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
                    }
                }
            }
        }
        else {
            // new BigInteger(int,RNG)
            var x = [];
            var t = a & 7;
            x.length = (a >> 3) + 1;
            b.nextBytes(x);
            if (t > 0) {
                x[0] &= ((1 << t) - 1);
            }
            else {
                x[0] = 0;
            }
            this.fromString(x, 256);
        }
    };
    // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    // (protected) r = this op a (bitwise)
    BigInteger.prototype.bitwiseTo = function (a, op, r) {
        var i;
        var f;
        var m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i) {
            r[i] = op(this[i], a[i]);
        }
        if (a.t < this.t) {
            f = a.s & this.DM;
            for (i = m; i < this.t; ++i) {
                r[i] = op(this[i], f);
            }
            r.t = this.t;
        }
        else {
            f = this.s & this.DM;
            for (i = m; i < a.t; ++i) {
                r[i] = op(f, a[i]);
            }
            r.t = a.t;
        }
        r.s = op(this.s, a.s);
        r.clamp();
    };
    // BigInteger.prototype.changeBit = bnpChangeBit;
    // (protected) this op (1<<n)
    BigInteger.prototype.changeBit = function (n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r;
    };
    // BigInteger.prototype.addTo = bnpAddTo;
    // (protected) r = this + a
    BigInteger.prototype.addTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] + a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c += a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c += a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c > 0) {
            r[i++] = c;
        }
        else if (c < -1) {
            r[i++] = this.DV + c;
        }
        r.t = i;
        r.clamp();
    };
    // BigInteger.prototype.dMultiply = bnpDMultiply;
    // (protected) this *= n, this >= 0, 1 < n < DV
    BigInteger.prototype.dMultiply = function (n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
    };
    // BigInteger.prototype.dAddOffset = bnpDAddOffset;
    // (protected) this += n << w words, this >= 0
    BigInteger.prototype.dAddOffset = function (n, w) {
        if (n == 0) {
            return;
        }
        while (this.t <= w) {
            this[this.t++] = 0;
        }
        this[w] += n;
        while (this[w] >= this.DV) {
            this[w] -= this.DV;
            if (++w >= this.t) {
                this[this.t++] = 0;
            }
            ++this[w];
        }
    };
    // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0; // assumes a,this >= 0
        r.t = i;
        while (i > 0) {
            r[--i] = 0;
        }
        for (var j = r.t - this.t; i < j; ++i) {
            r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        }
        for (var j = Math.min(a.t, n); i < j; ++i) {
            this.am(0, a[i], r, i, 0, n - i);
        }
        r.clamp();
    };
    // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0; // assumes a,this >= 0
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
            r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        }
        r.clamp();
        r.drShiftTo(1, r);
    };
    // BigInteger.prototype.modInt = bnpModInt;
    // (protected) this % n, n < 2^26
    BigInteger.prototype.modInt = function (n) {
        if (n <= 0) {
            return 0;
        }
        var d = this.DV % n;
        var r = (this.s < 0) ? n - 1 : 0;
        if (this.t > 0) {
            if (d == 0) {
                r = this[0] % n;
            }
            else {
                for (var i = this.t - 1; i >= 0; --i) {
                    r = (d * r + this[i]) % n;
                }
            }
        }
        return r;
    };
    // BigInteger.prototype.millerRabin = bnpMillerRabin;
    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    BigInteger.prototype.millerRabin = function (t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0) {
            return false;
        }
        var r = n1.shiftRight(k);
        t = (t + 1) >> 1;
        if (t > lowprimes.length) {
            t = lowprimes.length;
        }
        var a = nbi();
        for (var i = 0; i < t; ++i) {
            // Pick bases at random, instead of starting at 2
            a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
            var y = a.modPow(r, this);
            if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
                var j = 1;
                while (j++ < k && y.compareTo(n1) != 0) {
                    y = y.modPowInt(2, this);
                    if (y.compareTo(BigInteger.ONE) == 0) {
                        return false;
                    }
                }
                if (y.compareTo(n1) != 0) {
                    return false;
                }
            }
        }
        return true;
    };
    // BigInteger.prototype.square = bnSquare;
    // (public) this^2
    BigInteger.prototype.square = function () {
        var r = nbi();
        this.squareTo(r);
        return r;
    };
    //#region ASYNC
    // Public API method
    BigInteger.prototype.gcda = function (a, callback) {
        var x = (this.s < 0) ? this.negate() : this.clone();
        var y = (a.s < 0) ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t;
        }
        var i = x.getLowestSetBit();
        var g = y.getLowestSetBit();
        if (g < 0) {
            callback(x);
            return;
        }
        if (i < g) {
            g = i;
        }
        if (g > 0) {
            x.rShiftTo(g, x);
            y.rShiftTo(g, y);
        }
        // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.
        var gcda1 = function () {
            if ((i = x.getLowestSetBit()) > 0) {
                x.rShiftTo(i, x);
            }
            if ((i = y.getLowestSetBit()) > 0) {
                y.rShiftTo(i, y);
            }
            if (x.compareTo(y) >= 0) {
                x.subTo(y, x);
                x.rShiftTo(1, x);
            }
            else {
                y.subTo(x, y);
                y.rShiftTo(1, y);
            }
            if (!(x.signum() > 0)) {
                if (g > 0) {
                    y.lShiftTo(g, y);
                }
                setTimeout(function () { callback(y); }, 0); // escape
            }
            else {
                setTimeout(gcda1, 0);
            }
        };
        setTimeout(gcda1, 10);
    };
    // (protected) alternate constructor
    BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {
        if ("number" == typeof b) {
            if (a < 2) {
                this.fromInt(1);
            }
            else {
                this.fromNumber(a, c);
                if (!this.testBit(a - 1)) {
                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util__WEBPACK_IMPORTED_MODULE_0__.op_or, this);
                }
                if (this.isEven()) {
                    this.dAddOffset(1, 0);
                }
                var bnp_1 = this;
                var bnpfn1_1 = function () {
                    bnp_1.dAddOffset(2, 0);
                    if (bnp_1.bitLength() > a) {
                        bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
                    }
                    if (bnp_1.isProbablePrime(b)) {
                        setTimeout(function () { callback(); }, 0); // escape
                    }
                    else {
                        setTimeout(bnpfn1_1, 0);
                    }
                };
                setTimeout(bnpfn1_1, 0);
            }
        }
        else {
            var x = [];
            var t = a & 7;
            x.length = (a >> 3) + 1;
            b.nextBytes(x);
            if (t > 0) {
                x[0] &= ((1 << t) - 1);
            }
            else {
                x[0] = 0;
            }
            this.fromString(x, 256);
        }
    };
    return BigInteger;
}());

//#region REDUCERS
//#region NullExp
var NullExp = /** @class */ (function () {
    function NullExp() {
    }
    // NullExp.prototype.convert = nNop;
    NullExp.prototype.convert = function (x) {
        return x;
    };
    // NullExp.prototype.revert = nNop;
    NullExp.prototype.revert = function (x) {
        return x;
    };
    // NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
    };
    // NullExp.prototype.sqrTo = nSqrTo;
    NullExp.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
    };
    return NullExp;
}());
// Modular reduction using "classic" algorithm
var Classic = /** @class */ (function () {
    function Classic(m) {
        this.m = m;
    }
    // Classic.prototype.convert = cConvert;
    Classic.prototype.convert = function (x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) {
            return x.mod(this.m);
        }
        else {
            return x;
        }
    };
    // Classic.prototype.revert = cRevert;
    Classic.prototype.revert = function (x) {
        return x;
    };
    // Classic.prototype.reduce = cReduce;
    Classic.prototype.reduce = function (x) {
        x.divRemTo(this.m, null, x);
    };
    // Classic.prototype.mulTo = cMulTo;
    Classic.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Classic.prototype.sqrTo = cSqrTo;
    Classic.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Classic;
}());
//#endregion
//#region Montgomery
// Montgomery reduction
var Montgomery = /** @class */ (function () {
    function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << (m.DB - 15)) - 1;
        this.mt2 = 2 * m.t;
    }
    // Montgomery.prototype.convert = montConvert;
    // xR mod m
    Montgomery.prototype.convert = function (x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            this.m.subTo(r, r);
        }
        return r;
    };
    // Montgomery.prototype.revert = montRevert;
    // x/R mod m
    Montgomery.prototype.revert = function (x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    };
    // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)
    Montgomery.prototype.reduce = function (x) {
        while (x.t <= this.mt2) {
            // pad x so am has enough room later
            x[x.t++] = 0;
        }
        for (var i = 0; i < this.m.t; ++i) {
            // faster way of calculating u0 = x[i]*mp mod DV
            var j = x[i] & 0x7fff;
            var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
            // use am to combine the multiply-shift-add into one call
            j = i + this.m.t;
            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
            // propagate carry
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++;
            }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r
    Montgomery.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r
    Montgomery.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Montgomery;
}());
//#endregion Montgomery
//#region Barrett
// Barrett modular reduction
var Barrett = /** @class */ (function () {
    function Barrett(m) {
        this.m = m;
        // setup Barrett
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
    }
    // Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.convert = function (x) {
        if (x.s < 0 || x.t > 2 * this.m.t) {
            return x.mod(this.m);
        }
        else if (x.compareTo(this.m) < 0) {
            return x;
        }
        else {
            var r = nbi();
            x.copyTo(r);
            this.reduce(r);
            return r;
        }
    };
    // Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.revert = function (x) {
        return x;
    };
    // Barrett.prototype.reduce = barrettReduce;
    // x = x mod m (HAC 14.42)
    Barrett.prototype.reduce = function (x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
            x.t = this.m.t + 1;
            x.clamp();
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0) {
            x.dAddOffset(1, this.m.t + 1);
        }
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Barrett.prototype.mulTo = barrettMulTo;
    // r = x*y mod m; x,y != r
    Barrett.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Barrett.prototype.sqrTo = barrettSqrTo;
    // r = x^2 mod m; x != r
    Barrett.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Barrett;
}());
//#endregion
//#endregion REDUCERS
// return new, unset BigInteger
function nbi() { return new BigInteger(null); }
function parseBigInt(str, r) {
    return new BigInteger(str, r);
}
// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
var inBrowser = typeof navigator !== "undefined";
if (inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    BigInteger.prototype.am = function am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff;
        var xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 0x7fff;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 0x3fffffff;
        }
        return c;
    };
    dbits = 30;
}
else if (inBrowser && j_lm && (navigator.appName != "Netscape")) {
    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    BigInteger.prototype.am = function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 0x4000000);
            w[j++] = v & 0x3ffffff;
        }
        return c;
    };
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    BigInteger.prototype.am = function am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff;
        var xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 0x3fff;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 0xfffffff;
        }
        return c;
    };
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
// Digit conversions
var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
}
// return bigint initialized to value
function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
}
// returns bit length of the integer x
function nbits(x) {
    var r = 1;
    var t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}
// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/jsbn.js?`)},"./lib/lib/jsbn/prng4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arcfour": () => (/* binding */ Arcfour),
/* harmony export */   "prng_newstate": () => (/* binding */ prng_newstate),
/* harmony export */   "rng_psize": () => (/* binding */ rng_psize)
/* harmony export */ });
// prng4.js - uses Arcfour as a PRNG
var Arcfour = /** @class */ (function () {
    function Arcfour() {
        this.i = 0;
        this.j = 0;
        this.S = [];
    }
    // Arcfour.prototype.init = ARC4init;
    // Initialize arcfour context from key, an array of ints, each from [0..255]
    Arcfour.prototype.init = function (key) {
        var i;
        var j;
        var t;
        for (i = 0; i < 256; ++i) {
            this.S[i] = i;
        }
        j = 0;
        for (i = 0; i < 256; ++i) {
            j = (j + this.S[i] + key[i % key.length]) & 255;
            t = this.S[i];
            this.S[i] = this.S[j];
            this.S[j] = t;
        }
        this.i = 0;
        this.j = 0;
    };
    // Arcfour.prototype.next = ARC4next;
    Arcfour.prototype.next = function () {
        var t;
        this.i = (this.i + 1) & 255;
        this.j = (this.j + this.S[this.i]) & 255;
        t = this.S[this.i];
        this.S[this.i] = this.S[this.j];
        this.S[this.j] = t;
        return this.S[(t + this.S[this.i]) & 255];
    };
    return Arcfour;
}());

// Plug in your RNG constructor here
function prng_newstate() {
    return new Arcfour();
}
// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var rng_psize = 256;


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/prng4.js?`)},"./lib/lib/jsbn/rng.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureRandom": () => (/* binding */ SecureRandom)
/* harmony export */ });
/* harmony import */ var _prng4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prng4 */ "./lib/lib/jsbn/prng4.js");
// Random number generator - requires a PRNG backend, e.g. prng4.js

var rng_state;
var rng_pool = null;
var rng_pptr;
// Initialize the pool with junk if needed.
if (rng_pool == null) {
    rng_pool = [];
    rng_pptr = 0;
    var t = void 0;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        // Extract entropy (2048 bits) from RNG if available
        var z = new Uint32Array(256);
        window.crypto.getRandomValues(z);
        for (t = 0; t < z.length; ++t) {
            rng_pool[rng_pptr++] = z[t] & 255;
        }
    }
    // Use mouse events for entropy, if we do not have enough entropy by the time
    // we need it, entropy will be generated by Math.random.
    var count = 0;
    var onMouseMoveListener_1 = function (ev) {
        count = count || 0;
        if (count >= 256 || rng_pptr >= _prng4__WEBPACK_IMPORTED_MODULE_0__.rng_psize) {
            if (window.removeEventListener) {
                window.removeEventListener("mousemove", onMouseMoveListener_1, false);
            }
            else if (window.detachEvent) {
                window.detachEvent("onmousemove", onMouseMoveListener_1);
            }
            return;
        }
        try {
            var mouseCoordinates = ev.x + ev.y;
            rng_pool[rng_pptr++] = mouseCoordinates & 255;
            count += 1;
        }
        catch (e) {
            // Sometimes Firefox will deny permission to access event properties for some reason. Ignore.
        }
    };
    if (typeof window !== 'undefined') {
        if (window.addEventListener) {
            window.addEventListener("mousemove", onMouseMoveListener_1, false);
        }
        else if (window.attachEvent) {
            window.attachEvent("onmousemove", onMouseMoveListener_1);
        }
    }
}
function rng_get_byte() {
    if (rng_state == null) {
        rng_state = (0,_prng4__WEBPACK_IMPORTED_MODULE_0__.prng_newstate)();
        // At this point, we may not have collected enough entropy.  If not, fall back to Math.random
        while (rng_pptr < _prng4__WEBPACK_IMPORTED_MODULE_0__.rng_psize) {
            var random = Math.floor(65536 * Math.random());
            rng_pool[rng_pptr++] = random & 255;
        }
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
            rng_pool[rng_pptr] = 0;
        }
        rng_pptr = 0;
    }
    // TODO: allow reseeding after first request
    return rng_state.next();
}
var SecureRandom = /** @class */ (function () {
    function SecureRandom() {
    }
    SecureRandom.prototype.nextBytes = function (ba) {
        for (var i = 0; i < ba.length; ++i) {
            ba[i] = rng_get_byte();
        }
    };
    return SecureRandom;
}());



//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/rng.js?`)},"./lib/lib/jsbn/rsa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RSAKey": () => (/* binding */ RSAKey)
/* harmony export */ });
/* harmony import */ var _jsbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsbn */ "./lib/lib/jsbn/jsbn.js");
/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng */ "./lib/lib/jsbn/rng.js");
// Depends on jsbn.js and rng.js
// Version 1.1: support utf-8 encoding in pkcs1pad2
// convert a (hex) string to a bignum object


// function linebrk(s,n) {
//   var ret = "";
//   var i = 0;
//   while(i + n < s.length) {
//     ret += s.substring(i,i+n) + "\\n";
//     i += n;
//   }
//   return ret + s.substring(i,s.length);
// }
// function byte2Hex(b) {
//   if(b < 0x10)
//     return "0" + b.toString(16);
//   else
//     return b.toString(16);
// }
function pkcs1pad1(s, n) {
    if (n < s.length + 22) {
        console.error("Message too long for RSA");
        return null;
    }
    var len = n - s.length - 6;
    var filler = "";
    for (var f = 0; f < len; f += 2) {
        filler += "ff";
    }
    var m = "0001" + filler + "00" + s;
    return (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(m, 16);
}
// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
function pkcs1pad2(s, n) {
    if (n < s.length + 11) { // TODO: fix for utf-8
        console.error("Message too long for RSA");
        return null;
    }
    var ba = [];
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
        var c = s.charCodeAt(i--);
        if (c < 128) { // encode using utf-8
            ba[--n] = c;
        }
        else if ((c > 127) && (c < 2048)) {
            ba[--n] = (c & 63) | 128;
            ba[--n] = (c >> 6) | 192;
        }
        else {
            ba[--n] = (c & 63) | 128;
            ba[--n] = ((c >> 6) & 63) | 128;
            ba[--n] = (c >> 12) | 224;
        }
    }
    ba[--n] = 0;
    var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();
    var x = [];
    while (n > 2) { // random non-zero pad
        x[0] = 0;
        while (x[0] == 0) {
            rng.nextBytes(x);
        }
        ba[--n] = x[0];
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(ba);
}
// "empty" RSA key constructor
var RSAKey = /** @class */ (function () {
    function RSAKey() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null;
    }
    //#region PROTECTED
    // protected
    // RSAKey.prototype.doPublic = RSADoPublic;
    // Perform raw public operation on "x": return x^e (mod n)
    RSAKey.prototype.doPublic = function (x) {
        return x.modPowInt(this.e, this.n);
    };
    // RSAKey.prototype.doPrivate = RSADoPrivate;
    // Perform raw private operation on "x": return x^d (mod n)
    RSAKey.prototype.doPrivate = function (x) {
        if (this.p == null || this.q == null) {
            return x.modPow(this.d, this.n);
        }
        // TODO: re-calculate any missing CRT params
        var xp = x.mod(this.p).modPow(this.dmp1, this.p);
        var xq = x.mod(this.q).modPow(this.dmq1, this.q);
        while (xp.compareTo(xq) < 0) {
            xp = xp.add(this.p);
        }
        return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
    };
    //#endregion PROTECTED
    //#region PUBLIC
    // RSAKey.prototype.setPublic = RSASetPublic;
    // Set the public key fields N and e from hex strings
    RSAKey.prototype.setPublic = function (N, E) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);
            this.e = parseInt(E, 16);
        }
        else {
            console.error("Invalid RSA public key");
        }
    };
    // RSAKey.prototype.encrypt = RSAEncrypt;
    // Return the PKCS#1 RSA encryption of "text" as an even-length hex string
    RSAKey.prototype.encrypt = function (text) {
        var maxLength = (this.n.bitLength() + 7) >> 3;
        var m = pkcs1pad2(text, maxLength);
        if (m == null) {
            return null;
        }
        var c = this.doPublic(m);
        if (c == null) {
            return null;
        }
        var h = c.toString(16);
        var length = h.length;
        // fix zero before result
        for (var i = 0; i < maxLength * 2 - length; i++) {
            h = "0" + h;
        }
        return h;
    };
    // RSAKey.prototype.setPrivate = RSASetPrivate;
    // Set the private key fields N, e, and d from hex strings
    RSAKey.prototype.setPrivate = function (N, E, D) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);
            this.e = parseInt(E, 16);
            this.d = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(D, 16);
        }
        else {
            console.error("Invalid RSA private key");
        }
    };
    // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
    // Set the private key fields N, e, d and CRT params from hex strings
    RSAKey.prototype.setPrivateEx = function (N, E, D, P, Q, DP, DQ, C) {
        if (N != null && E != null && N.length > 0 && E.length > 0) {
            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);
            this.e = parseInt(E, 16);
            this.d = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(D, 16);
            this.p = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(P, 16);
            this.q = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(Q, 16);
            this.dmp1 = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(DP, 16);
            this.dmq1 = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(DQ, 16);
            this.coeff = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(C, 16);
        }
        else {
            console.error("Invalid RSA private key");
        }
    };
    // RSAKey.prototype.generate = RSAGenerate;
    // Generate a new random private key B bits long, using public expt E
    RSAKey.prototype.generate = function (B, E) {
        var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(E, 16);
        for (;;) {
            for (;;) {
                this.p = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(B - qs, 1, rng);
                if (this.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
                    break;
                }
            }
            for (;;) {
                this.q = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(qs, 1, rng);
                if (this.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
                    break;
                }
            }
            if (this.p.compareTo(this.q) <= 0) {
                var t = this.p;
                this.p = this.q;
                this.q = t;
            }
            var p1 = this.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);
            var q1 = this.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);
            var phi = p1.multiply(q1);
            if (phi.gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0) {
                this.n = this.p.multiply(this.q);
                this.d = ee.modInverse(phi);
                this.dmp1 = this.d.mod(p1);
                this.dmq1 = this.d.mod(q1);
                this.coeff = this.q.modInverse(this.p);
                break;
            }
        }
    };
    // RSAKey.prototype.decrypt = RSADecrypt;
    // Return the PKCS#1 RSA decryption of "ctext".
    // "ctext" is an even-length hex string and the output is a plain string.
    RSAKey.prototype.decrypt = function (ctext) {
        var c = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(ctext, 16);
        var m = this.doPrivate(c);
        if (m == null) {
            return null;
        }
        return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
    };
    // Generate a new random private key B bits long, using public expt E
    RSAKey.prototype.generateAsync = function (B, E, callback) {
        var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();
        var qs = B >> 1;
        this.e = parseInt(E, 16);
        var ee = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(E, 16);
        var rsa = this;
        // These functions have non-descript names because they were originally for(;;) loops.
        // I don't know about cryptography to give them better names than loop1-4.
        var loop1 = function () {
            var loop4 = function () {
                if (rsa.p.compareTo(rsa.q) <= 0) {
                    var t = rsa.p;
                    rsa.p = rsa.q;
                    rsa.q = t;
                }
                var p1 = rsa.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);
                var q1 = rsa.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);
                var phi = p1.multiply(q1);
                if (phi.gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0) {
                    rsa.n = rsa.p.multiply(rsa.q);
                    rsa.d = ee.modInverse(phi);
                    rsa.dmp1 = rsa.d.mod(p1);
                    rsa.dmq1 = rsa.d.mod(q1);
                    rsa.coeff = rsa.q.modInverse(rsa.p);
                    setTimeout(function () { callback(); }, 0); // escape
                }
                else {
                    setTimeout(loop1, 0);
                }
            };
            var loop3 = function () {
                rsa.q = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.nbi)();
                rsa.q.fromNumberAsync(qs, 1, rng, function () {
                    rsa.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcda(ee, function (r) {
                        if (r.compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                            setTimeout(loop4, 0);
                        }
                        else {
                            setTimeout(loop3, 0);
                        }
                    });
                });
            };
            var loop2 = function () {
                rsa.p = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.nbi)();
                rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
                    rsa.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcda(ee, function (r) {
                        if (r.compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                            setTimeout(loop3, 0);
                        }
                        else {
                            setTimeout(loop2, 0);
                        }
                    });
                });
            };
            setTimeout(loop2, 0);
        };
        setTimeout(loop1, 0);
    };
    RSAKey.prototype.sign = function (text, digestMethod, digestName) {
        var header = getDigestHeader(digestName);
        var digest = header + digestMethod(text).toString();
        var m = pkcs1pad1(digest, this.n.bitLength() / 4);
        if (m == null) {
            return null;
        }
        var c = this.doPrivate(m);
        if (c == null) {
            return null;
        }
        var h = c.toString(16);
        if ((h.length & 1) == 0) {
            return h;
        }
        else {
            return "0" + h;
        }
    };
    RSAKey.prototype.verify = function (text, signature, digestMethod) {
        var c = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(signature, 16);
        var m = this.doPublic(c);
        if (m == null) {
            return null;
        }
        var unpadded = m.toString(16).replace(/^1f+00/, "");
        var digest = removeDigestHeader(unpadded);
        return digest == digestMethod(text).toString();
    };
    return RSAKey;
}());

// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] == 0) {
        ++i;
    }
    if (b.length - i != n - 1 || b[i] != 2) {
        return null;
    }
    ++i;
    while (b[i] != 0) {
        if (++i >= b.length) {
            return null;
        }
    }
    var ret = "";
    while (++i < b.length) {
        var c = b[i] & 255;
        if (c < 128) { // utf-8 decode
            ret += String.fromCharCode(c);
        }
        else if ((c > 191) && (c < 224)) {
            ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
            ++i;
        }
        else {
            ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
            i += 2;
        }
    }
    return ret;
}
// https://tools.ietf.org/html/rfc3447#page-43
var DIGEST_HEADERS = {
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    ripemd160: "3021300906052b2403020105000414"
};
function getDigestHeader(name) {
    return DIGEST_HEADERS[name] || "";
}
function removeDigestHeader(str) {
    for (var name_1 in DIGEST_HEADERS) {
        if (DIGEST_HEADERS.hasOwnProperty(name_1)) {
            var header = DIGEST_HEADERS[name_1];
            var len = header.length;
            if (str.substr(0, len) == header) {
                return str.substr(len);
            }
        }
    }
    return str;
}
// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
// function RSAEncryptB64(text) {
//  var h = this.encrypt(text);
//  if(h) return hex2b64(h); else return null;
// }
// public
// RSAKey.prototype.encrypt_b64 = RSAEncryptB64;


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/rsa.js?`)},"./lib/lib/jsbn/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cbit": () => (/* binding */ cbit),
/* harmony export */   "int2char": () => (/* binding */ int2char),
/* harmony export */   "lbit": () => (/* binding */ lbit),
/* harmony export */   "op_and": () => (/* binding */ op_and),
/* harmony export */   "op_andnot": () => (/* binding */ op_andnot),
/* harmony export */   "op_or": () => (/* binding */ op_or),
/* harmony export */   "op_xor": () => (/* binding */ op_xor)
/* harmony export */ });
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(n) {
    return BI_RM.charAt(n);
}
//#region BIT_OPERATIONS
// (public) this & a
function op_and(x, y) {
    return x & y;
}
// (public) this | a
function op_or(x, y) {
    return x | y;
}
// (public) this ^ a
function op_xor(x, y) {
    return x ^ y;
}
// (public) this & ~a
function op_andnot(x, y) {
    return x & ~y;
}
// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
    if (x == 0) {
        return -1;
    }
    var r = 0;
    if ((x & 0xffff) == 0) {
        x >>= 16;
        r += 16;
    }
    if ((x & 0xff) == 0) {
        x >>= 8;
        r += 8;
    }
    if ((x & 0xf) == 0) {
        x >>= 4;
        r += 4;
    }
    if ((x & 3) == 0) {
        x >>= 2;
        r += 2;
    }
    if ((x & 1) == 0) {
        ++r;
    }
    return r;
}
// return number of 1 bits in x
function cbit(x) {
    var r = 0;
    while (x != 0) {
        x &= x - 1;
        ++r;
    }
    return r;
}
//#endregion BIT_OPERATIONS


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/util.js?`)},"./lib/lib/jsrsasign/asn1-1.0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KJUR": () => (/* binding */ KJUR)
/* harmony export */ });
/* harmony import */ var _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsbn/jsbn */ "./lib/lib/jsbn/jsbn.js");
/* harmony import */ var _yahoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yahoo */ "./lib/lib/jsrsasign/yahoo.js");
/* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
 */
/*
 * asn1.js - ASN.1 DER encoder classes
 *
 * Copyright (c) 2013-2017 Kenji Urushima (kenji.urushima@gmail.com)
 *
 * This software is licensed under the terms of the MIT License.
 * https://kjur.github.io/jsrsasign/license
 *
 * The above copyright and license notice shall be
 * included in all copies or substantial portions of the Software.
 */


/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */
/**
 * kjur's class library name space
 * <p>
 * This name space provides following name spaces:
 * <ul>
 * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
 * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
 * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
 * class and utilities</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
 * @name KJUR
 * @namespace kjur's class library name space
 */
var KJUR = {};
/**
 * kjur's ASN.1 class library name space
 * <p>
 * This is ITU-T X.690 ASN.1 DER encoder class library and
 * class structure and methods is very similar to
 * org.bouncycastle.asn1 package of
 * well known BouncyCaslte Cryptography Library.
 * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
 * Here are ASN.1 DER primitive classes.
 * <ul>
 * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
 * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
 * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
 * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
 * <li>0x05 {@link KJUR.asn1.DERNull}</li>
 * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
 * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
 * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
 * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
 * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
 * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
 * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
 * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
 * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
 * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
 * <li>0x31 {@link KJUR.asn1.DERSet}</li>
 * </ul>
 * <h4>OTHER ASN.1 CLASSES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.ASN1Object}</li>
 * <li>{@link KJUR.asn1.DERAbstractString}</li>
 * <li>{@link KJUR.asn1.DERAbstractTime}</li>
 * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
 * <li>{@link KJUR.asn1.DERTaggedObject}</li>
 * </ul>
 * <h4>SUB NAME SPACES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
 * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
 * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
 * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
 * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace.
 * This caused by a bug of jsdoc2.
 * @name KJUR.asn1
 * @namespace
 */
if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1)
    KJUR.asn1 = {};
/**
 * ASN1 utilities class
 * @name KJUR.asn1.ASN1Util
 * @class ASN1 utilities class
 * @since asn1 1.0.2
 */
KJUR.asn1.ASN1Util = new function () {
    this.integerToByteHex = function (i) {
        var h = i.toString(16);
        if ((h.length % 2) == 1)
            h = '0' + h;
        return h;
    };
    this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
        var h = bigIntegerValue.toString(16);
        if (h.substr(0, 1) != '-') {
            if (h.length % 2 == 1) {
                h = '0' + h;
            }
            else {
                if (!h.match(/^[0-7]/)) {
                    h = '00' + h;
                }
            }
        }
        else {
            var hPos = h.substr(1);
            var xorLen = hPos.length;
            if (xorLen % 2 == 1) {
                xorLen += 1;
            }
            else {
                if (!h.match(/^[0-7]/)) {
                    xorLen += 2;
                }
            }
            var hMask = '';
            for (var i = 0; i < xorLen; i++) {
                hMask += 'f';
            }
            var biMask = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(hMask, 16);
            var biNeg = biMask.xor(bigIntegerValue).add(_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);
            h = biNeg.toString(16).replace(/^-/, '');
        }
        return h;
    };
    /**
     * get PEM string from hexadecimal data and header string
     * @name getPEMStringFromHex
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} dataHex hexadecimal string of PEM body
     * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
     * @return {String} PEM formatted string of input data
     * @description
     * This method converts a hexadecimal string to a PEM string with
     * a specified header. Its line break will be CRLF("\\r\\n").
     * @example
     * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
     * // value of pem will be:
     * -----BEGIN PRIVATE KEY-----
     * YWFh
     * -----END PRIVATE KEY-----
     */
    this.getPEMStringFromHex = function (dataHex, pemHeader) {
        return hextopem(dataHex, pemHeader);
    };
    /**
     * generate ASN1Object specifed by JSON parameters
     * @name newObject
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return {KJUR.asn1.ASN1Object} generated object
     * @since asn1 1.0.3
     * @description
     * generate any ASN1Object specified by JSON param
     * including ASN.1 primitive or structured.
     * Generally 'param' can be described as follows:
     * <blockquote>
     * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
     * </blockquote>
     * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
     * <ul>
     * <li>'bool' - DERBoolean</li>
     * <li>'int' - DERInteger</li>
     * <li>'bitstr' - DERBitString</li>
     * <li>'octstr' - DEROctetString</li>
     * <li>'null' - DERNull</li>
     * <li>'oid' - DERObjectIdentifier</li>
     * <li>'enum' - DEREnumerated</li>
     * <li>'utf8str' - DERUTF8String</li>
     * <li>'numstr' - DERNumericString</li>
     * <li>'prnstr' - DERPrintableString</li>
     * <li>'telstr' - DERTeletexString</li>
     * <li>'ia5str' - DERIA5String</li>
     * <li>'utctime' - DERUTCTime</li>
     * <li>'gentime' - DERGeneralizedTime</li>
     * <li>'seq' - DERSequence</li>
     * <li>'set' - DERSet</li>
     * <li>'tag' - DERTaggedObject</li>
     * </ul>
     * @example
     * newObject({'prnstr': 'aaa'});
     * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
     * // ASN.1 Tagged Object
     * newObject({'tag': {'tag': 'a1',
     *                    'explicit': true,
     *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
     * // more simple representation of ASN.1 Tagged Object
     * newObject({'tag': ['a1',
     *                    true,
     *                    {'seq': [
     *                      {'int': 3},
     *                      {'prnstr': 'aaa'}]}
     *                   ]});
     */
    this.newObject = function (param) {
        var _KJUR = KJUR, _KJUR_asn1 = _KJUR.asn1, _DERBoolean = _KJUR_asn1.DERBoolean, _DERInteger = _KJUR_asn1.DERInteger, _DERBitString = _KJUR_asn1.DERBitString, _DEROctetString = _KJUR_asn1.DEROctetString, _DERNull = _KJUR_asn1.DERNull, _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier, _DEREnumerated = _KJUR_asn1.DEREnumerated, _DERUTF8String = _KJUR_asn1.DERUTF8String, _DERNumericString = _KJUR_asn1.DERNumericString, _DERPrintableString = _KJUR_asn1.DERPrintableString, _DERTeletexString = _KJUR_asn1.DERTeletexString, _DERIA5String = _KJUR_asn1.DERIA5String, _DERUTCTime = _KJUR_asn1.DERUTCTime, _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime, _DERSequence = _KJUR_asn1.DERSequence, _DERSet = _KJUR_asn1.DERSet, _DERTaggedObject = _KJUR_asn1.DERTaggedObject, _newObject = _KJUR_asn1.ASN1Util.newObject;
        var keys = Object.keys(param);
        if (keys.length != 1)
            throw "key of param shall be only one.";
        var key = keys[0];
        if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1)
            throw "undefined key: " + key;
        if (key == "bool")
            return new _DERBoolean(param[key]);
        if (key == "int")
            return new _DERInteger(param[key]);
        if (key == "bitstr")
            return new _DERBitString(param[key]);
        if (key == "octstr")
            return new _DEROctetString(param[key]);
        if (key == "null")
            return new _DERNull(param[key]);
        if (key == "oid")
            return new _DERObjectIdentifier(param[key]);
        if (key == "enum")
            return new _DEREnumerated(param[key]);
        if (key == "utf8str")
            return new _DERUTF8String(param[key]);
        if (key == "numstr")
            return new _DERNumericString(param[key]);
        if (key == "prnstr")
            return new _DERPrintableString(param[key]);
        if (key == "telstr")
            return new _DERTeletexString(param[key]);
        if (key == "ia5str")
            return new _DERIA5String(param[key]);
        if (key == "utctime")
            return new _DERUTCTime(param[key]);
        if (key == "gentime")
            return new _DERGeneralizedTime(param[key]);
        if (key == "seq") {
            var paramList = param[key];
            var a = [];
            for (var i = 0; i < paramList.length; i++) {
                var asn1Obj = _newObject(paramList[i]);
                a.push(asn1Obj);
            }
            return new _DERSequence({ 'array': a });
        }
        if (key == "set") {
            var paramList = param[key];
            var a = [];
            for (var i = 0; i < paramList.length; i++) {
                var asn1Obj = _newObject(paramList[i]);
                a.push(asn1Obj);
            }
            return new _DERSet({ 'array': a });
        }
        if (key == "tag") {
            var tagParam = param[key];
            if (Object.prototype.toString.call(tagParam) === '[object Array]' &&
                tagParam.length == 3) {
                var obj = _newObject(tagParam[2]);
                return new _DERTaggedObject({ tag: tagParam[0],
                    explicit: tagParam[1],
                    obj: obj });
            }
            else {
                var newParam = {};
                if (tagParam.explicit !== undefined)
                    newParam.explicit = tagParam.explicit;
                if (tagParam.tag !== undefined)
                    newParam.tag = tagParam.tag;
                if (tagParam.obj === undefined)
                    throw "obj shall be specified for 'tag'.";
                newParam.obj = _newObject(tagParam.obj);
                return new _DERTaggedObject(newParam);
            }
        }
    };
    /**
     * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
     * @name jsonToASN1HEX
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return hexadecimal string of ASN1Object
     * @since asn1 1.0.4
     * @description
     * As for ASN.1 object representation of JSON object,
     * please see {@link newObject}.
     * @example
     * jsonToASN1HEX({'prnstr': 'aaa'});
     */
    this.jsonToASN1HEX = function (param) {
        var asn1Obj = this.newObject(param);
        return asn1Obj.getEncodedHex();
    };
};
/**
 * get dot noted oid number string from hexadecimal value of OID
 * @name oidHexToInt
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} hex hexadecimal value of object identifier
 * @return {String} dot noted string of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from hexadecimal string representation of
 * ASN.1 value of object identifier to oid number string.
 * @example
 * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
 */
KJUR.asn1.ASN1Util.oidHexToInt = function (hex) {
    var s = "";
    var i01 = parseInt(hex.substr(0, 2), 16);
    var i0 = Math.floor(i01 / 40);
    var i1 = i01 % 40;
    var s = i0 + "." + i1;
    var binbuf = "";
    for (var i = 2; i < hex.length; i += 2) {
        var value = parseInt(hex.substr(i, 2), 16);
        var bin = ("00000000" + value.toString(2)).slice(-8);
        binbuf = binbuf + bin.substr(1, 7);
        if (bin.substr(0, 1) == "0") {
            var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(binbuf, 2);
            s = s + "." + bi.toString(10);
            binbuf = "";
        }
    }
    ;
    return s;
};
/**
 * get hexadecimal value of object identifier from dot noted oid value
 * @name oidIntToHex
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} oidString dot noted string of object identifier
 * @return {String} hexadecimal value of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from object identifier value string.
 * to hexadecimal string representation of it.
 * @example
 * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
 */
KJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {
    var itox = function (i) {
        var h = i.toString(16);
        if (h.length == 1)
            h = '0' + h;
        return h;
    };
    var roidtox = function (roid) {
        var h = '';
        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(roid, 10);
        var b = bi.toString(2);
        var padLen = 7 - b.length % 7;
        if (padLen == 7)
            padLen = 0;
        var bPad = '';
        for (var i = 0; i < padLen; i++)
            bPad += '0';
        b = bPad + b;
        for (var i = 0; i < b.length - 1; i += 7) {
            var b8 = b.substr(i, 7);
            if (i != b.length - 7)
                b8 = '1' + b8;
            h += itox(parseInt(b8, 2));
        }
        return h;
    };
    if (!oidString.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + oidString;
    }
    var h = '';
    var a = oidString.split('.');
    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
    h += itox(i0);
    a.splice(0, 2);
    for (var i = 0; i < a.length; i++) {
        h += roidtox(a[i]);
    }
    return h;
};
// ********************************************************************
//  Abstract ASN.1 Classes
// ********************************************************************
// ********************************************************************
/**
 * base class for ASN.1 DER encoder object
 * @name KJUR.asn1.ASN1Object
 * @class base class for ASN.1 DER encoder object
 * @property {Boolean} isModified flag whether internal data was changed
 * @property {String} hTLV hexadecimal string of ASN.1 TLV
 * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
 * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
 * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
 * @description
 */
KJUR.asn1.ASN1Object = function () {
    var isModified = true;
    var hTLV = null;
    var hT = '00';
    var hL = '00';
    var hV = '';
    /**
     * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
     * @name getLengthHexFromValue
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV length(L)
     */
    this.getLengthHexFromValue = function () {
        if (typeof this.hV == "undefined" || this.hV == null) {
            throw "this.hV is null or undefined.";
        }
        if (this.hV.length % 2 == 1) {
            throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
        }
        var n = this.hV.length / 2;
        var hN = n.toString(16);
        if (hN.length % 2 == 1) {
            hN = "0" + hN;
        }
        if (n < 128) {
            return hN;
        }
        else {
            var hNlen = hN.length / 2;
            if (hNlen > 15) {
                throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
            }
            var head = 128 + hNlen;
            return head.toString(16) + hN;
        }
    };
    /**
     * get hexadecimal string of ASN.1 TLV bytes
     * @name getEncodedHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV
     */
    this.getEncodedHex = function () {
        if (this.hTLV == null || this.isModified) {
            this.hV = this.getFreshValueHex();
            this.hL = this.getLengthHexFromValue();
            this.hTLV = this.hT + this.hL + this.hV;
            this.isModified = false;
            //alert("first time: " + this.hTLV);
        }
        return this.hTLV;
    };
    /**
     * get hexadecimal string of ASN.1 TLV value(V) bytes
     * @name getValueHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
     */
    this.getValueHex = function () {
        this.getEncodedHex();
        return this.hV;
    };
    this.getFreshValueHex = function () {
        return '';
    };
};
// == BEGIN DERAbstractString ================================================
/**
 * base class for ASN.1 DER string classes
 * @name KJUR.asn1.DERAbstractString
 * @class base class for ASN.1 DER string classes
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @property {String} s internal string of value
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERAbstractString = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var s = null;
    var hV = null;
    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @return {String} string value of this string object
     */
    this.getString = function () {
        return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newS value by a string to set
     */
    this.setString = function (newS) {
        this.hTLV = null;
        this.isModified = true;
        this.s = newS;
        this.hV = stohex(this.s);
    };
    /**
     * set value by a hexadecimal string
     * @name setStringHex
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newHexString value by a hexadecimal string to set
     */
    this.setStringHex = function (newHexString) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = newHexString;
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params == "string") {
            this.setString(params);
        }
        else if (typeof params['str'] != "undefined") {
            this.setString(params['str']);
        }
        else if (typeof params['hex'] != "undefined") {
            this.setStringHex(params['hex']);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
// == END   DERAbstractString ================================================
// == BEGIN DERAbstractTime ==================================================
/**
 * base class for ASN.1 DER Generalized/UTCTime class
 * @name KJUR.asn1.DERAbstractTime
 * @class base class for ASN.1 DER Generalized/UTCTime class
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERAbstractTime = function (params) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
    var s = null;
    var date = null;
    // --- PRIVATE METHODS --------------------
    this.localDateToUTC = function (d) {
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var utcDate = new Date(utc);
        return utcDate;
    };
    /*
     * format date string by Data object
     * @name formatDate
     * @memberOf KJUR.asn1.AbstractTime;
     * @param {Date} dateObject
     * @param {string} type 'utc' or 'gen'
     * @param {boolean} withMillis flag for with millisections or not
     * @description
     * 'withMillis' flag is supported from asn1 1.0.6.
     */
    this.formatDate = function (dateObject, type, withMillis) {
        var pad = this.zeroPadding;
        var d = this.localDateToUTC(dateObject);
        var year = String(d.getFullYear());
        if (type == 'utc')
            year = year.substr(2, 2);
        var month = pad(String(d.getMonth() + 1), 2);
        var day = pad(String(d.getDate()), 2);
        var hour = pad(String(d.getHours()), 2);
        var min = pad(String(d.getMinutes()), 2);
        var sec = pad(String(d.getSeconds()), 2);
        var s = year + month + day + hour + min + sec;
        if (withMillis === true) {
            var millis = d.getMilliseconds();
            if (millis != 0) {
                var sMillis = pad(String(millis), 3);
                sMillis = sMillis.replace(/[0]+$/, "");
                s = s + "." + sMillis;
            }
        }
        return s + "Z";
    };
    this.zeroPadding = function (s, len) {
        if (s.length >= len)
            return s;
        return new Array(len - s.length + 1).join('0') + s;
    };
    // --- PUBLIC METHODS --------------------
    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @return {String} string value of this time object
     */
    this.getString = function () {
        return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {String} newS value by a string to set such like "130430235959Z"
     */
    this.setString = function (newS) {
        this.hTLV = null;
        this.isModified = true;
        this.s = newS;
        this.hV = stohex(newS);
    };
    /**
     * set value by a Date object
     * @name setByDateValue
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {Integer} year year of date (ex. 2013)
     * @param {Integer} month month of date between 1 and 12 (ex. 12)
     * @param {Integer} day day of month
     * @param {Integer} hour hours of date
     * @param {Integer} min minutes of date
     * @param {Integer} sec seconds of date
     */
    this.setByDateValue = function (year, month, day, hour, min, sec) {
        var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
        this.setByDate(dateObject);
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
// == END   DERAbstractTime ==================================================
// == BEGIN DERAbstractStructured ============================================
/**
 * base class for ASN.1 DER structured class
 * @name KJUR.asn1.DERAbstractStructured
 * @class base class for ASN.1 DER structured class
 * @property {Array} asn1Array internal array of ASN1Object
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERAbstractStructured = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var asn1Array = null;
    /**
     * set value by array of ASN1Object
     * @name setByASN1ObjectArray
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {array} asn1ObjectArray array of ASN1Object to set
     */
    this.setByASN1ObjectArray = function (asn1ObjectArray) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array = asn1ObjectArray;
    };
    /**
     * append an ASN1Object to internal array
     * @name appendASN1Object
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {ASN1Object} asn1Object to add
     */
    this.appendASN1Object = function (asn1Object) {
        this.hTLV = null;
        this.isModified = true;
        this.asn1Array.push(asn1Object);
    };
    this.asn1Array = new Array();
    if (typeof params != "undefined") {
        if (typeof params['array'] != "undefined") {
            this.asn1Array = params['array'];
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
// ********************************************************************
//  ASN.1 Object Classes
// ********************************************************************
// ********************************************************************
/**
 * class for ASN.1 DER Boolean
 * @name KJUR.asn1.DERBoolean
 * @class class for ASN.1 DER Boolean
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERBoolean = function () {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER Integer
 * @name KJUR.asn1.DERInteger
 * @class class for ASN.1 DER Integer
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERInteger = function (params) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */
    this.setByBigInteger = function (bigIntegerValue) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DERInteger
     * @function
     * @param {Integer} integer value to set
     */
    this.setByInteger = function (intValue) {
        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(String(intValue), 10);
        this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     * @example
     * new KJUR.asn1.DERInteger(123);
     * new KJUR.asn1.DERInteger({'int': 123});
     * new KJUR.asn1.DERInteger({'hex': '1fad'});
     */
    this.setValueHex = function (newHexString) {
        this.hV = newHexString;
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params['bigint'] != "undefined") {
            this.setByBigInteger(params['bigint']);
        }
        else if (typeof params['int'] != "undefined") {
            this.setByInteger(params['int']);
        }
        else if (typeof params == "number") {
            this.setByInteger(params);
        }
        else if (typeof params['hex'] != "undefined") {
            this.setValueHex(params['hex']);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER encoded BitString primitive
 * @name KJUR.asn1.DERBitString
 * @class class for ASN.1 DER encoded BitString primitive
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>bin - specify binary string (ex. '10111')</li>
 * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
 * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
 * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
 * argument for "BitString encapsulates" structure.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: 'obj' parameter have been supported since
 * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
 * @example
 * // default constructor
 * o = new KJUR.asn1.DERBitString();
 * // initialize with binary string
 * o = new KJUR.asn1.DERBitString({bin: "1011"});
 * // initialize with boolean array
 * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
 * // initialize with hexadecimal string (04 is unused bits)
 * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
 * // initialize with ASN1Util.newObject argument for encapsulated
 * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // BIT STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */
KJUR.asn1.DERBitString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
        var o = KJUR.asn1.ASN1Util.newObject(params.obj);
        params.hex = "00" + o.getEncodedHex();
    }
    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";
    /**
     * set ASN.1 value(V) by a hexadecimal string including unused bits
     * @name setHexValueIncludingUnusedBits
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} newHexStringIncludingUnusedBits
     */
    this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = newHexStringIncludingUnusedBits;
    };
    /**
     * set ASN.1 value(V) by unused bit and hexadecimal string of value
     * @name setUnusedBitsAndHexValue
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {Integer} unusedBits
     * @param {String} hValue
     */
    this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
        if (unusedBits < 0 || 7 < unusedBits) {
            throw "unused bits shall be from 0 to 7: u = " + unusedBits;
        }
        var hUnusedBits = "0" + unusedBits;
        this.hTLV = null;
        this.isModified = true;
        this.hV = hUnusedBits + hValue;
    };
    /**
     * set ASN.1 DER BitString by binary string<br/>
     * @name setByBinaryString
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} binaryString binary value string (i.e. '10111')
     * @description
     * Its unused bits will be calculated automatically by length of
     * 'binaryValue'. <br/>
     * NOTE: Trailing zeros '0' will be ignored.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray("01011");
     */
    this.setByBinaryString = function (binaryString) {
        binaryString = binaryString.replace(/0+$/, '');
        var unusedBits = 8 - binaryString.length % 8;
        if (unusedBits == 8)
            unusedBits = 0;
        for (var i = 0; i <= unusedBits; i++) {
            binaryString += '0';
        }
        var h = '';
        for (var i = 0; i < binaryString.length - 1; i += 8) {
            var b = binaryString.substr(i, 8);
            var x = parseInt(b, 2).toString(16);
            if (x.length == 1)
                x = '0' + x;
            h += x;
        }
        this.hTLV = null;
        this.isModified = true;
        this.hV = '0' + unusedBits + h;
    };
    /**
     * set ASN.1 TLV value(V) by an array of boolean<br/>
     * @name setByBooleanArray
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {array} booleanArray array of boolean (ex. [true, false, true])
     * @description
     * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray([false, true, false, true, true]);
     */
    this.setByBooleanArray = function (booleanArray) {
        var s = '';
        for (var i = 0; i < booleanArray.length; i++) {
            if (booleanArray[i] == true) {
                s += '1';
            }
            else {
                s += '0';
            }
        }
        this.setByBinaryString(s);
    };
    /**
     * generate an array of falses with specified length<br/>
     * @name newFalseArray
     * @memberOf KJUR.asn1.DERBitString
     * @function
     * @param {Integer} nLength length of array to generate
     * @return {array} array of boolean falses
     * @description
     * This static method may be useful to initialize boolean array.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.newFalseArray(3) &rarr; [false, false, false]
     */
    this.newFalseArray = function (nLength) {
        var a = new Array(nLength);
        for (var i = 0; i < nLength; i++) {
            a[i] = false;
        }
        return a;
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
            this.setHexValueIncludingUnusedBits(params);
        }
        else if (typeof params['hex'] != "undefined") {
            this.setHexValueIncludingUnusedBits(params['hex']);
        }
        else if (typeof params['bin'] != "undefined") {
            this.setByBinaryString(params['bin']);
        }
        else if (typeof params['array'] != "undefined") {
            this.setByBooleanArray(params['array']);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER OctetString<br/>
 * @name KJUR.asn1.DEROctetString
 * @class class for ASN.1 DER OctetString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * This class provides ASN.1 OctetString simple type.<br/>
 * Supported "params" attributes are:
 * <ul>
 * <li>str - to set a string as a value</li>
 * <li>hex - to set a hexadecimal string as a value</li>
 * <li>obj - to set a encapsulated ASN.1 value by JSON object
 * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
 * </ul>
 * NOTE: A parameter 'obj' have been supported
 * for "OCTET STRING, encapsulates" structure.
 * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
 * @see KJUR.asn1.DERAbstractString - superclass
 * @example
 * // default constructor
 * o = new KJUR.asn1.DEROctetString();
 * // initialize with string
 * o = new KJUR.asn1.DEROctetString({str: "aaa"});
 * // initialize with hexadecimal string
 * o = new KJUR.asn1.DEROctetString({hex: "616161"});
 * // initialize with ASN1Util.newObject argument
 * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // OCTET STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */
KJUR.asn1.DEROctetString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
        var o = KJUR.asn1.ASN1Util.newObject(params.obj);
        params.hex = o.getEncodedHex();
    }
    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
    this.hT = "04";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER Null
 * @name KJUR.asn1.DERNull
 * @class class for ASN.1 DER Null
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */
KJUR.asn1.DERNull = function () {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER ObjectIdentifier
 * @name KJUR.asn1.DERObjectIdentifier
 * @class class for ASN.1 DER ObjectIdentifier
 * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERObjectIdentifier = function (params) {
    var itox = function (i) {
        var h = i.toString(16);
        if (h.length == 1)
            h = '0' + h;
        return h;
    };
    var roidtox = function (roid) {
        var h = '';
        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(roid, 10);
        var b = bi.toString(2);
        var padLen = 7 - b.length % 7;
        if (padLen == 7)
            padLen = 0;
        var bPad = '';
        for (var i = 0; i < padLen; i++)
            bPad += '0';
        b = bPad + b;
        for (var i = 0; i < b.length - 1; i += 7) {
            var b8 = b.substr(i, 7);
            if (i != b.length - 7)
                b8 = '1' + b8;
            h += itox(parseInt(b8, 2));
        }
        return h;
    };
    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";
    /**
     * set value by a hexadecimal string
     * @name setValueHex
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} newHexString hexadecimal value of OID bytes
     */
    this.setValueHex = function (newHexString) {
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = newHexString;
    };
    /**
     * set value by a OID string<br/>
     * @name setValueOidString
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidString OID string (ex. 2.5.4.13)
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueOidString("2.5.4.13");
     */
    this.setValueOidString = function (oidString) {
        if (!oidString.match(/^[0-9.]+$/)) {
            throw "malformed oid string: " + oidString;
        }
        var h = '';
        var a = oidString.split('.');
        var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
        h += itox(i0);
        a.splice(0, 2);
        for (var i = 0; i < a.length; i++) {
            h += roidtox(a[i]);
        }
        this.hTLV = null;
        this.isModified = true;
        this.s = null;
        this.hV = h;
    };
    /**
     * set value by a OID name
     * @name setValueName
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidName OID name (ex. 'serverAuth')
     * @since 1.0.1
     * @description
     * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
     * Otherwise raise error.
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueName("serverAuth");
     */
    this.setValueName = function (oidName) {
        var oid = KJUR.asn1.x509.OID.name2oid(oidName);
        if (oid !== '') {
            this.setValueOidString(oid);
        }
        else {
            throw "DERObjectIdentifier oidName undefined: " + oidName;
        }
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (params !== undefined) {
        if (typeof params === "string") {
            if (params.match(/^[0-2].[0-9.]+$/)) {
                this.setValueOidString(params);
            }
            else {
                this.setValueName(params);
            }
        }
        else if (params.oid !== undefined) {
            this.setValueOidString(params.oid);
        }
        else if (params.hex !== undefined) {
            this.setValueHex(params.hex);
        }
        else if (params.name !== undefined) {
            this.setValueName(params.name);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER Enumerated
 * @name KJUR.asn1.DEREnumerated
 * @class class for ASN.1 DER Enumerated
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * @example
 * new KJUR.asn1.DEREnumerated(123);
 * new KJUR.asn1.DEREnumerated({int: 123});
 * new KJUR.asn1.DEREnumerated({hex: '1fad'});
 */
KJUR.asn1.DEREnumerated = function (params) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */
    this.setByBigInteger = function (bigIntegerValue) {
        this.hTLV = null;
        this.isModified = true;
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {Integer} integer value to set
     */
    this.setByInteger = function (intValue) {
        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(String(intValue), 10);
        this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     */
    this.setValueHex = function (newHexString) {
        this.hV = newHexString;
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params['int'] != "undefined") {
            this.setByInteger(params['int']);
        }
        else if (typeof params == "number") {
            this.setByInteger(params);
        }
        else if (typeof params['hex'] != "undefined") {
            this.setValueHex(params['hex']);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);
// ********************************************************************
/**
 * class for ASN.1 DER UTF8String
 * @name KJUR.asn1.DERUTF8String
 * @class class for ASN.1 DER UTF8String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERUTF8String = function (params) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
    this.hT = "0c";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER NumericString
 * @name KJUR.asn1.DERNumericString
 * @class class for ASN.1 DER NumericString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERNumericString = function (params) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
    this.hT = "12";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER PrintableString
 * @name KJUR.asn1.DERPrintableString
 * @class class for ASN.1 DER PrintableString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERPrintableString = function (params) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
    this.hT = "13";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER TeletexString
 * @name KJUR.asn1.DERTeletexString
 * @class class for ASN.1 DER TeletexString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERTeletexString = function (params) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
    this.hT = "14";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER IA5String
 * @name KJUR.asn1.DERIA5String
 * @class class for ASN.1 DER IA5String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */
KJUR.asn1.DERIA5String = function (params) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
    this.hT = "16";
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
// ********************************************************************
/**
 * class for ASN.1 DER UTCTime
 * @name KJUR.asn1.DERUTCTime
 * @class class for ASN.1 DER UTCTime
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * <h4>EXAMPLES</h4>
 * @example
 * d1 = new KJUR.asn1.DERUTCTime();
 * d1.setString('130430125959Z');
 *
 * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
 * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
 * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
 */
KJUR.asn1.DERUTCTime = function (params) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
    this.hT = "17";
    /**
     * set value by a Date object<br/>
     * @name setByDate
     * @memberOf KJUR.asn1.DERUTCTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * o = new KJUR.asn1.DERUTCTime();
     * o.setByDate(new Date("2016/12/31"));
     */
    this.setByDate = function (dateObject) {
        this.hTLV = null;
        this.isModified = true;
        this.date = dateObject;
        this.s = this.formatDate(this.date, 'utc');
        this.hV = stohex(this.s);
    };
    this.getFreshValueHex = function () {
        if (typeof this.date == "undefined" && typeof this.s == "undefined") {
            this.date = new Date();
            this.s = this.formatDate(this.date, 'utc');
            this.hV = stohex(this.s);
        }
        return this.hV;
    };
    if (params !== undefined) {
        if (params.str !== undefined) {
            this.setString(params.str);
        }
        else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
            this.setString(params);
        }
        else if (params.hex !== undefined) {
            this.setStringHex(params.hex);
        }
        else if (params.date !== undefined) {
            this.setByDate(params.date);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
// ********************************************************************
/**
 * class for ASN.1 DER GeneralizedTime
 * @name KJUR.asn1.DERGeneralizedTime
 * @class class for ASN.1 DER GeneralizedTime
 * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
 * @property {Boolean} withMillis flag to show milliseconds or not
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
 * </ul>
 * NOTE1: 'params' can be omitted.
 * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
 */
KJUR.asn1.DERGeneralizedTime = function (params) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
    this.hT = "18";
    this.withMillis = false;
    /**
     * set value by a Date object
     * @name setByDate
     * @memberOf KJUR.asn1.DERGeneralizedTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * When you specify UTC time, use 'Date.UTC' method like this:<br/>
     * o1 = new DERUTCTime();
     * o1.setByDate(date);
     *
     * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
     */
    this.setByDate = function (dateObject) {
        this.hTLV = null;
        this.isModified = true;
        this.date = dateObject;
        this.s = this.formatDate(this.date, 'gen', this.withMillis);
        this.hV = stohex(this.s);
    };
    this.getFreshValueHex = function () {
        if (this.date === undefined && this.s === undefined) {
            this.date = new Date();
            this.s = this.formatDate(this.date, 'gen', this.withMillis);
            this.hV = stohex(this.s);
        }
        return this.hV;
    };
    if (params !== undefined) {
        if (params.str !== undefined) {
            this.setString(params.str);
        }
        else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
            this.setString(params);
        }
        else if (params.hex !== undefined) {
            this.setStringHex(params.hex);
        }
        else if (params.date !== undefined) {
            this.setByDate(params.date);
        }
        if (params.millis === true) {
            this.withMillis = true;
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
// ********************************************************************
/**
 * class for ASN.1 DER Sequence
 * @name KJUR.asn1.DERSequence
 * @class class for ASN.1 DER Sequence
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */
KJUR.asn1.DERSequence = function (params) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
    this.hT = "30";
    this.getFreshValueHex = function () {
        var h = '';
        for (var i = 0; i < this.asn1Array.length; i++) {
            var asn1Obj = this.asn1Array[i];
            h += asn1Obj.getEncodedHex();
        }
        this.hV = h;
        return this.hV;
    };
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
// ********************************************************************
/**
 * class for ASN.1 DER Set
 * @name KJUR.asn1.DERSet
 * @class class for ASN.1 DER Set
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: sortflag is supported since 1.0.5.
 */
KJUR.asn1.DERSet = function (params) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, params);
    this.hT = "31";
    this.sortFlag = true; // item shall be sorted only in ASN.1 DER
    this.getFreshValueHex = function () {
        var a = new Array();
        for (var i = 0; i < this.asn1Array.length; i++) {
            var asn1Obj = this.asn1Array[i];
            a.push(asn1Obj.getEncodedHex());
        }
        if (this.sortFlag == true)
            a.sort();
        this.hV = a.join('');
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params.sortflag != "undefined" &&
            params.sortflag == false)
            this.sortFlag = false;
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
// ********************************************************************
/**
 * class for ASN.1 DER TaggedObject
 * @name KJUR.asn1.DERTaggedObject
 * @class class for ASN.1 DER TaggedObject
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
 * For example, if you find '[1]' tag in a ASN.1 dump,
 * 'tagNoHex' will be 'a1'.
 * <br/>
 * As for optional argument 'params' for constructor, you can specify *ANY* of
 * following properties:
 * <ul>
 * <li>explicit - specify true if this is explicit tag otherwise false
 *     (default is 'true').</li>
 * <li>tag - specify tag (default is 'a0' which means [0])</li>
 * <li>obj - specify ASN1Object which is tagged</li>
 * </ul>
 * @example
 * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
 * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
 * hex = d2.getEncodedHex();
 */
KJUR.asn1.DERTaggedObject = function (params) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = '';
    this.isExplicit = true;
    this.asn1Object = null;
    /**
     * set value by an ASN1Object
     * @name setString
     * @memberOf KJUR.asn1.DERTaggedObject#
     * @function
     * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
     * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
     * @param {ASN1Object} asn1Object ASN.1 to encapsulate
     */
    this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
        this.hT = tagNoHex;
        this.isExplicit = isExplicitFlag;
        this.asn1Object = asn1Object;
        if (this.isExplicit) {
            this.hV = this.asn1Object.getEncodedHex();
            this.hTLV = null;
            this.isModified = true;
        }
        else {
            this.hV = null;
            this.hTLV = asn1Object.getEncodedHex();
            this.hTLV = this.hTLV.replace(/^../, tagNoHex);
            this.isModified = false;
        }
    };
    this.getFreshValueHex = function () {
        return this.hV;
    };
    if (typeof params != "undefined") {
        if (typeof params['tag'] != "undefined") {
            this.hT = params['tag'];
        }
        if (typeof params['explicit'] != "undefined") {
            this.isExplicit = params['explicit'];
        }
        if (typeof params['obj'] != "undefined") {
            this.asn1Object = params['obj'];
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
        }
    }
};
_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsrsasign/asn1-1.0.js?`)},"./lib/lib/jsrsasign/yahoo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YAHOO": () => (/* binding */ YAHOO)
/* harmony export */ });
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var YAHOO = {};
YAHOO.lang = {
    /**
     * Utility to set up the prototype, constructor and superclass properties to
     * support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     *
     * @method extend
     * @static
     * @param {Function} subc   the object to modify
     * @param {Function} superc the object to inherit
     * @param {Object} overrides  additional properties/methods to add to the
     *                              subclass prototype.  These will override the
     *                              matching items obtained from the superclass
     *                              if present.
     */
    extend: function (subc, superc, overrides) {
        if (!superc || !subc) {
            throw new Error("YAHOO.lang.extend failed, please check that " +
                "all dependencies are included.");
        }
        var F = function () { };
        F.prototype = superc.prototype;
        subc.prototype = new F();
        subc.prototype.constructor = subc;
        subc.superclass = superc.prototype;
        if (superc.prototype.constructor == Object.prototype.constructor) {
            superc.prototype.constructor = superc;
        }
        if (overrides) {
            var i;
            for (i in overrides) {
                subc.prototype[i] = overrides[i];
            }
            /*
             * IE will not enumerate native functions in a derived object even if the
             * function was overridden.  This is a workaround for specific functions
             * we care about on the Object prototype.
             * @property _IEEnumFix
             * @param {Function} r  the object to receive the augmentation
             * @param {Function} s  the object that supplies the properties to augment
             * @static
             * @private
             */
            var _IEEnumFix = function () { }, ADD = ["toString", "valueOf"];
            try {
                if (/MSIE/.test(navigator.userAgent)) {
                    _IEEnumFix = function (r, s) {
                        for (i = 0; i < ADD.length; i = i + 1) {
                            var fname = ADD[i], f = s[fname];
                            if (typeof f === 'function' && f != Object.prototype[fname]) {
                                r[fname] = f;
                            }
                        }
                    };
                }
            }
            catch (ex) { }
            ;
            _IEEnumFix(subc.prototype, overrides);
        }
    }
};


//# sourceURL=webpack://JSEncrypt/./lib/lib/jsrsasign/yahoo.js?`)}},__webpack_module_cache__={};function __webpack_require__(e){var i=__webpack_module_cache__[e];if(i!==void 0)return i.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.d=(e,i)=>{for(var s in i)__webpack_require__.o(i,s)&&!__webpack_require__.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},__webpack_require__.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),__webpack_require__.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./lib/index.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})())();function keyGeneration(e){const i=new JSEncrypt;return{keyPair:i.getKey(),public:i.getPublicKeyB64(),private:i.getPrivateKeyB64()}}function keyProperties(e){return{E:new jsbnExports.BigInteger(e.keyPair.e.toString()),N:e.keyPair.n,D:e.keyPair.d}}function messageToHash(e){return sha256(e)}function messageToHashInt(e){const i=messageToHash(e);return new jsbnExports.BigInteger(i,16)}function blind({message:e,key:i,N:s,E:o}){const c=messageToHashInt(e);s=i?i.keyPair.n:new jsbnExports.BigInteger(s.toString()),o=i?new jsbnExports.BigInteger(i.keyPair.e.toString()):new jsbnExports.BigInteger(o.toString());const a=new jsbnExports.BigInteger("1");let h,_;do _=new jsbnExports.BigInteger(secureRandom(64)).mod(s),h=_.gcd(s);while(!h.equals(a)||_.compareTo(s)>=0||_.compareTo(a)<=0);return{blinded:c.multiply(_.modPow(o,s)).mod(s),r:_}}function sign({blinded:e,key:i,N:s,D:o}){return s=i?i.keyPair.n:new jsbnExports.BigInteger(s.toString()),o=i?i.keyPair.d:new jsbnExports.BigInteger(o.toString()),e=new jsbnExports.BigInteger(e.toString()),e.modPow(o,s)}function unblind({signed:e,key:i,r:s,N:o}){return s=new jsbnExports.BigInteger(s.toString()),o=i?i.keyPair.n:new jsbnExports.BigInteger(o.toString()),e=new jsbnExports.BigInteger(e.toString()),e.multiply(s.modInverse(o)).mod(o)}function verify({unblinded:e,key:i,message:s,E:o,N:c}){e=new jsbnExports.BigInteger(e.toString());const a=messageToHashInt(s);c=i?i.keyPair.n:new jsbnExports.BigInteger(c.toString()),o=i?new jsbnExports.BigInteger(i.keyPair.e.toString()):new jsbnExports.BigInteger(o.toString());const h=e.modPow(o,c);return a.equals(h)}function verify2({unblinded:e,key:i,message:s}){e=new jsbnExports.BigInteger(e.toString());const o=messageToHashInt(s),{D:c,N:a}=keyProperties(i),h=o.modPow(c,a);return e.equals(h)}function verifyBlinding({blinded:e,r:i,unblinded:s,key:o,E:c,N:a}){const h=messageToHashInt(s);return i=new jsbnExports.BigInteger(i.toString()),a=o?o.keyPair.n:new jsbnExports.BigInteger(a.toString()),c=o?new jsbnExports.BigInteger(o.keyPair.e.toString()):new jsbnExports.BigInteger(c.toString()),h.multiply(i.modPow(c,a)).mod(a).equals(e)}const BlindSignature={messageToHashInt,keyGeneration,messageToHash,blind,sign,unblind,verify,verify2,verifyBlinding};let initial={method:"GET",params:"",body:null,headers:{"Content-Type":"application/json"},responseType:"JSON"};const isPlainObject=e=>{var i,s;return!e||typeof e!="object"?!1:(i=Object.getPrototypeOf(e),i?(s=i.hasOwnProperty("constructor")&&i.constructor,typeof s=="function"&&s===Object):!0)},request=(e,i)=>{let s=`${e}`;const o={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Accept-Language":"en-US","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site",mode:"cors"};(i==null||typeof i!="object")&&(i={}),i.headers&&isPlainObject(i.headers)&&(i.headers=Object.assign({},initial.headers,i.headers));let{method:c="get",params:a,body:h,headers:_,responseType:d="JSON"}=Object.assign({},initial,i);if(typeof s!="string")throw new TypeError(` ${s} is not an string! `);a&&(s+=`${s.includes("?")?"&":"?"}${a}`),h!=null&&isPlainObject(h)&&(_["Content-Type"]||"application/json").includes("json")&&(h=JSON.stringify(h)),c=c.toUpperCase(),d=d.toUpperCase(),i={method:c,headers:Object.assign({},_,o)},/^(POST|PUT|PATCH)$/i.test(c)&&(i.body=h);const j=new AbortController,nn=j.signal,en=fetch(s,nn?{...i,signal:nn}:i).then(tn=>{let{status:ln,statusText:un}=tn;if(ln>=200&&ln<400){let cn;switch(d){case"TEXT":cn=tn.text();break;case"JSON":cn=tn.json();break;case"BLOB":cn=tn.blob();break;case"ARRAYBUFFER":cn=tn.arrayBuffer();break}return cn}return Promise.reject({code:"STATUS ERROR",status:ln,statusText:un})}).catch(tn=>{if(tn&&tn.code==="STATUS ERROR")switch(tn.status){}return Promise.reject(tn)});return en.abort=()=>j.abort(),en},Service={postCreate:e=>request("/api/create",{method:"post",body:e}),getAll:e=>request(`/api/getAll?key=${e}`,{method:"get"}),putLock:e=>request("/api/lock",{method:"put",body:e}),putSign:e=>request("/api/sign",{method:"put",body:e}),putAddBlind:e=>request("/api/addBlind",{method:"put",body:e}),putSubmitMessage:e=>request("/api/submitMessage",{method:"put",body:e})};var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,i,s)=>i in e?__defProp(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,__spreadValues=(e,i)=>{for(var s in i||(i={}))__hasOwnProp.call(i,s)&&__defNormalProp(e,s,i[s]);if(__getOwnPropSymbols)for(var s of __getOwnPropSymbols(i))__propIsEnum.call(i,s)&&__defNormalProp(e,s,i[s]);return e},__objRest=(e,i)=>{var s={};for(var o in e)__hasOwnProp.call(e,o)&&i.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&__getOwnPropSymbols)for(var o of __getOwnPropSymbols(e))i.indexOf(o)<0&&__propIsEnum.call(e,o)&&(s[o]=e[o]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var qrcodegen;(e=>{const i=class{constructor(d,j,nn,en){if(this.version=d,this.errorCorrectionLevel=j,this.modules=[],this.isFunction=[],d<i.MIN_VERSION||d>i.MAX_VERSION)throw new RangeError("Version value out of range");if(en<-1||en>7)throw new RangeError("Mask value out of range");this.size=d*4+17;let tn=[];for(let un=0;un<this.size;un++)tn.push(!1);for(let un=0;un<this.size;un++)this.modules.push(tn.slice()),this.isFunction.push(tn.slice());this.drawFunctionPatterns();const ln=this.addEccAndInterleave(nn);if(this.drawCodewords(ln),en==-1){let un=1e9;for(let cn=0;cn<8;cn++){this.applyMask(cn),this.drawFormatBits(cn);const mn=this.getPenaltyScore();mn<un&&(en=cn,un=mn),this.applyMask(cn)}}a(0<=en&&en<=7),this.mask=en,this.applyMask(en),this.drawFormatBits(en),this.isFunction=[]}static encodeText(d,j){const nn=e.QrSegment.makeSegments(d);return i.encodeSegments(nn,j)}static encodeBinary(d,j){const nn=e.QrSegment.makeBytes(d);return i.encodeSegments([nn],j)}static encodeSegments(d,j,nn=1,en=40,tn=-1,ln=!0){if(!(i.MIN_VERSION<=nn&&nn<=en&&en<=i.MAX_VERSION)||tn<-1||tn>7)throw new RangeError("Invalid value");let un,cn;for(un=nn;;un++){const sn=i.getNumDataCodewords(un,j)*8,fn=_.getTotalBits(d,un);if(fn<=sn){cn=fn;break}if(un>=en)throw new RangeError("Data too long")}for(const sn of[i.Ecc.MEDIUM,i.Ecc.QUARTILE,i.Ecc.HIGH])ln&&cn<=i.getNumDataCodewords(un,sn)*8&&(j=sn);let mn=[];for(const sn of d){o(sn.mode.modeBits,4,mn),o(sn.numChars,sn.mode.numCharCountBits(un),mn);for(const fn of sn.getData())mn.push(fn)}a(mn.length==cn);const an=i.getNumDataCodewords(un,j)*8;a(mn.length<=an),o(0,Math.min(4,an-mn.length),mn),o(0,(8-mn.length%8)%8,mn),a(mn.length%8==0);for(let sn=236;mn.length<an;sn^=253)o(sn,8,mn);let rn=[];for(;rn.length*8<mn.length;)rn.push(0);return mn.forEach((sn,fn)=>rn[fn>>>3]|=sn<<7-(fn&7)),new i(un,j,rn,tn)}getModule(d,j){return 0<=d&&d<this.size&&0<=j&&j<this.size&&this.modules[j][d]}getModules(){return this.modules}drawFunctionPatterns(){for(let nn=0;nn<this.size;nn++)this.setFunctionModule(6,nn,nn%2==0),this.setFunctionModule(nn,6,nn%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const d=this.getAlignmentPatternPositions(),j=d.length;for(let nn=0;nn<j;nn++)for(let en=0;en<j;en++)nn==0&&en==0||nn==0&&en==j-1||nn==j-1&&en==0||this.drawAlignmentPattern(d[nn],d[en]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(d){const j=this.errorCorrectionLevel.formatBits<<3|d;let nn=j;for(let tn=0;tn<10;tn++)nn=nn<<1^(nn>>>9)*1335;const en=(j<<10|nn)^21522;a(en>>>15==0);for(let tn=0;tn<=5;tn++)this.setFunctionModule(8,tn,c(en,tn));this.setFunctionModule(8,7,c(en,6)),this.setFunctionModule(8,8,c(en,7)),this.setFunctionModule(7,8,c(en,8));for(let tn=9;tn<15;tn++)this.setFunctionModule(14-tn,8,c(en,tn));for(let tn=0;tn<8;tn++)this.setFunctionModule(this.size-1-tn,8,c(en,tn));for(let tn=8;tn<15;tn++)this.setFunctionModule(8,this.size-15+tn,c(en,tn));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let d=this.version;for(let nn=0;nn<12;nn++)d=d<<1^(d>>>11)*7973;const j=this.version<<12|d;a(j>>>18==0);for(let nn=0;nn<18;nn++){const en=c(j,nn),tn=this.size-11+nn%3,ln=Math.floor(nn/3);this.setFunctionModule(tn,ln,en),this.setFunctionModule(ln,tn,en)}}drawFinderPattern(d,j){for(let nn=-4;nn<=4;nn++)for(let en=-4;en<=4;en++){const tn=Math.max(Math.abs(en),Math.abs(nn)),ln=d+en,un=j+nn;0<=ln&&ln<this.size&&0<=un&&un<this.size&&this.setFunctionModule(ln,un,tn!=2&&tn!=4)}}drawAlignmentPattern(d,j){for(let nn=-2;nn<=2;nn++)for(let en=-2;en<=2;en++)this.setFunctionModule(d+en,j+nn,Math.max(Math.abs(en),Math.abs(nn))!=1)}setFunctionModule(d,j,nn){this.modules[j][d]=nn,this.isFunction[j][d]=!0}addEccAndInterleave(d){const j=this.version,nn=this.errorCorrectionLevel;if(d.length!=i.getNumDataCodewords(j,nn))throw new RangeError("Invalid argument");const en=i.NUM_ERROR_CORRECTION_BLOCKS[nn.ordinal][j],tn=i.ECC_CODEWORDS_PER_BLOCK[nn.ordinal][j],ln=Math.floor(i.getNumRawDataModules(j)/8),un=en-ln%en,cn=Math.floor(ln/en);let mn=[];const an=i.reedSolomonComputeDivisor(tn);for(let sn=0,fn=0;sn<en;sn++){let dn=d.slice(fn,fn+cn-tn+(sn<un?0:1));fn+=dn.length;const En=i.reedSolomonComputeRemainder(dn,an);sn<un&&dn.push(0),mn.push(dn.concat(En))}let rn=[];for(let sn=0;sn<mn[0].length;sn++)mn.forEach((fn,dn)=>{(sn!=cn-tn||dn>=un)&&rn.push(fn[sn])});return a(rn.length==ln),rn}drawCodewords(d){if(d.length!=Math.floor(i.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let j=0;for(let nn=this.size-1;nn>=1;nn-=2){nn==6&&(nn=5);for(let en=0;en<this.size;en++)for(let tn=0;tn<2;tn++){const ln=nn-tn,cn=(nn+1&2)==0?this.size-1-en:en;!this.isFunction[cn][ln]&&j<d.length*8&&(this.modules[cn][ln]=c(d[j>>>3],7-(j&7)),j++)}}a(j==d.length*8)}applyMask(d){if(d<0||d>7)throw new RangeError("Mask value out of range");for(let j=0;j<this.size;j++)for(let nn=0;nn<this.size;nn++){let en;switch(d){case 0:en=(nn+j)%2==0;break;case 1:en=j%2==0;break;case 2:en=nn%3==0;break;case 3:en=(nn+j)%3==0;break;case 4:en=(Math.floor(nn/3)+Math.floor(j/2))%2==0;break;case 5:en=nn*j%2+nn*j%3==0;break;case 6:en=(nn*j%2+nn*j%3)%2==0;break;case 7:en=((nn+j)%2+nn*j%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[j][nn]&&en&&(this.modules[j][nn]=!this.modules[j][nn])}}getPenaltyScore(){let d=0;for(let tn=0;tn<this.size;tn++){let ln=!1,un=0,cn=[0,0,0,0,0,0,0];for(let mn=0;mn<this.size;mn++)this.modules[tn][mn]==ln?(un++,un==5?d+=i.PENALTY_N1:un>5&&d++):(this.finderPenaltyAddHistory(un,cn),ln||(d+=this.finderPenaltyCountPatterns(cn)*i.PENALTY_N3),ln=this.modules[tn][mn],un=1);d+=this.finderPenaltyTerminateAndCount(ln,un,cn)*i.PENALTY_N3}for(let tn=0;tn<this.size;tn++){let ln=!1,un=0,cn=[0,0,0,0,0,0,0];for(let mn=0;mn<this.size;mn++)this.modules[mn][tn]==ln?(un++,un==5?d+=i.PENALTY_N1:un>5&&d++):(this.finderPenaltyAddHistory(un,cn),ln||(d+=this.finderPenaltyCountPatterns(cn)*i.PENALTY_N3),ln=this.modules[mn][tn],un=1);d+=this.finderPenaltyTerminateAndCount(ln,un,cn)*i.PENALTY_N3}for(let tn=0;tn<this.size-1;tn++)for(let ln=0;ln<this.size-1;ln++){const un=this.modules[tn][ln];un==this.modules[tn][ln+1]&&un==this.modules[tn+1][ln]&&un==this.modules[tn+1][ln+1]&&(d+=i.PENALTY_N2)}let j=0;for(const tn of this.modules)j=tn.reduce((ln,un)=>ln+(un?1:0),j);const nn=this.size*this.size,en=Math.ceil(Math.abs(j*20-nn*10)/nn)-1;return a(0<=en&&en<=9),d+=en*i.PENALTY_N4,a(0<=d&&d<=2568888),d}getAlignmentPatternPositions(){if(this.version==1)return[];{const d=Math.floor(this.version/7)+2,j=this.version==32?26:Math.ceil((this.version*4+4)/(d*2-2))*2;let nn=[6];for(let en=this.size-7;nn.length<d;en-=j)nn.splice(1,0,en);return nn}}static getNumRawDataModules(d){if(d<i.MIN_VERSION||d>i.MAX_VERSION)throw new RangeError("Version number out of range");let j=(16*d+128)*d+64;if(d>=2){const nn=Math.floor(d/7)+2;j-=(25*nn-10)*nn-55,d>=7&&(j-=36)}return a(208<=j&&j<=29648),j}static getNumDataCodewords(d,j){return Math.floor(i.getNumRawDataModules(d)/8)-i.ECC_CODEWORDS_PER_BLOCK[j.ordinal][d]*i.NUM_ERROR_CORRECTION_BLOCKS[j.ordinal][d]}static reedSolomonComputeDivisor(d){if(d<1||d>255)throw new RangeError("Degree out of range");let j=[];for(let en=0;en<d-1;en++)j.push(0);j.push(1);let nn=1;for(let en=0;en<d;en++){for(let tn=0;tn<j.length;tn++)j[tn]=i.reedSolomonMultiply(j[tn],nn),tn+1<j.length&&(j[tn]^=j[tn+1]);nn=i.reedSolomonMultiply(nn,2)}return j}static reedSolomonComputeRemainder(d,j){let nn=j.map(en=>0);for(const en of d){const tn=en^nn.shift();nn.push(0),j.forEach((ln,un)=>nn[un]^=i.reedSolomonMultiply(ln,tn))}return nn}static reedSolomonMultiply(d,j){if(d>>>8||j>>>8)throw new RangeError("Byte out of range");let nn=0;for(let en=7;en>=0;en--)nn=nn<<1^(nn>>>7)*285,nn^=(j>>>en&1)*d;return a(nn>>>8==0),nn}finderPenaltyCountPatterns(d){const j=d[1];a(j<=this.size*3);const nn=j>0&&d[2]==j&&d[3]==j*3&&d[4]==j&&d[5]==j;return(nn&&d[0]>=j*4&&d[6]>=j?1:0)+(nn&&d[6]>=j*4&&d[0]>=j?1:0)}finderPenaltyTerminateAndCount(d,j,nn){return d&&(this.finderPenaltyAddHistory(j,nn),j=0),j+=this.size,this.finderPenaltyAddHistory(j,nn),this.finderPenaltyCountPatterns(nn)}finderPenaltyAddHistory(d,j){j[0]==0&&(d+=this.size),j.pop(),j.unshift(d)}};let s=i;s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=s;function o(d,j,nn){if(j<0||j>31||d>>>j)throw new RangeError("Value out of range");for(let en=j-1;en>=0;en--)nn.push(d>>>en&1)}function c(d,j){return(d>>>j&1)!=0}function a(d){if(!d)throw new Error("Assertion error")}const h=class{constructor(d,j,nn){if(this.mode=d,this.numChars=j,this.bitData=nn,j<0)throw new RangeError("Invalid argument");this.bitData=nn.slice()}static makeBytes(d){let j=[];for(const nn of d)o(nn,8,j);return new h(h.Mode.BYTE,d.length,j)}static makeNumeric(d){if(!h.isNumeric(d))throw new RangeError("String contains non-numeric characters");let j=[];for(let nn=0;nn<d.length;){const en=Math.min(d.length-nn,3);o(parseInt(d.substr(nn,en),10),en*3+1,j),nn+=en}return new h(h.Mode.NUMERIC,d.length,j)}static makeAlphanumeric(d){if(!h.isAlphanumeric(d))throw new RangeError("String contains unencodable characters in alphanumeric mode");let j=[],nn;for(nn=0;nn+2<=d.length;nn+=2){let en=h.ALPHANUMERIC_CHARSET.indexOf(d.charAt(nn))*45;en+=h.ALPHANUMERIC_CHARSET.indexOf(d.charAt(nn+1)),o(en,11,j)}return nn<d.length&&o(h.ALPHANUMERIC_CHARSET.indexOf(d.charAt(nn)),6,j),new h(h.Mode.ALPHANUMERIC,d.length,j)}static makeSegments(d){return d==""?[]:h.isNumeric(d)?[h.makeNumeric(d)]:h.isAlphanumeric(d)?[h.makeAlphanumeric(d)]:[h.makeBytes(h.toUtf8ByteArray(d))]}static makeEci(d){let j=[];if(d<0)throw new RangeError("ECI assignment value out of range");if(d<1<<7)o(d,8,j);else if(d<1<<14)o(2,2,j),o(d,14,j);else if(d<1e6)o(6,3,j),o(d,21,j);else throw new RangeError("ECI assignment value out of range");return new h(h.Mode.ECI,0,j)}static isNumeric(d){return h.NUMERIC_REGEX.test(d)}static isAlphanumeric(d){return h.ALPHANUMERIC_REGEX.test(d)}getData(){return this.bitData.slice()}static getTotalBits(d,j){let nn=0;for(const en of d){const tn=en.mode.numCharCountBits(j);if(en.numChars>=1<<tn)return 1/0;nn+=4+tn+en.bitData.length}return nn}static toUtf8ByteArray(d){d=encodeURI(d);let j=[];for(let nn=0;nn<d.length;nn++)d.charAt(nn)!="%"?j.push(d.charCodeAt(nn)):(j.push(parseInt(d.substr(nn+1,2),16)),nn+=2);return j}};let _=h;_.NUMERIC_REGEX=/^[0-9]*$/,_.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,_.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=_})(qrcodegen||(qrcodegen={}));(e=>{(i=>{const s=class{constructor(c,a){this.ordinal=c,this.formatBits=a}};let o=s;o.LOW=new s(0,1),o.MEDIUM=new s(1,0),o.QUARTILE=new s(2,3),o.HIGH=new s(3,2),i.Ecc=o})(e.QrCode||(e.QrCode={}))})(qrcodegen||(qrcodegen={}));(e=>{(i=>{const s=class{constructor(c,a){this.modeBits=c,this.numBitsCharCount=a}numCharCountBits(c){return this.numBitsCharCount[Math.floor((c+7)/17)]}};let o=s;o.NUMERIC=new s(1,[10,12,14]),o.ALPHANUMERIC=new s(2,[9,11,13]),o.BYTE=new s(4,[8,16,16]),o.KANJI=new s(8,[8,10,12]),o.ECI=new s(7,[0,0,0]),i.Mode=o})(e.QrSegment||(e.QrSegment={}))})(qrcodegen||(qrcodegen={}));var qrcodegen_default=qrcodegen;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var ERROR_LEVEL_MAP={L:qrcodegen_default.QrCode.Ecc.LOW,M:qrcodegen_default.QrCode.Ecc.MEDIUM,Q:qrcodegen_default.QrCode.Ecc.QUARTILE,H:qrcodegen_default.QrCode.Ecc.HIGH},DEFAULT_SIZE=128,DEFAULT_LEVEL="L",DEFAULT_BGCOLOR="#FFFFFF",DEFAULT_FGCOLOR="#000000",DEFAULT_INCLUDEMARGIN=!1,MARGIN_SIZE=4,DEFAULT_IMG_SCALE=.1;function generatePath(e,i=0){const s=[];return e.forEach(function(o,c){let a=null;o.forEach(function(h,_){if(!h&&a!==null){s.push(`M${a+i} ${c+i}h${_-a}v1H${a+i}z`),a=null;return}if(_===o.length-1){if(!h)return;a===null?s.push(`M${_+i},${c+i} h1v1H${_+i}z`):s.push(`M${a+i},${c+i} h${_+1-a}v1H${a+i}z`);return}h&&a===null&&(a=_)})}),s.join("")}function excavateModules(e,i){return e.slice().map((s,o)=>o<i.y||o>=i.y+i.h?s:s.map((c,a)=>a<i.x||a>=i.x+i.w?c:!1))}function getImageSettings(e,i,s,o){if(o==null)return null;const c=s?MARGIN_SIZE:0,a=e.length+c*2,h=Math.floor(i*DEFAULT_IMG_SCALE),_=a/i,d=(o.width||h)*_,j=(o.height||h)*_,nn=o.x==null?e.length/2-d/2:o.x*_,en=o.y==null?e.length/2-j/2:o.y*_;let tn=null;if(o.excavate){let ln=Math.floor(nn),un=Math.floor(en),cn=Math.ceil(d+nn-ln),mn=Math.ceil(j+en-un);tn={x:ln,y:un,w:cn,h:mn}}return{x:nn,y:en,h:j,w:d,excavation:tn}}var SUPPORTS_PATH2D=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function QRCodeCanvas(e){const i=e,{value:s,size:o=DEFAULT_SIZE,level:c=DEFAULT_LEVEL,bgColor:a=DEFAULT_BGCOLOR,fgColor:h=DEFAULT_FGCOLOR,includeMargin:_=DEFAULT_INCLUDEMARGIN,style:d,imageSettings:j}=i,nn=__objRest(i,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),en=j==null?void 0:j.src,tn=reactExports.useRef(null),ln=reactExports.useRef(null),[un,cn]=reactExports.useState(!1);reactExports.useEffect(()=>{if(tn.current!=null){const rn=tn.current,sn=rn.getContext("2d");if(!sn)return;let fn=qrcodegen_default.QrCode.encodeText(s,ERROR_LEVEL_MAP[c]).getModules();const dn=_?MARGIN_SIZE:0,En=fn.length+dn*2,yn=getImageSettings(fn,o,_,j),bn=ln.current,Rn=yn!=null&&bn!==null&&bn.complete&&bn.naturalHeight!==0&&bn.naturalWidth!==0;Rn&&yn.excavation!=null&&(fn=excavateModules(fn,yn.excavation));const xn=window.devicePixelRatio||1;rn.height=rn.width=o*xn;const kn=o/En*xn;sn.scale(kn,kn),sn.fillStyle=a,sn.fillRect(0,0,En,En),sn.fillStyle=h,SUPPORTS_PATH2D?sn.fill(new Path2D(generatePath(fn,dn))):fn.forEach(function(Ln,Kn){Ln.forEach(function(qn,Yn){qn&&sn.fillRect(Yn+dn,Kn+dn,1,1)})}),Rn&&sn.drawImage(bn,yn.x+dn,yn.y+dn,yn.w,yn.h)}}),reactExports.useEffect(()=>{cn(!1)},[en]);const mn=__spreadValues({height:o,width:o},d);let an=null;return en!=null&&(an=React.createElement("img",{src:en,key:en,style:{display:"none"},onLoad:()=>{cn(!0)},ref:ln})),React.createElement(React.Fragment,null,React.createElement("canvas",__spreadValues({style:mn,height:o,width:o,ref:tn},nn)),an)}let timer,getData;const Host=({data:e,signCallback:i,pubKey:s})=>{const o=async(h,_)=>{const d=JSON.parse(localStorage.getItem("rsa")||"{}"),j=_??BlindSignature.sign({blinded:h,N:d.N,D:d.D}).toString();await Service.putSign({blinded:h,key:d.N,singed:j,privateKey:d.D}),i()},c=async()=>{const h=Object.keys((e==null?void 0:e.blinded)||{}),_=h.length||0;for(let d=0;d<_;d++)e!=null&&e.blinded&&(e==null?void 0:e.blinded[h[d]])===null&&await o(h[d])},a=async()=>{const h=JSON.parse(localStorage.getItem("rsa")||"{}");await Service.putLock({key:h.N,privateKey:h.D})};return jsxs(Fragment,{children:[jsxs("div",{className:"host-wrapper",children:[jsxs("div",{style:{border:"1px solid #333",padding:"8px",borderRadius:"5px"},children:[jsx("div",{children:jsx("button",{disabled:e==null?void 0:e.isLock,onClick:()=>a(),children:"Lock"})}),jsx(QRCodeCanvas,{value:window.location.href,fgColor:e!=null&&e.isLock?"#ff6633":"#000",size:200}),jsxs("a",{style:{display:"block",wordBreak:"break-all"},href:window.location.href,children:["URL: ",window.location.href]})]}),jsxs("div",{style:{border:"1px solid #333",padding:"8px",borderRadius:"5px"},children:[jsxs("div",{children:[jsxs("b",{children:["Joiner: ",Object.keys((e==null?void 0:e.blinded)||{}).length]}),jsx("button",{hidden:e==null?void 0:e.isLock,disabled:Object.keys((e==null?void 0:e.blinded)||{}).length===0,onClick:()=>c(),children:"Sign All"})]}),Object.keys((e==null?void 0:e.blinded)||{}).map(h=>jsxs("div",{className:"blind-list",children:[jsx("div",{title:h,className:"ellipsis",children:h}),jsx("div",{title:e==null?void 0:e.blinded[h],className:"ellipsis",children:e==null?void 0:e.blinded[h]}),jsx("button",{disabled:!!(e!=null&&e.blinded[h]),onClick:()=>o(h),children:"Sign"})]},h))]})]}),jsx(MessageTable,{data:e==null?void 0:e.messages,globalPubKey:s})]})},Joiner=({data:e,roomRsa:i,pubKey:s})=>{const[o,c]=reactExports.useState(""),a=async()=>{!(i!=null&&i.N)||!(i!=null&&i.D)||await Service.putAddBlind({key:s,blinded:i.blinded})},h=(e==null?void 0:e.blinded)&&(e==null?void 0:e.blinded[(i==null?void 0:i.blinded)||""]),_=Object.keys((e==null?void 0:e.blinded)||{}).includes((i==null?void 0:i.blinded)||""),d=h&&(i==null?void 0:i.r)&&BlindSignature.unblind({signed:h,r:i.r,N:s}).toString()||"",j=d&&(e==null?void 0:e.isLock)&&BlindSignature.verify({unblinded:d,message:i==null?void 0:i.N,E:i==null?void 0:i.e,N:s}),nn=async()=>{if(!(i!=null&&i.N)||!(i!=null&&i.D)||!d||!o)return;const en=BlindSignature.sign({blinded:BlindSignature.messageToHashInt(o).toString(),N:i==null?void 0:i.N,D:i==null?void 0:i.D}).toString();await Service.putSubmitMessage({key:s,signedPubKey:d,publicKey:i==null?void 0:i.N,message:o,signedMessage:en})};return jsxs(Fragment,{children:[jsxs("div",{className:"host-wrapper",children:[jsxs("div",{style:{border:"1px solid #333",padding:"8px",borderRadius:"5px"},children:[jsx("button",{hidden:!!h||(e==null?void 0:e.isLock),disabled:_,onClick:()=>a(),children:"Join"}),jsxs("summary",{children:["Blind key"," ",_?j?": You have joined":": You have clicked join":": You are not join",jsx("details",{style:{wordBreak:"break-all"},children:i==null?void 0:i.blinded})]})]}),jsx("div",{style:{border:"1px solid #333",padding:"8px",borderRadius:"5px"},children:jsxs("div",{children:[jsx("div",{children:jsxs("b",{children:["Joiner: ",Object.keys((e==null?void 0:e.blinded)||{}).length]})}),Object.keys((e==null?void 0:e.blinded)||{}).map(en=>jsxs("div",{className:"blind-list",children:[jsx("div",{title:en,className:"ellipsis",children:en}),jsx("div",{title:e==null?void 0:e.blinded[en],className:"ellipsis",children:e==null?void 0:e.blinded[en]})]},en))]})})]}),j&&jsxs("div",{style:{border:"1px solid #333",padding:"8px",borderRadius:"5px",margin:"10px 0"},children:[jsx("textarea",{maxLength:1e3,rows:6,cols:40,style:{padding:"8px",textSizeAdjust:"none",resize:"none"},value:o,onChange:en=>c(en.target.value),placeholder:"Please input your message"}),jsx("button",{disabled:!o,type:"submit",onClick:()=>nn(),children:"Submit"})]}),jsx(MessageTable,{data:e==null?void 0:e.messages,globalPubKey:s})]})},MessageTable=({data:e,globalPubKey:i})=>{const s=e==null?void 0:e.map(o=>{const{signedMessage:c,signedPubKey:a,message:h,publicKey:_}=o,d=BlindSignature.verify({unblinded:a,message:_,E:"65537",N:i}),j=BlindSignature.verify({unblinded:c,message:h,E:"65537",N:_});return{...o,isLegal:d,isLegal2:j}});return jsxs("table",{style:{margin:"50px auto"},children:[jsxs("thead",{children:[jsx("th",{children:"CONTENT"}),jsx("th",{children:"LEGAL"}),jsx("th",{children:"SIGNED VERIFY"})]}),jsx("tbody",{children:s==null?void 0:s.map(o=>jsxs("tr",{children:[jsx("td",{children:jsx("textarea",{style:{padding:"8px",textSizeAdjust:"none",resize:"none"},rows:6,cols:40,readOnly:!0,value:o.message})}),jsx("td",{style:{color:o.isLegal?"green":"red"},children:o.isLegal+""}),jsx("td",{style:{color:o.isLegal2?"green":"red"},children:o.isLegal2+""})]},o.publicKey))})]})};function Partial(){const i=window.location.pathname.replace("/",""),[s,o]=reactExports.useState(),[c,a]=reactExports.useState(),[h,_]=reactExports.useState(!1);return getData=async()=>{const d=await Service.getAll(i),j=d.success&&d.data||void 0;o(j)},reactExports.useEffect(()=>{getData(),timer=setInterval(()=>{getData()},1e4);const d=JSON.parse(localStorage.getItem("rsa")||"{}");if(d&&d.N&&d.N===i)return _(!0),()=>clearInterval(timer);const j=JSON.parse(localStorage.getItem(i)||"{}");if(j&&j.N)return a(j),()=>clearInterval(timer);const nn=initKey(i);return localStorage.setItem(i,JSON.stringify(nn)),a(nn),()=>clearInterval(timer)},[]),h?jsx(Host,{data:s,signCallback:()=>getData(),pubKey:i}):jsx(Joiner,{data:s,roomRsa:c,pubKey:i})}const initKey=e=>{var nn;const i=BlindSignature.keyGeneration(),{e:s,d:o,n:c}=i.keyPair,a=e&&BlindSignature.blind({message:c.toString(),N:e,E:s.toString()});let h=a&&a.blinded.toString()||"",_=((nn=a==null?void 0:a.r)==null?void 0:nn.toString())||"",d=o.toString(),j=c.toString();return{blinded:h,r:_,e:s,D:d,N:j}};function App(){return window.location.pathname!=="/"?jsx(Partial,{}):jsx("div",{className:"App",children:jsx("button",{onClick:async()=>{const s=initKey();if(localStorage.setItem("rsa",JSON.stringify(s)),!(s!=null&&s.N)||!(s!=null&&s.D))return;const o=await Service.postCreate({key:s.N,privateKey:s.D});o!=null&&o.success&&(location.href=o.data.url)},children:"Create"})})}const index="";client.createRoot(document.getElementById("root")).render(jsx(React.StrictMode,{children:jsx(App,{})}));
