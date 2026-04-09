var BE=Object.defineProperty;var HE=(n,e,t)=>e in n?BE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Le=(n,e,t)=>HE(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var _y={exports:{}},Rh={},vy={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac=Symbol.for("react.element"),VE=Symbol.for("react.portal"),GE=Symbol.for("react.fragment"),WE=Symbol.for("react.strict_mode"),XE=Symbol.for("react.profiler"),YE=Symbol.for("react.provider"),jE=Symbol.for("react.context"),qE=Symbol.for("react.forward_ref"),$E=Symbol.for("react.suspense"),KE=Symbol.for("react.memo"),ZE=Symbol.for("react.lazy"),f0=Symbol.iterator;function QE(n){return n===null||typeof n!="object"?null:(n=f0&&n[f0]||n["@@iterator"],typeof n=="function"?n:null)}var xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,Sy={};function Sl(n,e,t){this.props=n,this.context=e,this.refs=Sy,this.updater=t||xy}Sl.prototype.isReactComponent={};Sl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Sl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function My(){}My.prototype=Sl.prototype;function Rg(n,e,t){this.props=n,this.context=e,this.refs=Sy,this.updater=t||xy}var bg=Rg.prototype=new My;bg.constructor=Rg;yy(bg,Sl.prototype);bg.isPureReactComponent=!0;var h0=Array.isArray,Ey=Object.prototype.hasOwnProperty,Pg={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,i)&&!wy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ac,type:n,key:s,ref:o,props:r,_owner:Pg.current}}function JE(n,e){return{$$typeof:ac,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Dg(n){return typeof n=="object"&&n!==null&&n.$$typeof===ac}function ew(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var d0=/\/+/g;function Jh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ew(""+n.key):e.toString(36)}function _f(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ac:case VE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Jh(o,0):i,h0(r)?(t="",n!=null&&(t=n.replace(d0,"$&/")+"/"),_f(r,e,t,"",function(u){return u})):r!=null&&(Dg(r)&&(r=JE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(d0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",h0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Jh(s,a);o+=_f(s,e,t,l,r)}else if(l=QE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Jh(s,a++),o+=_f(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gc(n,e,t){if(n==null)return n;var i=[],r=0;return _f(n,i,"","",function(s){return e.call(t,s,r++)}),i}function tw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ei={current:null},vf={transition:null},nw={ReactCurrentDispatcher:ei,ReactCurrentBatchConfig:vf,ReactCurrentOwner:Pg};function Ay(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:gc,forEach:function(n,e,t){gc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return gc(n,function(){e++}),e},toArray:function(n){return gc(n,function(e){return e})||[]},only:function(n){if(!Dg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};lt.Component=Sl;lt.Fragment=GE;lt.Profiler=XE;lt.PureComponent=Rg;lt.StrictMode=WE;lt.Suspense=$E;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw;lt.act=Ay;lt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=yy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ey.call(e,l)&&!wy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ac,type:n.type,key:r,ref:s,props:i,_owner:o}};lt.createContext=function(n){return n={$$typeof:jE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:YE,_context:n},n.Consumer=n};lt.createElement=Ty;lt.createFactory=function(n){var e=Ty.bind(null,n);return e.type=n,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(n){return{$$typeof:qE,render:n}};lt.isValidElement=Dg;lt.lazy=function(n){return{$$typeof:ZE,_payload:{_status:-1,_result:n},_init:tw}};lt.memo=function(n,e){return{$$typeof:KE,type:n,compare:e===void 0?null:e}};lt.startTransition=function(n){var e=vf.transition;vf.transition={};try{n()}finally{vf.transition=e}};lt.unstable_act=Ay;lt.useCallback=function(n,e){return ei.current.useCallback(n,e)};lt.useContext=function(n){return ei.current.useContext(n)};lt.useDebugValue=function(){};lt.useDeferredValue=function(n){return ei.current.useDeferredValue(n)};lt.useEffect=function(n,e){return ei.current.useEffect(n,e)};lt.useId=function(){return ei.current.useId()};lt.useImperativeHandle=function(n,e,t){return ei.current.useImperativeHandle(n,e,t)};lt.useInsertionEffect=function(n,e){return ei.current.useInsertionEffect(n,e)};lt.useLayoutEffect=function(n,e){return ei.current.useLayoutEffect(n,e)};lt.useMemo=function(n,e){return ei.current.useMemo(n,e)};lt.useReducer=function(n,e,t){return ei.current.useReducer(n,e,t)};lt.useRef=function(n){return ei.current.useRef(n)};lt.useState=function(n){return ei.current.useState(n)};lt.useSyncExternalStore=function(n,e,t){return ei.current.useSyncExternalStore(n,e,t)};lt.useTransition=function(){return ei.current.useTransition()};lt.version="18.3.1";vy.exports=lt;var lr=vy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iw=lr,rw=Symbol.for("react.element"),sw=Symbol.for("react.fragment"),ow=Object.prototype.hasOwnProperty,aw=iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lw={key:!0,ref:!0,__self:!0,__source:!0};function Cy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ow.call(e,i)&&!lw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rw,type:n,key:s,ref:o,props:r,_owner:aw.current}}Rh.Fragment=sw;Rh.jsx=Cy;Rh.jsxs=Cy;_y.exports=Rh;var Ge=_y.exports,Sp={},Ry={exports:{}},Ui={},by={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,$){var P=L.length;L.push($);e:for(;0<P;){var ne=P-1>>>1,xe=L[ne];if(0<r(xe,$))L[ne]=$,L[P]=xe,P=ne;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],P=L.pop();if(P!==$){L[0]=P;e:for(var ne=0,xe=L.length,je=xe>>>1;ne<je;){var q=2*(ne+1)-1,te=L[q],ce=q+1,ie=L[ce];if(0>r(te,P))ce<xe&&0>r(ie,te)?(L[ne]=ie,L[ce]=P,ne=ce):(L[ne]=te,L[q]=P,ne=q);else if(ce<xe&&0>r(ie,P))L[ne]=ie,L[ce]=P,ne=ce;else break e}}return $}function r(L,$){var P=L.sortIndex-$.sortIndex;return P!==0?P:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=L)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(L){if(_=!1,x(L),!m)if(t(l)!==null)m=!0,W(A);else{var $=t(u);$!==null&&Y(y,$.startTime-L)}}function A(L,$){m=!1,_&&(_=!1,p(R),R=-1),d=!0;var P=f;try{for(x($),h=t(l);h!==null&&(!(h.expirationTime>$)||L&&!D());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var xe=ne(h.expirationTime<=$);$=n.unstable_now(),typeof xe=="function"?h.callback=xe:h===t(l)&&i(l),x($)}else i(l);h=t(l)}if(h!==null)var je=!0;else{var q=t(u);q!==null&&Y(y,q.startTime-$),je=!1}return je}finally{h=null,f=P,d=!1}}var w=!1,E=null,R=-1,M=5,S=-1;function D(){return!(n.unstable_now()-S<M)}function N(){if(E!==null){var L=n.unstable_now();S=L;var $=!0;try{$=E(!0,L)}finally{$?z():(w=!1,E=null)}}else w=!1}var z;if(typeof v=="function")z=function(){v(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=N,z=function(){j.postMessage(null)}}else z=function(){g(N,0)};function W(L){E=L,w||(w=!0,z())}function Y(L,$){R=g(function(){L(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){m||d||(m=!0,W(A))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var P=f;f=$;try{return L()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var P=f;f=L;try{return $()}finally{f=P}},n.unstable_scheduleCallback=function(L,$,P){var ne=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ne+P:ne):P=ne,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=P+xe,L={id:c++,callback:$,priorityLevel:L,startTime:P,expirationTime:xe,sortIndex:-1},P>ne?(L.sortIndex=P,e(u,L),t(l)===null&&L===t(u)&&(_?(p(R),R=-1):_=!0,Y(y,P-ne))):(L.sortIndex=xe,e(l,L),m||d||(m=!0,W(A))),L},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(L){var $=f;return function(){var P=f;f=$;try{return L.apply(this,arguments)}finally{f=P}}}})(Py);by.exports=Py;var uw=by.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw=lr,Li=uw;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,Lu={};function Ko(n,e){el(n,e),el(n+"Capture",e)}function el(n,e){for(Lu[n]=e,n=0;n<e.length;n++)Dy.add(e[n])}var rs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mp=Object.prototype.hasOwnProperty,fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p0={},m0={};function hw(n){return Mp.call(m0,n)?!0:Mp.call(p0,n)?!1:fw.test(n)?m0[n]=!0:(p0[n]=!0,!1)}function dw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function pw(n,e,t,i){if(e===null||typeof e>"u"||dw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ti(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Cn[n]=new ti(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Cn[e]=new ti(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Cn[n]=new ti(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Cn[n]=new ti(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Cn[n]=new ti(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Cn[n]=new ti(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Cn[n]=new ti(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Cn[n]=new ti(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Cn[n]=new ti(n,5,!1,n.toLowerCase(),null,!1,!1)});var Lg=/[\-:]([a-z])/g;function Ig(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Lg,Ig);Cn[e]=new ti(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Lg,Ig);Cn[e]=new ti(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Lg,Ig);Cn[e]=new ti(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Cn[n]=new ti(n,1,!1,n.toLowerCase(),null,!1,!1)});Cn.xlinkHref=new ti("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Cn[n]=new ti(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ng(n,e,t,i){var r=Cn.hasOwnProperty(e)?Cn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pw(e,t,r,i)&&(t=null),i||r===null?hw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var hs=cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_c=Symbol.for("react.element"),Ea=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),Ug=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),Tp=Symbol.for("react.suspense_list"),Og=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),Ny=Symbol.for("react.offscreen"),g0=Symbol.iterator;function Ll(n){return n===null||typeof n!="object"?null:(n=g0&&n[g0]||n["@@iterator"],typeof n=="function"?n:null)}var jt=Object.assign,ed;function $l(n){if(ed===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+n}var td=!1;function nd(n,e){if(!n||td)return"";td=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$l(n):""}function mw(n){switch(n.tag){case 5:return $l(n.type);case 16:return $l("Lazy");case 13:return $l("Suspense");case 19:return $l("SuspenseList");case 0:case 2:case 15:return n=nd(n.type,!1),n;case 11:return n=nd(n.type.render,!1),n;case 1:return n=nd(n.type,!0),n;default:return""}}function Ap(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case wa:return"Fragment";case Ea:return"Portal";case Ep:return"Profiler";case Ug:return"StrictMode";case wp:return"Suspense";case Tp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Iy:return(n.displayName||"Context")+".Consumer";case Ly:return(n._context.displayName||"Context")+".Provider";case Fg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Og:return e=n.displayName||null,e!==null?e:Ap(n.type)||"Memo";case ws:e=n._payload,n=n._init;try{return Ap(n(e))}catch{}}return null}function gw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ap(e);case 8:return e===Ug?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Uy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _w(n){var e=Uy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function vc(n){n._valueTracker||(n._valueTracker=_w(n))}function Fy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Uy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Cp(n,e){var t=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=qs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Oy(n,e){e=e.checked,e!=null&&Ng(n,"checked",e,!1)}function Rp(n,e){Oy(n,e);var t=qs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?bp(n,e.type,t):e.hasOwnProperty("defaultValue")&&bp(n,e.type,qs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function v0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function bp(n,e,t){(e!=="number"||Wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Kl=Array.isArray;function za(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+qs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Pp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function x0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Kl(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:qs(t)}}function ky(n,e){var t=qs(e.value),i=qs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function y0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function zy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?zy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xc,By=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Iu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var lu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vw=["Webkit","ms","Moz","O"];Object.keys(lu).forEach(function(n){vw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),lu[e]=lu[n]})});function Hy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||lu.hasOwnProperty(n)&&lu[n]?(""+e).trim():e+"px"}function Vy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Hy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var xw=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lp(n,e){if(e){if(xw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ip(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=null;function kg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Up=null,Ba=null,Ha=null;function S0(n){if(n=cc(n)){if(typeof Up!="function")throw Error(re(280));var e=n.stateNode;e&&(e=Ih(e),Up(n.stateNode,n.type,e))}}function Gy(n){Ba?Ha?Ha.push(n):Ha=[n]:Ba=n}function Wy(){if(Ba){var n=Ba,e=Ha;if(Ha=Ba=null,S0(n),e)for(n=0;n<e.length;n++)S0(e[n])}}function Xy(n,e){return n(e)}function Yy(){}var id=!1;function jy(n,e,t){if(id)return n(e,t);id=!0;try{return Xy(n,e,t)}finally{id=!1,(Ba!==null||Ha!==null)&&(Yy(),Wy())}}function Nu(n,e){var t=n.stateNode;if(t===null)return null;var i=Ih(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var Fp=!1;if(rs)try{var Il={};Object.defineProperty(Il,"passive",{get:function(){Fp=!0}}),window.addEventListener("test",Il,Il),window.removeEventListener("test",Il,Il)}catch{Fp=!1}function yw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var uu=!1,Xf=null,Yf=!1,Op=null,Sw={onError:function(n){uu=!0,Xf=n}};function Mw(n,e,t,i,r,s,o,a,l){uu=!1,Xf=null,yw.apply(Sw,arguments)}function Ew(n,e,t,i,r,s,o,a,l){if(Mw.apply(this,arguments),uu){if(uu){var u=Xf;uu=!1,Xf=null}else throw Error(re(198));Yf||(Yf=!0,Op=u)}}function Zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function qy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function M0(n){if(Zo(n)!==n)throw Error(re(188))}function ww(n){var e=n.alternate;if(!e){if(e=Zo(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return M0(r),n;if(s===i)return M0(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function $y(n){return n=ww(n),n!==null?Ky(n):null}function Ky(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ky(n);if(e!==null)return e;n=n.sibling}return null}var Zy=Li.unstable_scheduleCallback,E0=Li.unstable_cancelCallback,Tw=Li.unstable_shouldYield,Aw=Li.unstable_requestPaint,Jt=Li.unstable_now,Cw=Li.unstable_getCurrentPriorityLevel,zg=Li.unstable_ImmediatePriority,Qy=Li.unstable_UserBlockingPriority,jf=Li.unstable_NormalPriority,Rw=Li.unstable_LowPriority,Jy=Li.unstable_IdlePriority,bh=null,br=null;function bw(n){if(br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(bh,n,void 0,(n.current.flags&128)===128)}catch{}}var fr=Math.clz32?Math.clz32:Lw,Pw=Math.log,Dw=Math.LN2;function Lw(n){return n>>>=0,n===0?32:31-(Pw(n)/Dw|0)|0}var yc=64,Sc=4194304;function Zl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Zl(a):(s&=o,s!==0&&(i=Zl(s)))}else o=t&~r,o!==0?i=Zl(o):s!==0&&(i=Zl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fr(e),r=1<<t,i|=n[t],e&=~r;return i}function Iw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-fr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Iw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function kp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function eS(){var n=yc;return yc<<=1,!(yc&4194240)&&(yc=64),n}function rd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function lc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fr(e),n[e]=t}function Uw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Et=0;function tS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nS,Hg,iS,rS,sS,zp=!1,Mc=[],Fs=null,Os=null,ks=null,Uu=new Map,Fu=new Map,As=[],Fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w0(n,e){switch(n){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":Os=null;break;case"mouseover":case"mouseout":ks=null;break;case"pointerover":case"pointerout":Uu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fu.delete(e.pointerId)}}function Nl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cc(e),e!==null&&Hg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ow(n,e,t,i,r){switch(e){case"focusin":return Fs=Nl(Fs,n,e,t,i,r),!0;case"dragenter":return Os=Nl(Os,n,e,t,i,r),!0;case"mouseover":return ks=Nl(ks,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Uu.set(s,Nl(Uu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fu.set(s,Nl(Fu.get(s)||null,n,e,t,i,r)),!0}return!1}function oS(n){var e=wo(n.target);if(e!==null){var t=Zo(e);if(t!==null){if(e=t.tag,e===13){if(e=qy(t),e!==null){n.blockedOn=e,sS(n.priority,function(){iS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Np=i,t.target.dispatchEvent(i),Np=null}else return e=cc(t),e!==null&&Hg(e),n.blockedOn=t,!1;e.shift()}return!0}function T0(n,e,t){xf(n)&&t.delete(e)}function kw(){zp=!1,Fs!==null&&xf(Fs)&&(Fs=null),Os!==null&&xf(Os)&&(Os=null),ks!==null&&xf(ks)&&(ks=null),Uu.forEach(T0),Fu.forEach(T0)}function Ul(n,e){n.blockedOn===e&&(n.blockedOn=null,zp||(zp=!0,Li.unstable_scheduleCallback(Li.unstable_NormalPriority,kw)))}function Ou(n){function e(r){return Ul(r,n)}if(0<Mc.length){Ul(Mc[0],n);for(var t=1;t<Mc.length;t++){var i=Mc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Fs!==null&&Ul(Fs,n),Os!==null&&Ul(Os,n),ks!==null&&Ul(ks,n),Uu.forEach(e),Fu.forEach(e),t=0;t<As.length;t++)i=As[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<As.length&&(t=As[0],t.blockedOn===null);)oS(t),t.blockedOn===null&&As.shift()}var Va=hs.ReactCurrentBatchConfig,$f=!0;function zw(n,e,t,i){var r=Et,s=Va.transition;Va.transition=null;try{Et=1,Vg(n,e,t,i)}finally{Et=r,Va.transition=s}}function Bw(n,e,t,i){var r=Et,s=Va.transition;Va.transition=null;try{Et=4,Vg(n,e,t,i)}finally{Et=r,Va.transition=s}}function Vg(n,e,t,i){if($f){var r=Bp(n,e,t,i);if(r===null)pd(n,e,i,Kf,t),w0(n,i);else if(Ow(r,n,e,t,i))i.stopPropagation();else if(w0(n,i),e&4&&-1<Fw.indexOf(n)){for(;r!==null;){var s=cc(r);if(s!==null&&nS(s),s=Bp(n,e,t,i),s===null&&pd(n,e,i,Kf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else pd(n,e,i,null,t)}}var Kf=null;function Bp(n,e,t,i){if(Kf=null,n=kg(i),n=wo(n),n!==null)if(e=Zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=qy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Kf=n,null}function aS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cw()){case zg:return 1;case Qy:return 4;case jf:case Rw:return 16;case Jy:return 536870912;default:return 16}default:return 16}}var bs=null,Gg=null,yf=null;function lS(){if(yf)return yf;var n,e=Gg,t=e.length,i,r="value"in bs?bs.value:bs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return yf=r.slice(n,1<i?1-i:void 0)}function Sf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ec(){return!0}function A0(){return!1}function Fi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ec:A0,this.isPropagationStopped=A0,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ec)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ec)},persist:function(){},isPersistent:Ec}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wg=Fi(Ml),uc=jt({},Ml,{view:0,detail:0}),Hw=Fi(uc),sd,od,Fl,Ph=jt({},uc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fl&&(Fl&&n.type==="mousemove"?(sd=n.screenX-Fl.screenX,od=n.screenY-Fl.screenY):od=sd=0,Fl=n),sd)},movementY:function(n){return"movementY"in n?n.movementY:od}}),C0=Fi(Ph),Vw=jt({},Ph,{dataTransfer:0}),Gw=Fi(Vw),Ww=jt({},uc,{relatedTarget:0}),ad=Fi(Ww),Xw=jt({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),Yw=Fi(Xw),jw=jt({},Ml,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),qw=Fi(jw),$w=jt({},Ml,{data:0}),R0=Fi($w),Kw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Qw[n])?!!e[n]:!1}function Xg(){return Jw}var eT=jt({},uc,{key:function(n){if(n.key){var e=Kw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Sf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Zw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xg,charCode:function(n){return n.type==="keypress"?Sf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),tT=Fi(eT),nT=jt({},Ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b0=Fi(nT),iT=jt({},uc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xg}),rT=Fi(iT),sT=jt({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),oT=Fi(sT),aT=jt({},Ph,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),lT=Fi(aT),uT=[9,13,27,32],Yg=rs&&"CompositionEvent"in window,cu=null;rs&&"documentMode"in document&&(cu=document.documentMode);var cT=rs&&"TextEvent"in window&&!cu,uS=rs&&(!Yg||cu&&8<cu&&11>=cu),P0=" ",D0=!1;function cS(n,e){switch(n){case"keyup":return uT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ta=!1;function fT(n,e){switch(n){case"compositionend":return fS(e);case"keypress":return e.which!==32?null:(D0=!0,P0);case"textInput":return n=e.data,n===P0&&D0?null:n;default:return null}}function hT(n,e){if(Ta)return n==="compositionend"||!Yg&&cS(n,e)?(n=lS(),yf=Gg=bs=null,Ta=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uS&&e.locale!=="ko"?null:e.data;default:return null}}var dT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dT[n.type]:e==="textarea"}function hS(n,e,t,i){Gy(i),e=Zf(e,"onChange"),0<e.length&&(t=new Wg("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var fu=null,ku=null;function pT(n){ES(n,0)}function Dh(n){var e=Ra(n);if(Fy(e))return n}function mT(n,e){if(n==="change")return e}var dS=!1;if(rs){var ld;if(rs){var ud="oninput"in document;if(!ud){var I0=document.createElement("div");I0.setAttribute("oninput","return;"),ud=typeof I0.oninput=="function"}ld=ud}else ld=!1;dS=ld&&(!document.documentMode||9<document.documentMode)}function N0(){fu&&(fu.detachEvent("onpropertychange",pS),ku=fu=null)}function pS(n){if(n.propertyName==="value"&&Dh(ku)){var e=[];hS(e,ku,n,kg(n)),jy(pT,e)}}function gT(n,e,t){n==="focusin"?(N0(),fu=e,ku=t,fu.attachEvent("onpropertychange",pS)):n==="focusout"&&N0()}function _T(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dh(ku)}function vT(n,e){if(n==="click")return Dh(e)}function xT(n,e){if(n==="input"||n==="change")return Dh(e)}function yT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gr=typeof Object.is=="function"?Object.is:yT;function zu(n,e){if(gr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mp.call(e,r)||!gr(n[r],e[r]))return!1}return!0}function U0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function F0(n,e){var t=U0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=U0(t)}}function mS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gS(){for(var n=window,e=Wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wf(n.document)}return e}function jg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ST(n){var e=gS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mS(t.ownerDocument.documentElement,t)){if(i!==null&&jg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=F0(t,s);var o=F0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var MT=rs&&"documentMode"in document&&11>=document.documentMode,Aa=null,Hp=null,hu=null,Vp=!1;function O0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vp||Aa==null||Aa!==Wf(i)||(i=Aa,"selectionStart"in i&&jg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),hu&&zu(hu,i)||(hu=i,i=Zf(Hp,"onSelect"),0<i.length&&(e=new Wg("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Aa)))}function wc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ca={animationend:wc("Animation","AnimationEnd"),animationiteration:wc("Animation","AnimationIteration"),animationstart:wc("Animation","AnimationStart"),transitionend:wc("Transition","TransitionEnd")},cd={},_S={};rs&&(_S=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Lh(n){if(cd[n])return cd[n];if(!Ca[n])return n;var e=Ca[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _S)return cd[n]=e[t];return n}var vS=Lh("animationend"),xS=Lh("animationiteration"),yS=Lh("animationstart"),SS=Lh("transitionend"),MS=new Map,k0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function no(n,e){MS.set(n,e),Ko(e,[n])}for(var fd=0;fd<k0.length;fd++){var hd=k0[fd],ET=hd.toLowerCase(),wT=hd[0].toUpperCase()+hd.slice(1);no(ET,"on"+wT)}no(vS,"onAnimationEnd");no(xS,"onAnimationIteration");no(yS,"onAnimationStart");no("dblclick","onDoubleClick");no("focusin","onFocus");no("focusout","onBlur");no(SS,"onTransitionEnd");el("onMouseEnter",["mouseout","mouseover"]);el("onMouseLeave",["mouseout","mouseover"]);el("onPointerEnter",["pointerout","pointerover"]);el("onPointerLeave",["pointerout","pointerover"]);Ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ql));function z0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ew(i,e,void 0,n),n.currentTarget=null}function ES(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;z0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;z0(r,a,u),s=l}}}if(Yf)throw n=Op,Yf=!1,Op=null,n}function Ut(n,e){var t=e[jp];t===void 0&&(t=e[jp]=new Set);var i=n+"__bubble";t.has(i)||(wS(e,n,2,!1),t.add(i))}function dd(n,e,t){var i=0;e&&(i|=4),wS(t,n,i,e)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Bu(n){if(!n[Tc]){n[Tc]=!0,Dy.forEach(function(t){t!=="selectionchange"&&(TT.has(t)||dd(t,!1,n),dd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tc]||(e[Tc]=!0,dd("selectionchange",!1,e))}}function wS(n,e,t,i){switch(aS(e)){case 1:var r=zw;break;case 4:r=Bw;break;default:r=Vg}t=r.bind(null,e,t,n),r=void 0,!Fp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function pd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jy(function(){var u=s,c=kg(t),h=[];e:{var f=MS.get(n);if(f!==void 0){var d=Wg,m=n;switch(n){case"keypress":if(Sf(t)===0)break e;case"keydown":case"keyup":d=tT;break;case"focusin":m="focus",d=ad;break;case"focusout":m="blur",d=ad;break;case"beforeblur":case"afterblur":d=ad;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=C0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=rT;break;case vS:case xS:case yS:d=Yw;break;case SS:d=oT;break;case"scroll":d=Hw;break;case"wheel":d=lT;break;case"copy":case"cut":case"paste":d=qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=b0}var _=(e&4)!==0,g=!_&&n==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,p!==null&&(y=Nu(v,p),y!=null&&_.push(Hu(v,y,x)))),g)break;v=v.return}0<_.length&&(f=new d(f,m,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",f&&t!==Np&&(m=t.relatedTarget||t.fromElement)&&(wo(m)||m[ss]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(m=t.relatedTarget||t.toElement,d=u,m=m?wo(m):null,m!==null&&(g=Zo(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(d=null,m=u),d!==m)){if(_=C0,y="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=b0,y="onPointerLeave",p="onPointerEnter",v="pointer"),g=d==null?f:Ra(d),x=m==null?f:Ra(m),f=new _(y,v+"leave",d,t,c),f.target=g,f.relatedTarget=x,y=null,wo(c)===u&&(_=new _(p,v+"enter",m,t,c),_.target=x,_.relatedTarget=g,y=_),g=y,d&&m)t:{for(_=d,p=m,v=0,x=_;x;x=ea(x))v++;for(x=0,y=p;y;y=ea(y))x++;for(;0<v-x;)_=ea(_),v--;for(;0<x-v;)p=ea(p),x--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=ea(_),p=ea(p)}_=null}else _=null;d!==null&&B0(h,f,d,_,!1),m!==null&&g!==null&&B0(h,g,m,_,!0)}}e:{if(f=u?Ra(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var A=mT;else if(L0(f))if(dS)A=xT;else{A=_T;var w=gT}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=vT);if(A&&(A=A(n,u))){hS(h,A,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&bp(f,"number",f.value)}switch(w=u?Ra(u):window,n){case"focusin":(L0(w)||w.contentEditable==="true")&&(Aa=w,Hp=u,hu=null);break;case"focusout":hu=Hp=Aa=null;break;case"mousedown":Vp=!0;break;case"contextmenu":case"mouseup":case"dragend":Vp=!1,O0(h,t,c);break;case"selectionchange":if(MT)break;case"keydown":case"keyup":O0(h,t,c)}var E;if(Yg)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ta?cS(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(uS&&t.locale!=="ko"&&(Ta||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ta&&(E=lS()):(bs=c,Gg="value"in bs?bs.value:bs.textContent,Ta=!0)),w=Zf(u,R),0<w.length&&(R=new R0(R,n,null,t,c),h.push({event:R,listeners:w}),E?R.data=E:(E=fS(t),E!==null&&(R.data=E)))),(E=cT?fT(n,t):hT(n,t))&&(u=Zf(u,"onBeforeInput"),0<u.length&&(c=new R0("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=E))}ES(h,e)})}function Hu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Zf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Nu(n,t),s!=null&&i.unshift(Hu(n,s,r)),s=Nu(n,e),s!=null&&i.push(Hu(n,s,r))),n=n.return}return i}function ea(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function B0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Nu(t,s),l!=null&&o.unshift(Hu(t,l,a))):r||(l=Nu(t,s),l!=null&&o.push(Hu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var AT=/\r\n?/g,CT=/\u0000|\uFFFD/g;function H0(n){return(typeof n=="string"?n:""+n).replace(AT,`
`).replace(CT,"")}function Ac(n,e,t){if(e=H0(e),H0(n)!==e&&t)throw Error(re(425))}function Qf(){}var Gp=null,Wp=null;function Xp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yp=typeof setTimeout=="function"?setTimeout:void 0,RT=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,bT=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(n){return V0.resolve(null).then(n).catch(PT)}:Yp;function PT(n){setTimeout(function(){throw n})}function md(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ou(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ou(e)}function zs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function G0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var El=Math.random().toString(36).slice(2),Er="__reactFiber$"+El,Vu="__reactProps$"+El,ss="__reactContainer$"+El,jp="__reactEvents$"+El,DT="__reactListeners$"+El,LT="__reactHandles$"+El;function wo(n){var e=n[Er];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ss]||t[Er]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=G0(n);n!==null;){if(t=n[Er])return t;n=G0(n)}return e}n=t,t=n.parentNode}return null}function cc(n){return n=n[Er]||n[ss],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ra(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function Ih(n){return n[Vu]||null}var qp=[],ba=-1;function io(n){return{current:n}}function Ft(n){0>ba||(n.current=qp[ba],qp[ba]=null,ba--)}function Lt(n,e){ba++,qp[ba]=n.current,n.current=e}var $s={},zn=io($s),si=io(!1),Bo=$s;function tl(n,e){var t=n.type.contextTypes;if(!t)return $s;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function oi(n){return n=n.childContextTypes,n!=null}function Jf(){Ft(si),Ft(zn)}function W0(n,e,t){if(zn.current!==$s)throw Error(re(168));Lt(zn,e),Lt(si,t)}function TS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,gw(n)||"Unknown",r));return jt({},t,i)}function eh(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$s,Bo=zn.current,Lt(zn,n),Lt(si,si.current),!0}function X0(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=TS(n,e,Bo),i.__reactInternalMemoizedMergedChildContext=n,Ft(si),Ft(zn),Lt(zn,n)):Ft(si),Lt(si,t)}var Gr=null,Nh=!1,gd=!1;function AS(n){Gr===null?Gr=[n]:Gr.push(n)}function IT(n){Nh=!0,AS(n)}function ro(){if(!gd&&Gr!==null){gd=!0;var n=0,e=Et;try{var t=Gr;for(Et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Gr=null,Nh=!1}catch(r){throw Gr!==null&&(Gr=Gr.slice(n+1)),Zy(zg,ro),r}finally{Et=e,gd=!1}}return null}var Pa=[],Da=0,th=null,nh=0,Vi=[],Gi=0,Ho=null,jr=1,qr="";function mo(n,e){Pa[Da++]=nh,Pa[Da++]=th,th=n,nh=e}function CS(n,e,t){Vi[Gi++]=jr,Vi[Gi++]=qr,Vi[Gi++]=Ho,Ho=n;var i=jr;n=qr;var r=32-fr(i)-1;i&=~(1<<r),t+=1;var s=32-fr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,jr=1<<32-fr(e)+r|t<<r|i,qr=s+n}else jr=1<<s|t<<r|i,qr=n}function qg(n){n.return!==null&&(mo(n,1),CS(n,1,0))}function $g(n){for(;n===th;)th=Pa[--Da],Pa[Da]=null,nh=Pa[--Da],Pa[Da]=null;for(;n===Ho;)Ho=Vi[--Gi],Vi[Gi]=null,qr=Vi[--Gi],Vi[Gi]=null,jr=Vi[--Gi],Vi[Gi]=null}var Pi=null,Ci=null,zt=!1,ar=null;function RS(n,e){var t=Yi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Y0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Pi=n,Ci=zs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Pi=n,Ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ho!==null?{id:jr,overflow:qr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Pi=n,Ci=null,!0):!1;default:return!1}}function $p(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kp(n){if(zt){var e=Ci;if(e){var t=e;if(!Y0(n,e)){if($p(n))throw Error(re(418));e=zs(t.nextSibling);var i=Pi;e&&Y0(n,e)?RS(i,t):(n.flags=n.flags&-4097|2,zt=!1,Pi=n)}}else{if($p(n))throw Error(re(418));n.flags=n.flags&-4097|2,zt=!1,Pi=n}}}function j0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Pi=n}function Cc(n){if(n!==Pi)return!1;if(!zt)return j0(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xp(n.type,n.memoizedProps)),e&&(e=Ci)){if($p(n))throw bS(),Error(re(418));for(;e;)RS(n,e),e=zs(e.nextSibling)}if(j0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ci=zs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ci=null}}else Ci=Pi?zs(n.stateNode.nextSibling):null;return!0}function bS(){for(var n=Ci;n;)n=zs(n.nextSibling)}function nl(){Ci=Pi=null,zt=!1}function Kg(n){ar===null?ar=[n]:ar.push(n)}var NT=hs.ReactCurrentBatchConfig;function Ol(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function Rc(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function q0(n){var e=n._init;return e(n._payload)}function PS(n){function e(p,v){if(n){var x=p.deletions;x===null?(p.deletions=[v],p.flags|=16):x.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Gs(p,v),p.index=0,p.sibling=null,p}function s(p,v,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<v?(p.flags|=2,v):x):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,v,x,y){return v===null||v.tag!==6?(v=Ed(x,p.mode,y),v.return=p,v):(v=r(v,x),v.return=p,v)}function l(p,v,x,y){var A=x.type;return A===wa?c(p,v,x.props.children,y,x.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ws&&q0(A)===v.type)?(y=r(v,x.props),y.ref=Ol(p,v,x),y.return=p,y):(y=Rf(x.type,x.key,x.props,null,p.mode,y),y.ref=Ol(p,v,x),y.return=p,y)}function u(p,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=wd(x,p.mode,y),v.return=p,v):(v=r(v,x.children||[]),v.return=p,v)}function c(p,v,x,y,A){return v===null||v.tag!==7?(v=Lo(x,p.mode,y,A),v.return=p,v):(v=r(v,x),v.return=p,v)}function h(p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ed(""+v,p.mode,x),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _c:return x=Rf(v.type,v.key,v.props,null,p.mode,x),x.ref=Ol(p,null,v),x.return=p,x;case Ea:return v=wd(v,p.mode,x),v.return=p,v;case ws:var y=v._init;return h(p,y(v._payload),x)}if(Kl(v)||Ll(v))return v=Lo(v,p.mode,x,null),v.return=p,v;Rc(p,v)}return null}function f(p,v,x,y){var A=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(p,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _c:return x.key===A?l(p,v,x,y):null;case Ea:return x.key===A?u(p,v,x,y):null;case ws:return A=x._init,f(p,v,A(x._payload),y)}if(Kl(x)||Ll(x))return A!==null?null:c(p,v,x,y,null);Rc(p,x)}return null}function d(p,v,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(x)||null,a(v,p,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _c:return p=p.get(y.key===null?x:y.key)||null,l(v,p,y,A);case Ea:return p=p.get(y.key===null?x:y.key)||null,u(v,p,y,A);case ws:var w=y._init;return d(p,v,x,w(y._payload),A)}if(Kl(y)||Ll(y))return p=p.get(x)||null,c(v,p,y,A,null);Rc(v,y)}return null}function m(p,v,x,y){for(var A=null,w=null,E=v,R=v=0,M=null;E!==null&&R<x.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var S=f(p,E,x[R],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(p,E),v=s(S,v,R),w===null?A=S:w.sibling=S,w=S,E=M}if(R===x.length)return t(p,E),zt&&mo(p,R),A;if(E===null){for(;R<x.length;R++)E=h(p,x[R],y),E!==null&&(v=s(E,v,R),w===null?A=E:w.sibling=E,w=E);return zt&&mo(p,R),A}for(E=i(p,E);R<x.length;R++)M=d(E,p,R,x[R],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?R:M.key),v=s(M,v,R),w===null?A=M:w.sibling=M,w=M);return n&&E.forEach(function(D){return e(p,D)}),zt&&mo(p,R),A}function _(p,v,x,y){var A=Ll(x);if(typeof A!="function")throw Error(re(150));if(x=A.call(x),x==null)throw Error(re(151));for(var w=A=null,E=v,R=v=0,M=null,S=x.next();E!==null&&!S.done;R++,S=x.next()){E.index>R?(M=E,E=null):M=E.sibling;var D=f(p,E,S.value,y);if(D===null){E===null&&(E=M);break}n&&E&&D.alternate===null&&e(p,E),v=s(D,v,R),w===null?A=D:w.sibling=D,w=D,E=M}if(S.done)return t(p,E),zt&&mo(p,R),A;if(E===null){for(;!S.done;R++,S=x.next())S=h(p,S.value,y),S!==null&&(v=s(S,v,R),w===null?A=S:w.sibling=S,w=S);return zt&&mo(p,R),A}for(E=i(p,E);!S.done;R++,S=x.next())S=d(E,p,R,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?A=S:w.sibling=S,w=S);return n&&E.forEach(function(N){return e(p,N)}),zt&&mo(p,R),A}function g(p,v,x,y){if(typeof x=="object"&&x!==null&&x.type===wa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _c:e:{for(var A=x.key,w=v;w!==null;){if(w.key===A){if(A=x.type,A===wa){if(w.tag===7){t(p,w.sibling),v=r(w,x.props.children),v.return=p,p=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ws&&q0(A)===w.type){t(p,w.sibling),v=r(w,x.props),v.ref=Ol(p,w,x),v.return=p,p=v;break e}t(p,w);break}else e(p,w);w=w.sibling}x.type===wa?(v=Lo(x.props.children,p.mode,y,x.key),v.return=p,p=v):(y=Rf(x.type,x.key,x.props,null,p.mode,y),y.ref=Ol(p,v,x),y.return=p,p=y)}return o(p);case Ea:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(p,v.sibling),v=r(v,x.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=wd(x,p.mode,y),v.return=p,p=v}return o(p);case ws:return w=x._init,g(p,v,w(x._payload),y)}if(Kl(x))return m(p,v,x,y);if(Ll(x))return _(p,v,x,y);Rc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,x),v.return=p,p=v):(t(p,v),v=Ed(x,p.mode,y),v.return=p,p=v),o(p)):t(p,v)}return g}var il=PS(!0),DS=PS(!1),ih=io(null),rh=null,La=null,Zg=null;function Qg(){Zg=La=rh=null}function Jg(n){var e=ih.current;Ft(ih),n._currentValue=e}function Zp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ga(n,e){rh=n,Zg=La=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ri=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(Zg!==n)if(n={context:n,memoizedValue:e,next:null},La===null){if(rh===null)throw Error(re(308));La=n,rh.dependencies={lanes:0,firstContext:n}}else La=La.next=n;return e}var To=null;function e_(n){To===null?To=[n]:To.push(n)}function LS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,e_(e)):(t.next=r.next,r.next=t),e.interleaved=t,os(n,i)}function os(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ts=!1;function t_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function IS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Jr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Bs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,os(n,t)}return r=i.interleaved,r===null?(e.next=e,e_(i)):(e.next=r.next,r.next=e),i.interleaved=e,os(n,t)}function Mf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bg(n,t)}}function $0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function sh(n,e,t,i){var r=n.updateQueue;Ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,d=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,_=a;switch(f=e,d=t,_.tag){case 1:if(m=_.payload,typeof m=="function"){h=m.call(d,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(d,h,f):m,f==null)break e;h=jt({},h,f);break e;case 2:Ts=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Go|=o,n.lanes=o,n.memoizedState=h}}function K0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var fc={},Pr=io(fc),Gu=io(fc),Wu=io(fc);function Ao(n){if(n===fc)throw Error(re(174));return n}function n_(n,e){switch(Lt(Wu,e),Lt(Gu,n),Lt(Pr,fc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Dp(e,n)}Ft(Pr),Lt(Pr,e)}function rl(){Ft(Pr),Ft(Gu),Ft(Wu)}function NS(n){Ao(Wu.current);var e=Ao(Pr.current),t=Dp(e,n.type);e!==t&&(Lt(Gu,n),Lt(Pr,t))}function i_(n){Gu.current===n&&(Ft(Pr),Ft(Gu))}var Gt=io(0);function oh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _d=[];function r_(){for(var n=0;n<_d.length;n++)_d[n]._workInProgressVersionPrimary=null;_d.length=0}var Ef=hs.ReactCurrentDispatcher,vd=hs.ReactCurrentBatchConfig,Vo=0,Yt=null,ln=null,_n=null,ah=!1,du=!1,Xu=0,UT=0;function Rn(){throw Error(re(321))}function s_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gr(n[t],e[t]))return!1;return!0}function o_(n,e,t,i,r,s){if(Vo=s,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ef.current=n===null||n.memoizedState===null?zT:BT,n=t(i,r),du){s=0;do{if(du=!1,Xu=0,25<=s)throw Error(re(301));s+=1,_n=ln=null,e.updateQueue=null,Ef.current=HT,n=t(i,r)}while(du)}if(Ef.current=lh,e=ln!==null&&ln.next!==null,Vo=0,_n=ln=Yt=null,ah=!1,e)throw Error(re(300));return n}function a_(){var n=Xu!==0;return Xu=0,n}function xr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Yt.memoizedState=_n=n:_n=_n.next=n,_n}function Qi(){if(ln===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var e=_n===null?Yt.memoizedState:_n.next;if(e!==null)_n=e,ln=n;else{if(n===null)throw Error(re(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},_n===null?Yt.memoizedState=_n=n:_n=_n.next=n}return _n}function Yu(n,e){return typeof e=="function"?e(n):e}function xd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=ln,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Vo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Yt.lanes|=c,Go|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,gr(i,e.memoizedState)||(ri=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Yt.lanes|=s,Go|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function yd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);gr(s,e.memoizedState)||(ri=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function US(){}function FS(n,e){var t=Yt,i=Qi(),r=e(),s=!gr(i.memoizedState,r);if(s&&(i.memoizedState=r,ri=!0),i=i.queue,l_(zS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||_n!==null&&_n.memoizedState.tag&1){if(t.flags|=2048,ju(9,kS.bind(null,t,i,r,e),void 0,null),vn===null)throw Error(re(349));Vo&30||OS(t,e,r)}return r}function OS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function kS(n,e,t,i){e.value=t,e.getSnapshot=i,BS(e)&&HS(n)}function zS(n,e,t){return t(function(){BS(e)&&HS(n)})}function BS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gr(n,t)}catch{return!0}}function HS(n){var e=os(n,1);e!==null&&hr(e,n,1,-1)}function Z0(n){var e=xr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yu,lastRenderedState:n},e.queue=n,n=n.dispatch=kT.bind(null,Yt,n),[e.memoizedState,n]}function ju(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function VS(){return Qi().memoizedState}function wf(n,e,t,i){var r=xr();Yt.flags|=n,r.memoizedState=ju(1|e,t,void 0,i===void 0?null:i)}function Uh(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(ln!==null){var o=ln.memoizedState;if(s=o.destroy,i!==null&&s_(i,o.deps)){r.memoizedState=ju(e,t,s,i);return}}Yt.flags|=n,r.memoizedState=ju(1|e,t,s,i)}function Q0(n,e){return wf(8390656,8,n,e)}function l_(n,e){return Uh(2048,8,n,e)}function GS(n,e){return Uh(4,2,n,e)}function WS(n,e){return Uh(4,4,n,e)}function XS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function YS(n,e,t){return t=t!=null?t.concat([n]):null,Uh(4,4,XS.bind(null,e,n),t)}function u_(){}function jS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&s_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&s_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function $S(n,e,t){return Vo&21?(gr(t,e)||(t=eS(),Yt.lanes|=t,Go|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=t)}function FT(n,e){var t=Et;Et=t!==0&&4>t?t:4,n(!0);var i=vd.transition;vd.transition={};try{n(!1),e()}finally{Et=t,vd.transition=i}}function KS(){return Qi().memoizedState}function OT(n,e,t){var i=Vs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ZS(n))QS(e,t);else if(t=LS(n,e,t,i),t!==null){var r=Qn();hr(t,n,i,r),JS(t,e,i)}}function kT(n,e,t){var i=Vs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ZS(n))QS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,gr(a,o)){var l=e.interleaved;l===null?(r.next=r,e_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=LS(n,e,r,i),t!==null&&(r=Qn(),hr(t,n,i,r),JS(t,e,i))}}function ZS(n){var e=n.alternate;return n===Yt||e!==null&&e===Yt}function QS(n,e){du=ah=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function JS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bg(n,t)}}var lh={readContext:Zi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},zT={readContext:Zi,useCallback:function(n,e){return xr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:Q0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,wf(4194308,4,XS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return wf(4194308,4,n,e)},useInsertionEffect:function(n,e){return wf(4,2,n,e)},useMemo:function(n,e){var t=xr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=xr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=OT.bind(null,Yt,n),[i.memoizedState,n]},useRef:function(n){var e=xr();return n={current:n},e.memoizedState=n},useState:Z0,useDebugValue:u_,useDeferredValue:function(n){return xr().memoizedState=n},useTransition:function(){var n=Z0(!1),e=n[0];return n=FT.bind(null,n[1]),xr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Yt,r=xr();if(zt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),vn===null)throw Error(re(349));Vo&30||OS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Q0(zS.bind(null,i,s,n),[n]),i.flags|=2048,ju(9,kS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=xr(),e=vn.identifierPrefix;if(zt){var t=qr,i=jr;t=(i&~(1<<32-fr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Xu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=UT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},BT={readContext:Zi,useCallback:jS,useContext:Zi,useEffect:l_,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:WS,useMemo:qS,useReducer:xd,useRef:VS,useState:function(){return xd(Yu)},useDebugValue:u_,useDeferredValue:function(n){var e=Qi();return $S(e,ln.memoizedState,n)},useTransition:function(){var n=xd(Yu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:US,useSyncExternalStore:FS,useId:KS,unstable_isNewReconciler:!1},HT={readContext:Zi,useCallback:jS,useContext:Zi,useEffect:l_,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:WS,useMemo:qS,useReducer:yd,useRef:VS,useState:function(){return yd(Yu)},useDebugValue:u_,useDeferredValue:function(n){var e=Qi();return ln===null?e.memoizedState=n:$S(e,ln.memoizedState,n)},useTransition:function(){var n=yd(Yu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:US,useSyncExternalStore:FS,useId:KS,unstable_isNewReconciler:!1};function sr(n,e){if(n&&n.defaultProps){e=jt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Qp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:jt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Fh={isMounted:function(n){return(n=n._reactInternals)?Zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Qn(),r=Vs(n),s=Jr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Bs(n,s,r),e!==null&&(hr(e,n,r,i),Mf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Qn(),r=Vs(n),s=Jr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Bs(n,s,r),e!==null&&(hr(e,n,r,i),Mf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Qn(),i=Vs(n),r=Jr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Bs(n,r,i),e!==null&&(hr(e,n,i,t),Mf(e,n,i))}};function J0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zu(t,i)||!zu(r,s):!0}function eM(n,e,t){var i=!1,r=$s,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=oi(e)?Bo:zn.current,i=e.contextTypes,s=(i=i!=null)?tl(n,r):$s),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function ev(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Fh.enqueueReplaceState(e,e.state,null)}function Jp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},t_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=oi(e)?Bo:zn.current,r.context=tl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fh.enqueueReplaceState(r,r.state,null),sh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function sl(n,e){try{var t="",i=e;do t+=mw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Sd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function em(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var VT=typeof WeakMap=="function"?WeakMap:Map;function tM(n,e,t){t=Jr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ch||(ch=!0,cm=i),em(n,e)},t}function nM(n,e,t){t=Jr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){em(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){em(n,e),typeof i!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function tv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new VT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=nA.bind(null,n,e,t),e.then(n,n))}function nv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function iv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Jr(-1,1),e.tag=2,Bs(t,e,1))),t.lanes|=1),n)}var GT=hs.ReactCurrentOwner,ri=!1;function Yn(n,e,t,i){e.child=n===null?DS(e,null,t,i):il(e,n.child,t,i)}function rv(n,e,t,i,r){t=t.render;var s=e.ref;return Ga(e,r),i=o_(n,e,t,i,s,r),t=a_(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,as(n,e,r)):(zt&&t&&qg(e),e.flags|=1,Yn(n,e,i,r),e.child)}function sv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!__(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,iM(n,e,s,i,r)):(n=Rf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:zu,t(o,i)&&n.ref===e.ref)return as(n,e,r)}return e.flags|=1,n=Gs(s,i),n.ref=e.ref,n.return=e,e.child=n}function iM(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(zu(s,i)&&n.ref===e.ref)if(ri=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ri=!0);else return e.lanes=n.lanes,as(n,e,r)}return tm(n,e,t,i,r)}function rM(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Na,xi),xi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Lt(Na,xi),xi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Lt(Na,xi),xi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Lt(Na,xi),xi|=i;return Yn(n,e,r,t),e.child}function sM(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tm(n,e,t,i,r){var s=oi(t)?Bo:zn.current;return s=tl(e,s),Ga(e,r),t=o_(n,e,t,i,s,r),i=a_(),n!==null&&!ri?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,as(n,e,r)):(zt&&i&&qg(e),e.flags|=1,Yn(n,e,t,r),e.child)}function ov(n,e,t,i,r){if(oi(t)){var s=!0;eh(e)}else s=!1;if(Ga(e,r),e.stateNode===null)Tf(n,e),eM(e,t,i),Jp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=oi(t)?Bo:zn.current,u=tl(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ev(e,o,i,u),Ts=!1;var f=e.memoizedState;o.state=f,sh(e,i,o,r),l=e.memoizedState,a!==i||f!==l||si.current||Ts?(typeof c=="function"&&(Qp(e,t,c,i),l=e.memoizedState),(a=Ts||J0(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,IS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:sr(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=oi(t)?Bo:zn.current,l=tl(e,l));var d=t.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ev(e,o,i,l),Ts=!1,f=e.memoizedState,o.state=f,sh(e,i,o,r);var m=e.memoizedState;a!==h||f!==m||si.current||Ts?(typeof d=="function"&&(Qp(e,t,d,i),m=e.memoizedState),(u=Ts||J0(e,t,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return nm(n,e,t,i,s,r)}function nm(n,e,t,i,r,s){sM(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&X0(e,t,!1),as(n,e,s);i=e.stateNode,GT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=il(e,n.child,null,s),e.child=il(e,null,a,s)):Yn(n,e,a,s),e.memoizedState=i.state,r&&X0(e,t,!0),e.child}function oM(n){var e=n.stateNode;e.pendingContext?W0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&W0(n,e.context,!1),n_(n,e.containerInfo)}function av(n,e,t,i,r){return nl(),Kg(r),e.flags|=256,Yn(n,e,t,i),e.child}var im={dehydrated:null,treeContext:null,retryLane:0};function rm(n){return{baseLanes:n,cachePool:null,transitions:null}}function aM(n,e,t){var i=e.pendingProps,r=Gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Lt(Gt,r&1),n===null)return Kp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zh(o,i,0,null),n=Lo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=rm(t),e.memoizedState=im,n):c_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return WT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gs(a,s):(s=Lo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?rm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=im,i}return s=n.child,n=s.sibling,i=Gs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function c_(n,e){return e=zh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bc(n,e,t,i){return i!==null&&Kg(i),il(e,n.child,null,t),n=c_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function WT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Sd(Error(re(422))),bc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zh({mode:"visible",children:i.children},r,0,null),s=Lo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&il(e,n.child,null,o),e.child.memoizedState=rm(o),e.memoizedState=im,s);if(!(e.mode&1))return bc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Sd(s,i,void 0),bc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ri||a){if(i=vn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,os(n,r),hr(i,n,r,-1))}return g_(),i=Sd(Error(re(421))),bc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=iA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ci=zs(r.nextSibling),Pi=e,zt=!0,ar=null,n!==null&&(Vi[Gi++]=jr,Vi[Gi++]=qr,Vi[Gi++]=Ho,jr=n.id,qr=n.overflow,Ho=e),e=c_(e,i.children),e.flags|=4096,e)}function lv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zp(n.return,e,t)}function Md(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function lM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yn(n,e,i.children,t),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lv(n,t,e);else if(n.tag===19)lv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Lt(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&oh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Md(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&oh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Md(e,!0,t,null,s);break;case"together":Md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function as(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Go|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Gs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Gs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function XT(n,e,t){switch(e.tag){case 3:oM(e),nl();break;case 5:NS(e);break;case 1:oi(e.type)&&eh(e);break;case 4:n_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Lt(ih,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Lt(Gt,Gt.current&1),e.flags|=128,null):t&e.child.childLanes?aM(n,e,t):(Lt(Gt,Gt.current&1),n=as(n,e,t),n!==null?n.sibling:null);Lt(Gt,Gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return lM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Lt(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,rM(n,e,t)}return as(n,e,t)}var uM,sm,cM,fM;uM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};sm=function(){};cM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ao(Pr.current);var s=null;switch(t){case"input":r=Cp(n,r),i=Cp(n,i),s=[];break;case"select":r=jt({},r,{value:void 0}),i=jt({},i,{value:void 0}),s=[];break;case"textarea":r=Pp(n,r),i=Pp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Qf)}Lp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fM=function(n,e,t,i){t!==i&&(e.flags|=4)};function kl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function YT(n,e,t){var i=e.pendingProps;switch($g(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(e),null;case 1:return oi(e.type)&&Jf(),bn(e),null;case 3:return i=e.stateNode,rl(),Ft(si),Ft(zn),r_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Cc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(dm(ar),ar=null))),sm(n,e),bn(e),null;case 5:i_(e);var r=Ao(Wu.current);if(t=e.type,n!==null&&e.stateNode!=null)cM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return bn(e),null}if(n=Ao(Pr.current),Cc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Er]=e,i[Vu]=s,n=(e.mode&1)!==0,t){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<Ql.length;r++)Ut(Ql[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":_0(i,s),Ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ut("invalid",i);break;case"textarea":x0(i,s),Ut("invalid",i)}Lp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ac(i.textContent,a,n),r=["children",""+a]):Lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ut("scroll",i)}switch(t){case"input":vc(i),v0(i,s,!0);break;case"textarea":vc(i),y0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Er]=e,n[Vu]=i,uM(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ip(t,i),t){case"dialog":Ut("cancel",n),Ut("close",n),r=i;break;case"iframe":case"object":case"embed":Ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ql.length;r++)Ut(Ql[r],n);r=i;break;case"source":Ut("error",n),r=i;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),r=i;break;case"details":Ut("toggle",n),r=i;break;case"input":_0(n,i),r=Cp(n,i),Ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=jt({},i,{value:void 0}),Ut("invalid",n);break;case"textarea":x0(n,i),r=Pp(n,i),Ut("invalid",n);break;default:r=i}Lp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&By(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Iu(n,l):typeof l=="number"&&Iu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ut("scroll",n):l!=null&&Ng(n,s,l,o))}switch(t){case"input":vc(n),v0(n,i,!1);break;case"textarea":vc(n),y0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+qs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?za(n,!!i.multiple,s,!1):i.defaultValue!=null&&za(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Qf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bn(e),null;case 6:if(n&&e.stateNode!=null)fM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=Ao(Wu.current),Ao(Pr.current),Cc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Er]=e,(s=i.nodeValue!==t)&&(n=Pi,n!==null))switch(n.tag){case 3:Ac(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ac(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Er]=e,e.stateNode=i}return bn(e),null;case 13:if(Ft(Gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Ci!==null&&e.mode&1&&!(e.flags&128))bS(),nl(),e.flags|=98560,s=!1;else if(s=Cc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Er]=e}else nl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bn(e),s=!1}else ar!==null&&(dm(ar),ar=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Gt.current&1?cn===0&&(cn=3):g_())),e.updateQueue!==null&&(e.flags|=4),bn(e),null);case 4:return rl(),sm(n,e),n===null&&Bu(e.stateNode.containerInfo),bn(e),null;case 10:return Jg(e.type._context),bn(e),null;case 17:return oi(e.type)&&Jf(),bn(e),null;case 19:if(Ft(Gt),s=e.memoizedState,s===null)return bn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)kl(s,!1);else{if(cn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=oh(n),o!==null){for(e.flags|=128,kl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Lt(Gt,Gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Jt()>ol&&(e.flags|=128,i=!0,kl(s,!1),e.lanes=4194304)}else{if(!i)if(n=oh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),kl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return bn(e),null}else 2*Jt()-s.renderingStartTime>ol&&t!==1073741824&&(e.flags|=128,i=!0,kl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Jt(),e.sibling=null,t=Gt.current,Lt(Gt,i?t&1|2:t&1),e):(bn(e),null);case 22:case 23:return m_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xi&1073741824&&(bn(e),e.subtreeFlags&6&&(e.flags|=8192)):bn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function jT(n,e){switch($g(e),e.tag){case 1:return oi(e.type)&&Jf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return rl(),Ft(si),Ft(zn),r_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return i_(e),null;case 13:if(Ft(Gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));nl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ft(Gt),null;case 4:return rl(),null;case 10:return Jg(e.type._context),null;case 22:case 23:return m_(),null;case 24:return null;default:return null}}var Pc=!1,Nn=!1,qT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ia(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){$t(n,e,i)}else t.current=null}function om(n,e,t){try{t()}catch(i){$t(n,e,i)}}var uv=!1;function $T(n,e){if(Gp=$f,n=gS(),jg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var d;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wp={focusedElem:n,selectionRange:t},$f=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:sr(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){$t(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return m=uv,uv=!1,m}function pu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&om(e,t,s)}r=r.next}while(r!==i)}}function Oh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function am(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hM(n){var e=n.alternate;e!==null&&(n.alternate=null,hM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Er],delete e[Vu],delete e[jp],delete e[DT],delete e[LT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dM(n){return n.tag===5||n.tag===3||n.tag===4}function cv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Qf));else if(i!==4&&(n=n.child,n!==null))for(lm(n,e,t),n=n.sibling;n!==null;)lm(n,e,t),n=n.sibling}function um(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(um(n,e,t),n=n.sibling;n!==null;)um(n,e,t),n=n.sibling}var Mn=null,or=!1;function ms(n,e,t){for(t=t.child;t!==null;)pM(n,e,t),t=t.sibling}function pM(n,e,t){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(bh,t)}catch{}switch(t.tag){case 5:Nn||Ia(t,e);case 6:var i=Mn,r=or;Mn=null,ms(n,e,t),Mn=i,or=r,Mn!==null&&(or?(n=Mn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Mn.removeChild(t.stateNode));break;case 18:Mn!==null&&(or?(n=Mn,t=t.stateNode,n.nodeType===8?md(n.parentNode,t):n.nodeType===1&&md(n,t),Ou(n)):md(Mn,t.stateNode));break;case 4:i=Mn,r=or,Mn=t.stateNode.containerInfo,or=!0,ms(n,e,t),Mn=i,or=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&om(t,e,o),r=r.next}while(r!==i)}ms(n,e,t);break;case 1:if(!Nn&&(Ia(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){$t(t,e,a)}ms(n,e,t);break;case 21:ms(n,e,t);break;case 22:t.mode&1?(Nn=(i=Nn)||t.memoizedState!==null,ms(n,e,t),Nn=i):ms(n,e,t);break;default:ms(n,e,t)}}function fv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new qT),e.forEach(function(i){var r=rA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function er(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mn=a.stateNode,or=!1;break e;case 3:Mn=a.stateNode.containerInfo,or=!0;break e;case 4:Mn=a.stateNode.containerInfo,or=!0;break e}a=a.return}if(Mn===null)throw Error(re(160));pM(s,o,r),Mn=null,or=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){$t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mM(e,n),e=e.sibling}function mM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(e,n),vr(n),i&4){try{pu(3,n,n.return),Oh(3,n)}catch(_){$t(n,n.return,_)}try{pu(5,n,n.return)}catch(_){$t(n,n.return,_)}}break;case 1:er(e,n),vr(n),i&512&&t!==null&&Ia(t,t.return);break;case 5:if(er(e,n),vr(n),i&512&&t!==null&&Ia(t,t.return),n.flags&32){var r=n.stateNode;try{Iu(r,"")}catch(_){$t(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Oy(r,s),Ip(a,o);var u=Ip(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Vy(r,h):c==="dangerouslySetInnerHTML"?By(r,h):c==="children"?Iu(r,h):Ng(r,c,h,u)}switch(a){case"input":Rp(r,s);break;case"textarea":ky(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?za(r,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?za(r,!!s.multiple,s.defaultValue,!0):za(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vu]=s}catch(_){$t(n,n.return,_)}}break;case 6:if(er(e,n),vr(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){$t(n,n.return,_)}}break;case 3:if(er(e,n),vr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ou(e.containerInfo)}catch(_){$t(n,n.return,_)}break;case 4:er(e,n),vr(n);break;case 13:er(e,n),vr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(d_=Jt())),i&4&&fv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Nn=(u=Nn)||c,er(e,n),Nn=u):er(e,n),vr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(h=Ee=c;Ee!==null;){switch(f=Ee,d=f.child,f.tag){case 0:case 11:case 14:case 15:pu(4,f,f.return);break;case 1:Ia(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){$t(i,t,_)}}break;case 5:Ia(f,f.return);break;case 22:if(f.memoizedState!==null){dv(h);continue}}d!==null?(d.return=f,Ee=d):dv(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hy("display",o))}catch(_){$t(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){$t(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:er(e,n),vr(n),i&4&&fv(n);break;case 21:break;default:er(e,n),vr(n)}}function vr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dM(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Iu(r,""),i.flags&=-33);var s=cv(n);um(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cv(n);lm(n,a,o);break;default:throw Error(re(161))}}catch(l){$t(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function KT(n,e,t){Ee=n,gM(n)}function gM(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nn;a=Pc;var u=Nn;if(Pc=o,(Nn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?pv(r):l!==null?(l.return=o,Ee=l):pv(r);for(;s!==null;)Ee=s,gM(s),s=s.sibling;Ee=r,Pc=a,Nn=u}hv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):hv(n)}}function hv(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||Oh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:sr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&K0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}K0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ou(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Nn||e.flags&512&&am(e)}catch(f){$t(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function dv(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function pv(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Oh(4,e)}catch(l){$t(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){$t(e,r,l)}}var s=e.return;try{am(e)}catch(l){$t(e,s,l)}break;case 5:var o=e.return;try{am(e)}catch(l){$t(e,o,l)}}}catch(l){$t(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var ZT=Math.ceil,uh=hs.ReactCurrentDispatcher,f_=hs.ReactCurrentOwner,$i=hs.ReactCurrentBatchConfig,dt=0,vn=null,sn=null,Tn=0,xi=0,Na=io(0),cn=0,qu=null,Go=0,kh=0,h_=0,mu=null,ii=null,d_=0,ol=1/0,Hr=null,ch=!1,cm=null,Hs=null,Dc=!1,Ps=null,fh=0,gu=0,fm=null,Af=-1,Cf=0;function Qn(){return dt&6?Jt():Af!==-1?Af:Af=Jt()}function Vs(n){return n.mode&1?dt&2&&Tn!==0?Tn&-Tn:NT.transition!==null?(Cf===0&&(Cf=eS()),Cf):(n=Et,n!==0||(n=window.event,n=n===void 0?16:aS(n.type)),n):1}function hr(n,e,t,i){if(50<gu)throw gu=0,fm=null,Error(re(185));lc(n,t,i),(!(dt&2)||n!==vn)&&(n===vn&&(!(dt&2)&&(kh|=t),cn===4&&Cs(n,Tn)),ai(n,i),t===1&&dt===0&&!(e.mode&1)&&(ol=Jt()+500,Nh&&ro()))}function ai(n,e){var t=n.callbackNode;Nw(n,e);var i=qf(n,n===vn?Tn:0);if(i===0)t!==null&&E0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&E0(t),e===1)n.tag===0?IT(mv.bind(null,n)):AS(mv.bind(null,n)),bT(function(){!(dt&6)&&ro()}),t=null;else{switch(tS(i)){case 1:t=zg;break;case 4:t=Qy;break;case 16:t=jf;break;case 536870912:t=Jy;break;default:t=jf}t=wM(t,_M.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _M(n,e){if(Af=-1,Cf=0,dt&6)throw Error(re(327));var t=n.callbackNode;if(Wa()&&n.callbackNode!==t)return null;var i=qf(n,n===vn?Tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=hh(n,i);else{e=i;var r=dt;dt|=2;var s=xM();(vn!==n||Tn!==e)&&(Hr=null,ol=Jt()+500,Do(n,e));do try{eA();break}catch(a){vM(n,a)}while(!0);Qg(),uh.current=s,dt=r,sn!==null?e=0:(vn=null,Tn=0,e=cn)}if(e!==0){if(e===2&&(r=kp(n),r!==0&&(i=r,e=hm(n,r))),e===1)throw t=qu,Do(n,0),Cs(n,i),ai(n,Jt()),t;if(e===6)Cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!QT(r)&&(e=hh(n,i),e===2&&(s=kp(n),s!==0&&(i=s,e=hm(n,s))),e===1))throw t=qu,Do(n,0),Cs(n,i),ai(n,Jt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:go(n,ii,Hr);break;case 3:if(Cs(n,i),(i&130023424)===i&&(e=d_+500-Jt(),10<e)){if(qf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Qn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yp(go.bind(null,n,ii,Hr),e);break}go(n,ii,Hr);break;case 4:if(Cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-fr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZT(i/1960))-i,10<i){n.timeoutHandle=Yp(go.bind(null,n,ii,Hr),i);break}go(n,ii,Hr);break;case 5:go(n,ii,Hr);break;default:throw Error(re(329))}}}return ai(n,Jt()),n.callbackNode===t?_M.bind(null,n):null}function hm(n,e){var t=mu;return n.current.memoizedState.isDehydrated&&(Do(n,e).flags|=256),n=hh(n,e),n!==2&&(e=ii,ii=t,e!==null&&dm(e)),n}function dm(n){ii===null?ii=n:ii.push.apply(ii,n)}function QT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cs(n,e){for(e&=~h_,e&=~kh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fr(e),i=1<<t;n[t]=-1,e&=~i}}function mv(n){if(dt&6)throw Error(re(327));Wa();var e=qf(n,0);if(!(e&1))return ai(n,Jt()),null;var t=hh(n,e);if(n.tag!==0&&t===2){var i=kp(n);i!==0&&(e=i,t=hm(n,i))}if(t===1)throw t=qu,Do(n,0),Cs(n,e),ai(n,Jt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,go(n,ii,Hr),ai(n,Jt()),null}function p_(n,e){var t=dt;dt|=1;try{return n(e)}finally{dt=t,dt===0&&(ol=Jt()+500,Nh&&ro())}}function Wo(n){Ps!==null&&Ps.tag===0&&!(dt&6)&&Wa();var e=dt;dt|=1;var t=$i.transition,i=Et;try{if($i.transition=null,Et=1,n)return n()}finally{Et=i,$i.transition=t,dt=e,!(dt&6)&&ro()}}function m_(){xi=Na.current,Ft(Na)}function Do(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,RT(t)),sn!==null)for(t=sn.return;t!==null;){var i=t;switch($g(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jf();break;case 3:rl(),Ft(si),Ft(zn),r_();break;case 5:i_(i);break;case 4:rl();break;case 13:Ft(Gt);break;case 19:Ft(Gt);break;case 10:Jg(i.type._context);break;case 22:case 23:m_()}t=t.return}if(vn=n,sn=n=Gs(n.current,null),Tn=xi=e,cn=0,qu=null,h_=kh=Go=0,ii=mu=null,To!==null){for(e=0;e<To.length;e++)if(t=To[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}To=null}return n}function vM(n,e){do{var t=sn;try{if(Qg(),Ef.current=lh,ah){for(var i=Yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ah=!1}if(Vo=0,_n=ln=Yt=null,du=!1,Xu=0,f_.current=null,t===null||t.return===null){cn=1,qu=e,sn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=nv(o);if(d!==null){d.flags&=-257,iv(d,o,a,s,e),d.mode&1&&tv(s,u,e),e=d,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){tv(s,u,e),g_();break e}l=Error(re(426))}}else if(zt&&a.mode&1){var g=nv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),iv(g,o,a,s,e),Kg(sl(l,a));break e}}s=l=sl(l,a),cn!==4&&(cn=2),mu===null?mu=[s]:mu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=tM(s,l,e);$0(s,p);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hs===null||!Hs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=nM(s,a,e);$0(s,y);break e}}s=s.return}while(s!==null)}SM(t)}catch(A){e=A,sn===t&&t!==null&&(sn=t=t.return);continue}break}while(!0)}function xM(){var n=uh.current;return uh.current=lh,n===null?lh:n}function g_(){(cn===0||cn===3||cn===2)&&(cn=4),vn===null||!(Go&268435455)&&!(kh&268435455)||Cs(vn,Tn)}function hh(n,e){var t=dt;dt|=2;var i=xM();(vn!==n||Tn!==e)&&(Hr=null,Do(n,e));do try{JT();break}catch(r){vM(n,r)}while(!0);if(Qg(),dt=t,uh.current=i,sn!==null)throw Error(re(261));return vn=null,Tn=0,cn}function JT(){for(;sn!==null;)yM(sn)}function eA(){for(;sn!==null&&!Tw();)yM(sn)}function yM(n){var e=EM(n.alternate,n,xi);n.memoizedProps=n.pendingProps,e===null?SM(n):sn=e,f_.current=null}function SM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=jT(t,e),t!==null){t.flags&=32767,sn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,sn=null;return}}else if(t=YT(t,e,xi),t!==null){sn=t;return}if(e=e.sibling,e!==null){sn=e;return}sn=e=n}while(e!==null);cn===0&&(cn=5)}function go(n,e,t){var i=Et,r=$i.transition;try{$i.transition=null,Et=1,tA(n,e,t,i)}finally{$i.transition=r,Et=i}return null}function tA(n,e,t,i){do Wa();while(Ps!==null);if(dt&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Uw(n,s),n===vn&&(sn=vn=null,Tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Dc||(Dc=!0,wM(jf,function(){return Wa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$i.transition,$i.transition=null;var o=Et;Et=1;var a=dt;dt|=4,f_.current=null,$T(n,t),mM(t,n),ST(Wp),$f=!!Gp,Wp=Gp=null,n.current=t,KT(t),Aw(),dt=a,Et=o,$i.transition=s}else n.current=t;if(Dc&&(Dc=!1,Ps=n,fh=r),s=n.pendingLanes,s===0&&(Hs=null),bw(t.stateNode),ai(n,Jt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ch)throw ch=!1,n=cm,cm=null,n;return fh&1&&n.tag!==0&&Wa(),s=n.pendingLanes,s&1?n===fm?gu++:(gu=0,fm=n):gu=0,ro(),null}function Wa(){if(Ps!==null){var n=tS(fh),e=$i.transition,t=Et;try{if($i.transition=null,Et=16>n?16:n,Ps===null)var i=!1;else{if(n=Ps,Ps=null,fh=0,dt&6)throw Error(re(331));var r=dt;for(dt|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:pu(8,c,s)}var h=c.child;if(h!==null)h.return=c,Ee=h;else for(;Ee!==null;){c=Ee;var f=c.sibling,d=c.return;if(hM(c),c===u){Ee=null;break}if(f!==null){f.return=d,Ee=f;break}Ee=d}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Ee=p;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oh(9,a)}}catch(A){$t(a,a.return,A)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(dt=r,ro(),br&&typeof br.onPostCommitFiberRoot=="function")try{br.onPostCommitFiberRoot(bh,n)}catch{}i=!0}return i}finally{Et=t,$i.transition=e}}return!1}function gv(n,e,t){e=sl(t,e),e=tM(n,e,1),n=Bs(n,e,1),e=Qn(),n!==null&&(lc(n,1,e),ai(n,e))}function $t(n,e,t){if(n.tag===3)gv(n,n,t);else for(;e!==null;){if(e.tag===3){gv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hs===null||!Hs.has(i))){n=sl(t,n),n=nM(e,n,1),e=Bs(e,n,1),n=Qn(),e!==null&&(lc(e,1,n),ai(e,n));break}}e=e.return}}function nA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Qn(),n.pingedLanes|=n.suspendedLanes&t,vn===n&&(Tn&t)===t&&(cn===4||cn===3&&(Tn&130023424)===Tn&&500>Jt()-d_?Do(n,0):h_|=t),ai(n,e)}function MM(n,e){e===0&&(n.mode&1?(e=Sc,Sc<<=1,!(Sc&130023424)&&(Sc=4194304)):e=1);var t=Qn();n=os(n,e),n!==null&&(lc(n,e,t),ai(n,t))}function iA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),MM(n,t)}function rA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),MM(n,t)}var EM;EM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||si.current)ri=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ri=!1,XT(n,e,t);ri=!!(n.flags&131072)}else ri=!1,zt&&e.flags&1048576&&CS(e,nh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tf(n,e),n=e.pendingProps;var r=tl(e,zn.current);Ga(e,t),r=o_(null,e,i,n,r,t);var s=a_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oi(i)?(s=!0,eh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,t_(e),r.updater=Fh,e.stateNode=r,r._reactInternals=e,Jp(e,i,n,t),e=nm(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&qg(e),Yn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Tf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oA(i),n=sr(i,n),r){case 0:e=tm(null,e,i,n,t);break e;case 1:e=ov(null,e,i,n,t);break e;case 11:e=rv(null,e,i,n,t);break e;case 14:e=sv(null,e,i,sr(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),tm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),ov(n,e,i,r,t);case 3:e:{if(oM(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,IS(n,e),sh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=sl(Error(re(423)),e),e=av(n,e,i,t,r);break e}else if(i!==r){r=sl(Error(re(424)),e),e=av(n,e,i,t,r);break e}else for(Ci=zs(e.stateNode.containerInfo.firstChild),Pi=e,zt=!0,ar=null,t=DS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nl(),i===r){e=as(n,e,t);break e}Yn(n,e,i,t)}e=e.child}return e;case 5:return NS(e),n===null&&Kp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Xp(i,r)?o=null:s!==null&&Xp(i,s)&&(e.flags|=32),sM(n,e),Yn(n,e,o,t),e.child;case 6:return n===null&&Kp(e),null;case 13:return aM(n,e,t);case 4:return n_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=il(e,null,i,t):Yn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),rv(n,e,i,r,t);case 7:return Yn(n,e,e.pendingProps,t),e.child;case 8:return Yn(n,e,e.pendingProps.children,t),e.child;case 12:return Yn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Lt(ih,i._currentValue),i._currentValue=o,s!==null)if(gr(s.value,o)){if(s.children===r.children&&!si.current){e=as(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Jr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ga(e,t),r=Zi(r),i=i(r),e.flags|=1,Yn(n,e,i,t),e.child;case 14:return i=e.type,r=sr(i,e.pendingProps),r=sr(i.type,r),sv(n,e,i,r,t);case 15:return iM(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),Tf(n,e),e.tag=1,oi(i)?(n=!0,eh(e)):n=!1,Ga(e,t),eM(e,i,r),Jp(e,i,r,t),nm(null,e,i,!0,n,t);case 19:return lM(n,e,t);case 22:return rM(n,e,t)}throw Error(re(156,e.tag))};function wM(n,e){return Zy(n,e)}function sA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yi(n,e,t,i){return new sA(n,e,t,i)}function __(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oA(n){if(typeof n=="function")return __(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Fg)return 11;if(n===Og)return 14}return 2}function Gs(n,e){var t=n.alternate;return t===null?(t=Yi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Rf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")__(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case wa:return Lo(t.children,r,s,e);case Ug:o=8,r|=8;break;case Ep:return n=Yi(12,t,e,r|2),n.elementType=Ep,n.lanes=s,n;case wp:return n=Yi(13,t,e,r),n.elementType=wp,n.lanes=s,n;case Tp:return n=Yi(19,t,e,r),n.elementType=Tp,n.lanes=s,n;case Ny:return zh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ly:o=10;break e;case Iy:o=9;break e;case Fg:o=11;break e;case Og:o=14;break e;case ws:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Yi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Lo(n,e,t,i){return n=Yi(7,n,i,e),n.lanes=t,n}function zh(n,e,t,i){return n=Yi(22,n,i,e),n.elementType=Ny,n.lanes=t,n.stateNode={isHidden:!1},n}function Ed(n,e,t){return n=Yi(6,n,null,e),n.lanes=t,n}function wd(n,e,t){return e=Yi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function aA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rd(0),this.expirationTimes=rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function v_(n,e,t,i,r,s,o,a,l){return n=new aA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},t_(s),n}function lA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ea,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function TM(n){if(!n)return $s;n=n._reactInternals;e:{if(Zo(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(oi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(oi(t))return TS(n,t,e)}return e}function AM(n,e,t,i,r,s,o,a,l){return n=v_(t,i,!0,n,r,s,o,a,l),n.context=TM(null),t=n.current,i=Qn(),r=Vs(t),s=Jr(i,r),s.callback=e??null,Bs(t,s,r),n.current.lanes=r,lc(n,r,i),ai(n,i),n}function Bh(n,e,t,i){var r=e.current,s=Qn(),o=Vs(r);return t=TM(t),e.context===null?e.context=t:e.pendingContext=t,e=Jr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Bs(r,e,o),n!==null&&(hr(n,r,o,s),Mf(n,r,o)),o}function dh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _v(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function x_(n,e){_v(n,e),(n=n.alternate)&&_v(n,e)}function uA(){return null}var CM=typeof reportError=="function"?reportError:function(n){console.error(n)};function y_(n){this._internalRoot=n}Hh.prototype.render=y_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));Bh(n,e,null,null)};Hh.prototype.unmount=y_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Wo(function(){Bh(null,n,null,null)}),e[ss]=null}};function Hh(n){this._internalRoot=n}Hh.prototype.unstable_scheduleHydration=function(n){if(n){var e=rS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<As.length&&e!==0&&e<As[t].priority;t++);As.splice(t,0,n),t===0&&oS(n)}};function S_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vv(){}function cA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dh(o);s.call(u)}}var o=AM(e,i,n,0,null,!1,!1,"",vv);return n._reactRootContainer=o,n[ss]=o.current,Bu(n.nodeType===8?n.parentNode:n),Wo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dh(l);a.call(u)}}var l=v_(n,0,!1,null,null,!1,!1,"",vv);return n._reactRootContainer=l,n[ss]=l.current,Bu(n.nodeType===8?n.parentNode:n),Wo(function(){Bh(e,l,t,i)}),l}function Gh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dh(o);a.call(l)}}Bh(e,o,n,r)}else o=cA(t,e,n,r,i);return dh(o)}nS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Zl(e.pendingLanes);t!==0&&(Bg(e,t|1),ai(e,Jt()),!(dt&6)&&(ol=Jt()+500,ro()))}break;case 13:Wo(function(){var i=os(n,1);if(i!==null){var r=Qn();hr(i,n,1,r)}}),x_(n,1)}};Hg=function(n){if(n.tag===13){var e=os(n,134217728);if(e!==null){var t=Qn();hr(e,n,134217728,t)}x_(n,134217728)}};iS=function(n){if(n.tag===13){var e=Vs(n),t=os(n,e);if(t!==null){var i=Qn();hr(t,n,e,i)}x_(n,e)}};rS=function(){return Et};sS=function(n,e){var t=Et;try{return Et=n,e()}finally{Et=t}};Up=function(n,e,t){switch(e){case"input":if(Rp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ih(i);if(!r)throw Error(re(90));Fy(i),Rp(i,r)}}}break;case"textarea":ky(n,t);break;case"select":e=t.value,e!=null&&za(n,!!t.multiple,e,!1)}};Xy=p_;Yy=Wo;var fA={usingClientEntryPoint:!1,Events:[cc,Ra,Ih,Gy,Wy,p_]},zl={findFiberByHostInstance:wo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hA={bundleType:zl.bundleType,version:zl.version,rendererPackageName:zl.rendererPackageName,rendererConfig:zl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$y(n),n===null?null:n.stateNode},findFiberByHostInstance:zl.findFiberByHostInstance||uA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{bh=Lc.inject(hA),br=Lc}catch{}}Ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fA;Ui.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S_(e))throw Error(re(200));return lA(n,e,null,t)};Ui.createRoot=function(n,e){if(!S_(n))throw Error(re(299));var t=!1,i="",r=CM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=v_(n,1,!1,null,null,t,!1,i,r),n[ss]=e.current,Bu(n.nodeType===8?n.parentNode:n),new y_(e)};Ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=$y(e),n=n===null?null:n.stateNode,n};Ui.flushSync=function(n){return Wo(n)};Ui.hydrate=function(n,e,t){if(!Vh(e))throw Error(re(200));return Gh(null,n,e,!0,t)};Ui.hydrateRoot=function(n,e,t){if(!S_(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=CM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=AM(e,null,n,1,t??null,r,!1,s,o),n[ss]=e.current,Bu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Hh(e)};Ui.render=function(n,e,t){if(!Vh(e))throw Error(re(200));return Gh(null,n,e,!1,t)};Ui.unmountComponentAtNode=function(n){if(!Vh(n))throw Error(re(40));return n._reactRootContainer?(Wo(function(){Gh(null,null,n,!1,function(){n._reactRootContainer=null,n[ss]=null})}),!0):!1};Ui.unstable_batchedUpdates=p_;Ui.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Vh(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Gh(n,e,t,!1,i)};Ui.version="18.3.1-next-f1338f8080-20240426";function RM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RM)}catch(n){console.error(n)}}RM(),Ry.exports=Ui;var dA=Ry.exports,xv=dA;Sp.createRoot=xv.createRoot,Sp.hydrateRoot=xv.hydrateRoot;var yv="1.3.21";function bM(n,e,t){return Math.max(n,Math.min(e,t))}function pA(n,e,t){return(1-t)*n+t*e}function mA(n,e,t,i){return pA(n,e,1-Math.exp(-t*i))}function gA(n,e){return(n%e+e)%e}var _A=class{constructor(){Le(this,"isRunning",!1);Le(this,"value",0);Le(this,"from",0);Le(this,"to",0);Le(this,"currentTime",0);Le(this,"lerp");Le(this,"duration");Le(this,"easing");Le(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=bM(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=mA(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function vA(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var xA=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Le(this,"width",0);Le(this,"height",0);Le(this,"scrollHeight",0);Le(this,"scrollWidth",0);Le(this,"debouncedResize");Le(this,"wrapperResizeObserver");Le(this,"contentResizeObserver");Le(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Le(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Le(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=vA(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},PM=class{constructor(){Le(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const yA=100/6,gs={passive:!1};function Sv(n,e){return n===1?yA:n===2?e:1}var SA=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Le(this,"touchStart",{x:0,y:0});Le(this,"lastDelta",{x:0,y:0});Le(this,"window",{width:0,height:0});Le(this,"emitter",new PM);Le(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Le(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Le(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Le(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Sv(i,this.window.width),s=Sv(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Le(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gs),this.element.addEventListener("touchstart",this.onTouchStart,gs),this.element.addEventListener("touchmove",this.onTouchMove,gs),this.element.addEventListener("touchend",this.onTouchEnd,gs)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,gs),this.element.removeEventListener("touchstart",this.onTouchStart,gs),this.element.removeEventListener("touchmove",this.onTouchMove,gs),this.element.removeEventListener("touchend",this.onTouchEnd,gs)}};const Mv=n=>Math.min(1,1.001-2**(-10*n));var MA=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:R=E,stopInertiaOnNavigate:M=!1}={}){Le(this,"_isScrolling",!1);Le(this,"_isStopped",!1);Le(this,"_isLocked",!1);Le(this,"_preventNextNativeScrollEvent",!1);Le(this,"_resetVelocityTimeout",null);Le(this,"_rafId",null);Le(this,"isTouching");Le(this,"time",0);Le(this,"userData",{});Le(this,"lastVelocity",0);Le(this,"velocity",0);Le(this,"direction",0);Le(this,"options");Le(this,"targetScroll");Le(this,"animatedScroll");Le(this,"animate",new _A);Le(this,"emitter",new PM);Le(this,"dimensions");Le(this,"virtualScroll");Le(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Le(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Le(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Le(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Le(this,"onPointerDown",n=>{n.button===1&&this.reset()});Le(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,c=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var _,g,p,v,x;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||c==="vertical"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-vertical"))||c==="horizontal"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-horizontal"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-touch"))||s&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,d=r&&i.type==="touchend";d&&(h=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Le(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Le(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yv,window.lenis||(window.lenis={}),window.lenis.version=yv,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Mv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:v,autoRaf:x,anchors:y,autoToggle:A,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:M},this.dimensions=new xA(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new SA(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!c)return;let f=n,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}const _=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=d,f=Math.round(f),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=bM(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Mv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,u,c,h,f,d,m;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),u=["auto"].includes(w.overscrollBehaviorX),c=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,f=n.scrollHeight,d=n.clientWidth,m=n.clientHeight,a=h>d,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=d,r.clientHeight=m,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=c}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,m=r.clientHeight,u=r.hasOverscrollBehaviorX,c=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,p,v,x,y,A;if(_==="horizontal")g=Math.round(n.scrollLeft),p=h-d,v=e,x=s,y=a,A=u;else if(_==="vertical")g=Math.round(n.scrollTop),p=f-m,v=t,x=o,y=l,A=c;else return!1;return!A&&(g>=p||g<=0)?!0:(v>0?g<p:g>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?gA(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Vr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function DM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},al={duration:.5,overwrite:!1,delay:0},M_,An,Bt,ji=1e8,bt=1/ji,pm=Math.PI*2,EA=pm/4,wA=0,LM=Math.sqrt,TA=Math.cos,AA=Math.sin,Sn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},ls=function(e){return typeof e=="number"},E_=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},li=function(e){return e!==!1},w_=function(){return typeof window<"u"},Ic=function(e){return Kt(e)||Sn(e)},IM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,CA=/random\([^)]+\)/g,RA=/,\s*/g,Ev=/(?:-?\.?\d|\.)+/gi,NM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Td=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,UM=/[+-]=-?[.\d]+/,bA=/[^,'"\[\]\s]+/gi,PA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,yr,mm,T_,Ii={},ph={},FM,OM=function(e){return(ph=ll(e,Ii))&&di},A_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$u=function(e,t){return!t&&console.warn(e)},kM=function(e,t){return e&&(Ii[e]=t)&&ph&&(ph[e]=t)||Ii},Ku=function(){return 0},DA={suppressEvents:!0,isStart:!0,kill:!1},bf={suppressEvents:!0,kill:!1},LA={suppressEvents:!0},C_={},Ws=[],gm={},zM,Si={},Ad={},wv=30,Pf=[],R_="",b_=function(e){var t=e[0],i,r;if(Lr(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Pf.length;r--&&!Pf[r].targetTest(t););i=Pf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new u1(e[r],i)))||e.splice(r,1);return e},Io=function(e){return e._gsap||b_(qi(e))[0]._gsap},BM=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():E_(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},Vt=function(e){return Math.round(e*1e7)/1e7||0},Xa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},IA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},mh=function(){var e=Ws.length,t=Ws.slice(0),i,r;for(gm={},Ws.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},P_=function(e){return!!(e._initted||e._startAt||e.add)},HM=function(e,t,i,r){Ws.length&&!An&&mh(),e.render(t,i,!!(An&&t<0&&P_(e))),Ws.length&&!An&&mh()},VM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bA).length<2?t:Sn(e)?e.trim():e},GM=function(e){return e},Ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},NA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ll=function(e,t){for(var i in t)e[i]=t[i];return e},Tv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},gh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},_u=function(e){var t=e.parent||Wt,i=e.keyframes?NA(kn(e.keyframes)):Ni;if(li(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},WM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Wh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},No=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},FA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_m=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(bf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},OA=function n(e){return!e||e._ts&&n(e.parent)},Av=function(e){return e._repeat?ul(e._tTime,e=e.duration()+e._rDelay)*e:0},ul=function(e,t){var i=Math.floor(e=Vt(e/t));return e&&i===e?i-1:i},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xh=function(e){return e._end=Vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Yh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Vt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xh(e),i._dirty||No(i,e)),e},XM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=_h(e.rawTime(),t),(!t._dur||hc(0,t.totalDuration(),i)-t._tTime>bt)&&t.render(i,!0)),No(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-bt}},wr=function(e,t,i,r){return t.parent&&Ks(t),t._start=Vt((ls(i)?i:i||e!==Wt?Bi(e,i,t):e._time)+t._delay),t._end=Vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),WM(e,t,"_first","_last",e._sort?"_start":0),vm(t)||(e._recent=t),r||XM(e,t),e._ts<0&&Yh(e,e._tTime),e},YM=function(e,t){return(Ii.ScrollTrigger||A_("scrollTrigger",t))&&Ii.ScrollTrigger.create(t,e)},jM=function(e,t,i,r,s){if(L_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zM!==Ti.frame)return Ws.push(e),e._lazy=[s,r],1},kA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},vm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&kA(e)&&!(!e._initted&&vm(e))||(e._ts<0||e._dp._ts<0)&&!vm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=hc(0,e._tDur,t),c=ul(l,a),e._yoyo&&c&1&&(o=1-o),c!==ul(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&jM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?bt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&_m(e,t,i,!0),e._onUpdate&&!i&&Ri(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ks(e,1),!i&&!An&&(Ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},cl=function(e,t,i,r){var s=e._repeat,o=Vt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Vt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Yh(e,e._tTime=e._tDur*a),e.parent&&Xh(e),i||No(e.parent,e),e},Cv=function(e){return e instanceof $n?No(e):cl(e,e._dur)},HA={_start:0,endTime:Ku,totalDuration:Ku},Bi=function n(e,t,i){var r=e.labels,s=e._recent||HA,o=e.duration()>=ji?s.endTime(!1):e._dur,a,l,u;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(kn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},vu=function(e,t,i){var r=ls(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},so=function(e,t){return e||e===0?t(e):t},hc=function(e,t,i){return i<e?e:i>t?t:i},Un=function(e,t){return!Sn(e)||!(t=PA.exec(e))?"":t[1]},VA=function(e,t,i){return so(i,function(r){return hc(e,t,r)})},xm=[].slice,qM=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==yr},GA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||qM(r,1)?(s=i).push.apply(s,qi(r)):i.push(r)})||i},qi=function(e,t,i){return Bt&&!t&&Bt.selector?Bt.selector(e):Sn(e)&&!i&&(mm||!fl())?xm.call((t||T_).querySelectorAll(e),0):kn(e)?GA(e,i):qM(e)?xm.call(e,0):e?[e]:[]},ym=function(e){return e=qi(e)[0]||$u("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qi(t,i.querySelectorAll?i:i===e?$u("Invalid scope")||T_.createElement("div"):e)}},$M=function(e){return e.sort(function(){return .5-Math.random()})},KM=function(e){if(Kt(e))return e;var t=Lr(e)?e:{each:e},i=Uo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return Sn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,d,m){var _=(m||t).length,g=o[_],p,v,x,y,A,w,E,R,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,ji])[1],!M){for(E=-ji;E<(E=m[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],p=l?Math.min(M,_)*c-.5:r%M,v=M===ji?0:l?_*h/M-.5:r/M|0,E=0,R=ji,w=0;w<_;w++)x=w%M-p,y=v-(w/M|0),g[w]=A=u?Math.abs(u==="y"?y:x):LM(x*x+y*y),A>E&&(E=A),A<R&&(R=A);r==="random"&&$M(g),g.max=E-R,g.min=R,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Un(t.amount||t.each)||0,i=i&&_<0?o1(i):i}return _=(g[f]-g.min)/g.max||0,Vt(g.b+(i?i(_):_)*g.v)+g.u}},Sm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Vt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ls(i)?0:Un(i))}},ZM=function(e,t){var i=kn(e),r,s;return!i&&Lr(e)&&(r=i=e.radius||ji,e.values?(e=qi(e.values),(s=!ls(e[0]))&&(r*=r)):e=Sm(e.increment)),so(t,i?Kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ji,c=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||ls(o)?c:c+Un(o)}:Sm(e))},QM=function(e,t,i,r){return so(kn(e)?!t:i===!0?!!(i=0):!r,function(){return kn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},WA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},XA=function(e,t){return function(i){return e(parseFloat(i))+(t||Un(i))}},YA=function(e,t,i){return e1(e,t,0,1,i)},JM=function(e,t,i){return so(i,function(r){return e[~~t(r)]})},jA=function n(e,t,i){var r=t-e;return kn(e)?JM(e,n(0,e.length),t):so(i,function(s){return(r+(s-e)%r)%r+e})},qA=function n(e,t,i){var r=t-e,s=r*2;return kn(e)?JM(e,n(0,e.length-1),t):so(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Zu=function(e){return e.replace(CA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(RA);return QM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},e1=function(e,t,i,r,s){var o=t-e,a=r-i;return so(s,function(l){return i+((l-e)/o*a||0)})},$A=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Sn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return c[_](m-_)},i=t}else r||(e=ll(kn(e)?[]:{},e));if(!c){for(l in t)D_.call(a,e,l,"get",t[l]);s=function(m){return U_(m,a)||(o?e.p:e)}}}return so(i,s)},Rv=function(e,t,i){var r=e.labels,s=ji,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ri=function(e,t,i){var r=e.vars,s=r[t],o=Bt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ws.length&&mh(),a&&(Bt=a),c=l?s.apply(u,l):s.call(u),Bt=o,c},Jl=function(e){return Ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ri(e,"onInterrupt"),e},Fa,t1=[],n1=function(e){if(e)if(e=!e.name&&e.default||e,w_()||e.headless){var t=e.name,i=Kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ku,render:U_,add:D_,kill:fC,modifier:cC,rawVars:0},o={targetTest:0,get:0,getSetter:N_,aliases:{},register:0};if(fl(),e!==r){if(Si[t])return;Ni(r,Ni(gh(e,s),o)),ll(r.prototype,ll(s,gh(e,o))),Si[r.prop=t]=r,e.targetTest&&(Pf.push(r),C_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}kM(t,r),e.register&&e.register(di,r,ci)}else t1.push(e)},Rt=255,eu={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Cd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},i1=function(e,t,i){var r=e?ls(e)?[e>>16,e>>8&Rt,e&Rt]:0:eu.black,s,o,a,l,u,c,h,f,d,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eu[e])r=eu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(Ev),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Cd(l+1/3,s,o),r[1]=Cd(l,s,o),r[2]=Cd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(NM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ev)||eu.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(d=h-f,u=c>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},r1=function(e){var t=[],i=[],r=-1;return e.split(Xs).forEach(function(s){var o=s.match(Ua)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},bv=function(e,t,i){var r="",s=(e+r).match(Xs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=i1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=r1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Xs,"1").split(Ua),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Xs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Xs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),KA=/hsl[a]?\(/,s1=function(e){var t=e.join(" "),i;if(Xs.lastIndex=0,Xs.test(t))return i=KA.test(t),e[1]=bv(e[1],i),e[0]=bv(e[0],i,r1(e[1])),!0},Qu,Ti=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,d,m=function _(g){var p=n()-r,v=g===!0,x,y,A,w;if((p>e||p<0)&&(i+=p-t),r+=p,A=r-i,x=A-o,(x>0||v)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(d=0;d<a.length;d++)a[d](A,f,w,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){FM&&(!mm&&w_()&&(yr=mm=window,T_=yr.document||{},Ii.gsap=di,(yr.gsapVersions||(yr.gsapVersions=[])).push(di.version),OM(ph||yr.GreenSockGlobals||!yr.gsap&&yr||{}),t1.forEach(n1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Qu=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Qu=0,u=Ku},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,v){var x=p?function(y,A,w,E){g(y,A,w,E),h.remove(x)}:g;return h.remove(g),a[v?"unshift":"push"](x),fl(),x},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),fl=function(){return!Qu&&Ti.wake()},ct={},ZA=/^[\d.\-M][\d.\-,\s]/,QA=/["']/g,JA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(QA,"").trim():+u,r=l.substr(a+1).trim();return t},eC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tC=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[JA(t[1])]:eC(e).split(",").map(VM)):ct._CE&&ZA.test(e)?ct._CE("",e):i},o1=function(e){return function(t){return 1-e(1-t)}},a1=function n(e,t){for(var i=e._first,r;i;)i instanceof $n?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Uo=function(e,t){return e&&(Kt(e)?e:ct[e]||tC(e))||t},Qo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){ct[a]=Ii[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},l1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Rd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/pm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*AA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:l1(a);return s=pm/s,l.config=function(u,c){return n(e,u,c)},l},bd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:l1(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Qo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Qo("Elastic",Rd("in"),Rd("out"),Rd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Qo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Qo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Qo("Circ",function(n){return-(LM(1-n*n)-1)});Qo("Sine",function(n){return n===1?1:-TA(n*EA)+1});Qo("Back",bd("in"),bd("out"),bd());ct.SteppedEase=ct.steps=Ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((r*hc(0,o,a)|0)+s)*i}}};al.ease=ct["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return R_+=n+","+n+"Params,"});var u1=function(e,t){this.id=wA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:BM,this.set=t?t.getSetter:N_},Ju=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cl(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Qu||Ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,cl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(fl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yh(this,i),!s._dp||s.parent||XM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),HM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Av(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Av(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ul(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_h(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-bt?0:this._rts,this.totalTime(hc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xh(this),FA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Vt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(li(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=LA);var r=An;return An=i,P_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Cv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Cv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Bi(this,i),li(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,li(r)),this._dur||(this._zTime=-bt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Kt(i)?i:GM,l=function(){var c=r.then;r.then=null,s&&s(),Kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Jl(this)},n}();Ni(Ju.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var $n=function(n){DM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=li(i.sortChildren),Wt&&wr(i.parent||Wt,Vr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&YM(Vr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return vu(0,arguments,this),this},t.from=function(r,s,o){return vu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return vu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,_u(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(r,s,Bi(this,o),1),this},t.call=function(r,s,o){return wr(this,rn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new rn(r,o,Bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,_u(o).immediateRender=li(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,_u(a).immediateRender=li(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Vt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,d,m,_,g,p,v,x,y,A,w,E;if(this!==Wt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,p=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(f=Vt(c%g),c===l?(_=this._repeat,f=u):(A=Vt(c/g),_=~~A,_&&_===A&&(f=u,_--),f>u&&(f=u)),A=ul(this._tTime,g),!a&&this._tTime&&A!==_&&this._tTime-A*g-this._dur<=0&&(A=_),w&&_&1&&(f=u-f,E=1),_!==A&&!this._lock){var R=w&&A&1,M=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Vt(_*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;a1(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=BA(this,Vt(a),Vt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!A&&(Ri(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=-bt);break}}d=m}else{d=this._last;for(var S=r<0?r:f;d;){if(m=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||An&&P_(d)),f!==this._time||!this._ts&&!p){v=0,m&&(c+=this._zTime=S?-bt:bt);break}}d=m}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Xh(this),this.render(r,s,o);this._onUpdate&&!s&&Ri(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ks(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ri(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ls(s)||(s=Bi(this,s,r)),!(r instanceof Ju)){if(kn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Kt(r))r=rn.delayedCall(0,r);else return this}return this!==r?wr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof rn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(r.parent===this&&Wh(this,r),r===this._recent&&(this._recent=this._last),No(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Vt(Ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=rn.delayedCall(0,s||Ku,o);return a.data="isPause",this._hasPause=1,wr(this,a,Bi(this,r))},t.removePause=function(r){var s=this._first;for(r=Bi(this,r);s;)s._start===r&&s.data==="isPause"&&Ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ds!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=qi(r),l=this._first,u=ls(s),c;l;)l instanceof rn?IA(l._targets,a)&&(u?(!Ds||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Bi(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=rn.to(o,Ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&cl(m,g,0,1).render(m._time,!0,!0),d=1}c&&c.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ni({startAt:{time:Bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rv(this,Bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rv(this,Bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Vt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return No(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),No(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ji,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Vt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;cl(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Wt._ts&&(HM(Wt,_h(r,Wt)),zM=Ti.frame),Ti.frame>=wv){wv+=Di.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&Di.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e}(Ju);Ni($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var nC=function(e,t,i,r,s,o,a){var l=new ci(this._pt,e,t,0,1,m1,null,s),u=0,c=0,h,f,d,m,_,g,p,v;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Zu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Td)||[];h=Td.exec(r);)m=h[0],_=r.substring(u,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[c++]&&(g=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:g,c:m.charAt(1)==="="?Xa(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},u=Td.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(UM.test(r)||p)&&(l.e=0),this._pt=l,l},D_=function(e,t,i,r,s,o,a,l,u,c){Kt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Kt(h)?u?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,d=Kt(h)?u?aC:d1:I_,m;if(Sn(r)&&(~r.indexOf("random(")&&(r=Zu(r)),r.charAt(1)==="="&&(m=Xa(f,r)+(Un(f)||0),(m||m===0)&&(r=m))),!c||f!==r||Mm)return!isNaN(f*r)&&r!==""?(m=new ci(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?uC:p1,0,d),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&A_(t,r),nC.call(this,e,t,f,r,d,l||Di.stringFilter,u))},iC=function(e,t,i,r,s){if(Kt(e)&&(e=xu(e,s,t,i,r)),!Lr(e)||e.style&&e.nodeType||kn(e)||IM(e))return Sn(e)?xu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=xu(e[a],s,t,i,r);return o},c1=function(e,t,i,r,s,o){var a,l,u,c;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:iC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ci(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Fa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ds,Mm,L_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,x=e._overwrite==="auto"&&!M_,y=e.timeline,A,w,E,R,M,S,D,N,z,X,j,W,Y;if(y&&(!f||!s)&&(s="none"),e._ease=Uo(s,al.ease),e._yEase=h?o1(Uo(h===!0?s:h,al.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(N=g[0]?Io(g[0]).harness:0,W=N&&r[N.prop],A=gh(r,C_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&m?bf:DA),_._lazy=0),o){if(Ks(e._startAt=rn.set(g,Ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&li(l),startAt:null,delay:0,onUpdate:u&&function(){return Ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!d)&&e._startAt.revert(bf),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&m&&!_){if(t&&(a=!1),E=Ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&li(l),immediateRender:a,stagger:0,parent:p},A),W&&(E[N.prop]=W),Ks(e._startAt=rn.set(g,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(bf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&li(l)||l&&!m,w=0;w<g.length;w++){if(M=g[w],D=M._gsap||b_(g)[w]._gsap,e._ptLookup[w]=X={},gm[D.id]&&Ws.length&&mh(),j=v===g?w:v.indexOf(M),N&&(z=new N).init(M,W||A,e,j,v)!==!1&&(e._pt=R=new ci(e._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(L){X[L]=R}),z.priority&&(S=1)),!N||W)for(E in A)Si[E]&&(z=c1(E,A,e,j,M,v))?z.priority&&(S=1):X[E]=R=D_.call(e,M,E,"get",A[E],j,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(Ds=e,Wt.killTweensOf(M,X,e.globalTime(t)),Y=!e.parent,Ds=0),e._pt&&l&&(gm[D.id]=1)}S&&g1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&y.render(ji,!0,!0)},rC=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,d;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mm=1,e.vars[t]="+=0",L_(e,a),Mm=0,l?$u(t+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)h=u[d],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Qt(i)+Un(h.e)),h.b&&(h.b=c.s+Un(h.b))},sC=function(e,t){var i=e[0]?Io(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ll({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},oC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(kn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},xu=function(e,t,i,r,s){return Kt(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Zu(e):e},f1=R_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",h1={};ui(f1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return h1[n]=1});var rn=function(n){DM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:_u(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,v=r.parent||Wt,x=(kn(i)||IM(i)?ls(i[0]):"length"in r)?[i]:qi(i),y,A,w,E,R,M,S,D;if(a._targets=x.length?b_(x):$u("GSAP target "+i+" not found. https://gsap.com",!Di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Ic(u)||Ic(c)){if(r=a.vars,y=a.timeline=new $n({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Vr(a),y._start=0,f||Ic(u)||Ic(c)){if(E=x.length,S=f&&KM(f),Lr(f))for(R in f)~f1.indexOf(R)&&(D||(D={}),D[R]=f[R]);for(A=0;A<E;A++)w=gh(r,h1),w.stagger=0,p&&(w.yoyoEase=p),D&&ll(w,D),M=x[A],w.duration=+xu(u,Vr(a),A,M,x),w.delay=(+xu(c,Vr(a),A,M,x)||0)-a._delay,!f&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,S?S(A,M,x):0),y._ease=ct.none;y.duration()?u=c=0:a.timeline=0}else if(m){_u(Ni(y.vars.defaults,{ease:"none"})),y._ease=Uo(m.ease||r.ease||"none");var N=0,z,X,j;if(kn(m))m.forEach(function(W){return y.to(x,W,">")}),y.duration();else{w={};for(R in m)R==="ease"||R==="easeEach"||oC(R,m[R],w,m.easeEach);for(R in w)for(z=w[R].sort(function(W,Y){return W.t-Y.t}),N=0,A=0;A<z.length;A++)X=z[A],j={ease:X.e,duration:(X.t-(A?z[A-1].t:0))/100*u},j[R]=X.v,y.to(x,j,N),N+=j.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return d===!0&&!M_&&(Ds=Vr(a),Wt.killTweensOf(x),Ds=0),wr(v,Vr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!m&&a._start===Vt(v._time)&&li(h)&&OA(Vr(a))&&v.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-c)||0)),g&&YM(Vr(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-bt&&!c?l:r<bt?0:r,f,d,m,_,g,p,v,x,y;if(!u)zA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Vt(h%_),h===l?(m=this._repeat,f=u):(g=Vt(h/_),m=~~g,m&&m===g?(f=u,m--):f>u&&(f=u)),p=this._yoyo&&m&1,p&&(y=this._yEase,f=u-f),g=ul(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&(x&&this._yEase&&a1(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Vt(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(jM(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/u),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!g&&(Ri(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&_m(this,r,s,o),Ri(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&_m(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ks(this,1),!s&&!(c&&!a)&&(h||a||p)&&(Ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Qu||Ti.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||L_(this,u),c=this._ease(u/this._dur),rC(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Yh(this,0),this.parent||WM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ds&&Ds.vars.overwrite!==!0)._first||Jl(this),this.parent&&o!==this.timeline.totalDuration()&&cl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?qi(r):a,u=this._ptLookup,c=this._pt,h,f,d,m,_,g,p;if((!s||s==="all")&&UA(a,l))return s==="all"&&(this._pt=0),Jl(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ui(s,function(v){return _[v]=1}),s=_),s=sC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Wh(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&Jl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return vu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return vu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Wt.killTweensOf(r,s,o)},e}(Ju);Ni(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){rn[n]=function(){var e=new $n,t=xm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var I_=function(e,t,i){return e[t]=i},d1=function(e,t,i){return e[t](i)},aC=function(e,t,i,r){return e[t](r.fp,i)},lC=function(e,t,i){return e.setAttribute(t,i)},N_=function(e,t){return Kt(e[t])?d1:E_(e[t])&&e.setAttribute?lC:I_},p1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},m1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},U_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},cC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},fC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},g1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ci=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||p1,this.d=l||this,this.set=u||I_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hC,this.m=i,this.mt=s,this.tween=r},n}();ui(R_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return C_[n]=1});Ii.TweenMax=Ii.TweenLite=rn;Ii.TimelineLite=Ii.TimelineMax=$n;Wt=new $n({sortChildren:!1,defaults:al,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=s1;var Fo=[],Df={},dC=[],Pv=0,pC=0,Pd=function(e){return(Df[e]||dC).map(function(t){return t()})},Em=function(){var e=Date.now(),t=[];e-Pv>2&&(Pd("matchMediaInit"),Fo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=yr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Pd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Pv=e,Pd("matchMedia"))},_1=function(){function n(t,i){this.selector=i&&ym(i),this.data=[],this._r=[],this.isReverted=!1,this.id=pC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Kt(i)&&(s=r,r=i,i=Kt);var o=this,a=function(){var u=Bt,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=ym(s)),Bt=o,h=r.apply(o,arguments),Kt(h)&&o._r.push(h),Bt=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Bt;Bt=null,i(this),Bt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof rn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof $n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof rn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Fo.length;o--;)Fo[o].id===this.id&&Fo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),mC=function(){function n(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Lr(i)||(i={matches:i});var o=new _1(0,s||this.scope),a=o.conditions={},l,u,c;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=yr.matchMedia(i[u]),l&&(Fo.indexOf(o)<0&&Fo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Em):l.addEventListener("change",Em)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),vh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return n1(r)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=qi(e)[0]);var s=Io(e||{}).get,o=i?GM:VM;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=qi(e),e.length>1){var r=e.map(function(c){return di.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Si[t],a=Io(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Fa._pt=0,h.init(e,i?c+i:c,Fa,0,[e]),h.render(1,h),Fa._pt&&U_(1,Fa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=di.to(e,Ni((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Uo(e.ease,al.ease)),Tv(al,e||{})},config:function(e){return Tv(Di,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Ii[a]&&$u(t+" effect requires "+a+" plugin.")}),Ad[t]=function(a,l,u){return i(qi(a),Ni(l||{},s),u)},o&&($n.prototype[t]=function(a,l,u){return this.add(Ad[t](a,Lr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ct[e]=Uo(t)},parseEase:function(e,t){return arguments.length?Uo(e,t):ct},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $n(e),r,s;for(i.smoothChildTiming=li(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof rn&&r.vars.onComplete===r._targets[0]))&&wr(i,r,r._start-r._delay),r=s;return wr(Wt,i,0),i},context:function(e,t){return e?new _1(e,t):Bt},matchMedia:function(e){return new mC(e)},matchMediaRefresh:function(){return Fo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Em()},addEventListener:function(e,t){var i=Df[e]||(Df[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Df[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jA,wrapYoyo:qA,distribute:KM,random:QM,snap:ZM,normalize:YA,getUnit:Un,clamp:VA,splitColor:i1,toArray:qi,selector:ym,mapRange:e1,pipe:WA,unitize:XA,interpolate:$A,shuffle:$M},install:OM,effects:Ad,ticker:Ti,updateRoot:$n.updateRoot,plugins:Si,globalTimeline:Wt,core:{PropTween:ci,globals:kM,Tween:rn,Timeline:$n,Animation:Ju,getCache:Io,_removeLinkedListItem:Wh,reverting:function(){return An},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return M_=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return vh[n]=rn[n]});Ti.add($n.updateRoot);Fa=vh.to({},{duration:0});var gC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},_C=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=gC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Dd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},ui(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}_C(a,s)}}}},di=vh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Dd("roundProps",Sm),Dd("modifiers"),Dd("snap",ZM))||vh;rn.version=$n.version=di.version="3.14.2";FM=1;w_()&&fl();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dv,Ls,Ya,F_,Co,Lv,O_,vC=function(){return typeof window<"u"},us={},_o=180/Math.PI,ja=Math.PI/180,ta=Math.atan2,Iv=1e8,k_=/([A-Z])/g,xC=/(left|right|width|margin|padding|x)/i,yC=/[\s,\(]\S/,Tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},EC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},v1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},x1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TC=function(e,t,i){return e.style[t]=i},AC=function(e,t,i){return e.style.setProperty(t,i)},CC=function(e,t,i){return e._gsap[t]=i},RC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},bC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},PC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Xt="transform",fi=Xt+"Origin",DC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in us&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wr(r,a)}):this.tfm[e]=o.x?o[e]:Wr(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return Tr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},y1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(k_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=O_(),(!s||!s.isStart)&&!i[Xt]&&(y1(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},S1=function(e,t){var i={target:e,props:[],revert:LC,save:DC};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},M1,Tm=function(e,t){var i=Ls.createElementNS?Ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ls.createElement(e);return i&&i.style?i:Ls.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(k_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,hl(t)||t,1)||""},Nv="O,Moz,ms,Ms,Webkit".split(","),hl=function(e,t,i){var r=t||Co,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Nv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Nv[o]:"")+e},Am=function(){vC()&&window.document&&(Dv=window,Ls=Dv.document,Ya=Ls.documentElement,Co=Tm("div")||{style:{}},Tm("div"),Xt=hl(Xt),fi=Xt+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",M1=!!hl("perspective"),O_=di.core.reverting,F_=1)},Uv=function(e){var t=e.ownerSVGElement,i=Tm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ya.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ya.removeChild(i),s},Fv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},E1=function(e){var t,i;try{t=e.getBBox()}catch{t=Uv(e),i=1}return t&&(t.width||t.height)||i||(t=Uv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fv(e,["x","cx","x1"])||0,y:+Fv(e,["y","cy","y1"])||0,width:0,height:0}:t},w1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&E1(e))},Zs=function(e,t){if(t){var i=e.style,r;t in us&&t!==fi&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(k_,"-$1").toLowerCase())):i.removeAttribute(t)}},Is=function(e,t,i,r,s,o){var a=new ci(e._pt,t,i,0,1,o?x1:v1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Ov={deg:1,rad:1,turn:1},IC={grid:1,flex:1},Qs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Co.style,l=xC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",m,_,g,p;if(r===o||!s||Ov[r]||Ov[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&w1(e),(d||o==="%")&&(us[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[c],Qt(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ls||!_.appendChild)&&(_=Ls.body),g=_._gsap,g&&d&&g.width&&l&&g.time===Ti.time&&!g.uncache)return Qt(s/g.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,m=e[c],v?e.style[t]=v:Zs(e,t)}else(d||o==="%")&&!IC[bi(_,"display")]&&(a.position=bi(e,"position")),_===e&&(a.position="static"),_.appendChild(Co),m=Co[c],_.removeChild(Co),a.position="absolute";return l&&d&&(g=Io(_),g.time=Ti.time,g.width=_[c]),Qt(f?m*s/h:m&&s?h/m*s:0)},Wr=function(e,t,i,r){var s;return F_||Am(),t in Tr&&t!=="transform"&&(t=Tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),us[t]&&t!=="transform"?(s=tc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yh(bi(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xh[t]&&xh[t](e,t,i)||bi(e,t)||BM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Qs(e,t,s,i)+i:s},NC=function(e,t,i,r){if(!i||i==="none"){var s=hl(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new ci(this._pt,e.style,t,0,1,m1),l=0,u=0,c,h,f,d,m,_,g,p,v,x,y,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=bi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=bi(e,t)||r,_?e.style[t]=_:Zs(e,t)),c=[i,r],s1(c),i=c[0],r=c[1],f=i.match(Ua)||[],A=r.match(Ua)||[],A.length){for(;h=Ua.exec(r);)g=h[0],v=r.substring(l,h.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=f[u++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),g.charAt(1)==="="&&(g=Xa(d,g)+y),p=parseFloat(g),x=g.substr((p+"").length),l=Ua.lastIndex-x.length,x||(x=x||Di.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(d=Qs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?x1:v1;return UM.test(r)&&(a.e=0),this._pt=a,a},kv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=kv[i]||i,t[1]=kv[r]||r,t.join(" ")},FC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],us[a]&&(l=1,a=a==="transformOrigin"?fi:Xt),Zs(i,a);l&&(Zs(i,Xt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",tc(i,1),o.uncache=1,y1(r)))}},xh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ci(e._pt,t,i,0,0,FC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ec=[1,0,0,1,0,0],T1={},A1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zv=function(e){var t=bi(e,Xt);return A1(t)?ec:t.substr(7).match(NM).map(Qt)},z_=function(e,t){var i=e._gsap||Io(e),r=e.style,s=zv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ec:s):(s===ec&&!e.offsetParent&&e!==Ya&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ya.appendChild(e)),s=zv(e),l?r.display=l:Zs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ya.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cm=function(e,t,i,r,s,o){var a=e._gsap,l=s||z_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],g=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,E,R,M;i?l!==ec&&(E=d*g-m*_)&&(R=y*(g/E)+A*(-_/E)+(_*v-g*p)/E,M=y*(-m/E)+A*(d/E)-(d*v-m*p)/E,y=R,A=M):(w=E1(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(p=y-u,v=A-c,a.xOffset=h+(p*d+v*_)-p,a.yOffset=f+(p*m+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(Is(o,a,"xOrigin",u,y),Is(o,a,"yOrigin",c,A),Is(o,a,"xOffset",h,a.xOffset),Is(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},tc=function(e,t){var i=e._gsap||new u1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,fi)||"0",c,h,f,d,m,_,g,p,v,x,y,A,w,E,R,M,S,D,N,z,X,j,W,Y,L,$,P,ne,xe,je,q,te;return c=h=f=_=g=p=v=x=y=0,d=m=1,i.svg=!!(e.getCTM&&w1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),E=z_(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Cm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),A=i.xOrigin||0,w=i.yOrigin||0,E!==ec&&(D=E[0],N=E[1],z=E[2],X=E[3],c=j=E[4],h=W=E[5],E.length===6?(d=Math.sqrt(D*D+N*N),m=Math.sqrt(X*X+z*z),_=D||N?ta(N,D)*_o:0,v=z||X?ta(z,X)*_o+_:0,v&&(m*=Math.abs(Math.cos(v*ja))),i.svg&&(c-=A-(A*D+w*z),h-=w-(A*N+w*X))):(te=E[6],je=E[7],P=E[8],ne=E[9],xe=E[10],q=E[11],c=E[12],h=E[13],f=E[14],R=ta(te,xe),g=R*_o,R&&(M=Math.cos(-R),S=Math.sin(-R),Y=j*M+P*S,L=W*M+ne*S,$=te*M+xe*S,P=j*-S+P*M,ne=W*-S+ne*M,xe=te*-S+xe*M,q=je*-S+q*M,j=Y,W=L,te=$),R=ta(-z,xe),p=R*_o,R&&(M=Math.cos(-R),S=Math.sin(-R),Y=D*M-P*S,L=N*M-ne*S,$=z*M-xe*S,q=X*S+q*M,D=Y,N=L,z=$),R=ta(N,D),_=R*_o,R&&(M=Math.cos(R),S=Math.sin(R),Y=D*M+N*S,L=j*M+W*S,N=N*M-D*S,W=W*M-j*S,D=Y,j=L),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=Qt(Math.sqrt(D*D+N*N+z*z)),m=Qt(Math.sqrt(W*W+te*te)),R=ta(j,W),v=Math.abs(R)>2e-4?R*_o:0,y=q?1/(q<0?-q:q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!A1(bi(e,Xt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Qt(d),i.scaleY=Qt(m),i.rotation=Qt(_)+a,i.rotationX=Qt(g)+a,i.rotationY=Qt(p)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=yh(u)),i.xOffset=i.yOffset=0,i.force3D=Di.force3D,i.renderTransform=i.svg?kC:M1?C1:OC,i.uncache=0,i},yh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ld=function(e,t,i){var r=Un(t);return Qt(parseFloat(t)+parseFloat(Qs(e,"x",i+"px",r)))+r},OC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,C1(e,t)},oo="0deg",Bl="0px",ao=") ",C1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,x=i.zOrigin,y="",A=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==oo||c!==oo)){var w=parseFloat(c)*ja,E=Math.sin(w),R=Math.cos(w),M;w=parseFloat(h)*ja,M=Math.cos(w),o=Ld(v,o,E*M*-x),a=Ld(v,a,-Math.sin(w)*-x),l=Ld(v,l,R*M*-x+x)}g!==Bl&&(y+="perspective("+g+ao),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==Bl||a!==Bl||l!==Bl)&&(y+=l!==Bl||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ao),u!==oo&&(y+="rotate("+u+ao),c!==oo&&(y+="rotateY("+c+ao),h!==oo&&(y+="rotateX("+h+ao),(f!==oo||d!==oo)&&(y+="skew("+f+", "+d+ao),(m!==1||_!==1)&&(y+="scale("+m+", "+_+ao),v.style[Xt]=y||"translate(0, 0)"},kC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),A,w,E,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ja,u*=ja,A=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=ja,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Qt(A),w=Qt(w),E=Qt(E),R=Qt(R)):(A=h,R=f,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Qs(d,"x",o,"px"),y=Qs(d,"y",a,"px")),(m||_||g||p)&&(x=Qt(x+m-(m*A+_*E)+g),y=Qt(y+_-(m*w+_*R)+p)),(r||s)&&(M=d.getBBox(),x=Qt(x+r/100*M.width),y=Qt(y+s/100*M.height)),M="matrix("+A+","+w+","+E+","+R+","+x+","+y+")",d.setAttribute("transform",M),v&&(d.style[Xt]=M)},zC=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?_o:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Iv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Iv)%o-~~(u/o)*o)),e._pt=f=new ci(e._pt,t,i,r,u,SC),f.e=c,f.u="deg",e._props.push(i),f},Bv=function(e,t){for(var i in t)e[i]=t[i];return e},BC=function(e,t,i){var r=Bv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,d,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Xt]=t,a=tc(i,1),Zs(i,Xt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Xt],o[Xt]=t,a=tc(i,1),o[Xt]=u);for(l in us)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=Un(u),m=Un(c),h=d!==m?Qs(i,l,u,m):parseFloat(u),f=parseFloat(c),e._pt=new ci(e._pt,a,l,h,f-h,wm),e._pt.u=m||0,e._props.push(l));Bv(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});xh[e>1?"border"+n:n]=function(a,l,u,c,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Wr(a,m,u)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(c+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var R1={name:"css",register:Am,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,d,m,_,g,p,v,x,y,A,w,E,R,M;F_||Am(),this.styles=this.styles||S1(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Si[_]&&c1(_,t,i,r,e,s)))){if(d=typeof c,m=xh[_],d==="function"&&(c=c.call(i,r,e,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Zu(c)),m)m(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Xs.lastIndex=0,Xs.test(u)||(g=Un(u),p=Un(c),p?g!==p&&(u=Qs(e,_,u,p)+p):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Sn(u)&&~u.indexOf("random(")&&(u=Zu(u)),Un(u+"")||u==="auto"||(u+=Di.units[_]||Un(Wr(e,_))||""),(u+"").charAt(1)==="="&&(u=Wr(e,_))):u=Wr(e,_),f=parseFloat(u),v=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in Tr&&(_==="autoAlpha"&&(f===1&&Wr(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Is(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in us,x){if(this.styles.save(_),M=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=bi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=bi(e,"perspective"),S?e.style.perspective=S:Zs(e,"perspective")}h=parseFloat(c)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||tc(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new ci(this._pt,a,Xt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new ci(this._pt,A,"scaleY",A.scaleY,(v?Xa(A.scaleY,v+h):h)-A.scaleY||0,wm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(fi,0,a[fi]),c=UC(c),A.svg?Cm(e,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==A.zOrigin&&Is(this,A,"zOrigin",A.zOrigin,p),Is(this,a,_,yh(u),yh(c)));continue}else if(_==="svgOrigin"){Cm(e,c,1,w,0,this);continue}else if(_ in T1){zC(this,A,_,f,v?Xa(f,v+c):c);continue}else if(_==="smoothOrigin"){Is(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){BC(this,c,e);continue}}else _ in a||(_=hl(_)||_);if(x||(h||h===0)&&(f||f===0)&&!yC.test(c)&&_ in a)g=(u+"").substr((f+"").length),h||(h=0),p=Un(c)||(_ in Di.units?Di.units[_]:g),g!==p&&(f=Qs(e,_,u,p)),this._pt=new ci(this._pt,x?A:a,_,f,(v?Xa(f,v+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?wC:wm),this._pt.u=p||0,x&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=EC):g!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=MC);else if(_ in a)NC.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){A_(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}E&&g1(this)},render:function(e,t){if(t.tween._time||!O_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wr,aliases:Tr,getSetter:function(e,t,i){var r=Tr[t];return r&&r.indexOf(",")<0&&(t=r),t in us&&t!==fi&&(e._gsap.x||Wr(e,"x"))?i&&Lv===i?t==="scale"?RC:CC:(Lv=i||{})&&(t==="scale"?bC:PC):e.style&&!E_(e.style[t])?TC:~t.indexOf("-")?AC:N_(e,t)},core:{_removeProperty:Zs,_getMatrix:z_}};di.utils.checkPrefix=hl;di.core.getStyleSaver=S1;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){us[s]=1});ui(e,function(s){Di.units[s]="deg",T1[s]=1}),Tr[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");Tr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Di.units[n]="px"});di.registerPlugin(R1);var Kn=di.registerPlugin(R1)||di;Kn.core.Tween;function HC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function VC(n,e,t){return e&&HC(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Lf,Ai,Ns,Us,qa,b1,vo,yu,P1,$r,rr,D1,L1=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},I1=1,Oa=[],at=[],Dr=[],Su=Date.now,Rm=function(e,t){return t},GC=function(){var e=yu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,at),r.push.apply(r,Dr),at=i,Dr=r,Rm=function(o,a){return t[o](a)}},Ys=function(e,t){return~Dr.indexOf(e)&&Dr[Dr.indexOf(e)+1][t]},Mu=function(e){return!!~P1.indexOf(e)},Vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Nc="scrollLeft",Uc="scrollTop",bm=function(){return $r&&$r.isPressed||at.cache++},Sh=function(e,t){var i=function r(s){if(s||s===0){I1&&(Ai.history.scrollRestoration="manual");var o=$r&&$r.isPressed;s=r.v=Math.round(s)||($r&&$r.iOS?1:0),e(s),r.cacheID=at.cache,o&&Rm("ss",s)}else(t||at.cache!==r.cacheID||Rm("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Zn={s:Nc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sh(function(n){return arguments.length?Ai.scrollTo(n,un.sc()):Ai.pageXOffset||Ns[Nc]||Us[Nc]||qa[Nc]||0})},un={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Zn,sc:Sh(function(n){return arguments.length?Ai.scrollTo(Zn.sc(),n):Ai.pageYOffset||Ns[Uc]||Us[Uc]||qa[Uc]||0})},ni=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},WC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Js=function(e,t){var i=t.s,r=t.sc;Mu(e)&&(e=Ns.scrollingElement||Us);var s=at.indexOf(e),o=r===un.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Vn(e,"scroll",bm);var a=at[s+o],l=a||(at[s+o]=Sh(Ys(e,i),!0)||(Mu(e)?r:Sh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},Pm=function(e,t,i){var r=e,s=e,o=Su(),a=o,l=t||50,u=Math.max(500,l*3),c=function(m,_){var g=Su();_||g-o>l?(s=r,r=m,a=o,o=g):i?r+=m:r=s+(m-s)/(g-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(m){var _=a,g=s,p=Su();return(m||m===0)&&m!==r&&c(m),o===a||p-a>u?0:(r+(i?g:-g))/((i?p:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},Hl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},N1=function(){yu=wn.core.globals().ScrollTrigger,yu&&yu.core&&GC()},U1=function(e){return wn=e||L1(),!Lf&&wn&&typeof document<"u"&&document.body&&(Ai=window,Ns=document,Us=Ns.documentElement,qa=Ns.body,P1=[Ai,Ns,Us,qa],wn.utils.clamp,D1=wn.core.context||function(){},vo="onpointerenter"in qa?"pointer":"mouse",b1=en.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rr=en.eventTypes=("ontouchstart"in Us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return I1=0},500),N1(),Lf=1),Lf};Zn.op=un;at.cache=0;var en=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Lf||U1(wn)||console.warn("Please gsap.registerPlugin(Observer)"),yu||N1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,m=i.wheelSpeed,_=i.event,g=i.onDragStart,p=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,A=i.onRight,w=i.onLeft,E=i.onUp,R=i.onDown,M=i.onChangeX,S=i.onChangeY,D=i.onChange,N=i.onToggleX,z=i.onToggleY,X=i.onHover,j=i.onHoverEnd,W=i.onMove,Y=i.ignoreCheck,L=i.isNormalizer,$=i.onGestureStart,P=i.onGestureEnd,ne=i.onWheel,xe=i.onEnable,je=i.onDisable,q=i.onClick,te=i.scrollSpeed,ce=i.capture,ie=i.allowClicks,Ae=i.lockAxis,Pe=i.onLockAxis;this.target=a=ni(a)||Us,this.vars=i,d&&(d=wn.utils.toArray(d)),r=r||1e-9,s=s||0,m=m||1,te=te||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ai.getComputedStyle(qa).lineHeight)||22);var We,it,Oe,Ne,U,Tt,ze,B=this,Ce=0,ut=0,De=i.passive||!c&&i.passive!==!1,b=Js(a,Zn),T=Js(a,un),V=b(),ee=T(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&rr[0]==="pointerdown",Z=Mu(a),de=a.ownerDocument||Ns,ue=[0,0,0],ge=[0,0,0],Ke=0,se=function(){return Ke=Su()},le=function(Re,et){return(B.event=Re)&&d&&WC(Re.target,d)||et&&J&&Re.pointerType!=="touch"||Y&&Y(Re,et)},Fe=function(){B._vx.reset(),B._vy.reset(),it.pause(),h&&h(B)},Ue=function(){var Re=B.deltaX=Hv(ue),et=B.deltaY=Hv(ge),_e=Math.abs(Re)>=r,Xe=Math.abs(et)>=r;D&&(_e||Xe)&&D(B,Re,et,ue,ge),_e&&(A&&B.deltaX>0&&A(B),w&&B.deltaX<0&&w(B),M&&M(B),N&&B.deltaX<0!=Ce<0&&N(B),Ce=B.deltaX,ue[0]=ue[1]=ue[2]=0),Xe&&(R&&B.deltaY>0&&R(B),E&&B.deltaY<0&&E(B),S&&S(B),z&&B.deltaY<0!=ut<0&&z(B),ut=B.deltaY,ge[0]=ge[1]=ge[2]=0),(Ne||Oe)&&(W&&W(B),Oe&&(g&&Oe===1&&g(B),v&&v(B),Oe=0),Ne=!1),Tt&&!(Tt=!1)&&Pe&&Pe(B),U&&(ne(B),U=!1),We=0},Se=function(Re,et,_e){ue[_e]+=Re,ge[_e]+=et,B._vx.update(Re),B._vy.update(et),u?We||(We=requestAnimationFrame(Ue)):Ue()},Je=function(Re,et){Ae&&!ze&&(B.axis=ze=Math.abs(Re)>Math.abs(et)?"x":"y",Tt=!0),ze!=="y"&&(ue[2]+=Re,B._vx.update(Re,!0)),ze!=="x"&&(ge[2]+=et,B._vy.update(et,!0)),u?We||(We=requestAnimationFrame(Ue)):Ue()},ke=function(Re){if(!le(Re,1)){Re=Hl(Re,c);var et=Re.clientX,_e=Re.clientY,Xe=et-B.x,be=_e-B.y,Ve=B.isDragging;B.x=et,B.y=_e,(Ve||(Xe||be)&&(Math.abs(B.startX-et)>=s||Math.abs(B.startY-_e)>=s))&&(Oe||(Oe=Ve?2:1),Ve||(B.isDragging=!0),Je(Xe,be))}},ft=B.onPress=function(ye){le(ye,1)||ye&&ye.button||(B.axis=ze=null,it.pause(),B.isPressed=!0,ye=Hl(ye),Ce=ut=0,B.startX=B.x=ye.clientX,B.startY=B.y=ye.clientY,B._vx.reset(),B._vy.reset(),Vn(L?a:de,rr[1],ke,De,!0),B.deltaX=B.deltaY=0,x&&x(B))},I=B.onRelease=function(ye){if(!le(ye,1)){Hn(L?a:de,rr[1],ke,!0);var Re=!isNaN(B.y-B.startY),et=B.isDragging,_e=et&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Xe=Hl(ye);!_e&&Re&&(B._vx.reset(),B._vy.reset(),c&&ie&&wn.delayedCall(.08,function(){if(Su()-Ke>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(de.createEvent){var be=de.createEvent("MouseEvents");be.initMouseEvent("click",!0,!0,Ai,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(be)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&et&&!L&&it.restart(!0),Oe&&Ue(),p&&et&&p(B),y&&y(B,_e)}},he=function(Re){return Re.touches&&Re.touches.length>1&&(B.isGesturing=!0)&&$(Re,B.isDragging)},K=function(){return(B.isGesturing=!1)||P(B)},Q=function(Re){if(!le(Re)){var et=b(),_e=T();Se((et-V)*te,(_e-ee)*te,1),V=et,ee=_e,h&&it.restart(!0)}},fe=function(Re){if(!le(Re)){Re=Hl(Re,c),ne&&(U=!0);var et=(Re.deltaMode===1?l:Re.deltaMode===2?Ai.innerHeight:1)*m;Se(Re.deltaX*et,Re.deltaY*et,0),h&&!L&&it.restart(!0)}},pe=function(Re){if(!le(Re)){var et=Re.clientX,_e=Re.clientY,Xe=et-B.x,be=_e-B.y;B.x=et,B.y=_e,Ne=!0,h&&it.restart(!0),(Xe||be)&&Je(Xe,be)}},Be=function(Re){B.event=Re,X(B)},mt=function(Re){B.event=Re,j(B)},qt=function(Re){return le(Re)||Hl(Re,c)&&q(B)};it=B._dc=wn.delayedCall(f||.25,Fe).pause(),B.deltaX=B.deltaY=0,B._vx=Pm(0,50,!0),B._vy=Pm(0,50,!0),B.scrollX=b,B.scrollY=T,B.isDragging=B.isGesturing=B.isPressed=!1,D1(this),B.enable=function(ye){return B.isEnabled||(Vn(Z?de:a,"scroll",bm),o.indexOf("scroll")>=0&&Vn(Z?de:a,"scroll",Q,De,ce),o.indexOf("wheel")>=0&&Vn(a,"wheel",fe,De,ce),(o.indexOf("touch")>=0&&b1||o.indexOf("pointer")>=0)&&(Vn(a,rr[0],ft,De,ce),Vn(de,rr[2],I),Vn(de,rr[3],I),ie&&Vn(a,"click",se,!0,!0),q&&Vn(a,"click",qt),$&&Vn(de,"gesturestart",he),P&&Vn(de,"gestureend",K),X&&Vn(a,vo+"enter",Be),j&&Vn(a,vo+"leave",mt),W&&Vn(a,vo+"move",pe)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Ne=Oe=!1,B._vx.reset(),B._vy.reset(),V=b(),ee=T(),ye&&ye.type&&ft(ye),xe&&xe(B)),B},B.disable=function(){B.isEnabled&&(Oa.filter(function(ye){return ye!==B&&Mu(ye.target)}).length||Hn(Z?de:a,"scroll",bm),B.isPressed&&(B._vx.reset(),B._vy.reset(),Hn(L?a:de,rr[1],ke,!0)),Hn(Z?de:a,"scroll",Q,ce),Hn(a,"wheel",fe,ce),Hn(a,rr[0],ft,ce),Hn(de,rr[2],I),Hn(de,rr[3],I),Hn(a,"click",se,!0),Hn(a,"click",qt),Hn(de,"gesturestart",he),Hn(de,"gestureend",K),Hn(a,vo+"enter",Be),Hn(a,vo+"leave",mt),Hn(a,vo+"move",pe),B.isEnabled=B.isPressed=B.isDragging=!1,je&&je(B))},B.kill=B.revert=function(){B.disable();var ye=Oa.indexOf(B);ye>=0&&Oa.splice(ye,1),$r===B&&($r=0)},Oa.push(B),L&&Mu(a)&&($r=B),B.enable(_)},VC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();en.version="3.14.2";en.create=function(n){return new en(n)};en.register=U1;en.getAll=function(){return Oa.slice()};en.getById=function(n){return Oa.filter(function(e){return e.vars.id===n})[0]};L1()&&wn.registerPlugin(en);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,ya,ot,Dt,Mi,St,B_,Mh,nc,Eu,tu,Fc,Ln,jh,Dm,jn,Vv,Gv,Sa,F1,Id,O1,Xn,Lm,k1,z1,Es,Im,H_,$a,V_,wu,Nm,Nd,Oc=1,In=Date.now,Ud=In(),Ki=0,nu=0,Wv=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Xv=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},XC=function n(){return nu&&requestAnimationFrame(n)},Yv=function(){return jh=1},jv=function(){return jh=0},Sr=function(e){return e},iu=function(e){return Math.round(e*1e5)/1e5||0},B1=function(){return typeof window<"u"},H1=function(){return we||B1()&&(we=window.gsap)&&we.registerPlugin&&we},Xo=function(e){return!!~B_.indexOf(e)},V1=function(e){return(e==="Height"?V_:ot["inner"+e])||Mi["client"+e]||St["client"+e]},G1=function(e){return Ys(e,"getBoundingClientRect")||(Xo(e)?function(){return Of.width=ot.innerWidth,Of.height=V_,Of}:function(){return Xr(e)})},YC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ys(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?V1(s):e["client"+s])||0}},jC=function(e,t){return!t||~Dr.indexOf(e)?G1(e):function(){return Of}},Ar=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ys(e,i))?o()-G1(e)()[s]:Xo(e)?(Mi[i]||St[i])-V1(r):e[i]-e["offset"+r])},kc=function(e,t){for(var i=0;i<Sa.length;i+=3)(!t||~t.indexOf(Sa[i+1]))&&e(Sa[i],Sa[i+1],Sa[i+2])},yi=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},ru=function(e){return typeof e=="number"},xo=function(e){return typeof e=="object"},Vl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Fd=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},na=Math.abs,W1="left",X1="top",G_="right",W_="bottom",Oo="width",ko="height",Tu="Right",Au="Left",Cu="Top",Ru="Bottom",nn="padding",Wi="margin",dl="Width",X_="Height",an="px",Xi=function(e){return ot.getComputedStyle(e)},qC=function(e){var t=Xi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xr=function(e,t){var i=t&&Xi(e)[Dm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Eh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Y1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},$C=function(e){return function(t){return we.utils.snap(Y1(e),t)}},Y_=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},KC=function(e){return function(t,i){return Y_(Y1(e))(t,i.direction)}},zc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},gn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},mn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Bc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},$v={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hc={toggleActions:"play",anticipatePin:0},wh={top:0,left:0,center:.5,bottom:1,right:1},If=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in wh?wh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=Dt.createElement("div"),_=Xo(i)||Ys(i,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?St:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(r===un?G_:W_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+r.op.d2],Nf(m,0,r,v),m},Nf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+dl]=1,s["border"+a+dl]=0,s[i.p]=t+"px",we.set(e,s)},rt=[],Um={},ic,Kv=function(){return In()-Ki>34&&(ic||(ic=requestAnimationFrame(es)))},ia=function(){(!Xn||!Xn.isPressed||Xn.startX>St.clientWidth)&&(at.cache++,Xn?ic||(ic=requestAnimationFrame(es)):es(),Ki||jo("scrollStart"),Ki=In())},Od=function(){z1=ot.innerWidth,k1=ot.innerHeight},su=function(e){at.cache++,(e===!0||!Ln&&!O1&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!Lm||z1!==ot.innerWidth||Math.abs(ot.innerHeight-k1)>ot.innerHeight*.25))&&Mh.restart(!0)},Yo={},ZC=[],j1=function n(){return mn(Ye,"scrollEnd",n)||Ro(!0)},jo=function(e){return Yo[e]&&Yo[e].map(function(t){return t()})||ZC},vi=[],q1=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},$1=function(){return at.forEach(function(e){return Fn(e)&&++e.cacheID&&(e.rec=e())})},j_=function(e,t){var i;for(jn=0;jn<rt.length;jn++)i=rt[jn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));wu=!0,t&&q1(t),t||jo("revert")},K1=function(e,t){at.cache++,(t||!qn)&&at.forEach(function(i){return Fn(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(ot.history.scrollRestoration=H_=e)},qn,zo=0,Zv,QC=function(){if(Zv!==zo){var e=Zv=zo;requestAnimationFrame(function(){return e===zo&&Ro(!0)})}},Z1=function(){St.appendChild($a),V_=!Xn&&$a.offsetHeight||ot.innerHeight,St.removeChild($a)},Qv=function(e){return nc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ro=function(e,t){if(Mi=Dt.documentElement,St=Dt.body,B_=[ot,Dt,Mi,St],Ki&&!e&&!wu){gn(Ye,"scrollEnd",j1);return}Z1(),qn=Ye.isRefreshing=!0,wu||$1();var i=jo("refreshInit");F1&&Ye.sort(),t||j_(),at.forEach(function(r){Fn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),rt.slice(0).forEach(function(r){return r.refresh()}),wu=!1,rt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Nm=1,Qv(!0),rt.forEach(function(r){var s=Ar(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Qv(!1),Nm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){Fn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),K1(H_,1),Mh.pause(),zo++,qn=2,es(2),rt.forEach(function(r){return Fn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),qn=Ye.isRefreshing=!1,jo("refresh")},Fm=0,Uf=1,bu,es=function(e){if(e===2||!qn&&!wu){Ye.isUpdating=!0,bu&&bu.update(0);var t=rt.length,i=In(),r=i-Ud>=50,s=t&&rt[0].scroll();if(Uf=Fm>s?-1:1,qn||(Fm=s),r&&(Ki&&!jh&&i-Ki>200&&(Ki=0,jo("scrollEnd")),tu=Ud,Ud=i),Uf<0){for(jn=t;jn-- >0;)rt[jn]&&rt[jn].update(0,r);Uf=1}else for(jn=0;jn<t;jn++)rt[jn]&&rt[jn].update(0,r);Ye.isUpdating=!1}ic=0},Om=[W1,X1,W_,G_,Wi+Ru,Wi+Tu,Wi+Cu,Wi+Au,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ff=Om.concat([Oo,ko,"boxSizing","max"+dl,"max"+X_,"position",Wi,nn,nn+Cu,nn+Tu,nn+Ru,nn+Au]),JC=function(e,t,i){Ka(i);var r=e._gsap;if(r.spacerIsNative)Ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},kd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Om.length,o=t.style,a=e.style,l;s--;)l=Om[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[W_]=a[G_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Oo]=Eh(e,Zn)+an,o[ko]=Eh(e,un)+an,o[nn]=a[Wi]=a[X1]=a[W1]="0",Ka(r),a[Oo]=a["max"+dl]=i[Oo],a[ko]=a["max"+X_]=i[ko],a[nn]=i[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eR=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(eR,"-$1").toLowerCase())}},Gc=function(e){for(var t=Ff.length,i=e.style,r=[],s=0;s<t;s++)r.push(Ff[s],i[Ff[s]]);return r.t=e,r},tR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Of={left:0,top:0},Jv=function(e,t,i,r,s,o,a,l,u,c,h,f,d,m){Fn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?If("0"+e.substr(3),i):0));var _=d?d.time():0,g,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),ru(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Nf(a,i,r,!0);else{Fn(t)&&(t=t(l));var x=(e||"0").split(" "),y,A,w,E;v=ni(t,l)||St,y=Xr(v)||{},(!y||!y.left&&!y.top)&&Xi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Xr(v),E?v.style.display=E:v.style.removeProperty("display")),A=If(x[0],y[r.d]),w=If(x[1]||"0",i),e=y[r.p]-u[r.p]-c+A+s-w,a&&Nf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var R=e+i,M=o._isStart;g="scroll"+r.d2,Nf(o,R,r,M&&R>20||!M&&(h?Math.max(St[g],Mi[g]):o.parentNode[g])<=R+1),h&&(u=Xr(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+an))}return d&&v&&(g=Xr(v),d.seek(f),p=Xr(v),d._caScrollDist=g[r.p]-p[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},nR=/(webkit|moz|length|cssText|inset)/i,ex=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Xi(e);for(o in a)!+o&&!nR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Q1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Wc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},tx=function(e,t){var i=Js(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,d=l.onComplete,m={};u=u||i();var _=Q1(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&es()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=we.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",i.wheelHandler),Ye.isTouch&&gn(e,"touchmove",i.wheelHandler),s},Ye=function(){function n(t,i){ya||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Im(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nu){this.update=this.refresh=this.kill=Sr;return}i=qv(yi(i)||ru(i)||i.nodeType?{trigger:i}:i,Hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Zn:un,D=!h&&h!==0,N=ni(i.scroller||ot),z=we.core.getCache(N),X=Xo(N),j=("pinType"in i?i.pinType:Ys(N,"pinType")||X&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=D&&i.toggleActions.split(" "),L="markers"in i?i.markers:Hc.markers,$=X?0:parseFloat(Xi(N)["border"+S.p2+dl])||0,P=this,ne=i.onRefreshInit&&function(){return i.onRefreshInit(P)},xe=YC(N,X,S),je=jC(N,X),q=0,te=0,ce=0,ie=Js(N,S),Ae,Pe,We,it,Oe,Ne,U,Tt,ze,B,Ce,ut,De,b,T,V,ee,J,Z,de,ue,ge,Ke,se,le,Fe,Ue,Se,Je,ke,ft,I,he,K,Q,fe,pe,Be,mt;if(P._startClamp=P._endClamp=!1,P._dir=S,g*=45,P.scroller=N,P.scroll=E?E.time.bind(E):ie,it=ie(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(F1=1,i.refreshPriority===-9999&&(bu=P)),z.tweenScroll=z.tweenScroll||{top:tx(N,un),left:tx(N,Zn)},P.tweenTo=Ae=z.tweenScroll[S.p],P.scrubDuration=function(_e){he=ru(_e)&&_e,he?I?I.duration(_e):I=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(P)}}):(I&&I.progress(1).kill(),I=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(h),ke=0,l||(l=r.vars.id)),y&&((!xo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in St.style&&we.set(X?[St,Mi]:N,{scrollBehavior:"auto"}),at.forEach(function(_e){return Fn(_e)&&_e.target===(X?Dt.scrollingElement||Mi:N)&&(_e.smooth=!1)}),We=Fn(y.snapTo)?y.snapTo:y.snapTo==="labels"?$C(r):y.snapTo==="labelsDirectional"?KC(r):y.directional!==!1?function(_e,Xe){return Y_(y.snapTo)(_e,In()-te<500?0:Xe.direction)}:we.utils.snap(y.snapTo),K=y.duration||{min:.1,max:2},K=xo(K)?Eu(K.min,K.max):Eu(K,K),Q=we.delayedCall(y.delay||he/2||.1,function(){var _e=ie(),Xe=In()-te<500,be=Ae.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!be&&!jh&&q!==_e){var Ve=(_e-Ne)/b,Zt=r&&!D?r.totalProgress():Ve,st=Xe?0:(Zt-ft)/(In()-tu)*1e3||0,Pt=we.utils.clamp(-Ve,1-Ve,na(st/2)*st/.185),on=Ve+(y.inertia===!1?0:Pt),At,Ct,_t=y,pi=_t.onStart,It=_t.onInterrupt,Bn=_t.onComplete;if(At=We(on,P),ru(At)||(At=on),Ct=Math.max(0,Math.round(Ne+At*b)),_e<=U&&_e>=Ne&&Ct!==_e){if(be&&!be._initted&&be.data<=na(Ct-_e))return;y.inertia===!1&&(Pt=At-Ve),Ae(Ct,{duration:K(na(Math.max(na(on-Zt),na(At-Zt))*.185/st/.05||0)),ease:y.ease||"power3",data:na(Ct-_e),onInterrupt:function(){return Q.restart(!0)&&It&&It(P)},onComplete:function(){P.update(),q=ie(),r&&!D&&(I?I.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),ke=ft=r&&!D?r.totalProgress():P.progress,v&&v(P),Bn&&Bn(P)}},_e,Pt*b,Ct-_e-Pt*b),pi&&pi(P,Ae.tween)}}else P.isActive&&q!==_e&&Q.restart(!0)}).pause()),l&&(Um[l]=P),f=P.trigger=ni(f||d!==!0&&d),mt=f&&f._gsap&&f._gsap.stRevert,mt&&(mt=mt(P)),d=d===!0?f:ni(d),yi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Wi||(m=!m&&d.parentNode&&d.parentNode.style&&Xi(d.parentNode).display==="flex"?!1:nn),P.pin=d,Pe=we.core.getCache(d),Pe.spacer?T=Pe.pinState:(w&&(w=ni(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Pe.spacerIsNative=!!w,w&&(Pe.spacerState=Gc(w))),Pe.spacer=J=w||Dt.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Pe.pinState=T=Gc(d)),i.force3D!==!1&&we.set(d,{force3D:!0}),P.spacer=J=Pe.spacer,Je=Xi(d),se=Je[m+S.os2],de=we.getProperty(d),ue=we.quickSetter(d,S.a,an),kd(d,J,Je),ee=Gc(d)),L){ut=xo(L)?qv(L,$v):$v,B=Vc("scroller-start",l,N,S,ut,0),Ce=Vc("scroller-end",l,N,S,ut,0,B),Z=B["offset"+S.op.d2];var qt=ni(Ys(N,"content")||N);Tt=this.markerStart=Vc("start",l,qt,S,ut,Z,0,E),ze=this.markerEnd=Vc("end",l,qt,S,ut,Z,0,E),E&&(Be=we.quickSetter([Tt,ze],S.a,an)),!j&&!(Dr.length&&Ys(N,"fixedMarkers")===!0)&&(qC(X?St:N),we.set([B,Ce],{force3D:!0}),Fe=we.quickSetter(B,S.a,an),Se=we.quickSetter(Ce,S.a,an))}if(E){var ye=E.vars.onUpdate,Re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),ye&&ye.apply(E,Re||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(_e,Xe){if(!Xe)return P.kill(!0);var be=_e!==!1||!P.enabled,Ve=Ln;be!==P.isReverted&&(be&&(fe=Math.max(ie(),P.scroll.rec||0),ce=P.progress,pe=r&&r.progress()),Tt&&[Tt,ze,B,Ce].forEach(function(Zt){return Zt.style.display=be?"none":"block"}),be&&(Ln=P,P.update(be)),d&&(!A||!P.isActive)&&(be?JC(d,J,T):kd(d,J,Xi(d),le)),be||P.update(be),Ln=Ve,P.isReverted=be)},P.refresh=function(_e,Xe,be,Ve){if(!((Ln||!P.enabled)&&!Xe)){if(d&&_e&&Ki){gn(n,"scrollEnd",j1);return}!qn&&ne&&ne(P),Ln=P,Ae.tween&&!be&&(Ae.tween.kill(),Ae.tween=0),I&&I.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ht){return Ht.vars.immediateRender&&Ht.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Zt=xe(),st=je(),Pt=E?E.duration():Ar(N,S),on=b<=.01||!b,At=0,Ct=Ve||0,_t=xo(be)?be.end:i.end,pi=i.endTrigger||f,It=xo(be)?be.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),Bn=P.pinnedContainer=i.pinnedContainer&&ni(i.pinnedContainer,P),C=f&&Math.max(0,rt.indexOf(P))||0,F=C,H,G,k,oe,ae,me,Me,He,qe,Te,Ze,gt,vt;for(L&&xo(be)&&(gt=we.getProperty(B,S.p),vt=we.getProperty(Ce,S.p));F-- >0;)me=rt[F],me.end||me.refresh(0,1)||(Ln=P),Me=me.pin,Me&&(Me===f||Me===d||Me===Bn)&&!me.isReverted&&(Te||(Te=[]),Te.unshift(me),me.revert(!0,!0)),me!==rt[F]&&(C--,F--);for(Fn(It)&&(It=It(P)),It=Wv(It,"start",P),Ne=Jv(It,f,Zt,S,ie(),Tt,B,P,st,$,j,Pt,E,P._startClamp&&"_startClamp")||(d?-.001:0),Fn(_t)&&(_t=_t(P)),yi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(yi(It)?It.split(" ")[0]:"")+_t:(At=If(_t.substr(2),Zt),_t=yi(It)?It:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ne):Ne)+At,pi=f)),_t=Wv(_t,"end",P),U=Math.max(Ne,Jv(_t||(pi?"100% 0":Pt),pi,Zt,S,ie()+At,ze,Ce,P,st,$,j,Pt,E,P._endClamp&&"_endClamp"))||-.001,At=0,F=C;F--;)me=rt[F]||{},Me=me.pin,Me&&me.start-me._pinPush<=Ne&&!E&&me.end>0&&(H=me.end-(P._startClamp?Math.max(0,me.start):me.start),(Me===f&&me.start-me._pinPush<Ne||Me===Bn)&&isNaN(It)&&(At+=H*(1-me.progress)),Me===d&&(Ct+=H));if(Ne+=At,U+=At,P._startClamp&&(P._startClamp+=At),P._endClamp&&!qn&&(P._endClamp=U||-.001,U=Math.min(U,Ar(N,S))),b=U-Ne||(Ne-=.01)&&.001,on&&(ce=we.utils.clamp(0,1,we.utils.normalize(Ne,U,fe))),P._pinPush=Ct,Tt&&At&&(H={},H[S.a]="+="+At,Bn&&(H[S.p]="-="+ie()),we.set([Tt,ze],H)),d&&!(Nm&&P.end>=Ar(N,S)))H=Xi(d),oe=S===un,k=ie(),ge=parseFloat(de(S.a))+Ct,!Pt&&U>1&&(Ze=(X?Dt.scrollingElement||Mi:N).style,Ze={style:Ze,value:Ze["overflow"+S.a.toUpperCase()]},X&&Xi(St)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ze.style["overflow"+S.a.toUpperCase()]="scroll")),kd(d,J,H),ee=Gc(d),G=Xr(d,!0),He=j&&Js(N,oe?Zn:un)(),m?(le=[m+S.os2,b+Ct+an],le.t=J,F=m===nn?Eh(d,S)+b+Ct:0,F&&(le.push(S.d,F+an),J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+an)),Ka(le),Bn&&rt.forEach(function(Ht){Ht.pin===Bn&&Ht.vars.pinSpacing!==!1&&(Ht._subPinOffset=!0)}),j&&ie(fe)):(F=Eh(d,S),F&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+an)),j&&(ae={top:G.top+(oe?k-Ne:He)+an,left:G.left+(oe?He:k-Ne)+an,boxSizing:"border-box",position:"fixed"},ae[Oo]=ae["max"+dl]=Math.ceil(G.width)+an,ae[ko]=ae["max"+X_]=Math.ceil(G.height)+an,ae[Wi]=ae[Wi+Cu]=ae[Wi+Tu]=ae[Wi+Ru]=ae[Wi+Au]="0",ae[nn]=H[nn],ae[nn+Cu]=H[nn+Cu],ae[nn+Tu]=H[nn+Tu],ae[nn+Ru]=H[nn+Ru],ae[nn+Au]=H[nn+Au],V=tR(T,ae,A),qn&&ie(0)),r?(qe=r._initted,Id(1),r.render(r.duration(),!0,!0),Ke=de(S.a)-ge+b+Ct,Ue=Math.abs(b-Ke)>1,j&&Ue&&V.splice(V.length-2,2),r.render(0,!0,!0),qe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Id(0)):Ke=b,Ze&&(Ze.value?Ze.style["overflow"+S.a.toUpperCase()]=Ze.value:Ze.style.removeProperty("overflow-"+S.a));else if(f&&ie()&&!E)for(G=f.parentNode;G&&G!==St;)G._pinOffset&&(Ne-=G._pinOffset,U-=G._pinOffset),G=G.parentNode;Te&&Te.forEach(function(Ht){return Ht.revert(!1,!0)}),P.start=Ne,P.end=U,it=Oe=qn?fe:ie(),!E&&!qn&&(it<fe&&ie(fe),P.scroll.rec=0),P.revert(!1,!0),te=In(),Q&&(q=-1,Q.restart(!0)),Ln=0,r&&D&&(r._initted||pe)&&r.progress()!==pe&&r.progress(pe||0,!0).render(r.time(),!0,!0),(on||ce!==P.progress||E||_||r&&!r._initted)&&(r&&!D&&(r._initted||ce||r.vars.immediateRender!==!1)&&r.totalProgress(E&&Ne<-.001&&!ce?we.utils.normalize(Ne,U,0):ce,!0),P.progress=on||(it-Ne)/b===ce?0:ce),d&&m&&(J._pinOffset=Math.round(P.progress*Ke)),I&&I.invalidate(),isNaN(gt)||(gt-=we.getProperty(B,S.p),vt-=we.getProperty(Ce,S.p),Wc(B,S,gt),Wc(Tt,S,gt-(Ve||0)),Wc(Ce,S,vt),Wc(ze,S,vt-(Ve||0))),on&&!qn&&P.update(),c&&!qn&&!De&&(De=!0,c(P),De=!1)}},P.getVelocity=function(){return(ie()-Oe)/(In()-tu)*1e3||0},P.endAnimation=function(){Vl(P.callbackAnimation),r&&(I?I.progress(1):r.paused()?D||Vl(r,P.direction<0,1):Vl(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(Ne||P.refresh()||Ne)+r.labels[_e]/r.duration()*b||0},P.getTrailing=function(_e){var Xe=rt.indexOf(P),be=P.direction>0?rt.slice(0,Xe).reverse():rt.slice(Xe+1);return(yi(_e)?be.filter(function(Ve){return Ve.vars.preventOverlaps===_e}):be).filter(function(Ve){return P.direction>0?Ve.end<=Ne:Ve.start>=U})},P.update=function(_e,Xe,be){if(!(E&&!be&&!_e)){var Ve=qn===!0?fe:P.scroll(),Zt=_e?0:(Ve-Ne)/b,st=Zt<0?0:Zt>1?1:Zt||0,Pt=P.progress,on,At,Ct,_t,pi,It,Bn,C;if(Xe&&(Oe=it,it=E?ie():Ve,y&&(ft=ke,ke=r&&!D?r.totalProgress():st)),g&&d&&!Ln&&!Oc&&Ki&&(!st&&Ne<Ve+(Ve-Oe)/(In()-tu)*g?st=1e-4:st===1&&U>Ve+(Ve-Oe)/(In()-tu)*g&&(st=.9999)),st!==Pt&&P.enabled){if(on=P.isActive=!!st&&st<1,At=!!Pt&&Pt<1,It=on!==At,pi=It||!!st!=!!Pt,P.direction=st>Pt?1:-1,P.progress=st,pi&&!Ln&&(Ct=st&&!Pt?0:st===1?1:Pt===1?2:3,D&&(_t=!It&&Y[Ct+1]!=="none"&&Y[Ct+1]||Y[Ct],C=r&&(_t==="complete"||_t==="reset"||_t in r))),M&&(It||C)&&(C||h||!r)&&(Fn(M)?M(P):P.getTrailing(M).forEach(function(k){return k.endAnimation()})),D||(I&&!Ln&&!Oc?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",st,r._tTime/r._tDur):(I.vars.totalProgress=st,I.invalidate().restart())):r&&r.totalProgress(st,!!(Ln&&(te||_e)))),d){if(_e&&m&&(J.style[m+S.os2]=se),!j)ue(iu(ge+Ke*st));else if(pi){if(Bn=!_e&&st>Pt&&U+1>Ve&&Ve+1>=Ar(N,S),A)if(!_e&&(on||Bn)){var F=Xr(d,!0),H=Ve-Ne;ex(d,St,F.top+(S===un?H:0)+an,F.left+(S===un?0:H)+an)}else ex(d,J);Ka(on||Bn?V:ee),Ue&&st<1&&on||ue(ge+(st===1&&!Bn?Ke:0))}}y&&!Ae.tween&&!Ln&&!Oc&&Q.restart(!0),a&&(It||x&&st&&(st<1||!Nd))&&nc(a.targets).forEach(function(k){return k.classList[on||x?"add":"remove"](a.className)}),o&&!D&&!_e&&o(P),pi&&!Ln?(D&&(C&&(_t==="complete"?r.pause().totalProgress(1):_t==="reset"?r.restart(!0).pause():_t==="restart"?r.restart(!0):r[_t]()),o&&o(P)),(It||!Nd)&&(u&&It&&Fd(P,u),W[Ct]&&Fd(P,W[Ct]),x&&(st===1?P.kill(!1,1):W[Ct]=0),It||(Ct=st===1?1:3,W[Ct]&&Fd(P,W[Ct]))),R&&!on&&Math.abs(P.getVelocity())>(ru(R)?R:2500)&&(Vl(P.callbackAnimation),I?I.progress(1):Vl(r,_t==="reverse"?1:!st,1))):D&&o&&!Ln&&o(P)}if(Se){var G=E?Ve/E.duration()*(E._caScrollDist||0):Ve;Fe(G+(B._isFlipped?1:0)),Se(G)}Be&&Be(-Ve/E.duration()*(E._caScrollDist||0))}},P.enable=function(_e,Xe){P.enabled||(P.enabled=!0,gn(N,"resize",su),X||gn(N,"scroll",ia),ne&&gn(n,"refreshInit",ne),_e!==!1&&(P.progress=ce=0,it=Oe=q=ie()),Xe!==!1&&P.refresh())},P.getTween=function(_e){return _e&&Ae?Ae.tween:I},P.setPositions=function(_e,Xe,be,Ve){if(E){var Zt=E.scrollTrigger,st=E.duration(),Pt=Zt.end-Zt.start;_e=Zt.start+Pt*_e/st,Xe=Zt.start+Pt*Xe/st}P.refresh(!1,!1,{start:Xv(_e,be&&!!P._startClamp),end:Xv(Xe,be&&!!P._endClamp)},Ve),P.update()},P.adjustPinSpacing=function(_e){if(le&&_e){var Xe=le.indexOf(S.d)+1;le[Xe]=parseFloat(le[Xe])+_e+an,le[1]=parseFloat(le[1])+_e+an,Ka(le)}},P.disable=function(_e,Xe){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||I&&I.pause(),fe=0,Pe&&(Pe.uncache=1),ne&&mn(n,"refreshInit",ne),Q&&(Q.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!X)){for(var be=rt.length;be--;)if(rt[be].scroller===N&&rt[be]!==P)return;mn(N,"resize",su),X||mn(N,"scroll",ia)}},P.kill=function(_e,Xe){P.disable(_e,Xe),I&&!Xe&&I.kill(),l&&delete Um[l];var be=rt.indexOf(P);be>=0&&rt.splice(be,1),be===jn&&Uf>0&&jn--,be=0,rt.forEach(function(Ve){return Ve.scroller===P.scroller&&(be=1)}),be||qn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Xe||r.kill()),Tt&&[Tt,ze,B,Ce].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),bu===P&&(bu=0),d&&(Pe&&(Pe.uncache=1),be=0,rt.forEach(function(Ve){return Ve.pin===d&&be++}),be||(Pe.spacer=0)),i.onKill&&i.onKill(P)},rt.push(P),P.enable(!1,!1),mt&&mt(P),r&&r.add&&!b){var et=P.update;P.update=function(){P.update=et,at.cache++,Ne||U||P.refresh()},we.delayedCall(.01,P.update),b=.01,Ne=U=0}else P.refresh();d&&QC()},n.register=function(i){return ya||(we=i||H1(),B1()&&window.document&&n.enable(),ya=nu),ya},n.defaults=function(i){if(i)for(var r in i)Hc[r]=i[r];return Hc},n.disable=function(i,r){nu=0,rt.forEach(function(o){return o[r?"kill":"disable"](i)}),mn(ot,"wheel",ia),mn(Dt,"scroll",ia),clearInterval(Fc),mn(Dt,"touchcancel",Sr),mn(St,"touchstart",Sr),zc(mn,Dt,"pointerdown,touchstart,mousedown",Yv),zc(mn,Dt,"pointerup,touchend,mouseup",jv),Mh.kill(),kc(mn);for(var s=0;s<at.length;s+=3)Bc(mn,at[s],at[s+1]),Bc(mn,at[s],at[s+2])},n.enable=function(){if(ot=window,Dt=document,Mi=Dt.documentElement,St=Dt.body,we&&(nc=we.utils.toArray,Eu=we.utils.clamp,Im=we.core.context||Sr,Id=we.core.suppressOverwrites||Sr,H_=ot.history.scrollRestoration||"auto",Fm=ot.pageYOffset||0,we.core.globals("ScrollTrigger",n),St)){nu=1,$a=document.createElement("div"),$a.style.height="100vh",$a.style.position="absolute",Z1(),XC(),en.register(we),n.isTouch=en.isTouch,Es=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lm=en.isTouch===1,gn(ot,"wheel",ia),B_=[ot,Dt,Mi,St],we.matchMedia?(n.matchMedia=function(u){var c=we.matchMedia(),h;for(h in u)c.add(h,u[h]);return c},we.addEventListener("matchMediaInit",function(){$1(),j_()}),we.addEventListener("matchMediaRevert",function(){return q1()}),we.addEventListener("matchMedia",function(){Ro(0,1),jo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Od(),Od})):console.warn("Requires GSAP 3.11.0 or later"),Od(),gn(Dt,"scroll",ia);var i=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Xr(St),un.m=Math.round(a.top+un.sc())||0,Zn.m=Math.round(a.left+Zn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(St.setAttribute("style",""),St.removeAttribute("style")),Fc=setInterval(Kv,250),we.delayedCall(.5,function(){return Oc=0}),gn(Dt,"touchcancel",Sr),gn(St,"touchstart",Sr),zc(gn,Dt,"pointerdown,touchstart,mousedown",Yv),zc(gn,Dt,"pointerup,touchend,mouseup",jv),Dm=we.utils.checkPrefix("transform"),Ff.push(Dm),ya=In(),Mh=we.delayedCall(.2,Ro).pause(),Sa=[Dt,"visibilitychange",function(){var u=ot.innerWidth,c=ot.innerHeight;Dt.hidden?(Vv=u,Gv=c):(Vv!==u||Gv!==c)&&su()},Dt,"DOMContentLoaded",Ro,ot,"load",Ro,ot,"resize",su],kc(gn),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)Bc(mn,at[l],at[l+1]),Bc(mn,at[l],at[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Nd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Fc)||(Fc=r)&&setInterval(Kv,r),"ignoreMobileResize"in i&&(Lm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kc(mn)||kc(gn,i.autoRefreshEvents||"none"),O1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ni(i),o=at.indexOf(s),a=Xo(s);~o&&at.splice(o,a?6:2),r&&(a?Dr.unshift(ot,r,St,r,Mi,r):Dr.unshift(s,r))},n.clearMatchMedia=function(i){rt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?ni(i):i).getBoundingClientRect(),a=o[s?Oo:ko]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=ni(i));var o=i.getBoundingClientRect(),a=o[s?Oo:ko],l=r==null?a/2:r in wh?wh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Yo.killAll||[];Yo={},r.forEach(function(s){return s()})}},n}();Ye.version="3.14.2";Ye.saveStyles=function(n){return n?nc(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Im())}}):vi};Ye.revert=function(n,e){return j_(!n,e)};Ye.create=function(n,e){return new Ye(n,e)};Ye.refresh=function(n){return n?su(!0):(ya||Ye.register())&&Ro(!0)};Ye.update=function(n){return++at.cache&&es(n===!0?2:0)};Ye.clearScrollMemory=K1;Ye.maxScroll=function(n,e){return Ar(n,e?Zn:un)};Ye.getScrollFunc=function(n,e){return Js(ni(n),e?Zn:un)};Ye.getById=function(n){return Um[n]};Ye.getAll=function(){return rt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Ki};Ye.snapDirectional=Y_;Ye.addEventListener=function(n,e){var t=Yo[n]||(Yo[n]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(n,e){var t=Yo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ye.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],d=we.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Fn(s)&&(s=s(),gn(Ye,"refresh",function(){return s=e.batchMax()})),nc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ye.create(u))}),t};var nx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},zd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===Mi&&n(St,t)},Xc={auto:1,scroll:1},iR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xc[(l=Xi(s)).overflowY]||Xc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Xo(s)&&(Xc[(l=Xi(s)).overflowY]||Xc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},J1=function(e,t,i,r){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&iR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&gn(Dt,en.eventTypes[0],rx,!1,!0)},onDisable:function(){return mn(Dt,en.eventTypes[0],rx,!0)}})},rR=/(input|label|select|textarea)/i,ix,rx=function(e){var t=rR.test(e.target.tagName);(t||ix)&&(e._gsapAllow=!0,ix=t)},sR=function(e){xo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ni(e.target)||Mi,c=we.core.globals().ScrollSmoother,h=c&&c.get(),f=Es&&(e.content&&ni(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Js(u,un),m=Js(u,Zn),_=1,g=(en.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,v=Fn(r)?function(){return r(a)}:function(){return r||2.8},x,y,A=J1(u,e.type,!0,s),w=function(){return y=!1},E=Sr,R=Sr,M=function(){l=Ar(u,un),R=Eu(Es?1:0,l),i&&(E=Eu(0,Ar(u,Zn))),x=zo},S=function(){f._gsap.y=iu(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var L=iu(a.deltaY/2),$=R(d.v-L);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var P=iu((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=at.cache,es()}return!0}d.offset&&S(),y=!0},N,z,X,j,W=function(){M(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return Es&&Y.type==="touchmove"&&D()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){y=!1;var Y=_;_=iu((ot.visualViewport&&ot.visualViewport.scale||1)/g),N.pause(),Y!==_&&zd(u,_>1.01?!0:i?!1:"x"),z=m(),X=d(),M(),x=zo},e.onRelease=e.onGestureStart=function(Y,L){if(d.offset&&S(),!L)j.restart(!0);else{at.cache++;var $=v(),P,ne;i&&(P=m(),ne=P+$*.05*-Y.velocityX/.227,$*=nx(m,P,ne,Ar(u,Zn)),N.vars.scrollX=E(ne)),P=d(),ne=P+$*.05*-Y.velocityY/.227,$*=nx(d,P,ne,Ar(u,un)),N.vars.scrollY=R(ne),N.invalidate().duration($).play(.01),(Es&&N.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:W,duration:$})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),In()-p>1e3&&(x=0,p=In())},e.onChange=function(Y,L,$,P,ne){if(zo!==x&&M(),L&&i&&m(E(P[2]===L?z+(Y.startX-Y.x):m()+L-P[1])),$){d.offset&&S();var xe=ne[2]===$,je=xe?X+Y.startY-Y.y:d()+$-ne[1],q=R(je);xe&&je!==q&&(X+=q-je),d(q)}($||L)&&es()},e.onEnable=function(){zd(u,i?!1:"x"),Ye.addEventListener("refresh",W),gn(ot,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){zd(u,!0),mn(ot,"resize",W),Ye.removeEventListener("refresh",W),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=Es,Es&&!d()&&d(1),Es&&we.ticker.add(Sr),j=a._dc,N=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Q1(d,d(),function(){return N.pause()})},onUpdate:es,onComplete:j.vars.onComplete}),a};Ye.sort=function(n){if(Fn(n))return rt.sort(n);var e=ot.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),rt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(n){return new en(n)};Ye.normalizeScroll=function(n){if(typeof n>"u")return Xn;if(n===!0&&Xn)return Xn.enable();if(n===!1){Xn&&Xn.kill(),Xn=n;return}var e=n instanceof en?n:sR(n);return Xn&&Xn.target===e.target&&Xn.kill(),Xo(e.target)&&(Xn=e),e};Ye.core={_getVelocityProp:Pm,_inputObserver:J1,_scrollers:at,_proxies:Dr,bridge:{ss:function(){Ki||jo("scrollStart"),Ki=In()},ref:function(){return Ln}}};H1()&&we.registerPlugin(Ye);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const q_="170",oR=0,sx=1,aR=2,eE=1,lR=2,Br=3,eo=0,Jn=1,Yr=2,ts=0,Za=1,km=2,ox=3,ax=4,uR=5,Mo=100,cR=101,fR=102,hR=103,dR=104,pR=200,mR=201,gR=202,_R=203,zm=204,Bm=205,vR=206,xR=207,yR=208,SR=209,MR=210,ER=211,wR=212,TR=213,AR=214,Hm=0,Vm=1,Gm=2,pl=3,Wm=4,Xm=5,Ym=6,jm=7,$_=0,CR=1,RR=2,js=0,tE=1,nE=2,iE=3,K_=4,bR=5,rE=6,sE=7,oE=300,ml=301,gl=302,qm=303,$m=304,qh=306,Km=1e3,bo=1001,Zm=1002,dr=1003,PR=1004,Yc=1005,Cr=1006,Bd=1007,Po=1008,cs=1009,aE=1010,lE=1011,rc=1012,Z_=1013,qo=1014,Kr=1015,ns=1016,Q_=1017,J_=1018,_l=1020,uE=35902,cE=1021,fE=1022,cr=1023,hE=1024,dE=1025,Qa=1026,vl=1027,pE=1028,e0=1029,mE=1030,t0=1031,n0=1033,kf=33776,zf=33777,Bf=33778,Hf=33779,Qm=35840,Jm=35841,eg=35842,tg=35843,ng=36196,ig=37492,rg=37496,sg=37808,og=37809,ag=37810,lg=37811,ug=37812,cg=37813,fg=37814,hg=37815,dg=37816,pg=37817,mg=37818,gg=37819,_g=37820,vg=37821,Vf=36492,xg=36494,yg=36495,gE=36283,Sg=36284,Mg=36285,Eg=36286,DR=3200,LR=3201,_E=0,IR=1,Rs="",Hi="srgb",wl="srgb-linear",$h="linear",Mt="srgb",ra=7680,lx=519,NR=512,UR=513,FR=514,vE=515,OR=516,kR=517,zR=518,BR=519,ux=35044,cx="300 es",Zr=2e3,Th=2001;class Tl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fx=1234567;const Pu=Math.PI/180,sc=180/Math.PI;function Al(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function i0(n,e){return(n%e+e)%e}function HR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function VR(n,e,t){return n!==e?(t-n)/(e-n):0}function Du(n,e,t){return(1-t)*n+t*e}function GR(n,e,t,i){return Du(n,e,1-Math.exp(-t*i))}function WR(n,e=1){return e-Math.abs(i0(n,e*2)-e)}function XR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function YR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qR(n,e){return n+Math.random()*(e-n)}function $R(n){return n*(.5-Math.random())}function KR(n){n!==void 0&&(fx=n);let e=fx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZR(n){return n*Pu}function QR(n){return n*sc}function JR(n){return(n&n-1)===0&&n!==0}function eb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nb(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*m,l*d,a*u);break;case"YXY":n.set(l*d,a*c,l*m,a*u);break;case"ZYZ":n.set(l*m,l*d,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hd={DEG2RAD:Pu,RAD2DEG:sc,generateUUID:Al,clamp:En,euclideanModulo:i0,mapLinear:HR,inverseLerp:VR,lerp:Du,damp:GR,pingpong:WR,smoothstep:XR,smootherstep:YR,randInt:jR,randFloat:qR,randFloatSpread:$R,seededRandom:KR,degToRad:ZR,radToDeg:QR,isPowerOfTwo:JR,ceilPowerOfTwo:eb,floorPowerOfTwo:tb,setQuaternionFromProperEuler:nb,normalize:Gn,denormalize:Ma};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],d=i[5],m=i[8],_=r[0],g=r[3],p=r[6],v=r[1],x=r[4],y=r[7],A=r[2],w=r[5],E=r[8];return s[0]=o*_+a*v+l*A,s[3]=o*g+a*x+l*w,s[6]=o*p+a*y+l*E,s[1]=u*_+c*v+h*A,s[4]=u*g+c*x+h*w,s[7]=u*p+c*y+h*E,s[2]=f*_+d*v+m*A,s[5]=f*g+d*x+m*w,s[8]=f*p+d*y+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,d=u*s-o*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vd.makeScale(e,t)),this}rotate(e){return this.premultiply(Vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new tt;function xE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ah(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ib(){const n=Ah("canvas");return n.style.display="block",n}const hx={};function ou(n){n in hx||(hx[n]=!0,console.warn(n))}function rb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function sb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ob(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(n.r=is(n.r),n.g=is(n.g),n.b=is(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(n.r=Ja(n.r),n.g=Ja(n.g),n.b=Ja(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Rs?$h:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dx=[.64,.33,.3,.6,.15,.06],px=[.2126,.7152,.0722],mx=[.3127,.329],gx=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[wl]:{primaries:dx,whitePoint:mx,transfer:$h,toXYZ:gx,fromXYZ:_x,luminanceCoefficients:px,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:dx,whitePoint:mx,transfer:Mt,toXYZ:gx,fromXYZ:_x,luminanceCoefficients:px,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}});let sa;class ab{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sa===void 0&&(sa=Ah("canvas")),sa.width=e.width,sa.height=e.height;const i=sa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ah("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(is(t[i]/255)*255):t[i]=is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lb=0;class yE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Al(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gd(r[o].image)):s.push(Gd(r[o]))}else s=Gd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ab.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ub=0;class hi extends Tl{constructor(e=hi.DEFAULT_IMAGE,t=hi.DEFAULT_MAPPING,i=bo,r=bo,s=Cr,o=Po,a=cr,l=cs,u=hi.DEFAULT_ANISOTROPY,c=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Al(),this.name="",this.source=new yE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Km:e.x=e.x-Math.floor(e.x);break;case bo:e.x=e.x<0?0:1;break;case Zm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Km:e.y=e.y-Math.floor(e.y);break;case bo:e.y=e.y<0?0:1;break;case Zm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=oE;hi.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(d+1)/2,A=(p+1)/2,w=(c+f)/4,E=(h+_)/4,R=(m+g)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends Tl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends cb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class SE extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dr,this.minFilter=dr,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fb extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dr,this.minFilter=dr,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||u!==d||c!==m){let g=1-a;const p=l*f+u*d+c*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*v);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const y=a*v;if(l=l*g+f*y,u=u*g+d*y,c=c*g+m*y,h=h*g+_*y,g===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+c*h+l*d-u*f,e[t+1]=l*m+c*f+u*h-a*d,e[t+2]=u*m+c*d+a*f-l*h,e[t+3]=c*m-a*h-l*f-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h-f*d*m;break;case"YXZ":this._x=f*c*h+u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h+f*d*m;break;case"ZXY":this._x=f*c*h-u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h-f*d*m;break;case"ZYX":this._x=f*c*h-u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h+f*d*m;break;case"YZX":this._x=f*c*h+u*d*m,this._y=u*d*h+f*c*m,this._z=u*c*m-f*d*h,this._w=u*c*h-f*d*m;break;case"XZY":this._x=f*c*h-u*d*m,this._y=u*d*h-f*c*m,this._z=u*c*m+f*d*h,this._w=u*c*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wd.copy(this).projectOnVector(e),this.sub(Wd)}reflect(e){return this.sub(Wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wd=new O,vx=new dc;class pc{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jc.copy(i.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gl),qc.subVectors(this.max,Gl),oa.subVectors(e.a,Gl),aa.subVectors(e.b,Gl),la.subVectors(e.c,Gl),_s.subVectors(aa,oa),vs.subVectors(la,aa),lo.subVectors(oa,la);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-lo.z,lo.y,_s.z,0,-_s.x,vs.z,0,-vs.x,lo.z,0,-lo.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-lo.y,lo.x,0];return!Xd(t,oa,aa,la,qc)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,oa,aa,la,qc))?!1:($c.crossVectors(_s,vs),t=[$c.x,$c.y,$c.z],Xd(t,oa,aa,la,qc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ur=[new O,new O,new O,new O,new O,new O,new O,new O],tr=new O,jc=new pc,oa=new O,aa=new O,la=new O,_s=new O,vs=new O,lo=new O,Gl=new O,qc=new O,$c=new O,uo=new O;function Xd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){uo.fromArray(n,s);const a=r.x*Math.abs(uo.x)+r.y*Math.abs(uo.y)+r.z*Math.abs(uo.z),l=e.dot(uo),u=t.dot(uo),c=i.dot(uo);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const hb=new pc,Wl=new O,Yd=new O;class Kh{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wl.subVectors(e,this.center);const t=Wl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wl.copy(e.center).add(Yd)),this.expandByPoint(Wl.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fr=new O,jd=new O,Kc=new O,xs=new O,qd=new O,Zc=new O,$d=new O;class ME{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jd.copy(e).add(t).multiplyScalar(.5),Kc.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(jd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kc),a=xs.dot(this.direction),l=-xs.dot(Kc),u=xs.lengthSq(),c=Math.abs(1-o*o);let h,f,d,m;if(c>0)if(h=o*l-a,f=o*a-l,m=s*c,h>=0)if(f>=-m)if(f<=m){const _=1/c;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jd).addScaledVector(Kc,f),d}intersectSphere(e,t){Fr.subVectors(e.center,this.origin);const i=Fr.dot(this.direction),r=Fr.dot(Fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,i,r,s){qd.subVectors(t,e),Zc.subVectors(i,e),$d.crossVectors(qd,Zc);let o=this.direction.dot($d),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);const l=a*this.direction.dot(Zc.crossVectors(xs,Zc));if(l<0)return null;const u=a*this.direction.dot(qd.cross(xs));if(u<0||l+u>o)return null;const c=-a*xs.dot($d);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,r,s,o,a,l,u,c,h,f,d,m,_,g){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,d,m,_,g)}set(e,t,i,r,s,o,a,l,u,c,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ua.setFromMatrixColumn(e,0).length(),s=1/ua.setFromMatrixColumn(e,1).length(),o=1/ua.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,d=o*h,m=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=d+m*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=m+d*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,d=l*h,m=u*c,_=u*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,d=l*h,m=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,d=o*h,m=a*c,_=a*h;t[0]=l*c,t[4]=m*u-d,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=d*u-m,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*u,m=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(db,e,pb)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ys.crossVectors(i,gi),ys.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ys.crossVectors(i,gi)),ys.normalize(),Qc.crossVectors(gi,ys),r[0]=ys.x,r[4]=Qc.x,r[8]=gi.x,r[1]=ys.y,r[5]=Qc.y,r[9]=gi.y,r[2]=ys.z,r[6]=Qc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],x=i[7],y=i[11],A=i[15],w=r[0],E=r[4],R=r[8],M=r[12],S=r[1],D=r[5],N=r[9],z=r[13],X=r[2],j=r[6],W=r[10],Y=r[14],L=r[3],$=r[7],P=r[11],ne=r[15];return s[0]=o*w+a*S+l*X+u*L,s[4]=o*E+a*D+l*j+u*$,s[8]=o*R+a*N+l*W+u*P,s[12]=o*M+a*z+l*Y+u*ne,s[1]=c*w+h*S+f*X+d*L,s[5]=c*E+h*D+f*j+d*$,s[9]=c*R+h*N+f*W+d*P,s[13]=c*M+h*z+f*Y+d*ne,s[2]=m*w+_*S+g*X+p*L,s[6]=m*E+_*D+g*j+p*$,s[10]=m*R+_*N+g*W+p*P,s[14]=m*M+_*z+g*Y+p*ne,s[3]=v*w+x*S+y*X+A*L,s[7]=v*E+x*D+y*j+A*$,s[11]=v*R+x*N+y*W+A*P,s[15]=v*M+x*z+y*Y+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*d-i*l*d)+_*(+t*l*d-t*u*f+s*o*f-r*o*d+r*u*c-s*l*c)+g*(+t*u*h-t*a*d-s*o*h+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=h*g*u-_*f*u+_*l*d-a*g*d-h*l*p+a*f*p,x=m*f*u-c*g*u-m*l*d+o*g*d+c*l*p-o*f*p,y=c*_*u-m*h*u+m*a*d-o*_*d-c*a*p+o*h*p,A=m*h*l-c*_*l-m*a*f+o*_*f+c*a*g-o*h*g,w=t*v+i*x+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(_*f*s-h*g*s-_*r*d+i*g*d+h*r*p-i*f*p)*E,e[2]=(a*g*s-_*l*s+_*r*u-i*g*u-a*r*p+i*l*p)*E,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*d-i*l*d)*E,e[4]=x*E,e[5]=(c*g*s-m*f*s+m*r*d-t*g*d-c*r*p+t*f*p)*E,e[6]=(m*l*s-o*g*s-m*r*u+t*g*u+o*r*p-t*l*p)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*d+t*l*d)*E,e[8]=y*E,e[9]=(m*h*s-c*_*s-m*i*d+t*_*d+c*i*p-t*h*p)*E,e[10]=(o*_*s-m*a*s+m*i*u-t*_*u-o*i*p+t*a*p)*E,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*d-t*a*d)*E,e[12]=A*E,e[13]=(c*_*r-m*h*r+m*i*f-t*_*f-c*i*g+t*h*g)*E,e[14]=(m*a*r-o*_*r-m*i*l+t*_*l+o*i*g-t*a*g)*E,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,d=s*c,m=s*h,_=o*c,g=o*h,p=a*h,v=l*u,x=l*c,y=l*h,A=i.x,w=i.y,E=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+y)*A,r[2]=(m-x)*A,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(f+p))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+x)*E,r[9]=(g-v)*E,r[10]=(1-(f+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ua.set(r[0],r[1],r[2]).length();const o=ua.set(r[4],r[5],r[6]).length(),a=ua.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const u=1/s,c=1/o,h=1/a;return nr.elements[0]*=u,nr.elements[1]*=u,nr.elements[2]*=u,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=h,nr.elements[9]*=h,nr.elements[10]*=h,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,m;if(a===Zr)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Th)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Zr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,d=(i+r)*c;let m,_;if(a===Zr)m=(o+s)*h,_=-2*h;else if(a===Th)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ua=new O,nr=new Ot,db=new O(0,0,0),pb=new O(1,1,1),ys=new O,Qc=new O,gi=new O,xx=new Ot,yx=new dc;class Ir{constructor(e=0,t=0,i=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-En(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yx.setFromEuler(this),this.setFromQuaternion(yx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class EE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mb=0;const Sx=new O,ca=new dc,Or=new Ot,Jc=new O,Xl=new O,gb=new O,_b=new dc,Mx=new O(1,0,0),Ex=new O(0,1,0),wx=new O(0,0,1),Tx={type:"added"},vb={type:"removed"},fa={type:"childadded",child:null},Kd={type:"childremoved",child:null};class xn extends Tl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new O,t=new Ir,i=new dc,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new tt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new EE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(Mx,e)}rotateY(e){return this.rotateOnAxis(Ex,e)}rotateZ(e){return this.rotateOnAxis(wx,e)}translateOnAxis(e,t){return Sx.copy(e).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mx,e)}translateY(e){return this.translateOnAxis(Ex,e)}translateZ(e){return this.translateOnAxis(wx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jc.copy(e):Jc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(Xl,Jc,this.up):Or.lookAt(Jc,Xl,this.up),this.quaternion.setFromRotationMatrix(Or),r&&(Or.extractRotation(r.matrixWorld),ca.setFromRotationMatrix(Or),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tx),fa.child=e,this.dispatchEvent(fa),fa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vb),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tx),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,e,gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new O(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new O,kr=new O,Zd=new O,zr=new O,ha=new O,da=new O,Ax=new O,Qd=new O,Jd=new O,ep=new O,tp=new wt,np=new wt,ip=new wt;class ur{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ir.subVectors(e,t),r.cross(ir);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ir.subVectors(r,t),kr.subVectors(i,t),Zd.subVectors(e,t);const o=ir.dot(ir),a=ir.dot(kr),l=ir.dot(Zd),u=kr.dot(kr),c=kr.dot(Zd),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zr.x),l.addScaledVector(o,zr.y),l.addScaledVector(a,zr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return tp.setScalar(0),np.setScalar(0),ip.setScalar(0),tp.fromBufferAttribute(e,t),np.fromBufferAttribute(e,i),ip.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tp,s.x),o.addScaledVector(np,s.y),o.addScaledVector(ip,s.z),o}static isFrontFacing(e,t,i,r){return ir.subVectors(i,t),kr.subVectors(e,t),ir.cross(kr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),ir.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ur.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ur.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ha.subVectors(r,i),da.subVectors(s,i),Qd.subVectors(e,i);const l=ha.dot(Qd),u=da.dot(Qd);if(l<=0&&u<=0)return t.copy(i);Jd.subVectors(e,r);const c=ha.dot(Jd),h=da.dot(Jd);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ha,o);ep.subVectors(e,s);const d=ha.dot(ep),m=da.dot(ep);if(m>=0&&d<=m)return t.copy(s);const _=d*u-l*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(i).addScaledVector(da,a);const g=c*m-d*h;if(g<=0&&h-c>=0&&d-m>=0)return Ax.subVectors(s,r),a=(h-c)/(h-c+(d-m)),t.copy(r).addScaledVector(Ax,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(ha,o).addScaledVector(da,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},ef={h:0,s:0,l:0};function rp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=i0(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rp(o,s,e+1/3),this.g=rp(o,s,e),this.b=rp(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hi){const i=wE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return ht.fromWorkingColorSpace(Dn.copy(this),e),Math.round(En(Dn.r*255,0,255))*65536+Math.round(En(Dn.g*255,0,255))*256+Math.round(En(Dn.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Hi){ht.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,r=Dn.b;return e!==Hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(ef);const i=Du(Ss.h,ef.h,t),r=Du(Ss.s,ef.s,t),s=Du(Ss.l,ef.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Qe;Qe.NAMES=wE;let xb=0;class Cl extends Tl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Al(),this.name="",this.blending=Za,this.side=eo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Bm,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(i.blending=this.blending),this.side!==eo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zm&&(i.blendSrc=this.blendSrc),this.blendDst!==Bm&&(i.blendDst=this.blendDst),this.blendEquation!==Mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ra&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ra&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ra&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mc extends Cl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new O,tf=new $e;class mr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ux,this.updateRanges=[],this.gpuType=Kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tf.fromBufferAttribute(this,t),tf.applyMatrix3(e),this.setXY(t,tf.x,tf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ux&&(e.usage=this.usage),e}}class TE extends mr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class AE extends mr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends mr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yb=0;const zi=new Ot,sp=new xn,pa=new O,_i=new pc,Yl=new pc,dn=new O;class Oi extends Tl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xE(e)?AE:TE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return sp.lookAt(e),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yn(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yl.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(_i.min,Yl.min),_i.expandByPoint(dn),dn.addVectors(_i.max,Yl.max),_i.expandByPoint(dn)):(_i.expandByPoint(Yl.min),_i.expandByPoint(Yl.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dn.fromBufferAttribute(a,u),l&&(pa.fromBufferAttribute(e,u),dn.add(pa)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const u=new O,c=new O,h=new O,f=new $e,d=new $e,m=new $e,_=new O,g=new O;function p(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),c.sub(u),h.sub(u),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(c,-m.x).multiplyScalar(D),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(g),l[M].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,N=S.count;for(let z=D,X=D+N;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new O,y=new O,A=new O,w=new O;function E(R){A.fromBufferAttribute(r,R),w.copy(A);const M=a[R];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,N=S.count;for(let z=D,X=D+N;z<X;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)f[m++]=u[d++]}return new mr(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cx=new Ot,co=new ME,nf=new Kh,Rx=new O,rf=new O,sf=new O,of=new O,op=new O,af=new O,bx=new O,lf=new O;class pt extends xn{constructor(e=new Oi,t=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){af.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(op.fromBufferAttribute(h,e),o?af.addScaledVector(op,c):af.addScaledVector(op.sub(t),c))}t.add(af)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nf.copy(i.boundingSphere),nf.applyMatrix4(s),co.copy(e.ray).recast(e.near),!(nf.containsPoint(co.origin)===!1&&(co.intersectSphere(nf,Rx)===null||co.origin.distanceToSquared(Rx)>(e.far-e.near)**2))&&(Cx.copy(s).invert(),co.copy(e.ray).applyMatrix4(Cx),!(i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,co)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=x;y<A;y+=3){const w=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);r=uf(this,p,e,i,u,c,h,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=uf(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=x;y<A;y+=3){const w=y,E=y+1,R=y+2;r=uf(this,p,e,i,u,c,h,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;r=uf(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Sb(n,e,t,i,r,s,o,a){let l;if(e.side===Jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===eo,a),l===null)return null;lf.copy(a),lf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(lf);return u<t.near||u>t.far?null:{distance:u,point:lf.clone(),object:n}}function uf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,rf),n.getVertexPosition(l,sf),n.getVertexPosition(u,of);const c=Sb(n,e,t,i,rf,sf,of,bx);if(c){const h=new O;ur.getBarycoord(bx,rf,sf,of,h),r&&(c.uv=ur.getInterpolatedAttribute(r,a,l,u,h,new $e)),s&&(c.uv1=ur.getInterpolatedAttribute(s,a,l,u,h,new $e)),o&&(c.normal=ur.getInterpolatedAttribute(o,a,l,u,h,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new O,materialIndex:0};ur.getNormal(rf,sf,of,f.normal),c.face=f,c.barycoord=h}return c}class to extends Oi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(c,3)),this.setAttribute("uv",new yn(h,2));function m(_,g,p,v,x,y,A,w,E,R,M){const S=y/E,D=A/R,N=y/2,z=A/2,X=w/2,j=E+1,W=R+1;let Y=0,L=0;const $=new O;for(let P=0;P<W;P++){const ne=P*D-z;for(let xe=0;xe<j;xe++){const je=xe*S-N;$[_]=je*v,$[g]=ne*x,$[p]=X,u.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=w>0?1:-1,c.push($.x,$.y,$.z),h.push(xe/E),h.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let ne=0;ne<E;ne++){const xe=f+ne+j*P,je=f+ne+j*(P+1),q=f+(ne+1)+j*(P+1),te=f+(ne+1)+j*P;l.push(xe,je,te),l.push(je,q,te),L+=6}a.addGroup(d,L,M),d+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wn(n){const e={};for(let t=0;t<n.length;t++){const i=xl(n[t]);for(const r in i)e[r]=i[r]}return e}function Mb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function CE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const oc={clone:xl,merge:Wn};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Cl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xl(e.uniforms),this.uniformsGroups=Mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RE extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new O,Px=new $e,Dx=new $e;class Ei extends RE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Px,Dx),t.subVectors(Dx,Px)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ma=-90,ga=1;class Tb extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(ma,ga,e,t);r.layers=this.layers,this.add(r);const s=new Ei(ma,ga,e,t);s.layers=this.layers,this.add(s);const o=new Ei(ma,ga,e,t);o.layers=this.layers,this.add(o);const a=new Ei(ma,ga,e,t);a.layers=this.layers,this.add(a);const l=new Ei(ma,ga,e,t);l.layers=this.layers,this.add(l);const u=new Ei(ma,ga,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Th)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class bE extends hi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ml,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ab extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:xl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:ts});s.uniforms.tEquirect.value=t;const o=new pt(r,s),a=t.minFilter;return t.minFilter===Po&&(t.minFilter=Cr),new Tb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ap=new O,Cb=new O,Rb=new tt;class yo{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ap.subVectors(i,t).cross(Cb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ap),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rb.getNormalMatrix(e),r=this.coplanarPoint(ap).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new Kh,cf=new O;class r0{constructor(e=new yo,t=new yo,i=new yo,r=new yo,s=new yo,o=new yo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],d=r[8],m=r[9],_=r[10],g=r[11],p=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,g-d,y-p).normalize(),i[1].setComponents(l+s,f+u,g+d,y+p).normalize(),i[2].setComponents(l+o,f+c,g+m,y+v).normalize(),i[3].setComponents(l-o,f-c,g-m,y-v).normalize(),i[4].setComponents(l-a,f-h,g-_,y-x).normalize(),t===Zr)i[5].setComponents(l+a,f+h,g+_,y+x).normalize();else if(t===Th)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(e){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cf.x=r.normal.x>0?e.max.x:e.min.x,cf.y=r.normal.y>0?e.max.y:e.min.y,cf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function PE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bb(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Rr extends Oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<c;p++){const v=p*f-o;for(let x=0;x<u;x++){const y=x*h-s;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+u*p,y=v+u*(p+1),A=v+1+u*(p+1),w=v+1+u*p;d.push(x,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o2="gl_FragColor = linearToOutputTexel( gl_FragColor );",a2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_P=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Pb,alphahash_pars_fragment:Db,alphamap_fragment:Lb,alphamap_pars_fragment:Ib,alphatest_fragment:Nb,alphatest_pars_fragment:Ub,aomap_fragment:Fb,aomap_pars_fragment:Ob,batching_pars_vertex:kb,batching_vertex:zb,begin_vertex:Bb,beginnormal_vertex:Hb,bsdfs:Vb,iridescence_fragment:Gb,bumpmap_pars_fragment:Wb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:Yb,clipping_planes_pars_vertex:jb,clipping_planes_vertex:qb,color_fragment:$b,color_pars_fragment:Kb,color_pars_vertex:Zb,color_vertex:Qb,common:Jb,cube_uv_reflection_fragment:e2,defaultnormal_vertex:t2,displacementmap_pars_vertex:n2,displacementmap_vertex:i2,emissivemap_fragment:r2,emissivemap_pars_fragment:s2,colorspace_fragment:o2,colorspace_pars_fragment:a2,envmap_fragment:l2,envmap_common_pars_fragment:u2,envmap_pars_fragment:c2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:M2,envmap_vertex:h2,fog_vertex:d2,fog_pars_vertex:p2,fog_fragment:m2,fog_pars_fragment:g2,gradientmap_pars_fragment:_2,lightmap_pars_fragment:v2,lights_lambert_fragment:x2,lights_lambert_pars_fragment:y2,lights_pars_begin:S2,lights_toon_fragment:E2,lights_toon_pars_fragment:w2,lights_phong_fragment:T2,lights_phong_pars_fragment:A2,lights_physical_fragment:C2,lights_physical_pars_fragment:R2,lights_fragment_begin:b2,lights_fragment_maps:P2,lights_fragment_end:D2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:I2,logdepthbuf_pars_vertex:N2,logdepthbuf_vertex:U2,map_fragment:F2,map_pars_fragment:O2,map_particle_fragment:k2,map_particle_pars_fragment:z2,metalnessmap_fragment:B2,metalnessmap_pars_fragment:H2,morphinstance_vertex:V2,morphcolor_vertex:G2,morphnormal_vertex:W2,morphtarget_pars_vertex:X2,morphtarget_vertex:Y2,normal_fragment_begin:j2,normal_fragment_maps:q2,normal_pars_fragment:$2,normal_pars_vertex:K2,normal_vertex:Z2,normalmap_pars_fragment:Q2,clearcoat_normal_fragment_begin:J2,clearcoat_normal_fragment_maps:eP,clearcoat_pars_fragment:tP,iridescence_pars_fragment:nP,opaque_fragment:iP,packing:rP,premultiplied_alpha_fragment:sP,project_vertex:oP,dithering_fragment:aP,dithering_pars_fragment:lP,roughnessmap_fragment:uP,roughnessmap_pars_fragment:cP,shadowmap_pars_fragment:fP,shadowmap_pars_vertex:hP,shadowmap_vertex:dP,shadowmask_pars_fragment:pP,skinbase_vertex:mP,skinning_pars_vertex:gP,skinning_vertex:_P,skinnormal_vertex:vP,specularmap_fragment:xP,specularmap_pars_fragment:yP,tonemapping_fragment:SP,tonemapping_pars_fragment:MP,transmission_fragment:EP,transmission_pars_fragment:wP,uv_pars_fragment:TP,uv_pars_vertex:AP,uv_vertex:CP,worldpos_vertex:RP,background_vert:bP,background_frag:PP,backgroundCube_vert:DP,backgroundCube_frag:LP,cube_vert:IP,cube_frag:NP,depth_vert:UP,depth_frag:FP,distanceRGBA_vert:OP,distanceRGBA_frag:kP,equirect_vert:zP,equirect_frag:BP,linedashed_vert:HP,linedashed_frag:VP,meshbasic_vert:GP,meshbasic_frag:WP,meshlambert_vert:XP,meshlambert_frag:YP,meshmatcap_vert:jP,meshmatcap_frag:qP,meshnormal_vert:$P,meshnormal_frag:KP,meshphong_vert:ZP,meshphong_frag:QP,meshphysical_vert:JP,meshphysical_frag:eD,meshtoon_vert:tD,meshtoon_frag:nD,points_vert:iD,points_frag:rD,shadow_vert:sD,shadow_frag:oD,sprite_vert:aD,sprite_frag:lD},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Mr={basic:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Wn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Wn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Wn([ve.points,ve.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Wn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Wn([ve.common,ve.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Wn([ve.sprite,ve.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Wn([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Wn([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Mr.physical={uniforms:Wn([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ff={r:0,b:0,g:0},ho=new Ir,uD=new Ot;function cD(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,h=null,f=0,d=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=m(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===qh)?(c===void 0&&(c=new pt(new to(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:xl(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ho.copy(x.backgroundRotation),ho.x*=-1,ho.y*=-1,ho.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ho.y*=-1,ho.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uD.makeRotationFromEuler(ho)),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new pt(new Rr(2,2),new On({name:"BackgroundMaterial",uniforms:xl(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:eo,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,x){v.getRGB(ff,CE(n)),i.buffers.color.setClear(ff.r,ff.g,ff.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g}}function fD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,N,z,X){let j=!1;const W=h(z,N,D);s!==W&&(s=W,u(s.object)),j=d(S,z,N,X),j&&m(S,z,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,D,N,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function h(S,D,N){const z=N.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let j=X[D.id];j===void 0&&(j={},X[D.id]=j);let W=j[z];return W===void 0&&(W=f(l()),j[z]=W),W}function f(S){const D=[],N=[],z=[];for(let X=0;X<t;X++)D[X]=0,N[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,D,N,z){const X=s.attributes,j=D.attributes;let W=0;const Y=N.getAttributes();for(const L in Y)if(Y[L].location>=0){const P=X[L];let ne=j[L];if(ne===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),P===void 0||P.attribute!==ne||ne&&P.data!==ne.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function m(S,D,N,z){const X={},j=D.attributes;let W=0;const Y=N.getAttributes();for(const L in Y)if(Y[L].location>=0){let P=j[L];P===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const ne={};ne.attribute=P,P&&P.data&&(ne.data=P.data),X[L]=ne,W++}s.attributes=X,s.attributesNum=W,s.index=z}function _(){const S=s.newAttributes;for(let D=0,N=S.length;D<N;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){const N=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;N[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),X[S]!==D&&(n.vertexAttribDivisor(S,D),X[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let N=0,z=D.length;N<z;N++)D[N]!==S[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function x(S,D,N,z,X,j,W){W===!0?n.vertexAttribIPointer(S,D,N,X,j):n.vertexAttribPointer(S,D,N,z,X,j)}function y(S,D,N,z){_();const X=z.attributes,j=N.getAttributes(),W=D.defaultAttributeValues;for(const Y in j){const L=j[Y];if(L.location>=0){let $=X[Y];if($===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const P=$.normalized,ne=$.itemSize,xe=e.get($);if(xe===void 0)continue;const je=xe.buffer,q=xe.type,te=xe.bytesPerElement,ce=q===n.INT||q===n.UNSIGNED_INT||$.gpuType===Z_;if($.isInterleavedBufferAttribute){const ie=$.data,Ae=ie.stride,Pe=$.offset;if(ie.isInstancedInterleavedBuffer){for(let We=0;We<L.locationSize;We++)p(L.location+We,ie.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let We=0;We<L.locationSize;We++)g(L.location+We);n.bindBuffer(n.ARRAY_BUFFER,je);for(let We=0;We<L.locationSize;We++)x(L.location+We,ne/L.locationSize,q,P,Ae*te,(Pe+ne/L.locationSize*We)*te,ce)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<L.locationSize;ie++)p(L.location+ie,$.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<L.locationSize;ie++)g(L.location+ie);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ie=0;ie<L.locationSize;ie++)x(L.location+ie,ne/L.locationSize,q,P,ne*te,ne/L.locationSize*ie*te,ce)}}else if(W!==void 0){const P=W[Y];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(L.location,P);break;case 3:n.vertexAttrib3fv(L.location,P);break;case 4:n.vertexAttrib4fv(L.location,P);break;default:n.vertexAttrib1fv(L.location,P)}}}}v()}function A(){R();for(const S in i){const D=i[S];for(const N in D){const z=D[N];for(const X in z)c(z[X].object),delete z[X];delete D[N]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const N in D){const z=D[N];for(const X in z)c(z[X].object),delete z[X];delete D[N]}delete i[S.id]}function E(S){for(const D in i){const N=i[D];if(N[S.id]===void 0)continue;const z=N[S.id];for(const X in z)c(z[X].object),delete z[X];delete N[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function hD(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,i,1)}function l(u,c,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)o(u[m],c[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=c[_]*f[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dD(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==cr&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==cs&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Kr&&!R)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function pD(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new yo,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let y=p.clippingState||null;l.value=y,y=c(m,f,x,d);for(let A=0;A!==x;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function mD(n){let e=new WeakMap;function t(o,a){return a===qm?o.mapping=ml:a===$m&&(o.mapping=gl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qm||a===$m)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ab(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s0 extends RE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ka=4,Lx=[.125,.215,.35,.446,.526,.582],Eo=20,lp=new s0,Ix=new Qe;let up=null,cp=0,fp=0,hp=!1;const So=(1+Math.sqrt(5))/2,_a=1/So,Nx=[new O(-So,_a,0),new O(So,_a,0),new O(-_a,0,So),new O(_a,0,So),new O(0,So,-_a),new O(0,So,_a),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(up,cp,fp),this._renderer.xr.enabled=hp,e.scissorTest=!1,hf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ml||e.mapping===gl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cr,minFilter:Cr,generateMipmaps:!1,type:ns,format:cr,colorSpace:wl,depthBuffer:!1},r=Fx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gD(s)),this._blurMaterial=_D(s,e,t)}return r}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,lp)}_sceneToCubeUV(e,t,i,r){const a=new Ei(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Ix),c.toneMapping=js,c.autoClear=!1;const d=new mc({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),m=new pt(new to,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Ix),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;hf(r,v*x,p>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ml||e.mapping===gl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,lp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nx[(r-s-1)%Nx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new pt(this._lodPlanes[r],u),f=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Eo-1),_=s/m,g=isFinite(s)?1+Math.floor(c*_):Eo;g>Eo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Eo}`);const p=[];let v=0;for(let E=0;E<Eo;++E){const R=E/_,M=Math.exp(-R*R/2);p.push(M),E===0?v+=M:E<g&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-ka?r-x+ka:0),w=4*(this._cubeSize-y);hf(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(h,lp)}}function gD(n){const e=[],t=[],i=[];let r=n;const s=n-ka+1+Lx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ka?l=Lx[o-n+ka-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*d),x=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,_*m*w),x.set(f,g*m*w);const S=[w,w,w,w,w,w];y.set(S,p*m*w)}const A=new Oi;A.setAttribute("position",new mr(v,_)),A.setAttribute("uv",new mr(x,g)),A.setAttribute("faceIndex",new mr(y,p)),e.push(A),r>ka&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fx(n,e,t){const i=new pr(n,e,t);return i.texture.mapping=qh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _D(n,e,t){const i=new Float32Array(Eo),r=new O(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:o0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ox(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:o0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function kx(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:o0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function o0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vD(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qm||l===$m,c=l===ml||l===gl;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ux(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new Ux(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xD(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ou("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yD(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],n.ARRAY_BUFFER)}}function u(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],w=v[x+1],E=v[x+2];f.push(A,w,w,E,E,A)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,w=x+1,E=x+2;f.push(A,w,w,E,E,A)}}else return;const g=new(xE(f)?AE:TE)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function c(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function SD(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function u(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*o,m),t.update(d,i,m))}function c(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function h(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v]*_[v];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function MD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ED(n,e,t){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let A=a.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*h),R=new SE(E,A,w,h);R.type=Kr,R.needsUpdate=!0;const M=y*4;for(let D=0;D<h;D++){const N=p[D],z=v[D],X=x[D],j=A*w*4*D;for(let W=0;W<N.count;W++){const Y=W*M;m===!0&&(r.fromBufferAttribute(N,W),E[j+Y+0]=r.x,E[j+Y+1]=r.y,E[j+Y+2]=r.z,E[j+Y+3]=0),_===!0&&(r.fromBufferAttribute(z,W),E[j+Y+4]=r.x,E[j+Y+5]=r.y,E[j+Y+6]=r.z,E[j+Y+7]=0),g===!0&&(r.fromBufferAttribute(X,W),E[j+Y+8]=r.x,E[j+Y+9]=r.y,E[j+Y+10]=r.z,E[j+Y+11]=X.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new $e(A,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function wD(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class DE extends hi{constructor(e,t,i,r,s,o,a,l,u,c=Qa){if(c!==Qa&&c!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Qa&&(i=qo),i===void 0&&c===vl&&(i=_l),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dr,this.minFilter=l!==void 0?l:dr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const LE=new hi,zx=new DE(1,1),IE=new SE,NE=new fb,UE=new bE,Bx=[],Hx=[],Vx=new Float32Array(16),Gx=new Float32Array(9),Wx=new Float32Array(4);function Rl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bx[r];if(s===void 0&&(s=new Float32Array(r),Bx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zh(n,e){let t=Hx[e];t===void 0&&(t=new Int32Array(e),Hx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function CD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function RD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function bD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Wx.set(i),n.uniformMatrix2fv(this.addr,!1,Wx),hn(t,i)}}function PD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Gx.set(i),n.uniformMatrix3fv(this.addr,!1,Gx),hn(t,i)}}function DD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,i))return;Vx.set(i),n.uniformMatrix4fv(this.addr,!1,Vx),hn(t,i)}}function LD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ID(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function ND(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function UD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function FD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function kD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function zD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function BD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zx.compareFunction=vE,s=zx):s=LE,t.setTexture2D(e||s,r)}function HD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||NE,r)}function VD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||UE,r)}function GD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||IE,r)}function WD(n){switch(n){case 5126:return TD;case 35664:return AD;case 35665:return CD;case 35666:return RD;case 35674:return bD;case 35675:return PD;case 35676:return DD;case 5124:case 35670:return LD;case 35667:case 35671:return ID;case 35668:case 35672:return ND;case 35669:case 35673:return UD;case 5125:return FD;case 36294:return OD;case 36295:return kD;case 36296:return zD;case 35678:case 36198:case 36298:case 36306:case 35682:return BD;case 35679:case 36299:case 36307:return HD;case 35680:case 36300:case 36308:case 36293:return VD;case 36289:case 36303:case 36311:case 36292:return GD}}function XD(n,e){n.uniform1fv(this.addr,e)}function YD(n,e){const t=Rl(e,this.size,2);n.uniform2fv(this.addr,t)}function jD(n,e){const t=Rl(e,this.size,3);n.uniform3fv(this.addr,t)}function qD(n,e){const t=Rl(e,this.size,4);n.uniform4fv(this.addr,t)}function $D(n,e){const t=Rl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KD(n,e){const t=Rl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZD(n,e){const t=Rl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QD(n,e){n.uniform1iv(this.addr,e)}function JD(n,e){n.uniform2iv(this.addr,e)}function eL(n,e){n.uniform3iv(this.addr,e)}function tL(n,e){n.uniform4iv(this.addr,e)}function nL(n,e){n.uniform1uiv(this.addr,e)}function iL(n,e){n.uniform2uiv(this.addr,e)}function rL(n,e){n.uniform3uiv(this.addr,e)}function sL(n,e){n.uniform4uiv(this.addr,e)}function oL(n,e,t){const i=this.cache,r=e.length,s=Zh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||LE,s[o])}function aL(n,e,t){const i=this.cache,r=e.length,s=Zh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||NE,s[o])}function lL(n,e,t){const i=this.cache,r=e.length,s=Zh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||UE,s[o])}function uL(n,e,t){const i=this.cache,r=e.length,s=Zh(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||IE,s[o])}function cL(n){switch(n){case 5126:return XD;case 35664:return YD;case 35665:return jD;case 35666:return qD;case 35674:return $D;case 35675:return KD;case 35676:return ZD;case 5124:case 35670:return QD;case 35667:case 35671:return JD;case 35668:case 35672:return eL;case 35669:case 35673:return tL;case 5125:return nL;case 36294:return iL;case 36295:return rL;case 36296:return sL;case 35678:case 36198:case 36298:case 36306:case 35682:return oL;case 35679:case 36299:case 36307:return aL;case 35680:case 36300:case 36308:case 36293:return lL;case 36289:case 36303:case 36311:case 36292:return uL}}class fL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WD(t.type)}}class hL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cL(t.type)}}class dL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function Xx(n,e){n.seq.push(e),n.map[e.id]=e}function pL(n,e,t){const i=n.name,r=i.length;for(dp.lastIndex=0;;){const s=dp.exec(i),o=dp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Xx(t,u===void 0?new fL(a,n,e):new hL(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new dL(a),Xx(t,h)),t=h}}}class Gf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mL=37297;let gL=0;function _L(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const jx=new tt;function vL(n){ht._getMatrix(jx,ht.workingColorSpace,n);const e=`mat3( ${jx.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case $h:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_L(n.getShaderSource(e),o)}else return r}function xL(n,e){const t=vL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yL(n,e){let t;switch(e){case tE:t="Linear";break;case nE:t="Reinhard";break;case iE:t="Cineon";break;case K_:t="ACESFilmic";break;case rE:t="AgX";break;case sE:t="Neutral";break;case bR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const df=new O;function SL(){ht.getLuminanceCoefficients(df);const n=df.x.toFixed(4),e=df.y.toFixed(4),t=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ML(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(au).join(`
`)}function EL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function au(n){return n!==""}function $x(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TL=/^[ \t]*#include +<([\w\d./]+)>/gm;function wg(n){return n.replace(TL,CL)}const AL=new Map;function CL(n,e){let t=nt[e];if(t===void 0){const i=AL.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wg(t)}const RL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zx(n){return n.replace(RL,bL)}function bL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Br&&(e="SHADOWMAP_TYPE_VSM"),e}function DL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ml:case gl:e="ENVMAP_TYPE_CUBE";break;case qh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gl:e="ENVMAP_MODE_REFRACTION";break}return e}function IL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case CR:e="ENVMAP_BLENDING_MIX";break;case RR:e="ENVMAP_BLENDING_ADD";break}return e}function NL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PL(t),u=DL(t),c=LL(t),h=IL(t),f=NL(t),d=ML(t),m=EL(s),_=r.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(au).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(au).join(`
`),p.length>0&&(p+=`
`)):(g=[Qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(au).join(`
`),p=[Qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==js?"#define TONE_MAPPING":"",t.toneMapping!==js?nt.tonemapping_pars_fragment:"",t.toneMapping!==js?yL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,xL("linearToOutputTexel",t.outputColorSpace),SL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(au).join(`
`)),o=wg(o),o=$x(o,t),o=Kx(o,t),a=wg(a),a=$x(a,t),a=Kx(a,t),o=Zx(o),a=Zx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+o,y=v+p+a,A=Yx(r,r.VERTEX_SHADER,x),w=Yx(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(w).trim();let j=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,w);else{const Y=qx(r,A,"vertex"),L=qx(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+Y+`
`+L)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:N,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:p}})}r.deleteShader(A),r.deleteShader(w),R=new Gf(r,_),M=wL(r,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,mL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let FL=0;class OL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kL(e),t.set(e,i)),i}}class kL{constructor(e){this.id=FL++,this.code=e,this.usedTimes=0}}function zL(n,e,t,i,r,s,o){const a=new EE,l=new OL,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,S,D,N,z){const X=N.fog,j=z.geometry,W=M.isMeshStandardMaterial?N.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),L=Y&&Y.mapping===qh?Y.image.height:null,$=m[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=P!==void 0?P.length:0;let xe=0;j.morphAttributes.position!==void 0&&(xe=1),j.morphAttributes.normal!==void 0&&(xe=2),j.morphAttributes.color!==void 0&&(xe=3);let je,q,te,ce;if($){const ye=Mr[$];je=ye.vertexShader,q=ye.fragmentShader}else je=M.vertexShader,q=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const ie=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,We=z.isBatchedMesh===!0,it=!!M.map,Oe=!!M.matcap,Ne=!!Y,U=!!M.aoMap,Tt=!!M.lightMap,ze=!!M.bumpMap,B=!!M.normalMap,Ce=!!M.displacementMap,ut=!!M.emissiveMap,De=!!M.metalnessMap,b=!!M.roughnessMap,T=M.anisotropy>0,V=M.clearcoat>0,ee=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,de=M.transmission>0,ue=T&&!!M.anisotropyMap,ge=V&&!!M.clearcoatMap,Ke=V&&!!M.clearcoatNormalMap,se=V&&!!M.clearcoatRoughnessMap,le=J&&!!M.iridescenceMap,Fe=J&&!!M.iridescenceThicknessMap,Ue=Z&&!!M.sheenColorMap,Se=Z&&!!M.sheenRoughnessMap,Je=!!M.specularMap,ke=!!M.specularColorMap,ft=!!M.specularIntensityMap,I=de&&!!M.transmissionMap,he=de&&!!M.thicknessMap,K=!!M.gradientMap,Q=!!M.alphaMap,fe=M.alphaTest>0,pe=!!M.alphaHash,Be=!!M.extensions;let mt=js;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(mt=n.toneMapping);const qt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:q,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:We,batchingColor:We&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:wl,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:Oe,envMap:Ne,envMapMode:Ne&&Y.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:Tt,bumpMap:ze,normalMap:B,displacementMap:f&&Ce,emissiveMap:ut,normalMapObjectSpace:B&&M.normalMapType===IR,normalMapTangentSpace:B&&M.normalMapType===_E,metalnessMap:De,roughnessMap:b,anisotropy:T,anisotropyMap:ue,clearcoat:V,clearcoatMap:ge,clearcoatNormalMap:Ke,clearcoatRoughnessMap:se,dispersion:ee,iridescence:J,iridescenceMap:le,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:Je,specularColorMap:ke,specularIntensityMap:ft,transmission:de,transmissionMap:I,thicknessMap:he,gradientMap:K,opaque:M.transparent===!1&&M.blending===Za&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:pe,combine:M.combine,mapUv:it&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:Tt&&_(M.lightMap.channel),bumpMapUv:ze&&_(M.bumpMap.channel),normalMapUv:B&&_(M.normalMap.channel),displacementMapUv:Ce&&_(M.displacementMap.channel),emissiveMapUv:ut&&_(M.emissiveMap.channel),metalnessMapUv:De&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(M.sheenRoughnessMap.channel),specularMapUv:Je&&_(M.specularMap.channel),specularColorMapUv:ke&&_(M.specularColorMap.channel),specularIntensityMapUv:ft&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:he&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(B||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(it||Q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yr,flipSided:M.side===Jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=u.has(1),qt.vertexUv2s=u.has(2),qt.vertexUv3s=u.has(3),u.clear(),qt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=m[M.type];let D;if(S){const N=Mr[S];D=oc.clone(N.uniforms)}else D=M.uniforms;return D}function A(M,S){let D;for(let N=0,z=c.length;N<z;N++){const X=c[N];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new UL(n,S,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function BL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function HL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ey(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,m,_,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||HL),i.length>1&&i.sort(f||Jx),r.length>1&&r.sort(f||Jx)}function c(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function VL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ey,n.set(i,[o])):r>=s.length?(o=new ey,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Qe};break;case"SpotLight":t={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function WL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XL=0;function YL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jL(n){const e=new GL,t=WL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new Ot,o=new Ot;function a(u){let c=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,x=0,y=0,A=0,w=0,E=0;u.sort(YL);for(let M=0,S=u.length;M<S;M++){const D=u[M],N=D.color,z=D.intensity,X=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=N.r*z,h+=N.g*z,f+=N.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],z);E++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,L=t.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=W,d++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(N).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const Y=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,Y.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=Y.matrix,D.castShadow){const L=t.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=j,y++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(N).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=W,g++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Y=D.shadow,L=t.get(D);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=D.shadow.matrix,x++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[p]=W,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=E,i.version=XL++)}function l(u,c){let h=0,f=0,d=0,m=0,_=0;const g=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const x=u[p];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function ty(n){const e=new jL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ty(n),e.set(r,[a])):s>=o.length?(a=new ty(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class $L extends Cl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=DR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KL extends Cl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JL(n,e,t){let i=new r0;const r=new $e,s=new $e,o=new wt,a=new $L({depthPacking:LR}),l=new KL,u={},c=t.maxTextureSize,h={[eo]:Jn,[Jn]:eo,[Yr]:Yr},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ZL,fragmentShader:QL}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Oi;m.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eE;let p=this.type;this.render=function(w,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ts),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==Br&&this.type===Br,X=p===Br&&this.type!==Br;for(let j=0,W=w.length;j<W;j++){const Y=w[j],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||z===!0||X===!0){const ne=this.type!==Br?{minFilter:dr,magFilter:dr}:{};L.map!==null&&L.map.dispose(),L.map=new pr(r.x,r.y,ne),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const P=L.getViewportCount();for(let ne=0;ne<P;ne++){const xe=L.getViewport(ne);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),N.viewport(o),L.updateMatrices(Y,ne),i=L.getFrustum(),y(E,R,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Br&&v(L,R),L.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,D)};function v(w,E){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,R,d,_,null)}function x(w,E,R,M){let S=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=S.uuid,z=E.uuid;let X=u[N];X===void 0&&(X={},u[N]=X);let j=X[z];j===void 0&&(j=S.clone(),X[z]=j,E.addEventListener("dispose",A)),S=j}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Br?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=R}return S}function y(w,E,R,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Br)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),X=w.material;if(Array.isArray(X)){const j=z.groups;for(let W=0,Y=j.length;W<Y;W++){const L=j[W],$=X[L.materialIndex];if($&&$.visible){const P=x(w,$,M,S);w.onBeforeShadow(n,w,E,R,z,P,L),n.renderBufferDirect(R,null,z,P,w,L),w.onAfterShadow(n,w,E,R,z,P,L)}}}else if(X.visible){const j=x(w,X,M,S);w.onBeforeShadow(n,w,E,R,z,j,null),n.renderBufferDirect(R,null,z,j,w,null),w.onAfterShadow(n,w,E,R,z,j,null)}}const N=w.children;for(let z=0,X=N.length;z<X;z++)y(N[z],E,R,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const R in u){const M=u[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const e3={[Hm]:Vm,[Gm]:Ym,[Wm]:jm,[pl]:Xm,[Vm]:Hm,[Ym]:Gm,[jm]:Wm,[Xm]:pl};function t3(n,e){function t(){let I=!1;const he=new wt;let K=null;const Q=new wt(0,0,0,0);return{setMask:function(fe){K!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){I=fe},setClear:function(fe,pe,Be,mt,qt){qt===!0&&(fe*=mt,pe*=mt,Be*=mt),he.set(fe,pe,Be,mt),Q.equals(he)===!1&&(n.clearColor(fe,pe,Be,mt),Q.copy(he))},reset:function(){I=!1,K=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,he=!1,K=null,Q=null,fe=null;return{setReversed:function(pe){if(he!==pe){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const mt=fe;fe=null,this.setClear(mt)}he=pe},getReversed:function(){return he},setTest:function(pe){pe?ie(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(pe){K!==pe&&!I&&(n.depthMask(pe),K=pe)},setFunc:function(pe){if(he&&(pe=e3[pe]),Q!==pe){switch(pe){case Hm:n.depthFunc(n.NEVER);break;case Vm:n.depthFunc(n.ALWAYS);break;case Gm:n.depthFunc(n.LESS);break;case pl:n.depthFunc(n.LEQUAL);break;case Wm:n.depthFunc(n.EQUAL);break;case Xm:n.depthFunc(n.GEQUAL);break;case Ym:n.depthFunc(n.GREATER);break;case jm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pe}},setLocked:function(pe){I=pe},setClear:function(pe){fe!==pe&&(he&&(pe=1-pe),n.clearDepth(pe),fe=pe)},reset:function(){I=!1,K=null,Q=null,fe=null,he=!1}}}function r(){let I=!1,he=null,K=null,Q=null,fe=null,pe=null,Be=null,mt=null,qt=null;return{setTest:function(ye){I||(ye?ie(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ye){he!==ye&&!I&&(n.stencilMask(ye),he=ye)},setFunc:function(ye,Re,et){(K!==ye||Q!==Re||fe!==et)&&(n.stencilFunc(ye,Re,et),K=ye,Q=Re,fe=et)},setOp:function(ye,Re,et){(pe!==ye||Be!==Re||mt!==et)&&(n.stencilOp(ye,Re,et),pe=ye,Be=Re,mt=et)},setLocked:function(ye){I=ye},setClear:function(ye){qt!==ye&&(n.clearStencil(ye),qt=ye)},reset:function(){I=!1,he=null,K=null,Q=null,fe=null,pe=null,Be=null,mt=null,qt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,A=null,w=null,E=new Qe(0,0,0),R=0,M=!1,S=null,D=null,N=null,z=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(L)[1]),W=Y>=1):L.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),W=Y>=2);let $=null,P={};const ne=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),je=new wt().fromArray(ne),q=new wt().fromArray(xe);function te(I,he,K,Q){const fe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(I,pe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<K;Be++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(he+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return pe}const ce={};ce[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(pl),ze(!1),B(sx),ie(n.CULL_FACE),U(ts);function ie(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function Ae(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Pe(I,he){return h[I]!==he?(n.bindFramebuffer(I,he),h[I]=he,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function We(I,he){let K=d,Q=!1;if(I){K=f.get(he),K===void 0&&(K=[],f.set(he,K));const fe=I.textures;if(K.length!==fe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Be=fe.length;pe<Be;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=fe.length,Q=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Q=!0);Q&&n.drawBuffers(K)}function it(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const Oe={[Mo]:n.FUNC_ADD,[cR]:n.FUNC_SUBTRACT,[fR]:n.FUNC_REVERSE_SUBTRACT};Oe[hR]=n.MIN,Oe[dR]=n.MAX;const Ne={[pR]:n.ZERO,[mR]:n.ONE,[gR]:n.SRC_COLOR,[zm]:n.SRC_ALPHA,[MR]:n.SRC_ALPHA_SATURATE,[yR]:n.DST_COLOR,[vR]:n.DST_ALPHA,[_R]:n.ONE_MINUS_SRC_COLOR,[Bm]:n.ONE_MINUS_SRC_ALPHA,[SR]:n.ONE_MINUS_DST_COLOR,[xR]:n.ONE_MINUS_DST_ALPHA,[ER]:n.CONSTANT_COLOR,[wR]:n.ONE_MINUS_CONSTANT_COLOR,[TR]:n.CONSTANT_ALPHA,[AR]:n.ONE_MINUS_CONSTANT_ALPHA};function U(I,he,K,Q,fe,pe,Be,mt,qt,ye){if(I===ts){_===!0&&(Ae(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),I!==uR){if(I!==g||ye!==M){if((p!==Mo||y!==Mo)&&(n.blendEquation(n.FUNC_ADD),p=Mo,y=Mo),ye)switch(I){case Za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.ONE,n.ONE);break;case ox:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ax:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ox:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ax:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,A=null,w=null,E.set(0,0,0),R=0,g=I,M=ye}return}fe=fe||he,pe=pe||K,Be=Be||Q,(he!==p||fe!==y)&&(n.blendEquationSeparate(Oe[he],Oe[fe]),p=he,y=fe),(K!==v||Q!==x||pe!==A||Be!==w)&&(n.blendFuncSeparate(Ne[K],Ne[Q],Ne[pe],Ne[Be]),v=K,x=Q,A=pe,w=Be),(mt.equals(E)===!1||qt!==R)&&(n.blendColor(mt.r,mt.g,mt.b,qt),E.copy(mt),R=qt),g=I,M=!1}function Tt(I,he){I.side===Yr?Ae(n.CULL_FACE):ie(n.CULL_FACE);let K=I.side===Jn;he&&(K=!K),ze(K),I.blending===Za&&I.transparent===!1?U(ts):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function B(I){I!==oR?(ie(n.CULL_FACE),I!==D&&(I===sx?n.cullFace(n.BACK):I===aR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),D=I}function Ce(I){I!==N&&(W&&n.lineWidth(I),N=I)}function ut(I,he,K){I?(ie(n.POLYGON_OFFSET_FILL),(z!==he||X!==K)&&(n.polygonOffset(he,K),z=he,X=K)):Ae(n.POLYGON_OFFSET_FILL)}function De(I){I?ie(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function b(I){I===void 0&&(I=n.TEXTURE0+j-1),$!==I&&(n.activeTexture(I),$=I)}function T(I,he,K){K===void 0&&($===null?K=n.TEXTURE0+j-1:K=$);let Q=P[K];Q===void 0&&(Q={type:void 0,texture:void 0},P[K]=Q),(Q.type!==I||Q.texture!==he)&&($!==K&&(n.activeTexture(K),$=K),n.bindTexture(I,he||ce[I]),Q.type=I,Q.texture=he)}function V(){const I=P[$];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){je.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),je.copy(I))}function Se(I){q.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Je(I,he){let K=u.get(he);K===void 0&&(K=new WeakMap,u.set(he,K));let Q=K.get(I);Q===void 0&&(Q=n.getUniformBlockIndex(he,I.name),K.set(I,Q))}function ke(I,he){const Q=u.get(he).get(I);l.get(he)!==Q&&(n.uniformBlockBinding(he,Q,I.__bindingPointIndex),l.set(he,Q))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,P={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,A=null,w=null,E=new Qe(0,0,0),R=0,M=!1,S=null,D=null,N=null,z=null,X=null,je.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ae,bindFramebuffer:Pe,drawBuffers:We,useProgram:it,setBlending:U,setMaterial:Tt,setFlipSided:ze,setCullFace:B,setLineWidth:Ce,setPolygonOffset:ut,setScissorTest:De,activeTexture:b,bindTexture:T,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:le,texImage3D:Fe,updateUBOMapping:Je,uniformBlockBinding:ke,texStorage2D:Ke,texStorage3D:se,texSubImage2D:Z,texSubImage3D:de,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ue,viewport:Se,reset:ft}}function ny(n,e,t,i){const r=n3(i);switch(t){case cE:return n*e;case hE:return n*e;case dE:return n*e*2;case pE:return n*e/r.components*r.byteLength;case e0:return n*e/r.components*r.byteLength;case mE:return n*e*2/r.components*r.byteLength;case t0:return n*e*2/r.components*r.byteLength;case fE:return n*e*3/r.components*r.byteLength;case cr:return n*e*4/r.components*r.byteLength;case n0:return n*e*4/r.components*r.byteLength;case kf:case zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bf:case Hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jm:case tg:return Math.max(n,16)*Math.max(e,8)/4;case Qm:case eg:return Math.max(n,8)*Math.max(e,8)/2;case ng:case ig:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case og:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ag:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ug:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mg:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _g:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Vf:case xg:case yg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gE:case Sg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mg:case Eg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n3(n){switch(n){case cs:case aE:return{byteLength:1,components:1};case rc:case lE:case ns:return{byteLength:2,components:1};case Q_:case J_:return{byteLength:2,components:4};case qo:case Z_:case Kr:return{byteLength:4,components:1};case uE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function i3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,c=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,T){return d?new OffscreenCanvas(b,T):Ah("canvas")}function _(b,T,V){let ee=1;const J=De(b);if((J.width>V||J.height>V)&&(ee=V/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(ee*J.width),de=Math.floor(ee*J.height);h===void 0&&(h=m(Z,de));const ue=T?m(Z,de):h;return ue.width=Z,ue.height=de,ue.getContext("2d").drawImage(b,0,0,Z,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+de+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,T,V,ee,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=T;if(T===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),T===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),T===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),V===n.UNSIGNED_INT&&(Z=n.RGB32UI),V===n.BYTE&&(Z=n.RGB8I),V===n.SHORT&&(Z=n.RGB16I),V===n.INT&&(Z=n.RGB32I)),T===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),V===n.UNSIGNED_INT&&(Z=n.RGBA32UI),V===n.BYTE&&(Z=n.RGBA8I),V===n.SHORT&&(Z=n.RGBA16I),V===n.INT&&(Z=n.RGBA32I)),T===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const de=J?$h:ht.getTransfer(ee);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=de===Mt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(b,T){let V;return b?T===null||T===qo||T===_l?V=n.DEPTH24_STENCIL8:T===Kr?V=n.DEPTH32F_STENCIL8:T===rc&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qo||T===_l?V=n.DEPTH_COMPONENT24:T===Kr?V=n.DEPTH_COMPONENT32F:T===rc&&(V=n.DEPTH_COMPONENT16),V}function A(b,T){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==dr&&b.minFilter!==Cr?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function w(b){const T=b.target;T.removeEventListener("dispose",w),R(T),T.isVideoTexture&&c.delete(T)}function E(b){const T=b.target;T.removeEventListener("dispose",E),S(T)}function R(b){const T=i.get(b);if(T.__webglInit===void 0)return;const V=b.source,ee=f.get(V);if(ee){const J=ee[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(ee).length===0&&f.delete(V)}i.remove(b)}function M(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const V=b.source,ee=f.get(V);delete ee[T.__cacheKey],o.memory.textures--}function S(b){const T=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let J=0;J<T.__webglFramebuffer[ee].length;J++)n.deleteFramebuffer(T.__webglFramebuffer[ee][J]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=b.textures;for(let ee=0,J=V.length;ee<J;ee++){const Z=i.get(V[ee]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(V[ee])}i.remove(b)}let D=0;function N(){D=0}function z(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function X(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function j(b,T){const V=i.get(b);if(b.isVideoTexture&&Ce(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,b,T);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+T)}function W(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){q(V,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+T)}function Y(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){q(V,b,T);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+T)}function L(b,T){const V=i.get(b);if(b.version>0&&V.__version!==b.version){te(V,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+T)}const $={[Km]:n.REPEAT,[bo]:n.CLAMP_TO_EDGE,[Zm]:n.MIRRORED_REPEAT},P={[dr]:n.NEAREST,[PR]:n.NEAREST_MIPMAP_NEAREST,[Yc]:n.NEAREST_MIPMAP_LINEAR,[Cr]:n.LINEAR,[Bd]:n.LINEAR_MIPMAP_NEAREST,[Po]:n.LINEAR_MIPMAP_LINEAR},ne={[NR]:n.NEVER,[BR]:n.ALWAYS,[UR]:n.LESS,[vE]:n.LEQUAL,[FR]:n.EQUAL,[zR]:n.GEQUAL,[OR]:n.GREATER,[kR]:n.NOTEQUAL};function xe(b,T){if(T.type===Kr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Cr||T.magFilter===Bd||T.magFilter===Yc||T.magFilter===Po||T.minFilter===Cr||T.minFilter===Bd||T.minFilter===Yc||T.minFilter===Po)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,$[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,$[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,$[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,P[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,P[T.minFilter]),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dr||T.minFilter!==Yc&&T.minFilter!==Po||T.type===Kr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function je(b,T){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",w));const ee=T.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const Z=X(T);if(Z!==b.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[Z].usedTimes++;const de=J[b.__cacheKey];de!==void 0&&(J[b.__cacheKey].usedTimes--,de.usedTimes===0&&M(T)),b.__cacheKey=Z,b.__webglTexture=J[Z].texture}return V}function q(b,T,V){let ee=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=n.TEXTURE_3D);const J=je(b,T),Z=T.source;t.bindTexture(ee,b.__webglTexture,n.TEXTURE0+V);const de=i.get(Z);if(Z.version!==de.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const ue=ht.getPrimaries(ht.workingColorSpace),ge=T.colorSpace===Rs?null:ht.getPrimaries(T.colorSpace),Ke=T.colorSpace===Rs||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let se=_(T.image,!1,r.maxTextureSize);se=ut(T,se);const le=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Ue=x(T.internalFormat,le,Fe,T.colorSpace,T.isVideoTexture);xe(ee,T);let Se;const Je=T.mipmaps,ke=T.isVideoTexture!==!0,ft=de.__version===void 0||J===!0,I=Z.dataReady,he=A(T,se);if(T.isDepthTexture)Ue=y(T.format===vl,T.type),ft&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ue,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ue,se.width,se.height,0,le,Fe,null));else if(T.isDataTexture)if(Je.length>0){ke&&ft&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let K=0,Q=Je.length;K<Q;K++)Se=Je[K],ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Se.width,Se.height,le,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Se.width,Se.height,0,le,Fe,Se.data);T.generateMipmaps=!1}else ke?(ft&&t.texStorage2D(n.TEXTURE_2D,he,Ue,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,le,Fe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,se.width,se.height,0,le,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ke&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,Je[0].width,Je[0].height,se.depth);for(let K=0,Q=Je.length;K<Q;K++)if(Se=Je[K],T.format!==cr)if(le!==null)if(ke){if(I)if(T.layerUpdates.size>0){const fe=ny(Se.width,Se.height,T.format,T.type);for(const pe of T.layerUpdates){const Be=Se.data.subarray(pe*fe/Se.data.BYTES_PER_ELEMENT,(pe+1)*fe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pe,Se.width,Se.height,1,le,Be)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,se.depth,le,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,se.depth,le,Fe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Ue,Se.width,Se.height,se.depth,0,le,Fe,Se.data)}else{ke&&ft&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Je[0].width,Je[0].height);for(let K=0,Q=Je.length;K<Q;K++)Se=Je[K],T.format!==cr?le!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Se.width,Se.height,le,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Se.width,Se.height,le,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,K,Ue,Se.width,Se.height,0,le,Fe,Se.data)}else if(T.isDataArrayTexture)if(ke){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,se.width,se.height,se.depth),I)if(T.layerUpdates.size>0){const K=ny(se.width,se.height,T.format,T.type);for(const Q of T.layerUpdates){const fe=se.data.subarray(Q*K/se.data.BYTES_PER_ELEMENT,(Q+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,le,Fe,fe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,le,Fe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,se.width,se.height,se.depth,0,le,Fe,se.data);else if(T.isData3DTexture)ke?(ft&&t.texStorage3D(n.TEXTURE_3D,he,Ue,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,le,Fe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,se.width,se.height,se.depth,0,le,Fe,se.data);else if(T.isFramebufferTexture){if(ft)if(ke)t.texStorage2D(n.TEXTURE_2D,he,Ue,se.width,se.height);else{let K=se.width,Q=se.height;for(let fe=0;fe<he;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ue,K,Q,0,le,Fe,null),K>>=1,Q>>=1}}else if(Je.length>0){if(ke&&ft){const K=De(Je[0]);t.texStorage2D(n.TEXTURE_2D,he,Ue,K.width,K.height)}for(let K=0,Q=Je.length;K<Q;K++)Se=Je[K],ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le,Fe,Se):t.texImage2D(n.TEXTURE_2D,K,Ue,le,Fe,Se);T.generateMipmaps=!1}else if(ke){if(ft){const K=De(se);t.texStorage2D(n.TEXTURE_2D,he,Ue,K.width,K.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Fe,se)}else t.texImage2D(n.TEXTURE_2D,0,Ue,le,Fe,se);g(T)&&p(ee),de.__version=Z.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function te(b,T,V){if(T.image.length!==6)return;const ee=je(b,T),J=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+V);const Z=i.get(J);if(J.version!==Z.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const de=ht.getPrimaries(ht.workingColorSpace),ue=T.colorSpace===Rs?null:ht.getPrimaries(T.colorSpace),ge=T.colorSpace===Rs||de===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Ke&&!se?le[Q]=_(T.image[Q],!0,r.maxCubemapSize):le[Q]=se?T.image[Q].image:T.image[Q],le[Q]=ut(T,le[Q]);const Fe=le[0],Ue=s.convert(T.format,T.colorSpace),Se=s.convert(T.type),Je=x(T.internalFormat,Ue,Se,T.colorSpace),ke=T.isVideoTexture!==!0,ft=Z.__version===void 0||ee===!0,I=J.dataReady;let he=A(T,Fe);xe(n.TEXTURE_CUBE_MAP,T);let K;if(Ke){ke&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){K=le[Q].mipmaps;for(let fe=0;fe<K.length;fe++){const pe=K[fe];T.format!==cr?Ue!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,Ue,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,0,0,pe.width,pe.height,Ue,Se,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe,Je,pe.width,pe.height,0,Ue,Se,pe.data)}}}else{if(K=T.mipmaps,ke&&ft){K.length>0&&he++;const Q=De(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,Ue,Se,le[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,le[Q].width,le[Q].height,0,Ue,Se,le[Q].data);for(let fe=0;fe<K.length;fe++){const Be=K[fe].image[Q].image;ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Be.width,Be.height,Ue,Se,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Je,Be.width,Be.height,0,Ue,Se,Be.data)}}else{ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,Se,le[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Ue,Se,le[Q]);for(let fe=0;fe<K.length;fe++){const pe=K[fe];ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,0,0,Ue,Se,pe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,fe+1,Je,Ue,Se,pe.image[Q])}}}g(T)&&p(n.TEXTURE_CUBE_MAP),Z.__version=J.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ce(b,T,V,ee,J,Z){const de=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),ge=x(V.internalFormat,de,ue,V.colorSpace),Ke=i.get(T),se=i.get(V);if(se.__renderTarget=T,!Ke.__hasExternalTextures){const le=Math.max(1,T.width>>Z),Fe=Math.max(1,T.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Z,ge,le,Fe,T.depth,0,de,ue,null):t.texImage2D(J,Z,ge,le,Fe,0,de,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),B(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,se.__webglTexture,0,ze(T)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(b,T,V){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer){const ee=T.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,Z=y(T.stencilBuffer,J),de=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=ze(T);B(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Z,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{const ee=T.textures;for(let J=0;J<ee.length;J++){const Z=ee[J],de=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),ge=x(Z.internalFormat,de,ue,Z.colorSpace),Ke=ze(T);V&&B(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ge,T.width,T.height):B(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(T.depthTexture);ee.__renderTarget=T,(!ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const J=ee.__webglTexture,Z=ze(T);if(T.depthTexture.format===Qa)B(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===vl)B(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const T=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const ee=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=ee}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,b)}else if(V){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=n.createRenderbuffer(),ie(T.__webglDepthbuffer[ee],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ie(T.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,T,V){const ee=i.get(b);T!==void 0&&ce(ee.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Pe(b)}function it(b){const T=b.texture,V=i.get(b),ee=i.get(T);b.addEventListener("dispose",E);const J=b.textures,Z=b.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=T.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let ge=0;ge<T.mipmaps.length;ge++)V.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(de)for(let ue=0,ge=J.length;ue<ge;ue++){const Ke=i.get(J[ue]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&B(b)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const ge=J[ue];V.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ke=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),le=x(ge.internalFormat,Ke,se,ge.colorSpace,b.isXRRenderTarget===!0),Fe=ze(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,le,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(n.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ce(V.__webglFramebuffer[ue][ge],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ce(V.__webglFramebuffer[ue],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(T)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ue=0,ge=J.length;ue<ge;ue++){const Ke=J[ue],se=i.get(Ke);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),xe(n.TEXTURE_2D,Ke),ce(V.__webglFramebuffer,b,Ke,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),g(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),xe(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ce(V.__webglFramebuffer[ge],b,T,n.COLOR_ATTACHMENT0,ue,ge);else ce(V.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,ue,0);g(T)&&p(ue),t.unbindTexture()}b.depthBuffer&&Pe(b)}function Oe(b){const T=b.textures;for(let V=0,ee=T.length;V<ee;V++){const J=T[V];if(g(J)){const Z=v(b),de=i.get(J).__webglTexture;t.bindTexture(Z,de),p(Z),t.unbindTexture()}}}const Ne=[],U=[];function Tt(b){if(b.samples>0){if(B(b)===!1){const T=b.textures,V=b.width,ee=b.height;let J=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),ue=T.length>1;if(ue)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ke=i.get(T[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,V,ee,0,0,V,ee,J,n.NEAREST),l===!0&&(Ne.length=0,U.length=0,Ne.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ne.push(Z),U.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ke=i.get(T[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const T=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function ze(b){return Math.min(r.maxSamples,b.samples)}function B(b){const T=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ce(b){const T=o.render.frame;c.get(b)!==T&&(c.set(b,T),b.update())}function ut(b,T){const V=b.colorSpace,ee=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==wl&&V!==Rs&&(ht.getTransfer(V)===Mt?(ee!==cr||J!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function De(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=L,this.rebindTextures=We,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=B}function r3(n,e){function t(i,r=Rs){let s;const o=ht.getTransfer(r);if(i===cs)return n.UNSIGNED_BYTE;if(i===Q_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===J_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===aE)return n.BYTE;if(i===lE)return n.SHORT;if(i===rc)return n.UNSIGNED_SHORT;if(i===Z_)return n.INT;if(i===qo)return n.UNSIGNED_INT;if(i===Kr)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===cE)return n.ALPHA;if(i===fE)return n.RGB;if(i===cr)return n.RGBA;if(i===hE)return n.LUMINANCE;if(i===dE)return n.LUMINANCE_ALPHA;if(i===Qa)return n.DEPTH_COMPONENT;if(i===vl)return n.DEPTH_STENCIL;if(i===pE)return n.RED;if(i===e0)return n.RED_INTEGER;if(i===mE)return n.RG;if(i===t0)return n.RG_INTEGER;if(i===n0)return n.RGBA_INTEGER;if(i===kf||i===zf||i===Bf||i===Hf)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qm||i===Jm||i===eg||i===tg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ng||i===ig||i===rg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ng||i===ig)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sg||i===og||i===ag||i===lg||i===ug||i===cg||i===fg||i===hg||i===dg||i===pg||i===mg||i===gg||i===_g||i===vg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===og)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ag)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ug)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_g)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vg)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vf||i===xg||i===yg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gE||i===Sg||i===Mg||i===Eg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_l?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class s3 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o3={type:"move"};class pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),d=.02,m=.005;u.inputState.pinching&&f>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const a3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new hi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new On({vertexShader:a3,fragmentShader:l3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c3 extends Tl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,d=null,m=null;const _=new u3,g=t.getContextAttributes();let p=null,v=null;const x=[],y=[],A=new $e;let w=null;const E=new Ei;E.viewport=new wt;const R=new Ei;R.viewport=new wt;const M=[E,R],S=new s3;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=x[q];return te===void 0&&(te=new pp,x[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=x[q];return te===void 0&&(te=new pp,x[q]=te),te.getGripSpace()},this.getHand=function(q){let te=x[q];return te===void 0&&(te=new pp,x[q]=te),te.getHandSpace()};function z(q){const te=y.indexOf(q.inputSource);if(te===-1)return;const ce=x[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let q=0;q<x.length;q++){const te=y[q];te!==null&&(y[q]=null,x[q].disconnect(te))}D=null,N=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new pr(d.framebufferWidth,d.framebufferHeight,{format:cr,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,ce=null,ie=null;g.depth&&(ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?vl:Qa,ce=g.stencil?_l:qo);const Ae={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new pr(f.textureWidth,f.textureHeight,{format:cr,type:cs,depthTexture:new DE(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let te=0;te<q.removed.length;te++){const ce=q.removed[te],ie=y.indexOf(ce);ie>=0&&(y[ie]=null,x[ie].disconnect(ce))}for(let te=0;te<q.added.length;te++){const ce=q.added[te];let ie=y.indexOf(ce);if(ie===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(ce),ie=Pe;break}else if(y[Pe]===null){y[Pe]=ce,ie=Pe;break}if(ie===-1)break}const Ae=x[ie];Ae&&Ae.connect(ce)}}const W=new O,Y=new O;function L(q,te,ce){W.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ie=W.distanceTo(Y),Ae=te.projectionMatrix.elements,Pe=ce.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),Oe=(Ae[9]+1)/Ae[5],Ne=(Ae[9]-1)/Ae[5],U=(Ae[8]-1)/Ae[0],Tt=(Pe[8]+1)/Pe[0],ze=We*U,B=We*Tt,Ce=ie/(-U+Tt),ut=Ce*-U;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ut),q.translateZ(Ce),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const De=We+Ce,b=it+Ce,T=ze-ut,V=B+(ie-ut),ee=Oe*it/b*De,J=Ne*it/b*De;q.projectionMatrix.makePerspective(T,V,ee,J,De,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ce=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),S.near=R.near=E.near=te,S.far=R.far=E.far=ce,(D!==S.near||N!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,N=S.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const ie=q.parent,Ae=S.cameras;$(S,ie);for(let Pe=0;Pe<Ae.length;Pe++)$(Ae[Pe],ie);Ae.length===2?L(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),P(q,S,ie)};function P(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ne=null;function xe(q,te){if(c=te.getViewerPose(u||o),m=te,c!==null){const ce=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ie=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let Pe=0;Pe<ce.length;Pe++){const We=ce[Pe];let it=null;if(d!==null)it=d.getViewport(We);else{const Ne=h.getViewSubImage(f,We);it=Ne.viewport,Pe===0&&(e.setRenderTargetTextures(v,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(v))}let Oe=M[Pe];Oe===void 0&&(Oe=new Ei,Oe.layers.enable(Pe),Oe.viewport=new wt,M[Pe]=Oe),Oe.matrix.fromArray(We.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(We.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(it.x,it.y,it.width,it.height),Pe===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(Oe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Pe=h.getDepthInformation(ce[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ie=y[ce],Ae=x[ce];ie!==null&&Ae!==void 0&&Ae.update(ie,te,u||o)}ne&&ne(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}const je=new PE;je.setAnimationLoop(xe),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const po=new Ir,f3=new Ot;function h3(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,CE(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,po.copy(y),po.x*=-1,po.y*=-1,po.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),g.envMapRotation.value.setFromMatrix4(f3.makeRotationFromEuler(po)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(m(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=R.length;M<S;M++){const D=R[M];if(d(D,w,M,A)===!0){const N=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let j=0;j<z.length;j++){const W=z[j],Y=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,x,y,A){const w=v.value,E=x+"_"+y;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const R=A[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(v){const x=v.uniforms;let y=0;const A=16;for(let E=0,R=x.length;E<R;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=M.length;S<D;S++){const N=M[S],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,j=z.length;X<j;X++){const W=z[X],Y=_(W),L=y%A,$=L%Y.boundary,P=L+$;y+=$,P!==0&&A-P<Y.storage&&(y+=A-P),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Y.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class p3{constructor(e={}){const{canvas:t=ib(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hi,this.toneMapping=js,this.toneMappingExposure=1;const y=this;let A=!1,w=0,E=0,R=null,M=-1,S=null;const D=new wt,N=new wt;let z=null;const X=new Qe(0);let j=0,W=t.width,Y=t.height,L=1,$=null,P=null;const ne=new wt(0,0,W,Y),xe=new wt(0,0,W,Y);let je=!1;const q=new r0;let te=!1,ce=!1;const ie=new Ot,Ae=new Ot,Pe=new O,We=new wt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Ne(){return R===null?L:1}let U=i;function Tt(C,F){return t.getContext(C,F)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${q_}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const F="webgl2";if(U=Tt(F,C),U===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,B,Ce,ut,De,b,T,V,ee,J,Z,de,ue,ge,Ke,se,le,Fe,Ue,Se,Je,ke,ft,I;function he(){ze=new xD(U),ze.init(),ke=new r3(U,ze),B=new dD(U,ze,e,ke),Ce=new t3(U,ze),B.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ut=new MD(U),De=new BL,b=new i3(U,ze,Ce,De,B,ke,ut),T=new mD(y),V=new vD(y),ee=new bb(U),ft=new fD(U,ee),J=new yD(U,ee,ut,ft),Z=new wD(U,J,ee,ut),Ue=new ED(U,B,b),se=new pD(De),de=new zL(y,T,V,ze,B,ft,se),ue=new h3(y,De),ge=new VL,Ke=new qL(ze),Fe=new cD(y,T,V,Ce,Z,d,l),le=new JL(y,Z,B),I=new d3(U,ut,B,Ce),Se=new hD(U,ze,ut),Je=new SD(U,ze,ut),ut.programs=de.programs,y.capabilities=B,y.extensions=ze,y.properties=De,y.renderLists=ge,y.shadowMap=le,y.state=Ce,y.info=ut}he();const K=new c3(y,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(C){C!==void 0&&(L=C,this.setSize(W,Y,!1))},this.getSize=function(C){return C.set(W,Y)},this.setSize=function(C,F,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,Y=F,t.width=Math.floor(C*L),t.height=Math.floor(F*L),H===!0&&(t.style.width=C+"px",t.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(W*L,Y*L).floor()},this.setDrawingBufferSize=function(C,F,H){W=C,Y=F,L=H,t.width=Math.floor(C*H),t.height=Math.floor(F*H),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,F,H,G){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,F,H,G),Ce.viewport(D.copy(ne).multiplyScalar(L).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,F,H,G){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,F,H,G),Ce.scissor(N.copy(xe).multiplyScalar(L).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(C){Ce.setScissorTest(je=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,F=!0,H=!0){let G=0;if(C){let k=!1;if(R!==null){const oe=R.texture.format;k=oe===n0||oe===t0||oe===e0}if(k){const oe=R.texture.type,ae=oe===cs||oe===qo||oe===rc||oe===_l||oe===Q_||oe===J_,me=Fe.getClearColor(),Me=Fe.getClearAlpha(),He=me.r,qe=me.g,Te=me.b;ae?(m[0]=He,m[1]=qe,m[2]=Te,m[3]=Me,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=He,_[1]=qe,_[2]=Te,_[3]=Me,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),Ke.dispose(),De.dispose(),T.dispose(),V.dispose(),Z.dispose(),ft.dispose(),I.dispose(),de.dispose(),K.dispose(),K.removeEventListener("sessionstart",_e),K.removeEventListener("sessionend",Xe),be.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=ut.autoReset,F=le.enabled,H=le.autoUpdate,G=le.needsUpdate,k=le.type;he(),ut.autoReset=C,le.enabled=F,le.autoUpdate=H,le.needsUpdate=G,le.type=k}function pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Be(C){const F=C.target;F.removeEventListener("dispose",Be),mt(F)}function mt(C){qt(C),De.remove(C)}function qt(C){const F=De.get(C).programs;F!==void 0&&(F.forEach(function(H){de.releaseProgram(H)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,H,G,k,oe){F===null&&(F=it);const ae=k.isMesh&&k.matrixWorld.determinant()<0,me=pi(C,F,H,G,k);Ce.setMaterial(G,ae);let Me=H.index,He=1;if(G.wireframe===!0){if(Me=J.getWireframeAttribute(H),Me===void 0)return;He=2}const qe=H.drawRange,Te=H.attributes.position;let Ze=qe.start*He,gt=(qe.start+qe.count)*He;oe!==null&&(Ze=Math.max(Ze,oe.start*He),gt=Math.min(gt,(oe.start+oe.count)*He)),Me!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,Me.count)):Te!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,Te.count));const vt=gt-Ze;if(vt<0||vt===1/0)return;ft.setup(k,G,me,H,Me);let Ht,xt=Se;if(Me!==null&&(Ht=ee.get(Me),xt=Je,xt.setIndex(Ht)),k.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*Ne()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(k.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Ce.setLineWidth(Ie*Ne()),k.isLineSegments?xt.setMode(U.LINES):k.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else k.isPoints?xt.setMode(U.POINTS):k.isSprite&&xt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))xt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ie=k._multiDrawStarts,Nr=k._multiDrawCounts,yt=k._multiDrawCount,Ji=Me?ee.get(Me).bytesPerElement:1,Jo=De.get(G).currentProgram.getUniforms();for(let mi=0;mi<yt;mi++)Jo.setValue(U,"_gl_DrawID",mi),xt.render(Ie[mi]/Ji,Nr[mi])}else if(k.isInstancedMesh)xt.renderInstances(Ze,vt,k.count);else if(H.isInstancedBufferGeometry){const Ie=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Nr=Math.min(H.instanceCount,Ie);xt.renderInstances(Ze,vt,Nr)}else xt.render(Ze,vt)};function ye(C,F,H){C.transparent===!0&&C.side===Yr&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,At(C,F,H),C.side=eo,C.needsUpdate=!0,At(C,F,H),C.side=Yr):At(C,F,H)}this.compile=function(C,F,H=null){H===null&&(H=C),p=Ke.get(H),p.init(F),x.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),C!==H&&C.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const G=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let ae=0;ae<oe.length;ae++){const me=oe[ae];ye(me,H,k),G.add(me)}else ye(oe,H,k),G.add(oe)}),x.pop(),p=null,G},this.compileAsync=function(C,F,H=null){const G=this.compile(C,F,H);return new Promise(k=>{function oe(){if(G.forEach(function(ae){De.get(ae).currentProgram.isReady()&&G.delete(ae)}),G.size===0){k(C);return}setTimeout(oe,10)}ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Re=null;function et(C){Re&&Re(C)}function _e(){be.stop()}function Xe(){be.start()}const be=new PE;be.setAnimationLoop(et),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(C){Re=C,K.setAnimationLoop(C),C===null?be.stop():be.start()},K.addEventListener("sessionstart",_e),K.addEventListener("sessionend",Xe),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,F,R),p=Ke.get(C,x.length),p.init(F),x.push(p),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,te=se.init(this.clippingPlanes,ce),g=ge.get(C,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Ve(oe,F,-1/0,y.sortObjects)}Ve(C,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort($,P),Oe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Oe&&Fe.addToRenderList(g,C),this.info.render.frame++,te===!0&&se.beginShadows();const H=p.state.shadowsArray;le.render(H,C,F),te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,k=g.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(k.length>0)for(let ae=0,me=oe.length;ae<me;ae++){const Me=oe[ae];st(G,k,C,Me)}Oe&&Fe.render(C);for(let ae=0,me=oe.length;ae<me;ae++){const Me=oe[ae];Zt(g,C,Me,Me.viewport)}}else k.length>0&&st(G,k,C,F),Oe&&Fe.render(C),Zt(g,C,F);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,F),ft.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ve(C,F,H,G){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){G&&We.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const ae=Z.update(C),me=C.material;me.visible&&g.push(C,ae,me,H,We.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const ae=Z.update(C),me=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),We.copy(C.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),We.copy(ae.boundingSphere.center)),We.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(me)){const Me=ae.groups;for(let He=0,qe=Me.length;He<qe;He++){const Te=Me[He],Ze=me[Te.materialIndex];Ze&&Ze.visible&&g.push(C,ae,Ze,H,We.z,Te)}}else me.visible&&g.push(C,ae,me,H,We.z,null)}}const oe=C.children;for(let ae=0,me=oe.length;ae<me;ae++)Ve(oe[ae],F,H,G)}function Zt(C,F,H,G){const k=C.opaque,oe=C.transmissive,ae=C.transparent;p.setupLightsView(H),te===!0&&se.setGlobalState(y.clippingPlanes,H),G&&Ce.viewport(D.copy(G)),k.length>0&&Pt(k,F,H),oe.length>0&&Pt(oe,F,H),ae.length>0&&Pt(ae,F,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function st(C,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new pr(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?ns:cs,minFilter:Po,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const oe=p.state.transmissionRenderTarget[G.id],ae=G.viewport||D;oe.setSize(ae.z,ae.w);const me=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&Fe.render(H);const Me=y.toneMapping;y.toneMapping=js;const He=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),te===!0&&se.setGlobalState(y.clippingPlanes,G),Pt(C,H,G),b.updateMultisampleRenderTarget(oe),b.updateRenderTargetMipmap(oe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Te=0,Ze=F.length;Te<Ze;Te++){const gt=F[Te],vt=gt.object,Ht=gt.geometry,xt=gt.material,Ie=gt.group;if(xt.side===Yr&&vt.layers.test(G.layers)){const Nr=xt.side;xt.side=Jn,xt.needsUpdate=!0,on(vt,H,G,Ht,xt,Ie),xt.side=Nr,xt.needsUpdate=!0,qe=!0}}qe===!0&&(b.updateMultisampleRenderTarget(oe),b.updateRenderTargetMipmap(oe))}y.setRenderTarget(me),y.setClearColor(X,j),He!==void 0&&(G.viewport=He),y.toneMapping=Me}function Pt(C,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,oe=C.length;k<oe;k++){const ae=C[k],me=ae.object,Me=ae.geometry,He=G===null?ae.material:G,qe=ae.group;me.layers.test(H.layers)&&on(me,F,H,Me,He,qe)}}function on(C,F,H,G,k,oe){C.onBeforeRender(y,F,H,G,k,oe),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(y,F,H,G,C,oe),k.transparent===!0&&k.side===Yr&&k.forceSinglePass===!1?(k.side=Jn,k.needsUpdate=!0,y.renderBufferDirect(H,F,G,k,C,oe),k.side=eo,k.needsUpdate=!0,y.renderBufferDirect(H,F,G,k,C,oe),k.side=Yr):y.renderBufferDirect(H,F,G,k,C,oe),C.onAfterRender(y,F,H,G,k,oe)}function At(C,F,H){F.isScene!==!0&&(F=it);const G=De.get(C),k=p.state.lights,oe=p.state.shadowsArray,ae=k.state.version,me=de.getParameters(C,k.state,oe,F,H),Me=de.getProgramCacheKey(me);let He=G.programs;G.environment=C.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(C.isMeshStandardMaterial?V:T).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Be),He=new Map,G.programs=He);let qe=He.get(Me);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===ae)return _t(C,me),qe}else me.uniforms=de.getUniforms(C),C.onBeforeCompile(me,y),qe=de.acquireProgram(me,Me),He.set(Me,qe),G.uniforms=me.uniforms;const Te=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Te.clippingPlanes=se.uniform),_t(C,me),G.needsLights=Bn(C),G.lightsStateVersion=ae,G.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=qe,G.uniformsList=null,qe}function Ct(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=Gf.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function _t(C,F){const H=De.get(C);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function pi(C,F,H,G,k){F.isScene!==!0&&(F=it),b.resetTextureUnits();const oe=F.fog,ae=G.isMeshStandardMaterial?F.environment:null,me=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wl,Me=(G.isMeshStandardMaterial?V:T).get(G.envMap||ae),He=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,gt=!!H.morphAttributes.color;let vt=js;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(vt=y.toneMapping);const Ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=Ht!==void 0?Ht.length:0,Ie=De.get(G),Nr=p.state.lights;if(te===!0&&(ce===!0||C!==S)){const ki=C===S&&G.id===M;se.setState(G,C,ki)}let yt=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Nr.state.version||Ie.outputColorSpace!==me||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Me||G.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==qe||Ie.morphTargets!==Te||Ie.morphNormals!==Ze||Ie.morphColors!==gt||Ie.toneMapping!==vt||Ie.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ie.__version=G.version);let Ji=Ie.currentProgram;yt===!0&&(Ji=At(G,F,k));let Jo=!1,mi=!1,Pl=!1;const Nt=Ji.getUniforms(),_r=Ie.uniforms;if(Ce.useProgram(Ji.program)&&(Jo=!0,mi=!0,Pl=!0),G.id!==M&&(M=G.id,mi=!0),Jo||S!==C){Ce.buffers.depth.getReversed()?(ie.copy(C.projectionMatrix),sb(ie),ob(ie),Nt.setValue(U,"projectionMatrix",ie)):Nt.setValue(U,"projectionMatrix",C.projectionMatrix),Nt.setValue(U,"viewMatrix",C.matrixWorldInverse);const ds=Nt.map.cameraPosition;ds!==void 0&&ds.setValue(U,Pe.setFromMatrixPosition(C.matrixWorld)),B.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,mi=!0,Pl=!0)}if(k.isSkinnedMesh){Nt.setOptional(U,k,"bindMatrix"),Nt.setOptional(U,k,"bindMatrixInverse");const ki=k.skeleton;ki&&(ki.boneTexture===null&&ki.computeBoneTexture(),Nt.setValue(U,"boneTexture",ki.boneTexture,b))}k.isBatchedMesh&&(Nt.setOptional(U,k,"batchingTexture"),Nt.setValue(U,"batchingTexture",k._matricesTexture,b),Nt.setOptional(U,k,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",k._indirectTexture,b),Nt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",k._colorsTexture,b));const Dl=H.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0)&&Ue.update(k,H,Ji),(mi||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Nt.setValue(U,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_r.envMap.value=Me,_r.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(_r.envMapIntensity.value=F.environmentIntensity),mi&&(Nt.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&It(_r,Pl),oe&&G.fog===!0&&ue.refreshFogUniforms(_r,oe),ue.refreshMaterialUniforms(_r,G,L,Y,p.state.transmissionRenderTarget[C.id]),Gf.upload(U,Ct(Ie),_r,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gf.upload(U,Ct(Ie),_r,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(U,"center",k.center),Nt.setValue(U,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(U,"normalMatrix",k.normalMatrix),Nt.setValue(U,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ki=G.uniformsGroups;for(let ds=0,ps=ki.length;ds<ps;ds++){const c0=ki[ds];I.update(c0,Ji),I.bind(c0,Ji)}}return Ji}function It(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Bn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,F,H){De.get(C.texture).__webglTexture=F,De.get(C.depthTexture).__webglTexture=H;const G=De.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const H=De.get(C);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,H=0){R=C,w=F,E=H;let G=!0,k=null,oe=!1,ae=!1;if(C){const Me=De.get(C);if(Me.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(Me.__hasExternalTextures)b.rebindTextures(C,De.get(C.texture).__webglTexture,De.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Te=C.depthTexture;if(Me.__boundDepthTexture!==Te){if(Te!==null&&De.has(Te)&&(C.width!==Te.image.width||C.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ae=!0);const qe=De.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?k=qe[F][H]:k=qe[F],oe=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?k=De.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?k=qe[H]:k=qe,D.copy(C.viewport),N.copy(C.scissor),z=C.scissorTest}else D.copy(ne).multiplyScalar(L).floor(),N.copy(xe).multiplyScalar(L).floor(),z=je;if(Ce.bindFramebuffer(U.FRAMEBUFFER,k)&&G&&Ce.drawBuffers(C,k),Ce.viewport(D),Ce.scissor(N),Ce.setScissorTest(z),oe){const Me=De.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,H)}else if(ae){const Me=De.get(C.texture),He=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,He)}M=-1},this.readRenderTargetPixels=function(C,F,H,G,k,oe,ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){Ce.bindFramebuffer(U.FRAMEBUFFER,me);try{const Me=C.texture,He=Me.format,qe=Me.type;if(!B.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-G&&H>=0&&H<=C.height-k&&U.readPixels(F,H,G,k,ke.convert(He),ke.convert(qe),oe)}finally{const Me=R!==null?De.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(C,F,H,G,k,oe,ae){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ae!==void 0&&(me=me[ae]),me){const Me=C.texture,He=Me.format,qe=Me.type;if(!B.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-G&&H>=0&&H<=C.height-k){Ce.bindFramebuffer(U.FRAMEBUFFER,me);const Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,oe.byteLength,U.STREAM_READ),U.readPixels(F,H,G,k,ke.convert(He),ke.convert(qe),0);const Ze=R!==null?De.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Ze);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rb(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,oe),U.deleteBuffer(Te),U.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,F=null,H=0){C.isTexture!==!0&&(ou("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const G=Math.pow(2,-H),k=Math.floor(C.image.width*G),oe=Math.floor(C.image.height*G),ae=F!==null?F.x:0,me=F!==null?F.y:0;b.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ae,me,k,oe),Ce.unbindTexture()},this.copyTextureToTexture=function(C,F,H=null,G=null,k=0){C.isTexture!==!0&&(ou("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1],F=arguments[2],k=arguments[3]||0,H=null);let oe,ae,me,Me,He,qe,Te,Ze,gt;const vt=C.isCompressedTexture?C.mipmaps[k]:C.image;H!==null?(oe=H.max.x-H.min.x,ae=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,He=H.min.y,qe=H.isBox3?H.min.z:0):(oe=vt.width,ae=vt.height,me=vt.depth||1,Me=0,He=0,qe=0),G!==null?(Te=G.x,Ze=G.y,gt=G.z):(Te=0,Ze=0,gt=0);const Ht=ke.convert(F.format),xt=ke.convert(F.type);let Ie;F.isData3DTexture?(b.setTexture3D(F,0),Ie=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),Ie=U.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),Ie=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Nr=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ji=U.getParameter(U.UNPACK_SKIP_PIXELS),Jo=U.getParameter(U.UNPACK_SKIP_ROWS),mi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qe);const Pl=C.isDataArrayTexture||C.isData3DTexture,Nt=F.isDataArrayTexture||F.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const _r=De.get(C),Dl=De.get(F),ki=De.get(_r.__renderTarget),ds=De.get(Dl.__renderTarget);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,ki.__webglFramebuffer),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let ps=0;ps<me;ps++)Pl&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(C).__webglTexture,k,qe+ps),C.isDepthTexture?(Nt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(F).__webglTexture,k,gt+ps),U.blitFramebuffer(Me,He,oe,ae,Te,Ze,oe,ae,U.DEPTH_BUFFER_BIT,U.NEAREST)):Nt?U.copyTexSubImage3D(Ie,k,Te,Ze,gt+ps,Me,He,oe,ae):U.copyTexSubImage2D(Ie,k,Te,Ze,gt+ps,Me,He,oe,ae);Ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ie,k,Te,Ze,gt,oe,ae,me,Ht,xt,vt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ie,k,Te,Ze,gt,oe,ae,me,Ht,vt.data):U.texSubImage3D(Ie,k,Te,Ze,gt,oe,ae,me,Ht,xt,vt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Te,Ze,oe,ae,Ht,xt,vt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Te,Ze,vt.width,vt.height,Ht,vt.data):U.texSubImage2D(U.TEXTURE_2D,k,Te,Ze,oe,ae,Ht,xt,vt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nr),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ji),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jo),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mi),k===0&&F.generateMipmaps&&U.generateMipmap(Ie),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,F,H=null,G=null,k=0){return C.isTexture!==!0&&(ou("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,C=arguments[2],F=arguments[3],k=arguments[4]||0),ou('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,F,H,G,k)},this.initRenderTarget=function(C){De.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,Ce.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class a0{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new a0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m3 extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class FE extends Cl{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const iy=new Ot,Tg=new ME,pf=new Kh,mf=new O;class g3 extends xn{constructor(e=new Oi,t=new FE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pf.copy(i.boundingSphere),pf.applyMatrix4(r),pf.radius+=s,e.ray.intersectsSphere(pf)===!1)return;iy.copy(r).invert(),Tg.copy(e.ray).applyMatrix4(iy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=u.getX(m);mf.fromBufferAttribute(h,g),ry(mf,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)mf.fromBufferAttribute(h,m),ry(mf,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ry(n,e,t,i,r,s,o){const a=Tg.distanceSqToPoint(n);if(a<t){const l=new O;Tg.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _3{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,d=(o-c)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new $e:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],s=[],o=[],a=new O,l=new Ot;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new O)}s[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(En(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(En(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function l0(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+h)+(l-a)/h;f*=c,d*=c,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const gf=new O,mp=new l0,gp=new l0,_p=new l0;class sy extends _3{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(gf.subVectors(r[0],r[1]).add(r[0]),u=gf);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(gf.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=gf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(c),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),mp.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,m,_,g),gp.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,m,_,g),_p.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,m,_,g)}else this.curveType==="catmullrom"&&(mp.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),gp.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),_p.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(mp.calc(l),gp.calc(l),_p.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class wi extends Oi{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],d=[];let m=0;const _=[],g=i/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new yn(h,3)),this.setAttribute("normal",new yn(f,3)),this.setAttribute("uv",new yn(d,2));function v(){const y=new O,A=new O;let w=0;const E=(t-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,D=S*(t-e)+e;for(let N=0;N<=r;N++){const z=N/r,X=z*l+a,j=Math.sin(X),W=Math.cos(X);A.x=D*j,A.y=-S*i+g,A.z=D*W,h.push(A.x,A.y,A.z),y.set(j,E,W).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-S),M.push(m++)}_.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=_[M][R],D=_[M+1][R],N=_[M+1][R+1],z=_[M][R+1];(e>0||M!==0)&&(c.push(S,D,z),w+=3),(t>0||M!==s-1)&&(c.push(D,N,z),w+=3)}u.addGroup(p,w,0),p+=w}function x(y){const A=m,w=new $e,E=new O;let R=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const D=m;for(let N=0;N<=r;N++){const X=N/r*l+a,j=Math.cos(X),W=Math.sin(X);E.x=M*W,E.y=g*S,E.z=M*j,h.push(E.x,E.y,E.z),f.push(0,S,0),w.x=j*.5+.5,w.y=W*.5*S+.5,d.push(w.x,w.y),m++}for(let N=0;N<r;N++){const z=A+N,X=D+N;y===!0?c.push(X,X+1,z):c.push(X+1,X,z),R+=3}u.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fs extends Oi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new O,f=new O,d=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],x=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(w+y,1-x),v.push(u++)}c.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const x=c[p][v+1],y=c[p][v],A=c[p+1][v],w=c[p+1][v+1];(p!==0||o>0)&&d.push(x,y,w),(p!==i-1||l<Math.PI)&&d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ch extends Oi{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new O,h=new O,f=new O;for(let d=0;d<=i;d++)for(let m=0;m<=r;m++){const _=m/r*s,g=d/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(m/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=r;m++){const _=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,v=(r+1)*d+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new yn(a,3)),this.setAttribute("normal",new yn(l,3)),this.setAttribute("uv",new yn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class v3 extends On{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class pn extends Cl{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_E,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qh extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class x3 extends Qh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vp=new Ot,oy=new O,ay=new O;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r0,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oy.setFromMatrixPosition(e.matrixWorld),t.position.copy(oy),ay.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ay),t.updateMatrixWorld(),vp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ly=new Ot,jl=new O,xp=new O;class y3 extends OE{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),jl.setFromMatrixPosition(e.matrixWorld),i.position.copy(jl),xp.copy(i.position),xp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xp),i.updateMatrixWorld(),r.makeTranslation(-jl.x,-jl.y,-jl.z),ly.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ly)}}class uy extends Qh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new y3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S3 extends OE{constructor(){super(new s0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M3 extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new S3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class E3 extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cy(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:q_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=q_);const zE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class bl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w3=new s0(-1,1,1,-1,0,1);class T3 extends Oi{constructor(){super(),this.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yn([0,2,0,0,2,0],2))}}const A3=new T3;class u0{constructor(e){this._mesh=new pt(A3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ag extends bl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof On?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oc.clone(e.uniforms),this.material=new On({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new u0(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fy extends bl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class C3 extends bl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class R3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new pr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ns}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ag(zE),this.copyPass.material.blending=ts,this.clock=new kE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fy!==void 0&&(o instanceof fy?i=!0:o instanceof C3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b3 extends bl{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const P3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yl extends bl{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pr(s,o,{type:ns}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new pr(s,o,{type:ns});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new pr(s,o,{type:ns});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=P3;this.highPassUniforms=oc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new On({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=zE;this.copyUniforms=oc.clone(c.uniforms),this.blendMaterial=new On({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:km,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qe,this.oldClearAlpha=1,this.basic=new mc,this.fsQuad=new u0(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=yl.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yl.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new On({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new On({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}yl.BlurDirectionX=new $e(1,0);yl.BlurDirectionY=new $e(0,1);const D3={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class L3 extends bl{constructor(){super();const e=D3;this.uniforms=oc.clone(e.uniforms),this.material=new v3({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new u0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tE?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nE?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===iE?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===K_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rE?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sE&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const kt=(n,e,t)=>new O(n,e,t);function I3(){const n=new sy([kt(0,1.62,76),kt(.3,1.65,60),kt(-.2,1.6,44),kt(.4,1.64,28),kt(-.1,1.61,12),kt(.2,1.63,-4),kt(-.2,1.62,-20),kt(0,1.64,-34),kt(0,1.65,-48),kt(0,1.65,-60),kt(0,1.8,-59),kt(0,2.2,-57)]),e=new sy([kt(0,1.5,50),kt(0,1.4,34),kt(0,1.4,16),kt(0,1.3,-2),kt(0,1.3,-18),kt(0,1.4,-34),kt(0,1.5,-50),kt(0,2.2,-62),kt(0,4,-74),kt(0,6,-78),kt(0,8.5,-78),kt(0,11,-78)]);return{camPath:n,lookPath:e}}const hy=new O,dy=new O;function N3(n,e){const t=U3(e);return n.camPath.getPoint(t,hy),n.lookPath.getPoint(t,dy),{pos:hy,look:dy}}function U3(n){if(n<=.8)return n;const e=(n-.8)/.2;return .8+e*e*(3-2*e)*.2}const F3=10,O3=7,Cg=15,k3=6,z3=11,B3=23,$o=-78,H3=17,V3=9,G3=72,W3={uniforms:{tDiffuse:{value:null},uAmount:{value:.003}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec2 d=normalize(vUv-.5); float s=length(vUv-.5);
      float str=s*s*uAmount;
      float r=texture2D(tDiffuse,vUv+d*str*1.8).r;
      float g=texture2D(tDiffuse,vUv).g;
      float b=texture2D(tDiffuse,vUv-d*str*1.8).b;
      gl_FragColor=vec4(r,g,b,1.);
    }`},X3={uniforms:{tDiffuse:{value:null},uTime:{value:0},uStrength:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uStrength; varying vec2 vUv;
    float rng(vec2 c){ return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453+uTime); }
    void main(){
      vec4 col=texture2D(tDiffuse,vUv);
      float g=rng(vUv)*uStrength;
      col.rgb+=g-uStrength*.5;
      gl_FragColor=col;
    }`};function Y3(){return{pave:new pn({color:12233354}),trottoir:new pn({color:13680538}),sol:new pn({color:13150328}),trunk:new pn({color:10124892}),leafA:new pn({color:1980938}),leafB:new pn({color:3036434}),limestone:new pn({color:15259048}),limestoneB:new pn({color:14534808}),shutter:new pn({color:3825186}),windowMat:new pn({color:1579554,emissive:new Qe(1710090),emissiveIntensity:.5}),toiture:new pn({color:9072744}),stone:new pn({color:13416600}),gold:new pn({color:13938487,emissive:new Qe(6967296),emissiveIntensity:.6}),waterMat:new pn({color:5941964,transparent:!0,opacity:.72}),coat1:new pn({color:2434352}),coat2:new pn({color:3154970}),coat3:new pn({color:1714720}),skinMat:new pn({color:13936776})}}function j3(n){const e=new On({uniforms:{uZenith:{value:new Qe(1728426)},uHorizon:{value:new Qe(8961e3)},uGround:{value:new Qe(13150328)}},vertexShader:`
      varying float vY;
      void main(){ vY=normalize(position).y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }
    `,fragmentShader:`
      uniform vec3 uZenith,uHorizon,uGround; varying float vY;
      void main(){
        vec3 c = vY>0. ? mix(uHorizon,uZenith,pow(vY,.55)) : mix(uHorizon,uGround,clamp(-vY*4.,0.,1.));
        gl_FragColor=vec4(c,1.);
      }
    `,side:Jn,depthWrite:!1});n.add(new pt(new fs(500,24,12),e));const t=new mc({color:16775392}),i=new pt(new fs(4,12,8),t);i.position.set(80,180,-60),n.add(i)}function q3(n,e){const t=new pt(new Rr(400,300),e.sol);t.rotation.x=-Math.PI/2,t.position.y=-.1,n.add(t);const i=new pt(new Rr(F3*2,200),e.pave);i.rotation.x=-Math.PI/2,i.position.set(0,.01,-20),n.add(i),[-1,1].forEach(r=>{const s=new pt(new Rr(O3,200),e.trottoir);s.rotation.x=-Math.PI/2,s.position.set(Cg*r,.015,-20),n.add(s)});for(let r=-70;r<75;r+=12){const s=new pt(new Rr(.15,5),new mc({color:15658700,opacity:.6,transparent:!0}));s.rotation.x=-Math.PI/2,s.position.set(0,.02,r),n.add(s)}}function py(n,e,t,i){const r=new Qr,s=5+Math.random()*2,o=.6+Math.random()*.4,a=new pt(new wi(.22,.32,s,7),e.trunk);a.position.y=s/2;const l=new pt(new fs(o*3,9,7),e.leafA);l.scale.y=.72,l.position.y=s+o*2.1;const u=new pt(new fs(o*2,8,6),e.leafB);u.scale.y=.55,u.position.set(o*.3,s+o*3,o*.3),r.add(a,l,u),r.position.set(t,0,i),r.rotation.y=Math.random()*Math.PI*2,r.scale.setScalar(.88+Math.random()*.22),n.add(r)}function $3(n,e){for(let t=0;t<H3;t++){const i=G3-t*V3,r=(Math.random()-.5)*1.2;[-1,1].forEach(s=>{py(n,e,k3*s+r*.5,i),py(n,e,z3*s+r,i+(Math.random()-.5))})}}function K3(n,e,t,i,r){const s=new pt(new to(.04,1.35,.82),n.limestone),o=new pt(new Rr(.72,1.18),n.windowMat),a=new Qr;return a.add(s,o),a.rotation.y=r,a.position.set(e,t,i),a}function my(n,e,t){const i=B3*t,r=t>0?-Math.PI/2:Math.PI/2;[{zc:65,l:22,h:11},{zc:40,l:18,h:13},{zc:18,l:24,h:10},{zc:-5,l:20,h:12},{zc:-28,l:22,h:11},{zc:-50,l:18,h:13},{zc:-68,l:16,h:10}].forEach(({zc:o,l:a,h:l})=>{const u=Math.random()>.5?e.limestone:e.limestoneB,c=new pt(new to(8,l,a),u);c.position.set(i+t*4,l/2,o),n.add(c);const h=new pt(new to(8.4,1.1,a+.4),e.toiture);h.position.set(i+t*4,l+.55,o),n.add(h);const f=new pt(new Rr(.55,l*.6),e.shutter);f.rotation.y=r,f.position.set(i+(t>0?-.1:.1),l*.55,o-a*.3),n.add(f);const d=Math.floor(l/3.2)-1,m=Math.floor(a/4.5);for(let _=0;_<d;_++)for(let g=0;g<m;g++){const p=2+_*3,v=o-a/2+2+g*(a-2)/Math.max(m-1,1),x=K3(e,i+(t>0?-.05:.05),p,v,r);n.add(x)}})}function gy(n,e,t){const i=new Qr;i.add(Object.assign(new pt(new wi(2,2.3,.4,24),e.stone),{position:new O(0,.2,0)})),i.add(Object.assign(new pt(new wi(.3,.5,3,10),e.stone),{position:new O(0,1.9,0)})),i.add(Object.assign(new pt(new wi(1.5,.8,.3,24),e.stone),{position:new O(0,3.4,0)})),i.position.set(0,0,t),n.add(i)}function Z3(n,e){const t=new Qr,i=(s,o,a,l)=>{const u=new pt(s,o);return u.position.y=a,t.add(u),u};i(new wi(10.5,10.5,.55,64),e.stone,.28),i(new wi(10,10,.08,64),e.waterMat,.62);const r=new pt(new Ch(10.5,.5,8,64),e.stone);r.rotation.x=Math.PI/2,r.position.y=.85,t.add(r),i(new wi(3.5,4,1.4,32),e.stone,1.2),i(new wi(.7,1,7,16),e.stone,5.6),i(new wi(1.9,1.5,.9,16),e.stone,9.85),i(new wi(.5,.7,4,12),e.stone,12.6),i(new fs(1.3,16,12),e.gold,15.4);for(let s=0;s<4;s++){const o=s/4*Math.PI*2,a=new pt(new fs(.75,8,6),e.stone);a.position.set(Math.cos(o)*5.5,2.3,Math.sin(o)*5.5),a.scale.set(1.6,1,1.3),t.add(a)}return[4,6.5].forEach((s,o)=>{const a=new pt(new Ch(s,.3,7,32),e.stone);a.rotation.x=Math.PI/2,a.position.y=3.2+o*3.5,t.add(a)}),t.position.set(0,0,$o),n.add(t),t}function Q3(n){const r=new Float32Array(840),s=[];for(let c=0;c<10;c++){const h=c/10*Math.PI*2,f=Math.cos(h)*7.5+0,d=Math.sin(h)*7.5+$o;for(let m=0;m<28;m++){const _=c*28+m,g=m/28;r[_*3]=f+Math.cos(h)*g*4*.3,r[_*3+1]=1+Math.sin(g*Math.PI)*5,r[_*3+2]=d+Math.sin(h)*g*4*.3,s.push({jIdx:c,pIdx:m,life:g,speed:.012+Math.random()*.006})}}const o=new Oi;o.setAttribute("position",new mr(r,3));const a=new FE({color:8965358,size:.18,transparent:!0,opacity:.75,sizeAttenuation:!0}),l=new g3(o,a);n.add(l);function u(c){const h=o.attributes.position;for(let f=0;f<280;f++){const d=s[f];d.life+=d.speed,d.life>1&&(d.life-=1);const m=d.jIdx,_=m/10*Math.PI*2,g=Math.cos(_)*7.5,p=Math.sin(_)*7.5+$o,v=d.life;h.array[f*3]=g+Math.cos(_)*v*4,h.array[f*3+1]=1.2+Math.sin(v*Math.PI)*(4.5+Math.sin(c*.8+m)*.4),h.array[f*3+2]=p+Math.sin(_)*v*4}h.needsUpdate=!0}return{update:u}}function J3(n,e){const t=[],i=[e.coat1,e.coat2,e.coat3];function r(o,a,l,u){const c=new Qr,h=i[Math.floor(Math.random()*3)],f=.95+Math.random()*.2,d=new pt(new wi(.12,.14,f,6),h);d.position.y=f/2;const m=new pt(new fs(.17,8,6),e.skinMat);return m.position.y=f+.19,c.add(d,m),c.position.set(o+(Math.random()-.5)*2,.02,a),u<0&&(c.rotation.y=Math.PI),n.add(c),{mesh:c,speed:l,dir:u,bobPhase:Math.random()*Math.PI*2}}for(let o=0;o<8;o++){const a=70-o*18;t.push(r(-Cg+(Math.random()-.5)*3,a,.04+Math.random()*.03,-1))}for(let o=0;o<8;o++){const a=-70+o*18;t.push(r(Cg+(Math.random()-.5)*3,a,.035+Math.random()*.03,1))}function s(o){t.forEach(a=>{a.bobPhase+=o*3.5,a.mesh.position.z+=a.speed*a.dir,a.mesh.position.y=.02+Math.abs(Math.sin(a.bobPhase))*.025,a.dir<0&&a.mesh.position.z<$o-5&&(a.mesh.position.z=80),a.dir>0&&a.mesh.position.z>80&&(a.mesh.position.z=$o-5)})}return{update:s}}function eI(n){const e=new M3(16775408,2.2);e.position.set(80,180,-60),n.add(e),n.add(new x3(8961006,13150328,.45)),n.add(new E3(10139852,.25));const t=new uy(13938487,5,38);t.position.set(0,8,$o),n.add(t);const i=new uy(15585386,3,20);return i.position.set(0,16,$o),n.add(i),{rotLight:t,goldLight:i}}function tI(n,e,t){const i=new $e(window.innerWidth,window.innerHeight),r=new R3(n);r.addPass(new b3(e,t));const s=new yl(i,.55,.4,.68);r.addPass(s);const o=new Ag(W3);r.addPass(o);const a=new Ag(X3);return r.addPass(a),r.addPass(new L3),{composer:r,bloom:s,caPass:o,grainPass:a}}function nI(n){const e=new p3({canvas:n,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.setSize(window.innerWidth,window.innerHeight),e.toneMapping=K_,e.toneMappingExposure=1.05;const t=new m3;t.fog=new a0(13943984,55,240);const i=new Ei(65,window.innerWidth/window.innerHeight,.1,600);i.position.set(0,1.65,75);const r=Y3();j3(t),q3(t,r),$3(t,r),my(t,r,-1),my(t,r,1),gy(t,r,14),gy(t,r,-22);const s=Z3(t,r),o=Q3(t),a=J3(t,r),l=eI(t),{composer:u,bloom:c,caPass:h,grainPass:f}=tI(e,t,i),d=I3(),m={progress:0},_=new O,g=Ye.create({trigger:"#scroll-space",start:"top top",end:"bottom bottom",onUpdate:A=>{m.progress=A.progress}}),p=new kE;let v;function x(){v=requestAnimationFrame(x);const A=p.getDelta(),w=p.getElapsedTime(),E=m.progress,R=N3(d,E);i.position.copy(R.pos);const M=E<.86?Math.sin(E*180*Math.PI)*.03:0;i.position.y+=M,_.lerp(R.look,.06),i.lookAt(_),t.fog.near=Hd.lerp(55,30,E),t.fog.far=Hd.lerp(240,120,Math.min(E/.85,1)),l.rotLight.intensity=5+Math.sin(w*1.8)*1,l.goldLight.intensity=3+Math.sin(w*2.2+1)*.6,c.strength=Hd.lerp(.35,.9,Math.min(E/.8,1)),h.uniforms.uAmount.value=.002+Math.sin(w*.5)*.001,f.uniforms.uTime.value=w*8,a.update(A),o.update(w),s.rotation.y+=.001,u.render()}x();const y=()=>{const A=window.innerWidth,w=window.innerHeight;i.aspect=A/w,i.updateProjectionMatrix(),e.setSize(A,w),u.setSize(A,w)};return window.addEventListener("resize",y),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",y),g.kill(),e.dispose()}}function iI(){const n=lr.useRef();return lr.useEffect(()=>{Kn.from(n.current,{opacity:0,y:-16,duration:1.2,delay:.5,ease:"power2.out"});const e=()=>{var t;(t=n.current)==null||t.classList.toggle("scrolled",window.scrollY>80)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),Ge.jsxs("nav",{ref:n,style:yp.nav,children:[Ge.jsx("style",{children:rI}),Ge.jsxs("a",{href:"#",style:yp.logo,children:["Agencia",Ge.jsx("em",{style:yp.em,children:"Service"})]}),Ge.jsx("a",{href:"#contact-overlay",className:"nav-cta",children:"Audit IA gratuit"})]})}const yp={nav:{position:"fixed",top:0,left:0,right:0,zIndex:900,padding:"22px 52px",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"background 0.4s, padding 0.4s"},logo:{fontFamily:"var(--serif)",fontSize:"1.45rem",fontWeight:300,color:"rgba(250,244,236,0.9)",letterSpacing:"0.08em",textDecoration:"none"},em:{fontStyle:"italic",color:"var(--or-l)"}},rI=`
  nav.scrolled {
    background: rgba(10,10,10,0.82) !important;
    backdrop-filter: blur(12px);
    padding: 14px 52px !important;
    border-bottom: 1px solid rgba(212,175,55,0.12);
  }
  .nav-cta {
    font-family: var(--sans); font-size: 0.66rem; font-weight: 400;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: var(--or); border: 1px solid rgba(212,175,55,0.4);
    padding: 10px 22px; transition: background 0.3s, color 0.3s;
    text-decoration: none;
  }
  .nav-cta:hover { background: var(--or); color: var(--onyx); }
  @media(max-width:600px){ nav { padding: 16px 20px !important; } }
`,sI=[{num:"01",name:"Web Élite",desc:"Sites React d'exception. Animations 3D, performance maximale, design sur mesure."},{num:"02",name:"Voice-Agent IA",desc:"Agents vocaux intelligents 24/7. Qualification prospects, service client automatisé."},{num:"03",name:"VTO Jewelry",desc:"Virtual Try-On IA : essayage de bijoux sur smartphone. Conversion x3."}],oI=[{value:"+18%",label:"Taux de conversion"},{value:"24/7",label:"Disponibilité IA"},{value:"+340%",label:"Engagement digital"}];function aI(){const n=lr.useRef(),e=lr.useRef(),t=lr.useRef(),i=lr.useRef();return lr.useEffect(()=>{Ye.create({trigger:"#scroll-space",start:"12% top",end:"38% top",onEnter:()=>va(n.current),onLeave:()=>xa(n.current),onEnterBack:()=>va(n.current),onLeaveBack:()=>xa(n.current)}),Ye.create({trigger:"#scroll-space",start:"14% top",onEnter:()=>{Kn.from(".srv-card-ov",{opacity:0,x:60,stagger:.12,duration:.85,ease:"power2.out"})}}),Ye.create({trigger:"#scroll-space",start:"42% top",end:"65% top",onEnter:()=>va(e.current),onLeave:()=>xa(e.current),onEnterBack:()=>va(e.current),onLeaveBack:()=>xa(e.current)}),Ye.create({trigger:"#scroll-space",start:"44% top",onEnter:()=>{Kn.from(".stat-val-ov",{opacity:0,scale:.8,stagger:.15,duration:.9,ease:"back.out(1.5)"})}}),Ye.create({trigger:"#scroll-space",start:"82% top",end:"100% top",onEnter:()=>va(t.current),onLeave:()=>xa(t.current),onEnterBack:()=>va(t.current),onLeaveBack:()=>xa(t.current)}),Ye.create({trigger:"#scroll-space",start:"88% top",onEnter:()=>{Kn.to(i.current,{opacity:1,y:0,duration:1.4,ease:"power3.out"})},onLeaveBack:()=>{Kn.to(i.current,{opacity:0,y:30,duration:.6})}}),Ye.create({trigger:"#scroll-space",start:"84% top",onEnter:()=>{Kn.from(".ct-inner-ov > *",{opacity:0,y:28,stagger:.12,duration:.9,ease:"power2.out"})}})},[]),Ge.jsxs(Ge.Fragment,{children:[Ge.jsx("style",{children:lI}),Ge.jsxs("div",{ref:n,className:"overlay-panel",style:{...ql.panel,top:"50%",transform:"translateY(-50%)",left:"auto",right:40},children:[Ge.jsx("p",{className:"ov-label",children:"Nos expertises"}),Ge.jsxs("h2",{className:"ov-title",children:["Ce que nous",Ge.jsx("br",{}),Ge.jsx("em",{children:"faisons pour vous"})]}),Ge.jsx("div",{className:"ov-divider"}),sI.map(r=>Ge.jsxs("article",{className:"srv-card-ov",children:[Ge.jsx("span",{className:"srv-num-ov",children:r.num}),Ge.jsx("h3",{className:"srv-name-ov",children:r.name}),Ge.jsx("p",{className:"srv-desc-ov",children:r.desc})]},r.num))]}),Ge.jsxs("div",{ref:e,className:"overlay-panel",style:{...ql.panel,bottom:60,left:"50%",transform:"translateX(-50%)",textAlign:"center"},children:[Ge.jsx("p",{className:"ov-label",children:"Résultats clients"}),Ge.jsx("div",{className:"stats-row-ov",children:oI.map(r=>Ge.jsxs("div",{className:"stat-item-ov",children:[Ge.jsx("span",{className:"stat-val-ov",children:r.value}),Ge.jsx("span",{className:"stat-label-ov",children:r.label})]},r.label))})]}),Ge.jsxs("div",{ref:i,style:ql.title,children:[Ge.jsx("p",{className:"title-eyebrow",children:"Aix-en-Provence"}),Ge.jsxs("h1",{className:"title-main",children:["Agencia",Ge.jsx("em",{children:"Service"})]}),Ge.jsx("p",{className:"title-tagline",children:"L'IA au service du prestige aixois."})]}),Ge.jsx("div",{ref:t,className:"overlay-panel",id:"contact-overlay",style:{...ql.panel,bottom:48,right:52,textAlign:"right"},children:Ge.jsxs("div",{className:"ct-inner-ov",children:[Ge.jsx("p",{className:"ov-label",children:"Parlons-nous"}),Ge.jsxs("h2",{className:"ov-title",style:{fontSize:"clamp(1.3rem, 2.5vw, 2rem)"},children:["Demandez votre",Ge.jsx("br",{}),Ge.jsx("em",{children:"audit IA gratuit."})]}),Ge.jsx("p",{className:"ct-sub-ov",children:"30 minutes · Sans engagement · Réponse 24h"}),Ge.jsx("a",{href:"mailto:agenciaserviceaix@gmail.com?subject=Demande%20audit%20IA%20gratuit",className:"ct-btn-ov",children:"Réserver l'audit"})]})}),Ge.jsxs("div",{style:ql.scrollHint,children:[Ge.jsx("span",{className:"hint-label",children:"Scrollez pour découvrir"}),Ge.jsx("span",{className:"hint-arrow"})]})]})}function va(n){n&&(Kn.killTweensOf(n),Kn.to(n,{autoAlpha:1,duration:.7,ease:"power2.out"}))}function xa(n){n&&(Kn.killTweensOf(n),Kn.to(n,{autoAlpha:0,duration:.5,ease:"power2.in"}))}const ql={panel:{position:"fixed",zIndex:800,maxWidth:400,pointerEvents:"none",visibility:"hidden",opacity:0},title:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:800,opacity:0,translateY:30,pointerEvents:"none"},scrollHint:{position:"fixed",bottom:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,zIndex:800,pointerEvents:"none"}},lI=`
  /* Panels */
  .overlay-panel {
    padding: 32px 36px;
    background: rgba(10,10,8,0.72);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 2px;
  }

  .ov-label {
    font-family: var(--sans); font-size: 0.58rem; font-weight: 400;
    letter-spacing: 0.42em; text-transform: uppercase;
    color: var(--or); margin-bottom: 14px;
  }
  .ov-title {
    font-family: var(--serif);
    font-size: clamp(1.5rem, 2.5vw, 2.1rem);
    font-weight: 300; line-height: 1.25;
    color: var(--creme); margin-bottom: 20px;
  }
  .ov-title em { font-style: italic; color: var(--or-l); }

  .ov-divider {
    width: 40px; height: 1px;
    background: var(--or); opacity: 0.4;
    margin-bottom: 22px;
  }

  /* Service cards */
  .srv-card-ov {
    padding: 16px 0;
    border-bottom: 1px solid rgba(212,175,55,0.1);
  }
  .srv-card-ov:last-child { border-bottom: none; }
  .srv-num-ov {
    font-family: var(--serif); font-size: 0.65rem;
    color: var(--or); letter-spacing: 0.2em; opacity: 0.6;
    display: block; margin-bottom: 4px;
  }
  .srv-name-ov {
    font-family: var(--serif); font-size: 1.1rem; font-weight: 400;
    color: var(--creme); margin-bottom: 6px;
  }
  .srv-desc-ov {
    font-family: var(--sans); font-size: 0.78rem; font-weight: 300;
    color: rgba(190,175,145,0.8); line-height: 1.7;
  }

  /* Stats */
  .stats-row-ov {
    display: flex; gap: 48px; justify-content: center;
    flex-wrap: wrap; margin-top: 16px;
  }
  .stat-item-ov { text-align: center; }
  .stat-val-ov {
    font-family: var(--serif); font-size: 3.2rem; font-weight: 300;
    color: var(--or-l); line-height: 1; display: block;
  }
  .stat-label-ov {
    font-family: var(--sans); font-size: 0.6rem; font-weight: 300;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: rgba(190,170,120,0.55); margin-top: 8px; display: block;
  }

  /* Titre final */
  .title-eyebrow {
    font-family: var(--sans); font-size: 0.62rem; font-weight: 300;
    letter-spacing: 0.42em; text-transform: uppercase;
    color: var(--or); margin-bottom: 16px;
  }
  .title-main {
    font-family: var(--serif);
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 300; line-height: 1; letter-spacing: 0.06em;
    color: var(--creme);
    text-shadow: 0 2px 40px rgba(212,175,55,0.3);
  }
  .title-main em { font-style: italic; color: var(--or-l); }
  .title-tagline {
    font-family: var(--serif); font-size: 1.1rem; font-style: italic;
    color: rgba(212,175,55,0.7); margin-top: 18px; letter-spacing: 0.04em;
  }

  /* Contact */
  .ct-inner-ov { display: flex; flex-direction: column; align-items: flex-end; gap: 14px; }
  .ct-sub-ov {
    font-family: var(--sans); font-size: 0.72rem; font-weight: 300;
    color: rgba(190,175,145,0.75); letter-spacing: 0.1em;
  }
  .ct-btn-ov {
    display: inline-block;
    border: 1px solid var(--or); color: var(--or-l);
    font-family: var(--sans); font-size: 0.65rem; font-weight: 400;
    letter-spacing: 0.28em; text-transform: uppercase;
    padding: 14px 28px;
    transition: background 0.3s, color 0.3s;
    pointer-events: all;
    text-decoration: none;
  }
  .ct-btn-ov:hover { background: var(--or); color: var(--onyx); }

  /* Scroll hint */
  .hint-label {
    font-family: var(--sans); font-size: 0.55rem; font-weight: 300;
    letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(212,175,55,0.4);
  }
  .hint-arrow {
    display: block; width: 1px; height: 44px;
    background: linear-gradient(to bottom, rgba(212,175,55,0.4), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
    40%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
    80%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
    100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
  }

  @media(max-width:768px) {
    .overlay-panel { max-width: calc(100vw - 32px); right: 16px !important; left: 16px !important; }
    .stats-row-ov { gap: 24px; }
    .stat-val-ov { font-size: 2.4rem; }
    .title-main { font-size: 3rem; }
  }
`;Kn.registerPlugin(Ye);function uI(){const n=lr.useRef();return lr.useEffect(()=>{const e=new MA({duration:1.4,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),smoothWheel:!0});Kn.ticker.add(i=>e.raf(i*1e3)),Kn.ticker.lagSmoothing(0),e.on("scroll",Ye.update);const t=nI(n.current);return()=>{t(),e.destroy(),Kn.ticker.remove(i=>e.raf(i*1e3))}},[]),Ge.jsxs(Ge.Fragment,{children:[Ge.jsx("canvas",{ref:n,style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,display:"block"}}),Ge.jsx("div",{id:"scroll-space"}),Ge.jsx(iI,{}),Ge.jsx(aI,{})]})}Sp.createRoot(document.getElementById("root")).render(Ge.jsx(uI,{}));
