!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var r=e.JIL,t=e.JIL={};n(t),t.noConflict=function(){return e.JIL=r,t}}())}(this,(function(e){"use strict";var n=Function("return this")();function r(e,n){return null==e||"hasOwnProperty"in e&&"function"==typeof e.hasOwnProperty?e.hasOwnProperty(n):Object.prototype.hasOwnProperty.call(e,n)}function t(e,n){return null==e||"isPrototypeOf"in e&&"function"==typeof e.isPrototypeOf?e.isPrototypeOf(n):Object.prototype.isPrototypeOf.call(e,n)}function a(e){var n=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);if(null==n)throw new Error(e);var r=new Error(n[2]);throw r.name=n[1],r}function i(e){return"boolean"==typeof e||e instanceof Boolean}function l(e){return"number"==typeof e||e instanceof Number}function o(e){return("number"==typeof e||e instanceof Number)&&isFinite(e.valueOf())}function u(e){return("number"==typeof e||e instanceof Number)&&isNaN(e.valueOf())}function c(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e)}function s(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e&&e>=0)}function g(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e&&e>=1)}function f(e){return"string"==typeof e||e instanceof String}var b=/^\s*$/;function p(e){return("string"==typeof e||e instanceof String)&&!b.test(e.valueOf())}function d(e,n){return("string"==typeof e||e instanceof String)&&n.test(e.valueOf())}var v=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function m(e){return d(e,v)}var x=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function h(e){return d(e,x)}function y(e){return"function"==typeof e}function w(e){return"function"==typeof e&&(null==e.name||""===e.name)}function I(e){return"function"==typeof e&&null!=e.name&&""!==e.name}function O(e){return"function"==typeof e&&/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString())}function F(e){return"function"==typeof e&&!/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString())}function S(e){return null!=e&&"object"==typeof e}function A(e){return null!=e&&"object"==typeof e&&Object.getPrototypeOf(e)===Object.prototype}function N(e){return null!=e&&"object"==typeof e&&!(e instanceof Object)}var j=Array.isArray;function V(e,n,r){if(j(e)){for(var t=0,a=e.length;t<a;t++)if(void 0===e[t])return!1;return!(null!=n&&e.length<n)&&!(null!=r&&e.length>r)}return!1}function E(e,n,r,t){if(j(e))try{for(var a=0,i=e.length;a<i;a++)if(0==n(e[a]))return!1;return!(null!=r&&e.length<r)&&!(null!=t&&e.length>t)}catch(e){}return!1}function k(e){return e instanceof Date}function P(e){return e instanceof Error}function R(e){return null!=e&&"function"==typeof e.then}function M(e){return e instanceof RegExp}function C(e,n){return n.indexOf(e)>=0}function J(e){return f(e)&&(Pr.hasOwnProperty(e)||/^#[a-fA-F0-9]{6}$/.test(e)||/^#[a-fA-F0-9]{8}$/.test(e)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(e)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(e))}var L=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function $(e){return d(e,L)}var z=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function T(e){if(!d(e,z)||""===e)return!1;try{return new URL(e,"file://"),!0}catch(e){return!1}}var q=!1,B=!0;function D(e,n,r,t,i){if(null==n){if(t)return n;a("MissingArgument: no "+Nr(e)+" given")}else if(r(n))switch(!0){case n instanceof Boolean:case n instanceof Number:case n instanceof String:return n.valueOf();default:return n}else a("InvalidArgument: the given "+Nr(e)+" is no valid "+Nr(i))}function Z(e,n,r){var t=function(t,a){return D(t,a,e,n,r)},a=e.name;return null!=a&&/^ValueIs/.test(a)?_(t,a.replace(/^ValueIs/,n?"allow":"expect")):t}function _(e,n){if(null==e&&a("MissingArgument: no function given"),"function"!=typeof e&&a("InvalidArgument: the given 1st Argument is not a JavaScript function"),null==n&&a("MissingArgument: no desired name given"),"string"==typeof n||n instanceof String||a("InvalidArgument: the given desired name is not a string"),e.name===n)return e;try{if(Object.defineProperty(e,"name",{value:n}),e.name===n)return e}catch(e){}return new Function("originalFunction","return function "+n+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(e)}function U(e,n){if(null!=n)return n.valueOf();a("MissingArgument: no "+Nr(e)+" given")}var H=U,W=Z(i,B,"boolean value"),G=W,K=Z(i,q,"boolean value"),Q=K,X=Z(l,B,"numeric value"),Y=X,ee=Z(l,q,"numeric value"),ne=ee,re=Z(o,B,"finite numeric value"),te=re,ae=Z(o,q,"finite numeric value"),ie=ae,le=Z(u,B,"NaN value"),oe=le,ue=Z(u,q,"NaN value"),ce=ue;function se(e,n,r,t,a,i){return null==n?n:be(e,n,r,t,a,i)}var ge=se;function fe(e,n,r,t,i,l){if(ee(e,n),isNaN(n)&&a("InvalidArgument: the given "+Nr(e)+" is not-a-number"),null==i&&(i=!0),null==l&&(l=!0),null!=r&&isFinite(r)){if(null!=t&&isFinite(t)){if(n<r||!i&&n===r||n>t||!l&&n===t)throw new RangeError("the given "+Nr(e)+" ("+n+") is outside the allowed range ("+r+"..."+t+")")}else if(n<r||!i&&n===r)throw new RangeError("the given "+Nr(e)+" is below the allowed minimum ("+n+" "+(i?"<":"<=")+" "+r+")")}else if(null!=t&&isFinite(t)&&(n>t||!l&&n===t))throw new RangeError("the given "+Nr(e)+" exceeds the allowed maximum ("+n+" "+(l?">":">=")+" "+t+")");return n.valueOf()}var be=fe,pe=Z(c,B,"integral numeric value"),de=pe,ve=Z(c,q,"integral numeric value"),me=ve;function xe(e,n,r,t){return null==n?n:we(e,n,r,t)}var he=xe;function ye(e,n,r,t){if(ve(e,n),isNaN(n)&&a("InvalidArgument: the given "+Nr(e)+" is not-a-number"),null!=r&&isFinite(r)){if(null!=t&&isFinite(t)){if(n<r||n>t)throw new RangeError("the given "+Nr(e)+" ("+n+") is outside the allowed range ("+r+"..."+t+")")}else if(n<r)throw new RangeError("the given "+Nr(e)+" is below the allowed minimum ("+n+" < "+r+")")}else if(null!=t&&isFinite(t)&&n>t)throw new RangeError("the given "+Nr(e)+" exceeds the allowed maximum ("+n+" > "+t+")");return n.valueOf()}var we=ye,Ie=Z(s,B,"ordinal number"),Oe=Ie,Fe=Z(s,q,"ordinal number"),Se=Fe,Ae=Z(g,B,"cardinal number"),Ne=Ae,je=Z(g,q,"cardinal number"),Ve=je,Ee=Z(f,B,"literal string"),ke=Ee,Pe=Z(f,q,"literal string"),Re=Pe,Me=Z(p,B,"non-empty literal string"),Ce=Me,Je=Z(p,q,"non-empty literal string"),Le=Je;function $e(e,n,r){return null==n?n:qe(e,n,r)}var ze=$e;function Te(e,n,r){if(Pe(e,n),r.test(n))return n.valueOf();a("InvalidArgument: the given "+Nr(e)+" does not match the specified pattern")}var qe=Te,Be=Z(m,B,"literal text"),De=Be,Ze=Z(m,q,"literal text"),_e=Ze,Ue=Z(h,B,"single line of text"),He=Ue,We=Z(h,q,"single line of text"),Ge=We,Ke=Z(y,B,"JavaScript function"),Qe=Ke,Xe=Z(y,q,"JavaScript function"),Ye=Xe,en=Z(w,B,"anonymous JavaScript function"),nn=en,rn=Z(w,q,"anonymous JavaScript function"),tn=rn,an=Z(I,B,"named JavaScript function"),ln=an,on=Z(I,q,"named JavaScript function"),un=on,cn=Z(O,B,"native JavaScript function"),sn=cn,gn=Z(O,q,"native JavaScript function"),fn=gn,bn=Z(F,B,"scripted JavaScript function"),pn=bn,dn=Z(F,q,"scripted JavaScript function"),vn=dn,mn=Z(S,B,"JavaScript object"),xn=mn,hn=Z(S,q,"JavaScript object"),yn=hn,wn=Z(A,B,'"plain" JavaScript object'),In=wn,On=Z(A,q,'"plain" JavaScript object'),Fn=On,Sn=Z(N,B,'"vanilla" JavaScript object'),An=Sn,Nn=Z(N,q,'"vanilla" JavaScript object'),jn=Nn;function Vn(e,n){return null==n?n:Pn(e,n)}var En=Vn;function kn(e,n){if(null==n&&a("MissingArgument: no "+Nr(e)+" given"),j(n))return n;a("InvalidArgument: the given "+Nr(e)+" is no JavaScript array")}var Pn=kn;function Rn(e,n,r,t,a){return null==n?n:Jn(e,n,r,t,a)}var Mn=Rn;function Cn(e,n,r,t,i){if(null==n&&a("MissingArgument: no "+Nr(e)+" given"),V(n,t,i))return n;a("InvalidArgument: the given "+Nr(e)+" is "+(null==r?"either not a list or contains an invalid number of elements":"no "+Nr(r)))}var Jn=Cn;function Ln(e,n,r,t,a,i){return null==n?n:Tn(e,n,r,t,a,i)}var $n=Ln;function zn(e,n,r,t,i,l){if(null==n&&a("MissingArgument: no "+Nr(e)+" given"),E(n,r,i,l))return n;a("InvalidArgument: the given "+Nr(e)+" is "+(null==t?"either not a list or contains invalid elements":"no "+Nr(t)))}var Tn=zn;function qn(e,n,r,t){return null==n?n:Zn(e,n,r,t)}var Bn=qn;function Dn(e,n,r,t){return null==n&&a("MissingArgument: no "+Nr(e)+" given"),n instanceof r||a("InvalidArgument: the given "+Nr(e)+" is no "+Nr(t)),n}var Zn=Dn;function _n(e,n,r,t){return null==n?n:Wn(e,n,r,t)}var Un=_n;function Hn(e,n,r,t){if(null==n&&a("MissingArgument: no "+Nr(e)+" given"),r.isPrototypeOf(n))return n;a("InvalidArgument: the given "+Nr(e)+" is no "+Nr(t))}var Wn=Hn,Gn=Z(k,B,"JavaScript Date object"),Kn=Gn,Qn=Z(k,q,"JavaScript Date object"),Xn=Qn,Yn=Z(P,B,"JavaScript Error object"),er=Yn,nr=Z(P,q,"JavaScript Error object"),rr=nr,tr=Z(R,B,'JavaScript Promise (or "Thenable") object'),ar=tr,ir=Z(R,q,'JavaScript Promise (or "Thenable") object'),lr=ir,or=Z(M,B,"JavaScript RegExp object"),ur=or,cr=Z(M,q,"JavaScript RegExp object"),sr=cr;function gr(e,n,r){return null==n?n:pr(e,n,r)}var fr=gr;function br(e,n,r){if(null==n&&a("MissingArgument: no "+Nr(e)+" given"),C(n,r))return null==n||"function"!=typeof n.valueOf?n:n.valueOf();a("InvalidArgument: the given "+Nr(e)+" is not among the supported values")}var pr=br,dr=Z(J,B,"valid CSS color specification"),vr=dr,mr=Z(J,q,"valid CSS color specification"),xr=mr,hr=Z($,B,"valid EMail address"),yr=hr,wr=Z($,q,"valid EMail address"),Ir=wr,Or=Z(T,B,"valid URL"),Fr=Or,Sr=Z(T,q,"valid URL"),Ar=Sr;function Nr(e){return e.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,(function(e){return"\\"===e?"\\\\":e})).replace(/[\x00-\x1f\x7f-\x9f]/g,(function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var n=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}}))}function jr(e,n){void 0===n&&(n='"');return e.replace("'"===n?/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g:/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,(function(e){switch(e){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return e}})).replace(/[\x00-\x1f\x7f-\x9f]/g,(function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var n=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(n.length)+n}}))}function Vr(e,n){return n=(n||"").trim()||"<br/>",e.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g,(function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&apos;";case"\b":return"&#92;b";case"\f":return"&#92;f";case"\n":return n;case"\r":return"&#92;r";case"\t":return"&#92;t";case"\v":return"&#92;v";case"\\":return"&#92;";default:var r=e.charCodeAt(0).toString(16);return"&#x0000".substring(3,7-r.length)+r+";"}}))}function Er(e,n){if(e===n)return!1;var r=typeof e;if(r!==typeof n)return!0;switch(r){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(e)!==isNaN(n)||Math.abs(e-n)>Number.EPSILON;case"object":return null==e||(null==n||(Array.isArray(e)?function(e,n){if(!Array.isArray(n))return!0;if(e.length!==n.length)return!0;for(var r=0,t=e.length;r<t;r++)if(Er(e[r],n[r]))return!0;return!1}(e,n):function(e,n){if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(n))return!0;for(var r in e)if(!(r in n))return!0;for(var r in n){if(!(r in e))return!0;if(Er(e[r],n[r]))return!0}return!1}(e,n)));default:return!0}return!0}function kr(e){return/^\s*$/.test(e)}var Pr={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"};function Rr(e){var n=e.toLowerCase();if(Pr.hasOwnProperty(n)&&(e=Pr[n]),/^#[a-fA-F0-9]{6}$/.test(e))return e+"FF";if(/^#[a-fA-F0-9]{8}$/.test(e))return e;var r="0123456789ABCDEF";function t(e){return e>255&&(e=255),r[Math.trunc(e/16)]+r[e%16]}var i=/^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);if(null!=i)return"#"+t(parseInt(i[1],10))+t(parseInt(i[2],10))+t(parseInt(i[3],10))+"FF";if(null!=(i=/^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e)))return"#"+t(parseInt(i[1],10))+t(parseInt(i[2],10))+t(parseInt(i[3],10))+t(parseFloat(i[4]));a("InvalidArgument: the given Value is not a valid CSS Color specification")}e.ColorSet=Pr,e.FunctionWithName=_,e.HTMLsafe=Vr,e.HexColor=Rr,e.MarkDownSafe=function(e,n){return Vr(e,n).replace(/:/g,"&#58;")},e.ObjectIsEmpty=function(e){for(var n in hn("candidate",e),e)if(r(e,n))return!1;return!0},e.ObjectMergedWith=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];for(var t=0,i=n.length;t<i;t++){var l=n[t];if(null!=l)if("object"==typeof l)for(var o in l){var u=Object.getOwnPropertyDescriptor(l,o);null!=u&&Object.defineProperty(e,o,u)}else a("InvalidArgument: argument #"+(t+1)+" is not an object")}return e},e.Object_hasOwnProperty=r,e.Object_isPrototypeOf=t,e.Object_propertyIsEnumerable=function(e,n){return null==e||"propertyIsEnumerable"in e&&"function"==typeof e.propertyIsEnumerable?e.propertyIsEnumerable(n):Object.prototype.propertyIsEnumerable.call(e,n)},e.Object_toLocaleString=function(e){return null==e||"toLocaleString"in e&&"function"==typeof e.toLocaleString?e.toLocaleString():Object.prototype.toString.call(e)},e.Object_toString=function(e){return null==e||"toString"in e&&"function"==typeof e.toString?e.toString():Object.prototype.toString.call(e)},e.Object_valueOf=function(e){return null==e||"valueOf"in e&&"function"==typeof e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)},e.RGBAColor=function(e){var n=e.toLowerCase();if(Pr.hasOwnProperty(n))return Pr[n];if(/^#[a-fA-F0-9]{6}$/.test(e))return"rgba("+parseInt(e.slice(1,3),16)+","+parseInt(e.slice(3,5),16)+","+parseInt(e.slice(5,7),16)+", 1)";if(/^#[a-fA-F0-9]{8}$/.test(e))return"rgba("+parseInt(e.slice(1,3),16)+","+parseInt(e.slice(3,5),16)+","+parseInt(e.slice(5,7),16)+","+parseInt(e.slice(7),16)/255+")";var r=/^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);if(null!=r)return e.slice(0,e.length-1)+",1)";if(null!=(r=/^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(e)))return e;a("InvalidArgument: the given Value is not a valid CSS Color specification")},e.StringIsEmpty=kr,e.StringIsNotEmpty=function(e){return!kr(e)},e.ValidatorForClassifier=Z,e.ValueExists=function(e){return null!=e},e.ValueInheritsFrom=function(e,n){return t(n,e)},e.ValueIsAnonymousFunction=w,e.ValueIsArray=j,e.ValueIsBoolean=i,e.ValueIsCardinal=g,e.ValueIsColor=J,e.ValueIsDate=k,e.ValueIsEMailAddress=$,e.ValueIsError=P,e.ValueIsFiniteNumber=o,e.ValueIsFunction=y,e.ValueIsInstanceOf=function(e,n){return e instanceof n},e.ValueIsInteger=c,e.ValueIsIntegerInRange=function(e,n,r){if(!c(e)||isNaN(e))return!1;if(o(n)){if(o(r)){if(e<n||e>r)return!1}else if(e<n)return!1}else if(o(r)&&e>r)return!1;return!0},e.ValueIsList=V,e.ValueIsListSatisfying=E,e.ValueIsMissing=function(e){return null==e},e.ValueIsNaN=u,e.ValueIsNamedFunction=I,e.ValueIsNativeFunction=O,e.ValueIsNonEmptyString=p,e.ValueIsNumber=l,e.ValueIsNumberInRange=function(e,n,r,t,a){if(void 0===t&&(t=!0),void 0===a&&(a=!0),!l(e)||isNaN(e))return!1;if(o(n)){if(o(r)){if(e<n||!t&&e===n||e>r||!a&&e===r)return!1}else if(e<n||!t&&e===n)return!1}else if(o(r)&&(e>r||!a&&e===r))return!1;return!0},e.ValueIsObject=S,e.ValueIsOneOf=C,e.ValueIsOrdinal=s,e.ValueIsPlainObject=A,e.ValueIsPromise=R,e.ValueIsRegExp=M,e.ValueIsScriptedFunction=F,e.ValueIsString=f,e.ValueIsStringMatching=d,e.ValueIsText=m,e.ValueIsTextline=h,e.ValueIsURL=T,e.ValueIsVanillaObject=N,e.ValuesAreEqual=function(e,n){return!Er(e,n)},e.ValuesDiffer=Er,e.acceptNil=B,e.allowAnonymousFunction=en,e.allowArray=Vn,e.allowBoolean=W,e.allowCardinal=Ae,e.allowColor=dr,e.allowDate=Gn,e.allowEMailAddress=hr,e.allowError=Yn,e.allowFiniteNumber=re,e.allowFunction=Ke,e.allowInstanceOf=qn,e.allowInteger=pe,e.allowIntegerInRange=xe,e.allowList=Rn,e.allowListSatisfying=Ln,e.allowNaN=le,e.allowNamedFunction=an,e.allowNativeFunction=cn,e.allowNonEmptyString=Me,e.allowNumber=X,e.allowNumberInRange=se,e.allowObject=mn,e.allowOneOf=gr,e.allowOrdinal=Ie,e.allowPlainObject=wn,e.allowPromise=tr,e.allowRegExp=or,e.allowScriptedFunction=bn,e.allowString=Ee,e.allowStringMatching=$e,e.allowText=Be,e.allowTextline=Ue,e.allowURL=Or,e.allowValueInheritingFrom=_n,e.allowVanillaObject=Sn,e.allowedAnonymousFunction=nn,e.allowedArray=En,e.allowedBoolean=G,e.allowedCardinal=Ne,e.allowedColor=vr,e.allowedDate=Kn,e.allowedEMailAddress=yr,e.allowedError=er,e.allowedFiniteNumber=te,e.allowedFunction=Qe,e.allowedInstanceOf=Bn,e.allowedInteger=de,e.allowedIntegerInRange=he,e.allowedList=Mn,e.allowedListSatisfying=$n,e.allowedNaN=oe,e.allowedNamedFunction=ln,e.allowedNativeFunction=sn,e.allowedNonEmptyString=Ce,e.allowedNumber=Y,e.allowedNumberInRange=ge,e.allowedObject=xn,e.allowedOneOf=fr,e.allowedOrdinal=Oe,e.allowedPlainObject=In,e.allowedPromise=ar,e.allowedRegExp=ur,e.allowedScriptedFunction=pn,e.allowedString=ke,e.allowedStringMatching=ze,e.allowedText=De,e.allowedTextline=He,e.allowedURL=Fr,e.allowedValueInheritingFrom=Un,e.allowedVanillaObject=An,e.escaped=Nr,e.expectAnonymousFunction=rn,e.expectArray=kn,e.expectBoolean=K,e.expectCardinal=je,e.expectColor=mr,e.expectDate=Qn,e.expectEMailAddress=wr,e.expectError=nr,e.expectFiniteNumber=ae,e.expectFunction=Xe,e.expectInstanceOf=Dn,e.expectInteger=ve,e.expectIntegerInRange=ye,e.expectList=Cn,e.expectListSatisfying=zn,e.expectNaN=ue,e.expectNamedFunction=on,e.expectNativeFunction=gn,e.expectNonEmptyString=Je,e.expectNumber=ee,e.expectNumberInRange=fe,e.expectObject=hn,e.expectOneOf=br,e.expectOrdinal=Fe,e.expectPlainObject=On,e.expectPromise=ir,e.expectRegExp=cr,e.expectScriptedFunction=dn,e.expectString=Pe,e.expectStringMatching=Te,e.expectText=Ze,e.expectTextline=We,e.expectURL=Sr,e.expectValue=U,e.expectValueInheritingFrom=Hn,e.expectVanillaObject=Nn,e.expectedAnonymousFunction=tn,e.expectedArray=Pn,e.expectedBoolean=Q,e.expectedCardinal=Ve,e.expectedColor=xr,e.expectedDate=Xn,e.expectedEMailAddress=Ir,e.expectedError=rr,e.expectedFiniteNumber=ie,e.expectedFunction=Ye,e.expectedInstanceOf=Zn,e.expectedInteger=me,e.expectedIntegerInRange=we,e.expectedList=Jn,e.expectedListSatisfying=Tn,e.expectedNaN=ce,e.expectedNamedFunction=un,e.expectedNativeFunction=fn,e.expectedNonEmptyString=Le,e.expectedNumber=ne,e.expectedNumberInRange=be,e.expectedObject=yn,e.expectedOneOf=pr,e.expectedOrdinal=Se,e.expectedPlainObject=Fn,e.expectedPromise=lr,e.expectedRegExp=sr,e.expectedScriptedFunction=vn,e.expectedString=Re,e.expectedStringMatching=qe,e.expectedText=_e,e.expectedTextline=Ge,e.expectedURL=Ar,e.expectedValue=H,e.expectedValueInheritingFrom=Wn,e.expectedVanillaObject=jn,e.global=n,e.quotable=jr,e.quoted=function(e,n){return void 0===n&&(n='"'),n+jr(e,n)+n},e.rejectNil=q,e.shortHexColor=function(e){return Rr(e).slice(0,7)},e.throwError=a,e.unescaped=function(e){return e.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g,(function(e){switch(e){case"\\0":return"\0";case"\\b":return"\b";case"\\f":return"\f";case"\\n":return"\n";case"\\r":return"\r";case"\\t":return"\t";case"\\v":return"\v";case"\\'":return"'";case'\\"':return'"';case"\\\\":return"\\";default:var n=parseInt(e.slice(2),16);return String.fromCharCode(n)}}))},e.validatedArgument=D,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=javascript-interface-library.js.map
