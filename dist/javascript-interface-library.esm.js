var e=Function("return this")();function r(e,r){return null==e||"hasOwnProperty"in e&&"function"==typeof e.hasOwnProperty?e.hasOwnProperty(r):Object.prototype.hasOwnProperty.call(e,r)}function n(e,r){return null==e||"isPrototypeOf"in e&&"function"==typeof e.isPrototypeOf?e.isPrototypeOf(r):Object.prototype.isPrototypeOf.call(e,r)}function t(e,r){return null==e||"propertyIsEnumerable"in e&&"function"==typeof e.propertyIsEnumerable?e.propertyIsEnumerable(r):Object.prototype.propertyIsEnumerable.call(e,r)}function a(e){return null==e||"toString"in e&&"function"==typeof e.toString?e.toString():Object.prototype.toString.call(e)}function i(e){return null==e||"toLocaleString"in e&&"function"==typeof e.toLocaleString?e.toLocaleString():Object.prototype.toString.call(e)}function l(e){return null==e||"valueOf"in e&&"function"==typeof e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function u(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];for(var t=0,a=r.length;t<a;t++){var i=r[t];if(null!=i)if("object"==typeof i)for(var l in i){var u=Object.getOwnPropertyDescriptor(i,l);null!=u&&Object.defineProperty(e,l,u)}else o("InvalidArgument: argument #"+(t+1)+" is not an object")}return e}function o(e){var r=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);if(null==r)throw new Error(e);var n=new Error(r[2]);throw n.name=r[1],n}function c(e){return null!=e}function s(e){return null==e}function g(e){return"boolean"==typeof e||e instanceof Boolean}function f(e){return"number"==typeof e||e instanceof Number}function b(e){return("number"==typeof e||e instanceof Number)&&isFinite(e.valueOf())}function p(e){return("number"==typeof e||e instanceof Number)&&isNaN(e.valueOf())}function d(e,r,n,t,a){if(void 0===t&&(t=!0),void 0===a&&(a=!0),!f(e)||isNaN(e))return!1;if(b(r)){if(b(n)){if(e<r||!t&&e===r||e>n||!a&&e===n)return!1}else if(e<r||!t&&e===r)return!1}else if(b(n)&&(e>n||!a&&e===n))return!1;return!0}function v(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e)}function m(e,r,n){if(!v(e)||isNaN(e))return!1;if(b(r)){if(b(n)){if(e<r||e>n)return!1}else if(e<r)return!1}else if(b(n)&&e>n)return!1;return!0}function x(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e&&e>=0)}function h(e){return("number"==typeof e||e instanceof Number)&&(e=e.valueOf(),isFinite(e)&&Math.round(e)===e&&e>=1)}function w(e){return"string"==typeof e||e instanceof String}var y=/^\s*$/;function I(e){return("string"==typeof e||e instanceof String)&&!y.test(e.valueOf())}function O(e,r){return("string"==typeof e||e instanceof String)&&r.test(e.valueOf())}var F=/^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function S(e){return O(e,F)}var A=/^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function N(e){return O(e,A)}function j(e){return"function"==typeof e}function V(e){return"function"==typeof e&&(null==e.name||""===e.name)}function E(e){return"function"==typeof e&&null!=e.name&&""!==e.name}function k(e){return"function"==typeof e&&/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString())}function P(e){return"function"==typeof e&&!/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString())}function R(e){return null!=e&&"object"==typeof e}function M(e){return null!=e&&"object"==typeof e&&Object.getPrototypeOf(e)===Object.prototype}function C(e){return null!=e&&"object"==typeof e&&!(e instanceof Object)}var J=Array.isArray;function L(e,r,n){if(J(e)){for(var t=0,a=e.length;t<a;t++)if(void 0===e[t])return!1;return!(null!=r&&e.length<r)&&!(null!=n&&e.length>n)}return!1}function $(e,r,n,t){if(J(e))try{for(var a=0,i=e.length;a<i;a++)if(0==r(e[a]))return!1;return!(null!=n&&e.length<n)&&!(null!=t&&e.length>t)}catch(e){}return!1}function z(e,r){return e instanceof r}function q(e,r){return n(r,e)}function B(e){return e instanceof Date}function T(e){return e instanceof Error}function D(e){return null!=e&&"function"==typeof e.then}function Z(e){return e instanceof RegExp}function U(e,r){return r.indexOf(e)>=0}function _(e){return w(e)&&(Wn.hasOwnProperty(e)||/^#[a-fA-F0-9]{6}$/.test(e)||/^#[a-fA-F0-9]{8}$/.test(e)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(e)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(e))}var H=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;function W(e){return O(e,H)}var G=/^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;function K(e){if(!O(e,G)||""===e)return!1;try{return new URL(e,"file://"),!0}catch(e){return!1}}var Q=!1,X=!0;function Y(e,r,n,t,a){if(null==r){if(t)return r;o("MissingArgument: no "+Ln(e)+" given")}else if(n(r))switch(!0){case r instanceof Boolean:case r instanceof Number:case r instanceof String:return r.valueOf();default:return r}else o("InvalidArgument: the given "+Ln(e)+" is no valid "+Ln(a))}function ee(e,r,n){var t=function(t,a){return Y(t,a,e,r,n)},a=e.name;return null!=a&&/^ValueIs/.test(a)?re(t,a.replace(/^ValueIs/,r?"allow":"expect")):t}function re(e,r){if(null==e&&o("MissingArgument: no function given"),"function"!=typeof e&&o("InvalidArgument: the given 1st Argument is not a JavaScript function"),null==r&&o("MissingArgument: no desired name given"),"string"==typeof r||r instanceof String||o("InvalidArgument: the given desired name is not a string"),e.name===r)return e;try{if(Object.defineProperty(e,"name",{value:r}),e.name===r)return e}catch(e){}return new Function("originalFunction","return function "+r+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(e)}function ne(e,r){if(null!=r)return r.valueOf();o("MissingArgument: no "+Ln(e)+" given")}var te=ne,ae=ee(g,true,"boolean value"),ie=ae,le=ee(g,false,"boolean value"),ue=le,oe=ee(f,true,"numeric value"),ce=oe,se=ee(f,false,"numeric value"),ge=se,fe=ee(b,true,"finite numeric value"),be=fe,pe=ee(b,false,"finite numeric value"),de=pe,ve=ee(p,true,"NaN value"),me=ve,xe=ee(p,false,"NaN value"),he=xe;function we(e,r,n,t,a,i){return null==r?r:Oe(e,r,n,t,a,i)}var ye=we;function Ie(e,r,n,t,a,i){if(se(e,r),isNaN(r)&&o("InvalidArgument: the given "+Ln(e)+" is not-a-number"),null==a&&(a=!0),null==i&&(i=!0),null!=n&&isFinite(n)){if(null!=t&&isFinite(t)){if(r<n||!a&&r===n||r>t||!i&&r===t)throw new RangeError("the given "+Ln(e)+" ("+r+") is outside the allowed range ("+n+"..."+t+")")}else if(r<n||!a&&r===n)throw new RangeError("the given "+Ln(e)+" is below the allowed minimum ("+r+" "+(a?"<":"<=")+" "+n+")")}else if(null!=t&&isFinite(t)&&(r>t||!i&&r===t))throw new RangeError("the given "+Ln(e)+" exceeds the allowed maximum ("+r+" "+(i?">":">=")+" "+t+")");return r.valueOf()}var Oe=Ie,Fe=ee(v,true,"integral numeric value"),Se=Fe,Ae=ee(v,false,"integral numeric value"),Ne=Ae;function je(e,r,n,t){return null==r?r:ke(e,r,n,t)}var Ve=je;function Ee(e,r,n,t){if(Ae(e,r),isNaN(r)&&o("InvalidArgument: the given "+Ln(e)+" is not-a-number"),null!=n&&isFinite(n)){if(null!=t&&isFinite(t)){if(r<n||r>t)throw new RangeError("the given "+Ln(e)+" ("+r+") is outside the allowed range ("+n+"..."+t+")")}else if(r<n)throw new RangeError("the given "+Ln(e)+" is below the allowed minimum ("+r+" < "+n+")")}else if(null!=t&&isFinite(t)&&r>t)throw new RangeError("the given "+Ln(e)+" exceeds the allowed maximum ("+r+" > "+t+")");return r.valueOf()}var ke=Ee,Pe=ee(x,true,"ordinal number"),Re=Pe,Me=ee(x,false,"ordinal number"),Ce=Me,Je=ee(h,true,"cardinal number"),Le=Je,$e=ee(h,false,"cardinal number"),ze=$e,qe=ee(w,true,"literal string"),Be=qe,Te=ee(w,false,"literal string"),De=Te,Ze=ee(I,true,"non-empty literal string"),Ue=Ze,_e=ee(I,false,"non-empty literal string"),He=_e;function We(e,r,n){return null==r?r:Qe(e,r,n)}var Ge=We;function Ke(e,r,n){if(Te(e,r),n.test(r))return r.valueOf();o("InvalidArgument: the given "+Ln(e)+" does not match the specified pattern")}var Qe=Ke,Xe=ee(S,true,"literal text"),Ye=Xe,er=ee(S,false,"literal text"),rr=er,nr=ee(N,true,"single line of text"),tr=nr,ar=ee(N,false,"single line of text"),ir=ar,lr=ee(j,true,"JavaScript function"),ur=lr,or=ee(j,false,"JavaScript function"),cr=or,sr=ee(V,true,"anonymous JavaScript function"),gr=sr,fr=ee(V,false,"anonymous JavaScript function"),br=fr,pr=ee(E,true,"named JavaScript function"),dr=pr,vr=ee(E,false,"named JavaScript function"),mr=vr,xr=ee(k,true,"native JavaScript function"),hr=xr,wr=ee(k,false,"native JavaScript function"),yr=wr,Ir=ee(P,true,"scripted JavaScript function"),Or=Ir,Fr=ee(P,false,"scripted JavaScript function"),Sr=Fr,Ar=ee(R,true,"JavaScript object"),Nr=Ar,jr=ee(R,false,"JavaScript object"),Vr=jr,Er=ee(M,true,'"plain" JavaScript object'),kr=Er,Pr=ee(M,false,'"plain" JavaScript object'),Rr=Pr,Mr=ee(C,true,'"vanilla" JavaScript object'),Cr=Mr,Jr=ee(C,false,'"vanilla" JavaScript object'),Lr=Jr;function $r(e,r){return null==r?r:Br(e,r)}var zr=$r;function qr(e,r){if(null==r&&o("MissingArgument: no "+Ln(e)+" given"),J(r))return r;o("InvalidArgument: the given "+Ln(e)+" is no JavaScript array")}var Br=qr;function Tr(e,r,n,t,a){return null==r?r:Ur(e,r,n,t,a)}var Dr=Tr;function Zr(e,r,n,t,a){if(null==r&&o("MissingArgument: no "+Ln(e)+" given"),L(r,t,a))return r;o("InvalidArgument: the given "+Ln(e)+" is "+(null==n?"either not a list or contains an invalid number of elements":"no "+Ln(n)))}var Ur=Zr;function _r(e,r,n,t,a,i){return null==r?r:Gr(e,r,n,t,a,i)}var Hr=_r;function Wr(e,r,n,t,a,i){if(null==r&&o("MissingArgument: no "+Ln(e)+" given"),$(r,n,a,i))return r;o("InvalidArgument: the given "+Ln(e)+" is "+(null==t?"either not a list or contains invalid elements":"no "+Ln(t)))}var Gr=Wr;function Kr(e,r,n,t){return null==r?r:Yr(e,r,n,t)}var Qr=Kr;function Xr(e,r,n,t){return null==r&&o("MissingArgument: no "+Ln(e)+" given"),r instanceof n||o("InvalidArgument: the given "+Ln(e)+" is no "+Ln(t)),r}var Yr=Xr;function en(e,r,n,t){return null==r?r:tn(e,r,n,t)}var rn=en;function nn(e,r,n,t){if(null==r&&o("MissingArgument: no "+Ln(e)+" given"),n.isPrototypeOf(r))return r;o("InvalidArgument: the given "+Ln(e)+" is no "+Ln(t))}var tn=nn,an=ee(B,true,"JavaScript Date object"),ln=an,un=ee(B,false,"JavaScript Date object"),on=un,cn=ee(T,true,"JavaScript Error object"),sn=cn,gn=ee(T,false,"JavaScript Error object"),fn=gn,bn=ee(D,true,'JavaScript Promise (or "Thenable") object'),pn=bn,dn=ee(D,false,'JavaScript Promise (or "Thenable") object'),vn=dn,mn=ee(Z,true,"JavaScript RegExp object"),xn=mn,hn=ee(Z,false,"JavaScript RegExp object"),wn=hn;function yn(e,r,n){return null==r?r:Fn(e,r,n)}var In=yn;function On(e,r,n){if(null==r&&o("MissingArgument: no "+Ln(e)+" given"),U(r,n))return null==r||"function"!=typeof r.valueOf?r:r.valueOf();o("InvalidArgument: the given "+Ln(e)+" is not among the supported values")}var Fn=On,Sn=ee(_,true,"valid CSS color specification"),An=Sn,Nn=ee(_,false,"valid CSS color specification"),jn=Nn,Vn=ee(W,true,"valid EMail address"),En=Vn,kn=ee(W,false,"valid EMail address"),Pn=kn,Rn=ee(K,true,"valid URL"),Mn=Rn,Cn=ee(K,false,"valid URL"),Jn=Cn;function Ln(e){return e.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,(function(e){return"\\"===e?"\\\\":e})).replace(/[\x00-\x1f\x7f-\x9f]/g,(function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var r=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(r.length)+r}}))}function $n(e){return e.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g,(function(e){switch(e){case"\\0":return"\0";case"\\b":return"\b";case"\\f":return"\f";case"\\n":return"\n";case"\\r":return"\r";case"\\t":return"\t";case"\\v":return"\v";case"\\'":return"'";case'\\"':return'"';case"\\\\":return"\\";default:var r=parseInt(e.slice(2),16);return String.fromCharCode(r)}}))}function zn(e,r){void 0===r&&(r='"');return e.replace("'"===r?/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g:/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g,(function(e){switch(e){case"'":return"\\'";case'"':return'\\"';case"\\":return"\\\\";default:return e}})).replace(/[\x00-\x1f\x7f-\x9f]/g,(function(e){switch(e){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var r=e.charCodeAt(0).toString(16);return"\\x"+"00".slice(r.length)+r}}))}function qn(e,r){return void 0===r&&(r='"'),r+zn(e,r)+r}function Bn(e,r){return r=(r||"").trim()||"<br/>",e.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g,(function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&apos;";case"\b":return"&#92;b";case"\f":return"&#92;f";case"\n":return r;case"\r":return"&#92;r";case"\t":return"&#92;t";case"\v":return"&#92;v";case"\\":return"&#92;";default:var n=e.charCodeAt(0).toString(16);return"&#x0000".substring(3,7-n.length)+n+";"}}))}function Tn(e,r){return Bn(e,r).replace(/:/g,"&#58;")}function Dn(e,r){if(e===r)return!1;var n=typeof e;if(n!==typeof r)return!0;switch(n){case"undefined":case"boolean":case"string":case"function":return!0;case"number":return isNaN(e)!==isNaN(r)||Math.abs(e-r)>Number.EPSILON;case"object":return null==e||(null==r||(Array.isArray(e)?function(e,r){if(!Array.isArray(r))return!0;if(e.length!==r.length)return!0;for(var n=0,t=e.length;n<t;n++)if(Dn(e[n],r[n]))return!0;return!1}(e,r):function(e,r){if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(r))return!0;for(var n in e)if(!(n in r))return!0;for(var n in r){if(!(n in e))return!0;if(Dn(e[n],r[n]))return!0}return!1}(e,r)));default:return!0}return!0}function Zn(e,r){return!Dn(e,r)}function Un(e){for(var n in jr("candidate",e),e)if(r(e,n))return!1;return!0}function _n(e){return/^\s*$/.test(e)}function Hn(e){return!_n(e)}var Wn={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"};function Gn(e){var r=e.toLowerCase();if(Wn.hasOwnProperty(r)&&(e=Wn[r]),/^#[a-fA-F0-9]{6}$/.test(e))return e+"FF";if(/^#[a-fA-F0-9]{8}$/.test(e))return e;var n="0123456789ABCDEF";function t(e){return e>255&&(e=255),n[Math.trunc(e/16)]+n[e%16]}var a=/^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);if(null!=a)return"#"+t(parseInt(a[1],10))+t(parseInt(a[2],10))+t(parseInt(a[3],10))+"FF";if(null!=(a=/^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e)))return"#"+t(parseInt(a[1],10))+t(parseInt(a[2],10))+t(parseInt(a[3],10))+t(parseFloat(a[4]));o("InvalidArgument: the given Value is not a valid CSS Color specification")}function Kn(e){var r=e.toLowerCase();if(Wn.hasOwnProperty(r))return Wn[r];if(/^#[a-fA-F0-9]{6}$/.test(e))return"rgba("+parseInt(e.slice(1,3),16)+","+parseInt(e.slice(3,5),16)+","+parseInt(e.slice(5,7),16)+", 1)";if(/^#[a-fA-F0-9]{8}$/.test(e))return"rgba("+parseInt(e.slice(1,3),16)+","+parseInt(e.slice(3,5),16)+","+parseInt(e.slice(5,7),16)+","+parseInt(e.slice(7),16)/255+")";var n=/^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);if(null!=n)return e.slice(0,e.length-1)+",1)";if(null!=(n=/^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(e)))return e;o("InvalidArgument: the given Value is not a valid CSS Color specification")}function Qn(e){return Gn(e).slice(0,7)}"JIL"in e||(e.JIL={global:e,Object_hasOwnProperty:r,Object_isPrototypeOf:n,Object_propertyIsEnumerable:t,Object_toString:a,Object_toLocaleString:i,Object_valueOf:l,ObjectMergedWith:u,throwError:o,ValueExists:c,ValueIsMissing:s,ValueIsBoolean:g,ValueIsNumber:f,ValueIsFiniteNumber:b,ValueIsNaN:p,ValueIsNumberInRange:d,ValueIsInteger:v,ValueIsIntegerInRange:m,ValueIsOrdinal:x,ValueIsCardinal:h,ValueIsString:w,ValueIsNonEmptyString:I,ValueIsStringMatching:O,ValueIsText:S,ValueIsTextline:N,ValueIsFunction:j,ValueIsAnonymousFunction:V,ValueIsNamedFunction:E,ValueIsNativeFunction:k,ValueIsScriptedFunction:P,ValueIsObject:R,ValueIsPlainObject:M,ValueIsVanillaObject:C,ValueIsArray:J,ValueIsList:L,ValueIsListSatisfying:$,ValueIsInstanceOf:z,ValueInheritsFrom:q,ValueIsDate:B,ValueIsError:T,ValueIsPromise:D,ValueIsRegExp:Z,ValueIsOneOf:U,ValueIsColor:_,ValueIsEMailAddress:W,ValueIsURL:K,rejectNil:false,acceptNil:true,validatedArgument:Y,ValidatorForClassifier:ee,FunctionWithName:re,expectValue:ne,expectedValue:te,allowBoolean:ae,allowedBoolean:ie,expectBoolean:le,expectedBoolean:ue,allowNumber:oe,allowedNumber:ce,expectNumber:se,expectedNumber:ge,allowFiniteNumber:fe,allowedFiniteNumber:be,expectFiniteNumber:pe,expectedFiniteNumber:de,allowNaN:ve,allowedNaN:me,expectNaN:xe,expectedNaN:he,allowNumberInRange:we,allowedNumberInRange:ye,expectNumberInRange:Ie,expectedNumberInRange:Oe,allowInteger:Fe,allowedInteger:Se,expectInteger:Ae,expectedInteger:Ne,allowIntegerInRange:je,allowedIntegerInRange:Ve,expectIntegerInRange:Ee,expectedIntegerInRange:ke,allowOrdinal:Pe,allowedOrdinal:Re,expectOrdinal:Me,expectedOrdinal:Ce,allowCardinal:Je,allowedCardinal:Le,expectCardinal:$e,expectedCardinal:ze,allowString:qe,allowedString:Be,expectString:Te,expectedString:De,allowNonEmptyString:Ze,allowedNonEmptyString:Ue,expectNonEmptyString:_e,expectedNonEmptyString:He,allowStringMatching:We,allowedStringMatching:Ge,expectStringMatching:Ke,expectedStringMatching:Qe,allowText:Xe,allowedText:Ye,expectText:er,expectedText:rr,allowTextline:nr,allowedTextline:tr,expectTextline:ar,expectedTextline:ir,allowFunction:lr,allowedFunction:ur,expectFunction:or,expectedFunction:cr,allowAnonymousFunction:sr,allowedAnonymousFunction:gr,expectAnonymousFunction:fr,expectedAnonymousFunction:br,allowNamedFunction:pr,allowedNamedFunction:dr,expectNamedFunction:vr,expectedNamedFunction:mr,allowNativeFunction:xr,allowedNativeFunction:hr,expectNativeFunction:wr,expectedNativeFunction:yr,allowScriptedFunction:Ir,allowedScriptedFunction:Or,expectScriptedFunction:Fr,expectedScriptedFunction:Sr,allowObject:Ar,allowedObject:Nr,expectObject:jr,expectedObject:Vr,allowPlainObject:Er,allowedPlainObject:kr,expectPlainObject:Pr,expectedPlainObject:Rr,allowVanillaObject:Mr,allowedVanillaObject:Cr,expectVanillaObject:Jr,expectedVanillaObject:Lr,allowArray:$r,allowedArray:zr,expectArray:qr,expectedArray:Br,allowList:Tr,allowedList:Dr,expectList:Zr,expectedList:Ur,allowListSatisfying:_r,allowedListSatisfying:Hr,expectListSatisfying:Wr,expectedListSatisfying:Gr,allowInstanceOf:Kr,allowedInstanceOf:Qr,expectInstanceOf:Xr,expectedInstanceOf:Yr,allowValueInheritingFrom:en,allowedValueInheritingFrom:rn,expectValueInheritingFrom:nn,expectedValueInheritingFrom:tn,allowDate:an,allowedDate:ln,expectDate:un,expectedDate:on,allowError:cn,allowedError:sn,expectError:gn,expectedError:fn,allowPromise:bn,allowedPromise:pn,expectPromise:dn,expectedPromise:vn,allowRegExp:mn,allowedRegExp:xn,expectRegExp:hn,expectedRegExp:wn,allowOneOf:yn,allowedOneOf:In,expectOneOf:On,expectedOneOf:Fn,allowColor:Sn,allowedColor:An,expectColor:Nn,expectedColor:jn,allowEMailAddress:Vn,allowedEMailAddress:En,expectEMailAddress:kn,expectedEMailAddress:Pn,allowURL:Rn,allowedURL:Mn,expectURL:Cn,expectedURL:Jn,escaped:Ln,unescaped:$n,quotable:zn,quoted:qn,HTMLsafe:Bn,MarkDownSafe:Tn,ValuesDiffer:Dn,ValuesAreEqual:Zn,ObjectIsEmpty:Un,StringIsEmpty:_n,StringIsNotEmpty:Hn,ColorSet:Wn,HexColor:Gn,shortHexColor:Qn,RGBAColor:Kn});export{Wn as ColorSet,re as FunctionWithName,Bn as HTMLsafe,Gn as HexColor,Tn as MarkDownSafe,Un as ObjectIsEmpty,u as ObjectMergedWith,r as Object_hasOwnProperty,n as Object_isPrototypeOf,t as Object_propertyIsEnumerable,i as Object_toLocaleString,a as Object_toString,l as Object_valueOf,Kn as RGBAColor,_n as StringIsEmpty,Hn as StringIsNotEmpty,ee as ValidatorForClassifier,c as ValueExists,q as ValueInheritsFrom,V as ValueIsAnonymousFunction,J as ValueIsArray,g as ValueIsBoolean,h as ValueIsCardinal,_ as ValueIsColor,B as ValueIsDate,W as ValueIsEMailAddress,T as ValueIsError,b as ValueIsFiniteNumber,j as ValueIsFunction,z as ValueIsInstanceOf,v as ValueIsInteger,m as ValueIsIntegerInRange,L as ValueIsList,$ as ValueIsListSatisfying,s as ValueIsMissing,p as ValueIsNaN,E as ValueIsNamedFunction,k as ValueIsNativeFunction,I as ValueIsNonEmptyString,f as ValueIsNumber,d as ValueIsNumberInRange,R as ValueIsObject,U as ValueIsOneOf,x as ValueIsOrdinal,M as ValueIsPlainObject,D as ValueIsPromise,Z as ValueIsRegExp,P as ValueIsScriptedFunction,w as ValueIsString,O as ValueIsStringMatching,S as ValueIsText,N as ValueIsTextline,K as ValueIsURL,C as ValueIsVanillaObject,Zn as ValuesAreEqual,Dn as ValuesDiffer,X as acceptNil,sr as allowAnonymousFunction,$r as allowArray,ae as allowBoolean,Je as allowCardinal,Sn as allowColor,an as allowDate,Vn as allowEMailAddress,cn as allowError,fe as allowFiniteNumber,lr as allowFunction,Kr as allowInstanceOf,Fe as allowInteger,je as allowIntegerInRange,Tr as allowList,_r as allowListSatisfying,ve as allowNaN,pr as allowNamedFunction,xr as allowNativeFunction,Ze as allowNonEmptyString,oe as allowNumber,we as allowNumberInRange,Ar as allowObject,yn as allowOneOf,Pe as allowOrdinal,Er as allowPlainObject,bn as allowPromise,mn as allowRegExp,Ir as allowScriptedFunction,qe as allowString,We as allowStringMatching,Xe as allowText,nr as allowTextline,Rn as allowURL,en as allowValueInheritingFrom,Mr as allowVanillaObject,gr as allowedAnonymousFunction,zr as allowedArray,ie as allowedBoolean,Le as allowedCardinal,An as allowedColor,ln as allowedDate,En as allowedEMailAddress,sn as allowedError,be as allowedFiniteNumber,ur as allowedFunction,Qr as allowedInstanceOf,Se as allowedInteger,Ve as allowedIntegerInRange,Dr as allowedList,Hr as allowedListSatisfying,me as allowedNaN,dr as allowedNamedFunction,hr as allowedNativeFunction,Ue as allowedNonEmptyString,ce as allowedNumber,ye as allowedNumberInRange,Nr as allowedObject,In as allowedOneOf,Re as allowedOrdinal,kr as allowedPlainObject,pn as allowedPromise,xn as allowedRegExp,Or as allowedScriptedFunction,Be as allowedString,Ge as allowedStringMatching,Ye as allowedText,tr as allowedTextline,Mn as allowedURL,rn as allowedValueInheritingFrom,Cr as allowedVanillaObject,Ln as escaped,fr as expectAnonymousFunction,qr as expectArray,le as expectBoolean,$e as expectCardinal,Nn as expectColor,un as expectDate,kn as expectEMailAddress,gn as expectError,pe as expectFiniteNumber,or as expectFunction,Xr as expectInstanceOf,Ae as expectInteger,Ee as expectIntegerInRange,Zr as expectList,Wr as expectListSatisfying,xe as expectNaN,vr as expectNamedFunction,wr as expectNativeFunction,_e as expectNonEmptyString,se as expectNumber,Ie as expectNumberInRange,jr as expectObject,On as expectOneOf,Me as expectOrdinal,Pr as expectPlainObject,dn as expectPromise,hn as expectRegExp,Fr as expectScriptedFunction,Te as expectString,Ke as expectStringMatching,er as expectText,ar as expectTextline,Cn as expectURL,ne as expectValue,nn as expectValueInheritingFrom,Jr as expectVanillaObject,br as expectedAnonymousFunction,Br as expectedArray,ue as expectedBoolean,ze as expectedCardinal,jn as expectedColor,on as expectedDate,Pn as expectedEMailAddress,fn as expectedError,de as expectedFiniteNumber,cr as expectedFunction,Yr as expectedInstanceOf,Ne as expectedInteger,ke as expectedIntegerInRange,Ur as expectedList,Gr as expectedListSatisfying,he as expectedNaN,mr as expectedNamedFunction,yr as expectedNativeFunction,He as expectedNonEmptyString,ge as expectedNumber,Oe as expectedNumberInRange,Vr as expectedObject,Fn as expectedOneOf,Ce as expectedOrdinal,Rr as expectedPlainObject,vn as expectedPromise,wn as expectedRegExp,Sr as expectedScriptedFunction,De as expectedString,Qe as expectedStringMatching,rr as expectedText,ir as expectedTextline,Jn as expectedURL,te as expectedValue,tn as expectedValueInheritingFrom,Lr as expectedVanillaObject,e as global,zn as quotable,qn as quoted,Q as rejectNil,Qn as shortHexColor,o as throwError,$n as unescaped,Y as validatedArgument};
//# sourceMappingURL=javascript-interface-library.esm.js.map
