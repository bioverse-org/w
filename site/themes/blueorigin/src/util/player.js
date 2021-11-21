"object" == typeof navigator && function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}
(this, function() {
        "use strict";
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

        function t(e, t) {
            return e(t = {
                exports: {}
            }, t.exports), t.exports
        }
        var n = t(function(e) {
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            }),
            i = t(function(e) {
                var t = e.exports = {
                    version: "2.5.3"
                };
                "number" == typeof __e && (__e = t)
            }),
            r = (i.version, function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }),
            o = function(e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e
            },
            a = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            },
            s = !a(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }),
            l = n.document,
            c = r(l) && r(l.createElement),
            u = function(e) {
                return c ? l.createElement(e) : {}
            },
            f = !s && !a(function() {
                return 7 != Object.defineProperty(u("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }),
            h = function(e, t) {
                if (!r(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            },
            d = Object.defineProperty,
            p = {
                f: s ? Object.defineProperty : function(e, t, n) {
                    if (o(e), t = h(t, !0), o(n), f) try {
                        return d(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            g = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            },
            m = s ? function(e, t, n) {
                return p.f(e, t, g(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            },
            y = {}.hasOwnProperty,
            v = function(e, t) {
                return y.call(e, t)
            },
            b = 0,
            w = Math.random(),
            k = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++b + w).toString(36))
            },
            T = t(function(e) {
                var t = k("src"),
                    r = Function.toString,
                    o = ("" + r).split("toString");
                i.inspectSource = function(e) {
                    return r.call(e)
                }, (e.exports = function(e, i, r, a) {
                    var s = "function" == typeof r;
                    s && (v(r, "name") || m(r, "name", i)), e[i] !== r && (s && (v(r, t) || m(r, t, e[i] ? "" + e[i] : o.join(String(i)))), e === n ? e[i] = r : a ? e[i] ? e[i] = r : m(e, i, r) : (delete e[i], m(e, i, r)))
                })(Function.prototype, "toString", function() {
                    return "function" == typeof this && this[t] || r.call(this)
                })
            }),
            S = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            },
            E = function(e, t, n) {
                if (S(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function(n, i, r) {
                            return e.call(t, n, i, r)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            _ = function(e, t, r) {
                var o, a, s, l, c = e & _.F,
                    u = e & _.G,
                    f = e & _.S,
                    h = e & _.P,
                    d = e & _.B,
                    p = u ? n : f ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                    g = u ? i : i[t] || (i[t] = {}),
                    y = g.prototype || (g.prototype = {});
                for (o in u && (r = t), r) s = ((a = !c && p && void 0 !== p[o]) ? p : r)[o], l = d && a ? E(s, n) : h && "function" == typeof s ? E(Function.call, s) : s, p && T(p, o, s, e & _.U), g[o] != s && m(g, o, l), h && y[o] != s && (y[o] = s)
            };
        n.core = i, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128;
        for (var A, P = _, M = k("typed_array"), L = k("view"), x = !(!n.ArrayBuffer || !n.DataView), C = x, O = 0, N = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); O < 9;)(A = n[N[O++]]) ? (m(A.prototype, M, !0), m(A.prototype, L, !0)) : C = !1;
        var j = {
                ABV: x,
                CONSTR: C,
                TYPED: M,
                VIEW: L
            },
            I = function(e, t, n) {
                for (var i in t) T(e, i, t[i], n);
                return e
            },
            F = function(e, t, n, i) {
                if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
                return e
            },
            R = Math.ceil,
            q = Math.floor,
            B = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? q : R)(e)
            },
            V = Math.min,
            D = function(e) {
                return e > 0 ? V(B(e), 9007199254740991) : 0
            },
            U = function(e) {
                if (void 0 === e) return 0;
                var t = B(e),
                    n = D(t);
                if (t !== n) throw RangeError("Wrong length!");
                return n
            },
            H = {}.toString,
            W = function(e) {
                return H.call(e).slice(8, -1)
            },
            z = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == W(e) ? e.split("") : Object(e)
            },
            G = function(e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            },
            K = function(e) {
                return z(G(e))
            },
            Y = Math.max,
            Q = Math.min,
            J = function(e, t) {
                return (e = B(e)) < 0 ? Y(e + t, 0) : Q(e, t)
            },
            $ = function(e) {
                return function(t, n, i) {
                    var r, o = K(t),
                        a = D(o.length),
                        s = J(i, a);
                    if (e && n != n) {
                        for (; a > s;)
                            if ((r = o[s++]) != r) return !0
                    } else
                        for (; a > s; s++)
                            if ((e || s in o) && o[s] === n) return e || s || 0;
                    return !e && -1
                }
            },
            X = n["__core-js_shared__"] || (n["__core-js_shared__"] = {}),
            Z = function(e) {
                return X[e] || (X[e] = {})
            },
            ee = Z("keys"),
            te = function(e) {
                return ee[e] || (ee[e] = k(e))
            },
            ne = $(!1),
            ie = te("IE_PROTO"),
            re = function(e, t) {
                var n, i = K(e),
                    r = 0,
                    o = [];
                for (n in i) n != ie && v(i, n) && o.push(n);
                for (; t.length > r;) v(i, n = t[r++]) && (~ne(o, n) || o.push(n));
                return o
            },
            oe = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            ae = oe.concat("length", "prototype"),
            se = {
                f: Object.getOwnPropertyNames || function(e) {
                    return re(e, ae)
                }
            },
            le = function(e) {
                return Object(G(e))
            },
            ce = function(e) {
                for (var t = le(this), n = D(t.length), i = arguments.length, r = J(i > 1 ? arguments[1] : void 0, n), o = i > 2 ? arguments[2] : void 0, a = void 0 === o ? n : J(o, n); a > r;) t[r++] = e;
                return t
            },
            ue = t(function(e) {
                var t = Z("wks"),
                    i = n.Symbol,
                    r = "function" == typeof i;
                (e.exports = function(e) {
                    return t[e] || (t[e] = r && i[e] || (r ? i : k)("Symbol." + e))
                }).store = t
            }),
            fe = p.f,
            he = ue("toStringTag"),
            de = function(e, t, n) {
                e && !v(e = n ? e : e.prototype, he) && fe(e, he, {
                    configurable: !0,
                    value: t
                })
            },
            pe = t(function(e, t) {
                var i = se.f,
                    r = p.f,
                    o = "prototype",
                    l = "Wrong index!",
                    c = n.ArrayBuffer,
                    u = n.DataView,
                    f = n.Math,
                    h = n.RangeError,
                    d = n.Infinity,
                    g = c,
                    y = f.abs,
                    v = f.pow,
                    b = f.floor,
                    w = f.log,
                    k = f.LN2,
                    T = s ? "_b" : "buffer",
                    S = s ? "_l" : "byteLength",
                    E = s ? "_o" : "byteOffset";

                function _(e, t, n) {
                    var i, r, o, a = new Array(n),
                        s = 8 * n - t - 1,
                        l = (1 << s) - 1,
                        c = l >> 1,
                        u = 23 === t ? v(2, -24) - v(2, -77) : 0,
                        f = 0,
                        h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for ((e = y(e)) != e || e === d ? (r = e != e ? 1 : 0, i = l) : (i = b(w(e) / k), e * (o = v(2, -i)) < 1 && (i--, o *= 2), (e += i + c >= 1 ? u / o : u * v(2, 1 - c)) * o >= 2 && (i++, o /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * o - 1) * v(2, t), i += c) : (r = e * v(2, c - 1) * v(2, t), i = 0)); t >= 8; a[f++] = 255 & r, r /= 256, t -= 8);
                    for (i = i << t | r, s += t; s > 0; a[f++] = 255 & i, i /= 256, s -= 8);
                    return a[--f] |= 128 * h, a
                }

                function A(e, t, n) {
                    var i, r = 8 * n - t - 1,
                        o = (1 << r) - 1,
                        a = o >> 1,
                        s = r - 7,
                        l = n - 1,
                        c = e[l--],
                        u = 127 & c;
                    for (c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
                    for (i = u & (1 << -s) - 1, u >>= -s, s += t; s > 0; i = 256 * i + e[l], l--, s -= 8);
                    if (0 === u) u = 1 - a;
                    else {
                        if (u === o) return i ? NaN : c ? -d : d;
                        i += v(2, t), u -= a
                    }
                    return (c ? -1 : 1) * i * v(2, u - t)
                }

                function P(e) {
                    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
                }

                function M(e) {
                    return [255 & e]
                }

                function L(e) {
                    return [255 & e, e >> 8 & 255]
                }

                function x(e) {
                    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
                }

                function C(e) {
                    return _(e, 52, 8)
                }

                function O(e) {
                    return _(e, 23, 4)
                }

                function N(e, t, n) {
                    r(e[o], t, {
                        get: function() {
                            return this[n]
                        }
                    })
                }

                function R(e, t, n, i) {
                    var r = U(+n);
                    if (r + t > e[S]) throw h(l);
                    var o = e[T]._b,
                        a = r + e[E],
                        s = o.slice(a, a + t);
                    return i ? s : s.reverse()
                }

                function q(e, t, n, i, r, o) {
                    var a = U(+n);
                    if (a + t > e[S]) throw h(l);
                    for (var s = e[T]._b, c = a + e[E], u = i(+r), f = 0; f < t; f++) s[c + f] = u[o ? f : t - f - 1]
                }
                if (j.ABV) {
                    if (!a(function() {
                            c(1)
                        }) || !a(function() {
                            new c(-1)
                        }) || a(function() {
                            return new c, new c(1.5), new c(NaN), "ArrayBuffer" != c.name
                        })) {
                        for (var V, H = (c = function(e) {
                                return F(this, c), new g(U(e))
                            })[o] = g[o], W = i(g), z = 0; W.length > z;)(V = W[z++]) in c || m(c, V, g[V]);
                        H.constructor = c
                    }
                    var G = new u(new c(2)),
                        K = u[o].setInt8;
                    G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || I(u[o], {
                        setInt8: function(e, t) {
                            K.call(this, e, t << 24 >> 24)
                        },
                        setUint8: function(e, t) {
                            K.call(this, e, t << 24 >> 24)
                        }
                    }, !0)
                } else c = function(e) {
                    F(this, c, "ArrayBuffer");
                    var t = U(e);
                    this._b = ce.call(new Array(t), 0), this[S] = t
                }, u = function(e, t, n) {
                    F(this, u, "DataView"), F(e, c, "DataView");
                    var i = e[S],
                        r = B(t);
                    if (r < 0 || r > i) throw h("Wrong offset!");
                    if (r + (n = void 0 === n ? i - r : D(n)) > i) throw h("Wrong length!");
                    this[T] = e, this[E] = r, this[S] = n
                }, s && (N(c, "byteLength", "_l"), N(u, "buffer", "_b"), N(u, "byteLength", "_l"), N(u, "byteOffset", "_o")), I(u[o], {
                    getInt8: function(e) {
                        return R(this, 1, e)[0] << 24 >> 24
                    },
                    getUint8: function(e) {
                        return R(this, 1, e)[0]
                    },
                    getInt16: function(e) {
                        var t = R(this, 2, e, arguments[1]);
                        return (t[1] << 8 | t[0]) << 16 >> 16
                    },
                    getUint16: function(e) {
                        var t = R(this, 2, e, arguments[1]);
                        return t[1] << 8 | t[0]
                    },
                    getInt32: function(e) {
                        return P(R(this, 4, e, arguments[1]))
                    },
                    getUint32: function(e) {
                        return P(R(this, 4, e, arguments[1])) >>> 0
                    },
                    getFloat32: function(e) {
                        return A(R(this, 4, e, arguments[1]), 23, 4)
                    },
                    getFloat64: function(e) {
                        return A(R(this, 8, e, arguments[1]), 52, 8)
                    },
                    setInt8: function(e, t) {
                        q(this, 1, e, M, t)
                    },
                    setUint8: function(e, t) {
                        q(this, 1, e, M, t)
                    },
                    setInt16: function(e, t) {
                        q(this, 2, e, L, t, arguments[2])
                    },
                    setUint16: function(e, t) {
                        q(this, 2, e, L, t, arguments[2])
                    },
                    setInt32: function(e, t) {
                        q(this, 4, e, x, t, arguments[2])
                    },
                    setUint32: function(e, t) {
                        q(this, 4, e, x, t, arguments[2])
                    },
                    setFloat32: function(e, t) {
                        q(this, 4, e, O, t, arguments[2])
                    },
                    setFloat64: function(e, t) {
                        q(this, 8, e, C, t, arguments[2])
                    }
                });
                de(c, "ArrayBuffer"), de(u, "DataView"), m(u[o], j.VIEW, !0), t.ArrayBuffer = c, t.DataView = u
            }),
            ge = ue("species"),
            me = function(e, t) {
                var n, i = o(e).constructor;
                return void 0 === i || null == (n = o(i)[ge]) ? t : S(n)
            },
            ye = ue("species"),
            ve = function(e) {
                var t = n[e];
                s && t && !t[ye] && p.f(t, ye, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            },
            be = n.ArrayBuffer,
            we = pe.ArrayBuffer,
            ke = pe.DataView,
            Te = j.ABV && be.isView,
            Se = we.prototype.slice,
            Ee = j.VIEW;
        P(P.G + P.W + P.F * (be !== we), {
            ArrayBuffer: we
        }), P(P.S + P.F * !j.CONSTR, "ArrayBuffer", {
            isView: function(e) {
                return Te && Te(e) || r(e) && Ee in e
            }
        }), P(P.P + P.U + P.F * a(function() {
            return !new we(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(e, t) {
                if (void 0 !== Se && void 0 === t) return Se.call(o(this), e);
                for (var n = o(this).byteLength, i = J(e, n), r = J(void 0 === t ? n : t, n), a = new(me(this, we))(D(r - i)), s = new ke(this), l = new ke(a), c = 0; i < r;) l.setUint8(c++, s.getUint8(i++));
                return a
            }
        }), ve("ArrayBuffer");
        var _e = ue("toStringTag"),
            Ae = "Arguments" == W(function() {
                return arguments
            }()),
            Pe = function(e) {
                var t, n, i;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), _e)) ? n : Ae ? W(t) : "Object" == (i = W(t)) && "function" == typeof t.callee ? "Arguments" : i
            },
            Me = {},
            Le = ue("iterator"),
            xe = Array.prototype,
            Ce = function(e) {
                return void 0 !== e && (Me.Array === e || xe[Le] === e)
            },
            Oe = Object.keys || function(e) {
                return re(e, oe)
            },
            Ne = s ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, i = Oe(t), r = i.length, a = 0; r > a;) p.f(e, n = i[a++], t[n]);
                return e
            },
            je = n.document,
            Ie = je && je.documentElement,
            Fe = te("IE_PROTO"),
            Re = function() {},
            qe = function() {
                var e, t = u("iframe"),
                    n = oe.length;
                for (t.style.display = "none", Ie.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F = Object < \/script>"),e.close(),qe=e.F;n--;)delete qe.prototype[oe[n]];return qe()},Be=Object.create||function(e,t){var n;return null!==e?(Re.prototype=o(e),n=new Re,Re.prototype=null,n[Fe]=e):n=qe(),void 0===t?n:Ne(n,t)},Ve=te("IE_PROTO"),De=Object.prototype,Ue=Object.getPrototypeOf||function(e){return e=le(e),v(e,Ve)?e[Ve]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?De:null},He=ue("iterator"),We=i.getIteratorMethod=function(e){if(null!=e)return e[He]||e["@@iterator"]||Me[Pe(e)]},ze=Array.isArray||function(e){return"Array"==W(e)},Ge=ue("species"),Ke=function(e,t){return new(function(e){var t;return ze(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!ze(t.prototype)||(t=void 0),r(t)&&null===(t=t[Ge])&&(t=void 0)),void 0===t?Array:t}(e))(t)},Ye=function(e,t){var n=1==e,i=2==e,r=3==e,o=4==e,a=6==e,s=5==e||a,l=t||Ke;return function(t,c,u){for(var f,h,d=le(t),p=z(d),g=E(c,u,3),m=D(p.length),y=0,v=n?l(t,m):i?l(t,0):void 0;m>y;y++)if((s||y in p)&&(h=g(f=p[y],y,d),e))if(n)v[y]=h;else if(h)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:v.push(f)}else if(o)return!1;return a?-1:r||o?o:v}},Qe=ue("unscopables"),Je=Array.prototype;null==Je[Qe]&&m(Je,Qe,{});var $e=function(e){Je[Qe][e]=!0},Xe=function(e,t){return{value:t,done:!!e}},Ze={};m(Ze,ue("iterator"),function(){return this});var et=function(e,t,n){e.prototype=Be(Ze,{next:g(1,n)}),de(e,t+" Iterator")},tt=ue("iterator"),nt=!([].keys&&"next"in[].keys()),it=function(){return this},rt=function(e,t,n,i,r,o,a){et(n,t,i);var s,l,c,u=function(e){if(!nt&&e in p)return p[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},f=t+" Iterator",h="values"==r,d=!1,p=e.prototype,g=p[tt]||p["@@iterator"]||r&&p[r],y=!nt&&g||u(r),b=r?h?u("entries"):y:void 0,w="Array"==t&&p.entries||g;if(w&&(c=Ue(w.call(new e)))!==Object.prototype&&c.next&&(de(c,f,!0),v(c,tt)||m(c,tt,it)),h&&g&&"values"!==g.name&&(d=!0,y=function(){return g.call(this)}),(nt||d||!p[tt])&&m(p,tt,y),Me[t]=y,Me[f]=it,r)if(s={values:h?y:u("values"),keys:o?y:u("keys"),entries:b},a)for(l in s)l in p||T(p,l,s[l]);else P(P.P+P.F*(nt||d),t,s);return s},ot=rt(Array,"Array",function(e,t){this._t=K(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,Xe(1)):Xe(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values");Me.Arguments=Me.Array,$e("keys"),$e("values"),$e("entries");var at=ue("iterator"),st=!1;try{[7][at]().return=function(){st=!0}}catch(e){}var lt=function(e,t){if(!t&&!st)return!1;var n=!1;try{var i=[7],r=i[at]();r.next=function(){return{done:n=!0}},i[at]=function(){return r},e(i)}catch(e){}return n},ct=[].copyWithin||function(e,t){var n=le(this),i=D(n.length),r=J(e,i),o=J(t,i),a=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===a?i:J(a,i))-o,i-r),l=1;for(o<r&&r<o+s&&(l=-1,o+=s-1,r+=s-1);s-- >0;)o in n?n[r]=n[o]:delete n[r],r+=l,o+=l;return n},ut={f:{}.propertyIsEnumerable},ft=Object.getOwnPropertyDescriptor,ht={f:s?ft:function(e,t){if(e=K(e),t=h(t,!0),f)try{return ft(e,t)}catch(e){}if(v(e,t))return g(!ut.f.call(e,t),e[t])}},dt=t(function(e){if(s){var t=n,i=a,o=P,l=j,c=pe,u=E,f=F,d=g,y=m,b=I,w=B,T=D,S=U,_=J,A=h,M=v,L=Pe,x=r,C=le,O=Ce,N=Be,R=Ue,q=se.f,V=We,H=k,W=ue,z=Ye,G=$,K=me,Y=ot,Q=Me,X=lt,Z=ve,ee=ce,te=ct,ne=p,ie=ht,re=ne.f,oe=ie.f,ae=t.RangeError,fe=t.TypeError,he=t.Uint8Array,de=Array.prototype,ge=c.ArrayBuffer,ye=c.DataView,be=z(0),we=z(2),ke=z(3),Te=z(4),Se=z(5),Ee=z(6),_e=G(!0),Ae=G(!1),Le=Y.values,xe=Y.keys,Oe=Y.entries,Ne=de.lastIndexOf,je=de.reduce,Ie=de.reduceRight,Fe=de.join,Re=de.sort,qe=de.slice,Ve=de.toString,De=de.toLocaleString,He=W("iterator"),ze=W("toStringTag"),Ge=H("typed_constructor"),Ke=H("def_constructor"),Qe=l.CONSTR,Je=l.TYPED,$e=l.VIEW,Xe=z(1,function(e,t){return it(K(e,e[Ke]),t)}),Ze=i(function(){return 1===new he(new Uint16Array([1]).buffer)[0]}),et=!!he&&!!he.prototype.set&&i(function(){new he(1).set({})}),tt=function(e,t){var n=w(e);if(n<0||n%t)throw ae("Wrong offset!");return n},nt=function(e){if(x(e)&&Je in e)return e;throw fe(e+" is not a typed array!")},it=function(e,t){if(!(x(e)&&Ge in e))throw fe("It is not a typed array constructor!");return new e(t)},rt=function(e,t){return at(K(e,e[Ke]),t)},at=function(e,t){for(var n=0,i=t.length,r=it(e,i);i>n;)r[n]=t[n++];return r},st=function(e,t,n){re(e,t,{get:function(){return this._d[n]}})},ut=function(e){var t,n,i,r,o,a,s=C(e),l=arguments.length,c=l>1?arguments[1]:void 0,f=void 0!==c,h=V(s);if(null!=h&&!O(h)){for(a=h.call(s),i=[],t=0;!(o=a.next()).done;t++)i.push(o.value);s=i}for(f&&l>2&&(c=u(c,arguments[2],2)),t=0,n=T(s.length),r=it(this,n);n>t;t++)r[t]=f?c(s[t],t):s[t];return r},ft=function(){for(var e=0,t=arguments.length,n=it(this,t);t>e;)n[e]=arguments[e++];return n},dt=!!he&&i(function(){De.call(new he(1))}),pt=function(){return De.apply(dt?qe.call(nt(this)):nt(this),arguments)},gt={copyWithin:function(e,t){return te.call(nt(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Te(nt(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return ee.apply(nt(this),arguments)},filter:function(e){return rt(this,we(nt(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return Se(nt(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return Ee(nt(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){be(nt(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return Ae(nt(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return _e(nt(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return Fe.apply(nt(this),arguments)},lastIndexOf:function(e){return Ne.apply(nt(this),arguments)},map:function(e){return Xe(nt(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return je.apply(nt(this),arguments)},reduceRight:function(e){return Ie.apply(nt(this),arguments)},reverse:function(){for(var e,t=nt(this).length,n=Math.floor(t/
                        2), i = 0; i < n;) e = this[i], this[i++] = this[--t], this[t] = e;
                return this
            },
            some: function(e) {
                return ke(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
            }, sort: function(e) {
                return Re.call(nt(this), e)
            }, subarray: function(e, t) {
                var n = nt(this),
                    i = n.length,
                    r = _(e, i);
                return new(K(n, n[Ke]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, T((void 0 === t ? i : _(t, i)) - r))
            }
    }, mt = function(e, t) {
        return rt(this, qe.call(nt(this), e, t))
    }, yt = function(e) {
        nt(this);
        var t = tt(arguments[1], 1),
            n = this.length,
            i = C(e),
            r = T(i.length),
            o = 0;
        if (r + t > n) throw ae("Wrong length!");
        for (; o < r;) this[t + o] = i[o++]
    }, vt = {
        entries: function() {
            return Oe.call(nt(this))
        },
        keys: function() {
            return xe.call(nt(this))
        },
        values: function() {
            return Le.call(nt(this))
        }
    }, bt = function(e, t) {
        return x(e) && e[Je] && "symbol" != typeof t && t in e && String(+t) == String(t)
    }, wt = function(e, t) {
        return bt(e, t = A(t, !0)) ? d(2, e[t]) : oe(e, t)
    }, kt = function(e, t, n) {
        return !(bt(e, t = A(t, !0)) && x(n) && M(n, "value")) || M(n, "get") || M(n, "set") || n.configurable || M(n, "writable") && !n.writable || M(n, "enumerable") && !n.enumerable ? re(e, t, n) : (e[t] = n.value, e)
    }; Qe || (ie.f = wt, ne.f = kt), o(o.S + o.F * !Qe, "Object", {
        getOwnPropertyDescriptor: wt,
        defineProperty: kt
    }), i(function() {
        Ve.call({})
    }) && (Ve = De = function() {
        return Fe.call(this)
    });
    var Tt = b({}, gt); b(Tt, vt), y(Tt, He, vt.values), b(Tt, {
        slice: mt,
        set: yt,
        constructor: function() {},
        toString: Ve,
        toLocaleString: pt
    }), st(Tt, "buffer", "b"), st(Tt, "byteOffset", "o"), st(Tt, "byteLength", "l"), st(Tt, "length", "e"), re(Tt, ze, {
        get: function() {
            return this[Je]
        }
    }), e.exports = function(e, n, r, a) {
        var s = e + ((a = !!a) ? "Clamped" : "") + "Array",
            c = "get" + e,
            u = "set" + e,
            h = t[s],
            d = h || {},
            p = h && R(h),
            g = !h || !l.ABV,
            m = {},
            v = h && h.prototype,
            b = function(e, t) {
                re(e, t, {
                    get: function() {
                        return function(e, t) {
                            var i = e._d;
                            return i.v[c](t * n + i.o, Ze)
                        }(this, t)
                    },
                    set: function(e) {
                        return function(e, t, i) {
                            var r = e._d;
                            a && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[u](t * n + r.o, i, Ze)
                        }(this, t, e)
                    },
                    enumerable: !0
                })
            };
        g ? (h = r(function(e, t, i, r) {
            f(e, h, s, "_d");
            var o, a, l, c, u = 0,
                d = 0;
            if (x(t)) {
                if (!(t instanceof ge || "ArrayBuffer" == (c = L(t)) || "SharedArrayBuffer" == c)) return Je in t ? at(h, t) : ut.call(h, t);
                o = t, d = tt(i, n);
                var p = t.byteLength;
                if (void 0 === r) {
                    if (p % n) throw ae("Wrong length!");
                    if ((a = p - d) < 0) throw ae("Wrong length!")
                } else if ((a = T(r) * n) + d > p) throw ae("Wrong length!");
                l = a / n
            } else l = S(t), o = new ge(a = l * n);
            for (y(e, "_d", {
                    b: o,
                    o: d,
                    l: a,
                    e: l,
                    v: new ye(o)
                }); u < l;) b(e, u++)
        }), v = h.prototype = N(Tt), y(v, "constructor", h)) : i(function() {
            h(1)
        }) && i(function() {
            new h(-1)
        }) && X(function(e) {
            new h, new h(null), new h(1.5), new h(e)
        }, !0) || (h = r(function(e, t, i, r) {
            var o;
            return f(e, h, s), x(t) ? t instanceof ge || "ArrayBuffer" == (o = L(t)) || "SharedArrayBuffer" == o ? void 0 !== r ? new d(t, tt(i, n), r) : void 0 !== i ? new d(t, tt(i, n)) : new d(t) : Je in t ? at(h, t) : ut.call(h, t) : new d(S(t))
        }), be(p !== Function.prototype ? q(d).concat(q(p)) : q(d), function(e) {
            e in h || y(h, e, d[e])
        }), h.prototype = v, v.constructor = h);
        var w = v[He],
            k = !!w && ("values" == w.name || null == w.name),
            E = vt.values;
        y(h, Ge, !0), y(v, Je, s), y(v, $e, !0), y(v, Ke, h), (a ? new h(1)[ze] == s : ze in v) || re(v, ze, {
            get: function() {
                return s
            }
        }), m[s] = h, o(o.G + o.W + o.F * (h != d), m), o(o.S, s, {
            BYTES_PER_ELEMENT: n
        }), o(o.S + o.F * i(function() {
            d.of.call(h, 1)
        }), s, {
            from: ut,
            of: ft
        }), "BYTES_PER_ELEMENT" in v || y(v, "BYTES_PER_ELEMENT", n), o(o.P, s, gt), Z(s), o(o.P + o.F * et, s, {
            set: yt
        }), o(o.P + o.F * !k, s, vt), v.toString != Ve && (v.toString = Ve), o(o.P + o.F * i(function() {
            new h(1).slice()
        }), s, {
            slice: mt
        }), o(o.P + o.F * (i(function() {
            return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
        }) || !i(function() {
            v.toLocaleString.call([1, 2])
        })), s, {
            toLocaleString: pt
        }), Q[s] = k ? w : E, k || y(v, He, E)
    }
}
else e.exports = function() {}
});
dt("Int8", 1, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Uint8", 1, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Uint8", 1, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}, !0), dt("Int16", 2, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Uint16", 2, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Int32", 4, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Uint32", 4, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Float32", 4, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
}), dt("Float64", 8, function(e) {
    return function(t, n, i) {
        return e(this, t, n, i)
    }
});
var pt = function(e, t, n, i) {
        try {
            return i ? t(o(n)[0], n[1]) : t(n)
        } catch (t) {
            var r = e.return;
            throw void 0 !== r && o(r.call(e)), t
        }
    },
    gt = t(function(e) {
        var t = {},
            n = {},
            i = e.exports = function(e, i, r, a, s) {
                var l, c, u, f, h = s ? function() {
                        return e
                    } : We(e),
                    d = E(r, a, i ? 2 : 1),
                    p = 0;
                if ("function" != typeof h) throw TypeError(e + " is not iterable!");
                if (Ce(h)) {
                    for (l = D(e.length); l > p; p++)
                        if ((f = i ? d(o(c = e[p])[0], c[1]) : d(e[p])) === t || f === n) return f
                } else
                    for (u = h.call(e); !(c = u.next()).done;)
                        if ((f = pt(u, d, c.value, i)) === t || f === n) return f
            };
        i.BREAK = t, i.RETURN = n
    }),
    mt = t(function(e) {
        var t = k("meta"),
            n = p.f,
            i = 0,
            o = Object.isExtensible || function() {
                return !0
            },
            s = !a(function() {
                return o(Object.preventExtensions({}))
            }),
            l = function(e) {
                n(e, t, {
                    value: {
                        i: "O" + ++i,
                        w: {}
                    }
                })
            },
            c = e.exports = {
                KEY: t,
                NEED: !1,
                fastKey: function(e, n) {
                    if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!v(e, t)) {
                        if (!o(e)) return "F";
                        if (!n) return "E";
                        l(e)
                    }
                    return e[t].i
                },
                getWeak: function(e, n) {
                    if (!v(e, t)) {
                        if (!o(e)) return !0;
                        if (!n) return !1;
                        l(e)
                    }
                    return e[t].w
                },
                onFreeze: function(e) {
                    return s && c.NEED && o(e) && !v(e, t) && l(e), e
                }
            }
    }),
    yt = (mt.KEY, mt.NEED, mt.fastKey, mt.getWeak, mt.onFreeze, function(e, t) {
        if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }),
    vt = p.f,
    bt = mt.fastKey,
    wt = s ? "_s" : "size",
    kt = function(e, t) {
        var n, i = bt(t);
        if ("F" !== i) return e._i[i];
        for (n = e._f; n; n = n.n)
            if (n.k == t) return n
    },
    Tt = {
        getConstructor: function(e, t, n, i) {
            var r = e(function(e, o) {
                F(e, r, t, "_i"), e._t = t, e._i = Be(null), e._f = void 0, e._l = void 0, e[wt] = 0, null != o && gt(o, n, e[i], e)
            });
            return I(r.prototype, {
                clear: function() {
                    for (var e = yt(this, t), n = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    e._f = e._l = void 0, e[wt] = 0
                },
                delete: function(e) {
                    var n = yt(this, t),
                        i = kt(n, e);
                    if (i) {
                        var r = i.n,
                            o = i.p;
                        delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[wt]--
                    }
                    return !!i
                },
                forEach: function(e) {
                    yt(this, t);
                    for (var n, i = E(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (i(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                    return !!kt(yt(this, t), e)
                }
            }), s && vt(r.prototype, "size", {
                get: function() {
                    return yt(this, t)[wt]
                }
            }), r
        },
        def: function(e, t, n) {
            var i, r, o = kt(e, t);
            return o ? o.v = n : (e._l = o = {
                i: r = bt(t, !0),
                k: t,
                v: n,
                p: i = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = o), i && (i.n = o), e[wt]++, "F" !== r && (e._i[r] = o)), e
        },
        getEntry: kt,
        setStrong: function(e, t, n) {
            rt(e, t, function(e, n) {
                this._t = yt(e, t), this._k = n, this._l = void 0
            }, function() {
                for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? Xe(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Xe(1))
            }, n ? "entries" : "values", !n, !0), ve(t)
        }
    },
    St = function(e, t) {
        if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    },
    Et = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
            try {
                (n = E(Function.call, ht.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, i) {
                return St(e, i), t ? e.__proto__ = i : n(e, i), e
            }
        }({}, !1) : void 0),
        check: St
    },
    _t = Et.set,
    At = function(e, t, i, o, s, l) {
        var c = n[e],
            u = c,
            f = s ? "set" : "add",
            h = u && u.prototype,
            d = {},
            p = function(e) {
                var t = h[e];
                T(h, e, "delete" == e ? function(e) {
                    return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function(e) {
                    return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function(e) {
                    return l && !r(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : function(e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if ("function" == typeof u && (l || h.forEach && !a(function() {
                (new u).entries().next()
            }))) {
            var g = new u,
                m = g[f](l ? {} : -0, 1) != g,
                y = a(function() {
                    g.has(1)
                }),
                v = lt(function(e) {
                    new u(e)
                }),
                b = !l && a(function() {
                    for (var e = new u, t = 5; t--;) e[f](t, t);
                    return !e.has(-0)
                });
            v || ((u = t(function(t, n) {
                F(t, u, e);
                var i = function(e, t, n) {
                    var i, o = t.constructor;
                    return o !== n && "function" == typeof o && (i = o.prototype) !== n.prototype && r(i) && _t && _t(e, i), e
                }(new c, t, u);
                return null != n && gt(n, s, i[f], i), i
            })).prototype = h, h.constructor = u), (y || b) && (p("delete"), p("has"), s && p("get")), (b || m) && p(f), l && h.clear && delete h.clear
        } else u = o.getConstructor(t, e, s, f), I(u.prototype, i), mt.NEED = !0;
        return de(u, e), d[e] = u, P(P.G + P.W + P.F * (u != c), d), l || o.setStrong(u, e, s), u
    },
    Pt = (At("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = Tt.getEntry(yt(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return Tt.def(yt(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, Tt, !0), At("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return Tt.def(yt(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, Tt), {
        f: Object.getOwnPropertySymbols
    }),
    Mt = Object.assign,
    Lt = !Mt || a(function() {
        var e = {},
            t = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return e[n] = 7, i.split("").forEach(function(e) {
            t[e] = e
        }), 7 != Mt({}, e)[n] || Object.keys(Mt({}, t)).join("") != i
    }) ? function(e, t) {
        for (var n = le(e), i = arguments.length, r = 1, o = Pt.f, a = ut.f; i > r;)
            for (var s, l = z(arguments[r++]), c = o ? Oe(l).concat(o(l)) : Oe(l), u = c.length, f = 0; u > f;) a.call(l, s = c[f++]) && (n[s] = l[s]);
        return n
    } : Mt,
    xt = mt.getWeak,
    Ct = Ye(5),
    Ot = Ye(6),
    Nt = 0,
    jt = function(e) {
        return e._l || (e._l = new It)
    },
    It = function() {
        this.a = []
    },
    Ft = function(e, t) {
        return Ct(e.a, function(e) {
            return e[0] === t
        })
    };
It.prototype = {
    get: function(e) {
        var t = Ft(this, e);
        if (t) return t[1]
    },
    has: function(e) {
        return !!Ft(this, e)
    },
    set: function(e, t) {
        var n = Ft(this, e);
        n ? n[1] = t : this.a.push([e, t])
    },
    delete: function(e) {
        var t = Ot(this.a, function(t) {
            return t[0] === e
        });
        return ~t && this.a.splice(t, 1), !!~t
    }
};
var Rt = {
    getConstructor: function(e, t, n, i) {
        var o = e(function(e, r) {
            F(e, o, t, "_i"), e._t = t, e._i = Nt++, e._l = void 0, null != r && gt(r, n, e[i], e)
        });
        return I(o.prototype, {
            delete: function(e) {
                if (!r(e)) return !1;
                var n = xt(e);
                return !0 === n ? jt(yt(this, t)).delete(e) : n && v(n, this._i) && delete n[this._i]
            },
            has: function(e) {
                if (!r(e)) return !1;
                var n = xt(e);
                return !0 === n ? jt(yt(this, t)).has(e) : n && v(n, this._i)
            }
        }), o
    },
    def: function(e, t, n) {
        var i = xt(o(t), !0);
        return !0 === i ? jt(e).set(t, n) : i[e._i] = n, e
    },
    ufstore: jt
};
t(function(e) {
    var t, n = Ye(0),
        i = mt.getWeak,
        o = Object.isExtensible,
        s = Rt.ufstore,
        l = {},
        c = function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        u = {
            get: function(e) {
                if (r(e)) {
                    var t = i(e);
                    return !0 === t ? s(yt(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                }
            },
            set: function(e, t) {
                return Rt.def(yt(this, "WeakMap"), e, t)
            }
        },
        f = e.exports = At("WeakMap", c, u, Rt, !0, !0);
    a(function() {
        return 7 != (new f).set((Object.freeze || Object)(l), 7).get(l)
    }) && (t = Rt.getConstructor(c, "WeakMap"), Lt(t.prototype, u), mt.NEED = !0, n(["delete", "has", "get", "set"], function(e) {
        var n = f.prototype,
            i = n[e];
        T(n, e, function(n, a) {
            if (r(n) && !o(n)) {
                this._f || (this._f = new t);
                var s = this._f[e](n, a);
                return "set" == e ? this : s
            }
            return i.call(this, n, a)
        })
    }))
});
At("WeakSet", function(e) {
    return function() {
        return e(this, arguments.length > 0 ? arguments[0] : void 0)
    }
}, {
    add: function(e) {
        return Rt.def(yt(this, "WeakSet"), e, !0)
    }
}, Rt, !1, !0);
var qt = (n.Reflect || {}).apply,
    Bt = Function.apply;
P(P.S + P.F * !a(function() {
    qt(function() {})
}), "Reflect", {
    apply: function(e, t, n) {
        var i = S(e),
            r = o(n);
        return qt ? qt(i, t, r) : Bt.call(i, t, r)
    }
});
var Vt = function(e, t, n) {
        var i = void 0 === n;
        switch (t.length) {
            case 0:
                return i ? e() : e.call(n);
            case 1:
                return i ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    },
    Dt = [].slice,
    Ut = {},
    Ht = Function.bind || function(e) {
        var t = S(this),
            n = Dt.call(arguments, 1),
            i = function() {
                var r = n.concat(Dt.call(arguments));
                return this instanceof i ? function(e, t, n) {
                    if (!(t in Ut)) {
                        for (var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
                        Ut[t] = Function("F,a", "return new F(" + i.join(",") + ")")
                    }
                    return Ut[t](e, n)
                }(t, r.length, r) : Vt(t, r, e)
            };
        return r(t.prototype) && (i.prototype = t.prototype), i
    },
    Wt = (n.Reflect || {}).construct,
    zt = a(function() {
        function e() {}
        return !(Wt(function() {}, [], e) instanceof e)
    }),
    Gt = !a(function() {
        Wt(function() {})
    });
P(P.S + P.F * (zt || Gt), "Reflect", {
    construct: function(e, t) {
        S(e), o(t);
        var n = arguments.length < 3 ? e : S(arguments[2]);
        if (Gt && !zt) return Wt(e, t, n);
        if (e == n) {
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3])
            }
            var i = [null];
            return i.push.apply(i, t), new(Ht.apply(e, i))
        }
        var a = n.prototype,
            s = Be(r(a) ? a : Object.prototype),
            l = Function.apply.call(e, s, t);
        return r(l) ? l : s
    }
}), P(P.S + P.F * a(function() {
    Reflect.defineProperty(p.f({}, 1, {
        value: 1
    }), 1, {
        value: 2
    })
}), "Reflect", {
    defineProperty: function(e, t, n) {
        o(e), t = h(t, !0), o(n);
        try {
            return p.f(e, t, n), !0
        } catch (e) {
            return !1
        }
    }
});
var Kt = ht.f;
P(P.S, "Reflect", {
    deleteProperty: function(e, t) {
        var n = Kt(o(e), t);
        return !(n && !n.configurable) && delete e[t]
    }
}), P(P.S, "Reflect", {
    get: function e(t, n) {
        var i, a, s = arguments.length < 3 ? t : arguments[2];
        return o(t) === s ? t[n] : (i = ht.f(t, n)) ? v(i, "value") ? i.value : void 0 !== i.get ? i.get.call(s) : void 0 : r(a = Ue(t)) ? e(a, n, s) : void 0
    }
}), P(P.S, "Reflect", {
    getOwnPropertyDescriptor: function(e, t) {
        return ht.f(o(e), t)
    }
}), P(P.S, "Reflect", {
    getPrototypeOf: function(e) {
        return Ue(o(e))
    }
}), P(P.S, "Reflect", {
    has: function(e, t) {
        return t in e
    }
});
var Yt = Object.isExtensible;
P(P.S, "Reflect", {
    isExtensible: function(e) {
        return o(e), !Yt || Yt(e)
    }
});
var Qt = n.Reflect,
    Jt = Qt && Qt.ownKeys || function(e) {
        var t = se.f(o(e)),
            n = Pt.f;
        return n ? t.concat(n(e)) : t
    };
P(P.S, "Reflect", {
    ownKeys: Jt
});
var $t = Object.preventExtensions;
P(P.S, "Reflect", {
    preventExtensions: function(e) {
        o(e);
        try {
            return $t && $t(e), !0
        } catch (e) {
            return !1
        }
    }
}), P(P.S, "Reflect", {
    set: function e(t, n, i) {
        var a, s, l = arguments.length < 4 ? t : arguments[3],
            c = ht.f(o(t), n);
        if (!c) {
            if (r(s = Ue(t))) return e(s, n, i, l);
            c = g(0)
        }
        return v(c, "value") ? !(!1 === c.writable || !r(l) || ((a = ht.f(l, n) || g(0)).value = i, p.f(l, n, a), 0)) : void 0 !== c.set && (c.set.call(l, i), !0)
    }
}), Et && P(P.S, "Reflect", {
    setPrototypeOf: function(e, t) {
        Et.check(e, t);
        try {
            return Et.set(e, t), !0
        } catch (e) {
            return !1
        }
    }
});
var Xt, Zt, en, tn = n.process,
    nn = n.setImmediate,
    rn = n.clearImmediate,
    on = n.MessageChannel,
    an = n.Dispatch,
    sn = 0,
    ln = {},
    cn = function() {
        var e = +this;
        if (ln.hasOwnProperty(e)) {
            var t = ln[e];
            delete ln[e], t()
        }
    },
    un = function(e) {
        cn.call(e.data)
    };
nn && rn || (nn = function(e) {
    for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
    return ln[++sn] = function() {
        Vt("function" == typeof e ? e : Function(e), t)
    }, Xt(sn), sn
}, rn = function(e) {
    delete ln[e]
}, "process" == W(tn) ? Xt = function(e) {
    tn.nextTick(E(cn, e, 1))
} : an && an.now ? Xt = function(e) {
    an.now(E(cn, e, 1))
} : on ? (en = (Zt = new on).port2, Zt.port1.onmessage = un, Xt = E(en.postMessage, en, 1)) : n.addEventListener && "function" == typeof postMessage && !n.importScripts ? (Xt = function(e) {
    n.postMessage(e + "", "*")
}, n.addEventListener("message", un, !1)) : Xt = "onreadystatechange" in u("script") ? function(e) {
    Ie.appendChild(u("script")).onreadystatechange = function() {
        Ie.removeChild(this), cn.call(e)
    }
} : function(e) {
    setTimeout(E(cn, e, 1), 0)
});
var fn = {
        set: nn,
        clear: rn
    },
    hn = fn.set,
    dn = n.MutationObserver || n.WebKitMutationObserver,
    pn = n.process,
    gn = n.Promise,
    mn = "process" == W(pn);

function yn(e) {
    var t, n;
    this.promise = new e(function(e, i) {
        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
        t = e, n = i
    }), this.resolve = S(t), this.reject = S(n)
}
var vn, bn, wn, kn, Tn = {
        f: function(e) {
            return new yn(e)
        }
    },
    Sn = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    },
    En = fn.set,
    _n = function() {
        var e, t, i, r = function() {
            var n, r;
            for (mn && (n = pn.domain) && n.exit(); e;) {
                r = e.fn, e = e.next;
                try {
                    r()
                } catch (n) {
                    throw e ? i() : t = void 0, n
                }
            }
            t = void 0, n && n.enter()
        };
        if (mn) i = function() {
            pn.nextTick(r)
        };
        else if (!dn || n.navigator && n.navigator.standalone)
            if (gn && gn.resolve) {
                var o = gn.resolve();
                i = function() {
                    o.then(r)
                }
            } else i = function() {
                hn.call(n, r)
            };
        else {
            var a = !0,
                s = document.createTextNode("");
            new dn(r).observe(s, {
                characterData: !0
            }), i = function() {
                s.data = a = !a
            }
        }
        return function(n) {
            var r = {
                fn: n,
                next: void 0
            };
            t && (t.next = r), e || (e = r, i()), t = r
        }
    }(),
    An = n.TypeError,
    Pn = n.process,
    Mn = n.Promise,
    Ln = "process" == Pe(Pn),
    xn = function() {},
    Cn = bn = Tn.f,
    On = !! function() {
        try {
            var e = Mn.resolve(1),
                t = (e.constructor = {})[ue("species")] = function(e) {
                    e(xn, xn)
                };
            return (Ln || "function" == typeof PromiseRejectionEvent) && e.then(xn) instanceof t
        } catch (e) {}
    }(),
    Nn = function(e) {
        var t;
        return !(!r(e) || "function" != typeof(t = e.then)) && t
    },
    jn = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            _n(function() {
                for (var i = e._v, r = 1 == e._s, o = 0, a = function(t) {
                        var n, o, a = r ? t.ok : t.fail,
                            s = t.resolve,
                            l = t.reject,
                            c = t.domain;
                        try {
                            a ? (r || (2 == e._h && Rn(e), e._h = 1), !0 === a ? n = i : (c && c.enter(), n = a(i), c && c.exit()), n === t.promise ? l(An("Promise-chain cycle")) : (o = Nn(n)) ? o.call(n, s, l) : s(n)) : l(i)
                        } catch (e) {
                            l(e)
                        }
                    }; n.length > o;) a(n[o++]);
                e._c = [], e._n = !1, t && !e._h && In(e)
            })
        }
    },
    In = function(e) {
        En.call(n, function() {
            var t, i, r, o = e._v,
                a = Fn(e);
            if (a && (t = Sn(function() {
                    Ln ? Pn.emit("unhandledRejection", o, e) : (i = n.onunhandledrejection) ? i({
                        promise: e,
                        reason: o
                    }) : (r = n.console) && r.error && r.error("Unhandled promise rejection", o)
                }), e._h = Ln || Fn(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
        })
    },
    Fn = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    },
    Rn = function(e) {
        En.call(n, function() {
            var t;
            Ln ? Pn.emit("rejectionHandled", e) : (t = n.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        })
    },
    qn = function(e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), jn(t, !0))
    },
    Bn = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === e) throw An("Promise can't be resolved itself");
                (t = Nn(e)) ? _n(function() {
                    var i = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, E(Bn, i, 1), E(qn, i, 1))
                    } catch (e) {
                        qn.call(i, e)
                    }
                }): (n._v = e, n._s = 1, jn(n, !1))
            } catch (e) {
                qn.call({
                    _w: n,
                    _d: !1
                }, e)
            }
        }
    };
On || (Mn = function(e) {
    F(this, Mn, "Promise", "_h"), S(e), vn.call(this);
    try {
        e(E(Bn, this, 1), E(qn, this, 1))
    } catch (e) {
        qn.call(this, e)
    }
}, (vn = function(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
}).prototype = I(Mn.prototype, {
    then: function(e, t) {
        var n = Cn(me(this, Mn));
        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Ln ? Pn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && jn(this, !1), n.promise
    },
    catch: function(e) {
        return this.then(void 0, e)
    }
}), wn = function() {
    var e = new vn;
    this.promise = e, this.resolve = E(Bn, e, 1), this.reject = E(qn, e, 1)
}, Tn.f = Cn = function(e) {
    return e === Mn || e === kn ? new wn(e) : bn(e)
}), P(P.G + P.W + P.F * !On, {
    Promise: Mn
}), de(Mn, "Promise"), ve("Promise"), kn = i.Promise, P(P.S + P.F * !On, "Promise", {
    reject: function(e) {
        var t = Cn(this);
        return (0, t.reject)(e), t.promise
    }
}), P(P.S + P.F * !On, "Promise", {
    resolve: function(e) {
        return function(e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = Tn.f(e);
            return (0, n.resolve)(t), n.promise
        }(this, e)
    }
}), P(P.S + P.F * !(On && lt(function(e) {
    Mn.all(e).catch(xn)
})), "Promise", {
    all: function(e) {
        var t = this,
            n = Cn(t),
            i = n.resolve,
            r = n.reject,
            o = Sn(function() {
                var n = [],
                    o = 0,
                    a = 1;
                gt(e, !1, function(e) {
                    var s = o++,
                        l = !1;
                    n.push(void 0), a++, t.resolve(e).then(function(e) {
                        l || (l = !0, n[s] = e, --a || i(n))
                    }, r)
                }), --a || i(n)
            });
        return o.e && r(o.v), n.promise
    },
    race: function(e) {
        var t = this,
            n = Cn(t),
            i = n.reject,
            r = Sn(function() {
                gt(e, !1, function(e) {
                    t.resolve(e).then(n.resolve, i)
                })
            });
        return r.e && i(r.v), n.promise
    }
});
var Vn = {
        f: ue
    },
    Dn = p.f,
    Un = function(e) {
        var t = i.Symbol || (i.Symbol = n.Symbol || {});
        "_" == e.charAt(0) || e in t || Dn(t, e, {
            value: Vn.f(e)
        })
    },
    Hn = se.f,
    Wn = {}.toString,
    zn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Gn = {
        f: function(e) {
            return zn && "[object Window]" == Wn.call(e) ? function(e) {
                try {
                    return Hn(e)
                } catch (e) {
                    return zn.slice()
                }
            }(e) : Hn(K(e))
        }
    },
    Kn = mt.KEY,
    Yn = ht.f,
    Qn = p.f,
    Jn = Gn.f,
    $n = n.Symbol,
    Xn = n.JSON,
    Zn = Xn && Xn.stringify,
    ei = ue("_hidden"),
    ti = ue("toPrimitive"),
    ni = {}.propertyIsEnumerable,
    ii = Z("symbol-registry"),
    ri = Z("symbols"),
    oi = Z("op-symbols"),
    ai = Object.prototype,
    si = "function" == typeof $n,
    li = n.QObject,
    ci = !li || !li.prototype || !li.prototype.findChild,
    ui = s && a(function() {
        return 7 != Be(Qn({}, "a", {
            get: function() {
                return Qn(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(e, t, n) {
        var i = Yn(ai, t);
        i && delete ai[t], Qn(e, t, n), i && e !== ai && Qn(ai, t, i)
    } : Qn,
    fi = function(e) {
        var t = ri[e] = Be($n.prototype);
        return t._k = e, t
    },
    hi = si && "symbol" == typeof $n.iterator ? function(e) {
        return "symbol" == typeof e
    } : function(e) {
        return e instanceof $n
    },
    di = function(e, t, n) {
        return e === ai && di(oi, t, n), o(e), t = h(t, !0), o(n), v(ri, t) ? (n.enumerable ? (v(e, ei) && e[ei][t] && (e[ei][t] = !1), n = Be(n, {
            enumerable: g(0, !1)
        })) : (v(e, ei) || Qn(e, ei, g(1, {})), e[ei][t] = !0), ui(e, t, n)) : Qn(e, t, n)
    },
    pi = function(e, t) {
        o(e);
        for (var n, i = function(e) {
                var t = Oe(e),
                    n = Pt.f;
                if (n)
                    for (var i, r = n(e), o = ut.f, a = 0; r.length > a;) o.call(e, i = r[a++]) && t.push(i);
                return t
            }(t = K(t)), r = 0, a = i.length; a > r;) di(e, n = i[r++], t[n]);
        return e
    },
    gi = function(e) {
        var t = ni.call(this, e = h(e, !0));
        return !(this === ai && v(ri, e) && !v(oi, e)) && (!(t || !v(this, e) || !v(ri, e) || v(this, ei) && this[ei][e]) || t)
    },
    mi = function(e, t) {
        if (e = K(e), t = h(t, !0), e !== ai || !v(ri, t) || v(oi, t)) {
            var n = Yn(e, t);
            return !n || !v(ri, t) || v(e, ei) && e[ei][t] || (n.enumerable = !0), n
        }
    },
    yi = function(e) {
        for (var t, n = Jn(K(e)), i = [], r = 0; n.length > r;) v(ri, t = n[r++]) || t == ei || t == Kn || i.push(t);
        return i
    },
    vi = function(e) {
        for (var t, n = e === ai, i = Jn(n ? oi : K(e)), r = [], o = 0; i.length > o;) !v(ri, t = i[o++]) || n && !v(ai, t) || r.push(ri[t]);
        return r
    };
si || (T(($n = function() {
    if (this instanceof $n) throw TypeError("Symbol is not a constructor!");
    var e = k(arguments.length > 0 ? arguments[0] : void 0),
        t = function(n) {
            this === ai && t.call(oi, n), v(this, ei) && v(this[ei], e) && (this[ei][e] = !1), ui(this, e, g(1, n))
        };
    return s && ci && ui(ai, e, {
        configurable: !0,
        set: t
    }), fi(e)
}).prototype, "toString", function() {
    return this._k
}), ht.f = mi, p.f = di, se.f = Gn.f = yi, ut.f = gi, Pt.f = vi, s && T(ai, "propertyIsEnumerable", gi, !0), Vn.f = function(e) {
    return fi(ue(e))
}), P(P.G + P.W + P.F * !si, {
    Symbol: $n
});
for (var bi = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), wi = 0; bi.length > wi;) ue(bi[wi++]);
for (var ki = Oe(ue.store), Ti = 0; ki.length > Ti;) Un(ki[Ti++]);
P(P.S + P.F * !si, "Symbol", {
    for: function(e) {
        return v(ii, e += "") ? ii[e] : ii[e] = $n(e)
    },
    keyFor: function(e) {
        if (!hi(e)) throw TypeError(e + " is not a symbol!");
        for (var t in ii)
            if (ii[t] === e) return t
    },
    useSetter: function() {
        ci = !0
    },
    useSimple: function() {
        ci = !1
    }
}), P(P.S + P.F * !si, "Object", {
    create: function(e, t) {
        return void 0 === t ? Be(e) : pi(Be(e), t)
    },
    defineProperty: di,
    defineProperties: pi,
    getOwnPropertyDescriptor: mi,
    getOwnPropertyNames: yi,
    getOwnPropertySymbols: vi
}), Xn && P(P.S + P.F * (!si || a(function() {
    var e = $n();
    return "[null]" != Zn([e]) || "{}" != Zn({
        a: e
    }) || "{}" != Zn(Object(e))
})), "JSON", {
    stringify: function(e) {
        for (var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
        if (n = t = i[1], (r(t) || void 0 !== e) && !hi(e)) return ze(t) || (t = function(e, t) {
            if ("function" == typeof n && (t = n.call(this, e, t)), !hi(t)) return t
        }), i[1] = t, Zn.apply(Xn, i)
    }
}), $n.prototype[ti] || m($n.prototype, ti, $n.prototype.valueOf), de($n, "Symbol"), de(Math, "Math", !0), de(n.JSON, "JSON", !0);
var Si = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            r = {};
        r[e] = t(n), P(P.S + P.F * a(function() {
            n(1)
        }), "Object", r)
    },
    Ei = mt.onFreeze;
Si("freeze", function(e) {
    return function(t) {
        return e && r(t) ? e(Ei(t)) : t
    }
});
var _i = mt.onFreeze;
Si("seal", function(e) {
    return function(t) {
        return e && r(t) ? e(_i(t)) : t
    }
});
var Ai = mt.onFreeze;
Si("preventExtensions", function(e) {
    return function(t) {
        return e && r(t) ? e(Ai(t)) : t
    }
}), Si("isFrozen", function(e) {
    return function(t) {
        return !r(t) || !!e && e(t)
    }
}), Si("isSealed", function(e) {
    return function(t) {
        return !r(t) || !!e && e(t)
    }
}), Si("isExtensible", function(e) {
    return function(t) {
        return !!r(t) && (!e || e(t))
    }
});
var Pi = ht.f;
Si("getOwnPropertyDescriptor", function() {
    return function(e, t) {
        return Pi(K(e), t)
    }
}), Si("getPrototypeOf", function() {
    return function(e) {
        return Ue(le(e))
    }
}), Si("keys", function() {
    return function(e) {
        return Oe(le(e))
    }
}), Si("getOwnPropertyNames", function() {
    return Gn.f
}), P(P.S + P.F, "Object", {
    assign: Lt
});
var Mi = Object.is || function(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
};
P(P.S, "Object", {
    is: Mi
});
var Li = p.f,
    xi = Function.prototype,
    Ci = /^\s*function ([^ (]*)/;
"name" in xi || s && Li(xi, "name", {
    configurable: !0,
    get: function() {
        try {
            return ("" + this).match(Ci)[1]
        } catch (e) {
            return ""
        }
    }
}), P(P.S, "String", {
    raw: function(e) {
        for (var t = K(e.raw), n = D(t.length), i = arguments.length, r = [], o = 0; n > o;) r.push(String(t[o++])), o < i && r.push(String(arguments[o]));
        return r.join("")
    }
});
var Oi = String.fromCharCode,
    Ni = String.fromCodePoint;
P(P.S + P.F * (!!Ni && 1 != Ni.length), "String", {
    fromCodePoint: function(e) {
        for (var t, n = [], i = arguments.length, r = 0; i > r;) {
            if (t = +arguments[r++], J(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
            n.push(t < 65536 ? Oi(t) : Oi(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
        }
        return n.join("")
    }
});
var ji, Ii = (ji = !1, function(e, t) {
    var n, i, r = String(G(e)),
        o = B(t),
        a = r.length;
    return o < 0 || o >= a ? ji ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === a || (i = r.charCodeAt(o + 1)) < 56320 || i > 57343 ? ji ? r.charAt(o) : n : ji ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
});
P(P.P, "String", {
    codePointAt: function(e) {
        return Ii(this, e)
    }
});
var Fi = function(e) {
    var t = String(G(this)),
        n = "",
        i = B(e);
    if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
    for (; i > 0;
        (i >>>= 1) && (t += t)) 1 & i && (n += t);
    return n
};
P(P.P, "String", {
    repeat: Fi
});
var Ri = ue("match"),
    qi = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[Ri]) ? !!t : "RegExp" == W(e))
    },
    Bi = function(e, t, n) {
        if (qi(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(G(e))
    },
    Vi = ue("match"),
    Di = function(e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (n) {
            try {
                return t[Vi] = !1, !"/./" [e](t)
            } catch (e) {}
        }
        return !0
    },
    Ui = "".startsWith;
P(P.P + P.F * Di("startsWith"), "String", {
    startsWith: function(e) {
        var t = Bi(this, e, "startsWith"),
            n = D(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
            i = String(e);
        return Ui ? Ui.call(t, i, n) : t.slice(n, n + i.length) === i
    }
});
var Hi = "".endsWith;
P(P.P + P.F * Di("endsWith"), "String", {
    endsWith: function(e) {
        var t = Bi(this, e, "endsWith"),
            n = arguments.length > 1 ? arguments[1] : void 0,
            i = D(t.length),
            r = void 0 === n ? i : Math.min(D(n), i),
            o = String(e);
        return Hi ? Hi.call(t, o, r) : t.slice(r - o.length, r) === o
    }
});
P(P.P + P.F * Di("includes"), "String", {
    includes: function(e) {
        return !!~Bi(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
    }
});
s && "g" != /./g.flags && p.f(RegExp.prototype, "flags", {
    configurable: !0,
    get: function() {
        var e = o(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
});
var Wi = function(e, t, n) {
    var i = ue(e),
        r = n(G, i, "" [e]),
        o = r[0],
        s = r[1];
    a(function() {
        var t = {};
        return t[i] = function() {
            return 7
        }, 7 != "" [e](t)
    }) && (T(String.prototype, e, o), m(RegExp.prototype, i, 2 == t ? function(e, t) {
        return s.call(e, this, t)
    } : function(e) {
        return s.call(e, this)
    }))
};
Wi("match", 1, function(e, t, n) {
    return [function(n) {
        var i = e(this),
            r = null == n ? void 0 : n[t];
        return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
    }, n]
}), Wi("replace", 2, function(e, t, n) {
    return [function(i, r) {
        var o = e(this),
            a = null == i ? void 0 : i[t];
        return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
    }, n]
}), Wi("split", 2, function(e, t, n) {
    var i = qi,
        r = n,
        o = [].push;
    if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
        var a = void 0 === /()??/.exec("")[1];
        n = function(e, t) {
            var n = String(this);
            if (void 0 === e && 0 === t) return [];
            if (!i(e)) return r.call(n, e, t);
            var s, l, c, u, f, h = [],
                d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                p = 0,
                g = void 0 === t ? 4294967295 : t >>> 0,
                m = new RegExp(e.source, d + "g");
            for (a || (s = new RegExp("^" + m.source + "$(?!\\s)", d));
                (l = m.exec(n)) && !((c = l.index + l[0].length) > p && (h.push(n.slice(p, l.index)), !a && l.length > 1 && l[0].replace(s, function() {
                    for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (l[f] = void 0)
                }), l.length > 1 && l.index < n.length && o.apply(h, l.slice(1)), u = l[0].length, p = c, h.length >= g));) m.lastIndex === l.index && m.lastIndex++;
            return p === n.length ? !u && m.test("") || h.push("") : h.push(n.slice(p)), h.length > g ? h.slice(0, g) : h
        }
    } else "0".split(void 0, 0).length && (n = function(e, t) {
        return void 0 === e && 0 === t ? [] : r.call(this, e, t)
    });
    return [function(i, r) {
        var o = e(this),
            a = null == i ? void 0 : i[t];
        return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
    }, n]
}), Wi("search", 1, function(e, t, n) {
    return [function(n) {
        var i = e(this),
            r = null == n ? void 0 : n[t];
        return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
    }, n]
});
var zi = function(e, t, n) {
    t in e ? p.f(e, t, g(0, n)) : e[t] = n
};
P(P.S + P.F * !lt(function(e) {}), "Array", {
    from: function(e) {
        var t, n, i, r, o = le(e),
            a = "function" == typeof this ? this : Array,
            s = arguments.length,
            l = s > 1 ? arguments[1] : void 0,
            c = void 0 !== l,
            u = 0,
            f = We(o);
        if (c && (l = E(l, s > 2 ? arguments[2] : void 0, 2)), null == f || a == Array && Ce(f))
            for (n = new a(t = D(o.length)); t > u; u++) zi(n, u, c ? l(o[u], u) : o[u]);
        else
            for (r = f.call(o), n = new a; !(i = r.next()).done; u++) zi(n, u, c ? pt(r, l, [i.value, u], !0) : i.value);
        return n.length = u, n
    }
}), P(P.S + P.F * a(function() {
    function e() {}
    return !(Array.of.call(e) instanceof e)
}), "Array", {
    of: function() {
        for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) zi(n, e, arguments[e++]);
        return n.length = t, n
    }
}), P(P.P, "Array", {
    copyWithin: ct
}), $e("copyWithin");
var Gi = Ye(5),
    Ki = !0;
"find" in [] && Array(1).find(function() {
    Ki = !1
}), P(P.P + P.F * Ki, "Array", {
    find: function(e) {
        return Gi(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}), $e("find");
var Yi = Ye(6),
    Qi = !0;
"findIndex" in [] && Array(1).findIndex(function() {
    Qi = !1
}), P(P.P + P.F * Qi, "Array", {
    findIndex: function(e) {
        return Yi(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}), $e("findIndex"), P(P.P, "Array", {
    fill: ce
}), $e("fill");
var Ji = n.isFinite;
P(P.S, "Number", {
    isFinite: function(e) {
        return "number" == typeof e && Ji(e)
    }
});
var $i = Math.floor,
    Xi = function(e) {
        return !r(e) && isFinite(e) && $i(e) === e
    };
P(P.S, "Number", {
    isInteger: Xi
});
var Zi = Math.abs;
P(P.S, "Number", {
    isSafeInteger: function(e) {
        return Xi(e) && Zi(e) <= 9007199254740991
    }
}), P(P.S, "Number", {
    isNaN: function(e) {
        return e != e
    }
}), P(P.S, "Number", {
    EPSILON: Math.pow(2, -52)
}), P(P.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
}), P(P.S, "Number", {
    MAX_SAFE_INTEGER: 9007199254740991
});
var er = Math.log1p || function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
    },
    tr = Math.sqrt,
    nr = Math.acosh;
P(P.S + P.F * !(nr && 710 == Math.floor(nr(Number.MAX_VALUE)) && nr(1 / 0) == 1 / 0), "Math", {
    acosh: function(e) {
        return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : er(e - 1 + tr(e - 1) * tr(e + 1))
    }
});
var ir = Math.asinh;
P(P.S + P.F * !(ir && 1 / ir(0) > 0), "Math", {
    asinh: function e(t) {
        return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
    }
});
var rr = Math.atanh;
P(P.S + P.F * !(rr && 1 / rr(-0) < 0), "Math", {
    atanh: function(e) {
        return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
    }
});
var or = Math.sign || function(e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
};
P(P.S, "Math", {
    cbrt: function(e) {
        return or(e = +e) * Math.pow(Math.abs(e), 1 / 3)
    }
}), P(P.S, "Math", {
    clz32: function(e) {
        return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
    }
});
var ar = Math.exp;
P(P.S, "Math", {
    cosh: function(e) {
        return (ar(e = +e) + ar(-e)) / 2
    }
});
var sr = Math.expm1,
    lr = !sr || sr(10) > 22025.465794806718 || sr(10) < 22025.465794806718 || -2e-17 != sr(-2e-17) ? function(e) {
        return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
    } : sr;
P(P.S + P.F * (lr != Math.expm1), "Math", {
    expm1: lr
});
var cr = Math.pow,
    ur = cr(2, -52),
    fr = cr(2, -23),
    hr = cr(2, 127) * (2 - fr),
    dr = cr(2, -126),
    pr = Math.fround || function(e) {
        var t, n, i = Math.abs(e),
            r = or(e);
        return i < dr ? r * (i / dr / fr + 1 / ur - 1 / ur) * dr * fr : (n = (t = (1 + fr / ur) * i) - (t - i)) > hr || n != n ? r * (1 / 0) : r * n
    };
P(P.S, "Math", {
    fround: pr
});
var gr = Math.abs;
P(P.S, "Math", {
    hypot: function(e, t) {
        for (var n, i, r = 0, o = 0, a = arguments.length, s = 0; o < a;) s < (n = gr(arguments[o++])) ? (r = r * (i = s / n) * i + 1, s = n) : r += n > 0 ? (i = n / s) * i : n;
        return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r)
    }
});
var mr = Math.imul;
P(P.S + P.F * a(function() {
    return -5 != mr(4294967295, 5) || 2 != mr.length
}), "Math", {
    imul: function(e, t) {
        var n = +e,
            i = +t,
            r = 65535 & n,
            o = 65535 & i;
        return 0 | r * o + ((65535 & n >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0)
    }
}), P(P.S, "Math", {
    log1p: er
}), P(P.S, "Math", {
    log10: function(e) {
        return Math.log(e) * Math.LOG10E
    }
}), P(P.S, "Math", {
    log2: function(e) {
        return Math.log(e) / Math.LN2
    }
}), P(P.S, "Math", {
    sign: or
});
var yr = Math.exp;
P(P.S + P.F * a(function() {
    return -2e-17 != !Math.sinh(-2e-17)
}), "Math", {
    sinh: function(e) {
        return Math.abs(e = +e) < 1 ? (lr(e) - lr(-e)) / 2 : (yr(e - 1) - yr(-e - 1)) * (Math.E / 2)
    }
});
var vr = Math.exp;
P(P.S, "Math", {
    tanh: function(e) {
        var t = lr(e = +e),
            n = lr(-e);
        return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (vr(e) + vr(-e))
    }
}), P(P.S, "Math", {
    trunc: function(e) {
        return (e > 0 ? Math.floor : Math.ceil)(e)
    }
});
var br = $(!0);
P(P.P, "Array", {
    includes: function(e) {
        return br(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
}), $e("includes");
var wr = ut.f,
    kr = function(e) {
        return function(t) {
            for (var n, i = K(t), r = Oe(i), o = r.length, a = 0, s = []; o > a;) wr.call(i, n = r[a++]) && s.push(e ? [n, i[n]] : i[n]);
            return s
        }
    },
    Tr = kr(!1);
P(P.S, "Object", {
    values: function(e) {
        return Tr(e)
    }
});
var Sr = kr(!0);
P(P.S, "Object", {
    entries: function(e) {
        return Sr(e)
    }
}), P(P.S, "Object", {
    getOwnPropertyDescriptors: function(e) {
        for (var t, n, i = K(e), r = ht.f, o = Jt(i), a = {}, s = 0; o.length > s;) void 0 !== (n = r(i, t = o[s++])) && zi(a, t, n);
        return a
    }
});
var Er = function(e, t, n, i) {
        var r = String(G(e)),
            o = r.length,
            a = void 0 === n ? " " : String(n),
            s = D(t);
        if (s <= o || "" == a) return r;
        var l = s - o,
            c = Fi.call(a, Math.ceil(l / a.length));
        return c.length > l && (c = c.slice(0, l)), i ? c + r : r + c
    },
    _r = n.navigator,
    Ar = _r && _r.userAgent || "";
P(P.P + P.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
    padStart: function(e) {
        return Er(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
    }
}), P(P.P + P.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
    padEnd: function(e) {
        return Er(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
    }
});
var Pr = [].slice,
    Mr = /MSIE .\./.test(Ar),
    Lr = function(e) {
        return function(t, n) {
            var i = arguments.length > 2,
                r = !!i && Pr.call(arguments, 2);
            return e(i ? function() {
                ("function" == typeof t ? t : Function(t)).apply(this, r)
            } : t, n)
        }
    };
P(P.G + P.B + P.F * Mr, {
    setTimeout: Lr(n.setTimeout),
    setInterval: Lr(n.setInterval)
}), P(P.G + P.B, {
    setImmediate: fn.set,
    clearImmediate: fn.clear
});
for (var xr = ue("iterator"), Cr = ue("toStringTag"), Or = Me.Array, Nr = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, jr = Oe(Nr), Ir = 0; Ir < jr.length; Ir++) {
    var Fr, Rr = jr[Ir],
        qr = Nr[Rr],
        Br = n[Rr],
        Vr = Br && Br.prototype;
    if (Vr && (Vr[xr] || m(Vr, xr, Or), Vr[Cr] || m(Vr, Cr, Rr), Me[Rr] = Or, qr))
        for (Fr in ot) Vr[Fr] || T(Vr, Fr, ot[Fr], !0)
}
t(function(t) {
    ! function(e) {
        var n, i = Object.prototype,
            r = i.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag",
            c = e.regeneratorRuntime;
        if (c) t.exports = c;
        else {
            (c = e.regeneratorRuntime = t.exports).wrap = b;
            var u = "suspendedStart",
                f = "suspendedYield",
                h = "executing",
                d = "completed",
                p = {},
                g = {};
            g[a] = function() {
                return this
            };
            var m = Object.getPrototypeOf,
                y = m && m(m(x([])));
            y && y !== i && r.call(y, a) && (g = y);
            var v = S.prototype = k.prototype = Object.create(g);
            T.prototype = v.constructor = S, S.constructor = T, S[l] = T.displayName = "GeneratorFunction", c.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === T || "GeneratorFunction" === (t.displayName || t.name))
            }, c.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(v), e
            }, c.awrap = function(e) {
                return {
                    __await: e
                }
            }, E(_.prototype), _.prototype[s] = function() {
                return this
            }, c.AsyncIterator = _, c.async = function(e, t, n, i) {
                var r = new _(b(e, t, n, i));
                return c.isGeneratorFunction(t) ? r : r.next().then(function(e) {
                    return e.done ? e.value : r.next()
                })
            }, E(v), v[l] = "Generator", v[a] = function() {
                return this
            }, v.toString = function() {
                return "[object Generator]"
            }, c.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var i = t.pop();
                            if (i in e) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, c.values = x, L.prototype = {
                constructor: L,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !e)
                        for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function i(i, r) {
                        return s.type = "throw", s.arg = e, t.next = i, r && (t.method = "next", t.arg = n), !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            s = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var l = r.call(a, "catchLoc"),
                                c = r.call(a, "finallyLoc");
                            if (l && c) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (l) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), p
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var r = i.arg;
                                M(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, i) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = n), p
                }
            }
        }

        function b(e, t, n, i) {
            var r = t && t.prototype instanceof k ? t : k,
                o = Object.create(r.prototype),
                a = new L(i || []);
            return o._invoke = function(e, t, n) {
                var i = u;
                return function(r, o) {
                    if (i === h) throw new Error("Generator is already running");
                    if (i === d) {
                        if ("throw" === r) throw o;
                        return C()
                    }
                    for (n.method = r, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = A(a, n);
                            if (s) {
                                if (s === p) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === u) throw i = d, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = h;
                        var l = w(e, t, n);
                        if ("normal" === l.type) {
                            if (i = n.done ? d : f, l.arg === p) continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (i = d, n.method = "throw", n.arg = l.arg)
                    }
                }
            }(e, n, a), o
        }

        function w(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function k() {}

        function T() {}

        function S() {}

        function E(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function _(t) {
            function n(e, i, o, a) {
                var s = w(t[e], t, i);
                if ("throw" !== s.type) {
                    var l = s.arg,
                        c = l.value;
                    return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                        n("next", e, o, a)
                    }, function(e) {
                        n("throw", e, o, a)
                    }) : Promise.resolve(c).then(function(e) {
                        l.value = e, o(l)
                    }, a)
                }
                a(s.arg)
            }
            var i;
            "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function(e, t) {
                function r() {
                    return new Promise(function(i, r) {
                        n(e, t, i, r)
                    })
                }
                return i = i ? i.then(r, r) : r()
            }
        }

        function A(e, t) {
            var i = e.iterator[t.method];
            if (i === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = n, A(e, t), "throw" === t.method)) return p;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return p
            }
            var r = w(i, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, p) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
        }

        function P(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function M(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function L(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(P, this), this.reset(!0)
        }

        function x(e) {
            if (e) {
                var t = e[a];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var i = -1,
                        o = function t() {
                            for (; ++i < e.length;)
                                if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                    return o.next = o
                }
            }
            return {
                next: C
            }
        }

        function C() {
            return {
                value: n,
                done: !0
            }
        }
    }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : e)
});
try {
    var Dr = new window.CustomEvent("test");
    if (Dr.preventDefault(), !0 !== Dr.defaultPrevented) throw new Error("Could not prevent default")
} catch (e) {
    var Ur = function(e, t) {
        var n, i;
        return t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function() {
            i.call(this);
            try {
                Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                })
            } catch (e) {
                this.defaultPrevented = !0
            }
        }, n
    };
    Ur.prototype = window.Event.prototype, window.CustomEvent = Ur
}! function(e) {
    var t = function() {
            try {
                return !!Symbol.iterator
            } catch (e) {
                return !1
            }
        }(),
        n = function(e) {
            var n = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return t && (n[Symbol.iterator] = function() {
                return n
            }), n
        },
        i = function(e) {
            return encodeURIComponent(e).replace(/%20/g, "+")
        },
        r = function(e) {
            return decodeURIComponent(e).replace(/\+/g, " ")
        };
    "URLSearchParams" in e && "a=1" === new URLSearchParams("?a=1").toString() || function() {
        var o = function(e) {
                if (Object.defineProperty(this, "_entries", {
                        value: {}
                    }), "string" == typeof e) {
                    if ("" !== e)
                        for (var t, n = (e = e.replace(/^\?/, "")).split("&"), i = 0; i < n.length; i++) t = n[i].split("="), this.append(r(t[0]), t.length > 1 ? r(t[1]) : "")
                } else if (e instanceof o) {
                    var a = this;
                    e.forEach(function(e, t) {
                        a.append(e, t)
                    })
                }
            },
            a = o.prototype;
        a.append = function(e, t) {
            e in this._entries ? this._entries[e].push(t.toString()) : this._entries[e] = [t.toString()]
        }, a.delete = function(e) {
            delete this._entries[e]
        }, a.get = function(e) {
            return e in this._entries ? this._entries[e][0] : null
        }, a.getAll = function(e) {
            return e in this._entries ? this._entries[e].slice(0) : []
        }, a.has = function(e) {
            return e in this._entries
        }, a.set = function(e, t) {
            this._entries[e] = [t.toString()]
        }, a.forEach = function(e, t) {
            var n;
            for (var i in this._entries)
                if (this._entries.hasOwnProperty(i)) {
                    n = this._entries[i];
                    for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this)
                }
        }, a.keys = function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push(n)
            }), n(e)
        }, a.values = function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }), n(e)
        }, a.entries = function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push([n, t])
            }), n(e)
        }, t && (a[Symbol.iterator] = a.entries), a.toString = function() {
            var e = "";
            return this.forEach(function(t, n) {
                e.length > 0 && (e += "&"), e += i(n) + "=" + i(t)
            }), e
        }, e.URLSearchParams = o
    }()
}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
function(e) {
    if (function() {
            try {
                var e = new URL("b", "http://a");
                return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams
            } catch (e) {
                return !1
            }
        }() || function() {
            var t = e.URL,
                n = function(e, t) {
                    "string" != typeof e && (e = String(e));
                    var n = document.implementation.createHTMLDocument("");
                    if (window.doc = n, t) {
                        var i = n.createElement("base");
                        i.href = t, n.head.appendChild(i)
                    }
                    var r = n.createElement("a");
                    if (r.href = e, n.body.appendChild(r), r.href = r.href, ":" === r.protocol || !/:/.test(r.href)) throw new TypeError("Invalid URL");
                    Object.defineProperty(this, "_anchorElement", {
                        value: r
                    })
                },
                i = n.prototype;
            ["hash", "host", "hostname", "port", "protocol", "search"].forEach(function(e) {
                ! function(e) {
                    Object.defineProperty(i, e, {
                        get: function() {
                            return this._anchorElement[e]
                        },
                        set: function(t) {
                            this._anchorElement[e] = t
                        },
                        enumerable: !0
                    })
                }(e)
            }), Object.defineProperties(i, {
                toString: {
                    get: function() {
                        var e = this;
                        return function() {
                            return e.href
                        }
                    }
                },
                href: {
                    get: function() {
                        return this._anchorElement.href.replace(/\?$/, "")
                    },
                    set: function(e) {
                        this._anchorElement.href = e
                    },
                    enumerable: !0
                },
                pathname: {
                    get: function() {
                        return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                    },
                    set: function(e) {
                        this._anchorElement.pathname = e
                    },
                    enumerable: !0
                },
                origin: {
                    get: function() {
                        var e = {
                                "http:": 80,
                                "https:": 443,
                                "ftp:": 21
                            } [this._anchorElement.protocol],
                            t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                        return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                    },
                    enumerable: !0
                },
                password: {
                    get: function() {
                        return ""
                    },
                    set: function(e) {},
                    enumerable: !0
                },
                username: {
                    get: function() {
                        return ""
                    },
                    set: function(e) {},
                    enumerable: !0
                },
                searchParams: {
                    get: function() {
                        var e = new URLSearchParams(this.search),
                            t = this;
                        return ["append", "delete", "set"].forEach(function(n) {
                            var i = e[n];
                            e[n] = function() {
                                i.apply(e, arguments), t.search = e.toString()
                            }
                        }), e
                    },
                    enumerable: !0
                }
            }), n.createObjectURL = function(e) {
                return t.createObjectURL.apply(t, arguments)
            }, n.revokeObjectURL = function(e) {
                return t.revokeObjectURL.apply(t, arguments)
            }, e.URL = n
        }(), void 0 !== e.location && !("origin" in e.location)) {
        var t = function() {
            return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
        };
        try {
            Object.defineProperty(e.location, "origin", {
                get: t,
                enumerable: !0
            })
        } catch (n) {
            setInterval(function() {
                e.location.origin = t()
            }, 100)
        }
    }
}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
var Hr = function(e) {
        return null != e ? e.constructor : null
    },
    Wr = function(e, t) {
        return Boolean(e && t && e instanceof t)
    },
    zr = function(e) {
        return null == e
    },
    Gr = function(e) {
        return Hr(e) === Object
    },
    Kr = function(e) {
        return Hr(e) === String
    },
    Yr = function(e) {
        return Array.isArray(e)
    },
    Qr = function(e) {
        return Wr(e, NodeList)
    },
    Jr = function(e) {
        return zr(e) || (Kr(e) || Yr(e) || Qr(e)) && !e.length || Gr(e) && !Object.keys(e).length
    },
    $r = {
        nullOrUndefined: zr,
        object: Gr,
        number: function(e) {
            return Hr(e) === Number && !Number.isNaN(e)
        },
        string: Kr,
        boolean: function(e) {
            return Hr(e) === Boolean
        },
        function: function(e) {
            return Hr(e) === Function
        },
        array: Yr,
        weakMap: function(e) {
            return Wr(e, WeakMap)
        },
        nodeList: Qr,
        element: function(e) {
            return Wr(e, Element)
        },
        textNode: function(e) {
            return Hr(e) === Text
        },
        event: function(e) {
            return Wr(e, Event)
        },
        cue: function(e) {
            return Wr(e, window.TextTrackCue) || Wr(e, window.VTTCue)
        },
        track: function(e) {
            return Wr(e, TextTrack) || !zr(e) && Kr(e.kind)
        },
        url: function(e) {
            if (Wr(e, window.URL)) return !0;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
            try {
                return !Jr(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        empty: Jr
    },
    Xr = function() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    return e = !0, null
                }
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
    }();

function Zr(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = this,
        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    if (e && "addEventListener" in e && !$r.empty(t) && $r.function(n)) {
        var s = t.split(" "),
            l = a;
        Xr && (l = {
            passive: o,
            capture: a
        }), s.forEach(function(t) {
            r && r.eventListeners && i && r.eventListeners.push({
                element: e,
                type: t,
                callback: n,
                options: l
            }), e[i ? "addEventListener" : "removeEventListener"](t, n, l)
        })
    }
}

function eo(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments[2],
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Zr.call(this, e, t, n, !0, i, r)
}

function to(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments[2],
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Zr.call(this, e, t, n, !1, i, r)
}

function no(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments[2],
        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    Zr.call(this, e, t, function o() {
        to(e, t, o, i, r);
        for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
        n.apply(this, s)
    }, !0, i, r)
}

function io(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ($r.element(e) && !$r.empty(t)) {
        var r = new CustomEvent(t, {
            bubbles: n,
            detail: Object.assign({}, i, {
                plyr: this
            })
        });
        e.dispatchEvent(r)
    }
}
var ro = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    oo = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    ao = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    },
    so = function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();

function lo(e, t) {
    var n = e.length ? e : [e];
    Array.from(n).reverse().forEach(function(e, n) {
        var i = n > 0 ? t.cloneNode(!0) : t,
            r = e.parentNode,
            o = e.nextSibling;
        i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
    })
}

function co(e, t) {
    $r.element(e) && !$r.empty(t) && Object.entries(t).filter(function(e) {
        var t = so(e, 2)[1];
        return !$r.nullOrUndefined(t)
    }).forEach(function(t) {
        var n = so(t, 2),
            i = n[0],
            r = n[1];
        return e.setAttribute(i, r)
    })
}

function uo(e, t, n) {
    var i = document.createElement(e);
    return $r.object(t) && co(i, t), $r.string(n) && (i.innerText = n), i
}

function fo(e, t, n, i) {
    t.appendChild(uo(e, n, i))
}

function ho(e) {
    $r.nodeList(e) || $r.array(e) ? Array.from(e).forEach(ho) : $r.element(e) && $r.element(e.parentNode) && e.parentNode.removeChild(e)
}

function po(e) {
    for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
}

function go(e, t) {
    return $r.element(t) && $r.element(t.parentNode) && $r.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
}

function mo(e, t) {
    if (!$r.string(e) || $r.empty(e)) return {};
    var n = {},
        i = t;
    return e.split(",").forEach(function(e) {
        var t = e.trim(),
            r = t.replace(".", ""),
            o = t.replace(/[[\]]/g, "").split("="),
            a = o[0],
            s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
        switch (t.charAt(0)) {
            case ".":
                $r.object(i) && $r.string(i.class) && (i.class += " " + r), n.class = r;
                break;
            case "#":
                n.id = t.replace("#", "");
                break;
            case "[":
                n[a] = s
        }
    }), n
}

function yo(e, t) {
    if ($r.element(e)) {
        var n = t;
        $r.boolean(n) || (n = !e.hasAttribute("hidden")), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
    }
}

function vo(e, t, n) {
    if ($r.element(e)) {
        var i = "toggle";
        return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
    }
    return null
}

function bo(e, t) {
    return $r.element(e) && e.classList.contains(t)
}

function wo(e, t) {
    var n = {
        Element: Element
    };
    return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
        return Array.from(document.querySelectorAll(t)).includes(this)
    }).call(e, t)
}

function ko(e) {
    return this.elements.container.querySelectorAll(e)
}

function To(e) {
    return this.elements.container.querySelector(e)
}

function So() {
    var e = document.activeElement;
    return e = e && e !== document.body ? document.querySelector(":focus") : null
}
var Eo, _o, Ao, Po = (Eo = document.createElement("span"), _o = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
}, Ao = Object.keys(_o).find(function(e) {
    return void 0 !== Eo.style[e]
}), !!$r.string(Ao) && _o[Ao]);
var Mo, Lo = {
        isIE: !!document.documentMode,
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    },
    xo = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    },
    Co = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function(e, t, n) {
            var i = Lo.isIPhone && n && Co.playsinline,
                r = Co[e] || "html5" !== t;
            return {
                api: r,
                ui: r && Co.rangeInput && ("video" !== e || !Lo.isIPhone || i)
            }
        },
        pip: !Lo.isIPhone && $r.function(uo("video").webkitSetPresentationMode),
        airplay: $r.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function(e) {
            var t = e.split("/"),
                n = so(t, 1)[0];
            if (!this.isHTML5 || n !== this.type) return !1;
            var i = void 0;
            e && e.includes("codecs=") ? i = e : "audio/mpeg" === e ? i = "audio/mpeg;" : e in xo && (i = e + '; codecs="' + xo[e] + '"');
            try {
                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
            } catch (e) {
                return !1
            }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (Mo = document.createElement("input"), Mo.type = "range", "range" === Mo.type),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== Po,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    },
    Oo = {
        getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function(t) {
                return Co.mime.call(e, t.getAttribute("type"))
            }) : []
        },
        getQualityOptions: function() {
            return Oo.getSources.call(this).map(function(e) {
                return Number(e.getAttribute("size"))
            }).filter(Boolean)
        },
        extend: function() {
            if (this.isHTML5) {
                var e = this;
                Object.defineProperty(e.media, "quality", {
                    get: function() {
                        var t = Oo.getSources.call(e).find(function(t) {
                            return t.getAttribute("src") === e.source
                        });
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function(t) {
                        var n = Oo.getSources.call(e).find(function(e) {
                            return Number(e.getAttribute("size")) === t
                        });
                        if (n) {
                            var i = e.media,
                                r = i.currentTime,
                                o = i.paused,
                                a = i.preload,
                                s = i.readyState;
                            e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", function() {
                                e.currentTime = r, o || e.play()
                            }), e.media.load()), io.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function() {
            this.isHTML5 && (ho(Oo.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

function No(e, t) {
    return t.split(".").reduce(function(e, t) {
        return e && e[t]
    }, e)
}

function jo() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    if (!n.length) return e;
    var r = n.shift();
    return $r.object(r) ? (Object.keys(r).forEach(function(t) {
        $r.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, ao({}, t, {})), jo(e[t], r[t])) : Object.assign(e, ao({}, t, r[t]))
    }), jo.apply(void 0, [e].concat(n))) : e
}

function Io(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return $r.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
        return n[t].toString()
    })
}

function Fo() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
}

function Ro() {
    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
    })
}

function qo() {
    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
    return (e = function() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
        return e = Fo(e, "-", " "), e = Fo(e, "_", " "), Fo(e = Ro(e), " ", "")
    }(e)).charAt(0).toLowerCase() + e.slice(1)
}

function Bo(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML
}
var Vo = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ($r.empty(e) || $r.empty(t)) return "";
    var n = No(t.i18n, e);
    if ($r.empty(n)) return "";
    var i = {
        "{seektime}": t.seekTime,
        "{title}": t.title
    };
    return Object.entries(i).forEach(function(e) {
        var t = so(e, 2),
            i = t[0],
            r = t[1];
        n = Fo(n, i, r)
    }), n
};

function Do(e) {
    return $r.array(e) ? e.filter(function(t, n) {
        return e.indexOf(t) === n
    }) : e
}
var Uo = function() {
    function e(t) {
        ro(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
    }
    return oo(e, [{
        key: "get",
        value: function(t) {
            if (!e.supported || !this.enabled) return null;
            var n = window.localStorage.getItem(this.key);
            if ($r.empty(n)) return null;
            var i = JSON.parse(n);
            return $r.string(t) && t.length ? i[t] : i
        }
    }, {
        key: "set",
        value: function(t) {
            if (e.supported && this.enabled && $r.object(t)) {
                var n = this.get();
                $r.empty(n) && (n = {}), jo(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
            }
        }
    }], [{
        key: "supported",
        get: function() {
            try {
                if (!("localStorage" in window)) return !1;
                return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
            } catch (e) {
                return !1
            }
        }
    }]), e
}();

function Ho(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    return new Promise(function(n, i) {
        try {
            var r = new XMLHttpRequest;
            if (!("withCredentials" in r)) return;
            r.addEventListener("load", function() {
                if ("text" === t) try {
                    n(JSON.parse(r.responseText))
                } catch (e) {
                    n(r.responseText)
                } else n(r.response)
            }), r.addEventListener("error", function() {
                throw new Error(r.status)
            }), r.open("GET", e, !0), r.responseType = t, r.send()
        } catch (e) {
            i(e)
        }
    })
}

function Wo(e, t) {
    if ($r.string(e)) {
        var n = $r.string(t),
            i = function() {
                return null !== document.getElementById(t)
            },
            r = function(e, t) {
                e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
            };
        if (!n || !i()) {
            var o = Uo.supported,
                a = document.createElement("div");
            if (a.setAttribute("hidden", ""), n && a.setAttribute("id", t), o) {
                var s = window.localStorage.getItem("cache-" + t);
                if (null !== s) {
                    var l = JSON.parse(s);
                    r(a, l.content)
                }
            }
            Ho(e).then(function(e) {
                $r.empty(e) || (o && window.localStorage.setItem("cache-" + t, JSON.stringify({
                    content: e
                })), r(a, e))
            }).catch(function() {})
        }
    }
}
var zo = function(e) {
        return parseInt(e / 60 / 60 % 60, 10)
    },
    Go = function(e) {
        return parseInt(e / 60 % 60, 10)
    },
    Ko = function(e) {
        return parseInt(e % 60, 10)
    };

function Yo() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!$r.number(e)) return Yo(null, t, n);
    var i = function(e) {
            return ("0" + e).slice(-2)
        },
        r = zo(e),
        o = Go(e),
        a = Ko(e);
    return t || r > 0 ? r += ":" : r = "", (n && e > 0 ? "-" : "") + r + i(o) + ":" + i(a)
}
var Qo = {
    getIconUrl: function() {
        var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Lo.isIE && !window.svg4everybody;
        return {
            url: this.config.iconUrl,
            cors: e
        }
    },
    findElements: function() {
        try {
            return this.elements.controls = To.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                play: ko.call(this, this.config.selectors.buttons.play),
                pause: To.call(this, this.config.selectors.buttons.pause),
                restart: To.call(this, this.config.selectors.buttons.restart),
                rewind: To.call(this, this.config.selectors.buttons.rewind),
                fastForward: To.call(this, this.config.selectors.buttons.fastForward),
                mute: To.call(this, this.config.selectors.buttons.mute),
                pip: To.call(this, this.config.selectors.buttons.pip),
                airplay: To.call(this, this.config.selectors.buttons.airplay),
                settings: To.call(this, this.config.selectors.buttons.settings),
                captions: To.call(this, this.config.selectors.buttons.captions),
                fullscreen: To.call(this, this.config.selectors.buttons.fullscreen)
            }, this.elements.progress = To.call(this, this.config.selectors.progress), this.elements.inputs = {
                seek: To.call(this, this.config.selectors.inputs.seek),
                volume: To.call(this, this.config.selectors.inputs.volume)
            }, this.elements.display = {
                buffer: To.call(this, this.config.selectors.display.buffer),
                currentTime: To.call(this, this.config.selectors.display.currentTime),
                duration: To.call(this, this.config.selectors.display.duration)
            }, $r.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
        } catch (e) {
            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
        }
    },
    createIcon: function(e, t) {
        var n = Qo.getIconUrl.call(this),
            i = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
            r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        co(r, jo(t, {
            role: "presentation",
            focusable: "false"
        }));
        var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
            a = i + "-" + e;
        return "href" in o ? o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
    },
    createLabel: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
                pip: "PIP",
                airplay: "AirPlay"
            } [e] || Vo(e, this.config);
        return uo("span", Object.assign({}, t, {
            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
        }), n)
    },
    createBadge: function(e) {
        if ($r.empty(e)) return null;
        var t = uo("span", {
            class: this.config.classNames.menu.value
        });
        return t.appendChild(uo("span", {
            class: this.config.classNames.menu.badge
        }, e)), t
    },
    createButton: function(e, t) {
        var n = uo("button"),
            i = Object.assign({}, t),
            r = qo(e),
            o = !1,
            a = void 0,
            s = void 0,
            l = void 0,
            c = void 0;
        switch ("type" in i || (i.type = "button"), "class" in i ? i.class.includes(this.config.classNames.control) || (i.class += " " + this.config.classNames.control) : i.class = this.config.classNames.control, e) {
            case "play":
                o = !0, a = "play", l = "pause", s = "play", c = "pause";
                break;
            case "mute":
                o = !0, a = "mute", l = "unmute", s = "volume", c = "muted";
                break;
            case "captions":
                o = !0, a = "enableCaptions", l = "disableCaptions", s = "captions-off", c = "captions-on";
                break;
            case "fullscreen":
                o = !0, a = "enterFullscreen", l = "exitFullscreen", s = "enter-fullscreen", c = "exit-fullscreen";
                break;
            case "play-large":
                i.class += " " + this.config.classNames.control + "--overlaid", r = "play", a = "play", s = "play";
                break;
            default:
                a = r, s = e
        }
        o ? (n.appendChild(Qo.createIcon.call(this, c, {
            class: "icon--pressed"
        })), n.appendChild(Qo.createIcon.call(this, s, {
            class: "icon--not-pressed"
        })), n.appendChild(Qo.createLabel.call(this, l, {
            class: "label--pressed"
        })), n.appendChild(Qo.createLabel.call(this, a, {
            class: "label--not-pressed"
        }))) : (n.appendChild(Qo.createIcon.call(this, s)), n.appendChild(Qo.createLabel.call(this, a))), jo(i, mo(this.config.selectors.buttons[r], i)), co(n, i), "play" === r ? ($r.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(n)) : this.elements.buttons[r] = n;
        var u = this.config.classNames.controlPressed;
        return Object.defineProperty(n, "pressed", {
            enumerable: !0,
            get: function() {
                return bo(n, u)
            },
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                vo(n, u, e)
            }
        }), n
    },
    createRange: function(e, t) {
        var n = uo("input", jo(mo(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": Vo(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
        }, t));
        return this.elements.inputs[e] = n, Qo.updateRangeFill.call(this, n), n
    },
    createProgress: function(e, t) {
        var n = uo("progress", jo(mo(this.config.selectors.display[e]), {
            min: 0,
            max: 100,
            value: 0,
            role: "presentation",
            "aria-hidden": !0
        }, t));
        if ("volume" !== e) {
            n.appendChild(uo("span", null, "0"));
            var i = {
                    played: "played",
                    buffer: "buffered"
                } [e],
                r = i ? Vo(i, this.config) : "";
            n.innerText = "% " + r.toLowerCase()
        }
        return this.elements.display[e] = n, n
    },
    createTime: function(e) {
        var t = mo(this.config.selectors.display[e]),
            n = uo("div", jo(t, {
                class: "plyr__time " + t.class,
                "aria-label": Vo(e, this.config)
            }), "00:00");
        return this.elements.display[e] = n, n
    },
    createMenuItem: function(e) {
        var t = e.value,
            n = e.list,
            i = e.type,
            r = e.title,
            o = e.badge,
            a = void 0 === o ? null : o,
            s = e.checked,
            l = void 0 !== s && s,
            c = uo("li"),
            u = uo("label", {
                class: this.config.classNames.control
            }),
            f = uo("input", jo(mo(this.config.selectors.inputs[i]), {
                type: "radio",
                name: "plyr-" + i,
                value: t,
                checked: l,
                class: "plyr__sr-only"
            })),
            h = uo("span", {
                hidden: ""
            });
        u.appendChild(f), u.appendChild(h), u.insertAdjacentHTML("beforeend", r), $r.element(a) && u.appendChild(a), c.appendChild(u), n.appendChild(c)
    },
    formatTime: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return $r.number(e) ? Yo(e, zo(this.duration) > 0, t) : e
    },
    updateTimeDisplay: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        $r.element(e) && $r.number(t) && (e.innerText = Qo.formatTime(t, n))
    },
    updateVolume: function() {
        this.supported.ui && ($r.element(this.elements.inputs.volume) && Qo.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), $r.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
    },
    setRange: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        $r.element(e) && (e.value = t, Qo.updateRangeFill.call(this, e))
    },
    updateProgress: function(e) {
        var t = this;
        if (this.supported.ui && $r.event(e)) {
            var n, i, r = 0;
            if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                case "seeked":
                    n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && Qo.setRange.call(this, this.elements.inputs.seek, r);
                    break;
                case "playing":
                case "progress":
                    ! function(e, n) {
                        var i = $r.number(n) ? n : 0,
                            r = $r.element(e) ? e : t.elements.display.buffer;
                        if ($r.element(r)) {
                            r.value = i;
                            var o = r.getElementsByTagName("span")[0];
                            $r.element(o) && (o.childNodes[0].nodeValue = i)
                        }
                    }(this.elements.display.buffer, 100 * this.buffered)
            }
        }
    },
    updateRangeFill: function(e) {
        var t = $r.event(e) ? e.target : e;
        if ($r.element(t) && "range" === t.getAttribute("type")) {
            if (wo(t, this.config.selectors.inputs.seek)) {
                t.setAttribute("aria-valuenow", this.currentTime);
                var n = Qo.formatTime(this.currentTime),
                    i = Qo.formatTime(this.duration),
                    r = Vo("seekLabel", this.config);
                t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
            } else if (wo(t, this.config.selectors.inputs.volume)) {
                var o = 100 * t.value;
                t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", o + "%")
            } else t.setAttribute("aria-valuenow", t.value);
            Lo.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
        }
    },
    updateSeekTooltip: function(e) {
        var t = this;
        if (this.config.tooltips.seek && $r.element(this.elements.inputs.seek) && $r.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
            var n = 0,
                i = this.elements.progress.getBoundingClientRect(),
                r = this.config.classNames.tooltip + "--visible",
                o = function(e) {
                    vo(t.elements.display.seekTooltip, r, e)
                };
            if (this.touch) o(!1);
            else {
                if ($r.event(e)) n = 100 / i.width * (e.pageX - i.left);
                else {
                    if (!bo(this.elements.display.seekTooltip, r)) return;
                    n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                }
                n < 0 ? n = 0 : n > 100 && (n = 100), Qo.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", $r.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type)
            }
        }
    },
    timeUpdate: function(e) {
        var t = !$r.element(this.elements.display.duration) && this.config.invertTime;
        Qo.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Qo.updateProgress.call(this, e)
    },
    durationUpdate: function() {
        if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
            if (this.duration >= Math.pow(2, 32)) return yo(this.elements.display.currentTime, !0), void yo(this.elements.progress, !0);
            $r.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            var e = $r.element(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && Qo.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Qo.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Qo.updateSeekTooltip.call(this)
        }
    },
    toggleTab: function(e, t) {
        yo(this.elements.settings.tabs[e], !t)
    },
    setQualityMenu: function(e) {
        var t = this;
        if ($r.element(this.elements.settings.panes.quality)) {
            var n = this.elements.settings.panes.quality.querySelector("ul");
            $r.array(e) && (this.options.quality = Do(e).filter(function(e) {
                return t.config.quality.options.includes(e)
            }));
            var i = !$r.empty(this.options.quality) && this.options.quality.length > 1;
            if (Qo.toggleTab.call(this, "quality", i), Qo.checkMenu.call(this), i) {
                po(n);
                this.options.quality.sort(function(e, n) {
                    var i = t.config.quality.options;
                    return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                }).forEach(function(e) {
                    Qo.createMenuItem.call(t, {
                        value: e,
                        list: n,
                        type: "quality",
                        title: Qo.getLabel.call(t, "quality", e),
                        badge: function(e) {
                            var n = Vo("qualityBadge." + e, t.config);
                            return n.length ? Qo.createBadge.call(t, n) : null
                        }(e)
                    })
                }), Qo.updateSetting.call(this, "quality", n)
            }
        }
    },
    getLabel: function(e, t) {
        switch (e) {
            case "speed":
                return 1 === t ? Vo("normal", this.config) : t + "&times;";
            case "quality":
                if ($r.number(t)) {
                    var n = Vo("qualityLabel." + t, this.config);
                    return n.length ? n : t + "p"
                }
                return Ro(t);
            case "captions":
                return Xo.getLabel.call(this);
            default:
                return null
        }
    },
    updateSetting: function(e, t, n) {
        var i = this.elements.settings.panes[e],
            r = null,
            o = t;
        if ("captions" === e) r = this.currentTrack;
        else {
            if (r = $r.empty(n) ? this[e] : n, $r.empty(r) && (r = this.config[e].default), !$r.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);
            if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e)
        }
        if ($r.element(o) || (o = i && i.querySelector("ul")), $r.element(o)) {
            this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = Qo.getLabel.call(this, e, r);
            var a = o && o.querySelector('input[value="' + r + '"]');
            $r.element(a) && (a.checked = !0)
        }
    },
    setCaptionsMenu: function() {
        var e = this,
            t = this.elements.settings.panes.captions.querySelector("ul"),
            n = Xo.getTracks.call(this);
        if (Qo.toggleTab.call(this, "captions", n.length), po(t), Qo.checkMenu.call(this), n.length) {
            var i = n.map(function(n, i) {
                return {
                    value: i,
                    checked: e.captions.toggled && e.currentTrack === i,
                    title: Xo.getLabel.call(e, n),
                    badge: n.language && Qo.createBadge.call(e, n.language.toUpperCase()),
                    list: t,
                    type: "language"
                }
            });
            i.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: Vo("disabled", this.config),
                list: t,
                type: "language"
            }), i.forEach(Qo.createMenuItem.bind(this)), Qo.updateSetting.call(this, "captions", t)
        }
    },
    setSpeedMenu: function(e) {
        var t = this;
        if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && $r.element(this.elements.settings.panes.speed)) {
            $r.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function(e) {
                return t.config.speed.options.includes(e)
            });
            var n = !$r.empty(this.options.speed) && this.options.speed.length > 1;
            if (Qo.toggleTab.call(this, "speed", n), Qo.checkMenu.call(this), n) {
                var i = this.elements.settings.panes.speed.querySelector("ul");
                po(i), this.options.speed.forEach(function(e) {
                    Qo.createMenuItem.call(t, {
                        value: e,
                        list: i,
                        type: "speed",
                        title: Qo.getLabel.call(t, "speed", e)
                    })
                }), Qo.updateSetting.call(this, "speed", i)
            }
        }
    },
    checkMenu: function() {
        var e = this.elements.settings.tabs,
            t = !$r.empty(e) && Object.values(e).some(function(e) {
                return !e.hidden
            });
        yo(this.elements.settings.menu, !t)
    },
    toggleMenu: function(e) {
        var t = this.elements.settings.form,
            n = this.elements.buttons.settings;
        if ($r.element(t) && $r.element(n)) {
            var i = $r.boolean(e) ? e : $r.element(t) && t.hasAttribute("hidden");
            if ($r.event(e)) {
                var r = $r.element(t) && t.contains(e.target),
                    o = e.target === this.elements.buttons.settings;
                if (r || !r && !o && i) return;
                o && e.stopPropagation()
            }
            $r.element(n) && n.setAttribute("aria-expanded", i), $r.element(t) && (yo(t, !i), vo(this.elements.container, this.config.classNames.menu.open, i), i ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
        }
    },
    getTabSize: function(e) {
        var t = e.cloneNode(!0);
        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function(e) {
            var t = e.getAttribute("name");
            e.setAttribute("name", t + "-clone")
        }), e.parentNode.appendChild(t);
        var n = t.scrollWidth,
            i = t.scrollHeight;
        return ho(t), {
            width: n,
            height: i
        }
    },
    showTab: function() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = this.elements.settings.menu,
            i = document.getElementById(t);
        if ($r.element(i) && "tabpanel" === i.getAttribute("role")) {
            var r = n.querySelector('[role="tabpanel"]:not([hidden])'),
                o = r.parentNode;
            if (Array.from(n.querySelectorAll('[aria-controls="' + r.getAttribute("id") + '"]')).forEach(function(e) {
                    e.setAttribute("aria-expanded", !1)
                }), Co.transitions && !Co.reducedMotion) {
                o.style.width = r.scrollWidth + "px", o.style.height = r.scrollHeight + "px";
                var a = Qo.getTabSize.call(this, i);
                eo.call(this, o, Po, function t(n) {
                    n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", to.call(e, o, Po, t))
                }), o.style.width = a.width + "px", o.style.height = a.height + "px"
            }
            yo(r, !0), r.setAttribute("tabindex", -1), yo(i, !1);
            var s = ko.call(this, '[aria-controls="' + t + '"]');
            Array.from(s).forEach(function(e) {
                e.setAttribute("aria-expanded", !0)
            }), i.removeAttribute("tabindex"), i.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
        }
    },
    create: function(e) {
        var t = this;
        if ($r.empty(this.config.controls)) return null;
        var n = uo("div", mo(this.config.selectors.controls.wrapper));
        if (this.config.controls.includes("restart") && n.appendChild(Qo.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(Qo.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(Qo.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(Qo.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
            var i = uo("div", mo(this.config.selectors.progress));
            if (i.appendChild(Qo.createRange.call(this, "seek", {
                    id: "plyr-seek-" + e.id
                })), i.appendChild(Qo.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                var r = uo("span", {
                    class: this.config.classNames.tooltip
                }, "00:00");
                i.appendChild(r), this.elements.display.seekTooltip = r
            }
            this.elements.progress = i, n.appendChild(this.elements.progress)
        }
        if (this.config.controls.includes("current-time") && n.appendChild(Qo.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(Qo.createTime.call(this, "duration")), this.config.controls.includes("mute") && n.appendChild(Qo.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
            var o = uo("div", {
                    class: "plyr__volume"
                }),
                a = {
                    max: 1,
                    step: .05,
                    value: this.config.volume
                };
            o.appendChild(Qo.createRange.call(this, "volume", jo(a, {
                id: "plyr-volume-" + e.id
            }))), this.elements.volume = o, n.appendChild(o)
        }
        if (this.config.controls.includes("captions") && n.appendChild(Qo.createButton.call(this, "captions")), this.config.controls.includes("settings") && !$r.empty(this.config.settings)) {
            var s = uo("div", {
                class: "plyr__menu",
                hidden: ""
            });
            s.appendChild(Qo.createButton.call(this, "settings", {
                id: "plyr-settings-toggle-" + e.id,
                "aria-haspopup": !0,
                "aria-controls": "plyr-settings-" + e.id,
                "aria-expanded": !1
            }));
            var l = uo("form", {
                    class: "plyr__menu__container",
                    id: "plyr-settings-" + e.id,
                    hidden: "",
                    "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                    role: "tablist",
                    tabindex: -1
                }),
                c = uo("div"),
                u = uo("div", {
                    id: "plyr-settings-" + e.id + "-home",
                    "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                    role: "tabpanel"
                }),
                f = uo("ul", {
                    role: "tablist"
                });
            this.config.settings.forEach(function(n) {
                var i = uo("li", {
                        role: "tab",
                        hidden: ""
                    }),
                    r = uo("button", jo(mo(t.config.selectors.buttons.settings), {
                        type: "button",
                        class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                        id: "plyr-settings-" + e.id + "-" + n + "-tab",
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-" + e.id + "-" + n,
                        "aria-expanded": !1
                    }), Vo(n, t.config)),
                    o = uo("span", {
                        class: t.config.classNames.menu.value
                    });
                o.innerHTML = e[n], r.appendChild(o), i.appendChild(r), f.appendChild(i), t.elements.settings.tabs[n] = i
            }), u.appendChild(f), c.appendChild(u), this.config.settings.forEach(function(n) {
                var i = uo("div", {
                        id: "plyr-settings-" + e.id + "-" + n,
                        hidden: "",
                        "aria-labelled-by": "plyr-settings-" + e.id + "-" + n + "-tab",
                        role: "tabpanel",
                        tabindex: -1
                    }),
                    r = uo("button", {
                        type: "button",
                        class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-" + e.id + "-home",
                        "aria-expanded": !1
                    }, Vo(n, t.config));
                i.appendChild(r);
                var o = uo("ul");
                i.appendChild(o), c.appendChild(i), t.elements.settings.panes[n] = i
            }), l.appendChild(c), s.appendChild(l), n.appendChild(s), this.elements.settings.form = l, this.elements.settings.menu = s
        }
        return this.config.controls.includes("pip") && Co.pip && n.appendChild(Qo.createButton.call(this, "pip")), this.config.controls.includes("airplay") && Co.airplay && n.appendChild(Qo.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(Qo.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(Qo.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && Qo.setQualityMenu.call(this, Oo.getQualityOptions.call(this)), Qo.setSpeedMenu.call(this), n
    },
    inject: function() {
        var e = this;
        if (this.config.loadSprite) {
            var t = Qo.getIconUrl.call(this);
            t.cors && Wo(t.url, "sprite-plyr")
        }
        this.id = Math.floor(1e4 * Math.random());
        var n = null;
        this.elements.controls = null;
        var i = {
                id: this.id,
                seektime: this.config.seekTime,
                title: this.config.title
            },
            r = !0;
        $r.string(this.config.controls) || $r.element(this.config.controls) ? n = this.config.controls : $r.function(this.config.controls) ? n = this.config.controls.call(this, i) : (n = Qo.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: Xo.getLabel.call(this)
        }), r = !1);
        var o = function(e) {
            var t = e;
            return Object.entries(i).forEach(function(e) {
                var n = so(e, 2),
                    i = n[0],
                    r = n[1];
                t = Fo(t, "{" + i + "}", r)
            }), t
        };
        r && ($r.string(this.config.controls) ? n = o(n) : $r.element(n) && (n.innerHTML = o(n.innerHTML)));
        var a, s = void 0;
        if ($r.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), $r.element(s) || (s = this.elements.container), s[$r.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), $r.element(this.elements.controls) || Qo.findElements.call(this), window.navigator.userAgent.includes("Edge") && (a = s, setTimeout(function() {
                yo(a, !0), a.offsetHeight, yo(a, !1)
            }, 0)), this.config.tooltips.controls) {
            var l = this.config,
                c = l.classNames,
                u = l.selectors,
                f = u.controls.wrapper + " " + u.labels + " ." + c.hidden,
                h = ko.call(this, f);
            Array.from(h).forEach(function(t) {
                vo(t, e.config.classNames.hidden, !1), vo(t, e.config.classNames.tooltip, !0)
            })
        }
    }
};

function Jo(e) {
    var t = e;
    if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
        var n = document.createElement("a");
        n.href = t, t = n.href
    }
    try {
        return new URL(t)
    } catch (e) {
        return null
    }
}

function $o(e) {
    var t = new URLSearchParams;
    return $r.object(e) && Object.entries(e).forEach(function(e) {
        var n = so(e, 2),
            i = n[0],
            r = n[1];
        t.set(i, r)
    }), t
}
var Xo = {
        setup: function() {
            if (this.supported.ui)
                if (!this.isVideo || this.isYouTube || this.isHTML5 && !Co.textTracks) $r.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Qo.setCaptionsMenu.call(this);
                else {
                    var e, t;
                    if ($r.element(this.elements.captions) || (this.elements.captions = uo("div", mo(this.config.selectors.captions)), e = this.elements.captions, (t = this.elements.wrapper).parentNode.insertBefore(e, t.nextSibling)), Lo.isIE && window.URL) {
                        var n = this.media.querySelectorAll("track");
                        Array.from(n).forEach(function(e) {
                            var t = e.getAttribute("src"),
                                n = Jo(t);
                            null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Ho(t, "blob").then(function(t) {
                                e.setAttribute("src", window.URL.createObjectURL(t))
                            }).catch(function() {
                                ho(e)
                            })
                        })
                    }
                    var i = Do(Array.from(navigator.languages || navigator.language || navigator.userLanguage).map(function(e) {
                            return e.split("-")[0]
                        })),
                        r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                    if ("auto" === r) r = so(i, 1)[0];
                    var o = this.storage.get("captions");
                    if ($r.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, {
                            toggled: !1,
                            active: o,
                            language: r,
                            languages: i
                        }), this.isHTML5) {
                        var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                        eo.call(this, this.media.textTracks, a, Xo.update.bind(this))
                    }
                    setTimeout(Xo.update.bind(this), 0)
                }
        },
        update: function() {
            var e = this,
                t = Xo.getTracks.call(this, !0),
                n = this.captions,
                i = n.active,
                r = n.language,
                o = n.meta,
                a = n.currentTrackNode,
                s = Boolean(t.find(function(e) {
                    return e.language === r
                }));
            this.isHTML5 && this.isVideo && t.filter(function(e) {
                return !o.get(e)
            }).forEach(function(t) {
                e.debug.log("Track added", t), o.set(t, {
                    default: "showing" === t.mode
                }), t.mode = "hidden", eo.call(e, t, "cuechange", function() {
                    return Xo.updateCues.call(e)
                })
            }), (s && this.language !== r || !t.includes(a)) && (Xo.setLanguage.call(this, r), Xo.toggle.call(this, i && s)), vo(this.elements.container, this.config.classNames.captions.enabled, !$r.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && Qo.setCaptionsMenu.call(this)
        },
        toggle: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.supported.ui) {
                var n = this.captions.toggled,
                    i = this.config.classNames.captions.active,
                    r = $r.nullOrUndefined(e) ? !n : e;
                if (r !== n) {
                    if (t || (this.captions.active = r, this.storage.set({
                            captions: r
                        })), !this.language && r && !t) {
                        var o = Xo.getTracks.call(this),
                            a = Xo.findTrack.call(this, [this.captions.language].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }(this.captions.languages)), !0);
                        return this.captions.language = a.language, void Xo.set.call(this, o.indexOf(a))
                    }
                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), vo(this.elements.container, i, r), this.captions.toggled = r, Qo.updateSetting.call(this, "captions"), io.call(this, this.media, r ? "captionsenabled" : "captionsdisabled")
                }
            }
        },
        set: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = Xo.getTracks.call(this);
            if (-1 !== e)
                if ($r.number(e))
                    if (e in n) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            var i = n[e],
                                r = (i || {}).language;
                            this.captions.currentTrackNode = i, Qo.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
                                language: r
                            })), this.isVimeo && this.embed.enableTextTrack(r), io.call(this, this.media, "languagechange")
                        }
                        Xo.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Xo.updateCues.call(this)
                    } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
            else Xo.toggle.call(this, !1, t)
        },
        setLanguage: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if ($r.string(e)) {
                var n = e.toLowerCase();
                this.captions.language = n;
                var i = Xo.getTracks.call(this),
                    r = Xo.findTrack.call(this, [n]);
                Xo.set.call(this, i.indexOf(r), t)
            } else this.debug.warn("Invalid language argument", e)
        },
        getTracks: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return Array.from((this.media || {}).textTracks || []).filter(function(n) {
                return !e.isHTML5 || t || e.captions.meta.has(n)
            }).filter(function(e) {
                return ["captions", "subtitles"].includes(e.kind)
            })
        },
        findTrack: function(e) {
            var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = Xo.getTracks.call(this),
                r = function(e) {
                    return Number((t.captions.meta.get(e) || {}).default)
                },
                o = Array.from(i).sort(function(e, t) {
                    return r(t) - r(e)
                }),
                a = void 0;
            return e.every(function(e) {
                return !(a = o.find(function(t) {
                    return t.language === e
                }))
            }), a || (n ? o[0] : void 0)
        },
        getCurrentTrack: function() {
            return Xo.getTracks.call(this)[this.currentTrack]
        },
        getLabel: function(e) {
            var t = e;
            return !$r.track(t) && Co.textTracks && this.captions.toggled && (t = Xo.getCurrentTrack.call(this)), $r.track(t) ? $r.empty(t.label) ? $r.empty(t.language) ? Vo("enabled", this.config) : e.language.toUpperCase() : t.label : Vo("disabled", this.config)
        },
        updateCues: function(e) {
            if (this.supported.ui)
                if ($r.element(this.elements.captions))
                    if ($r.nullOrUndefined(e) || Array.isArray(e)) {
                        var t = e;
                        if (!t) {
                            var n = Xo.getCurrentTrack.call(this);
                            t = Array.from((n || {}).activeCues || []).map(function(e) {
                                return e.getCueAsHTML()
                            }).map(Bo)
                        }
                        var i = t.map(function(e) {
                            return e.trim()
                        }).join("\n");
                        if (i !== this.elements.captions.innerHTML) {
                            po(this.elements.captions);
                            var r = uo("span", mo(this.config.selectors.caption));
                            r.innerHTML = i, this.elements.captions.appendChild(r), io.call(this, this.media, "cuechange")
                        }
                    } else this.debug.warn("updateCues: Invalid input", e);
            else this.debug.warn("No captions element to render to")
        }
    },
    Zo = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: "16:9",
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.3.12/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"]
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
        settings: ["captions", "quality", "speed"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/v2/video/{0}.json"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption",
            menu: {
                quality: ".js-plyr__menu__list--quality"
            }
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus"
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id"
            }
        },
        keys: {
            google: null
        },
        ads: {
            enabled: !1,
            publisherId: ""
        }
    },
    ea = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    },
    ta = {
        audio: "audio",
        video: "video"
    };
var na = function() {},
    ia = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            ro(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
        }
        return oo(e, [{
            key: "log",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.log, console) : na
            }
        }, {
            key: "warn",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.warn, console) : na
            }
        }, {
            key: "error",
            get: function() {
                return this.enabled ? Function.prototype.bind.call(console.error, console) : na
            }
        }]), e
    }();

function ra() {
    if (this.enabled) {
        var e = this.player.elements.buttons.fullscreen;
        $r.element(e) && (e.pressed = this.active), io.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), Lo.isIos || function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ($r.element(e)) {
                var n = ko.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                    i = n[0],
                    r = n[n.length - 1];
                Zr.call(this, this.elements.container, "keydown", function(e) {
                    if ("Tab" === e.key && 9 === e.keyCode) {
                        var t = So();
                        t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                    }
                }, t, !1)
            }
        }.call(this.player, this.target, this.active)
    }
}

function oa() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    e ? this.scrollPosition = {
        x: window.scrollX || 0,
        y: window.scrollY || 0
    } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", vo(this.target, this.player.config.classNames.fullscreen.fallback, e), ra.call(this)
}
var aa = function() {
    function e(t) {
        var n = this;
        ro(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
            x: 0,
            y: 0
        }, eo.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
            ra.call(n)
        }), eo.call(this.player, this.player.elements.container, "dblclick", function(e) {
            $r.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
        }), this.update()
    }
    return oo(e, [{
        key: "update",
        value: function() {
            this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), vo(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
        }
    }, {
        key: "enter",
        value: function() {
            this.enabled && (Lo.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? $r.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : oa.call(this, !0))
        }
    }, {
        key: "exit",
        value: function() {
            if (this.enabled)
                if (Lo.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                else if (e.native)
                if (this.prefix) {
                    if (!$r.empty(this.prefix)) {
                        var t = "moz" === this.prefix ? "Cancel" : "Exit";
                        document["" + this.prefix + t + this.property]()
                    }
                } else(document.cancelFullScreen || document.exitFullscreen).call(document);
            else oa.call(this, !1)
        }
    }, {
        key: "toggle",
        value: function() {
            this.active ? this.exit() : this.enter()
        }
    }, {
        key: "enabled",
        get: function() {
            return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
        }
    }, {
        key: "active",
        get: function() {
            return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : bo(this.target, this.player.config.classNames.fullscreen.fallback))
        }
    }, {
        key: "target",
        get: function() {
            return Lo.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
        }
    }], [{
        key: "native",
        get: function() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        }
    }, {
        key: "prefix",
        get: function() {
            if ($r.function(document.exitFullscreen)) return "";
            var e = "";
            return ["webkit", "moz", "ms"].some(function(t) {
                return !(!$r.function(document[t + "ExitFullscreen"]) && !$r.function(document[t + "CancelFullScreen"])) && (e = t, !0)
            }), e
        }
    }, {
        key: "property",
        get: function() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
        }
    }]), e
}();

function sa(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return new Promise(function(n, i) {
        var r = new Image,
            o = function() {
                delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
            };
        Object.assign(r, {
            onload: o,
            onerror: o,
            src: e
        })
    })
}
var la = {
        addStyleHook: function() {
            vo(this.elements.container, this.config.selectors.container.replace(".", ""), !0), vo(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
        },
        toggleNativeControls: function() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
        },
        build: function() {
            var e = this;
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void la.toggleNativeControls.call(this, !0);
            $r.element(this.elements.controls) || (Qo.inject.call(this), this.listeners.controls()), la.toggleNativeControls.call(this), this.isHTML5 && Xo.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, Qo.updateVolume.call(this), Qo.timeUpdate.call(this), la.checkPlaying.call(this), vo(this.elements.container, this.config.classNames.pip.supported, Co.pip && this.isHTML5 && this.isVideo), vo(this.elements.container, this.config.classNames.airplay.supported, Co.airplay && this.isHTML5), vo(this.elements.container, this.config.classNames.isIos, Lo.isIos), vo(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
                io.call(e, e.media, "ready")
            }, 0), la.setTitle.call(this), this.poster && la.setPoster.call(this, this.poster, !1).catch(function() {}), this.config.duration && Qo.durationUpdate.call(this)
        },
        setTitle: function() {
            var e = Vo("play", this.config);
            if ($r.string(this.config.title) && !$r.empty(this.config.title) && (e += ", " + this.config.title), Array.from(this.elements.buttons.play || []).forEach(function(t) {
                    t.setAttribute("aria-label", e)
                }), this.isEmbed) {
                var t = To.call(this, "iframe");
                if (!$r.element(t)) return;
                var n = $r.empty(this.config.title) ? "video" : this.config.title,
                    i = Vo("frameTitle", this.config);
                t.setAttribute("title", i.replace("{title}", n))
            }
        },
        togglePoster: function(e) {
            vo(this.elements.container, this.config.classNames.posterEnabled, e)
        },
        setPoster: function(e) {
            var t = this;
            return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function() {
                var e = this;
                return new Promise(function(t) {
                    return e.ready ? setTimeout(t, 0) : eo.call(e, e.elements.container, "ready", t)
                }).then(function() {})
            }.call(this).then(function() {
                return sa(e)
            }).catch(function(n) {
                throw e === t.poster && la.togglePoster.call(t, !1), n
            }).then(function() {
                if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
            }).then(function() {
                return Object.assign(t.elements.poster.style, {
                    backgroundImage: "url('" + e + "')",
                    backgroundSize: ""
                }), la.togglePoster.call(t, !0), e
            })) : Promise.reject(new Error("Poster already set"))
        },
        checkPlaying: function(e) {
            var t = this;
            vo(this.elements.container, this.config.classNames.playing, this.playing), vo(this.elements.container, this.config.classNames.paused, this.paused), vo(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function(e) {
                e.pressed = t.playing
            }), $r.event(e) && "timeupdate" === e.type || la.toggleControls.call(this)
        },
        checkLoading: function(e) {
            var t = this;
            this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
                vo(t.elements.container, t.config.classNames.loading, t.loading), la.toggleControls.call(t)
            }, this.loading ? 250 : 0)
        },
        toggleControls: function(e) {
            var t = this.elements.controls;
            t && this.config.hideControls && this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover))
        }
    },
    ca = function() {
        function e(t) {
            ro(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
        }
        return oo(e, [{
            key: "handleKey",
            value: function(e) {
                var t = this,
                    n = e.keyCode ? e.keyCode : e.which,
                    i = "keydown" === e.type,
                    r = i && n === this.lastKey;
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && $r.number(n)) {
                    if (i) {
                        var o = So();
                        if ($r.element(o) && o !== this.player.elements.inputs.seek && wo(o, this.player.config.selectors.editable)) return;
                        switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                r || (t.player.currentTime = t.player.duration / 10 * (n - 48));
                                break;
                            case 32:
                            case 75:
                                r || this.player.togglePlay();
                                break;
                            case 38:
                                this.player.increaseVolume(.1);
                                break;
                            case 40:
                                this.player.decreaseVolume(.1);
                                break;
                            case 77:
                                r || (this.player.muted = !this.player.muted);
                                break;
                            case 39:
                                this.player.forward();
                                break;
                            case 37:
                                this.player.rewind();
                                break;
                            case 70:
                                this.player.fullscreen.toggle();
                                break;
                            case 67:
                                r || this.player.toggleCaptions();
                                break;
                            case 76:
                                this.player.loop = !this.player.loop
                        }!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === n && this.player.fullscreen.toggle(), this.lastKey = n
                    } else this.lastKey = null
                }
            }
        }, {
            key: "toggleMenu",
            value: function(e) {
                Qo.toggleMenu.call(this.player, e)
            }
        }, {
            key: "firstTouch",
            value: function() {
                this.player.touch = !0, vo(this.player.elements.container, this.player.config.classNames.isTouch, !0)
            }
        }, {
            key: "global",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.player.config.keyboard.global && Zr.call(this.player, window, "keydown keyup", this.handleKey, e, !1), Zr.call(this.player, document.body, "click", this.toggleMenu, e), no.call(this.player, document.body, "touchstart", this.firstTouch)
            }
        }, {
            key: "container",
            value: function() {
                var e = this;
                !this.player.config.keyboard.global && this.player.config.keyboard.focused && eo.call(this.player, this.player.elements.container, "keydown keyup", this.handleKey, !1), eo.call(this.player, this.player.elements.container, "focusout", function(t) {
                    vo(t.target, e.player.config.classNames.tabFocus, !1)
                }), eo.call(this.player, this.player.elements.container, "keydown", function(t) {
                    9 === t.keyCode && setTimeout(function() {
                        vo(So(), e.player.config.classNames.tabFocus, !0)
                    }, 0)
                }), eo.call(this.player, this.player.elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function(t) {
                    var n = e.player.elements.controls;
                    "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                    var i = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) && (la.toggleControls.call(e.player, !0), i = e.player.touch ? 3e3 : 2e3), clearTimeout(e.player.timers.controls), e.player.timers.controls = setTimeout(function() {
                        return la.toggleControls.call(e.player, !1)
                    }, i)
                })
            }
        }, {
            key: "media",
            value: function() {
                var e = this;
                if (eo.call(this.player, this.player.media, "timeupdate seeking seeked", function(t) {
                        return Qo.timeUpdate.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "durationchange loadeddata loadedmetadata", function(t) {
                        return Qo.durationUpdate.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "canplay", function() {
                        yo(e.player.elements.volume, !e.player.hasAudio), yo(e.player.elements.buttons.mute, !e.player.hasAudio)
                    }), eo.call(this.player, this.player.media, "ended", function() {
                        e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart()
                    }), eo.call(this.player, this.player.media, "progress playing seeking seeked", function(t) {
                        return Qo.updateProgress.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "volumechange", function(t) {
                        return Qo.updateVolume.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "playing play pause ended emptied timeupdate", function(t) {
                        return la.checkPlaying.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "waiting canplay seeked playing", function(t) {
                        return la.checkLoading.call(e.player, t)
                    }), eo.call(this.player, this.player.media, "playing", function() {
                        e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function() {
                            return e.player.ads.play()
                        }).catch(function() {
                            return e.player.play()
                        })
                    }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
                    var t = To.call(this.player, "." + this.player.config.classNames.video);
                    if (!$r.element(t)) return;
                    eo.call(this.player, t, "click", function() {
                        e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause())
                    })
                }
                this.player.supported.ui && this.player.config.disableContextMenu && eo.call(this.player, this.player.elements.wrapper, "contextmenu", function(e) {
                    e.preventDefault()
                }, !1), eo.call(this.player, this.player.media, "volumechange", function() {
                    e.player.storage.set({
                        volume: e.player.volume,
                        muted: e.player.muted
                    })
                }), eo.call(this.player, this.player.media, "ratechange", function() {
                    Qo.updateSetting.call(e.player, "speed"), e.player.storage.set({
                        speed: e.player.speed
                    })
                }), eo.call(this.player, this.player.media, "qualityrequested", function(t) {
                    e.player.storage.set({
                        quality: t.detail.quality
                    })
                }), eo.call(this.player, this.player.media, "qualitychange", function(t) {
                    Qo.updateSetting.call(e.player, "quality", null, t.detail.quality)
                });
                var n = this.player.config.events.concat(["keyup", "keydown"]).join(" ");
                eo.call(this.player, this.player.media, n, function(t) {
                    var n = t.detail,
                        i = void 0 === n ? {} : n;
                    "error" === t.type && (i = e.player.media.error), io.call(e.player, e.player.elements.container, t.type, !0, i)
                })
            }
        }, {
            key: "controls",
            value: function() {
                var e = this,
                    t = Lo.isIE ? "change" : "input",
                    n = function(t, n, i) {
                        var r = e.player.config.listeners[i],
                            o = !0;
                        $r.function(r) && (o = r.call(e.player, t)), o && $r.function(n) && n.call(e.player, t)
                    },
                    i = function(t, i, r, o) {
                        var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            s = e.player.config.listeners[o],
                            l = $r.function(s);
                        eo.call(e.player, t, i, function(e) {
                            return n(e, r, o)
                        }, a && !l)
                    };
                this.player.elements.buttons.play && Array.from(this.player.elements.buttons.play).forEach(function(t) {
                    i(t, "click", e.player.togglePlay, "play")
                }), i(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), i(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), i(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), i(this.player.elements.buttons.mute, "click", function() {
                    e.player.muted = !e.player.muted
                }, "mute"), i(this.player.elements.buttons.captions, "click", function() {
                    return e.player.toggleCaptions()
                }), i(this.player.elements.buttons.fullscreen, "click", function() {
                    e.player.fullscreen.toggle()
                }, "fullscreen"), i(this.player.elements.buttons.pip, "click", function() {
                    e.player.pip = "toggle"
                }, "pip"), i(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), i(this.player.elements.buttons.settings, "click", function(t) {
                    Qo.toggleMenu.call(e.player, t)
                }), i(this.player.elements.settings.form, "click", function(t) {
                    t.stopPropagation();
                    var i = function() {
                        var t = "plyr-settings-" + e.player.id + "-home";
                        Qo.showTab.call(e.player, t)
                    };
                    if (wo(t.target, e.player.config.selectors.inputs.language)) n(t, function() {
                        e.player.currentTrack = Number(t.target.value), i()
                    }, "language");
                    else if (wo(t.target, e.player.config.selectors.inputs.quality)) n(t, function() {
                        e.player.quality = t.target.value, i()
                    }, "quality");
                    else if (wo(t.target, e.player.config.selectors.inputs.speed)) n(t, function() {
                        e.player.speed = parseFloat(t.target.value), i()
                    }, "speed");
                    else {
                        var r = t.target;
                        Qo.showTab.call(e.player, r.getAttribute("aria-controls"))
                    }
                }), i(this.player.elements.inputs.seek, "mousedown mousemove", function(t) {
                    var n = e.player.elements.progress.getBoundingClientRect(),
                        i = 100 / n.width * (t.pageX - n.left);
                    t.currentTarget.setAttribute("seek-value", i)
                }), i(this.player.elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function(t) {
                    var n = t.currentTarget,
                        i = t.keyCode ? t.keyCode : t.which,
                        r = t.type;
                    if ("keydown" !== r && "keyup" !== r || 39 === i || 37 === i) {
                        var o = n.hasAttribute("play-on-seeked"),
                            a = ["mouseup", "touchend", "keyup"].includes(t.type);
                        o && a ? (n.removeAttribute("play-on-seeked"), e.player.play()) : !a && e.player.playing && (n.setAttribute("play-on-seeked", ""), e.player.pause())
                    }
                }), i(this.player.elements.inputs.seek, t, function(t) {
                    var n = t.currentTarget,
                        i = n.getAttribute("seek-value");
                    $r.empty(i) && (i = n.value), n.removeAttribute("seek-value"), e.player.currentTime = i / n.max * e.player.duration
                }, "seek"), this.player.config.toggleInvert && !$r.element(this.player.elements.display.duration) && i(this.player.elements.display.currentTime, "click", function() {
                    0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, Qo.timeUpdate.call(e.player))
                }), i(this.player.elements.inputs.volume, t, function(t) {
                    e.player.volume = t.target.value
                }, "volume"), Lo.isWebkit && Array.from(ko.call(this.player, 'input[type="range"]')).forEach(function(t) {
                    i(t, "input", function(t) {
                        return Qo.updateRangeFill.call(e.player, t.target)
                    })
                }), i(this.player.elements.progress, "mouseenter mouseleave mousemove", function(t) {
                    return Qo.updateSeekTooltip.call(e.player, t)
                }), i(this.player.elements.controls, "mouseenter mouseleave", function(t) {
                    e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type
                }), i(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function(t) {
                    e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                }), i(this.player.elements.controls, "focusin focusout", function(t) {
                    var n = e.player,
                        i = n.config,
                        r = n.elements,
                        o = n.timers;
                    if (vo(r.controls, i.classNames.noTransition, "focusin" === t.type), la.toggleControls.call(e.player, "focusin" === t.type), "focusin" === t.type) {
                        setTimeout(function() {
                            vo(r.controls, i.classNames.noTransition, !1)
                        }, 0);
                        var a = e.touch ? 3e3 : 4e3;
                        clearTimeout(o.controls), o.controls = setTimeout(function() {
                            return la.toggleControls.call(e.player, !1)
                        }, a)
                    }
                }), i(this.player.elements.inputs.volume, "wheel", function(t) {
                    var n = t.webkitDirectionInvertedFromDevice,
                        i = [t.deltaX, -t.deltaY].map(function(e) {
                            return n ? -e : e
                        }),
                        r = so(i, 2),
                        o = r[0],
                        a = r[1],
                        s = Math.sign(Math.abs(o) > Math.abs(a) ? o : a);
                    e.player.increaseVolume(s / 50);
                    var l = e.player.media.volume;
                    (1 === s && l < 1 || -1 === s && l > 0) && t.preventDefault()
                }, "volume", !1)
            }
        }]), e
    }(),
    ua = t(function(e, t) {
        var n;
        n = function() {
            var e = function() {},
                t = {},
                n = {},
                i = {};

            function r(e, t) {
                if (e) {
                    var r = i[e];
                    if (n[e] = t, r)
                        for (; r.length;) r[0](e, t), r.splice(0, 1)
                }
            }

            function o(t, n) {
                t.call && (t = {
                    success: t
                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
            }

            function a(t, n, i, r) {
                var o, s, l = document,
                    c = i.async,
                    u = (i.numRetries || 0) + 1,
                    f = i.before || e,
                    h = t.replace(/^(css|img)!/, "");
                r = r || 0, /(^css!|\.css$)/.test(t) ? (o = !0, (s = l.createElement("link")).rel = "stylesheet", s.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (s = l.createElement("img")).src = h : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function(e) {
                    var l = e.type[0];
                    if (o && "hideFocus" in s) try {
                        s.sheet.cssText.length || (l = "e")
                    } catch (e) {
                        l = "e"
                    }
                    if ("e" == l && (r += 1) < u) return a(t, n, i, r);
                    n(t, l, e.defaultPrevented)
                }, !1 !== f(t, s) && l.head.appendChild(s)
            }

            function s(e, n, i) {
                var s, l;
                if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                    if (s in t) throw "LoadJS";
                    t[s] = !0
                }! function(e, t, n) {
                    var i, r, o = (e = e.push ? e : [e]).length,
                        s = o,
                        l = [];
                    for (i = function(e, n, i) {
                            if ("e" == n && l.push(e), "b" == n) {
                                if (!i) return;
                                l.push(e)
                            }--o || t(l)
                        }, r = 0; r < s; r++) a(e[r], i, n)
                }(e, function(e) {
                    o(l, e), r(s, e)
                }, l)
            }
            return s.ready = function(e, t) {
                return function(e, t) {
                    e = e.push ? e : [e];
                    var r, o, a, s = [],
                        l = e.length,
                        c = l;
                    for (r = function(e, n) {
                            n.length && s.push(e), --c || t(s)
                        }; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
                }(e, function(e) {
                    o(t, e)
                }), s
            }, s.done = function(e) {
                r(e, [])
            }, s.reset = function() {
                t = {}, n = {}, i = {}
            }, s.isDefined = function(e) {
                return e in t
            }, s
        }, e.exports = n()
    });

function fa(e) {
    return new Promise(function(t, n) {
        ua(e, {
            success: t,
            error: n
        })
    })
}

function ha(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, io.call(this, this.media, e ? "play" : "pause"))
}
var da = {
    setup: function() {
        var e = this;
        vo(this.elements.wrapper, this.config.classNames.embed, !0), da.setAspectRatio.call(this), $r.object(window.Vimeo) ? da.ready.call(this) : fa(this.config.urls.vimeo.sdk).then(function() {
            da.ready.call(e)
        }).catch(function(t) {
            e.debug.warn("Vimeo API failed to load", t)
        })
    },
    setAspectRatio: function(e) {
        var t = ($r.string(e) ? e : this.config.ratio).split(":"),
            n = so(t, 2),
            i = 100 / n[0] * n[1];
        if (this.elements.wrapper.style.paddingBottom = i + "%", this.supported.ui) {
            var r = (240 - i) / 4.8;
            this.media.style.transform = "translateY(-" + r + "%)"
        }
    },
    ready: function() {
        var e = this,
            t = this,
            n = $o({
                loop: t.config.loop.active,
                autoplay: t.autoplay,
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: 0,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative
            }),
            i = t.media.getAttribute("src");
        $r.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));
        var r, o = (r = i, $r.empty(r) ? null : $r.number(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r),
            a = uo("iframe"),
            s = Io(t.config.urls.vimeo.iframe, o, n);
        a.setAttribute("src", s), a.setAttribute("allowfullscreen", ""), a.setAttribute("allowtransparency", ""), a.setAttribute("allow", "autoplay");
        var l = uo("div", {
            poster: t.poster,
            class: t.config.classNames.embedContainer
        });
        l.appendChild(a), t.media = go(l, t.media), Ho(Io(t.config.urls.vimeo.api, o), "json").then(function(e) {
            if (!$r.empty(e)) {
                var n = new URL(e[0].thumbnail_large);
                n.pathname = n.pathname.split("_")[0] + ".jpg", la.setPoster.call(t, n.href).catch(function() {})
            }
        }), t.embed = new window.Vimeo.Player(a, {
            autopause: t.config.autopause,
            muted: t.muted
        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
            return ha.call(t, !0), t.embed.play()
        }, t.media.pause = function() {
            return ha.call(t, !1), t.embed.pause()
        }, t.media.stop = function() {
            t.pause(), t.currentTime = 0
        };
        var c = t.media.currentTime;
        Object.defineProperty(t.media, "currentTime", {
            get: function() {
                return c
            },
            set: function(e) {
                var n = t.embed,
                    i = t.media,
                    r = t.paused,
                    o = t.volume,
                    a = r && !n.hasPlayed;
                i.seeking = !0, io.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then(function() {
                    return n.setCurrentTime(e)
                }).then(function() {
                    return a && n.pause()
                }).then(function() {
                    return a && n.setVolume(o)
                }).catch(function() {})
            }
        });
        var u = t.config.speed.selected;
        Object.defineProperty(t.media, "playbackRate", {
            get: function() {
                return u
            },
            set: function(e) {
                t.embed.setPlaybackRate(e).then(function() {
                    u = e, io.call(t, t.media, "ratechange")
                }).catch(function(e) {
                    "Error" === e.name && Qo.setSpeedMenu.call(t, [])
                })
            }
        });
        var f = t.config.volume;
        Object.defineProperty(t.media, "volume", {
            get: function() {
                return f
            },
            set: function(e) {
                t.embed.setVolume(e).then(function() {
                    f = e, io.call(t, t.media, "volumechange")
                })
            }
        });
        var h = t.config.muted;
        Object.defineProperty(t.media, "muted", {
            get: function() {
                return h
            },
            set: function(e) {
                var n = !!$r.boolean(e) && e;
                t.embed.setVolume(n ? 0 : t.config.volume).then(function() {
                    h = n, io.call(t, t.media, "volumechange")
                })
            }
        });
        var d = t.config.loop;
        Object.defineProperty(t.media, "loop", {
            get: function() {
                return d
            },
            set: function(e) {
                var n = $r.boolean(e) ? e : t.config.loop.active;
                t.embed.setLoop(n).then(function() {
                    d = n
                })
            }
        });
        var p = void 0;
        t.embed.getVideoUrl().then(function(e) {
            p = e
        }).catch(function(t) {
            e.debug.warn(t)
        }), Object.defineProperty(t.media, "currentSrc", {
            get: function() {
                return p
            }
        }), Object.defineProperty(t.media, "ended", {
            get: function() {
                return t.currentTime === t.duration
            }
        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
            var n = function(e, t) {
                var n = function e(t, n) {
                    return 0 === n ? t : e(n, t % n)
                }(e, t);
                return e / n + ":" + t / n
            }(t[0], t[1]);
            da.setAspectRatio.call(e, n)
        }), t.embed.setAutopause(t.config.autopause).then(function(e) {
            t.config.autopause = e
        }), t.embed.getVideoTitle().then(function(n) {
            t.config.title = n, la.setTitle.call(e)
        }), t.embed.getCurrentTime().then(function(e) {
            c = e, io.call(t, t.media, "timeupdate")
        }), t.embed.getDuration().then(function(e) {
            t.media.duration = e, io.call(t, t.media, "durationchange")
        }), t.embed.getTextTracks().then(function(e) {
            t.media.textTracks = e, Xo.setup.call(t)
        }), t.embed.on("cuechange", function(e) {
            var n = e.cues,
                i = (void 0 === n ? [] : n).map(function(e) {
                    return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;
                    var t, n, i
                });
            Xo.updateCues.call(t, i)
        }), t.embed.on("loaded", function() {
            (t.embed.getPaused().then(function(e) {
                ha.call(t, !e), e || io.call(t, t.media, "playing")
            }), $r.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
        }), t.embed.on("play", function() {
            ha.call(t, !0), io.call(t, t.media, "playing")
        }), t.embed.on("pause", function() {
            ha.call(t, !1)
        }), t.embed.on("timeupdate", function(e) {
            t.media.seeking = !1, c = e.seconds, io.call(t, t.media, "timeupdate")
        }), t.embed.on("progress", function(e) {
            t.media.buffered = e.percent, io.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && io.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
                e !== t.media.duration && (t.media.duration = e, io.call(t, t.media, "durationchange"))
            })
        }), t.embed.on("seeked", function() {
            t.media.seeking = !1, io.call(t, t.media, "seeked")
        }), t.embed.on("ended", function() {
            t.media.paused = !0, io.call(t, t.media, "ended")
        }), t.embed.on("error", function(e) {
            t.media.error = e, io.call(t, t.media, "error")
        }), setTimeout(function() {
            return la.build.call(t)
        }, 0)
    }
};

function pa(e) {
    var t = Object.entries({
        hd2160: 2160,
        hd1440: 1440,
        hd1080: 1080,
        hd720: 720,
        large: 480,
        medium: 360,
        small: 240,
        tiny: 144
    }).find(function(t) {
        return t.includes(e)
    });
    return t ? t.find(function(t) {
        return t !== e
    }) : "default"
}

function ga(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, io.call(this, this.media, e ? "play" : "pause"))
}
var ma, ya = {
        setup: function() {
            var e = this;
            vo(this.elements.wrapper, this.config.classNames.embed, !0), ya.setAspectRatio.call(this), $r.object(window.YT) && $r.function(window.YT.Player) ? ya.ready.call(this) : (fa(this.config.urls.youtube.sdk).catch(function(t) {
                e.debug.warn("YouTube API failed to load", t)
            }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
                ya.ready.call(e)
            }), window.onYouTubeIframeAPIReady = function() {
                window.onYouTubeReadyCallbacks.forEach(function(e) {
                    e()
                })
            })
        },
        getTitle: function(e) {
            var t = this;
            if ($r.function(this.embed.getVideoData)) {
                var n = this.embed.getVideoData().title;
                if ($r.empty(n)) return this.config.title = n, void la.setTitle.call(this)
            }
            var i = this.config.keys.google;
            $r.string(i) && !$r.empty(i) && Ho(Io(this.config.urls.youtube.api, e, i)).then(function(e) {
                $r.object(e) && (t.config.title = e.items[0].snippet.title, la.setTitle.call(t))
            }).catch(function() {})
        },
        setAspectRatio: function() {
            var e = this.config.ratio.split(":");
            this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
        },
        ready: function() {
            var e = this,
                t = e.media.getAttribute("id");
            if ($r.empty(t) || !t.startsWith("youtube-")) {
                var n = e.media.getAttribute("src");
                $r.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                var i, r = (i = n, $r.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
                    o = e.provider + "-" + Math.floor(1e4 * Math.random()),
                    a = uo("div", {
                        id: o,
                        poster: e.poster
                    });
                e.media = go(a, e.media);
                var s = function(e) {
                    return "https://img.youtube.com/vi/" + r + "/" + e + "default.jpg"
                };
                sa(s("maxres"), 121).catch(function() {
                    return sa(s("sd"), 121)
                }).catch(function() {
                    return sa(s("hq"))
                }).then(function(t) {
                    return la.setPoster.call(e, t.src)
                }).then(function(t) {
                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                }).catch(function() {}), e.embed = new window.YT.Player(o, {
                    videoId: r,
                    playerVars: {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui ? 0 : 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        disablekb: 1,
                        playsinline: 1,
                        widget_referrer: window ? window.location.href : null,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language
                    },
                    events: {
                        onError: function(t) {
                            if (!e.media.error) {
                                var n = t.data,
                                    i = {
                                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                                        150: "The owner of the requested video does not allow it to be played in embedded players."
                                    } [n] || "An unknown error occured";
                                e.media.error = {
                                    code: n,
                                    message: i
                                }, io.call(e, e.media, "error")
                            }
                        },
                        onPlaybackQualityChange: function() {
                            io.call(e, e.media, "qualitychange", !1, {
                                quality: e.media.quality
                            })
                        },
                        onPlaybackRateChange: function(t) {
                            var n = t.target;
                            e.media.playbackRate = n.getPlaybackRate(), io.call(e, e.media, "ratechange")
                        },
                        onReady: function(t) {
                            if (!$r.function(e.media.play)) {
                                var n = t.target;
                                ya.getTitle.call(e, r), e.media.play = function() {
                                    ga.call(e, !0), n.playVideo()
                                }, e.media.pause = function() {
                                    ga.call(e, !1), n.pauseVideo()
                                }, e.media.stop = function() {
                                    n.stopVideo()
                                }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                    get: function() {
                                        return Number(n.getCurrentTime())
                                    },
                                    set: function(t) {
                                        e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, io.call(e, e.media, "seeking"), n.seekTo(t)
                                    }
                                }), Object.defineProperty(e.media, "playbackRate", {
                                    get: function() {
                                        return n.getPlaybackRate()
                                    },
                                    set: function(e) {
                                        n.setPlaybackRate(e)
                                    }
                                }), Object.defineProperty(e.media, "quality", {
                                    get: function() {
                                        return pa(n.getPlaybackQuality())
                                    },
                                    set: function(e) {
                                        n.setPlaybackQuality(pa(e))
                                    }
                                });
                                var i = e.config.volume;
                                Object.defineProperty(e.media, "volume", {
                                    get: function() {
                                        return i
                                    },
                                    set: function(t) {
                                        i = t, n.setVolume(100 * i), io.call(e, e.media, "volumechange")
                                    }
                                });
                                var o = e.config.muted;
                                Object.defineProperty(e.media, "muted", {
                                    get: function() {
                                        return o
                                    },
                                    set: function(t) {
                                        var i = $r.boolean(t) ? t : o;
                                        o = i, n[i ? "mute" : "unMute"](), io.call(e, e.media, "volumechange")
                                    }
                                }), Object.defineProperty(e.media, "currentSrc", {
                                    get: function() {
                                        return n.getVideoUrl()
                                    }
                                }), Object.defineProperty(e.media, "ended", {
                                    get: function() {
                                        return e.currentTime === e.duration
                                    }
                                }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), io.call(e, e.media, "timeupdate"), io.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                                    e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && io.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), io.call(e, e.media, "canplaythrough"))
                                }, 200), setTimeout(function() {
                                    return la.build.call(e)
                                }, 50)
                            }
                        },
                        onStateChange: function(t) {
                            var n, i = t.target;
                            switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, io.call(e, e.media, "seeked")), t.data) {
                                case -1:
                                    io.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), io.call(e, e.media, "progress");
                                    break;
                                case 0:
                                    ga.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : io.call(e, e.media, "ended");
                                    break;
                                case 1:
                                    e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ga.call(e, !0), io.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                                        io.call(e, e.media, "timeupdate")
                                    }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), io.call(e, e.media, "durationchange")), Qo.setQualityMenu.call(e, (n = i.getAvailableQualityLevels(), $r.empty(n) ? n : Do(n.map(function(e) {
                                        return pa(e)
                                    })))));
                                    break;
                                case 2:
                                    e.muted || e.embed.unMute(), ga.call(e, !1)
                            }
                            io.call(e, e.elements.container, "statechange", !1, {
                                code: t.data
                            })
                        }
                    }
                })
            }
        }
    },
    va = {
        setup: function() {
            this.media ? (vo(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), vo(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && vo(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = uo("div", {
                class: this.config.classNames.video
            }), lo(this.media, this.elements.wrapper), this.elements.poster = uo("div", {
                class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Oo.extend.call(this) : this.isYouTube ? ya.setup.call(this) : this.isVimeo && da.setup.call(this)) : this.debug.warn("No media element found!")
        }
    },
    ba = function() {
        function e(t) {
            var n = this;
            ro(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
                container: null,
                displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
                n.on("loaded", e), n.on("error", t)
            }), this.load()
        }
        return oo(e, [{
            key: "load",
            value: function() {
                var e = this;
                this.enabled && ($r.object(window.google) && $r.object(window.google.ima) ? this.ready() : fa(this.player.config.urls.googleIMA.sdk).then(function() {
                    e.ready()
                }).catch(function() {
                    e.trigger("error", new Error("Google IMA SDK failed to load"))
                }))
            }
        }, {
            key: "ready",
            value: function() {
                var e = this;
                this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
                    e.clearSafetyTimer("onAdsManagerLoaded()")
                }), this.listeners(), this.setupIMA()
            }
        }, {
            key: "setupIMA",
            value: function() {
                this.elements.container = uo("div", {
                    class: this.player.config.classNames.ads
                }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
            }
        }, {
            key: "requestAds",
            value: function() {
                var e = this,
                    t = this.player.elements.container;
                try {
                    this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                        return e.onAdsManagerLoaded(t)
                    }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                        return e.onAdError(t)
                    }, !1);
                    var n = new google.ima.AdsRequest;
                    n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                } catch (e) {
                    this.onAdError(e)
                }
            }
        }, {
            key: "pollCountdown",
            value: function() {
                var e = this;
                if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval(function() {
                    var t = Yo(Math.max(e.manager.getRemainingTime(), 0)),
                        n = Vo("advertisement", e.player.config) + " - " + t;
                    e.elements.container.setAttribute("data-badge-text", n)
                }, 100)
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(e) {
                var t = this,
                    n = new google.ima.AdsRenderingSettings;
                n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), $r.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
                    if (0 !== e && -1 !== e && e < t.player.duration) {
                        var n = t.player.elements.progress;
                        if ($r.element(n)) {
                            var i = 100 / t.player.duration * e,
                                r = uo("span", {
                                    class: t.player.config.classNames.cues
                                });
                            r.style.left = i.toString() + "%", n.appendChild(r)
                        }
                    }
                }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                    return t.onAdError(e)
                }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
                    t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                        return t.onAdEvent(e)
                    })
                }), this.trigger("loaded")
            }
        }, {
            key: "onAdEvent",
            value: function(e) {
                var t = this,
                    n = this.player.elements.container,
                    i = e.getAd(),
                    r = function(e) {
                        var n = "ads" + e.replace(/_/g, "").toLowerCase();
                        io.call(t.player, t.player.media, n)
                    };
                switch (e.type) {
                    case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        r(e.type), this.loadAds();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        r(e.type), this.pauseContent();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        r(e.type), this.pollCountdown(), this.resumeContent();
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                    case google.ima.AdEvent.Type.MIDPOINT:
                    case google.ima.AdEvent.Type.COMPLETE:
                    case google.ima.AdEvent.Type.IMPRESSION:
                    case google.ima.AdEvent.Type.CLICK:
                        r(e.type)
                }
            }
        }, {
            key: "onAdError",
            value: function(e) {
                this.cancel(), this.player.debug.warn("Ads error", e)
            }
        }, {
            key: "listeners",
            value: function() {
                var e = this,
                    t = this.player.elements.container,
                    n = void 0;
                this.player.on("ended", function() {
                    e.loader.contentComplete()
                }), this.player.on("seeking", function() {
                    return n = e.player.currentTime
                }), this.player.on("seeked", function() {
                    var t = e.player.currentTime;
                    $r.empty(e.cuePoints) || e.cuePoints.forEach(function(i, r) {
                        n < i && i < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1))
                    })
                }), window.addEventListener("resize", function() {
                    e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                })
            }
        }, {
            key: "play",
            value: function() {
                var e = this,
                    t = this.player.elements.container;
                this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
                    e.elements.displayContainer.initialize();
                    try {
                        e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                    } catch (t) {
                        e.onAdError(t)
                    }
                }).catch(function() {})
            }
        }, {
            key: "resumeContent",
            value: function() {
                this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
            }
        }, {
            key: "pauseContent",
            value: function() {
                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
            }
        }, {
            key: "cancel",
            value: function() {
                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
            }
        }, {
            key: "loadAds",
            value: function() {
                var e = this;
                this.managerPromise.then(function() {
                    e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
                        e.on("loaded", t), e.player.debug.log(e.manager)
                    }), e.requestAds()
                }).catch(function() {})
            }
        }, {
            key: "trigger",
            value: function(e) {
                for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                var o = this.events[e];
                $r.array(o) && o.forEach(function(e) {
                    $r.function(e) && e.apply(t, i)
                })
            }
        }, {
            key: "on",
            value: function(e, t) {
                return $r.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
            }
        }, {
            key: "startSafetyTimer",
            value: function(e, t) {
                var n = this;
                this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function() {
                    n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                }, e)
            }
        }, {
            key: "clearSafetyTimer",
            value: function(e) {
                $r.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
            }
        }, {
            key: "enabled",
            get: function() {
                return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !$r.empty(this.publisherId)
            }
        }, {
            key: "tagUrl",
            get: function() {
                return "https://go.aniview.com/api/adserver6/vast/?" + $o({
                    AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                    AV_CHANNELID: "5a0458dc28a06145e4519d21",
                    AV_URL: window.location.hostname,
                    cb: Date.now(),
                    AV_WIDTH: 640,
                    AV_HEIGHT: 480,
                    AV_CDIM2: this.publisherId
                })
            }
        }]), e
    }(),
    wa = {
        insertElements: function(e, t) {
            var n = this;
            $r.string(t) ? fo(e, this.media, {
                src: t
            }) : $r.array(t) && t.forEach(function(t) {
                fo(e, n.media, t)
            })
        },
        change: function(e) {
            var t = this;
            No(e, "sources.length") ? (Oo.cancelRequests.call(this), this.destroy.call(this, function() {
                t.options.quality = [], ho(t.media), t.media = null, $r.element(t.elements.container) && t.elements.container.removeAttribute("class");
                var n = e.sources,
                    i = e.type,
                    r = so(n, 1)[0],
                    o = r.provider,
                    a = void 0 === o ? ea.html5 : o,
                    s = r.src,
                    l = "html5" === a ? i : "div",
                    c = "html5" === a ? {} : {
                        src: s
                    };
                Object.assign(t, {
                    provider: a,
                    type: i,
                    supported: Co.check(i, a, t.config.playsinline),
                    media: uo(l, c)
                }), t.elements.container.appendChild(t.media), $r.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), $r.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), la.addStyleHook.call(t), t.isHTML5 && wa.insertElements.call(t, "source", n), t.config.title = e.title, va.setup.call(t), t.isHTML5 && ("tracks" in e && wa.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && la.build.call(t), t.fullscreen.update()
            }, !0)) : this.debug.warn("Invalid source format")
        }
    },
    ka = function() {
        function e(t, n) {
            var i = this;
            if (ro(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Co.touch, this.media = t, $r.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || $r.nodeList(this.media) || $r.array(this.media)) && (this.media = this.media[0]), this.config = jo({}, Zo, e.defaults, n || {}, function() {
                    try {
                        return JSON.parse(i.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        menu: null,
                        panes: {},
                        tabs: {}
                    },
                    captions: null
                }, this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new ia(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Co), !$r.nullOrUndefined(this.media) && $r.element(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (Co.check().api) {
                    var r = this.media.cloneNode(!0);
                    r.autoplay = !1, this.elements.original = r;
                    var o = this.media.tagName.toLowerCase(),
                        a = null,
                        s = null;
                    switch (o) {
                        case "div":
                            if (a = this.media.querySelector("iframe"), $r.element(a)) {
                                if (s = Jo(a.getAttribute("src")), this.provider = function(e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? ea.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ea.vimeo : null
                                    }(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
                                    var l = ["1", "true"];
                                    l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if ($r.empty(this.provider) || !Object.keys(ea).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = ta.video;
                            break;
                        case "video":
                        case "audio":
                            this.type = o, this.provider = ea.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = Co.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ca(this), this.storage = new Uo(this), this.media.plyr = this, $r.element(this.elements.container) || (this.elements.container = uo("div"), lo(this.media, this.elements.container)), la.addStyleHook.call(this), va.setup.call(this), this.config.debug && eo.call(this, this.elements.container, this.config.events.join(" "), function(e) {
                        i.debug.log("event: " + e.type)
                    }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && la.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new aa(this), this.ads = new ba(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return oo(e, [{
            key: "play",
            value: function() {
                return $r.function(this.media.play) ? this.media.play() : null
            }
        }, {
            key: "pause",
            value: function() {
                this.playing && $r.function(this.media.pause) && this.media.pause()
            }
        }, {
            key: "togglePlay",
            value: function(e) {
                ($r.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.isHTML5 ? (this.pause(), this.restart()) : $r.function(this.media.stop) && this.media.stop()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(e) {
                this.currentTime = this.currentTime - ($r.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "forward",
            value: function(e) {
                this.currentTime = this.currentTime + ($r.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "increaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + ($r.number(e) ? e : 0)
            }
        }, {
            key: "decreaseVolume",
            value: function(e) {
                this.increaseVolume(-e)
            }
        }, {
            key: "toggleCaptions",
            value: function(e) {
                Xo.toggle.call(this, e, !1)
            }
        }, {
            key: "airplay",
            value: function() {
                Co.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "toggleControls",
            value: function(e) {
                if (this.supported.ui && !this.isAudio) {
                    var t = bo(this.elements.container, this.config.classNames.hideControls),
                        n = void 0 === e ? void 0 : !e,
                        i = vo(this.elements.container, this.config.classNames.hideControls, n);
                    if (i && this.config.controls.includes("settings") && !$r.empty(this.config.settings) && Qo.toggleMenu.call(this, !1), i !== t) {
                        var r = i ? "controlshidden" : "controlsshown";
                        io.call(this, this.media, r)
                    }
                    return !i
                }
                return !1
            }
        }, {
            key: "on",
            value: function(e, t) {
                eo.call(this, this.elements.container, e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                no.call(this, this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                to(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.ready) {
                    var i = function() {
                        document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (ho(t.elements.buttons.play), ho(t.elements.captions), ho(t.elements.controls), ho(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), $r.function(e) && e()) : (function() {
                            this && this.eventListeners && (this.eventListeners.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    i = e.callback,
                                    r = e.options;
                                t.removeEventListener(n, i, r)
                            }), this.eventListeners = [])
                        }.call(t), go(t.elements.original, t.elements.container), io.call(t, t.elements.original, "destroyed", !0), $r.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
                            t.elements = null, t.media = null
                        }, 200))
                    };
                    this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), la.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && $r.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                }
            }
        }, {
            key: "supports",
            value: function(e) {
                return Co.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return Boolean(this.provider === ea.html5)
            }
        }, {
            key: "isEmbed",
            get: function() {
                return Boolean(this.isYouTube || this.isVimeo)
            }
        }, {
            key: "isYouTube",
            get: function() {
                return Boolean(this.provider === ea.youtube)
            }
        }, {
            key: "isVimeo",
            get: function() {
                return Boolean(this.provider === ea.vimeo)
            }
        }, {
            key: "isVideo",
            get: function() {
                return Boolean(this.type === ta.video)
            }
        }, {
            key: "isAudio",
            get: function() {
                return Boolean(this.type === ta.audio)
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                if (this.duration) {
                    var t = $r.number(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to " + this.currentTime + " seconds")
                }
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return $r.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    n = $r.number(t) && t !== 1 / 0 ? t : 0;
                return e || n
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                $r.string(t) && (t = Number(t)), $r.number(t) || (t = this.storage.get("volume")), $r.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !$r.empty(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                $r.boolean(t) || (t = this.storage.get("muted")), $r.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = null;
                $r.number(e) && (t = e), $r.number(t) || (t = this.storage.get("speed")), $r.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = this.config.quality,
                    n = this.options.quality;
                if (n.length) {
                    var i = [!$r.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find($r.number);
                    if (!n.includes(i)) {
                        var r = function(e, t) {
                            return $r.array(e) && e.length ? e.reduce(function(e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            }) : null
                        }(n, i);
                        this.debug.warn("Unsupported quality option: " + i + ", using " + r + " instead"), i = r
                    }
                    io.call(this, this.media, "qualityrequested", !1, {
                        quality: i
                    }), t.selected = i, this.media.quality = i
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = $r.boolean(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                wa.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? la.setPoster.call(this, e, !1).catch(function() {}) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = $r.boolean(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function(e) {
                Xo.set.call(this, e, !1)
            },
            get: function() {
                var e = this.captions,
                    t = e.toggled,
                    n = e.currentTrack;
                return t ? n : -1
            }
        }, {
            key: "language",
            set: function(e) {
                Xo.setLanguage.call(this, e, !1)
            },
            get: function() {
                return (Xo.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function(e) {
                var t = "picture-in-picture",
                    n = "inline";
                if (Co.pip) {
                    var i = $r.boolean(e) ? e : this.pip === n;
                    this.media.webkitSetPresentationMode(i ? t : n)
                }
            },
            get: function() {
                return Co.pip ? this.media.webkitPresentationMode : null
            }
        }], [{
            key: "supported",
            value: function(e, t, n) {
                return Co.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return Wo(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null;
                return $r.string(t) ? i = Array.from(document.querySelectorAll(t)) : $r.nodeList(t) ? i = Array.from(t) : $r.array(t) && (i = t.filter($r.element)), $r.empty(i) ? null : i.map(function(t) {
                    return new e(t, n)
                })
            }
        }]), e
    }();
return ka.defaults = (ma = Zo, JSON.parse(JSON.stringify(ma))), ka
});
// # sourceMappingURL=plyr.polyfilled.js.map
