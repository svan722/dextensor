function Vd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var Fr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Qd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Js = { exports: {} },
  Gl = {},
  ec = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
  Kd = Symbol.for("react.portal"),
  Yd = Symbol.for("react.fragment"),
  Xd = Symbol.for("react.strict_mode"),
  Gd = Symbol.for("react.profiler"),
  bd = Symbol.for("react.provider"),
  Zd = Symbol.for("react.context"),
  qd = Symbol.for("react.forward_ref"),
  Jd = Symbol.for("react.suspense"),
  ep = Symbol.for("react.memo"),
  tp = Symbol.for("react.lazy"),
  va = Symbol.iterator;
function np(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (va && e[va]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function Rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = Rn.prototype;
function ou(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var uu = (ou.prototype = new lc());
uu.constructor = ou;
nc(uu, Rn.prototype);
uu.isPureReactComponent = !0;
var ga = Array.isArray,
  ic = Object.prototype.hasOwnProperty,
  au = { current: null },
  oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ic.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Nr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: au.current,
  };
}
function rp(e, t) {
  return {
    $$typeof: Nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ya = /\/+/g;
function Ni(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lp("" + e.key)
    : t.toString(36);
}
function sl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Nr:
          case Kd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ni(o, 0) : r),
      ga(l)
        ? ((n = ""),
          e != null && (n = e.replace(ya, "$&/") + "/"),
          sl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (su(l) &&
            (l = rp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ya, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ga(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Ni(i, u);
      o += sl(i, t, n, a, l);
    }
  else if (((a = np(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ni(i, u++)), (o += sl(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ar(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    sl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function ip(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  cl = { transition: null },
  op = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: cl,
    ReactCurrentOwner: au,
  };
R.Children = {
  map: Ar,
  forEach: function (e, t, n) {
    Ar(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ar(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ar(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = Rn;
R.Fragment = Yd;
R.Profiler = Gd;
R.PureComponent = ou;
R.StrictMode = Xd;
R.Suspense = Jd;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = au.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      ic.call(t, a) &&
        !oc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Nr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = uc;
R.createFactory = function (e) {
  var t = uc.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: qd, render: e };
};
R.isValidElement = su;
R.lazy = function (e) {
  return { $$typeof: tp, _payload: { _status: -1, _result: e }, _init: ip };
};
R.memo = function (e, t) {
  return { $$typeof: ep, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = cl.transition;
  cl.transition = {};
  try {
    e();
  } finally {
    cl.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
R.useContext = function (e) {
  return ge.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
R.useId = function () {
  return ge.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return ge.current.useRef(e);
};
R.useState = function (e) {
  return ge.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return ge.current.useTransition();
};
R.version = "18.2.0";
ec.exports = R;
var S = ec.exports;
const ue = Qd(S),
  wa = Vd({ __proto__: null, default: ue }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = S,
  ap = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  cp = Object.prototype.hasOwnProperty,
  fp = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) cp.call(t, r) && !dp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ap,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: fp.current,
  };
}
Gl.Fragment = sp;
Gl.jsx = ac;
Gl.jsxs = ac;
Js.exports = Gl;
var d = Js.exports,
  uo = {},
  sc = { exports: {} },
  Le = {},
  cc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, L) {
    var I = T.length;
    T.push(L);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        A = T[F];
      if (0 < l(A, L)) (T[F] = L), (T[I] = A), (I = F);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var L = T[0],
      I = T.pop();
    if (I !== L) {
      T[0] = I;
      e: for (var F = 0, A = T.length, on = A >>> 1; F < on; ) {
        var ce = 2 * (F + 1) - 1,
          _i = T[ce],
          Ht = ce + 1,
          zr = T[Ht];
        if (0 > l(_i, I))
          Ht < A && 0 > l(zr, _i)
            ? ((T[F] = zr), (T[Ht] = I), (F = Ht))
            : ((T[F] = _i), (T[ce] = I), (F = ce));
        else if (Ht < A && 0 > l(zr, I)) (T[F] = zr), (T[Ht] = I), (F = Ht);
        else break e;
      }
    }
    return L;
  }
  function l(T, L) {
    var I = T.sortIndex - L.sortIndex;
    return I !== 0 ? I : T.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    f = 1,
    h = null,
    v = 3,
    g = !1,
    w = !1,
    y = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var L = n(s); L !== null; ) {
      if (L.callback === null) r(s);
      else if (L.startTime <= T)
        r(s), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(s);
    }
  }
  function x(T) {
    if (((y = !1), m(T), !w))
      if (n(a) !== null) (w = !0), An(_);
      else {
        var L = n(s);
        L !== null && nt(x, L.startTime - T);
      }
  }
  function _(T, L) {
    (w = !1), y && ((y = !1), p(C), (C = -1)), (g = !0);
    var I = v;
    try {
      for (
        m(L), h = n(a);
        h !== null && (!(h.expirationTime > L) || (T && !ne()));

      ) {
        var F = h.callback;
        if (typeof F == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var A = F(h.expirationTime <= L);
          (L = e.unstable_now()),
            typeof A == "function" ? (h.callback = A) : h === n(a) && r(a),
            m(L);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var on = !0;
      else {
        var ce = n(s);
        ce !== null && nt(x, ce.startTime - L), (on = !1);
      }
      return on;
    } finally {
      (h = null), (v = I), (g = !1);
    }
  }
  var E = !1,
    P = null,
    C = -1,
    M = 5,
    O = -1;
  function ne() {
    return !(e.unstable_now() - O < M);
  }
  function _e() {
    if (P !== null) {
      var T = e.unstable_now();
      O = T;
      var L = !0;
      try {
        L = P(!0, T);
      } finally {
        L ? He() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var He;
  if (typeof c == "function")
    He = function () {
      c(_e);
    };
  else if (typeof MessageChannel < "u") {
    var At = new MessageChannel(),
      ln = At.port2;
    (At.port1.onmessage = _e),
      (He = function () {
        ln.postMessage(null);
      });
  } else
    He = function () {
      N(_e, 0);
    };
  function An(T) {
    (P = T), E || ((E = !0), He());
  }
  function nt(T, L) {
    C = N(function () {
      T(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), An(_));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var I = v;
      v = L;
      try {
        return T();
      } finally {
        v = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, L) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var I = v;
      v = T;
      try {
        return L();
      } finally {
        v = I;
      }
    }),
    (e.unstable_scheduleCallback = function (T, L, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? F + I : F))
          : (I = F),
        T)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = I + A),
        (T = {
          id: f++,
          callback: L,
          priorityLevel: T,
          startTime: I,
          expirationTime: A,
          sortIndex: -1,
        }),
        I > F
          ? ((T.sortIndex = I),
            t(s, T),
            n(a) === null &&
              T === n(s) &&
              (y ? (p(C), (C = -1)) : (y = !0), nt(x, I - F)))
          : ((T.sortIndex = A), t(a, T), w || g || ((w = !0), An(_))),
        T
      );
    }),
    (e.unstable_shouldYield = ne),
    (e.unstable_wrapCallback = function (T) {
      var L = v;
      return function () {
        var I = v;
        v = L;
        try {
          return T.apply(this, arguments);
        } finally {
          v = I;
        }
      };
    });
})(fc);
cc.exports = fc;
var pp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = S,
  Oe = pp;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  ar = {};
function tn(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (ar[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var at = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ao = Object.prototype.hasOwnProperty,
  mp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xa = {},
  Sa = {};
function hp(e) {
  return ao.call(Sa, e)
    ? !0
    : ao.call(xa, e)
    ? !1
    : mp.test(e)
    ? (Sa[e] = !0)
    : ((xa[e] = !0), !1);
}
function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, fu);
    se[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, fu);
    se[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, fu);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gp(t, n, l, r) && (n = null),
    r || l === null
      ? hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  sn = Symbol.for("react.fragment"),
  pu = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  hc = Symbol.for("react.context"),
  mu = Symbol.for("react.forward_ref"),
  co = Symbol.for("react.suspense"),
  fo = Symbol.for("react.suspense_list"),
  hu = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Ea = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ea && e[Ea]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Pi;
function Gn(e) {
  if (Pi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pi = (t && t[1]) || "";
    }
  return (
    `
` +
    Pi +
    e
  );
}
var Ti = !1;
function ji(e, t) {
  if (!e || Ti) return "";
  Ti = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Ti = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function yp(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn("Lazy");
    case 13:
      return Gn("Suspense");
    case 19:
      return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ji(e.type, !1)), e;
    case 11:
      return (e = ji(e.type.render, !1)), e;
    case 1:
      return (e = ji(e.type, !0)), e;
    default:
      return "";
  }
}
function po(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sn:
      return "Fragment";
    case an:
      return "Portal";
    case so:
      return "Profiler";
    case pu:
      return "StrictMode";
    case co:
      return "Suspense";
    case fo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case mu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hu:
        return (
          (t = e.displayName || null), t !== null ? t : po(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return po(e(t));
        } catch {}
    }
  return null;
}
function wp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return po(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xp(e) {
  var t = gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = xp(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function El(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ka(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && du(e, "checked", t, !1);
}
function ho(e, t) {
  wc(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vo(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vo(e, t, n) {
  (t !== "number" || El(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function go(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Na(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function xc(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Br,
  Ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Br = Br || document.createElement("div"),
          Br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Br.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  Sp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function _c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = kc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ep = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wo(e, t) {
  if (t) {
    if (Ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function xo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var So = null;
function vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Eo = null,
  Sn = null,
  En = null;
function Ta(e) {
  if ((e = jr(e))) {
    if (typeof Eo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = ei(t)), Eo(e.stateNode, e.type, t));
  }
}
function Nc(e) {
  Sn ? (En ? En.push(e) : (En = [e])) : (Sn = e);
}
function Pc() {
  if (Sn) {
    var e = Sn,
      t = En;
    if (((En = Sn = null), Ta(e), t)) for (e = 0; e < t.length; e++) Ta(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function jc() {}
var Ci = !1;
function Cc(e, t, n) {
  if (Ci) return e(t, n);
  Ci = !0;
  try {
    return Tc(e, t, n);
  } finally {
    (Ci = !1), (Sn !== null || En !== null) && (jc(), Pc());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ei(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ko = !1;
if (at)
  try {
    var Un = {};
    Object.defineProperty(Un, "passive", {
      get: function () {
        ko = !0;
      },
    }),
      window.addEventListener("test", Un, Un),
      window.removeEventListener("test", Un, Un);
  } catch {
    ko = !1;
  }
function kp(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var er = !1,
  kl = null,
  _l = !1,
  _o = null,
  _p = {
    onError: function (e) {
      (er = !0), (kl = e);
    },
  };
function Np(e, t, n, r, l, i, o, u, a) {
  (er = !1), (kl = null), kp.apply(_p, arguments);
}
function Pp(e, t, n, r, l, i, o, u, a) {
  if ((Np.apply(this, arguments), er)) {
    if (er) {
      var s = kl;
      (er = !1), (kl = null);
    } else throw Error(k(198));
    _l || ((_l = !0), (_o = s));
  }
}
function nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ja(e) {
  if (nn(e) !== e) throw Error(k(188));
}
function Tp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ja(l), e;
        if (i === r) return ja(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Lc(e) {
  return (e = Tp(e)), e !== null ? Ic(e) : null;
}
function Ic(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ic(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rc = Oe.unstable_scheduleCallback,
  Ca = Oe.unstable_cancelCallback,
  jp = Oe.unstable_shouldYield,
  Cp = Oe.unstable_requestPaint,
  q = Oe.unstable_now,
  Op = Oe.unstable_getCurrentPriorityLevel,
  gu = Oe.unstable_ImmediatePriority,
  $c = Oe.unstable_UserBlockingPriority,
  Nl = Oe.unstable_NormalPriority,
  Lp = Oe.unstable_LowPriority,
  Mc = Oe.unstable_IdlePriority,
  bl = null,
  Je = null;
function Ip(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Mp,
  Rp = Math.log,
  $p = Math.LN2;
function Mp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rp(e) / $p) | 0)) | 0;
}
var Wr = 64,
  Vr = 4194304;
function Zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Zn(u)) : ((i &= o), i !== 0 && (r = Zn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Zn(o)) : i !== 0 && (r = Zn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Dp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ke(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Dp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function No(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dc() {
  var e = Wr;
  return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e;
}
function Oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function Fp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ke(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function zc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fc,
  wu,
  Ac,
  Hc,
  Uc,
  Po = !1,
  Qr = [],
  Nt = null,
  Pt = null,
  Tt = null,
  fr = new Map(),
  dr = new Map(),
  xt = [],
  Ap =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Oa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = jr(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Nt = Bn(Nt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Pt = Bn(Pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Tt = Bn(Tt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return fr.set(i, Bn(fr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), dr.set(i, Bn(dr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Bc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Oc(n)), t !== null)) {
          (e.blockedOn = t),
            Uc(e.priority, function () {
              Ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = jr(n)), t !== null && wu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function La(e, t, n) {
  fl(e) && n.delete(t);
}
function Up() {
  (Po = !1),
    Nt !== null && fl(Nt) && (Nt = null),
    Pt !== null && fl(Pt) && (Pt = null),
    Tt !== null && fl(Tt) && (Tt = null),
    fr.forEach(La),
    dr.forEach(La);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Po ||
      ((Po = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Up)));
}
function pr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < Qr.length) {
    Wn(Qr[0], e);
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && Wn(Nt, e),
      Pt !== null && Wn(Pt, e),
      Tt !== null && Wn(Tt, e),
      fr.forEach(t),
      dr.forEach(t),
      n = 0;
    n < xt.length;
    n++
  )
    (r = xt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && ((n = xt[0]), n.blockedOn === null); )
    Bc(n), n.blockedOn === null && xt.shift();
}
var kn = pt.ReactCurrentBatchConfig,
  Tl = !0;
function Bp(e, t, n, r) {
  var l = D,
    i = kn.transition;
  kn.transition = null;
  try {
    (D = 1), xu(e, t, n, r);
  } finally {
    (D = l), (kn.transition = i);
  }
}
function Wp(e, t, n, r) {
  var l = D,
    i = kn.transition;
  kn.transition = null;
  try {
    (D = 4), xu(e, t, n, r);
  } finally {
    (D = l), (kn.transition = i);
  }
}
function xu(e, t, n, r) {
  if (Tl) {
    var l = To(e, t, n, r);
    if (l === null) Hi(e, t, r, jl, n), Oa(e, r);
    else if (Hp(l, e, t, n, r)) r.stopPropagation();
    else if ((Oa(e, r), t & 4 && -1 < Ap.indexOf(e))) {
      for (; l !== null; ) {
        var i = jr(l);
        if (
          (i !== null && Fc(i),
          (i = To(e, t, n, r)),
          i === null && Hi(e, t, r, jl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Hi(e, t, r, null, n);
  }
}
var jl = null;
function To(e, t, n, r) {
  if (((jl = null), (e = vu(r)), (e = Vt(e)), e !== null))
    if (((t = nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function Wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Op()) {
        case gu:
          return 1;
        case $c:
          return 4;
        case Nl:
        case Lp:
          return 16;
        case Mc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  Su = null,
  dl = null;
function Vc() {
  if (dl) return dl;
  var e,
    t = Su,
    n = t.length,
    r,
    l = "value" in Et ? Et.value : Et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (dl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function pl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kr() {
  return !0;
}
function Ia() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Kr
        : Ia),
      (this.isPropagationStopped = Ia),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr));
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    t
  );
}
var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Eu = Ie($n),
  Tr = X({}, $n, { view: 0, detail: 0 }),
  Vp = Ie(Tr),
  Li,
  Ii,
  Vn,
  Zl = X({}, Tr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ku,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vn &&
            (Vn && e.type === "mousemove"
              ? ((Li = e.screenX - Vn.screenX), (Ii = e.screenY - Vn.screenY))
              : (Ii = Li = 0),
            (Vn = e)),
          Li);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ii;
    },
  }),
  Ra = Ie(Zl),
  Qp = X({}, Zl, { dataTransfer: 0 }),
  Kp = Ie(Qp),
  Yp = X({}, Tr, { relatedTarget: 0 }),
  Ri = Ie(Yp),
  Xp = X({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = Ie(Xp),
  bp = X({}, $n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zp = Ie(bp),
  qp = X({}, $n, { data: 0 }),
  $a = Ie(qp),
  Jp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  em = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tm[e]) ? !!t[e] : !1;
}
function ku() {
  return nm;
}
var rm = X({}, Tr, {
    key: function (e) {
      if (e.key) {
        var t = Jp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? em[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ku,
    charCode: function (e) {
      return e.type === "keypress" ? pl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? pl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  lm = Ie(rm),
  im = X({}, Zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ma = Ie(im),
  om = X({}, Tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ku,
  }),
  um = Ie(om),
  am = X({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Ie(am),
  cm = X({}, Zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fm = Ie(cm),
  dm = [9, 13, 27, 32],
  _u = at && "CompositionEvent" in window,
  tr = null;
at && "documentMode" in document && (tr = document.documentMode);
var pm = at && "TextEvent" in window && !tr,
  Qc = at && (!_u || (tr && 8 < tr && 11 >= tr)),
  Da = String.fromCharCode(32),
  za = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return dm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function mm(e, t) {
  switch (e) {
    case "compositionend":
      return Yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((za = !0), Da);
    case "textInput":
      return (e = t.data), e === Da && za ? null : e;
    default:
      return null;
  }
}
function hm(e, t) {
  if (cn)
    return e === "compositionend" || (!_u && Kc(e, t))
      ? ((e = Vc()), (dl = Su = Et = null), (cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vm[e.type] : t === "textarea";
}
function Xc(e, t, n, r) {
  Nc(r),
    (t = Cl(t, "onChange")),
    0 < t.length &&
      ((n = new Eu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  mr = null;
function gm(e) {
  of(e, 0);
}
function ql(e) {
  var t = pn(e);
  if (yc(t)) return e;
}
function ym(e, t) {
  if (e === "change") return t;
}
var Gc = !1;
if (at) {
  var $i;
  if (at) {
    var Mi = "oninput" in document;
    if (!Mi) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"),
        (Mi = typeof Aa.oninput == "function");
    }
    $i = Mi;
  } else $i = !1;
  Gc = $i && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  nr && (nr.detachEvent("onpropertychange", bc), (mr = nr = null));
}
function bc(e) {
  if (e.propertyName === "value" && ql(mr)) {
    var t = [];
    Xc(t, mr, e, vu(e)), Cc(gm, t);
  }
}
function wm(e, t, n) {
  e === "focusin"
    ? (Ha(), (nr = t), (mr = n), nr.attachEvent("onpropertychange", bc))
    : e === "focusout" && Ha();
}
function xm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ql(mr);
}
function Sm(e, t) {
  if (e === "click") return ql(t);
}
function Em(e, t) {
  if (e === "input" || e === "change") return ql(t);
}
function km(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : km;
function hr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ao.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function Ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ba(e, t) {
  var n = Ua(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ua(n);
  }
}
function Zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qc() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _m(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Nu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ba(n, i));
        var o = Ba(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nm = at && "documentMode" in document && 11 >= document.documentMode,
  fn = null,
  jo = null,
  rr = null,
  Co = !1;
function Wa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Co ||
    fn == null ||
    fn !== El(r) ||
    ((r = fn),
    "selectionStart" in r && Nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && hr(rr, r)) ||
      ((rr = r),
      (r = Cl(jo, "onSelect")),
      0 < r.length &&
        ((t = new Eu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))));
}
function Yr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: Yr("Animation", "AnimationEnd"),
    animationiteration: Yr("Animation", "AnimationIteration"),
    animationstart: Yr("Animation", "AnimationStart"),
    transitionend: Yr("Transition", "TransitionEnd"),
  },
  Di = {},
  Jc = {};
at &&
  ((Jc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function Jl(e) {
  if (Di[e]) return Di[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jc) return (Di[e] = t[n]);
  return e;
}
var ef = Jl("animationend"),
  tf = Jl("animationiteration"),
  nf = Jl("animationstart"),
  rf = Jl("transitionend"),
  lf = new Map(),
  Va =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dt(e, t) {
  lf.set(e, t), tn(t, [e]);
}
for (var zi = 0; zi < Va.length; zi++) {
  var Fi = Va[zi],
    Pm = Fi.toLowerCase(),
    Tm = Fi[0].toUpperCase() + Fi.slice(1);
  Dt(Pm, "on" + Tm);
}
Dt(ef, "onAnimationEnd");
Dt(tf, "onAnimationIteration");
Dt(nf, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(rf, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Qa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Pp(r, t, void 0, e), (e.currentTarget = null);
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          Qa(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          Qa(l, u, s), (i = a);
        }
    }
  }
  if (_l) throw ((e = _o), (_l = !1), (_o = null), e);
}
function H(e, t) {
  var n = t[$o];
  n === void 0 && (n = t[$o] = new Set());
  var r = e + "__bubble";
  n.has(r) || (uf(t, e, 2, !1), n.add(r));
}
function Ai(e, t, n) {
  var r = 0;
  t && (r |= 4), uf(n, e, r, t);
}
var Xr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
  if (!e[Xr]) {
    (e[Xr] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || Ai(n, !1, e), Ai(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xr] || ((t[Xr] = !0), Ai("selectionchange", !1, t));
  }
}
function uf(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var l = Bp;
      break;
    case 4:
      l = Wp;
      break;
    default:
      l = xu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ko ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Hi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Vt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cc(function () {
    var s = i,
      f = vu(n),
      h = [];
    e: {
      var v = lf.get(e);
      if (v !== void 0) {
        var g = Eu,
          w = e;
        switch (e) {
          case "keypress":
            if (pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = lm;
            break;
          case "focusin":
            (w = "focus"), (g = Ri);
            break;
          case "focusout":
            (w = "blur"), (g = Ri);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ri;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ra;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = um;
            break;
          case ef:
          case tf:
          case nf:
            g = Gp;
            break;
          case rf:
            g = sm;
            break;
          case "scroll":
            g = Vp;
            break;
          case "wheel":
            g = fm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ma;
        }
        var y = (t & 4) !== 0,
          N = !y && e === "scroll",
          p = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = cr(c, p)), x != null && y.push(gr(c, x, m)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((v = new g(v, w, null, n, f)), h.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== So &&
            (w = n.relatedTarget || n.fromElement) &&
            (Vt(w) || w[st]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = s),
              (w = w ? Vt(w) : null),
              w !== null &&
                ((N = nn(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = s)),
          g !== w)
        ) {
          if (
            ((y = Ra),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ma),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (N = g == null ? v : pn(g)),
            (m = w == null ? v : pn(w)),
            (v = new y(x, c + "leave", g, n, f)),
            (v.target = N),
            (v.relatedTarget = m),
            (x = null),
            Vt(f) === s &&
              ((y = new y(p, c + "enter", w, n, f)),
              (y.target = m),
              (y.relatedTarget = N),
              (x = y)),
            (N = x),
            g && w)
          )
            t: {
              for (y = g, p = w, c = 0, m = y; m; m = un(m)) c++;
              for (m = 0, x = p; x; x = un(x)) m++;
              for (; 0 < c - m; ) (y = un(y)), c--;
              for (; 0 < m - c; ) (p = un(p)), m--;
              for (; c--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = un(y)), (p = un(p));
              }
              y = null;
            }
          else y = null;
          g !== null && Ka(h, v, g, y, !1),
            w !== null && N !== null && Ka(h, N, w, y, !0);
        }
      }
      e: {
        if (
          ((v = s ? pn(s) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var _ = ym;
        else if (Fa(v))
          if (Gc) _ = Em;
          else {
            _ = xm;
            var E = wm;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (_ = Sm);
        if (_ && (_ = _(e, s))) {
          Xc(h, _, n, f);
          break e;
        }
        E && E(e, v, s),
          e === "focusout" &&
            (E = v._wrapperState) &&
            E.controlled &&
            v.type === "number" &&
            vo(v, "number", v.value);
      }
      switch (((E = s ? pn(s) : window), e)) {
        case "focusin":
          (Fa(E) || E.contentEditable === "true") &&
            ((fn = E), (jo = s), (rr = null));
          break;
        case "focusout":
          rr = jo = fn = null;
          break;
        case "mousedown":
          Co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Co = !1), Wa(h, n, f);
          break;
        case "selectionchange":
          if (Nm) break;
        case "keydown":
        case "keyup":
          Wa(h, n, f);
      }
      var P;
      if (_u)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        cn
          ? Kc(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Qc &&
          n.locale !== "ko" &&
          (cn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && cn && (P = Vc())
            : ((Et = f),
              (Su = "value" in Et ? Et.value : Et.textContent),
              (cn = !0))),
        (E = Cl(s, C)),
        0 < E.length &&
          ((C = new $a(C, e, null, n, f)),
          h.push({ event: C, listeners: E }),
          P ? (C.data = P) : ((P = Yc(n)), P !== null && (C.data = P)))),
        (P = pm ? mm(e, n) : hm(e, n)) &&
          ((s = Cl(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new $a("onBeforeInput", "beforeinput", null, n, f)),
            h.push({ event: f, listeners: s }),
            (f.data = P)));
    }
    of(h, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = cr(e, n)),
      i != null && r.unshift(gr(e, i, l)),
      (i = cr(e, t)),
      i != null && r.push(gr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ka(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = cr(n, i)), a != null && o.unshift(gr(n, a, u)))
        : l || ((a = cr(n, i)), a != null && o.push(gr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cm = /\r\n?/g,
  Om = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cm,
      `
`
    )
    .replace(Om, "");
}
function Gr(e, t, n) {
  if (((t = Ya(t)), Ya(e) !== t && n)) throw Error(k(425));
}
function Ol() {}
var Oo = null,
  Lo = null;
function Io(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ro = typeof setTimeout == "function" ? setTimeout : void 0,
  Lm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xa = typeof Promise == "function" ? Promise : void 0,
  Im =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xa < "u"
      ? function (e) {
          return Xa.resolve(null).then(e).catch(Rm);
        }
      : Ro;
function Rm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ui(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  pr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Mn,
  yr = "__reactProps$" + Mn,
  st = "__reactContainer$" + Mn,
  $o = "__reactEvents$" + Mn,
  $m = "__reactListeners$" + Mn,
  Mm = "__reactHandles$" + Mn;
function Vt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ga(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = Ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function jr(e) {
  return (
    (e = e[qe] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function ei(e) {
  return e[yr] || null;
}
var Mo = [],
  mn = -1;
function zt(e) {
  return { current: e };
}
function U(e) {
  0 > mn || ((e.current = Mo[mn]), (Mo[mn] = null), mn--);
}
function z(e, t) {
  mn++, (Mo[mn] = e.current), (e.current = t);
}
var Mt = {},
  me = zt(Mt),
  Se = zt(!1),
  bt = Mt;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function Ll() {
  U(Se), U(me);
}
function ba(e, t, n) {
  if (me.current !== Mt) throw Error(k(168));
  z(me, t), z(Se, n);
}
function af(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, wp(e) || "Unknown", l));
  return X({}, n, r);
}
function Il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (bt = me.current),
    z(me, e),
    z(Se, Se.current),
    !0
  );
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = af(e, t, bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Se),
      U(me),
      z(me, e))
    : U(Se),
    z(Se, n);
}
var lt = null,
  ti = !1,
  Bi = !1;
function sf(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Dm(e) {
  (ti = !0), sf(e);
}
function Ft() {
  if (!Bi && lt !== null) {
    Bi = !0;
    var e = 0,
      t = D;
    try {
      var n = lt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (ti = !1);
    } catch (l) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Rc(gu, Ft), l);
    } finally {
      (D = t), (Bi = !1);
    }
  }
  return null;
}
var hn = [],
  vn = 0,
  Rl = null,
  $l = 0,
  Re = [],
  $e = 0,
  Zt = null,
  it = 1,
  ot = "";
function Bt(e, t) {
  (hn[vn++] = $l), (hn[vn++] = Rl), (Rl = e), ($l = t);
}
function cf(e, t, n) {
  (Re[$e++] = it), (Re[$e++] = ot), (Re[$e++] = Zt), (Zt = e);
  var r = it;
  e = ot;
  var l = 32 - Ke(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ke(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (it = (1 << (32 - Ke(t) + l)) | (n << l) | r),
      (ot = i + e);
  } else (it = (1 << i) | (n << l) | r), (ot = e);
}
function Pu(e) {
  e.return !== null && (Bt(e, 1), cf(e, 1, 0));
}
function Tu(e) {
  for (; e === Rl; )
    (Rl = hn[--vn]), (hn[vn] = null), ($l = hn[--vn]), (hn[vn] = null);
  for (; e === Zt; )
    (Zt = Re[--$e]),
      (Re[$e] = null),
      (ot = Re[--$e]),
      (Re[$e] = null),
      (it = Re[--$e]),
      (Re[$e] = null);
}
var Ce = null,
  Te = null,
  W = !1,
  Ve = null;
function ff(e, t) {
  var n = Me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Te = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zt !== null ? { id: it, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (W) {
    var t = Te;
    if (t) {
      var n = t;
      if (!qa(e, t)) {
        if (Do(e)) throw Error(k(418));
        t = jt(n.nextSibling);
        var r = Ce;
        t && qa(e, t)
          ? ff(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e));
      }
    } else {
      if (Do(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ce = e);
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function br(e) {
  if (e !== Ce) return !1;
  if (!W) return Ja(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (Do(e)) throw (df(), Error(k(418)));
    for (; t; ) ff(e, t), (t = jt(t.nextSibling));
  }
  if ((Ja(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = Ce ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Te; e; ) e = jt(e.nextSibling);
}
function jn() {
  (Te = Ce = null), (W = !1);
}
function ju(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var zm = pt.ReactCurrentBatchConfig;
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ml = zt(null),
  Dl = null,
  gn = null,
  Cu = null;
function Ou() {
  Cu = gn = Dl = null;
}
function Lu(e) {
  var t = Ml.current;
  U(Ml), (e._currentValue = t);
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _n(e, t) {
  (Dl = e),
    (Cu = gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (Cu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gn === null)) {
      if (Dl === null) throw Error(k(308));
      (gn = e), (Dl.dependencies = { lanes: 0, firstContext: e });
    } else gn = gn.next = e;
  return t;
}
var Qt = null;
function Iu(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
function pf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Iu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ct(e, r)
  );
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ct(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Iu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ct(e, n)
  );
}
function ml(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
function es(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zl(e, t, n, r) {
  var l = e.updateQueue;
  wt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== o &&
        (u === null ? (f.firstBaseUpdate = s) : (u.next = s),
        (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (f = s = a = null), (u = i);
    do {
      var v = u.lane,
        g = u.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((v = t), (g = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                h = w.call(g, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (v = typeof w == "function" ? w.call(g, h, v) : w),
                v == null)
              )
                break e;
              h = X({}, h, v);
              break e;
            case 2:
              wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((s = f = g), (a = h)) : (f = f.next = g),
          (o |= v);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = h),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Jt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ts(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var hf = new dc.Component().refs;
function Ao(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ni = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Lt(e),
      i = ut(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ct(e, i, l)),
      t !== null && (Ye(t, e, l, r), ml(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Lt(e),
      i = ut(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ct(e, i, l)),
      t !== null && (Ye(t, e, l, r), ml(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Lt(e),
      l = ut(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ct(e, l, r)),
      t !== null && (Ye(t, e, r, n), ml(t, e, r));
  },
};
function ns(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hr(n, r) || !hr(l, i)
      : !0
  );
}
function vf(e, t, n) {
  var r = !1,
    l = Mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Fe(i))
      : ((l = Ee(t) ? bt : me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Tn(e, l) : Mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ni),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function rs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ni.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = hf), Ru(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Fe(i))
    : ((i = Ee(t) ? bt : me.current), (l.context = Tn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ao(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ni.enqueueReplaceState(l, l.state, null),
      zl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === hf && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ls(e) {
  var t = e._init;
  return t(e._payload);
}
function gf(e) {
  function t(p, c) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [c]), (p.flags |= 16)) : m.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = It(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((p.flags |= 2), c) : m)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, m, x) {
    return c === null || c.tag !== 6
      ? ((c = Gi(m, p.mode, x)), (c.return = p), c)
      : ((c = l(c, m)), (c.return = p), c);
  }
  function a(p, c, m, x) {
    var _ = m.type;
    return _ === sn
      ? f(p, c, m.props.children, x, m.key)
      : c !== null &&
        (c.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === yt &&
            ls(_) === c.type))
      ? ((x = l(c, m.props)), (x.ref = Qn(p, c, m)), (x.return = p), x)
      : ((x = xl(m.type, m.key, m.props, null, p.mode, x)),
        (x.ref = Qn(p, c, m)),
        (x.return = p),
        x);
  }
  function s(p, c, m, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = bi(m, p.mode, x)), (c.return = p), c)
      : ((c = l(c, m.children || [])), (c.return = p), c);
  }
  function f(p, c, m, x, _) {
    return c === null || c.tag !== 7
      ? ((c = Xt(m, p.mode, x, _)), (c.return = p), c)
      : ((c = l(c, m)), (c.return = p), c);
  }
  function h(p, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Gi("" + c, p.mode, m)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Hr:
          return (
            (m = xl(c.type, c.key, c.props, null, p.mode, m)),
            (m.ref = Qn(p, null, c)),
            (m.return = p),
            m
          );
        case an:
          return (c = bi(c, p.mode, m)), (c.return = p), c;
        case yt:
          var x = c._init;
          return h(p, x(c._payload), m);
      }
      if (bn(c) || Hn(c))
        return (c = Xt(c, p.mode, m, null)), (c.return = p), c;
      Zr(p, c);
    }
    return null;
  }
  function v(p, c, m, x) {
    var _ = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : u(p, c, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Hr:
          return m.key === _ ? a(p, c, m, x) : null;
        case an:
          return m.key === _ ? s(p, c, m, x) : null;
        case yt:
          return (_ = m._init), v(p, c, _(m._payload), x);
      }
      if (bn(m) || Hn(m)) return _ !== null ? null : f(p, c, m, x, null);
      Zr(p, m);
    }
    return null;
  }
  function g(p, c, m, x, _) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(m) || null), u(c, p, "" + x, _);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Hr:
          return (p = p.get(x.key === null ? m : x.key) || null), a(c, p, x, _);
        case an:
          return (p = p.get(x.key === null ? m : x.key) || null), s(c, p, x, _);
        case yt:
          var E = x._init;
          return g(p, c, m, E(x._payload), _);
      }
      if (bn(x) || Hn(x)) return (p = p.get(m) || null), f(c, p, x, _, null);
      Zr(c, x);
    }
    return null;
  }
  function w(p, c, m, x) {
    for (
      var _ = null, E = null, P = c, C = (c = 0), M = null;
      P !== null && C < m.length;
      C++
    ) {
      P.index > C ? ((M = P), (P = null)) : (M = P.sibling);
      var O = v(p, P, m[C], x);
      if (O === null) {
        P === null && (P = M);
        break;
      }
      e && P && O.alternate === null && t(p, P),
        (c = i(O, c, C)),
        E === null ? (_ = O) : (E.sibling = O),
        (E = O),
        (P = M);
    }
    if (C === m.length) return n(p, P), W && Bt(p, C), _;
    if (P === null) {
      for (; C < m.length; C++)
        (P = h(p, m[C], x)),
          P !== null &&
            ((c = i(P, c, C)), E === null ? (_ = P) : (E.sibling = P), (E = P));
      return W && Bt(p, C), _;
    }
    for (P = r(p, P); C < m.length; C++)
      (M = g(P, p, C, m[C], x)),
        M !== null &&
          (e && M.alternate !== null && P.delete(M.key === null ? C : M.key),
          (c = i(M, c, C)),
          E === null ? (_ = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        P.forEach(function (ne) {
          return t(p, ne);
        }),
      W && Bt(p, C),
      _
    );
  }
  function y(p, c, m, x) {
    var _ = Hn(m);
    if (typeof _ != "function") throw Error(k(150));
    if (((m = _.call(m)), m == null)) throw Error(k(151));
    for (
      var E = (_ = null), P = c, C = (c = 0), M = null, O = m.next();
      P !== null && !O.done;
      C++, O = m.next()
    ) {
      P.index > C ? ((M = P), (P = null)) : (M = P.sibling);
      var ne = v(p, P, O.value, x);
      if (ne === null) {
        P === null && (P = M);
        break;
      }
      e && P && ne.alternate === null && t(p, P),
        (c = i(ne, c, C)),
        E === null ? (_ = ne) : (E.sibling = ne),
        (E = ne),
        (P = M);
    }
    if (O.done) return n(p, P), W && Bt(p, C), _;
    if (P === null) {
      for (; !O.done; C++, O = m.next())
        (O = h(p, O.value, x)),
          O !== null &&
            ((c = i(O, c, C)), E === null ? (_ = O) : (E.sibling = O), (E = O));
      return W && Bt(p, C), _;
    }
    for (P = r(p, P); !O.done; C++, O = m.next())
      (O = g(P, p, C, O.value, x)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? C : O.key),
          (c = i(O, c, C)),
          E === null ? (_ = O) : (E.sibling = O),
          (E = O));
    return (
      e &&
        P.forEach(function (_e) {
          return t(p, _e);
        }),
      W && Bt(p, C),
      _
    );
  }
  function N(p, c, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Hr:
          e: {
            for (var _ = m.key, E = c; E !== null; ) {
              if (E.key === _) {
                if (((_ = m.type), _ === sn)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (c = l(E, m.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  E.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === yt &&
                    ls(_) === E.type)
                ) {
                  n(p, E.sibling),
                    (c = l(E, m.props)),
                    (c.ref = Qn(p, E, m)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            m.type === sn
              ? ((c = Xt(m.props.children, p.mode, x, m.key)),
                (c.return = p),
                (p = c))
              : ((x = xl(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = Qn(p, c, m)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case an:
          e: {
            for (E = m.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = bi(m, p.mode, x)), (c.return = p), (p = c);
          }
          return o(p);
        case yt:
          return (E = m._init), N(p, c, E(m._payload), x);
      }
      if (bn(m)) return w(p, c, m, x);
      if (Hn(m)) return y(p, c, m, x);
      Zr(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, m)), (c.return = p), (p = c))
          : (n(p, c), (c = Gi(m, p.mode, x)), (c.return = p), (p = c)),
        o(p))
      : n(p, c);
  }
  return N;
}
var Cn = gf(!0),
  yf = gf(!1),
  Cr = {},
  et = zt(Cr),
  wr = zt(Cr),
  xr = zt(Cr);
function Kt(e) {
  if (e === Cr) throw Error(k(174));
  return e;
}
function $u(e, t) {
  switch ((z(xr, t), z(wr, e), z(et, Cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yo(t, e));
  }
  U(et), z(et, t);
}
function On() {
  U(et), U(wr), U(xr);
}
function wf(e) {
  Kt(xr.current);
  var t = Kt(et.current),
    n = yo(t, e.type);
  t !== n && (z(wr, e), z(et, n));
}
function Mu(e) {
  wr.current === e && (U(et), U(wr));
}
var K = zt(0);
function Fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Wi = [];
function Du() {
  for (var e = 0; e < Wi.length; e++)
    Wi[e]._workInProgressVersionPrimary = null;
  Wi.length = 0;
}
var hl = pt.ReactCurrentDispatcher,
  Vi = pt.ReactCurrentBatchConfig,
  qt = 0,
  Y = null,
  ee = null,
  re = null,
  Al = !1,
  lr = !1,
  Sr = 0,
  Fm = 0;
function fe() {
  throw Error(k(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, l, i) {
  if (
    ((qt = i),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (hl.current = e === null || e.memoizedState === null ? Bm : Wm),
    (e = n(r, l)),
    lr)
  ) {
    i = 0;
    do {
      if (((lr = !1), (Sr = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (re = ee = null),
        (t.updateQueue = null),
        (hl.current = Vm),
        (e = n(r, l));
    } while (lr);
  }
  if (
    ((hl.current = Hl),
    (t = ee !== null && ee.next !== null),
    (qt = 0),
    (re = ee = Y = null),
    (Al = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Au() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Ae() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? Y.memoizedState : re.next;
  if (t !== null) (re = t), (ee = e);
  else {
    if (e === null) throw Error(k(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qi(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ee,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var f = s.lane;
      if ((qt & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = h), (o = r)) : (a = a.next = h),
          (Y.lanes |= f),
          (Jt |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      Xe(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (Y.lanes |= i), (Jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ki(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Xe(i, t.memoizedState) || (xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xf() {}
function Sf(e, t) {
  var n = Y,
    r = Ae(),
    l = t(),
    i = !Xe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (xe = !0)),
    (r = r.queue),
    Hu(_f.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      kr(9, kf.bind(null, n, r, l, t), void 0, null),
      le === null)
    )
      throw Error(k(349));
    qt & 30 || Ef(n, t, l);
  }
  return l;
}
function Ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Nf(t) && Pf(e);
}
function _f(e, t, n) {
  return n(function () {
    Nf(t) && Pf(e);
  });
}
function Nf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Pf(e) {
  var t = ct(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function is(e) {
  var t = be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Um.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Tf() {
  return Ae().memoizedState;
}
function vl(e, t, n, r) {
  var l = be();
  (Y.flags |= e),
    (l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ri(e, t, n, r) {
  var l = Ae();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (((i = o.destroy), r !== null && zu(r, o.deps))) {
      l.memoizedState = kr(t, n, i, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = kr(1 | t, n, i, r));
}
function os(e, t) {
  return vl(8390656, 8, e, t);
}
function Hu(e, t) {
  return ri(2048, 8, e, t);
}
function jf(e, t) {
  return ri(4, 2, e, t);
}
function Cf(e, t) {
  return ri(4, 4, e, t);
}
function Of(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Lf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ri(4, 4, Of.bind(null, t, e), n)
  );
}
function Uu() {}
function If(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rf(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $f(e, t, n) {
  return qt & 21
    ? (Xe(n, t) || ((n = Dc()), (Y.lanes |= n), (Jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function Am(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vi.transition;
  Vi.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Vi.transition = r);
  }
}
function Mf() {
  return Ae().memoizedState;
}
function Hm(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Df(e))
  )
    zf(t, n);
  else if (((n = pf(e, t, n, r)), n !== null)) {
    var l = ve();
    Ye(n, e, r, l), Ff(n, t, r);
  }
}
function Um(e, t, n) {
  var r = Lt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Df(e)) zf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Xe(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Iu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pf(e, t, l, r)),
      n !== null && ((l = ve()), Ye(n, e, r, l), Ff(n, t, r));
  }
}
function Df(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function zf(e, t) {
  lr = Al = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ff(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
var Hl = {
    readContext: Fe,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  Bm = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: os,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vl(4194308, 4, Of.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hm.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: is,
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      return (be().memoizedState = e);
    },
    useTransition: function () {
      var e = is(!1),
        t = e[0];
      return (e = Am.bind(null, e[1])), (be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = be();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(k(349));
        qt & 30 || Ef(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        os(_f.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        kr(9, kf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = be(),
        t = le.identifierPrefix;
      if (W) {
        var n = ot,
          r = it;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wm = {
    readContext: Fe,
    useCallback: If,
    useContext: Fe,
    useEffect: Hu,
    useImperativeHandle: Lf,
    useInsertionEffect: jf,
    useLayoutEffect: Cf,
    useMemo: Rf,
    useReducer: Qi,
    useRef: Tf,
    useState: function () {
      return Qi(Er);
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = Ae();
      return $f(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Qi(Er)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  },
  Vm = {
    readContext: Fe,
    useCallback: If,
    useContext: Fe,
    useEffect: Hu,
    useImperativeHandle: Lf,
    useInsertionEffect: jf,
    useLayoutEffect: Cf,
    useMemo: Rf,
    useReducer: Ki,
    useRef: Tf,
    useState: function () {
      return Ki(Er);
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = Ae();
      return ee === null ? (t.memoizedState = e) : $f(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ki(Er)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  };
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qm = typeof WeakMap == "function" ? WeakMap : Map;
function Af(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bl || ((Bl = !0), (Zo = r)), Uo(e, t);
    }),
    n
  );
}
function Hf(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Uo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Uo(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function us(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ih.bind(null, e, t, n)), t.then(e, e));
}
function as(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ss(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Km = pt.ReactCurrentOwner,
  xe = !1;
function he(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : Cn(t, e.child, n, r);
}
function cs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    _n(t, l),
    (r = Fu(e, t, n, r, i, l)),
    (n = Au()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && n && Pu(t), (t.flags |= 1), he(e, t, r, l), t.child)
  );
}
function fs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Gu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Uf(e, t, i, r, l))
      : ((e = xl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hr), n(o, r) && e.ref === t.ref)
    )
      return ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = It(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Uf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hr(i, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (xe = !0);
      else return (t.lanes = e.lanes), ft(e, t, l);
  }
  return Bo(e, t, n, r, l);
}
function Bf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(wn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(wn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        z(wn, Ne),
        (Ne |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(wn, Ne),
      (Ne |= r);
  return he(e, t, l, n), t.child;
}
function Wf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bo(e, t, n, r, l) {
  var i = Ee(n) ? bt : me.current;
  return (
    (i = Tn(t, i)),
    _n(t, l),
    (n = Fu(e, t, n, r, i, l)),
    (r = Au()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && r && Pu(t), (t.flags |= 1), he(e, t, n, l), t.child)
  );
}
function ds(e, t, n, r, l) {
  if (Ee(n)) {
    var i = !0;
    Il(t);
  } else i = !1;
  if ((_n(t, l), t.stateNode === null))
    gl(e, t), vf(t, n, r), Ho(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Fe(s))
      : ((s = Ee(n) ? bt : me.current), (s = Tn(t, s)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && rs(t, o, r, s)),
      (wt = !1);
    var v = t.memoizedState;
    (o.state = v),
      zl(t, r, o, l),
      (a = t.memoizedState),
      u !== r || v !== a || Se.current || wt
        ? (typeof f == "function" && (Ao(t, n, f, r), (a = t.memoizedState)),
          (u = wt || ns(t, n, u, r, v, a, s))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      mf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Be(t.type, u)),
      (o.props = s),
      (h = t.pendingProps),
      (v = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Fe(a))
        : ((a = Ee(n) ? bt : me.current), (a = Tn(t, a)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || v !== a) && rs(t, o, r, a)),
      (wt = !1),
      (v = t.memoizedState),
      (o.state = v),
      zl(t, r, o, l);
    var w = t.memoizedState;
    u !== h || v !== w || Se.current || wt
      ? (typeof g == "function" && (Ao(t, n, g, r), (w = t.memoizedState)),
        (s = wt || ns(t, n, s, r, v, w, a) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wo(e, t, n, r, i, l);
}
function Wo(e, t, n, r, l, i) {
  Wf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Za(t, n, !1), ft(e, t, i);
  (r = t.stateNode), (Km.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Cn(t, e.child, null, i)), (t.child = Cn(t, null, u, i)))
      : he(e, t, u, i),
    (t.memoizedState = r.state),
    l && Za(t, n, !0),
    t.child
  );
}
function Vf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ba(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ba(e, t.context, !1),
    $u(e, t.containerInfo);
}
function ps(e, t, n, r, l) {
  return jn(), ju(l), (t.flags |= 256), he(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    z(K, l & 1),
    e === null)
  )
    return (
      zo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = oi(o, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Qo(n)),
              (t.memoizedState = Vo),
              e)
            : Bu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ym(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = It(u, i)) : ((i = Xt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Qo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = It(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (
    (t = oi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qr(e, t, n, r) {
  return (
    r !== null && ju(r),
    Cn(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ym(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yi(Error(k(422)))), qr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = oi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Xt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, o),
        (t.child.memoizedState = Qo(o)),
        (t.memoizedState = Vo),
        i);
  if (!(t.mode & 1)) return qr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(k(419))), (r = Yi(i, r, void 0)), qr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), xe || u)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), ct(e, l), Ye(r, e, l, -1));
    }
    return Xu(), (r = Yi(Error(k(421)))), qr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Te = jt(l.nextSibling)),
      (Ce = t),
      (W = !0),
      (Ve = null),
      e !== null &&
        ((Re[$e++] = it),
        (Re[$e++] = ot),
        (Re[$e++] = Zt),
        (it = e.id),
        (ot = e.overflow),
        (Zt = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ms(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function Xi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((he(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ms(e, n, t);
        else if (e.tag === 19) ms(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Fl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Fl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xi(t, !0, n, null, i);
        break;
      case "together":
        Xi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xm(e, t, n) {
  switch (t.tag) {
    case 3:
      Vf(t), jn();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      Ee(t.type) && Il(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      z(Ml, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qf(e, t, n)
          : (z(K, K.current & 1),
            (e = ft(e, t, n)),
            e !== null ? e.sibling : null);
      z(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Kf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        z(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bf(e, t, n);
  }
  return ft(e, t, n);
}
var Yf, Ko, Xf, Gf;
Yf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ko = function () {};
Xf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Kt(et.current);
    var i = null;
    switch (n) {
      case "input":
        (l = mo(e, l)), (r = mo(e, r)), (i = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = go(e, l)), (r = go(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ol);
    }
    wo(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (ar.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (ar.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && H("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gm(e, t, n) {
  var r = t.pendingProps;
  switch ((Tu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Ee(t.type) && Ll(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        U(Se),
        U(me),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (eu(Ve), (Ve = null)))),
        Ko(e, t),
        de(t),
        null
      );
    case 5:
      Mu(t);
      var l = Kt(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return de(t), null;
        }
        if (((e = Kt(et.current)), br(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[yr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < qn.length; l++) H(qn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              ka(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Na(r, i), H("invalid", r);
          }
          wo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : ar.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), _a(r, i, !0);
              break;
            case "textarea":
              Ur(r), Pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[qe] = t),
            (e[yr] = r),
            Yf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = xo(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qn.length; l++) H(qn[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                ka(e, r), (l = mo(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                Na(e, r), (l = go(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            wo(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? _c(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ec(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && sr(e, a)
                    : typeof a == "number" && sr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ar.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && H("scroll", e)
                      : a != null && du(e, i, a, o));
              }
            switch (n) {
              case "input":
                Ur(e), _a(e, r, !1);
                break;
              case "textarea":
                Ur(e), Pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? xn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Kt(xr.current)), Kt(et.current), br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (U(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Te !== null && t.mode & 1 && !(t.flags & 128))
          df(), jn(), (t.flags |= 98560), (i = !1);
        else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[qe] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (i = !1);
        } else Ve !== null && (eu(Ve), (Ve = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? te === 0 && (te = 3) : Xu())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        On(), Ko(e, t), e === null && vr(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Lu(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && Ll(), de(t), null;
    case 19:
      if ((U(K), (i = t.memoizedState), i === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Kn(i, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Kn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            q() > In &&
            ((t.flags |= 128), (r = !0), Kn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !W)
            )
              return de(t), null;
          } else
            2 * q() - i.renderingStartTime > In &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = q()),
          (t.sibling = null),
          (n = K.current),
          z(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function bm(e, t) {
  switch ((Tu(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        U(Se),
        U(me),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mu(t), null;
    case 13:
      if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(K), null;
    case 4:
      return On(), null;
    case 10:
      return Lu(t.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jr = !1,
  pe = !1,
  Zm = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function Yo(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var hs = !1;
function qm(e, t) {
  if (((Oo = Tl), (e = qc()), Nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            f = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (v = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++s === l && (u = o),
                v === i && ++f === r && (a = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Lo = { focusedElem: e, selectionRange: n }, Tl = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    N = w.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Be(t.type, y),
                      N
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          b(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = hs), (hs = !1), w;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Yo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function li(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[yr], delete t[$o], delete t[$m], delete t[Mm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), (e = e.sibling);
}
var ie = null,
  We = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) qf(e, t, n), (n = n.sibling);
}
function qf(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || yn(n, t);
    case 6:
      var r = ie,
        l = We;
      (ie = null),
        mt(e, t, n),
        (ie = r),
        (We = l),
        ie !== null &&
          (We
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (We
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ui(e.parentNode, n)
              : e.nodeType === 1 && Ui(e, n),
            pr(e))
          : Ui(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (l = We),
        (ie = n.stateNode.containerInfo),
        (We = !0),
        mt(e, t, n),
        (ie = r),
        (We = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Yo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          b(n, t, u);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), mt(e, t, n), (pe = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function gs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zm()),
      t.forEach(function (r) {
        var l = uh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ie = u.stateNode), (We = !1);
              break e;
            case 3:
              (ie = u.stateNode.containerInfo), (We = !0);
              break e;
            case 4:
              (ie = u.stateNode.containerInfo), (We = !0);
              break e;
          }
          u = u.return;
        }
        if (ie === null) throw Error(k(160));
        qf(i, o, l), (ie = null), (We = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        b(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jf(t, e), (t = t.sibling);
}
function Jf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ge(e), r & 4)) {
        try {
          ir(3, e, e.return), li(3, e);
        } catch (y) {
          b(e, e.return, y);
        }
        try {
          ir(5, e, e.return);
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ge(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          sr(l, "");
        } catch (y) {
          b(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && wc(l, i),
              xo(u, o);
            var s = xo(u, i);
            for (o = 0; o < a.length; o += 2) {
              var f = a[o],
                h = a[o + 1];
              f === "style"
                ? _c(l, h)
                : f === "dangerouslySetInnerHTML"
                ? Ec(l, h)
                : f === "children"
                ? sr(l, h)
                : du(l, f, h, s);
            }
            switch (u) {
              case "input":
                ho(l, i);
                break;
              case "textarea":
                xc(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? xn(l, !!i.multiple, g, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? xn(l, !!i.multiple, i.defaultValue, !0)
                      : xn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[yr] = i;
          } catch (y) {
            b(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (y) {
          b(e, e.return, y);
        }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Qu = q())),
        r & 4 && gs(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (s = pe) || f), Ue(t, e), (pe = s)) : Ue(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (h = j = f; j !== null; ) {
              switch (((v = j), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, v, v.return);
                  break;
                case 1:
                  yn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      b(r, n, y);
                    }
                  }
                  break;
                case 5:
                  yn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ws(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (j = g)) : ws(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = kc("display", o)));
              } catch (y) {
                b(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (y) {
                b(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ge(e), r & 4 && gs(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (sr(l, ""), (r.flags &= -33));
          var i = vs(e);
          bo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = vs(e);
          Go(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jm(e, t, n) {
  (j = e), ed(e);
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Jr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || pe;
        u = Jr;
        var s = pe;
        if (((Jr = o), (pe = a) && !s))
          for (j = l; j !== null; )
            (o = j),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? xs(l)
                : a !== null
                ? ((a.return = o), (j = a))
                : xs(l);
        for (; i !== null; ) (j = i), ed(i), (i = i.sibling);
        (j = l), (Jr = u), (pe = s);
      }
      ys(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : ys(e);
  }
}
function ys(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || li(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ts(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ts(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && pr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        pe || (t.flags & 512 && Xo(t));
      } catch (v) {
        b(t, t.return, v);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function ws(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function xs(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            li(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, l, a);
            }
          }
          var i = t.return;
          try {
            Xo(t);
          } catch (a) {
            b(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Xo(t);
          } catch (a) {
            b(t, o, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var eh = Math.ceil,
  Ul = pt.ReactCurrentDispatcher,
  Wu = pt.ReactCurrentOwner,
  De = pt.ReactCurrentBatchConfig,
  $ = 0,
  le = null,
  J = null,
  ae = 0,
  Ne = 0,
  wn = zt(0),
  te = 0,
  _r = null,
  Jt = 0,
  ii = 0,
  Vu = 0,
  or = null,
  we = null,
  Qu = 0,
  In = 1 / 0,
  rt = null,
  Bl = !1,
  Zo = null,
  Ot = null,
  el = !1,
  kt = null,
  Wl = 0,
  ur = 0,
  qo = null,
  yl = -1,
  wl = 0;
function ve() {
  return $ & 6 ? q() : yl !== -1 ? yl : (yl = q());
}
function Lt(e) {
  return e.mode & 1
    ? $ & 2 && ae !== 0
      ? ae & -ae
      : zm.transition !== null
      ? (wl === 0 && (wl = Dc()), wl)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), (qo = null), Error(k(185)));
  Pr(e, n, r),
    (!($ & 2) || e !== le) &&
      (e === le && (!($ & 2) && (ii |= n), te === 4 && St(e, ae)),
      ke(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((In = q() + 500), ti && Ft()));
}
function ke(e, t) {
  var n = e.callbackNode;
  zp(e, t);
  var r = Pl(e, e === le ? ae : 0);
  if (r === 0)
    n !== null && Ca(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ca(n), t === 1))
      e.tag === 0 ? Dm(Ss.bind(null, e)) : sf(Ss.bind(null, e)),
        Im(function () {
          !($ & 6) && Ft();
        }),
        (n = null);
    else {
      switch (zc(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = Nl;
          break;
        case 536870912:
          n = Mc;
          break;
        default:
          n = Nl;
      }
      n = ad(n, td.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function td(e, t) {
  if (((yl = -1), (wl = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = Pl(e, e === le ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var i = rd();
    (le !== e || ae !== t) && ((rt = null), (In = q() + 500), Yt(e, t));
    do
      try {
        rh();
        break;
      } catch (u) {
        nd(e, u);
      }
    while (1);
    Ou(),
      (Ul.current = i),
      ($ = l),
      J !== null ? (t = 0) : ((le = null), (ae = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = No(e)), l !== 0 && ((r = l), (t = Jo(e, l)))), t === 1)
    )
      throw ((n = _r), Yt(e, 0), St(e, r), ke(e, q()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !th(l) &&
          ((t = Vl(e, r)),
          t === 2 && ((i = No(e)), i !== 0 && ((r = i), (t = Jo(e, i)))),
          t === 1))
      )
        throw ((n = _r), Yt(e, 0), St(e, r), ke(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Wt(e, we, rt);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = Qu + 500 - q()), 10 < t))
          ) {
            if (Pl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ro(Wt.bind(null, e, we, rt), t);
            break;
          }
          Wt(e, we, rt);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ke(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * eh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ro(Wt.bind(null, e, we, rt), r);
            break;
          }
          Wt(e, we, rt);
          break;
        case 5:
          Wt(e, we, rt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ke(e, q()), e.callbackNode === n ? td.bind(null, e) : null;
}
function Jo(e, t) {
  var n = or;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = Vl(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && eu(t)),
    e
  );
}
function eu(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function th(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~Vu,
      t &= ~ii,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ss(e) {
  if ($ & 6) throw Error(k(327));
  Nn();
  var t = Pl(e, 0);
  if (!(t & 1)) return ke(e, q()), null;
  var n = Vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = No(e);
    r !== 0 && ((t = r), (n = Jo(e, r)));
  }
  if (n === 1) throw ((n = _r), Yt(e, 0), St(e, t), ke(e, q()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wt(e, we, rt),
    ke(e, q()),
    null
  );
}
function Ku(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((In = q() + 500), ti && Ft());
  }
}
function en(e) {
  kt !== null && kt.tag === 0 && !($ & 6) && Nn();
  var t = $;
  $ |= 1;
  var n = De.transition,
    r = D;
  try {
    if (((De.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (De.transition = n), ($ = t), !($ & 6) && Ft();
  }
}
function Yu() {
  (Ne = wn.current), U(wn);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lm(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Tu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ll();
          break;
        case 3:
          On(), U(Se), U(me), Du();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          On();
          break;
        case 13:
          U(K);
          break;
        case 19:
          U(K);
          break;
        case 10:
          Lu(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (J = e = It(e.current, null)),
    (ae = Ne = t),
    (te = 0),
    (_r = null),
    (Vu = ii = Jt = 0),
    (we = or = null),
    Qt !== null)
  ) {
    for (t = 0; t < Qt.length; t++)
      if (((n = Qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Qt = null;
  }
  return e;
}
function nd(e, t) {
  do {
    var n = J;
    try {
      if ((Ou(), (hl.current = Hl), Al)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Al = !1;
      }
      if (
        ((qt = 0),
        (re = ee = Y = null),
        (lr = !1),
        (Sr = 0),
        (Wu.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (_r = t), (J = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = ae),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            f = u,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = as(o);
          if (g !== null) {
            (g.flags &= -257),
              ss(g, o, u, i, t),
              g.mode & 1 && us(i, s, t),
              (t = g),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              us(i, s, t), Xu();
              break e;
            }
            a = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var N = as(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ss(N, o, u, i, t),
              ju(Ln(a, u));
            break e;
          }
        }
        (i = a = Ln(a, u)),
          te !== 4 && (te = 2),
          or === null ? (or = [i]) : or.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Af(i, a, t);
              es(i, p);
              break e;
            case 1:
              u = a;
              var c = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = Hf(i, u, t);
                es(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      id(n);
    } catch (_) {
      (t = _), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rd() {
  var e = Ul.current;
  return (Ul.current = Hl), e === null ? Hl : e;
}
function Xu() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    le === null || (!(Jt & 268435455) && !(ii & 268435455)) || St(le, ae);
}
function Vl(e, t) {
  var n = $;
  $ |= 2;
  var r = rd();
  (le !== e || ae !== t) && ((rt = null), Yt(e, t));
  do
    try {
      nh();
      break;
    } catch (l) {
      nd(e, l);
    }
  while (1);
  if ((Ou(), ($ = n), (Ul.current = r), J !== null)) throw Error(k(261));
  return (le = null), (ae = 0), te;
}
function nh() {
  for (; J !== null; ) ld(J);
}
function rh() {
  for (; J !== null && !jp(); ) ld(J);
}
function ld(e) {
  var t = ud(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? id(e) : (J = t),
    (Wu.current = null);
}
function id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bm(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (J = null);
        return;
      }
    } else if (((n = Gm(n, t, Ne)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Wt(e, t, n) {
  var r = D,
    l = De.transition;
  try {
    (De.transition = null), (D = 1), lh(e, t, n, r);
  } finally {
    (De.transition = l), (D = r);
  }
  return null;
}
function lh(e, t, n, r) {
  do Nn();
  while (kt !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Fp(e, i),
    e === le && ((J = le = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      el ||
      ((el = !0),
      ad(Nl, function () {
        return Nn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = De.transition), (De.transition = null);
    var o = D;
    D = 1;
    var u = $;
    ($ |= 4),
      (Wu.current = null),
      qm(e, n),
      Jf(n, e),
      _m(Lo),
      (Tl = !!Oo),
      (Lo = Oo = null),
      (e.current = n),
      Jm(n),
      Cp(),
      ($ = u),
      (D = o),
      (De.transition = i);
  } else e.current = n;
  if (
    (el && ((el = !1), (kt = e), (Wl = l)),
    (i = e.pendingLanes),
    i === 0 && (Ot = null),
    Ip(n.stateNode),
    ke(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Bl) throw ((Bl = !1), (e = Zo), (Zo = null), e);
  return (
    Wl & 1 && e.tag !== 0 && Nn(),
    (i = e.pendingLanes),
    i & 1 ? (e === qo ? ur++ : ((ur = 0), (qo = e))) : (ur = 0),
    Ft(),
    null
  );
}
function Nn() {
  if (kt !== null) {
    var e = zc(Wl),
      t = De.transition,
      n = D;
    try {
      if (((De.transition = null), (D = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (Wl = 0), $ & 6)) throw Error(k(331));
        var l = $;
        for ($ |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (j = s; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, f, i);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (j = h);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var v = f.sibling,
                        g = f.return;
                      if ((bf(f), f === s)) {
                        j = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (j = v);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var N = y.sibling;
                    (y.sibling = null), (y = N);
                  } while (y !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (j = p);
                break e;
              }
              j = i.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          o = j;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (j = m);
          else
            e: for (o = c; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li(9, u);
                  }
                } catch (_) {
                  b(u, u.return, _);
                }
              if (u === o) {
                j = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (j = x);
                break e;
              }
              j = u.return;
            }
        }
        if (
          (($ = l), Ft(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (De.transition = t);
    }
  }
  return !1;
}
function Es(e, t, n) {
  (t = Ln(n, t)),
    (t = Af(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = ve()),
    e !== null && (Pr(e, 1, t), ke(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) Es(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Es(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = Ln(n, e)),
            (e = Hf(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = ve()),
            t !== null && (Pr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ih(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ae & n) === n &&
      (te === 4 || (te === 3 && (ae & 130023424) === ae && 500 > q() - Qu)
        ? Yt(e, 0)
        : (Vu |= n)),
    ke(e, t);
}
function od(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vr), (Vr <<= 1), !(Vr & 130023424) && (Vr = 4194304))
      : (t = 1));
  var n = ve();
  (e = ct(e, t)), e !== null && (Pr(e, t, n), ke(e, n));
}
function oh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), od(e, n);
}
function uh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), od(e, n);
}
var ud;
ud = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), Xm(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else (xe = !1), W && t.flags & 1048576 && cf(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gl(e, t), (e = t.pendingProps);
      var l = Tn(t, me.current);
      _n(t, n), (l = Fu(null, t, r, e, l, n));
      var i = Au();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((i = !0), Il(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ru(t),
            (l.updater = ni),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ho(t, r, e, n),
            (t = Wo(null, t, r, !0, i, n)))
          : ((t.tag = 0), W && i && Pu(t), he(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = sh(r)),
          (e = Be(r, e)),
          l)
        ) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = ds(null, t, r, e, n);
            break e;
          case 11:
            t = cs(null, t, r, e, n);
            break e;
          case 14:
            t = fs(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Bo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        ds(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Vf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          mf(e, t),
          zl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Ln(Error(k(423)), t)), (t = ps(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Ln(Error(k(424)), t)), (t = ps(e, t, r, n, l));
            break e;
          } else
            for (
              Te = jt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                W = !0,
                Ve = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === l)) {
            t = ft(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wf(t),
        e === null && zo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Io(r, l) ? (o = null) : i !== null && Io(r, i) && (t.flags |= 32),
        Wf(e, t),
        he(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zo(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return (
        $u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        cs(e, t, r, l, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          z(Ml, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Xe(i.value, o)) {
            if (i.children === l.children && !Se.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Fo(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Fo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        he(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (l = Fe(l)),
        (r = r(l)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Be(r, t.pendingProps)),
        (l = Be(r.type, l)),
        fs(e, t, r, l, n)
      );
    case 15:
      return Uf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        gl(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), Il(t)) : (e = !1),
        _n(t, n),
        vf(t, r, l),
        Ho(t, r, l, n),
        Wo(null, t, r, !0, e, n)
      );
    case 19:
      return Kf(e, t, n);
    case 22:
      return Bf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function ad(e, t) {
  return Rc(e, t);
}
function ah(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Me(e, t, n, r) {
  return new ah(e, t, n, r);
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sh(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === mu)) return 11;
    if (e === hu) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function xl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case sn:
        return Xt(n.children, l, i, t);
      case pu:
        (o = 8), (l |= 8);
        break;
      case so:
        return (
          (e = Me(12, n, t, l | 2)), (e.elementType = so), (e.lanes = i), e
        );
      case co:
        return (e = Me(13, n, t, l)), (e.elementType = co), (e.lanes = i), e;
      case fo:
        return (e = Me(19, n, t, l)), (e.elementType = fo), (e.lanes = i), e;
      case vc:
        return oi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              o = 10;
              break e;
            case hc:
              o = 9;
              break e;
            case mu:
              o = 11;
              break e;
            case hu:
              o = 14;
              break e;
            case yt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Xt(e, t, n, r) {
  return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function oi(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gi(e, t, n) {
  return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function bi(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ch(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Oi(0)),
    (this.expirationTimes = Oi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Oi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function bu(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new ch(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Me(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(i),
    e
  );
}
function fh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sd(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (nn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return af(e, n, t);
  }
  return t;
}
function cd(e, t, n, r, l, i, o, u, a) {
  return (
    (e = bu(n, r, !0, e, l, i, o, u, a)),
    (e.context = sd(null)),
    (n = e.current),
    (r = ve()),
    (l = Lt(n)),
    (i = ut(r, l)),
    (i.callback = t ?? null),
    Ct(n, i, l),
    (e.current.lanes = l),
    Pr(e, l, r),
    ke(e, r),
    e
  );
}
function ui(e, t, n, r) {
  var l = t.current,
    i = ve(),
    o = Lt(l);
  return (
    (n = sd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(l, t, o)),
    e !== null && (Ye(e, l, o, i), ml(e, l, o)),
    o
  );
}
function Ql(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ks(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  ks(e, t), (e = e.alternate) && ks(e, t);
}
function dh() {
  return null;
}
var fd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qu(e) {
  this._internalRoot = e;
}
ai.prototype.render = qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  ui(e, t, null, null);
};
ai.prototype.unmount = qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function () {
      ui(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function ai(e) {
  this._internalRoot = e;
}
ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
    xt.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function si(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _s() {}
function ph(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Ql(o);
        i.call(s);
      };
    }
    var o = cd(t, r, e, 0, null, !1, !1, "", _s);
    return (
      (e._reactRootContainer = o),
      (e[st] = o.current),
      vr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Ql(a);
      u.call(s);
    };
  }
  var a = bu(e, 0, !1, null, null, !1, !1, "", _s);
  return (
    (e._reactRootContainer = a),
    (e[st] = a.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      ui(t, a, n, r);
    }),
    a
  );
}
function ci(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Ql(o);
        u.call(a);
      };
    }
    ui(t, o, e, l);
  } else o = ph(n, t, e, l, r);
  return Ql(o);
}
Fc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (yu(t, n | 1), ke(t, q()), !($ & 6) && ((In = q() + 500), Ft()));
      }
      break;
    case 13:
      en(function () {
        var r = ct(e, 1);
        if (r !== null) {
          var l = ve();
          Ye(r, e, 1, l);
        }
      }),
        Zu(e, 1);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = ve();
      Ye(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = ct(e, t);
    if (n !== null) {
      var r = ve();
      Ye(n, e, t, r);
    }
    Zu(e, t);
  }
};
Hc = function () {
  return D;
};
Uc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Eo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ho(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ei(r);
            if (!l) throw Error(k(90));
            yc(r), ho(r, l);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && xn(e, !!n.multiple, t, !1);
  }
};
Tc = Ku;
jc = en;
var mh = { usingClientEntryPoint: !1, Events: [jr, pn, ei, Nc, Pc, Ku] },
  Yn = {
    findFiberByHostInstance: Vt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  hh = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || dh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      (bl = tl.inject(hh)), (Je = tl);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(k(200));
  return fh(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = fd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = bu(e, 1, !1, null, null, n, !1, r, l)),
    (e[st] = t.current),
    vr(e.nodeType === 8 ? e.parentNode : e),
    new qu(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Lc(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return en(e);
};
Le.hydrate = function (e, t, n) {
  if (!si(t)) throw Error(k(200));
  return ci(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = fd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[st] = t.current),
    vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ai(t);
};
Le.render = function (e, t, n) {
  if (!si(t)) throw Error(k(200));
  return ci(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!si(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (en(function () {
        ci(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Ku;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!si(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ci(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
function dd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd);
    } catch (e) {
      console.error(e);
    }
}
dd(), (sc.exports = Le);
var pd = sc.exports,
  Ns = pd;
(uo.createRoot = Ns.createRoot), (uo.hydrateRoot = Ns.hydrateRoot);
var vh = Object.defineProperty,
  gh = (e, t, n) =>
    t in e
      ? vh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Zi = (e, t, n) => (gh(e, typeof t != "symbol" ? t + "" : t, n), n);
let yh = class {
    constructor() {
      Zi(this, "current", this.detect()),
        Zi(this, "handoffState", "pending"),
        Zi(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  Gt = new yh(),
  ze = (e, t) => {
    Gt.isServer ? S.useEffect(e, t) : S.useLayoutEffect(e, t);
  };
function Rt(e) {
  let t = S.useRef(e);
  return (
    ze(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let Z = function (e) {
  let t = Rt(e);
  return ue.useCallback((...n) => t.current(...n), [t]);
};
function wh(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function dt() {
  let e = [],
    t = {
      addEventListener(n, r, l, i) {
        return (
          n.addEventListener(r, l, i),
          t.add(() => n.removeEventListener(r, l, i))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          wh(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let i = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: i });
          })
        );
      },
      group(n) {
        let r = dt();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function fi() {
  let [e] = S.useState(dt);
  return S.useEffect(() => () => e.dispose(), [e]), e;
}
function xh() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in wa
    ? ((t) => t.useSyncExternalStore)(wa)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function ea() {
  let e = xh(),
    [t, n] = S.useState(Gt.isHandoffComplete);
  return (
    t && Gt.isHandoffComplete === !1 && n(!1),
    S.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    S.useEffect(() => Gt.handoff(), []),
    e ? !1 : t
  );
}
var Ps;
let ta =
  (Ps = ue.useId) != null
    ? Ps
    : function () {
        let e = ea(),
          [t, n] = ue.useState(e ? () => Gt.nextId() : null);
        return (
          ze(() => {
            t === null && n(Gt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function je(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, je), r);
}
function di(e) {
  return Gt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let tu = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var nu = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(nu || {}),
  Sh = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Sh || {}),
  Eh = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Eh || {});
function md(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(tu)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var na = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(na || {});
function ra(e, t = 0) {
  var n;
  return e === ((n = di(e)) == null ? void 0 : n.body)
    ? !1
    : je(t, {
        0() {
          return e.matches(tu);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(tu)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function hd(e) {
  let t = di(e);
  dt().nextFrame(() => {
    t && !ra(t.activeElement, 0) && _h(e);
  });
}
var kh = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(kh || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function _h(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Nh = ["textarea", "input"].join(",");
function Ph(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Nh)) !=
    null
    ? n
    : !1;
}
function vd(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      i = t(r);
    if (l === null || i === null) return 0;
    let o = l.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Th(e, t) {
  return jh(md(), t, { relativeTo: e });
}
function jh(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (n ? vd(e) : e) : md(e);
  l.length > 0 && o.length > 1 && (o = o.filter((g) => !l.includes(g))),
    (r = r ?? i.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    a = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    s = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    h = o.length,
    v;
  do {
    if (f >= h || f + h <= 0) return 0;
    let g = a + f;
    if (t & 16) g = (g + h) % h;
    else {
      if (g < 0) return 3;
      if (g >= h) return 1;
    }
    (v = o[g]), v == null || v.focus(s), (f += u);
  } while (v !== i.activeElement);
  return t & 6 && Ph(v) && v.select(), 2;
}
function Ch() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function Oh() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Lh() {
  return Ch() || Oh();
}
function nl(e, t, n) {
  let r = Rt(t);
  S.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Ih(e, t, n) {
  let r = Rt(t);
  S.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Rh(e, t, n = !0) {
  let r = S.useRef(!1);
  S.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(o, u) {
    if (!r.current || o.defaultPrevented) return;
    let a = u(o);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let s = (function f(h) {
      return typeof h == "function"
        ? f(h())
        : Array.isArray(h) || h instanceof Set
        ? h
        : [h];
    })(e);
    for (let f of s) {
      if (f === null) continue;
      let h = f instanceof HTMLElement ? f : f.current;
      if (
        (h != null && h.contains(a)) ||
        (o.composed && o.composedPath().includes(h))
      )
        return;
    }
    return !ra(a, na.Loose) && a.tabIndex !== -1 && o.preventDefault(), t(o, a);
  }
  let i = S.useRef(null);
  nl(
    "pointerdown",
    (o) => {
      var u, a;
      r.current &&
        (i.current =
          ((a = (u = o.composedPath) == null ? void 0 : u.call(o)) == null
            ? void 0
            : a[0]) || o.target);
    },
    !0
  ),
    nl(
      "mousedown",
      (o) => {
        var u, a;
        r.current &&
          (i.current =
            ((a = (u = o.composedPath) == null ? void 0 : u.call(o)) == null
              ? void 0
              : a[0]) || o.target);
      },
      !0
    ),
    nl(
      "click",
      (o) => {
        Lh() || (i.current && (l(o, () => i.current), (i.current = null)));
      },
      !0
    ),
    nl(
      "touchend",
      (o) => l(o, () => (o.target instanceof HTMLElement ? o.target : null)),
      !0
    ),
    Ih(
      "blur",
      (o) =>
        l(o, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function $h(...e) {
  return S.useMemo(() => di(...e), [...e]);
}
function Ts(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Mh(e, t) {
  let [n, r] = S.useState(() => Ts(e));
  return (
    ze(() => {
      r(Ts(e));
    }, [e.type, e.as]),
    ze(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let Dh = Symbol();
function Dn(...e) {
  let t = S.useRef(e);
  S.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Dh])) ? void 0 : n;
}
function js(e) {
  return [e.screenX, e.screenY];
}
function zh() {
  let e = S.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = js(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = js(t);
    },
  };
}
function Fh({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let l = S.useRef(t),
    i = S.useRef(n);
  S.useEffect(() => {
    (l.current = t), (i.current = n);
  }, [t, n]),
    ze(() => {
      if (!e || !r) return;
      let o = di(e);
      if (!o) return;
      let u = l.current,
        a = i.current,
        s = Object.assign((h) => u(h), { acceptNode: u }),
        f = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
      for (; f.nextNode(); ) a(f.currentNode);
    }, [e, r, l, i]);
}
function Kl(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var Yl = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Yl || {}),
  _t = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(_t || {});
function zn({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: i = !0,
  name: o,
  mergeRefs: u,
}) {
  u = u ?? Ah;
  let a = gd(t, e);
  if (i) return rl(a, n, r, o, u);
  let s = l ?? 0;
  if (s & 2) {
    let { static: f = !1, ...h } = a;
    if (f) return rl(h, n, r, o, u);
  }
  if (s & 1) {
    let { unmount: f = !0, ...h } = a;
    return je(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return rl({ ...h, hidden: !0, style: { display: "none" } }, n, r, o, u);
      },
    });
  }
  return rl(a, n, r, o, u);
}
function rl(e, t = {}, n, r, l) {
  let {
      as: i = n,
      children: o,
      refName: u = "ref",
      ...a
    } = qi(e, ["unmount", "static"]),
    s = e.ref !== void 0 ? { [u]: e.ref } : {},
    f = typeof o == "function" ? o(t) : o;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let h = {};
  if (t) {
    let v = !1,
      g = [];
    for (let [w, y] of Object.entries(t))
      typeof y == "boolean" && (v = !0), y === !0 && g.push(w);
    v && (h["data-headlessui-state"] = g.join(" "));
  }
  if (i === S.Fragment && Object.keys(Cs(a)).length > 0) {
    if (!S.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map((y) => `  - ${y}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((y) => `  - ${y}`).join(`
`),
        ].join(`
`)
      );
    let v = f.props,
      g =
        typeof (v == null ? void 0 : v.className) == "function"
          ? (...y) => Kl(v == null ? void 0 : v.className(...y), a.className)
          : Kl(v == null ? void 0 : v.className, a.className),
      w = g ? { className: g } : {};
    return S.cloneElement(
      f,
      Object.assign(
        {},
        gd(f.props, Cs(qi(a, ["ref"]))),
        h,
        s,
        { ref: l(f.ref, s.ref) },
        w
      )
    );
  }
  return S.createElement(
    i,
    Object.assign(
      {},
      qi(a, ["ref"]),
      i !== S.Fragment && s,
      i !== S.Fragment && h
    ),
    f
  );
}
function Ah(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function gd(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...i) {
        let o = n[r];
        for (let u of o) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          u(l, ...i);
        }
      },
    });
  return t;
}
function rn(e) {
  var t;
  return Object.assign(S.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Cs(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function qi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let la = S.createContext(null);
la.displayName = "OpenClosedContext";
var Pe = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Pe || {});
function ia() {
  return S.useContext(la);
}
function yd({ value: e, children: t }) {
  return ue.createElement(la.Provider, { value: e }, t);
}
function Hh(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Uh(n) ? !1 : r;
}
function Uh(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Bh(e) {
  throw new Error("Unexpected object: " + e);
}
var Qe = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Qe || {});
function Wh(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    l = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      for (let i = l - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = l + 1; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i)
        if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Bh(e);
  }
}
var oe = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(oe || {});
function oa() {
  let e = S.useRef(!1);
  return (
    ze(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
let Os =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ls(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement)) return r;
  let i = !1;
  for (let u of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), (i = !0);
  let o = i ? ((n = l.innerText) != null ? n : "") : r;
  return Os.test(o) && (o = o.replace(Os, "")), o;
}
function Vh(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((l) => {
        let i = document.getElementById(l);
        if (i) {
          let o = i.getAttribute("aria-label");
          return typeof o == "string" ? o.trim() : Ls(i).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Ls(e).trim();
}
function Qh(e) {
  let t = S.useRef(""),
    n = S.useRef("");
  return Z(() => {
    let r = e.current;
    if (!r) return "";
    let l = r.innerText;
    if (t.current === l) return n.current;
    let i = Vh(r).trim().toLowerCase();
    return (t.current = l), (n.current = i), i;
  });
}
var Kh = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Kh || {}),
  Yh = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(Yh || {}),
  Xh = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(Xh || {});
function Ji(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = vd(t(e.items.slice()), (i) => i.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), { items: r, activeItemIndex: l };
}
let Gh = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var n;
      let r = Ji(e),
        l = Wh(t, {
          resolveItems: () => r.items,
          resolveActiveIndex: () => r.activeItemIndex,
          resolveId: (i) => i.id,
          resolveDisabled: (i) => i.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: "",
        activeItemIndex: l,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    3: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        l = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((o) => {
          var u;
          return (
            ((u = o.dataRef.current.textValue) == null
              ? void 0
              : u.startsWith(r)) && !o.dataRef.current.disabled
          );
        }),
        i = l ? e.items.indexOf(l) : -1;
      return i === -1 || i === e.activeItemIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeItemIndex: i, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let n = Ji(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...n };
    },
    6: (e, t) => {
      let n = Ji(e, (r) => {
        let l = r.findIndex((i) => i.id === t.id);
        return l !== -1 && r.splice(l, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
  },
  ua = S.createContext(null);
ua.displayName = "MenuContext";
function pi(e) {
  let t = S.useContext(ua);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, pi), n);
  }
  return t;
}
function bh(e, t) {
  return je(t.type, Gh, e, t);
}
let Zh = S.Fragment;
function qh(e, t) {
  let { __demoMode: n = !1, ...r } = e,
    l = S.useReducer(bh, {
      __demoMode: n,
      menuState: n ? 0 : 1,
      buttonRef: S.createRef(),
      itemsRef: S.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: i, itemsRef: o, buttonRef: u }, a] = l,
    s = Dn(t);
  Rh(
    [u, o],
    (g, w) => {
      var y;
      a({ type: 1 }),
        ra(w, na.Loose) ||
          (g.preventDefault(), (y = u.current) == null || y.focus());
    },
    i === 0
  );
  let f = Z(() => {
      a({ type: 1 });
    }),
    h = S.useMemo(() => ({ open: i === 0, close: f }), [i, f]),
    v = { ref: s };
  return ue.createElement(
    ua.Provider,
    { value: l },
    ue.createElement(
      yd,
      { value: je(i, { 0: Pe.Open, 1: Pe.Closed }) },
      zn({ ourProps: v, theirProps: r, slot: h, defaultTag: Zh, name: "Menu" })
    )
  );
}
let Jh = "button";
function ev(e, t) {
  var n;
  let r = ta(),
    { id: l = `headlessui-menu-button-${r}`, ...i } = e,
    [o, u] = pi("Menu.Button"),
    a = Dn(o.buttonRef, t),
    s = fi(),
    f = Z((y) => {
      switch (y.key) {
        case oe.Space:
        case oe.Enter:
        case oe.ArrowDown:
          y.preventDefault(),
            y.stopPropagation(),
            u({ type: 0 }),
            s.nextFrame(() => u({ type: 2, focus: Qe.First }));
          break;
        case oe.ArrowUp:
          y.preventDefault(),
            y.stopPropagation(),
            u({ type: 0 }),
            s.nextFrame(() => u({ type: 2, focus: Qe.Last }));
          break;
      }
    }),
    h = Z((y) => {
      switch (y.key) {
        case oe.Space:
          y.preventDefault();
          break;
      }
    }),
    v = Z((y) => {
      if (Hh(y.currentTarget)) return y.preventDefault();
      e.disabled ||
        (o.menuState === 0
          ? (u({ type: 1 }),
            s.nextFrame(() => {
              var N;
              return (N = o.buttonRef.current) == null
                ? void 0
                : N.focus({ preventScroll: !0 });
            }))
          : (y.preventDefault(), u({ type: 0 })));
    }),
    g = S.useMemo(() => ({ open: o.menuState === 0 }), [o]),
    w = {
      ref: a,
      id: l,
      type: Mh(e, o.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (n = o.itemsRef.current) == null ? void 0 : n.id,
      "aria-expanded": o.menuState === 0,
      onKeyDown: f,
      onKeyUp: h,
      onClick: v,
    };
  return zn({
    ourProps: w,
    theirProps: i,
    slot: g,
    defaultTag: Jh,
    name: "Menu.Button",
  });
}
let tv = "div",
  nv = Yl.RenderStrategy | Yl.Static;
function rv(e, t) {
  var n, r;
  let l = ta(),
    { id: i = `headlessui-menu-items-${l}`, ...o } = e,
    [u, a] = pi("Menu.Items"),
    s = Dn(u.itemsRef, t),
    f = $h(u.itemsRef),
    h = fi(),
    v = ia(),
    g = (() => (v !== null ? (v & Pe.Open) === Pe.Open : u.menuState === 0))();
  S.useEffect(() => {
    let c = u.itemsRef.current;
    c &&
      u.menuState === 0 &&
      c !== (f == null ? void 0 : f.activeElement) &&
      c.focus({ preventScroll: !0 });
  }, [u.menuState, u.itemsRef, f]),
    Fh({
      container: u.itemsRef.current,
      enabled: u.menuState === 0,
      accept(c) {
        return c.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : c.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(c) {
        c.setAttribute("role", "none");
      },
    });
  let w = Z((c) => {
      var m, x;
      switch ((h.dispose(), c.key)) {
        case oe.Space:
          if (u.searchQuery !== "")
            return (
              c.preventDefault(),
              c.stopPropagation(),
              a({ type: 3, value: c.key })
            );
        case oe.Enter:
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            a({ type: 1 }),
            u.activeItemIndex !== null)
          ) {
            let { dataRef: _ } = u.items[u.activeItemIndex];
            (x = (m = _.current) == null ? void 0 : m.domRef.current) == null ||
              x.click();
          }
          hd(u.buttonRef.current);
          break;
        case oe.ArrowDown:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            a({ type: 2, focus: Qe.Next })
          );
        case oe.ArrowUp:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            a({ type: 2, focus: Qe.Previous })
          );
        case oe.Home:
        case oe.PageUp:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            a({ type: 2, focus: Qe.First })
          );
        case oe.End:
        case oe.PageDown:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            a({ type: 2, focus: Qe.Last })
          );
        case oe.Escape:
          c.preventDefault(),
            c.stopPropagation(),
            a({ type: 1 }),
            dt().nextFrame(() => {
              var _;
              return (_ = u.buttonRef.current) == null
                ? void 0
                : _.focus({ preventScroll: !0 });
            });
          break;
        case oe.Tab:
          c.preventDefault(),
            c.stopPropagation(),
            a({ type: 1 }),
            dt().nextFrame(() => {
              Th(u.buttonRef.current, c.shiftKey ? nu.Previous : nu.Next);
            });
          break;
        default:
          c.key.length === 1 &&
            (a({ type: 3, value: c.key }),
            h.setTimeout(() => a({ type: 4 }), 350));
          break;
      }
    }),
    y = Z((c) => {
      switch (c.key) {
        case oe.Space:
          c.preventDefault();
          break;
      }
    }),
    N = S.useMemo(() => ({ open: u.menuState === 0 }), [u]),
    p = {
      "aria-activedescendant":
        u.activeItemIndex === null || (n = u.items[u.activeItemIndex]) == null
          ? void 0
          : n.id,
      "aria-labelledby": (r = u.buttonRef.current) == null ? void 0 : r.id,
      id: i,
      onKeyDown: w,
      onKeyUp: y,
      role: "menu",
      tabIndex: 0,
      ref: s,
    };
  return zn({
    ourProps: p,
    theirProps: o,
    slot: N,
    defaultTag: tv,
    features: nv,
    visible: g,
    name: "Menu.Items",
  });
}
let lv = S.Fragment;
function iv(e, t) {
  let n = ta(),
    { id: r = `headlessui-menu-item-${n}`, disabled: l = !1, ...i } = e,
    [o, u] = pi("Menu.Item"),
    a = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === r : !1,
    s = S.useRef(null),
    f = Dn(t, s);
  ze(() => {
    if (o.__demoMode || o.menuState !== 0 || !a || o.activationTrigger === 0)
      return;
    let _ = dt();
    return (
      _.requestAnimationFrame(() => {
        var E, P;
        (P = (E = s.current) == null ? void 0 : E.scrollIntoView) == null ||
          P.call(E, { block: "nearest" });
      }),
      _.dispose
    );
  }, [o.__demoMode, s, a, o.menuState, o.activationTrigger, o.activeItemIndex]);
  let h = Qh(s),
    v = S.useRef({
      disabled: l,
      domRef: s,
      get textValue() {
        return h();
      },
    });
  ze(() => {
    v.current.disabled = l;
  }, [v, l]),
    ze(
      () => (u({ type: 5, id: r, dataRef: v }), () => u({ type: 6, id: r })),
      [v, r]
    );
  let g = Z(() => {
      u({ type: 1 });
    }),
    w = Z((_) => {
      if (l) return _.preventDefault();
      u({ type: 1 }), hd(o.buttonRef.current);
    }),
    y = Z(() => {
      if (l) return u({ type: 2, focus: Qe.Nothing });
      u({ type: 2, focus: Qe.Specific, id: r });
    }),
    N = zh(),
    p = Z((_) => N.update(_)),
    c = Z((_) => {
      N.wasMoved(_) &&
        (l || a || u({ type: 2, focus: Qe.Specific, id: r, trigger: 0 }));
    }),
    m = Z((_) => {
      N.wasMoved(_) && (l || (a && u({ type: 2, focus: Qe.Nothing })));
    }),
    x = S.useMemo(() => ({ active: a, disabled: l, close: g }), [a, l, g]);
  return zn({
    ourProps: {
      id: r,
      ref: f,
      role: "menuitem",
      tabIndex: l === !0 ? void 0 : -1,
      "aria-disabled": l === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: w,
      onFocus: y,
      onPointerEnter: p,
      onMouseEnter: p,
      onPointerMove: c,
      onMouseMove: c,
      onPointerLeave: m,
      onMouseLeave: m,
    },
    theirProps: i,
    slot: x,
    defaultTag: lv,
    name: "Menu.Item",
  });
}
let ov = rn(qh),
  uv = rn(ev),
  av = rn(rv),
  sv = rn(iv),
  Xn = Object.assign(ov, { Button: uv, Items: av, Item: sv });
function cv(e = 0) {
  let [t, n] = S.useState(e),
    r = oa(),
    l = S.useCallback(
      (a) => {
        r.current && n((s) => s | a);
      },
      [t, r]
    ),
    i = S.useCallback((a) => !!(t & a), [t]),
    o = S.useCallback(
      (a) => {
        r.current && n((s) => s & ~a);
      },
      [n, r]
    ),
    u = S.useCallback(
      (a) => {
        r.current && n((s) => s ^ a);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: i, removeFlag: o, toggleFlag: u };
}
function fv(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function eo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function to(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function dv(e, t) {
  let n = dt();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [i, o] = [r, l].map((a) => {
      let [s = 0] = a
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, h) => h - f);
      return s;
    }),
    u = i + o;
  if (u !== 0) {
    n.group((s) => {
      s.setTimeout(() => {
        t(), s.dispose();
      }, u),
        s.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && s.dispose();
        });
    });
    let a = n.addEventListener(e, "transitionend", (s) => {
      s.target === s.currentTarget && (t(), a());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function pv(e, t, n, r) {
  let l = n ? "enter" : "leave",
    i = dt(),
    o = r !== void 0 ? fv(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let u = je(l, { enter: () => t.enter, leave: () => t.leave }),
    a = je(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    s = je(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    to(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    eo(e, ...t.base, ...u, ...s),
    i.nextFrame(() => {
      to(e, ...t.base, ...u, ...s),
        eo(e, ...t.base, ...u, ...a),
        dv(
          e,
          () => (to(e, ...t.base, ...u), eo(e, ...t.base, ...t.entered), o())
        );
    }),
    i.dispose
  );
}
function mv({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: i,
}) {
  let o = oa(),
    u = fi(),
    a = Rt(n);
  ze(() => {
    e && (a.current = "enter");
  }, [e]),
    ze(() => {
      let s = dt();
      u.add(s.dispose);
      let f = t.current;
      if (f && a.current !== "idle" && o.current)
        return (
          s.dispose(),
          l.current(a.current),
          s.add(
            pv(f, r.current, a.current === "enter", () => {
              s.dispose(), i.current(a.current);
            })
          ),
          s.dispose
        );
    }, [n]);
}
function ht(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let mi = S.createContext(null);
mi.displayName = "TransitionContext";
var hv = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(hv || {});
function vv() {
  let e = S.useContext(mi);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function gv() {
  let e = S.useContext(hi);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let hi = S.createContext(null);
hi.displayName = "NestingContext";
function vi(e) {
  return "children" in e
    ? vi(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function wd(e, t) {
  let n = Rt(e),
    r = S.useRef([]),
    l = oa(),
    i = fi(),
    o = Z((g, w = _t.Hidden) => {
      let y = r.current.findIndex(({ el: N }) => N === g);
      y !== -1 &&
        (je(w, {
          [_t.Unmount]() {
            r.current.splice(y, 1);
          },
          [_t.Hidden]() {
            r.current[y].state = "hidden";
          },
        }),
        i.microTask(() => {
          var N;
          !vi(r) && l.current && ((N = n.current) == null || N.call(n));
        }));
    }),
    u = Z((g) => {
      let w = r.current.find(({ el: y }) => y === g);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: g, state: "visible" }),
        () => o(g, _t.Unmount)
      );
    }),
    a = S.useRef([]),
    s = S.useRef(Promise.resolve()),
    f = S.useRef({ enter: [], leave: [], idle: [] }),
    h = Z((g, w, y) => {
      a.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([N]) => N !== g)),
        t == null ||
          t.chains.current[w].push([
            g,
            new Promise((N) => {
              a.current.push(N);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            g,
            new Promise((N) => {
              Promise.all(f.current[w].map(([p, c]) => c)).then(() => N());
            }),
          ]),
        w === "enter"
          ? (s.current = s.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => y(w)))
          : y(w);
    }),
    v = Z((g, w, y) => {
      Promise.all(f.current[w].splice(0).map(([N, p]) => p))
        .then(() => {
          var N;
          (N = a.current.shift()) == null || N();
        })
        .then(() => y(w));
    });
  return S.useMemo(
    () => ({
      children: r,
      register: u,
      unregister: o,
      onStart: h,
      onStop: v,
      wait: s,
      chains: f,
    }),
    [u, o, r, h, v, f, s]
  );
}
function yv() {}
let wv = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Is(e) {
  var t;
  let n = {};
  for (let r of wv) n[r] = (t = e[r]) != null ? t : yv;
  return n;
}
function xv(e) {
  let t = S.useRef(Is(e));
  return (
    S.useEffect(() => {
      t.current = Is(e);
    }, [e]),
    t
  );
}
let Sv = "div",
  xd = Yl.RenderStrategy;
function Ev(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: i,
      beforeLeave: o,
      afterLeave: u,
      enter: a,
      enterFrom: s,
      enterTo: f,
      entered: h,
      leave: v,
      leaveFrom: g,
      leaveTo: w,
      ...y
    } = e,
    N = S.useRef(null),
    p = Dn(N, t),
    c = (n = y.unmount) == null || n ? _t.Unmount : _t.Hidden,
    { show: m, appear: x, initial: _ } = vv(),
    [E, P] = S.useState(m ? "visible" : "hidden"),
    C = gv(),
    { register: M, unregister: O } = C;
  S.useEffect(() => M(N), [M, N]),
    S.useEffect(() => {
      if (c === _t.Hidden && N.current) {
        if (m && E !== "visible") {
          P("visible");
          return;
        }
        return je(E, { hidden: () => O(N), visible: () => M(N) });
      }
    }, [E, N, M, O, m, c]);
  let ne = Rt({
      base: ht(y.className),
      enter: ht(a),
      enterFrom: ht(s),
      enterTo: ht(f),
      entered: ht(h),
      leave: ht(v),
      leaveFrom: ht(g),
      leaveTo: ht(w),
    }),
    _e = xv({ beforeEnter: l, afterEnter: i, beforeLeave: o, afterLeave: u }),
    He = ea();
  S.useEffect(() => {
    if (He && E === "visible" && N.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [N, E, He]);
  let At = _ && !x,
    ln = x && m && _,
    An = (() => (!He || At ? "idle" : m ? "enter" : "leave"))(),
    nt = cv(0),
    T = Z((ce) =>
      je(ce, {
        enter: () => {
          nt.addFlag(Pe.Opening), _e.current.beforeEnter();
        },
        leave: () => {
          nt.addFlag(Pe.Closing), _e.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    L = Z((ce) =>
      je(ce, {
        enter: () => {
          nt.removeFlag(Pe.Opening), _e.current.afterEnter();
        },
        leave: () => {
          nt.removeFlag(Pe.Closing), _e.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    I = wd(() => {
      P("hidden"), O(N);
    }, C),
    F = S.useRef(!1);
  mv({
    immediate: ln,
    container: N,
    classes: ne,
    direction: An,
    onStart: Rt((ce) => {
      (F.current = !0), I.onStart(N, ce, T);
    }),
    onStop: Rt((ce) => {
      (F.current = !1),
        I.onStop(N, ce, L),
        ce === "leave" && !vi(I) && (P("hidden"), O(N));
    }),
  });
  let A = y,
    on = { ref: p };
  return (
    ln
      ? (A = {
          ...A,
          className: Kl(
            y.className,
            ...ne.current.enter,
            ...ne.current.enterFrom
          ),
        })
      : F.current &&
        ((A.className = Kl(
          y.className,
          (r = N.current) == null ? void 0 : r.className
        )),
        A.className === "" && delete A.className),
    ue.createElement(
      hi.Provider,
      { value: I },
      ue.createElement(
        yd,
        { value: je(E, { visible: Pe.Open, hidden: Pe.Closed }) | nt.flags },
        zn({
          ourProps: on,
          theirProps: A,
          defaultTag: Sv,
          features: xd,
          visible: E === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function kv(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...i } = e,
    o = S.useRef(null),
    u = Dn(o, t);
  ea();
  let a = ia();
  if (
    (n === void 0 && a !== null && (n = (a & Pe.Open) === Pe.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [s, f] = S.useState(n ? "visible" : "hidden"),
    h = wd(() => {
      f("hidden");
    }),
    [v, g] = S.useState(!0),
    w = S.useRef([n]);
  ze(() => {
    v !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), g(!1));
  }, [w, n]);
  let y = S.useMemo(() => ({ show: n, appear: r, initial: v }), [n, r, v]);
  S.useEffect(() => {
    if (n) f("visible");
    else if (!vi(h)) f("hidden");
    else {
      let m = o.current;
      if (!m) return;
      let x = m.getBoundingClientRect();
      x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && f("hidden");
    }
  }, [n, h]);
  let N = { unmount: l },
    p = Z(() => {
      var m;
      v && g(!1), (m = e.beforeEnter) == null || m.call(e);
    }),
    c = Z(() => {
      var m;
      v && g(!1), (m = e.beforeLeave) == null || m.call(e);
    });
  return ue.createElement(
    hi.Provider,
    { value: h },
    ue.createElement(
      mi.Provider,
      { value: y },
      zn({
        ourProps: {
          ...N,
          as: S.Fragment,
          children: ue.createElement(Sd, {
            ref: u,
            ...N,
            ...i,
            beforeEnter: p,
            beforeLeave: c,
          }),
        },
        theirProps: {},
        defaultTag: S.Fragment,
        features: xd,
        visible: s === "visible",
        name: "Transition",
      })
    )
  );
}
function _v(e, t) {
  let n = S.useContext(mi) !== null,
    r = ia() !== null;
  return ue.createElement(
    ue.Fragment,
    null,
    !n && r
      ? ue.createElement(ru, { ref: t, ...e })
      : ue.createElement(Sd, { ref: t, ...e })
  );
}
let ru = rn(kv),
  Sd = rn(Ev),
  Nv = rn(_v),
  Pv = Object.assign(ru, { Child: Nv, Root: ru });
function Tv({ title: e, titleId: t, ...n }, r) {
  return S.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? S.createElement("title", { id: t }, e) : null,
    S.createElement("path", {
      fillRule: "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    })
  );
}
const jv = S.forwardRef(Tv),
  Cv = jv,
  Ov = () => {
    const [e, t] = S.useState(!1);
    S.useState(!1);
    function n(...r) {
      return r.filter(Boolean).join(" ");
    }
    return d.jsxs("div", {
      className:
        "w-[90%] my-7 max-w-[1600px] relative flex justify-between items-center mx-auto",
      children: [
        d.jsx("img", { src: "./toas-logo.svg", alt: "TOAS" }),
        d.jsx("img", {
          src: "./eclispe.svg",
          className: "absolute top-0 -z-10 w-[120px] right-[20%]",
          alt: "",
        }),
        d.jsx("button", {
          onClick: () => t(!0),
          className: "sm:hidden w-10",
          children: d.jsx("img", { src: "./bars.svg", alt: "bars" }),
        }),
        d.jsxs("div", {
          className: `sm:items-center flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 fixed sm:static top-0 right-0 bottom-0 bg-[#333] sm:bg-transparent z-50 max-w-[320px] w-full sm:w-auto sm:max-w-none transition-all duration-500 pt-[72px] sm:p-0 px-6 ${
            e ? "translate-x-0" : "translate-x-full sm:translate-x-0"
          }`,
          children: [
            d.jsx("button", {
              className: "absolute top-7 right-[5vw] w-10 sm:hidden",
              onClick: () => t(!1),
              children: d.jsx("img", { src: "./x-mark.svg", alt: "close" }),
            }),
            d.jsxs("div", {
              className:
                "flex justify-center sm:justify-normal items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap sm:flex-nowrap",
              children: [
                d.jsx("a", {
                  href: "https://twitter.com/",
                  className:
                    "w-11 sm:w-[48px] h-11 sm:h-[48px] hidden",
                  target: "_blank",
                  children: d.jsx("img", {
                    className: "w-[21px] sm:w-[25px]",
                    src: "./twitter.svg",
                    alt: "twitter",
                  }),
                }),
                d.jsx("a", {
                  href: "https://twitter.com/",
                  target: "_blank",
                  children: d.jsx("img", {
                    src: "./twitter.svg",
                    alt: "twitter",
                    className: "w-11 sm:w-[48px] h-11 sm:h-[48px]",
                  }),
                }),
                d.jsx("a", {
                  href: "https://t.me/",
                  target: "_blank",
                  children: d.jsx("img", {
                    src: "./telegram.svg",
                    alt: "telegram",
                    className: "w-11 sm:w-[48px] h-11 sm:h-[48px]",
                  }),
                }),
              ],
            }),
            d.jsxs("div", {
              className:
                "flex sm:flex-row flex-col gap-3 md:gap-4 lg:gap-5 items-center",
              children: [
                d.jsxs("a", {
                  href: "https://app.uniswap.org/swap?outputCurrency=0xttt&chain=ethereum",
                  target: "_blank",
                  className:
                    "sm:my-0 my-5 border-0 bg-transparent relative w-[100px] sm:w-[120px] flex justify-center items-center",
                  children: [
                    d.jsx("img", {
                      src: "./buy-button.svg",
                      className: "absolute -z-10 w-full",
                      alt: "buy now",
                    }),
                    d.jsx("span", {
                      className: "text-white uppercase text-sm",
                      children: "Buy Now",
                    }),
                  ],
                }),
                d.jsxs(Xn, {
                  as: "div",
                  className: "relative inline-block text-left",
                  children: [
                    d.jsx("div", {
                      children: d.jsxs(Xn.Button, {
                        className:
                          "sm:my-0 my-3 border-0 bg-transparent relative w-[120px] sm:w-[120px] flex justify-center items-center",
                        children: [
                          d.jsx("img", {
                            src: "./buy-button.svg",
                            className: "absolute -z-10 w-full",
                            alt: "Launch app",
                          }),
                          d.jsx("span", {
                            className: "text-white uppercase text-sm",
                            children: "LAUNCH APP",
                          }),
                          d.jsx(Cv, {
                            className: "-mr-1 h-5 w-5 text-gray-400",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    }),
                    d.jsx(Pv, {
                      as: S.Fragment,
                      enter: "transition ease-out duration-100",
                      enterFrom: "transform opacity-0 scale-95",
                      enterTo: "transform opacity-100 scale-100",
                      leave: "transition ease-in duration-75",
                      leaveFrom: "transform opacity-100 scale-100",
                      leaveTo: "transform opacity-0 scale-95",
                      children: d.jsx(Xn.Items, {
                        className:
                          "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: d.jsxs("div", {
                          className: "py-1",
                          children: [
                            d.jsx(Xn.Item, {
                              children: ({ active: r }) =>
                                d.jsx("a", {
                                  href: "https://dextensor-dapp-3eie.vercel.app/",
                                  className: n(
                                    r
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  ),
                                  children: "dextensor",
                                }),
                            }),
                            // d.jsx(Xn.Item, {
                            //   children: ({ active: r }) =>
                            //     d.jsx("a", {
                            //       href: "https://swapv2.dextensor.ai/",
                            //       className: n(
                            //         r
                            //           ? "bg-gray-100 text-gray-900"
                            //           : "text-gray-700",
                            //         "block px-4 py-2 text-sm"
                            //       ),
                            //       children: "dextensor-v2",
                            //     }),
                            // }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
var G = {},
  aa = {},
  Or = {},
  Lr = {},
  Ed = "Expected a function",
  Rs = 0 / 0,
  Lv = "[object Symbol]",
  Iv = /^\s+|\s+$/g,
  Rv = /^[-+]0x[0-9a-f]+$/i,
  $v = /^0b[01]+$/i,
  Mv = /^0o[0-7]+$/i,
  Dv = parseInt,
  zv = typeof Fr == "object" && Fr && Fr.Object === Object && Fr,
  Fv = typeof self == "object" && self && self.Object === Object && self,
  Av = zv || Fv || Function("return this")(),
  Hv = Object.prototype,
  Uv = Hv.toString,
  Bv = Math.max,
  Wv = Math.min,
  no = function () {
    return Av.Date.now();
  };
function Vv(e, t, n) {
  var r,
    l,
    i,
    o,
    u,
    a,
    s = 0,
    f = !1,
    h = !1,
    v = !0;
  if (typeof e != "function") throw new TypeError(Ed);
  (t = $s(t) || 0),
    Xl(n) &&
      ((f = !!n.leading),
      (h = "maxWait" in n),
      (i = h ? Bv($s(n.maxWait) || 0, t) : i),
      (v = "trailing" in n ? !!n.trailing : v));
  function g(E) {
    var P = r,
      C = l;
    return (r = l = void 0), (s = E), (o = e.apply(C, P)), o;
  }
  function w(E) {
    return (s = E), (u = setTimeout(p, t)), f ? g(E) : o;
  }
  function y(E) {
    var P = E - a,
      C = E - s,
      M = t - P;
    return h ? Wv(M, i - C) : M;
  }
  function N(E) {
    var P = E - a,
      C = E - s;
    return a === void 0 || P >= t || P < 0 || (h && C >= i);
  }
  function p() {
    var E = no();
    if (N(E)) return c(E);
    u = setTimeout(p, y(E));
  }
  function c(E) {
    return (u = void 0), v && r ? g(E) : ((r = l = void 0), o);
  }
  function m() {
    u !== void 0 && clearTimeout(u), (s = 0), (r = a = l = u = void 0);
  }
  function x() {
    return u === void 0 ? o : c(no());
  }
  function _() {
    var E = no(),
      P = N(E);
    if (((r = arguments), (l = this), (a = E), P)) {
      if (u === void 0) return w(a);
      if (h) return (u = setTimeout(p, t)), g(a);
    }
    return u === void 0 && (u = setTimeout(p, t)), o;
  }
  return (_.cancel = m), (_.flush = x), _;
}
function Qv(e, t, n) {
  var r = !0,
    l = !0;
  if (typeof e != "function") throw new TypeError(Ed);
  return (
    Xl(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (l = "trailing" in n ? !!n.trailing : l)),
    Vv(e, t, { leading: r, maxWait: t, trailing: l })
  );
}
function Xl(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Kv(e) {
  return !!e && typeof e == "object";
}
function Yv(e) {
  return typeof e == "symbol" || (Kv(e) && Uv.call(e) == Lv);
}
function $s(e) {
  if (typeof e == "number") return e;
  if (Yv(e)) return Rs;
  if (Xl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xl(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Iv, "");
  var n = $v.test(e);
  return n || Mv.test(e) ? Dv(e.slice(2), n ? 2 : 8) : Rv.test(e) ? Rs : +e;
}
var Xv = Qv,
  Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.addPassiveEventListener = function (t, n, r) {
  var l = r.name;
  l || ((l = n), console.warn("Listener must be a named function.")),
    Sl.has(n) || Sl.set(n, new Set());
  var i = Sl.get(n);
  if (!i.has(l)) {
    var o = (function () {
      var u = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            u = !0;
          },
        });
        window.addEventListener("test", null, a);
      } catch {}
      return u;
    })();
    t.addEventListener(n, r, o ? { passive: !0 } : !1), i.add(l);
  }
};
Ir.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), Sl.get(n).delete(r.name || n);
};
var Sl = new Map();
Object.defineProperty(Lr, "__esModule", { value: !0 });
var Gv = Xv,
  bv = qv(Gv),
  Zv = Ir;
function qv(e) {
  return e && e.__esModule ? e : { default: e };
}
var Jv = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, bv.default)(t, n);
  },
  V = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = Jv(function (l) {
          V.scrollHandler(t);
        }, n);
        V.scrollSpyContainers.push(t),
          (0, Zv.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return V.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        V.scrollSpyContainers[V.scrollSpyContainers.indexOf(t)].spyCallbacks ||
        [];
      n.forEach(function (r) {
        return r(V.currentPositionX(t), V.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      V.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = V.scrollSpyContainers[V.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(V.currentPositionX(n), V.currentPositionY(n));
    },
    updateStates: function () {
      V.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      V.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        V.spySetState &&
          V.spySetState.length &&
          V.spySetState.indexOf(t) > -1 &&
          V.spySetState.splice(V.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", V.scrollHandler);
    },
    update: function () {
      return V.scrollSpyContainers.forEach(function (t) {
        return V.scrollHandler(t);
      });
    },
  };
Lr.default = V;
var Fn = {},
  Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
var eg = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      l = r ? "#" + r : "",
      i = window && window.location,
      o = l ? i.pathname + i.search + l : i.pathname + i.search;
    n
      ? history.pushState(history.state, "", o)
      : history.replaceState(history.state, "", o);
  },
  tg = function () {
    return window.location.hash.replace(/^#/, "");
  },
  ng = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  rg = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  ro = function (t, n) {
    for (var r = t.offsetTop, l = t.offsetParent; l && !n(l); )
      (r += l.offsetTop), (l = l.offsetParent);
    return { offsetTop: r, offsetParent: l };
  },
  lg = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
        ? n.offsetLeft
        : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (rg(t)) {
      if (n.offsetParent !== t) {
        var l = function (f) {
            return f === t || f === document;
          },
          i = ro(n, l),
          o = i.offsetTop,
          u = i.offsetParent;
        if (u !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return o;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var a = function (f) {
      return f === document;
    };
    return ro(n, a).offsetTop - ro(t, a).offsetTop;
  };
Rr.default = {
  updateHash: eg,
  getHash: tg,
  filterElementInContainer: ng,
  scrollOffset: lg,
};
var gi = {},
  sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
var ig = Ir,
  og = ["mousedown", "mousewheel", "touchmove", "keydown"];
ca.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      og.forEach(function (n) {
        return (0, ig.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
var lu = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      lu.registered[t] = n;
    },
    remove: function (t) {
      lu.registered[t] = null;
    },
  },
};
$r.default = lu;
Object.defineProperty(gi, "__esModule", { value: !0 });
var ug =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  ag = Rr;
yi(ag);
var sg = sa,
  Ms = yi(sg),
  cg = ca,
  fg = yi(cg),
  dg = $r,
  Ze = yi(dg);
function yi(e) {
  return e && e.__esModule ? e : { default: e };
}
var kd = function (t) {
    return Ms.default[t.smooth] || Ms.default.defaultEasing;
  },
  pg = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  mg = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  iu = (function () {
    return (
      mg() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  _d = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  Nd = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : l
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  },
  Pd = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      l = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : l
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  },
  hg = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      l.clientWidth,
      l.scrollWidth,
      l.offsetWidth
    );
  },
  vg = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      l = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      l.clientHeight,
      l.scrollHeight,
      l.offsetHeight
    );
  },
  gg = function e(t, n, r) {
    var l = n.data;
    if (!n.ignoreCancelEvents && l.cancel) {
      Ze.default.registered.end &&
        Ze.default.registered.end(l.to, l.target, l.currentPositionY);
      return;
    }
    if (
      ((l.delta = Math.round(l.targetPosition - l.startPosition)),
      l.start === null && (l.start = r),
      (l.progress = r - l.start),
      (l.percent = l.progress >= l.duration ? 1 : t(l.progress / l.duration)),
      (l.currentPosition = l.startPosition + Math.ceil(l.delta * l.percent)),
      l.containerElement &&
      l.containerElement !== document &&
      l.containerElement !== document.body
        ? n.horizontal
          ? (l.containerElement.scrollLeft = l.currentPosition)
          : (l.containerElement.scrollTop = l.currentPosition)
        : n.horizontal
        ? window.scrollTo(l.currentPosition, 0)
        : window.scrollTo(0, l.currentPosition),
      l.percent < 1)
    ) {
      var i = e.bind(null, t, n);
      iu.call(window, i);
      return;
    }
    Ze.default.registered.end &&
      Ze.default.registered.end(l.to, l.target, l.currentPosition);
  },
  fa = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
        ? t.container
        : document
      : null;
  },
  Mr = function (t, n, r, l) {
    (n.data = n.data || _d()), window.clearTimeout(n.data.delayTimeout);
    var i = function () {
      n.data.cancel = !0;
    };
    if (
      (fg.default.subscribe(i),
      fa(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? Nd(n) : Pd(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      Ze.default.registered.end &&
        Ze.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = pg(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = l);
    var o = kd(n),
      u = gg.bind(null, o, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        Ze.default.registered.begin &&
          Ze.default.registered.begin(n.data.to, n.data.target),
          iu.call(window, u);
      }, n.delay);
      return;
    }
    Ze.default.registered.begin &&
      Ze.default.registered.begin(n.data.to, n.data.target),
      iu.call(window, u);
  },
  wi = function (t) {
    return (t = ug({}, t)), (t.data = t.data || _d()), (t.absolute = !0), t;
  },
  yg = function (t) {
    Mr(0, wi(t));
  },
  wg = function (t, n) {
    Mr(t, wi(n));
  },
  xg = function (t) {
    (t = wi(t)), fa(t), Mr(t.horizontal ? hg(t) : vg(t), t);
  },
  Sg = function (t, n) {
    (n = wi(n)), fa(n);
    var r = n.horizontal ? Nd(n) : Pd(n);
    Mr(t + r, n);
  };
gi.default = {
  animateTopScroll: Mr,
  getAnimationType: kd,
  scrollToTop: yg,
  scrollToBottom: xg,
  scrollTo: wg,
  scrollMore: Sg,
};
Object.defineProperty(Fn, "__esModule", { value: !0 });
var Eg =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  kg = Rr,
  _g = da(kg),
  Ng = gi,
  Pg = da(Ng),
  Tg = $r,
  ll = da(Tg);
function da(e) {
  return e && e.__esModule ? e : { default: e };
}
var il = {},
  Ds = void 0;
Fn.default = {
  unmount: function () {
    il = {};
  },
  register: function (t, n) {
    il[t] = n;
  },
  unregister: function (t) {
    delete il[t];
  },
  get: function (t) {
    return (
      il[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Ds = t);
  },
  getActiveLink: function () {
    return Ds;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = Eg({}, n, { absolute: !1 });
    var l = n.containerId,
      i = n.container,
      o = void 0;
    l
      ? (o = document.getElementById(l))
      : i && i.nodeType
      ? (o = i)
      : (o = document),
      (n.absolute = !0);
    var u = n.horizontal,
      a = _g.default.scrollOffset(o, r, u) + (n.offset || 0);
    if (!n.smooth) {
      ll.default.registered.begin && ll.default.registered.begin(t, r),
        o === document
          ? n.horizontal
            ? window.scrollTo(a, 0)
            : window.scrollTo(0, a)
          : (o.scrollTop = a),
        ll.default.registered.end && ll.default.registered.end(t, r);
      return;
    }
    Pg.default.animateTopScroll(a, n, t, r);
  },
};
var Td = { exports: {} },
  jg = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Cg = jg,
  Og = Cg;
function jd() {}
function Cd() {}
Cd.resetWarningCache = jd;
var Lg = function () {
  function e(r, l, i, o, u, a) {
    if (a !== Og) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Cd,
    resetWarningCache: jd,
  };
  return (n.PropTypes = n), n;
};
Td.exports = Lg();
var xi = Td.exports,
  Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
var Ig = Rr,
  lo = Rg(Ig);
function Rg(e) {
  return e && e.__esModule ? e : { default: e };
}
var $g = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      l = r.get(t);
    if (l && (n || t !== r.getActiveLink())) {
      var i = this.containers[t] || document;
      r.scrollTo(t, { container: i });
    }
  },
  getHash: function () {
    return lo.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      lo.default.getHash() !== t &&
      lo.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
Si.default = $g;
Object.defineProperty(Or, "__esModule", { value: !0 });
var ol =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Mg = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Dg = S,
  zs = Dr(Dg),
  zg = Lr,
  ul = Dr(zg),
  Fg = Fn,
  Ag = Dr(Fg),
  Hg = xi,
  B = Dr(Hg),
  Ug = Si,
  vt = Dr(Ug);
function Dr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Bg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wg(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Vg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Fs = {
  to: B.default.string.isRequired,
  containerId: B.default.string,
  container: B.default.object,
  activeClass: B.default.string,
  activeStyle: B.default.object,
  spy: B.default.bool,
  horizontal: B.default.bool,
  smooth: B.default.oneOfType([B.default.bool, B.default.string]),
  offset: B.default.number,
  delay: B.default.number,
  isDynamic: B.default.bool,
  onClick: B.default.func,
  duration: B.default.oneOfType([B.default.number, B.default.func]),
  absolute: B.default.bool,
  onSetActive: B.default.func,
  onSetInactive: B.default.func,
  ignoreCancelEvents: B.default.bool,
  hashSpy: B.default.bool,
  saveHashHistory: B.default.bool,
  spyThrottle: B.default.number,
};
Or.default = function (e, t) {
  var n = t || Ag.default,
    r = (function (i) {
      Vg(o, i);
      function o(u) {
        Bg(this, o);
        var a = Wg(
          this,
          (o.__proto__ || Object.getPrototypeOf(o)).call(this, u)
        );
        return l.call(a), (a.state = { active: !1 }), a;
      }
      return (
        Mg(o, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var a = this.props.containerId,
                s = this.props.container;
              return a && !s
                ? document.getElementById(a)
                : s && s.nodeType
                ? s
                : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var a = this.getScrollSpyContainer();
                ul.default.isMounted(a) ||
                  ul.default.mount(a, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (vt.default.isMounted() || vt.default.mount(n),
                    vt.default.mapContainer(this.props.to, a)),
                  ul.default.addSpyHandler(this.spyHandler, a),
                  this.setState({ container: a });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              ul.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var a = "";
              this.state && this.state.active
                ? (a = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (a = this.props.className);
              var s = {};
              this.state && this.state.active
                ? (s = ol({}, this.props.style, this.props.activeStyle))
                : (s = ol({}, this.props.style));
              var f = ol({}, this.props);
              for (var h in Fs) f.hasOwnProperty(h) && delete f[h];
              return (
                (f.className = a),
                (f.style = s),
                (f.onClick = this.handleClick),
                zs.default.createElement(e, f)
              );
            },
          },
        ]),
        o
      );
    })(zs.default.PureComponent),
    l = function () {
      var o = this;
      (this.scrollTo = function (u, a) {
        n.scrollTo(u, ol({}, o.state, a));
      }),
        (this.handleClick = function (u) {
          o.props.onClick && o.props.onClick(u),
            u.stopPropagation && u.stopPropagation(),
            u.preventDefault && u.preventDefault(),
            o.scrollTo(o.props.to, o.props);
        }),
        (this.spyHandler = function (u, a) {
          var s = o.getScrollSpyContainer();
          if (!(vt.default.isMounted() && !vt.default.isInitialized())) {
            var f = o.props.horizontal,
              h = o.props.to,
              v = null,
              g = void 0,
              w = void 0;
            if (f) {
              var y = 0,
                N = 0,
                p = 0;
              if (s.getBoundingClientRect) {
                var c = s.getBoundingClientRect();
                p = c.left;
              }
              if (!v || o.props.isDynamic) {
                if (((v = n.get(h)), !v)) return;
                var m = v.getBoundingClientRect();
                (y = m.left - p + u), (N = y + m.width);
              }
              var x = u - o.props.offset;
              (g = x >= Math.floor(y) && x < Math.floor(N)),
                (w = x < Math.floor(y) || x >= Math.floor(N));
            } else {
              var _ = 0,
                E = 0,
                P = 0;
              if (s.getBoundingClientRect) {
                var C = s.getBoundingClientRect();
                P = C.top;
              }
              if (!v || o.props.isDynamic) {
                if (((v = n.get(h)), !v)) return;
                var M = v.getBoundingClientRect();
                (_ = M.top - P + a), (E = _ + M.height);
              }
              var O = a - o.props.offset;
              (g = O >= Math.floor(_) && O < Math.floor(E)),
                (w = O < Math.floor(_) || O >= Math.floor(E));
            }
            var ne = n.getActiveLink();
            if (w) {
              if (
                (h === ne && n.setActiveLink(void 0),
                o.props.hashSpy && vt.default.getHash() === h)
              ) {
                var _e = o.props.saveHashHistory,
                  He = _e === void 0 ? !1 : _e;
                vt.default.changeHash("", He);
              }
              o.props.spy &&
                o.state.active &&
                (o.setState({ active: !1 }),
                o.props.onSetInactive && o.props.onSetInactive(h, v));
            }
            if (g && (ne !== h || o.state.active === !1)) {
              n.setActiveLink(h);
              var At = o.props.saveHashHistory,
                ln = At === void 0 ? !1 : At;
              o.props.hashSpy && vt.default.changeHash(h, ln),
                o.props.spy &&
                  (o.setState({ active: !0 }),
                  o.props.onSetActive && o.props.onSetActive(h, v));
            }
          }
        });
    };
  return (r.propTypes = Fs), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(aa, "__esModule", { value: !0 });
var Qg = S,
  As = Od(Qg),
  Kg = Or,
  Yg = Od(Kg);
function Od(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hs(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Gg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var bg = (function (e) {
  Gg(t, e);
  function t() {
    var n, r, l, i;
    Xg(this, t);
    for (var o = arguments.length, u = Array(o), a = 0; a < o; a++)
      u[a] = arguments[a];
    return (
      (i =
        ((r =
          ((l = Hs(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(u)
            )
          )),
          l)),
        (l.render = function () {
          return As.default.createElement("a", l.props, l.props.children);
        }),
        r)),
      Hs(l, i)
    );
  }
  return t;
})(As.default.Component);
aa.default = (0, Yg.default)(bg);
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
var Zg = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  qg = S,
  Us = Ld(qg),
  Jg = Or,
  e0 = Ld(Jg);
function Ld(e) {
  return e && e.__esModule ? e : { default: e };
}
function t0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function r0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var l0 = (function (e) {
  r0(t, e);
  function t() {
    return (
      t0(this, t),
      n0(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    Zg(t, [
      {
        key: "render",
        value: function () {
          return Us.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(Us.default.Component);
pa.default = (0, e0.default)(l0);
var ma = {},
  Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
var i0 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  o0 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  u0 = S,
  Bs = ki(u0),
  a0 = pd;
ki(a0);
var s0 = Fn,
  Ws = ki(s0),
  c0 = xi,
  Vs = ki(c0);
function ki(e) {
  return e && e.__esModule ? e : { default: e };
}
function f0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function d0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function p0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
Ei.default = function (e) {
  var t = (function (n) {
    p0(r, n);
    function r(l) {
      f0(this, r);
      var i = d0(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, l));
      return (i.childBindings = { domNode: null }), i;
    }
    return (
      o0(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (i) {
            this.props.name !== i.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            Ws.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (i) {
            Ws.default.register(i, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return Bs.default.createElement(
              e,
              i0({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(Bs.default.Component);
  return (t.propTypes = { name: Vs.default.string, id: Vs.default.string }), t;
};
Object.defineProperty(ma, "__esModule", { value: !0 });
var Qs =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  m0 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  h0 = S,
  Ks = ha(h0),
  v0 = Ei,
  g0 = ha(v0),
  y0 = xi,
  Ys = ha(y0);
function ha(e) {
  return e && e.__esModule ? e : { default: e };
}
function w0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function S0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Id = (function (e) {
  S0(t, e);
  function t() {
    return (
      w0(this, t),
      x0(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    m0(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            l = Qs({}, this.props);
          return (
            delete l.name,
            l.parentBindings && delete l.parentBindings,
            Ks.default.createElement(
              "div",
              Qs({}, l, {
                ref: function (o) {
                  r.props.parentBindings.domNode = o;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    t
  );
})(Ks.default.Component);
Id.propTypes = { name: Ys.default.string, id: Ys.default.string };
ma.default = (0, g0.default)(Id);
var io =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Xs = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        (l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          "value" in l && (l.writable = !0),
          Object.defineProperty(t, l.key, l);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function Gs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bs(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Zs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var al = S,
  Ut = Lr,
  oo = Fn,
  Q = xi,
  gt = Si,
  qs = {
    to: Q.string.isRequired,
    containerId: Q.string,
    container: Q.object,
    activeClass: Q.string,
    spy: Q.bool,
    smooth: Q.oneOfType([Q.bool, Q.string]),
    offset: Q.number,
    delay: Q.number,
    isDynamic: Q.bool,
    onClick: Q.func,
    duration: Q.oneOfType([Q.number, Q.func]),
    absolute: Q.bool,
    onSetActive: Q.func,
    onSetInactive: Q.func,
    ignoreCancelEvents: Q.bool,
    hashSpy: Q.bool,
    spyThrottle: Q.number,
  },
  E0 = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || oo,
        l = (function (o) {
          Zs(u, o);
          function u(a) {
            Gs(this, u);
            var s = bs(
              this,
              (u.__proto__ || Object.getPrototypeOf(u)).call(this, a)
            );
            return i.call(s), (s.state = { active: !1 }), s;
          }
          return (
            Xs(u, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var s = this.props.containerId,
                    f = this.props.container;
                  return s
                    ? document.getElementById(s)
                    : f && f.nodeType
                    ? f
                    : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var s = this.getScrollSpyContainer();
                    Ut.isMounted(s) || Ut.mount(s, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (gt.isMounted() || gt.mount(r),
                        gt.mapContainer(this.props.to, s)),
                      this.props.spy && Ut.addStateHandler(this.stateHandler),
                      Ut.addSpyHandler(this.spyHandler, s),
                      this.setState({ container: s });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  Ut.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var s = "";
                  this.state && this.state.active
                    ? (s = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (s = this.props.className);
                  var f = io({}, this.props);
                  for (var h in qs) f.hasOwnProperty(h) && delete f[h];
                  return (
                    (f.className = s),
                    (f.onClick = this.handleClick),
                    al.createElement(t, f)
                  );
                },
              },
            ]),
            u
          );
        })(al.Component),
        i = function () {
          var u = this;
          (this.scrollTo = function (a, s) {
            r.scrollTo(a, io({}, u.state, s));
          }),
            (this.handleClick = function (a) {
              u.props.onClick && u.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                u.scrollTo(u.props.to, u.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== u.props.to &&
                (u.state !== null &&
                  u.state.active &&
                  u.props.onSetInactive &&
                  u.props.onSetInactive(),
                u.setState({ active: !1 }));
            }),
            (this.spyHandler = function (a) {
              var s = u.getScrollSpyContainer();
              if (!(gt.isMounted() && !gt.isInitialized())) {
                var f = u.props.to,
                  h = null,
                  v = 0,
                  g = 0,
                  w = 0;
                if (s.getBoundingClientRect) {
                  var y = s.getBoundingClientRect();
                  w = y.top;
                }
                if (!h || u.props.isDynamic) {
                  if (((h = r.get(f)), !h)) return;
                  var N = h.getBoundingClientRect();
                  (v = N.top - w + a), (g = v + N.height);
                }
                var p = a - u.props.offset,
                  c = p >= Math.floor(v) && p < Math.floor(g),
                  m = p < Math.floor(v) || p >= Math.floor(g),
                  x = r.getActiveLink();
                if (m)
                  return (
                    f === x && r.setActiveLink(void 0),
                    u.props.hashSpy && gt.getHash() === f && gt.changeHash(),
                    u.props.spy &&
                      u.state.active &&
                      (u.setState({ active: !1 }),
                      u.props.onSetInactive && u.props.onSetInactive()),
                    Ut.updateStates()
                  );
                if (c && x !== f)
                  return (
                    r.setActiveLink(f),
                    u.props.hashSpy && gt.changeHash(f),
                    u.props.spy &&
                      (u.setState({ active: !0 }),
                      u.props.onSetActive && u.props.onSetActive(f)),
                    Ut.updateStates()
                  );
              }
            });
        };
      return (l.propTypes = qs), (l.defaultProps = { offset: 0 }), l;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        Zs(l, r);
        function l(i) {
          Gs(this, l);
          var o = bs(
            this,
            (l.__proto__ || Object.getPrototypeOf(l)).call(this, i)
          );
          return (o.childBindings = { domNode: null }), o;
        }
        return (
          Xs(l, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (o) {
                this.props.name !== o.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                oo.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (o) {
                oo.register(o, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return al.createElement(
                  t,
                  io({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          l
        );
      })(al.Component);
      return (n.propTypes = { name: Q.string, id: Q.string }), n;
    },
  },
  k0 = E0;
Object.defineProperty(G, "__esModule", { value: !0 });
G.Helpers =
  G.ScrollElement =
  G.ScrollLink =
  G.animateScroll =
  G.scrollSpy =
  G.Events =
  G.scroller =
  G.Element =
  G.Button =
  Wd =
  G.Link =
    void 0;
var _0 = aa,
  Rd = tt(_0),
  N0 = pa,
  $d = tt(N0),
  P0 = ma,
  Md = tt(P0),
  T0 = Fn,
  Dd = tt(T0),
  j0 = $r,
  zd = tt(j0),
  C0 = Lr,
  Fd = tt(C0),
  O0 = gi,
  Ad = tt(O0),
  L0 = Or,
  Hd = tt(L0),
  I0 = Ei,
  Ud = tt(I0),
  R0 = k0,
  Bd = tt(R0);
function tt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Wd = (G.Link = Rd.default);
G.Button = $d.default;
G.Element = Md.default;
G.scroller = Dd.default;
G.Events = zd.default;
G.scrollSpy = Fd.default;
G.animateScroll = Ad.default;
G.ScrollLink = Hd.default;
G.ScrollElement = Ud.default;
G.Helpers = Bd.default;
G.default = {
  Link: Rd.default,
  Button: $d.default,
  Element: Md.default,
  scroller: Dd.default,
  Events: zd.default,
  scrollSpy: Fd.default,
  animateScroll: Ad.default,
  ScrollLink: Hd.default,
  ScrollElement: Ud.default,
  Helpers: Bd.default,
};
const $0 = () =>
    d.jsxs(d.Fragment, {
      children: [
        d.jsx("img", {
          src: "./line.svg",
          className:
            "absolute object-cover hidden lg:block top-[20px] h-[1600px] -z-[20] left-0 w-[1500px]",
          alt: "",
        }),
        d.jsxs("div", {
          className: "w-[90%] max-w-[1600px] mt-11 md:mt-0 mx-auto relative",
          children: [
            d.jsxs("div", {
              className: "flex flex-col items-center gap-y-6",
              children: [
                d.jsx("h1", {
                  className:
                    "font_osake text-white text-5xl sm:text-6xl md:text-8xl",
                  children: "$TAOS",
                }),
                d.jsx("h1", {
                  className:
                    "font_osake text-white text-5xl sm:text-6xl md:text-8xl",
                  children: "Dextensor",
                }),
                d.jsx("img", {
                  src: "./img_center.svg",
                  className:
                    "max-w-[150px] sm:max-w-[250px] lg:max-w-[400px] z-30 object-contain",
                  alt: "",
                }),
              ],
            }),
            d.jsxs("div", {
              className:
                "w-full flex flex-col items-center justify-center mt-11 lg:mt-0 lg:translate-y-[320px]",
              children: [
                d.jsxs(Wd, {
                  to: "about",
                  className:
                    "relative flex cursor-pointer justify-center items-center w-[80px]",
                  children: [
                    d.jsx("img", {
                      src: "./scroll_icon.svg",
                      className: "absolute -z-20",
                      alt: "",
                    }),
                    d.jsx("div", {
                      className:
                        "up_down_animation w-[8px] h-[25px] rounded-full bg-white",
                    }),
                  ],
                }),
                d.jsx("h1", {
                  className: "text-white font-bold translate-y-[40px]",
                  children: "SCROLL TO EXPLORE",
                }),
              ],
            }),
            d.jsx("img", {
              src: "./img_left.svg",
              className:
                "object-contain absolute w-[50px] lg:w-[70px] xl:w-[100px] left-[10px] lg:left-[220px] top-[55%] lg:top-[45%]",
              alt: "",
            }),
            d.jsx("img", {
              src: "./img_right.svg",
              className:
                "object-contain absolute w-[80px] lg:w-[120px] xl:w-[200px] right-[10px] lg:right-[100px] top-[55%] lg:top-[45%]",
              alt: "",
            }),
            d.jsx("img", {
              src: "./img_smile.svg",
              className:
                "object-contain absolute w-[80px] lg:w-[110px] xl:w-[160px] left-[10px] lg:left-[100px] bottom-[15%]",
              alt: "",
            }),
            d.jsx("img", {
              src: "./img_eye.svg",
              className:
                "object-contain absolute w-[80px] lg:w-[110px] xl:w-[160px] right-[10px] lg:right-[100px] bottom-[-5%]",
              alt: "",
            }),
          ],
        }),
      ],
    }),
  M0 = () =>
    d.jsxs("div", {
      id: "about",
      className:
        "w-[90%] flex-wrap flex justify-between max-w-[1600px] my-[100px] mx-auto",
      children: [
        d.jsxs("div", {
          className: " w-full flex flex-col text-center mb-11",
          children: [
            d.jsx("strong", {
              className: "text-white px-5 mb-2 text-3xl",
              children: "CA",
            }),
            d.jsx("p", {
              className:
                "break-words text-white text-base px-5 md:text-2xl font-sans",
              children: "0xttt",
            }),
          ],
        }),
        d.jsx("div", {
          className: " w-full flex justify-center text-center mb-11 md:mb-32",
          children: d.jsxs("a", {
            href: "https://dexscreener.com/ethereum/0xttt",
            target: "_blank",
            className:
              "border-0 text-white bg-transparent relative w-[100px] sm:w-[120px] flex justify-center items-center",
            children: [
              d.jsx("img", {
                src: "./buy-button.svg",
                className: "absolute -z-10 w-full",
                alt: "Chart",
              }),
              "Chart",
            ],
          }),
        }),
        d.jsxs("div", {
          className: "w-full lg:w-[50%] flex flex-col",
          children: [
            d.jsx("h1", {
              className:
                "font_osake text-white text-4xl sm:text-4xl md:text-6xl",
              children: "MULTICHAIN DEX AGGREGATOR",
            }),
            d.jsx("p", {
              className: "text-lg text-white font-medium mt-4",
              children:
                "$TAOS easily connects AMM pools, regardless of their providers, and smartly uncovers the best direct or multi-hop routes between any two tokens across different blockchains",
            }),
            d.jsxs("div", {
              className: "mt-11",
              children: [
                d.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    d.jsx("div", {
                      children: d.jsx("img", {
                        className: "object-contain",
                        src: "./bullet.svg",
                        alt: "",
                      }),
                    }),
                    d.jsx("span", {
                      className: "text-lg text-white font-semibold",
                      children:
                        "Finds the most efficient direct or multi-hop pathways between any two tokens",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    d.jsx("div", {
                      children: d.jsx("img", {
                        className: "object-contain",
                        src: "./bullet.svg",
                        alt: "",
                      }),
                    }),
                    d.jsx("span", {
                      className: "text-lg text-white font-semibold",
                      children:
                        "Works seamlessly on various blockchains to facilitate exchange operations",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    d.jsx("div", {
                      children: d.jsx("img", {
                        className: "object-contain",
                        src: "./bullet.svg",
                        alt: "",
                      }),
                    }),
                    d.jsx("span", {
                      className: "text-lg text-white font-semibold",
                      children:
                        "Identifies the best route for transactions optimizing the user experience",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "mt-16 flex items-center gap-7",
              children: [
                d.jsxs("a", {
                  href: "https://dextensor-dapp-3eie.vercel.app/",
                  target: "_blank",
                  className:
                    "border-0 bg-transparent relative w-[120px] sm:w-[150px] flex justify-center items-center",
                  children: [
                    d.jsx("img", {
                      src: "./buy-button.svg",
                      className: "absolute -z-10 w-full",
                      alt: "Launch app",
                    }),
                    d.jsx("span", {
                      className: "text-white uppercase text-sm sm:text-base",
                      children: "LAUNCH APP",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "w-full mt-11 lg:mt-0 lg:w-[50%]",
          children: d.jsx("img", {
            src: "./big_img.png",
            className: "object-contain",
            alt: "",
          }),
        }),
      ],
    }),
  D0 = () =>
    d.jsxs("div", {
      className: "w-full relative overflow-x-clip",
      children: [
        d.jsx("img", {
          src: "./left_line.svg",
          className: "absolute left-[10px] top-[57.5%]",
          alt: "",
        }),
        d.jsxs("div", {
          className: "w-[90%] max-w-[1600px] my-[100px] mx-auto",
          children: [
            d.jsx("h1", {
              className:
                "font_osake text-center text-white text-3xl sm:text-3xl md:text-5xl",
              children: "Revolutionary, Intelligent and Simply Innovative.",
            }),
            d.jsx("p", {
              className: "text-2xl text-center text-[#808080] mt-4",
              children: "AI Powered Dex Aggregator",
            }),
            d.jsxs("div", {
              className:
                "mt-[100px] flex gap-y-11 relative flex-wrap justify-between",
              children: [
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] overflow-hidden",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon1.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS AI-Powered Swap",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "Swap transactions contribute revenues to the TAOS Treasury, and the AI-driven VaultManager efficiently handles the distribution.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "SWAP",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                  ],
                }),
                d.jsx("img", {
                  src: "./eclispe.svg",
                  className: "object-contain absolute top-[25%] right-[10%]",
                  alt: "",
                }),
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] overflow-hidden",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon2.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS Guardian",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "TAOS minimizes discrepancies in transaction amounts due to slippage intervals, ensuring accurate swaps in your wallet.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "ZERO SLIPPAGE",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] overflow-hidden",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon3.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS Discoverer",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "It explores and identifies all potential routes between two tokens, refining results based on specific criteria to exclude unnecessary pathways.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "DISCOVER",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] relative mb-[50px]",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon4.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS Lancer",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "Cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "INTELLIGENT",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                    d.jsx("img", {
                      src: "./smile.svg",
                      className:
                        "absolute right-[-10px] md:right-[-50px]  w-[100px] md:w-max bottom-[-50px] z-30",
                      alt: "",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] overflow-hidden",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon5.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS Echo",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "Empower your community to organize and allocate resources to its members.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "EMPOWER",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "w-full md:w-[46%] lg:w-[30%] overflow-hidden",
                  children: [
                    d.jsxs("div", {
                      className:
                        "relative  min-h-[350px] flex flex-col w-full bg-[#222325] rounded-2xl p-5",
                      children: [
                        d.jsx("img", {
                          src: "./right_part.png",
                          className: "absolute right-[0] top-[-10px]",
                          alt: "",
                        }),
                        d.jsx("div", {
                          className: "mt-2",
                          children: d.jsx("img", {
                            src: "./icon6.svg",
                            alt: "",
                          }),
                        }),
                        d.jsxs("div", {
                          className: " mt-11",
                          children: [
                            d.jsx("h1", {
                              className: "font_osake text-white text-2xl ",
                              children: "$TAOS Epoc",
                            }),
                            d.jsx("p", {
                              className:
                                "text-lg text-white font-medium leading-[150%] mt-4",
                              children:
                                "Protect dApps from insolvency by auditing the reserves of tokens used as collateral.",
                            }),
                          ],
                        }),
                        d.jsx("button", {
                          className:
                            "rounded-full px-4 mt-4 font-semibold uppercase py-2 text-white bg-[#2D2E30] w-max",
                          children: "VOTING",
                        }),
                      ],
                    }),
                    d.jsx("div", {
                      className: "w-full justify-center flex",
                      children: d.jsx("div", {
                        className: "w-[200px] h-[1px] bg-[#dddddd]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx("img", {
          src: "./eclispe.svg",
          className:
            "object-contain hidden md:block absolute bottom-[-10%] md:bottom-[-20%] left-[10%]",
          alt: "",
        }),
        d.jsx("img", {
          src: "./border_ellipse.svg",
          className:
            "object-contain hidden md:block absolute w-[250px] bottom-[-10%] md:bottom-[-30%] right-[10%]",
          alt: "",
        }),
      ],
    }),
  z0 = () =>
    d.jsxs("div", {
      className: "relative w-full",
      children: [
        d.jsx("img", {
          src: "./big_ellipse.svg",
          className: "left-[10%] absolute -z-20 w-[220px] top-[40%]",
          alt: "",
        }),
        d.jsxs("div", {
          className:
            "relative mx-auto min-h-[90vh] mt-0 md:mt-[500px] max-w-[1400px] w-[90%]",
          children: [
            d.jsx("h1", {
              className:
                "font_osake text-center text-white text-3xl sm:text-3xl md:text-5xl",
              children: "Exchange cleverly, switch uniquely.",
            }),
            d.jsx("p", {
              className: "text-lg sm:text-2xl text-center text-[#808080] mt-4",
              children: "AI-powered access to decentralized finance",
            }),
            d.jsx("div", {
              className: "w-full mt-[90px] flex justify-center",
              children: d.jsxs("button", {
                className:
                  "border-0 cursor-pointer bg-transparent px-6 py-0 relative h-[20px] flex justify-center items-center",
                children: [
                  d.jsx("img", {
                    src: "./buy-button.svg",
                    className: "absolute -z-10 w-full ",
                    alt: "telegram",
                  }),
                  d.jsx("a", {
                    href: "https://t.me/",
                    target: "_blank",
                    className: "text-white uppercase text-sm sm:text-base",
                    children: "Telegram",
                  }),
                ],
              }),
            }),
          ],
        }),
        d.jsx("img", {
          src: "./half_ellipse.png",
          className: "right-[10%] absolute w-[220px] bottom-0",
          alt: "",
        }),
      ],
    }),
  F0 = () =>
    d.jsxs(d.Fragment, {
      children: [
        d.jsx($0, {}),
        d.jsx("div", { className: "mt-[120px] lg:mt-[500px]" }),
        d.jsx(M0, {}),
        d.jsx(D0, {}),
        d.jsx(z0, {}),
      ],
    }),
  A0 = () =>
    d.jsx("div", {
      className: "w-full bg-[#101010]",
      children: d.jsxs("div", {
        className: "w-[90%] py-11 max-w-[1600px] mx-auto",
        children: [
          d.jsxs("div", {
            className: "flex w-full justify-between gap-y-6 gap-x-3 flex-wrap",
            children: [
              d.jsx("img", { src: "./toas-logo.svg", alt: "" }),
              d.jsxs("div", {
                className: "flex items-center flex-wrap gap-5",
                children: [
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className:
              "w-full gap-5 mt-[80px] flex-wrap flex justify-center items-center",
            children: d.jsx("span", {
              className: "text-base text-[#5E6B7E]",
              children: "© 2024 TAOS Systems. All rights reserved.",
            }),
          }),
        ],
      }),
    }),
  H0 = () =>
    d.jsxs(d.Fragment, {
      children: [d.jsx(Ov, {}), d.jsx(F0, {}), d.jsx(A0, {})],
    });
uo.createRoot(document.getElementById("root")).render(
  d.jsx(ue.StrictMode, { children: d.jsx(H0, {}) })
);
