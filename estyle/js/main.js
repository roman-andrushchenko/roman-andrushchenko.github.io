function fadeOutnojquery(e) { e.style.opacity = 1;
    var t = setInterval(function() { e.style.opacity = e.style.opacity - .05, e.style.opacity <= .05 && (clearInterval(t), hellopreloader.style.display = "none") }, 16) }! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) { "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n) }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

    function r(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n }) : "string" != typeof t ? he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e }

    function s(e) {
        var t = {};
        return he.each(e.match(Ne) || [], function(e, n) { t[n] = !0 }), t }

    function a(e) {
        return e }

    function l(e) {
        throw e }

    function u(e, t, n) {
        var i;
        try { e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e) } catch (e) { n.call(void 0, e) } }

    function c() { te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready() }

    function f() { this.expando = he.expando + f.uid++ }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e) }

    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(ze, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try { n = d(n) } catch (e) {}
                Ze.set(e, t, n) } else n = void 0;
        return n }

    function h(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur() } : function() {
                return he.css(e, t, "") },
            l = a(),
            u = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== u && +l) && Re.exec(he.css(e, t));
        if (c && c[3] !== u) { u = u || c[3], n = n || [], c = +l || 1;
            do { o = o || ".5", c /= o, he.style(e, t, c + u) } while (o !== (o = a() / l) && 1 !== o && --s) }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ue[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[i] = r, r) }

    function m(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Pe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Ge(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", Pe.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e }

    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval")) }

    function w(e, t, n, i, r) {
        for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === he.type(o)) he.merge(d, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Be.exec(o) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            he.merge(d, s.childNodes), (s = f.firstChild).textContent = "" } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (i && he.inArray(o, i) > -1) r && r.push(o);
            else if (u = he.contains(o.ownerDocument, o), s = v(f.appendChild(o), "script"), u && y(s), n)
            for (c = 0; o = s[c++];) Je.test(o.type || "") && n.push(o);
        return f }

    function b() {
        return !0 }

    function I() {
        return !1 }

    function x() {
        try {
            return te.activeElement } catch (e) {} }

    function C(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) C(e, a, n, i, t[a], o);
            return e }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = I;
        else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return he().off(e), s.apply(this, arguments) }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function() { he.event.add(this, t, r, i, n) }) }

    function S(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e }

    function M(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function A(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function E(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (o = Pe.access(e), s = Pe.set(t, o), u = o.events)) { delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) he.event.add(t, r, u[r][n]) }
            Ze.hasData(e) && (a = Ze.access(e), l = he.extend({}, a), Ze.set(t, l)) } }

    function T(e, t) {
        var n = t.nodeName.toLowerCase(); "input" === n && Fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function N(e, t, i, r) { t = re.apply([], t);
        var o, s, a, l, u, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = he.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), N(o, t, i, r) });
        if (d && (o = w(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (l = (a = he.map(v(o, "script"), M)).length; f < d; f++) u = o, f !== p && (u = he.clone(u, !0, !0), l && he.merge(a, v(u, "script"))), i.call(e[f], u, f);
            if (l)
                for (c = a[a.length - 1].ownerDocument, he.map(a, A), f = 0; f < l; f++) u = a[f], Je.test(u.type || "") && !Pe.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : n(u.textContent.replace(it, ""), c)) }
        return e }

    function D(e, t, n) {
        for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return e }

    function j(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s }

    function L(e, t) {
        return { get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function k(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;)
            if ((e = ct[n] + t) in ft) return e }

    function P(e, t, n) {
        var i = Re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function Z(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += he.css(e, n + We[o], !0, r)), i ? ("content" === n && (s -= he.css(e, "padding" + We[o], !0, r)), "margin" !== n && (s -= he.css(e, "border" + We[o] + "Width", !0, r))) : (s += he.css(e, "padding" + We[o], !0, r), "padding" !== n && (s += he.css(e, "border" + We[o] + "Width", !0, r)));
        return s }

    function O(e, t, n) {
        var i, r = !0,
            o = st(e),
            s = "border-box" === he.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (((i = j(e, t, o)) < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            r = s && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0 }
        return i + Z(e, t, n || (s ? "border" : "content"), r, o) + "px" }

    function z(e, t, n, i, r) {
        return new z.prototype.init(e, t, n, i, r) }

    function Y() { pt && (e.requestAnimationFrame(Y), he.fx.tick()) }

    function R() {
        return e.setTimeout(function() { dt = void 0 }), dt = he.now() }

    function W(e, t) {
        var n, i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = We[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r }

    function G(e, t, n) {
        for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i }

    function H(e, t, n) {
        var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && Ge(e),
            v = Pe.get(e, "fxshow");
        n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, he.queue(e, "fx").length || s.empty.fire() }) }));
        for (i in t)
            if (r = t[i], ht.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0 }
                p[i] = v && v[i] || he.style(e, i) }
        if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = v && v.display) && (u = Pe.get(e, "display")), "none" === (c = he.css(e, "display")) && (u ? c = u : (m([e], !0), u = e.style.display || u, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (d.done(function() { h.display = u }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), l = !1;
            for (i in p) l || (v ? "hidden" in v && (g = v.hidden) : v = Pe.access(e, "fxshow", { display: u }), o && (v.hidden = !g), g && m([e], !0), d.done(function() { g || m([e]), Pe.remove(e, "fxshow");
                for (i in p) he.style(e, i, p[i]) })), l = G(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0)) } }

    function U(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = he.camelCase(n), r = t[i], o = e[n], he.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) { o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r }

    function F(e, t, n) {
        var i, r, o = 0,
            s = F.prefilters.length,
            a = he.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (r) return !1;
                for (var t = dt || R(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (a.resolveWith(e, [u]), !1) },
            u = a.promise({ elem: e, props: he.extend({}, t), opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n), originalProperties: t, originalOptions: n, startTime: dt || R(), duration: n.duration, tweens: [], createTween: function(t, n) {
                    var i = he.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i }, stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this } }),
            c = u.props;
        for (U(c, u.opts.specialEasing); o < s; o++)
            if (i = F.prefilters[o].call(u, e, c, u.opts)) return he.isFunction(i.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(c, G, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), he.fx.timer(he.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function B(e) {
        return (e.match(Ne) || []).join(" ") }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || "" }

    function V(e, t, n, i) {
        var r;
        if (he.isArray(t)) he.each(t, function(t, r) { n || Mt.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (r in t) V(e + "[" + r + "]", t[r], n, i) }

    function _(e) {
        return function(t, n) { "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (he.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

    function X(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, he.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1) }), l }
        var o = {},
            s = e === zt;
        return r(t.dataTypes[0]) || !o["*"] && r("*") }

    function q(e, t) {
        var n, i, r = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e }

    function K(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) { l.unshift(r);
                    break }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) { o = r;
                    break }
                s || (s = r) }
            o = o || s }
        if (o) return o !== l[0] && l.unshift(o), n[o] }

    function Q(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {!0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                        break }
            if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try { t = s(t) } catch (e) {
                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o } } }
        return { state: "success", data: t } }

    function $(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        se = ee.indexOf,
        ae = {},
        le = ae.toString,
        ue = ae.hasOwnProperty,
        ce = ue.toString,
        fe = ce.call(Object),
        de = {},
        pe = "3.1.1",
        he = function(e, t) {
            return new he.fn.init(e, t) },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ve = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase() };
    he.fn = he.prototype = { jquery: pe, constructor: he, length: 0, toArray: function() {
            return ie.call(this) }, get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t }, each: function(e) {
            return he.each(this, e) }, map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t) })) }, slice: function() {
            return this.pushStack(ie.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() {
            return this.prevObject || this.constructor() }, push: oe, sort: ee.sort, splice: ee.splice }, he.extend = he.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (he.isPlainObject(i) || (r = he.isArray(i))) ? (r ? (r = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s }, he.extend({ expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
            throw new Error(e) }, noop: function() {}, isFunction: function(e) {
            return "function" === he.type(e) }, isArray: Array.isArray, isWindow: function(e) {
            return null != e && e === e.window }, isNumeric: function(e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof(n = ue.call(t, "constructor") && t.constructor) || ce.call(n) !== fe)) }, isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0 }, type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e }, globalEval: function(e) { n(e) }, camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ye) }, nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "") }, makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n }, inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n) }, merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e }, grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i }, map: function(e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a) }, guid: 1, proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(ie.call(arguments))) }, r.guid = e.guid = e.guid || he.guid++, r }, now: Date.now, support: de }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ae["[object " + t + "]"] = t.toLowerCase() });
    var we = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : R) !== j && D(t), t = t || j, k)) {
                if (11 !== h && (l = ge.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n } else if (p && (s = p.getElementById(r)) && z(t, s) && s.id === r) return n.push(s), n } else {
                        if (l[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(r)), n }
                if (b.qsa && !F[e + " "] && (!P || !P.test(e))) {
                    if (1 !== h) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, be) : t.setAttribute("id", a = Y), o = (c = S(e)).length; o--;) c[o] = "#" + a + " " + f(c[o]);
                        d = c.join(","), p = me.test(e) && u(t.parentNode) || t }
                    if (d) try {
                        return q.apply(n, p.querySelectorAll(d)), n } catch (e) {} finally { a === Y && t.removeAttribute("id") } } }
            return A(e.replace(oe, "$1"), t, n, i) }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > I.cacheLength && delete e[t.shift()], e[n + " "] = i }
            var t = [];
            return e }

        function i(e) {
            return e[Y] = !0, e }

        function r(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t) } catch (e) {
                return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) I.attrHandle[n[i]] = t }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && xe(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i }

        function d(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = G++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1 } : function(t, n, l) {
                var u, c, f, d = [W, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0 } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (f = t[Y] || (t[Y] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === W && u[1] === a) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0 } return !1 } }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0 } : e[0] }

        function h(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i }

        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s }

        function m(e, t, n, r, o, s) {
            return r && !r[Y] && (r = m(r)), o && !o[Y] && (o = m(o, s)), i(function(i, s, a, l) {
                var u, c, f, d = [],
                    p = [],
                    m = s.length,
                    v = i || h(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, d, e, a, l),
                    w = n ? o || (i ? e : m || r) ? [] : s : y;
                if (n && n(y, w, a, l), r)
                    for (u = g(w, p), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (w[p[c]] = !(y[p[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = w.length; c--;)(f = w[c]) && u.push(y[c] = f);
                            o(null, w = [], u, l) }
                        for (c = w.length; c--;)(f = w[c]) && (u = o ? Q(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f)) } } else w = g(w === s ? w.splice(m, w.length) : w), o ? o(null, s, w, l) : q.apply(s, w) }) }

        function v(e) {
            for (var t, n, i, r = e.length, o = I.relative[e[0].type], s = o || I.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                    return e === t }, s, !0), u = d(function(e) {
                    return Q(t, e) > -1 }, s, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r }]; a < r; a++)
                if (n = I.relative[e[a].type]) c = [d(p(c), n)];
                else {
                    if ((n = I.filter[e[a].type].apply(null, e[a].matches))[Y]) {
                        for (i = ++a; i < r && !I.relative[e[i].type]; i++);
                        return m(a > 1 && p(c), a > 1 && f(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && f(e)) }
                    c.push(n) }
            return p(c) }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, f, d, p = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        y = E,
                        w = i || o && I.find.TAG("*", u),
                        b = W += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (u && (E = s === j || s || u); h !== x && null != (c = w[h]); h++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === j || (D(c), a = !k); d = e[f++];)
                                if (d(c, s || j, a)) { l.push(c);
                                    break }
                            u && (W = b) }
                        r && ((c = !d && c) && p--, i && m.push(c)) }
                    if (p += h, r && h !== p) {
                        for (f = 0; d = n[f++];) d(m, v, s, a);
                        if (i) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = _.call(l));
                            v = g(v) }
                        q.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l) }
                    return u && (W = b, E = y), m };
            return r ? i(s) : s }
        var w, b, I, x, C, S, M, A, E, T, N, D, j, L, k, P, Z, O, z, Y = "sizzle" + 1 * new Date,
            R = e.document,
            W = 0,
            G = 0,
            H = n(),
            U = n(),
            F = n(),
            B = function(e, t) {
                return e === t && (N = !0), 0 },
            J = {}.hasOwnProperty,
            V = [],
            _ = V.pop,
            X = V.push,
            q = V.push,
            K = V.slice,
            Q = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(ie),
            ce = new RegExp("^" + te + "$"),
            fe = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + $ + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
            de = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Ie = function() { D() },
            xe = d(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { q.apply(V = K.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType } catch (e) { q = { apply: V.length ? function(e, t) { X.apply(e, K.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }
        b = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, L = j.documentElement, k = !C(j), R !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ie, !1) : n.attachEvent && n.attachEvent("onunload", Ie)), b.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className") }), b.getElementsByTagName = r(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length }), b.getElementsByClassName = he.test(j.getElementsByClassName), b.getById = r(function(e) {
                return L.appendChild(e).id = Y, !j.getElementsByName || !j.getElementsByName(Y).length }), b.getById ? (I.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t } }, I.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && k) {
                    var n = t.getElementById(e);
                    return n ? [n] : [] } }) : (I.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t } }, I.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && k) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o] }
                    return [] } }), I.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i }
                return o }, I.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e) }, Z = [], P = [], (b.qsa = he.test(j.querySelectorAll)) && (r(function(e) { L.appendChild(e).innerHTML = "<a id='" + Y + "'></a><select id='" + Y + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + Y + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + Y + "+*").length || P.push(".#.+[+~]") }), r(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:") })), (b.matchesSelector = he.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) { b.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), Z.push("!=", ie) }), P = P.length && new RegExp(P.join("|")), Z = Z.length && new RegExp(Z.join("|")), t = he.test(L.compareDocumentPosition), z = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, B = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === R && z(R, e) ? -1 : t === j || t.ownerDocument === R && z(R, t) ? 1 : T ? Q(T, e) - Q(T, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === j ? -1 : t === j ? 1 : r ? -1 : o ? 1 : T ? Q(T, e) - Q(T, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0 }, j) : j }, t.matches = function(e, n) {
            return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && D(e), n = n.replace(le, "='$1']"), b.matchesSelector && k && !F[n + " "] && (!Z || !Z.test(n)) && (!P || !P.test(n))) try {
                var i = O.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
            return t(n, j, null, [e]).length > 0 }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && D(e), z(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = I.attrHandle[t.toLowerCase()],
                i = n && J.call(I.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
            return void 0 !== i ? i : b.attributes || !k ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.escape = function(e) {
            return (e + "").replace(we, be) }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort(B), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1) }
            return T = null, e }, x = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                for (; t = e[i++];) n += x(t);
            return n }, (I = t.selectors = { cacheLength: 50, createPseudo: i, match: fe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0 } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                    var t = H[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && H(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode } : function(t, n, l) {
                        var u, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling" }
                                return !0 }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (w = (p = (u = (c = (f = (d = m)[Y] || (d[Y] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === W && u[1]) && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (w = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++w && d === t) { c[e] = [W, p, w];
                                        break } } else if (y && (d = t, f = d[Y] || (d[Y] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], w = p), !1 === w)
                                for (;
                                    (d = ++p && d && d[g] || (w = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (f = d[Y] || (d[Y] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, w]), d !== t)););
                            return (w -= r) === i || w % i == 0 && w / i >= 0 } } }, PSEUDO: function(e, n) {
                    var r, o = I.pseudos[e] || I.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[Y] ? o(n) : o.length > 1 ? (r = [e, e, "", n], I.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = Q(e, r[s]), e[i] = !(t[i] = r[s]) }) : function(e) {
                        return o(e, 0, r) }) : o } }, pseudos: { not: i(function(e) {
                    var t = [],
                        n = [],
                        r = M(e.replace(oe, "$1"));
                    return r[Y] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o)) }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0 } }), contains: i(function(e) {
                    return e = e.replace(ve, ye),
                        function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1 } }), lang: i(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id }, root: function(e) {
                    return e === L }, focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: a(!1), disabled: a(!0), checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) {
                    return !I.pseudos.empty(e) }, header: function(e) {
                    return pe.test(e.nodeName) }, input: function(e) {
                    return de.test(e.nodeName) }, button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: l(function() {
                    return [0] }), last: l(function(e, t) {
                    return [t - 1] }), eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n] }), even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e }), odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e }), lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e }), gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e }) } }).pseudos.nth = I.pseudos.eq;
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) I.pseudos[w] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e } }(w);
        for (w in { submit: !0, reset: !0 }) I.pseudos[w] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e } }(w);
        return c.prototype = I.filters = I.pseudos, I.setFilters = new c, S = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = I.preFilter; a;) { i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(oe, " ") }), a = a.slice(i.length));
                for (s in I.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({ value: i, type: s, matches: r }), a = a.slice(i.length));
                if (!i) break }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0) }, M = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = F[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = v(t[n]), o[Y] ? i.push(o) : r.push(o);
                (o = F(e, y(r, i))).selector = e }
            return o }, A = t.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                d = !i && S(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && k && I.relative[o[1].type]) {
                    if (!(t = (I.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !I.relative[a = s.type]);)
                    if ((l = I.find[a]) && (i = l(s.matches[0].replace(ve, ye), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && f(o))) return q.apply(n, i), n;
                        break } }
            return (c || M(e, d))(i, t, !k, n, !t || me.test(e) && u(t.parentNode) || t), n }, b.sortStable = Y.split("").sort(B).join("") === Y, b.detectDuplicates = !!N, D(), b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset")) }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), b.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) {
            return null == e.getAttribute("disabled") }) || o($, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(e);
    he.find = we, he.expr = we.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = we.uniqueSort, he.text = we.getText, he.isXMLDoc = we.isXML, he.contains = we.contains, he.escapeSelector = we.escape;
    var be = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && he(e).is(n)) break;
                    i.push(e) }
            return i },
        Ie = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n },
        xe = he.expr.match.needsContext,
        Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType })) }, he.fn.extend({ find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (he.contains(r[t], this)) return !0 }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n }, filter: function(e) {
            return this.pushStack(r(this, e || [], !1)) }, not: function(e) {
            return this.pushStack(r(this, e || [], !0)) }, is: function(e) {
            return !!r(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length } });
    var Me, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Me, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && he.isPlainObject(t))
                    for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this }
            return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this) }).prototype = he.fn, Me = he(te);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        Te = { children: !0, contents: !0, next: !0, prev: !0 };
    he.fn.extend({ has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0 }) }, closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && he(e);
            if (!xe.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) { o.push(n);
                            break }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o) }, index: function(e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t)))) }, addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), he.each({ parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
            return be(e, "parentNode") }, parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n) }, next: function(e) {
            return o(e, "nextSibling") }, prev: function(e) {
            return o(e, "previousSibling") }, nextAll: function(e) {
            return be(e, "nextSibling") }, prevAll: function(e) {
            return be(e, "previousSibling") }, nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n) }, siblings: function(e) {
            return Ie((e.parentNode || {}).firstChild, e) }, children: function(e) {
            return Ie(e.firstChild) }, contents: function(e) {
            return e.contentDocument || he.merge([], e.childNodes) } }, function(e, t) { he.fn[e] = function(n, i) {
            var r = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (Te[e] || he.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r) } });
    var Ne = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) { e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "") },
            c = { add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) { he.each(n, function(n, i) { he.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i) }) }(arguments), n && !t && u()), this }, remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l-- }), this }, has: function(e) {
                    return e ? he.inArray(e, o) > -1 : o.length > 0 }, empty: function() {
                    return o && (o = []), this }, disable: function() {
                    return r = a = [], o = n = "", this }, disabled: function() {
                    return !o }, lock: function() {
                    return r = a = [], n || t || (o = n = ""), this }, locked: function() {
                    return !!r }, fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function() {
                    return c.fireWith(this, arguments), this }, fired: function() {
                    return !!i } };
        return c }, he.extend({ Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = { state: function() {
                        return i }, always: function() {
                        return o.done(arguments).fail(arguments), this }, catch: function(e) {
                        return r.then(null, e) }, pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) { he.each(n, function(n, i) {
                                var r = he.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(t < s)) {
                                            if ((e = i.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? r ? f.call(e, o(s, n, a, r), o(s, n, l, r)) : (s++, f.call(e, o(s, n, a, r), o(s, n, l, r), o(s, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [e]), (r || n.resolveWith)(u, c)) } },
                                    d = r ? f : function() {
                                        try { f() } catch (e) { he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c)) } };
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d)) } }
                        var s = 0;
                        return he.Deferred(function(e) { n[0][3].add(o(0, e, he.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : a)), n[2][3].add(o(0, e, he.isFunction(i) ? i : l)) }).promise() }, promise: function(e) {
                        return null != e ? he.extend(e, r) : r } },
                o = {};
            return he.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() { i = a }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = s.fireWith }), r.promise(o), t && t.call(o, o), o }, when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                o = he.Deferred(),
                s = function(e) {
                    return function(n) { i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r) } };
            if (t <= 1 && (u(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) u(r[n], s(n), o.reject);
            return o.promise() } });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, he.readyException = function(t) { e.setTimeout(function() {
            throw t }) };
    var je = he.Deferred();
    he.fn.ready = function(e) {
        return je.then(e).catch(function(e) { he.readyException(e) }), this }, he.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? he.readyWait++ : he.ready(!0) }, ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || je.resolveWith(te, [he])) } }), he.ready.then = je.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Le = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === he.type(n)) { r = !0;
                for (a in n) Le(e, t, a, n[a], !0, o, s) } else if (void 0 !== i && (r = !0, he.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(he(e), n) })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o },
        ke = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    f.uid = 1, f.prototype = { cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n;
            else
                for (i in t) r[he.camelCase(i)] = t[i];
            return r }, get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)] }, access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) { he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;
                    for (; n--;) delete i[t[n]] }(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t) } };
    var Pe = new f,
        Ze = new f,
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;
    he.extend({ hasData: function(e) {
            return Ze.hasData(e) || Pe.hasData(e) }, data: function(e, t, n) {
            return Ze.access(e, t, n) }, removeData: function(e, t) { Ze.remove(e, t) }, _data: function(e, t, n) {
            return Pe.access(e, t, n) }, _removeData: function(e, t) { Pe.remove(e, t) } }), he.fn.extend({ data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ze.get(o), 1 === o.nodeType && !Pe.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), p(o, i, r[i]));
                    Pe.set(o, "hasDataAttrs", !0) }
                return r }
            return "object" == typeof e ? this.each(function() { Ze.set(this, e) }) : Le(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Ze.get(o, e))) return n;
                    if (void 0 !== (n = p(o, e))) return n } else this.each(function() { Ze.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) {
            return this.each(function() { Ze.remove(this, e) }) } }), he.extend({ queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Pe.get(e, t), n && (!i || he.isArray(n) ? i = Pe.access(e, t, he.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = he._queueHooks(e, t),
                s = function() { he.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Pe.get(e, n) || Pe.access(e, n, { empty: he.Callbacks("once memory").add(function() { Pe.remove(e, [t + "queue", n]) }) }) } }), he.fn.extend({ queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e) }) }, dequeue: function(e) {
            return this.each(function() { he.dequeue(this, e) }) }, clearQueue: function(e) {
            return this.queue(e || "fx", []) }, promise: function(e, t) {
            var n, i = 1,
                r = he.Deferred(),
                o = this,
                s = this.length,
                a = function() {--i || r.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Pe.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t) } });
    var Ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Ye + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        Ge = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display") },
        He = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r },
        Ue = {};
    he.fn.extend({ show: function() {
            return m(this, !0) }, hide: function() {
            return m(this) }, toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Ge(this) ? he(this).show() : he(this).hide() }) } });
    var Fe = /^(?:checkbox|radio)$/i,
        Be = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Je = /^$|\/(?:java|ecma)script/i,
        Ve = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var _e = /<|&#?\w+;/;! function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }();
    var Xe = te.documentElement,
        qe = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    he.event = { global: {}, add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = Pe.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector(Xe, r), n.guid || (n.guid = he.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0 }), u = (t = (t || "").match(Ne) || [""]).length; u--;) a = Qe.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, c = he.extend({ type: p, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && he.expr.match.needsContext.test(r), namespace: h.join(".") }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), he.event.global[p] = !0) }, remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, d, p, h, g, m = Pe.hasData(e) && Pe.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(Ne) || [""]).length; u--;)
                    if (a = Qe.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = he.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || he.removeEvent(e, p, m.handle), delete l[p]) } else
                        for (p in l) he.event.remove(e, p + t[u], n, i, !0);
                he.isEmptyObject(l) && Pe.remove(e, "handle events") } }, dispatch: function(e) {
            var t, n, i, r, o, s, a = he.event.fix(e),
                l = new Array(arguments.length),
                u = (Pe.get(this, "events") || {})[a.type] || [],
                c = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result } }, handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? he(r, this).index(u) > -1 : he.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({ elem: u, handlers: o }) }
            return u = this, l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a }, addProp: function(e, t) { Object.defineProperty(he.Event.prototype, e, { enumerable: !0, configurable: !0, get: he.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent) } : function() {
                    if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) {
            return e[he.expando] ? e : new he.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== x() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() {
                    if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1 }, _default: function(e) {
                    return he.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, he.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, he.Event = function(e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : I, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t) }, he.Event.prototype = { constructor: he.Event, isDefaultPrevented: I, isPropagationStopped: I, isImmediatePropagationStopped: I, isSimulated: !1, preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, he.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) {
            var t = e.button;
            return null == e.which && qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, he.event.addProp), he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { he.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), he.fn.extend({ on: function(e, t, n, i) {
            return C(this, e, t, n, i) }, one: function(e, t, n, i) {
            return C(this, e, t, n, i, 1) }, off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = I), this.each(function() { he.event.remove(this, e, n, t) }) } });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({ htmlPrefilter: function(e) {
            return e.replace($e, "<$1></$2>") }, clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (s = v(a), o = v(e), i = 0, r = o.length; i < r; i++) T(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) E(o[i], s[i]);
                else E(e, a);
            return (s = v(a, "script")).length > 0 && y(s, !l && v(e, "script")), a }, cleanData: function(e) {
            for (var t, n, i, r = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ke(n)) {
                    if (t = n[Pe.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[Pe.expando] = void 0 }
                    n[Ze.expando] && (n[Ze.expando] = void 0) } } }), he.fn.extend({ detach: function(e) {
            return D(this, e, !0) }, remove: function(e) {
            return D(this, e) }, text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() {
            return N(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e) }) }, prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() {
            return N(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
            return N(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
            return this }, clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return he.clone(this, e, t) }) }, html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Be.exec(e) || ["", ""])[1].toLowerCase()]) { e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this)) }, e) } }), he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { he.fn[e] = function(e) {
            for (var n, i = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), he(r[s])[t](n), oe.apply(i, n.get());
            return this.pushStack(i) } });
    var rt = /^margin/,
        ot = new RegExp("^(" + Ye + ")(?!px)[a-z%]+$", "i"),
        st = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t) };! function() {
        function t() {
            if (a) { a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Xe.removeChild(s), a = null } }
        var n, i, r, o, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(de, { pixelPosition: function() {
                return t(), n }, boxSizingReliable: function() {
                return t(), i }, pixelMarginRight: function() {
                return t(), r }, reliableMarginLeft: function() {
                return t(), o } })) }();
    var at = /^(none|table(?!-c[ea]).+)/,
        lt = { position: "absolute", visibility: "hidden", display: "block" },
        ut = { letterSpacing: "0", fontWeight: "400" },
        ct = ["Webkit", "Moz", "ms"],
        ft = te.createElement("div").style;
    he.extend({ cssHooks: { opacity: { get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = he.camelCase(t),
                    l = e.style;
                return t = he.cssProps[a] || (he.cssProps[a] = k(a) || a), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = Re.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)))) } }, css: function(e, t, n, i) {
            var r, o, s, a = he.camelCase(t);
            return t = he.cssProps[a] || (he.cssProps[a] = k(a) || a), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = j(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), he.each(["height", "width"], function(e, t) { he.cssHooks[t] = { get: function(e, n, i) {
                if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? O(e, t, i) : He(e, lt, function() {
                    return O(e, t, i) }) }, set: function(e, n, i) {
                var r, o = i && st(e),
                    s = i && Z(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return s && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(e, n, s) } } }), he.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left })) + "px" }), he.each({ margin: "", padding: "", border: "Width" }, function(e, t) { he.cssHooks[e + t] = { expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + We[i] + t] = o[i] || o[i - 2] || o[0];
                return r } }, rt.test(e) || (he.cssHooks[e + t].set = P) }), he.fn.extend({ css: function(e, t) {
            return Le(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (he.isArray(t)) {
                    for (i = st(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, i);
                    return o }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t) }, e, t, arguments.length > 1) } }), he.Tween = z, z.prototype = { constructor: z, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px") }, cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this) }, run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this } }, z.prototype.init.prototype = z.prototype, z.propHooks = { _default: { get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit) } } }, z.propHooks.scrollTop = z.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, he.easing = { linear: function(e) {
            return e }, swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, he.fx = z.prototype.init, he.fx.step = {};
    var dt, pt, ht = /^(?:toggle|show|hide)$/,
        gt = /queueHooks$/;
    he.Animation = he.extend(F, { tweeners: { "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Re.exec(t), n), n }] }, tweener: function(e, t) { he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(t) }, prefilters: [H], prefilter: function(e, t) { t ? F.prefilters.unshift(e) : F.prefilters.push(e) } }), he.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? he.extend({}, e) : { complete: n || !n && t || he.isFunction(e) && e, duration: e, easing: n && t || t && !he.isFunction(t) && t };
            return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue) }, i }, he.fn.extend({ fadeTo: function(e, t, n, i) {
                return this.filter(Ge).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) {
                var r = he.isEmptyObject(e),
                    o = he.speed(t, n, i),
                    s = function() {
                        var t = F(this, he.extend({}, e), o);
                        (r || Pe.get(this, "finish")) && t.stop(!0) };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s) }, stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n) };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = he.timers,
                        s = Pe.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));!t && n || he.dequeue(this, e) }) }, finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Pe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = he.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r) } }), he.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { he.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i) } }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (dt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), dt = void 0 }, he.fx.timer = function(e) { he.timers.push(e), e() ? he.fx.start() : he.timers.pop() }, he.fx.interval = 13, he.fx.start = function() { pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(Y) : e.setInterval(he.fx.tick, he.fx.interval)) }, he.fx.stop = function() { e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(r) } }) },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", de.radioValue = "t" === e.value }();
    var mt, vt = he.expr.attrHandle;
    he.fn.extend({ attr: function(e, t) {
            return Le(this, he.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
            return this.each(function() { he.removeAttr(this, e) }) } }), he.extend({ attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) {
                    if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n) } }), mt = { set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n } }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = vt[t] || he.find.attr;
        vt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = vt[s], vt[s] = r, r = null != n(e, t, i) ? s : null, vt[s] = o), r } });
    var yt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    he.fn.extend({ prop: function(e, t) {
            return Le(this, he.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
            return this.each(function() { delete this[he.propFix[e] || e] }) } }), he.extend({ prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), de.optSelected || (he.propHooks.selected = { get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { he.propFix[this.toLowerCase()] = this }), he.fn.extend({ addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).addClass(e.call(this, t, J(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = J(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = B(i)) && n.setAttribute("class", a) }
            return this }, removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).removeClass(e.call(this, t, J(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = J(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = B(i)) && n.setAttribute("class", a) }
            return this }, toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) { he(this).toggleClass(e.call(this, n, J(this), t), t) }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = he(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = J(this)) && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || "")) }) }, hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(J(n)) + " ").indexOf(t) > -1) return !0;
            return !1 } });
    var bt = /\r/g;
    he.fn.extend({ val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = he.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) {
                    return null == e ? "" : e + "" })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) })) : r ? (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)) : void 0 } }), he.extend({ valHooks: { option: { get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : B(he.text(e)) } }, select: { get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            a.push(t) }
                    return a }, set: function(e, t) {
                    for (var n, i, r = e.options, o = he.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o } } } }), he.each(["radio", "checkbox"], function() { he.valHooks[this] = { set: function(e, t) {
                if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1 } }, de.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value }) });
    var It = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, { trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, f, d = [i || te],
                p = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !he.isWindow(i)) {
                    for (l = f.delegateType || p, It.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e) }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, (c = (Pe.get(s, "events") || {})[t.type] && Pe.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && ke(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !ke(i) || u && he.isFunction(i[p]) && !he.isWindow(i) && ((a = i[u]) && (i[u] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, a && (i[u] = a)), t.result } }, simulate: function(e, t, n) {
            var i = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
            he.event.trigger(i, null, t) } }), he.fn.extend({ trigger: function(e, t) {
            return this.each(function() { he.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0) } }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), he.fn.extend({ hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e) } }), de.focusin = "onfocusin" in e, de.focusin || he.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { he.event.simulate(t, e.target, he.event.fix(e)) };
        he.event.special[t] = { setup: function() {
                var i = this.ownerDocument || this,
                    r = Pe.access(i, t);
                r || i.addEventListener(e, n, !0), Pe.access(i, t, (r || 0) + 1) }, teardown: function() {
                var i = this.ownerDocument || this,
                    r = Pe.access(i, t) - 1;
                r ? Pe.access(i, t, r) : (i.removeEventListener(e, n, !0), Pe.remove(i, t)) } } });
    var xt = e.location,
        Ct = he.now(),
        St = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n };
    var Mt = /\[\]$/,
        At = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Tt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) V(n, e[n], t, r);
        return i.join("&") }, he.fn.extend({ serialize: function() {
            return he.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !Fe.test(e)) }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                    return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } });
    var Nt = /%20/g,
        Dt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Zt = /^\/\//,
        Ot = {},
        zt = {},
        Yt = "*/".concat("*"),
        Rt = te.createElement("a");
    Rt.href = xt.href, he.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: xt.href, type: "GET", isLocal: kt.test(xt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Yt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
            return t ? q(q(e, he.ajaxSettings), t) : q(he.ajaxSettings, e) }, ajaxPrefilter: _(Ot), ajaxTransport: _(zt), ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, d, p, b, I, x = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (b = K(h, C, i)), b = Q(h, b, C, u), u ? (h.ifModified && ((I = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = I), (I = C.getResponseHeader("etag")) && (he.etag[o] = I)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, d = b.data, p = b.error, u = !p)) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || x) + "", u ? v.resolveWith(g, [d, x, C]) : v.rejectWith(g, [C, x, p]), C.statusCode(w), w = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, h, u ? d : p]), y.fireWith(g, [C, x]), f && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, f, d, p, h = he.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
                v = he.Deferred(),
                y = he.Callbacks("once memory"),
                w = h.statusCode || {},
                b = {},
                I = {},
                x = "canceled",
                C = { readyState: 0, getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Lt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()] }
                        return null == t ? null : t }, getAllResponseHeaders: function() {
                        return c ? s : null }, setRequestHeader: function(e, t) {
                        return null == c && (e = I[e.toLowerCase()] = I[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this }, statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), i(0, t), this } };
            if (v.promise(C), h.url = ((t || h.url || xt.href) + "").replace(Zt, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) { u = te.createElement("a");
                try { u.href = h.url, u.href = u.href, h.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), X(Ot, h, n, C), c) return C;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (p = h.url.slice(o.length), h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(jt, "$1"), p = (St.test(o) ? "&" : "?") + "_=" + Ct++ + p), h.url = o + p), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (x = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = X(zt, h, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() { C.abort("timeout") }, h.timeout));
                try { c = !1, r.send(b, i) } catch (e) {
                    if (c) throw e;
                    i(-1, e) } } else i(-1, "No Transport");
            return C }, getJSON: function(e, t, n) {
            return he.get(e, t, n, "json") }, getScript: function(e, t) {
            return he.get(e, void 0, t, "script") } }), he.each(["get", "post"], function(e, t) { he[t] = function(e, n, i, r) {
            return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({ url: e, type: t, dataType: r, data: n, success: i }, he.isPlainObject(e) && e)) } }), he._evalUrl = function(e) {
        return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, he.fn.extend({ wrapAll: function(e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e }).append(this)), this }, wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) { he(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
            var t = he.isFunction(e);
            return this.each(function(n) { he(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) {
            return this.parent(e).not("body").each(function() { he(this).replaceWith(this.childNodes) }), this } }), he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e) }, he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest } catch (e) {} };
    var Wt = { 0: 200, 1223: 204 },
        Gt = he.ajaxSettings.xhr();
    de.cors = !!Gt && "withCredentials" in Gt, de.ajax = Gt = !!Gt, he.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Gt && !t.crossDomain) return { send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() { n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort");
                try { a.send(t.hasContent && t.data || null) } catch (e) {
                    if (n) throw e } }, abort: function() { n && n() } } }), he.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), he.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) {
                return he.globalEval(e), e } } }), he.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), he.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return { send: function(i, r) { t = he("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), te.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
    var Ht = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var e = Ht.pop() || he.expando + "_" + Ct++;
            return this[e] = !0, e } }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || he.error(r + " was not called"), s[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { s = arguments }, i.always(function() { void 0 === o ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && he.isFunction(o) && o(s[0]), s = o = void 0 }), "script" }), de.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), he.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ce.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = w([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes)) }, he.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = B(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { he.fn[t] = function(e) {
            return this.on(t, e) } }), he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem }).length }, he.offset = { setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = he.css(e, "position"),
                c = he(e),
                f = {}; "static" === u && (e.style.position = "relative"), a = c.offset(), o = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f) } }, he.fn.extend({ offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { he.offset.setOffset(this, e, t) });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = $(r), t = r.documentElement, { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i) : { top: 0, left: 0 } : void 0 }, position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = { top: 0, left: 0 };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = { top: i.top + he.css(e[0], "borderTopWidth", !0), left: i.left + he.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - he.css(n, "marginTop", !0), left: t.left - i.left - he.css(n, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Xe }) } }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(i) {
            return Le(this, function(e, i, r) {
                var o = $(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r) }, e, i, arguments.length) } }), he.each(["top", "left"], function(e, t) { he.cssHooks[t] = L(de.pixelPosition, function(e, n) {
            if (n) return n = j(e, t), ot.test(n) ? he(e).position()[t] + "px" : n }) }), he.each({ Height: "height", Width: "width" }, function(e, t) { he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { he.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Le(this, function(t, n, r) {
                    var o;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? he.css(t, n, a) : he.style(t, n, r, a) }, t, s ? r : void 0, s) } }) }), he.fn.extend({ bind: function(e, t, n) {
            return this.on(e, null, t, n) }, unbind: function(e, t) {
            return this.off(e, null, t) }, delegate: function(e, t, n, i) {
            return this.on(t, e, n, i) }, undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return he });
    var Ft = e.jQuery,
        Bt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = Bt), t && e.jQuery === he && (e.jQuery = Ft), he }, t || (e.jQuery = e.$ = he), he }),
function(e) {
    function t(e, t, n, i) {
        for (var o, s = n.slice(), a = r(t, e), l = 0, u = s.length; u > l && (handler = s[l], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(a) : handler.call(e, a), !a.stoppedImmediatePropagation); l++);
        return o = !a.stoppedPropagation, i && o && e.parentNode ? e.parentNode.dispatchEvent(a) : !a.defaultPrevented }

    function n(e, t) {
        return { configurable: !0, get: e, set: t } }

    function i(e, t, i) {
        var r = y(t || e, i);
        m(e, "textContent", n(function() {
            return r.get.call(this) }, function(e) { r.set.call(this, e) })) }

    function r(e, t) {
        return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e }

    function o(e, t) {
        for (var n = e.length; n-- && e[n] !== t;);
        return n }

    function s() {
        if ("BR" === this.tagName) return "\n";
        for (var e = this.firstChild, t = []; e;) 8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent), e = e.nextSibling;
        return t.join("") }

    function a(e) {!f && C.test(document.readyState) && (f = !f, document.detachEvent(d, a), (e = document.createEvent("Event")).initEvent(p, !0, !0), document.dispatchEvent(e)) }

    function l(e) {
        for (var t; t = this.lastChild;) this.removeChild(t);
        null != e && this.appendChild(document.createTextNode(e)) }

    function u(t, n) {
        return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n }
    if (!document.createEvent) {
        var c = !0,
            f = !1,
            d = "onreadystatechange",
            p = "DOMContentLoaded",
            h = "__IE8__" + Math.random(),
            g = e.Object,
            m = g.defineProperty || function(e, t, n) { e[t] = n.value },
            v = g.defineProperties || function(t, n) {
                for (var i in n)
                    if (w.call(n, i)) try { m(t, i, n[i]) } catch (n) { e.console && console.log(i + " failed on object:", t, n.message) } },
            y = g.getOwnPropertyDescriptor,
            w = g.prototype.hasOwnProperty,
            b = e.Element.prototype,
            I = e.Text.prototype,
            x = /^[a-z]+$/,
            C = /loaded|complete/,
            S = {},
            M = document.createElement("div");
        i(e.HTMLCommentElement.prototype, b, "nodeValue"), i(e.HTMLScriptElement.prototype, null, "text"), i(I, null, "nodeValue"), i(e.HTMLTitleElement.prototype, null, "text"), m(e.HTMLStyleElement.prototype, "textContent", function(e) {
            return n(function() {
                return e.get.call(this.styleSheet) }, function(t) { e.set.call(this.styleSheet, t) }) }(y(e.CSSStyleSheet.prototype, "cssText"))), v(b, { textContent: { get: s, set: l }, firstElementChild: { get: function() {
                    for (var e = this.childNodes || [], t = 0, n = e.length; n > t; t++)
                        if (1 == e[t].nodeType) return e[t] } }, lastElementChild: { get: function() {
                    for (var e = this.childNodes || [], t = e.length; t--;)
                        if (1 == e[t].nodeType) return e[t] } }, previousElementSibling: { get: function() {
                    for (var e = this.previousSibling; e && 1 != e.nodeType;) e = e.previousSibling;
                    return e } }, nextElementSibling: { get: function() {
                    for (var e = this.nextSibling; e && 1 != e.nodeType;) e = e.nextSibling;
                    return e } }, childElementCount: { get: function() {
                    for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += 1 == t[n].nodeType);
                    return e } }, addEventListener: { value: function(e, n, i) {
                    var r, s = this,
                        a = "on" + e,
                        l = s[h] || m(s, h, { value: {} })[h],
                        c = l[a] || (l[a] = {}),
                        f = c.h || (c.h = []);
                    if (!w.call(c, "w")) {
                        if (c.w = function(e) {
                                return e[h] || t(s, u(s, e), f, !1) }, !w.call(S, a))
                            if (x.test(e)) try {
                                (r = document.createEventObject())[h] = !0, 9 != s.nodeType && null == s.parentNode && M.appendChild(s), s.fireEvent(a, r), S[a] = !0 } catch (r) {
                                for (S[a] = !1; M.hasChildNodes();) M.removeChild(M.firstChild) } else S[a] = !1;
                            (c.n = S[a]) && s.attachEvent(a, c.w) }
                    o(f, n) < 0 && f[i ? "unshift" : "push"](n) } }, dispatchEvent: { value: function(e) {
                    var n, i = this,
                        r = "on" + e.type,
                        o = i[h],
                        s = o && o[r],
                        a = !!s;
                    return e.target || (e.target = i), a ? s.n ? i.fireEvent(r, e) : t(i, e, s.h, !0) : !(n = i.parentNode) || n.dispatchEvent(e), !e.defaultPrevented } }, removeEventListener: { value: function(e, t, n) {
                    var i = "on" + e,
                        r = this[h],
                        s = r && r[i],
                        a = s && s.h,
                        l = a ? o(a, t) : -1;
                    l > -1 && a.splice(l, 1) } } }), v(I, { addEventListener: { value: b.addEventListener }, dispatchEvent: { value: b.dispatchEvent }, removeEventListener: { value: b.removeEventListener } }), v(e.XMLHttpRequest.prototype, { addEventListener: { value: function(e, t, n) {
                    var i = this,
                        r = "on" + e,
                        s = i[h] || m(i, h, { value: {} })[h],
                        a = s[r] || (s[r] = {}),
                        l = a.h || (a.h = []);
                    o(l, t) < 0 && (i[r] || (i[r] = function() {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), i.dispatchEvent(t) }), l[n ? "unshift" : "push"](t)) } }, dispatchEvent: { value: function(e) {
                    var n = this,
                        i = "on" + e.type,
                        r = n[h],
                        o = r && r[i];
                    return !!o && (o.n ? n.fireEvent(i, e) : t(n, e, o.h, !0)) } }, removeEventListener: { value: b.removeEventListener } }), v(e.Event.prototype, { bubbles: { value: !0, writable: !0 }, cancelable: { value: !0, writable: !0 }, preventDefault: { value: function() { this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1) } }, stopPropagation: { value: function() { this.stoppedPropagation = !0, this.cancelBubble = !0 } }, stopImmediatePropagation: { value: function() { this.stoppedImmediatePropagation = !0, this.stopPropagation() } }, initEvent: { value: function(e, t, n) { this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation() } } }), v(e.HTMLDocument.prototype, { textContent: { get: function() {
                    return 11 === this.nodeType ? s.call(this) : null }, set: function(e) { 11 === this.nodeType && l.call(this, e) } }, addEventListener: { value: function(t, n, i) {
                    var r = this;
                    b.addEventListener.call(r, t, n, i), c && t === p && !C.test(r.readyState) && (c = !1, r.attachEvent(d, a), e == top && function e(t) {
                        try { r.documentElement.doScroll("left"), a() } catch (t) { setTimeout(e, 50) } }()) } }, dispatchEvent: { value: b.dispatchEvent }, removeEventListener: { value: b.removeEventListener }, createEvent: { value: function(e) {
                    var t;
                    if ("Event" !== e) throw new Error("unsupported " + e);
                    return t = document.createEventObject(), t.timeStamp = (new Date).getTime(), t } } }), v(e.Window.prototype, { getComputedStyle: { value: function() {
                    function e(e) { this._ = e }

                    function t() {}
                    var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
                        i = /^(top|right|bottom|left)$/,
                        r = /\-([a-z])/g,
                        o = function(e, t) {
                            return t.toUpperCase() };
                    return e.prototype.getPropertyValue = function(e) {
                            var t, s, a, l = this._,
                                u = l.style,
                                c = l.currentStyle,
                                f = l.runtimeStyle;
                            return e = ("float" === e ? "style-float" : e).replace(r, o), t = c ? c[e] : u[e], n.test(t) && !i.test(e) && (s = u.left, (a = f && f.left) && (f.left = c.left), u.left = "fontSize" === e ? "1em" : t, t = u.pixelLeft + "px", u.left = s, a && (f.left = a)), null == t ? t : t + "" || "auto" }, t.prototype.getPropertyValue = function() {
                            return null },
                        function(n, i) {
                            return i ? new t(n) : new e(n) } }() }, addEventListener: { value: function(n, i, r) {
                    var s, a = e,
                        l = "on" + n;
                    a[l] || (a[l] = function(e) {
                        return t(a, u(a, e), s, !1) }), o(s = a[l][h] || (a[l][h] = []), i) < 0 && s[r ? "unshift" : "push"](i) } }, dispatchEvent: { value: function(t) {
                    var n = e["on" + t.type];
                    return !n || !1 !== n.call(e, t) && !t.defaultPrevented } }, removeEventListener: { value: function(t, n, i) {
                    var r = (e["on" + t] || g)[h],
                        s = r ? o(r, n) : -1;
                    s > -1 && r.splice(s, 1) } } }) } }(this),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).flowplayer = e() } }(function() {
    var e;
    return function e(t, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (o) return o(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u }
                var c = n[s] = { exports: {} };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n || e) }, c, c.exports, e, t, n, i) }
            return n[s].exports }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
        return r }({ 1: [function(e, t, n) { "use strict";
            var i = t.exports = {},
                r = e("class-list"),
                o = window.jQuery,
                s = e("punycode"),
                a = e("computed-style");
            i.noop = function() {}, i.identity = function(e) {
                    return e }, i.removeNode = function(e) { e && e.parentNode && e.parentNode.removeChild(e) }, i.find = function(e, t) {
                    return o ? o(e, t).toArray() : (t = t || document, Array.prototype.map.call(t.querySelectorAll(e), function(e) {
                        return e })) }, i.text = function(e, t) { e["innerText" in e ? "innerText" : "textContent"] = t }, i.findDirect = function(e, t) {
                    return i.find(e, t).filter(function(e) {
                        return e.parentNode === t }) }, i.hasClass = function(e, t) {
                    return "string" == typeof e.className && r(e).contains(t) }, i.isSameDomain = function(e) {
                    var t = window.location,
                        n = i.createElement("a", { href: e });
                    return t.hostname === n.hostname && t.protocol === n.protocol && t.port === n.port }, i.css = function(e, t, n) {
                    return "object" == typeof t ? Object.keys(t).forEach(function(n) { i.css(e, n, t[n]) }) : void 0 !== n ? "" === n ? e ? e.style.removeProperty(t) : void 0 : e ? e.style.setProperty(t, n) : void 0 : e ? a(e, t) : void 0 }, i.createElement = function(e, t, n) {
                    try {
                        var r = document.createElement(e);
                        for (var s in t) t.hasOwnProperty(s) && ("css" === s ? i.css(r, t[s]) : i.attr(r, s, t[s]));
                        return r.innerHTML = n || "", r } catch (i) {
                        if (!o) throw i;
                        return o("<" + e + ">" + n + "</" + e + ">").attr(t)[0] } }, i.toggleClass = function(e, t, n) {
                    if (e) {
                        var i = r(e);
                        void 0 === n ? i.toggle(t) : n ? i.add(t) : n || i.remove(t) } }, i.addClass = function(e, t) {
                    return i.toggleClass(e, t, !0) }, i.removeClass = function(e, t) {
                    return i.toggleClass(e, t, !1) }, i.append = function(e, t) {
                    return e.appendChild(t), e }, i.appendTo = function(e, t) {
                    return i.append(t, e), e }, i.prepend = function(e, t) { e.insertBefore(t, e.firstChild) }, i.insertAfter = function(e, t, n) { t == i.lastChild(e) && e.appendChild(n);
                    var r = Array.prototype.indexOf.call(e.children, t);
                    e.insertBefore(n, e.children[r + 1]) }, i.html = function(e, t) {
                    (e = e.length ? e : [e]).forEach(function(e) { e.innerHTML = t }) }, i.attr = function(e, t, n) {
                    if ("class" === t && (t = "className"), i.hasOwnOrPrototypeProperty(e, t)) try { e[t] = n } catch (i) {
                        if (!o) throw i;
                        o(e).attr(t, n) } else !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
                    return e }, i.prop = function(e, t, n) {
                    return void 0 === n ? e && e[t] : void(e[t] = n) }, i.offset = function(e) {
                    var t = e.getBoundingClientRect();
                    return e.offsetWidth / e.offsetHeight > e.clientWidth / e.clientHeight && (t = { left: 100 * t.left, right: 100 * t.right, top: 100 * t.top, bottom: 100 * t.bottom, width: 100 * t.width, height: 100 * t.height }), t }, i.width = function(e, t) {
                    if (t) return e.style.width = ("" + t).replace(/px$/, "") + "px";
                    var n = i.offset(e).width;
                    return void 0 === n ? e.offsetWidth : n }, i.height = function(e, t) {
                    if (t) return e.style.height = ("" + t).replace(/px$/, "") + "px";
                    var n = i.offset(e).height;
                    return void 0 === n ? e.offsetHeight : n }, i.lastChild = function(e) {
                    return e.children[e.children.length - 1] }, i.hasParent = function(e, t) {
                    for (var n = e.parentElement; n;) {
                        if (i.matches(n, t)) return !0;
                        n = n.parentElement }
                    return !1 }, i.createAbsoluteUrl = function(e) {
                    return i.createElement("a", { href: e }).href }, i.xhrGet = function(e, t, n) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        return 4 === this.readyState ? this.status >= 400 ? n() : void t(this.responseText) : void 0 }, i.open("get", e, !0), i.send() }, i.pick = function(e, t) {
                    var n = {};
                    return t.forEach(function(t) { e.hasOwnProperty(t) && (n[t] = e[t]) }), n }, i.hostname = function(e) {
                    return s.toUnicode(e || window.location.hostname) }, i.browser = { webkit: "WebkitAppearance" in document.documentElement.style }, i.getPrototype = function(e) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ }, i.hasOwnOrPrototypeProperty = function(e, t) {
                    for (var n = e; n;) {
                        if (Object.prototype.hasOwnProperty.call(n, t)) return !0;
                        n = i.getPrototype(n) }
                    return !1 }, i.matches = function(e, t) {
                    var n = Element.prototype;
                    return (n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector || function(e) {
                        for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), i = 0; n[i] && n[i] !== t;) i++;
                        return !!n[i] }).call(e, t) },
                function(e) {
                    function t(e) {
                        return e.replace(/-[a-z]/g, function(e) {
                            return e[1].toUpperCase() }) }
                    void 0 !== e.setAttribute && (e.setProperty = function(e, n) {
                        return this.setAttribute(t(e), String(n)) }, e.getPropertyValue = function(e) {
                        return this.getAttribute(t(e)) || null }, e.removeProperty = function(e) {
                        var n = this.getPropertyValue(e);
                        return this.removeAttribute(t(e)), n }) }(window.CSSStyleDeclaration.prototype) }, { "class-list": 33, "computed-style": 34, punycode: 41 }], 2: [function(e, t, n) { "use strict";
            var i = e("../common");
            t.exports = function(e, t, n, r) { n = n || "opaque";
                var o = "obj" + ("" + Math.random()).slice(2, 15),
                    s = '<object class="fp-engine" id="' + o + '" name="' + o + '" ',
                    a = navigator.userAgent.indexOf("MSIE") > -1;
                s += a ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + e + '" type="application/x-shockwave-flash">';
                var l = { width: "100%", height: "100%", allowscriptaccess: "always", wmode: n, quality: "high", flashvars: "", movie: e + (a ? "?" + o : ""), name: o }; "transparent" !== n && (l.bgcolor = r || "#333333"), Object.keys(t).forEach(function(e) { l.flashvars += e + "=" + t[e] + "&" }), Object.keys(l).forEach(function(e) { s += '<param name="' + e + '" value="' + l[e] + '"/>' }), s += "</object>";
                var u = i.createElement("div", {}, s);
                return i.find("object", u) }, window.attachEvent && window.attachEvent("onbeforeunload", function() { window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function() {} }) }, { "../common": 1 }], 3: [function(e, t, n) { "use strict";

            function i(e) {
                return /^https?:/.test(e) }
            var r, o = e("../flowplayer"),
                s = e("../common"),
                a = e("./embed"),
                l = e("extend-object"),
                u = e("bean");
            (r = function(e, t) {
                function n(e) {
                    function t(e) {
                        return ("0" + parseInt(e).toString(16)).slice(-2) }
                    return (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + t(e[1]) + t(e[2]) + t(e[3]) : void 0 }

                function c(e) {
                    return 7 === e.length ? e : "#" + e.split("").slice(1).map(function(e) {
                        return e + e }).join("") }

                function f(e) {
                    return /application\/x-mpegurl/i.test(e.type) }
                var d, p, h, g, m = e.conf,
                    v = [],
                    y = { engineName: r.engineName, pick: function(t) {
                            var n = l({}, function() {
                                if (o.support.flashVideo) {
                                    for (var n, i, r = 0; r < t.length; r++)
                                        if (i = t[r], /mp4|flv|flash/i.test(i.type) && (n = i), e.conf.swfHls && /mpegurl/i.test(i.type) && (n = i), n && !/mp4/i.test(n.type)) return n;
                                    return n } }());
                            if (n) return !n.src || i(n.src) || e.conf.rtmp || n.rtmp || (n.src = s.createAbsoluteUrl(n.src)), n }, suspendEngine: function() { g = !0 }, resumeEngine: function() { g = !1 }, load: function(r) {
                            function w(e) {
                                return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D") }
                            d = r, v.forEach(function(e) { clearTimeout(e) });
                            var b = s.findDirect("video", t)[0] || s.find(".fp-player > video", t)[0],
                                I = r.src,
                                x = i(I),
                                C = function() { s.removeNode(b) };
                            o.support.video && s.prop(b, "autoplay") && function(e) {
                                return e.some(function(e) {
                                    return !!b.canPlayType(e.type) }) }(r.sources) ? u.one(b, "timeupdate", C) : C();
                            var S = r.rtmp || m.rtmp;
                            if (x || S || (I = s.createAbsoluteUrl(I)), h && f(r) && h.data !== s.createAbsoluteUrl(m.swfHls) && y.unload(), h) {
                                ["live", "preload", "loop"].forEach(function(e) { r.hasOwnProperty(e) && h.__set(e, r[e]) }), Object.keys(r.flashls || {}).forEach(function(e) { h.__set("hls_" + e, r.flashls[e]) });
                                var M = !1;!x && S ? h.__set("rtmp", S.url || S) : (M = !!h.__get("rtmp"), h.__set("rtmp", null)), h.__play(I, M || r.rtmp && r.rtmp !== m.rtmp) } else { p = "fpCallback" + ("" + Math.random()).slice(3, 15), I = w(I);
                                var A = { hostname: m.embedded ? s.hostname(m.hostname) : s.hostname(location.hostname), url: I, callback: p };
                                t.getAttribute("data-origin") && (A.origin = t.getAttribute("data-origin")), ["proxy", "key", "autoplay", "preload", "subscribe", "live", "loop", "debug", "splash", "poster", "rtmpt"].forEach(function(e) { m.hasOwnProperty(e) && (A[e] = m[e]), r.hasOwnProperty(e) && (A[e] = r[e]), (m.rtmp || {}).hasOwnProperty(e) && (A[e] = (m.rtmp || {})[e]), (r.rtmp || {}).hasOwnProperty(e) && (A[e] = (r.rtmp || {})[e]) }), m.rtmp && (A.rtmp = m.rtmp.url || m.rtmp), r.rtmp && (A.rtmp = r.rtmp.url || r.rtmp), Object.keys(r.flashls || {}).forEach(function(e) {
                                    var t = r.flashls[e];
                                    A["hls_" + e] = t });
                                var E = void 0 !== r.hlsQualities ? r.hlsQualities : m.hlsQualities;
                                void 0 !== E && (A.hlsQualities = E ? encodeURIComponent(JSON.stringify(E)) : E), void 0 !== m.bufferTime && (A.bufferTime = m.bufferTime), x && delete A.rtmp, A.rtmp && (A.rtmp = w(A.rtmp));
                                var T, N = m.bgcolor || s.css(t, "background-color") || "";
                                0 === N.indexOf("rgb") ? T = n(N) : 0 === N.indexOf("#") && (T = c(N)), A.initialVolume = e.volumeLevel;
                                var D = f(r) ? m.swfHls : m.swf;
                                h = a(D, A, m.wmode, T)[0];
                                var j = s.find(".fp-player", t)[0];
                                s.prepend(j, h), e.off("quality.flashengine").on("quality.flashengine", function(t, n, i) {
                                    (void 0 !== e.video.hlsQualities ? e.video.hlsQualities : e.conf.hlsQualities) && h.__quality(i) }), setTimeout(function() {
                                    try {
                                        if (!h.PercentLoaded()) return e.trigger("error", [e, { code: 7, url: m.swf }]) } catch (e) {} }, 5e3), v.push(setTimeout(function() { void 0 === h.PercentLoaded && e.trigger("flashdisabled", [e]) }, 15e3)), v.push(setTimeout(function() { void 0 === h.PercentLoaded && e.trigger("flashdisabled", [e, !1]) }, 500)), e.off("resume.flashhack").on("resume.flashhack", function() {
                                    var t = setTimeout(function() {
                                        var t = h.__status().time,
                                            n = setTimeout(function() { e.playing && !e.loading && h.__status().time === t && e.trigger("flashdisabled", [e]) }, 400);
                                        v.push(n), e.one("seek.flashhack pause.flashhack load.flashack", function() { clearTimeout(n) }) }, 800);
                                    v.push(t), e.one("progress", function() { clearTimeout(t) }) }), h.pollInterval = setInterval(function() {
                                    if (h && !g) {
                                        var t = h.__status ? h.__status() : null;
                                        t && ((e.conf.live || e.live || r.live) && (r.seekOffset = t.seekOffset, r.duration = t.duration + t.seekOffset), e.playing && t.time && t.time !== e.video.time && e.trigger("progress", [e, t.time]), r.buffer = t.buffer / r.bytes * r.duration, e.trigger("buffer", [e, r.buffer]), !r.buffered && t.time > 0 && (r.buffered = !0, e.trigger("buffered", [e]))) } }, 250), window[p] = function(n, i) {
                                    var r = d;
                                    m.debug && (0 === n.indexOf("debug") && i && i.length ? console.log.apply(console, ["-- " + n].concat(i)) : console.log("--", n, i));
                                    var o = { type: n };
                                    switch (n) {
                                        case "ready":
                                            i = l(r, i);
                                            break;
                                        case "click":
                                            o.flash = !0;
                                            break;
                                        case "keydown":
                                            o.which = i;
                                            break;
                                        case "seek":
                                            r.time = i;
                                            break;
                                        case "status":
                                            e.trigger("progress", [e, i.time]), i.buffer < r.bytes && !r.buffered ? (r.buffer = i.buffer / r.bytes * r.duration, e.trigger("buffer", r.buffer)) : r.buffered || (r.buffered = !0, e.trigger("buffered"));
                                            break;
                                        case "metadata":
                                            var s = atob(i);
                                            i = { key: s.substr(10, 4), data: s.substr(21) } } "click" === n || "keydown" === n ? (o.target = t, u.fire(t, n, [o])) : "buffered" != n && "unload" !== n ? setTimeout(function() { e.trigger(o, [e, i]) }, 1) : "unload" === n && e.trigger(o, [e, i]) } } }, speed: s.noop, unload: function() { h && h.__unload && h.__unload();
                            try { p && window[p] && delete window[p] } catch (e) {}
                            s.find("object", t).forEach(s.removeNode), h = 0, e.off(".flashengine"), e.off(".flashhack"), clearInterval(h.pollInterval), v.forEach(function(e) { clearTimeout(e) }) } };
                return ["pause", "resume", "seek", "volume"].forEach(function(t) { y[t] = function(n) {
                        try { e.ready && (void 0 === n ? h["__" + t]() : h["__" + t](n)) } catch (n) {
                            if (void 0 === h["__" + t]) return e.trigger("flashdisabled", [e]);
                            throw n } } }), y }).engineName = "flash", r.canPlay = function(e, t) {
                return o.support.flashVideo && /video\/(mp4|flash|flv)/i.test(e) || o.support.flashVideo && t.swfHls && /mpegurl/i.test(e) }, o.engines.push(r) }, { "../common": 1, "../flowplayer": 28, "./embed": 2, bean: 31, "extend-object": 36 }], 4: [function(e, t, n) { "use strict";

            function i(e, t) {
                return t = t || 100, Math.round(e * t) / t }

            function r(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : e }

            function o(e) {
                return /^(video|application)/i.test(e) || (e = r(e)), !!p.canPlayType(e).replace("no", "") }

            function s(e, t) {
                var n = e.filter(function(e) {
                    return e.type === t });
                return n.length ? n[0] : null }
            var a, l, u = e("../flowplayer"),
                c = e("bean"),
                f = e("extend-object"),
                d = e("../common"),
                p = document.createElement("video"),
                h = { ended: "finish", pause: "pause", play: "resume", timeupdate: "progress", volumechange: "volume", ratechange: "speed", seeked: "seek", loadeddata: "ready", error: "error", dataunavailable: "error", webkitendfullscreen: !u.support.inlineVideo && "unload" },
                g = function(e, t, n, i) {
                    if (void 0 === t && (t = !0), void 0 === n && (n = "none"), void 0 === i && (i = !0), i && a) return a.type = r(e.type), a.src = e.src, d.find("track", a).forEach(d.removeNode), a.removeAttribute("crossorigin"), a;
                    var o = document.createElement("video");
                    return o.src = e.src, o.type = r(e.type), o.className = "fp-engine", u.support.autoplay && (o.autoplay = !!t && "autoplay"), u.support.dataload && (o.preload = n), o.setAttribute("webkit-playsinline", "true"), o.setAttribute("playsinline", "true"), i && (a = o), o };
            (l = function(e, t) {
                function n(n, r, s) {
                    var a = t.getAttribute("data-flowplayer-instance-id"); {
                        if (!n.listeners || !n.listeners.hasOwnProperty(a)) {
                            (n.listeners || (n.listeners = {}))[a] = s, c.on(r, "error", function(t) {
                                try { o(t.target.getAttribute("type")) && e.trigger("error", [e, { code: 4, video: f(s, { src: n.src, url: n.src }) }]) } catch (e) {} }), e.on("shutdown", function() { c.off(r), c.off(n, ".dvrhack"), e.off(".loophack") });
                            var l = {},
                                u = function(t) { "metadata" === t.kind && (t.mode = "hidden", t.addEventListener("cuechange", function() { e.trigger("metadata", [e, t.activeCues[0].value]) }, !1)) };
                            return n && n.textTracks.length && Array.prototype.forEach.call(n.textTracks, u), "function" == typeof n.textTracks.addEventListener && n.textTracks.addEventListener("addtrack", function(e) { u(e.track) }, !1), (e.conf.dvr || e.dvr || s.dvr) && c.on(n, "progress.dvrhack", function() { n.seekable.length && (e.video.duration = n.seekable.end(null), e.video.seekOffset = n.seekable.start(null), e.trigger("dvrwindow", [e, { start: n.seekable.start(null), end: n.seekable.end(null) }]), n.currentTime >= n.seekable.start(null) || (n.currentTime = n.seekable.start(null))) }), Object.keys(h).forEach(function(r) {
                                var o = h[r];
                                if (o) {
                                    var u = function(l) {
                                        if (s = n.listeners[a], l.target && d.hasClass(l.target, "fp-engine")) { b.debug && !/progress/.test(o) && console.log(r, "->", o, l);
                                            var u = function() { e.trigger(o, [e, c]) };
                                            if (!e.ready && !/ready|error/.test(o) || !o || !d.find("video", t).length) return void("resume" === o && e.one("ready", function() { setTimeout(function() { u() }) }));
                                            var c;
                                            if ("unload" === o) return void e.unload();
                                            switch (o) {
                                                case "ready":
                                                    c = f(s, { duration: n.duration < Number.MAX_VALUE ? n.duration : 0, width: n.videoWidth, height: n.videoHeight, url: n.currentSrc, src: n.currentSrc });
                                                    try { c.seekable = /mpegurl/i.test(s ? s.type || "" : "") && n.duration || n.seekable && n.seekable.end(null) || e.live } catch (e) {}
                                                    if (p = p || setInterval(function() {
                                                            try { c.buffer = n.buffered.end(null) } catch (e) {}
                                                            c.buffer && (i(c.buffer, 1e3) < i(c.duration, 1e3) && !c.buffered && c.buffer !== m ? (e.trigger("buffer", [e, c.buffer]), m = c.buffer) : c.buffered || c.buffer === m || (c.buffered = !0, e.trigger("buffer", [e, c.buffer]).trigger("buffered", l), m = c.buffer, clearInterval(p), p = 0)) }, 250), !e.live && !c.duration && !w.hlsDuration && "loadeddata" === r) {
                                                        var h = function() { c.duration = n.duration;
                                                            try { c.seekable = n.seekable && n.seekable.end(null) } catch (e) {}
                                                            u(), n.removeEventListener("durationchange", h), d.toggleClass(t, "is-live", !1) };
                                                        n.addEventListener("durationchange", h);
                                                        var g = function() { e.ready || n.duration || (c.duration = 0, d.addClass(t, "is-live"), u()), n.removeEventListener("timeupdate", g) };
                                                        return void n.addEventListener("timeupdate", g) }
                                                    break;
                                                case "progress":
                                                case "seek":
                                                    if (n.currentTime > 0 || e.live) c = Math.max(n.currentTime, 0);
                                                    else if ("progress" == o) return;
                                                    break;
                                                case "speed":
                                                    c = i(n.playbackRate);
                                                    break;
                                                case "volume":
                                                    c = i(n.volume);
                                                    break;
                                                case "error":
                                                    try {
                                                        (c = (l.srcElement || l.originalTarget).error).video = f(s, { src: n.src, url: n.src }) } catch (e) {
                                                        return } }
                                            u() } };
                                    t.addEventListener(r, u, !0), l[r] || (l[r] = []), l[r].push(u) } }), l }
                        n.listeners[a] = s } }
                var r, p, m, v, y = d.findDirect("video", t)[0] || d.find(".fp-player > video", t)[0],
                    w = u.support,
                    b = e.conf;
                return r = { engineName: l.engineName, pick: function(e) {
                        var t = function() {
                            if (w.video) {
                                if (b.videoTypePreference) {
                                    var t = s(e, b.videoTypePreference);
                                    if (t) return t }
                                for (var n = 0; n < e.length; n++)
                                    if (o(e[n].type)) return e[n] } }();
                        if (t) return "string" == typeof t.src && (t.src = d.createAbsoluteUrl(t.src)), t }, load: function(i) {
                        var o = d.find(".fp-player", t)[0],
                            s = !1,
                            a = !1;
                        b.splash && !y ? (y = g(i), d.prepend(o, y), a = !0) : y ? (d.addClass(y, "fp-engine"), d.find("source,track", y).forEach(d.removeNode), e.conf.nativesubtitles || d.attr(y, "crossorigin", !1), s = y.src === i.src) : (y = g(i, !!i.autoplay || !!b.autoplay, b.clip.preload || !0, !1), d.prepend(o, y), a = !0), w.inlineVideo || d.css(y, { position: "absolute", top: "-9999em" }), c.off(y, "timeupdate", d.noop), c.on(y, "timeupdate", d.noop), d.prop(y, "loop", !1), e.off(".loophack"), (i.loop || b.loop) && (/mpegurl/i.test(i.type) ? e.on("finish.loophack", function() { e.resume() }) : d.prop(y, "loop", !0)), void 0 !== v && (y.volume = v), (e.video.src && i.src != e.video.src || i.index) && d.attr(y, "autoplay", "autoplay"), y.src = i.src, y.type = i.type, r._listeners = n(y, d.find("source", y).concat(y), i) || r._listeners, (s || a && !b.splash) && y.load(), w.iOS.iPad && w.iOS.chrome && y.load(), y.paused && (i.autoplay || b.autoplay || b.splash) && y.play() }, pause: function() { y.pause() }, resume: function() { y.play() }, speed: function(e) { y.playbackRate = e }, seek: function(t) {
                        try {
                            var n = e.paused;
                            y.currentTime = t, n && y.pause() } catch (e) {} }, volume: function(e) { v = e, y && (y.volume = e) }, unload: function() { d.find("video.fp-engine", t).forEach(function(e) { d.attr(e, "src", ""), d.removeNode(e) }), w.cachedVideoTag || (a = null), p = clearInterval(p);
                        var e = t.getAttribute("data-flowplayer-instance-id");
                        delete y.listeners[e], y = 0, r._listeners && Object.keys(r._listeners).forEach(function(e) { r._listeners[e].forEach(function(n) { t.removeEventListener(e, n, !0) }) }) } } }).canPlay = function(e) {
                return u.support.video && o(e) }, l.engineName = "html5", u.engines.push(l) }, { "../common": 1, "../flowplayer": 28, bean: 31, "extend-object": 36 }], 5: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) { e.on("ready", function() {
                    var e = r.find("video.fp-engine", t)[0];
                    e && (e.setAttribute("x-webkit-airplay", "allow"), window.WebKitPlaybackTargetAvailabilityEvent && (e.addEventListener("webkitplaybacktargetavailabilitychanged", function(e) {
                        if ("available" === e.availability) {
                            var n = r.find(".fp-header", t)[0];
                            r.find(".fp-airplay", n).forEach(r.removeNode);
                            var i = r.createElement("a", { class: "fp-airplay fp-icon", title: "Play on AirPlay device" });
                            n.insertBefore(i, r.find(".fp-fullscreen", n)[0]) } }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function() {
                        var n = r.find(".fp-airplay", t)[0];
                        n && r.toggleClass(n, "fp-active", e.webkitCurrentPlaybackTargetIsWireless) }))) }), o.on(t, "click", ".fp-airplay", function(e) { e.preventDefault(), r.find("video.fp-engine", t)[0].webkitShowPlaybackTargetPicker() }) }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 6: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("./resolve").TYPE_RE,
                o = e("scriptjs"),
                s = e("bean");
            i(function(e, t) {
                var n, i = e.conf.analytics,
                    a = 0,
                    l = 0;
                if (i) { "undefined" == typeof _gat && o("//google-analytics.com/ga.js");
                    var u = function() {
                            var e = _gat._getTracker(i);
                            return e._setAllowLinker(!0), e },
                        c = function(i, o, s) { s = s || e.video, a && "undefined" != typeof _gat && (u()._trackEvent("Video / Seconds played", e.engine.engineName + "/" + s.type, s.title || t.getAttribute("title") || s.src.split("/").slice(-1)[0].replace(r, ""), Math.round(a / 1e3)), a = 0, n && (clearTimeout(n), n = null)) };
                    e.bind("load unload", c).bind("progress", function() { e.seeking || (a += l ? +new Date - l : 0, l = +new Date), n || (n = setTimeout(function() { n = null, u()._trackEvent("Flowplayer heartbeat", "Heartbeat", "", 0, !0) }, 6e5)) }).bind("pause", function() { l = 0 }), e.bind("shutdown", function() { s.off(window, "unload", c) }), s.on(window, "unload", c) } }) }, { "../flowplayer": 28, "./resolve": 19, bean: 31, scriptjs: 42 }], 7: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean"),
                s = e("scriptjs");
            i(function(e, t) {
                function n() {
                    var e, t, n;
                    e = g.applicationId || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, t = new chrome.cast.SessionRequest(e), n = new chrome.cast.ApiConfig(t, i, a), chrome.cast.initialize(n, l, u) }

                function i() { console.log("sessionListener") }

                function a(e) { e === chrome.cast.ReceiverAvailability.AVAILABLE && c() }

                function l() {}

                function u() { console.log("onError") }

                function c() {
                    var e = r.find(".fp-header", t)[0];
                    r.find(".fp-chromecast", e).forEach(r.removeNode), r.find(".fp-chromecast-engine", t).forEach(r.removeNode), h = r.createElement("a", { class: "fp-chromecast fp-icon", title: "Play on Cast device" }), e.insertBefore(h, r.find(".fp-fullscreen", e)[0]);
                    var n = r.createElement("div", { class: "fp-chromecast-engine" }),
                        i = r.createElement("p", { class: "fp-chromecast-engine-status" }),
                        o = r.createElement("p", { class: "fp-chromecast-engine-icon" });
                    n.appendChild(o), n.appendChild(i);
                    var s = r.find(".fp-engine", t)[0];
                    s ? s.parentNode.insertBefore(n, s) : r.prepend(r.find(".fp-player", t)[0] || t, n) }

                function f() { clearInterval(p), p = null, e.release(), r.toggleClass(t, "is-chromecast", !1), r.toggleClass(h, "fp-active", !1) }
                s("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"), window.__onGCastApiAvailable = function(e) { e && n() };
                var d, p, h, g = e.conf.chromecast || {};
                o.on(t, "click", ".fp-chromecast", function(n) {
                    return n.preventDefault(), d ? (e.trigger("pause", [e]), d.stop(), d = null, void f()) : (e.playing && e.pause(), void chrome.cast.requestSession(function(n) {
                        function i(n) { n.addUpdateListener(function(i) {
                                if (d) { p = p || setInterval(function() { e.trigger("progress", [e, n.getEstimatedTime()]) }, 500), i ? (r.toggleClass(t, "is-chromecast", !0), r.toggleClass(h, "fp-active", !0), e.hijack({ pause: function() { n.pause() }, resume: function() { n.play() }, seek: function(e) {
                                            var t = new chrome.cast.media.SeekRequest;
                                            t.currentTime = e, n.seek(t) } })) : (f(), e.trigger("finish", [e]));
                                    var o = n.playerState;
                                    e.paused && o === chrome.cast.media.PlayerState.PLAYING && e.trigger("resume", [e]), e.playing && o === chrome.cast.media.PlayerState.PAUSED && e.trigger("pause", [e]), r.toggleClass(t, "is-loading", o === chrome.cast.media.PlayerState.BUFFERING) } }) }
                        var o = (d = n).receiver.friendlyName;
                        r.html(r.find(".fp-chromecast-engine-status")[0], "Playing on device " + o);
                        var s = new chrome.cast.media.MediaInfo(e.video.src),
                            a = new chrome.cast.media.LoadRequest(s);
                        d.loadMedia(a, i, function() {}) }, function(e) { console.error("requestSession error", e) })) }) }) }, { "../common": 1, "../flowplayer": 28, bean: 31, scriptjs: 42 }], 8: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                function n(e) { t.className = t.className.replace(s, " "), e >= 0 && r.addClass(t, "cue" + e) }

                function i(t) {
                    var n = t && !isNaN(t.time) ? t.time : t;
                    return 0 > n && (n = e.video.duration + n), .125 * Math.round(n / .125) }
                var s = / ?cue\d+ ?/,
                    a = !1,
                    l = {},
                    u = -.125,
                    c = function(t) {
                        var i = e.cuepoints.indexOf(t);
                        isNaN(t) || (t = { time: t }), t.index = i, n(i), e.trigger("cuepoint", [e, t]) };
                e.on("progress", function(e, t, n) {
                    if (!a)
                        for (var r = i(n); r > u;) u += .125, l[u] && l[u].forEach(c) }).on("unload", n).on("beforeseek", function(e) { setTimeout(function() { e.defaultPrevented || (a = !0) }) }).on("seek", function(e, t, r) { n(), u = i(r || 0) - .125, a = !1, !r && l[0] && l[0].forEach(c) }).on("ready", function(t, n, i) { u = -.125;
                    var r = i.cuepoints || e.conf.cuepoints || [];
                    e.setCuepoints(r) }).on("finish", function() { u = -.125 }), e.conf.generate_cuepoints && e.bind("load", function() { r.find(".fp-cuepoint", t).forEach(r.removeNode) }), e.setCuepoints = function(t) {
                    return e.cuepoints = [], l = {}, t.forEach(e.addCuepoint), e }, e.addCuepoint = function(n) { e.cuepoints || (e.cuepoints = []);
                    var s = i(n);
                    if (l[s] || (l[s] = []), l[s].push(n), e.cuepoints.push(n), e.conf.generate_cuepoints && !1 !== n.visible) {
                        var a = e.video.duration,
                            u = r.find(".fp-timeline", t)[0];
                        r.css(u, "overflow", "visible");
                        var c = n.time || n;
                        0 > c && (c = a + c);
                        var f = r.createElement("a", { className: "fp-cuepoint fp-cuepoint" + (e.cuepoints.length - 1) });
                        r.css(f, "left", c / a * 100 + "%"), u.appendChild(f), o.on(f, "mousedown", function(t) { t.preventDefault(), t.stopPropagation(), e.seek(c) }) }
                    return e }, e.removeCuepoint = function(t) {
                    var n = e.cuepoints.indexOf(t),
                        r = i(t);
                    if (-1 !== n) { e.cuepoints = e.cuepoints.slice(0, n).concat(e.cuepoints.slice(n + 1));
                        var o = l[r].indexOf(t);
                        if (-1 !== o) return l[r] = l[r].slice(0, o).concat(l[r].slice(o + 1)), e } } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 9: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("bean"),
                o = e("../common"),
                s = e("./util/clipboard");
            i(function(e, t) {
                if (!1 !== e.conf.embed && !1 !== e.conf.share) {
                    var n = o.find(".fp-share-menu", t)[0],
                        i = o.createElement("a", { class: "fp-icon fp-embed", title: "Copy to your site" }, "Embed");
                    o.append(n, i), e.embedCode = function() {
                        var n = e.conf.embed || {},
                            i = e.video,
                            r = n.width || i.width || o.width(t),
                            s = n.height || i.height || o.height(t),
                            a = e.conf.ratio,
                            l = '<iframe src="' + e.shareUrl(!0) + '" allowfullscreen style="border:none;';
                        return n.width || n.height ? (isNaN(r) || (r += "px"), isNaN(s) || (s += "px"), l + "width:" + r + ";height:" + s + ';"></iframe>') : ((!a || e.conf.adaptiveRatio) && (a = s / r), '<div style="position:relative;width:100%;display:inline-block;">' + l + 'position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><div style="padding-top:' + 100 * a + '%;"></div></div>') }, r.on(t, "click", ".fp-embed", function() { s(e.embedCode(), function() { e.message("The embed code is now on your clipboard", 2e3) }, function() { e.textarea(e.embedCode(), "Copy the code below to embed your video") }) }) } }) }, { "../common": 1, "../flowplayer": 28, "./util/clipboard": 27, bean: 31 }], 10: [function(e, t, n) { "use strict";
            t.exports = function(e, t) { t || (t = document.createElement("div"));
                var n = {},
                    i = {},
                    r = function(e, r, o) {
                        var s = e.split(".")[0],
                            a = function(l) { o && (t.removeEventListener(s, a), n[e].splice(n[e].indexOf(a), 1));
                                var u = [l].concat(i[l.timeStamp + l.type] || []);
                                r && r.apply(void 0, u) };
                        t.addEventListener(s, a), n[e] || (n[e] = []), n[e].push(a) };
                e.on = e.bind = function(t, n) {
                    return t.split(" ").forEach(function(e) { r(e, n) }), e }, e.one = function(t, n) {
                    return t.split(" ").forEach(function(e) { r(e, n, !0) }), e };
                var o = function(e, t) {
                    return 0 === t.filter(function(t) {
                        return -1 === e.indexOf(t) }).length };
                e.off = e.unbind = function(i) {
                    return i.split(" ").forEach(function(e) {
                        var i = e.split(".").slice(1),
                            r = e.split(".")[0];
                        Object.keys(n).filter(function(e) {
                            var t = e.split(".").slice(1);
                            return (!r || 0 === e.indexOf(r)) && o(t, i) }).forEach(function(e) {
                            var i = n[e],
                                r = e.split(".")[0];
                            n[e] = i.filter(function(e) {
                                return t.removeEventListener(r, e), !1 }) }) }), e }, e.trigger = function(n, r, o) {
                    if (n) { r = (r || []).length ? r || [] : [r];
                        var s, a = document.createEvent("Event");
                        return s = n.type || n, a.initEvent(s, !1, !0), Object.defineProperty && (a.preventDefault = function() { Object.defineProperty(this, "defaultPrevented", { get: function() {
                                    return !0 } }) }), i[a.timeStamp + a.type] = r, t.dispatchEvent(a), o ? a : e } } }, t.exports.EVENTS = ["beforeseek", "disable", "error", "finish", "fullscreen", "fullscreen-exit", "load", "mute", "pause", "progress", "ready", "resume", "seek", "speed", "stop", "unload", "volume", "boot", "shutdown"] }, {}], 11: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share && n.facebook) { e.facebook = function() {
                        var e, t, i = screen.height,
                            r = screen.width,
                            o = "string" == typeof n.facebook ? n.facebook : window.location.toString();
                        e = Math.round(r / 2 - 275), t = 0, i > 420 && (t = Math.round(i / 2 - 210)), window.open("https://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(o), "sharer", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + e + ",top=" + t) };
                    var i = r.find(".fp-share-menu", t)[0],
                        s = r.createElement("a", { class: "fp-icon fp-facebook" }, "Facebook");
                    r.append(i, s), o.on(t, "click", ".fp-facebook", function() { e.facebook() }) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 12: [function(e, t, n) { "use strict";
            var i, r = e("../flowplayer"),
                o = e("bean"),
                s = e("../common"),
                a = "fullscreen",
                l = "fullscreen-exit",
                u = r.support.fullscreen,
                c = navigator.userAgent.toLowerCase(),
                f = /(safari)[ \/]([\w.]+)/.exec(c) && !/(chrome)[ \/]([\w.]+)/.exec(c);
            o.on(document, "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function(e) {
                var t = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || e.target;
                if (i || t.parentNode && t.parentNode.getAttribute("data-flowplayer-instance-id")) {
                    var n = i || r(t.parentNode);
                    t && !i ? i = n.trigger(a, [t]) : (i.trigger(l, [i]), i = null) } }), r(function(e, t) {
                var n = s.createElement("div", { className: "fp-player" });
                if (Array.prototype.map.call(t.children, s.identity).forEach(function(e) { s.matches(e, ".fp-ratio,script") || n.appendChild(e) }), t.appendChild(n), e.conf.fullscreen) {
                    var r, o, c = window;
                    e.isFullscreen = !1, e.fullscreen = function(t) {
                        return e.disabled ? void 0 : (void 0 === t && (t = !e.isFullscreen), t && (r = c.scrollY, o = c.scrollX), u ? t ? ["requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].forEach(function(e) {
                            return "function" == typeof n[e] ? (n[e](Element.ALLOW_KEYBOARD_INPUT), !f || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || n[e](), !1) : void 0 }) : ["exitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].forEach(function(e) {
                            return "function" == typeof document[e] ? (document[e](), !1) : void 0 }) : e.trigger(t ? a : l, [e]), e) };
                    var d;
                    e.on("mousedown.fs", function() {+new Date - d < 150 && e.ready && e.fullscreen(), d = +new Date }), e.on(a, function() { s.addClass(t, "is-fullscreen"), s.toggleClass(t, "fp-minimal-fullscreen", s.hasClass(t, "fp-minimal")), s.removeClass(t, "fp-minimal"), u || s.css(t, "position", "fixed"), e.isFullscreen = !0 }).on(l, function() {
                        var n;
                        s.toggleClass(t, "fp-minimal", s.hasClass(t, "fp-minimal-fullscreen")), s.removeClass(t, "fp-minimal-fullscreen"), u || "html5" !== e.engine || (n = t.css("opacity") || "", s.css(t, "opacity", 0)), u || s.css(t, "position", ""), s.removeClass(t, "is-fullscreen"), u || "html5" !== e.engine || setTimeout(function() { t.css("opacity", n) }), e.isFullscreen = !1, c.scrollTo(o, r) }).on("unload", function() { e.isFullscreen && e.fullscreen() }), e.on("shutdown", function() { i = null }) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 13: [function(e, t, n) { "use strict";
            var i, r, o = e("../flowplayer"),
                s = e("bean"),
                a = "is-help",
                l = e("../common");
            s.on(document, "keydown.fp", function(e) {
                var t = i,
                    n = e.ctrlKey || e.metaKey || e.altKey,
                    o = e.which,
                    s = t && t.conf;
                if (t && s.keyboard && !t.disabled) {
                    if (-1 != [63, 187, 191].indexOf(o)) return l.toggleClass(r, a), !1;
                    if (27 == o && l.hasClass(r, a)) return l.toggleClass(r, a), !1;
                    if (!n && t.ready) {
                        if (e.preventDefault(), e.shiftKey) return void(39 == o ? t.speed(!0) : 37 == o && t.speed(!1));
                        if (58 > o && o > 47) return t.seekTo(o - 48);
                        switch (o) {
                            case 38:
                            case 75:
                                t.volume(t.volumeLevel + .15);
                                break;
                            case 40:
                            case 74:
                                t.volume(t.volumeLevel - .15);
                                break;
                            case 39:
                            case 76:
                                t.seeking = !0, t.seek(!0);
                                break;
                            case 37:
                            case 72:
                                t.seeking = !0, t.seek(!1);
                                break;
                            case 190:
                                t.seekTo();
                                break;
                            case 32:
                                t.toggle();
                                break;
                            case 70:
                                s.fullscreen && t.fullscreen();
                                break;
                            case 77:
                                t.mute();
                                break;
                            case 81:
                                t.unload() } } } }), o(function(e, t) {
                if (e.conf.keyboard) { s.on(t, "mouseenter mouseleave", function(n) {
                        (i = e.disabled || "mouseover" != n.type ? 0 : e) && (r = t) });
                    var n = o.support.video && "flash" !== e.conf.engine && document.createElement("video").playbackRate ? "<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>" : "";
                    t.appendChild(l.createElement("div", { className: "fp-help" }, '         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>' + n + '         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip; <em>6</em> seek to 10%, 20% &hellip; 60% </p>         </div>   ')), s.on(t, "click", ".fp-close", function() { l.toggleClass(t, a) }), e.bind("shutdown", function() { r == t && (r = null) }) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 14: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) { e.showMenu = function(n, i) {
                    var s = r.find(".fp-ui", t)[0];
                    r.toggleClass(n, "fp-active", !0), setTimeout(function() { o.one(document, "click", function() { e.hideMenu(n) }) });
                    var a = i;
                    if (i && i.tagName && (a = { left: r.offset(i).left, rightFallbackOffset: r.width(i), top: r.offset(i).top + r.height(i) }), a) { a.rightFallbackOffset = a.rightFallbackOffset || 0;
                        var l = a.top - r.offset(s).top,
                            u = a.left - r.offset(s).left;
                        r.width(n) + u > r.width(s) && (u = u - r.width(n) + a.rightFallbackOffset), r.height(n) + l > r.height(s) && (l -= r.height(n)), r.css(n, { top: l + "px", left: u + "px" }) } }, e.hideMenu = function(e) { r.toggleClass(e, "fp-active", !1) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 15: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                function n(e) {
                    var t = r.createElement("div", { className: "fp-message" }, e);
                    return a.insertBefore(t, s), setTimeout(function() { r.toggleClass(t, "fp-shown") }), t }

                function i(e) { r.removeNode(e) }
                var s = r.find(".fp-header", t)[0],
                    a = r.find(".fp-ui", t)[0];
                e.message = function(e, t) {
                    var o = n(e),
                        s = function() { r.toggleClass(o, "fp-shown"), setTimeout(function() { i(o) }, 500) };
                    return t && setTimeout(s, t), s }, e.textarea = function(e) {
                    var t = document.createElement("textarea");
                    t.value = e, t.className = "fp-textarea", a.appendChild(t), o.on(document, "click.fptextarea", function(e) {
                        return e.target === t ? t.select() : (e.stopPropagation(), e.preventDefault(), r.removeNode(t), void o.off(document, "click.fptextarea")) }) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 16: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = /IEMobile/.test(window.navigator.userAgent),
                o = e("../common"),
                s = e("bean"),
                a = e("./ui").format,
                l = window.navigator.userAgent;
            (i.support.touch || r) && i(function(e, t) {
                var n = /Android/.test(l) && !/Firefox/.test(l) && !/Opera/.test(l),
                    u = /Silk/.test(l),
                    c = n ? parseFloat(/Android\ (\d\.\d)/.exec(l)[1], 10) : 0;
                if (n && !r) {
                    if (!/Chrome/.test(l) && 4 > c) {
                        var f = e.load;
                        e.load = function() {
                            var t = f.apply(e, arguments);
                            return e.trigger("ready", [e, e.video]), t } }
                    var d, p = 0,
                        h = function(e) { d = setInterval(function() { e.video.time = ++p, e.trigger("progress", [e, p]) }, 1e3) };
                    e.bind("ready pause unload", function() { d && (clearInterval(d), d = null) }), e.bind("ready", function() { p = 0 }), e.bind("resume", function(t, n) {
                        return n.live ? p ? h(n) : void e.one("progress", function(e, t, n) { 0 === n && h(t) }) : void 0 }) }
                i.support.volume || o.addClass(t, "no-volume"), o.addClass(t, "is-touch"), e.sliders && e.sliders.timeline && e.sliders.timeline.disableAnimation(), (!i.support.inlineVideo || e.conf.native_fullscreen) && (e.conf.nativesubtitles = !0);
                var g = !1;
                if (s.on(t, "touchmove", function() { g = !0 }), s.on(t, "touchend click", function(n) {
                        return g ? void(g = !1) : e.playing && !o.hasClass(t, "is-mouseover") ? (o.addClass(t, "is-mouseover"), o.removeClass(t, "is-mouseout"), n.preventDefault(), void n.stopPropagation()) : void(e.playing || e.splash || !o.hasClass(t, "is-mouseout") || o.hasClass(t, "is-mouseover") || setTimeout(function() { e.disabled || e.playing || e.splash || e.resume() }, 400)) }), !i.support.fullscreen && e.conf.native_fullscreen && "function" == typeof document.createElement("video").webkitEnterFullScreen) {
                    var m = e.fullscreen;
                    e.fullscreen = function() {
                        var n = o.find("video.fp-engine", t)[0];
                        return n ? (e.trigger("fullscreen", [e]), s.on(document, "webkitfullscreenchange.nativefullscreen", function() { document.webkitFullscreenElement === n && (s.off(document, ".nativefullscreen"), s.on(document, "webkitfullscreenchange.nativefullscreen", function() { document.webkitFullscreenElement || (s.off(document, ".nativefullscreen"), e.trigger("fullscreen-exit", [e])) })) }), n.webkitEnterFullScreen(), void s.one(n, "webkitendfullscreen", function() { s.off(document, "fullscreenchange.nativefullscreen"), e.trigger("fullscreen-exit", [e]), o.prop(n, "controls", !0), o.prop(n, "controls", !1) })) : m.apply(e) } }(n || u) && e.bind("ready", function() {
                    var n = o.find("video.fp-engine", t)[0];
                    s.one(n, "canplay", function() { n.play() }), n.play(), e.bind("progress.dur", function() {
                        if (!e.live && !e.conf.live) {
                            var i = n.duration;
                            1 !== i && (e.video.duration = i, o.find(".fp-duration", t)[0].innerHTML = a(i), e.unbind("progress.dur")) } }) }) }) }, { "../common": 1, "../flowplayer": 28, "./ui": 24, bean: 31 }], 17: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("extend-object"),
                o = e("bean"),
                s = e("../common"),
                a = e("./resolve"),
                l = new a,
                u = window.jQuery,
                c = /^#/;
            i(function(e, t) {
                function n() {
                    return s.find(h.query, i()) }

                function i() {
                    return c.test(h.query) ? void 0 : t }

                function f() {
                    return s.find(h.query + "." + g, i()) }

                function d() {
                    var n = s.find(".fp-playlist", t)[0];
                    if (!n) { n = s.createElement("div", { className: "fp-playlist" });
                        var i = s.find(".fp-next,.fp-prev", t);
                        i.length ? i[0].parentElement.insertBefore(n, i[0]) : s.insertAfter(t, s.find("video", t)[0], n) }
                    n.innerHTML = "", e.conf.playlist[0].length && (e.conf.playlist = e.conf.playlist.map(function(e) {
                        if ("string" == typeof e) {
                            var t = e.split(a.TYPE_RE)[1];
                            return { sources: [{ type: "m3u8" === t.toLowerCase() ? "application/x-mpegurl" : "video/" + t, src: e }] } }
                        return { sources: e.map(function(e) {
                                var t = {};
                                return Object.keys(e).forEach(function(n) { t.type = /mpegurl/i.test(n) ? "application/x-mpegurl" : "video/" + n, t.src = e[n] }), t }) } })), e.conf.playlist.forEach(function(e, t) {
                        var i = e.sources[0].src;
                        n.appendChild(s.createElement("a", { href: i, "data-index": t })) }) }

                function p(t) {
                    return void 0 !== t.index ? t.index : void 0 !== e.video.index ? e.video.index : e.conf.startIndex || 0 }
                var h = r({ active: "is-active", advance: !0, query: ".fp-playlist a" }, e.conf),
                    g = h.active,
                    m = s.find(".fp-ui", t)[0],
                    v = s.hasClass(t, "fp-custom-playlist") || !!h.customPlaylist;
                s.toggleClass(t, "fp-custom-playlist", v), s.toggleClass(t, "fp-default-playlist", !v), e.play = function(t) {
                    if (void 0 === t) return e.resume();
                    if ("number" == typeof t && !e.conf.playlist[t]) return e;
                    if ("number" != typeof t) return e.load.apply(null, arguments);
                    var n = r({ index: t }, e.conf.playlist[t]);
                    return t === e.video.index ? e.load(n, function() { e.resume() }) : (e.off("beforeresume.fromfirst"), e.load(n, function() { e.video.index = t }), e) }, e.next = function(t) { t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = n === e.conf.playlist.length - 1 ? 0 : n + 1, e.play(n)), e }, e.prev = function(t) { t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = 0 === n ? e.conf.playlist.length - 1 : n - 1, e.play(n)), e }, e.setPlaylist = function(t) {
                    return e.conf.playlist = t, delete e.video.index, d(), e }, e.addPlaylistItem = function(t) {
                    return e.setPlaylist(e.conf.playlist.concat([t])) }, e.removePlaylistItem = function(t) {
                    var n = e.conf.playlist;
                    return e.setPlaylist(n.slice(0, t).concat(n.slice(t + 1))) }, o.on(t, "click", ".fp-next", e.next), o.on(t, "click", ".fp-prev", e.prev), h.advance && e.off("finish.pl").on("finish.pl", function(e, n) {
                    if (n.video.loop) return n.seek(0, function() { n.resume() });
                    var i = n.video.index >= 0 ? n.video.index + 1 : void 0;
                    i < n.conf.playlist.length || h.loop ? (i = i === n.conf.playlist.length ? 0 : i, s.removeClass(t, "is-finished"), setTimeout(function() { n.play(i) })) : n.conf.playlist.length > 1 && (n.one("beforeresume.fromfirst", function(e) { e.preventDefault(), n.play(0) }), n.one("seek", function() { n.off("beforeresume.fromfirst") })) });
                var y = !1;
                e.conf.playlist.length && (y = !0, d(), e.conf.clip && e.conf.clip.sources.length || (e.conf.clip = e.conf.playlist[e.conf.startIndex || 0])), n().length && !y && (e.conf.playlist = [], delete e.conf.startIndex, n().forEach(function(t) {
                    var n = t.href;
                    t.setAttribute("data-index", e.conf.playlist.length);
                    var i = l.resolve(n, e.conf.clip.sources);
                    u && r(i, u(t).data()), e.conf.playlist.push(i) })), s.find(".fp-prev,.fp-next,.fp-playlist", t).forEach(function(e) { m.appendChild(e) }), o.on(c.test(h.query) ? document : t, "click", h.query, function(t) { t.preventDefault();
                    var n = t.currentTarget,
                        i = Number(n.getAttribute("data-index")); - 1 != i && e.play(i) }), e.on("load", function(n, r, o) {
                    if (e.conf.playlist.length) {
                        var a = f()[0],
                            l = a && a.getAttribute("data-index"),
                            u = o.index = p(o),
                            c = s.find(h.query + '[data-index="' + u + '"]', i())[0],
                            d = u == e.conf.playlist.length - 1;
                        a && s.removeClass(a, g), c && s.addClass(c, g), s.removeClass(t, "video" + l), s.addClass(t, "video" + u), s.toggleClass(t, "last-video", d), o.index = r.video.index = u, o.is_last = r.video.is_last = d } }).on("unload.pl", function() { e.conf.playlist.length && (f().forEach(function(e) { s.toggleClass(e, g) }), e.conf.playlist.forEach(function(e, n) { s.removeClass(t, "video" + n) })) }), e.conf.playlist.length && (e.conf.loop = !1) }) }, { "../common": 1, "../flowplayer": 28, "./resolve": 19, bean: 31, "extend-object": 36 }], 18: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                function n() { r.find(".fp-qsel-menu", t).forEach(r.removeNode), r.find(".fp-qsel", t).forEach(r.removeNode) }

                function i(e) { l.appendChild(r.createElement("strong", { className: "fp-qsel" }, "HD"));
                    var t = r.createElement("div", { className: "fp-menu fp-qsel-menu" }, "<strong>Quality</strong>");
                    e.forEach(function(e) {
                        var n = document.createElement("a"),
                            i = void 0 !== e.value ? e.value : e;
                        n.setAttribute("data-quality", i), n.innerHTML = e.label || e, t.appendChild(n) }), a.appendChild(t) }

                function s(e) { r.find(".fp-qsel-menu a", t).forEach(function(t) { r.toggleClass(t, "fp-selected", t.getAttribute("data-quality") == e), r.toggleClass(t, "fp-color", t.getAttribute("data-quality") == e) }) }
                var a = r.find(".fp-ui", t)[0],
                    l = r.find(".fp-controls", a)[0];
                o.on(t, "click", ".fp-qsel", function() {
                    var n = r.find(".fp-qsel-menu", t)[0];
                    r.hasClass(n, "fp-active") ? e.hideMenu() : e.showMenu(n) }), o.on(t, "click", ".fp-qsel-menu a", function(t) {
                    var n = t.target.getAttribute("data-quality");
                    e.quality(n) }), e.quality = function(t) { t = isNaN(Number(t)) ? t : Number(t), e.trigger("quality", [e, t]) }, e.on("quality", function(e, t, n) { s(n, t.video.qualities) }), e.on("ready", function(e, t, r) { n(), !r.qualities || r.qualities.filter(function(e) {
                        return void 0 === e.value || e.value > -1 }).length < 2 || (i(r.qualities, r.quality), s(r.quality, r.qualities)) }) }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 19: [function(e, t, n) { "use strict";

            function i(e) {
                var t = e.attr("src"),
                    n = e.attr("type") || "",
                    i = t.split(o)[1];
                return n = n.toLowerCase(), s(e.data(), { src: t, suffix: i || n, type: n || i }) }

            function r(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : "video/" + e }
            var o = /\.(\w{3,4})(\?.*)?$/i,
                s = e("extend-object");
            t.exports = function() {
                var e = this;
                e.sourcesFromVideoTag = function(e, t) {
                    var n = [];
                    return t("source", e).each(function() { n.push(i(t(this))) }), !n.length && e.length && n.push(i(e)), n }, e.resolve = function(e, t) {
                    return e ? ("string" == typeof e && (e = { src: e, sources: [] }, e.sources = (t || []).map(function(t) {
                        var n = t.src.split(o)[1];
                        return { type: t.type, src: e.src.replace(o, "." + n + "$2") } })), e instanceof Array && (e = { sources: e.map(function(e) {
                            return e.type && e.src ? e : Object.keys(e).reduce(function(t, n) {
                                return s(t, { type: r(n), src: e[n] }) }, {}) }) }), e) : { sources: t } } }, t.exports.TYPE_RE = o }, { "extend-object": 36 }], 20: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("extend-object"),
                s = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share) { e.shareUrl = function(t) {
                        if (t && n.embed && n.embed.iframe) return n.embed.iframe;
                        if ("string" == typeof e.conf.share) return e.conf.share;
                        var i = encodeURIComponent(e.video.title || (r.find("title")[0] || {}).innerHTML || "Flowplayer video"),
                            s = encodeURIComponent(btoa(JSON.stringify(o({}, e.conf, e.extensions)))),
                            a = encodeURIComponent(window.location.toString());
                        return (t ? "https://flowplayer.org/e/" : "https://flowplayer.org/s/") + "?t=" + i + "&c=" + s + "&r=" + a };
                    var i = r.createElement("div", { className: "fp-menu fp-share-menu" }, "<strong>Share</strong>");
                    r.find(".fp-ui", t)[0].appendChild(i);
                    var a = r.find(".fp-share", t)[0];
                    s.on(t, "click", ".fp-share", function(t) { t.preventDefault(), r.hasClass(i, "fp-active") ? e.hideMenu() : e.showMenu(i, a) }) } else r.find(".fp-share", t).forEach(r.removeNode) }) }, { "../common": 1, "../flowplayer": 28, bean: 31, "extend-object": 36 }], 21: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i.defaults.subtitleParser = function(e) {
                function t(e) {
                    var t = e.split(":");
                    return 2 == t.length && t.unshift(0), 60 * t[0] * 60 + 60 * t[1] + parseFloat(t[2].replace(",", ".")) }
                for (var n, i, r, o = /^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/, s = [], a = 0, l = e.split("\n"), u = l.length, c = {}; u > a; a++)
                    if (i = o.exec(l[a])) {
                        for (n = l[a - 1], r = "<p>" + l[++a] + "</p><br/>";
                            "string" == typeof l[++a] && l[a].trim() && a < l.length;) r += "<p>" + l[a] + "</p><br/>";
                        c = { title: n, startTime: t(i[1]), endTime: t(i[3]), text: r }, s.push(c) }
                return s }, i(function(e, t) {
                var n, s, a, l, u = function() {
                    return a = r.createElement("strong", { className: "fp-cc" }, "CC"), (l = r.createElement("div", { className: "fp-menu fp-subtitle-menu" }, "<strong>Closed Captions</strong>")).appendChild(r.createElement("a", { "data-subtitle-index": -1 }, "No subtitles")), (e.video.subtitles || []).forEach(function(e, t) {
                        var n = e.srclang || "en",
                            i = e.label || "Default (" + n + ")",
                            o = r.createElement("a", { "data-subtitle-index": t }, i);
                        l.appendChild(o) }), r.find(".fp-ui", t)[0].appendChild(l), r.find(".fp-controls", t)[0].appendChild(a), a };
                o.on(t, "click", ".fp-cc", function() { r.toggleClass(l, "fp-active") }), o.on(t, "click", ".fp-subtitle-menu [data-subtitle-index]", function(t) { t.preventDefault();
                    var n = t.target.getAttribute("data-subtitle-index");
                    return "-1" === n ? e.disableSubtitles() : void e.loadSubtitles(n) });
                var c = function() { s = r.find(".fp-subtitle", t)[0], s = s || r.appendTo(r.createElement("div", { class: "fp-captions" }), r.find(".fp-player", t)[0]), Array.prototype.forEach.call(s.children, r.removeNode), r.find(".fp-subtitle-menu", t).forEach(r.removeNode), u() };
                e.on("ready", function(n, o, s) {
                    var l = o.conf;
                    if (i.support.subtitles && l.nativesubtitles && "html5" == o.engine.engineName) {
                        var u = function(e) {
                            var n = r.find("video", t)[0].textTracks;
                            n.length && (n[0].mode = e) };
                        if (!s.subtitles || !s.subtitles.length) return;
                        var f = r.find("video.fp-engine", t)[0];
                        return s.subtitles.some(function(e) {
                            return !r.isSameDomain(e.src) }) && r.attr(f, "crossorigin", "anonymous"), "function" == typeof f.textTracks.addEventListener && f.textTracks.addEventListener("addtrack", function() { u("disabled"), u("showing") }), void s.subtitles.forEach(function(e) { f.appendChild(r.createElement("track", { kind: "subtitles", srclang: e.srclang || "en", label: e.label || "en", src: e.src, default: e.default })) }) }
                    if (o.subtitles = [], c(), r.removeClass(t, "has-menu"), e.disableSubtitles(), r.toggleClass(a, "fp-hidden", !s.subtitles || !s.subtitles.length), s.subtitles && s.subtitles.length) {
                        var d = s.subtitles.filter(function(e) {
                            return e.default })[0];
                        d && o.loadSubtitles(s.subtitles.indexOf(d)) } }), e.bind("cuepoint", function(e, t, i) { i.subtitle ? (n = i.index, r.html(s, i.subtitle.text), r.addClass(s, "fp-shown")) : i.subtitleEnd && (r.removeClass(s, "fp-shown"), n = i.index) }), e.bind("seek", function(t, i, o) { n && e.cuepoints[n] && e.cuepoints[n].time > o && (r.removeClass(s, "fp-shown"), n = null), (e.cuepoints || []).forEach(function(t) {
                        var i = t.subtitle;
                        i && n != t.index ? o >= t.time && (!i.endTime || o <= i.endTime) && e.trigger("cuepoint", [e, t]) : t.subtitleEnd && o >= t.time && t.index == n + 1 && e.trigger("cuepoint", [e, t]) }) });
                var f = function(e) { r.toggleClass(r.find("a.fp-selected", l)[0], "fp-selected"), r.toggleClass(r.find('a[data-subtitle-index="' + e + '"]', l)[0], "fp-selected") };
                e.disableSubtitles = function() {
                    return e.subtitles = [], (e.cuepoints || []).forEach(function(t) {
                        (t.subtitle || t.subtitleEnd) && e.removeCuepoint(t) }), s && Array.prototype.forEach.call(s.children, r.removeNode), f(-1), e }, e.loadSubtitles = function(t) { e.disableSubtitles();
                    var n = e.video.subtitles[t].src;
                    return n ? (f(t), r.xhrGet(n, function(t) { e.conf.subtitleParser(t).forEach(function(t) {
                            var n = { time: t.startTime, subtitle: t, visible: !1 };
                            e.subtitles.push(t), e.addCuepoint(n), e.addCuepoint({ time: t.endTime, subtitleEnd: t.title, visible: !1 }), 0 !== t.startTime || e.video.time || e.trigger("cuepoint", [e, n]) }) }, function() {
                        return e.trigger("error", { code: 8, url: n }), !1 }), e) : void 0 } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 22: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("extend-object");! function() {
                var e = {},
                    t = document.documentElement.style,
                    n = navigator.userAgent.toLowerCase(),
                    o = /(chrome)[ \/]([\w.]+)/.exec(n) || /(safari)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                o[1] && (e[o[1]] = !0, e.version = o[2] || "0");
                var s = function() {
                        var e = document.createElement("video");
                        return e.loop = !0, e.autoplay = !0, e.preload = !0, e }(),
                    a = navigator.userAgent,
                    l = e.msie || /Trident\/7/.test(a),
                    u = /iPad|MeeGo/.test(a) && !/CriOS/.test(a),
                    c = /iPad/.test(a) && /CriOS/.test(a),
                    f = /iP(hone|od)/i.test(a) && !/iPad/.test(a) && !/IEMobile/i.test(a),
                    d = /Android/.test(a) && !/Firefox/.test(a),
                    p = /Android/.test(a) && /Firefox/.test(a),
                    h = /Silk/.test(a),
                    g = /IEMobile/.test(a),
                    m = g ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(a)[1], 10) : 0,
                    v = g ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(a)[1], 10) : 0,
                    y = u || f ? function(e) {
                        var t = /iP(ad|hone)(; CPU)? OS (\d+_\d)/.exec(e);
                        return t && t.length > 1 ? parseFloat(t[t.length - 1].replace("_", "."), 10) : 0 }(a) : 0,
                    w = d ? parseFloat(/Android\ (\d\.\d)/.exec(a)[1], 10) : 0,
                    b = r(i.support, { browser: e, iOS: { iPhone: f, iPad: u || c, version: y, chrome: c }, subtitles: !!s.addTextTrack, fullscreen: "function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(a) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen || "function" == typeof document.msExitFullscreen, inlineBlock: !(l && e.version < 8), touch: "ontouchstart" in window, dataload: !u && !f && !g, flex: "flexWrap" in t || "WebkitFlexWrap" in t || "msFlexWrap" in t, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, zeropreload: !l && !d, volume: !(u || f || h || c), cachedVideoTag: !(u || f || c || g), firstframe: !(f || u || d || h || c || g || p), inlineVideo: (!f || y >= 10) && (!g || m >= 8.1 && v >= 11) && (!d || w >= 3), hlsDuration: !d && (!e.safari || u || f || c), seekable: !u && !c });
                b.autoplay = b.firstframe;
                try {
                    var I = navigator.plugins["Shockwave Flash"],
                        x = l ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : I.description;
                    l || I[0].enabledPlugin ? ((x = x.split(/\D+/)).length && !x[0] && (x = x.slice(1)), b.flashVideo = x[0] > 9 || 9 == x[0] && x[3] >= 115) : b.flashVideo = !1 } catch (e) {}
                try { b.video = !!s.canPlayType, b.video && s.canPlayType("video/mp4") } catch (e) { b.video = !1 }
                b.animation = function() {
                    for (var e = ["", "Webkit", "Moz", "O", "ms", "Khtml"], t = document.createElement("p"), n = 0; n < e.length; n++)
                        if (void 0 !== t.style[e[n] + "AnimationName"]) return !0 }() }() }, { "../flowplayer": 28, "extend-object": 36 }], 23: [function(e, t, n) { "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share && !1 !== n.twitter) { e.tweet = function() {
                        var t, i, r = screen.height,
                            o = screen.width,
                            s = "string" == typeof n.twitter ? n.twitter : e.shareUrl();
                        t = Math.round(o / 2 - 275), i = 0, r > 420 && (i = Math.round(r / 2 - 210)), window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(s), "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + t + ",top=" + i) };
                    var i = r.find(".fp-share-menu", t)[0],
                        s = r.createElement("a", { class: "fp-icon fp-twitter" }, "Twitter");
                    r.append(i, s), o.on(t, "click", ".fp-twitter", function() { e.tweet() }) } }) }, { "../common": 1, "../flowplayer": 28, bean: 31 }], 24: [function(e, t, n) {
            (function(n) { "use strict";

                function i(e) {
                    return e = parseInt(e, 10), e >= 10 ? e : "0" + e }

                function r(e, t) { e = Math.max(e || 0, 0), e = t ? Math.ceil(e) : Math.floor(e);
                    var n = Math.floor(e / 3600),
                        r = Math.floor(e / 60);
                    return e -= 60 * r, n >= 1 ? (r -= 60 * n, n + ":" + i(r) + ":" + i(e)) : i(r) + ":" + i(e) }
                var o = e("../flowplayer"),
                    s = e("../common"),
                    a = e("bean"),
                    l = e("./ui/slider"),
                    u = e("./ui/bar-slider"),
                    c = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk5Ljg0NCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz4KPHRpdGxlPnBsYXktcm91bmRlZC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNNDEuMDM1OSw3MS4xOWE1LjA0OTIsNS4wNDkyLDAsMCwxLTIuNTU3NS0uNjY3M2MtMS44MDMxLTEuMDQxLTIuNzk1OC0zLjEyNDgtMi43OTU4LTUuODY2NFYzNS4xODg3YzAtMi43NDI5Ljk5MzMtNC44MjcyLDIuNzk3LTUuODY3NiwxLjgwMjUtMS4wNDIyLDQuMTAzNC0uODYsNi40OC41MTQzTDcwLjQ3ODIsNDQuNTY3MmMyLjM3NTEsMS4zNzExLDMuNjgyNiwzLjI3MjUsMy42ODMyLDUuMzU0NXMtMS4zMDc2LDMuOTg0NS0zLjY4MzIsNS4zNTYyTDQ0Ljk1OTIsNzAuMDExNEE3LjkzODQsNy45Mzg0LDAsMCwxLDQxLjAzNTksNzEuMTlabS4wMDY1LTQwLjEyM2EyLjY3OTQsMi42Nzk0LDAsMCwwLTEuMzU4Mi4zNDEzYy0xLjAyNjMuNTkyNi0xLjU5MTIsMS45MzQ5LTEuNTkxMiwzLjc4VjY0LjY1NjNjMCwxLjg0NDkuNTY0OSwzLjE4NjYsMS41OTA2LDMuNzc5MSwxLjAyODEuNTkzMiwyLjQ3MzMuNDEwOCw0LjA3LS41MTJMNjkuMjczLDUzLjE5MDZjMS41OTgzLS45MjI3LDIuNDc4LTIuMDgzOCwyLjQ3OC0zLjI2ODlzLS44OC0yLjM0NDUtMi40NzgtMy4yNjY2TDQzLjc1NCwzMS45MjI3QTUuNTY4NSw1LjU2ODUsMCwwLDAsNDEuMDQyMywzMS4wNjcxWiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    f = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogIDxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwMDA7b3BhY2l0eTowLjY1O30uYntmaWxsOiNmZmY7b3BhY2l0eToxLjA7fTwvc3R5bGU+CiAgPC9kZWZzPjx0aXRsZT5wbGF5LXJvdW5kZWQtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM1Ljk0MiwzNS4yMzIzYzAtNC43Mjg5LDMuMzUwNi02LjY2MzcsNy40NDYtNC4yOTcxTDY4LjgzLDQ1LjYyMzVjNC4wOTU2LDIuMzY0LDQuMDk1Niw2LjIzMTksMCw4LjU5NzdMNDMuMzg4LDY4LjkxYy00LjA5NTQsMi4zNjQtNy40NDYuNDMtNy40NDYtNC4yOTc5WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPgogIDwvc3ZnPgogIAo=", "base64"),
                    d = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5jb250cm9sYnV0dG9ue2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlPnBsYXktc2hhcnAtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cG9seWdvbiBjbGFzcz0iY29udHJvbGJ1dHRvbiIgcG9pbnRzPSI3My42MDEgNTAgMzcuOTY4IDcwLjU3MyAzNy45NjggMjkuNDI3IDczLjYwMSA1MCIgZmlsdGVyPSJ1cmwoI2YxKSIvPgo8L3N2Zz4K", "base64"),
                    p = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDQgOTkuODQzNCI+PGRlZnM+PHN0eWxlPi5jb250cm9sYnV0dG9uYmd7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGxheS1zaGFycC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNMzYuOTQ0Myw3Mi4yNDczVjI3LjI5MTZMNzUuODc3Niw0OS43N1ptMi4yLTQxLjE0NTVWNjguNDM3MUw3MS40Nzc2LDQ5Ljc3WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    h = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDM0IDk5Ljg0MzQiPjxkZWZzPjxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5yZWN0e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KPC9kZWZzPjx0aXRsZT5wYXVzZS1yb3VuZGVkLW91dGxpbmU8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxMi0uMDc4M2E1MCw1MCwwLDEsMCw1MC4wMDA2LDUwQTUwLjA1NjIsNTAuMDU2MiwwLDAsMCw0OS45MjEyLS4wNzgzWiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIj48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTM5LjAwMzYsNzEuOTcyNmE3LjU2NSw3LjU2NSwwLDAsMS03LjU1Ny03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NDgsNy41NjQ4LDAsMCwxLDM5LjAwMzYsNzEuOTcyNlptMC00MS45MDRhNS4zNjQ3LDUuMzY0NywwLDAsMC01LjM1OTMsNS4zNTgydjI4Ljk5YTUuMzU4Nyw1LjM1ODcsMCwwLDAsMTAuNzE3NCwwdi0yOC45OUE1LjM2NDUsNS4zNjQ1LDAsMCwwLDM5LjAwMzYsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTYwLjg0LDcxLjk3MjZhNy41NjQ4LDcuNTY0OCwwLDAsMS03LjU1Ni03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NSw3LjU2NSwwLDAsMSw2MC44NCw3MS45NzI2Wm0wLTQxLjkwNGE1LjM2NDUsNS4zNjQ1LDAsMCwwLTUuMzU4Miw1LjM1ODJ2MjguOTlhNS4zNTg3LDUuMzU4NywwLDAsMCwxMC43MTc0LDB2LTI4Ljk5QTUuMzY0Nyw1LjM2NDcsMCwwLDAsNjAuODQsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48L2c+PC9zdmc+Cg==", "base64"),
                    g = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utcm91bmRlZC1maWxsPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIiBmaWx0ZXI9InVybCgjZjEpIj48cmVjdCBjbGFzcz0icmVjdCIgeD0iMzEuODQ0IiB5PSIyOC4xMjMxIiB3aWR0aD0iMTMuNDM2MiIgaGVpZ2h0PSI0My41OTczIiByeD0iNi43MTgxIiByeT0iNi43MTgxIi8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjU2MzgiIHk9IjI4LjEyMzEiIHdpZHRoPSIxMy40MzYyIiBoZWlnaHQ9IjQzLjU5NzMiIHJ4PSI2LjcxODEiIHJ5PSI2LjcxODEiLz48L2c+PC9zdmc+Cg==", "base64"),
                    m = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGRlZnM+PHN0eWxlPi5mcC1jb2xvci1wbGF5e29wYWNpdHk6MC42NTt9LnJlY3R7ZmlsbDojZmZmO308L3N0eWxlPgo8L2RlZnM+PHRpdGxlPnBhdXNlLXNoYXJwLWZpbGw8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxNy0uMDc4YTUwLDUwLDAsMSwwLDUwLDUwQTUwLjA1NjQsNTAuMDU2NCwwLDAsMCw0OS45MjE3LS4wNzhaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxyZWN0IGNsYXNzPSJyZWN0IiB4PSIzMy41IiB5PSIzMC4xMDQyIiB3aWR0aD0iMTIuMjYzNCIgaGVpZ2h0PSIzOS43OTE3Ii8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjIzNjYiIHk9IjMwLjEwNDIiIHdpZHRoPSIxMi4yNjM0IiBoZWlnaHQ9IjM5Ljc5MTciLz48L2c+PC9zdmc+Cg==", "base64"),
                    v = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtb3V0bGluZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTkuODQzNCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utc2hhcnAtb3V0bGluZTwvdGl0bGU+PHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjEyLS4wNzgzYTUwLDUwLDAsMSwwLDUwLjAwMDYsNTBBNTAuMDU2Miw1MC4wNTYyLDAsMCwwLDQ5LjkyMTItLjA3ODNaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNDYuODcwOSw2OS45NTMxSDMzLjEzODVWMjkuODlINDYuODcwOVpNMzUuMTQxNiw2Ny45NWg5LjcyNjJWMzEuODkzNUgzNS4xNDE2WiIvPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNjYuNzA0Nyw2OS45NTMxSDUyLjk3MjJWMjkuODlINjYuNzA0N1pNNTQuOTc1NCw2Ny45NWg5LjcyNjJWMzEuODkzNUg1NC45NzU0WiIvPjwvZz48L3N2Zz4K", "base64"),
                    y = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLW91dGxpbmUiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K", "base64"),
                    w = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLWZpbGwiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC4wcyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuNHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMS4ycyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=", "base64"),
                    b = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1maWxsIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjBzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItMTAiIHk9Ii0xMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTEwIiB5PSItMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuOHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDUwKSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIxLjJzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KPC9zdmc+Cg==", "base64"),
                    I = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1vdXRsaW5lIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTkiIHk9Ii05IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItOSIgeT0iLTkiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSA1MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+Cjwvc3ZnPgo=", "base64");
                o(function(e, t) {
                    function i(e) {
                        return s.find(".fp-" + e, t)[0] }

                    function x(e) { s.css(L, "padding-top", 100 * e + "%"), E.inlineBlock || s.height(s.find("object", t)[0], s.height(t)) }

                    function C(e) { e ? (s.addClass(t, "is-mouseover"), s.removeClass(t, "is-mouseout")) : (s.addClass(t, "is-mouseout"), s.removeClass(t, "is-mouseover")) }
                    s.find(".fp-filters").forEach(s.removeNode);
                    try {
                        var S;
                        document.body.appendChild(S = s.createElement("div", {}, n("PHN2ZyBjbGFzcz0iZnAtZmlsdGVycyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMCAwIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImYxIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgICAgPGZlT2Zmc2V0IHJlc3VsdD0ib2ZmT3V0IiBpbj0iU291cmNlQWxwaGEiIGR4PSIwIiBkeT0iMCIgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJtYXRyaXhPdXQiIGluPSJvZmZPdXQiIHR5cGU9Im1hdHJpeCIKICAgICAgdmFsdWVzPSIwLjMgMCAwIDAgMCAwIDAuMyAwIDAgMCAwIDAgMC4zIDAgMCAwIDAgMCAwLjQgMCIgLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im1hdHJpeE91dCIgc3RkRGV2aWF0aW9uPSI0IiAvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo=", "base64"))), s.css(S, { width: 0, height: 0, overflow: "hidden", position: "absolute", margin: 0, padding: 0 }) } catch (e) {}
                    var M, A = e.conf,
                        E = o.support;
                    s.find(".fp-ratio,.fp-ui", t).forEach(s.removeNode), s.addClass(t, "flowplayer"), t.appendChild(s.createElement("div", { className: "fp-ratio" }));
                    var T = s.createElement("div", { className: "fp-ui" }, '         <div class="fp-waiting">           {{ LOADING_SHARP_OUTLINE }}           {{ LOADING_SHARP_FILL }}           {{ LOADING_ROUNDED_FILL }}           {{ LOADING_ROUNDED_OUTLINE }}         </div>         <div class="fp-header">           <a class="fp-share fp-icon"></a>           <a class="fp-fullscreen fp-icon"></a>           <a class="fp-unload fp-icon"></a>         </div>         <p class="fp-speed-flash"></p>         <div class="fp-play fp-visible">           <a class="fp-icon fp-playbtn"></a>           {{ PLAY_ROUNDED_FILL }}           {{ PLAY_ROUNDED_OUTLINE }}           {{ PLAY_SHARP_FILL }}           {{ PLAY_SHARP_OUTLINE }}         </div>         <div class="fp-pause">           <a class="fp-icon fp-playbtn"></a>           {{ PAUSE_SHARP_OUTLINE }}           {{ PAUSE_SHARP_FILL }}           {{ PAUSE_ROUNDED_OUTLINE }}           {{ PAUSE_ROUNDED_FILL }}         </div>         <div class="fp-controls">            <a class="fp-icon fp-playbtn"></a>            <span class="fp-elapsed">00:00</span>            <div class="fp-timeline fp-bar">               <div class="fp-buffer"></div>               <span class="fp-timestamp"></span>               <div class="fp-progress fp-color"></div>            </div>            <span class="fp-duration"></span>            <span class="fp-remaining"></span>            <div class="fp-volume">               <a class="fp-icon fp-volumebtn"></a>               <div class="fp-volumebar fp-bar-slider">                 <em></em><em></em><em></em><em></em><em></em><em></em><em></em>               </div>            </div>            <strong class="fp-speed fp-hidden"></strong>         </div>'.replace("{{ PAUSE_ROUNDED_FILL }}", g).replace("{{ PAUSE_ROUNDED_OUTLINE }}", h).replace("{{ PAUSE_SHARP_FILL }}", m).replace("{{ PAUSE_SHARP_OUTLINE }}", v).replace("{{ PLAY_SHARP_OUTLINE }}", p).replace("{{ PLAY_SHARP_FILL }}", d).replace("{{ PLAY_ROUNDED_OUTLINE }}", c).replace("{{ PLAY_ROUNDED_FILL }}", f).replace("{{ LOADING_ROUNDED_OUTLINE }}", y).replace("{{ LOADING_ROUNDED_FILL }}", w).replace("{{ LOADING_SHARP_FILL }}", b).replace("{{ LOADING_SHARP_OUTLINE }}", I).replace(/url\(#/g, "url(" + window.location.href.replace(window.location.hash, "").replace(/\#$/g, "") + "#"));
                    t.appendChild(T);
                    var N = i("buffer"),
                        D = i("waiting"),
                        j = i("elapsed"),
                        L = i("ratio"),
                        k = i("speed-flash"),
                        P = i("duration"),
                        Z = i("remaining"),
                        O = i("timestamp"),
                        z = s.css(L, "padding-top"),
                        Y = i("play"),
                        R = i("pause"),
                        W = i("timeline"),
                        G = l(W, e.rtl),
                        H = i("fullscreen"),
                        U = i("volumebar"),
                        F = u(U, { rtl: e.rtl }),
                        B = s.hasClass(t, "no-toggle");
                    G.disableAnimation(s.hasClass(t, "is-touch")), e.sliders = e.sliders || {}, e.sliders.timeline = G, e.sliders.volume = F;
                    var J = [];
                    E.svg || s.html(D, "<p>loading &hellip;</p>"), A.ratio && x(A.ratio);
                    try { A.fullscreen || s.removeNode(H) } catch (e) { s.removeNode(H) }
                    e.on("dvrwindow", function() { G.disable(!1) }), e.on("ready", function(e, n, i) {
                        var o = n.video.duration;
                        G.disable(n.disabled || !o), A.adaptiveRatio && !isNaN(i.height / i.width) && x(i.height / i.width), s.html([P, Z], n.live ? "Live" : r(o)), s.toggleClass(t, "is-long", o >= 3600), F.slide(n.volumeLevel), "flash" === n.engine.engineName ? G.disableAnimation(!0, !0) : G.disableAnimation(!1), s.find(".fp-title", T).forEach(s.removeNode), i.title && s.prepend(T, s.createElement("div", { className: "fp-message fp-title" }, i.title)), s.toggleClass(t, "has-title", !!i.title) }).on("unload", function() { z || A.splash || s.css(L, "paddingTop", ""), G.slide(0), s.addClass(Y, "fp-visible") }).on("buffer", function() {
                        var t = e.video,
                            n = t.buffer / t.duration;!t.seekable && E.seekable && G.max(e.conf.live ? 1 / 0 : n), 1 > n ? s.css(N, "width", 100 * n + "%") : s.css(N, "width", "100%") }).on("speed", function(e, t, n) { t.video.time && (s.text(k, n + "x"), s.addClass(k, "fp-shown"), (J = J.filter(function(e) {
                            return clearTimeout(e), !1 })).push(setTimeout(function() { s.addClass(k, "fp-hilite"), J.push(setTimeout(function() { s.removeClass(k, "fp-hilite"), J.push(setTimeout(function() { s.removeClass(k, "fp-shown") }, 300)) }, 1e3)) }))) }).on("buffered", function() { s.css(N, "width", "100%"), G.max(1) }).on("progress seek", function(n, i, o) {
                        var a = e.video.duration,
                            l = e.video.seekOffset || 0,
                            u = ((o = o || e.video.time) - l) / (a - l);
                        G.dragging || G.slide(u, e.seeking ? 0 : 250), s.toggleClass(t, "is-live-position", a - o < A.livePositionOffset), s.html(j, r(o)), s.html(Z, r(a - o, !0)) }).on("finish resume seek", function(e) { s.toggleClass(t, "is-finished", "finish" == e.type) }).on("resume", function() { s.addClass(Y, "fp-visible"), setTimeout(function() { s.removeClass(Y, "fp-visible") }, 300) }).on("pause", function() { s.addClass(R, "fp-visible"), setTimeout(function() { s.removeClass(R, "fp-visible") }, 300) }).on("stop", function() { s.html(j, r(0)), G.slide(0, 100) }).on("finish", function() { s.html(j, r(e.video.duration)), G.slide(1, 100), s.removeClass(t, "is-seeking") }).on("beforeseek", function() {}).on("volume", function() { F.slide(e.volumeLevel) }).on("disable", function() {
                        var n = e.disabled;
                        G.disable(n), F.disable(n), s.toggleClass(t, "is-disabled", e.disabled) }).on("mute", function(e, n, i) { s.toggleClass(t, "is-muted", i) }).on("error", function(e, n, i) {
                        if (s.removeClass(t, "is-loading"), s.removeClass(t, "is-seeking"), s.addClass(t, "is-error"), i) { i.message = A.errors[i.code], n.error = !0;
                            var r = n.message((n.engine && n.engine.engineName || "html5") + ": " + i.message);
                            s.removeClass(t, "is-mouseover"), n.one("load progress", function() { r() }) } }), a.on(t, "mouseenter mouseleave", function(n) {
                        if (!B) {
                            var i, r = "mouseover" == n.type;
                            if (C(r), r) {
                                var o = function() { C(!0), i = new Date };
                                e.on("pause.x volume.x", o), a.on(t, "mousemove.x", o), M = setInterval(function() { new Date - i > A.mouseoutTimeout && (C(!1), i = new Date) }, 100) } else a.off(t, "mousemove.x"), e.off("pause.x volume.x"), clearInterval(M) } }), a.on(t, "mouseleave", function() {
                        (G.dragging || F.dragging) && (s.addClass(t, "is-mouseover"), s.removeClass(t, "is-mouseout")) }), a.on(t, "click.player", function(t) {
                        return e.disabled ? void 0 : s.hasClass(t.target, "fp-ui") || s.hasClass(t.target, "fp-engine") || t.flash || s.hasParent(t.target, ".fp-play,.fp-pause") ? (t.preventDefault && t.preventDefault(), e.toggle()) : void 0 }), a.on(t, "mousemove", ".fp-timeline", function(t) {
                        var n = (t.pageX || t.clientX) - s.offset(W).left,
                            i = n / s.width(W),
                            o = (e.rtl ? 1 - i : i) * e.video.duration;
                        if (!(0 > i)) { s.html(O, r(o));
                            var a = n - s.width(O) / 2;
                            0 > a && (a = 0), a > s.width(W) - s.width(O) && (a = !1), !1 !== a ? s.css(O, { left: a + "px", right: "auto" }) : s.css(O, { left: "auto", right: "0px" }) } }), a.on(t, "contextmenu", function(n) {
                        var i = window;
                        if (!s.hasClass(t, "is-flash-disabled")) {
                            var r = s.find(".fp-context-menu", t)[0];
                            r && (n.preventDefault(), e.showMenu(r, { left: n.clientX - i.scrollX, top: n.clientY - i.scrollY }), a.on(t, "click", ".fp-context-menu", function(e) { e.stopPropagation() })) } }), e.on("flashdisabled", function(n, i, r) { s.addClass(t, "is-flash-disabled");
                        var o;!1 !== r && (o = e.message("Seems something is blocking Adobe Flash from running")), e.one("ready progress", function() { s.removeClass(t, "is-flash-disabled"), o && o() }) }), A.poster && s.css(t, "background-image", "url(" + A.poster + ")");
                    var V = s.css(t, "background-color"),
                        _ = "none" != s.css(t, "background-image") || V && "rgba(0, 0, 0, 0)" != V && "transparent" != V;
                    if (_ && !A.splash) { A.poster || (A.poster = !0);
                        var X = function() { s.addClass(t, "is-poster"), s.addClass(Y, "fp-visible"), e.poster = !0, e.one(A.autoplay ? "progress seek" : "resume seek", function() { s.removeClass(t, "is-poster"), s.removeClass(Y, "fp-visible"), e.poster = !1 }) };
                        e.on("stop", function() { X() }), e.on("ready", function(e, t, n) { n.index || n.autoplay || X() }) } "string" == typeof A.splash && s.css(t, "background-image", "url('" + A.splash + "')"), !_ && e.forcedSplash && s.css(t, "background-color", "#555"), a.on(t, "click", ".fp-toggle, .fp-play, .fp-playbtn", function() { e.disabled || e.toggle() }), a.on(t, "click", ".fp-volumebtn", function() { e.mute() }), a.on(t, "click", ".fp-fullscreen", function() { e.fullscreen() }), a.on(t, "click", ".fp-unload", function() { e.unload() }), a.on(W, "slide", function(t) { e.seeking = !0, e.seekTo(10 * t) }), a.on(U, "slide", function(t) { e.volume(t) }), a.on(t, "click", ".fp-duration,.fp-remaining", function() {
                        return e.dvr ? e.seekTo(10) : void s.toggleClass(t, "is-inverted") }), C(B), e.on("shutdown", function() { a.off(W), a.off(U) }) }), t.exports.format = r }).call(this, e("buffer").Buffer) }, { "../common": 1, "../flowplayer": 28, "./ui/bar-slider": 25, "./ui/slider": 26, bean: 31, buffer: 32 }], 25: [function(e, t, n) {
            function i(e, t) {
                function n(t) {
                    var n = t.pageX || t.clientX,
                        i = o.offset(e),
                        r = o.width(e);!n && t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length && (n = t.originalEvent.touches[0].pageX);
                    var s = n - i.left,
                        a = (s = Math.max(0, Math.min(r, s))) / r;
                    return l && (a = 1 - a), a }
                var i = (t = t || {}).activeClass || "fp-color",
                    s = t.inactiveClass || "fp-grey",
                    a = t.childSelector || "em",
                    l = !!t.rtl,
                    u = !1,
                    c = o.find(a, e).length,
                    f = { unload: function() { r.off(e, ".barslider") }, slide: function(t, n) { o.find(a, e).forEach(function(e, n) {
                                var r = t > n / c;
                                o.toggleClass(e, i, r), o.toggleClass(e, s, !r) }), n && r.fire(e, "slide", [t]) }, disable: function(e) { u = e } };
                return r.on(e, "mousedown.sld touchstart.sld", function(t) { t.preventDefault(), u || (f.slide(n(t), !0), r.on(e, "mousemove.sld touchmove.sld", function(e) { e.preventDefault(), f.slide(n(e), !0) }), r.one(document, "mouseup.sld touchup.sld", function() { r.off(e, "mousemove.sld touchmove.sld") })) }), f }
            var r = e("bean"),
                o = e("../../common");
            t.exports = i }, { "../../common": 1, bean: 31 }], 26: [function(e, t, n) { "use strict";
            var i = e("bean"),
                r = e("../../common"),
                o = function(e, t) {
                    var n;
                    return function() { n || (e.apply(this, arguments), n = 1, setTimeout(function() { n = 0 }, t)) } },
                s = function(e, t) {
                    var n, s, a, l, u, c, f, d = r.lastChild(e),
                        p = !1,
                        h = function() { s = r.offset(e), a = r.width(e), l = r.height(e), u = a, f = y(c) },
                        g = function(t) { n || t == w.value || c && !(c > t) || (i.fire(e, "slide", [t]), w.value = t) },
                        m = function(e) {
                            var n = e.pageX || e.clientX;!n && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageX);
                            var i = n - s.left,
                                r = (i = Math.max(0, Math.min(f || u, i))) / u;
                            return t && (r = 1 - r), v(r, 0, !0) },
                        v = function(e, t) { void 0 === t && (t = 0), e > 1 && (e = 1);
                            var n = Math.round(1e3 * e) / 10 + "%";
                            return (!c || c >= e) && (p ? r.removeClass(d, "animated") : (r.addClass(d, "animated"), r.css(d, "transition-duration", (t || 0) + "ms")), r.css(d, "width", n)), e },
                        y = function(e) {
                            return Math.max(0, Math.min(u, e * a)) },
                        w = { max: function(e) { c = e }, disable: function(e) { n = e }, slide: function(e, t, n) { h(), n && g(e), v(e, t) }, disableAnimation: function(t, n) { p = !1 !== t, r.toggleClass(e, "no-animation", !!n) } };
                    return h(), i.on(e, "mousedown.sld touchstart", function(t) {
                        if (t.preventDefault(), !n) {
                            var s = o(g, 100);
                            h(), w.dragging = !0, r.addClass(e, "is-dragging"), g(m(t)), i.on(document, "mousemove.sld touchmove.sld", function(e) { e.preventDefault(), s(m(e)) }), i.one(document, "mouseup touchend", function() { w.dragging = !1, r.removeClass(e, "is-dragging"), i.off(document, "mousemove.sld touchmove.sld") }) } }), w };
            t.exports = s }, { "../../common": 1, bean: 31 }], 27: [function(e, t, n) {
            function i(e) {
                var t = document.createElement("textarea");
                t.value = e, t.style.opacity = 0, t.style.position = "absolute", document.body.appendChild(t), t.select();
                var n = document.execCommand("copy");
                if (document.body.removeChild(t), !n) throw new Error("Unsuccessfull") }
            t.exports = function(e, t, n) {
                try { i(e), t() } catch (e) { n(e) } } }, {}], 28: [function(e, t, n) { "use strict";

            function i(e, t, n) { t && t.embed && (t.embed = r({}, y.defaults.embed, t.embed));
                var i, a, l = e,
                    p = r({}, y.defaults, y.conf, t),
                    g = {},
                    m = new b;
                u.addClass(l, "is-loading"), u.toggleClass(l, "no-flex", !y.support.flex), u.toggleClass(l, "no-svg", !y.support.svg);
                try { g = h ? window.localStorage : g } catch (e) {}
                if (p.aspectRatio && "string" == typeof p.aspectRatio) {
                    var v = p.aspectRatio.split(/[:\/]/);
                    p.ratio = v[1] / v[0] }
                var I = l.currentStyle && "rtl" === l.currentStyle.direction || window.getComputedStyle && null !== window.getComputedStyle(l, null) && "rtl" === window.getComputedStyle(l, null).getPropertyValue("direction");
                I && u.addClass(l, "is-rtl");
                var x = { conf: p, currentSpeed: 1, volumeLevel: p.muted ? 0 : void 0 === p.volume ? 1 * g.volume : p.volume, video: {}, disabled: !1, finished: !1, loading: !1, muted: "true" == g.muted || p.muted, paused: !1, playing: !1, ready: !1, splash: !1, rtl: I, hijack: function(e) {
                        try { x.engine.suspendEngine() } catch (e) {}
                        x.hijacked = e }, release: function() {
                        try { x.engine.resumeEngine() } catch (e) {}
                        x.hijacked = !1 }, load: function(e, t) {
                        if (!x.error && !x.loading) { x.video = {}, x.finished = !1, e = e || p.clip, e = r({}, m.resolve(e, p.clip.sources)), (x.playing || x.engine) && (e.autoplay = !0);
                            var n = C(e);
                            if (!n) return setTimeout(function() { x.trigger("error", [x, { code: y.support.flashVideo ? 5 : 10 }]) }) && x;
                            if (!n.engineName) throw new Error("engineName property of factory should be exposed");
                            return x.engine && n.engineName === x.engine.engineName || (x.ready = !1, x.engine && (x.engine.unload(), x.conf.autoplay = !0), a = x.engine = n(x, l), x.one("ready", function() { setTimeout(function() { x.muted ? x.mute(!0, !0) : a.volume(x.volumeLevel) }) })), r(e, a.pick(e.sources.filter(function(e) {
                                return !e.engine || e.engine === a.engineName }))), e.src && (x.trigger("load", [x, e, a], !0).defaultPrevented ? x.loading = !1 : (a.load(e), o(e) && (t = e), t && x.one("ready", t))), x } }, pause: function(e) {
                        return x.hijacked ? x.hijacked.pause(e) | x : (!x.ready || x.seeking || x.loading || (a.pause(), x.one("pause", e)), x) }, resume: function() {
                        if (!x.trigger("beforeresume", [x], !0).defaultPrevented) return x.hijacked ? x.hijacked.resume() | x : (x.ready && x.paused && (a.resume(), x.finished && (x.trigger("resume", [x]), x.finished = !1)), x) }, toggle: function() {
                        return x.ready ? x.paused ? x.resume() : x.pause() : x.load() }, seek: function(e, t) {
                        if ("boolean" == typeof e) {
                            var n = .1 * x.video.duration;
                            e = x.video.time + (e ? n : -n), e = Math.min(Math.max(e, 0), x.video.duration - .1) }
                        return x.hijacked ? x.hijacked.seek(e, t) | x : (x.ready && (i = e, x.trigger("beforeseek", [x, e], !0).defaultPrevented ? (x.seeking = !1, u.toggleClass(l, "is-seeking", x.seeking)) : (a.seek(e), o(t) && x.one("seek", t))), x) }, seekTo: function(e, t) {
                        return void 0 === e ? x.seek(i, t) : void 0 !== x.video.seekOffset ? x.seek(x.video.seekOffset + .1 * (x.video.duration - x.video.seekOffset) * e, t) : x.seek(.1 * x.video.duration * e, t) }, mute: function(e, t) {
                        return void 0 === e && (e = !x.muted), t || (g.muted = x.muted = e, g.volume = isNaN(g.volume) ? p.volume : g.volume), x.volume(e ? 0 : g.volume, !0), x.trigger("mute", [x, e]), x }, volume: function(e, t) {
                        return x.ready && (e = Math.min(Math.max(e, 0), 1), t || (g.volume = e), a.volume(e)), x }, speed: function(e, t) {
                        return x.ready && ("boolean" == typeof e && (e = p.speeds[p.speeds.indexOf(x.currentSpeed) + (e ? 1 : -1)] || x.currentSpeed), a.speed(e), t && l.one("speed", t)), x }, stop: function() {
                        return x.ready && (x.pause(), x.seek(0, function() { x.trigger("stop", [x]) })), x }, unload: function() {
                        return p.splash ? (x.trigger("unload", [x]), a && (a.unload(), x.engine = a = 0)) : x.stop(), x }, shutdown: function() { x.unload(), x.trigger("shutdown", [x]), s.off(l), delete f[l.getAttribute("data-flowplayer-instance-id")], l.removeAttribute("data-flowplayer-instance-id") }, disable: function(e) {
                        return void 0 === e && (e = !x.disabled), e != x.disabled && (x.disabled = e, x.trigger("disable", e)), x }, registerExtension: function(e, t) { e = e || [], t = t || [], "string" == typeof e && (e = [e]), "string" == typeof t && (t = [t]), e.forEach(function(e) { x.extensions.js.push(e) }), t.forEach(function(e) { x.extensions.css.push(e) }) } };
                x.conf = r(x.conf, p), x.extensions = { js: [], css: [] }, y.extensions.forEach(function(e) { x.registerExtension(e[0], e[1]) }), c(x);
                var C = function(e) {
                    var t, n = y.engines;
                    if (p.engine) {
                        var i = n.filter(function(e) {
                            return e.engineName === p.engine })[0];
                        if (i && e.sources.some(function(e) {
                                return (!e.engine || e.engine === i.engineName) && i.canPlay(e.type, x.conf) })) return i }
                    return p.enginePreference && (n = y.engines.filter(function(e) {
                        return p.enginePreference.indexOf(e.engineName) > -1 }).sort(function(e, t) {
                        return p.enginePreference.indexOf(e.engineName) - p.enginePreference.indexOf(t.engineName) })), e.sources.some(function(e) {
                        var i = n.filter(function(t) {
                            return (!e.engine || e.engine === t.engineName) && t.canPlay(e.type, x.conf) }).shift();
                        return i && (t = i), !!i }), t };
                return l.getAttribute("data-flowplayer-instance-id") || (l.setAttribute("data-flowplayer-instance-id", w++), x.on("boot", function() {
                    (p.splash || u.hasClass(l, "is-splash") || !y.support.firstframe) && (x.forcedSplash = !p.splash && !u.hasClass(l, "is-splash"), x.splash = p.autoplay = !0, p.splash || (p.splash = !0), u.addClass(l, "is-splash")), p.splash && u.find("video", l).forEach(u.removeNode), (p.dvr || p.live || u.hasClass(l, "is-live")) && (x.live = p.live = !0, x.dvr = p.dvr = !!p.dvr || u.hasClass(l, "is-dvr"), u.addClass(l, "is-live"), u.toggleClass(l, "is-dvr", x.dvr)), d.forEach(function(e) { e(x, l) }), f.push(x), p.splash ? x.unload() : x.load(), p.disabled && x.disable(), x.one("ready", n) }).on("load", function(e, t, n) { p.splash && u.find(".flowplayer.is-ready,.flowplayer.is-loading").forEach(function(e) {
                        var t = e.getAttribute("data-flowplayer-instance-id");
                        if (t !== l.getAttribute("data-flowplayer-instance-id")) {
                            var n = f[Number(t)];
                            n && n.conf.splash && n.unload() } }), u.addClass(l, "is-loading"), t.loading = !0, (void 0 !== n.live || void 0 !== n.dvr) && (u.toggleClass(l, "is-live", n.dvr || n.live), u.toggleClass(l, "is-dvr", !!n.dvr), t.live = n.dvr || n.live, t.dvr = !!n.dvr) }).on("ready", function(e, t, n) { n.time = 0, t.video = n, u.removeClass(l, "is-loading"), t.loading = !1, t.muted ? t.mute(!0, !0) : t.volume(t.volumeLevel);
                    var i = t.conf.hlsFix && /mpegurl/i.exec(n.type);
                    u.toggleClass(l, "hls-fix", !!i) }).on("unload", function() { u.removeClass(l, "is-loading"), x.loading = !1 }).on("ready unload", function(e) {
                    var t = "ready" == e.type;
                    u.toggleClass(l, "is-splash", !t), u.toggleClass(l, "is-ready", t), x.ready = t, x.splash = !t }).on("progress", function(e, t, n) { t.video.time = n }).on("buffer", function(e, t, n) { t.video.buffer = n }).on("speed", function(e, t, n) { t.currentSpeed = n }).on("volume", function(e, t, n) { t.volumeLevel = Math.round(100 * n) / 100, t.muted ? n && t.mute(!1) : g.volume = n }).on("beforeseek seek", function(e) { x.seeking = "beforeseek" == e.type, u.toggleClass(l, "is-seeking", x.seeking) }).on("ready pause resume unload finish stop", function(e) { x.paused = /pause|finish|unload|stop/.test(e.type), x.paused = x.paused || "ready" === e.type && !p.autoplay && !x.playing, x.playing = !x.paused, u.toggleClass(l, "is-paused", x.paused), u.toggleClass(l, "is-playing", x.playing), x.load.ed || x.pause() }).on("finish", function() { x.finished = !0 }).on("error", function() {})), x.trigger("boot", [x, l]), x }
            var r = e("extend-object"),
                o = e("is-function"),
                s = e("bean"),
                a = e("./ext/ui/slider"),
                l = e("./ext/ui/bar-slider"),
                u = e("./common"),
                c = e("./ext/events"),
                f = [],
                d = [],
                p = window.onbeforeunload;
            window.onbeforeunload = function(e) {
                return f.forEach(function(e) { e.conf.splash ? e.unload() : e.bind("error", function() { u.find(".flowplayer.is-error .fp-message").forEach(u.removeNode) }) }), p ? p(e) : void 0 };
            var h = !1;
            try { "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", h = !0) } catch (e) {}
            var g = /Safari/.exec(navigator.userAgent) && !/Chrome/.exec(navigator.userAgent),
                m = /(\d+\.\d+) Safari/.exec(navigator.userAgent),
                v = m ? Number(m[1]) : 100,
                y = t.exports = function(e, t, n) {
                    if (o(e)) return d.push(e);
                    if ("number" == typeof e || void 0 === e) return f[e || 0];
                    if (e.nodeType) {
                        if (null !== e.getAttribute("data-flowplayer-instance-id")) return f[e.getAttribute("data-flowplayer-instance-id")];
                        if (!t) return;
                        return i(e, t, n) }
                    if (e.jquery) return y(e[0], t, n);
                    if ("string" == typeof e) {
                        var r = u.find(e)[0];
                        return r && y(r, t, n) } };
            r(y, { version: "7.0.2", engines: [], extensions: [], conf: {}, set: function(e, t) { "string" == typeof e ? y.conf[e] = t : r(y.conf, e) }, registerExtension: function(e, t) { y.extensions.push([e, t]) }, support: {}, defaults: { debug: !!h && !!localStorage.flowplayerDebug, disabled: !1, fullscreen: window == window.top, keyboard: !0, ratio: 9 / 16, adaptiveRatio: !1, rtmp: 0, proxy: "best", hlsQualities: !0, splash: !1, live: !1, livePositionOffset: 120, swf: "//releases.flowplayer.org/7.0.2/flowplayer.swf", swfHls: "//releases.flowplayer.org/7.0.2/flowplayerhls.swf", speeds: [.25, .5, 1, 1.5, 2], tooltip: !0, mouseoutTimeout: 5e3, volume: h ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1, errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."], errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"], playlist: [], hlsFix: g && 8 > v }, bean: s, common: u, slider: a, barSlider: l, extend: r });
            var w = 0,
                b = e("./ext/resolve");
            if (void 0 !== window.jQuery) {
                var I = window.jQuery;
                I(function() { "function" == typeof I.fn.flowplayer && I('.flowplayer:has(video,script[type="application/json"])').flowplayer() });
                var x = function(e) {
                    if (!e.length) return {};
                    var t = e.data() || {},
                        n = {};
                    return I.each(["autoplay", "loop", "preload", "poster"], function(i, r) {
                        var o = e.attr(r);
                        void 0 !== o && -1 !== ["autoplay", "poster"].indexOf(r) ? n[r] = o || !0 : void 0 !== o && (t[r] = o || !0) }), t.subtitles = e.find("track").map(function() {
                        var e = I(this);
                        return { src: e.attr("src"), kind: e.attr("kind"), label: e.attr("label"), srclang: e.attr("srclang"), default: e.prop("default") } }).get(), t.sources = (new b).sourcesFromVideoTag(e, I), r(n, { clip: t }) };
                I.fn.flowplayer = function(e, t) {
                    return this.each(function() { "string" == typeof e && (e = { swf: e }), o(e) && (t = e, e = {});
                        var n = I(this),
                            r = n.find('script[type="application/json"]'),
                            s = r.length ? JSON.parse(r.text()) : x(n.find("video")),
                            a = i(this, I.extend({}, e || {}, s, n.data()), t);
                        c.EVENTS.forEach(function(e) { a.on(e + ".jquery", function(e) { n.trigger.call(n, e.type, e.detail && e.detail.args) }) }), n.data("flowplayer", a) }) } } }, { "./common": 1, "./ext/events": 10, "./ext/resolve": 19, "./ext/ui/bar-slider": 25, "./ext/ui/slider": 26, bean: 31, "extend-object": 36, "is-function": 39 }], 29: [function(e, t, n) { e("es5-shim");
            var i = t.exports = e("./flowplayer");
            e("./ext/support"), e("./engine/embed"), e("./engine/html5"), e("./engine/flash"), e("./ext/ui"), e("./ext/message"), e("./ext/keyboard"), e("./ext/playlist"), e("./ext/cuepoint"), e("./ext/subtitle"), e("./ext/analytics"), e("./ext/share"), e("./ext/facebook"), e("./ext/twitter"), e("./ext/embed"), e("./ext/airplay"), e("./ext/chromecast"), e("./ext/qsel"), e("./ext/menu"), e("./ext/fullscreen"), e("./ext/mobile"), i(function(e, t) {
                var n = function(e) {
                        return "none" !== window.getComputedStyle(e).display },
                    r = e.conf,
                    o = i.common,
                    s = o.createElement,
                    a = r.swf.indexOf("flowplayer.org") && r.e && t.getAttribute("data-origin"),
                    l = a ? function(e) {
                        var t = document.createElement("a");
                        return t.href = e, o.hostname(t.hostname) }(a) : o.hostname(),
                    u = (document, r.key);
                if ("file:" == location.protocol && (l = "localhost"), e.load.ed = 1, r.hostname = l, r.origin = a || location.href, a && function(e, t) {-1 === e.className.split(" ").indexOf(t) && (e.className += " " + t) }(t, "is-embedded"), "string" == typeof u && (u = u.split(/,\s*/)), u && "function" == typeof key_check && key_check(u, l)) {
                    if (r.logo) {
                        var c = o.find(".fp-player", t)[0],
                            f = s("a", { className: "fp-logo" });
                        a && (f.href = a), r.embed && r.embed.popup && (f.target = "_blank");
                        var d = s("img", { src: r.logo });
                        f.appendChild(d), (c || t).appendChild(f) } } else { f = s("a", { href: "https://flowplayer.org/hello" });
                    t.appendChild(f);
                    var p = s("div", { className: "fp-context-menu fp-menu" }, '<strong>&copy; 2017 Flowplayer</strong><a href="https://flowplayer.org/hello">About Flowplayer</a><a href="https://flowplayer.org/license">GPL based license</a>'),
                        h = window.location.href.indexOf("localhost"),
                        c = o.find(".fp-player", t)[0];
                    7 !== h && (c || t).appendChild(p), e.on("pause resume finish unload ready", function(e, i) {
                        var r = -1;
                        if (i.video.src)
                            for (var o = [
                                    ["org", "flowplayer", "drive"],
                                    ["org", "flowplayer", "my"],
                                    ["org", "flowplayer", "cdn"]
                                ], s = 0; s < o.length && -1 === (r = i.video.src.indexOf("://" + o[s].reverse().join("."))); s++);
                        if (/pause|resume/.test(e.type) && "flash" != i.engine.engineName && 4 != r && 5 != r) {
                            var a = { display: "block", position: "absolute", left: "16px", bottom: "70px", zIndex: 99999, width: "100px", height: "20px", backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")" };
                            for (var l in a) a.hasOwnProperty(l) && (f.style[l] = a[l]);
                            i.load.ed = n(f) && (7 === h || p.parentNode == t || p.parentNode == c), i.load.ed || i.pause() } else f.style.display = "none" }) } }) }, { "./engine/embed": 2, "./engine/flash": 3, "./engine/html5": 4, "./ext/airplay": 5, "./ext/analytics": 6, "./ext/chromecast": 7, "./ext/cuepoint": 8, "./ext/embed": 9, "./ext/facebook": 11, "./ext/fullscreen": 12, "./ext/keyboard": 13, "./ext/menu": 14, "./ext/message": 15, "./ext/mobile": 16, "./ext/playlist": 17, "./ext/qsel": 18, "./ext/share": 20, "./ext/subtitle": 21, "./ext/support": 22, "./ext/twitter": 23, "./ext/ui": 24, "./flowplayer": 28, "es5-shim": 35 }], 30: [function(e, t, n) { "use strict";

            function i(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0 }

            function r(e) {
                return 3 * e.length / 4 - i(e) }

            function o(e) {
                var t, n, r, o, s, a, l = e.length;
                s = i(e), a = new f(3 * l / 4 - s), r = s > 0 ? l - 4 : l;
                var u = 0;
                for (t = 0, n = 0; r > t; t += 4, n += 3) o = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], a[u++] = o >> 16 & 255, a[u++] = o >> 8 & 255, a[u++] = 255 & o;
                return 2 === s ? (o = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & o) : 1 === s && (o = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, a[u++] = o >> 8 & 255, a[u++] = 255 & o), a }

            function s(e) {
                return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e] }

            function a(e, t, n) {
                for (var i, r = [], o = t; n > o; o += 3) i = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], r.push(s(i));
                return r.join("") }

            function l(e) {
                for (var t, n = e.length, i = n % 3, r = "", o = [], s = 16383, l = 0, c = n - i; c > l; l += s) o.push(a(e, l, l + s > c ? c : l + s));
                return 1 === i ? (t = e[n - 1], r += u[t >> 2], r += u[t << 4 & 63], r += "==") : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], r += u[t >> 10], r += u[t >> 4 & 63], r += u[t << 2 & 63], r += "="), o.push(r), o.join("") }
            n.byteLength = r, n.toByteArray = o, n.fromByteArray = l;
            for (var u = [], c = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, h = d.length; h > p; ++p) u[p] = d[p], c[d.charCodeAt(p)] = p;
            c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63 }, {}], 31: [function(e, t, n) {! function(e, n, i) { void 0 !== t && t.exports ? t.exports = i() : n.bean = i() }(0, this, function(e, t) { e = e || "bean", t = t || this;
                var n, i = window,
                    r = t[e],
                    o = /[^\.]*(?=\..*)\.|.*/,
                    s = /\..*/,
                    a = "addEventListener",
                    l = document || {},
                    u = l.documentElement || {},
                    c = u[a],
                    f = c ? a : "attachEvent",
                    d = {},
                    p = Array.prototype.slice,
                    h = function(e, t) {
                        return e.split(t || " ") },
                    g = function(e) {
                        return "string" == typeof e },
                    m = function(e) {
                        return "function" == typeof e },
                    v = function(e, t, n) {
                        for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                        return e }({}, h("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll " + (c ? "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete " : ""))),
                    y = function() {
                        var e = "compareDocumentPosition" in u ? function(e, t) {
                                return t.compareDocumentPosition && 16 == (16 & t.compareDocumentPosition(e)) } : "contains" in u ? function(e, t) {
                                return (t = 9 === t.nodeType || t === window ? u : t) !== e && t.contains(e) } : function(e, t) {
                                for (; e = e.parentNode;)
                                    if (e === t) return 1;
                                return 0 },
                            t = function(t) {
                                var n = t.relatedTarget;
                                return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n };
                        return { mouseenter: { base: "mouseover", condition: t }, mouseleave: { base: "mouseout", condition: t }, mousewheel: { base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel" } } }(),
                    w = function() {
                        var e = h("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                            t = e.concat(h("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                            n = t.concat(h("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                            r = e.concat(h("char charCode key keyCode keyIdentifier keyLocation location")),
                            o = e.concat(h("data")),
                            s = e.concat(h("touches targetTouches changedTouches scale rotation")),
                            a = e.concat(h("data origin source")),
                            c = e.concat(h("state")),
                            f = /over|out/,
                            d = [{ reg: /key/i, fix: function(e, t) {
                                    return t.keyCode = e.keyCode || e.which, r } }, { reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i, fix: function(e, n, i) {
                                    return n.rightClick = 3 === e.which || 2 === e.button, n.pos = { x: 0, y: 0 }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + l.body.scrollLeft + u.scrollLeft, n.clientY = e.clientY + l.body.scrollTop + u.scrollTop), f.test(i) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == i ? "from" : "to") + "Element"]), t } }, { reg: /mouse.*(wheel|scroll)/i, fix: function() {
                                    return n } }, { reg: /^text/i, fix: function() {
                                    return o } }, { reg: /^touch|^gesture/i, fix: function() {
                                    return s } }, { reg: /^message$/i, fix: function() {
                                    return a } }, { reg: /^popstate$/i, fix: function() {
                                    return c } }, { reg: /.*/, fix: function() {
                                    return e } }],
                            p = {},
                            g = function(e, t, n) {
                                if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || i).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                                    var r, o, s, a, l, u = e.type,
                                        c = e.target || e.srcElement;
                                    if (this.target = c && 3 === c.nodeType ? c.parentNode : c, n) {
                                        if (!(l = p[u]))
                                            for (r = 0, o = d.length; o > r; r++)
                                                if (d[r].reg.test(u)) { p[u] = l = d[r].fix;
                                                    break }
                                        for (r = (a = l(e, this, u)).length; r--;) !((s = a[r]) in this) && s in e && (this[s] = e[s]) } } };
                        return g.prototype.preventDefault = function() { this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1 }, g.prototype.stopPropagation = function() { this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0 }, g.prototype.stop = function() { this.preventDefault(), this.stopPropagation(), this.stopped = !0 }, g.prototype.stopImmediatePropagation = function() { this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                                return !0 } }, g.prototype.isImmediatePropagationStopped = function() {
                            return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped() }, g.prototype.clone = function(e) {
                            var t = new g(this, this.element, this.isNative);
                            return t.currentTarget = e, t }, g }(),
                    b = function(e, t) {
                        return c || t || e !== l && e !== i ? e : u },
                    I = function() {
                        var e = function(e, t, n, i) {
                                var r = function(n, r) {
                                        return t.apply(e, i ? p.call(r, n ? 0 : 1).concat(i) : r) },
                                    o = function(n, i) {
                                        return t.__beanDel ? t.__beanDel.ft(n.target, e) : i },
                                    s = n ? function(e) {
                                        var t = o(e, this);
                                        return n.apply(t, arguments) ? (e && (e.currentTarget = t), r(e, arguments)) : void 0 } : function(e) {
                                        return t.__beanDel && (e = e.clone(o(e))), r(e, arguments) };
                                return s.__beanDel = t.__beanDel, s },
                            t = function(t, n, i, r, o, s, a) {
                                var l, u = y[n]; "unload" == n && (i = A(E, t, n, i, r)), u && (u.condition && (i = e(t, i, u.condition, s)), n = u.base || n), this.isNative = l = v[n] && !!t[f], this.customType = !c && !l && n, this.element = t, this.type = n, this.original = r, this.namespaces = o, this.eventType = c || l ? n : "propertychange", this.target = b(t, l), this[f] = !!this.target[f], this.root = a, this.handler = e(t, i, null, s) };
                        return t.prototype.inNamespaces = function(e) {
                            var t, n, i = 0;
                            if (!e) return !0;
                            if (!this.namespaces) return !1;
                            for (t = e.length; t--;)
                                for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && i++;
                            return e.length === i }, t.prototype.matches = function(e, t, n) {
                            return !(this.element !== e || t && this.original !== t || n && this.handler !== n) }, t }(),
                    x = function() {
                        var e = {},
                            t = function(n, i, r, o, s, a) {
                                var l = s ? "r" : "$";
                                if (i && "*" != i) {
                                    var u, c = 0,
                                        f = e[l + i],
                                        d = "*" == n;
                                    if (!f) return;
                                    for (u = f.length; u > c; c++)
                                        if ((d || f[c].matches(n, r, o)) && !a(f[c], f, c, i)) return } else
                                    for (var p in e) p.charAt(0) == l && t(n, p.substr(1), r, o, s, a) },
                            n = function(t, n, i, r) {
                                var o, s = e[(r ? "r" : "$") + n];
                                if (s)
                                    for (o = s.length; o--;)
                                        if (!s[o].root && s[o].matches(t, i, null)) return !0;
                                return !1 },
                            i = function() {
                                var t, n = [];
                                for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                                return n };
                        return { has: n, get: function(e, n, i, r) {
                                var o = [];
                                return t(e, n, i, null, r, function(e) {
                                    return o.push(e) }), o }, put: function(t) {
                                var n = !t.root && !this.has(t.element, t.type, null, !1),
                                    i = (t.root ? "r" : "$") + t.type;
                                return (e[i] || (e[i] = [])).push(t), n }, del: function(n) { t(n.element, n.type, null, n.handler, n.root, function(t, n, i) {
                                    return n.splice(i, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1 }) }, entries: i } }(),
                    C = function(e) { n = arguments.length ? e : l.querySelectorAll ? function(e, t) {
                            return t.querySelectorAll(e) } : function() {
                            throw new Error("Bean: No selector engine installed") } },
                    S = function(e, t) {
                        if (c || !t || !e || e.propertyName == "_on" + t) {
                            var n = x.get(this, t || e.type, null, !1),
                                i = n.length,
                                r = 0;
                            for (e = new w(e, this, !0), t && (e.type = t); i > r && !e.isImmediatePropagationStopped(); r++) n[r].removed || n[r].handler.call(this, e) } },
                    M = c ? function(e, t, n) { e[n ? a : "removeEventListener"](t, S, !1) } : function(e, t, n, i) {
                        var r;
                        n ? (x.put(r = new I(e, i || t, function(t) { S.call(e, t, i) }, S, null, null, !0)), i && null == e["_on" + i] && (e["_on" + i] = 0), r.target.attachEvent("on" + r.eventType, r.handler)) : (r = x.get(e, i || t, S, !0)[0]) && (r.target.detachEvent("on" + r.eventType, r.handler), x.del(r)) },
                    A = function(e, t, n, i, r) {
                        return function() { i.apply(this, arguments), e(t, n, r) } },
                    E = function(e, t, n, i) {
                        var r, o, a = t && t.replace(s, ""),
                            l = x.get(e, a, null, !1),
                            u = {};
                        for (r = 0, o = l.length; o > r; r++) n && l[r].original !== n || !l[r].inNamespaces(i) || (x.del(l[r]), !u[l[r].eventType] && l[r][f] && (u[l[r].eventType] = { t: l[r].eventType, c: l[r].type }));
                        for (r in u) x.has(e, u[r].t, null, !1) || M(e, u[r].t, !1, u[r].c) },
                    T = function(e, t) {
                        var i = function(t, i) {
                                for (var r, o = g(e) ? n(e, i) : e; t && t !== i; t = t.parentNode)
                                    for (r = o.length; r--;)
                                        if (o[r] === t) return t },
                            r = function(e) {
                                var n = i(e.target, this);
                                n && t.apply(n, arguments) };
                        return r.__beanDel = { ft: i, selector: e }, r },
                    N = c ? function(e, t, n) {
                        var r = l.createEvent(e ? "HTMLEvents" : "UIEvents");
                        r[e ? "initEvent" : "initUIEvent"](t, !0, !0, i, 1), n.dispatchEvent(r) } : function(e, t, n) { n = b(n, e), e ? n.fireEvent("on" + t, l.createEventObject()) : n["_on" + t]++ },
                    D = function(e, t, n) {
                        var i, r, a, l, u = g(t);
                        if (u && t.indexOf(" ") > 0) {
                            for (l = (t = h(t)).length; l--;) D(e, t[l], n);
                            return e }
                        if ((r = u && t.replace(s, "")) && y[r] && (r = y[r].base), !t || u)(a = u && t.replace(o, "")) && (a = h(a, ".")), E(e, r, n, a);
                        else if (m(t)) E(e, null, t);
                        else
                            for (i in t) t.hasOwnProperty(i) && D(e, i, t[i]);
                        return e },
                    j = function(e, t, n, i) {
                        var r, a, l, u, c, g, v;
                        if (void 0 !== n || "object" != typeof t) {
                            for (m(n) ? (c = p.call(arguments, 3), i = r = n) : (r = i, c = p.call(arguments, 4), i = T(n, r)), l = h(t), this === d && (i = A(D, e, t, i, r)), u = l.length; u--;) v = x.put(g = new I(e, l[u].replace(s, ""), i, r, h(l[u].replace(o, ""), "."), c, !1)), g[f] && v && M(e, g.eventType, !0, g.customType);
                            return e }
                        for (a in t) t.hasOwnProperty(a) && j.call(this, e, a, t[a]) },
                    L = { on: j, add: function(e, t, n, i) {
                            return j.apply(null, g(n) ? [e, n, t, i].concat(arguments.length > 3 ? p.call(arguments, 5) : []) : p.call(arguments)) }, one: function() {
                            return j.apply(d, arguments) }, off: D, remove: D, clone: function(e, t, n) {
                            for (var i, r, o = x.get(t, n, null, !1), s = o.length, a = 0; s > a; a++) o[a].original && (i = [e, o[a].type], (r = o[a].handler.__beanDel) && i.push(r.selector), i.push(o[a].original), j.apply(null, i));
                            return e }, fire: function(e, t, n) {
                            var i, r, a, l, u, c = h(t);
                            for (i = c.length; i--;)
                                if (t = c[i].replace(s, ""), (l = c[i].replace(o, "")) && (l = h(l, ".")), l || n || !e[f])
                                    for (u = x.get(e, t, null, !1), n = [!1].concat(n), r = 0, a = u.length; a > r; r++) u[r].inNamespaces(l) && u[r].handler.apply(e, n);
                                else N(v[t], t, e);
                            return e }, Event: w, setSelectorEngine: C, noConflict: function() {
                            return t[e] = r, this } };
                if (i.attachEvent) {
                    var k = function() {
                        var e, t = x.entries();
                        for (e in t) t[e].type && "unload" !== t[e].type && D(t[e].element, t[e].type);
                        i.detachEvent("onunload", k), i.CollectGarbage && i.CollectGarbage() };
                    i.attachEvent("onunload", k) }
                return C(), L }) }, {}], 32: [function(e, t, n) {
            (function(t) { "use strict";

                function i() {
                    return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                function r(e, t) {
                    if (i() < t) throw new RangeError("Invalid typed array length");
                    return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e }

                function o(e, t, n) {
                    if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return u(this, e) }
                    return s(this, e, t, n) }

                function s(e, t, n, i) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d(e, t, n, i) : "string" == typeof t ? c(e, t, n) : p(e, t) }

                function a(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                    if (0 > e) throw new RangeError('"size" argument must not be negative') }

                function l(e, t, n, i) {
                    return a(t), 0 >= t ? r(e, t) : void 0 !== n ? "string" == typeof i ? r(e, t).fill(n, i) : r(e, t).fill(n) : r(e, t) }

                function u(e, t) {
                    if (a(t), e = r(e, 0 > t ? 0 : 0 | h(t)), !o.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; t > n; ++n) e[n] = 0;
                    return e }

                function c(e, t, n) {
                    if (("string" != typeof n || "" === n) && (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | m(t, n),
                        s = (e = r(e, i)).write(t, n);
                    return s !== i && (e = e.slice(0, s)), e }

                function f(e, t) {
                    var n = t.length < 0 ? 0 : 0 | h(t.length);
                    e = r(e, n);
                    for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
                    return e }

                function d(e, t, n, i) {
                    if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = f(e, t), e }

                function p(e, t) {
                    if (o.isBuffer(t)) {
                        var n = 0 | h(t.length);
                        return e = r(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e) }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || X(t.length) ? r(e, 0) : f(e, t);
                        if ("Buffer" === t.type && Q(t.data)) return f(e, t.data) }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

                function h(e) {
                    if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | e }

                function g(e) {
                    return +e != e && (e = 0), o.alloc(+e) }

                function m(e, t) {
                    if (o.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength; "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return F(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return V(e).length;
                        default:
                            if (i) return F(e).length;
                            t = ("" + t).toLowerCase(), i = !0 } }

                function v(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";
                    if (n >>>= 0, (t >>>= 0) >= n) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return L(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return T(this, t, n);
                        case "ascii":
                            return D(this, t, n);
                        case "latin1":
                        case "binary":
                            return j(this, t, n);
                        case "base64":
                            return E(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0 } }

                function y(e, t, n) {
                    var i = e[t];
                    e[t] = e[n], e[n] = i }

                function w(e, t, n, i, r) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), 0 > n && (n = e.length + n), n >= e.length) {
                        if (r) return -1;
                        n = e.length - 1 } else if (0 > n) {
                        if (!r) return -1;
                        n = 0 }
                    if ("string" == typeof t && (t = o.from(t, i)), o.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, i, r);
                    if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, i, r);
                    throw new TypeError("val must be string, number or Buffer") }

                function b(e, t, n, i, r) {
                    function o(e, t) {
                        return 1 === s ? e[t] : e.readUInt16BE(t * s) }
                    var s = 1,
                        a = e.length,
                        l = t.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        s = 2, a /= 2, l /= 2, n /= 2 }
                    var u;
                    if (r) {
                        var c = -1;
                        for (u = n; a > u; u++)
                            if (o(e, u) === o(t, -1 === c ? 0 : u - c)) {
                                if (-1 === c && (c = u), u - c + 1 === l) return c * s } else -1 !== c && (u -= u - c), c = -1 } else
                        for (n + l > a && (n = a - l), u = n; u >= 0; u--) {
                            for (var f = !0, d = 0; l > d; d++)
                                if (o(e, u + d) !== o(t, d)) { f = !1;
                                    break }
                            if (f) return u }
                    return -1 }

                function I(e, t, n, i) { n = Number(n) || 0;
                    var r = e.length - n;
                    i ? (i = Number(i)) > r && (i = r) : i = r;
                    var o = t.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    i > o / 2 && (i = o / 2);
                    for (var s = 0; i > s; ++s) {
                        var a = parseInt(t.substr(2 * s, 2), 16);
                        if (isNaN(a)) return s;
                        e[n + s] = a }
                    return s }

                function x(e, t, n, i) {
                    return _(F(t, e.length - n), e, n, i) }

                function C(e, t, n, i) {
                    return _(B(t), e, n, i) }

                function S(e, t, n, i) {
                    return C(e, t, n, i) }

                function M(e, t, n, i) {
                    return _(V(t), e, n, i) }

                function A(e, t, n, i) {
                    return _(J(t, e.length - n), e, n, i) }

                function E(e, t, n) {
                    return 0 === t && n === e.length ? q.fromByteArray(e) : q.fromByteArray(e.slice(t, n)) }

                function T(e, t, n) { n = Math.min(e.length, n);
                    for (var i = [], r = t; n > r;) {
                        var o = e[r],
                            s = null,
                            a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                        if (n >= r + a) {
                            var l, u, c, f;
                            switch (a) {
                                case 1:
                                    128 > o && (s = o);
                                    break;
                                case 2:
                                    128 == (192 & (l = e[r + 1])) && (f = (31 & o) << 6 | 63 & l) > 127 && (s = f);
                                    break;
                                case 3:
                                    l = e[r + 1], u = e[r + 2], 128 == (192 & l) && 128 == (192 & u) && (f = (15 & o) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (55296 > f || f > 57343) && (s = f);
                                    break;
                                case 4:
                                    l = e[r + 1], u = e[r + 2], c = e[r + 3], 128 == (192 & l) && 128 == (192 & u) && 128 == (192 & c) && (f = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & c) > 65535 && 1114112 > f && (s = f) } }
                        null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, i.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), i.push(s), r += a }
                    return N(i) }

                function N(e) {
                    var t = e.length;
                    if ($ >= t) return String.fromCharCode.apply(String, e);
                    for (var n = "", i = 0; t > i;) n += String.fromCharCode.apply(String, e.slice(i, i += $));
                    return n }

                function D(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; n > r; ++r) i += String.fromCharCode(127 & e[r]);
                    return i }

                function j(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; n > r; ++r) i += String.fromCharCode(e[r]);
                    return i }

                function L(e, t, n) {
                    var i = e.length;
                    (!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
                    for (var r = "", o = t; n > o; ++o) r += U(e[o]);
                    return r }

                function k(e, t, n) {
                    for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r }

                function P(e, t, n) {
                    if (e % 1 != 0 || 0 > e) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

                function Z(e, t, n, i, r, s) {
                    if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || s > t) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > e.length) throw new RangeError("Index out of range") }

                function O(e, t, n, i) { 0 > t && (t = 65535 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 2); o > r; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r) }

                function z(e, t, n, i) { 0 > t && (t = 4294967295 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 4); o > r; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255 }

                function Y(e, t, n, i, r, o) {
                    if (n + i > e.length) throw new RangeError("Index out of range");
                    if (0 > n) throw new RangeError("Index out of range") }

                function R(e, t, n, i, r) {
                    return r || Y(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(e, t, n, i, 23, 4), n + 4 }

                function W(e, t, n, i, r) {
                    return r || Y(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(e, t, n, i, 52, 8), n + 8 }

                function G(e) {
                    if ((e = H(e).replace(ee, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e }

                function H(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }

                function U(e) {
                    return 16 > e ? "0" + e.toString(16) : e.toString(16) }

                function F(e, t) { t = t || 1 / 0;
                    for (var n, i = e.length, r = null, o = [], s = 0; i > s; ++s) {
                        if ((n = e.charCodeAt(s)) > 55295 && 57344 > n) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue }
                                if (s + 1 === i) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue }
                                r = n;
                                continue }
                            if (56320 > n) {
                                (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                                continue }
                            n = 65536 + (r - 55296 << 10 | n - 56320) } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (r = null, 128 > n) {
                            if ((t -= 1) < 0) break;
                            o.push(n) } else if (2048 > n) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128) } else if (65536 > n) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else {
                            if (!(1114112 > n)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } }
                    return o }

                function B(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t }

                function J(e, t) {
                    for (var n, i, r, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                    return o }

                function V(e) {
                    return q.toByteArray(G(e)) }

                function _(e, t, n, i) {
                    for (var r = 0; i > r && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
                    return r }

                function X(e) {
                    return e !== e }
                var q = e("base64-js"),
                    K = e("ieee754"),
                    Q = e("isarray");
                n.Buffer = o, n.SlowBuffer = g, n.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                                return 42 } }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength } catch (e) {
                        return !1 } }(), n.kMaxLength = i(), o.poolSize = 8192, o._augment = function(e) {
                    return e.__proto__ = o.prototype, e }, o.from = function(e, t, n) {
                    return s(null, e, t, n) }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0 })), o.alloc = function(e, t, n) {
                    return l(null, e, t, n) }, o.allocUnsafe = function(e) {
                    return u(null, e) }, o.allocUnsafeSlow = function(e) {
                    return u(null, e) }, o.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer) }, o.compare = function(e, t) {
                    if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); s > r; ++r)
                        if (e[r] !== t[r]) { n = e[r], i = t[r];
                            break }
                    return i > n ? -1 : n > i ? 1 : 0 }, o.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1 } }, o.concat = function(e, t) {
                    if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return o.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var i = o.allocUnsafe(t),
                        r = 0;
                    for (n = 0; n < e.length; ++n) {
                        var s = e[n];
                        if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                        s.copy(i, r), r += s.length }
                    return i }, o.byteLength = m, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; e > t; t += 2) y(this, t, t + 1);
                    return this }, o.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; e > t; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                    return this }, o.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; e > t; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                    return this }, o.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : v.apply(this, arguments) }, o.prototype.equals = function(e) {
                    if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === o.compare(this, e) }, o.prototype.inspect = function() {
                    var e = "",
                        t = n.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">" }, o.prototype.compare = function(e, t, n, i, r) {
                    if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), 0 > t || n > e.length || 0 > i || r > this.length) throw new RangeError("out of range index");
                    if (i >= r && t >= n) return 0;
                    if (i >= r) return -1;
                    if (t >= n) return 1;
                    if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
                    for (var s = r - i, a = n - t, l = Math.min(s, a), u = this.slice(i, r), c = e.slice(t, n), f = 0; l > f; ++f)
                        if (u[f] !== c[f]) { s = u[f], a = c[f];
                            break }
                    return a > s ? -1 : s > a ? 1 : 0 }, o.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n) }, o.prototype.indexOf = function(e, t, n) {
                    return w(this, e, t, n, !0) }, o.prototype.lastIndexOf = function(e, t, n) {
                    return w(this, e, t, n, !1) }, o.prototype.write = function(e, t, n, i) {
                    if (void 0 === t) i = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0) }
                    var r = this.length - t;
                    if ((void 0 === n || n > r) && (n = r), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var o = !1;;) switch (i) {
                        case "hex":
                            return I(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return x(this, e, t, n);
                        case "ascii":
                            return C(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return S(this, e, t, n);
                        case "base64":
                            return M(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return A(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), o = !0 } }, o.prototype.toJSON = function() {
                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                var $ = 4096;
                o.prototype.slice = function(e, t) {
                    var n = this.length;
                    e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? 0 > (e += n) && (e = 0) : e > n && (e = n), 0 > t ? 0 > (t += n) && (t = 0) : t > n && (t = n), e > t && (t = e);
                    var i;
                    if (o.TYPED_ARRAY_SUPPORT) i = this.subarray(e, t), i.__proto__ = o.prototype;
                    else {
                        var r = t - e;
                        i = new o(r, void 0);
                        for (var s = 0; r > s; ++s) i[s] = this[s + e] }
                    return i }, o.prototype.readUIntLE = function(e, t, n) { e |= 0, t |= 0, n || P(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return i }, o.prototype.readUIntBE = function(e, t, n) { e |= 0, t |= 0, n || P(e, t, this.length);
                    for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
                    return i }, o.prototype.readUInt8 = function(e, t) {
                    return t || P(e, 1, this.length), this[e] }, o.prototype.readUInt16LE = function(e, t) {
                    return t || P(e, 2, this.length), this[e] | this[e + 1] << 8 }, o.prototype.readUInt16BE = function(e, t) {
                    return t || P(e, 2, this.length), this[e] << 8 | this[e + 1] }, o.prototype.readUInt32LE = function(e, t) {
                    return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, o.prototype.readUInt32BE = function(e, t) {
                    return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, o.prototype.readIntLE = function(e, t, n) { e |= 0, t |= 0, n || P(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i }, o.prototype.readIntBE = function(e, t, n) { e |= 0, t |= 0, n || P(e, t, this.length);
                    for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
                    return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o }, o.prototype.readInt8 = function(e, t) {
                    return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, o.prototype.readInt16LE = function(e, t) { t || P(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt16BE = function(e, t) { t || P(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt32LE = function(e, t) {
                    return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, o.prototype.readInt32BE = function(e, t) {
                    return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, o.prototype.readFloatLE = function(e, t) {
                    return t || P(e, 4, this.length), K.read(this, e, !0, 23, 4) }, o.prototype.readFloatBE = function(e, t) {
                    return t || P(e, 4, this.length), K.read(this, e, !1, 23, 4) }, o.prototype.readDoubleLE = function(e, t) {
                    return t || P(e, 8, this.length), K.read(this, e, !0, 52, 8) }, o.prototype.readDoubleBE = function(e, t) {
                    return t || P(e, 8, this.length), K.read(this, e, !1, 52, 8) }, o.prototype.writeUIntLE = function(e, t, n, i) { e = +e, t |= 0, n |= 0, i || Z(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
                    return t + n }, o.prototype.writeUIntBE = function(e, t, n, i) { e = +e, t |= 0, n |= 0, i || Z(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = n - 1,
                        o = 1;
                    for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
                    return t + n }, o.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, o.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2 }, o.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2 }, o.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : z(this, e, t, !0), t + 4 }, o.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4 }, o.prototype.writeIntLE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        Z(this, e, t, n, r - 1, -r) }
                    var o = 0,
                        s = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++o < n && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                    return t + n }, o.prototype.writeIntBE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        Z(this, e, t, n, r - 1, -r) }
                    var o = n - 1,
                        s = 1,
                        a = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                    return t + n }, o.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, o.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2 }, o.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2 }, o.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : z(this, e, t, !0), t + 4 }, o.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || Z(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4 }, o.prototype.writeFloatLE = function(e, t, n) {
                    return R(this, e, t, !0, n) }, o.prototype.writeFloatBE = function(e, t, n) {
                    return R(this, e, t, !1, n) }, o.prototype.writeDoubleLE = function(e, t, n) {
                    return W(this, e, t, !0, n) }, o.prototype.writeDoubleBE = function(e, t, n) {
                    return W(this, e, t, !1, n) }, o.prototype.copy = function(e, t, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && n > i && (i = n), i === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (0 > t) throw new RangeError("targetStart out of bounds");
                    if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (0 > i) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                    var r, s = i - n;
                    if (this === e && t > n && i > t)
                        for (r = s - 1; r >= 0; --r) e[r + t] = this[r + n];
                    else if (1e3 > s || !o.TYPED_ARRAY_SUPPORT)
                        for (r = 0; s > r; ++r) e[r + t] = this[r + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
                    return s }, o.prototype.fill = function(e, t, n, i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                            var r = e.charCodeAt(0);
                            256 > r && (e = r) }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i) } else "number" == typeof e && (e &= 255);
                    if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (t >= n) return this;
                    t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                    var s;
                    if ("number" == typeof e)
                        for (s = t; n > s; ++s) this[s] = e;
                    else {
                        var a = o.isBuffer(e) ? e : F(new o(e, i).toString()),
                            l = a.length;
                        for (s = 0; n - t > s; ++s) this[s + t] = a[s % l] }
                    return this };
                var ee = /[^+\/0-9A-Za-z-_]/g }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "base64-js": 30, ieee754: 37, isarray: 40 }], 33: [function(e, t, n) {
            function i(e) {
                function t(e) {
                    var t = c();
                    s(t, e) > -1 || (t.push(e), f(t)) }

                function n(e) {
                    var t = c(),
                        n = s(t, e); - 1 !== n && (t.splice(n, 1), f(t)) }

                function i(e) {
                    return s(c(), e) > -1 }

                function a(e) {
                    return i(e) ? (n(e), !1) : (t(e), !0) }

                function l() {
                    return e.className }

                function u(e) {
                    return c()[e] || null }

                function c() {
                    return r(e.className.split(" "), o) }

                function f(t) {
                    var n = t.length;
                    e.className = t.join(" "), p.length = n;
                    for (var i = 0; i < t.length; i++) p[i] = t[i];
                    delete t[n] }
                var d = e.classList;
                if (d) return d;
                var p = { add: t, remove: n, contains: i, toggle: a, toString: l, length: 0, item: u };
                return p }

            function r(e, t) {
                for (var n = [], i = 0; i < e.length; i++) t(e[i]) && n.push(e[i]);
                return n }

            function o(e) {
                return !!e }
            var s = e("indexof");
            t.exports = i }, { indexof: 38 }], 34: [function(e, t, n) {
            function i(e, t, n, i) {
                return n = window.getComputedStyle, i = n ? n(e) : e.currentStyle, i ? i[t.replace(/-(\w)/gi, function(e, t) {
                    return t.toUpperCase() })] : void 0 }
            t.exports = i }, {}], 35: [function(e, t, n) {! function(e, i) { "use strict"; "object" == typeof n ? t.exports = i() : e.returnExports = i() }(this, function() {
                var e, t = Array,
                    n = t.prototype,
                    i = Object,
                    r = i.prototype,
                    o = Function,
                    s = o.prototype,
                    a = String,
                    l = a.prototype,
                    u = Number,
                    c = u.prototype,
                    f = n.slice,
                    d = n.splice,
                    p = n.push,
                    h = n.unshift,
                    g = n.concat,
                    m = n.join,
                    v = s.call,
                    y = s.apply,
                    w = Math.max,
                    b = Math.min,
                    I = r.toString,
                    x = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                    C = Function.prototype.toString,
                    S = /^\s*class /,
                    M = function(e) {
                        try {
                            var t = C.call(e).replace(/\/\/.*\n/g, "").replace(/\/\*[.\s\S]*\*\//g, "").replace(/\n/gm, " ").replace(/ {2}/g, " ");
                            return S.test(t) } catch (e) {
                            return !1 } },
                    A = function(e) {
                        try {
                            return !M(e) && (C.call(e), !0) } catch (e) {
                            return !1 } },
                    E = function(e) {
                        if (!e) return !1;
                        if ("function" != typeof e && "object" != typeof e) return !1;
                        if (x) return A(e);
                        if (M(e)) return !1;
                        var t = I.call(e);
                        return "[object Function]" === t || "[object GeneratorFunction]" === t },
                    T = RegExp.prototype.exec,
                    N = function(e) {
                        try {
                            return T.call(e), !0 } catch (e) {
                            return !1 } };
                e = function(e) {
                    return "object" == typeof e && (x ? N(e) : "[object RegExp]" === I.call(e)) };
                var D, j = String.prototype.valueOf,
                    L = function(e) {
                        try {
                            return j.call(e), !0 } catch (e) {
                            return !1 } };
                D = function(e) {
                    return "string" == typeof e || "object" == typeof e && (x ? L(e) : "[object String]" === I.call(e)) };
                var k = i.defineProperty && function() {
                        try {
                            var e = {};
                            i.defineProperty(e, "x", { enumerable: !1, value: e });
                            for (var t in e) return !1;
                            return e.x === e } catch (e) {
                            return !1 } }(),
                    P = function(e) {
                        var t;
                        return t = k ? function(e, t, n, r) {!r && t in e || i.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: !0, value: n }) } : function(e, t, n, i) {!i && t in e || (e[t] = n) },
                            function(n, i, r) {
                                for (var o in i) e.call(i, o) && t(n, o, i[o], r) } }(r.hasOwnProperty),
                    Z = function(e) {
                        var t = typeof e;
                        return null === e || "object" !== t && "function" !== t },
                    O = u.isNaN || function(e) {
                        return e !== e },
                    z = { ToInteger: function(e) {
                            var t = +e;
                            return O(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t }, ToPrimitive: function(e) {
                            var t, n, i;
                            if (Z(e)) return e;
                            if (n = e.valueOf, E(n) && (t = n.call(e), Z(t))) return t;
                            if (i = e.toString, E(i) && (t = i.call(e), Z(t))) return t;
                            throw new TypeError }, ToObject: function(e) {
                            if (null == e) throw new TypeError("can't convert " + e + " to object");
                            return i(e) }, ToUint32: function(e) {
                            return e >>> 0 } },
                    Y = function() {};
                P(s, { bind: function(e) {
                        var t = this;
                        if (!E(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                        for (var n, r = f.call(arguments, 1), s = function() {
                                if (this instanceof n) {
                                    var o = y.call(t, this, g.call(r, f.call(arguments)));
                                    return i(o) === o ? o : this }
                                return y.call(t, e, g.call(r, f.call(arguments))) }, a = w(0, t.length - r.length), l = [], u = 0; a > u; u++) p.call(l, "$" + u);
                        return n = o("binder", "return function (" + m.call(l, ",") + "){ return binder.apply(this, arguments); }")(s), t.prototype && (Y.prototype = t.prototype, n.prototype = new Y, Y.prototype = null), n } });
                var R = v.bind(r.hasOwnProperty),
                    W = v.bind(r.toString),
                    G = v.bind(f),
                    H = y.bind(f),
                    U = v.bind(l.slice),
                    F = v.bind(l.split),
                    B = v.bind(l.indexOf),
                    J = v.bind(p),
                    V = v.bind(r.propertyIsEnumerable),
                    _ = v.bind(n.sort),
                    X = t.isArray || function(e) {
                        return "[object Array]" === W(e) },
                    q = 1 !== [].unshift(0);
                P(n, { unshift: function() {
                        return h.apply(this, arguments), this.length } }, q), P(t, { isArray: X });
                var K = i("a"),
                    Q = "a" !== K[0] || !(0 in K),
                    $ = function(e) {
                        var t = !0,
                            n = !0,
                            i = !1;
                        if (e) try { e.call("foo", function(e, n, i) { "object" != typeof i && (t = !1) }), e.call([1], function() { "use strict";
                                n = "string" == typeof this }, "x") } catch (e) { i = !0 }
                        return !!e && !i && t && n };
                P(n, { forEach: function(e) {
                        var t, n = z.ToObject(this),
                            i = Q && D(this) ? F(this, "") : n,
                            r = -1,
                            o = z.ToUint32(i.length);
                        if (arguments.length > 1 && (t = arguments[1]), !E(e)) throw new TypeError("Array.prototype.forEach callback must be a function");
                        for (; ++r < o;) r in i && (void 0 === t ? e(i[r], r, n) : e.call(t, i[r], r, n)) } }, !$(n.forEach)), P(n, { map: function(e) {
                        var n, i = z.ToObject(this),
                            r = Q && D(this) ? F(this, "") : i,
                            o = z.ToUint32(r.length),
                            s = t(o);
                        if (arguments.length > 1 && (n = arguments[1]), !E(e)) throw new TypeError("Array.prototype.map callback must be a function");
                        for (var a = 0; o > a; a++) a in r && (s[a] = void 0 === n ? e(r[a], a, i) : e.call(n, r[a], a, i));
                        return s } }, !$(n.map)), P(n, { filter: function(e) {
                        var t, n, i = z.ToObject(this),
                            r = Q && D(this) ? F(this, "") : i,
                            o = z.ToUint32(r.length),
                            s = [];
                        if (arguments.length > 1 && (n = arguments[1]), !E(e)) throw new TypeError("Array.prototype.filter callback must be a function");
                        for (var a = 0; o > a; a++) a in r && (t = r[a], (void 0 === n ? e(t, a, i) : e.call(n, t, a, i)) && J(s, t));
                        return s } }, !$(n.filter)), P(n, { every: function(e) {
                        var t, n = z.ToObject(this),
                            i = Q && D(this) ? F(this, "") : n,
                            r = z.ToUint32(i.length);
                        if (arguments.length > 1 && (t = arguments[1]), !E(e)) throw new TypeError("Array.prototype.every callback must be a function");
                        for (var o = 0; r > o; o++)
                            if (o in i && !(void 0 === t ? e(i[o], o, n) : e.call(t, i[o], o, n))) return !1;
                        return !0 } }, !$(n.every)), P(n, { some: function(e) {
                        var t, n = z.ToObject(this),
                            i = Q && D(this) ? F(this, "") : n,
                            r = z.ToUint32(i.length);
                        if (arguments.length > 1 && (t = arguments[1]), !E(e)) throw new TypeError("Array.prototype.some callback must be a function");
                        for (var o = 0; r > o; o++)
                            if (o in i && (void 0 === t ? e(i[o], o, n) : e.call(t, i[o], o, n))) return !0;
                        return !1 } }, !$(n.some));
                var ee = !1;
                n.reduce && (ee = "object" == typeof n.reduce.call("es5", function(e, t, n, i) {
                    return i })), P(n, { reduce: function(e) {
                        var t = z.ToObject(this),
                            n = Q && D(this) ? F(this, "") : t,
                            i = z.ToUint32(n.length);
                        if (!E(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
                        if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                        var r, o = 0;
                        if (arguments.length >= 2) r = arguments[1];
                        else
                            for (;;) {
                                if (o in n) { r = n[o++];
                                    break }
                                if (++o >= i) throw new TypeError("reduce of empty array with no initial value") }
                        for (; i > o; o++) o in n && (r = e(r, n[o], o, t));
                        return r } }, !ee);
                var te = !1;
                n.reduceRight && (te = "object" == typeof n.reduceRight.call("es5", function(e, t, n, i) {
                    return i })), P(n, { reduceRight: function(e) {
                        var t = z.ToObject(this),
                            n = Q && D(this) ? F(this, "") : t,
                            i = z.ToUint32(n.length);
                        if (!E(e)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                        if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                        var r, o = i - 1;
                        if (arguments.length >= 2) r = arguments[1];
                        else
                            for (;;) {
                                if (o in n) { r = n[o--];
                                    break }
                                if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value") }
                        if (0 > o) return r;
                        do { o in n && (r = e(r, n[o], o, t)) } while (o--);
                        return r } }, !te);
                var ne = n.indexOf && -1 !== [0, 1].indexOf(1, 2);
                P(n, { indexOf: function(e) {
                        var t = Q && D(this) ? F(this, "") : z.ToObject(this),
                            n = z.ToUint32(t.length);
                        if (0 === n) return -1;
                        var i = 0;
                        for (arguments.length > 1 && (i = z.ToInteger(arguments[1])), i = i >= 0 ? i : w(0, n + i); n > i; i++)
                            if (i in t && t[i] === e) return i;
                        return -1 } }, ne);
                var ie = n.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
                P(n, { lastIndexOf: function(e) {
                        var t = Q && D(this) ? F(this, "") : z.ToObject(this),
                            n = z.ToUint32(t.length);
                        if (0 === n) return -1;
                        var i = n - 1;
                        for (arguments.length > 1 && (i = b(i, z.ToInteger(arguments[1]))), i = i >= 0 ? i : n - Math.abs(i); i >= 0; i--)
                            if (i in t && e === t[i]) return i;
                        return -1 } }, ie);
                var re = function() {
                    var e = [1, 2],
                        t = e.splice();
                    return 2 === e.length && X(t) && 0 === t.length }();
                P(n, { splice: function(e, t) {
                        return 0 === arguments.length ? [] : d.apply(this, arguments) } }, !re);
                var oe = function() {
                    var e = {};
                    return n.splice.call(e, 0, 0, 1), 1 === e.length }();
                P(n, { splice: function(e, t) {
                        if (0 === arguments.length) return [];
                        var n = arguments;
                        return this.length = w(z.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = G(arguments), n.length < 2 ? J(n, this.length - e) : n[1] = z.ToInteger(t)), d.apply(this, n) } }, !oe);
                var se = function() {
                        var e = new t(1e5);
                        return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x") }(),
                    ae = function() {
                        var e = [];
                        return e[256] = "a", e.splice(257, 0, "b"), "a" === e[256] }();
                P(n, { splice: function(e, t) {
                        for (var n, i = z.ToObject(this), r = [], o = z.ToUint32(i.length), s = z.ToInteger(e), l = 0 > s ? w(o + s, 0) : b(s, o), u = b(w(z.ToInteger(t), 0), o - l), c = 0; u > c;) n = a(l + c), R(i, n) && (r[c] = i[n]), c += 1;
                        var f, d = G(arguments, 2),
                            p = d.length;
                        if (u > p) { c = l;
                            for (var h = o - u; h > c;) n = a(c + u), f = a(c + p), R(i, n) ? i[f] = i[n] : delete i[f], c += 1;
                            c = o;
                            for (var g = o - u + p; c > g;) delete i[c - 1], c -= 1 } else if (p > u)
                            for (c = o - u; c > l;) n = a(c + u - 1), f = a(c + p - 1), R(i, n) ? i[f] = i[n] : delete i[f], c -= 1;
                        c = l;
                        for (var m = 0; m < d.length; ++m) i[c] = d[m], c += 1;
                        return i.length = o - u + p, r } }, !se || !ae);
                var le, ue = n.join;
                try { le = "1,2,3" !== Array.prototype.join.call("123", ",") } catch (e) { le = !0 }
                le && P(n, { join: function(e) {
                        var t = void 0 === e ? "," : e;
                        return ue.call(D(this) ? F(this, "") : this, t) } }, le);
                var ce = "1,2" !== [1, 2].join(void 0);
                ce && P(n, { join: function(e) {
                        var t = void 0 === e ? "," : e;
                        return ue.call(this, t) } }, ce);
                var fe = function(e) {
                        for (var t = z.ToObject(this), n = z.ToUint32(t.length), i = 0; i < arguments.length;) t[n + i] = arguments[i], i += 1;
                        return t.length = n + i, n + i },
                    de = function() {
                        var e = {};
                        return 1 !== Array.prototype.push.call(e, void 0) || 1 !== e.length || void 0 !== e[0] || !R(e, 0) }();
                P(n, { push: function(e) {
                        return X(this) ? p.apply(this, arguments) : fe.apply(this, arguments) } }, de);
                var pe = function() {
                    var e = [];
                    return 1 !== e.push(void 0) || 1 !== e.length || void 0 !== e[0] || !R(e, 0) }();
                P(n, { push: fe }, pe), P(n, { slice: function(e, t) {
                        var n = D(this) ? F(this, "") : this;
                        return H(n, arguments) } }, Q);
                var he = function() {
                        try {
                            return [1, 2].sort(null), [1, 2].sort({}), !0 } catch (e) {}
                        return !1 }(),
                    ge = function() {
                        try {
                            return [1, 2].sort(/a/), !1 } catch (e) {}
                        return !0 }(),
                    me = function() {
                        try {
                            return [1, 2].sort(void 0), !0 } catch (e) {}
                        return !1 }();
                P(n, { sort: function(e) {
                        if (void 0 === e) return _(this);
                        if (!E(e)) throw new TypeError("Array.prototype.sort callback must be a function");
                        return _(this, e) } }, he || !me || !ge);
                var ve = !V({ toString: null }, "toString"),
                    ye = V(function() {}, "prototype"),
                    we = !R("x", "0"),
                    be = function(e) {
                        var t = e.constructor;
                        return t && t.prototype === e },
                    Ie = { $window: !0, $console: !0, $parent: !0, $self: !0, $frame: !0, $frames: !0, $frameElement: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $external: !0 },
                    xe = function() {
                        if ("undefined" == typeof window) return !1;
                        for (var e in window) try {!Ie["$" + e] && R(window, e) && null !== window[e] && "object" == typeof window[e] && be(window[e]) } catch (e) {
                            return !0 }
                        return !1 }(),
                    Ce = function(e) {
                        if ("undefined" == typeof window || !xe) return be(e);
                        try {
                            return be(e) } catch (e) {
                            return !1 } },
                    Se = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    Me = Se.length,
                    Ae = function(e) {
                        return "[object Arguments]" === W(e) },
                    Ee = function(e) {
                        return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && !X(e) && E(e.callee) },
                    Te = Ae(arguments) ? Ae : Ee;
                P(i, { keys: function(e) {
                        var t = E(e),
                            n = Te(e),
                            i = null !== e && "object" == typeof e,
                            r = i && D(e);
                        if (!i && !t && !n) throw new TypeError("Object.keys called on a non-object");
                        var o = [],
                            s = ye && t;
                        if (r && we || n)
                            for (var l = 0; l < e.length; ++l) J(o, a(l));
                        if (!n)
                            for (var u in e) s && "prototype" === u || !R(e, u) || J(o, a(u));
                        if (ve)
                            for (var c = Ce(e), f = 0; Me > f; f++) {
                                var d = Se[f];
                                c && "constructor" === d || !R(e, d) || J(o, d) }
                        return o } });
                var Ne = i.keys && function() {
                        return 2 === i.keys(arguments).length }(1, 2),
                    De = i.keys && function() {
                        var e = i.keys(arguments);
                        return 1 !== arguments.length || 1 !== e.length || 1 !== e[0] }(1),
                    je = i.keys;
                P(i, { keys: function(e) {
                        return je(Te(e) ? G(e) : e) } }, !Ne || De);
                var Le, ke, Pe = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                    Ze = new Date(-0x55d318d56a724),
                    Oe = new Date(14496624e5),
                    ze = "Mon, 01 Jan -45875 11:59:59 GMT" !== Ze.toUTCString(); - 720 > Ze.getTimezoneOffset() ? (Le = "Tue Jan 02 -45875" !== Ze.toDateString(), ke = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Oe.toString())) : (Le = "Mon Jan 01 -45875" !== Ze.toDateString(), ke = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Oe.toString()));
                var Ye = v.bind(Date.prototype.getFullYear),
                    Re = v.bind(Date.prototype.getMonth),
                    We = v.bind(Date.prototype.getDate),
                    Ge = v.bind(Date.prototype.getUTCFullYear),
                    He = v.bind(Date.prototype.getUTCMonth),
                    Ue = v.bind(Date.prototype.getUTCDate),
                    Fe = v.bind(Date.prototype.getUTCDay),
                    Be = v.bind(Date.prototype.getUTCHours),
                    Je = v.bind(Date.prototype.getUTCMinutes),
                    Ve = v.bind(Date.prototype.getUTCSeconds),
                    _e = v.bind(Date.prototype.getUTCMilliseconds),
                    Xe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    qe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    Ke = function(e, t) {
                        return We(new Date(t, e, 0)) };
                P(Date.prototype, { getFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ye(this);
                        return 0 > e && Re(this) > 11 ? e + 1 : e }, getMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ye(this),
                            t = Re(this);
                        return 0 > e && t > 11 ? 0 : t }, getDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ye(this),
                            t = Re(this),
                            n = We(this);
                        return 0 > e && t > 11 ? 12 === t ? n : Ke(0, e + 1) - n + 1 : n }, getUTCFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ge(this);
                        return 0 > e && He(this) > 11 ? e + 1 : e }, getUTCMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ge(this),
                            t = He(this);
                        return 0 > e && t > 11 ? 0 : t }, getUTCDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ge(this),
                            t = He(this),
                            n = Ue(this);
                        return 0 > e && t > 11 ? 12 === t ? n : Ke(0, e + 1) - n + 1 : n } }, Pe), P(Date.prototype, { toUTCString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Fe(this),
                            t = Ue(this),
                            n = He(this),
                            i = Ge(this),
                            r = Be(this),
                            o = Je(this),
                            s = Ve(this);
                        return Xe[e] + ", " + (10 > t ? "0" + t : t) + " " + qe[n] + " " + i + " " + (10 > r ? "0" + r : r) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > s ? "0" + s : s) + " GMT" } }, Pe || ze), P(Date.prototype, { toDateString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = this.getDay(),
                            t = this.getDate(),
                            n = this.getMonth(),
                            i = this.getFullYear();
                        return Xe[e] + " " + qe[n] + " " + (10 > t ? "0" + t : t) + " " + i } }, Pe || Le), (Pe || ke) && (Date.prototype.toString = function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = this.getDay(),
                        t = this.getDate(),
                        n = this.getMonth(),
                        i = this.getFullYear(),
                        r = this.getHours(),
                        o = this.getMinutes(),
                        s = this.getSeconds(),
                        a = this.getTimezoneOffset(),
                        l = Math.floor(Math.abs(a) / 60),
                        u = Math.floor(Math.abs(a) % 60);
                    return Xe[e] + " " + qe[n] + " " + (10 > t ? "0" + t : t) + " " + i + " " + (10 > r ? "0" + r : r) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > s ? "0" + s : s) + " GMT" + (a > 0 ? "-" : "+") + (10 > l ? "0" + l : l) + (10 > u ? "0" + u : u) }, k && i.defineProperty(Date.prototype, "toString", { configurable: !0, enumerable: !1, writable: !0 }));
                var Qe = -621987552e5,
                    $e = "-000001",
                    et = Date.prototype.toISOString && -1 === new Date(Qe).toISOString().indexOf($e),
                    tt = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                    nt = v.bind(Date.prototype.getTime);
                P(Date.prototype, { toISOString: function() {
                            if (!isFinite(this) || !isFinite(nt(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                            var e = Ge(this),
                                t = He(this);
                            e += Math.floor(t / 12);
                            var n = [(t = (t % 12 + 12) % 12) + 1, Ue(this), Be(this), Je(this), Ve(this)];
                            e = (0 > e ? "-" : e > 9999 ? "+" : "") + U("00000" + Math.abs(e), e >= 0 && 9999 >= e ? -4 : -6);
                            for (var i = 0; i < n.length; ++i) n[i] = U("00" + n[i], -2);
                            return e + "-" + G(n, 0, 2).join("-") + "T" + G(n, 2).join(":") + "." + U("000" + _e(this), -3) + "Z" } }, et || tt),
                    function() {
                        try {
                            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(Qe).toJSON().indexOf($e) && Date.prototype.toJSON.call({ toISOString: function() {
                                    return !0 } }) } catch (e) {
                            return !1 } }() || (Date.prototype.toJSON = function(e) {
                        var t = i(this),
                            n = z.ToPrimitive(t);
                        if ("number" == typeof n && !isFinite(n)) return null;
                        var r = t.toISOString;
                        if (!E(r)) throw new TypeError("toISOString property is not callable");
                        return r.call(t) });
                var it = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                    rt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
                if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || rt || !it) {
                    var ot = Math.pow(2, 31) - 1,
                        st = O(new Date(1970, 0, 1, 0, 0, 0, ot + 1).getTime());
                    Date = function(e) {
                        var t = function(n, i, r, o, s, l, u) {
                                var c, f = arguments.length;
                                if (this instanceof e) {
                                    var d = l,
                                        p = u;
                                    if (st && f >= 7 && u > ot) {
                                        var h = Math.floor(u / ot) * ot,
                                            g = Math.floor(h / 1e3);
                                        d += g, p -= 1e3 * g }
                                    c = 1 === f && a(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, i, r, o, s, d, p) : f >= 6 ? new e(n, i, r, o, s, d) : f >= 5 ? new e(n, i, r, o, s) : f >= 4 ? new e(n, i, r, o) : f >= 3 ? new e(n, i, r) : f >= 2 ? new e(n, i) : f >= 1 ? new e(n instanceof e ? +n : n) : new e } else c = e.apply(this, arguments);
                                return Z(c) || P(c, { constructor: t }, !0), c },
                            n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                            i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                            r = function(e, t) {
                                var n = t > 1 ? 1 : 0;
                                return i[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970) },
                            o = function(t) {
                                var n = 0,
                                    i = t;
                                if (st && i > ot) {
                                    var r = Math.floor(i / ot) * ot,
                                        o = Math.floor(r / 1e3);
                                    n += o, i -= 1e3 * o }
                                return u(new e(1970, 0, 1, 0, 0, n, i)) };
                        for (var s in e) R(e, s) && (t[s] = e[s]);
                        return P(t, { now: e.now, UTC: e.UTC }, !0), t.prototype = e.prototype, P(t.prototype, { constructor: t }, !0), P(t, { parse: function(t) {
                                var i = n.exec(t);
                                if (i) {
                                    var s, a = u(i[1]),
                                        l = u(i[2] || 1) - 1,
                                        c = u(i[3] || 1) - 1,
                                        f = u(i[4] || 0),
                                        d = u(i[5] || 0),
                                        p = u(i[6] || 0),
                                        h = Math.floor(1e3 * u(i[7] || 0)),
                                        g = Boolean(i[4] && !i[8]),
                                        m = "-" === i[9] ? 1 : -1,
                                        v = u(i[10] || 0),
                                        y = u(i[11] || 0);
                                    return (d > 0 || p > 0 || h > 0 ? 24 : 25) > f && 60 > d && 60 > p && 1e3 > h && l > -1 && 12 > l && 24 > v && 60 > y && c > -1 && c < r(a, l + 1) - r(a, l) && (s = 60 * (24 * (r(a, l) + c) + f + v * m), s = 1e3 * (60 * (s + d + y * m) + p) + h, g && (s = o(s)), s >= -864e13 && 864e13 >= s) ? s : NaN }
                                return e.parse.apply(this, arguments) } }), t }(Date) }
                Date.now || (Date.now = function() {
                    return (new Date).getTime() });
                var at = c.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                    lt = { base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function(e, t) {
                            for (var n = -1, i = t; ++n < lt.size;) i += e * lt.data[n], lt.data[n] = i % lt.base, i = Math.floor(i / lt.base) }, divide: function(e) {
                            for (var t = lt.size, n = 0; --t >= 0;) n += lt.data[t], lt.data[t] = Math.floor(n / e), n = n % e * lt.base }, numToString: function() {
                            for (var e = lt.size, t = ""; --e >= 0;)
                                if ("" !== t || 0 === e || 0 !== lt.data[e]) {
                                    var n = a(lt.data[e]); "" === t ? t = n : t += U("0000000", 0, 7 - n.length) + n }
                            return t }, pow: function e(t, n, i) {
                            return 0 === n ? i : n % 2 == 1 ? e(t, n - 1, i * t) : e(t * t, n / 2, i) }, log: function(e) {
                            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                            for (; n >= 2;) t += 1, n /= 2;
                            return t } };
                P(c, { toFixed: function(e) {
                        var t, n, i, r, o, s, l, c;
                        if (t = u(e), 0 > (t = O(t) ? 0 : Math.floor(t)) || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                        if (n = u(this), O(n)) return "NaN";
                        if (-1e21 >= n || n >= 1e21) return a(n);
                        if (i = "", 0 > n && (i = "-", n = -n), r = "0", n > 1e-21)
                            if (o = lt.log(n * lt.pow(2, 69, 1)) - 69, s = 0 > o ? n * lt.pow(2, -o, 1) : n / lt.pow(2, o, 1), s *= 4503599627370496, (o = 52 - o) > 0) {
                                for (lt.multiply(0, s), l = t; l >= 7;) lt.multiply(1e7, 0), l -= 7;
                                for (lt.multiply(lt.pow(10, l, 1), 0), l = o - 1; l >= 23;) lt.divide(1 << 23), l -= 23;
                                lt.divide(1 << l), lt.multiply(1, 1), lt.divide(2), r = lt.numToString() } else lt.multiply(0, s), lt.multiply(1 << -o, 0), r = lt.numToString() + U("0.00000000000000000000", 2, 2 + t);
                        return t > 0 ? (c = r.length, r = t >= c ? i + U("0.0000000000000000000", 0, t - c + 2) + r : i + U(r, 0, c - t) + "." + U(r, c - t)) : r = i + r, r } }, at);
                var ut = function() {
                        try {
                            return "1" === 1..toPrecision(void 0) } catch (e) {
                            return !0 } }(),
                    ct = c.toPrecision;
                P(c, { toPrecision: function(e) {
                        return void 0 === e ? ct.call(this) : ct.call(this, e) } }, ut), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
                    var t = void 0 === /()??/.exec("")[1],
                        n = Math.pow(2, 32) - 1;
                    l.split = function(i, r) {
                        var o = String(this);
                        if (void 0 === i && 0 === r) return [];
                        if (!e(i)) return F(this, i, r);
                        var s, a, l, u, c = [],
                            f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""),
                            d = 0,
                            h = new RegExp(i.source, f + "g");
                        t || (s = new RegExp("^" + h.source + "$(?!\\s)", f));
                        var g = void 0 === r ? n : z.ToUint32(r);
                        for (a = h.exec(o); a && !((l = a.index + a[0].length) > d && (J(c, U(o, d, a.index)), !t && a.length > 1 && a[0].replace(s, function() {
                                for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (a[e] = void 0) }), a.length > 1 && a.index < o.length && p.apply(c, G(a, 1)), u = a[0].length, d = l, c.length >= g));) h.lastIndex === a.index && h.lastIndex++, a = h.exec(o);
                        return d === o.length ? (u || !h.test("")) && J(c, "") : J(c, U(o, d)), c.length > g ? G(c, 0, g) : c } }() : "0".split(void 0, 0).length && (l.split = function(e, t) {
                    return void 0 === e && 0 === t ? [] : F(this, e, t) });
                var ft = l.replace;
                (function() {
                    var e = [];
                    return "x".replace(/x(.)?/g, function(t, n) { J(e, n) }), 1 === e.length && void 0 === e[0] })() || (l.replace = function(t, n) {
                    var i = E(n),
                        r = e(t) && /\)[*?]/.test(t.source);
                    if (i && r) {
                        var o = function(e) {
                            var i = arguments.length,
                                r = t.lastIndex;
                            t.lastIndex = 0;
                            var o = t.exec(e) || [];
                            return t.lastIndex = r, J(o, arguments[i - 2], arguments[i - 1]), n.apply(this, o) };
                        return ft.call(this, t, o) }
                    return ft.call(this, t, n) });
                var dt = l.substr,
                    pt = "".substr && "b" !== "0b".substr(-1);
                P(l, { substr: function(e, t) {
                        var n = e;
                        return 0 > e && (n = w(this.length + e, 0)), dt.call(this, n, t) } }, pt);
                var ht = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
                    gt = "[" + ht + "]",
                    mt = new RegExp("^" + gt + gt + "*"),
                    vt = new RegExp(gt + gt + "*$"),
                    yt = l.trim && (ht.trim() || !"​".trim());
                P(l, { trim: function() {
                        if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                        return a(this).replace(mt, "").replace(vt, "") } }, yt);
                var wt = v.bind(String.prototype.trim),
                    bt = l.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
                P(l, { lastIndexOf: function(e) {
                        if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                        for (var t = a(this), n = a(e), i = arguments.length > 1 ? u(arguments[1]) : NaN, r = O(i) ? 1 / 0 : z.ToInteger(i), o = b(w(r, 0), t.length), s = n.length, l = o + s; l > 0;) { l = w(0, l - s);
                            var c = B(U(t, l, o + s), n);
                            if (-1 !== c) return l + c }
                        return -1 } }, bt);
                var It = l.lastIndexOf;
                if (P(l, { lastIndexOf: function(e) {
                            return It.apply(this, arguments) } }, 1 !== l.lastIndexOf.length), (8 !== parseInt(ht + "08") || 22 !== parseInt(ht + "0x16")) && (parseInt = function(e) {
                        var t = /^[\-+]?0[xX]/;
                        return function(n, i) {
                            var r = wt(String(n)),
                                o = u(i) || (t.test(r) ? 16 : 10);
                            return e(r, o) } }(parseInt)), 1 / parseFloat("-0") != -1 / 0 && (parseFloat = function(e) {
                        return function(t) {
                            var n = wt(String(t)),
                                i = e(n);
                            return 0 === i && "-" === U(n, 0, 1) ? -0 : i } }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                    var xt = function() {
                        if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
                        var e = this.name;
                        void 0 === e ? e = "Error" : "string" != typeof e && (e = a(e));
                        var t = this.message;
                        return void 0 === t ? t = "" : "string" != typeof t && (t = a(t)), e ? t ? e + ": " + t : e : t };
                    Error.prototype.toString = xt }
                if (k) {
                    var Ct = function(e, t) {
                        if (V(e, t)) {
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n)) } };
                    Ct(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Ct(Error.prototype, "name") }
                if ("/a/gim" !== String(/a/gim)) {
                    var St = function() {
                        var e = "/" + this.source + "/";
                        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e };
                    RegExp.prototype.toString = St } }) }, {}], 36: [function(e, t, n) {
            var i = [],
                r = i.forEach,
                o = i.slice;
            t.exports = function(e) {
                return r.call(o.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n] }), e } }, {}], 37: [function(e, t, n) { n.read = function(e, t, n, i, r) {
                var o, s, a = 8 * r - i - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    c = -7,
                    f = n ? r - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; s = 256 * s + e[t + f], f += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                    s += Math.pow(2, i), o -= u }
                return (p ? -1 : 1) * s * Math.pow(2, o - i) }, n.write = function(e, t, n, i, r, o) {
                var s, a, l, u = 8 * o - r - 1,
                    c = (1 << u) - 1,
                    f = c >> 1,
                    d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = i ? 0 : o - 1,
                    h = i ? 1 : -1,
                    g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + f >= 1 ? d / l : d * Math.pow(2, 1 - f)) * l >= 2 && (s++, l /= 2), s + f >= c ? (a = 0, s = c) : s + f >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + p] = 255 & a, p += h, a /= 256, r -= 8);
                for (s = s << r | a, u += r; u > 0; e[n + p] = 255 & s, p += h, s /= 256, u -= 8);
                e[n + p - h] |= 128 * g } }, {}], 38: [function(e, t, n) {
            var i = [].indexOf;
            t.exports = function(e, t) {
                if (i) return e.indexOf(t);
                for (var n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return -1 } }, {}], 39: [function(e, t, n) {
            function i(e) {
                var t = r.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt) }
            t.exports = i;
            var r = Object.prototype.toString }, {}], 40: [function(e, t, n) {
            var i = {}.toString;
            t.exports = Array.isArray || function(e) {
                return "[object Array]" == i.call(e) } }, {}], 41: [function(t, n, i) {
            (function(t) {! function(r) {
                    function o(e) {
                        throw new RangeError(P[e]) }

                    function s(e, t) {
                        for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                        return i }

                    function a(e, t) {
                        var n = e.split("@"),
                            i = "";
                        return n.length > 1 && (i = n[0] + "@", e = n[1]), i + s((e = e.replace(k, ".")).split("."), t).join(".") }

                    function l(e) {
                        for (var t, n, i = [], r = 0, o = e.length; o > r;) t = e.charCodeAt(r++), t >= 55296 && 56319 >= t && o > r ? (n = e.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--)) : i.push(t);
                        return i }

                    function u(e) {
                        return s(e, function(e) {
                            var t = "";
                            return e > 65535 && (e -= 65536, t += z(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += z(e) }).join("") }

                    function c(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : C }

                    function f(e, t) {
                        return e + 22 + 75 * (26 > e) - ((0 != t) << 5) }

                    function d(e, t, n) {
                        var i = 0;
                        for (e = n ? O(e / E) : e >> 1, e += O(e / t); e > Z * M >> 1; i += C) e = O(e / Z);
                        return O(i + (Z + 1) * e / (e + A)) }

                    function p(e) {
                        var t, n, i, r, s, a, l, f, p, h, g = [],
                            m = e.length,
                            v = 0,
                            y = N,
                            w = T;
                        for (0 > (n = e.lastIndexOf(D)) && (n = 0), i = 0; n > i; ++i) e.charCodeAt(i) >= 128 && o("not-basic"), g.push(e.charCodeAt(i));
                        for (r = n > 0 ? n + 1 : 0; m > r;) {
                            for (s = v, a = 1, l = C; r >= m && o("invalid-input"), ((f = c(e.charCodeAt(r++))) >= C || f > O((x - v) / a)) && o("overflow"), v += f * a, !((p = w >= l ? S : l >= w + M ? M : l - w) > f); l += C) h = C - p, a > O(x / h) && o("overflow"), a *= h;
                            w = d(v - s, t = g.length + 1, 0 == s), O(v / t) > x - y && o("overflow"), y += O(v / t), v %= t, g.splice(v++, 0, y) }
                        return u(g) }

                    function h(e) {
                        var t, n, i, r, s, a, u, c, p, h, g, m, v, y, w, b = [];
                        for (m = (e = l(e)).length, t = N, n = 0, s = T, a = 0; m > a; ++a) 128 > (g = e[a]) && b.push(z(g));
                        for (i = r = b.length, r && b.push(D); m > i;) {
                            for (u = x, a = 0; m > a; ++a)(g = e[a]) >= t && u > g && (u = g);
                            for (u - t > O((x - n) / (v = i + 1)) && o("overflow"), n += (u - t) * v, t = u, a = 0; m > a; ++a)
                                if (g = e[a], t > g && ++n > x && o("overflow"), g == t) {
                                    for (c = n, p = C; !((h = s >= p ? S : p >= s + M ? M : p - s) > c); p += C) w = c - h, y = C - h, b.push(z(f(h + w % y, 0))), c = O(w / y);
                                    b.push(z(f(c, 0))), s = d(n, v, i == r), n = 0, ++i }++n, ++t }
                        return b.join("") }

                    function g(e) {
                        return a(e, function(e) {
                            return j.test(e) ? p(e.slice(4).toLowerCase()) : e }) }

                    function m(e) {
                        return a(e, function(e) {
                            return L.test(e) ? "xn--" + h(e) : e }) }
                    var v = "object" == typeof i && i && !i.nodeType && i,
                        y = "object" == typeof n && n && !n.nodeType && n,
                        w = "object" == typeof t && t;
                    (w.global === w || w.window === w || w.self === w) && (r = w);
                    var b, I, x = 2147483647,
                        C = 36,
                        S = 1,
                        M = 26,
                        A = 38,
                        E = 700,
                        T = 72,
                        N = 128,
                        D = "-",
                        j = /^xn--/,
                        L = /[^\x20-\x7E]/,
                        k = /[\x2E\u3002\uFF0E\uFF61]/g,
                        P = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                        Z = C - S,
                        O = Math.floor,
                        z = String.fromCharCode;
                    if (b = { version: "1.4.1", ucs2: { decode: l, encode: u }, decode: p, encode: h, toASCII: m, toUnicode: g }, 1)
                        if (v && y)
                            if (n.exports == v) y.exports = b;
                            else
                                for (I in b) b.hasOwnProperty(I) && (v[I] = b[I]);
                    else r.punycode = b;
                    else e("punycode", function() {
                        return b }) }(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 42: [function(e, t, n) {! function(e, n) { void 0 !== t && t.exports ? t.exports = n() : this.$script = n() }(0, function() {
                function e(e, t) {
                    for (var n = 0, i = e.length; i > n; ++n)
                        if (!t(e[n])) return l;
                    return 1 }

                function t(t, n) { e(t, function(e) {
                        return !n(e) }) }

                function n(o, s, a) {
                    function l(e) {
                        return e.call ? e() : d[e] }

                    function c() {
                        if (!--y) { d[v] = 1, m && m();
                            for (var n in h) e(n.split("|"), l) && !t(h[n], l) && (h[n] = []) } }
                    o = o[u] ? o : [o];
                    var f = s && s.call,
                        m = f ? s : a,
                        v = f ? o.join("") : s,
                        y = o.length;
                    return setTimeout(function() { t(o, function e(t, n) {
                            return null === t ? c() : (n || /^https?:\/\//.test(t) || !r || (t = -1 === t.indexOf(".js") ? r + t + ".js" : r + t), g[t] ? (v && (p[v] = 1), 2 == g[t] ? c() : setTimeout(function() { e(t, !0) }, 0)) : (g[t] = 1, v && (p[v] = 1), void i(t, c))) }) }, 0), n }

                function i(e, t) {
                    var n, i = s.createElement("script");
                    i.onload = i.onerror = i[f] = function() { i[c] && !/^c|loade/.test(i[c]) || n || (i.onload = i[f] = null, n = 1, g[e] = 2, t()) }, i.async = 1, i.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + o : e, a.insertBefore(i, a.lastChild) }
                var r, o, s = document,
                    a = s.getElementsByTagName("head")[0],
                    l = !1,
                    u = "push",
                    c = "readyState",
                    f = "onreadystatechange",
                    d = {},
                    p = {},
                    h = {},
                    g = {};
                return n.get = i, n.order = function(e, t, i) {! function r(o) { o = e.shift(), e.length ? n(o, r) : n(o, t, i) }() }, n.path = function(e) { r = e }, n.urlArgs = function(e) { o = e }, n.ready = function(i, r, o) {
                    var s = [];
                    return !t(i = i[u] ? i : [i], function(e) { d[e] || s[u](e) }) && e(i, function(e) {
                        return d[e] }) ? r() : function(e) { h[e] = h[e] || [], h[e][u](r), o && o(s) }(i.join("|")), n }, n.done = function(e) { n([null], e) }, n }) }, {}] }, {}, [29])(29) }),
function(e) {
    var t = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function() {
            return !0 }, onSlideBefore: function() {
            return !0 }, onSlideAfter: function() {
            return !0 }, onSlideNext: function() {
            return !0 }, onSlidePrev: function() {
            return !0 }, onSliderResize: function() {
            return !0 } };
    e.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() { e(this).bxSlider(n) }), this;
        var r = {},
            o = this,
            s = e(window).width(),
            a = e(window).height();
        if (!e(o).data("bxSlider")) {
            var l = function() { e(o).data("bxSlider") || (r.settings = e.extend({}, t, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = { index: r.settings.startSlide }, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode && function() {
                        for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < t.length; n++)
                            if (void 0 !== e.style[t[n]]) return r.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
                        return !1 }(), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function() { e(this).data("origStyle", e(this).attr("style")) }), u()) },
                u = function() {
                    var t = r.children.eq(r.settings.startSlide);
                    o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), r.viewport = o.parent(), r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"), r.loader = e('<div class="bx-loading" />'), r.viewport.prepend(r.loader), o.css({ width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%" : "auto", position: "relative" }), r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"), r.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), r.viewport.parent().css({ maxWidth: p() }), r.settings.pager || r.settings.controls || r.viewport.parent().css({ margin: "0 auto 0px" }), r.children.css({ float: "horizontal" === r.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), r.children.css("width", h()), "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" === r.settings.mode && (r.children.css({ position: "absolute", zIndex: 0, display: "none" }), r.children.eq(r.settings.startSlide).css({ zIndex: r.settings.slideZIndex, display: "block" })), r.controls.el = e('<div class="bx-controls" />'), r.settings.captions && S(), r.active.last = r.settings.startSlide === m() - 1, r.settings.video && o.fitVids(), ("all" === r.settings.preloadImages || r.settings.ticker) && (t = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && x(), r.settings.auto && r.settings.autoControls && C(), r.settings.pager && I(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), c(t, f) },
                c = function(t, n) {
                    var i = t.find('img:not([src=""]), iframe').length,
                        r = 0;
                    0 !== i ? t.find('img:not([src=""]), iframe').each(function() { e(this).one("load error", function() {++r === i && n() }).each(function() { this.complete && e(this).trigger("load") }) }) : n() },
                f = function() {
                    if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
                        var t = "vertical" === r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
                            n = r.children.slice(0, t).clone(!0).addClass("bx-clone"),
                            i = r.children.slice(-t).clone(!0).addClass("bx-clone");
                        r.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)), o.append(n).prepend(i) }
                    r.loader.remove(), y(), "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(d()), o.redrawSlider(), r.settings.onSliderLoad.call(o, r.active.index), r.initialized = !0, r.settings.responsive && e(window).bind("resize", F), r.settings.auto && r.settings.autoStart && (m() > 1 || r.settings.autoSlideForOnePage) && P(), r.settings.ticker && Z(), r.settings.pager && D(r.settings.startSlide), r.settings.controls && k(), r.settings.touchEnabled && !r.settings.ticker && R(), r.settings.keyboardEnabled && !r.settings.ticker && e(document).keydown(Y) },
                d = function() {
                    var t = 0,
                        n = e();
                    if ("vertical" === r.settings.mode || r.settings.adaptiveHeight)
                        if (r.carousel) {
                            var o = 1 === r.settings.moveSlides ? r.active.index : r.active.index * v();
                            for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i)) } else n = r.children.eq(r.active.index);
                    else n = r.children;
                    return "vertical" === r.settings.mode ? (n.each(function(n) { t += e(this).outerHeight() }), r.settings.slideMargin > 0 && (t += r.settings.slideMargin * (r.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                        return e(this).outerHeight(!1) }).get()), "border-box" === r.viewport.css("box-sizing") ? t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (t += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), t },
                p = function() {
                    var e = "100%";
                    return r.settings.slideWidth > 0 && (e = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), e },
                h = function() {
                    var e = r.settings.slideWidth,
                        t = r.viewport.width();
                    if (0 === r.settings.slideWidth || r.settings.slideWidth > t && !r.carousel || "vertical" === r.settings.mode) e = t;
                    else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
                        if (t > r.maxThreshold) return e;
                        t < r.minThreshold ? e = (t - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides : r.settings.shrinkItems && (e = Math.floor((t + r.settings.slideMargin) / Math.ceil((t + r.settings.slideMargin) / (e + r.settings.slideMargin)) - r.settings.slideMargin)) }
                    return e },
                g = function() {
                    var e = 1,
                        t = null;
                    return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? e = r.settings.minSlides : r.viewport.width() > r.maxThreshold ? e = r.settings.maxSlides : (t = r.children.first().width() + r.settings.slideMargin, e = Math.floor((r.viewport.width() + r.settings.slideMargin) / t)) : "vertical" === r.settings.mode && (e = r.settings.minSlides), e },
                m = function() {
                    var e = 0,
                        t = 0,
                        n = 0;
                    if (r.settings.moveSlides > 0)
                        if (r.settings.infiniteLoop) e = Math.ceil(r.children.length / v());
                        else
                            for (; t < r.children.length;) ++e, t = n + g(), n += r.settings.moveSlides <= g() ? r.settings.moveSlides : g();
                    else e = Math.ceil(r.children.length / g());
                    return e },
                v = function() {
                    return r.settings.moveSlides > 0 && r.settings.moveSlides <= g() ? r.settings.moveSlides : g() },
                y = function() {
                    var e, t, n;
                    r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (e = (t = r.children.last()).position(), w(-(e.left - (r.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (n = r.children.length - r.settings.minSlides, e = r.children.eq(n).position(), w(-e.top, "reset", 0)) : (e = r.children.eq(r.active.index * v()).position(), r.active.index === m() - 1 && (r.active.last = !0), void 0 !== e && ("horizontal" === r.settings.mode ? w(-e.left, "reset", 0) : "vertical" === r.settings.mode && w(-e.top, "reset", 0))) },
                w = function(t, n, i, s) {
                    var a, l;
                    r.usingCSS ? (l = "vertical" === r.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) { e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), j()) }) : j()) : "reset" === n ? o.css(r.animProp, l) : "ticker" === n && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, l), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(t) { e(t.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), w(s.resetValue, "reset", 0), O()) }) : (w(s.resetValue, "reset", 0), O()))) : ((a = {})[r.animProp] = t, "slide" === n ? o.animate(a, i, r.settings.easing, function() { j() }) : "reset" === n ? o.css(r.animProp, t) : "ticker" === n && o.animate(a, i, "linear", function() { w(s.resetValue, "reset", 0), O() })) },
                b = function() {
                    for (var t = "", n = "", i = m(), o = 0; o < i; o++) n = "", r.settings.buildPager && e.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (n = r.settings.buildPager(o), r.pagerEl.addClass("bx-custom-pager")) : (n = o + 1, r.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + n + "</a></div>";
                    r.pagerEl.html(t) },
                I = function() { r.settings.pagerCustom ? r.pagerEl = e(r.settings.pagerCustom) : (r.pagerEl = e('<div class="bx-pager" />'), r.settings.pagerSelector ? e(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), b()), r.pagerEl.on("click touchend", "a", N) },
                x = function() { r.controls.next = e('<a class="bx-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = e('<a class="bx-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click touchend", M), r.controls.prev.bind("click touchend", A), r.settings.nextSelector && e(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && e(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = e('<div class="bx-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl)) },
                C = function() { r.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = e('<div class="bx-controls-auto" />'), r.controls.autoEl.on("click", ".bx-start", E), r.controls.autoEl.on("click", ".bx-stop", T), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? e(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl), L(r.settings.autoStart ? "stop" : "start") },
                S = function() { r.children.each(function(t) {
                        var n = e(this).find("img:first").attr("title");
                        void 0 !== n && ("" + n).length && e(this).append('<div class="bx-caption"><span>' + n + "</span></div>") }) },
                M = function(e) { e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide()) },
                A = function(e) { e.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide()) },
                E = function(e) { o.startAuto(), e.preventDefault() },
                T = function(e) { o.stopAuto(), e.preventDefault() },
                N = function(t) {
                    var n, i;
                    t.preventDefault(), r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), void 0 !== (n = e(t.currentTarget)).attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index"))) !== r.active.index && o.goToSlide(i)) },
                D = function(t) {
                    var n = r.children.length;
                    if ("short" === r.settings.pagerType) return r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(t + 1 + r.settings.pagerShortSeparator + n);
                    r.pagerEl.find("a").removeClass("active"), r.pagerEl.each(function(n, i) { e(i).find("a").eq(t).addClass("active") }) },
                j = function() {
                    if (r.settings.infiniteLoop) {
                        var e = "";
                        0 === r.active.index ? e = r.children.eq(0).position() : r.active.index === m() - 1 && r.carousel ? e = r.children.eq((m() - 1) * v()).position() : r.active.index === r.children.length - 1 && (e = r.children.eq(r.children.length - 1).position()), e && ("horizontal" === r.settings.mode ? w(-e.left, "reset", 0) : "vertical" === r.settings.mode && w(-e.top, "reset", 0)) }
                    r.working = !1, r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) },
                L = function(e) { r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[e]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active")) },
                k = function() { 1 === m() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === m() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled"))) },
                P = function() {
                    if (r.settings.autoDelay > 0) setTimeout(o.startAuto, r.settings.autoDelay);
                    else o.startAuto(), e(window).focus(function() { o.startAuto() }).blur(function() { o.stopAuto() });
                    r.settings.autoHover && o.hover(function() { r.interval && (o.stopAuto(!0), r.autoPaused = !0) }, function() { r.autoPaused && (o.startAuto(!0), r.autoPaused = null) }) },
                Z = function() {
                    var t, n, i, s, a, l, u, c, f = 0; "next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("bx-clone")) : (o.prepend(r.children.clone().addClass("bx-clone")), t = r.children.first().position(), f = "horizontal" === r.settings.mode ? -t.left : -t.top), w(f, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && (r.usingCSS ? (s = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function() { n = o.css("-" + r.cssPrefix + "-transform"), i = parseFloat(n.split(",")[s]), w(i, "reset", 0) }, function() { c = 0, r.children.each(function(t) { c += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0) }), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(i))), O(u) })) : r.viewport.hover(function() { o.stop() }, function() { c = 0, r.children.each(function(t) { c += "horizontal" === r.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0) }), a = r.settings.speed / c, l = "horizontal" === r.settings.mode ? "left" : "top", u = a * (c - Math.abs(parseInt(o.css(l)))), O(u) })), O() },
                O = function(e) {
                    var t, n, i = e || r.settings.speed,
                        s = { left: 0, top: 0 },
                        a = { left: 0, top: 0 }; "next" === r.settings.autoDirection ? s = o.find(".bx-clone").first().position() : a = r.children.first().position(), t = "horizontal" === r.settings.mode ? -s.left : -s.top, n = "horizontal" === r.settings.mode ? -a.left : -a.top, w(t, "ticker", i, { resetValue: n }) },
                z = function(t) {
                    var n = e(window),
                        i = { top: n.scrollTop(), left: n.scrollLeft() },
                        r = t.offset();
                    return i.right = i.left + n.width(), i.bottom = i.top + n.height(), r.right = r.left + t.outerWidth(), r.bottom = r.top + t.outerHeight(), !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom) },
                Y = function(e) {
                    var t = document.activeElement.tagName.toLowerCase();
                    if (null == new RegExp(t, ["i"]).exec("input|textarea") && z(o)) {
                        if (39 === e.keyCode) return M(e), !1;
                        if (37 === e.keyCode) return A(e), !1 } },
                R = function() { r.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, r.viewport.bind("touchstart MSPointerDown pointerdown", W), r.viewport.on("click", ".bxslider a", function(e) { r.viewport.hasClass("click-disabled") && (e.preventDefault(), r.viewport.removeClass("click-disabled")) }) },
                W = function(e) {
                    if (r.controls.el.addClass("disabled"), r.working) e.preventDefault(), r.controls.el.removeClass("disabled");
                    else { r.touch.originalPos = o.position();
                        var t = e.originalEvent,
                            n = void 0 !== t.changedTouches ? t.changedTouches : [t];
                        r.touch.start.x = n[0].pageX, r.touch.start.y = n[0].pageY, r.viewport.get(0).setPointerCapture && (r.pointerId = t.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)), r.viewport.bind("touchmove MSPointerMove pointermove", H), r.viewport.bind("touchend MSPointerUp pointerup", U), r.viewport.bind("MSPointerCancel pointercancel", G) } },
                G = function(e) { w(r.touch.originalPos.left, "reset", 0), r.controls.el.removeClass("disabled"), r.viewport.unbind("MSPointerCancel pointercancel", G), r.viewport.unbind("touchmove MSPointerMove pointermove", H), r.viewport.unbind("touchend MSPointerUp pointerup", U), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId) },
                H = function(e) {
                    var t = e.originalEvent,
                        n = void 0 !== t.changedTouches ? t.changedTouches : [t],
                        i = Math.abs(n[0].pageX - r.touch.start.x),
                        o = Math.abs(n[0].pageY - r.touch.start.y),
                        s = 0,
                        a = 0;
                    3 * i > o && r.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * o > i && r.settings.preventDefaultSwipeY && e.preventDefault(), "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (a = n[0].pageX - r.touch.start.x, s = r.touch.originalPos.left + a) : (a = n[0].pageY - r.touch.start.y, s = r.touch.originalPos.top + a), w(s, "reset", 0)) },
                U = function(e) { r.viewport.unbind("touchmove MSPointerMove pointermove", H), r.controls.el.removeClass("disabled");
                    var t = e.originalEvent,
                        n = void 0 !== t.changedTouches ? t.changedTouches : [t],
                        i = 0,
                        s = 0;
                    r.touch.end.x = n[0].pageX, r.touch.end.y = n[0].pageY, "fade" === r.settings.mode ? (s = Math.abs(r.touch.start.x - r.touch.end.x)) >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : ("horizontal" === r.settings.mode ? (s = r.touch.end.x - r.touch.start.x, i = r.touch.originalPos.left) : (s = r.touch.end.y - r.touch.start.y, i = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && s > 0 || r.active.last && s < 0) ? w(i, "reset", 200) : Math.abs(s) >= r.settings.swipeThreshold ? (s < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : w(i, "reset", 200)), r.viewport.unbind("touchend MSPointerUp pointerup", U), r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId) },
                F = function(t) {
                    if (r.initialized)
                        if (r.working) window.setTimeout(F, 10);
                        else {
                            var n = e(window).width(),
                                i = e(window).height();
                            s === n && a === i || (s = n, a = i, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index)) } },
                B = function(e) {
                    var t = g();
                    r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(e, e + t).attr("aria-hidden", "false")) },
                J = function(e) {
                    return e < 0 ? r.settings.infiniteLoop ? m() - 1 : r.active.index : e >= m() ? r.settings.infiniteLoop ? 0 : r.active.index : e };
            return o.goToSlide = function(t, n) {
                var i, s, a, l, u = !0,
                    c = 0,
                    f = { left: 0, top: 0 },
                    p = null;
                if (r.oldIndex = r.active.index, r.active.index = J(t), !r.working && r.active.index !== r.oldIndex) {
                    if (r.working = !0, void 0 !== (u = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)) && !u) return r.active.index = r.oldIndex, void(r.working = !1); "next" === n ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1) : "prev" === n && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (u = !1)), r.active.last = r.active.index >= m() - 1, (r.settings.pager || r.settings.pagerCustom) && D(r.active.index), r.settings.controls && k(), "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== d() && r.viewport.animate({ height: d() }, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({ zIndex: 0 }), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function() { e(this).css("zIndex", r.settings.slideZIndex), j() })) : (r.settings.adaptiveHeight && r.viewport.height() !== d() && r.viewport.animate({ height: d() }, r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (f = (p = r.children.eq(r.children.length - 1)).position(), c = r.viewport.width() - p.outerWidth()) : (i = r.children.length - r.settings.minSlides, f = r.children.eq(i).position()) : r.carousel && r.active.last && "prev" === n ? (s = 1 === r.settings.moveSlides ? r.settings.maxSlides - v() : (m() - 1) * v() - (r.children.length - r.settings.maxSlides), f = (p = o.children(".bx-clone").eq(s)).position()) : "next" === n && 0 === r.active.index ? (f = o.find("> .bx-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : t >= 0 && (l = t * parseInt(v()), f = r.children.eq(l).position()), void 0 !== f ? (a = "horizontal" === r.settings.mode ? -(f.left - c) : -f.top, w(a, "slide", r.settings.speed)) : r.working = !1), r.settings.ariaHidden && B(r.active.index * v()) } }, o.goToNextSlide = function() {
                if (r.settings.infiniteLoop || !r.active.last) {
                    var e = parseInt(r.active.index) + 1;
                    o.goToSlide(e, "next") } }, o.goToPrevSlide = function() {
                if (r.settings.infiniteLoop || 0 !== r.active.index) {
                    var e = parseInt(r.active.index) - 1;
                    o.goToSlide(e, "prev") } }, o.startAuto = function(e) { r.interval || (r.interval = setInterval(function() { "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide() }, r.settings.pause), r.settings.autoControls && !0 !== e && L("stop")) }, o.stopAuto = function(e) { r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && !0 !== e && L("start")) }, o.getCurrentSlide = function() {
                return r.active.index }, o.getCurrentSlideElement = function() {
                return r.children.eq(r.active.index) }, o.getSlideElement = function(e) {
                return r.children.eq(e) }, o.getSlideCount = function() {
                return r.children.length }, o.isWorking = function() {
                return r.working }, o.redrawSlider = function() { r.children.add(o.find(".bx-clone")).outerWidth(h()), r.viewport.css("height", d()), r.settings.ticker || y(), r.active.last && (r.active.index = m() - 1), r.active.index >= m() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && (b(), D(r.active.index)), r.settings.ariaHidden && B(r.active.index * v()) }, o.destroySlider = function() { r.initialized && (r.initialized = !1, e(".bx-clone", this).remove(), r.children.each(function() { void 0 !== e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style") }), void 0 !== e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), e(".bx-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && e(window).unbind("resize", F), r.settings.keyboardEnabled && e(document).unbind("keydown", Y), e(this).removeData("bxSlider")) }, o.reloadSlider = function(t) { void 0 !== t && (n = t), o.destroySlider(), l(), e(o).data("bxSlider", this) }, l(), e(o).data("bxSlider", this), this } } }(jQuery),
function() {
    var e, t, n, i, r, o = function(e, t) {
            return function() {
                return e.apply(t, arguments) } },
        s = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1 };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, i;
            for (n in t) i = t[n], null == e[n] && (e[n] = i);
            return e }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e) }, e.prototype.createEvent = function(e, t, n, i) {
            var r;
            return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (r = document.createEventObject()).eventType = e : r.eventName = e, r }, e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0 }, e.prototype.addEvent = function(e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n }, e.prototype.removeEvent = function(e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t] }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, e }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() { this.keys = [], this.values = [] }
        return e.prototype.get = function(e) {
            var t, n, i, r;
            for (t = n = 0, i = (r = this.keys).length; n < i; t = ++n)
                if (r[t] === e) return this.values[t] }, e.prototype.set = function(e, t) {
            var n, i, r, o;
            for (n = i = 0, r = (o = this.keys).length; i < r; n = ++i)
                if (o[n] === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t) }, e }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return e.notSupported = !0, e.prototype.observe = function() {}, e }()), i = this.getComputedStyle || function(e, t) {
        return this.getPropertyValue = function(t) {
            var n;
            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
                return t.toUpperCase() }), (null != (n = e.currentStyle) ? n[t] : void 0) || null }, this }, r = /(\-([a-z]){1})/g, this.WOW = function() {
        function r(e) { null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return r.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, r.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, r.prototype.start = function() {
            var t, n, i, r;
            if (this.stopped = !1, this.boxes = function() {
                    var e, n, i, r;
                    for (r = [], e = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; e < n; e++) t = i[e], r.push(t);
                    return r }.call(this), this.all = function() {
                    var e, n, i, r;
                    for (r = [], e = 0, n = (i = this.boxes).length; e < n; e++) t = i[e], r.push(t);
                    return r }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (n = 0, i = (r = this.boxes).length; n < i; n++) t = r[n], this.applyStyle(t, !0);
            if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e(function(e) {
                return function(t) {
                    var n, i, r, o, s;
                    for (s = [], n = 0, i = t.length; n < i; n++) o = t[n], s.push(function() {
                        var e, t, n, i;
                        for (i = [], e = 0, t = (n = o.addedNodes || []).length; e < t; e++) r = n[e], i.push(this.doSync(r));
                        return i }.call(e));
                    return s } }(this)).observe(document.body, { childList: !0, subtree: !0 }) }, r.prototype.stop = function() {
            if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval) }, r.prototype.sync = function(t) {
            if (e.notSupported) return this.doSync(this.element) }, r.prototype.doSync = function(e) {
            var t, n, i, r, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (o = [], n = 0, i = (r = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n < i; n++) t = r[n], s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o } }, r.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e }, r.prototype.applyStyle = function(e, t) {
            var n, i, r;
            return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
                return function() {
                    return o.customStyle(e, t, i, n, r) } }(this)) }, r.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(e) {
                return window.requestAnimationFrame(e) } : function(e) {
                return e() } }(), r.prototype.resetStyle = function() {
            var e, t, n, i, r;
            for (r = [], t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t], r.push(e.style.visibility = "visible");
            return r }, r.prototype.resetAnimation = function(e) {
            var t;
            if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim() }, r.prototype.customStyle = function(e, t, n, i, r) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, { animationDuration: n }), i && this.vendorSet(e.style, { animationDelay: i }), r && this.vendorSet(e.style, { animationIterationCount: r }), this.vendorSet(e.style, { animationName: t ? "none" : this.cachedAnimationName(e) }), e }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
            var n, i, r, o;
            i = [];
            for (n in t) r = t[n], e["" + n] = r, i.push(function() {
                var t, i, s, a;
                for (a = [], t = 0, i = (s = this.vendors).length; t < i; t++) o = s[t], a.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                return a }.call(this));
            return i }, r.prototype.vendorCSS = function(e, t) {
            var n, r, o, s, a, l;
            for (s = (a = i(e)).getPropertyCSSValue(t), n = 0, r = (o = this.vendors).length; n < r; n++) l = o[n], s = s || a.getPropertyCSSValue("-" + l + "-" + t);
            return s }, r.prototype.animationName = function(e) {
            var t;
            try { t = this.vendorCSS(e, "animation-name").cssText } catch (n) { t = i(e).getPropertyValue("animation-name") }
            return "none" === t ? "" : t }, r.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e)) }, r.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e) }, r.prototype.scrollHandler = function() {
            return this.scrolled = !0 }, r.prototype.scrollCallback = function() {
            var e;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var t, n, i, r;
                    for (r = [], t = 0, n = (i = this.boxes).length; t < n; t++)(e = i[t]) && (this.isVisible(e) ? this.show(e) : r.push(e));
                    return r }.call(this), !this.boxes.length && !this.config.live)) return this.stop() }, r.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t }, r.prototype.isVisible = function(e) {
            var t, n, i, r, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, i <= r && t >= o }, r.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t }, r.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, r }() }.call(this), $(document).ready(function() {
    (new WOW).init(), $(".bxslider-1").bxSlider({ pager: !0, mode: "fade", pagerCustom: "#bx-pager", startSlide: 3, controls: !1 }), $(".bxslider-2").bxSlider({ pager: !1, slideWidth: 306, minSlides: 1, maxSlides: 3, speed: 400, responsive: !0, slideMargin: 10, swipeThreshold: 200, controls: !0 });
    var e = $(".nav__item");
    e.each(function(t, n) {
        (n = $(n)).on({ click: function(t) {!$(t.target).closest(".nav__drobdown").length && e.not(n.toggleClass("active")).removeClass("active") && t.preventDefault() } }) }), $(document).click(function(t) { $(t.target).closest(".nav__list").length || e.removeClass("active") }), $(".menu-trigger").click(function() { $(".nav__list").slideToggle(400) }), $(window).resize(function() { $(window).width() > 768 && $(".nav__list").removeAttr("style") }) }), $(".tab__list a").click(function(e) { e.preventDefault(), $(".tab__list .active").removeClass("active"), $(this).addClass("active");
    var t = $(this).attr("href");
    $(".tab").not(t).css({ display: "none" }), $(t).fadeIn(50) });
var hellopreloader = document.getElementById("hellopreloader_preload");
window.onload = function() { setTimeout(function() { fadeOutnojquery(hellopreloader) }, 400) };
