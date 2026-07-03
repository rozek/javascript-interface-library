const fr = globalThis;
function he(e, t) {
  return e == null || // let this method crash like its original
  "hasOwnProperty" in e && typeof e.hasOwnProperty == "function" ? e.hasOwnProperty(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ne(e, t) {
  return e == null || // let this method crash like its original
  "isPrototypeOf" in e && typeof e.isPrototypeOf == "function" ? e.isPrototypeOf(t) : Object.prototype.isPrototypeOf.call(e, t);
}
function gr(e, t) {
  return e == null || // let this method crash like its original
  "propertyIsEnumerable" in e && typeof e.propertyIsEnumerable == "function" ? e.propertyIsEnumerable(t) : Object.prototype.propertyIsEnumerable.call(e, t);
}
function Fe(e) {
  return e == null || // let this method crash like its original
  "toString" in e && typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
function br(e) {
  return e == null || // let this method crash like its original
  "toLocaleString" in e && typeof e.toLocaleString == "function" ? e.toLocaleString() : Fe(e);
}
function pr(e) {
  return e == null || // let this method crash like its original
  "valueOf" in e && typeof e.valueOf == "function" ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function dr(e, ...t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (o != null)
      if (typeof o == "object") {
        const i = Object.getOwnPropertyDescriptors(o);
        for (const w of Reflect.ownKeys(i)) {
          const x = i[w];
          x.enumerable && Object.defineProperty(e, w, x);
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
function xr(e) {
  return e != null;
}
function yr(e) {
  return e == null;
}
function E(e) {
  return typeof e == "boolean" || e instanceof Boolean;
}
function h(e) {
  return typeof e == "number" || e instanceof Number;
}
function v(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(e.valueOf());
}
function j(e) {
  return (typeof e == "number" || e instanceof Number) && isNaN(e.valueOf());
}
function wr(e, t, n, r = !0, o = !0) {
  if (!h(e))
    return !1;
  const i = e.valueOf();
  if (isNaN(i))
    return !1;
  if (v(t)) {
    if (v(n)) {
      if (i < t || !r && i === t || i > n || !o && i === n)
        return !1;
    } else if (i < t || !r && i === t)
      return !1;
  } else if (v(n) && (i > n || !o && i === n))
    return !1;
  return !0;
}
function N(e) {
  if (typeof e != "number" && !(e instanceof Number))
    return !1;
  const t = e.valueOf();
  return isFinite(t) && Math.round(t) === t;
}
function Pe(e, t, n) {
  if (!N(e) || isNaN(e))
    return !1;
  if (v(t)) {
    if (v(n)) {
      if (e < t || e > n)
        return !1;
    } else if (e < t)
      return !1;
  } else if (v(n) && e > n)
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
function I(e) {
  return typeof e == "string" || e instanceof String;
}
const k = /^\s*$/;
function vr(e) {
  return (typeof e == "string" || e instanceof String) && k.test(e.valueOf());
}
function T(e) {
  return (typeof e == "string" || e instanceof String) && !k.test(e.valueOf());
}
function d(e, t) {
  return (typeof e == "string" || e instanceof String) && t.test(e.valueOf());
}
const $e = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function J(e) {
  return d(e, $e);
}
const Ee = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function A(e) {
  return d(e, Ee);
}
function M(e) {
  return typeof e == "function";
}
function D(e) {
  return typeof e == "function" && (e.name == null || e.name === "");
}
function U(e) {
  return typeof e == "function" && e.name != null && e.name !== "";
}
const je = /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/;
function F(e) {
  return typeof e == "function" && je.test(e.toString()) && !e.name.startsWith("bound ");
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
function Be(e, t, n) {
  if (P(e)) {
    for (let r = 0, o = e.length; r < o; r++)
      if (e[r] === void 0)
        return !1;
    return !(t != null && e.length < t || n != null && e.length > n);
  }
  return !1;
}
function Re(e, t, n, r) {
  if (P(e))
    try {
      for (let o = 0, i = e.length; o < i; o++)
        if (!t(e[o]))
          return !1;
      return !(n != null && e.length < n || r != null && e.length > r);
    } catch {
    }
  return !1;
}
function Ir(e, t) {
  return e instanceof t;
}
function Sr(e, t) {
  return Ne(t, e);
}
function q(e) {
  return e instanceof Date;
}
function G(e) {
  return e instanceof Error;
}
function _(e) {
  return e != null && typeof e.then == "function";
}
function W(e) {
  return e instanceof RegExp;
}
function ke(e, t) {
  return t.indexOf(e) >= 0;
}
function Z(e) {
  if (!I(e))
    return !1;
  let t = e.valueOf().toLowerCase();
  return m.hasOwnProperty(t) || /^#[a-fA-F0-9]{6}$/.test(t) || /^#[a-fA-F0-9]{8}$/.test(t) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(t) || // not perfect
  /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,\s*([01]|[01]?[.][0-9]+)\)$/.test(t);
}
const Te = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
function K(e) {
  return d(e, Te);
}
const Je = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function Y(e) {
  if (!d(e, Je) || e === "")
    return !1;
  try {
    return new URL(e, "file://"), !0;
  } catch {
    return !1;
  }
}
const Ae = /^\+?[0-9(][0-9 \-.\/()]*[0-9)]$/;
function Q(e) {
  if (!I(e))
    return !1;
  let t = e.valueOf();
  if (!Ae.test(t))
    return !1;
  let n = t.replace(/[^0-9]/g, "");
  return t.charAt(0) === "+" ? /^[1-9][0-9]{6,14}$/.test(n) : n.length >= 3 && n.length <= 16;
}
const Me = /^\+[1-9][0-9]{6,14}$/;
function X(e) {
  return d(e, Me);
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
const De = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function oe(e) {
  return d(e, De);
}
const Ue = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
function ie(e) {
  if (!I(e))
    return !1;
  const t = Ue.exec(e.valueOf());
  if (t == null)
    return !1;
  const [n, r, o] = [t[1], t[2], t[3]].map(Number), i = new Date(Date.UTC(n, r - 1, o));
  return (
    // detects overflows like 02-31
    i.getUTCFullYear() === n && i.getUTCMonth() === r - 1 && i.getUTCDate() === o
  );
}
const Ce = new RegExp(
  "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}(:[0-9]{2}([.][0-9]+)?)?(Z|[+-][0-9]{2}:[0-9]{2})?$"
);
function ce(e) {
  return d(e, Ce) && !isNaN(Date.parse(e.valueOf()));
}
const ze = new RegExp(
  "^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$"
);
function se(e) {
  return d(e, ze);
}
const Le = /^[0-9a-fA-F:.]+$/;
function le(e) {
  if (!I(e) || !Le.test(e.valueOf()))
    return !1;
  try {
    return new URL("http://[" + e.valueOf() + "]/"), !0;
  } catch {
    return !1;
  }
}
const He = new RegExp(
  "^(?=.{1,253}$)[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$",
  "i"
);
function ue(e) {
  return d(e, He);
}
function fe(e) {
  return Pe(e, 1, 65535);
}
function ge(e) {
  if (!I(e))
    return !1;
  try {
    return JSON.parse(e.valueOf()), !0;
  } catch {
    return !1;
  }
}
const qe = new RegExp(
  "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$"
);
function be(e) {
  return d(e, qe);
}
const Ge = /^[0-9a-fA-F]+$/;
function pe(e) {
  return d(e, Ge);
}
const c = !1, s = !0;
function _e(e, t, n, r, o) {
  if (t == null) {
    if (r)
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
function a(e, t, n) {
  let r = function(i, w) {
    return _e(
      i,
      w,
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
    return We(r, i);
  } else
    return r;
}
function We(e, t) {
  return e == null && g("MissingArgument: no function given"), typeof e != "function" && g("InvalidArgument: the given 1st Argument is not a JavaScript function"), t == null && g("MissingArgument: no desired name given"), typeof t != "string" && !(t instanceof String) && g("InvalidArgument: the given desired name is not a string"), e.name === t || Object.defineProperty(e, "name", {
    value: t.valueOf()
  }), e;
}
function Ze(e, t) {
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
const mr = Ze, Ke = /* @__PURE__ */ a(
  E,
  s,
  "boolean value"
), Or = Ke, Ye = /* @__PURE__ */ a(
  E,
  c,
  "boolean value"
), hr = Ye, Qe = /* @__PURE__ */ a(
  h,
  s,
  "numeric value"
), Nr = Qe, de = /* @__PURE__ */ a(
  h,
  c,
  "numeric value"
), Fr = de, Xe = /* @__PURE__ */ a(
  v,
  s,
  "finite numeric value"
), Pr = Xe, Ve = /* @__PURE__ */ a(
  v,
  c,
  "finite numeric value"
), $r = Ve, et = /* @__PURE__ */ a(
  j,
  s,
  "NaN value"
), Er = et, tt = /* @__PURE__ */ a(
  j,
  c,
  "NaN value"
), jr = tt;
function nt(e, t, n, r, o, i) {
  return t == null ? t : at(e, t, n, r, o, i);
}
const Br = nt;
function rt(e, t, n, r, o, i) {
  if (de(e, t), isNaN(t) && g(
    `InvalidArgument: the given ${l(e)} is not-a-number`
  ), o == null && (o = !0), i == null && (i = !0), n != null && isFinite(n)) {
    if (r != null && isFinite(r)) {
      if (t < n || !o && t === n || t > r || !i && t === r)
        throw new RangeError(
          `the given ${l(e)} (${t}) is outside the allowed range (${n}...${r})`
        );
    } else if (t < n || !o && t === n)
      throw new RangeError(
        `the given ${l(e)} is below the allowed minimum (${t} ${o ? "<" : "<="} ${n})`
      );
  } else if (r != null && isFinite(r) && (t > r || !i && t === r))
    throw new RangeError(
      `the given ${l(e)} exceeds the allowed maximum (${t} ${i ? ">" : ">="} ${r})`
    );
  return t.valueOf();
}
const at = rt, ot = /* @__PURE__ */ a(
  N,
  s,
  "integral numeric value"
), Rr = ot, xe = /* @__PURE__ */ a(
  N,
  c,
  "integral numeric value"
), kr = xe;
function it(e, t, n, r) {
  return t == null ? t : st(e, t, n, r);
}
const Tr = it;
function ct(e, t, n, r) {
  if (xe(e, t), isNaN(t) && g(
    `InvalidArgument: the given ${l(e)} is not-a-number`
  ), n != null && isFinite(n)) {
    if (r != null && isFinite(r)) {
      if (t < n || t > r)
        throw new RangeError(
          `the given ${l(e)} (${t}) is outside the allowed range (${n}...${r})`
        );
    } else if (t < n)
      throw new RangeError(
        `the given ${l(e)} is below the allowed minimum (${t} < ${n})`
      );
  } else if (r != null && isFinite(r) && t > r)
    throw new RangeError(
      `the given ${l(e)} exceeds the allowed maximum (${t} > ${r})`
    );
  return t.valueOf();
}
const st = ct, lt = /* @__PURE__ */ a(
  B,
  s,
  "ordinal number"
), Jr = lt, ut = /* @__PURE__ */ a(
  B,
  c,
  "ordinal number"
), Ar = ut, ft = /* @__PURE__ */ a(
  R,
  s,
  "cardinal number"
), Mr = ft, gt = /* @__PURE__ */ a(
  R,
  c,
  "cardinal number"
), Dr = gt, bt = /* @__PURE__ */ a(
  I,
  s,
  "literal string"
), Ur = bt, ye = /* @__PURE__ */ a(
  I,
  c,
  "literal string"
), Cr = ye, pt = /* @__PURE__ */ a(
  T,
  s,
  "non-empty literal string"
), zr = pt, dt = /* @__PURE__ */ a(
  T,
  c,
  "non-empty literal string"
), Lr = dt;
function xt(e, t, n) {
  return t == null ? t : wt(e, t, n);
}
const Hr = xt;
function yt(e, t, n) {
  if (ye(e, t), n.test(t))
    return t.valueOf();
  g(
    `InvalidArgument: the given ${l(e)} does not match the specified pattern`
  );
}
const wt = yt, vt = /* @__PURE__ */ a(
  J,
  s,
  "literal text"
), qr = vt, It = /* @__PURE__ */ a(
  J,
  c,
  "literal text"
), Gr = It, St = /* @__PURE__ */ a(
  A,
  s,
  "single line of text"
), _r = St, mt = /* @__PURE__ */ a(
  A,
  c,
  "single line of text"
), Wr = mt, Ot = /* @__PURE__ */ a(
  M,
  s,
  "JavaScript function"
), Zr = Ot, ht = /* @__PURE__ */ a(
  M,
  c,
  "JavaScript function"
), Kr = ht, Nt = /* @__PURE__ */ a(
  D,
  s,
  "anonymous JavaScript function"
), Yr = Nt, Ft = /* @__PURE__ */ a(
  D,
  c,
  "anonymous JavaScript function"
), Qr = Ft, Pt = /* @__PURE__ */ a(
  U,
  s,
  "named JavaScript function"
), Xr = Pt, $t = /* @__PURE__ */ a(
  U,
  c,
  "named JavaScript function"
), Vr = $t, Et = /* @__PURE__ */ a(
  F,
  s,
  "native JavaScript function"
), ea = Et, jt = /* @__PURE__ */ a(
  F,
  c,
  "native JavaScript function"
), ta = jt, Bt = /* @__PURE__ */ a(
  C,
  s,
  "scripted JavaScript function"
), na = Bt, Rt = /* @__PURE__ */ a(
  C,
  c,
  "scripted JavaScript function"
), ra = Rt, kt = /* @__PURE__ */ a(
  z,
  s,
  "JavaScript object"
), aa = kt, we = /* @__PURE__ */ a(
  z,
  c,
  "JavaScript object"
), oa = we, Tt = /* @__PURE__ */ a(
  L,
  s,
  '"plain" JavaScript object'
), ia = Tt, Jt = /* @__PURE__ */ a(
  L,
  c,
  '"plain" JavaScript object'
), ca = Jt, At = /* @__PURE__ */ a(
  H,
  s,
  '"vanilla" JavaScript object'
), sa = At, Mt = /* @__PURE__ */ a(
  H,
  c,
  '"vanilla" JavaScript object'
), la = Mt;
function Dt(e, t) {
  return t == null ? t : Ct(e, t);
}
const ua = Dt;
function Ut(e, t) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), P(t))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is no JavaScript array`
  );
}
const Ct = Ut;
function zt(e, t, n, r, o) {
  return t == null ? t : Ht(e, t, n, r, o);
}
const fa = zt;
function Lt(e, t, n, r, o) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), Be(t, r, o))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is ` + (n == null ? "either not a list or contains an invalid number of elements" : "no " + l(n))
  );
}
const Ht = Lt;
function qt(e, t, n, r, o, i) {
  return t == null ? t : _t(
    e,
    t,
    n,
    r,
    o,
    i
  );
}
const ga = qt;
function Gt(e, t, n, r, o, i) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), Re(t, n, o, i))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is ` + (r == null ? "either not a list or contains invalid elements" : "no " + l(r))
  );
}
const _t = Gt;
function Wt(e, t, n, r) {
  return t == null ? t : Kt(e, t, n, r);
}
const ba = Wt;
function Zt(e, t, n, r) {
  return t == null && g(`MissingArgument: no ${l(e)} given`), t instanceof n || g(
    `InvalidArgument: the given ${l(e)} is no ${l(r)}`
  ), t;
}
const Kt = Zt;
function Yt(e, t, n, r) {
  return t == null ? t : Xt(e, t, n, r);
}
const pa = Yt;
function Qt(e, t, n, r) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), n.isPrototypeOf(t))
    return t;
  g(
    `InvalidArgument: the given ${l(e)} is no ${l(r)}`
  );
}
const Xt = Qt, Vt = /* @__PURE__ */ a(
  q,
  s,
  "JavaScript Date object"
), da = Vt, en = /* @__PURE__ */ a(
  q,
  c,
  "JavaScript Date object"
), xa = en, tn = /* @__PURE__ */ a(
  G,
  s,
  "JavaScript Error object"
), ya = tn, nn = /* @__PURE__ */ a(
  G,
  c,
  "JavaScript Error object"
), wa = nn, rn = /* @__PURE__ */ a(
  _,
  s,
  'JavaScript Promise (or "Thenable") object'
), va = rn, an = /* @__PURE__ */ a(
  _,
  c,
  'JavaScript Promise (or "Thenable") object'
), Ia = an, on = /* @__PURE__ */ a(
  W,
  s,
  "JavaScript RegExp object"
), Sa = on, cn = /* @__PURE__ */ a(
  W,
  c,
  "JavaScript RegExp object"
), ma = cn;
function sn(e, t, n) {
  return t == null ? t : un(e, t, n);
}
const Oa = sn;
function ln(e, t, n) {
  if (t == null && g(`MissingArgument: no ${l(e)} given`), ke(t, n))
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
const un = ln, fn = /* @__PURE__ */ a(
  Z,
  s,
  "CSS color specification"
), ha = fn, gn = /* @__PURE__ */ a(
  Z,
  c,
  "CSS color specification"
), Na = gn, bn = /* @__PURE__ */ a(
  K,
  s,
  "EMail address"
), Fa = bn, pn = /* @__PURE__ */ a(
  K,
  c,
  "EMail address"
), Pa = pn, dn = /* @__PURE__ */ a(
  Y,
  s,
  "URL"
), $a = dn, xn = /* @__PURE__ */ a(
  Y,
  c,
  "URL"
), Ea = xn, yn = /* @__PURE__ */ a(
  Q,
  s,
  "phone number"
), ja = yn, wn = /* @__PURE__ */ a(
  Q,
  c,
  "phone number"
), Ba = wn, vn = /* @__PURE__ */ a(
  X,
  s,
  "phone number in E.164 format"
), Ra = vn, In = /* @__PURE__ */ a(
  X,
  c,
  "phone number in E.164 format"
), ka = In, Sn = /* @__PURE__ */ a(
  V,
  s,
  "BigInt value"
), Ta = Sn, mn = /* @__PURE__ */ a(
  V,
  c,
  "BigInt value"
), Ja = mn, On = /* @__PURE__ */ a(
  ee,
  s,
  "symbol"
), Aa = On, hn = /* @__PURE__ */ a(
  ee,
  c,
  "symbol"
), Ma = hn, Nn = /* @__PURE__ */ a(
  te,
  s,
  "JavaScript Map"
), Da = Nn, Fn = /* @__PURE__ */ a(
  te,
  c,
  "JavaScript Map"
), Ua = Fn, Pn = /* @__PURE__ */ a(
  ne,
  s,
  "JavaScript Set"
), Ca = Pn, $n = /* @__PURE__ */ a(
  ne,
  c,
  "JavaScript Set"
), za = $n, En = /* @__PURE__ */ a(
  re,
  s,
  "typed array"
), La = En, jn = /* @__PURE__ */ a(
  re,
  c,
  "typed array"
), Ha = jn, Bn = /* @__PURE__ */ a(
  ae,
  s,
  "ArrayBuffer"
), qa = Bn, Rn = /* @__PURE__ */ a(
  ae,
  c,
  "ArrayBuffer"
), Ga = Rn, kn = /* @__PURE__ */ a(
  oe,
  s,
  "UUID"
), _a = kn, Tn = /* @__PURE__ */ a(
  oe,
  c,
  "UUID"
), Wa = Tn, Jn = /* @__PURE__ */ a(
  ie,
  s,
  "ISO 8601 date"
), Za = Jn, An = /* @__PURE__ */ a(
  ie,
  c,
  "ISO 8601 date"
), Ka = An, Mn = /* @__PURE__ */ a(
  ce,
  s,
  "ISO 8601 timestamp"
), Ya = Mn, Dn = /* @__PURE__ */ a(
  ce,
  c,
  "ISO 8601 timestamp"
), Qa = Dn, Un = /* @__PURE__ */ a(
  se,
  s,
  "IPv4 address"
), Xa = Un, Cn = /* @__PURE__ */ a(
  se,
  c,
  "IPv4 address"
), Va = Cn, zn = /* @__PURE__ */ a(
  le,
  s,
  "IPv6 address"
), eo = zn, Ln = /* @__PURE__ */ a(
  le,
  c,
  "IPv6 address"
), to = Ln, Hn = /* @__PURE__ */ a(
  ue,
  s,
  "host name"
), no = Hn, qn = /* @__PURE__ */ a(
  ue,
  c,
  "host name"
), ro = qn, Gn = /* @__PURE__ */ a(
  fe,
  s,
  "port number"
), ao = Gn, _n = /* @__PURE__ */ a(
  fe,
  c,
  "port number"
), oo = _n, Wn = /* @__PURE__ */ a(
  ge,
  s,
  "JSON string"
), io = Wn, Zn = /* @__PURE__ */ a(
  ge,
  c,
  "JSON string"
), co = Zn, Kn = /* @__PURE__ */ a(
  be,
  s,
  "Base64-encoded string"
), so = Kn, Yn = /* @__PURE__ */ a(
  be,
  c,
  "Base64-encoded string"
), lo = Yn, Qn = /* @__PURE__ */ a(
  pe,
  s,
  "hexadecimal string"
), uo = Qn, Xn = /* @__PURE__ */ a(
  pe,
  c,
  "hexadecimal string"
), fo = Xn, Vn = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?/g, ve = /[\x00-\x1f\x7f-\x9f]/g;
function l(e) {
  return e.replace(Vn, (t) => t === "\\" ? "\\\\" : t).replace(ve, (t) => {
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
const er = /\\[0bfnrtv'"\\\/]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}/g;
function go(e) {
  return e.replace(er, (t) => {
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
const tr = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|'/g, nr = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|"/g, rr = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]?|`|\$\{/g;
function ar(e, t = '"') {
  const n = t === "'" ? tr : t === "`" ? rr : nr;
  return e.replace(n, (r) => {
    switch (r) {
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
        return r;
    }
  }).replace(ve, (r) => {
    switch (r) {
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
        const o = r.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(o.length) + o;
      }
    }
  });
}
function bo(e, t = '"') {
  return t + ar(e, t) + t;
}
const or = /[&<>"'\x00-\x1F\x7F-\x9F\\]/g;
function ir(e, t) {
  return t = (t || "").trim() || "<br/>", e.replace(or, (n) => {
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
        const r = n.charCodeAt(0).toString(16);
        return "&#x0000".substring(0, 7 - r.length) + r + ";";
      }
    }
  });
}
const cr = /[:`*_\[\]#|~]/g;
function po(e, t) {
  return ir(e, t).replace(
    cr,
    (n) => "&#" + n.charCodeAt(0) + ";"
  );
}
function O(e, t, n, r) {
  if (e === t)
    return !1;
  let o, i;
  n != null && typeof n == "object" ? (o = n.Mode, i = n.Tolerance) : o = n;
  let w = typeof e;
  if (w !== typeof t)
    return !0;
  function x(f, u, p, y) {
    if (!Array.isArray(u) || f.length !== u.length)
      return !0;
    for (let b = 0, S = f.length; b < S; b++)
      if (O(f[b], u[b], p, y))
        return !0;
    return !1;
  }
  function Ie(f, u, p, y) {
    if (!(u instanceof Map) || f.size !== u.size)
      return !0;
    let b = !1;
    return f.forEach(function(S, $) {
      b || (b = !u.has($) || O(S, u.get($), p, y));
    }), b;
  }
  function Se(f, u) {
    if (!(u instanceof Set) || f.size !== u.size)
      return !0;
    let p = !1;
    return f.forEach(function(y) {
      !p && !u.has(y) && (p = !0);
    }), p;
  }
  function me(f, u) {
    if (Object.getPrototypeOf(f) !== Object.getPrototypeOf(u) || f.byteLength !== u.byteLength)
      return !0;
    let p = new Uint8Array(
      f.buffer,
      f.byteOffset,
      f.byteLength
    ), y = new Uint8Array(
      u.buffer,
      u.byteOffset,
      u.byteLength
    );
    for (let b = 0, S = p.length; b < S; b++)
      if (p[b] !== y[b])
        return !0;
    return !1;
  }
  function Oe(f, u, p, y) {
    if (Object.getPrototypeOf(f) !== Object.getPrototypeOf(u))
      return !0;
    for (let b in f)
      if (!(b in u))
        return !0;
    for (let b in u)
      if (!(b in f) || O(f[b], u[b], p, y))
        return !0;
    return !1;
  }
  switch (w) {
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
        let u = e.getTime(), p = t.getTime();
        return u !== p && !(isNaN(u) && isNaN(p));
      }
      if (e instanceof RegExp)
        return o === "by-reference" ? !0 : !(t instanceof RegExp) || e.source !== t.source || e.flags !== t.flags;
      r == null && (r = /* @__PURE__ */ new WeakMap());
      let f = r.get(e);
      return f == null && r.set(e, f = /* @__PURE__ */ new WeakSet()), f.has(t) ? !1 : (f.add(t), Array.isArray(e) ? x(e, t, n, r) : e instanceof Map ? o === "by-reference" ? !0 : Ie(e, t, n, r) : e instanceof Set ? o === "by-reference" ? !0 : Se(e, t) : ArrayBuffer.isView(e) ? o === "by-reference" ? !0 : me(e, t) : o === "by-reference" ? !0 : Oe(e, t, n, r));
    default:
      return !0;
  }
}
function xo(e, t, n) {
  return !O(e, t, n);
}
function sr(e) {
  we("candidate", e);
  for (let t in e)
    if (he(e, t))
      return !1;
  return !0;
}
function yo(e) {
  return !sr(e);
}
function lr(e) {
  return /^\s*$/.test(e);
}
function wo(e) {
  return !lr(e);
}
function vo(e, t = -1 / 0, n = 1 / 0) {
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
function ur(e) {
  let t = e.toLowerCase();
  if (m.hasOwnProperty(t) && (e = m[t]), /^#[a-fA-F0-9]{6}$/.test(e))
    return e + "FF";
  if (/^#[a-fA-F0-9]{8}$/.test(e))
    return e;
  const n = "0123456789ABCDEF";
  function r(x) {
    return x = Math.max(0, Math.min(255, Math.round(x))), n[Math.trunc(x / 16)] + n[x % 16];
  }
  let i = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);
  if (i != null)
    return "#" + r(parseInt(i[1], 10)) + r(parseInt(i[2], 10)) + r(parseInt(i[3], 10)) + "FF";
  if (i = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e), i != null)
    return "#" + r(parseInt(i[1], 10)) + r(parseInt(i[2], 10)) + r(parseInt(i[3], 10)) + r(parseFloat(i[4]) * 255);
  g("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function Io(e) {
  let t = e.toLowerCase();
  if (m.hasOwnProperty(t))
    return m[t];
  if (/^#[a-fA-F0-9]{6}$/.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + ",1)";
  if (/^#[a-fA-F0-9]{8}$/.test(e))
    return "rgba(" + parseInt(e.slice(1, 3), 16) + "," + parseInt(e.slice(3, 5), 16) + "," + parseInt(e.slice(5, 7), 16) + "," + parseInt(e.slice(7), 16) / 255 + ")";
  let r = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);
  if (r != null)
    return e.slice(0, e.length - 1) + ",1)";
  if (r = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e), r != null)
    return e;
  g("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function So(e) {
  return ur(e).slice(0, 7);
}
export {
  m as ColorSet,
  We as FunctionWithName,
  ir as HTMLsafe,
  ur as HexColor,
  po as MarkDownSafe,
  sr as ObjectIsEmpty,
  yo as ObjectIsNotEmpty,
  dr as ObjectMergedWith,
  he as Object_hasOwnProperty,
  Ne as Object_isPrototypeOf,
  gr as Object_propertyIsEnumerable,
  br as Object_toLocaleString,
  Fe as Object_toString,
  pr as Object_valueOf,
  Io as RGBAColor,
  lr as StringIsEmpty,
  wo as StringIsNotEmpty,
  a as ValidatorForClassifier,
  xr as ValueExists,
  Sr as ValueInheritsFrom,
  D as ValueIsAnonymousFunction,
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
  vr as ValueIsEmptyString,
  G as ValueIsError,
  v as ValueIsFiniteNumber,
  M as ValueIsFunction,
  pe as ValueIsHexString,
  ue as ValueIsHostName,
  se as ValueIsIPv4Address,
  le as ValueIsIPv6Address,
  ie as ValueIsISODate,
  ce as ValueIsISOTimestamp,
  Ir as ValueIsInstanceOf,
  N as ValueIsInteger,
  Pe as ValueIsIntegerInRange,
  ge as ValueIsJSONString,
  Be as ValueIsList,
  Re as ValueIsListSatisfying,
  te as ValueIsMap,
  yr as ValueIsMissing,
  j as ValueIsNaN,
  U as ValueIsNamedFunction,
  F as ValueIsNativeFunction,
  T as ValueIsNonEmptyString,
  h as ValueIsNumber,
  wr as ValueIsNumberInRange,
  z as ValueIsObject,
  ke as ValueIsOneOf,
  B as ValueIsOrdinal,
  Q as ValueIsPhoneNumber,
  L as ValueIsPlainObject,
  fe as ValueIsPortNumber,
  _ as ValueIsPromise,
  W as ValueIsRegExp,
  C as ValueIsScriptedFunction,
  ne as ValueIsSet,
  I as ValueIsString,
  d as ValueIsStringMatching,
  ee as ValueIsSymbol,
  J as ValueIsText,
  A as ValueIsTextline,
  re as ValueIsTypedArray,
  Y as ValueIsURL,
  oe as ValueIsUUID,
  H as ValueIsVanillaObject,
  xo as ValuesAreEqual,
  O as ValuesDiffer,
  s as acceptNil,
  Nt as allowAnonymousFunction,
  Dt as allowArray,
  Bn as allowArrayBuffer,
  Kn as allowBase64,
  Sn as allowBigInt,
  Ke as allowBoolean,
  ft as allowCardinal,
  fn as allowColor,
  Vt as allowDate,
  vn as allowE164PhoneNumber,
  bn as allowEMailAddress,
  tn as allowError,
  Xe as allowFiniteNumber,
  Ot as allowFunction,
  Qn as allowHexString,
  Hn as allowHostName,
  Un as allowIPv4Address,
  zn as allowIPv6Address,
  Jn as allowISODate,
  Mn as allowISOTimestamp,
  Wt as allowInstanceOf,
  ot as allowInteger,
  it as allowIntegerInRange,
  Wn as allowJSONString,
  zt as allowList,
  qt as allowListSatisfying,
  Nn as allowMap,
  et as allowNaN,
  Pt as allowNamedFunction,
  Et as allowNativeFunction,
  pt as allowNonEmptyString,
  Qe as allowNumber,
  nt as allowNumberInRange,
  kt as allowObject,
  sn as allowOneOf,
  lt as allowOrdinal,
  yn as allowPhoneNumber,
  Tt as allowPlainObject,
  Gn as allowPortNumber,
  rn as allowPromise,
  on as allowRegExp,
  Bt as allowScriptedFunction,
  Pn as allowSet,
  bt as allowString,
  xt as allowStringMatching,
  On as allowSymbol,
  vt as allowText,
  St as allowTextline,
  En as allowTypedArray,
  dn as allowURL,
  kn as allowUUID,
  Yt as allowValueInheritingFrom,
  At as allowVanillaObject,
  Yr as allowedAnonymousFunction,
  ua as allowedArray,
  qa as allowedArrayBuffer,
  so as allowedBase64,
  Ta as allowedBigInt,
  Or as allowedBoolean,
  Mr as allowedCardinal,
  ha as allowedColor,
  da as allowedDate,
  Ra as allowedE164PhoneNumber,
  Fa as allowedEMailAddress,
  ya as allowedError,
  Pr as allowedFiniteNumber,
  Zr as allowedFunction,
  uo as allowedHexString,
  no as allowedHostName,
  Xa as allowedIPv4Address,
  eo as allowedIPv6Address,
  Za as allowedISODate,
  Ya as allowedISOTimestamp,
  ba as allowedInstanceOf,
  Rr as allowedInteger,
  Tr as allowedIntegerInRange,
  io as allowedJSONString,
  fa as allowedList,
  ga as allowedListSatisfying,
  Da as allowedMap,
  Er as allowedNaN,
  Xr as allowedNamedFunction,
  ea as allowedNativeFunction,
  zr as allowedNonEmptyString,
  Nr as allowedNumber,
  Br as allowedNumberInRange,
  aa as allowedObject,
  Oa as allowedOneOf,
  Jr as allowedOrdinal,
  ja as allowedPhoneNumber,
  ia as allowedPlainObject,
  ao as allowedPortNumber,
  va as allowedPromise,
  Sa as allowedRegExp,
  na as allowedScriptedFunction,
  Ca as allowedSet,
  Ur as allowedString,
  Hr as allowedStringMatching,
  Aa as allowedSymbol,
  qr as allowedText,
  _r as allowedTextline,
  La as allowedTypedArray,
  $a as allowedURL,
  _a as allowedUUID,
  pa as allowedValueInheritingFrom,
  sa as allowedVanillaObject,
  vo as constrained,
  l as escaped,
  Ft as expectAnonymousFunction,
  Ut as expectArray,
  Rn as expectArrayBuffer,
  Yn as expectBase64,
  mn as expectBigInt,
  Ye as expectBoolean,
  gt as expectCardinal,
  gn as expectColor,
  en as expectDate,
  In as expectE164PhoneNumber,
  pn as expectEMailAddress,
  nn as expectError,
  Ve as expectFiniteNumber,
  ht as expectFunction,
  Xn as expectHexString,
  qn as expectHostName,
  Cn as expectIPv4Address,
  Ln as expectIPv6Address,
  An as expectISODate,
  Dn as expectISOTimestamp,
  Zt as expectInstanceOf,
  xe as expectInteger,
  ct as expectIntegerInRange,
  Zn as expectJSONString,
  Lt as expectList,
  Gt as expectListSatisfying,
  Fn as expectMap,
  tt as expectNaN,
  $t as expectNamedFunction,
  jt as expectNativeFunction,
  dt as expectNonEmptyString,
  de as expectNumber,
  rt as expectNumberInRange,
  we as expectObject,
  ln as expectOneOf,
  ut as expectOrdinal,
  wn as expectPhoneNumber,
  Jt as expectPlainObject,
  _n as expectPortNumber,
  an as expectPromise,
  cn as expectRegExp,
  Rt as expectScriptedFunction,
  $n as expectSet,
  ye as expectString,
  yt as expectStringMatching,
  hn as expectSymbol,
  It as expectText,
  mt as expectTextline,
  jn as expectTypedArray,
  xn as expectURL,
  Tn as expectUUID,
  Ze as expectValue,
  Qt as expectValueInheritingFrom,
  Mt as expectVanillaObject,
  Qr as expectedAnonymousFunction,
  Ct as expectedArray,
  Ga as expectedArrayBuffer,
  lo as expectedBase64,
  Ja as expectedBigInt,
  hr as expectedBoolean,
  Dr as expectedCardinal,
  Na as expectedColor,
  xa as expectedDate,
  ka as expectedE164PhoneNumber,
  Pa as expectedEMailAddress,
  wa as expectedError,
  $r as expectedFiniteNumber,
  Kr as expectedFunction,
  fo as expectedHexString,
  ro as expectedHostName,
  Va as expectedIPv4Address,
  to as expectedIPv6Address,
  Ka as expectedISODate,
  Qa as expectedISOTimestamp,
  Kt as expectedInstanceOf,
  kr as expectedInteger,
  st as expectedIntegerInRange,
  co as expectedJSONString,
  Ht as expectedList,
  _t as expectedListSatisfying,
  Ua as expectedMap,
  jr as expectedNaN,
  Vr as expectedNamedFunction,
  ta as expectedNativeFunction,
  Lr as expectedNonEmptyString,
  Fr as expectedNumber,
  at as expectedNumberInRange,
  oa as expectedObject,
  un as expectedOneOf,
  Ar as expectedOrdinal,
  Ba as expectedPhoneNumber,
  ca as expectedPlainObject,
  oo as expectedPortNumber,
  Ia as expectedPromise,
  ma as expectedRegExp,
  ra as expectedScriptedFunction,
  za as expectedSet,
  Cr as expectedString,
  wt as expectedStringMatching,
  Ma as expectedSymbol,
  Gr as expectedText,
  Wr as expectedTextline,
  Ha as expectedTypedArray,
  Ea as expectedURL,
  Wa as expectedUUID,
  mr as expectedValue,
  Xt as expectedValueInheritingFrom,
  la as expectedVanillaObject,
  fr as global,
  ar as quotable,
  bo as quoted,
  c as rejectNil,
  So as shortHexColor,
  g as throwError,
  go as unescaped,
  _e as validatedArgument
};
//# sourceMappingURL=javascript-interface-library.esm.js.map
