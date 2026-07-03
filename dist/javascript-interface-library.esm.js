const Yn = /* @__PURE__ */ Function("return this")();
function ie(e, n) {
  return e == null || // let this method crash like its original
  "hasOwnProperty" in e && typeof e.hasOwnProperty == "function" ? e.hasOwnProperty(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function oe(e, n) {
  return e == null || // let this method crash like its original
  "isPrototypeOf" in e && typeof e.isPrototypeOf == "function" ? e.isPrototypeOf(n) : Object.prototype.isPrototypeOf.call(e, n);
}
function An(e, n) {
  return e == null || // let this method crash like its original
  "propertyIsEnumerable" in e && typeof e.propertyIsEnumerable == "function" ? e.propertyIsEnumerable(n) : Object.prototype.propertyIsEnumerable.call(e, n);
}
function ce(e) {
  return e == null || // let this method crash like its original
  "toString" in e && typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
function Vn(e) {
  return e == null || // let this method crash like its original
  "toLocaleString" in e && typeof e.toLocaleString == "function" ? e.toLocaleString() : ce(e);
}
function et(e) {
  return e == null || // let this method crash like its original
  "valueOf" in e && typeof e.valueOf == "function" ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function nt(e, ...n) {
  for (let t = 0, r = n.length; t < r; t++) {
    let i = n[t];
    if (i != null)
      if (typeof i == "object")
        for (let o in i) {
          let d = Object.getOwnPropertyDescriptor(i, o);
          d != null && Object.defineProperty(e, o, d);
        }
      else
        g("InvalidArgument: argument #" + (t + 1) + " is not an object");
  }
  return e;
}
function g(e) {
  let n = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (n == null)
    throw new Error(e);
  {
    let t = new Error(n[2]);
    throw t.name = n[1], t;
  }
}
function tt(e) {
  return e != null;
}
function rt(e) {
  return e == null;
}
function E(e) {
  return typeof e == "boolean" || e instanceof Boolean;
}
function m(e) {
  return typeof e == "number" || e instanceof Number;
}
function y(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(e.valueOf());
}
function P(e) {
  return (typeof e == "number" || e instanceof Number) && isNaN(e.valueOf());
}
function at(e, n, t, r = !0, i = !0) {
  if (!m(e) || isNaN(e))
    return !1;
  if (y(n)) {
    if (y(t)) {
      if (e < n || !r && e === n || e > t || !i && e === t)
        return !1;
    } else if (e < n || !r && e === n)
      return !1;
  } else if (y(t) && (e > t || !i && e === t))
    return !1;
  return !0;
}
function F(e) {
  return typeof e != "number" && !(e instanceof Number) ? !1 : (e = e.valueOf(), isFinite(e) && Math.round(e) === e);
}
function it(e, n, t) {
  if (!F(e) || isNaN(e))
    return !1;
  if (y(n)) {
    if (y(t)) {
      if (e < n || e > t)
        return !1;
    } else if (e < n)
      return !1;
  } else if (y(t) && e > t)
    return !1;
  return !0;
}
function j(e) {
  return typeof e != "number" && !(e instanceof Number) ? !1 : (e = e.valueOf(), isFinite(e) && Math.round(e) === e && e >= 0);
}
function R(e) {
  return typeof e != "number" && !(e instanceof Number) ? !1 : (e = e.valueOf(), isFinite(e) && Math.round(e) === e && e >= 1);
}
function S(e) {
  return typeof e == "string" || e instanceof String;
}
const k = /^\s*$/;
function ot(e) {
  return (typeof e == "string" || e instanceof String) && k.test(e.valueOf());
}
function C(e) {
  return (typeof e == "string" || e instanceof String) && !k.test(e.valueOf());
}
function h(e, n) {
  return (typeof e == "string" || e instanceof String) && n.test(e.valueOf());
}
const le = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function B(e) {
  return h(e, le);
}
const se = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function J(e) {
  return h(e, se);
}
function L(e) {
  return typeof e == "function";
}
function T(e) {
  return typeof e == "function" && (e.name == null || e.name === "");
}
function q(e) {
  return typeof e == "function" && e.name != null && e.name !== "";
}
function z(e) {
  return typeof e == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString());
}
function M(e) {
  return typeof e == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(e.toString());
}
function U(e) {
  return e != null && typeof e == "object";
}
function D(e) {
  return e != null && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function G(e) {
  return e != null && typeof e == "object" && !(e instanceof Object);
}
const N = Array.isArray;
function fe(e, n, t) {
  if (N(e)) {
    for (let r = 0, i = e.length; r < i; r++)
      if (e[r] === void 0)
        return !1;
    return !(n != null && e.length < n || t != null && e.length > t);
  }
  return !1;
}
function ue(e, n, t, r) {
  if (N(e))
    try {
      for (let i = 0, o = e.length; i < o; i++)
        if (!n(e[i]))
          return !1;
      return !(t != null && e.length < t || r != null && e.length > r);
    } catch {
    }
  return !1;
}
function ct(e, n) {
  return e instanceof n;
}
function lt(e, n) {
  return oe(n, e);
}
function _(e) {
  return e instanceof Date;
}
function H(e) {
  return e instanceof Error;
}
function W(e) {
  return e != null && typeof e.then == "function";
}
function Z(e) {
  return e instanceof RegExp;
}
function ge(e, n) {
  return n.indexOf(e) >= 0;
}
function K(e) {
  if (!S(e))
    return !1;
  let n = e.valueOf().toLowerCase();
  return I.hasOwnProperty(n) || /^#[a-fA-F0-9]{6}$/.test(n) || /^#[a-fA-F0-9]{8}$/.test(n) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(n) || // not perfect
  /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,\s*([01]|[01]?[.][0-9]+)\)$/.test(n);
}
const be = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
function Q(e) {
  return h(e, be);
}
const pe = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
function X(e) {
  if (!h(e, pe) || e === "")
    return !1;
  try {
    return new URL(e, "file://"), !0;
  } catch {
    return !1;
  }
}
const de = /^\+?[0-9(][0-9 \-.\/()]*[0-9)]$/;
function Y(e) {
  if (!S(e))
    return !1;
  let n = e.valueOf();
  if (!de.test(n))
    return !1;
  let t = n.replace(/[^0-9]/g, "");
  return n.charAt(0) === "+" ? /^[1-9][0-9]{6,14}$/.test(t) : t.length >= 3 && t.length <= 16;
}
const xe = /^\+[1-9][0-9]{6,14}$/;
function A(e) {
  return h(e, xe);
}
const s = !1, f = !0;
function ye(e, n, t, r, i) {
  if (n == null) {
    if (r)
      return n;
    g(`MissingArgument: no ${c(e)} given`);
  } else if (t(n))
    switch (!0) {
      case n instanceof Boolean:
      case n instanceof Number:
      case n instanceof String:
        return n.valueOf();
      // unboxes any primitives
      default:
        return n;
    }
  else
    g(
      `InvalidArgument: the given ${c(e)} is no valid ${c(i)}`
    );
}
function a(e, n, t) {
  let r = function(o, d) {
    return ye(
      o,
      d,
      e,
      n,
      t
    );
  }, i = e.name;
  if (i != null && /^ValueIs/.test(i)) {
    let o = i.replace(
      // derive name from validator
      /^ValueIs/,
      n ? "allow" : "expect"
    );
    return we(r, o);
  } else
    return r;
}
function we(e, n) {
  if (e == null && g("MissingArgument: no function given"), typeof e != "function" && g("InvalidArgument: the given 1st Argument is not a JavaScript function"), n == null && g("MissingArgument: no desired name given"), typeof n != "string" && !(n instanceof String) && g("InvalidArgument: the given desired name is not a string"), e.name === n)
    return e;
  try {
    if (Object.defineProperty(e, "name", { value: n }), e.name === n)
      return e;
  } catch {
  }
  return new Function(
    "originalFunction",
    "return function " + n + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}"
  )(e);
}
function ve(e, n) {
  if (n == null)
    g(`MissingArgument: no ${c(e)} given`);
  else
    switch (!0) {
      // unboxes primitives - but nothing else, as
      case n instanceof Boolean:
      // "valueOf" may return other values
      case n instanceof Number:
      // for other objects (e.g. Dates)
      case n instanceof String:
        return n.valueOf();
      default:
        return n;
    }
}
const st = ve, Ie = /* @__PURE__ */ a(
  E,
  f,
  "boolean value"
), ft = Ie, he = /* @__PURE__ */ a(
  E,
  s,
  "boolean value"
), ut = he, Oe = /* @__PURE__ */ a(
  m,
  f,
  "numeric value"
), gt = Oe, V = /* @__PURE__ */ a(
  m,
  s,
  "numeric value"
), bt = V, Se = /* @__PURE__ */ a(
  y,
  f,
  "finite numeric value"
), pt = Se, me = /* @__PURE__ */ a(
  y,
  s,
  "finite numeric value"
), dt = me, Fe = /* @__PURE__ */ a(
  P,
  f,
  "NaN value"
), xt = Fe, Ne = /* @__PURE__ */ a(
  P,
  s,
  "NaN value"
), yt = Ne;
function $e(e, n, t, r, i, o) {
  return n == null ? n : Pe(e, n, t, r, i, o);
}
const wt = $e;
function Ee(e, n, t, r, i, o) {
  if (V(e, n), isNaN(n) && g(
    `InvalidArgument: the given ${c(e)} is not-a-number`
  ), i == null && (i = !0), o == null && (o = !0), t != null && isFinite(t)) {
    if (r != null && isFinite(r)) {
      if (n < t || !i && n === t || n > r || !o && n === r)
        throw new RangeError(
          `the given ${c(e)} (${n}) is outside the allowed range (${t}...${r})`
        );
    } else if (n < t || !i && n === t)
      throw new RangeError(
        `the given ${c(e)} is below the allowed minimum (${n} ${i ? "<" : "<="} ${t})`
      );
  } else if (r != null && isFinite(r) && (n > r || !o && n === r))
    throw new RangeError(
      `the given ${c(e)} exceeds the allowed maximum (${n} ${o ? ">" : ">="} ${r})`
    );
  return n.valueOf();
}
const Pe = Ee, je = /* @__PURE__ */ a(
  F,
  f,
  "integral numeric value"
), vt = je, ee = /* @__PURE__ */ a(
  F,
  s,
  "integral numeric value"
), It = ee;
function Re(e, n, t, r) {
  return n == null ? n : Ce(e, n, t, r);
}
const ht = Re;
function ke(e, n, t, r) {
  if (ee(e, n), isNaN(n) && g(
    `InvalidArgument: the given ${c(e)} is not-a-number`
  ), t != null && isFinite(t)) {
    if (r != null && isFinite(r)) {
      if (n < t || n > r)
        throw new RangeError(
          `the given ${c(e)} (${n}) is outside the allowed range (${t}...${r})`
        );
    } else if (n < t)
      throw new RangeError(
        `the given ${c(e)} is below the allowed minimum (${n} < ${t})`
      );
  } else if (r != null && isFinite(r) && n > r)
    throw new RangeError(
      `the given ${c(e)} exceeds the allowed maximum (${n} > ${r})`
    );
  return n.valueOf();
}
const Ce = ke, Be = /* @__PURE__ */ a(
  j,
  f,
  "ordinal number"
), Ot = Be, Je = /* @__PURE__ */ a(
  j,
  s,
  "ordinal number"
), St = Je, Le = /* @__PURE__ */ a(
  R,
  f,
  "cardinal number"
), mt = Le, Te = /* @__PURE__ */ a(
  R,
  s,
  "cardinal number"
), Ft = Te, qe = /* @__PURE__ */ a(
  S,
  f,
  "literal string"
), Nt = qe, ne = /* @__PURE__ */ a(
  S,
  s,
  "literal string"
), $t = ne, ze = /* @__PURE__ */ a(
  C,
  f,
  "non-empty literal string"
), Et = ze, Me = /* @__PURE__ */ a(
  C,
  s,
  "non-empty literal string"
), Pt = Me;
function Ue(e, n, t) {
  return n == null ? n : Ge(e, n, t);
}
const jt = Ue;
function De(e, n, t) {
  if (ne(e, n), t.test(n))
    return n.valueOf();
  g(
    `InvalidArgument: the given ${c(e)} does not match the specified pattern`
  );
}
const Ge = De, _e = /* @__PURE__ */ a(
  B,
  f,
  "literal text"
), Rt = _e, He = /* @__PURE__ */ a(
  B,
  s,
  "literal text"
), kt = He, We = /* @__PURE__ */ a(
  J,
  f,
  "single line of text"
), Ct = We, Ze = /* @__PURE__ */ a(
  J,
  s,
  "single line of text"
), Bt = Ze, Ke = /* @__PURE__ */ a(
  L,
  f,
  "JavaScript function"
), Jt = Ke, Qe = /* @__PURE__ */ a(
  L,
  s,
  "JavaScript function"
), Lt = Qe, Xe = /* @__PURE__ */ a(
  T,
  f,
  "anonymous JavaScript function"
), Tt = Xe, Ye = /* @__PURE__ */ a(
  T,
  s,
  "anonymous JavaScript function"
), qt = Ye, Ae = /* @__PURE__ */ a(
  q,
  f,
  "named JavaScript function"
), zt = Ae, Ve = /* @__PURE__ */ a(
  q,
  s,
  "named JavaScript function"
), Mt = Ve, en = /* @__PURE__ */ a(
  z,
  f,
  "native JavaScript function"
), Ut = en, nn = /* @__PURE__ */ a(
  z,
  s,
  "native JavaScript function"
), Dt = nn, tn = /* @__PURE__ */ a(
  M,
  f,
  "scripted JavaScript function"
), Gt = tn, rn = /* @__PURE__ */ a(
  M,
  s,
  "scripted JavaScript function"
), _t = rn, an = /* @__PURE__ */ a(
  U,
  f,
  "JavaScript object"
), Ht = an, te = /* @__PURE__ */ a(
  U,
  s,
  "JavaScript object"
), Wt = te, on = /* @__PURE__ */ a(
  D,
  f,
  '"plain" JavaScript object'
), Zt = on, cn = /* @__PURE__ */ a(
  D,
  s,
  '"plain" JavaScript object'
), Kt = cn, ln = /* @__PURE__ */ a(
  G,
  f,
  '"vanilla" JavaScript object'
), Qt = ln, sn = /* @__PURE__ */ a(
  G,
  s,
  '"vanilla" JavaScript object'
), Xt = sn;
function fn(e, n) {
  return n == null ? n : gn(e, n);
}
const Yt = fn;
function un(e, n) {
  if (n == null && g(`MissingArgument: no ${c(e)} given`), N(n))
    return n;
  g(
    `InvalidArgument: the given ${c(e)} is no JavaScript array`
  );
}
const gn = un;
function bn(e, n, t, r, i) {
  return n == null ? n : dn(e, n, t, r, i);
}
const At = bn;
function pn(e, n, t, r, i) {
  if (n == null && g(`MissingArgument: no ${c(e)} given`), fe(n, r, i))
    return n;
  g(
    `InvalidArgument: the given ${c(e)} is ` + (t == null ? "either not a list or contains an invalid number of elements" : "no " + c(t))
  );
}
const dn = pn;
function xn(e, n, t, r, i, o) {
  return n == null ? n : wn(
    e,
    n,
    t,
    r,
    i,
    o
  );
}
const Vt = xn;
function yn(e, n, t, r, i, o) {
  if (n == null && g(`MissingArgument: no ${c(e)} given`), ue(n, t, i, o))
    return n;
  g(
    `InvalidArgument: the given ${c(e)} is ` + (r == null ? "either not a list or contains invalid elements" : "no " + c(r))
  );
}
const wn = yn;
function vn(e, n, t, r) {
  return n == null ? n : hn(e, n, t, r);
}
const er = vn;
function In(e, n, t, r) {
  return n == null && g(`MissingArgument: no ${c(e)} given`), n instanceof t || g(
    `InvalidArgument: the given ${c(e)} is no ${c(r)}`
  ), n;
}
const hn = In;
function On(e, n, t, r) {
  return n == null ? n : mn(e, n, t, r);
}
const nr = On;
function Sn(e, n, t, r) {
  if (n == null && g(`MissingArgument: no ${c(e)} given`), t.isPrototypeOf(n))
    return n;
  g(
    `InvalidArgument: the given ${c(e)} is no ${c(r)}`
  );
}
const mn = Sn, Fn = /* @__PURE__ */ a(
  _,
  f,
  "JavaScript Date object"
), tr = Fn, Nn = /* @__PURE__ */ a(
  _,
  s,
  "JavaScript Date object"
), rr = Nn, $n = /* @__PURE__ */ a(
  H,
  f,
  "JavaScript Error object"
), ar = $n, En = /* @__PURE__ */ a(
  H,
  s,
  "JavaScript Error object"
), ir = En, Pn = /* @__PURE__ */ a(
  W,
  f,
  'JavaScript Promise (or "Thenable") object'
), or = Pn, jn = /* @__PURE__ */ a(
  W,
  s,
  'JavaScript Promise (or "Thenable") object'
), cr = jn, Rn = /* @__PURE__ */ a(
  Z,
  f,
  "JavaScript RegExp object"
), lr = Rn, kn = /* @__PURE__ */ a(
  Z,
  s,
  "JavaScript RegExp object"
), sr = kn;
function Cn(e, n, t) {
  return n == null ? n : Jn(e, n, t);
}
const fr = Cn;
function Bn(e, n, t) {
  if (n == null && g(`MissingArgument: no ${c(e)} given`), ge(n, t))
    switch (!0) {
      // unboxes primitives - but nothing else, as
      case n instanceof Boolean:
      // "valueOf" may return other values
      case n instanceof Number:
      // for other objects (e.g. Dates)
      case n instanceof String:
        return n.valueOf();
      default:
        return n;
    }
  else
    g(
      `InvalidArgument: the given ${c(e)} is not among the supported values`
    );
}
const Jn = Bn, Ln = /* @__PURE__ */ a(
  K,
  f,
  "CSS color specification"
), ur = Ln, Tn = /* @__PURE__ */ a(
  K,
  s,
  "CSS color specification"
), gr = Tn, qn = /* @__PURE__ */ a(
  Q,
  f,
  "EMail address"
), br = qn, zn = /* @__PURE__ */ a(
  Q,
  s,
  "EMail address"
), pr = zn, Mn = /* @__PURE__ */ a(
  X,
  f,
  "URL"
), dr = Mn, Un = /* @__PURE__ */ a(
  X,
  s,
  "URL"
), xr = Un, Dn = /* @__PURE__ */ a(
  Y,
  f,
  "phone number"
), yr = Dn, Gn = /* @__PURE__ */ a(
  Y,
  s,
  "phone number"
), wr = Gn, _n = /* @__PURE__ */ a(
  A,
  f,
  "phone number in E.164 format"
), vr = _n, Hn = /* @__PURE__ */ a(
  A,
  s,
  "phone number in E.164 format"
), Ir = Hn;
function c(e) {
  const n = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[0bfnrtv'"\\\/]?/g, t = /[\x00-\x1f\x7f-\x9f]/g;
  return e.replace(n, function(r) {
    return r === "\\" ? "\\\\" : r;
  }).replace(t, function(r) {
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
        let i = r.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(i.length) + i;
      }
    }
  });
}
function hr(e) {
  const n = /\\[0bfnrtv'"\\\/]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}/g;
  return e.replace(n, function(t) {
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
        let r = parseInt(t.slice(2), 16);
        return String.fromCharCode(r);
      }
    }
  });
}
function Wn(e, n = '"') {
  const t = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[0bfnrtv'"\\\/]?|'/g, r = /\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[0bfnrtv'"\\\/]?|"/g, i = /[\x00-\x1f\x7f-\x9f]/g;
  return e.replace(
    n === "'" ? t : r,
    function(o) {
      switch (o) {
        case "'":
          return "\\'";
        case '"':
          return '\\"';
        case "\\":
          return "\\\\";
        default:
          return o;
      }
    }
  ).replace(i, function(o) {
    switch (o) {
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
        let d = o.charCodeAt(0).toString(16);
        return "\\x" + "00".slice(d.length) + d;
      }
    }
  });
}
function Or(e, n = '"') {
  return n + Wn(e, n) + n;
}
function Zn(e, n) {
  return n = (n || "").trim() || "<br/>", e.replace(
    /[&<>"'\x00-\x1F\x7F-\x9F\\]/g,
    function(t) {
      switch (t) {
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
          return n;
        case "\r":
          return "&#92;r";
        case "	":
          return "&#92;t";
        case "\v":
          return "&#92;v";
        case "\\":
          return "&#92;";
        default:
          let r = t.charCodeAt(0).toString(16);
          return "&#x0000".substring(0, 7 - r.length) + r + ";";
      }
    }
  );
}
function Sr(e, n) {
  return Zn(e, n).replace(/:/g, "&#58;");
}
function O(e, n, t, r) {
  if (e === n)
    return !1;
  let i = typeof e;
  if (i !== typeof n)
    return !0;
  function o(u, l, p, x) {
    if (!Array.isArray(l) || u.length !== l.length)
      return !0;
    for (let b = 0, v = u.length; b < v; b++)
      if (O(u[b], l[b], p, x))
        return !0;
    return !1;
  }
  function d(u, l, p, x) {
    if (!(l instanceof Map) || u.size !== l.size)
      return !0;
    let b = !1;
    return u.forEach(function(v, $) {
      b || (b = !l.has($) || O(v, l.get($), p, x));
    }), b;
  }
  function w(u, l) {
    if (!(l instanceof Set) || u.size !== l.size)
      return !0;
    let p = !1;
    return u.forEach(function(x) {
      !p && !l.has(x) && (p = !0);
    }), p;
  }
  function re(u, l) {
    if (Object.getPrototypeOf(u) !== Object.getPrototypeOf(l) || u.byteLength !== l.byteLength)
      return !0;
    let p = new Uint8Array(
      u.buffer,
      u.byteOffset,
      u.byteLength
    ), x = new Uint8Array(
      l.buffer,
      l.byteOffset,
      l.byteLength
    );
    for (let b = 0, v = p.length; b < v; b++)
      if (p[b] !== x[b])
        return !0;
    return !1;
  }
  function ae(u, l, p, x) {
    if (Object.getPrototypeOf(u) !== Object.getPrototypeOf(l))
      return !0;
    for (let b in u)
      if (!(b in l))
        return !0;
    for (let b in l)
      if (!(b in u) || O(u[b], l[b], p, x))
        return !0;
    return !1;
  }
  switch (i) {
    case "undefined":
    case "boolean":
    case "string":
    case "function":
      return !0;
    // most primitives are compared using "==="
    case "number": {
      if (isNaN(e) !== isNaN(n))
        return !0;
      let l = Number.EPSILON * Math.max(
        // relative, not absolute!
        1,
        Math.abs(e),
        Math.abs(n)
      );
      return Math.abs(e - n) > l;
    }
    case "object":
      if (e == null || n == null)
        return !0;
      if (
        // boxed primitives are compared by their values
        e instanceof Boolean || e instanceof Number || e instanceof String
      )
        return t === "by-reference" ? !0 : Object.getPrototypeOf(e) !== Object.getPrototypeOf(n) || e.valueOf() !== n.valueOf();
      if (e instanceof Date) {
        if (t === "by-reference" || !(n instanceof Date))
          return !0;
        let l = e.getTime(), p = n.getTime();
        return l !== p && !(isNaN(l) && isNaN(p));
      }
      if (e instanceof RegExp)
        return t === "by-reference" ? !0 : !(n instanceof RegExp) || e.source !== n.source || e.flags !== n.flags;
      r == null && (r = /* @__PURE__ */ new WeakMap());
      let u = r.get(e);
      return u == null && r.set(e, u = /* @__PURE__ */ new WeakSet()), u.has(n) ? !1 : (u.add(n), Array.isArray(e) ? o(e, n, t, r) : e instanceof Map ? t === "by-reference" ? !0 : d(e, n, t, r) : e instanceof Set ? t === "by-reference" ? !0 : w(e, n) : ArrayBuffer.isView(e) ? t === "by-reference" ? !0 : re(e, n) : t === "by-reference" ? !0 : ae(e, n, t, r));
    default:
      return !0;
  }
}
function mr(e, n, t) {
  return !O(e, n, t);
}
function Kn(e) {
  te("candidate", e);
  for (let n in e)
    if (ie(e, n))
      return !1;
  return !0;
}
function Fr(e) {
  return !Kn(e);
}
function Qn(e) {
  return /^\s*$/.test(e);
}
function Nr(e) {
  return !Qn(e);
}
function $r(e, n = -1 / 0, t = 1 / 0) {
  return Math.max(n, Math.min(e, t));
}
const I = {
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
};
function Xn(e) {
  let n = e.toLowerCase();
  if (I.hasOwnProperty(n) && (e = I[n]), /^#[a-fA-F0-9]{6}$/.test(e))
    return e + "FF";
  if (/^#[a-fA-F0-9]{8}$/.test(e))
    return e;
  const t = "0123456789ABCDEF";
  function r(w) {
    return w = Math.max(0, Math.min(255, Math.round(w))), t[Math.trunc(w / 16)] + t[w % 16];
  }
  let o = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(e);
  if (o != null)
    return "#" + r(parseInt(o[1], 10)) + r(parseInt(o[2], 10)) + r(parseInt(o[3], 10)) + "FF";
  if (o = /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(e), o != null)
    return "#" + r(parseInt(o[1], 10)) + r(parseInt(o[2], 10)) + r(parseInt(o[3], 10)) + r(parseFloat(o[4]) * 255);
  g("InvalidArgument: the given Value is not a valid CSS Color specification");
}
function Er(e) {
  let n = e.toLowerCase();
  if (I.hasOwnProperty(n))
    return I[n];
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
function Pr(e) {
  return Xn(e).slice(0, 7);
}
export {
  I as ColorSet,
  we as FunctionWithName,
  Zn as HTMLsafe,
  Xn as HexColor,
  Sr as MarkDownSafe,
  Kn as ObjectIsEmpty,
  Fr as ObjectIsNotEmpty,
  nt as ObjectMergedWith,
  ie as Object_hasOwnProperty,
  oe as Object_isPrototypeOf,
  An as Object_propertyIsEnumerable,
  Vn as Object_toLocaleString,
  ce as Object_toString,
  et as Object_valueOf,
  Er as RGBAColor,
  Qn as StringIsEmpty,
  Nr as StringIsNotEmpty,
  a as ValidatorForClassifier,
  tt as ValueExists,
  lt as ValueInheritsFrom,
  T as ValueIsAnonymousFunction,
  N as ValueIsArray,
  E as ValueIsBoolean,
  R as ValueIsCardinal,
  K as ValueIsColor,
  _ as ValueIsDate,
  A as ValueIsE164PhoneNumber,
  Q as ValueIsEMailAddress,
  ot as ValueIsEmptyString,
  H as ValueIsError,
  y as ValueIsFiniteNumber,
  L as ValueIsFunction,
  ct as ValueIsInstanceOf,
  F as ValueIsInteger,
  it as ValueIsIntegerInRange,
  fe as ValueIsList,
  ue as ValueIsListSatisfying,
  rt as ValueIsMissing,
  P as ValueIsNaN,
  q as ValueIsNamedFunction,
  z as ValueIsNativeFunction,
  C as ValueIsNonEmptyString,
  m as ValueIsNumber,
  at as ValueIsNumberInRange,
  U as ValueIsObject,
  ge as ValueIsOneOf,
  j as ValueIsOrdinal,
  Y as ValueIsPhoneNumber,
  D as ValueIsPlainObject,
  W as ValueIsPromise,
  Z as ValueIsRegExp,
  M as ValueIsScriptedFunction,
  S as ValueIsString,
  h as ValueIsStringMatching,
  B as ValueIsText,
  J as ValueIsTextline,
  X as ValueIsURL,
  G as ValueIsVanillaObject,
  mr as ValuesAreEqual,
  O as ValuesDiffer,
  f as acceptNil,
  Xe as allowAnonymousFunction,
  fn as allowArray,
  Ie as allowBoolean,
  Le as allowCardinal,
  Ln as allowColor,
  Fn as allowDate,
  _n as allowE164PhoneNumber,
  qn as allowEMailAddress,
  $n as allowError,
  Se as allowFiniteNumber,
  Ke as allowFunction,
  vn as allowInstanceOf,
  je as allowInteger,
  Re as allowIntegerInRange,
  bn as allowList,
  xn as allowListSatisfying,
  Fe as allowNaN,
  Ae as allowNamedFunction,
  en as allowNativeFunction,
  ze as allowNonEmptyString,
  Oe as allowNumber,
  $e as allowNumberInRange,
  an as allowObject,
  Cn as allowOneOf,
  Be as allowOrdinal,
  Dn as allowPhoneNumber,
  on as allowPlainObject,
  Pn as allowPromise,
  Rn as allowRegExp,
  tn as allowScriptedFunction,
  qe as allowString,
  Ue as allowStringMatching,
  _e as allowText,
  We as allowTextline,
  Mn as allowURL,
  On as allowValueInheritingFrom,
  ln as allowVanillaObject,
  Tt as allowedAnonymousFunction,
  Yt as allowedArray,
  ft as allowedBoolean,
  mt as allowedCardinal,
  ur as allowedColor,
  tr as allowedDate,
  vr as allowedE164PhoneNumber,
  br as allowedEMailAddress,
  ar as allowedError,
  pt as allowedFiniteNumber,
  Jt as allowedFunction,
  er as allowedInstanceOf,
  vt as allowedInteger,
  ht as allowedIntegerInRange,
  At as allowedList,
  Vt as allowedListSatisfying,
  xt as allowedNaN,
  zt as allowedNamedFunction,
  Ut as allowedNativeFunction,
  Et as allowedNonEmptyString,
  gt as allowedNumber,
  wt as allowedNumberInRange,
  Ht as allowedObject,
  fr as allowedOneOf,
  Ot as allowedOrdinal,
  yr as allowedPhoneNumber,
  Zt as allowedPlainObject,
  or as allowedPromise,
  lr as allowedRegExp,
  Gt as allowedScriptedFunction,
  Nt as allowedString,
  jt as allowedStringMatching,
  Rt as allowedText,
  Ct as allowedTextline,
  dr as allowedURL,
  nr as allowedValueInheritingFrom,
  Qt as allowedVanillaObject,
  $r as constrained,
  c as escaped,
  Ye as expectAnonymousFunction,
  un as expectArray,
  he as expectBoolean,
  Te as expectCardinal,
  Tn as expectColor,
  Nn as expectDate,
  Hn as expectE164PhoneNumber,
  zn as expectEMailAddress,
  En as expectError,
  me as expectFiniteNumber,
  Qe as expectFunction,
  In as expectInstanceOf,
  ee as expectInteger,
  ke as expectIntegerInRange,
  pn as expectList,
  yn as expectListSatisfying,
  Ne as expectNaN,
  Ve as expectNamedFunction,
  nn as expectNativeFunction,
  Me as expectNonEmptyString,
  V as expectNumber,
  Ee as expectNumberInRange,
  te as expectObject,
  Bn as expectOneOf,
  Je as expectOrdinal,
  Gn as expectPhoneNumber,
  cn as expectPlainObject,
  jn as expectPromise,
  kn as expectRegExp,
  rn as expectScriptedFunction,
  ne as expectString,
  De as expectStringMatching,
  He as expectText,
  Ze as expectTextline,
  Un as expectURL,
  ve as expectValue,
  Sn as expectValueInheritingFrom,
  sn as expectVanillaObject,
  qt as expectedAnonymousFunction,
  gn as expectedArray,
  ut as expectedBoolean,
  Ft as expectedCardinal,
  gr as expectedColor,
  rr as expectedDate,
  Ir as expectedE164PhoneNumber,
  pr as expectedEMailAddress,
  ir as expectedError,
  dt as expectedFiniteNumber,
  Lt as expectedFunction,
  hn as expectedInstanceOf,
  It as expectedInteger,
  Ce as expectedIntegerInRange,
  dn as expectedList,
  wn as expectedListSatisfying,
  yt as expectedNaN,
  Mt as expectedNamedFunction,
  Dt as expectedNativeFunction,
  Pt as expectedNonEmptyString,
  bt as expectedNumber,
  Pe as expectedNumberInRange,
  Wt as expectedObject,
  Jn as expectedOneOf,
  St as expectedOrdinal,
  wr as expectedPhoneNumber,
  Kt as expectedPlainObject,
  cr as expectedPromise,
  sr as expectedRegExp,
  _t as expectedScriptedFunction,
  $t as expectedString,
  Ge as expectedStringMatching,
  kt as expectedText,
  Bt as expectedTextline,
  xr as expectedURL,
  st as expectedValue,
  mn as expectedValueInheritingFrom,
  Xt as expectedVanillaObject,
  Yn as global,
  Wn as quotable,
  Or as quoted,
  s as rejectNil,
  Pr as shortHexColor,
  g as throwError,
  hr as unescaped,
  ye as validatedArgument
};
//# sourceMappingURL=javascript-interface-library.esm.js.map
