const pr = globalThis;
function Ne(e, t) {
  return e == null || // let this method crash like its original
  "hasOwnProperty" in e && typeof e.hasOwnProperty == "function" ? e.hasOwnProperty(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Fe(e, t) {
  return e == null || // let this method crash like its original
  "isPrototypeOf" in e && typeof e.isPrototypeOf == "function" ? e.isPrototypeOf(t) : Object.prototype.isPrototypeOf.call(e, t);
}
function xr(e, t) {
  return e == null || // let this method crash like its original
  "propertyIsEnumerable" in e && typeof e.propertyIsEnumerable == "function" ? e.propertyIsEnumerable(t) : Object.prototype.propertyIsEnumerable.call(e, t);
}
function Pe(e) {
  return e == null || // let this method crash like its original
  "toString" in e && typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
function wr(e) {
  return e == null || // let this method crash like its original
  "toLocaleString" in e && typeof e.toLocaleString == "function" ? e.toLocaleString() : Pe(e);
}
function yr(e) {
  return e == null || // let this method crash like its original
  "valueOf" in e && typeof e.valueOf == "function" ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function Ir(e, ...t) {
  for (let n = 0, a = t.length; n < a; n++) {
    let o = t[n];
    if (o != null)
      if (typeof o == "object") {
        const i = Object.getOwnPropertyDescriptors(o);
        for (const y of Reflect.ownKeys(i)) {
          const x = i[y];
          x.enumerable && Object.defineProperty(e, y, x);
        }
      } else
        g("InvalidArgument: argument #" + (n + 1) + " is not an object");
  }
  return e;
}
function g(e) {
  let t = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (t == null)
    throw new Error(e);
  {
    let n = new Error(t[2]);
    throw n.name = t[1], n;
  }
}
function vr(e) {
  return e != null;
}
function Sr(e) {
  return e == null;
}
function E(e) {
  return typeof e == "boolean" || e instanceof Boolean;
}
function h(e) {
  return typeof e == "number" || e instanceof Number;
}
function I(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(e.valueOf());
}
function j(e) {
  return (typeof e == "number" || e instanceof Number) && isNaN(e.valueOf());
}
function mr(e, t, n, a = !0, o = !0) {
  if (!h(e))
    return !1;
  const i = e.valueOf();
  if (isNaN(i))
    return !1;
  if (I(t)) {
    if (I(n)) {
      if (i < t || !a && i === t || i > n || !o && i === n)
        return !1;
    } else if (i < t || !a && i === t)
      return !1;
  } else if (I(n) && (i > n || !o && i === n))
    return !1;
  return !0;
}
function N(e) {
  if (typeof e != "number" && !(e instanceof Number))
    return !1;
  const t = e.valueOf();
  return isFinite(t) && Math.round(t) === t;
}
function $e(e, t, n) {
  if (!N(e) || isNaN(e))
    return !1;
  if (I(t)) {
    if (I(n)) {
      if (e < t || e > n)
        return !1;
    } else if (e < t)
      return !1;
  } else if (I(n) && e > n)
    return !1;
  return !0;
}
function B(e) {
  if (typeof e != "number" && !(e instanceof Number))
    return !1;
  const t = e.valueOf();
  return isFinite(t) && Math.round(t) === t && t >= 0;
}
function R(e) {
  if (typeof e != "number" && !(e instanceof Number))
    return !1;
  const t = e.valueOf();
  return isFinite(t) && Math.round(t) === t && t >= 1;
}
function v(e) {
  return typeof e == "string" || e instanceof String;
}
const k = /^\s*$/;
function Or(e) {
  return (typeof e == "string" || e instanceof String) && k.test(e.valueOf());
}
function J(e) {
  return (typeof e == "string" || e instanceof String) && !k.test(e.valueOf());
}
function p(e, t) {
  return (typeof e == "string" || e instanceof String) && t.test(e.valueOf());
}
const Ee = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function T(e) {
  return p(e, Ee);
}
const je = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function A(e) {
  return p(e, je);
}
function D(e) {
  return typeof e == "function";
}
function M(e) {
  return typeof e == "function" && (e.name == null || e.name === "");
}
function U(e) {
  return typeof e == "function" && e.name != null && e.name !== "";
}
const Be = /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;
function F(e) {
  return typeof e == "function" && Be.test(e.toString()) && !e.name.startsWith("bound ");
}
function C(e) {
  return typeof e == "function" && !F(e);
}
function z(e) {
  return e != null && typeof e == "object";
}
function L(e) {
  return e != null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function H(e) {
  return e != null && typeof e == "object" && !(e instanceof Object);
}
const P = Array.isArray;
function Re(e, t, n) {
  if (P(e)) {
    for (let a = 0, o = e.length; a < o; a++)
      if (e[a] === void 0)
        return !1;
    return !(t != null && e.length < t || n != null && e.length > n);
  }
  return !1;
}
function ke(e, t, n, a) {
  if (P(e))
    try {
      for (let o = 0, i = e.length; o < i; o++)
        if (!t(e[o]))
          return !1;
      return !(n != null && e.length < n || a != null && e.length > a);
    } catch {
    }
  return !1;
}
function hr(e, t) {
  return e instanceof t;
}
function Nr(e, t) {
  return Fe(t, e);
}
function q(e) {
  return e instanceof Date;
}
function _(e) {
  return e instanceof Error;
}
function G(e) {
  return e != null && typeof e.then == "function";
}
function W(e) {
  return e instanceof RegExp;
}
function Je(e, t) {
  return t.indexOf(e) >= 0;
}
function Z(e) {
  if (!v(e))
    return !1;
  let t = e.valueOf().toLowerCase();
  return m.hasOwnProperty(t) || /^#[a-fA-F0-9]{6}$/.test(t) || /^#[a-fA-F0-9]{8}$/.test(t) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(t) || // not perfect
  /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,\s*([01]|[01]?[.][0-9]+)\)$/.test(t);
}
const Te = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
function K(e) {
  return p(e, Te);
}
const Ae = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Y(e) {
  if (!p(e, Ae) || e === "")
    return !1;
  try {
    return new URL(e, "file://"), !0;
  } catch {
    return !1;
  }
}
const De = /^\+?[0-9(][0-9 \-.\/()]*[0-9)]$/;
function Q(e) {
  if (!v(e))
    return !1;
  let t = e.valueOf();
  if (!De.test(t))
    return !1;
  let n = t.replace(/[^0-9]/g, "");
  return t.charAt(0) === "+" ? /^[1-9][0-9]{6,14}$/.test(n) : n.length >= 3 && n.length <= 16;
}
const Me = /^\+[1-9][0-9]{6,14}$/;
function X(e) {
  return p(e, Me);
}
function V(e) {
  return typeof e == "bigint";
}
function ee(e) {
  return typeof e == "symbol";
}
function te(e) {
  return e instanceof Map;
}
function ne(e) {
  return e instanceof Set;
}
function re(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ae(e) {
  return e instanceof ArrayBuffer;
}
const Ue = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function oe(e) {
  return p(e, Ue);
}
const Ce = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
function ie(e) {
  if (!v(e))
    return !1;
  const t = Ce.exec(e.valueOf());
  if (t == null)
    return !1;
  const [n, a, o] = [t[1], t[2], t[3]].map(Number), i = new Date(Date.UTC(n, a - 1, o));
  return (
    // detects overflows like 02-31
    i.getUTCFullYear() === n && i.getUTCMonth() === a - 1 && i.getUTCDate() === o
  );
}
const ze = new RegExp(
  "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}([.][0-9]+)?)?(Z|[+-][0-9]{2}:[0-9]{2})?$"
);
function ce(e) {
  return p(e, ze) && !isNaN(Date.parse(e.valueOf()));
}
const Le = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$"
);
function se(e) {
  return p(e, Le);
}
const He = /^[0-9a-fA-F:.]+$/;
function le(e) {
  if (!v(e) || !He.test(e.valueOf()))
    return !1;
  try {
    return new URL("http://[" + e.valueOf() + "]/"), !0;
  } catch {
    return !1;
  }
}
const qe = new RegExp(
  "^(?=.{1,253}$)[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$",
  "i"
);
function ue(e) {
  return p(e, qe);
}
function fe(e) {
  return $e(e, 1, 65535);
}
function ge(e) {
  if (!v(e))
    return !1;
  try {
    return JSON.parse(e.valueOf()), !0;
  } catch {
    return !1;
  }
}
const _e = new RegExp(
  "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
);
function be(e) {
  return p(e, _e);
}
const Ge = /^[0-9a-fA-F]+$/;
function de(e) {
  return p(e, Ge);
}
const We = /^[\p{ID_Start}_$][\p{ID_Continue}_$\u200C\u200D]*$/u;
function pe(e) {
  return p(e, We);
}
const c = !1, s = !0;
function Ze(e, t, n, a, o) {
  if (t == null) {
    if (a)
      return t;
    g(`MissingArgument: no ${l(e)} given`);
  } else if (n(t))
    switch (!0) {
      case t instanceof Boolean:
      case t instanceof Number:
      case t instanceof String:
        return t.valueOf();
      // unboxes any primitives
      default:
        return t;
    }
  else
    g(
      `InvalidArgument: the given ${l(e)} is no valid ${l(o)}`
    );
}
function r(e, t, n) {
  let a = function(i, y) {
    return Ze(
      i,
      y,
      e,
      t,
      n
    );
  }, o = e.name;
  if (o != null && /^ValueIs/.test(o)) {
    let i = o.replace(
      // derive name from validator
      /^ValueIs/,
      t ? "allow" : "expect"
    );
    return Ke(a, i);
  } else
    return a;
}
function Ke(e, t) {
  return e == null && g("MissingArgument: no function given"), typeof e != "function" && g("InvalidArgument: the given 1st Argument is not a JavaScript function"), t == null && g("MissingArgument: no desired name given"), typeof t != "string" && !(t instanceof String) && g("InvalidArgument: the given desired name is not a string"), e.name === t || Object.defineProperty(e, "name", {
    value: t.valueOf()
  }), e;
}
function Ye(e, t) {
  if (t == null)
    g(`MissingArgument: no ${l(e)} given`);
  else
    switch (!0) {
      // unboxes primitives - but nothing else, as
      case t instanceof Boolean:
      // "valueOf" may return other values
      case t instanceof Number:
      // for other objects (e.g. Dates)
      case t instanceof String:
        return t.valueOf();
      default:
        return t;
    }
}
const Fr = Ye, Qe = /* @__PURE__ */ r(
  E,
  s,
  "boolean value"
), Pr = Qe, Xe = /* @__PURE__ */ r(
  E,
  c,
  "boolean value"
), $r = Xe, Ve = /* @__PURE__ */ r(
  h,
  s,
  "numeric value"
), Er = Ve, xe = /* @__PURE__ */ r(
  h,
  c,
  "numeric value"
), jr = xe, et = /* @__PURE__ */ r(
  I,
  s,
  "finite numeric value"
), Br = et, tt = /* @__PURE__ */ r(
  I,
  c,
  "finite numeric value"
), Rr = tt, nt = /* @__PURE__ */ r(
  j,
  s,
  "NaN value"
), kr = nt, rt = /* @__PURE__ */ r(
  j,
  c,
  "NaN value"
), Jr = rt;
function at(e, t, n, a, o, i) {
  return t == null ? t : it(e, t, n, a, o, i);
}
const Tr = at;
function ot(e, t, n, a, o, i) {
  if (xe(e, t), isNaN(t) && g(
    `InvalidArgument: the given ${l(e)} is not-a-number`
  ), o == null && (o = !0), i == null && (i = !0), n != null && isFinite(n)) {
    if (a != null && isFinite(a)) {
      if (t < n || !o && t === n || t > a || !i && t === a)
        throw new RangeError(
          `the given ${l(e)} (${t}) is outside the allowed range (${n}...${a})`
        );
    } else if (t < n || !o && t === n)
      throw new RangeError(
        `the given ${l(e)} is below the allowed minimum (${t} ${o ? "<" : "<="} ${n})`
      );
  } else if (a != null && isFinite(a) && (t > a || !i && t === a))
    throw new RangeError(
      `the given ${l(e)} exceeds the allowed maximum (${t} ${i ? ">" : ">="} ${a})`
    );
  return t.valueOf();
}
const it = ot, ct = /* @__PURE__ */ r(
  N,
  s,
  "integral numeric value"
), Ar = ct, we = /* @__PURE__ */ r(
  N,
  c,
  "integral numeric value"
), Dr = we;
function st(e, t, n, a) {
  return t == null ? t : ut(e, t, n, a);
}
const Mr = st;
function lt(e, t, n, a) {
  if (we(e, t), isNaN(t) && g(
    `InvalidArgument: the given ${l(e)} is not-a-number`
  ), n != null && isFinite(n)) {
    if (a != null && isFinite(a)) {
      if (t < n || t > a)
        throw new RangeError(
          `the given ${l(e)} (${t}) is outside the allowed range (${n}...${a})`
        );
    } else if (t < n)
      throw new RangeError(
        `the given ${l(e)} is below the allowed minimum (${t} < ${n})`
      );
  } else if (a != null && isFinite(a) && t > a)
    throw new RangeError(
      `the given ${l(e)} exceeds the allowed maximum (${t} > ${a})`
    );
  return t.valueOf();
}
const ut = lt, ft = /* @__PURE__ */ r(
  B,
  s,
  "ordinal number"
), Ur = ft, gt = /* @__PURE__ */ r(
  B,
  c,
  "ordinal number"
), Cr = gt, bt = /* @__PURE__ */ r(
  R,
  s,
  "cardinal number"
), zr = bt, dt = /* @__PURE__ */ r(
  R,
  c,
  "cardinal number"
), Lr = dt, pt = /* @__PURE__ */ r(
  v,
  s,
  "literal string"
), Hr = pt, ye = /* @__PURE__ */ r(
  v,
  c,
  "literal string"
), qr = ye, xt = /* @__PURE__ */ r(
  J,
  s,
  "non-empty literal string"
), _r = xt, wt = /* @__PURE__ */ r(
  J,
  c,
  "non-empty literal string"
), Gr = wt;
function yt(e, t, n) {
  return t == null ? t : vt(e, t, n);
}
const Wr = yt;
function It(e, t, n) {
  if (ye(e, t), n.test(t))
    return t.valueOf();
  g(
    `InvalidArgument: the given ${l(e)} does not match the specified pattern`
  );
}
const vt = It, St = /* @__PURE__ */ r(
  T,
  s,
  "literal text"
), Zr = St, mt = /* @__PURE__ */ r(
  T,
  c,
  "literal text"
), Kr = mt, Ot = /* @__PURE__ */ r(
  A,
  s,
  "single line of text"
), Yr = Ot, ht = /* @__PURE__ */ r(
  A,
  c,
  "single line of text"
), Qr = ht, Nt = /* @__PURE__ */ r(
  D,
  s,
  "JavaScript function"
), Xr = Nt, Ft = /* @__PURE__ */ r(
  D,
  c,
  "JavaScript function"
), Vr = Ft, Pt = /* @__PURE__ */ r(
  M,
  s,
  "anonymous JavaScript function"
), ea = Pt, $t = /* @__PURE__ */ r(
  M,
  c,
  "anonymous JavaScript function"
), ta = $t, Et = /* @__PURE__ */ r(
  U,
  s,
  "named JavaScript function"
), na = Et, jt = /* @__PURE__ */ r(
  U,
  c,
  "named JavaScript function"
), ra = jt, Bt = /* @__PURE__ */ r(
  F,
  s,
  "native JavaScript function"
), aa = Bt, Rt = /* @__PURE__ */ r(
  F,
  c,
  "native JavaScript function"
), oa = Rt, kt = /* @__PURE__ */ r(
  C,
  s,
  "scripted JavaScript function"
), ia = kt, Jt = /* @__PURE__ */ r(
  C,
  c,
  "scripted JavaScript function"
), ca = Jt, Tt = /* @__PURE__ */ r(
  z,
  s,
  "JavaScript object"
), sa = Tt, Ie = /* @__PURE__ */ r(
  z,
  c,
  "JavaScript object"
), la = Ie, At = /* @__PURE__ */ r(
  L,
  s,
  '"plain" JavaScript object'
), ua = At, Dt = /* @__PURE__ */ r(
  L,
  c,
  '"plain" JavaScript object'
), fa = Dt, Mt = /* @__PURE__ */ r(
  H,
  s,
  '"vanilla" JavaScript object'
), ga = Mt, Ut = /* @__PURE__ */ r(
  H,
  c,
  '"vanilla" JavaScript object'
), ba = Ut;
function Ct(e, t) {
  return t == null ? t : Lt(e, t);
}
const da = Ct;
function zt(e, t) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), P(t))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is no JavaScript array`
  );
}
const Lt = zt;
function Ht(e, t, n, a, o) {
  return t == null ? t : _t(e, t, n, a, o);
}
const pa = Ht;
function qt(e, t, n, a, o) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), Re(t, a, o))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is ` + (n == null ? "either not a list or contains an invalid number of elements" : "no " + l(n))
  );
}
const _t = qt;
function Gt(e, t, n, a, o, i) {
  return t == null ? t : Zt(
    e,
    t,
    n,
    a,
    o,
    i
  );
}
const xa = Gt;
function Wt(e, t, n, a, o, i) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), ke(t, n, o, i))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is ` + (a == null ? "either not a list or contains invalid elements" : "no " + l(a))
  );
}
const Zt = Wt;
function Kt(e, t, n, a) {
  return t == null ? t : Qt(e, t, n, a);
}
const wa = Kt;
function Yt(e, t, n, a) {
  return t == null && g(`MissingArgument: no ${l(e)} given`), t instanceof n || g(
    `InvalidArgument: the given ${l(e)} is no ${l(a)}`
  ), t;
}
const Qt = Yt;
function Xt(e, t, n, a) {
  return t == null ? t : en(e, t, n, a);
}
const ya = Xt;
function Vt(e, t, n, a) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), n.isPrototypeOf(t))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is no ${l(a)}`
  );
}
const en = Vt, tn = /* @__PURE__ */ r(
  q,
  s,
  "JavaScript Date object"
), Ia = tn, nn = /* @__PURE__ */ r(
  q,
  c,
  "JavaScript Date object"
), va = nn, rn = /* @__PURE__ */ r(
  _,
  s,
  "JavaScript Error object"
), Sa = rn, an = /* @__PURE__ */ r(
  _,
  c,
  "JavaScript Error object"
), ma = an, on = /* @__PURE__ */ r(
  G,
  s,
  'JavaScript Promise (or "Thenable") object'
), Oa = on, cn = /* @__PURE__ */ r(
  G,
  c,
  'JavaScript Promise (or "Thenable") object'
), ha = cn, sn = /* @__PURE__ */ r(
  W,
  s,
  "JavaScript RegExp object"
), Na = sn, ln = /* @__PURE__ */ r(
  W,
  c,
  "JavaScript RegExp object"
), Fa = ln;
function un(e, t, n) {
  return t == null ? t : gn(e, t, n);
}
const Pa = un;
function fn(e, t, n) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), Je(t, n))
    switch (!0) {
      // unboxes primitives - but nothing else, as
      case t instanceof Boolean:
      // "valueOf" may return other values
      case t instanceof Number:
      // for other objects (e.g. Dates)
      case t instanceof String:
        return t.valueOf();
      default:
        return t;
    }
  else
    g(
      `InvalidArgument: the given ${l(e)} is not among the supported values`
    );
}
const gn = fn, bn = /* @__PURE__ */ r(
  Z,
  s,
  "CSS color specification"
), $a = bn, dn = /* @__PURE__ */ r(
  Z,
  c,
  "CSS color specification"
), Ea = dn, pn = /* @__PURE__ */ r(
  K,
  s,
  "EMail address"
), ja = pn, xn = /* @__PURE__ */ r(
  K,
  c,
  "EMail address"
), Ba = xn, wn = /* @__PURE__ */ r(
  Y,
  s,
  "URL"
), Ra = wn, yn = /* @__PURE__ */ r(
  Y,
  c,
  "URL"
), ka = yn, In = /* @__PURE__ */ r(
  Q,
  s,
  "phone number"
), Ja = In, vn = /* @__PURE__ */ r(
  Q,
  c,
  "phone number"
), Ta = vn, Sn = /* @__PURE__ */ r(
  X,
  s,
  "phone number in E.164 format"
), Aa = Sn, mn = /* @__PURE__ */ r(
  X,
  c,
  "phone number in E.164 format"
), Da = mn, On = /* @__PURE__ */ r(
  V,
  s,
  "BigInt value"
), Ma = On, hn = /* @__PURE__ */ r(
  V,
  c,
  "BigInt value"
), Ua = hn, Nn = /* @__PURE__ */ r(
  ee,
  s,
  "symbol"
), Ca = Nn, Fn = /* @__PURE__ */ r(
  ee,
  c,
  "symbol"
), za = Fn, Pn = /* @__PURE__ */ r(
  te,
  s,
  "JavaScript Map"
), La = Pn, $n = /* @__PURE__ */ r(
  te,
  c,
  "JavaScript Map"
), Ha = $n, En = /* @__PURE__ */ r(
  ne,
  s,
  "JavaScript Set"
), qa = En, jn = /* @__PURE__ */ r(
  ne,
  c,
  "JavaScript Set"
), _a = jn, Bn = /* @__PURE__ */ r(
  re,
  s,
  "typed array"
), Ga = Bn, Rn = /* @__PURE__ */ r(
  re,
  c,
  "typed array"
), Wa = Rn, kn = /* @__PURE__ */ r(
  ae,
  s,
  "ArrayBuffer"
), Za = kn, Jn = /* @__PURE__ */ r(
  ae,
  c,
  "ArrayBuffer"
), Ka = Jn, Tn = /* @__PURE__ */ r(
  oe,
  s,
  "UUID"
), Ya = Tn, An = /* @__PURE__ */ r(
  oe,
  c,
  "UUID"
), Qa = An, Dn = /* @__PURE__ */ r(
  ie,
  s,
  "ISO 8601 date"
), Xa = Dn, Mn = /* @__PURE__ */ r(
  ie,
  c,
  "ISO 8601 date"
), Va = Mn, Un = /* @__PURE__ */ r(
  ce,
  s,
  "ISO 8601 timestamp"
), eo = Un, Cn = /* @__PURE__ */ r(
  ce,
  c,
  "ISO 8601 timestamp"
), to = Cn, zn = /* @__PURE__ */ r(
  se,
  s,
  "IPv4 address"
), no = zn, Ln = /* @__PURE__ */ r(
  se,
  c,
  "IPv4 address"
), ro = Ln, Hn = /* @__PURE__ */ r(
  le,
  s,
  "IPv6 address"
), ao = Hn, qn = /* @__PURE__ */ r(
  le,
  c,
  "IPv6 address"
), oo = qn, _n = /* @__PURE__ */ r(
  ue,
  s,
  "host name"
), io = _n, Gn = /* @__PURE__ */ r(
  ue,
  c,
  "host name"
), co = Gn, Wn = /* @__PURE__ */ r(
  fe,
  s,
  "port number"
), so = Wn, Zn = /* @__PURE__ */ r(
  fe,
  c,
  "port number"
), lo = Zn, Kn = /* @__PURE__ */ r(
  ge,
  s,
  "JSON string"
), uo = Kn, Yn = /* @__PURE__ */ r(
  ge,
  c,
  "JSON string"
), fo = Yn, Qn = /* @__PURE__ */ r(
  be,
  s,
  "Base64-encoded string"
), go = Qn, Xn = /* @__PURE__ */ r(
  be,
  c,
  "Base64-encoded string"
), bo = Xn, Vn = /* @__PURE__ */ r(
  de,
  s,
  "hexadecimal string"
), po = Vn, er = /* @__PURE__ */ r(
  de,
  c,
  "hexadecimal string"
), xo = er, tr = /* @__PURE__ */ r(
  pe,
  s,
  "JavaScript identifier"
), wo = tr, nr = /* @__PURE__ */ r(
  pe,
  c,
  "JavaScript identifier"
), yo = nr, rr = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?/g, ve = /[\x00-\x1f\x7f-\x9f]/g;
function l(e) {
  return e.replace(rr, (t) => t === "\\" ? "\\\\" : t).replace(ve, (t) => {
    switch (t) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default: {
        const n = t.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(n.length) + n;
      }
    }
  });
}
const ar = /\\[0bfnrtv'"\\\/]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}/g;
function Io(e) {
  return e.replace(ar, (t) => {
    switch (t) {
      case "\\0":
        return "\0";
      case "\\b":
        return "\b";
      case "\\f":
        return "\f";
      case "\\n":
        return `
`;
      case "\\r":
        return "\r";
      case "\\t":
        return "	";
      case "\\v":
        return "\v";
      case "\\'":
        return "'";
      case '\\"':
        return '"';
      case "\\\\":
        return "\\";
      default: {
        const n = t.charAt(2) === "{" ? parseInt(t.slice(3, -1), 16) : parseInt(t.slice(2), 16);
        return n <= 1114111 ? String.fromCodePoint(n) : t;
      }
    }
  });
}
const or = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|'/g, ir = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|"/g, cr = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|`|\$\{/g;
function sr(e, t = '"') {
  const n = t === "'" ? or : t === "`" ? cr : ir;
  return e.replace(n, (a) => {
    switch (a) {
      case "'":
        return "\\'";
      case '"':
        return '\\"';
      case "`":
        return "\\`";
      case "${":
        return "\\${";
      case "\\":
        return "\\\\";
      default:
        return a;
    }
  }).replace(ve, (a) => {
    switch (a) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "\f":
        return "\\f";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "	":
        return "\\t";
      case "\v":
        return "\\v";
      default: {
        const o = a.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(o.length) + o;
      }
    }
  });
}
function vo(e, t = '"') {
  return t + sr(e, t) + t;
}
const lr = /[&<>"'\x00-\x1F\x7F-\x9F\\]/g;
function ur(e, t) {
  return t = (t || "").trim() || "<br/>", e.replace(lr, (n) => {
    switch (n) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      case "\b":
        return "&#92;b";
      case "\f":
        return "&#92;f";
      case `
`:
        return t;
      case "\r":
        return "&#92;r";
      case "	":
        return "&#92;t";
      case "\v":
        return "&#92;v";
      case "\\":
        return "&#92;";
      default: {
        const a = n.charCodeAt(0).toString(16);
        return "&#x0000".substring(0, 7 - a.length) + a + ";";
      }
    }
  });
}
const fr = /[:`*_\[\]#|~]/g;
function So(e, t) {
  return ur(e, t).replace(
    fr,
    (n) => "&#" + n.charCodeAt(0) + ";"
  );
}
function O(e, t, n, a) {
  if (e === t)
    return !1;
  let o, i;
  n != null && typeof n == "object" ? (o = n.Mode, i = n.Tolerance) : o = n;
  let y = typeof e;
  if (y !== typeof t)
    return !0;
  function x(f, u, d, w) {
    if (!Array.isArray(u) || f.length !== u.length)
      return !0;
    for (let b = 0, S = f.length; b < S; b++)
      if (O(f[b], u[b], d, w))
        return !0;
    return !1;
  }
  function Se(f, u, d, w) {
    if (!(u instanceof Map) || f.size !== u.size)
      return !0;
    let b = !1;
    return f.forEach(function(S, $) {
      b || (b = !u.has($) || O(S, u.get($), d, w));
    }), b;
  }
  function me(f, u) {
    if (!(u instanceof Set) || f.size !== u.size)
      return !0;
    let d = !1;
    return f.forEach(function(w) {
      !d && !u.has(w) && (d = !0);
    }), d;
  }
  function Oe(f, u) {
    if (Object.getPrototypeOf(f) !== Object.getPrototypeOf(u) || f.byteLength !== u.byteLength)
      return !0;
    let d = new Uint8Array(
      f.buffer,
      f.byteOffset,
      f.byteLength
    ), w = new Uint8Array(
      u.buffer,
      u.byteOffset,
      u.byteLength
    );
    for (let b = 0, S = d.length; b < S; b++)
      if (d[b] !== w[b])
        return !0;
    return !1;
  }
  function he(f, u, d, w) {
    if (Object.getPrototypeOf(f) !== Object.getPrototypeOf(u))
      return !0;
    for (let b in f)
      if (!(b in u))
        return !0;
    for (let b in u)
      if (!(b in f) || O(f[b], u[b], d, w))
        return !0;
    return !1;
  }
  switch (y) {
    case "undefined":
    case "boolean":
    case "string":
    case "bigint":
    case "symbol":
    case "function":
      return !0;
    // most primitives are compared using "==="
    case "number": {
      if (isNaN(e) !== isNaN(t))
        return !0;
      if (i != null)
        return Math.abs(e - t) > i;
      const u = Number.EPSILON * Math.max(
        // default is relative!
        1,
        Math.abs(e),
        Math.abs(t)
      );
      return Math.abs(e - t) > u;
    }
    case "object":
      if (e == null || t == null)
        return !0;
      if (
        // boxed primitives are compared by their values
        e instanceof Boolean || e instanceof Number || e instanceof String
      )
        return o === "by-reference" ? !0 : Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) || e.valueOf() !== t.valueOf();
      if (e instanceof Date) {
        if (o === "by-reference" || !(t instanceof Date))
          return !0;
        let u = e.getTime(), d = t.getTime();
        return u !== d && !(isNaN(u) && isNaN(d));
      }
      if (e instanceof RegExp)
        return o === "by-reference" ? !0 : !(t instanceof RegExp) || e.source !== t.source || e.flags !== t.flags;
      a == null && (a = /* @__PURE__ */ new WeakMap());
      let f = a.get(e);
      return f == null && a.set(e, f = /* @__PURE__ */ new WeakSet()), f.has(t) ? !1 : (f.add(t), Array.isArray(e) ? x(e, t, n, a) : e instanceof Map ? o === "by-reference" ? !0 : Se(e, t, n, a) : e instanceof Set ? o === "by-reference" ? !0 : me(e, t) : ArrayBuffer.isView(e) ? o === "by-reference" ? !0 : Oe(e, t) : o === "by-reference" ? !0 : he(e, t, n, a));
    default:
      return !0;
  }
}
function mo(e, t, n) {
  return !O(e, t, n);
}
function gr(e) {
  Ie("candidate", e);
  for (let t in e)
    if (Ne(e, t))
      return !1;
  return !0;
}
function Oo(e) {
  return !gr(e);
}
function br(e) {
  return /^\s*$/.test(e);
}
function ho(e) {
  return !br(e);
}
function No(e, t = -1 / 0, n = 1 / 0) {
  return Math.max(t, Math.min(e, n));
}
const m = /* @__PURE__ */ Object.freeze({
  transparent: "rgba(0,0,0,0.0)",
  aliceblue: "rgba(240,248,255,1.0)",
  lightpink: "rgba(255,182,193,1.0)",
  antiquewhite: "rgba(250,235,215,1.0)",
  lightsalmon: "rgba(255,160,122,1.0)",
  aqua: "rgba(0,255,255,1.0)",
  lightseagreen: "rgba(32,178,170,1.0)",
  aquamarine: "rgba(127,255,212,1.0)",
  lightskyblue: "rgba(135,206,250,1.0)",
  azure: "rgba(240,255,255,1.0)",
  lightslategray: "rgba(119,136,153,1.0)",
  beige: "rgba(245,245,220,1.0)",
  lightslategrey: "rgba(119,136,153,1.0)",
  bisque: "rgba(255,228,196,1.0)",
  lightsteelblue: "rgba(176,196,222,1.0)",
  black: "rgba(0,0,0,1.0)",
  lightyellow: "rgba(255,255,224,1.0)",
  blanchedalmond: "rgba(255,235,205,1.0)",
  lime: "rgba(0,255,0,1.0)",
  blue: "rgba(0,0,255,1.0)",
  limegreen: "rgba(50,205,50,1.0)",
  blueviolet: "rgba(138,43,226,1.0)",
  linen: "rgba(250,240,230,1.0)",
  brown: "rgba(165,42,42,1.0)",
  magenta: "rgba(255,0,255,1.0)",
  burlywood: "rgba(222,184,135,1.0)",
  maroon: "rgba(128,0,0,1.0)",
  cadetblue: "rgba(95,158,160,1.0)",
  mediumaquamarine: "rgba(102,205,170,1.0)",
  chartreuse: "rgba(127,255,0,1.0)",
  mediumblue: "rgba(0,0,205,1.0)",
  chocolate: "rgba(210,105,30,1.0)",
  mediumorchid: "rgba(186,85,211,1.0)",
  coral: "rgba(255,127,80,1.0)",
  mediumpurple: "rgba(147,112,219,1.0)",
  cornflowerblue: "rgba(100,149,237,1.0)",
  mediumseagreen: "rgba(60,179,113,1.0)",
  cornsilk: "rgba(255,248,220,1.0)",
  mediumslateblue: "rgba(123,104,238,1.0)",
  crimson: "rgba(220,20,60,1.0)",
  mediumspringgreen: "rgba(0,250,154,1.0)",
  cyan: "rgba(0,255,255,1.0)",
  mediumturquoise: "rgba(72,209,204,1.0)",
  darkblue: "rgba(0,0,139,1.0)",
  mediumvioletred: "rgba(199,21,133,1.0)",
  darkcyan: "rgba(0,139,139,1.0)",
  midnightblue: "rgba(25,25,112,1.0)",
  darkgoldenrod: "rgba(184,134,11,1.0)",
  mintcream: "rgba(245,255,250,1.0)",
  darkgray: "rgba(169,169,169,1.0)",
  mistyrose: "rgba(255,228,225,1.0)",
  darkgreen: "rgba(0,100,0,1.0)",
  moccasin: "rgba(255,228,181,1.0)",
  darkgrey: "rgba(169,169,169,1.0)",
  navajowhite: "rgba(255,222,173,1.0)",
  darkkhaki: "rgba(189,183,107,1.0)",
  navy: "rgba(0,0,128,1.0)",
  darkmagenta: "rgba(139,0,139,1.0)",
  oldlace: "rgba(253,245,230,1.0)",
  darkolivegreen: "rgba(85,107,47,1.0)",
  olive: "rgba(128,128,0,1.0)",
  darkorange: "rgba(255,140,0,1.0)",
  olivedrab: "rgba(107,142,35,1.0)",
  darkorchid: "rgba(153,50,204,1.0)",
  orange: "rgba(255,165,0,1.0)",
  darkred: "rgba(139,0,0,1.0)",
  orangered: "rgba(255,69,0,1.0)",
  darksalmon: "rgba(233,150,122,1.0)",
  orchid: "rgba(218,112,214,1.0)",
  darkseagreen: "rgba(143,188,143,1.0)",
  palegoldenrod: "rgba(238,232,170,1.0)",
  darkslateblue: "rgba(72,61,139,1.0)",
  palegreen: "rgba(152,251,152,1.0)",
  darkslategray: "rgba(47,79,79,1.0)",
  paleturquoise: "rgba(175,238,238,1.0)",
  darkslategrey: "rgba(47,79,79,1.0)",
  palevioletred: "rgba(219,112,147,1.0)",
  darkturquoise: "rgba(0,206,209,1.0)",
  papayawhip: "rgba(255,239,213,1.0)",
  darkviolet: "rgba(148,0,211,1.0)",
  peachpuff: "rgba(255,218,185,1.0)",
  deeppink: "rgba(255,20,147,1.0)",
  peru: "rgba(205,133,63,1.0)",
  deepskyblue: "rgba(0,191,255,1.0)",
  pink: "rgba(255,192,203,1.0)",
  dimgray: "rgba(105,105,105,1.0)",
  plum: "rgba(221,160,221,1.0)",
  dimgrey: "rgba(105,105,105,1.0)",
  powderblue: "rgba(176,224,230,1.0)",
  dodgerblue: "rgba(30,144,255,1.0)",
  purple: "rgba(128,0,128,1.0)",
  firebrick: "rgba(178,34,34,1.0)",
  red: "rgba(255,0,0,1.0)",
  floralwhite: "rgba(255,250,240,1.0)",
  rosybrown: "rgba(188,143,143,1.0)",
  forestgreen: "rgba(34,139,34,1.0)",
  royalblue: "rgba(65,105,225,1.0)",
  fuchsia: "rgba(255,0,255,1.0)",
  saddlebrown: "rgba(139,69,19,1.0)",
  gainsboro: "rgba(220,220,220,1.0)",
  salmon: "rgba(250,128,114,1.0)",
  ghostwhite: "rgba(248,248,255,1.0)",
  sandybrown: "rgba(244,164,96,1.0)",
  gold: "rgba(255,215,0,1.0)",
  seagreen: "rgba(46,139,87,1.0)",
  goldenrod: "rgba(218,165,32,1.0)",
  seashell: "rgba(255,245,238,1.0)",
  gray: "rgba(128,128,128,1.0)",
  sienna: "rgba(160,82,45,1.0)",
  green: "rgba(0,128,0,1.0)",
  silver: "rgba(192,192,192,1.0)",
  greenyellow: "rgba(173,255,47,1.0)",
  skyblue: "rgba(135,206,235,1.0)",
  grey: "rgba(128,128,128,1.0)",
  slateblue: "rgba(106,90,205,1.0)",
  honeydew: "rgba(240,255,240,1.0)",
  slategray: "rgba(112,128,144,1.0)",
  hotpink: "rgba(255,105,180,1.0)",
  slategrey: "rgba(112,128,144,1.0)",
  indianred: "rgba(205,92,92,1.0)",
  snow: "rgba(255,250,250,1.0)",
  indigo: "rgba(75,0,130,1.0)",
  springgreen: "rgba(0,255,127,1.0)",
  ivory: "rgba(255,255,240,1.0)",
  steelblue: "rgba(70,130,180,1.0)",
  khaki: "rgba(240,230,140,1.0)",
  tan: "rgba(210,180,140,1.0)",
  lavender: "rgba(230,230,250,1.0)",
  teal: "rgba(0,128,128,1.0)",
  lavenderblush: "rgba(255,240,245,1.0)",
  thistle: "rgba(216,191,216,1.0)",
  lawngreen: "rgba(124,252,0,1.0)",
  tomato: "rgba(255,99,71,1.0)",
  lemonchiffon: "rgba(255,250,205,1.0)",
  turquoise: "rgba(64,224,208,1.0)",
  lightblue: "rgba(173,216,230,1.0)",
  violet: "rgba(238,130,238,1.0)",
  lightcoral: "rgba(240,128,128,1.0)",
  wheat: "rgba(245,222,179,1.0)",
  lightcyan: "rgba(224,255,255,1.0)",
  white: "rgba(255,255,255,1.0)",
  lightgoldenrodyellow: "rgba(250,250,210,1.0)",
  whitesmoke: "rgba(245,245,245,1.0)",
  lightgray: "rgba(211,211,211,1.0)",
  yellow: "rgba(255,255,0,1.0)",
  lightgreen: "rgba(144,238,144,1.0)",
  yellowgreen: "rgba(154,205,50,1.0)",
  lightgrey: "rgba(211,211,211,1.0)"
});
function dr(e) {
  let t = e.toLowerCase();
  if (m.hasOwnProperty(t) && (e = m[t]), /^#[a-fA-F0-9]{6}$/.test(e))
    return e + "FF";
  if (/^#[a-fA-F0-9]{8}$/.test(e))
    return e;
  const n = "0123456789ABCDEF";
  function a(x) {
    return x = Math.max(0, Math.min(255, Math.round(x))), n[Math.trunc(x / 16)] + n[x % 16];
  }
  let i = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);
  if (i != null)
    return "#" + a(parseInt(i[1], 10)) + a(parseInt(i[2], 10)) + a(parseInt(i[3], 10)) + "FF";
  if (i = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e), i != null)
    return "#" + a(parseInt(i[1], 10)) + a(parseInt(i[2], 10)) + a(parseInt(i[3], 10)) + a(parseFloat(i[4]) * 255);
  g("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function Fo(e) {
  let t = e.toLowerCase();
  if (m.hasOwnProperty(t))
    return m[t];
  if (/^#[a-fA-F0-9]{6}$/.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + ",1)";
  if (/^#[a-fA-F0-9]{8}$/.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + "," + parseInt(e.slice(7), 16) / 255 + ")";
  let a = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);
  if (a != null)
    return e.slice(0, e.length - 1) + ",1)";
  if (a = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e), a != null)
    return e;
  g("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function Po(e) {
  return dr(e).slice(0, 7);
}
export {
  m as ColorSet,
  Ke as FunctionWithName,
  ur as HTMLsafe,
  dr as HexColor,
  So as MarkDownSafe,
  gr as ObjectIsEmpty,
  Oo as ObjectIsNotEmpty,
  Ir as ObjectMergedWith,
  Ne as Object_hasOwnProperty,
  Fe as Object_isPrototypeOf,
  xr as Object_propertyIsEnumerable,
  wr as Object_toLocaleString,
  Pe as Object_toString,
  yr as Object_valueOf,
  Fo as RGBAColor,
  br as StringIsEmpty,
  ho as StringIsNotEmpty,
  r as ValidatorForClassifier,
  vr as ValueExists,
  Nr as ValueInheritsFrom,
  M as ValueIsAnonymousFunction,
  P as ValueIsArray,
  ae as ValueIsArrayBuffer,
  be as ValueIsBase64,
  V as ValueIsBigInt,
  E as ValueIsBoolean,
  R as ValueIsCardinal,
  Z as ValueIsColor,
  q as ValueIsDate,
  X as ValueIsE164PhoneNumber,
  K as ValueIsEMailAddress,
  Or as ValueIsEmptyString,
  _ as ValueIsError,
  I as ValueIsFiniteNumber,
  D as ValueIsFunction,
  de as ValueIsHexString,
  ue as ValueIsHostName,
  se as ValueIsIPv4Address,
  le as ValueIsIPv6Address,
  ie as ValueIsISODate,
  ce as ValueIsISOTimestamp,
  pe as ValueIsIdentifier,
  hr as ValueIsInstanceOf,
  N as ValueIsInteger,
  $e as ValueIsIntegerInRange,
  ge as ValueIsJSONString,
  Re as ValueIsList,
  ke as ValueIsListSatisfying,
  te as ValueIsMap,
  Sr as ValueIsMissing,
  j as ValueIsNaN,
  U as ValueIsNamedFunction,
  F as ValueIsNativeFunction,
  J as ValueIsNonEmptyString,
  h as ValueIsNumber,
  mr as ValueIsNumberInRange,
  z as ValueIsObject,
  Je as ValueIsOneOf,
  B as ValueIsOrdinal,
  Q as ValueIsPhoneNumber,
  L as ValueIsPlainObject,
  fe as ValueIsPortNumber,
  G as ValueIsPromise,
  W as ValueIsRegExp,
  C as ValueIsScriptedFunction,
  ne as ValueIsSet,
  v as ValueIsString,
  p as ValueIsStringMatching,
  ee as ValueIsSymbol,
  T as ValueIsText,
  A as ValueIsTextline,
  re as ValueIsTypedArray,
  Y as ValueIsURL,
  oe as ValueIsUUID,
  H as ValueIsVanillaObject,
  mo as ValuesAreEqual,
  O as ValuesDiffer,
  s as acceptNil,
  Pt as allowAnonymousFunction,
  Ct as allowArray,
  kn as allowArrayBuffer,
  Qn as allowBase64,
  On as allowBigInt,
  Qe as allowBoolean,
  bt as allowCardinal,
  bn as allowColor,
  tn as allowDate,
  Sn as allowE164PhoneNumber,
  pn as allowEMailAddress,
  rn as allowError,
  et as allowFiniteNumber,
  Nt as allowFunction,
  Vn as allowHexString,
  _n as allowHostName,
  zn as allowIPv4Address,
  Hn as allowIPv6Address,
  Dn as allowISODate,
  Un as allowISOTimestamp,
  tr as allowIdentifier,
  Kt as allowInstanceOf,
  ct as allowInteger,
  st as allowIntegerInRange,
  Kn as allowJSONString,
  Ht as allowList,
  Gt as allowListSatisfying,
  Pn as allowMap,
  nt as allowNaN,
  Et as allowNamedFunction,
  Bt as allowNativeFunction,
  xt as allowNonEmptyString,
  Ve as allowNumber,
  at as allowNumberInRange,
  Tt as allowObject,
  un as allowOneOf,
  ft as allowOrdinal,
  In as allowPhoneNumber,
  At as allowPlainObject,
  Wn as allowPortNumber,
  on as allowPromise,
  sn as allowRegExp,
  kt as allowScriptedFunction,
  En as allowSet,
  pt as allowString,
  yt as allowStringMatching,
  Nn as allowSymbol,
  St as allowText,
  Ot as allowTextline,
  Bn as allowTypedArray,
  wn as allowURL,
  Tn as allowUUID,
  Xt as allowValueInheritingFrom,
  Mt as allowVanillaObject,
  ea as allowedAnonymousFunction,
  da as allowedArray,
  Za as allowedArrayBuffer,
  go as allowedBase64,
  Ma as allowedBigInt,
  Pr as allowedBoolean,
  zr as allowedCardinal,
  $a as allowedColor,
  Ia as allowedDate,
  Aa as allowedE164PhoneNumber,
  ja as allowedEMailAddress,
  Sa as allowedError,
  Br as allowedFiniteNumber,
  Xr as allowedFunction,
  po as allowedHexString,
  io as allowedHostName,
  no as allowedIPv4Address,
  ao as allowedIPv6Address,
  Xa as allowedISODate,
  eo as allowedISOTimestamp,
  wo as allowedIdentifier,
  wa as allowedInstanceOf,
  Ar as allowedInteger,
  Mr as allowedIntegerInRange,
  uo as allowedJSONString,
  pa as allowedList,
  xa as allowedListSatisfying,
  La as allowedMap,
  kr as allowedNaN,
  na as allowedNamedFunction,
  aa as allowedNativeFunction,
  _r as allowedNonEmptyString,
  Er as allowedNumber,
  Tr as allowedNumberInRange,
  sa as allowedObject,
  Pa as allowedOneOf,
  Ur as allowedOrdinal,
  Ja as allowedPhoneNumber,
  ua as allowedPlainObject,
  so as allowedPortNumber,
  Oa as allowedPromise,
  Na as allowedRegExp,
  ia as allowedScriptedFunction,
  qa as allowedSet,
  Hr as allowedString,
  Wr as allowedStringMatching,
  Ca as allowedSymbol,
  Zr as allowedText,
  Yr as allowedTextline,
  Ga as allowedTypedArray,
  Ra as allowedURL,
  Ya as allowedUUID,
  ya as allowedValueInheritingFrom,
  ga as allowedVanillaObject,
  No as constrained,
  l as escaped,
  $t as expectAnonymousFunction,
  zt as expectArray,
  Jn as expectArrayBuffer,
  Xn as expectBase64,
  hn as expectBigInt,
  Xe as expectBoolean,
  dt as expectCardinal,
  dn as expectColor,
  nn as expectDate,
  mn as expectE164PhoneNumber,
  xn as expectEMailAddress,
  an as expectError,
  tt as expectFiniteNumber,
  Ft as expectFunction,
  er as expectHexString,
  Gn as expectHostName,
  Ln as expectIPv4Address,
  qn as expectIPv6Address,
  Mn as expectISODate,
  Cn as expectISOTimestamp,
  nr as expectIdentifier,
  Yt as expectInstanceOf,
  we as expectInteger,
  lt as expectIntegerInRange,
  Yn as expectJSONString,
  qt as expectList,
  Wt as expectListSatisfying,
  $n as expectMap,
  rt as expectNaN,
  jt as expectNamedFunction,
  Rt as expectNativeFunction,
  wt as expectNonEmptyString,
  xe as expectNumber,
  ot as expectNumberInRange,
  Ie as expectObject,
  fn as expectOneOf,
  gt as expectOrdinal,
  vn as expectPhoneNumber,
  Dt as expectPlainObject,
  Zn as expectPortNumber,
  cn as expectPromise,
  ln as expectRegExp,
  Jt as expectScriptedFunction,
  jn as expectSet,
  ye as expectString,
  It as expectStringMatching,
  Fn as expectSymbol,
  mt as expectText,
  ht as expectTextline,
  Rn as expectTypedArray,
  yn as expectURL,
  An as expectUUID,
  Ye as expectValue,
  Vt as expectValueInheritingFrom,
  Ut as expectVanillaObject,
  ta as expectedAnonymousFunction,
  Lt as expectedArray,
  Ka as expectedArrayBuffer,
  bo as expectedBase64,
  Ua as expectedBigInt,
  $r as expectedBoolean,
  Lr as expectedCardinal,
  Ea as expectedColor,
  va as expectedDate,
  Da as expectedE164PhoneNumber,
  Ba as expectedEMailAddress,
  ma as expectedError,
  Rr as expectedFiniteNumber,
  Vr as expectedFunction,
  xo as expectedHexString,
  co as expectedHostName,
  ro as expectedIPv4Address,
  oo as expectedIPv6Address,
  Va as expectedISODate,
  to as expectedISOTimestamp,
  yo as expectedIdentifier,
  Qt as expectedInstanceOf,
  Dr as expectedInteger,
  ut as expectedIntegerInRange,
  fo as expectedJSONString,
  _t as expectedList,
  Zt as expectedListSatisfying,
  Ha as expectedMap,
  Jr as expectedNaN,
  ra as expectedNamedFunction,
  oa as expectedNativeFunction,
  Gr as expectedNonEmptyString,
  jr as expectedNumber,
  it as expectedNumberInRange,
  la as expectedObject,
  gn as expectedOneOf,
  Cr as expectedOrdinal,
  Ta as expectedPhoneNumber,
  fa as expectedPlainObject,
  lo as expectedPortNumber,
  ha as expectedPromise,
  Fa as expectedRegExp,
  ca as expectedScriptedFunction,
  _a as expectedSet,
  qr as expectedString,
  vt as expectedStringMatching,
  za as expectedSymbol,
  Kr as expectedText,
  Qr as expectedTextline,
  Wa as expectedTypedArray,
  ka as expectedURL,
  Qa as expectedUUID,
  Fr as expectedValue,
  en as expectedValueInheritingFrom,
  ba as expectedVanillaObject,
  pr as global,
  sr as quotable,
  vo as quoted,
  c as rejectNil,
  Po as shortHexColor,
  g as throwError,
  Io as unescaped,
  Ze as validatedArgument
};
//# sourceMappingURL=javascript-interface-library.esm.js.map
