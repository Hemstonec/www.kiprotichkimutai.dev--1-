(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [483], {
        3454: function(e, r, n) {
            "use strict";
            var i, o;
            e.exports = (null == (i = n.g.process) ? void 0 : i.env) && "object" == typeof(null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(7663)
        },
        7663: function(e) {
            ! function() {
                var r = {
                        229: function(e) {
                            var r, n, i, o = e.exports = {};

                            function s() {
                                throw Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function l(e) {
                                if (r === setTimeout) return setTimeout(e, 0);
                                if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                                try {
                                    return r(e, 0)
                                } catch (n) {
                                    try {
                                        return r.call(null, e, 0)
                                    } catch (n) {
                                        return r.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    r = "function" == typeof setTimeout ? setTimeout : s
                                } catch (e) {
                                    r = s
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (e) {
                                    n = a
                                }
                            }();
                            var u = [],
                                c = !1,
                                h = -1;

                            function p() {
                                c && i && (c = !1, i.length ? u = i.concat(u) : h = -1, u.length && d())
                            }

                            function d() {
                                if (!c) {
                                    var e = l(p);
                                    c = !0;
                                    for (var r = u.length; r;) {
                                        for (i = u, u = []; ++h < r;) i && i[h].run();
                                        h = -1, r = u.length
                                    }
                                    i = null, c = !1,
                                        function(e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (r) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (r) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function f(e, r) {
                                this.fun = e, this.array = r
                            }

                            function m() {}
                            o.nextTick = function(e) {
                                var r = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                                u.push(new f(e, r)), 1 !== u.length || c || l(d)
                            }, f.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
                                return []
                            }, o.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, o.cwd = function() {
                                return "/"
                            }, o.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, o.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function i(e) {
                    var o = n[e];
                    if (void 0 !== o) return o.exports;
                    var s = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        r[e](s, s.exports, i), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return s.exports
                }
                i.ab = "//";
                var o = i(229);
                e.exports = o
            }()
        },
        9008: function(e, r, n) {
            e.exports = n(3121)
        },
        5459: function(e, r, n) {
            var i, o = n(3454);
            "undefined" != typeof self && self, e.exports = (i = n(7294), (() => {
                var e = {
                        7403: (e, r, n) => {
                            "use strict";
                            n.d(r, {
                                default: () => S
                            });
                            var i = n(4087),
                                o = n.n(i);
                            let s = function(e) {
                                    return RegExp(/<[a-z][\s\S]*>/i).test(e)
                                },
                                a = function(e) {
                                    var r = document.createElement("div");
                                    return r.innerHTML = e, r.childNodes
                                },
                                l = function(e, r) {
                                    return Math.floor(Math.random() * (r - e + 1)) + e
                                };
                            var u = "TYPE_CHARACTER",
                                c = "REMOVE_CHARACTER",
                                h = "REMOVE_ALL",
                                p = "REMOVE_LAST_VISIBLE_NODE",
                                d = "PAUSE_FOR",
                                f = "CALL_FUNCTION",
                                m = "ADD_HTML_TAG_ELEMENT",
                                v = "CHANGE_DELETE_SPEED",
                                y = "CHANGE_DELAY",
                                g = "CHANGE_CURSOR",
                                x = "PASTE_STRING",
                                b = "HTML_TAG";

                            function w(e, r) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    r && (i = i.filter(function(r) {
                                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                                    })), n.push.apply(n, i)
                                }
                                return n
                            }

                            function T(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var n = null != arguments[r] ? arguments[r] : {};
                                    r % 2 ? w(Object(n), !0).forEach(function(r) {
                                        P(e, r, n[r])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                                    })
                                }
                                return e
                            }

                            function E(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return A(e)
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(e) || function(e, r) {
                                    if (e) {
                                        if ("string" == typeof e) return A(e, r);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(e, r) : void 0
                                    }
                                }(e) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function A(e, r) {
                                (null == r || r > e.length) && (r = e.length);
                                for (var n = 0, i = Array(r); n < r; n++) i[n] = e[n];
                                return i
                            }

                            function P(e, r, n) {
                                return r in e ? Object.defineProperty(e, r, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[r] = n, e
                            }
                            let S = function() {
                                var e;

                                function r(e, n) {
                                    var w = this;
                                    if (function(e, r) {
                                            if (!(e instanceof r)) throw TypeError("Cannot call a class as a function")
                                        }(this, r), P(this, "state", {
                                            cursorAnimation: null,
                                            lastFrameTime: null,
                                            pauseUntil: null,
                                            eventQueue: [],
                                            eventLoop: null,
                                            eventLoopPaused: !1,
                                            reverseCalledEvents: [],
                                            calledEvents: [],
                                            visibleNodes: [],
                                            initialOptions: null,
                                            elements: {
                                                container: null,
                                                wrapper: document.createElement("span"),
                                                cursor: document.createElement("span")
                                            }
                                        }), P(this, "options", {
                                            strings: null,
                                            cursor: "|",
                                            delay: "natural",
                                            pauseFor: 1500,
                                            deleteSpeed: "natural",
                                            loop: !1,
                                            autoStart: !1,
                                            devMode: !1,
                                            skipAddStyles: !1,
                                            wrapperClassName: "Typewriter__wrapper",
                                            cursorClassName: "Typewriter__cursor",
                                            stringSplitter: null,
                                            onCreateTextNode: null,
                                            onRemoveNode: null
                                        }), P(this, "setupWrapperElement", function() {
                                            w.state.elements.container && (w.state.elements.wrapper.className = w.options.wrapperClassName, w.state.elements.cursor.className = w.options.cursorClassName, w.state.elements.cursor.innerHTML = w.options.cursor, w.state.elements.container.innerHTML = "", w.state.elements.container.appendChild(w.state.elements.wrapper), w.state.elements.container.appendChild(w.state.elements.cursor))
                                        }), P(this, "start", function() {
                                            return w.state.eventLoopPaused = !1, w.runEventLoop(), w
                                        }), P(this, "pause", function() {
                                            return w.state.eventLoopPaused = !0, w
                                        }), P(this, "stop", function() {
                                            return w.state.eventLoop && ((0, i.cancel)(w.state.eventLoop), w.state.eventLoop = null), w
                                        }), P(this, "pauseFor", function(e) {
                                            return w.addEventToQueue(d, {
                                                ms: e
                                            }), w
                                        }), P(this, "typeOutAllStrings", function() {
                                            return "string" == typeof w.options.strings ? (w.typeString(w.options.strings).pauseFor(w.options.pauseFor), w) : (w.options.strings.forEach(function(e) {
                                                w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)
                                            }), w)
                                        }), P(this, "typeString", function(e) {
                                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            if (s(e)) return w.typeOutHTMLString(e, r);
                                            if (e) {
                                                var n = (w.options || {}).stringSplitter,
                                                    i = "function" == typeof n ? n(e) : e.split("");
                                                w.typeCharacters(i, r)
                                            }
                                            return w
                                        }), P(this, "pasteString", function(e) {
                                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            return s(e) ? w.typeOutHTMLString(e, r, !0) : (e && w.addEventToQueue(x, {
                                                character: e,
                                                node: r
                                            }), w)
                                        }), P(this, "typeOutHTMLString", function(e) {
                                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                                n = arguments.length > 2 ? arguments[2] : void 0,
                                                i = a(e);
                                            if (i.length > 0)
                                                for (var o = 0; o < i.length; o++) {
                                                    var s = i[o],
                                                        l = s.innerHTML;
                                                    s && 3 !== s.nodeType ? (s.innerHTML = "", w.addEventToQueue(m, {
                                                        node: s,
                                                        parentNode: r
                                                    }), n ? w.pasteString(l, s) : w.typeString(l, s)) : s.textContent && (n ? w.pasteString(s.textContent, r) : w.typeString(s.textContent, r))
                                                }
                                            return w
                                        }), P(this, "deleteAll", function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                                            return w.addEventToQueue(h, {
                                                speed: e
                                            }), w
                                        }), P(this, "changeDeleteSpeed", function(e) {
                                            if (!e) throw Error("Must provide new delete speed");
                                            return w.addEventToQueue(v, {
                                                speed: e
                                            }), w
                                        }), P(this, "changeDelay", function(e) {
                                            if (!e) throw Error("Must provide new delay");
                                            return w.addEventToQueue(y, {
                                                delay: e
                                            }), w
                                        }), P(this, "changeCursor", function(e) {
                                            if (!e) throw Error("Must provide new cursor");
                                            return w.addEventToQueue(g, {
                                                cursor: e
                                            }), w
                                        }), P(this, "deleteChars", function(e) {
                                            if (!e) throw Error("Must provide amount of characters to delete");
                                            for (var r = 0; r < e; r++) w.addEventToQueue(c);
                                            return w
                                        }), P(this, "callFunction", function(e, r) {
                                            if (!e || "function" != typeof e) throw Error("Callbak must be a function");
                                            return w.addEventToQueue(f, {
                                                cb: e,
                                                thisArg: r
                                            }), w
                                        }), P(this, "typeCharacters", function(e) {
                                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                            if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                            return e.forEach(function(e) {
                                                w.addEventToQueue(u, {
                                                    character: e,
                                                    node: r
                                                })
                                            }), w
                                        }), P(this, "removeCharacters", function(e) {
                                            if (!e || !Array.isArray(e)) throw Error("Characters must be an array");
                                            return e.forEach(function() {
                                                w.addEventToQueue(c)
                                            }), w
                                        }), P(this, "addEventToQueue", function(e, r) {
                                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            return w.addEventToStateProperty(e, r, n, "eventQueue")
                                        }), P(this, "addReverseCalledEvent", function(e, r) {
                                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                            return w.options.loop ? w.addEventToStateProperty(e, r, n, "reverseCalledEvents") : w
                                        }), P(this, "addEventToStateProperty", function(e, r) {
                                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                i = arguments.length > 3 ? arguments[3] : void 0,
                                                o = {
                                                    eventName: e,
                                                    eventArgs: r || {}
                                                };
                                            return w.state[i] = n ? [o].concat(E(w.state[i])) : [].concat(E(w.state[i]), [o]), w
                                        }), P(this, "runEventLoop", function() {
                                            w.state.lastFrameTime || (w.state.lastFrameTime = Date.now());
                                            var e = Date.now(),
                                                r = e - w.state.lastFrameTime;
                                            if (!w.state.eventQueue.length) {
                                                if (!w.options.loop) return;
                                                w.state.eventQueue = E(w.state.calledEvents), w.state.calledEvents = [], w.options = T({}, w.state.initialOptions)
                                            }
                                            if (w.state.eventLoop = o()(w.runEventLoop), !w.state.eventLoopPaused) {
                                                if (w.state.pauseUntil) {
                                                    if (e < w.state.pauseUntil) return;
                                                    w.state.pauseUntil = null
                                                }
                                                var n, i = E(w.state.eventQueue),
                                                    s = i.shift();
                                                if (!(r <= (n = s.eventName === p || s.eventName === c ? "natural" === w.options.deleteSpeed ? l(40, 80) : w.options.deleteSpeed : "natural" === w.options.delay ? l(120, 160) : w.options.delay))) {
                                                    var a = s.eventName,
                                                        A = s.eventArgs;
                                                    switch (w.logInDevMode({
                                                        currentEvent: s,
                                                        state: w.state,
                                                        delay: n
                                                    }), a) {
                                                        case x:
                                                        case u:
                                                            var P = A.character,
                                                                S = A.node,
                                                                V = document.createTextNode(P),
                                                                C = V;
                                                            w.options.onCreateTextNode && "function" == typeof w.options.onCreateTextNode && (C = w.options.onCreateTextNode(P, V)), C && (S ? S.appendChild(C) : w.state.elements.wrapper.appendChild(C)), w.state.visibleNodes = [].concat(E(w.state.visibleNodes), [{
                                                                type: "TEXT_NODE",
                                                                character: P,
                                                                node: C
                                                            }]);
                                                            break;
                                                        case c:
                                                            i.unshift({
                                                                eventName: p,
                                                                eventArgs: {
                                                                    removingCharacterNode: !0
                                                                }
                                                            });
                                                            break;
                                                        case d:
                                                            var j = s.eventArgs.ms;
                                                            w.state.pauseUntil = Date.now() + parseInt(j);
                                                            break;
                                                        case f:
                                                            var M = s.eventArgs,
                                                                _ = M.cb,
                                                                O = M.thisArg;
                                                            _.call(O, {
                                                                elements: w.state.elements
                                                            });
                                                            break;
                                                        case m:
                                                            var k = s.eventArgs,
                                                                R = k.node,
                                                                D = k.parentNode;
                                                            D ? D.appendChild(R) : w.state.elements.wrapper.appendChild(R), w.state.visibleNodes = [].concat(E(w.state.visibleNodes), [{
                                                                type: b,
                                                                node: R,
                                                                parentNode: D || w.state.elements.wrapper
                                                            }]);
                                                            break;
                                                        case h:
                                                            var L = w.state.visibleNodes,
                                                                B = A.speed,
                                                                F = [];
                                                            B && F.push({
                                                                eventName: v,
                                                                eventArgs: {
                                                                    speed: B,
                                                                    temp: !0
                                                                }
                                                            });
                                                            for (var N = 0, I = L.length; N < I; N++) F.push({
                                                                eventName: p,
                                                                eventArgs: {
                                                                    removingCharacterNode: !1
                                                                }
                                                            });
                                                            B && F.push({
                                                                eventName: v,
                                                                eventArgs: {
                                                                    speed: w.options.deleteSpeed,
                                                                    temp: !0
                                                                }
                                                            }), i.unshift.apply(i, F);
                                                            break;
                                                        case p:
                                                            var U = s.eventArgs.removingCharacterNode;
                                                            if (w.state.visibleNodes.length) {
                                                                var $ = w.state.visibleNodes.pop(),
                                                                    z = $.type,
                                                                    H = $.node,
                                                                    W = $.character;
                                                                w.options.onRemoveNode && "function" == typeof w.options.onRemoveNode && w.options.onRemoveNode({
                                                                    node: H,
                                                                    character: W
                                                                }), H && H.parentNode.removeChild(H), z === b && U && i.unshift({
                                                                    eventName: p,
                                                                    eventArgs: {}
                                                                })
                                                            }
                                                            break;
                                                        case v:
                                                            w.options.deleteSpeed = s.eventArgs.speed;
                                                            break;
                                                        case y:
                                                            w.options.delay = s.eventArgs.delay;
                                                            break;
                                                        case g:
                                                            w.options.cursor = s.eventArgs.cursor, w.state.elements.cursor.innerHTML = s.eventArgs.cursor
                                                    }
                                                    w.options.loop && (s.eventName === p || s.eventArgs && s.eventArgs.temp || (w.state.calledEvents = [].concat(E(w.state.calledEvents), [s]))), w.state.eventQueue = i, w.state.lastFrameTime = e
                                                }
                                            }
                                        }), e) {
                                        if ("string" == typeof e) {
                                            var A = document.querySelector(e);
                                            if (!A) throw Error("Could not find container element");
                                            this.state.elements.container = A
                                        } else this.state.elements.container = e
                                    }
                                    n && (this.options = T(T({}, this.options), n)), this.state.initialOptions = T({}, this.options), this.init()
                                }
                                return e = [{
                                        key: "init",
                                        value: function() {
                                            var e;
                                            this.setupWrapperElement(), this.addEventToQueue(g, {
                                                cursor: this.options.cursor
                                            }, !0), this.addEventToQueue(h, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || ((e = document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")), document.head.appendChild(e), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start()
                                        }
                                    }, {
                                        key: "logInDevMode",
                                        value: function(e) {
                                            this.options.devMode && console.log(e)
                                        }
                                    }],
                                    function(e, r) {
                                        for (var n = 0; n < r.length; n++) {
                                            var i = r[n];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                        }
                                    }(r.prototype, e), Object.defineProperty(r, "prototype", {
                                        writable: !1
                                    }), r
                            }()
                        },
                        8552: (e, r, n) => {
                            var i = n(852)(n(5639), "DataView");
                            e.exports = i
                        },
                        1989: (e, r, n) => {
                            var i = n(1789),
                                o = n(401),
                                s = n(7667),
                                a = n(1327),
                                l = n(1866);

                            function u(e) {
                                var r = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++r < n;) {
                                    var i = e[r];
                                    this.set(i[0], i[1])
                                }
                            }
                            u.prototype.clear = i, u.prototype.delete = o, u.prototype.get = s, u.prototype.has = a, u.prototype.set = l, e.exports = u
                        },
                        8407: (e, r, n) => {
                            var i = n(7040),
                                o = n(4125),
                                s = n(2117),
                                a = n(7518),
                                l = n(4705);

                            function u(e) {
                                var r = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++r < n;) {
                                    var i = e[r];
                                    this.set(i[0], i[1])
                                }
                            }
                            u.prototype.clear = i, u.prototype.delete = o, u.prototype.get = s, u.prototype.has = a, u.prototype.set = l, e.exports = u
                        },
                        7071: (e, r, n) => {
                            var i = n(852)(n(5639), "Map");
                            e.exports = i
                        },
                        3369: (e, r, n) => {
                            var i = n(4785),
                                o = n(1285),
                                s = n(6e3),
                                a = n(9916),
                                l = n(5265);

                            function u(e) {
                                var r = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.clear(); ++r < n;) {
                                    var i = e[r];
                                    this.set(i[0], i[1])
                                }
                            }
                            u.prototype.clear = i, u.prototype.delete = o, u.prototype.get = s, u.prototype.has = a, u.prototype.set = l, e.exports = u
                        },
                        3818: (e, r, n) => {
                            var i = n(852)(n(5639), "Promise");
                            e.exports = i
                        },
                        8525: (e, r, n) => {
                            var i = n(852)(n(5639), "Set");
                            e.exports = i
                        },
                        8668: (e, r, n) => {
                            var i = n(3369),
                                o = n(619),
                                s = n(2385);

                            function a(e) {
                                var r = -1,
                                    n = null == e ? 0 : e.length;
                                for (this.__data__ = new i; ++r < n;) this.add(e[r])
                            }
                            a.prototype.add = a.prototype.push = o, a.prototype.has = s, e.exports = a
                        },
                        6384: (e, r, n) => {
                            var i = n(8407),
                                o = n(7465),
                                s = n(3779),
                                a = n(7599),
                                l = n(4758),
                                u = n(4309);

                            function c(e) {
                                var r = this.__data__ = new i(e);
                                this.size = r.size
                            }
                            c.prototype.clear = o, c.prototype.delete = s, c.prototype.get = a, c.prototype.has = l, c.prototype.set = u, e.exports = c
                        },
                        2705: (e, r, n) => {
                            var i = n(5639).Symbol;
                            e.exports = i
                        },
                        1149: (e, r, n) => {
                            var i = n(5639).Uint8Array;
                            e.exports = i
                        },
                        577: (e, r, n) => {
                            var i = n(852)(n(5639), "WeakMap");
                            e.exports = i
                        },
                        4963: e => {
                            e.exports = function(e, r) {
                                for (var n = -1, i = null == e ? 0 : e.length, o = 0, s = []; ++n < i;) {
                                    var a = e[n];
                                    r(a, n, e) && (s[o++] = a)
                                }
                                return s
                            }
                        },
                        4636: (e, r, n) => {
                            var i = n(2545),
                                o = n(5694),
                                s = n(1469),
                                a = n(4144),
                                l = n(5776),
                                u = n(6719),
                                c = Object.prototype.hasOwnProperty;
                            e.exports = function(e, r) {
                                var n = s(e),
                                    h = !n && o(e),
                                    p = !n && !h && a(e),
                                    d = !n && !h && !p && u(e),
                                    f = n || h || p || d,
                                    m = f ? i(e.length, String) : [],
                                    v = m.length;
                                for (var y in e) !r && !c.call(e, y) || f && ("length" == y || p && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || l(y, v)) || m.push(y);
                                return m
                            }
                        },
                        2488: e => {
                            e.exports = function(e, r) {
                                for (var n = -1, i = r.length, o = e.length; ++n < i;) e[o + n] = r[n];
                                return e
                            }
                        },
                        2908: e => {
                            e.exports = function(e, r) {
                                for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                                    if (r(e[n], n, e)) return !0;
                                return !1
                            }
                        },
                        8470: (e, r, n) => {
                            var i = n(7813);
                            e.exports = function(e, r) {
                                for (var n = e.length; n--;)
                                    if (i(e[n][0], r)) return n;
                                return -1
                            }
                        },
                        8866: (e, r, n) => {
                            var i = n(2488),
                                o = n(1469);
                            e.exports = function(e, r, n) {
                                var s = r(e);
                                return o(e) ? s : i(s, n(e))
                            }
                        },
                        4239: (e, r, n) => {
                            var i = n(2705),
                                o = n(9607),
                                s = n(2333),
                                a = i ? i.toStringTag : void 0;
                            e.exports = function(e) {
                                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : s(e)
                            }
                        },
                        9454: (e, r, n) => {
                            var i = n(4239),
                                o = n(7005);
                            e.exports = function(e) {
                                return o(e) && "[object Arguments]" == i(e)
                            }
                        },
                        939: (e, r, n) => {
                            var i = n(2492),
                                o = n(7005);
                            e.exports = function e(r, n, s, a, l) {
                                return r === n || (null != r && null != n && (o(r) || o(n)) ? i(r, n, s, a, e, l) : r != r && n != n)
                            }
                        },
                        2492: (e, r, n) => {
                            var i = n(6384),
                                o = n(7114),
                                s = n(8351),
                                a = n(6096),
                                l = n(4160),
                                u = n(1469),
                                c = n(4144),
                                h = n(6719),
                                p = "[object Arguments]",
                                d = "[object Array]",
                                f = "[object Object]",
                                m = Object.prototype.hasOwnProperty;
                            e.exports = function(e, r, n, v, y, g) {
                                var x = u(e),
                                    b = u(r),
                                    w = x ? d : l(e),
                                    T = b ? d : l(r),
                                    E = (w = w == p ? f : w) == f,
                                    A = (T = T == p ? f : T) == f,
                                    P = w == T;
                                if (P && c(e)) {
                                    if (!c(r)) return !1;
                                    x = !0, E = !1
                                }
                                if (P && !E) return g || (g = new i), x || h(e) ? o(e, r, n, v, y, g) : s(e, r, w, n, v, y, g);
                                if (!(1 & n)) {
                                    var S = E && m.call(e, "__wrapped__"),
                                        V = A && m.call(r, "__wrapped__");
                                    if (S || V) {
                                        var C = S ? e.value() : e,
                                            j = V ? r.value() : r;
                                        return g || (g = new i), y(C, j, n, v, g)
                                    }
                                }
                                return !!P && (g || (g = new i), a(e, r, n, v, y, g))
                            }
                        },
                        8458: (e, r, n) => {
                            var i = n(3560),
                                o = n(5346),
                                s = n(3218),
                                a = n(346),
                                l = /^\[object .+?Constructor\]$/,
                                u = Object.prototype,
                                c = Function.prototype.toString,
                                h = u.hasOwnProperty,
                                p = RegExp("^" + c.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                            e.exports = function(e) {
                                return !(!s(e) || o(e)) && (i(e) ? p : l).test(a(e))
                            }
                        },
                        8749: (e, r, n) => {
                            var i = n(4239),
                                o = n(1780),
                                s = n(7005),
                                a = {};
                            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                                return s(e) && o(e.length) && !!a[i(e)]
                            }
                        },
                        280: (e, r, n) => {
                            var i = n(5726),
                                o = n(6916),
                                s = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                if (!i(e)) return o(e);
                                var r = [];
                                for (var n in Object(e)) s.call(e, n) && "constructor" != n && r.push(n);
                                return r
                            }
                        },
                        2545: e => {
                            e.exports = function(e, r) {
                                for (var n = -1, i = Array(e); ++n < e;) i[n] = r(n);
                                return i
                            }
                        },
                        1717: e => {
                            e.exports = function(e) {
                                return function(r) {
                                    return e(r)
                                }
                            }
                        },
                        4757: e => {
                            e.exports = function(e, r) {
                                return e.has(r)
                            }
                        },
                        4429: (e, r, n) => {
                            var i = n(5639)["__core-js_shared__"];
                            e.exports = i
                        },
                        7114: (e, r, n) => {
                            var i = n(8668),
                                o = n(2908),
                                s = n(4757);
                            e.exports = function(e, r, n, a, l, u) {
                                var c = 1 & n,
                                    h = e.length,
                                    p = r.length;
                                if (h != p && !(c && p > h)) return !1;
                                var d = u.get(e),
                                    f = u.get(r);
                                if (d && f) return d == r && f == e;
                                var m = -1,
                                    v = !0,
                                    y = 2 & n ? new i : void 0;
                                for (u.set(e, r), u.set(r, e); ++m < h;) {
                                    var g = e[m],
                                        x = r[m];
                                    if (a) var b = c ? a(x, g, m, r, e, u) : a(g, x, m, e, r, u);
                                    if (void 0 !== b) {
                                        if (b) continue;
                                        v = !1;
                                        break
                                    }
                                    if (y) {
                                        if (!o(r, function(e, r) {
                                                if (!s(y, r) && (g === e || l(g, e, n, a, u))) return y.push(r)
                                            })) {
                                            v = !1;
                                            break
                                        }
                                    } else if (g !== x && !l(g, x, n, a, u)) {
                                        v = !1;
                                        break
                                    }
                                }
                                return u.delete(e), u.delete(r), v
                            }
                        },
                        8351: (e, r, n) => {
                            var i = n(2705),
                                o = n(1149),
                                s = n(7813),
                                a = n(7114),
                                l = n(8776),
                                u = n(1814),
                                c = i ? i.prototype : void 0,
                                h = c ? c.valueOf : void 0;
                            e.exports = function(e, r, n, i, c, p, d) {
                                switch (n) {
                                    case "[object DataView]":
                                        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) break;
                                        e = e.buffer, r = r.buffer;
                                    case "[object ArrayBuffer]":
                                        return !(e.byteLength != r.byteLength || !p(new o(e), new o(r)));
                                    case "[object Boolean]":
                                    case "[object Date]":
                                    case "[object Number]":
                                        return s(+e, +r);
                                    case "[object Error]":
                                        return e.name == r.name && e.message == r.message;
                                    case "[object RegExp]":
                                    case "[object String]":
                                        return e == r + "";
                                    case "[object Map]":
                                        var f = l;
                                    case "[object Set]":
                                        var m = 1 & i;
                                        if (f || (f = u), e.size != r.size && !m) break;
                                        var v = d.get(e);
                                        if (v) return v == r;
                                        i |= 2, d.set(e, r);
                                        var y = a(f(e), f(r), i, c, p, d);
                                        return d.delete(e), y;
                                    case "[object Symbol]":
                                        if (h) return h.call(e) == h.call(r)
                                }
                                return !1
                            }
                        },
                        6096: (e, r, n) => {
                            var i = n(8234),
                                o = Object.prototype.hasOwnProperty;
                            e.exports = function(e, r, n, s, a, l) {
                                var u = 1 & n,
                                    c = i(e),
                                    h = c.length;
                                if (h != i(r).length && !u) return !1;
                                for (var p = h; p--;) {
                                    var d = c[p];
                                    if (!(u ? d in r : o.call(r, d))) return !1
                                }
                                var f = l.get(e),
                                    m = l.get(r);
                                if (f && m) return f == r && m == e;
                                var v = !0;
                                l.set(e, r), l.set(r, e);
                                for (var y = u; ++p < h;) {
                                    var g = e[d = c[p]],
                                        x = r[d];
                                    if (s) var b = u ? s(x, g, d, r, e, l) : s(g, x, d, e, r, l);
                                    if (!(void 0 === b ? g === x || a(g, x, n, s, l) : b)) {
                                        v = !1;
                                        break
                                    }
                                    y || (y = "constructor" == d)
                                }
                                if (v && !y) {
                                    var w = e.constructor,
                                        T = r.constructor;
                                    w == T || !("constructor" in e) || !("constructor" in r) || "function" == typeof w && w instanceof w && "function" == typeof T && T instanceof T || (v = !1)
                                }
                                return l.delete(e), l.delete(r), v
                            }
                        },
                        1957: (e, r, n) => {
                            var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                            e.exports = i
                        },
                        8234: (e, r, n) => {
                            var i = n(8866),
                                o = n(9551),
                                s = n(3674);
                            e.exports = function(e) {
                                return i(e, s, o)
                            }
                        },
                        5050: (e, r, n) => {
                            var i = n(7019);
                            e.exports = function(e, r) {
                                var n = e.__data__;
                                return i(r) ? n["string" == typeof r ? "string" : "hash"] : n.map
                            }
                        },
                        852: (e, r, n) => {
                            var i = n(8458),
                                o = n(7801);
                            e.exports = function(e, r) {
                                var n = o(e, r);
                                return i(n) ? n : void 0
                            }
                        },
                        9607: (e, r, n) => {
                            var i = n(2705),
                                o = Object.prototype,
                                s = o.hasOwnProperty,
                                a = o.toString,
                                l = i ? i.toStringTag : void 0;
                            e.exports = function(e) {
                                var r = s.call(e, l),
                                    n = e[l];
                                try {
                                    e[l] = void 0;
                                    var i = !0
                                } catch (e) {}
                                var o = a.call(e);
                                return i && (r ? e[l] = n : delete e[l]), o
                            }
                        },
                        9551: (e, r, n) => {
                            var i = n(4963),
                                o = n(479),
                                s = Object.prototype.propertyIsEnumerable,
                                a = Object.getOwnPropertySymbols,
                                l = a ? function(e) {
                                    return null == e ? [] : i(a(e = Object(e)), function(r) {
                                        return s.call(e, r)
                                    })
                                } : o;
                            e.exports = l
                        },
                        4160: (e, r, n) => {
                            var i = n(8552),
                                o = n(7071),
                                s = n(3818),
                                a = n(8525),
                                l = n(577),
                                u = n(4239),
                                c = n(346),
                                h = "[object Map]",
                                p = "[object Promise]",
                                d = "[object Set]",
                                f = "[object WeakMap]",
                                m = "[object DataView]",
                                v = c(i),
                                y = c(o),
                                g = c(s),
                                x = c(a),
                                b = c(l),
                                w = u;
                            (i && w(new i(new ArrayBuffer(1))) != m || o && w(new o) != h || s && w(s.resolve()) != p || a && w(new a) != d || l && w(new l) != f) && (w = function(e) {
                                var r = u(e),
                                    n = "[object Object]" == r ? e.constructor : void 0,
                                    i = n ? c(n) : "";
                                if (i) switch (i) {
                                    case v:
                                        return m;
                                    case y:
                                        return h;
                                    case g:
                                        return p;
                                    case x:
                                        return d;
                                    case b:
                                        return f
                                }
                                return r
                            }), e.exports = w
                        },
                        7801: e => {
                            e.exports = function(e, r) {
                                return null == e ? void 0 : e[r]
                            }
                        },
                        1789: (e, r, n) => {
                            var i = n(4536);
                            e.exports = function() {
                                this.__data__ = i ? i(null) : {}, this.size = 0
                            }
                        },
                        401: e => {
                            e.exports = function(e) {
                                var r = this.has(e) && delete this.__data__[e];
                                return this.size -= r ? 1 : 0, r
                            }
                        },
                        7667: (e, r, n) => {
                            var i = n(4536),
                                o = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                var r = this.__data__;
                                if (i) {
                                    var n = r[e];
                                    return "__lodash_hash_undefined__" === n ? void 0 : n
                                }
                                return o.call(r, e) ? r[e] : void 0
                            }
                        },
                        1327: (e, r, n) => {
                            var i = n(4536),
                                o = Object.prototype.hasOwnProperty;
                            e.exports = function(e) {
                                var r = this.__data__;
                                return i ? void 0 !== r[e] : o.call(r, e)
                            }
                        },
                        1866: (e, r, n) => {
                            var i = n(4536);
                            e.exports = function(e, r) {
                                var n = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, n[e] = i && void 0 === r ? "__lodash_hash_undefined__" : r, this
                            }
                        },
                        5776: e => {
                            var r = /^(?:0|[1-9]\d*)$/;
                            e.exports = function(e, n) {
                                var i = typeof e;
                                return !!(n = null == n ? 9007199254740991 : n) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < n
                            }
                        },
                        7019: e => {
                            e.exports = function(e) {
                                var r = typeof e;
                                return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e
                            }
                        },
                        5346: (e, r, n) => {
                            var i, o = n(4429),
                                s = (i = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
                            e.exports = function(e) {
                                return !!s && s in e
                            }
                        },
                        5726: e => {
                            var r = Object.prototype;
                            e.exports = function(e) {
                                var n = e && e.constructor;
                                return e === ("function" == typeof n && n.prototype || r)
                            }
                        },
                        7040: e => {
                            e.exports = function() {
                                this.__data__ = [], this.size = 0
                            }
                        },
                        4125: (e, r, n) => {
                            var i = n(8470),
                                o = Array.prototype.splice;
                            e.exports = function(e) {
                                var r = this.__data__,
                                    n = i(r, e);
                                return !(n < 0 || (n == r.length - 1 ? r.pop() : o.call(r, n, 1), --this.size, 0))
                            }
                        },
                        2117: (e, r, n) => {
                            var i = n(8470);
                            e.exports = function(e) {
                                var r = this.__data__,
                                    n = i(r, e);
                                return n < 0 ? void 0 : r[n][1]
                            }
                        },
                        7518: (e, r, n) => {
                            var i = n(8470);
                            e.exports = function(e) {
                                return i(this.__data__, e) > -1
                            }
                        },
                        4705: (e, r, n) => {
                            var i = n(8470);
                            e.exports = function(e, r) {
                                var n = this.__data__,
                                    o = i(n, e);
                                return o < 0 ? (++this.size, n.push([e, r])) : n[o][1] = r, this
                            }
                        },
                        4785: (e, r, n) => {
                            var i = n(1989),
                                o = n(8407),
                                s = n(7071);
                            e.exports = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new i,
                                    map: new(s || o),
                                    string: new i
                                }
                            }
                        },
                        1285: (e, r, n) => {
                            var i = n(5050);
                            e.exports = function(e) {
                                var r = i(this, e).delete(e);
                                return this.size -= r ? 1 : 0, r
                            }
                        },
                        6e3: (e, r, n) => {
                            var i = n(5050);
                            e.exports = function(e) {
                                return i(this, e).get(e)
                            }
                        },
                        9916: (e, r, n) => {
                            var i = n(5050);
                            e.exports = function(e) {
                                return i(this, e).has(e)
                            }
                        },
                        5265: (e, r, n) => {
                            var i = n(5050);
                            e.exports = function(e, r) {
                                var n = i(this, e),
                                    o = n.size;
                                return n.set(e, r), this.size += n.size == o ? 0 : 1, this
                            }
                        },
                        8776: e => {
                            e.exports = function(e) {
                                var r = -1,
                                    n = Array(e.size);
                                return e.forEach(function(e, i) {
                                    n[++r] = [i, e]
                                }), n
                            }
                        },
                        4536: (e, r, n) => {
                            var i = n(852)(Object, "create");
                            e.exports = i
                        },
                        6916: (e, r, n) => {
                            var i = n(5569)(Object.keys, Object);
                            e.exports = i
                        },
                        1167: (e, r, n) => {
                            e = n.nmd(e);
                            var i = n(1957),
                                o = r && !r.nodeType && r,
                                s = o && e && !e.nodeType && e,
                                a = s && s.exports === o && i.process,
                                l = function() {
                                    try {
                                        return s && s.require && s.require("util").types || a && a.binding && a.binding("util")
                                    } catch (e) {}
                                }();
                            e.exports = l
                        },
                        2333: e => {
                            var r = Object.prototype.toString;
                            e.exports = function(e) {
                                return r.call(e)
                            }
                        },
                        5569: e => {
                            e.exports = function(e, r) {
                                return function(n) {
                                    return e(r(n))
                                }
                            }
                        },
                        5639: (e, r, n) => {
                            var i = n(1957),
                                o = "object" == typeof self && self && self.Object === Object && self,
                                s = i || o || Function("return this")();
                            e.exports = s
                        },
                        619: e => {
                            e.exports = function(e) {
                                return this.__data__.set(e, "__lodash_hash_undefined__"), this
                            }
                        },
                        2385: e => {
                            e.exports = function(e) {
                                return this.__data__.has(e)
                            }
                        },
                        1814: e => {
                            e.exports = function(e) {
                                var r = -1,
                                    n = Array(e.size);
                                return e.forEach(function(e) {
                                    n[++r] = e
                                }), n
                            }
                        },
                        7465: (e, r, n) => {
                            var i = n(8407);
                            e.exports = function() {
                                this.__data__ = new i, this.size = 0
                            }
                        },
                        3779: e => {
                            e.exports = function(e) {
                                var r = this.__data__,
                                    n = r.delete(e);
                                return this.size = r.size, n
                            }
                        },
                        7599: e => {
                            e.exports = function(e) {
                                return this.__data__.get(e)
                            }
                        },
                        4758: e => {
                            e.exports = function(e) {
                                return this.__data__.has(e)
                            }
                        },
                        4309: (e, r, n) => {
                            var i = n(8407),
                                o = n(7071),
                                s = n(3369);
                            e.exports = function(e, r) {
                                var n = this.__data__;
                                if (n instanceof i) {
                                    var a = n.__data__;
                                    if (!o || a.length < 199) return a.push([e, r]), this.size = ++n.size, this;
                                    n = this.__data__ = new s(a)
                                }
                                return n.set(e, r), this.size = n.size, this
                            }
                        },
                        346: e => {
                            var r = Function.prototype.toString;
                            e.exports = function(e) {
                                if (null != e) {
                                    try {
                                        return r.call(e)
                                    } catch (e) {}
                                    try {
                                        return e + ""
                                    } catch (e) {}
                                }
                                return ""
                            }
                        },
                        7813: e => {
                            e.exports = function(e, r) {
                                return e === r || e != e && r != r
                            }
                        },
                        5694: (e, r, n) => {
                            var i = n(9454),
                                o = n(7005),
                                s = Object.prototype,
                                a = s.hasOwnProperty,
                                l = s.propertyIsEnumerable,
                                u = i(function() {
                                    return arguments
                                }()) ? i : function(e) {
                                    return o(e) && a.call(e, "callee") && !l.call(e, "callee")
                                };
                            e.exports = u
                        },
                        1469: e => {
                            var r = Array.isArray;
                            e.exports = r
                        },
                        8612: (e, r, n) => {
                            var i = n(3560),
                                o = n(1780);
                            e.exports = function(e) {
                                return null != e && o(e.length) && !i(e)
                            }
                        },
                        4144: (e, r, n) => {
                            e = n.nmd(e);
                            var i = n(5639),
                                o = n(5062),
                                s = r && !r.nodeType && r,
                                a = s && e && !e.nodeType && e,
                                l = a && a.exports === s ? i.Buffer : void 0,
                                u = (l ? l.isBuffer : void 0) || o;
                            e.exports = u
                        },
                        8446: (e, r, n) => {
                            var i = n(939);
                            e.exports = function(e, r) {
                                return i(e, r)
                            }
                        },
                        3560: (e, r, n) => {
                            var i = n(4239),
                                o = n(3218);
                            e.exports = function(e) {
                                if (!o(e)) return !1;
                                var r = i(e);
                                return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
                            }
                        },
                        1780: e => {
                            e.exports = function(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }
                        },
                        3218: e => {
                            e.exports = function(e) {
                                var r = typeof e;
                                return null != e && ("object" == r || "function" == r)
                            }
                        },
                        7005: e => {
                            e.exports = function(e) {
                                return null != e && "object" == typeof e
                            }
                        },
                        6719: (e, r, n) => {
                            var i = n(8749),
                                o = n(1717),
                                s = n(1167),
                                a = s && s.isTypedArray,
                                l = a ? o(a) : i;
                            e.exports = l
                        },
                        3674: (e, r, n) => {
                            var i = n(4636),
                                o = n(280),
                                s = n(8612);
                            e.exports = function(e) {
                                return s(e) ? i(e) : o(e)
                            }
                        },
                        479: e => {
                            e.exports = function() {
                                return []
                            }
                        },
                        5062: e => {
                            e.exports = function() {
                                return !1
                            }
                        },
                        75: function(e) {
                            (function() {
                                var r, n, i, s;
                                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                                    return performance.now()
                                } : null != o && o.hrtime ? (e.exports = function() {
                                    return (r() - s) / 1e6
                                }, n = o.hrtime, s = (r = function() {
                                    var e;
                                    return 1e9 * (e = n())[0] + e[1]
                                })() - 1e9 * o.uptime()) : Date.now ? (e.exports = function() {
                                    return Date.now() - i
                                }, i = Date.now()) : (e.exports = function() {
                                    return (new Date).getTime() - i
                                }, i = (new Date).getTime())
                            }).call(this)
                        },
                        4087: (e, r, n) => {
                            for (var i = n(75), o = "undefined" == typeof window ? n.g : window, s = ["moz", "webkit"], a = "AnimationFrame", l = o["request" + a], u = o["cancel" + a] || o["cancelRequest" + a], c = 0; !l && c < s.length; c++) l = o[s[c] + "Request" + a], u = o[s[c] + "Cancel" + a] || o[s[c] + "CancelRequest" + a];
                            if (!l || !u) {
                                var h = 0,
                                    p = 0,
                                    d = [];
                                l = function(e) {
                                    if (0 === d.length) {
                                        var r = i(),
                                            n = Math.max(0, 16.666666666666668 - (r - h));
                                        h = n + r, setTimeout(function() {
                                            var e = d.slice(0);
                                            d.length = 0;
                                            for (var r = 0; r < e.length; r++)
                                                if (!e[r].cancelled) try {
                                                    e[r].callback(h)
                                                } catch (e) {
                                                    setTimeout(function() {
                                                        throw e
                                                    }, 0)
                                                }
                                        }, Math.round(n))
                                    }
                                    return d.push({
                                        handle: ++p,
                                        callback: e,
                                        cancelled: !1
                                    }), p
                                }, u = function(e) {
                                    for (var r = 0; r < d.length; r++) d[r].handle === e && (d[r].cancelled = !0)
                                }
                            }
                            e.exports = function(e) {
                                return l.call(o, e)
                            }, e.exports.cancel = function() {
                                u.apply(o, arguments)
                            }, e.exports.polyfill = function(e) {
                                e || (e = o), e.requestAnimationFrame = l, e.cancelAnimationFrame = u
                            }
                        },
                        8156: e => {
                            "use strict";
                            e.exports = i
                        }
                    },
                    r = {};

                function n(i) {
                    var o = r[i];
                    if (void 0 !== o) return o.exports;
                    var s = r[i] = {
                        id: i,
                        loaded: !1,
                        exports: {}
                    };
                    return e[i].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports
                }
                n.n = e => {
                    var r = e && e.__esModule ? () => e.default : () => e;
                    return n.d(r, {
                        a: r
                    }), r
                }, n.d = (e, r) => {
                    for (var i in r) n.o(r, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: r[i]
                    })
                }, n.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n.nmd = e => (e.paths = [], e.children || (e.children = []), e);
                var s = {};
                return (() => {
                    "use strict";
                    n.d(s, {
                        default: () => d
                    });
                    var e = n(8156),
                        r = n.n(e),
                        i = n(7403),
                        o = n(8446),
                        a = n.n(o);

                    function l(e) {
                        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function u(e, r) {
                        return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
                            return e.__proto__ = r, e
                        })(e, r)
                    }

                    function c(e) {
                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }

                    function h(e) {
                        return (h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = function(e) {
                        ! function(e, r) {
                            if ("function" != typeof r && null !== r) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(r && r.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), r && u(e, r)
                        }(p, e);
                        var n, o, s = (o = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, r = h(p);
                            if (o) {
                                var n = h(this).constructor;
                                e = Reflect.construct(r, arguments, n)
                            } else e = r.apply(this, arguments);
                            return function(e, r) {
                                if (r && ("object" === l(r) || "function" == typeof r)) return r;
                                if (void 0 !== r) throw TypeError("Derived constructors may only return object or undefined");
                                return c(e)
                            }(this, e)
                        });

                        function p() {
                            (function(e, r) {
                                if (!(e instanceof r)) throw TypeError("Cannot call a class as a function")
                            })(this, p);
                            for (var e, r, n, i, o = arguments.length, a = Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                            return r = c(e = s.call.apply(s, [this].concat(a))), i = {
                                instance: null
                            }, (n = "state") in r ? Object.defineProperty(r, n, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[n] = i, e
                        }
                        return n = [{
                                key: "componentDidMount",
                                value: function() {
                                    var e = this,
                                        r = new i.default(this.typewriter, this.props.options);
                                    this.setState({
                                        instance: r
                                    }, function() {
                                        var n = e.props.onInit;
                                        n && n(r)
                                    })
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function(e) {
                                    a()(this.props.options, e.options) || this.setState({
                                        instance: new i.default(this.typewriter, this.props.options)
                                    })
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.state.instance && this.state.instance.stop()
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this,
                                        n = this.props.component;
                                    return r().createElement(n, {
                                        ref: function(r) {
                                            return e.typewriter = r
                                        },
                                        className: "Typewriter",
                                        "data-testid": "typewriter-wrapper"
                                    })
                                }
                            }],
                            function(e, r) {
                                for (var n = 0; n < r.length; n++) {
                                    var i = r[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }(p.prototype, n), Object.defineProperty(p, "prototype", {
                                writable: !1
                            }), p
                    }(e.Component);
                    p.defaultProps = {
                        component: "div"
                    };
                    let d = p
                })(), s.default
            })())
        },
        7285: function(e, r, n) {
            "use strict";
            n.d(r, {
                E: function() {
                    return i3
                }
            });
            var i, o, s, a, l, u = n(7294);
            let c = (0, u.createContext)({
                    transformPagePoint: e => e,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                h = (0, u.createContext)({}),
                p = (0, u.createContext)(null),
                d = "undefined" != typeof document,
                f = d ? u.useLayoutEffect : u.useEffect,
                m = (0, u.createContext)({
                    strict: !1
                });

            function v(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function y(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function g(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let x = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function b(e) {
                return g(e.animate) || x.some(r => y(e[r]))
            }

            function w(e) {
                return Boolean(b(e) || e.variants)
            }

            function T(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let E = e => ({
                    isEnabled: r => e.some(e => !!r[e])
                }),
                A = {
                    measureLayout: E(["layout", "layoutId", "drag"]),
                    animation: E(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: E(["exit"]),
                    drag: E(["drag", "dragControls"]),
                    focus: E(["whileFocus"]),
                    hover: E(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: E(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: E(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: E(["whileInView", "onViewportEnter", "onViewportLeave"])
                };

            function P(e) {
                let r = (0, u.useRef)(null);
                return null === r.current && (r.current = e()), r.current
            }
            let S = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                V = 1,
                C = (0, u.createContext)({});
            class j extends u.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: e,
                        props: r
                    } = this.props;
                    return e && e.setProps(r), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let M = (0, u.createContext)({}),
                _ = Symbol.for("motionComponentSymbol"),
                O = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function k(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (O.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            let R = {},
                D = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                L = new Set(D);

            function B(e, {
                layout: r,
                layoutId: n
            }) {
                return L.has(e) || e.startsWith("origin") || (r || void 0 !== n) && (!!R[e] || "opacity" === e)
            }
            let F = e => !!(null == e ? void 0 : e.getVelocity),
                N = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                I = (e, r) => D.indexOf(e) - D.indexOf(r);

            function U(e) {
                return e.startsWith("--")
            }
            let $ = (e, r) => r && "number" == typeof e ? r.transform(e) : e,
                z = (e, r, n) => Math.min(Math.max(n, e), r),
                H = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                W = { ...H,
                    transform: e => z(0, 1, e)
                },
                Y = { ...H,
                    default: 1
                },
                q = e => Math.round(1e5 * e) / 1e5,
                G = /(-)?([\d]*\.?[\d])+/g,
                X = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                Q = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Z(e) {
                return "string" == typeof e
            }
            let K = e => ({
                    test: r => Z(r) && r.endsWith(e) && 1 === r.split(" ").length,
                    parse: parseFloat,
                    transform: r => `${r}${e}`
                }),
                J = K("deg"),
                tt = K("%"),
                te = K("px"),
                tr = K("vh"),
                tn = K("vw"),
                ti = { ...tt,
                    parse: e => tt.parse(e) / 100,
                    transform: e => tt.transform(100 * e)
                },
                to = { ...H,
                    transform: Math.round
                },
                ts = {
                    borderWidth: te,
                    borderTopWidth: te,
                    borderRightWidth: te,
                    borderBottomWidth: te,
                    borderLeftWidth: te,
                    borderRadius: te,
                    radius: te,
                    borderTopLeftRadius: te,
                    borderTopRightRadius: te,
                    borderBottomRightRadius: te,
                    borderBottomLeftRadius: te,
                    width: te,
                    maxWidth: te,
                    height: te,
                    maxHeight: te,
                    size: te,
                    top: te,
                    right: te,
                    bottom: te,
                    left: te,
                    padding: te,
                    paddingTop: te,
                    paddingRight: te,
                    paddingBottom: te,
                    paddingLeft: te,
                    margin: te,
                    marginTop: te,
                    marginRight: te,
                    marginBottom: te,
                    marginLeft: te,
                    rotate: J,
                    rotateX: J,
                    rotateY: J,
                    rotateZ: J,
                    scale: Y,
                    scaleX: Y,
                    scaleY: Y,
                    scaleZ: Y,
                    skew: J,
                    skewX: J,
                    skewY: J,
                    distance: te,
                    translateX: te,
                    translateY: te,
                    translateZ: te,
                    x: te,
                    y: te,
                    z: te,
                    perspective: te,
                    transformPerspective: te,
                    opacity: W,
                    originX: ti,
                    originY: ti,
                    originZ: te,
                    zIndex: to,
                    fillOpacity: W,
                    strokeOpacity: W,
                    numOctaves: to
                };

            function ta(e, r, n, i) {
                let {
                    style: o,
                    vars: s,
                    transform: a,
                    transformKeys: l,
                    transformOrigin: u
                } = e;
                l.length = 0;
                let c = !1,
                    h = !1,
                    p = !0;
                for (let e in r) {
                    let n = r[e];
                    if (U(e)) {
                        s[e] = n;
                        continue
                    }
                    let i = ts[e],
                        d = $(n, i);
                    if (L.has(e)) {
                        if (c = !0, a[e] = d, l.push(e), !p) continue;
                        n !== (i.default || 0) && (p = !1)
                    } else e.startsWith("origin") ? (h = !0, u[e] = d) : o[e] = d
                }
                if (!r.transform && (c || i ? o.transform = function({
                        transform: e,
                        transformKeys: r
                    }, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: i = !0
                    }, o, s) {
                        let a = "";
                        for (let n of (r.sort(I), r)) a += `${N[n]||n}(${e[n]}) `;
                        return n && !e.z && (a += "translateZ(0)"), a = a.trim(), s ? a = s(e, o ? "" : a) : i && o && (a = "none"), a
                    }(e, n, p, i) : o.transform && (o.transform = "none")), h) {
                    let {
                        originX: e = "50%",
                        originY: r = "50%",
                        originZ: n = 0
                    } = u;
                    o.transformOrigin = `${e} ${r} ${n}`
                }
            }
            let tl = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function tu(e, r, n) {
                for (let i in r) F(r[i]) || B(i, n) || (e[i] = r[i])
            }

            function tc(e, r, n) {
                let i = {},
                    o = function(e, r, n) {
                        let i = e.style || {},
                            o = {};
                        return tu(o, i, e), Object.assign(o, function({
                            transformTemplate: e
                        }, r, n) {
                            return (0, u.useMemo)(() => {
                                let i = tl();
                                return ta(i, r, {
                                    enableHardwareAcceleration: !n
                                }, e), Object.assign({}, i.vars, i.style)
                            }, [r])
                        }(e, r, n)), e.transformValues ? e.transformValues(o) : o
                    }(e, r, n);
                return e.drag && !1 !== e.dragListener && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = o, i
            }
            let th = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function tp(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || th.has(e)
            }
            let td = e => !tp(e);
            try {
                (i = require("@emotion/is-prop-valid").default) && (td = e => e.startsWith("on") ? !tp(e) : i(e))
            } catch (e) {}

            function tf(e, r, n) {
                return "string" == typeof e ? e : te.transform(r + n * e)
            }
            let tm = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tv = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function ty(e, {
                attrX: r,
                attrY: n,
                originX: i,
                originY: o,
                pathLength: s,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, c, h, p) {
                if (ta(e, u, c, p), h) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: d,
                    style: f,
                    dimensions: m
                } = e;
                d.transform && (m && (f.transform = d.transform), delete d.transform), m && (void 0 !== i || void 0 !== o || f.transform) && (f.transformOrigin = function(e, r, n) {
                    let i = tf(r, e.x, e.width),
                        o = tf(n, e.y, e.height);
                    return `${i} ${o}`
                }(m, void 0 !== i ? i : .5, void 0 !== o ? o : .5)), void 0 !== r && (d.x = r), void 0 !== n && (d.y = n), void 0 !== s && function(e, r, n = 1, i = 0, o = !0) {
                    e.pathLength = 1;
                    let s = o ? tm : tv;
                    e[s.offset] = te.transform(-i);
                    let a = te.transform(r),
                        l = te.transform(n);
                    e[s.array] = `${a} ${l}`
                }(d, s, a, l, !1)
            }
            let tg = () => ({ ...tl(),
                    attrs: {}
                }),
                tx = e => "string" == typeof e && "svg" === e.toLowerCase();

            function tb(e, r, n, i) {
                let o = (0, u.useMemo)(() => {
                    let n = tg();
                    return ty(n, r, {
                        enableHardwareAcceleration: !1
                    }, tx(i), e.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [r]);
                if (e.style) {
                    let r = {};
                    tu(r, e.style, e), o.style = { ...r,
                        ...o.style
                    }
                }
                return o
            }
            let tw = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tT(e, {
                style: r,
                vars: n
            }, i, o) {
                for (let s in Object.assign(e.style, r, o && o.getProjectionStyles(i)), n) e.style.setProperty(s, n[s])
            }
            let tE = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tA(e, r, n, i) {
                for (let n in tT(e, r, void 0, i), r.attrs) e.setAttribute(tE.has(n) ? n : tw(n), r.attrs[n])
            }

            function tP(e, r) {
                let {
                    style: n
                } = e, i = {};
                for (let o in n)(F(n[o]) || r.style && F(r.style[o]) || B(o, e)) && (i[o] = n[o]);
                return i
            }

            function tS(e, r) {
                let n = tP(e, r);
                for (let i in e)
                    if (F(e[i]) || F(r[i])) {
                        let r = "x" === i || "y" === i ? "attr" + i.toUpperCase() : i;
                        n[r] = e[i]
                    }
                return n
            }

            function tV(e, r, n, i = {}, o = {}) {
                return "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, i, o)), "string" == typeof r && (r = e.variants && e.variants[r]), "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, i, o)), r
            }
            let tC = e => Array.isArray(e),
                tj = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                tM = e => tC(e) ? e[e.length - 1] || 0 : e;

            function t_(e) {
                let r = F(e) ? e.get() : e;
                return tj(r) ? r.toValue() : r
            }
            let tO = e => (r, n) => {
                    let i = (0, u.useContext)(h),
                        o = (0, u.useContext)(p),
                        s = () => (function({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: r,
                            onMount: n
                        }, i, o, s) {
                            let a = {
                                latestValues: function(e, r, n, i) {
                                    let o = {},
                                        s = i(e, {});
                                    for (let e in s) o[e] = t_(s[e]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = e, u = b(e), c = w(e);
                                    r && c && !u && !1 !== e.inherit && (void 0 === a && (a = r.initial), void 0 === l && (l = r.animate));
                                    let h = !!n && !1 === n.initial;
                                    h = h || !1 === a;
                                    let p = h ? l : a;
                                    if (p && "boolean" != typeof p && !g(p)) {
                                        let r = Array.isArray(p) ? p : [p];
                                        r.forEach(r => {
                                            let n = tV(e, r);
                                            if (!n) return;
                                            let {
                                                transitionEnd: i,
                                                transition: s,
                                                ...a
                                            } = n;
                                            for (let e in a) {
                                                let r = a[e];
                                                if (Array.isArray(r)) {
                                                    let e = h ? r.length - 1 : 0;
                                                    r = r[e]
                                                }
                                                null !== r && (o[e] = r)
                                            }
                                            for (let e in i) o[e] = i[e]
                                        })
                                    }
                                    return o
                                }(i, o, s, e),
                                renderState: r()
                            };
                            return n && (a.mount = e => n(i, e, a)), a
                        })(e, r, i, o);
                    return n ? s() : P(s)
                },
                tk = {
                    useVisualState: tO({
                        scrapeMotionValuesFromProps: tS,
                        createRenderState: tg,
                        onMount: (e, r, {
                            renderState: n,
                            latestValues: i
                        }) => {
                            try {
                                n.dimensions = "function" == typeof r.getBBox ? r.getBBox() : r.getBoundingClientRect()
                            } catch (e) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            ty(n, i, {
                                enableHardwareAcceleration: !1
                            }, tx(r.tagName), e.transformTemplate), tA(r, n)
                        }
                    })
                },
                tR = {
                    useVisualState: tO({
                        scrapeMotionValuesFromProps: tP,
                        createRenderState: tl
                    })
                };

            function tD(e, r, n, i = {
                passive: !0
            }) {
                return e.addEventListener(r, n, i), () => e.removeEventListener(r, n)
            }

            function tL(e, r, n, i) {
                (0, u.useEffect)(() => {
                    let o = e.current;
                    if (n && o) return tD(o, r, n, i)
                }, [e, r, n, i])
            }(o = a || (a = {})).Animate = "animate", o.Hover = "whileHover", o.Tap = "whileTap", o.Drag = "whileDrag", o.Focus = "whileFocus", o.InView = "whileInView", o.Exit = "exit";
            let tB = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

            function tF(e, r = "page") {
                return {
                    point: {
                        x: e[r + "X"],
                        y: e[r + "Y"]
                    }
                }
            }
            let tN = e => r => tB(r) && e(r, tF(r));

            function tI(e, r, n, i) {
                return tD(e, r, tN(n), i)
            }

            function tU(e, r, n, i) {
                return tL(e, r, n && tN(n), i)
            }

            function t$(e) {
                let r = null;
                return () => {
                    let n = () => {
                        r = null
                    };
                    return null === r && (r = e, n)
                }
            }
            let tz = t$("dragHorizontal"),
                tH = t$("dragVertical");

            function tW(e) {
                let r = !1;
                if ("y" === e) r = tH();
                else if ("x" === e) r = tz();
                else {
                    let e = tz(),
                        n = tH();
                    e && n ? r = () => {
                        e(), n()
                    } : (e && e(), n && n())
                }
                return r
            }

            function tY() {
                let e = tW(!0);
                return !e || (e(), !1)
            }

            function tq(e, r, n, i) {
                return (o, s) => {
                    !("touch" === o.type || tY()) && (n && e.animationState && e.animationState.setActive(a.Hover, r), i && i(o, s))
                }
            }
            let tG = (e, r) => !!r && (e === r || tG(e, r.parentElement));

            function tX(e) {
                return (0, u.useEffect)(() => () => e(), [])
            }
            let tQ = (e, r) => n => r(e(n)),
                tZ = (...e) => e.reduce(tQ);

            function tK(e, r) {
                if (!r) return;
                let n = new PointerEvent("pointer" + e);
                r(n, tF(n))
            }
            let tJ = new WeakMap,
                t0 = new WeakMap,
                t1 = e => {
                    let r = tJ.get(e.target);
                    r && r(e)
                },
                t5 = e => {
                    e.forEach(t1)
                },
                t6 = {
                    some: 0,
                    all: 1
                };

            function t2(e, r, n, {
                root: i,
                margin: o,
                amount: s = "some",
                once: l
            }) {
                (0, u.useEffect)(() => {
                    if (!e || !n.current) return;
                    let u = {
                            root: null == i ? void 0 : i.current,
                            rootMargin: o,
                            threshold: "number" == typeof s ? s : t6[s]
                        },
                        c = e => {
                            let {
                                isIntersecting: i
                            } = e;
                            if (r.isInView === i || (r.isInView = i, l && !i && r.hasEnteredView)) return;
                            i && (r.hasEnteredView = !0), n.animationState && n.animationState.setActive(a.InView, i);
                            let o = n.getProps(),
                                s = i ? o.onViewportEnter : o.onViewportLeave;
                            s && s(e)
                        };
                    return function(e, r, n) {
                        let i = function({
                            root: e,
                            ...r
                        }) {
                            let n = e || document;
                            t0.has(n) || t0.set(n, {});
                            let i = t0.get(n),
                                o = JSON.stringify(r);
                            return i[o] || (i[o] = new IntersectionObserver(t5, {
                                root: e,
                                ...r
                            })), i[o]
                        }(r);
                        return tJ.set(e, n), i.observe(e), () => {
                            tJ.delete(e), i.unobserve(e)
                        }
                    }(n.current, u, c)
                }, [e, i, o, s])
            }

            function t3(e, r, n, {
                fallback: i = !0
            }) {
                (0, u.useEffect)(() => {
                    e && i && requestAnimationFrame(() => {
                        r.hasEnteredView = !0;
                        let {
                            onViewportEnter: e
                        } = n.getProps();
                        e && e(null), n.animationState && n.animationState.setActive(a.InView, !0)
                    })
                }, [e])
            }
            let t4 = e => r => (e(r), null),
                t9 = {
                    inView: t4(function({
                        visualElement: e,
                        whileInView: r,
                        onViewportEnter: n,
                        onViewportLeave: i,
                        viewport: o = {}
                    }) {
                        let s = (0, u.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(r || n || i);
                        o.once && s.current.hasEnteredView && (a = !1);
                        let l = "undefined" == typeof IntersectionObserver ? t3 : t2;
                        l(a, s.current, e, o)
                    }),
                    tap: t4(function({
                        onTap: e,
                        onTapStart: r,
                        onTapCancel: n,
                        whileTap: i,
                        visualElement: o,
                        ...s
                    }) {
                        let l = e || r || n || i,
                            c = (0, u.useRef)(!1),
                            h = (0, u.useRef)(null),
                            p = {
                                passive: !(r || e || n || s.onPointerDown)
                            };

                        function d() {
                            h.current && h.current(), h.current = null
                        }

                        function f() {
                            d(), c.current = !1;
                            let e = o.getProps();
                            return e.whileTap && o.animationState && o.animationState.setActive(a.Tap, !1), !tY()
                        }

                        function m(e, r) {
                            var n, i, s, a;
                            f() && (tG(o.current, e.target) ? null === (a = (s = o.getProps()).onTap) || void 0 === a || a.call(s, e, r) : null === (i = (n = o.getProps()).onTapCancel) || void 0 === i || i.call(n, e, r))
                        }

                        function v(e, r) {
                            var n, i;
                            f() && (null === (i = (n = o.getProps()).onTapCancel) || void 0 === i || i.call(n, e, r))
                        }

                        function y(e, r) {
                            var n;
                            let i = o.getProps();
                            i.whileTap && o.animationState && o.animationState.setActive(a.Tap, !0), null === (n = i.onTapStart) || void 0 === n || n.call(i, e, r)
                        }
                        let g = [Boolean(r), Boolean(e), Boolean(i), o],
                            x = (0, u.useCallback)((e, r) => {
                                d(), c.current || (c.current = !0, h.current = tZ(tI(window, "pointerup", m, p), tI(window, "pointercancel", v, p)), y(e, r))
                            }, g);
                        tU(o, "pointerdown", l ? x : void 0, p);
                        let b = (0, u.useCallback)(() => {
                            let e = tD(o.current, "keydown", e => {
                                    "Enter" !== e.key || c.current || (c.current = !0, h.current = tD(o.current, "keyup", () => {
                                        "Enter" === e.key && f() && tK("up", o.getProps().onTap)
                                    }, p), tK("down", y))
                                }),
                                r = tD(o.current, "blur", () => {
                                    e(), r(), c.current && tK("cancel", v)
                                })
                        }, g);
                        tL(o, "focus", l ? b : void 0), tX(d)
                    }),
                    focus: t4(function({
                        whileFocus: e,
                        visualElement: r
                    }) {
                        let n = (0, u.useRef)(!1),
                            {
                                animationState: i
                            } = r,
                            o = (0, u.useCallback)(() => {
                                let e = !1;
                                try {
                                    e = r.current.matches(":focus-visible")
                                } catch (r) {
                                    e = !0
                                }
                                e && i && (i.setActive(a.Focus, !0), n.current = !0)
                            }, [i]),
                            s = (0, u.useCallback)(() => {
                                n.current && i && (i.setActive(a.Focus, !1), n.current = !1)
                            }, [i]);
                        tL(r, "focus", e ? o : void 0), tL(r, "blur", e ? s : void 0)
                    }),
                    hover: t4(function({
                        onHoverStart: e,
                        onHoverEnd: r,
                        whileHover: n,
                        visualElement: i
                    }) {
                        tU(i, "pointerenter", (0, u.useMemo)(() => e || n ? tq(i, !0, Boolean(n), e) : void 0, [e, Boolean(n), i]), {
                            passive: !e
                        }), tU(i, "pointerleave", (0, u.useMemo)(() => r || n ? tq(i, !1, Boolean(n), r) : void 0, [e, Boolean(n), i]), {
                            passive: !r
                        })
                    })
                };

            function t7() {
                let e = (0, u.useContext)(p);
                if (null === e) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: n,
                    register: i
                } = e, o = (0, u.useId)();
                (0, u.useEffect)(() => i(o), []);
                let s = () => n && n(o);
                return !r && n ? [!1, s] : [!0]
            }

            function t8(e, r) {
                if (!Array.isArray(r)) return !1;
                let n = r.length;
                if (n !== e.length) return !1;
                for (let i = 0; i < n; i++)
                    if (r[i] !== e[i]) return !1;
                return !0
            }
            let et = e => /^\-?\d*\.?\d+$/.test(e),
                ee = e => /^0[^.\s]+$/.test(e),
                er = {
                    delta: 0,
                    timestamp: 0
                },
                en = 1 / 60 * 1e3,
                ei = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                eo = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(ei()), en),
                es = !0,
                ea = !1,
                el = !1,
                eu = ["read", "update", "preRender", "render", "postRender"],
                ec = eu.reduce((e, r) => (e[r] = function(e) {
                    let r = [],
                        n = [],
                        i = 0,
                        o = !1,
                        s = !1,
                        a = new WeakSet,
                        l = {
                            schedule: (e, s = !1, l = !1) => {
                                let u = l && o,
                                    c = u ? r : n;
                                return s && a.add(e), -1 === c.indexOf(e) && (c.push(e), u && o && (i = r.length)), e
                            },
                            cancel: e => {
                                let r = n.indexOf(e); - 1 !== r && n.splice(r, 1), a.delete(e)
                            },
                            process: u => {
                                if (o) {
                                    s = !0;
                                    return
                                }
                                if (o = !0, [r, n] = [n, r], n.length = 0, i = r.length)
                                    for (let n = 0; n < i; n++) {
                                        let i = r[n];
                                        i(u), a.has(i) && (l.schedule(i), e())
                                    }
                                o = !1, s && (s = !1, l.process(u))
                            }
                        };
                    return l
                }(() => ea = !0), e), {}),
                eh = eu.reduce((e, r) => {
                    let n = ec[r];
                    return e[r] = (e, r = !1, i = !1) => (ea || ev(), n.schedule(e, r, i)), e
                }, {}),
                ep = eu.reduce((e, r) => (e[r] = ec[r].cancel, e), {}),
                ed = eu.reduce((e, r) => (e[r] = () => ec[r].process(er), e), {}),
                ef = e => ec[e].process(er),
                em = e => {
                    ea = !1, er.delta = es ? en : Math.max(Math.min(e - er.timestamp, 40), 1), er.timestamp = e, el = !0, eu.forEach(ef), el = !1, ea && (es = !1, eo(em))
                },
                ev = () => {
                    ea = !0, es = !0, el || eo(em)
                };

            function ey(e, r) {
                -1 === e.indexOf(r) && e.push(r)
            }

            function eg(e, r) {
                let n = e.indexOf(r);
                n > -1 && e.splice(n, 1)
            }
            class ex {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return ey(this.subscriptions, e), () => eg(this.subscriptions, e)
                }
                notify(e, r, n) {
                    let i = this.subscriptions.length;
                    if (i) {
                        if (1 === i) this.subscriptions[0](e, r, n);
                        else
                            for (let o = 0; o < i; o++) {
                                let i = this.subscriptions[o];
                                i && i(e, r, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function eb(e, r) {
                return r ? e * (1e3 / r) : 0
            }
            let ew = e => !isNaN(parseFloat(e));
            class eT {
                constructor(e, r = {}) {
                    this.version = "9.0.2", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, r = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: n,
                            timestamp: i
                        } = er;
                        this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, eh.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => eh.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = ew(this.current), this.owner = r.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, r) {
                    this.events[e] || (this.events[e] = new ex);
                    let n = this.events[e].add(r);
                    return "change" === e ? () => {
                        n(), eh.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, r) {
                    this.passiveEffect = e, this.stopPassiveEffect = r
                }
                set(e, r = !0) {
                    r && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, r)
                }
                setWithVelocity(e, r, n) {
                    this.set(r), this.prev = e, this.timeDelta = n
                }
                jump(e) {
                    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? eb(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(r => {
                        this.hasAnimated = !0, this.animation = e(r) || null, this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    this.animation = null
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function eE(e, r) {
                return new eT(e, r)
            }
            let eA = (e, r) => n => Boolean(Z(n) && Q.test(n) && n.startsWith(e) || r && Object.prototype.hasOwnProperty.call(n, r)),
                eP = (e, r, n) => i => {
                    if (!Z(i)) return i;
                    let [o, s, a, l] = i.match(G);
                    return {
                        [e]: parseFloat(o),
                        [r]: parseFloat(s),
                        [n]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                },
                eS = e => z(0, 255, e),
                eV = { ...H,
                    transform: e => Math.round(eS(e))
                },
                eC = {
                    test: eA("rgb", "red"),
                    parse: eP("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: r,
                        blue: n,
                        alpha: i = 1
                    }) => "rgba(" + eV.transform(e) + ", " + eV.transform(r) + ", " + eV.transform(n) + ", " + q(W.transform(i)) + ")"
                },
                ej = {
                    test: eA("#"),
                    parse: function(e) {
                        let r = "",
                            n = "",
                            i = "",
                            o = "";
                        return e.length > 5 ? (r = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), o = e.substring(7, 9)) : (r = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), o = e.substring(4, 5), r += r, n += n, i += i, o += o), {
                            red: parseInt(r, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(i, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: eC.transform
                },
                eM = {
                    test: eA("hsl", "hue"),
                    parse: eP("hue", "saturation", "lightness"),
                    transform: ({
                        hue: e,
                        saturation: r,
                        lightness: n,
                        alpha: i = 1
                    }) => "hsla(" + Math.round(e) + ", " + tt.transform(q(r)) + ", " + tt.transform(q(n)) + ", " + q(W.transform(i)) + ")"
                },
                e_ = {
                    test: e => eC.test(e) || ej.test(e) || eM.test(e),
                    parse: e => eC.test(e) ? eC.parse(e) : eM.test(e) ? eM.parse(e) : ej.parse(e),
                    transform: e => Z(e) ? e : e.hasOwnProperty("red") ? eC.transform(e) : eM.transform(e)
                },
                eO = "${c}",
                ek = "${n}";

            function eR(e) {
                "number" == typeof e && (e = `${e}`);
                let r = [],
                    n = 0,
                    i = 0,
                    o = e.match(X);
                o && (n = o.length, e = e.replace(X, eO), r.push(...o.map(e_.parse)));
                let s = e.match(G);
                return s && (i = s.length, e = e.replace(G, ek), r.push(...s.map(H.parse))), {
                    values: r,
                    numColors: n,
                    numNumbers: i,
                    tokenised: e
                }
            }

            function eD(e) {
                return eR(e).values
            }

            function eL(e) {
                let {
                    values: r,
                    numColors: n,
                    tokenised: i
                } = eR(e), o = r.length;
                return e => {
                    let r = i;
                    for (let i = 0; i < o; i++) r = r.replace(i < n ? eO : ek, i < n ? e_.transform(e[i]) : q(e[i]));
                    return r
                }
            }
            let eB = e => "number" == typeof e ? 0 : e,
                eF = {
                    test: function(e) {
                        var r, n;
                        return isNaN(e) && Z(e) && ((null === (r = e.match(G)) || void 0 === r ? void 0 : r.length) || 0) + ((null === (n = e.match(X)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: eD,
                    createTransformer: eL,
                    getAnimatableNone: function(e) {
                        let r = eD(e),
                            n = eL(e);
                        return n(r.map(eB))
                    }
                },
                eN = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function eI(e) {
                let [r, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === r) return e;
                let [i] = n.match(G) || [];
                if (!i) return e;
                let o = n.replace(i, ""),
                    s = eN.has(r) ? 1 : 0;
                return i !== n && (s *= 100), r + "(" + s + o + ")"
            }
            let eU = /([a-z-]*)\(.*?\)/g,
                e$ = { ...eF,
                    getAnimatableNone: e => {
                        let r = e.match(eU);
                        return r ? r.map(eI).join(" ") : e
                    }
                },
                ez = { ...ts,
                    color: e_,
                    backgroundColor: e_,
                    outlineColor: e_,
                    fill: e_,
                    stroke: e_,
                    borderColor: e_,
                    borderTopColor: e_,
                    borderRightColor: e_,
                    borderBottomColor: e_,
                    borderLeftColor: e_,
                    filter: e$,
                    WebkitFilter: e$
                },
                eH = e => ez[e];

            function eW(e, r) {
                var n;
                let i = eH(e);
                return i !== e$ && (i = eF), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, r)
            }
            let eY = e => r => r.test(e),
                eq = [H, te, tt, J, tn, tr, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                eG = e => eq.find(eY(e)),
                eX = [...eq, e_, eF],
                eQ = e => eX.find(eY(e));

            function eZ(e, r, n) {
                let i = e.getProps();
                return tV(i, r, void 0 !== n ? n : i.custom, function(e) {
                    let r = {};
                    return e.values.forEach((e, n) => r[n] = e.get()), r
                }(e), function(e) {
                    let r = {};
                    return e.values.forEach((e, n) => r[n] = e.getVelocity()), r
                }(e))
            }

            function eK(e) {
                return Boolean(F(e) && e.add)
            }
            let eJ = "data-" + tw("framerAppearId");
            var e0 = function() {},
                e1 = function() {};
            let e5 = e => 1e3 * e,
                e6 = {
                    current: !1
                },
                e2 = e => r => r <= .5 ? e(2 * r) / 2 : (2 - e(2 * (1 - r))) / 2,
                e3 = e => r => 1 - e(1 - r),
                e4 = e => e * e,
                e9 = e3(e4),
                e7 = e2(e4),
                e8 = (e, r, n) => -n * e + n * r + e;

            function rt(e, r, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (r - e) * 6 * n : n < .5 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e
            }
            let re = (e, r, n) => {
                    let i = e * e;
                    return Math.sqrt(Math.max(0, n * (r * r - i) + i))
                },
                rr = [ej, eC, eM],
                rn = e => rr.find(r => r.test(e));

            function ri(e) {
                let r = rn(e);
                e1(Boolean(r), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let n = r.parse(e);
                return r === eM && (n = function({
                    hue: e,
                    saturation: r,
                    lightness: n,
                    alpha: i
                }) {
                    e /= 360, n /= 100;
                    let o = 0,
                        s = 0,
                        a = 0;
                    if (r /= 100) {
                        let i = n < .5 ? n * (1 + r) : n + r - n * r,
                            l = 2 * n - i;
                        o = rt(l, i, e + 1 / 3), s = rt(l, i, e), a = rt(l, i, e - 1 / 3)
                    } else o = s = a = n;
                    return {
                        red: Math.round(255 * o),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: i
                    }
                }(n)), n
            }
            let ro = (e, r) => {
                let n = ri(e),
                    i = ri(r),
                    o = { ...n
                    };
                return e => (o.red = re(n.red, i.red, e), o.green = re(n.green, i.green, e), o.blue = re(n.blue, i.blue, e), o.alpha = e8(n.alpha, i.alpha, e), eC.transform(o))
            };

            function rs(e, r) {
                return "number" == typeof e ? n => e8(e, r, n) : e_.test(e) ? ro(e, r) : ru(e, r)
            }
            let ra = (e, r) => {
                    let n = [...e],
                        i = n.length,
                        o = e.map((e, n) => rs(e, r[n]));
                    return e => {
                        for (let r = 0; r < i; r++) n[r] = o[r](e);
                        return n
                    }
                },
                rl = (e, r) => {
                    let n = { ...e,
                            ...r
                        },
                        i = {};
                    for (let o in n) void 0 !== e[o] && void 0 !== r[o] && (i[o] = rs(e[o], r[o]));
                    return e => {
                        for (let r in i) n[r] = i[r](e);
                        return n
                    }
                },
                ru = (e, r) => {
                    let n = eF.createTransformer(r),
                        i = eR(e),
                        o = eR(r),
                        s = i.numColors === o.numColors && i.numNumbers >= o.numNumbers;
                    return s ? tZ(ra(i.values, o.values), n) : (e0(!0, `Complex values '${e}' and '${r}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?r:e}`)
                },
                rc = (e, r, n) => {
                    let i = r - e;
                    return 0 === i ? 1 : (n - e) / i
                },
                rh = (e, r) => n => e8(e, r, n);

            function rp(e, r, {
                clamp: n = !0,
                ease: i,
                mixer: o
            } = {}) {
                let s = e.length;
                e1(s === r.length, "Both input and output ranges must be the same length"), e1(!i || !Array.isArray(i) || i.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), r = [...r].reverse());
                let a = function(e, r, n) {
                        let i = [],
                            o = n || function(e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return e_.test(e) ? ro : ru;
                                else if (Array.isArray(e)) return ra;
                                else if ("object" == typeof e) return rl;
                                return rh
                            }(e[0]),
                            s = e.length - 1;
                        for (let n = 0; n < s; n++) {
                            let s = o(e[n], e[n + 1]);
                            if (r) {
                                let e = Array.isArray(r) ? r[n] : r;
                                s = tZ(e, s)
                            }
                            i.push(s)
                        }
                        return i
                    }(r, i, o),
                    l = a.length,
                    u = r => {
                        let n = 0;
                        if (l > 1)
                            for (; n < e.length - 2 && !(r < e[n + 1]); n++);
                        let i = rc(e[n], e[n + 1], r);
                        return a[n](i)
                    };
                return n ? r => u(z(e[0], e[s - 1], r)) : u
            }
            let rd = e => e,
                rf = (e, r, n) => (((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e;

            function rm(e, r, n, i) {
                if (e === r && n === i) return rd;
                let o = r => (function(e, r, n, i, o) {
                    let s, a;
                    let l = 0;
                    do(s = rf(a = r + (n - r) / 2, i, o) - e) > 0 ? n = a : r = a; while (Math.abs(s) > 1e-7 && ++l < 12);
                    return a
                })(r, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : rf(o(e), r, i)
            }
            let rv = e => 1 - Math.sin(Math.acos(e)),
                ry = e3(rv),
                rg = e2(ry),
                rx = rm(.33, 1.53, .69, .99),
                rb = e3(rx),
                rw = e2(rb),
                rT = e => (e *= 2) < 1 ? .5 * rb(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                rE = {
                    linear: rd,
                    easeIn: e4,
                    easeInOut: e7,
                    easeOut: e9,
                    circIn: rv,
                    circInOut: rg,
                    circOut: ry,
                    backIn: rb,
                    backInOut: rw,
                    backOut: rx,
                    anticipate: rT
                },
                rA = e => {
                    if (Array.isArray(e)) {
                        e1(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [r, n, i, o] = e;
                        return rm(r, n, i, o)
                    }
                    return "string" == typeof e ? (e1(void 0 !== rE[e], `Invalid easing type '${e}'`), rE[e]) : e
                },
                rP = e => Array.isArray(e) && "number" != typeof e[0];

            function rS({
                keyframes: e,
                ease: r = e7,
                times: n,
                duration: i = 300
            }) {
                e = [...e];
                let o = rP(r) ? r.map(rA) : rA(r),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    a = (n && n.length === e.length ? n : function(e) {
                        let r = e.length;
                        return e.map((e, n) => 0 !== n ? n / (r - 1) : 0)
                    }(e)).map(e => e * i);

                function l() {
                    var r;
                    return rp(a, e, {
                        ease: Array.isArray(o) ? o : (r = e).map(() => o || e7).splice(0, r.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (s.value = u(e), s.done = e >= i, s),
                    flipTarget: () => {
                        e.reverse(), u = l()
                    }
                }
            }

            function rV(e, r) {
                return e * Math.sqrt(1 - r * r)
            }
            let rC = ["duration", "bounce"],
                rj = ["stiffness", "damping", "mass"];

            function rM(e, r) {
                return r.some(r => void 0 !== e[r])
            }

            function r_({
                keyframes: e,
                restDelta: r,
                restSpeed: n,
                ...i
            }) {
                let o = e[0],
                    s = e[e.length - 1],
                    a = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: c,
                        velocity: h,
                        duration: p,
                        isResolvedFromDuration: d
                    } = function(e) {
                        let r = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!rM(e, rj) && rM(e, rC)) {
                            let n = function({
                                duration: e = 800,
                                bounce: r = .25,
                                velocity: n = 0,
                                mass: i = 1
                            }) {
                                let o, s;
                                e0(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - r;
                                a = z(.05, 1, a), e = z(.01, 10, e / 1e3), a < 1 ? (o = r => {
                                    let i = r * a,
                                        o = i * e,
                                        s = rV(r, a);
                                    return .001 - (i - n) / s * Math.exp(-o)
                                }, s = r => {
                                    let i = r * a,
                                        s = i * e,
                                        l = Math.pow(a, 2) * Math.pow(r, 2) * e,
                                        u = rV(Math.pow(r, 2), a),
                                        c = -o(r) + .001 > 0 ? -1 : 1;
                                    return c * ((s * n + n - l) * Math.exp(-s)) / u
                                }) : (o = r => {
                                    let i = Math.exp(-r * e),
                                        o = (r - n) * e + 1;
                                    return -.001 + i * o
                                }, s = r => {
                                    let i = Math.exp(-r * e),
                                        o = (n - r) * (e * e);
                                    return i * o
                                });
                                let l = 5 / e,
                                    u = function(e, r, n) {
                                        let i = n;
                                        for (let n = 1; n < 12; n++) i -= e(i) / r(i);
                                        return i
                                    }(o, s, l);
                                if (e *= 1e3, isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let r = Math.pow(u, 2) * i;
                                    return {
                                        stiffness: r,
                                        damping: 2 * a * Math.sqrt(i * r),
                                        duration: e
                                    }
                                }
                            }(e);
                            (r = { ...r,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return r
                    }(i),
                    f = rO,
                    m = h ? -(h / 1e3) : 0,
                    v = u / (2 * Math.sqrt(l * c));

                function y() {
                    let e = s - o,
                        i = Math.sqrt(l / c) / 1e3,
                        a = 5 > Math.abs(e);
                    if (n || (n = a ? .01 : 2), r || (r = a ? .005 : .5), v < 1) {
                        let r = rV(i, v);
                        f = n => s - Math.exp(-v * i * n) * ((m + v * i * e) / r * Math.sin(r * n) + e * Math.cos(r * n))
                    } else if (1 === v) f = r => s - Math.exp(-i * r) * (e + (m + i * e) * r);
                    else {
                        let r = i * Math.sqrt(v * v - 1);
                        f = n => {
                            let o = Math.min(r * n, 300);
                            return s - Math.exp(-v * i * n) * ((m + v * i * e) * Math.sinh(o) + r * e * Math.cosh(o)) / r
                        }
                    }
                }
                return y(), {
                    next: e => {
                        let i = f(e);
                        if (d) a.done = e >= p;
                        else {
                            let o = m;
                            if (0 !== e) {
                                if (v < 1) {
                                    let r = Math.max(0, e - 5);
                                    o = eb(i - f(r), e - r)
                                } else o = 0
                            }
                            let l = Math.abs(o) <= n,
                                u = Math.abs(s - i) <= r;
                            a.done = l && u
                        }
                        return a.value = a.done ? s : i, a
                    },
                    flipTarget: () => {
                        m = -m, [o, s] = [s, o], y()
                    }
                }
            }
            r_.needsInterpolation = (e, r) => "string" == typeof e || "string" == typeof r;
            let rO = e => 0,
                rk = {
                    decay: function({
                        keyframes: e = [0],
                        velocity: r = 0,
                        power: n = .8,
                        timeConstant: i = 350,
                        restDelta: o = .5,
                        modifyTarget: s
                    }) {
                        let a = e[0],
                            l = {
                                done: !1,
                                value: a
                            },
                            u = n * r,
                            c = a + u,
                            h = void 0 === s ? c : s(c);
                        return h !== c && (u = h - a), {
                            next: e => {
                                let r = -u * Math.exp(-e / i);
                                return l.done = !(r > o || r < -o), l.value = l.done ? h : h + r, l
                            },
                            flipTarget: () => {}
                        }
                    },
                    keyframes: rS,
                    tween: rS,
                    spring: r_
                };

            function rR(e, r, n = 0) {
                return e - r - n
            }
            let rD = e => {
                let r = ({
                    delta: r
                }) => e(r);
                return {
                    start: () => eh.update(r, !0),
                    stop: () => ep.update(r)
                }
            };

            function rL({
                duration: e,
                driver: r = rD,
                elapsed: n = 0,
                repeat: i = 0,
                repeatType: o = "loop",
                repeatDelay: s = 0,
                keyframes: a,
                autoplay: l = !0,
                onPlay: u,
                onStop: c,
                onComplete: h,
                onRepeat: p,
                onUpdate: d,
                type: f = "keyframes",
                ...m
            }) {
                var v;
                let y, g;
                let x = n,
                    b = 0,
                    w = e,
                    T = !1,
                    E = !0,
                    A = rk[a.length > 2 ? "keyframes" : f] || rS,
                    P = a[0],
                    S = a[a.length - 1],
                    V = {
                        done: !1,
                        value: P
                    };
                (null === (v = A.needsInterpolation) || void 0 === v ? void 0 : v.call(A, P, S)) && (g = rp([0, 100], [P, S], {
                    clamp: !1
                }), a = [0, 100]);
                let C = A({ ...m,
                    duration: e,
                    keyframes: a
                });

                function j(e) {
                    if (E || (e = -e), n += e, T || (V = C.next(Math.max(0, n)), g && (V.value = g(V.value)), T = E ? V.done : n <= 0), d && d(V.value), T) {
                        if (0 === b && (w = void 0 !== w ? w : n), b < i) {
                            var r, a;
                            r = n, a = w, (E ? r >= a + s : r <= -s) && (b++, "reverse" === o ? n = function(e, r = 0, n = 0, i = !0) {
                                return i ? rR(r + -e, r, n) : r - (e - r) + n
                            }(n, w, s, E = b % 2 == 0) : (n = rR(n, w, s), "mirror" === o && C.flipTarget()), T = !1, p && p())
                        } else y && y.stop(), h && h()
                    }
                }
                return l && (u && u(), (y = r(j)).start()), {
                    stop: () => {
                        c && c(), y && y.stop()
                    },
                    set currentTime(t) {
                        n = x, j(t)
                    },
                    sample: r => {
                        n = x;
                        let i = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50,
                            o = 0;
                        for (j(0); o <= r;) {
                            let e = r - o;
                            j(Math.min(e, i)), o += i
                        }
                        return V
                    }
                }
            }
            let rB = ([e, r, n, i]) => `cubic-bezier(${e}, ${r}, ${n}, ${i})`,
                rF = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: rB([0, .65, .55, 1]),
                    circOut: rB([.55, 0, 1, .45]),
                    backIn: rB([.31, .01, .66, -.59]),
                    backOut: rB([.33, 1.53, .69, .99])
                },
                rN = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                rI = {},
                rU = {};
            for (let e in rN) rU[e] = () => (void 0 === rI[e] && (rI[e] = rN[e]()), rI[e]);
            let r$ = new Set(["opacity"]);

            function rz(e, r) {
                let n = performance.now(),
                    i = ({
                        timestamp: o
                    }) => {
                        let s = o - n;
                        s >= r && (ep.read(i), e(s - r))
                    };
                return eh.read(i, !0), () => ep.read(i)
            }
            let rH = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                rW = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                rY = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                rq = {
                    type: "keyframes",
                    duration: .8
                },
                rG = {
                    x: rH,
                    y: rH,
                    z: rH,
                    rotate: rH,
                    rotateX: rH,
                    rotateY: rH,
                    rotateZ: rH,
                    scaleX: rW,
                    scaleY: rW,
                    scale: rW,
                    opacity: rY,
                    backgroundColor: rY,
                    color: rY,
                    default: rW
                },
                rX = (e, {
                    keyframes: r
                }) => {
                    if (r.length > 2) return rq; {
                        let n = rG[e] || rG.default;
                        return n(r[1])
                    }
                },
                rQ = (e, r) => "zIndex" !== e && !!("number" == typeof r || Array.isArray(r) || "string" == typeof r && eF.test(r) && !r.startsWith("url("));

            function rZ(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function rK(e) {
                return "number" == typeof e ? 0 : eW("", e)
            }

            function rJ(e, r) {
                return e[r] || e.default || e
            }
            let r0 = (e, r, n, i = {}) => o => {
                let s = rJ(i, e) || {},
                    a = s.delay || i.delay || 0,
                    {
                        elapsed: l = 0
                    } = i;
                l -= e5(a);
                let u = function(e, r, n, i) {
                        let o = rQ(r, n),
                            s = void 0 !== i.from ? i.from : e.get();
                        return ("none" === s && o && "string" == typeof n ? s = eW(r, n) : rZ(s) && "string" == typeof n ? s = rK(n) : !Array.isArray(n) && rZ(n) && "string" == typeof s && (n = rK(s)), Array.isArray(n)) ? (null === n[0] && (n[0] = s), n) : [s, n]
                    }(r, e, n, s),
                    c = u[0],
                    h = u[u.length - 1],
                    p = rQ(e, c),
                    d = rQ(e, h);
                e0(p === d, `You are trying to animate ${e} from "${c}" to "${h}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${h} via the \`style\` property.`);
                let f = {
                    keyframes: u,
                    velocity: r.getVelocity(),
                    ...s,
                    elapsed: l,
                    onUpdate: e => {
                        r.set(e), s.onUpdate && s.onUpdate(e)
                    },
                    onComplete: () => {
                        o(), s.onComplete && s.onComplete()
                    }
                };
                if (!p || !d || e6.current || !1 === s.type) return function({
                    keyframes: e,
                    elapsed: r,
                    onUpdate: n,
                    onComplete: i
                }) {
                    let o = () => {
                        n && n(e[e.length - 1]), i && i()
                    };
                    return r ? {
                        stop: rz(o, -r)
                    } : o()
                }(f);
                if ("inertia" === s.type) return function({
                    keyframes: e,
                    velocity: r = 0,
                    min: n,
                    max: i,
                    power: o = .8,
                    timeConstant: s = 750,
                    bounceStiffness: a = 500,
                    bounceDamping: l = 10,
                    restDelta: u = 1,
                    modifyTarget: c,
                    driver: h,
                    onUpdate: p,
                    onComplete: d,
                    onStop: f
                }) {
                    let m;
                    let v = e[0];

                    function y(e) {
                        return void 0 !== n && e < n || void 0 !== i && e > i
                    }

                    function g(e) {
                        return void 0 === n ? i : void 0 === i ? n : Math.abs(n - e) < Math.abs(i - e) ? n : i
                    }

                    function x(e) {
                        null == m || m.stop(), m = rL({
                            keyframes: [0, 1],
                            velocity: 0,
                            ...e,
                            driver: h,
                            onUpdate: r => {
                                var n;
                                null == p || p(r), null === (n = e.onUpdate) || void 0 === n || n.call(e, r)
                            },
                            onComplete: d,
                            onStop: f
                        })
                    }

                    function b(e) {
                        x({
                            type: "spring",
                            stiffness: a,
                            damping: l,
                            restDelta: u,
                            ...e
                        })
                    }
                    if (y(v)) b({
                        velocity: r,
                        keyframes: [v, g(v)]
                    });
                    else {
                        let e, i, a = o * r + v;
                        void 0 !== c && (a = c(a));
                        let l = g(a),
                            h = l === n ? -1 : 1,
                            p = n => {
                                e = i, i = n, r = eb(n - e, er.delta), (1 === h && n > l || -1 === h && n < l) && b({
                                    keyframes: [n, l],
                                    velocity: r
                                })
                            };
                        x({
                            type: "decay",
                            keyframes: [v, 0],
                            velocity: r,
                            timeConstant: s,
                            power: o,
                            restDelta: u,
                            modifyTarget: c,
                            onUpdate: y(a) ? p : void 0
                        })
                    }
                    return {
                        stop: () => null == m ? void 0 : m.stop()
                    }
                }(f);
                ! function({
                    when: e,
                    delay: r,
                    delayChildren: n,
                    staggerChildren: i,
                    staggerDirection: o,
                    repeat: s,
                    repeatType: a,
                    repeatDelay: l,
                    from: u,
                    elapsed: c,
                    ...h
                }) {
                    return !!Object.keys(h).length
                }(s) && (f = { ...f,
                    ...rX(e, f)
                }), f.duration && (f.duration = e5(f.duration)), f.repeatDelay && (f.repeatDelay = e5(f.repeatDelay));
                let m = r.owner,
                    v = m && m.current;
                if (m && v instanceof HTMLElement && !(null == m ? void 0 : m.getProps().onUpdate)) {
                    let n = function(e, r, {
                        onUpdate: n,
                        onComplete: i,
                        ...o
                    }) {
                        var s;
                        let a = rU.waapi() && r$.has(r) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping;
                        if (!a) return !1;
                        let {
                            keyframes: l,
                            duration: u = 300,
                            elapsed: c = 0,
                            ease: h
                        } = o;
                        if ("spring" === o.type || !(!(s = o.ease) || Array.isArray(s) || "string" == typeof s && rF[s])) {
                            if (o.repeat === 1 / 0) return;
                            let e = rL({ ...o,
                                    elapsed: 0
                                }),
                                r = {
                                    done: !1,
                                    value: l[0]
                                },
                                n = [],
                                i = 0;
                            for (; !r.done && i < 2e4;) n.push((r = e.sample(i)).value), i += 10;
                            l = n, u = i - 10, h = "linear"
                        }
                        let p = function(e, r, n, {
                            delay: i = 0,
                            duration: o,
                            repeat: s = 0,
                            repeatType: a = "loop",
                            ease: l,
                            times: u
                        } = {}) {
                            return e.animate({
                                [r]: n,
                                offset: u
                            }, {
                                delay: i,
                                duration: o,
                                easing: function(e) {
                                    if (e) return Array.isArray(e) ? rB(e) : rF[e]
                                }(l),
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            })
                        }(e.owner.current, r, l, { ...o,
                            delay: -c,
                            duration: u,
                            ease: h
                        });
                        return p.onfinish = () => {
                            e.set(function(e, {
                                repeat: r,
                                repeatType: n = "loop"
                            }) {
                                let i = r && "loop" !== n && r % 2 == 1 ? 0 : e.length - 1;
                                return e[i]
                            }(l, o)), eh.update(() => p.cancel()), i && i()
                        }, {
                            get currentTime() {
                                return p.currentTime || 0
                            },
                            set currentTime(t) {
                                p.currentTime = t
                            },
                            stop: () => {
                                let {
                                    currentTime: r
                                } = p;
                                if (r) {
                                    let n = rL({ ...o,
                                        autoplay: !1
                                    });
                                    e.setWithVelocity(n.sample(r - 10).value, n.sample(r).value, 10)
                                }
                                eh.update(() => p.cancel())
                            }
                        }
                    }(r, e, f);
                    if (n) return n
                }
                return rL(f)
            };

            function r1(e, r, n = {}) {
                var i;
                let o = eZ(e, r, n.custom),
                    {
                        transition: s = e.getDefaultTransition() || {}
                    } = o || {};
                n.transitionOverride && (s = n.transitionOverride);
                let a = o ? () => r5(e, o, n) : () => Promise.resolve(),
                    l = (null === (i = e.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: a,
                            staggerDirection: l
                        } = s;
                        return function(e, r, n = 0, i = 0, o = 1, s) {
                            let a = [],
                                l = (e.variantChildren.size - 1) * i,
                                u = 1 === o ? (e = 0) => e * i : (e = 0) => l - e * i;
                            return Array.from(e.variantChildren).sort(r6).forEach((e, i) => {
                                e.notify("AnimationStart", r), a.push(r1(e, r, { ...s,
                                    delay: n + u(i)
                                }).then(() => e.notify("AnimationComplete", r)))
                            }), Promise.all(a)
                        }(e, r, o + i, a, l, n)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = s;
                if (!u) return Promise.all([a(), l(n.delay)]); {
                    let [e, r] = "beforeChildren" === u ? [a, l] : [l, a];
                    return e().then(r)
                }
            }

            function r5(e, r, {
                delay: n = 0,
                transitionOverride: i,
                type: o
            } = {}) {
                var s;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: l,
                    ...u
                } = e.makeTargetAnimatable(r), c = e.getValue("willChange");
                i && (a = i);
                let h = [],
                    p = o && (null === (s = e.animationState) || void 0 === s ? void 0 : s.getState()[o]);
                for (let r in u) {
                    let i = e.getValue(r),
                        o = u[r];
                    if (!i || void 0 === o || p && function({
                            protectedKeys: e,
                            needsAnimating: r
                        }, n) {
                            let i = e.hasOwnProperty(n) && !0 !== r[n];
                            return r[n] = !1, i
                        }(p, r)) continue;
                    let s = {
                        delay: n,
                        elapsed: 0,
                        ...a
                    };
                    if (window.HandoffAppearAnimations && !i.hasAnimated) {
                        let n = e.getProps()[eJ];
                        n && (s.elapsed = window.HandoffAppearAnimations(n, r, i, eh))
                    }
                    let l = i.start(r0(r, i, o, e.shouldReduceMotion && L.has(r) ? {
                        type: !1
                    } : s));
                    eK(c) && (c.add(r), l = l.then(() => c.remove(r))), h.push(l)
                }
                return Promise.all(h).then(() => {
                    l && function(e, r) {
                        let n = eZ(e, r),
                            {
                                transitionEnd: i = {},
                                transition: o = {},
                                ...s
                            } = n ? e.makeTargetAnimatable(n, !1) : {};
                        for (let r in s = { ...s,
                                ...i
                            }) {
                            var a;
                            let n = tM(s[r]);
                            a = r, e.hasValue(a) ? e.getValue(a).set(n) : e.addValue(a, eE(n))
                        }
                    }(e, l)
                })
            }

            function r6(e, r) {
                return e.sortNodePosition(r)
            }
            let r2 = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                r3 = [...r2].reverse(),
                r4 = r2.length;

            function r9(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let r7 = {
                    animation: t4(({
                        visualElement: e,
                        animate: r
                    }) => {
                        e.animationState || (e.animationState = function(e) {
                            let r = r => Promise.all(r.map(({
                                    animation: r,
                                    options: n
                                }) => (function(e, r, n = {}) {
                                    let i;
                                    if (e.notify("AnimationStart", r), Array.isArray(r)) {
                                        let o = r.map(r => r1(e, r, n));
                                        i = Promise.all(o)
                                    } else if ("string" == typeof r) i = r1(e, r, n);
                                    else {
                                        let o = "function" == typeof r ? eZ(e, r, n.custom) : r;
                                        i = r5(e, o, n)
                                    }
                                    return i.then(() => e.notify("AnimationComplete", r))
                                })(e, r, n))),
                                n = {
                                    [a.Animate]: r9(!0),
                                    [a.InView]: r9(),
                                    [a.Hover]: r9(),
                                    [a.Tap]: r9(),
                                    [a.Drag]: r9(),
                                    [a.Focus]: r9(),
                                    [a.Exit]: r9()
                                },
                                i = !0,
                                o = (r, n) => {
                                    let i = eZ(e, n);
                                    if (i) {
                                        let {
                                            transition: e,
                                            transitionEnd: n,
                                            ...o
                                        } = i;
                                        r = { ...r,
                                            ...o,
                                            ...n
                                        }
                                    }
                                    return r
                                };

                            function s(s, a) {
                                let l = e.getProps(),
                                    u = e.getVariantContext(!0) || {},
                                    c = [],
                                    h = new Set,
                                    p = {},
                                    d = 1 / 0;
                                for (let r = 0; r < r4; r++) {
                                    var f;
                                    let m = r3[r],
                                        v = n[m],
                                        x = void 0 !== l[m] ? l[m] : u[m],
                                        b = y(x),
                                        w = m === a ? v.isActive : null;
                                    !1 === w && (d = r);
                                    let T = x === u[m] && x !== l[m] && b;
                                    if (T && i && e.manuallyAnimateOnMount && (T = !1), v.protectedKeys = { ...p
                                        }, !v.isActive && null === w || !x && !v.prevProp || g(x) || "boolean" == typeof x) continue;
                                    let E = (f = v.prevProp, "string" == typeof x ? x !== f : !!Array.isArray(x) && !t8(x, f)),
                                        A = E || m === a && v.isActive && !T && b || r > d && b,
                                        P = Array.isArray(x) ? x : [x],
                                        S = P.reduce(o, {});
                                    !1 === w && (S = {});
                                    let {
                                        prevResolvedValues: V = {}
                                    } = v, C = { ...V,
                                        ...S
                                    }, j = e => {
                                        A = !0, h.delete(e), v.needsAnimating[e] = !0
                                    };
                                    for (let e in C) {
                                        let r = S[e],
                                            n = V[e];
                                        p.hasOwnProperty(e) || (r !== n ? tC(r) && tC(n) ? !t8(r, n) || E ? j(e) : v.protectedKeys[e] = !0 : void 0 !== r ? j(e) : h.add(e) : void 0 !== r && h.has(e) ? j(e) : v.protectedKeys[e] = !0)
                                    }
                                    v.prevProp = x, v.prevResolvedValues = S, v.isActive && (p = { ...p,
                                        ...S
                                    }), i && e.blockInitialAnimation && (A = !1), A && !T && c.push(...P.map(e => ({
                                        animation: e,
                                        options: {
                                            type: m,
                                            ...s
                                        }
                                    })))
                                }
                                if (h.size) {
                                    let r = {};
                                    h.forEach(n => {
                                        let i = e.getBaseTarget(n);
                                        void 0 !== i && (r[n] = i)
                                    }), c.push({
                                        animation: r
                                    })
                                }
                                let m = Boolean(c.length);
                                return i && !1 === l.initial && !e.manuallyAnimateOnMount && (m = !1), i = !1, m ? r(c) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(r, i, o) {
                                    var a;
                                    if (n[r].isActive === i) return Promise.resolve();
                                    null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                        var n;
                                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(r, i)
                                    }), n[r].isActive = i;
                                    let l = s(o, r);
                                    for (let e in n) n[e].protectedKeys = {};
                                    return l
                                },
                                setAnimateFunction: function(n) {
                                    r = n(e)
                                },
                                getState: () => n
                            }
                        }(e)), g(r) && (0, u.useEffect)(() => r.subscribe(e), [r])
                    }),
                    exit: t4(e => {
                        let {
                            custom: r,
                            visualElement: n
                        } = e, [i, o] = t7(), s = (0, u.useContext)(p);
                        (0, u.useEffect)(() => {
                            n.isPresent = i;
                            let e = n.animationState && n.animationState.setActive(a.Exit, !i, {
                                custom: s && s.custom || r
                            });
                            e && !i && e.then(o)
                        }, [i])
                    })
                },
                r8 = (e, r) => Math.abs(e - r);
            class nt {
                constructor(e, r, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = nn(this.lastMoveEventInfo, this.history),
                                r = null !== this.startEvent,
                                n = function(e, r) {
                                    let n = r8(e.x, r.x),
                                        i = r8(e.y, r.y);
                                    return Math.sqrt(n ** 2 + i ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!r && !n) return;
                            let {
                                point: i
                            } = e, {
                                timestamp: o
                            } = er;
                            this.history.push({ ...i,
                                timestamp: o
                            });
                            let {
                                onStart: s,
                                onMove: a
                            } = this.handlers;
                            r || (s && s(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, r) => {
                            this.lastMoveEvent = e, this.lastMoveEventInfo = ne(r, this.transformPagePoint), eh.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, r) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: n,
                                onSessionEnd: i
                            } = this.handlers, o = nn("pointercancel" === e.type ? this.lastMoveEventInfo : ne(r, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, o), i && i(e, o)
                        }, !tB(e)) return;
                    this.handlers = r, this.transformPagePoint = n;
                    let i = tF(e),
                        o = ne(i, this.transformPagePoint),
                        {
                            point: s
                        } = o,
                        {
                            timestamp: a
                        } = er;
                    this.history = [{ ...s,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = r;
                    l && l(e, nn(o, this.history)), this.removeListeners = tZ(tI(window, "pointermove", this.handlePointerMove), tI(window, "pointerup", this.handlePointerUp), tI(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), ep.update(this.updatePoint)
                }
            }

            function ne(e, r) {
                return r ? {
                    point: r(e.point)
                } : e
            }

            function nr(e, r) {
                return {
                    x: e.x - r.x,
                    y: e.y - r.y
                }
            }

            function nn({
                point: e
            }, r) {
                return {
                    point: e,
                    delta: nr(e, ni(r)),
                    offset: nr(e, r[0]),
                    velocity: function(e, r) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = e.length - 1,
                            i = null,
                            o = ni(e);
                        for (; n >= 0 && (i = e[n], !(o.timestamp - i.timestamp > e5(.1)));) n--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let s = (o.timestamp - i.timestamp) / 1e3;
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (o.x - i.x) / s,
                            y: (o.y - i.y) / s
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(r, 0)
                }
            }

            function ni(e) {
                return e[e.length - 1]
            }

            function no(e) {
                return e.max - e.min
            }

            function ns(e, r = 0, n = .01) {
                return Math.abs(e - r) <= n
            }

            function na(e, r, n, i = .5) {
                e.origin = i, e.originPoint = e8(r.min, r.max, e.origin), e.scale = no(n) / no(r), (ns(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = e8(n.min, n.max, e.origin) - e.originPoint, (ns(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function nl(e, r, n, i) {
                na(e.x, r.x, n.x, null == i ? void 0 : i.originX), na(e.y, r.y, n.y, null == i ? void 0 : i.originY)
            }

            function nu(e, r, n) {
                e.min = n.min + r.min, e.max = e.min + no(r)
            }

            function nc(e, r, n) {
                e.min = r.min - n.min, e.max = e.min + no(r)
            }

            function nh(e, r, n) {
                nc(e.x, r.x, n.x), nc(e.y, r.y, n.y)
            }

            function np(e, r, n) {
                return {
                    min: void 0 !== r ? e.min + r : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function nd(e, r) {
                let n = r.min - e.min,
                    i = r.max - e.max;
                return r.max - r.min < e.max - e.min && ([n, i] = [i, n]), {
                    min: n,
                    max: i
                }
            }

            function nf(e, r, n) {
                return {
                    min: nm(e, r),
                    max: nm(e, n)
                }
            }

            function nm(e, r) {
                return "number" == typeof e ? e : e[r] || 0
            }
            let nv = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                ny = () => ({
                    x: nv(),
                    y: nv()
                }),
                ng = () => ({
                    min: 0,
                    max: 0
                }),
                nx = () => ({
                    x: ng(),
                    y: ng()
                });

            function nb(e) {
                return [e("x"), e("y")]
            }

            function nw({
                top: e,
                left: r,
                right: n,
                bottom: i
            }) {
                return {
                    x: {
                        min: r,
                        max: n
                    },
                    y: {
                        min: e,
                        max: i
                    }
                }
            }

            function nT(e) {
                return void 0 === e || 1 === e
            }

            function nE({
                scale: e,
                scaleX: r,
                scaleY: n
            }) {
                return !nT(e) || !nT(r) || !nT(n)
            }

            function nA(e) {
                return nE(e) || nP(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function nP(e) {
                var r, n;
                return (r = e.x) && "0%" !== r || (n = e.y) && "0%" !== n
            }

            function nS(e, r, n, i, o) {
                return void 0 !== o && (e = i + o * (e - i)), i + n * (e - i) + r
            }

            function nV(e, r = 0, n = 1, i, o) {
                e.min = nS(e.min, r, n, i, o), e.max = nS(e.max, r, n, i, o)
            }

            function nC(e, {
                x: r,
                y: n
            }) {
                nV(e.x, r.translate, r.scale, r.originPoint), nV(e.y, n.translate, n.scale, n.originPoint)
            }

            function nj(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function nM(e, r) {
                e.min = e.min + r, e.max = e.max + r
            }

            function n_(e, r, [n, i, o]) {
                let s = void 0 !== r[o] ? r[o] : .5,
                    a = e8(e.min, e.max, s);
                nV(e, r[n], r[i], a, r.scale)
            }
            let nO = ["x", "scaleX", "originX"],
                nk = ["y", "scaleY", "originY"];

            function nR(e, r) {
                n_(e.x, r, nO), n_(e.y, r, nk)
            }

            function nD(e, r) {
                return nw(function(e, r) {
                    if (!r) return e;
                    let n = r({
                            x: e.left,
                            y: e.top
                        }),
                        i = r({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: i.y,
                        right: i.x
                    }
                }(e.getBoundingClientRect(), r))
            }
            let nL = new WeakMap;
            class nB {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = nx(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: r = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let n = e => {
                            this.stopAnimation(), r && this.snapToCursor(tF(e, "page").point)
                        },
                        i = (e, r) => {
                            var n;
                            let {
                                drag: i,
                                dragPropagation: o,
                                onDragStart: s
                            } = this.getProps();
                            (!i || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tW(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nb(e => {
                                var r, n;
                                let i = this.getAxisMotionValue(e).get() || 0;
                                if (tt.test(i)) {
                                    let o = null === (n = null === (r = this.visualElement.projection) || void 0 === r ? void 0 : r.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                                    if (o) {
                                        let e = no(o);
                                        i = e * (parseFloat(i) / 100)
                                    }
                                }
                                this.originPoint[e] = i
                            }), null == s || s(e, r), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(a.Drag, !0))
                        },
                        o = (e, r) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: i,
                                onDirectionLock: o,
                                onDrag: s
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = r;
                            if (i && null === this.currentDirection) {
                                this.currentDirection = function(e, r = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > r ? n = "y" : Math.abs(e.x) > r && (n = "x"), n
                                }(a), null !== this.currentDirection && (null == o || o(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", r.point, a), this.updateAxis("y", r.point, a), this.visualElement.render(), null == s || s(e, r)
                        },
                        s = (e, r) => this.stop(e, r);
                    this.panSession = new nt(e, {
                        onSessionStart: n,
                        onStart: i,
                        onMove: o,
                        onSessionEnd: s
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, r) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: i
                    } = r;
                    this.startAnimation(i);
                    let {
                        onDragEnd: o
                    } = this.getProps();
                    null == o || o(e, r)
                }
                cancel() {
                    var e, r;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (r = this.visualElement.animationState) || void 0 === r || r.setActive(a.Drag, !1)
                }
                updateAxis(e, r, n) {
                    let {
                        drag: i
                    } = this.getProps();
                    if (!n || !nF(e, i, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(e),
                        s = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (s = function(e, {
                        min: r,
                        max: n
                    }, i) {
                        return void 0 !== r && e < r ? e = i ? e8(r, e, i.min) : Math.max(e, r) : void 0 !== n && e > n && (e = i ? e8(n, e, i.max) : Math.min(e, n)), e
                    }(s, this.constraints[e], this.elastic[e])), o.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: r
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, i = this.constraints;
                    e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {
                        top: r,
                        left: n,
                        bottom: i,
                        right: o
                    }) {
                        return {
                            x: np(e.x, n, o),
                            y: np(e.y, r, i)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: nf(e, "left", "right"),
                            y: nf(e, "top", "bottom")
                        }
                    }(r), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nb(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function(e, r) {
                            let n = {};
                            return void 0 !== r.min && (n.min = r.min - e.min), void 0 !== r.max && (n.max = r.max - e.min), n
                        }(n.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: r,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!r || !v(r)) return !1;
                    let i = r.current;
                    e1(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let s = function(e, r, n) {
                            let i = nD(e, n),
                                {
                                    scroll: o
                                } = r;
                            return o && (nM(i.x, o.offset.x), nM(i.y, o.offset.y)), i
                        }(i, o.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: nd((e = o.layout.layoutBox).x, s.x),
                            y: nd(e.y, s.y)
                        };
                    if (n) {
                        let e = n(function({
                            x: e,
                            y: r
                        }) {
                            return {
                                top: r.min,
                                right: e.max,
                                bottom: r.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!e, e && (a = nw(e))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: r,
                        dragMomentum: n,
                        dragElastic: i,
                        dragTransition: o,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: a
                    } = this.getProps(), l = this.constraints || {}, u = nb(a => {
                        if (!nF(a, r, this.currentDirection)) return;
                        let u = (null == l ? void 0 : l[a]) || {};
                        s && (u = {
                            min: 0,
                            max: 0
                        });
                        let c = {
                            type: "inertia",
                            velocity: n ? e[a] : 0,
                            bounceStiffness: i ? 200 : 1e6,
                            bounceDamping: i ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, c)
                    });
                    return Promise.all(u).then(a)
                }
                startAxisValueAnimation(e, r) {
                    let n = this.getAxisMotionValue(e);
                    return n.start(r0(e, n, 0, r))
                }
                stopAnimation() {
                    nb(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    var r;
                    let n = "_drag" + e.toUpperCase(),
                        i = this.visualElement.getProps()[n];
                    return i || this.visualElement.getValue(e, (null === (r = this.visualElement.getProps().initial) || void 0 === r ? void 0 : r[e]) || 0)
                }
                snapToCursor(e) {
                    nb(r => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!nF(r, n, this.currentDirection)) return;
                        let {
                            projection: i
                        } = this.visualElement, o = this.getAxisMotionValue(r);
                        if (i && i.layout) {
                            let {
                                min: n,
                                max: s
                            } = i.layout.layoutBox[r];
                            o.set(e[r] - e8(n, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var e;
                    if (!this.visualElement.current) return;
                    let {
                        drag: r,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!v(n) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let o = {
                        x: 0,
                        y: 0
                    };
                    nb(e => {
                        let r = this.getAxisMotionValue(e);
                        if (r) {
                            let n = r.get();
                            o[e] = function(e, r) {
                                let n = .5,
                                    i = no(e),
                                    o = no(r);
                                return o > i ? n = rc(r.min, r.max - i, e.min) : i > o && (n = rc(e.min, e.max - o, r.min)), z(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: s
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout(), this.resolveConstraints(), nb(e => {
                        if (!nF(e, r, null)) return;
                        let n = this.getAxisMotionValue(e),
                            {
                                min: i,
                                max: s
                            } = this.constraints[e];
                        n.set(e8(i, s, o[e]))
                    })
                }
                addListeners() {
                    var e;
                    if (!this.visualElement.current) return;
                    nL.set(this.visualElement, this);
                    let r = this.visualElement.current,
                        n = tI(r, "pointerdown", e => {
                            let {
                                drag: r,
                                dragListener: n = !0
                            } = this.getProps();
                            r && n && this.start(e)
                        }),
                        i = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            v(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: o
                        } = this.visualElement,
                        s = o.addEventListener("measure", i);
                    o && !o.layout && (null === (e = o.root) || void 0 === e || e.updateScroll(), o.updateLayout()), i();
                    let a = tD(window, "resize", () => this.scalePositionWithinConstraints()),
                        l = o.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: r
                        }) => {
                            this.isDragging && r && (nb(r => {
                                let n = this.getAxisMotionValue(r);
                                n && (this.originPoint[r] += e[r].translate, n.set(n.get() + e[r].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        a(), n(), s(), null == l || l()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: r = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: i = !1,
                            dragConstraints: o = !1,
                            dragElastic: s = .35,
                            dragMomentum: a = !0
                        } = e;
                    return { ...e,
                        drag: r,
                        dragDirectionLock: n,
                        dragPropagation: i,
                        dragConstraints: o,
                        dragElastic: s,
                        dragMomentum: a
                    }
                }
            }

            function nF(e, r, n) {
                return (!0 === r || r === e) && (null === n || n === e)
            }
            let nN = {
                pan: t4(function({
                    onPan: e,
                    onPanStart: r,
                    onPanEnd: n,
                    onPanSessionStart: i,
                    visualElement: o
                }) {
                    let s = (0, u.useRef)(null),
                        {
                            transformPagePoint: a
                        } = (0, u.useContext)(c),
                        l = {
                            onSessionStart: i,
                            onStart: r,
                            onMove: e,
                            onEnd: (e, r) => {
                                s.current = null, n && n(e, r)
                            }
                        };
                    (0, u.useEffect)(() => {
                        null !== s.current && s.current.updateHandlers(l)
                    }), tU(o, "pointerdown", (e || r || n || i) && function(e) {
                        s.current = new nt(e, l, {
                            transformPagePoint: a
                        })
                    }), tX(() => s.current && s.current.end())
                }),
                drag: t4(function(e) {
                    let {
                        dragControls: r,
                        visualElement: n
                    } = e, i = P(() => new nB(n));
                    (0, u.useEffect)(() => r && r.subscribe(i), [i, r]), (0, u.useEffect)(() => i.addListeners(), [i])
                })
            };

            function nI(e) {
                return "string" == typeof e && e.startsWith("var(--")
            }
            let nU = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function n$(e, r, n = 1) {
                e1(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [i, o] = function(e) {
                    let r = nU.exec(e);
                    if (!r) return [, ];
                    let [, n, i] = r;
                    return [n, i]
                }(e);
                if (!i) return;
                let s = window.getComputedStyle(r).getPropertyValue(i);
                return s ? s.trim() : nI(o) ? n$(o, r, n + 1) : o
            }
            let nz = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                nH = e => nz.has(e),
                nW = e => Object.keys(e).some(nH),
                nY = e => e === H || e === te;
            (s = l || (l = {})).width = "width", s.height = "height", s.left = "left", s.right = "right", s.top = "top", s.bottom = "bottom";
            let nq = (e, r) => parseFloat(e.split(", ")[r]),
                nG = (e, r) => (n, {
                    transform: i
                }) => {
                    if ("none" === i || !i) return 0;
                    let o = i.match(/^matrix3d\((.+)\)$/);
                    if (o) return nq(o[1], r); {
                        let r = i.match(/^matrix\((.+)\)$/);
                        return r ? nq(r[1], e) : 0
                    }
                },
                nX = new Set(["x", "y", "z"]),
                nQ = D.filter(e => !nX.has(e)),
                nZ = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: r = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(r) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: r = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(r) - parseFloat(n),
                    top: (e, {
                        top: r
                    }) => parseFloat(r),
                    left: (e, {
                        left: r
                    }) => parseFloat(r),
                    bottom: ({
                        y: e
                    }, {
                        top: r
                    }) => parseFloat(r) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: r
                    }) => parseFloat(r) + (e.max - e.min),
                    x: nG(4, 13),
                    y: nG(5, 14)
                },
                nK = (e, r, n) => {
                    let i = r.measureViewportBox(),
                        o = r.current,
                        s = getComputedStyle(o),
                        {
                            display: a
                        } = s,
                        l = {};
                    "none" === a && r.setStaticValue("display", e.display || "block"), n.forEach(e => {
                        l[e] = nZ[e](i, s)
                    }), r.render();
                    let u = r.measureViewportBox();
                    return n.forEach(n => {
                        let i = r.getValue(n);
                        i && i.jump(l[n]), e[n] = nZ[n](u, s)
                    }), e
                },
                nJ = (e, r, n = {}, i = {}) => {
                    r = { ...r
                    }, i = { ...i
                    };
                    let o = Object.keys(r).filter(nH),
                        s = [],
                        a = !1,
                        l = [];
                    if (o.forEach(o => {
                            let u;
                            let c = e.getValue(o);
                            if (!e.hasValue(o)) return;
                            let h = n[o],
                                p = eG(h),
                                d = r[o];
                            if (tC(d)) {
                                let e = d.length,
                                    r = null === d[0] ? 1 : 0;
                                p = eG(h = d[r]);
                                for (let n = r; n < e; n++) u ? e1(eG(d[n]) === u, "All keyframes must be of the same type") : e1((u = eG(d[n])) === p || nY(p) && nY(u), "Keyframes must be of the same dimension as the current value")
                            } else u = eG(d);
                            if (p !== u) {
                                if (nY(p) && nY(u)) {
                                    let e = c.get();
                                    "string" == typeof e && c.set(parseFloat(e)), "string" == typeof d ? r[o] = parseFloat(d) : Array.isArray(d) && u === te && (r[o] = d.map(parseFloat))
                                } else(null == p ? void 0 : p.transform) && (null == u ? void 0 : u.transform) && (0 === h || 0 === d) ? 0 === h ? c.set(u.transform(h)) : r[o] = p.transform(d) : (a || (s = function(e) {
                                    let r = [];
                                    return nQ.forEach(n => {
                                        let i = e.getValue(n);
                                        void 0 !== i && (r.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                                    }), r.length && e.render(), r
                                }(e), a = !0), l.push(o), i[o] = void 0 !== i[o] ? i[o] : r[o], c.jump(d))
                            }
                        }), !l.length) return {
                        target: r,
                        transitionEnd: i
                    }; {
                        let n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                            o = nK(r, e, l);
                        return s.length && s.forEach(([r, n]) => {
                            e.getValue(r).set(n)
                        }), e.render(), d && null !== n && window.scrollTo({
                            top: n
                        }), {
                            target: o,
                            transitionEnd: i
                        }
                    }
                },
                n0 = (e, r, n, i) => {
                    var o, s;
                    let a = function(e, { ...r
                    }, n) {
                        let i = e.current;
                        if (!(i instanceof Element)) return {
                            target: r,
                            transitionEnd: n
                        };
                        for (let o in n && (n = { ...n
                            }), e.values.forEach(e => {
                                let r = e.get();
                                if (!nI(r)) return;
                                let n = n$(r, i);
                                n && e.set(n)
                            }), r) {
                            let e = r[o];
                            if (!nI(e)) continue;
                            let s = n$(e, i);
                            s && (r[o] = s, n && void 0 === n[o] && (n[o] = e))
                        }
                        return {
                            target: r,
                            transitionEnd: n
                        }
                    }(e, r, i);
                    return r = a.target, i = a.transitionEnd, o = r, s = i, nW(o) ? nJ(e, o, n, s) : {
                        target: o,
                        transitionEnd: s
                    }
                },
                n1 = {
                    current: null
                },
                n5 = {
                    current: !1
                },
                n6 = Object.keys(A),
                n2 = n6.length,
                n3 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class n4 {
                constructor({
                    parent: e,
                    props: r,
                    reducedMotionConfig: n,
                    visualState: i
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => eh.render(this.render, !1, !0);
                    let {
                        latestValues: s,
                        renderState: a
                    } = i;
                    this.latestValues = s, this.baseTarget = { ...s
                    }, this.initialValues = r.initial ? { ...s
                    } : {}, this.renderState = a, this.parent = e, this.props = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = b(r), this.isVariantNode = w(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(r, {});
                    for (let e in u) {
                        let r = u[e];
                        void 0 !== s[e] && F(r) && (r.set(s[e], !1), eK(l) && l.add(e))
                    }
                }
                scrapeMotionValuesFromProps(e, r) {
                    return {}
                }
                mount(e) {
                    var r;
                    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (r = this.parent) || void 0 === r ? void 0 : r.addVariantChild(this)), this.values.forEach((e, r) => this.bindToMotionValue(r, e)), n5.current || function() {
                        if (n5.current = !0, d) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    r = () => n1.current = e.matches;
                                e.addListener(r), r()
                            } else n1.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || n1.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
                }
                unmount() {
                    var e, r, n;
                    for (let i in null === (e = this.projection) || void 0 === e || e.unmount(), ep.update(this.notifyUpdate), ep.render(this.render), this.valueSubscriptions.forEach(e => e()), null === (r = this.removeFromVariantTree) || void 0 === r || r.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[i].clear();
                    this.current = null
                }
                bindToMotionValue(e, r) {
                    let n = L.has(e),
                        i = r.on("change", r => {
                            this.latestValues[e] = r, this.props.onUpdate && eh.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        o = r.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        i(), o()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...r
                }, n, i, o, s, a) {
                    let l = [];
                    for (let e = 0; e < n2; e++) {
                        let n = n6[e],
                            {
                                isEnabled: i,
                                Component: o
                            } = A[n];
                        i(r) && o && l.push((0, u.createElement)(o, {
                            key: n,
                            ...r,
                            visualElement: this
                        }))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: i,
                            dragConstraints: l,
                            layoutScroll: u,
                            layoutRoot: c
                        } = r;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: Boolean(i) || l && v(l),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: a,
                            layoutScroll: u,
                            layoutRoot: c
                        })
                    }
                    return l
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nx()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, r) {
                    this.latestValues[e] = r
                }
                makeTargetAnimatable(e, r = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, r)
                }
                setProps(e) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
                    let r = this.props;
                    this.props = e;
                    for (let r = 0; r < n3.length; r++) {
                        let n = n3[r];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let i = e["on" + n];
                        i && (this.propEventSubscriptions[n] = this.on(n, i))
                    }
                    this.prevMotionValues = function(e, r, n) {
                        let {
                            willChange: i
                        } = r;
                        for (let o in r) {
                            let s = r[o],
                                a = n[o];
                            if (F(s)) e.addValue(o, s), eK(i) && i.add(o);
                            else if (F(a)) e.addValue(o, eE(s, {
                                owner: e
                            })), eK(i) && i.remove(o);
                            else if (a !== s) {
                                if (e.hasValue(o)) {
                                    let r = e.getValue(o);
                                    r.hasAnimated || r.set(s)
                                } else {
                                    let r = e.getStaticValue(o);
                                    e.addValue(o, eE(void 0 !== r ? r : s, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let i in n) void 0 === r[i] && e.removeValue(i);
                        return r
                    }(this, this.scrapeMotionValuesFromProps(e, r), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    var r;
                    return null === (r = this.props.variants) || void 0 === r ? void 0 : r[e]
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    var e;
                    return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
                }
                getVariantContext(e = !1) {
                    var r, n;
                    if (e) return null === (r = this.parent) || void 0 === r ? void 0 : r.getVariantContext();
                    if (!this.isControllingVariants) {
                        let e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                    }
                    let i = {};
                    for (let e = 0; e < n7; e++) {
                        let r = n9[e],
                            n = this.props[r];
                        (y(n) || !1 === n) && (i[r] = n)
                    }
                    return i
                }
                addVariantChild(e) {
                    var r;
                    let n = this.getClosestVariantNode();
                    if (n) return null === (r = n.variantChildren) || void 0 === r || r.add(e), () => n.variantChildren.delete(e)
                }
                addValue(e, r) {
                    r !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, r)), this.values.set(e, r), this.latestValues[e] = r.get()
                }
                removeValue(e) {
                    var r;
                    this.values.delete(e), null === (r = this.valueSubscriptions.get(e)) || void 0 === r || r(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, r) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== r && (n = eE(r, {
                        owner: this
                    }), this.addValue(e, n)), n
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, r) {
                    this.baseTarget[e] = r
                }
                getBaseTarget(e) {
                    var r;
                    let {
                        initial: n
                    } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (r = tV(this.props, n)) || void 0 === r ? void 0 : r[e] : void 0;
                    if (n && void 0 !== i) return i;
                    let o = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === o || F(o) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : o
                }
                on(e, r) {
                    return this.events[e] || (this.events[e] = new ex), this.events[e].add(r)
                }
                notify(e, ...r) {
                    var n;
                    null === (n = this.events[e]) || void 0 === n || n.notify(...r)
                }
            }
            let n9 = ["initial", ...r2],
                n7 = n9.length;
            class n8 extends n4 {
                sortInstanceNodePosition(e, r) {
                    return 2 & e.compareDocumentPosition(r) ? 1 : -1
                }
                getBaseTargetFromProps(e, r) {
                    var n;
                    return null === (n = e.style) || void 0 === n ? void 0 : n[r]
                }
                removeValueFromRenderState(e, {
                    vars: r,
                    style: n
                }) {
                    delete r[e], delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: r,
                    ...n
                }, {
                    transformValues: i
                }, o) {
                    let s = function(e, r, n) {
                        var i;
                        let o = {};
                        for (let s in e) {
                            let e = function(e, r) {
                                if (!r) return;
                                let n = r[e] || r.default || r;
                                return n.from
                            }(s, r);
                            o[s] = void 0 !== e ? e : null === (i = n.getValue(s)) || void 0 === i ? void 0 : i.get()
                        }
                        return o
                    }(n, e || {}, this);
                    if (i && (r && (r = i(r)), n && (n = i(n)), s && (s = i(s))), o) {
                        ! function(e, r, n) {
                            var i, o;
                            let s = Object.keys(r).filter(r => !e.hasValue(r)),
                                a = s.length;
                            if (a)
                                for (let l = 0; l < a; l++) {
                                    let a = s[l],
                                        u = r[a],
                                        c = null;
                                    Array.isArray(u) && (c = u[0]), null === c && (c = null !== (o = null !== (i = n[a]) && void 0 !== i ? i : e.readValue(a)) && void 0 !== o ? o : r[a]), null != c && ("string" == typeof c && (et(c) || ee(c)) ? c = parseFloat(c) : !eQ(c) && eF.test(u) && (c = eW(a, u)), e.addValue(a, eE(c, {
                                        owner: e
                                    })), void 0 === n[a] && (n[a] = c), null !== c && e.setBaseTarget(a, c))
                                }
                        }(this, n, s);
                        let e = n0(this, n, s, r);
                        r = e.transitionEnd, n = e.target
                    }
                    return {
                        transition: e,
                        transitionEnd: r,
                        ...n
                    }
                }
            }
            class it extends n8 {
                readValueFromInstance(e, r) {
                    if (L.has(r)) {
                        let e = eH(r);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            i = (U(r) ? n.getPropertyValue(r) : n[r]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: r
                }) {
                    return nD(e, r)
                }
                build(e, r, n, i) {
                    ta(e, r, n, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, r) {
                    return tP(e, r)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    F(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, r, n, i) {
                    tT(e, r, n, i)
                }
            }
            class ie extends n8 {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, r) {
                    return e[r]
                }
                readValueFromInstance(e, r) {
                    var n;
                    return L.has(r) ? (null === (n = eH(r)) || void 0 === n ? void 0 : n.default) || 0 : (r = tE.has(r) ? r : tw(r), e.getAttribute(r))
                }
                measureInstanceViewportBox() {
                    return nx()
                }
                scrapeMotionValuesFromProps(e, r) {
                    return tS(e, r)
                }
                build(e, r, n, i) {
                    ty(e, r, n, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(e, r, n, i) {
                    tA(e, r, n, i)
                }
                mount(e) {
                    this.isSVGTag = tx(e.tagName), super.mount(e)
                }
            }
            let ir = (e, r) => k(e) ? new ie(r, {
                enableHardwareAcceleration: !1
            }) : new it(r, {
                enableHardwareAcceleration: !0
            });

            function ii(e, r) {
                return r.max === r.min ? 0 : e / (r.max - r.min) * 100
            }
            let io = {
                    correct: (e, r) => {
                        if (!r.target) return e;
                        if ("string" == typeof e) {
                            if (!te.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let n = ii(e, r.target.x),
                            i = ii(e, r.target.y);
                        return `${n}% ${i}%`
                    }
                },
                is = "_$css",
                ia = {
                    correct: (e, {
                        treeScale: r,
                        projectionDelta: n
                    }) => {
                        let i = e,
                            o = e.includes("var("),
                            s = [];
                        o && (e = e.replace(nU, e => (s.push(e), is)));
                        let a = eF.parse(e);
                        if (a.length > 5) return i;
                        let l = eF.createTransformer(e),
                            u = "number" != typeof a[0] ? 1 : 0,
                            c = n.x.scale * r.x,
                            h = n.y.scale * r.y;
                        a[0 + u] /= c, a[1 + u] /= h;
                        let p = e8(c, h, .5);
                        "number" == typeof a[2 + u] && (a[2 + u] /= p), "number" == typeof a[3 + u] && (a[3 + u] /= p);
                        let d = l(a);
                        if (o) {
                            let e = 0;
                            d = d.replace(is, () => {
                                let r = s[e];
                                return e++, r
                            })
                        }
                        return d
                    }
                };
            class il extends u.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: r,
                        switchLayoutGroup: n,
                        layoutId: i
                    } = this.props, {
                        projection: o
                    } = e;
                    Object.assign(R, iu), o && (r.group && r.group.add(o), n && n.register && i && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), S.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: r,
                        visualElement: n,
                        drag: i,
                        isPresent: o
                    } = this.props, s = n.projection;
                    return s && (s.isPresent = o, i || e.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), e.isPresent === o || (o ? s.promote() : s.relegate() || eh.postRender(() => {
                        var e;
                        (null === (e = s.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: r,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: i
                    } = e;
                    i && (i.scheduleCheckAfterUnmount(), (null == r ? void 0 : r.group) && r.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    null == e || e()
                }
                render() {
                    return null
                }
            }
            let iu = {
                    borderRadius: { ...io,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: io,
                    borderTopRightRadius: io,
                    borderBottomLeftRadius: io,
                    borderBottomRightRadius: io,
                    boxShadow: ia
                },
                ic = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ih = ic.length,
                ip = e => "string" == typeof e ? parseFloat(e) : e,
                id = e => "number" == typeof e || te.test(e);

            function im(e, r) {
                return void 0 !== e[r] ? e[r] : e.borderRadius
            }
            let iv = ig(0, .5, ry),
                iy = ig(.5, .95, rd);

            function ig(e, r, n) {
                return i => i < e ? 0 : i > r ? 1 : n(rc(e, r, i))
            }

            function ix(e, r) {
                e.min = r.min, e.max = r.max
            }

            function ib(e, r) {
                ix(e.x, r.x), ix(e.y, r.y)
            }

            function iw(e, r, n, i, o) {
                return e -= r, e = i + 1 / n * (e - i), void 0 !== o && (e = i + 1 / o * (e - i)), e
            }

            function iT(e, r, [n, i, o], s, a) {
                ! function(e, r = 0, n = 1, i = .5, o, s = e, a = e) {
                    if (tt.test(r)) {
                        r = parseFloat(r);
                        let e = e8(a.min, a.max, r / 100);
                        r = e - a.min
                    }
                    if ("number" != typeof r) return;
                    let l = e8(s.min, s.max, i);
                    e === s && (l -= r), e.min = iw(e.min, r, n, l, o), e.max = iw(e.max, r, n, l, o)
                }(e, r[n], r[i], r[o], r.scale, s, a)
            }
            let iE = ["x", "scaleX", "originX"],
                iA = ["y", "scaleY", "originY"];

            function iP(e, r, n, i) {
                iT(e.x, r, iE, null == n ? void 0 : n.x, null == i ? void 0 : i.x), iT(e.y, r, iA, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
            }

            function iS(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function iV(e) {
                return iS(e.x) && iS(e.y)
            }

            function iC(e, r) {
                return e.x.min === r.x.min && e.x.max === r.x.max && e.y.min === r.y.min && e.y.max === r.y.max
            }

            function ij(e) {
                return no(e.x) / no(e.y)
            }
            class iM {
                constructor() {
                    this.members = []
                }
                add(e) {
                    ey(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (eg(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let r;
                    let n = this.members.findIndex(r => e === r);
                    if (0 === n) return !1;
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e];
                        if (!1 !== n.isPresent) {
                            r = n;
                            break
                        }
                    }
                    return !!r && (this.promote(r), !0)
                }
                promote(e, r) {
                    var n;
                    let i = this.lead;
                    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
                        i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
                        let {
                            crossfade: o
                        } = e.options;
                        !1 === o && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        var r, n, i, o, s;
                        null === (n = (r = e.options).onExitComplete) || void 0 === n || n.call(r), null === (s = null === (i = e.resumingFrom) || void 0 === i ? void 0 : (o = i.options).onExitComplete) || void 0 === s || s.call(o)
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function i_(e, r, n) {
                let i = "",
                    o = e.x.translate / r.x,
                    s = e.y.translate / r.y;
                if ((o || s) && (i = `translate3d(${o}px, ${s}px, 0) `), (1 !== r.x || 1 !== r.y) && (i += `scale(${1/r.x}, ${1/r.y}) `), n) {
                    let {
                        rotate: e,
                        rotateX: r,
                        rotateY: o
                    } = n;
                    e && (i += `rotate(${e}deg) `), r && (i += `rotateX(${r}deg) `), o && (i += `rotateY(${o}deg) `)
                }
                let a = e.x.scale * r.x,
                    l = e.y.scale * r.y;
                return (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`), i || "none"
            }
            let iO = (e, r) => e.depth - r.depth;
            class ik {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    ey(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    eg(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(iO), this.isDirty = !1, this.children.forEach(e)
                }
            }
            let iR = ["", "X", "Y", "Z"],
                iD = 0;

            function iL({
                attachResizeListener: e,
                defaultParent: r,
                measureScroll: n,
                checkIsScrollRoot: i,
                resetTransform: o
            }) {
                return class {
                    constructor(e, n = {}, i = null == r ? void 0 : r()) {
                        this.id = iD++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(iN), this.nodes.forEach(iH), this.nodes.forEach(iW)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ik)
                    }
                    addEventListener(e, r) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ex), this.eventHandlers.get(e).add(r)
                    }
                    notifyListeners(e, ...r) {
                        let n = this.eventHandlers.get(e);
                        null == n || n.notify(...r)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, r) {
                        this.potentialNodes.set(e, r)
                    }
                    mount(r, n = !1) {
                        var i;
                        if (this.instance) return;
                        this.isSVG = r instanceof SVGElement && "svg" !== r.tagName, this.instance = r;
                        let {
                            layoutId: o,
                            layout: s,
                            visualElement: a
                        } = this.options;
                        if (a && !a.current && a.mount(r), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (s || o) && (this.isLayoutDirty = !0), e) {
                            let n;
                            let i = () => this.root.updateBlockedByResize = !1;
                            e(r, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = rz(i, 250), S.hasAnimatedSinceResize && (S.hasAnimatedSinceResize = !1, this.nodes.forEach(iz))
                            })
                        }
                        o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && a && (o || s) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: r,
                            hasRelativeTargetChanged: n,
                            layout: i
                        }) => {
                            var o, s, l, u, c;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let h = null !== (s = null !== (o = this.options.transition) && void 0 !== o ? o : a.getDefaultTransition()) && void 0 !== s ? s : iZ,
                                {
                                    onLayoutAnimationStart: p,
                                    onLayoutAnimationComplete: d
                                } = a.getProps(),
                                f = !this.targetLayout || !iC(this.targetLayout, i) || n,
                                m = !r && n;
                            if (this.options.layoutRoot || (null === (l = this.resumeFrom) || void 0 === l ? void 0 : l.instance) || m || r && (f || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, m);
                                let r = { ...rJ(h, "layout"),
                                    onPlay: p,
                                    onComplete: d
                                };
                                (a.shouldReduceMotion || this.options.layoutRoot) && (r.delay = 0, r.type = !1), this.startAnimation(r)
                            } else r || 0 !== this.animationProgress || iz(this), this.isLead() && (null === (c = (u = this.options).onExitComplete) || void 0 === c || c.call(u));
                            this.targetLayout = i
                        })
                    }
                    unmount() {
                        var e, r;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (r = this.parent) || void 0 === r || r.children.delete(this), this.instance = void 0, ep.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var e;
                        !this.isUpdateBlocked() && (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(iY), this.animationId++)
                    }
                    getTransformTemplate() {
                        var e;
                        return null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        var r, n, i;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (r = this.options).onExitComplete) || void 0 === n || n.call(r);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e];
                            r.shouldResetTransform = !0, r.updateScroll("snapshot"), r.options.layoutRoot && r.willUpdate(!1)
                        }
                        let {
                            layoutId: o,
                            layout: s
                        } = this.options;
                        (void 0 !== o || s) && (this.prevTransformTemplateValue = null === (i = this.getTransformTemplate()) || void 0 === i ? void 0 : i(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate"))
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(iU);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(iK), this.potentialNodes.clear()), this.nodes.forEach(i$), this.nodes.forEach(iB), this.nodes.forEach(iF), this.clearAllSnapshots(), ed.update(), ed.preRender(), ed.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iI), this.sharedNodes.forEach(iq)
                    }
                    scheduleUpdateProjection() {
                        eh.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        eh.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        var e;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let r = this.path[e];
                                r.updateScroll()
                            }
                        let r = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = nx(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == r ? void 0 : r.layoutBox)
                    }
                    updateScroll(e = "measure") {
                        let r = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (r = !1), r && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: i(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        var e;
                        if (!o) return;
                        let r = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !iV(this.projectionDelta),
                            i = null === (e = this.getTransformTemplate()) || void 0 === e ? void 0 : e(this.latestValues, ""),
                            s = i !== this.prevTransformTemplateValue;
                        r && (n || nA(this.latestValues) || s) && (o(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var r;
                        let n = this.measurePageBox(),
                            i = this.removeElementScroll(n);
                        return e && (i = this.removeTransform(i)), iJ((r = i).x), iJ(r.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: i,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return nx();
                        let r = e.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (nM(r.x, n.offset.x), nM(r.y, n.offset.y)), r
                    }
                    removeElementScroll(e) {
                        let r = nx();
                        ib(r, e);
                        for (let n = 0; n < this.path.length; n++) {
                            let i = this.path[n],
                                {
                                    scroll: o,
                                    options: s
                                } = i;
                            if (i !== this.root && o && s.layoutScroll) {
                                if (o.isRoot) {
                                    ib(r, e);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && (nM(r.x, -n.offset.x), nM(r.y, -n.offset.y))
                                }
                                nM(r.x, o.offset.x), nM(r.y, o.offset.y)
                            }
                        }
                        return r
                    }
                    applyTransform(e, r = !1) {
                        let n = nx();
                        ib(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let i = this.path[e];
                            !r && i.options.layoutScroll && i.scroll && i !== i.root && nR(n, {
                                x: -i.scroll.offset.x,
                                y: -i.scroll.offset.y
                            }), nA(i.latestValues) && nR(n, i.latestValues)
                        }
                        return nA(this.latestValues) && nR(n, this.latestValues), n
                    }
                    removeTransform(e) {
                        var r;
                        let n = nx();
                        ib(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let i = this.path[e];
                            if (!i.instance || !nA(i.latestValues)) continue;
                            nE(i.latestValues) && i.updateSnapshot();
                            let o = nx(),
                                s = i.measurePageBox();
                            ib(o, s), iP(n, i.latestValues, null === (r = i.snapshot) || void 0 === r ? void 0 : r.layoutBox, o)
                        }
                        return nA(this.latestValues) && iP(n, this.latestValues), n
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var e, r, n, i;
                        let o = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                        let {
                            layout: s,
                            layoutId: a
                        } = this.options;
                        if (this.layout && (s || a)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout ? (this.relativeParent = e, this.relativeTarget = nx(), this.relativeTargetOrigin = nx(), nh(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), ib(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = nx(), this.targetWithTransforms = nx()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target)) ? (r = this.target, n = this.relativeTarget, i = this.relativeParent.target, nu(r.x, n.x, i.x), nu(r.y, n.y, i.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : ib(this.target, this.layout.layoutBox), nC(this.target, this.targetDelta)) : ib(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = nx(), this.relativeTargetOrigin = nx(), nh(this.relativeTargetOrigin, this.target, e.target), ib(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || nE(this.parent.latestValues) || nP(this.parent.latestValues) ? void 0 : (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var e;
                        let {
                            isProjectionDirty: r,
                            isTransformDirty: n
                        } = this;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        let i = this.getLead(),
                            o = Boolean(this.resumingFrom) || this !== i,
                            s = !0;
                        if (r && (s = !1), o && n && (s = !1), s) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || l)) return;
                        ib(this.layoutCorrected, this.layout.layoutBox),
                            function(e, r, n, i = !1) {
                                var o, s;
                                let a, l;
                                let u = n.length;
                                if (u) {
                                    r.x = r.y = 1;
                                    for (let c = 0; c < u; c++) l = (a = n[c]).projectionDelta, (null === (s = null === (o = a.instance) || void 0 === o ? void 0 : o.style) || void 0 === s ? void 0 : s.display) !== "contents" && (i && a.options.layoutScroll && a.scroll && a !== a.root && nR(e, {
                                        x: -a.scroll.offset.x,
                                        y: -a.scroll.offset.y
                                    }), l && (r.x *= l.x.scale, r.y *= l.y.scale, nC(e, l)), i && nA(a.latestValues) && nR(e, a.latestValues));
                                    r.x = nj(r.x), r.y = nj(r.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, o);
                        let {
                            target: u
                        } = i;
                        if (!u) return;
                        this.projectionDelta || (this.projectionDelta = ny(), this.projectionDeltaWithTransform = ny());
                        let c = this.treeScale.x,
                            h = this.treeScale.y,
                            p = this.projectionTransform;
                        nl(this.projectionDelta, this.layoutCorrected, u, this.latestValues), this.projectionTransform = i_(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== c || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", u))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var r, n, i;
                        null === (n = (r = this.options).scheduleRender) || void 0 === n || n.call(r), e && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, r = !1) {
                        var n, i;
                        let o = this.snapshot,
                            s = (null == o ? void 0 : o.latestValues) || {},
                            a = { ...this.latestValues
                            },
                            l = ny();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !r;
                        let u = nx(),
                            c = (null == o ? void 0 : o.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                            h = 1 >= ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0),
                            p = Boolean(c && !h && !0 === this.options.crossfade && !this.path.some(iQ));
                        this.animationProgress = 0, this.mixTargetDelta = r => {
                            var n, i, o;
                            let d = r / 1e3;
                            iG(l.x, e.x, d), iG(l.y, e.y, d), this.setTargetDelta(l), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (nh(u, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, o = this.relativeTargetOrigin, iX(i.x, o.x, u.x, d), iX(i.y, o.y, u.y, d)), c && (this.animationValues = a, function(e, r, n, i, o, s) {
                                o ? (e.opacity = e8(0, void 0 !== n.opacity ? n.opacity : 1, iv(i)), e.opacityExit = e8(void 0 !== r.opacity ? r.opacity : 1, 0, iy(i))) : s && (e.opacity = e8(void 0 !== r.opacity ? r.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                                for (let o = 0; o < ih; o++) {
                                    let s = `border${ic[o]}Radius`,
                                        a = im(r, s),
                                        l = im(n, s);
                                    if (void 0 === a && void 0 === l) continue;
                                    a || (a = 0), l || (l = 0);
                                    let u = 0 === a || 0 === l || id(a) === id(l);
                                    u ? (e[s] = Math.max(e8(ip(a), ip(l), i), 0), (tt.test(l) || tt.test(a)) && (e[s] += "%")) : e[s] = l
                                }(r.rotate || n.rotate) && (e.rotate = e8(r.rotate || 0, n.rotate || 0, i))
                            }(a, s, this.latestValues, d, p, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = d
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        var r, n;
                        this.notifyListeners("animationStart"), null === (r = this.currentAnimation) || void 0 === r || r.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (ep.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = eh.update(() => {
                            S.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, r, n = {}) {
                                let i = F(e) ? e : eE(e);
                                return i.start(r0("", i, 1e3, n)), {
                                    stop: () => i.stop(),
                                    isAnimating: () => i.isAnimating()
                                }
                            }(0, 0, { ...e,
                                onUpdate: r => {
                                    var n;
                                    this.mixTargetDelta(r), null === (n = e.onUpdate) || void 0 === n || n.call(e, r)
                                },
                                onComplete: () => {
                                    var r;
                                    null === (r = e.onComplete) || void 0 === r || r.call(e), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: r,
                                target: n,
                                layout: i,
                                latestValues: o
                            } = e;
                        if (r && n && i) {
                            if (this !== e && this.layout && i && i0(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                                n = this.target || nx();
                                let r = no(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min, n.x.max = n.x.min + r;
                                let i = no(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min, n.y.max = n.y.min + i
                            }
                            ib(r, n), nR(r, o), nl(this.projectionDeltaWithTransform, this.layoutCorrected, r, o)
                        }
                    }
                    registerSharedNode(e, r) {
                        var n, i, o;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new iM);
                        let s = this.sharedNodes.get(e);
                        s.add(r), r.promote({
                            transition: null === (n = r.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (i = r.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(i, r)
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: r
                        } = this.options;
                        return r && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: r
                        } = this.options;
                        return r ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: r,
                        preserveFollowOpacity: n
                    } = {}) {
                        let i = this.getStack();
                        i && i.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let r = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (r = !0), !r) return;
                        let i = {};
                        for (let r = 0; r < iR.length; r++) {
                            let o = "rotate" + iR[r];
                            n[o] && (i[o] = n[o], e.setStaticValue(o, 0))
                        }
                        for (let r in null == e || e.render(), i) e.setStaticValue(r, i[r]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e = {}) {
                        var r, n;
                        let i = {};
                        if (!this.instance || this.isSVG) return i;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        i.visibility = "";
                        let o = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = t_(e.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let r = {};
                            return this.options.layoutId && (r.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, r.pointerEvents = t_(e.pointerEvents) || ""), this.hasProjected && !nA(this.latestValues) && (r.transform = o ? o({}, "") : "none", this.hasProjected = !1), r
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), i.transform = i_(this.projectionDeltaWithTransform, this.treeScale, a), o && (i.transform = o(a, i.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let e in i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (n = null !== (r = a.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, R) {
                            if (void 0 === a[e]) continue;
                            let {
                                correct: r,
                                applyTo: n
                            } = R[e], o = "none" === i.transform ? a[e] : r(a[e], s);
                            if (n) {
                                let e = n.length;
                                for (let r = 0; r < e; r++) i[n[r]] = o
                            } else i[e] = o
                        }
                        return this.options.layoutId && (i.pointerEvents = s === this ? t_(e.pointerEvents) || "" : "none"), i
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var r;
                            return null === (r = e.currentAnimation) || void 0 === r ? void 0 : r.stop()
                        }), this.root.nodes.forEach(iU), this.root.sharedNodes.clear()
                    }
                }
            }

            function iB(e) {
                e.updateLayout()
            }

            function iF(e) {
                var r, n, i;
                let o = (null === (r = e.resumeFrom) || void 0 === r ? void 0 : r.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: r,
                        measuredBox: n
                    } = e.layout, {
                        animationType: i
                    } = e.options, s = o.source !== e.layout.source;
                    "size" === i ? nb(e => {
                        let n = s ? o.measuredBox[e] : o.layoutBox[e],
                            i = no(n);
                        n.min = r[e].min, n.max = n.min + i
                    }) : i0(i, o.layoutBox, r) && nb(e => {
                        let n = s ? o.measuredBox[e] : o.layoutBox[e],
                            i = no(r[e]);
                        n.max = n.min + i
                    });
                    let a = ny();
                    nl(a, r, o.layoutBox);
                    let l = ny();
                    s ? nl(l, e.applyTransform(n, !0), o.measuredBox) : nl(l, r, o.layoutBox);
                    let u = !iV(a),
                        c = !1;
                    if (!e.resumeFrom) {
                        let n = e.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: s
                            } = n;
                            if (i && s) {
                                let a = nx();
                                nh(a, o.layoutBox, i.layoutBox);
                                let l = nx();
                                nh(l, r, s.layoutBox), iC(a, l) || (c = !0), n.options.layoutRoot && (e.relativeTarget = l, e.relativeTargetOrigin = a, e.relativeParent = n)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: r,
                        snapshot: o,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: c
                    })
                } else e.isLead() && (null === (i = (n = e.options).onExitComplete) || void 0 === i || i.call(n));
                e.options.transition = void 0
            }

            function iN(e) {
                e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
            }

            function iI(e) {
                e.clearSnapshot()
            }

            function iU(e) {
                e.clearMeasurements()
            }

            function i$(e) {
                let {
                    visualElement: r
                } = e.options;
                (null == r ? void 0 : r.getProps().onBeforeLayoutMeasure) && r.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function iz(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function iH(e) {
                e.resolveTargetDelta()
            }

            function iW(e) {
                e.calcProjection()
            }

            function iY(e) {
                e.resetRotation()
            }

            function iq(e) {
                e.removeLeadSnapshot()
            }

            function iG(e, r, n) {
                e.translate = e8(r.translate, 0, n), e.scale = e8(r.scale, 1, n), e.origin = r.origin, e.originPoint = r.originPoint
            }

            function iX(e, r, n, i) {
                e.min = e8(r.min, n.min, i), e.max = e8(r.max, n.max, i)
            }

            function iQ(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let iZ = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function iK(e, r) {
                let n = e.root;
                for (let r = e.path.length - 1; r >= 0; r--)
                    if (Boolean(e.path[r].instance)) {
                        n = e.path[r];
                        break
                    }
                let i = n && n !== e.root ? n.instance : document,
                    o = i.querySelector(`[data-projection-id="${r}"]`);
                o && e.mount(o, !0)
            }

            function iJ(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function i0(e, r, n) {
                return "position" === e || "preserve-aspect" === e && !ns(ij(r), ij(n), .2)
            }
            let i1 = iL({
                    attachResizeListener: (e, r) => tD(e, "resize", r),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                i5 = {
                    current: void 0
                },
                i6 = iL({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!i5.current) {
                            let e = new i1(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), i5.current = e
                        }
                        return i5.current
                    },
                    resetTransform: (e, r) => {
                        e.style.transform = void 0 !== r ? r : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                i2 = { ...r7,
                    ...t9,
                    ...nN,
                    measureLayout: function(e) {
                        let [r, n] = t7(), i = (0, u.useContext)(C);
                        return u.createElement(il, { ...e,
                            layoutGroup: i,
                            switchLayoutGroup: (0, u.useContext)(M),
                            isPresent: r,
                            safeToRemove: n
                        })
                    }
                },
                i3 = function(e) {
                    function r(r, n = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: r,
                            projectionNodeConstructor: n,
                            useRender: i,
                            useVisualState: o,
                            Component: s
                        }) {
                            e && function(e) {
                                for (let r in e) "projectionNodeConstructor" === r ? A.projectionNodeConstructor = e[r] : A[r].Component = e[r]
                            }(e);
                            let a = (0, u.forwardRef)(function(a, l) {
                                var g, x;
                                let w = { ...(0, u.useContext)(c),
                                        ...a,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let r = (0, u.useContext)(C).id;
                                            return r && void 0 !== e ? r + "-" + e : e
                                        }(a)
                                    },
                                    {
                                        isStatic: E
                                    } = w,
                                    _ = null,
                                    O = function(e) {
                                        let {
                                            initial: r,
                                            animate: n
                                        } = function(e, r) {
                                            if (b(e)) {
                                                let {
                                                    initial: r,
                                                    animate: n
                                                } = e;
                                                return {
                                                    initial: !1 === r || y(r) ? r : void 0,
                                                    animate: y(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? r : {}
                                        }(e, (0, u.useContext)(h));
                                        return (0, u.useMemo)(() => ({
                                            initial: r,
                                            animate: n
                                        }), [T(r), T(n)])
                                    }(a),
                                    k = E ? void 0 : P(() => {
                                        if (S.hasEverUpdated) return V++
                                    }),
                                    R = o(a, E);
                                if (!E && d) {
                                    O.visualElement = function(e, r, n, i) {
                                        let o = (0, u.useContext)(h).visualElement,
                                            s = (0, u.useContext)(m),
                                            a = (0, u.useContext)(p),
                                            l = (0, u.useContext)(c).reducedMotion,
                                            d = (0, u.useRef)();
                                        i = i || s.renderer, !d.current && i && (d.current = i(e, {
                                            visualState: r,
                                            parent: o,
                                            props: n,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: l
                                        }));
                                        let v = d.current;
                                        f(() => {
                                            v && v.render()
                                        });
                                        let y = window.HandoffAppearAnimations ? f : u.useEffect;
                                        return y(() => {
                                            v && v.animationState && v.animationState.animateChanges()
                                        }), v
                                    }(s, R, w, r);
                                    let i = (0, u.useContext)(M);
                                    O.visualElement && (_ = O.visualElement.loadFeatures(w, (0, u.useContext)(m).strict, e, k, n || A.projectionNodeConstructor, i))
                                }
                                return u.createElement(j, {
                                    visualElement: O.visualElement,
                                    props: w
                                }, _, u.createElement(h.Provider, {
                                    value: O
                                }, i(s, a, k, (g = O.visualElement, x = l, (0, u.useCallback)(e => {
                                    e && R.mount && R.mount(e), g && (e ? g.mount(e) : g.unmount()), x && ("function" == typeof x ? x(e) : v(x) && (x.current = e))
                                }, [g])), R, E, O.visualElement)))
                            });
                            return a[_] = s, a
                        }(e(r, n))
                    }
                    if ("undefined" == typeof Proxy) return r;
                    let n = new Map;
                    return new Proxy(r, {
                        get: (e, i) => (n.has(i) || n.set(i, r(i)), n.get(i))
                    })
                }((e, r) => (function(e, {
                    forwardMotionProps: r = !1
                }, n, i, o) {
                    let s = k(e) ? tk : tR;
                    return { ...s,
                        preloadedFeatures: n,
                        useRender: function(e = !1) {
                            let r = (r, n, i, o, {
                                latestValues: s
                            }, a) => {
                                let l = k(r) ? tb : tc,
                                    c = l(n, s, a, r),
                                    h = function(e, r, n) {
                                        let i = {};
                                        for (let o in e)("values" !== o || "object" != typeof e.values) && (td(o) || !0 === n && tp(o) || !r && !tp(o) || e.draggable && o.startsWith("onDrag")) && (i[o] = e[o]);
                                        return i
                                    }(n, "string" == typeof r, e),
                                    p = { ...h,
                                        ...c,
                                        ref: o
                                    },
                                    {
                                        children: d
                                    } = n,
                                    f = (0, u.useMemo)(() => F(d) ? d.get() : d, [d]);
                                return i && (p["data-projection-id"] = i), (0, u.createElement)(r, { ...p,
                                    children: f
                                })
                            };
                            return r
                        }(r),
                        createVisualElement: i,
                        projectionNodeConstructor: o,
                        Component: e
                    }
                })(e, r, i2, ir, i6))
        }
    }
]);