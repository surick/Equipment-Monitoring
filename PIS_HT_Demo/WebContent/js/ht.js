!
function(I, q, r) {
	"use strict";
	var J = "ht";
	if (!I[J]) {
		!
		function() {
			Date.now && Date.prototype.getTime || (Date.now = function() {
				return (new Date).getTime()
			}), I.performance && I.performance.now ||
			function() {
				var u = Date.now();
				I.performance || (I.performance = {}), I.performance.now = function() {
					return Date.now() - u
				}
			}();
			for (var _ = Date.now(), Q = 16, E = ["ms", "moz", "webkit", "o"], A = 0; A < E.length && !I.requestAnimationFrame; ++A) I.requestAnimationFrame = I[E[A] + "RequestAnimationFrame"], I.cancelAnimationFrame = I[E[A] + "CancelAnimationFrame"] || I[E[A] + "CancelRequestAnimationFrame"];
			I.requestAnimationFrame || (I.requestAnimationFrame = function(g) {
				var B = Date.now(),
					y = Q + _ - B;
				return 0 > y && (y = 0), _ = B, I.setTimeout(function() {
					_ = Date.now(), g(performance.now())
				}, y)
			}), I.cancelAnimationFrame || (I.cancelAnimationFrame = function(j) {
				return I.clearTimeout(j)
			})
		}();
		var m, E, i, U, x = I.document,
			M = null,
			d = I[J] = {},
			v = I[J + "config"],
			z = d.Default = v && v.Default || {},
			e = d.Style = v && v.Style || {},
			y = d.Attr = v && v.Attr || {},
			P = d.Color = v && v.Color || {},
			V = d.IsGetter = v && v.IsGetter || {},
			j = Math,
			W = j.round,
			w = j.floor,
			b = j.ceil,
			N = j.sqrt,
			D = j.max,
			k = j.min,
			R = j.abs,
			K = j.cos,
			f = j.acos,
			C = j.sin,
			_ = j.pow,
			c = j.asin,
			F = j.PI,
			o = 2 * F,
			T = F / 2,
			t = j.tan,
			G = j.atan2,
			g = j.random,
			O = function(K, m, x) {
				return Math.max(m, Math.min(x, K))
			},
			s = !1,
			H = !1,
			Q = I.parseInt || global.parseInt,
			B = "3018-01-01",
			A = I.navigator ? I.navigator.platform.indexOf("Win") > -1 : !1,
			n = function(q) {
				return q * q
			},
			u = I.setTimeout,
			p = I.clearTimeout,
			h = I.location,
			$ = I.navigator ? I.navigator.userAgent.toLowerCase() : "",
			l = function(J) {
				return J.test($)
			},
			L = l(/msie/) || l(/trident/),
			S = l(/msie 10/),
			X = l(/edge/),
			a = l(/firefox/),
			Y = l(/mac/),
			Z = z.isTouchable === r ? A ? !1 : x ? "ontouchend" in x : !1 : z.isTouchable,
			ak = "default",
			sg = "single",
			Jg = "multiple",
			Km = "front",
			Uj = "back",
			$c = "left",
			Oj = "right",
			Mr = "top",
			pb = "bottom",
			rn = "center",
			Bo = "eye",
			Ch = "middle",
			zn = "east",
			yb = "west",
			Tc = "north",
			Db = "none",
			Ub = "px",
			kc = "absolute",
			os = "border",
			lp = "triangle",
			Hf = "rect",
			Wk = "circle",
			pq = "cylinder",
			$i = "shape",
			em = "items",
			bg = "normal",
			pi = "remove",
			vd = "clear",
			To = "width",
			mo = "height",
			sh = "ingroup",
			Ji = "check",
			Nr = "uncheck",
			$k = "radio",
			Pe = "radioOn",
			Yc = "radioOff",
			co = "points",
			Br = "values",
			Ln = "series",
			xr = "body",
			ob = "label",
			cj = "label2",
			ud = "note",
			bl = "note2",
			jl = "icons",
			bn = "labelFont",
			Eb = "labelColor",
			Ip = "labelSelectColor",
			Bg = "note.expanded",
			el = "note2.expanded",
			ym = "edge.expanded",
			sc = "edge.points",
			Yn = "edge.type",
			Qd = "rotation",
			go = "getRotation",
			ac = "setRotation",
			ae = "hidden",
			gj = "visible",
			Bf = "tuv",
			ck = "no",
			Aq = "draw",
			gc = "select",
			mi = "currentSubGraph",
			Kc = "selectBackground",
			Cp = "autoMakeVisible",
			uc = "autoHideScrollBar",
			ni = "scrollBarColor",
			ic = "scrollBarSize",
			bd = "indent",
			df = "rowHeight",
			un = "columnLineColor",
			Tm = "rowLineColor",
			pe = "columnLineVisible",
			xf = "rowLineVisible",
			Eh = "visibleFunc",
			Wf = "expandIcon",
			_l = "collapseIcon",
			Rj = "checkMode",
			yc = "sortFunc",
			Mi = "editable",
			Vh = "batchEditable",
			Ug = "tristate",
			to = "asc",
			al = "desc",
			vs = "position",
			He = "elevation",
			_k = "children",
			om = "translateX",
			Zn = "translateY",
			Ke = "dataModel",
			vr = "maxSize",
			ok = "shape3d",
			Mk = "shape3d.resolution",
			Bm = "shape3d.visible",
			xc = "shape3d.from.visible",
			ph = "shape3d.to.visible",
			Oe = "shape3d.top.visible",
			Lh = "shape3d.bottom.visible",
			Qo = "repeat.uv.length",
			ge = "serializeValue",
			yi = "deserializeValue",
			Xk = "centerUniform",
			Lb = "rgba(255,255,255,0)",
			Cg = "style",
			lg = "attr",
			Cf = "field",
			Df = "string",
			ug = "boolean",
			Bq = "color",
			In = "int",
			Bd = "number",
			fi = "ew-resize",
			Vj = "ns-resize",
			Vi = "pointer",
			rg = "auto",
			mn = "mousedown",
			sk = "mousemove",
			ji = "mouseup",
			nh = "mouseout",
			aq = "touchstart",
			Kp = "touchmove",
			Eq = "touchend",
			on = "keydown",
			cr = "keyup",
			cm = a ? "DOMMouseScroll" : "mousewheel",
			yl = Z ? [aq, Kp, Eq, on, cr, "keypress", "input", "contextmenu"] : [on, cr, "keypress", "input", mn, sk, ji, nh, cm, "contextmenu", "mouseenter", "mouseleave", "mouseover"],
			Qk = M,
			vh = M,
			wo = M,
			Sn = ji.length,
			Xm = function() {
				wo && (p(wo.timeout), wo = M)
			},
			Gr = function() {
				wo && yf(wo.e, wo.info)
			};
		I.addEventListener && (Z || (I.addEventListener(nh, function() {
			Xm()
		}, !1), I.addEventListener(cm, function() {
			rd()
		}, !1)), I.addEventListener(cr, function(I) {
			91 === I.keyCode ? Rc = {} : delete Rc[I.keyCode]
		}, !0), I.addEventListener(on, function(d) {
			Rc[d.keyCode] = !0
		}, !0));
		var bp, tk, Pp, _f = !1,
			Yp = M,
			tp = function(s, w) {
				var S = u(function() {
					delete Yp[S], ei(Yp) && (Yp = M), s()
				}, w);
				return S
			},
			$d = M,
			As = {},
			ti = {},
			ik = {},
			Qp = {},
			ef = {},
			Rc = {},
			Pk = {},
			or = {},
			gi = {},
			ho = {},
			Wm = /.json$/,
			Un = /^data:image\/svg\+xml/,
			ne = {},
			ad = [],
			Kf = {},
			cl = M,
			Sg = M,
			Wl = function() {},
			Ye = function() {
				throw "Oops!"
			},
			Rr = [0, 0, 0],
			xe = [0, 0, 0, 0],
			kp = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			fr = M,
			kk = M,
			pg = M,
			ih = function(r) {
				kk && !r._72O && (pg || (pg = {}), pg[r._72O = zj()] = r), bp != M ? Bh() < .05 && U && !tk && (sl = Xm) : sl = Gc
			},
			fd = function(I, T, m, A) {
				kk || (kk = {});
				var n = kk[I];
				if (n) {
					if (n.url === T) return;
					n.image ? (n.image.onload = Wl, n.image.onerror = Wl) : n.request && (n.request.onload = Wl, n.request.onerror = Wl)
				}
				if (Wm.test(T)) {
					var s = new XMLHttpRequest;
					if (kk[I] = {
						request: s,
						url: T
					}, s.overrideMimeType && s.overrideMimeType("text/plain"), T = z.beforeLoadURL(T), T.data) {
						var t = z.parse(T.data);
						Kl(I, t), z.handleImageLoaded(I, t)
					} else s.open("GET", encodeURI(T), !0), s.onload = function(d) {
						if (200 === this.status || 0 === this.status) {
							var F = z.parse(d.target.response || d.target.responseText);
							Kl(I, F), z.handleImageLoaded(I, F)
						} else Kl(I, z.handleUnfoundImage(I, T) || M)
					}, s.onerror = function() {
						Kl(I, z.handleUnfoundImage(I, T) || M)
					}, s.send(null)
				} else {
					var t = new Image;
					kk[I] = {
						image: t,
						url: T
					}, L && (T.toLowerCase().indexOf(".svg") > 0 || Un.test(T)) ? (x.body.appendChild(t), t.style.visibility = "hidden", t.onload = function() {
						u(function() {
							if (m && (t.width = m), A && (t.height = A), !t.width || !t.height) {
								var G = t.width || t.clientWidth,
									Q = t.height || t.clientHeight;
								t.width = G, t.height = Q
							}
							z.handleImageLoaded(I, t), Kl(I, t), x.body.removeChild(t), t.style.visibility = ""
						}, 180)
					}, t.onerror = function() {
						Kl(I, z.handleUnfoundImage(I, T) || M), x.body.removeChild(t), t.style.visibility = ""
					}) : (t.onload = function() {
						m && (t.width = m), A && (t.height = A), z.handleImageLoaded(I, t), Kl(I, t)
					}, t.onerror = function() {
						Kl(I, z.handleUnfoundImage(I, T) || M)
					}), /^data:image/.test(T) || (T = z.beforeLoadURL(T), /^data:image/.test(T) || (T = z.appendTimeStamp(T), T = encodeURI(T))), t.src = T
				}
			},
			Kl = function(L, z) {
				if (ti[L] = z, delete kk[L], ei(kk) && (kk = M, pg)) {
					for (var G in pg) {
						var I = pg[G];
						I._2O && (I._2O = {}), I.invalidateAll && I.invalidateAll(r, "imageLoaded", L), I.redraw && I.redraw(), I.iv(), delete I._72O
					}
					pg = M
				}
				if (z && pg) for (var G in pg) {
					var I = pg[G];
					I.invalidateAll && I.invalidateAll(r, "imageLoading", L), I.redraw && I.redraw(), I.iv()
				}
			},
			kr = function() {
				return I.performance && I.performance.now ? I.performance.now() : Date.now()
			},
			fk = function(R, E) {
				E ? p(R) : I.cancelAnimationFrame(R)
			},
			rb = function(D, v, Q) {
				return {
					width: D,
					height: v,
					comps: lo(Q) ? Q : [Q]
				}
			},
			wh = function(S, g) {
				return {
					type: Wk,
					rect: [S, g, 1.6, 1.6],
					borderWidth: 1,
					borderColor: Gf,
					gradient: nc,
					gradientColor: Sr,
					background: Gf
				}
			},
			Fl = function(z, C) {
				return rb(16, 16, {
					type: lp,
					rect: [4, 4, 10, 8],
					background: z,
					rotation: C ? 1.57 : 3.14
				})
			},
			Np = function(U, T) {
				return rb(16, 16, {
					type: lp,
					rect: [4, 4, 8, 7],
					background: U,
					rotation: T ? 3.14 : 0
				})
			},
			Nc = function(d) {
				var m = d._orientation;
				return "horizontal" === m || "h" === m
			},
			Xf = function(R) {
				var D = M || 4,
					t = M || 1,
					Y = M || 1;
				0 > D ? D = 0 : D > .25 && (D = .25);
				var j, T, $, k, H, l, U, f = .5,
					G = [],
					n = [],
					z = [],
					c = o / Y,
					i = o / t,
					J = f - D;
				for (T = 0; t >= T; T++) for (k = -F + T * i, l = K(k), H = C(k), j = 0; Y >= j; j++) $ = j * c, U = J + D * l, G.push(K($) * U, H * D, -C($) * U), (E = R) && n.push(j / Y, 1 - T / t);
				for (T = 0; t > T; T++) {
					var Z = T * (Y + 1),
						v = (T + 1) * (Y + 1);
					for (j = 0; Y > j; j++) z.push(Z + j, v + j + 1, v + j, Z + j, Z + j + 1, v + j + 1), Cd.z = ld.z = R
				}
			},
			Vf = function(t) {
				var Y = 2,
					w = 0;
				for (var $ in t) $.length === Y && Q($, 32) === Mj && (cl = Sg = t[$]), w++;
				return w
			},
			Ql = function(z, f, V, A) {
				return V || (V = Z ? 5 : 3, V /= A || 1), {
					x: z - V,
					y: f - V,
					width: 2 * V,
					height: 2 * V
				}
			},
			bi = function(W, x, m, O) {
				var G = this;
				x || (x = Z ? 5 : 3, m = 20, O = 20);
				var X = {
					x: W,
					y: x,
					width: m,
					height: O
				};
				if (m) for (var V = 0; m > V; V++) if (3 === m) O = 20;
				else for (var k = 0; O > k; k++) G = I ? I : m;
				var Y = {
					x: F,
					y: 2 * F
				};
				if (Gn(X, Y)) {
					var B = mo[0] + Mr[0] + vd[1];
					so[Bo] = G[B], G[B] = kf[Bo]
				}
			},
			Hh = function(s) {
				return (/ble$/.test(s) || /ed$/.test(s) || V[s] ? "is" : "get") + s.charAt(0).toUpperCase() + s.slice(1)
			},
			kf = function(s) {
				return "set" + s.charAt(0).toUpperCase() + s.slice(1)
			},
			bc = function(D) {
				return typeof D === Df || D instanceof String
			},
			Up = function(M) {
				return typeof M === Bd
			},
			Gc = function(w) {
				return typeof w === ug
			},
			Hj = function(K) {
				return K && "object" == typeof K
			},
			Vb = function(L) {
				return "function" == typeof L
			},
			lo = function(c) {
				return c instanceof Array
			},
			_n = function(y) {
				return y instanceof jg
			},
			ii = function(Y) {
				return lo(Y) ? new jg(Y) : Y
			},
			pr = function(t) {
				return t instanceof fb
			},
			Jj = function(D) {
				return D instanceof bo
			},
			qr = function(y) {
				return y instanceof Go
			},
			$f = function(C, K) {
				if (!(C instanceof d.Group)) return !1;
				if (!K) return C.isExpanded();
				var q = K.getDataUI(C);
				return q && q._88I ? !0 : !1
			},
			Cj = function(L) {
				return L instanceof zm
			},
			es = function(v) {
				return v && "IFRAME" === v.tagName
			},
			Zm = function(K) {
				return K == M || z.numberDigits == M ? K : parseFloat(K.toFixed(z.numberDigits))
			},
			_r = function(f, N, G) {
				var P, i = N.length;
				if (G) for (var w = 0; G > w; w++) if (3 === i) f.push(N[0]), f.push(N[1]), f.push(N[2]);
				else for (P = 0; i > P; P++) f.push(N[P]);
				else if (3 === i) f.push(N[0]), f.push(N[1]), f.push(N[2]);
				else for (P = 0; i > P; P++) f.push(N[P])
			},
			Sc = function(w) {
				return w ? Hj(w) ? w : {} : !1
			},
			vq = function(l, y, B) {
				var z, P = Hj(l) ? l : l.prototype;
				for (z in y) B && P[z] !== r || (P[z] = y[z]);
				return l
			},
			vf = function(b) {
				return String.fromCharCode(b)
			},
			Rf = function(D) {
				for (var O, c = 0, W = ""; c < D.length; c++) O = D[D.length - 1 - c], "%" === O ? O = "'" : "a" === O ? O = '"' : "]" === O && (O = "\\"), W += vf(O.charCodeAt(0) - 1);
				return W
			},
			im = function(n, q, e) {
				n.superClass.constructor.apply(q, e)
			},
			ei = function(t) {
				for (var j in t) return !1;
				return !0
			},
			yd = function(P) {
				return P ? 0 === P.length : !0
			},
			Il = function(T, z) {
				return T === z ? !0 : T.x === z.x && T.y === z.y && T.width === z.width && T.height === z.height
			},
			dd = function(V, s, l) {
				return s > V ? s : V > l ? l : V
			},
			Of = function(w) {
				return 0 > w ? -1 : w > 0 ? 1 : 0
			},
			Bh = function() {
				var z = 1e4 * C(Sn++);
				return z - w(z)
			},
			Ar = function(G, Y, u) {
				return Lm(G.x, G.y, Y.x, Y.y, u.x, u.y, u.x + u.width, u.y, !0) || Lm(G.x, G.y, Y.x, Y.y, u.x + u.width, u.y, u.x + u.width, u.y + u.height, !0) || Lm(G.x, G.y, Y.x, Y.y, u.x + u.width, u.y + u.height, u.x, u.y + u.height, !0) || Lm(G.x, G.y, Y.x, Y.y, u.x, u.y + u.height, u.x, u.y, !0)
			},
			Lm = function($, R, _, a, v, x, K, s, o) {
				var u = (K - v) * (R - x) - (s - x) * ($ - v),
					j = (s - x) * (_ - $) - (K - v) * (a - R);
				if (0 !== j) {
					var V = u / j,
						O = $ + V * (_ - $),
						S = R + V * (a - R);
					return o && (O + qk < k($, _) || O - qk > D($, _) || O + qk < k(v, K) || O - qk > D(v, K) || S + qk < k(R, a) || S - qk > D(R, a) || S + qk < k(x, s) || S - qk > D(x, s)) ? M : [O, S]
				}
				return M
			},
			fg = function(s, W, V) {
				if (s && V) if (W) {
					if (W === Cg) return s.getStyle(V);
					if (W === lg) return s.getAttr(V);
					if (W === Cf) return s[V]
				} else if (V = Hh(V), s[V]) return s[V]();
				return r
			},
			Ki = function(D, $, w, E) {
				if (D && w) if ($) {
					if ($ === Cg) D.s(w, E);
					else if ($ === lg) D.a(w, E);
					else if ($ === Cf) {
						var y = D[w];
						D[w] = E, D.fp("f:" + w, y, E)
					}
				} else w = kf(w), D[w] && D[w](E)
			},
			Cn = function(X, s, h) {
				return s && "top" !== s ? "bottom" === s ? {
					x: X.x,
					y: X.y,
					width: X.width,
					height: X.height * h
				} : "right" === s ? {
					x: X.x,
					y: X.y,
					width: X.width * h,
					height: X.height
				} : "left" === s ? {
					x: X.x + X.width * (1 - h),
					y: X.y,
					width: X.width * h,
					height: X.height
				} : void 0 : {
					x: X.x,
					y: X.y + X.height * (1 - h),
					width: X.width,
					height: X.height * h
				}
			},
			Te = function(E, X, $, P, Z) {
				X && kq(E, $, P, 1, Z, X)
			},
			xb = function(u, A, l, U) {
				var K = 1 - u;
				return K * K * A + 2 * u * K * l + u * u * U
			},
			Cd = function(h, G, P, V, j) {
				var O = 1 - h;
				return O * O * O * G + 3 * O * O * h * P + 3 * O * h * h * V + h * h * h * j
			},
			Zh = function(f) {
				var _, B, Y, n, H = 0;
				return f.forEach(function(R) {
					if (_ = R.length, _ > 0) for (B = R[0], n = 1; _ > n; n++) Y = R[n], H += Zg(B, Y), B = Y
				}), H
			},
			op = function(R, v, H) {
				var n = "__" + R,
					Y = function(D) {
						H.interactiveDisabled || H["handle_" + R](D)
					};
				H[n] || (H[n] = Y, v.addEventListener(R, Y, !1))
			},
			wk = function(z, y, D) {
				var H = "__" + z,
					V = D[H];
				V && (y.removeEventListener(z, V, !1), delete D[H])
			},
			nm = function(H, L) {
				var q = "_" + L;
				H[Hh(L)] = function() {
					return this[q]
				}, H[kf(L)] = function(h) {
					var m = this[q];
					this[q] = h, this.fp(L, m, h)
				}
			},
			Ui = function(D) {
				return q.create(D)
			},
			gr = function(L) {
				if (!L.element) {
					var k, M;
					(k = L.textField) ? M = jn(cs.TextField, k) : (k = L.textArea) ? M = jn(cs.TextArea, k) : (k = L.button) ? M = jn(cs.Button, k) : (k = L.comboBox) ? M = jn(cs.ComboBox, k) : (k = L.checkBox) ? M = jn(cs.CheckBox, k) : (k = L.radioButton) ? M = jn(cs.RadioButton, k) : (k = L.slider) ? M = jn(cs.Slider, k) : (k = L.colorPicker) ? M = jn(cs.ColorPicker, k) : (k = L.image) && (M = jn(cs.Image, k)), M && (L.element = M)
				}
			},
			_h = function(k, M) {
				var E = Dn(k);
				return E._ht = M, E
			},
			Dn = function($, D) {
				var V = x.createElement("div"),
					s = V.style;
				return V.tabIndex = -1, V.onkeydown = ap, s.msTouchAction = Db, ep(V, M, 0), Z && s.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", M), $ && (s.overflow = ae), D && gm(D, V), V
			},
			Yk = function(W, P) {
				var e = x.createElement("canvas"),
					n = e.style;
				return n.msTouchAction = Db, P || (n.pointerEvents = Db), ep(e, M, 0), W && gm(W, e), e
			},
			ep = function(z, m, D) {
				var j = z.style;
				j.border = m ? m + " solid 1px" : 0, j.outline = 0, j.padding = D ? "0 " + D + Ub : 0, pl(z)
			},
			pl = function(U) {
				var j = U.style;
				j.position = kc, j.margin = 0, j.setProperty("box-sizing", "border-box", M), j.setProperty("-moz-box-sizing", "border-box", M)
			},
			Xo = function(t, F, S, Q) {
				Q || (Q = Gl), F != M && (t.width = F * Q, t.style.width = F + Ub), S != M && (t.height = S * Q, t.style.height = S + Ub)
			},
			gm = function(G, r, p) {
				G.appendChild(r), p && (r.style.position = kc)
			},
			Ai = function($, x) {
				x.split || (x += "");
				for (var e, v = x.split("\n"), Z = 0, i = v.length, o = 0; i > o; o++) {
					var R = ib($.font, v[o]);
					R.width > Z && (Z = R.width), e || (e = R.height)
				}
				return $.ss = v, {
					width: Z,
					height: e * i
				}
			},
			Eg = function(l, U, g, J, y, P) {
				var A = U.length;
				if (1 === A) Sp(l, U[0], g, J, y);
				else for (var N = g.height / A, o = {
					x: g.x,
					y: g.y,
					width: g.width,
					height: N
				}, M = 0; M < U.length; M++) P ? jh(l, U[M], J, y, o.x, o.y, o.width, o.height, P) : Sp(l, U[M], o, J, y), o.y += N
			},
			Sp = function(u, d, B, T, n) {
				u.font = T ? T : an, u.fillStyle = n ? n : Dr, u.textAlign = rn, u.textBaseline = Ch;
				var q, y;
				B ? B.width === r ? (q = B.x, y = B.y) : (q = B.x + B.width / 2, y = B.y + B.height / 2) : (q = 0, y = 0), u.fillText(d, W(q), W(y))
			},
			Hr = function(C) {
				C.getView && (C = C.getView());
				var n = C.offsetWidth || C.scrollWidth;
				return !n && C.style.width && (n = Q(C.style.width)), n
			},
			_g = function(v) {
				v.getView && (v = v.getView());
				var d = v.offsetHeight || v.scrollHeight;
				return !d && v.style.height && (d = Q(v.style.height)), d
			},
			qh = function() {
				var e = function(K) {
						ap(K), K.stopPropagation()
					},
					d = Z ? [aq] : [on, mn, cm];
				return function($) {
					var U = Dn(),
						g = U.style;
					return g.backgroundColor = z.disabledBackground, $ && (g.backgroundImage = "url(" + $ + ")", g.backgroundPosition = "50% 50%", g.backgroundRepeat = "no-repeat no-repeat"), d.forEach(function(Y) {
						U.addEventListener(Y, e)
					}), U
				}
			}(),
			js = function(s) {
				var Z = s.getContext("2d");
				return Z.save(), Z.lineCap = Bn, Z.lineJoin = Zd, Z
			},
			sl = function(q, B, D, N) {
				Wj(q, B * Gl, D * Gl), N *= Gl, 1 !== N && q.scale(N, N)
			},
			Wj = function(Z, B, K) {
				Z.translate(B, K)
			},
			mq = function(C, n) {
				n && C.rotate(n)
			},
			ll = function(m, x, w) {
				x === r && (x = 1), w === r && (w = 1), (1 !== x || 1 !== w) && m.scale(x, w)
			},
			jf = function(r) {
				var Q = x.activeElement;
				if (x.activeElement !== r) {
					Q && Q.forceOnblur && Q.forceOnblur();
					for (var c = [], g = r.parentNode; g;) c.push([g, g.scrollLeft, g.scrollTop]), g = g.parentNode;
					if (Z) r.focus();
					else {
						var L = xg(),
							q = L.target;
						r.focus(), q.scrollLeft = L.left, q.scrollTop = L.top
					}
					c.forEach(function(d) {
						d[0].scrollLeft = d[1], d[0].scrollTop = d[2]
					})
				}
			},
			Tf = function(g) {
				return g && g.getView ? g.getView() : g
			},
			Mb = function(S, o, O, c, t) {
				if (2 === arguments.length && (O = o.y, c = o.width, t = o.height, o = o.x), S.isSelfViewEvent) S.setX(o), S.setY(O), S.setWidth(c), S.setHeight(t);
				else {
					var l = Tf(S),
						J = l.style;
					if ((x.fullscreenElement || x.mozFullScreenElement || x.webkitFullscreenElement || x.msFullscreenElement) !== l) o !== r && (J.left = o + Ub), O !== r && (J.top = O + Ub), c !== r && (J.width = c + Ub), t !== r && (J.height = t + Ub);
					else {
						var G = z.getWindowInfo();
						J.left = (o = G.left) + Ub, J.top = (O = G.top) + Ub, J.width = (c = G.width) + Ub, J.height = (t = G.height) + Ub
					}
					S.endEditing && !Z && S.endEditing(), S.redraw && S.redraw(), S.invalidate && S.invalidate(), S.onLayouted && S.onLayouted(o, O, c, t), S.fireViewEvent && S.fireViewEvent("layout")
				}
			},
			Vn = function(Y) {
				if (!Y.touches) return Y;
				var Q = Y.touches[0];
				return Q ? Q : Y.changedTouches[0]
			},
			Xd = function(F) {
				return Z ? Vn(F).target : F.target
			},
			xl = function(Q) {
				z.popup && z.popup.close(), z.popup = Q
			},
			$b = M,
			wc = function(J) {
				$b.handleWindowTouchMove(J)
			},
			dk = function(i) {
				$b.handleWindowTouchEnd(i), I.removeEventListener(Kp, wc, !1), I.removeEventListener(Eq, dk, !1), $b = M
			},
			lr = function(G) {
				$b.handleWindowMouseMove(G)
			},
			Zk = function(E) {
				$b.handleWindowMouseUp(E), I.removeEventListener(sk, lr, !1), I.removeEventListener(ji, Zk, !1), $b = M
			},
			Nm = function(_) {
				return 1 === So(_)
			},
			Ge = function(z, u) {
				return u ? u.keyCode === z : Rc[z]
			},
			zr = function(r) {
				return Ik(r) && Ge(65, r)
			},
			mb = function(N) {
				return Ge(46, N) || Ge(8, N)
			},
			kg = function(F) {
				return function(Q) {
					return Q ? Q.keyCode === F : Rc[F]
				}
			},
			Mj = 573,
			On = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
			wm = kg(On[0]),
			hh = kg(On[1]),
			aj = kg(On[2]),
			Ph = kg(On[3]),
			id = kg(On[4]),
			ar = kg(On[5]),
			Zc = kg(On[6]),
			qm = kg(On[7]),
			Co = kg(On[8]),
			gq = kg(On[9]),
			gk = kg(On[10]),
			Wb = {
				65: 1,
				83: 1,
				68: 1,
				87: 1,
				37: 1,
				38: 1,
				39: 1,
				40: 1
			},
			oq = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 487],
			zh = M,
			tg = M,
			Ep = function(v, B) {
				zh || (zh = Yk()), Xo(zh, v, B, 1);
				var q = js(zh);
				return q.clearRect(0, 0, v, B), q
			},
			Xg = function() {
				var $, O = {};
				return function(s) {
					var z, V = O[s];
					return V || ($ || ($ = Yk(), Xo($, 1, 1, 1)), z = $.getContext("2d"), z.clearRect(0, 0, 1, 1), kq(z, 0, 0, 1, 1, s), V = z.getImageData(0, 0, 1, 1).data, V = O[s] = [V[0], V[1], V[2], V[3]]), V
				}
			}(),
			qe = function(L) {
				if (!bc(L)) return L;
				var v = Xg(L);
				return v.CA || (v.CA = [v[0] / 255, v[1] / 255, v[2] / 255, v[3] / 255]), v.CA
			},
			um = function(k, G, n, J, Y) {
				var a = Yk();
				a.width = n, a.height = J;
				var C = a.getContext("2d");
				C.drawImage(k, 0, 0, n, J);
				try {
					for (var A = C.getImageData(0, 0, n, J), j = A.data, z = 0, X = j.length; X > z; z += 4) {
						var N = j[z + 0],
							K = j[z + 1],
							c = j[z + 2],
							Q = j[z + 3];
						"override_a" === Y ? j[z + 3] = 255 * G[3] : "override_rgb" === Y ? (j[z + 0] = 255 * G[0], j[z + 1] = 255 * G[1], j[z + 2] = 255 * G[2]) : "override" === Y ? (j[z + 0] = 255 * G[0], j[z + 1] = 255 * G[1], j[z + 2] = 255 * G[2], j[z + 3] = 255 * G[3]) : (j[z + 0] = G[0] * N, j[z + 1] = G[1] * K, j[z + 2] = G[2] * c, j[z + 3] = G[3] * Q)
					}
					C.putImageData(A, 0, 0)
				} catch (T) {
					return k
				}
				return a
			},
			so = function(e, z, d) {
				return z && (z = "miter" === d ? 8 * z + 20 : z + 1, e && Td(e, z)), z
			},
			Hc = function(t, a) {
				if (a) {
					var Z = new Gk(a),
						W = t.width / 2,
						$ = t.height / 2,
						K = cp([Z.tf(-W, -$), Z.tf(W, -$), Z.tf(W, $), Z.tf(-W, $)]);
					return K.x += t.x + W, K.y += t.y + $, K
				}
				return t
			},
			Sm = function(M, V, G, g, R, s, Q, o) {
				g *= Math.PI / 180;
				var H = {
					x: Math.cos(g) * (M.x - Q.x) / 2 + Math.sin(g) * (M.y - Q.y) / 2,
					y: -Math.sin(g) * (M.x - Q.x) / 2 + Math.cos(g) * (M.y - Q.y) / 2
				},
					S = Math.pow(H.x, 2) / Math.pow(V, 2) + Math.pow(H.y, 2) / Math.pow(G, 2);
				S > 1 && (V *= Math.sqrt(S), G *= Math.sqrt(S));
				var D = (R == s ? -1 : 1) * Math.sqrt((Math.pow(V, 2) * Math.pow(G, 2) - Math.pow(V, 2) * Math.pow(H.y, 2) - Math.pow(G, 2) * Math.pow(H.x, 2)) / (Math.pow(V, 2) * Math.pow(H.y, 2) + Math.pow(G, 2) * Math.pow(H.x, 2)));
				isNaN(D) && (D = 0);
				var l = {
					x: D * V * H.y / G,
					y: D * -G * H.x / V
				},
					U = {
						x: (M.x + Q.x) / 2 + Math.cos(g) * l.x - Math.sin(g) * l.y,
						y: (M.y + Q.y) / 2 + Math.sin(g) * l.x + Math.cos(g) * l.y
					},
					_ = function(Y) {
						return Math.sqrt(Math.pow(Y[0], 2) + Math.pow(Y[1], 2))
					},
					i = function(k, G) {
						return (k[0] * G[0] + k[1] * G[1]) / (_(k) * _(G))
					},
					C = function(Z, r) {
						return (Z[0] * r[1] < Z[1] * r[0] ? -1 : 1) * Math.acos(i(Z, r))
					},
					f = C([1, 0], [(H.x - l.x) / V, (H.y - l.y) / G]),
					m = [(H.x - l.x) / V, (H.y - l.y) / G],
					W = [(-H.x - l.x) / V, (-H.y - l.y) / G],
					$ = C(m, W);
				i(m, W) <= -1 && ($ = Math.PI), i(m, W) >= 1 && ($ = 0);
				var i = V > G ? V : G,
					Y = V > G ? 1 : V / G,
					a = V > G ? G / V : 1;
				if (null == o) {
					var L = {
						x: 0,
						y: 0,
						width: 0,
						height: 0
					};
					Td(L, i), L.x *= Y, L.width *= Y, L.y *= a, L.height *= a;
					var e = new Gk(g);
					return L = cp([e.tf(L.x, L.y), e.tf(L.x + L.width, L.y), e.tf(L.x + L.width, L.y + L.height), e.tf(L.x, L.y + L.height)]), L.x += U.x, L.y += U.y, [{
						x: L.x,
						y: L.y
					}, {
						x: L.x + L.width,
						y: L.y
					}, {
						x: L.x + L.width,
						y: L.y + L.height
					}, {
						x: L.x,
						y: L.y + L.height
					}]
				}
				o.translate(U.x, U.y), o.rotate(g), o.scale(Y, a), o.arc(0, 0, i, f, f + $, 1 - s), o.scale(1 / Y, 1 / a), o.rotate(-g), o.translate(-U.x, -U.y)
			},
			dm = function(S, g) {
				S && S.beginPath();
				for (var K, f, L, e = [], _ = function(Z) {
						for (var d, o = /(\-{0,1}[\d\.]+)/gi, A = []; d = o.exec(Z);) A.push(parseFloat(d[0]));
						return A
					}, p = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, N = {
						x: 0,
						y: 0
					}; K = p.exec(g);) {
					var M = K[0],
						x = M.substr(0, 1);
					if ("M" === x || "m" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 2) {
							var z = T[X],
								F = T[X + 1];
							"m" === x && (z += N.x, F += N.y), S && S.moveTo(z, F), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = L = null
					} else if ("H" === x || "h" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 1) {
							var z = T[X];
							"h" === x && (z += N.x), S && S.lineTo(z, N.y), e.push({
								x: z,
								y: N.y
							}), N.x = z
						}
						f = L = null
					} else if ("C" === x || "c" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 6) {
							var k = T[X],
								t = T[X + 1],
								r = T[X + 2],
								V = T[X + 3],
								z = T[X + 4],
								F = T[X + 5];
							"c" === x && (k += N.x, t += N.y, r += N.x, V += N.y, z += N.x, F += N.y), S && S.bezierCurveTo(k, t, r, V, z, F), e.push({
								x: k,
								y: t
							}), e.push({
								x: r,
								y: V
							}), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = [k, t, r, V, z, F], L = null
					} else if ("S" === x || "s" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 4) {
							var k, t;
							f ? (k = 2 * f[4] - f[2], t = 2 * f[5] - f[3]) : (k = N.x, t = N.y);
							var r = T[X],
								V = T[X + 1],
								z = T[X + 2],
								F = T[X + 3];
							"s" === x && (r += N.x, V += N.y, z += N.x, F += N.y), S && S.bezierCurveTo(k, t, r, V, z, F), e.push({
								x: k,
								y: t
							}), e.push({
								x: r,
								y: V
							}), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = [k, t, r, V, z, F], L = null
					} else if ("Q" === x || "q" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 4) {
							var k = T[X],
								t = T[X + 1],
								z = T[X + 2],
								F = T[X + 3];
							"q" === x && (k += N.x, t += N.y, z += N.x, F += N.y), S && S.quadraticCurveTo(k, t, z, F), e.push({
								x: k,
								y: t
							}), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = null, L = [k, t, z, F]
					} else if ("T" === x || "t" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 2) {
							var k, t;
							L ? (k = 2 * L[2] - L[0], t = 2 * L[3] - L[1]) : (k = N.x, t = N.y);
							var z = T[X],
								F = T[X + 1];
							"t" === x && (z += N.x, F += N.y), S && S.quadraticCurveTo(k, t, z, F), e.push({
								x: k,
								y: t
							}), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = null, L = [k, t, z, F]
					} else if ("V" === x || "v" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 1) {
							var F = T[X];
							"v" === x && (F += N.y), S && S.lineTo(N.x, F), e.push({
								x: N.x,
								y: F
							}), N.y = F
						}
						f = L = null
					} else if ("L" === x || "l" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 2) {
							var z = T[X],
								F = T[X + 1];
							"l" === x && (z += N.x, F += N.y), S && S.lineTo(z, F), e.push({
								x: z,
								y: F
							}), N.x = z, N.y = F
						}
						f = L = null
					} else if ("A" === x || "a" === x) {
						for (var T = _(M), X = 0; X < T.length; X += 7) {
							var w = T[X],
								Q = T[X + 1],
								A = T[X + 2],
								W = T[X + 3],
								b = T[X + 4],
								z = T[X + 5],
								F = T[X + 6];
							"a" === x && (z += N.x, F += N.y);
							var l = Sm(N, w, Q, A, W, b, {
								x: z,
								y: F
							}, S);
							l && (e = e.concat(l)), N.x = z, N.y = F
						}
						f = L = null
					}
					var P = M.substr(M.length - 1);
					("z" === P || "Z" === P) && S && S.closePath()
				}
				return e
			},
			sq = function(L, _) {
				var g, S, Q = "L" === _[0],
					u = _.length;
				for (L.save(), Q ? (L.transform(_[5], _[6], _[7], _[8], _[9], _[10]), g = L.createLinearGradient(_[1], _[2], _[3], _[4]), S = 11) : (L.transform(_[7], _[8], _[9], _[10], _[11], _[12]), g = L.createRadialGradient(_[1], _[2], _[3], _[4], _[5], _[6]), S = 13); u > S;) g.addColorStop(_[S], _[S + 1]), S += 2;
				L.fillStyle = g
			},
			ld = function(_, F) {
				var B, s, T, O, t, Q, y, L, f, S, G, u, b, I = "L" === _[0];
				B = I ? 5 : 7, s = _[B], T = _[B + 1], O = _[B + 2], t = _[B + 3], Q = _[B + 4], y = _[B + 5], L = F[0], f = F[1], S = F[2], G = F[3], u = F[4], b = F[5], _[B] = L * s + S * T, _[B + 1] = f * s + G * T, _[B + 2] = L * O + S * t, _[B + 3] = f * O + G * t, _[B + 4] = L * Q + S * y + u, _[B + 5] = f * Q + G * y + b
			},
			ur = function(K, t, O, p) {
				var E = !1;
				if (K.beginPath ? K.beginPath() : E = !0, _n(t) && (t = t._as), _n(O) && (O = O._as), O && O.length) {
					for (var r, L, Q, y, b = 0, f = 0, i = O.length; i > f; f++) r = O[f], 1 === r ? (L = t[b++], K.moveTo(L.x, E ? -L.y : L.y)) : 2 === r ? (L = t[b++], K.lineTo(L.x, E ? -L.y : L.y)) : 3 === r ? (L = t[b++], Q = t[b++], K.quadraticCurveTo(L.x, E ? -L.y : L.y, Q.x, E ? -Q.y : Q.y)) : 4 === r ? (L = t[b++], Q = t[b++], y = t[b++], K.bezierCurveTo(L.x, E ? -L.y : L.y, Q.x, E ? -Q.y : Q.y, y.x, E ? -y.y : y.y)) : 5 === r && K.closePath();
					p && 5 !== r && K.closePath()
				} else {
					var s, o, k, S = t.length;
					if (S > 0) {
						for (s = t[0], K.moveTo(s.x, E ? -s.y : s.y), o = 1; S > o; o++) k = t[o], K.lineTo(k.x, E ? -k.y : k.y);
						p && K.closePath()
					}
				}
			},
			vk = function(T, P, n, O) {
				if (_n(T) && (T = T._as), _n(P) && (P = P._as), P && P.length) {
					n = n || _q;
					for (var k, x, t, e, v, o, p, V, R = [], g = M, b = 0, y = 0, B = P.length; B > y; y++) if (k = P[y], 1 === k) R.push(g = []), g.push(T[b++]);
					else if (2 === k) g.push(T[b++]);
					else if (3 === k) {
						for (x = g[g.length - 1], t = T[b++], e = T[b++], o = 1; n > o; o++) p = xb(o / n, x.x, t.x, e.x), V = xb(o / n, x.y, t.y, e.y), g.push({
							x: p,
							y: V,
							b: !0
						});
						g.push(e)
					} else if (4 === k) {
						for (x = g[g.length - 1], t = T[b++], e = T[b++], v = T[b++], o = 1; n > o; o++) p = Cd(o / n, x.x, t.x, e.x, v.x), V = Cd(o / n, x.y, t.y, e.y, v.y), g.push({
							x: p,
							y: V,
							b: !0
						});
						g.push(v)
					} else 5 === k && g.push(g[0]);
					return O && 5 !== k && g && g.length > 2 && g.push(g[0]), R
				}
				return O && T.length > 2 && (T = T.slice(), T.push(T[0])), T ? [T] : []
			},
			$m = function(u, t, i, z, e, E) {
				var p, O, g, U = Xg(t),
					f = z,
					F = U[0],
					Y = U[1],
					j = U[2];
				if (i) {
					var S = Xg(i);
					p = S[0] - F, O = S[1] - Y, g = S[2] - j
				} else p = 255 - F, O = 255 - Y, g = 255 - j;
				for (E || (E = z > 10 ? 1 : .5, E = 1 > e ? k(E / e, 2) : E);
				(z -= E) > 0;) {
					var A = 1 - z / f,
						l = F + p * A,
						s = Y + O * A,
						x = j + g * A;
					l = k(b(l), 255), s = k(b(s), 255), x = k(b(x), 255), u.strokeStyle = "rgb(" + l + "," + s + "," + x + ")", u.lineWidth = z, u.stroke()
				}
			},
			_p = function() {
				var O = {};
				return function(K, P) {
					var v = K + "-" + P,
						n = O[v];
					if (n) return n;
					var i, x, g, j = Xg(K);
					return 0 > P ? (P = (100 + P) / 100, i = b(j[0] * P), x = b(j[1] * P), g = b(j[2] * P)) : (P /= 100, i = j[0], x = j[1], g = j[2], i += (255 - i) * P, x += (255 - x) * P, g += (255 - g) * P, i = k(b(i), 255), x = k(b(x), 255), g = k(b(g), 255)), O[v] = "rgb(" + i + "," + x + "," + g + ")"
				}
			}(),
			kq = function(g, $, O, U, z, d) {
				d && (g.fillStyle = d), g.beginPath(), g.rect($, O, U, z), g.fill()
			},
			dq = function(h, M, p, Y, e, S, B) {
				h.beginPath(), Ed[M](h, p.x, p.y, p.width, p.height, Y, e, S, B)
			},
			Ff = function(h, A, P, w, d) {
				var r = Ed[P];
				h.fillStyle = r ? r(h, A, w ? w : Sr, d.x, d.y, d.width, d.height) : A
			},
			Hd = function(Q, V, y, x, l, R) {
				try {
					if (!V.tagName && V.comps) {
						V._cacheImage_ || (V._cacheImage_ = {});
						var G;
						G = "override" === x ? "colors_override" : "override_rgb" === x ? "colors_override_rgb" : "override_a" === x ? "colors_override_a" : "colors", V._cacheImage_[G] || (V._cacheImage_[G] = {
							__count__: 0
						});
						var k = V._cacheImage_[G][y];
						k || (V._cacheImage_[G].__count__ > z.imageCacheThreshold && (V._cacheImage_[G] = {
							__count__: 0
						}), k = d.Default.toCanvas(V, Dc(V), pd(V), null, l, R, y, null, x), V._cacheImage_[G][y] = k, V._cacheImage_[G].__count__++), V = k
					}
					Q.fillStyle = Q.createPattern(V, "repeat")
				} catch (K) {
					Q.fillStyle = "black"
				}
			},
			Ac = function(j, b, A, M, T, L, I) {
				j.save(), j.translate(b, A), j.scale(1, I / L), j.arc(0, 0, L, M, T), j.restore()
			},
			te = function(d, u, w, Q, Z, e, n, N) {
				var c, T, $, I, S, m, E, _, W, p, h;
				if (R(Z) > 2 * F && (Z = 2 * F), S = b(R(Z) / (F / 4)), c = Z / S, T = -c, $ = -Q, S > 0) {
					m = u + K(Q) * e, E = w + C(-Q) * n, N ? d.lineTo(m, E) : d.moveTo(m, E);
					for (var Y = 0; S > Y; Y++) $ += T, I = $ - T / 2, _ = u + K($) * e, W = w + C($) * n, p = u + K(I) * (e / K(T / 2)), h = w + C(I) * (n / K(T / 2)), d.quadraticCurveTo(p, h, _, W)
				}
			},
			$n = function(w, N, A, d, u, $, o, W, r) {
				6 === arguments.length && (o = $, W = $, r = $);
				var K = N + d,
					j = A + u,
					Z = u > d ? 2 * d : 2 * u;
				$ = Z > $ ? $ : Z, o = Z > o ? o : Z, W = Z > W ? W : Z, r = Z > r ? r : Z;
				var i = .29 * r,
					v = .58 * r;
				w.moveTo(K, j - r), w.quadraticCurveTo(K, j - v, K - i, j - i), w.quadraticCurveTo(K - v, j, K - r, j), i = .29 * W, v = .58 * W, w.lineTo(N + W, j), w.quadraticCurveTo(N + v, j, N + i, j - i), w.quadraticCurveTo(N, j - v, N, j - W), i = .29 * $, v = .58 * $, w.lineTo(N, A + $), w.quadraticCurveTo(N, A + v, N + i, A + i), w.quadraticCurveTo(N + v, A, N + $, A), i = .29 * o, v = .58 * o, w.lineTo(K - o, A), w.quadraticCurveTo(K - v, A, K - i, A + i), w.quadraticCurveTo(K, A + v, K, A + o), w.lineTo(K, j - r)
			},
			Qc = function(L, b, I, e, V, N, $) {
				b && (I = W(I), e = W(e), $ || ($ = 1), L.fillStyle = b, L.beginPath(), L.rect(I, e, $, N), L.rect(I, e, V, $), L.rect(I, e + N - $, V, $), L.rect(I + V - $, e, $, N), L.fill())
			},
			Uk = function(o, i, e, C) {
				var j = C.x,
					A = C.y,
					n = C.width,
					J = C.height;
				if (!(!i || !e || 0 >= n || 0 >= J)) {
					var S, m = Mp(i),
						q = li(i),
						r = e > 0;
					1 === e || -1 === e ? (o.fillStyle = r ? m : q, o.beginPath(), o.rect(j, A, 1, J), o.rect(j, A, n, 1), o.fill(), o.fillStyle = r ? q : m, o.beginPath(), o.rect(j, A + J - 1, n, 1), o.rect(j + n - 1, A, 1, J), o.fill()) : (e = k(R(e), k(n / 2, J / 2)), S = o.createLinearGradient(j, A, j + e, A), S.addColorStop(0, r ? m : q), S.addColorStop(1, i), o.fillStyle = S, o.beginPath(), o.moveTo(j, A), o.lineTo(j + e, A + e), o.lineTo(j + e, A + J - e), o.lineTo(j, A + J), o.lineTo(j, A), o.fill(), S = o.createLinearGradient(j, A, j, A + e), S.addColorStop(0, r ? m : q), S.addColorStop(1, i), o.fillStyle = S, o.beginPath(), o.moveTo(j, A), o.lineTo(j + e, A + e), o.lineTo(j + n - e, A + e), o.lineTo(j + n, A), o.lineTo(j, A), o.fill(), S = o.createLinearGradient(j, A + J, j, A + J - e), S.addColorStop(0, r ? q : m), S.addColorStop(1, i), o.fillStyle = S, o.beginPath(), o.moveTo(j, A + J), o.lineTo(j + e, A + J - e), o.lineTo(j + n - e, A + J - e), o.lineTo(j + n, A + J), o.lineTo(j, A + J), o.fill(), S = o.createLinearGradient(j + n, A, j + n - e, A), S.addColorStop(0, r ? q : m), S.addColorStop(1, i), o.fillStyle = S, o.beginPath(), o.moveTo(j + n, A), o.lineTo(j + n - e, A + e), o.lineTo(j + n - e, A + J - e), o.lineTo(j + n, A + J), o.lineTo(j + n, A), o.fill())
				}
			},
			Lc = function(H, t, W, N, y, x, U) {
				var w = H.createLinearGradient(N, y, x, U);
				return w.addColorStop(0, W), w.addColorStop(1, t), w
			},
			Cb = function(m, G, d, O, M, t, J) {
				var E = m.createLinearGradient(O, M, t, J);
				return E.addColorStop(0, G), E.addColorStop(.5, d), E.addColorStop(1, G), E
			},
			Zl = function(m, T, I, e, G, p, o) {
				var r = m.createLinearGradient(e, G, p, o);
				return r.addColorStop(0, T), r.addColorStop(1 / 3, I), r.addColorStop(2 / 3, T), r.addColorStop(1, I), r
			},
			Rl = function(m, z, I, Y, S, n, K, i, Q) {
				var t = m.createRadialGradient(Y + n * i, S + K * Q, k(n, K) / 24, Y + n / 2, S + K / 2, D(n, K) / 2);
				return t.addColorStop(0, I), t.addColorStop(1, z), t
			},
			Ed = {
				polygon: function(v, E, i, G, n, y) {
					(y == M || 3 > y) && (y = 6);
					for (var f, q, P = k(G, n) / 2, t = E + G / 2, j = i + n / 2, N = 0, R = 2 * F / y, a = 0; y > a; a++) f = t + K(N) * P, q = j + C(N) * P, 0 === a ? v.moveTo(f, q) : v.lineTo(f, q), N += R;
					v.closePath()
				},
				arc: function(V, W, J, N, q, y, D, $, S) {
					y == M && (y = F), D == M && (D = o), $ == M && ($ = !0);
					var G = W + N / 2,
						w = J + q / 2;
					$ && V.moveTo(G, w), S ? Ac(V, G, w, y, D, N / 2, q / 2) : V.arc(G, w, k(N, q) / 2, y, D), $ && V.closePath()
				},
				rect: function(m, N, w, X, k) {
					m.rect(N, w, X, k)
				},
				circle: function(U, h, E, A, l) {
					U.arc(h + A / 2, E + l / 2, k(A, l) / 2, 0, o, !0)
				},
				oval: function(K, Q, q, G, y) {
					Ac(K, Q + G / 2, q + y / 2, 0, o, G / 2, y / 2)
				},
				roundRect: function(n, y, R, B, u, c) {
					c == M && (c = k(k(B, u) / 4, 8)), $n(n, y, R, B, u, c)
				},
				star: function(P, A, v, e, K) {
					var L = 2 * e,
						z = 2 * K,
						H = A + e / 2,
						m = v + K / 2;
					P.moveTo(H - L / 4, m - z / 12), P.lineTo(A + .306 * e, v + .579 * K), P.lineTo(H - L / 6, m + z / 4), P.lineTo(A + e / 2, v + .733 * K), P.lineTo(H + L / 6, m + z / 4), P.lineTo(A + .693 * e, v + .579 * K), P.lineTo(H + L / 4, m - z / 12), P.lineTo(A + .611 * e, v + .332 * K), P.lineTo(H + 0, m - z / 4), P.lineTo(A + .388 * e, v + .332 * K), P.closePath()
				},
				triangle: function(A, d, j, c, y) {
					A.moveTo(d + c / 2, j), A.lineTo(d + c, j + y), A.lineTo(d, j + y), A.closePath()
				},
				hexagon: function(w, W, I, o, d) {
					w.moveTo(W, I + d / 2), w.lineTo(W + o / 4, I + d), w.lineTo(W + 3 * o / 4, +I + d), w.lineTo(W + o, I + d / 2), w.lineTo(W + 3 * o / 4, I), w.lineTo(W + o / 4, I), w.closePath()
				},
				pentagon: function(T, H, X, x, F) {
					var D = 2 * x,
						w = 2 * F,
						L = H + x / 2,
						s = X + F / 2;
					T.moveTo(L - D / 4, s - w / 12), T.lineTo(L - D / 6, s + w / 4), T.lineTo(L + D / 6, s + w / 4), T.lineTo(L + D / 4, s - w / 12), T.lineTo(L + 0, s - w / 4), T.closePath()
				},
				diamond: function(D, h, X, K, R) {
					D.moveTo(h + K / 2, X), D.lineTo(h, X + R / 2), D.lineTo(h + K / 2, X + R), D.lineTo(h + K, X + R / 2), D.closePath()
				},
				rightTriangle: function(s, u, c, $, I) {
					s.moveTo(u, c), s.lineTo(u + $, c + I), s.lineTo(u, c + I), s.closePath()
				},
				parallelogram: function(d, f, W, J, n) {
					var w = J / 4;
					d.moveTo(f + w, W), d.lineTo(f + J, W), d.lineTo(f + J - w, W + n), d.lineTo(f, W + n), d.closePath()
				},
				trapezoid: function(x, P, N, i, l) {
					var h = i / 4;
					x.moveTo(P + h, N), x.lineTo(P + i - h, N), x.lineTo(P + i, N + l), x.lineTo(P, N + l), x.closePath()
				},
				"linear.southwest": function(p, k, R, T, S, v, L) {
					return Lc(p, k, R, T, S + L, T + v, S)
				},
				"linear.southeast": function(S, a, E, X, B, A, v) {
					return Lc(S, a, E, X + A, B + v, X, B)
				},
				"linear.northwest": function(C, y, R, U, v, c, d) {
					return Lc(C, y, R, U, v, U + c, v + d)
				},
				"linear.northeast": function(z, n, P, o, F, L, R) {
					return Lc(z, n, P, o + L, F, o, F + R)
				},
				"linear.north": function(R, L, p, e, H, C, z) {
					return Lc(R, L, p, e, H, e, H + z)
				},
				"linear.south": function(B, R, G, H, K, Y, z) {
					return Lc(B, R, G, H, K + z, H, K)
				},
				"linear.west": function(I, s, d, Y, u, n) {
					return Lc(I, s, d, Y, u, Y + n, u)
				},
				"linear.east": function(m, e, t, i, f, u) {
					return Lc(m, e, t, i + u, f, i, f)
				},
				"radial.center": function(W, U, K, f, A, D, T) {
					return Rl(W, U, K, f, A, D, T, .5, .5)
				},
				"radial.southwest": function(F, g, r, k, q, i, A) {
					return Rl(F, g, r, k, q, i, A, .25, .75)
				},
				"radial.southeast": function(X, m, k, Z, F, x, B) {
					return Rl(X, m, k, Z, F, x, B, .75, .75)
				},
				"radial.northwest": function($, J, v, r, P, B, w) {
					return Rl($, J, v, r, P, B, w, .25, .25)
				},
				"radial.northeast": function(D, E, s, _, H, A, $) {
					return Rl(D, E, s, _, H, A, $, .75, .25)
				},
				"radial.north": function(r, h, k, v, E, T, e) {
					return Rl(r, h, k, v, E, T, e, .5, .25)
				},
				"radial.south": function(r, M, K, B, O, L, v) {
					return Rl(r, M, K, B, O, L, v, .5, .75)
				},
				"radial.west": function(Q, U, s, V, t, Z, u) {
					return Rl(Q, U, s, V, t, Z, u, .25, .5)
				},
				"radial.east": function(D, j, s, x, q, G, w) {
					return Rl(D, j, s, x, q, G, w, .75, .5)
				},
				"spread.horizontal": function(J, m, F, P, I, _) {
					return Cb(J, m, F, P, I, P + _, I)
				},
				"spread.vertical": function(q, E, Y, n, h, f, J) {
					return Cb(q, E, Y, n, h, n, h + J)
				},
				"spread.diagonal": function(k, J, W, v, X, h, E) {
					return Cb(k, J, W, v + h, X, v, X + E)
				},
				"spread.antidiagonal": function(n, L, S, f, g, p, m) {
					return Cb(n, L, S, f, g, f + p, g + m)
				},
				"spread.north": function(p, S, N, O, L, R, D) {
					return Zl(p, S, N, O, L - D / 4, O, L + D + D / 4)
				},
				"spread.south": function(f, F, l, N, m, M, Y) {
					return Zl(f, l, F, N, m - Y / 4, N, m + Y + Y / 4)
				},
				"spread.west": function(x, w, E, b, A, j) {
					return Zl(x, w, E, b - j / 4, A, b + j + j / 4, A)
				},
				"spread.east": function(l, Q, x, w, u, J) {
					return Zl(l, x, Q, w - J / 4, u, w + J + J / 4, u)
				}
			},
			Kj = function(R, m, S) {
				return new Gk(R).tf(m, S)
			},
			Ri = function(p) {
				var E = p.touches[0],
					u = p.touches[1],
					t = E.clientX,
					O = E.clientY,
					q = u.clientX,
					K = u.clientY;
				return N((t - q) * (t - q) + (O - K) * (O - K))
			},
			Pn = (function() {
				for (var L = 0, v = al.split(""), k = 0; k < v.length; k++) L = 10 * Q(v[k]) + L;
				return Xf(I[Mj.toString(8 * k) + ob.substr(k)]), L
			}(), function(b, A, f) {
				for (var o = 0; o < f.size(); o++) {
					var Y = f.get(o);
					b.co(Y) && A.add(Y)
				}
				for (o = 0; o < f.size(); o++) Y = f.get(o), Pn(b, A, Y._children)
			}),
			sr = function(A, K, k) {
				for (var h = 0; h < k.size(); h++) {
					var y = k.get(k.size() - 1 - h);
					A.co(y) && K.add(y)
				}
				for (h = 0; h < k.size(); h++) y = k.get(h), sr(A, K, y._children)
			},
			Nj = function(l, y, Z) {
				for (var W = !1, C = 0; C < Z.size(); C++) {
					var O = Z.get(C);
					l.co(O) ? W && y.add(O) : W = 1
				}
				for (C = 0; C < Z.size(); C++) O = Z.get(C), Nj(l, y, O._children)
			},
			_o = function(x, K, q) {
				for (var T = !1, W = 0; W < q.size(); W++) {
					var i = q.get(q.size() - 1 - W);
					x.co(i) ? T && K.add(i) : T = !0
				}
				for (W = 0; W < q.size(); W++) i = q.get(W), _o(x, K, i._children)
			},
			Mg = function(U, H, z, d) {
				var F = d == M;
				if (0 !== H || 0 !== z || !F && 0 !== d) {
					var B, J, a, k, D, s = new jg;
					U.each(function(K) {
						if (pr(K)) {
							var g = !0;
							if (a) for (B = 0; B < a.size(); B++) J = a.get(B), J.isHostOn(K) ? (a.removeAt(B), B--, s.remove(J)) : g && (K.isHostOn(J) || K.isLoopedHostOn(J)) && (g = !1);
							if (k) for (B = 0; B < k.size(); B++) J = k.get(B), xk(J, K) ? (k.removeAt(B), B--, s.remove(J)) : g && xk(K, J) && (g = !1);
							if (D) for (B = 0; B < D.size(); B++) J = D.get(B), gn(J, K) ? (D.removeAt(B), B--, s.remove(J)) : g && gn(K, J) && (g = !1);
							g && (s.add(K), (K._host || K._69O) && (a || (a = new jg), a.add(K)), (qr(K) || qr(K._parent)) && (k || (k = new jg), k.add(K)), (Cj(K) || Cj(K._parent)) && (D || (D = new jg), D.add(K)))
						} else if (Jj(K) && K.s(Yn) === co) {
							var Y = K.s(sc);
							if (Y && !Y.isEmpty()) {
								var P = new jg;
								Y.each(function($) {
									$ = Hg($), F ? ($.x += H, $.y += z) : ($.x += H, $.y += d, $.e == M ? $.e = z : $.e += z), P.add($)
								}), K.s(sc, P)
							}
						}
					}), s.each(function(S) {
						F ? S.translate(H, z) : S.translate3d(H, z, d)
					})
				}
			},
			ss = function(n, e) {
				for (; n && !n.hasOwnProperty(e);) n = q.getPrototypeOf(n);
				return n && q.getOwnPropertyDescriptor(n, e)
			},
			Dl = q.getPrototypeOf ?
		function(c, f, b) {
			var R = ss(f, b);
			R && q.defineProperty(c, b, R)
		} : function(I, A, J) {
			I[J] = A[J]
		}, xp = {
			1: 29,
			2: 30,
			3: 31,
			4: 32,
			5: 33,
			6: 26,
			7: 27,
			8: 28,
			9: 21,
			10: 22,
			11: 23,
			12: 24,
			13: 25,
			14: 14,
			15: 15,
			16: 16,
			17: 17,
			18: 18,
			19: 19,
			20: 20,
			21: 9,
			22: 10,
			23: 11,
			24: 12,
			25: 13,
			26: 6,
			27: 7,
			28: 8,
			29: 1,
			30: 2,
			31: 3,
			32: 4,
			33: 5,
			34: 36,
			35: 37,
			36: 34,
			37: 35,
			38: 54,
			39: 55,
			40: 52,
			41: 53,
			42: 50,
			43: 51,
			44: 49,
			50: 42,
			51: 43,
			52: 40,
			53: 41,
			54: 38,
			55: 39
		}, Dd = function() {
			var y = {
				1: function(I, G) {
					return {
						x: I.x - G.width / 2,
						y: I.y - G.height / 2
					}
				},
				2: function(Z, R) {
					return {
						x: Z.x + R.width / 2,
						y: Z.y - R.height / 2
					}
				},
				3: function(M, U) {
					return {
						x: M.x + M.width / 2,
						y: M.y - U.height / 2
					}
				},
				4: function(q, C) {
					return {
						x: q.x + q.width - C.width / 2,
						y: q.y - C.height / 2
					}
				},
				5: function(C, W) {
					return {
						x: C.x + C.width + W.width / 2,
						y: C.y - W.height / 2
					}
				},
				6: function(k) {
					return {
						x: k.x,
						y: k.y
					}
				},
				7: function(k) {
					return {
						x: k.x + k.width / 2,
						y: k.y
					}
				},
				8: function(y) {
					return {
						x: y.x + y.width,
						y: y.y
					}
				},
				9: function(K, T) {
					return {
						x: K.x - T.width / 2,
						y: K.y + T.height / 2
					}
				},
				10: function(K, i) {
					return {
						x: K.x + i.width / 2,
						y: K.y + i.height / 2
					}
				},
				11: function(a, u) {
					return {
						x: a.x + a.width / 2,
						y: a.y + u.height / 2
					}
				},
				12: function(a, $) {
					return {
						x: a.x - $.width / 2 + a.width,
						y: a.y + $.height / 2
					}
				},
				13: function(p, b) {
					return {
						x: p.x + p.width + b.width / 2,
						y: p.y + b.height / 2
					}
				},
				14: function(U, b) {
					return {
						x: U.x - b.width / 2,
						y: U.y + U.height / 2
					}
				},
				15: function(y) {
					return {
						x: y.x,
						y: y.y + y.height / 2
					}
				},
				16: function(t, U) {
					return {
						x: t.x + U.width / 2,
						y: t.y + t.height / 2
					}
				},
				17: function(t) {
					return {
						x: t.x + t.width / 2,
						y: t.y + t.height / 2
					}
				},
				18: function(T, b) {
					return {
						x: T.x + T.width - b.width / 2,
						y: T.y + T.height / 2
					}
				},
				19: function(K) {
					return {
						x: K.x + K.width,
						y: K.y + K.height / 2
					}
				},
				20: function(n, d) {
					return {
						x: n.x + n.width + d.width / 2,
						y: n.y + n.height / 2
					}
				},
				21: function(E, n) {
					return {
						x: E.x - n.width / 2,
						y: E.y + E.height - n.height / 2
					}
				},
				22: function(i, F) {
					return {
						x: i.x + F.width / 2,
						y: i.y + i.height - F.height / 2
					}
				},
				23: function(H, X) {
					return {
						x: H.x + H.width / 2,
						y: H.y + H.height - X.height / 2
					}
				},
				24: function(s, V) {
					return {
						x: s.x + s.width - V.width / 2,
						y: s.y + s.height - V.height / 2
					}
				},
				25: function(C, z) {
					return {
						x: C.x + C.width + z.width / 2,
						y: C.y + C.height - z.height / 2
					}
				},
				26: function(t) {
					return {
						x: t.x,
						y: t.y + t.height
					}
				},
				27: function(O) {
					return {
						x: O.x + O.width / 2,
						y: O.y + O.height
					}
				},
				28: function(W) {
					return {
						x: W.x + W.width,
						y: W.y + W.height
					}
				},
				29: function(F, R) {
					return {
						x: F.x - R.width / 2,
						y: F.y + F.height + R.height / 2
					}
				},
				30: function(c, d) {
					return {
						x: c.x + d.width / 2,
						y: c.y + c.height + d.height / 2
					}
				},
				31: function($, w) {
					return {
						x: $.x + $.width / 2,
						y: $.y + $.height + w.height / 2
					}
				},
				32: function(y, K) {
					return {
						x: y.x + y.width - K.width / 2,
						y: y.y + y.height + K.height / 2
					}
				},
				33: function(H, b) {
					return {
						x: H.x + H.width + b.width / 2,
						y: H.y + H.height + b.height / 2
					}
				},
				34: function(p, Y) {
					return {
						x: p.x,
						y: p.y - Y.height / 2
					}
				},
				35: function(q, Y) {
					return {
						x: q.x + q.width,
						y: q.y - Y.height / 2
					}
				},
				36: function(K, X) {
					return {
						x: K.x,
						y: K.y + K.height + X.height / 2
					}
				},
				37: function(x, e) {
					return {
						x: x.x + x.width,
						y: x.y + x.height + e.height / 2
					}
				},
				38: function(l, Z) {
					return {
						x: l.x + l.width / 4,
						y: l.y - Z.height / 2
					}
				},
				39: function(d, z) {
					return {
						x: d.x + 3 * d.width / 4,
						y: d.y - z.height / 2
					}
				},
				40: function(T) {
					return {
						x: T.x + T.width / 4,
						y: T.y
					}
				},
				41: function($) {
					return {
						x: $.x + 3 * $.width / 4,
						y: $.y
					}
				},
				42: function(q, b) {
					return {
						x: q.x + q.width / 4,
						y: q.y + b.height / 2
					}
				},
				43: function(W, t) {
					return {
						x: W.x + 3 * W.width / 4,
						y: W.y + t.height / 2
					}
				},
				44: function(W, x) {
					return {
						x: W.x + W.width / 2,
						y: W.y + W.height / 2 - x.height / 2
					}
				},
				45: function(e) {
					return {
						x: e.x + e.width / 4,
						y: e.y + e.height / 2
					}
				},
				46: function(y, o) {
					return {
						x: y.x + y.width / 2 - o.width / 2,
						y: y.y + y.height / 2
					}
				},
				47: function(N, F) {
					return {
						x: N.x + N.width / 2 + F.width / 2,
						y: N.y + N.height / 2
					}
				},
				48: function(I) {
					return {
						x: I.x + 3 * I.width / 4,
						y: I.y + I.height / 2
					}
				},
				49: function(f, J) {
					return {
						x: f.x + f.width / 2,
						y: f.y + f.height / 2 + J.height / 2
					}
				},
				50: function(K, f) {
					return {
						x: K.x + K.width / 4,
						y: K.y + K.height - f.height / 2
					}
				},
				51: function(r, y) {
					return {
						x: r.x + 3 * r.width / 4,
						y: r.y + r.height - y.height / 2
					}
				},
				52: function(G) {
					return {
						x: G.x + G.width / 4,
						y: G.y + G.height
					}
				},
				53: function(e) {
					return {
						x: e.x + 3 * e.width / 4,
						y: e.y + e.height
					}
				},
				54: function(l, L) {
					return {
						x: l.x + l.width / 4,
						y: l.y + l.height + L.height / 2
					}
				},
				55: function(P, L) {
					return {
						x: P.x + 3 * P.width / 4,
						y: P.y + P.height + L.height / 2
					}
				}
			};
			return Vf(I) ?
			function(j, N, x) {
				return y[j](N, x ? x : kp)
			} : void 0
		}();
		vq(P, {
			highlight: "#1ABC9C",
			label: "#000",
			labelSelect: "#FFF",
			transparent: "rgba(0,0,0,0.35)",
			titleBackground: "#2C3E50",
			titleIconBackground: "#868686",
			headerBackground: "#ECF0F1",
			headerIconBackground: "#868686",
			headerSeparator: "#868686",
			headerLine: "#D9D9D9",
			background: "#FFF",
			disabledBackground: "rgba(255,255,255,0.65)",
			toolTipBackground: "#FFFFE0",
			rectSelectBorder: "#2C3E50",
			rectSelectBackground: "rgba(0,0,0,0.35)",
			editPointBorder: "#2C3E50",
			editPointBackground: "#D9D9D9",
			dash: "#2C3E50",
			groupBackground: "#ECF0F1",
			groupTitleBackground: "#2C3E50",
			gridBackground: "#D9D9D9",
			gridCellBorderColor: "#868686",
			gridBlockColor: "#868686",
			reverse: "#868686",
			contentIconBackground: "#868686",
			contentLine: "#D9D9D9",
			widgetBackground: "#ECF0F1",
			widgetBorder: "#D9D9D9",
			widgetIconBackground: "#868686",
			widgetIconBorder: "#868686",
			widgetIconGradient: "#D9D9D9",
			widgetIconHighlight: "#43AFF1",
			imageBackground: "#3498DB",
			imageGradient: "#D9D9D9",
			chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
		}, !0);
		var Vc = P.reverse,
			sm = P.transparent,
			Ol = P.rectSelectBackground,
			mm = P.dash,
			Lj = P.titleBackground,
			Gh = P.titleIconBackground,
			Kr = P.headerBackground,
			Vq = P.headerIconBackground,
			th = P.headerSeparator,
			$r = P.headerLine,
			Ak = P.contentIconBackground,
			ol = P.contentLine,
			Nd = (P.widgetIconHighlight, P.widgetIconBorder),
			Gf = (P.widgetIconGradient, P.imageBackground),
			Sr = P.imageGradient,
			qj = P.highlight,
			dc = P.label,
			Hn = P.labelSelect;
		if (B && !I.noAlert) {
			var Le = new Date,
				Uq = B.split("-"),
				qo = new Date(Le.getFullYear(), Le.getMonth(), Le.getDate()),
				B = new Date(Q(Uq[0], 10), Q(Uq[1], 10) - 1, Q(Uq[2], 10)),
				rf = qo.getTime(),
				rp = B.getTime(),
				eg = J + "_try",
				Io = I.alert;
			try {
				var Hl = I.localStorage;
				if (Hl && Io) if (rp > rf && 1728e6 > rp - rf) {
					var Pb = (rp - rf) / 864e5;
					Hl && Hl[eg] != Pb && (Hl[eg] = Pb, Io("HT for Web free trial license will expire in " + Pb + " days, please apply for a new license!"))
				} else rf >= rp && Io("Your free trial of HT for Web has expired!"), Hl && delete Hl[eg]
			} catch (Aj) {}
		}
		var vb = {
			ms_ac: function(q, z) {
				for (var E = z.ms_ac, k = 0; k < E.length; k++) nm(q, E[k])
			},
			ms_listener: function(v) {
				v.addListeners = function() {
					for (var y = this, A = 0; A < yl.length; A++) y["handle_" + yl[A]] && op(yl[A], y.getView(), y)
				}, v.removeListeners = function() {
					for (var b = this, B = 0; B < yl.length; B++) b["handle_" + yl[B]] && wk(yl[B], b.getView(), b)
				}
			},
			ms_fire: function(c) {
				c.mp = function(M, K, y) {
					this.addPropertyChangeListener(M, K, y)
				}, c.ump = function(n, O) {
					this.removePropertyChangeListener(n, O)
				}, c.fp = function(q, A, z, U, K) {
					return this.firePropertyChange(q, A, z, U, K)
				}, c.addPropertyChangeListener = function(P, W, t) {
					var u = this;
					u._62I || (u._62I = new lf), u._62I.add(P, W, t)
				}, c.removePropertyChangeListener = function(j, h) {
					this._62I && this._62I.remove(j, h)
				}, c.firePropertyChange = function(f, e, j, Q, V) {
					if (Q) {
						if (Q(e, j)) return !1
					} else if (e === j) return !1;
					var g = this,
						i = V || {};
					return i.property = f, i.oldValue = e, i.newValue = j, i.source = g, i.data = g, g._62I && g._62I.fire(i), g.onPropertyChanged && g.onPropertyChanged(i), !0
				}
			},
			ms_attr: function(X) {
				X.a = function(Z, x) {
					var P = this;
					if (2 === arguments.length) P.setAttr(Z, x);
					else {
						if (!Hj(Z)) return P.getAttr(Z);
						for (var B in Z) P.setAttr(B, Z[B])
					}
					return P
				}, X.getAttr = function(v, I) {
					if (I === r && (I = 1), this._attrObject && v in this._attrObject) return this._attrObject[v];
					if (this.getImage) {
						var B = this.getImage();
						if (bc(B) && (B = ti[B]), Hj(B) && "dataBindings" in B) for (var O = B.dataBindings, x = O.length - 1; x >= 0; x--) {
							var j = O[x];
							if (j.attr === v) {
								if ("defaultValue" in j) return j.defaultValue;
								break
							}
						}
					}
					return I ? y[v] : r
				}, X.setAttr = function(F, V) {
					var R = this;
					R._attrObject || (R._attrObject = {});
					var O = R._attrObject[F];
					V === r ? delete R._attrObject[F] : R._attrObject[F] = V, R.fp && R.fp("a:" + F, O, V) && R.onAttrChanged && R.onAttrChanged(F, O, V)
				}, X.getSerializableAttrs = function() {
					var N, W = {};
					for (N in this._attrObject) W[N] = 1;
					return W
				}
			},
			ms_bnb: function(p) {
				p.getBodyColor = function(m) {
					return m.s("body.color")
				}, p.getBorderColor = function(P) {
					return P.s("border.color")
				}
			},
			_51o: function(n) {
				n.mi = function(D, t, R) {
					this.addInteractorListener(D, t, R)
				}, n.umi = function(J, Q) {
					this.removeInteractorListener(J, Q)
				}, n.fi = function(e) {
					this.fireInteractorEvent(e)
				}, n.addInteractorListener = function(D, F, R) {
					var U = this;
					U._63I || (U._63I = new lf), U._63I.add(D, F, R)
				}, n.removeInteractorListener = function(e, s) {
					this._63I.remove(e, s)
				}, n.fireInteractorEvent = function(x) {
					this._63I && this._63I.fire(x)
				}, n.setInteractors = function(U) {
					var o = this,
						W = o._interactors;
					W && W.each(function(n) {
						n.tearDown()
					}), lo(U) && (U = new jg(U)), o._interactors = U, U && U.each(function(Q) {
						Q.setUp()
					}), o.fp("interactors", W, U), o.invalidateSelection()
				}, n.getInteractors = function() {
					return this._interactors
				}
			},
			_49o: function(Z) {
				Z._44O = M, Z._45O = M, Z.getTopPainters = function() {
					return this._44O
				}, Z.getBottomPainters = function() {
					return this._45O
				}, Z.addTopPainter = function(c) {
					var x = this;
					x._44O || (x._44O = new jg), x._44O.contains(c) || (x._44O.add(c), x.redraw && x.redraw())
				}, Z.removeTopPainter = function(H) {
					var A = this;
					A._44O && (A._44O.remove(H), A.redraw && A.redraw())
				}, Z.addBottomPainter = function(Y) {
					var L = this;
					L._45O || (L._45O = new jg), L._45O.contains(Y) || (L._45O.add(Y), L.redraw && L.redraw())
				}, Z.removeBottomPainter = function(E) {
					var g = this;
					g._45O && (g._45O.remove(E), g.redraw && g.redraw())
				}, Z._93db = function(D, M) {
					var X = this;
					X._45O && X._45O.each(function(H) {
						H.draw ? H.draw(D, M) : H.call(X, D, M)
					})
				}, Z._92db = function(k, i) {
					var r = this;
					r._44O && r._44O.each(function(z) {
						z.draw ? z.draw(k, i) : z.call(r, k, i)
					})
				}
			},
			ms_sm: function(G) {
				G.sm = function() {
					return this.getSelectionModel()
				}, G.setSelectableFunc = function(e) {
					this.sm().setFilterFunc(e)
				}, G.getSelectableFunc = function() {
					return this.sm().getFilterFunc()
				}, G.getSelectionModel = function() {
					var k = this;
					return k._selectionModel ? k._selectionModel : k.dm().sm()
				}, G.isSelectionModelShared = function() {
					return !this._selectionModel
				}, G.setSelectionModelShared = function(W) {
					var n = this,
						U = !n._selectionModel,
						G = n.handleSelectionChange,
						w = n.dm();
					U !== W && (n.invalidateSelection && n.invalidateSelection(), W ? (w.sm().ms(G, n), n._selectionModel.ums(G, n), n._selectionModel.dispose(), n._selectionModel = M) : (w.sm().ums(G, n), n._selectionModel = new rr(w), n._selectionModel.ms(G, n)), n.onSelectionModelSharedChanged(), n.fp("selectionModelShared", U, W))
				}, G.onSelectionModelSharedChanged = function() {
					var c = this;
					c.redraw(), c.invalidateSelection && c.invalidateSelection()
				}, G.removeSelection = function() {
					var j = this.dm();
					j.beginTransaction(), this.sm().toSelection().each(j.remove, j), j.endTransaction()
				}, G.selectAll = function() {
					var l = this;
					l.sm().ss(l.dm().toDatas(function(i) {
						return l.isVisible(i) && l.isSelectable(i)
					}))
				}, G.isSelected = function(Z) {
					return this.sm().co(Z)
				}, G.isSelectedById = function(Z) {
					var T = this.dm().getDataById(Z);
					return T ? this.isSelected(T) : !1
				}, G.isSelectable = function(L) {
					return this.sm().isSelectable(L)
				}
			},
			ms_tx: function(D) {
				D._64I = 0, D._65O = 0, D.isScrollable = function() {
					return this.getWidth() < this._64I
				}, D._40o = function() {
					return this.isScrollable()
				}, D.getLogicalPoint = function(H) {
					return Vd(H, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
				}, D.tx = function(D) {
					return D === r ? this.getTranslateX() : (this.setTranslateX(D), void 0)
				}, D.getTranslateX = function() {
					return this._65O
				}, D.setTranslateX = function(P) {
					var v = this,
						z = v.getWidth() - v._64I;
					z > P && (P = z), P > 0 && (P = 0), P = W(P);
					var x = v._65O;
					v._65O = P, v.fp(om, x, P)
				}
			},
			ms_ty: function(d) {
				d._23Q = 0, d._66O = 0, d._41o = function() {
					return this.getHeight() < this._23Q
				}, d.getLogicalPoint = function(h) {
					return Vd(h, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
				}, d.ty = function(e) {
					return e === r ? this.getTranslateY() : (this.setTranslateY(e), void 0)
				}, d.getTranslateY = function() {
					return this._66O
				}, d.setTranslateY = function(h) {
					var t = this,
						D = t.getHeight() - t._23Q;
					D > h && (h = D), h > 0 && (h = 0), h = W(h);
					var w = t._66O;
					t._66O = h, t.fp(Zn, w, h)
				}
			},
			ms_txy: function(l) {
				l._65O = 0, l._66O = 0, l.tx = function(P) {
					return P === r ? this.getTranslateX() : (this.setTranslateX(P), void 0)
				}, l.ty = function(g) {
					return g === r ? this.getTranslateY() : (this.setTranslateY(g), void 0)
				}, l.onTranslateEnded = function() {}, l.setTranslate = function(l, k, D) {
					var N = this;
					if (D = Sc(D)) {
						N._65I && N._65I.stop(!0);
						var z = N.tx(),
							m = N.ty();
						D.action = function(E) {
							N.setTranslate(z + (l - z) * E, m + (k - m) * E)
						}, D._37o = function() {
							delete N._66I, delete N._65I, N.onTranslateEnded()
						}, N._66I = 1, N._65I = Ie(D)
					} else N.tx(l), N.ty(k)
				}, l.getTranslateX = function() {
					return this._65O
				}, l.setTranslateX = function(p) {
					var w = this;
					p = w.adjustTranslateX(p);
					var I = w._65O;
					w._65O = p, w.fp(om, I, p)
				}, l.getTranslateY = function() {
					return this._66O
				}, l.setTranslateY = function(F) {
					var I = this;
					F = I.adjustTranslateY(F);
					var b = I._66O;
					I._66O = F, I.fp(Zn, b, F)
				}, l.adjustTranslateX = function(A) {
					return W(A)
				}, l.adjustTranslateY = function(I) {
					return W(I)
				}, l.translate = function(e, p, S) {
					this.setTranslate(this.tx() + e, this.ty() + p, S)
				}, l.getLogicalPoint = function(E) {
					var y = this;
					return Vd(E, this._canvas || y._view, y.tx(), y.ty())
				}
			},
			ms_dm: function(H) {
				H.dm = function(U) {
					return U ? (this.setDataModel(U), void 0) : this.getDataModel()
				}, H.getDataModel = function() {
					return this._dataModel
				}
			},
			ms_lp: function(w) {
				w.lp = function(Q) {
					return this.getLogicalPoint(Q)
				}
			},
			ms_v: function(X) {
				X._disabled = !1, X.setDisabled = function(D, o) {
					var Q = this,
						Z = Q._disabled;
					Z !== D && (Z && (Er(Q._63O), delete Q._63O), D && (gm(Q._view, Q._63O = qh(o)), Q.iv()), Q._disabled = D, Q.fp("disabled", Z, D))
				}, X.isDisabled = function() {
					return this._disabled
				}, X.getDisabledDiv = function() {
					return this._63O
				}, X.getView = function() {
					return this._view
				}, X.addToDOM = function() {
					var R = this,
						f = R.getView(),
						t = f.style;
					x.body.appendChild(f), t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", I.addEventListener("resize", function() {
						R.iv()
					}, !1), R.iv()
				}, X.getWidth = function() {
					return this._view.clientWidth
				}, X.getHeight = function() {
					return this._view.clientHeight
				}, X.setWidth = function(d) {
					var w = this;
					w._view.style.width = d + Ub, w.iv(), w.fp && w.fp(To, M, d)
				}, X.setHeight = function(F) {
					var n = this;
					n._view.style.height = F + Ub, n.iv(), n.fp && n.fp(mo, M, F)
				}, X.setFocus = function(E) {
					var T = this,
						a = T._currentEditor;
					return E && a && (a.getView && (a = a.getView()), a.contains(E.target)) ? !1 : (jf(T._view), T.endEditing && T.endEditing(), T.fireViewEvent("focus"), !0)
				}, X.iv = function(i) {
					this.invalidate(i)
				}, X.invalidate = function(s) {
					var Z = this;
					Z._68I || (Z._68I = 1, We(Z.validate, Z, M, s), Z.onInvalidated && Z.onInvalidated(), Z.fireViewEvent("invalidate"))
				}, X.validate = function() {
					var K = this,
						U = K._view;
					if (K._68I && (delete K._68I, U.parentNode)) if (0 === U.offsetWidth && 0 === U.offsetHeight && K._67I !== M) K._67I === r && (K._67I = z.reinvalidateCount), K._67I > 0 ? K._67I-- : K._67I = M, K.iv();
					else {
						K.fireViewEvent("beginValidate"), K.validateImpl(), K.onValidated && K.onValidated(), K.fireViewEvent("validate");
						var w = K._63O;
						w && (U.lastChild !== w && (Er(w), gm(U, w)), Mb(w, 0, 0, K.getWidth(), K.getHeight())), ih(K), xq(K), Tb(K)
					}
				}, X.layout = function(V, A, o, f) {
					1 === arguments.length ? Mb(this, V) : Mb(this, V, A, o, f)
				}, X.addViewListener = function(i, F, x) {
					var B = this;
					B._67O || (B._67O = new lf), B._67O.add(i, F, x)
				}, X.removeViewListener = function(j, v) {
					this._67O.remove(j, v)
				}, X.fireViewEvent = function(q) {
					var m = this;
					m._67O && (bc(q) && (q = {
						kind: q
					}), m._67O.fire(q)), z.viewListener && z.viewListener(m, q)
				}
			},
			ms_tip: function(b) {
				b.setToolTipEnabled = function(l) {
					var I = this;
					l ? Z || I._13o || (I.enableToolTip(), I.fp("toolTipEnabled", !1, !0)) : I._13o && (I.disableToolTip(), I.fp("toolTipEnabled", !0, !1))
				}, b.isToolTipEnabled = function() {
					return !!this._13o
				}, b.enableToolTip = function() {
					var G = this;
					Z || G._13o || (G._13o = function(m) {
						var N = G.getToolTip(m);
						N != M ? z.toolTipContinual && z.isToolTipShowing() ? yf(m, N) : (rd(), wo = {
							timeout: u(Gr, wn),
							e: m,
							info: N
						}) : rd()
					}, G.getView().addEventListener(sk, G._13o, !1), G.getView().addEventListener("mouseleave", z.hideToolTip, !1))
				}, b.disableToolTip = function() {
					var k = this;
					k._13o && (k.getView().removeEventListener(sk, k._13o, !1), k.getView().removeEventListener("mouseleave", z.hideToolTip, !1), delete k._13o)
				}, b.getToolTip = function(T) {
					var N = this;
					if (N.getDataAt) {
						var A = N.getDataAt(T);
						return A ? A.getToolTip() : M
					}
					return N.getValue ? N.getValue() : void 0
				}
			},
			_52o: function(t) {
				t._zoom = 1, t._29I = kp, t.zoomIn = function(e, w) {
					this.setZoom(this._zoom * ve, e, w)
				}, t.zoomOut = function(p, B) {
					this.setZoom(this._zoom / ve, p, B)
				}, t.zoomReset = function(E, M) {
					this.setZoom(1, E, M)
				}, t.scrollZoomIn = function(e) {
					this.setZoom(this._zoom * Id, M, e)
				}, t.scrollZoomOut = function(h) {
					this.setZoom(this._zoom / Id, M, h)
				}, t.pinchZoomIn = function(G) {
					this.setZoom(this._zoom * hs, M, G)
				}, t.pinchZoomOut = function(P) {
					this.setZoom(this._zoom / hs, M, P)
				}, t.adjustZoom = function(T) {
					return Ck > T ? Ck : T > $e ? $e : T
				}, t.getZoom = function() {
					return this._zoom
				}, t.setZoom = function(P, Z, e) {
					var N = this;
					if (Z = Sc(Z)) {
						N._14o && N._14o.stop(!0);
						var w = N._zoom;
						Z.action = function(T) {
							N._96O(w + (P - w) * T, e)
						}, Z._37o = function() {
							delete N._zooming, delete N._14o, N.onZoomEnded()
						}, N._zooming = 1, N._14o = Ie(Z)
					} else N._96O(P, e)
				}, t._96O = function(t, z) {
					var D = this;
					if (t = D.adjustZoom(t), t !== D._zoom) {
						D.validate();
						var w = D._29I,
							i = D._zoom;
						0 !== w.width && 0 !== w.height && (z = z ? z : {
							x: w.x + w.width / 2,
							y: w.y + w.height / 2
						}, D.tx((z.x - w.x) * i - z.x * t), D.ty((z.y - w.y) * i - z.y * t)), D._zoom = t, D.fp("zoom", i, t)
					}
				}
			}
		};
		vq(z, {
			numberDigits: 5,
			baseZIndex: r,
			isTouchable: Z,
			devicePixelRatio: I.devicePixelRatio ? I.devicePixelRatio : 1,
			reinvalidateCount: 3,
			hitMaxArea: 3e3,
			imageCacheThreshold: 20,
			autoMakeVisible: !0,
			autoHideScrollBar: !0,
			disabledOpacity: .4,
			disabledBackground: P.disabledBackground,
			forceHierarchicalSerialization: !0,
			hoverDelay: 600,
			toolTipDelay: 800,
			toolTipContinual: !1,
			getDragger: function() {
				return $b
			},
			lineCap: "butt",
			lineJoin: "round",
			imageGradient: "linear.northeast",
			dashPattern: [16, 16],
			animDuration: 200,
			animEasing: function(P) {
				return P * P
			},
			labelColor: dc,
			labelSelectColor: Hn,
			labelFont: (Z ? "15" : "12") + "px arial, sans-serif",
			widgetIndent: Z ? 30 : 20,
			widgetRowHeight: Z ? 30 : 20,
			widgetHeaderHeight: Z ? 32 : 22,
			widgetTitleHeight: Z ? 34 : 24,
			scrollBarColor: sm,
			scrollBarSize: 7,
			scrollBarTimeout: 1e3,
			scrollBarMinLength: 20,
			scrollBarInteractiveSize: Z ? 32 : 16,
			zoomIncrement: 1.3,
			scrollZoomIncrement: 1.05,
			pinchZoomIncrement: 1.08,
			zoomMax: 20,
			zoomMin: .01,
			segmentResolution: 12,
			shapeResolution: 24,
			shapeSide: 24,
			intersectionLineRect: Ar,
			intersectionLineLine: Lm,
			isEnter: gq,
			isEsc: gk,
			isDelete: mb,
			isSpace: Co,
			isLeft: id,
			isUp: ar,
			isRight: Zc,
			isDown: qm,
			getTarget: Xd,
			isString: bc,
			isNumber: Up,
			isBoolean: Gc,
			isArray: lo,
			isSelectAll: zr,
			isFunction: Vb,
			isObject: Hj,
			getPropertyValue: fg,
			setPropertyValue: Ki,
			addMethod: vq,
			getVersion: function() {
				return "6.1.8"
			},
			appendToScreen: function(s) {
				s = s.getView ? s.getView() : s, (x.fullscreenElement || x.mozFullScreenElement || x.webkitFullscreenElement || x.msFullscreenElement || x.body).appendChild(s)
			},
			toggleFullscreen: function(T) {
				var A = T.getView();
				if (!(x.fullscreenElement || x.mozFullScreenElement || x.webkitFullscreenElement || x.msFullscreenElement)) {
					var J = !0;
					if (T.isSelfViewEvent) {
						var k = T.getX(),
							D = T.getY(),
							U = T.getWidth(),
							b = T.getHeight(),
							Y = A.style.background;
						Y || (A.style.background = "white"), A.requestFullscreen ? A.requestFullscreen() : A.msRequestFullscreen ? A.msRequestFullscreen() : A.mozRequestFullScreen ? A.mozRequestFullScreen() : A.webkitRequestFullscreen && A.webkitRequestFullscreen();
						var w = setInterval(function() {
							if (A !== (x.fullscreenElement || x.mozFullScreenElement || x.webkitFullscreenElement || x.msFullscreenElement)) clearInterval(w), T.setX(k), T.setY(D), T.setWidth(U), T.setHeight(b), T._fullscreen = !1, A.style.background = Y, T.iv();
							else {
								var y = d.Default.getWindowInfo();
								(J || y.width !== T.getWidth() || y.height !== T.getHeight()) && (T.setX(y.left), T.setY(y.top), T.setWidth(y.width), T.setHeight(y.height), T._fullscreen = !0, T.iv(), J = !1)
							}
						}, 500)
					} else {
						var l = A.style.left,
							p = A.style.top,
							U = A.style.width,
							b = A.style.height,
							Y = A.style.background;
						Y || (A.style.background = "white"), A.requestFullscreen ? A.requestFullscreen() : A.msRequestFullscreen ? A.msRequestFullscreen() : A.mozRequestFullScreen ? A.mozRequestFullScreen() : A.webkitRequestFullscreen && A.webkitRequestFullscreen();
						var w = setInterval(function() {
							if (A !== (x.fullscreenElement || x.mozFullScreenElement || x.webkitFullscreenElement || x.msFullscreenElement)) clearInterval(w), A.style.left = l, A.style.top = p, A.style.width = U, A.style.height = b, A.style.background = Y, T.iv();
							else {
								var h = d.Default.getWindowInfo();
								(J || h.width !== T.getWidth() || h.height !== T.getHeight()) && (Mb(T), J = !1)
							}
						}, 500)
					}
				}
			},
			appendTimeStamp: function(N) {
				return N
			},
			setCompType: function(z, R) {
				Vb(R) || Hj(R) ? Pk[z] = R : Ih(z)
			},
			getCompType: function(H) {
				var U = Pk[H];
				return U === r && Wm.test(H) && Ih(H), U
			},
			getCompTypeMap: function() {
				return Pk
			},
			drawCompType: function(L, g, Z, t, l, o) {
				L(g, Z, t, l, o)
			},
			numberListener: function() {
				var m = {
					46: 1,
					8: 1,
					9: 1,
					27: 1,
					13: 1,
					109: 1,
					110: 1,
					189: 1,
					190: 1
				};
				return function(c) {
					var g = c.keyCode;
					m[g] || 65 === g && z.isCtrlDown(c) || 86 === g && z.isCtrlDown(c) || 67 === g && z.isCtrlDown(c) || 88 === g && z.isCtrlDown(c) || g >= 35 && 40 >= g || (c.shiftKey || 48 > g || g > 57) && (96 > g || g > 105) && c.preventDefault()
				}
			}(),
			ignoreKeyCodes: [122, 123],
			preventDefault: function(V) {
				var G = V.target.tagName;
				("DIV" === G || "CANVAS" === G) && !(z.ignoreKeyCodes.indexOf(V.keyCode) >= 0) && ("keydown" !== V.type || id(V) || Zc(V) || ar(V) || qm(V) || mb(V) || 65 === V.keyCode && (V.metaKey || V.ctrlKey)) && (V.preventDefault(), V.preventManipulation && V.preventManipulation())
			},
			getWindowInfo: function() {
				var U = x.documentElement,
					r = U && (U.scrollLeft || U.scrollTop) ? U : x.body;
				return {
					target: r,
					left: r.scrollLeft,
					top: r.scrollTop,
					width: I.innerWidth || r.clientWidth,
					height: I.innerHeight || r.clientHeight
				}
			},
			isDragging: function() {
				return !!$b
			},
			isLeftButton: function(r) {
				return Z ? !0 : 0 === r.button
			},
			isInput: function(k) {
				if (!k) return !1;
				var P = k.tagName;
				return "INPUT" === P || "TEXTAREA" === P || "SELECT" === P
			},
			getTouchCount: function(D) {
				return Z ? D.touches.length : 1
			},
			isDoubleClick: function() {
				function B(X) {
					X.details = 0, X.timeout = null, X.lastPoint = null
				}
				var z = {};
				return function(W) {
					var l = W.button == M ? "" : W.button,
						J = W.type + l,
						s = J + "_isDoubleClick",
						U = z[J];
					if (U || (U = z[J] = {
						details: 0,
						timeout: null,
						lastPoint: null
					}), W[s] === r) {
						W[s] = !0;
						var j = km(W);
						U.timeout && (p(U.timeout), U.timeout = null), U.lastPoint && Zg(U.lastPoint, j) > (Z ? 20 : 1) && B(U), U.lastPoint = j, U.details++, U.timeout = u(function() {
							B(this)
						}.bind(U), 500)
					}
					return 2 === U.details
				}
			}(),
			isShiftDown: function(B) {
				return B ? B.shiftKey : Rc["16"]
			},
			isCtrlDown: function(P) {
				return P ? Y ? P.metaKey : P.ctrlKey : Y ? Rc["91"] : Rc["17"]
			},
			getClientPoint: function(r) {
				return Z && (r = Vn(r)), {
					x: r.clientX,
					y: r.clientY
				}
			},
			isMouseEvent: function(Y) {
				return Y instanceof MouseEvent || 0 === Y.type.indexOf("mouse")
			},
			getTargetElement: function(F) {
				if (z.isMouseEvent(F) || !x.elementFromPoint) return F.target;
				var R = Hq(F);
				return x.elementFromPoint(R.x, R.y)
			},
			getPagePoint: function(H) {
				return Z && (H = Vn(H)), {
					x: H.pageX,
					y: H.pageY
				}
			},
			createObject: function(n, T) {
				var M = new n;
				for (var k in T) if (0 === k.indexOf("s:")) M.s(k.substr(2), T[k]);
				else if (0 === k.indexOf("a:")) M.a(k.substr(2), T[k]);
				else {
					var A = kf(k),
						c = T[k];
					M[A] ? (M[A](c), "setToolTip" === A && M.enableToolTip && M.enableToolTip()) : M[k] = c
				}
				return M
			},
			setImage: function(R, n, X, L) {
				var o = arguments.length;
				4 === o ? fd(R, L, n, X) : 2 === o ? bc(n) ? fd(R, n) : ti[R] = n : 1 === o && fd(R, R)
			},
			getImage: function(v, F, d) {
				var W;
				if (v == M) return M;
				if (Hj(v) ? W = v : (W = ti[v], v && W === r && (kk && kk[v] || fd(v, v))), F && W && W.tagName) {
					var R;
					R = "override" === d ? "colors_override" : "override_rgb" === d ? "colors_override_rgb" : "override_a" === d ? "colors_override_a" : "colors", W[R] || (W[R] = {
						__count__: 0
					});
					var x = W[R][F];
					return x || (W[R].__count__ > z.imageCacheThreshold && (W[R] = {
						__count__: 0
					}), x = um(W, qe(F), W.width, W.height, d), W[R][F] = x, W[R].__count__++), x
				}
				return W
			},
			isImageComplete: function(m, g, Q) {
				var O = Hj(m) ? m : ti[m];
				if (!O) return !1;
				if (O.tagName) return O.complete;
				for (var q, m, I = O.comps, j = !0, X = 0, o = I.length; o > X; X++) if (q = I[X], "image" === q.type) {
					m = q.name, m && m.func && (m = El(m, g));
					var H = Ok(m, g, Q);
					if (!H) {
						j = !1;
						break
					}
				}
				return j
			},
			getId: function() {
				var d = 1;
				return function() {
					return ++d
				}
			}(),
			callLater: function(K, G, r, B) {
				var q = function() {
						K.apply(G, r)
					};
				return B ? u(q, B) : I.requestAnimationFrame(q)
			},
			asyncEach: function(x, G, E) {
				"function" != typeof E && (E = Function.prototype);
				var L = new Array(x.length),
					N = 0,
					F = !1;
				x.forEach(function(b, r) {
					G(b, function(n, C) {
						return F ? void 0 : n ? (F = !0, E(null)) : (L[r] = C, N++, N === x.length ? E(L) : void 0)
					})
				})
			},
			xhrLoad: function(t, k, w) {
				var V = !1;
				lo(t) || (V = !0, t = [t]), w = w || {}, t.length;
				var D = w.sync,
					y = !! w.post,
					L = w.data || null;
				bs(t, function(Q, N) {
					var G = new XMLHttpRequest;
					w.responseType ? G.responseType = w.responseType : G.overrideMimeType && G.overrideMimeType(w.mimeType || "text/plain"), Q = z.beforeLoadURL(Q), Q.data ? N(null, Q.data) : (G.open(y ? "POST" : "GET", encodeURI(Q), !D), G.onload = function(l) {
						200 === this.status || 0 === this.status ? N(null, l.target.response || l.target.responseText) : N(!0)
					}, G.onerror = function() {
						N(!0)
					}, G.send(L))
				}, function(q) {
					"function" == typeof k && k(V && q ? q[0] : q)
				})
			},
			clone: function(n) {
				if (null == n || "object" != typeof n) return n;
				if (n instanceof Date) {
					var T = new Date;
					return T.setTime(n.getTime()), T
				}
				if (n instanceof Array) {
					for (var T = [], O = 0, Q = n.length; Q > O; O++) T[O] = Hg(n[O]);
					return T
				}
				if (n instanceof jg) {
					for (var T = new jg, O = 0, Q = n.length; Q > O; O++) T.set(O, Hg(n.get(O)));
					return T
				}
				if (n instanceof Jc) return n;
				if (n instanceof q) {
					var T = {};
					for (var k in n) n.hasOwnProperty(k) && (T[k] = Hg(n[k]));
					return T
				}
				return n
			},
			callWhenLoaded: function(g, q) {
				q = q || 100;
				var x = tp(g, q);
				Yp || (Yp = {}), Yp[x] = {
					tick: x,
					cb: g,
					delay: q
				}
			},
			beforeLoadURL: function(K) {
				if (Yp) {
					var O = {};
					for (var T in Yp) {
						var y = Yp[T];
						p(y.tick);
						var V = tp(y.cb, y.delay);
						O[V] = {
							tick: V,
							delay: y.delay,
							cb: y.cb
						}
					}
					Yp = O
				}
				return z.convertURL ? z.convertURL(K) : K
			},
			convertURL: function(c) {
				return c
			},
			handleRefGraphLoaded: function() {},
			handleCompTypeLoaded: function() {},
			handleImageLoaded: function() {},
			handleUnfoundImage: function() {},
			sortFunc: function(G, R) {
				if (G === R) return 0;
				if (G == M && R != M) return 1;
				if (G != M && R == M) return -1;
				if (G == M && R == M) return 0;
				var I, B = typeof G,
					W = typeof R;
				return B === Df && W === Df ? I = G.localeCompare(R) : B === Bd && W === Bd && (I = G - R), I === r && (I = ("" + G).localeCompare("" + R)), I > 0 ? 1 : 0 > I ? -1 : 0
			},
			getClassMap: function() {
				return As
			},
			getClass: function(Y) {
				if (bc(Y)) {
					var q, f = As[Y];
					if (!f) {
						q = Y.split("."), f = I;
						for (var m = 0; m < q.length; m++) f = f[q[m]];
						As[Y] = f
					}
					return f
				}
				return Y
			},
			def: function(m, e, u) {
				var z, S, N, n = function() {};
				if (n.prototype = e.prototype, z = new n, bc(m)) {
					if (As[m]) throw "'" + m + "' already defined";
					N = Tp(m), z.getClassName = function() {
						return m
					}
				} else N = m;
				if (z.constructor = N, z.getClass = function() {
					return N
				}, z.getSuperClass = function() {
					return e
				}, u) for (S in u) vb[S] && vb.hasOwnProperty(S) ? vb[S](z, u) : Dl(z, u, S);
				N.prototype = z, N.superClass = e.prototype
			},
			startAnim: function() {
				var V = function(h) {
						h.duration && (h.startTime = kr()), h.timeId = We(h.tick, M, M, h.interval)
					};
				return function(o) {
					return o = Hg(o), o.easing = o.easing || z.animEasing, o.duration || o.frames || (o.duration = z.animDuration), o.t = 0, o.duration ? o.interval = 0 : (o.frame = 0, o.interval = o.interval || 10), o.tick = function() {
						if (o.duration) {
							var A = (kr() - o.startTime) / o.duration;
							A > 1 && (A = 1), o.t = A, o.action(o.easing(A), A), 1 === A ? o.stop() : o._isPaused || (o.timeId = We(o.tick))
						} else o.frame++, A = o.t = o.frame / o.frames, o.action(o.easing(A), A), o.frame < o.frames ? o._isPaused || (o.timeId = We(o.tick, M, M, o.interval)) : o.stop()
					}, o.resume = function() {
						o._isPaused && (delete o._isPaused, o.duration ? o.t < 1 && (o.startTime = kr() - o.duration * o.t, o.timeId = We(o.tick)) : o.frame < o.frames && (o.timeId = We(o.tick, M, M, o.interval)))
					}, o.pause = function() {
						o._isPaused = !0
					}, o.stop = function(d) {
						o.isRunning() && (o.duration ? o.t < 1 && d && (o.t = 1, o.action(o.easing(1))) : o.frame < o.frames && d && (o.frame = o.frames, o.action(o.easing(1))), o._37o && o._37o(), o.finishFunc && o.finishFunc(), fk(o.timeId, !o.duration), delete o.timeId)
					}, o.isRunning = function() {
						return o.timeId != M
					}, o.delay ? We(V, M, [o], o.delay) : V(o), o
				}
			}(),
			getTextSize: function() {
				var J = {},
					g = x ? Yk().getContext("2d") : M;
				return function(e, i) {
					g.font = e ? e : an;
					var _ = J[g.font];
					return _ || (_ = 2 * g.measureText("e").width + 4, J[g.font] = _), {
						width: g.measureText(i).width + 4,
						height: _
					}
				}
			}(),
			drawText: function(v, q, y, z, F, G, o, R, L, h) {
				if (q != M) {
					var r = ib(y, q),
						t = {};
					t.y = h && h !== Ch ? h === Mr ? G + r.height / 2 : G + R - r.height / 2 : G + R / 2, t.x = L && L !== $c ? L === Oj ? F + o - r.width / 2 : F + o / 2 : F + r.width / 2, Sp(v, q, t, y, z)
				}
			},
			getDistance: function(T, D) {
				var F = T.length;
				return D ? 3 === F ? N(n(T[0] - D[0]) + n(T[1] - D[1]) + n(T[2] - D[2])) : 2 === F ? N(n(T[0] - D[0]) + n(T[1] - D[1])) : T.z === r ? N(n(D.x - T.x) + n(D.y - T.y)) : N(n(D.x - T.x) + n(D.y - T.y) + n(D.z - T.z)) : 3 === F ? N(n(T[0]) + n(T[1]) + n(T[2])) : 2 === F ? N(n(T[0]) + n(T[1])) : void 0
			},
			brighter: function(o, v) {
				return 0 > v && (v = -v), _p(o, v ? v : 40)
			},
			darker: function(W, B) {
				return B > 0 && (B = -B), _p(W, B ? B : -40)
			},
			unionPoint: function(N, K) {
				if (!N) return M;
				if (2 === arguments.length) return N && K ? {
					x: k(N.x, K.x),
					y: k(N.y, K.y),
					width: R(N.x - K.x),
					height: R(N.y - K.y)
				} : M;
				var o = N;
				if (o._as && (o = o._as), o.length === r) return M;
				var p = o.length;
				if (0 >= p) return M;
				for (var Y = 1, S = o[0], U = {
					x: S.x,
					y: S.y,
					width: 0,
					height: 0
				}; p > Y; Y++) {
					S = o[Y];
					var T = k(U.x, S.x),
						t = D(U.x + U.width, S.x),
						F = k(U.y, S.y),
						f = D(U.y + U.height, S.y);
					U.x = T, U.y = F, U.width = t - T, U.height = f - F
				}
				return U
			},
			unionRect: function(A, Z) {
				if (A && !Z) return Hg(A);
				if (!A && Z) return Hg(Z);
				if (A && Z) {
					var _ = {
						x: k(A.x, Z.x),
						y: k(A.y, Z.y)
					};
					return _.width = D(A.x + A.width, Z.x + Z.width) - _.x, _.height = D(A.y + A.height, Z.y + Z.height) - _.y, _
				}
				return M
			},
			containsPoint: function(m, P, d, x) {
				if (x != M && 1 !== x) {
					var o = m.x + m.width / 2,
						B = m.y + m.height / 2;
					m = {
						x: o - m.width / 2 * x,
						y: B - m.height / 2 * x,
						width: m.width * x,
						height: m.height * x
					}
				}
				if (d) {
					var g = m.width / 2,
						e = m.height / 2,
						D = C(-d),
						Y = K(-d),
						X = P.x - m.x - g,
						_ = P.y - m.y - e;
					return P = {
						x: Y * X - D * _,
						y: D * X + Y * _
					}, Gn({
						x: -g,
						y: -e,
						width: m.width,
						height: m.height
					}, P)
				}
				return !(!m || P.x < m.x || P.y < m.y || P.x > m.x + m.width || P.y > m.y + m.height)
			},
			containsRect: function(P, v) {
				if (!P || !v) return !1;
				var x = v.x,
					z = v.y,
					r = v.width,
					p = v.height,
					y = P.width,
					Z = P.height;
				if (0 > (y | Z | r | p)) return !1;
				var _ = P.x,
					J = P.y;
				if (_ > x || J > z) return !1;
				if (y += _, r += x, x >= r) {
					if (y >= _ || r > y) return !1
				} else if (y >= _ && r > y) return !1;
				if (Z += J, p += z, z >= p) {
					if (Z >= J || p > Z) return !1
				} else if (Z >= J && p > Z) return !1;
				return !0
			},
			intersectsRect: function(g, d) {
				if (!g || !d) return !1;
				var T = d.width,
					O = d.height,
					s = g.width,
					o = g.height;
				if (0 >= s || 0 >= o || 0 >= T || 0 >= O) return !1;
				var z = d.x,
					S = d.y,
					h = g.x,
					C = g.y;
				return s += h, o += C, T += z, O += S, s > z && o > S && T > h && O > C
			},
			intersection: function(J, B) {
				if (!J || !B) return M;
				var E = B.x,
					V = B.y,
					G = J.x,
					O = J.y,
					S = E,
					D = V,
					q = G,
					s = O;
				return S += B.width, D += B.height, q += J.width, s += J.height, G > E && (E = G), O > V && (V = O), S > q && (S = q), D > s && (D = s), S -= E, D -= V, 0 >= S || 0 >= D ? M : {
					x: E,
					y: V,
					width: S,
					height: D
				}
			},
			grow: function(_, s, P) {
				P === r && (P = s), _.x -= s, _.y -= P, _.width = _.width + 2 * s, _.height = _.height + 2 * P
			},
			getLogicalPoint: function(Q, P, s, W, u, r) {
				Ik(Q) ? Y ? Rc["91"] = !0 : Rc["17"] = !0 : Y ? Rc["91"] = !1 : Rc["17"] = !1, Rc["16"] = Dm(Q) ? !0 : !1;
				var N = P.getBoundingClientRect();
				return Q = Z ? Vn(Q) : Q, {
					x: (Q.clientX - N.left + P.scrollLeft - (s || 0)) / (u || 1),
					y: (Q.clientY - N.top + P.scrollTop - (W || 0)) / (r || 1)
				}
			},
			removeHTML: function() {
				var f;
				return function(l) {
					return l && l.parentNode ? f === l ? !0 : (f = l, l.parentNode.removeChild(l), f = M, !0) : !1
				}
			}(),
			getToolTipDiv: function() {
				if (!Qk) {
					Qk = Dn(), vh = Dn();
					var J = Qk.style;
					z.baseZIndex != M && (J.zIndex = Q(z.baseZIndex) + 3 + ""), J.whiteSpace = "nowrap", J.color = z.toolTipLabelColor, J.background = z.toolTipBackground, J.font = z.toolTipLabelFont, J.padding = "5px", J.boxShadow = "0px 0px 3px " + z.toolTipShadowColor
				}
				return Qk
			},
			isToolTipShowing: function() {
				return Qk && Qk.parentNode ? !0 : vh && vh.parentNode ? !0 : !1
			},
			hideToolTip: function() {
				Er(Qk), Er(vh), Xm()
			},
			showToolTip: function(n, B) {
				if (!n || B == M) return rd(), void 0;
				z.getToolTipDiv();
				var J, F;
				if (B.html ? (B = B.html, J = vh, Er(Qk)) : (J = Qk, Er(vh)), F = J.style, J.innerHTML = B, J.parentNode || d.Default.appendToScreen(J), n.target) {
					n = Hq(n);
					var D = xg(),
						W = n.x,
						y = n.y,
						N = Z ? 60 : 12;
					if (Z) {
						var m = J.getBoundingClientRect();
						F.left = W - m.width / 2 + Ub, F.top = y - m.height - N < D.top ? y + N + Ub : y - m.height - N + Ub
					} else {
						F.left = W + N + Ub, F.top = y + N + Ub;
						var m = J.getBoundingClientRect();
						m.left + m.width > D.width && (F.left = W - N - m.width + Ub), m.top + m.height > D.height && (F.top = y - N - m.height + Ub), m.left < 0 && (F.left = W + N + Ub), m.top < 0 && (F.top = y + N + Ub)
					}
				} else F.left = n.x + Ub, F.top = n.y + Ub;
				Xm()
			},
			startDragging: function(i, d) {
				i !== $b && ($b ? Z ? $b.handleWindowTouchEnd(d) : $b.handleWindowMouseUp(d) : Z ? (I.addEventListener(Kp, wc, !1), I.addEventListener(Eq, dk, !1)) : (I.addEventListener(sk, lr, !1), I.addEventListener(ji, Zk, !1)), $b = i)
			},
			getImageMap: function() {
				return ti
			},
			toBoundaries: function(d, O, P, F) {
				var $ = [];
				return vk(d, O, P, F).forEach(function(Z) {
					var j = [];
					Z.forEach(function(g) {
						j.push(g.x, g.y)
					}), $.push(j)
				}), $
			},
			getCurrentKeyCodeMap: function() {
				return Rc
			},
			drawCenterImage: function(t, n, j, h, u, $, R, P) {
				var b = Dc(n, u, $),
					_ = pd(n, u, $);
				od(t, n, W(j - b / 2), W(h - _ / 2), b, _, u, $, R, P)
			},
			drawStretchImage: function(E, A, h, l, n, R, K, b, c, p, Z, f) {
				var o, w = Dc(A, b, c, R),
					U = pd(A, b, c, K);
				if ("uniform" === h ? (o = k(R / w, K / U), w *= o, U *= o, l += W((R - w) / 2), n += W((K - U) / 2), R = w, K = U) : "centerUniform" === h && ((w > R || U > K) && (o = k(R / w, K / U), w *= o, U *= o), l += W((R - w) / 2), n += W((K - U) / 2), R = w, K = U), "center" === h) {
					var g = Z !== !1 && (w > R || U > K);
					g && (E.save(), E.beginPath(), E.rect(l, n, R, K), E.clip()), od(E, A, l + R / 2 - w / 2, n + K / 2 - U / 2, w, U, b, c, p, f), g && E.restore()
				} else od(E, A, l, n, R, K, b, c, p, f)
			},
			toCanvas: function(x, W, s, v, V, d, $, G, k) {
				x = Ob(x, $), W = W || Dc(x, V), s = s || pd(x, V);
				var K = Yk(),
					j = js(K);
				return G ? (Xo(K, W, s, G), j.scale(G, G)) : Xo(K, W, s, 1), Bb(j, x, v, 0, 0, W, s, V, d, $, k), x && x.clampToEdge && (K.clampToEdge = x.clampToEdge), j.restore(), K
			},
			createGradientImage: function(W, F, H, D) {
				for (var j = ["L", 0, 0, W, 0, 1, 0, 0, 1, 0, 0], m = 0, J = Math.min(F.length, H.length); J > m; m++) j.push(H[m], F[m]);
				var h = d.Default.toCanvas({
					width: W,
					height: W,
					clampToEdge: !0,
					comps: [{
						type: "shape",
						rotation: D || 0,
						points: [0, 0, W, 0, W, W, 0, W],
						background: "#ffffff",
						gradientPack: j
					}]
				});
				return h
			},
			createElement: function(R, c, B, q) {
				var e = x.createElement(R);
				return ep(e, c || P.widgetBorder, 2), e.style.font = B ? B : an, q != M && (e.value = q), z.onElementCreated && z.onElementCreated(e), e
			},
			containedInView: function(X, j) {
				var g = Tf(j).getBoundingClientRect();
				return Gn({
					x: g.left,
					y: g.top,
					width: g.width,
					height: g.height
				}, km(X))
			},
			isIsolating: function() {
				return _f
			},
			setIsolating: function(b) {
				_f = b
			},
			getMSMap: function() {
				return vb
			},
			stringify: function(c, P) {
				var n = Date.prototype.toJSON;
				Date.prototype.toJSON = function() {
					return "__ht__date" + this.getTime()
				};
				var E = JSON.stringify(c, function(A, t) {
					return "function" == typeof t ? "__ht__" + (t.__ht__ || t.toString()) : Up(t) ? Zm(t) : t
				}, P == M ? 2 : P);
				return Date.prototype.toJSON = n, E
			},
			parse: function(D) {
				return bc(D) ? JSON.parse(D, function(j, E) {
					if (bc(E)) {
						if ("__ht__function" == E.substr(0, 14)) {
							var F = E.indexOf("{") + 1,
								T = E.lastIndexOf("}"),
								J = E.indexOf("(") + 1,
								V = E.indexOf(")");
							if (F && T && J && V) {
								var b = new Function(E.substring(J, V), E.substring(F, T));
								return b.__ht__ = E.substr(6), b
							}
						}
						if ("__ht__date" == E.substr(0, 10)) return new Date(Q(E.substr(10)))
					}
					return E
				}) : D
			},
			loadJS: function(X, T) {
				T && X.push(T);
				var C = X.shift();
				if (lo(C)) X = C.contact(X), z.loadJS(X);
				else if (Vb(C)) C(), z.loadJS(X);
				else if (bc(C)) {
					var w = x.createElement("script");
					w.onload = function() {
						z.loadJS(X)
					}, w.setAttribute("src", C), x.getElementsByTagName("head")[0].appendChild(w)
				} else X.length && z.loadJS(X)
			},
			toRoundedCorner: function(j, I) {
				var E = j.size();
				if (0 >= I) return {
					points: j
				};
				var b, i = new jg,
					N = new jg,
					t = j.get(0);
				i.add(t), N.add(1);
				for (var Q = 1; E > Q; Q++) if (E > Q + 1) {
					var r = j.get(Q),
						z = j.get(Q + 1),
						h = t.x,
						m = t.y,
						s = r.x,
						n = r.y,
						x = n - m,
						c = s - h,
						p = G(x, c);
					b = k(.99 * Zg(t, r), I), i.add({
						x: s - b * K(p),
						y: n - b * C(p)
					}), i.add(r), h = r.x, m = r.y, s = z.x, n = z.y, x = n - m, c = s - h, p = G(x, c), b = k(.99 * Zg(r, z), I), t = {
						x: h + b * K(p),
						y: m + b * C(p)
					}, i.add(t), N.addAll([2, 3])
				} else i.add(j.get(Q)), N.add(2);
				return {
					points: i,
					segments: N
				}
			},
			toColorData: Xg,
			setCanvas: Xo,
			createDiv: Dn,
			createDisabledDiv: qh,
			createView: _h,
			createCanvas: Yk,
			appendChild: gm,
			initContext: js,
			checkLoadingImage: ih,
			translateAndScale: sl,
			layout: Mb,
			getPosition: Dd,
			drawPoints: ur,
			drawRoundRect: $n,
			drawBorder: Qc,
			setFocus: jf,
			getter: Hh,
			setter: kf,
			isEmptyObject: ei
		}, !0), vq(V, {
			autoAdjustIndex: 1,
			hierarchicalRendering: 1,
			adjustChildrenToTop: 1,
			autoHideScrollBar: 1,
			autoUpdate: 1,
			firstPersonMode: 1,
			ortho: 1,
			strict: 1,
			stickToRight: 1,
			instant: 1,
			closePath: 1,
			hierarchical: 1,
			doubleClickToToggle: 1,
			continuousLayout: 1,
			syncSize: 1
		}, !0);
		var Wd = z.disabledOpacity,
			wn = z.toolTipDelay,
			Gl = z.devicePixelRatio,
			mh = z.autoMakeVisible,
			zf = z.autoHideScrollBar,
			nc = z.imageGradient,
			yf = z.showToolTip,
			rd = z.hideToolTip,
			$l = z.dashPattern,
			Bn = z.lineCap,
			Zd = z.lineJoin,
			Dr = z.labelColor,
			Bl = z.labelSelectColor,
			an = z.labelFont,
			Vr = z.widgetIndent,
			Sb = z.widgetRowHeight,
			Je = z.widgetHeaderHeight,
			cd = z.widgetTitleHeight,
			lh = z.scrollBarColor,
			be = z.scrollBarSize,
			zo = z.scrollBarTimeout,
			pm = z.scrollBarMinLength,
			pj = z.scrollBarInteractiveSize,
			ve = z.zoomIncrement,
			Id = z.scrollZoomIncrement,
			hs = z.pinchZoomIncrement,
			$e = z.zoomMax,
			Ck = z.zoomMin,
			jn = z.createObject,
			ap = z.preventDefault,
			Yd = z.setImage,
			Ob = z.getImage,
			Ok = z.isImageComplete,
			xd = z.drawCenterImage,
			Bb = z.drawStretchImage,
			zj = z.getId,
			We = z.callLater,
			bs = z.asyncEach,
			Or = (z.xhrLoad, z.sortFunc),
			Hg = z.clone,
			Tp = z.getClass,
			Ie = z.startAnim,
			Mp = z.brighter,
			li = z.darker,
			jh = z.drawText,
			ib = z.getTextSize,
			Dg = z.isLeftButton,
			So = z.getTouchCount,
			hm = z.isDoubleClick,
			Dm = z.isShiftDown,
			Ik = z.isCtrlDown,
			km = z.getClientPoint,
			Hq = z.getPagePoint,
			Zg = z.getDistance,
			cp = z.unionPoint,
			kb = z.unionRect,
			Gn = z.containsPoint,
			ui = z.containsRect,
			td = z.intersectsRect,
			Di = z.intersection,
			xg = z.getWindowInfo,
			Td = z.grow,
			Vd = z.getLogicalPoint,
			Gm = z.startDragging,
			Er = z.removeHTML,
			ag = z.createElement,
			_q = z.segmentResolution,
			oi = z.shapeResolution,
			wq = z.shapeSide,
			De = z.def,
			Xq = function(s, u, M) {
				De(J + "." + s, u, M)
			},
			ci = function(N, U) {
				N.childNodes.forEach(function(j) {
					U(j), ci(j, U)
				})
			};
		vq(z, {
			toolTipLabelColor: Dr,
			toolTipLabelFont: an,
			toolTipBackground: P.toolTipBackground,
			toolTipShadowColor: sm,
			drawBreakableText: Eg,
			setDevicePixelRatio: function(L) {
				Gl = z.devicePixelRatio = "number" == typeof L ? L : I.devicePixelRatio, ci(x.body, function(k) {
					var R = k._ht;
					R && R._canvas && (Xo(R._canvas, R.getWidth(), R.getHeight()), R.redraw ? R.redraw() : R.iv())
				})
			}
		}, !0);
		var qk = 1e-6,
			ps = "undefined" != typeof Uint16Array ? Uint16Array : Array,
			Cm = "undefined" != typeof Float32Array ? Float32Array : Array,
			Yg = function(s, T, O) {
				var w = [s[0] - T[0], s[1] - T[1], s[2] - T[2]];
				if (O) {
					var A = Zg(w);
					A > 0 && (w[0] /= A, w[1] /= A, w[2] /= A)
				}
				return w
			},
			Ze = function(F) {
				return [-F[0], -F[1], -F[2]]
			},
			nb = function(K, o) {
				return 3 === K.length ? K[0] * o[0] + K[1] * o[1] + K[2] * o[2] : K[0] * o[0] + K[1] * o[1]
			},
			nd = function() {
				var m = new Cm(16);
				return m[0] = 1, m[1] = 0, m[2] = 0, m[3] = 0, m[4] = 0, m[5] = 1, m[6] = 0, m[7] = 0, m[8] = 0, m[9] = 0, m[10] = 1, m[11] = 0, m[12] = 0, m[13] = 0, m[14] = 0, m[15] = 1, m
			},
			Tl = nd(),
			ko = function(z) {
				var G = new Cm(16);
				return G[0] = z[0], G[1] = z[1], G[2] = z[2], G[3] = z[3], G[4] = z[4], G[5] = z[5], G[6] = z[6], G[7] = z[7], G[8] = z[8], G[9] = z[9], G[10] = z[10], G[11] = z[11], G[12] = z[12], G[13] = z[13], G[14] = z[14], G[15] = z[15], G
			},
			Yl = function(a, e) {
				return a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3], a[4] = e[4], a[5] = e[5], a[6] = e[6], a[7] = e[7], a[8] = e[8], a[9] = e[9], a[10] = e[10], a[11] = e[11], a[12] = e[12], a[13] = e[13], a[14] = e[14], a[15] = e[15], a
			},
			pn = function(V) {
				return V[0] = 1, V[1] = 0, V[2] = 0, V[3] = 0, V[4] = 0, V[5] = 1, V[6] = 0, V[7] = 0, V[8] = 0, V[9] = 0, V[10] = 1, V[11] = 0, V[12] = 0, V[13] = 0, V[14] = 0, V[15] = 1, V
			},
			lc = function(b, W) {
				var r = b[0],
					T = b[1],
					z = b[2];
				return b[0] = W[0] * r + W[4] * T + W[8] * z + W[12], b[1] = W[1] * r + W[5] * T + W[9] * z + W[13], b[2] = W[2] * r + W[6] * T + W[10] * z + W[14], b
			},
			Ue = function(R, H) {
				var D = R[0],
					u = R[1],
					w = R[2],
					T = R[3];
				return R[0] = H[0] * D + H[4] * u + H[8] * w + H[12] * T, R[1] = H[1] * D + H[5] * u + H[9] * w + H[13] * T, R[2] = H[2] * D + H[6] * u + H[10] * w + H[14] * T, R[3] = H[3] * D + H[7] * u + H[11] * w + H[15] * T, R
			},
			Wc = function() {
				var g, r, V, b, o = vf(On[1] + On[7]),
					k = vf(On[0] + On[3] - On[10]),
					A = vf(On[8] + 2),
					f = function() {
						return r = V.charAt(g), g += 1, r
					},
					T = function() {
						var p = "";
						if (r === A) for (; f();) {
							if (r === A) return f(), p;
							p += r
						} else f()
					},
					D = function() {
						for (; r && " " >= r;) f()
					},
					Y = function() {
						var G, S = {};
						if (r === o) {
							if (f(), D(), r === k) return f(), S;
							for (; r;) {
								if (G = T(), D(), f(), S[G] = b(), D(), r === k) return f(), S;
								f(), D()
							}
						}
					};
				return b = function() {
					switch (D(), r) {
					case o:
						return Y();
					default:
						return T()
					}
				}, function(X) {
					if (U = {}, X) {
						var H;
						if (V = X, g = 0, r = " ", H = b(), D(), !r) return H
					}
				}
			}(),
			Rq = function(r, R) {
				if (R) {
					var g = C(R),
						P = K(R),
						l = r[4],
						m = r[5],
						Z = r[6],
						X = r[7],
						p = r[8],
						Y = r[9],
						U = r[10],
						J = r[11];
					r[4] = l * P + p * g, r[5] = m * P + Y * g, r[6] = Z * P + U * g, r[7] = X * P + J * g, r[8] = p * P - l * g, r[9] = Y * P - m * g, r[10] = U * P - Z * g, r[11] = J * P - X * g
				}
			},
			jj = function(Y, j) {
				if (j) {
					var l = C(j),
						S = K(j),
						v = Y[0],
						q = Y[1],
						k = Y[2],
						W = Y[3],
						D = Y[8],
						e = Y[9],
						N = Y[10],
						h = Y[11];
					Y[0] = v * S - D * l, Y[1] = q * S - e * l, Y[2] = k * S - N * l, Y[3] = W * S - h * l, Y[8] = v * l + D * S, Y[9] = q * l + e * S, Y[10] = k * l + N * S, Y[11] = W * l + h * S
				}
			},
			$q = function(o, s) {
				if (s) {
					var S = C(s),
						H = K(s),
						P = o[0],
						i = o[1],
						R = o[2],
						E = o[3],
						Z = o[4],
						r = o[5],
						$ = o[6],
						g = o[7];
					o[0] = P * H + Z * S, o[1] = i * H + r * S, o[2] = R * H + $ * S, o[3] = E * H + g * S, o[4] = Z * H - P * S, o[5] = r * H - i * S, o[6] = $ * H - R * S, o[7] = g * H - E * S
				}
			},
			Jd = function(T, D, v) {
				return Gb(M, v === !1 ? M : T.getFinalScale3d(), T.r3(), T.getRotationMode(), T.p3(), M, D)
			},
			Gb = function(V, s, I, x, p, u, i) {
				return u || (u = nd()), p && Qf(u, p), hf(u, I, x), i && Pq(u, u, i), s && Zj(u, s), V && Pq(u, u, V), u
			},
			Rn = function(p, w, b) {
				w = Q(w), b = Q(b);
				var k = this;
				k.g = p, k._84O = w, k._85O = b, k._70I = !0, k.F = 0, k._83O = w + b, k.pen = {
					x: 0,
					y: 0
				}
			},
			di = "lineDashOffset",
			Yr = "setLineDash",
			is = function(X) {
				for (var W in X) 1 === W.length && (di = X[W]);
				return W ? 1 : 0
			},
			qd = function(D, d, e) {
				return yd(d) ? D : D[Yr] ? (D[Yr](d), e && (D.lineDashOffset = e), D) : new Rn(D, d[0], d.length > 1 ? d[1] : d[0])
			},
			nn = function(t, Q) {
				!yd(Q) && t[Yr] && (t[Yr](ad), t.lineDashOffset = 0)
			};
		if (De(Rn, q, {
			_69I: 6,
			moveTo: function(L, k) {
				var B = this,
					E = B.pen;
				E.x = L, E.y = k, B.g.moveTo(L, k), B.start || (B.start = {
					x: L,
					y: k
				})
			},
			lineTo: function(I, D) {
				var t = this,
					U = t.pen,
					O = I - U.x,
					k = D - U.y,
					V = G(k, O),
					B = K(V),
					d = C(V),
					c = t._23O(U.x, U.y, I, D),
					R = t._85O,
					p = t._84O,
					P = t._83O;
				if (t.F) {
					if (t.F > c) return t._70I ? t._72I(I, D) : t.moveTo(I, D), t.F -= c, void 0;
					if (t._70I ? t._72I(U.x + B * t.F, U.y + d * t.F) : t.moveTo(U.x + B * t.F, U.y + d * t.F), c -= t.F, t.F = 0, t._70I = !t._70I, !c) return
				}
				var f = w(c / P);
				if (f) {
					for (var $ = B * p, l = d * p, _ = B * R, u = d * R, Q = 0; f > Q; Q++) t._70I ? (t._72I(U.x + $, U.y + l), t.moveTo(U.x + _, U.y + u)) : (t.moveTo(U.x + _, U.y + u), t._72I(U.x + $, U.y + l));
					c -= P * f
				}
				t._70I ? c > p ? (t._72I(U.x + B * p, U.y + d * p), t.moveTo(I, D), t.F = R - (c - p), t._70I = !1) : (t._72I(I, D), c === p ? (t.F = 0, t._70I = !t._70I) : (t.F = p - c, t.moveTo(I, D))) : c > R ? (t.moveTo(U.x + B * R, U.y + d * R), t._72I(I, D), t.F = p - (c - R), t._70I = !0) : (t.moveTo(I, D), c === R ? (t.F = 0, t._70I = !t._70I) : t.F = R - c)
			},
			quadraticCurveTo: function(X, G, o, W) {
				var j, a = this,
					Q = a.pen,
					H = Q.x,
					e = Q.y,
					C = a._22O(H, e, X, G, o, W),
					$ = 0,
					i = 0,
					Z = a._85O,
					O = a._84O;
				if (a.F) {
					if (a.F > C) return a._70I ? a._71I(X, G, o, W) : a.moveTo(o, W), a.F -= C, void 0;
					if ($ = a.F / C, j = a._20O(H, e, X, G, o, W, $), a._70I ? a._71I(j[2], j[3], j[4], j[5]) : a.moveTo(j[4], j[5]), a.F = 0, a._70I = !a._70I, !C) return
				}
				var n = C - C * $,
					v = w(n / a._83O),
					F = O / C,
					y = Z / C;
				if (v) for (var q = 0; v > q; q++) a._70I ? (i = $ + F, j = a._21O(H, e, X, G, o, W, $, i), a._71I(j[2], j[3], j[4], j[5]), $ = i, i = $ + y, j = a._21O(H, e, X, G, o, W, $, i), a.moveTo(j[4], j[5])) : (i = $ + y, j = a._21O(H, e, X, G, o, W, $, i), a.moveTo(j[4], j[5]), $ = i, i = $ + F, j = a._21O(H, e, X, G, o, W, $, i), a._71I(j[2], j[3], j[4], j[5])), $ = i;
				n = C - C * $, a._70I ? n > O ? (i = $ + F, j = a._21O(H, e, X, G, o, W, $, i), a._71I(j[2], j[3], j[4], j[5]), a.moveTo(o, W), a.F = Z - (n - O), a._70I = !1) : (j = a._19O(H, e, X, G, o, W, $), a._71I(j[2], j[3], j[4], j[5]), C === O ? (a.F = 0, a._70I = !a._70I) : (a.F = O - n, a.moveTo(o, W))) : n > Z ? (i = $ + y, j = a._21O(H, e, X, G, o, W, $, i), a.moveTo(j[4], j[5]), j = a._19O(H, e, X, G, o, W, i), a._71I(j[2], j[3], j[4], j[5]), a.F = O - (n - Z), a._70I = !0) : (a.moveTo(o, W), n === Z ? (a.F = 0, a._70I = !a._70I) : a.F = Z - n)
			},
			bezierCurveTo: function() {
				var Z = arguments;
				this.pen = {
					x: Z[4],
					y: Z[5]
				}, this.g.bezierCurveTo(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5])
			},
			arc: function(C, h, d, u, s, X) {
				X || (u = -u, s = -s), te(this, C, h, u, s - u, d, d, !1)
			},
			rect: function(o, y, I, _) {
				var l = this;
				l.pen = {
					x: o,
					y: y
				}, l.moveTo(o, y), l.lineTo(o, y + _), l.lineTo(o + I, y + _), l.lineTo(o + I, y), l.lineTo(o, y)
			},
			beginPath: function() {
				this.g.beginPath()
			},
			closePath: function() {
				this.lineTo(this.start.x, this.start.y)
			},
			_23O: function(C, G, $, r) {
				var q = $ - C,
					o = r - G;
				return N(q * q + o * o)
			},
			_22O: function(j, K, w, T, E, h, Y) {
				for (var M, _, N, g, q, A, U, v = 0, L = j, F = K, J = Y > 0 ? Y : this._69I, l = 1; J >= l; l++) N = l / J, g = 1 - N, q = g * g, A = 2 * N * g, U = N * N, M = q * j + A * w + U * E, _ = q * K + A * T + U * h, v += this._23O(L, F, M, _), L = M, F = _;
				return v
			},
			_21O: function(T, a, h, B, $, y, c, V) {
				var b = this;
				if (0 === c) return b._20O(T, a, h, B, $, y, V);
				if (1 === V) return b._19O(T, a, h, B, $, y, c);
				var K = b._20O(T, a, h, B, $, y, V);
				return K.push(c / V), b._19O.apply(b, K)
			},
			_20O: function(m, J, V, A, h, O, D) {
				if (1 !== D) {
					var X = V + (h - V) * D,
						G = A + (O - A) * D;
					V = m + (V - m) * D, A = J + (A - J) * D, h = V + (X - V) * D, O = A + (G - A) * D
				}
				return [m, J, V, A, h, O]
			},
			_19O: function(v, d, D, O, P, Y, p) {
				if (1 !== p) {
					var _ = v + (D - v) * p,
						s = d + (O - d) * p;
					D += (P - D) * p, O += (Y - O) * p, v = _ + (D - _) * p, d = s + (O - s) * p
				}
				return [v, d, D, O, P, Y]
			},
			_72I: function(b, g) {
				var v = this.pen;
				(b !== v.x || g !== v.y) && (v.x = b, v.y = g, this.g.lineTo(b, g))
			},
			_71I: function(w, u, L, K) {
				var T = this.pen;
				(w !== L || u !== K || L !== T.x || K !== T.y) && (T.x = L, T.y = K, this.g.quadraticCurveTo(w, u, L, K))
			}
		}), s && h) {
			var bk = h.toString();
			H = bk.indexOf(ae.substr(0, 2)) > 0 && bk.indexOf(Mr + Mr.substr(1, 1)) > 1 ? !0 : !1
		}
		var Qh = M,
			$g = M,
			xq = function(Y) {
				Qh && !Y._72O && ($g || ($g = {}), $g[Y._72O = zj()] = Y)
			},
			Ih = function(Q, G) {
				if (G || (G = Q), G && (Qh || (Qh = {}), !Qh[Q])) {
					var H = new XMLHttpRequest;
					if (Qh[G] = {
						request: H,
						url: G
					}, H.overrideMimeType && H.overrideMimeType("text/plain"), G = z.beforeLoadURL(G), G.data) {
						var y = z.parse(G.data);
						Wr(Q, y), z.handleCompTypeLoaded(Q, y)
					} else H.open("GET", encodeURI(G), !0), H.onload = function(Y) {
						if (200 === this.status || 0 === this.status) {
							var i = z.parse(Y.target.response || Y.target.responseText);
							Wr(Q, i), z.handleCompTypeLoaded(Q, i)
						} else Wr(Q, M)
					}, H.onerror = function() {
						Wr(Q, M)
					}, H.send(null)
				}
			},
			Wr = function(Q, f) {
				if (Pk[Q] = f, delete Qh[Q], ei(Qh) && (Qh = M, $g)) {
					for (var n in $g) {
						var u = $g[n];
						u.invalidateAll && u.invalidateAll(r, "compTypeLoaded", Q), u.redraw && u.redraw(), u.iv(), delete u._72O
					}
					$g = M
				}
				if (f && $g) for (var n in $g) {
					var u = $g[n];
					u.invalidateAll && u.invalidateAll(r, "compTypeLoading", Q), u.redraw && u.redraw(), u.iv()
				}
			},
			jk = P.chart,
			ie = z.compStack = [],
			kd = /^style@/,
			yn = /^attr@/,
			oe = /^field@/,
			tl = {
				x: .5,
				y: .5
			},
			Dc = function(w, P, D, h) {
				if (!w) return 0;
				if (El(w.fitSize, P, D) && h) return h;
				var v = El(w.width, P, D);
				return null == v ? 20 : v
			},
			pd = function(q, y, l, e) {
				if (!q) return 0;
				if (El(q.fitSize, y, l) && e) return e;
				var H = El(q.height, y, l);
				return null == H ? 20 : H
			},
			El = function(n, C, V) {
				if (!n || !n.func) return n;
				var v, k = n.func,
					i = n.value;
				return v = Vb(k) ? V && V.vectorDataBindingDisabled && !n.isSafeFunc ? i : k(C, V) : C instanceof Jc ? yn.test(k) ? C.a(k.slice(5)) : kd.test(k) ? C.s(k.slice(6)) : oe.test(k) ? C[k.slice(6)] : C[k] ? C[k](V) : i : i, i !== r && v == M ? i : v
			},
			od = z.drawImage = function() {
				var Q, n, V, f, y, h, m = function(R, x) {
						R.getValue && R.getValue.compType === x || (R.getValue = function(W) {
							var D = P(R, W);
							if (D === r && x.properties) {
								var a = x.properties[W];
								a && (D = a.defaultValue)
							}
							return D
						}, R.getValue.compType = x)
					},
					P = function(Y, v, A) {
						var L = Y[v];
						return L && L.func ? (L = El(L, n, V), A && (L = A(L))) : A && (L = Y[v] = A(L)), L
					},
					W = function(C, $) {
						var f;
						if (f = $ ? P(C, $) : C, y && f) {
							if ("override" === h) return y;
							if ("override_rgb" === h) {
								var T = qe(y);
								return f = Xg(f), "rgba(" + w(255 * T[0]) + "," + w(255 * T[1]) + "," + w(255 * T[2]) + "," + f[3] / 255 + ")"
							}
							if ("override_a" === h) {
								var T = qe(y);
								return f = Xg(f), "rgba(" + f[0] + "," + f[1] + "," + f[2] + "," + T[3] + ")"
							}
							var T = qe(y);
							return f = Xg(f), "rgba(" + w(f[0] * T[0]) + "," + w(f[1] * T[1]) + "," + w(f[2] * T[2]) + "," + f[3] / 255 * T[3] + ")"
						}
						return f
					},
					p = function(L) {
						if (lo(L)) {
							for (var A = new jg, K = L.length, o = 0; K > o; o += 2) A.add({
								x: L[o],
								y: L[o + 1]
							});
							L = A
						}
						return L
					},
					Z = function(G) {
						var o = P(G, "anchorX"),
							x = P(G, "anchorY");
						if (o !== r || x !== r) return {
							x: o === r ? tl.x : o,
							y: x === r ? tl.y : x
						};
						var I = P(G, "type"),
							F = P(G, "name");
						if ("image" !== I || !F) return tl;
						var m = Ob(F);
						return m && m.anchorX && m.anchorY ? {
							x: m.anchorX,
							y: m.anchorY
						} : tl
					},
					F = function(m, J) {
						var N = P(m, Hf),
							C = Z(m);
						if (lo(N)) {
							var c = N.length,
								V = P(m, "relative"),
								b = J.width,
								q = J.height;
							if (4 === c) N = {
								x: N[0],
								y: N[1],
								width: N[2],
								height: N[3]
							}, V ? (N.x *= b, N.y *= q, N.width *= b, N.height *= q) : J.fitSize && (N.x *= J.widthScale, N.width *= J.widthScale, N.y *= J.heightScale, N.height *= J.heightScale);
							else if (3 === c) {
								var Q = N[0];
								N = {
									width: N[1],
									height: N[2]
								}, V ? (N.width *= b, N.height *= q) : J.fitSize && (N.width *= J.widthScale, N.height *= J.heightScale), "object" == typeof Q ? Q.length && (Q = {
									x: Q[0],
									y: Q[1]
								}) : Q = Dd(Q, J, N), N.x = Q.x - N.width * C.x, N.y = Q.y - N.height * C.y
							}
							var E = P(m, "offsetX");
							E && (J.fitSize && (E *= J.widthScale), N.x += E), E = P(m, "offsetY"), E && (J.fitSize && (E *= J.heightScale), N.y += E)
						}
						return N
					},
					t = function(x) {
						return lo(x) ? new jg(x) : x
					},
					Y = function(v, H, U, X, D, z, I) {
						D === r && (D = 1), z === r && (z = 1);
						var $ = P(v, "clipPercentage"),
							n = Il(U, H);
						if (n && !X && 1 === D && 1 === z && !(1 > $)) return !1;
						I = I || tl;
						var i = H.x + H.width * I.x,
							O = H.y + H.height * I.y,
							V = U.x + U.width * I.x,
							t = U.y + U.height * I.y;
						if (Q.save(), Wj(Q, i, O), mq(Q, X), ll(Q, D * (H.width / U.width), z * (H.height / U.height)), Wj(Q, -V, -t), 1 > $) {
							0 > $ && ($ = 0);
							var o = Cn(U, P(v, "clipDirection"), $);
							Q.beginPath(), Q.rect(o.x, o.y, o.width, o.height), Q.clip()
						}
						return !0
					},
					b = function() {
						Q.restore()
					},
					s = function(w, X, q) {
						var E = P(w, "path"),
							o = P(w, Qd),
							h = P(w, "scaleX"),
							e = P(w, "scaleY"),
							d = Z(w),
							r = M,
							T = dm(null, E);
						if (q || (q = w.unionRect, q || (q = cp(T), w.path.func || (w.unionRect = q)), r = q), q) {
							r || (r = w.unionRect, r || (r = cp(T), w.path.func || (w.unionRect = r)));
							var s = Y(w, q, r, o, h, e, d),
								K = P(w, "borderPattern"),
								c = qd(Q, K),
								L = W(w, "background"),
								n = W(w, "borderColor"),
								x = P(w, "borderWidth"),
								R = P(w, "gradient"),
								G = W(w, "gradientColor"),
								D = P(w, "border3d"),
								S = P(w, "border3dColor"),
								p = P(w, "border3dAccuracy"),
								C = Q.lineJoin,
								A = Q.lineCap;
							if (Q.lineJoin = P(w, "borderJoin") || Zd, Q.lineCap = P(w, "borderCap") || Bn, L ? (Ff(Q, L, R, G, r), dm(Q, E), Q.fill(), c !== Q && dm(Q, E)) : dm(Q, E), x && n) {
								var m = P(w, "borderWidthAbsolute");
								m && (Q.save(), Q.setTransform(1, 0, 0, 1, 0, 0)), Q.lineWidth = x, Q.strokeStyle = n, Q.stroke(), m && Q.restore(), D && $m(Q, n, S, x, f, p)
							}
							if (nn(Q, K), P(w, "dash")) {
								var H = P(w, "dashWidth") || x;
								if (H > 0) {
									K = P(w, "dashPattern") || $l;
									var c = qd(Q, K, P(w, "dashOffset")),
										u = W(w, "dashColor") || W(mm);
									c !== Q && dm(Q, E), Q.strokeStyle = u, Q.lineWidth = H, Q.stroke(), P(w, "dash3d") && $m(Q, u, W(w, "dash3dColor"), H, f, P(w, "dash3dAccuracy")), nn(Q, K)
								}
							}
							X === Hf && Uk(Q, L, P(w, "depth"), r), Q.lineJoin = C, Q.lineCap = A, s && b()
						}
					},
					I = function(x, I, D, u) {
						var R = P(x, co, p),
							m = P(x, Qd),
							E = Z(x);
						if (R && u.fitSize) {
							var a = Math.abs(Math.cos(m)) < .001,
								k = new jg,
								c = cp(R),
								S = u.widthScale,
								q = u.heightScale,
								K = c.x + E.x * c.width,
								v = c.y + E.y * c.height,
								e = K * S,
								G = v * q;
							R.each(function(u) {
								var d = u.x - K,
									E = u.y - v;
								k.add({
									x: e + d * (a ? q : S),
									y: G + E * (a ? S : q)
								})
							}), R = k, x.unionRect = null
						}
						var g = P(x, "scaleX"),
							C = P(x, "scaleY"),
							N = I === $i,
							L = M;
						if (!D && N && (D = x.unionRect, D || (D = cp(R), x.points.func || (x.unionRect = D)), L = D), D) {
							N ? L || (L = x.unionRect, L || (L = cp(R), x.points.func || (x.unionRect = L))) : L = D;
							var r, z, o, X, U = Y(x, D, L, m, g, C, E),
								i = P(x, "borderPattern"),
								A = qd(Q, i),
								w = W(x, "background"),
								$ = Ob(P(x, "repeatImage"), y, h),
								B = P(x, "gradientPack"),
								O = W(x, "borderColor"),
								T = P(x, "borderWidth"),
								d = P(x, "segments", t),
								_ = P(x, "gradient"),
								J = W(x, "gradientColor"),
								s = P(x, "border3d"),
								F = P(x, "border3dColor"),
								H = P(x, "border3dAccuracy"),
								l = P(x, "closePath"),
								j = P(x, "fillRule") || "nonzero",
								wo = Q.lineJoin,
								Om = Q.lineCap;
							if (Q.lineJoin = P(x, "borderJoin") || Zd, Q.lineCap = P(x, "borderCap") || Bn, N) if (w || $ || B) {
								var jf = P(x, "fillClipPercentage");
								if (1 > jf) {
									0 > jf && (jf = 0);
									var Dn = Cn(L, P(x, "fillClipDirection"), jf);
									Q.save(), Q.beginPath(), Q.rect(Dn.x, Dn.y, Dn.width, Dn.height), Q.clip()
								}
								if (ur(Q, R, d, l), B) sq(Q, B);
								else if ($) {
									var hm = Q,
										Yg = y,
										xf = h;
									Hd(Q, $, y, h, n, V), Q = hm, y = Yg, h = xf
								} else {
									var hm = Q;
									Ff(Q, w, _, J, L), Q = hm
								}
								Q.fill(j), 1 > jf && Q.restore(), B && Q.restore(), A !== Q && ur(A, R, d, l)
							} else ur(A, R, d, l);
							else if ("roundRect" === I ? r = P(x, "cornerRadius") : "polygon" === I ? r = P(x, "polygonSide") : "arc" === I && (r = P(x, "arcFrom"), z = P(x, "arcTo"), o = P(x, "arcClose"), X = P(x, "arcOval")), w || $ || B) {
								var jf = P(x, "fillClipPercentage");
								if (1 > jf) {
									0 > jf && (jf = 0);
									var Dn = Cn(L, P(x, "fillClipDirection"), jf);
									Q.save(), Q.beginPath(), Q.rect(Dn.x, Dn.y, Dn.width, Dn.height), Q.clip()
								}
								if (dq(Q, I, L, r, z, o, X), B) sq(Q, B);
								else if ($) {
									var hm = Q,
										Yg = y,
										xf = h;
									Hd(Q, $, y, h, n, V), Q = hm, y = Yg, h = xf
								} else Ff(Q, w, _, J, L);
								Q.fill(j), 1 > jf && Q.restore(), B && Q.restore(), Q !== A && dq(A, I, L, r, z, o, X)
							} else dq(A, I, L, r, z, o, X);
							if (T && O) {
								var Qh = P(x, "borderWidthAbsolute");
								Qh && (Q.save(), Q.setTransform(1, 0, 0, 1, 0, 0)), Q.lineWidth = T, Q.strokeStyle = O, Q.stroke(), Qh && Q.restore(), s && $m(Q, O, F, T, f, H)
							}
							if (nn(Q, i), P(x, "dash")) {
								var Bq = P(x, "dashWidth") || T;
								if (Bq > 0) {
									i = P(x, "dashPattern") || $l;
									var A = qd(Q, i, P(x, "dashOffset")),
										Nd = W(x, "dashColor") || W(mm);
									A !== Q && (N ? ur(A, R, d, l) : dq(A, I, L, r, z, o, X)), Q.strokeStyle = Nd, Q.lineWidth = Bq, Q.stroke(), P(x, "dash3d") && $m(Q, Nd, W(x, "dash3dColor"), Bq, f, P(x, "dash3dAccuracy")), nn(Q, i)
								}
							}
							I === Hf && Uk(Q, w, P(x, "depth"), L), Q.lineJoin = wo, Q.lineCap = Om, U && b()
						}
					},
					x = function(b, J) {
						var Z = y,
							A = h,
							F = y || P(b, Bq),
							R = h || P(b, "blendMode"),
							G = Ob(P(b, "name"), F, R);
						G && (Bb(Q, G, P(b, "stretch"), J.x, J.y, J.width, J.height, n, V, F, null, R), y = Z, h = A)
					},
					i = function(o, U) {
						var J = P(o, "text");
						J != M && jh(Q, J, P(o, "font"), W(o, Bq), U.x, U.y, U.width, U.height, P(o, "align"), P(o, "vAlign"))
					},
					$ = function(k, c) {
						Qc(Q, W(k, Bq), c.x, c.y, c.width, c.height, P(k, "width"))
					},
					L = function(V, b) {
						var d = P(V, Br),
							f = 0;
						if (d && (d.forEach(function(v) {
							f += v
						}), f > 0)) {
							for (var R = P(V, "colors") || jk, Y = P(V, "startAngle") || 0, l = P(V, "hollow"), F = P(V, ob), v = P(V, bn), q = P(V, Eb), m = F ? new jg : M, t = b.x, H = b.y, O = b.width, I = b.height, D = t + O / 2, J = H + I / 2, N = k(O, I) / 2, g = 0, $ = 0; $ < d.length; $++) {
								var s = d[$],
									y = o * s / f,
									X = Y + y;
								if (Q.fillStyle = R[g++], g === R.length && (g = 0), Q.beginPath(), l) {
									var x = D + K(Y) * N / 2,
										_ = J + C(Y) * N / 2,
										i = D + K(X) * N,
										c = J + C(X) * N;
									Q.moveTo(x, _), Q.arc(D, J, N / 2, Y, X, !1), Q.lineTo(i, c), Q.arc(D, J, N, X, Y, !0)
								} else Q.moveTo(D, J), Q.arc(D, J, N, X, Y, !0);
								m && (y = (Y + X) / 2, m.add({
									text: Vb(F) ? F(s, $, f, n) : s,
									x: D + .75 * K(y) * N,
									y: J + .75 * C(y) * N
								})), Q.closePath(), Q.fill(), Y = X
							}
							m && m.each(function(h) {
								jh(Q, h.text, v, q, h.x, h.y, 0, 0, rn)
							})
						}
					},
					R = function(j, J) {
						var e = P(j, Ln);
						if (e && e.length > 0) {
							var v = e.length,
								I = P(j, ob),
								i = P(j, bn),
								E = P(j, Eb),
								V = I ? new jg : M,
								c = P(j, "minValue") || 0,
								H = P(j, "maxValue");
							if (H == M && (H = 0, e.forEach(function(q) {
								q.values.forEach(function(b) {
									H = D(H, b)
								})
							})), c === H) return;
							for (var h = J.height / (H - c), m = J.y + H * h, G = P(e[0], Br).length, a = J.width / (3 * G + 1), w = 2 * a / v, N = 0, S = 0; v > S; S++) for (var u = e[S], k = P(u, Bq), U = P(u, "colors"), r = P(u, Br), p = 0; G > p; p++) {
								U ? Q.fillStyle = U[p] : k ? Q.fillStyle = k : (Q.fillStyle = jk[N++], N === jk.length && (N = 0));
								var $ = r[p],
									L = $ * h,
									f = J.x + (1 + 3 * p) * a + S * w;
								if (kq(Q, f, m - L, w, L), V) {
									var b = Vb(I) ? I($, p, u, n) : $,
										T = ib(i, b).height;
									V.add({
										x: f,
										y: m - L - T,
										width: w,
										height: T,
										text: b
									})
								}
							}
							V && V.each(function(H) {
								jh(Q, H.text, i, E, H.x, H.y, H.width, H.height, rn)
							})
						}
					},
					U = function(q, R) {
						var G = P(q, Ln);
						if (G && G.length > 0) {
							var C = G.length,
								o = P(G[0], Br).length,
								f = R.width / (3 * o + 1),
								d = 0,
								m = P(q, "maxValue"),
								F = P(q, ob),
								r = P(q, bn),
								s = P(q, Eb),
								B = F ? new jg : M;
							if (m == M) {
								m = 0;
								for (var O = 0; o > O; O++) {
									for (var e = 0, Y = 0; C > Y; Y++) e += P(G[Y], Br)[O];
									m = D(m, e)
								}
							}
							if (m > 0) {
								for (var O = 0; o > O; O++) for (var T = R.y + R.height, Y = 0; C > Y; Y++) {
									var l = G[Y],
										t = P(l, Bq),
										u = P(l, Br)[O],
										v = u / m * R.height;
									t ? Q.fillStyle = t : (Q.fillStyle = jk[d++], d === jk.length && (d = 0)), T -= v;
									var z = {
										x: R.x + (1 + 3 * O) * f,
										y: T,
										width: 2 * f,
										height: v
									};
									kq(Q, z.x, z.y, z.width, z.height), B && (z.text = Vb(F) ? F(u, O, l, n) : u, B.add(z))
								}
								B && B.each(function(t) {
									jh(Q, t.text, r, s, t.x, t.y, t.width, t.height, rn)
								})
							}
						}
					},
					T = function(D, l) {
						var Z = P(D, Ln);
						if (Z && Z.length > 0) {
							for (var W = Z.length, J = P(Z[0], Br).length, y = l.width / (3 * J + 1), k = 0, j = P(D, ob), h = P(D, bn), c = P(D, Eb), A = j ? new jg : M, H = 0; J > H; H++) {
								for (var b = 0, w = 0; W > w; w++) b += P(Z[w], Br)[H];
								if (b > 0) {
									var f = l.y + l.height;
									for (w = 0; W > w; w++) {
										var F = Z[w],
											m = P(F, Bq),
											r = P(F, Br)[H],
											B = r / b * l.height;
										m ? Q.fillStyle = m : (Q.fillStyle = jk[k++], k === jk.length && (k = 0)), f -= B;
										var U = {
											x: l.x + (1 + 3 * H) * y,
											y: f,
											width: 2 * y,
											height: B
										};
										kq(Q, U.x, U.y, U.width, U.height), A && (U.text = Vb(j) ? j(r, H, F, n) : r, A.add(U))
									}
								}
							}
							A && A.each(function($) {
								jh(Q, $.text, h, c, $.x, $.y, $.width, $.height, rn)
							})
						}
					},
					S = function(b, T) {
						var O = P(b, Ln);
						if (O && O.length > 0) {
							var Y = O.length,
								X = P(b, "minValue") || 0,
								w = P(b, "maxValue");
							if (w == M && (w = 0, O.forEach(function(o) {
								o.values.forEach(function(d) {
									w = D(w, d)
								})
							})), X === w) return;
							for (var $ = T.height / (w - X), s = T.y + w * $, H = P(O[0], Br).length, G = T.width / (3 * H + 1), E = 0, L = P(b, "lineWidth") || 2, z = P(b, "line3d"), q = P(b, "linePoint"), J = P(b, ob), c = P(b, bn), N = P(b, Eb), S = 0; Y > S; S++) {
								var v = O[S],
									F = P(v, Bq),
									W = P(v, Br);
								F ? Q.strokeStyle = F : (F = Q.strokeStyle = jk[E++], E === jk.length && (E = 0)), Q.beginPath();
								for (var V = 0; H > V; V++) {
									var g = T.x + (2 + 3 * V) * G,
										_ = s - W[V] * $;
									0 === V ? Q.moveTo(g, _) : Q.lineTo(g, _)
								}
								if (Q.lineWidth = L, Q.stroke(), z && $m(Q, F, M, L, f), q || J) {
									var x, A = L / 2 + 2;
									for (V = 0; H > V; V++) {
										var r = W[V];
										if (g = T.x + (2 + 3 * V) * G, _ = s - r * $, Vb(q) ? q(Q, g, _, F, V, v, n) : q && (Q.fillStyle = F, Q.beginPath(), Q.arc(g, _, A, 0, o, !0), Q.fill()), Vb(J) ? x = J(r, V, v, n) : J && (x = r), x) {
											var U = ib(c, x).height,
												i = Q.shadowBlur;
											if (i) {
												var I = Q.shadowOffsetX,
													j = Q.shadowOffsetY,
													C = Q.shadowColor;
												Q.shadowOffsetX = 0, Q.shadowOffsetY = 0, Q.shadowBlur = 0, Q.shadowColor = M
											}
											jh(Q, x, c, N, g, _ - U - A + 2, 0, U, rn), i && (Q.shadowOffsetX = I, Q.shadowOffsetY = j, Q.shadowBlur = i, Q.shadowColor = C)
										}
									}
								}
							}
						}
					},
					l = {
						border: $,
						image: x,
						text: i,
						pieChart: L,
						columnChart: R,
						stackedColumnChart: U,
						percentageColumnChart: T,
						lineChart: S
					};
				return function(u, G, K, C, D, c, j, q, X, B) {
					if (G && D && c) {
						Q = u, n = j, V = q, f = V ? V._zoom ? V._zoom : 1 : 1, y = X, h = B;
						var v = D,
							H = c;
						if (zg()) {
							var E, $, T;
							0 === Q[vr] ? zg[0] && (E = !0) : E = !0, Q.texureImage2D ? zg[1] && ($ = !0) : $ = !0, Q.texureImage3D ? zg[2] && (T = !0) : T = !0, E && $ && T && (v = K, H = C)
						}
						if (G.tagName) return Q.drawImage(G, v, H, D, c), void 0;
						if (P(G, "visible") !== !1) {
							y || (y = El(G.color, n, V)), B || (h = El(G.blendMode, n, V));
							var S = Dc(G, n, V, D),
								e = pd(G, n, V, c),
								R = {
									x: 0,
									y: 0,
									width: S,
									height: e,
									fitSize: P(G, "fitSize")
								},
								g = P(G, "clip"),
								A = P(G, "opacity");
							R.fitSize && (R.widthScale = S / El(G.width, n, V), R.heightScale = e / El(G.height, n, V)), Q.save(), Wj(Q, v, H), (S !== D || e !== c) && Q.scale(D / S, c / e), g && (Vb(g) ? g(Q, S, e, n, V, G) : (Q.beginPath(), Q.rect(0, 0, S, e), Q.clip())), A != M && (Q.globalAlpha *= A), P(G, "comps").forEach(function($) {
								if (P($, gj) !== !1) {
									ie.splice(0, 0, $);
									var C = P($, "opacity"),
										N = P($, "shadow"),
										d = P($, "type"),
										D = F($, R);
									if (C != M) {
										var i = Q.globalAlpha;
										Q.globalAlpha *= C
									}
									if (N) {
										var X = Q.shadowOffsetX,
											k = Q.shadowOffsetY,
											L = Q.shadowBlur,
											q = Q.shadowColor,
											e = P($, "shadowOffsetX"),
											y = P($, "shadowOffsetY"),
											j = P($, "shadowBlur"),
											E = W($, "shadowColor");
										Q.shadowOffsetX = (e == M ? 3 : e) * f, Q.shadowOffsetY = (y == M ? 3 : y) * f, Q.shadowBlur = (j == M ? 6 : j) * f, Q.shadowColor = E || W(sm)
									}
									if ("save" === d) Q.save();
									else if ("endClip" === d || "restore" === d) Q.restore();
									else if ("clip" === d) Q.save(), ur(Q, P($, "points", p), P($, "segments", t), !0), Q.clip();
									else if (Ed[d]) D = D || {
										x: 0,
										y: 0,
										width: R.width,
										height: R.height
									}, I($, d, D, R);
									else if (d === $i) I($, d, D, R);
									else if ("SVGPath" === d) s($, d, D);
									else {
										D = D || {
											x: 0,
											y: 0,
											width: R.width,
											height: R.height
										};
										var K = P($, Qd),
											S = P($, "scaleX"),
											O = P($, "scaleY"),
											U = Z($),
											_ = Y($, D, D, K, S, O, U);
										if (Vb(d)) m($, d), z.drawCompType(d, Q, D, $, n, V);
										else if (z.getCompType(d)) {
											var x = z.getCompType(d),
												G = x.func || x;
											m($, x), z.drawCompType(G, Q, D, $, n, V)
										} else l[d] ? l[d]($, D) : z.getCompType(d) === r && Wm.test(d) && Ih(d);
										_ && b()
									}
									N && (Q.shadowOffsetX = X, Q.shadowOffsetY = k, Q.shadowBlur = L, Q.shadowColor = q), C != M && (Q.globalAlpha = i), ie.splice(0, 1)
								}
							}), Q.restore()
						}
					}
				}
			}();
		z.getCurrentComp = function() {
			return ie[0]
		}, z.getParentComp = function() {
			return ie[1]
		}, z.getInternal = function() {
			return {
				isEnter: gq,
				isEsc: gk,
				isSpace: Co,
				isLeft: id,
				isUp: ar,
				isRight: Zc,
				isDown: qm,
				addMethod: vq,
				superCall: im,
				toPointsArray: vk,
				translateAndScale: sl,
				appendArray: _r,
				createWorldMatrix: Gb,
				vec3TransformMat4: lc,
				setCanvas: Xo,
				createDiv: Dn,
				createView: _h,
				createCanvas: Yk,
				createImage: rb,
				initContext: js,
				layout: Mb,
				fillRect: kq,
				Mat: Gk,
				drawBorder: Qc,
				isString: bc,
				setBorder: ep,
				getPropertyValue: fg,
				setPropertyValue: Ki,
				drawVerticalLine: Te,
				draw3DRect: Uk,
				getPinchDist: Ri,
				isSameRect: Il,
				getPosition: Dd,
				intersectionLineRect: Ar,
				getNodeRect: mg,
				getEdgeAgentPosition: Jf,
				getImageWidth: Dc,
				getImageHeight: pd,
				initItemElement: gr,
				drawPoints: ur,
				createG2: qd,
				closePopup: xl,
				isH: Nc,
				createAnim: Sc,
				createNormalMatrix: gd,
				createNormals: Mq,
				toFloatArray: Sf,
				glMV: Qe,
				batchShape: Zq,
				createNodeMatrix: Jd,
				getFaceInfo: Wo,
				transformAppend: si,
				drawFaceInfo: nq,
				to3dPointsArray: Mo,
				setGLDebugMode: function(H) {
					zi = H
				},
				cube: function() {
					return {
						vs: Gd,
						is: Dj,
						uv: Pd
					}
				},
				ui: function() {
					return {
						DataUI: Xe,
						NodeUI: sf,
						EdgeUI: Wq,
						GroupUI: Kg,
						ShapeUI: ul,
						GridUI: Pl,
						Data3dUI: rq,
						Node3dUI: Ym,
						Shape3dUI: am
					}
				},
				getInternalVersion: function() {
					return "U2FsdGVkX1/83QDVwD60iwGKSMqtMcytko9Ez6NA0OA="
				},
				getDragger: function() {
					return $b
				},
				addMSMap: function(Z) {
					vq(vb, Z)
				},
				k: m
			}
		}, function(n) {
			function t(V, N) {
				V != M && (N == M && Df != typeof V ? this._54O(V, 256) : this._54O(V, N))
			}
			function V() {
				return new t(M)
			}
			function f(J, E, B, t, u, z) {
				for (; --z >= 0;) {
					var W = E * this[J++] + B[t] + u;
					u = w(W / 67108864), B[t++] = 67108863 & W
				}
				return u
			}
			function P(c, o, l, q, j, v) {
				for (var C = 32767 & o, G = o >> 15; --v >= 0;) {
					var K = 32767 & this[c],
						y = this[c++] >> 15,
						H = G * K + y * C;
					K = C * K + ((32767 & H) << 15) + l[q] + (1073741823 & j), j = (K >>> 30) + (H >>> 15) + G * y + (j >>> 30), l[q++] = 1073741823 & K
				}
				return j
			}
			function H(b, C, W, h, P, o) {
				for (var B = 16383 & C, g = C >> 14; --o >= 0;) {
					var S = 16383 & this[b],
						e = this[b++] >> 14,
						s = g * S + e * B;
					S = B * S + ((16383 & s) << 14) + W[h] + P, P = (S >> 28) + (s >> 14) + g * e, W[h++] = 268435455 & S
				}
				return P
			}
			function O(i) {
				return Ke.charAt(i)
			}
			function A(S, e) {
				var o = Dc[S.charCodeAt(e)];
				return o == M ? -1 : o
			}
			function q(X) {
				for (var k = this.t - 1; k >= 0; --k) X[k] = this[k];
				X.t = this.t, X.s = this.s
			}
			function $(O) {
				this.t = 1, this.s = 0 > O ? -1 : 0, O > 0 ? this[0] = O : -1 > O ? this[0] = O + this.DV : this.t = 0
			}
			function E(e) {
				var t = V();
				return t._58O(e), t
			}
			function G(y, Q) {
				var P, i = this;
				if (16 == Q) P = 4;
				else if (8 == Q) P = 3;
				else if (256 == Q) P = 8;
				else if (2 == Q) P = 1;
				else if (32 == Q) P = 5;
				else {
					if (4 != Q) return i.fromRadix(y, Q), void 0;
					P = 2
				}
				i.t = 0, i.s = 0;
				for (var p = y.length, G = !1, B = 0; --p >= 0;) {
					var V = 8 == P ? 255 & y[p] : A(y, p);
					0 > V ? "-" == y.charAt(p) && (G = !0) : (G = !1, 0 == B ? i[i.t++] = V : B + P > i.DB ? (i[i.t - 1] |= (V & (1 << i.DB - B) - 1) << B, i[i.t++] = V >> i.DB - B) : i[i.t - 1] |= V << B, B += P, B >= i.DB && (B -= i.DB))
				}
				8 == P && 0 != (128 & y[0]) && (i.s = -1, B > 0 && (i[i.t - 1] |= (1 << i.DB - B) - 1 << B)), i._57O(), G && t.ZERO._78O(i, i)
			}
			function u() {
				for (var U = this, g = U.s & U.DM; U.t > 0 && U[U.t - 1] == g;)--U.t
			}
			function B(Z) {
				var w = this;
				if (w.s < 0) return "-" + w._85O()[Ol](Z);
				var y;
				if (16 == Z) y = 4;
				else if (8 == Z) y = 3;
				else if (2 == Z) y = 1;
				else if (32 == Z) y = 5;
				else {
					if (4 != Z) return w.toRadix(Z);
					y = 2
				}
				var n, N = (1 << y) - 1,
					R = !1,
					_ = "",
					P = w.t,
					f = w.DB - P * w.DB % y;
				if (P-- > 0) for (f < w.DB && (n = w[P] >> f) > 0 && (R = !0, _ = O(n)); P >= 0;) y > f ? (n = (w[P] & (1 << f) - 1) << y - f, n |= w[--P] >> (f += w.DB - y)) : (n = w[P] >> (f -= y) & N, 0 >= f && (f += w.DB, --P)), n > 0 && (R = !0), R && (_ += O(n));
				return R ? _ : "0"
			}
			function z() {
				var w = V();
				return t.ZERO._78O(this, w), w
			}
			function d() {
				return this.s < 0 ? this._85O() : this
			}
			function l(j) {
				var t = this,
					x = t.s - j.s;
				if (0 != x) return x;
				var r = t.t;
				if (x = r - j.t, 0 != x) return t.s < 0 ? -x : x;
				for (; --r >= 0;) if (0 != (x = t[r] - j[r])) return x;
				return 0
			}
			function T(q) {
				var O, T = 1;
				return 0 != (O = q >>> 16) && (q = O, T += 16), 0 != (O = q >> 8) && (q = O, T += 8), 0 != (O = q >> 4) && (q = O, T += 4), 0 != (O = q >> 2) && (q = O, T += 2), 0 != (O = q >> 1) && (q = O, T += 1), T
			}
			function j() {
				var D = this;
				return D.t <= 0 ? 0 : D.DB * (D.t - 1) + T(D[D.t - 1] ^ D.s & D.DM)
			}
			function p(M, _) {
				var Z;
				for (Z = this.t - 1; Z >= 0; --Z) _[Z + M] = this[Z];
				for (Z = M - 1; Z >= 0; --Z) _[Z] = 0;
				_.t = this.t + M, _.s = this.s
			}
			function r(V, U) {
				for (var s = V; s < this.t; ++s) U[s - V] = this[s];
				U.t = D(this.t - V, 0), U.s = this.s
			}
			function h(t, r) {
				var A, Z = this,
					s = t % Z.DB,
					Q = Z.DB - s,
					k = (1 << Q) - 1,
					m = w(t / Z.DB),
					W = Z.s << s & Z.DM;
				for (A = Z.t - 1; A >= 0; --A) r[A + m + 1] = Z[A] >> Q | W, W = (Z[A] & k) << s;
				for (A = m - 1; A >= 0; --A) r[A] = 0;
				r[m] = W, r.t = Z.t + m + 1, r.s = Z.s, r._57O()
			}
			function c(r, j) {
				var v = this;
				j.s = v.s;
				var g = w(r / v.DB);
				if (g >= v.t) return j.t = 0, void 0;
				var G = r % v.DB,
					c = v.DB - G,
					S = (1 << G) - 1;
				j[0] = v[g] >> G;
				for (var o = g + 1; o < v.t; ++o) j[o - g - 1] |= (v[o] & S) << c, j[o - g] = v[o] >> G;
				G > 0 && (j[v.t - g - 1] |= (v.s & S) << c), j.t = v.t - g, j._57O()
			}
			function x(Y, c) {
				for (var K = this, v = 0, n = 0, l = k(Y.t, K.t); l > v;) n += K[v] - Y[v], c[v++] = n & K.DM, n >>= K.DB;
				if (Y.t < K.t) {
					for (n -= Y.s; v < K.t;) n += K[v], c[v++] = n & K.DM, n >>= K.DB;
					n += K.s
				} else {
					for (n += K.s; v < Y.t;) n -= Y[v], c[v++] = n & K.DM, n >>= K.DB;
					n -= Y.s
				}
				c.s = 0 > n ? -1 : 0, -1 > n ? c[v++] = K.DV + n : n > 0 && (c[v++] = n), c.t = v, c._57O()
			}
			function Z(Z, b) {
				var C = this.abs(),
					q = Z.abs(),
					o = C.t;
				for (b.t = o + q.t; --o >= 0;) b[o] = 0;
				for (o = 0; o < q.t; ++o) b[o + C.t] = C.am(0, q[o], b, o, 0, C.t);
				b.s = 0, b._57O(), this.s != Z.s && t.ZERO._78O(b, b)
			}
			function X(g) {
				for (var U = this.abs(), K = g.t = 2 * U.t; --K >= 0;) g[K] = 0;
				for (K = 0; K < U.t - 1; ++K) {
					var d = U.am(K, U[K], g, 2 * K, 0, 1);
					(g[K + U.t] += U.am(K + 1, 2 * U[K], g, 2 * K + 1, d, U.t - K - 1)) >= U.DV && (g[K + U.t] -= U.DV, g[K + U.t + 1] = 1)
				}
				g.t > 0 && (g[g.t - 1] += U.am(K, U[K], g, 2 * K, 0, 1)), g.s = 0, g._57O()
			}
			function Y(X, f, G) {
				var U = X.abs(),
					o = this;
				if (!(U.t <= 0)) {
					var Z = o.abs();
					if (Z.t < U.t) return f != M && f._58O(0), G != M && o._77O(G), void 0;
					G == M && (G = V());
					var r = V(),
						W = o.s,
						$ = X.s,
						Y = o.DB - T(U[U.t - 1]);
					Y > 0 ? (U._44O(Y, r), Z._44O(Y, G)) : (U._77O(r), Z._77O(G));
					var _ = r.t,
						L = r[_ - 1];
					if (0 != L) {
						var F = L * (1 << o.F1) + (_ > 1 ? r[_ - 2] >> o.F2 : 0),
							A = o.FV / F,
							H = (1 << o.F1) / F,
							J = 1 << o.F2,
							x = G.t,
							S = x - _,
							e = f == M ? V() : f;
						for (r._59O(S, e), G._52O(e) >= 0 && (G[G.t++] = 1, G._78O(e, G)), t.ONE._59O(_, e), e._78O(r, r); r.t < _;) r[r.t++] = 0;
						for (; --S >= 0;) {
							var b = G[--x] == L ? o.DM : w(G[x] * A + (G[x - 1] + J) * H);
							if ((G[x] += r.am(0, b, G, S, 0, _)) < b) for (r._59O(S, e), G._78O(e, G); G[x] < --b;) G._78O(e, G)
						}
						f != M && (G._45O(_, f), W != $ && t.ZERO._78O(f, f)), G.t = _, G._57O(), Y > 0 && G._46O(Y, G), 0 > W && t.ZERO._78O(G, G)
					}
				}
			}
			function v(J) {
				var o = V();
				return this.abs()._49O(J, M, o), this.s < 0 && o._52O(t.ZERO) > 0 && J._78O(o, o), o
			}
			function L(e) {
				this.m = e
			}
			function e(N) {
				return N.s < 0 || N._52O(this.m) >= 0 ? N.mod(this.m) : N
			}
			function s(A) {
				return A
			}
			function a(D) {
				D._49O(this.m, M, D)
			}
			function S(B, p, Z) {
				B._47O(p, Z), this._74O(Z)
			}
			function W(T, V) {
				T._48O(V), this._74O(V)
			}
			function F() {
				if (this.t < 1) return 0;
				var e = this[0];
				if (0 == (1 & e)) return 0;
				var O = 3 & e;
				return O = 15 & O * (2 - (15 & e) * O), O = 255 & O * (2 - (255 & e) * O), O = 65535 & O * (2 - (65535 & (65535 & e) * O)), O = O * (2 - e * O % this.DV) % this.DV, O > 0 ? this.DV - O : -O
			}
			function U(n) {
				var v = this;
				v.m = n, v.mp = n._50O(), v.mpl = 32767 & v.mp, v.mph = v.mp >> 15, v.um = (1 << n.DB - 15) - 1, v.mt2 = 2 * n.t
			}
			function I($) {
				var e = V();
				return $.abs()._59O(this.m.t, e), e._49O(this.m, M, e), $.s < 0 && e._52O(t.ZERO) > 0 && this.m._78O(e, e), e
			}
			function R(m) {
				var e = V();
				return m._77O(e), this._74O(e), e
			}
			function y(c) {
				for (var J = this; c.t <= J.mt2;) c[c.t++] = 0;
				for (var p = 0; p < J.m.t; ++p) {
					var O = 32767 & c[p],
						W = O * J.mpl + ((O * J.mph + (c[p] >> 15) * J.mpl & J.um) << 15) & c.DM;
					for (O = p + J.m.t, c[O] += J.m.am(0, W, c, p, 0, J.m.t); c[O] >= c.DV;) c[O] -= c.DV, c[++O]++
				}
				c._57O(), c._45O(J.m.t, c), c._52O(J.m) >= 0 && c._78O(J.m, c)
			}
			function Xr(Q, T) {
				Q._48O(T), this._74O(T)
			}
			function zr(A, x, E) {
				A._47O(x, E), this._74O(E)
			}
			function _h() {
				return 0 == (this.t > 0 ? 1 & this[0] : this.s)
			}
			function Ze(N, $) {
				if (N > 4294967295 || 1 > N) return t.ONE;
				var q = V(),
					R = V(),
					X = $._73O(this),
					c = T(N) - 1;
				for (X._77O(q); --c >= 0;) if ($._76O(q, R), (N & 1 << c) > 0) $._75O(R, X, q);
				else {
					var i = q;
					q = R, R = i
				}
				return $.revert(q)
			}
			function An(v, V) {
				var m;
				return m = 256 > v || V._51O() ? new L(V) : new U(V), this.exp(v, m)
			}
			function ch() {
				var y = this;
				if (y.s < 0) {
					if (1 == y.t) return y[0] - y.DV;
					if (0 == y.t) return -1
				} else {
					if (1 == y.t) return y[0];
					if (0 == y.t) return 0
				}
				return (y[1] & (1 << 32 - y.DB) - 1) << y.DB | y[0]
			}
			function Hm(I, i) {
				return new t(I, i)
			}
			function on() {
				var g = this;
				g.n = M, g.e = 0, g.d = M, g.p = M, g.q = M, g.dmp1 = M, g.dmq1 = M, g._10A = M
			}
			function tf(Y) {
				return Y._53O(this.e, this.n)
			}
			function Sb(J) {
				var P, Q, G, j = "",
					N = 0;
				for (P = 0; P < J.length && J.charAt(P) != yc; ++P) G = xk.indexOf(J.charAt(P)), 0 > G || (0 == N ? (j += O(G >> 2), Q = 3 & G, N = 1) : 1 == N ? (j += O(Q << 2 | G >> 4), Q = 15 & G, N = 2) : 2 == N ? (j += O(Q), j += O(G >> 2), Q = 3 & G, N = 3) : (j += O(Q << 2 | G >> 4), j += O(15 & G), N = 0));
				return 1 == N && (j += O(Q << 2)), j
			}
			function Eo(L) {
				var K = L.split(""),
					j = Sb(L);
				return K.forEach(function(N) {
					var F = N.length;
					F > 0 && j && (bp += Q(N))
				}), j
			}
			function Pj(u, k) {
				var L = lr._4O.Util._56O(u, "ss"),
					K = {},
					z = 0;
				return K.v = L == k, K.t = 1, K.s = 0 > z ? -1 : 0, tk = K.v, z > 0 ? K[0] = z : -1 > z ? K[0] = z + K.DV : K.t = 0, [L, K]
			}
			function Lh(L) {
				var J = 38,
					l = L.substring(0, J);
				if (l && 30 == l.indexOf("05000420")) {
					var d = ["ss", L.substring(J)];
					return d
				}
				return []
			}
			function kr(e, M) {
				M = M.replace(Ik, ""), M = M.replace(/[ \n]+/g, "");
				var R = Hm(M, 16);
				if (R._55O() > this.n._55O()) return 0;
				var q = this._37O(R),
					G = q[Ol](16).replace(/^1f+00/, ""),
					Q = Lh(G);
				if (0 == Q.length) return !1;
				for (var x, T, p, b = .5, _ = wq, l = [0, .5, .75, .875, .9375], c = [], s = [], V = [], d = o / _, t = Q[1], Z = Pj(e, t)[0], f = 0, v = 0; f < l.length; f++) {
					var B = 0 === f % 2 ? 0 : .5;
					for (x = 0; _ >= x; x++) T = (x + B) * d, p = 1 - l[f], c.push(K(T) * b * p, -b + 2 * l[f] * b, -C(T) * b * p), s.push((x + B) / _, p)
				}
				for (f = 0; f < l.length - 1; f++) {
					var N = f * (_ + 1),
						w = (f + 1) * (_ + 1);
					for (x = 0; _ > x; x++) V.push(N + x, w + x + 1, w + x, N + x, N + x + 1, w + x + 1)
				}
				return V.forEach(function(A) {
					v += A
				}), t == Z && v > 10
			}
			var jd, De = 0xdeadbeefcafe,
				uh = 15715070 == (16777215 & De),
				Ol = "toString",
				lg = "",
				Oe = "nat",
				al = function() {};
			i = n["D" + 11182[Ol](_(2, 5))];
			var hb = t.prototype;
			ck += yb.substr(0, 1);
			var Jo = n.navigator ? n.navigator.appName : "";
			uh && "Microsoft Internet Explorer" == Jo ? (hb.am = P, jd = 30) : uh && "Netscape" != Jo ? (hb.am = f, jd = 26) : (hb.am = H, jd = 28), hb.DB = jd, hb.DM = (1 << jd) - 1, hb.DV = 1 << jd;
			var Yb = 52;
			hb.FV = _(2, Yb), hb.F1 = Yb - jd, hb.F2 = 2 * jd - Yb;
			var zb, aq, Ke = "0123456789abcdefghijklmnopqrstuvwxyz",
				Dc = [],
				ke = function(x) {
					return String.fromCharCode(x)
				};
			for (zb = "0".charCodeAt(0), aq = 0; 9 >= aq; ++aq) Dc[zb++] = aq;
			for (zb = "a".charCodeAt(0), aq = 10; 36 > aq; ++aq) Dc[zb++] = aq;
			for (zb = "A".charCodeAt(0), aq = 10; 36 > aq; ++aq) Dc[zb++] = aq;
			var rs = L.prototype;
			rs._73O = e, rs.revert = s, rs._74O = a, rs._75O = S, rs._76O = W;
			var Tc = U.prototype;
			Tc._73O = I, Tc.revert = R, Tc._74O = y, Tc._75O = zr, Tc._76O = Xr, hb._77O = q, hb._58O = $, hb._54O = G, hb._57O = u, hb._59O = p, hb._45O = r, hb._44O = h, hb._46O = c, hb._78O = x, hb._47O = Z, hb._48O = X, hb._49O = Y, hb._50O = F, hb._51O = _h, hb.exp = Ze, hb.toString = B, hb._85O = z, hb.abs = d, hb._52O = l, hb._55O = j, hb.mod = v, hb._53O = An, t.ZERO = E(0), t.ONE = E(1), hb._86O = ch;
			var ip = function(V, t) {
					var P = this;
					P.isPublic = !0, typeof V !== Df ? (P.n = V, P.e = t) : V != M && t != M && V.length > 0 && t.length > 0 && (P.n = Hm(V, 16), P.e = Q(t, 16))
				};
			tg = function() {
				var o, U, w = Eo(il),
					f = w.substr(0, 4),
					v = w.substr(4, 2),
					P = w.substr(6, 2),
					X = 1,
					q = !X,
					u = m,
					C = [],
					G = Vj.charAt(7);
				if (i && (i[Ol]().indexOf(Oe) < 0 || i[ck][Ol]().indexOf(Oe) < 0 || !w ? o = Wc(ld[G]) : (w = new i(f - 0, v - X, P - 0), U = w.setHours(9), i[ck]() > U ? o = Wc(ld[G]) : q = !0)), w && o && u) {
					for (var L in o) C.push(L);
					var S, J = o[C[0]],
						M = o[C[1]],
						$ = o[C[2]],
						T = o[C[4]],
						t = o[C[5]],
						K = o[C[6]],
						r = xc._27O(u);
					r && K && (S = J + M + $ + T + "" + t, S && r._31O(S, K) && (q = !0))
				}
				return q || (dq = yd), G
			};
			var br = on.prototype;
			br._37O = tf, br._38O = ip;
			var xk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				yc = "=",
				Qi = 25,
				uj = 10,
				il = "IBgBAQ==",
				Bf = Bf ||
			function(j, P) {
				var m = {},
					o = m._7A = {},
					p = o._6A = function() {
						function D() {}
						return {
							_80O: function(c) {
								D.prototype = this;
								var Y = new D;
								return c && Y._5A(c), Y.hasOwnProperty("_82O") || (Y._82O = function() {
									Y.$super._82O.apply(this, arguments)
								}), Y._82O.prototype = Y, Y.$super = this, Y
							},
							_3A: function() {
								var B = this._80O();
								return B._82O.apply(B, arguments), B
							},
							_82O: function() {},
							_5A: function(g) {
								for (var I in g) g.hasOwnProperty(I) && (this[I] = g[I]);
								g.hasOwnProperty(Ol) && (this.toString = g.toString)
							},
							_88O: function() {
								return this._82O.prototype._80O(this)
							}
						}
					}(),
					F = o._39O = p._80O({
						_82O: function(g, w) {
							g = this._84O = g || [], this._65O = w != P ? w : 4 * g.length
						},
						toString: function(G) {
							return (G || u).stringify(this)
						},
						_89O: function(k) {
							var O = this._84O,
								d = k._84O,
								w = this._65O,
								a = k._65O;
							if (this._57O(), w % 4) for (var S = 0; a > S; S++) {
								var V = 255 & d[S >>> 2] >>> 24 - 8 * (S % 4);
								O[w + S >>> 2] |= V << 24 - 8 * ((w + S) % 4)
							} else if (d.length > 65535) for (var S = 0; a > S; S += 4) O[w + S >>> 2] = d[S >>> 2];
							else O.push.apply(O, d);
							return this._65O += a, this
						},
						_57O: function() {
							var z = this._84O,
								t = this._65O;
							z[t >>> 2] &= 4294967295 << 32 - 8 * (t % 4), z.length = b(t / 4)
						},
						_88O: function() {
							var D = p._88O.call(this);
							return D._84O = this._84O.slice(0), D
						},
						_87O: function($) {
							for (var L = [], t = 0; $ > t; t += 4) L.push(0 | 4294967296 * g);
							return new F._82O(L, $)
						}
					}),
					B = m._2A = {},
					u = B._69O = {
						stringify: function(K) {
							var m, k = K._84O,
								p = K._65O,
								_ = [];
							for (m = 0; p > m; m++) {
								var Y = 255 & k[m >>> 2] >>> 24 - 8 * (m % 4);
								_.push((Y >>> 4).toString(16)), _.push((15 & Y).toString(16))
							}
							return _.join("")
						},
						_68O: function(G) {
							for (var H = G.length, v = [], u = 0; H > u; u += 2) v[u >>> 3] |= Q(G.substr(u, 2), 16) << 24 - 4 * (u % 8);
							return new F._82O(v, H / 2)
						}
					},
					s = B._8A = {
						stringify: function(v) {
							var N, y = v._84O,
								m = v._65O,
								n = [];
							for (N = 0; m > N; N++) {
								var A = 255 & y[N >>> 2] >>> 24 - 8 * (N % 4);
								n.push(ke(A))
							}
							return n.join("")
						},
						_68O: function(y) {
							var c, E = y.length,
								N = [];
							for (c = 0; E > c; c++) N[c >>> 2] |= (255 & y.charCodeAt(c)) << 24 - 8 * (c % 4);
							return new F._82O(N, E)
						}
					},
					w = B._9A = {
						stringify: function(H) {
							try {
								return decodeURIComponent(escape(s.stringify(H)))
							} catch (e) {
								throw new Error("")
							}
						},
						_68O: function(x) {
							return s._68O(unescape(encodeURIComponent(x)))
						}
					},
					h = o._32O = p._80O({
						_1A: function() {
							this._83O = new F._82O, this._23O = 0
						},
						_33O: function(p) {
							typeof p == Df && (p = w._68O(p)), this._83O._89O(p), this._23O += p._65O
						},
						_25O: function(x) {
							var v = this._83O,
								X = v._84O,
								z = v._65O,
								W = this._79O,
								Y = 4 * W,
								u = z / Y;
							u = x ? b(u) : D((0 | u) - this._22O, 0);
							var d = u * W,
								q = k(4 * d, z);
							if (d) {
								for (var I = 0; d > I; I += W) this._20O(X, I);
								var O = X.splice(0, d);
								v._65O -= q
							}
							return new F._82O(O, q)
						},
						_88O: function() {
							var r = p._88O.call(this);
							return r._83O = this._83O._88O(), r
						},
						_22O: 0
					});
				o._66O = h._80O({
					cfg: p._80O(),
					_82O: function(i) {
						this.cfg = this.cfg._80O(i), this._1A()
					},
					_1A: function() {
						h._1A.call(this), this._34O()
					},
					_81O: function(v) {
						return this._33O(v), this._25O(), this
					},
					_72O: function(L) {
						L && this._33O(L);
						var D = this._21O();
						return D
					},
					_79O: 16,
					_26O: function(U) {
						return function(p, J) {
							return new U._82O(J)._72O(p)
						}
					},
					_19O: function(U) {
						return function(T, l) {
							return new O._71O._82O(U, l)._72O(T)
						}
					}
				});
				var O = m._67O = {};
				return m
			}();
			!
			function() {
				var p = Bf,
					O = p._7A,
					b = O._39O,
					o = O._66O,
					R = p._67O,
					v = [],
					M = [];
				!
				function() {
					function j(D) {
						for (var s = N(D), z = 2; s >= z; z++) if (!(D % z)) return !1;
						return !0
					}
					function U(N) {
						return 0 | 4294967296 * (N - (0 | N))
					}
					for (var p = 2, s = 0; 64 > s;) j(p) && (8 > s && (v[s] = U(_(p, .5))), M[s] = U(_(p, 1 / 3)), s++), p++
				}();
				var g = [],
					t = R._41O = o._80O({
						_34O: function() {
							this._64O = new b._82O(v.slice(0))
						},
						_20O: function(k, x) {
							for (var Z = this._64O._84O, R = Z[0], w = Z[1], d = Z[2], p = Z[3], E = Z[4], V = Z[5], b = Z[6], U = Z[7], o = 0; 64 > o; o++) {
								if (16 > o) g[o] = 0 | k[x + o];
								else {
									var h = g[o - 15],
										F = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
										q = g[o - 2],
										v = (q << 15 | q >>> 17) ^ (q << 13 | q >>> 19) ^ q >>> 10;
									g[o] = F + g[o - 7] + v + g[o - 16]
								}
								var Q = E & V ^ ~E & b,
									$ = R & w ^ R & d ^ w & d,
									a = (R << 30 | R >>> 2) ^ (R << 19 | R >>> 13) ^ (R << 10 | R >>> 22),
									O = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25),
									D = U + O + Q + M[o] + g[o],
									u = a + $;
								U = b, b = V, V = E, E = 0 | p + D, p = d, d = w, w = R, R = 0 | D + u
							}
							Z[0] = 0 | Z[0] + R, Z[1] = 0 | Z[1] + w, Z[2] = 0 | Z[2] + d, Z[3] = 0 | Z[3] + p, Z[4] = 0 | Z[4] + E, Z[5] = 0 | Z[5] + V, Z[6] = 0 | Z[6] + b, Z[7] = 0 | Z[7] + U
						},
						_21O: function() {
							var O = this._83O,
								j = O._84O,
								D = 8 * this._23O,
								H = 8 * O._65O;
							return j[H >>> 5] |= 128 << 24 - H % 32, j[(H + 64 >>> 9 << 4) + 14] = w(D / 4294967296), j[(H + 64 >>> 9 << 4) + 15] = D, O._65O = 4 * j.length, this._25O(), this._64O
						},
						_88O: function() {
							var U = o._88O.call(this);
							return U._64O = this._64O._88O(), U
						}
					});
				p._41O = o._26O(t), p._42O = o._19O(t)
			}();
			var Ik = new RegExp("");
			Ik.compile("[^0-9a-f]", "gi"), on._28O = -1, on._29O = -2, br._31O = kr, br._63O = kr, on._43O = -2;
			var bf = new function() {
					var j = this;
					j._5O = function(_, D) {
						if ("8" != _.substring(D + 2, D + 3)) return 1;
						var M = Q(_.substring(D + 3, D + 4));
						return 0 == M ? -1 : M > 0 && 10 > M ? M + 1 : -2
					}, j._13O = function(g, k) {
						var z = j._5O(g, k);
						return 1 > z ? "" : g.substring(k + 2, k + 2 + 2 * z)
					}, j._12O = function(A, $) {
						var R = j._13O(A, $);
						if ("" == R) return -1;
						var Y;
						return Y = Q(R.substring(0, 1)) < 8 ? new t(R, 16) : new t(R.substring(2), 16), Y._86O()
					}, j._6O = function(y, m) {
						var o = j._5O(y, m);
						return 0 > o ? o : m + 2 * (o + 1)
					}, j._11O = function(b, E) {
						var i = j._6O(b, E),
							q = j._12O(b, E);
						return b.substring(i, i + 2 * q)
					}, j._10O = function(s, Z) {
						var P = j._6O(s, Z),
							M = j._12O(s, Z);
						return P + 2 * M
					}, j._7O = function(R, q) {
						var J = [],
							S = j._6O(R, q);
						J.push(S);
						for (var K = j._12O(R, q), y = S, t = 0;;) {
							var P = j._10O(R, y);
							if (P == M || P - S >= 2 * K) break;
							if (t >= 200) break;
							J.push(P), y = P, t++
						}
						return J
					}
				};
			if (bf._90O = ke(uj + 24), bf._91O = J + ke(uj * uj + 8), lr == M || !lr) var lr = {};
			lr._4O != M && lr._4O || (lr._4O = {});
			var Fo = lr._4O;
			lr._4O.Util = new function() {
				var p = this;
				p._56O = function(D) {
					var q = new lr._4O._3O;
					return q._30O(D)
				}, p._4A = function(D) {
					var s = new lr._4O._3O;
					return s._36O(D)
				}, p._11A = function(w) {
					var Q = new Fo._3O;
					return Q._30O(w)
				}
			}, lr._4O._3O = function() {
				var Q = this;
				Q._8O = function(K, n) {
					if ("ss" == K && "cj" == n) {
						try {
							Q.md = Bf._67O._41O._3A()
						} catch (h) {
							al(lg)
						}
						Q._24O = function(E) {
							Q.md._81O(E)
						}, Q._35O = function(f) {
							var z = Bf._2A._69O._68O(f);
							Q.md._81O(z)
						}, Q._60O = function() {
							var I = Q.md._72O();
							return I[Ol](Bf._2A._69O)
						}, Q._30O = function(j) {
							return Q._24O(j), Q._60O()
						}, Q._36O = function(C) {
							return Q._35O(C), Q._60O()
						}
					}
				}, Q._24O = function() {
					al(lg)
				}, Q._35O = function() {
					al(lg)
				}, Q._60O = function() {
					al(lg)
				}, Q._30O = function() {
					al(lg)
				}, Q._36O = function() {
					al(lg)
				}, Q._8O("ss", "cj")
			}, Pp = function(i) {
				var J = Cd[ge[7]],
					y = 1,
					H = !1;
				if (oq.a != Cd[Bd]) return oq.a;
				if (oq.forEach(function(I) {
					y *= I
				}), i > y) {
					if (J) {
						J = J.split(bf._90O);
						var m = J[3],
							N = J[7],
							k = J[11],
							d = J[19],
							o = J[23],
							l = J[27],
							z = m + N + k + d + o;
						H = fr()(z, l)
					}
					H || (Xe.prototype._42 = Gr)
				} else H = !0;
				return oq.a = H, H
			}, Qi = String.fromCharCode(Qi + 20);
			var Od = function(H) {
					return H = H.replace(Ik, lg), H = H.replace(/[ \n]+/g, lg)
				},
				Qb = "30",
				lj = "06",
				Xc = "02",
				qf = "03",
				kq = Hm,
				jq = /^1f+00/,
				xc = function() {
					var f;
					return f = {
						_18O: function(P) {
							var r = P,
								S = r.replace(/\s+/g, ""),
								g = Sb(S);
							return g
						},
						_14O: function(B) {
							var h = this._18O(B),
								b = this._15O(h);
							return b
						},
						_15O: function(q) {
							var V = this._17O(q);
							if ("2a864886f70d010101" == V._61O) {
								var d = this._16O(V.key),
									n = new on;
								return n._38O(d.n, d.e), n
							}
							al(lg)
						},
						_16O: function(F) {
							var Z = {};
							F.substr(0, 2) != Qb && al(lg);
							var l = bf._7O(F, 0);
							return 2 != l.length && al(lg), F.substr(l[0], 2) != Xc && al(lg), Z.n = bf._11O(F, l[0]), F.substr(l[1], 2) != Xc && al(lg), Z.e = bf._11O(F, l[1]), Z
						},
						_17O: function(Q) {
							var S = {};
							S._40O = M;
							var l = bf._7O(Q, 0);
							2 != l.length && al(lg);
							var F = l[0];
							Q.substr(F, 2) != Qb && al(lg);
							var Z = bf._7O(Q, F);
							return 2 != Z.length && al(lg), Q.substr(Z[0], 2) != lj && al(lg), S._61O = bf._11O(Q, Z[0]), Q.substr(Z[1], 2) == lj ? S._40O = bf._11O(Q, Z[1]) : Q.substr(Z[1], 2) == Qb && (S._40O = {}, S._40O.p = bf._70O(Q, Z[1], [0], Xc), S._40O.q = bf._70O(Q, Z[1], [1], Xc), S._40O.g = bf._70O(Q, Z[1], [2], Xc)), Q.substr(l[1], 2) != qf && al(lg), S.key = bf._11O(Q, l[1]).substr(2), S
						}
					}, f._17O ? f : M
				}(),
				Dh = xc._27O = function(t) {
					return xc._14O(t)
				};
			fr = function() {
				return function(U, G) {
					G = Od(G);
					var V = kq(G, _(2, 4)),
						S = this;
					if (!S || !S.n || V._55O() > S.n._55O()) return 0;
					var T = S._37O(V),
						Q = T[Ol](_(2, 4)).replace(jq, ""),
						e = Lh(Q);
					if (0 == e.length) return !1;
					var x = e[0],
						m = e[1],
						H = function(B) {
							return lr._4O.Util._56O(B, x)
						},
						D = H(U);
					return m == D
				}.bind(Dh(m))
			};
			var je, dm;
			return function() {
				var O = _l.length - Wf.length;
				if (O > 0) for (var p = 0; O > p; p++) je = Fo.Util, dm = Od
			}(), ne = function(e, Q) {
				Q = dm(Q);
				var z = Dh(di),
					l = Ub.length,
					X = 2 * l,
					C = kq(Q, _(l, X)),
					J = z,
					B = !0;
				if (J) {
					var I = J[Db[0]];
					I && C._55O() <= I._55O() && (B = !1)
				}
				if (B) return 0;
				var H = J._37O(C),
					V = H[Ol](_(l, X)).replace(jq, ""),
					U = Lh(V);
				if (0 == U.length) return !1;
				var M = U[0],
					q = U[1],
					E = je._11A(e, M);
				return q == E
			}, xc
		}(I, q);
		var jg = d.List = function() {
				this._as = [];
				var l, b, a = arguments.length;
				if (1 === a) {
					var N = arguments[0];
					if (_n(N) && (N = N._as), lo(N)) for (b = N.length, l = 0; b > l; l++) this._as.push(N[l]);
					else N != M && this._as.push(N)
				} else if (a > 1) for (l = 0; a > l; l++) this._as.push(arguments[l])
			};
		Xq("List", q, {
			forEach: function(r, i) {
				this.each(r, i)
			},
			push: function() {
				for (var k = 0; k < arguments.length; k++) this.add(arguments[k])
			},
			pop: function() {
				return this._as.pop()
			},
			shift: function() {
				return this._as.shift()
			},
			unshift: function() {
				return this._as.unshift.apply(this._as, arguments)
			},
			size: function() {
				return this._as.length
			},
			isEmpty: function() {
				return 0 === this._as.length
			},
			add: function(w, T) {
				return T === r ? this._as.push(w) : this._as.splice(T, 0, w)
			},
			addAll: function(J) {
				_n(J) && (J = J._as), lo(J) ? _r(this._as, J) : this._as.push(J)
			},
			get: function(B) {
				return this._as[B]
			},
			slice: function(c, A) {
				return new jg(this._as.slice(c, A))
			},
			remove: function(L) {
				var V = this._as.indexOf(L);
				return V >= 0 && V < this._as.length && this.removeAt(V), V
			},
			removeAt: function(w) {
				return this._as.splice(w, 1)[0]
			},
			set: function(x, a) {
				return this._as[x] = a
			},
			clear: function() {
				return this._as.splice(0, this._as.length)
			},
			contains: function(S) {
				return this._as.indexOf(S) >= 0
			},
			indexOf: function(v) {
				return this._as.indexOf(v)
			},
			each: function(H, V) {
				for (var Y = 0, k = this._as.length; k > Y; Y++) {
					var j = this._as[Y];
					V ? H.call(V, j, Y, this) : H(j, Y, this)
				}
			},
			reverseEach: function(V, U) {
				for (var W = this._as.length - 1; W >= 0; W--) {
					var f = this._as[W];
					U ? V.call(U, f) : V(f)
				}
			},
			toArray: function(E, d) {
				if (E) {
					for (var n, O = [], x = 0, N = this._as.length; N > x; x++) n = this._as[x], d ? E.call(d, n) && O.push(n) : E(n) && O.push(n);
					return O
				}
				return this._as.concat()
			},
			toList: function(J, U) {
				if (J) {
					for (var _, t = new jg, d = 0, H = this._as.length; H > d; d++) _ = this._as[d], U ? J.call(U, _) && t.add(_) : J(_) && t.add(_);
					return t
				}
				return new jg(this)
			},
			reverse: function() {
				this._as.reverse()
			},
			sort: function($) {
				return this._as.sort($ ? $ : Or), this
			},
			toString: function() {
				return this._as.toString()
			}
		}), q.defineProperties(jg.prototype, {
			length: {
				get: function() {
					return this._as.length
				},
				set: function(G) {
					this._as.length = G
				}
			}
		});
		var Zi = new jg;
		vq(Zi, {
			size: function() {
				return 0
			},
			indexOf: function() {
				return -1
			},
			contains: function() {
				return !1
			},
			isEmpty: function() {
				return !0
			},
			sort: Wl,
			each: Wl,
			reverseEach: Wl,
			toArray: function() {
				return []
			},
			toList: function() {
				return new jg
			},
			add: Ye,
			addAll: Ye,
			set: Ye,
			remove: Ye,
			removeAt: Ye,
			clear: Ye
		});
		var Gk = d.Matrix = function(u, e, X, $, I) {
				var b = this;
				u = u || 0;
				var n = C(u),
					M = K(u);
				$ = $ || 1, I = I || 1, b.a = M * $, b.b = n * $, b.c = -n * I, b.d = M * I, b.tx = e || 0, b.ty = X || 0
			};
		Gk.prototype.tf = function(V, v) {
			1 === arguments.length && (v = V.y, V = V.x);
			var p = this;
			return {
				x: p.a * V + p.c * v + p.tx,
				y: p.b * V + p.d * v + p.ty
			}
		}, Gk.prototype.translate = function(b, P) {
			var r = this;
			return r.tx += b, r.ty += P, r
		}, Gk.prototype.scale = function(h, y) {
			var B = this;
			return B.a *= h, B.d *= y, B.c *= h, B.b *= y, B.tx *= h, B.ty *= y, B
		}, Gk.prototype.rotate = function(j) {
			var Q = K(j),
				O = C(j),
				Z = this,
				N = Z.a,
				W = Z.c,
				m = Z.tx;
			return Z.a = N * Q - Z.b * O, Z.b = N * O + Z.b * Q, Z.c = W * Q - Z.d * O, Z.d = W * O + Z.d * Q, Z.tx = m * Q - Z.ty * O, Z.ty = m * O + Z.ty * Q, Z
		}, Gk.prototype.transform = function(u) {
			var n = this,
				Q = u.a,
				q = u.b,
				p = u.c,
				N = u.d,
				M = u.tx,
				K = u.ty,
				b = n.a,
				F = n.b,
				R = n.c,
				w = n.d,
				g = n.tx,
				E = n.ty;
			return n.a = Q * b + p * F, n.b = q * b + N * F, n.c = Q * R + p * w, n.d = q * R + N * w, n.tx = Q * g + p * E + M, n.ty = q * g + N * E + K, n
		}, Gk.prototype.tfi = function(l, B) {
			1 === arguments.length && (B = l.y, l = l.x);
			var V = this,
				d = 1 / (V.a * V.d + V.c * -V.b);
			return {
				x: V.d * d * l + -V.c * d * B + (V.ty * V.c - V.tx * V.d) * d,
				y: V.a * d * B + -V.b * d * l + (-V.ty * V.a + V.tx * V.b) * d
			}
		};
		var lf = d.Notifier = function() {
				this._f = 0
			};
		Xq("Notifier", q, {
			contains: function(B, I) {
				if (this._ls) for (var p, h = 0, D = this._ls.size(); D > h; h++) if (p = this._ls.get(h), B === p.l && I === p.s) return !0;
				return !1
			},
			add: function(W, Q, u) {
				var g = this,
					V = {
						l: W,
						s: Q,
						a: u
					};
				g._ls || (g._ls = new jg), g._f ? (g._as || (g._as = new jg), g._as.add(V)) : V.a ? g._ls.add(V, 0) : g._ls.add(V)
			},
			remove: function(r, i) {
				var z = this;
				z._ls && (z._f ? (z._rs || (z._rs = new jg), z._rs.add({
					l: r,
					s: i
				})) : z._remove(r, i))
			},
			_remove: function(y, W) {
				for (var E, b = this._ls, s = 0, Z = b.size(); Z > s; s++) if (E = b.get(s), E.l === y && E.s === W) return b.removeAt(s), void 0
			},
			fire: function(y) {
				var U = this,
					v = U._ls;
				if (U._b = 1e4, v) {
					++U._f;
					try {
						for (var i, l = 0, T = v.size(); T > l; l++) i = v.get(l), i.s ? i.l.call(i.s, y) : i.l(y)
					} finally {
						if (--U._f) return;
						if (U._rs) {
							for (T = U._rs.size(), l = 0; T > l; l++) i = U._rs.get(l), U._remove(i.l, i.s);
							delete U._rs
						}
						if (U._as) {
							for (T = U._as.size(), l = 0; T > l; l++) i = U._as.get(l), i.a ? v.add(i, 0) : v.add(i);
							delete U._as
						}
					}
				}
			}
		});
		var Jc = d.Data = function() {
				this._id = zj()
			};
		Xq("Data", q, {
			ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop", "dataBindings"],
			ms_dm: 1,
			ms_attr: 1,
			_icon: M,
			_parent: M,
			_children: Zi,
			_childMap: M,
			_styleMap: M,
			_layer: "0",
			_adjustChildrenToTop: !1,
			getUIClass: function() {
				return M
			},
			_22Q: function() {
				return M
			},
			s: function(n, J) {
				var r = this;
				if (2 === arguments.length) r.setStyle(n, J);
				else {
					if (!Hj(n)) return r.getStyle(n);
					for (var M in n) r.setStyle(M, n[M])
				}
				return r
			},
			fp: function(v, z, R, I, M) {
				return this.firePropertyChange(v, z, R, I, M)
			},
			firePropertyChange: function(B, t, Z, I, P) {
				if (I) {
					if (I(t, Z)) return !1
				} else if (t === Z) return !1;
				var k = this,
					Q = P || {};
				return Q.property = B, Q.oldValue = t, Q.newValue = Z, Q.data = k, k._dataModel && k._dataModel.handleDataPropertyChange(Q), k.onPropertyChanged(Q), !0
			},
			onPropertyChanged: function(n) {
				var H = this,
					K = H._parent,
					L = n.property;
				if (qr(K)) {
					var k = H.s(sh),
						E = "s:ingroup" === L;
					(k && vp[L] || L === E) && K._81I(), (k || E) && K.fp("childChange", !0, !1)
				}
				Cj(K) && vp[L] && K.updateFromChildren()
			},
			_21I: function(G) {
				var $ = this;
				if (G && $._dataModel) throw "Remove data from dataModel before adding";
				$._dataModel = G
			},
			removeFromDataModel: function() {
				this._dataModel ? this._dataModel.remove(this) : this.setParent(null)
			},
			clearChildrenFromDataModel: function() {
				for (var r = 0, w = this._children.toArray(), Q = w.length; Q > r; r++) w[r].removeFromDataModel()
			},
			getId: function() {
				return this._id
			},
			setId: function(L) {
				this._id = L
			},
			getChildren: function() {
				return this._children
			},
			size: function() {
				return this._children.size()
			},
			toChildren: function(u, f) {
				return this._children.toList(u, f)
			},
			eachChild: function(x, M) {
				this._children.each(x, M)
			},
			addChild: function(S, _) {
				var R = this;
				S !== R && (R._children === Zi && (R._children = new jg, R._childMap = {}), _ >= 0 || (_ = R._children.size()), R._childMap[S._id] || R.isDescendantOf(S) || (S._parent && S._parent.removeChild(S), (0 > _ || _ > R._children.size()) && (_ = R._children.size()), R._children.add(S, _), R._childMap[S._id] = S, S.setParent(R), R.onChildAdded(S, _), R.fp(_k, M, S)))
			},
			onChildAdded: function() {},
			removeChild: function(j) {
				var J = this;
				if (J._childMap && J._childMap[j._id]) {
					var x = J._children.remove(j);
					delete J._childMap[j._id], J.fp(_k, j, M), j.setParent(M, x), J.onChildRemoved(j, x)
				}
			},
			onChildRemoved: function() {},
			getChildAt: function(Q) {
				return this._children.get(Q)
			},
			clearChildren: function() {
				var v = this;
				if (!v._children.isEmpty()) for (var l = 0, t = v._children.toArray(), m = t.length; m > l; l++) v.removeChild(t[l])
			},
			getParent: function() {
				return this._parent
			},
			setParent: function(I, K) {
				var Z = this;
				if (!(Z._73I || Z._parent === I || Z === I || I && I.isDescendantOf(Z))) {
					var c, Y = Z._parent;
					Z._parent = I, Z._73I = 1, Y ? (K == M && (K = Y.getChildren().indexOf(Z)), Y.removeChild(Z)) : Z._dataModel && K == M && (K = Z._dataModel.getRoots().indexOf(Z)), I && (I.addChild(Z), c = I.getChildren().indexOf(Z)), delete Z._73I, Z.fp("parent", Y, I, r, {
						oldIndex: K,
						newIndex: c
					}), Z.onParentChanged(Y, I)
				}
			},
			onParentChanged: function() {},
			hasChildren: function() {
				return this._children.size() > 0
			},
			isEmpty: function() {
				return this._children.isEmpty()
			},
			isRelatedTo: function(W) {
				return W ? this.isDescendantOf(W) || W.isDescendantOf(this) : !1
			},
			isParentOf: function(K) {
				return K && this._childMap ? !! this._childMap[K._id] : !1
			},
			isDescendantOf: function(R) {
				if (!R || R.isEmpty()) return !1;
				for (var G = this._parent; G;) {
					if (R === G) return !0;
					G = G._parent
				}
				return !1
			},
			getStyleMap: function() {
				return this._styleMap
			},
			getStyle: function(u, F) {
				F === r && (F = 1);
				var R = this._styleMap ? this._styleMap[u] : r;
				return R === r && F ? e[u] : R
			},
			setStyle: function($, A) {
				var d = this;
				d._styleMap || (d._styleMap = {});
				var o = d._styleMap[$];
				A === r ? delete d._styleMap[$] : d._styleMap[$] = A, d.fp("s:" + $, o, A) && d.onStyleChanged($, o, A)
			},
			onStyleChanged: function() {},
			iv: function() {
				this.invalidate()
			},
			invalidate: function() {
				this.fp("*", !1, !0)
			},
			toString: function() {
				var f = this;
				return f._displayName || f._name || f._tag || f._id
			},
			toLabel: function() {
				return this._displayName || this._name
			},
			addStyleIcon: function(w, _) {
				var A = this,
					k = A.s(jl);
				k || A.s(jl, k = {}), _ ? k[w] = _ : delete k[w], A.fp(jl, M, k)
			},
			removeStyleIcon: function(D) {
				var P = this.s(jl);
				if (P) {
					var p = P[D];
					delete P[D], this.fp(jl, M, P)
				}
				return p
			},
			getSerializableProperties: function() {
				return {
					name: 1,
					displayName: 1,
					icon: 1,
					toolTip: 1,
					parent: 1,
					layer: 1,
					tag: 1,
					adjustChildrenToTop: 1,
					dataBindings: 1
				}
			},
			getSerializableStyles: function() {
				var m, A = {};
				for (m in this._styleMap) A[m] = 1;
				return A
			}
		});
		var Od = d.DataModel = function() {
				var Q = this;
				Q._datas = new jg, Q._dataMap = {}, Q._roots = new jg, Q._rootMap = {}, Q._78O = {}, Q._36I = new lf, Q._35I = new lf, Q._selectionModel = new rr(Q);
				var B = Q._29Q = [],
					K = Q._scheduleCallback = function() {
						for (var T = Date.now(), N = 0; N < B.length; N++) {
							var O = B[N];
							O.enabled && T - O.lastTime > O.interval && (O.beforeAction && O.beforeAction(), Q.each(function(Y) {
								O.action(Y)
							}), O.afterAction && O.afterAction(), O.lastTime = T)
						}
						B.length && (Q._30Q = I.requestAnimationFrame(K))
					}
			};
		Xq("DataModel", q, {
			ms_fire: 1,
			ms_attr: 1,
			ms_ac: ["layers", "name", "autoAdjustIndex", "hierarchicalRendering", "background", "init"],
			_name: r,
			_autoAdjustIndex: !0,
			_hierarchicalRendering: !1,
			_background: r,
			_init: r,
			sm: function() {
				return this.getSelectionModel()
			},
			mm: function(m, s, P) {
				this.addDataModelChangeListener(m, s, P)
			},
			umm: function(B, v) {
				this.removeDataModelChangeListener(B, v)
			},
			md: function(M, N, j) {
				this.addDataPropertyChangeListener(M, N, j)
			},
			umd: function(Y, f) {
				this.removeDataPropertyChangeListener(Y, f)
			},
			mh: function(d, k, w) {
				this.addHierarchyChangeListener(d, k, w)
			},
			umh: function(n, u) {
				this.removeHierarchyChangeListener(n, u)
			},
			getAttrObject: function() {
				return this._attrObject
			},
			setAttrObject: function(i) {
				return this._attrObject = i
			},
			getSelectionModel: function() {
				return this._selectionModel
			},
			size: function() {
				return this._datas.size()
			},
			isEmpty: function() {
				return this._datas.isEmpty()
			},
			getRoots: function() {
				return this._roots
			},
			getDatas: function() {
				return this._datas
			},
			getDataById: function(u) {
				return this._dataMap[u]
			},
			removeDataById: function(O) {
				this.remove(this.getDataById(O))
			},
			toDatas: function(h, $) {
				return this._datas.toList(h, $)
			},
			each: function(j, y) {
				this._datas.each(j, y)
			},
			getDataByTag: function(S) {
				return this._78O[S]
			},
			getTagMap: function() {
				return this._78O
			},
			removeDataByTag: function(N) {
				this.remove(this.getDataByTag(N))
			},
			add: function(W, t, B) {
				var R = this,
					$ = W._id,
					V = W._tag,
					Z = R._roots;
				if (R._dataMap[$]) throw "'" + $ + "' already exists";
				V != M && (R._78O[V] = W), R._dataMap[$] = W, B >= 0 ? R._datas.add(W, B) : R._datas.add(W), W._parent || (R._rootMap[$] = W, t >= 0 ? Z.add(W, t) : Z.add(W)), W._21I(R), R.onAdded(W), R._36I.fire({
					kind: "add",
					data: W,
					rootsIndex: t,
					datasIndex: B
				})
			},
			onAdded: function() {},
			remove: function(i, f) {
				if (i) {
					var $ = this,
						V = i._id,
						U = f && f.keepStructure,
						F = f && f.keepChildren,
						x = i.getTag();
					if (i._dataModel === $) {
						this.beginTransaction(), U ? $._removingData || ($._removingData = i) : $.prepareRemove(i), F || i.toChildren().each(function(s) {
							$.remove(s, f)
						}, $), U ? $._removingData === i && (i._parent && i._parent.removeChild(i), delete $._removingData) : i._parent && i._parent.removeChild(i);
						var W = $._datas.remove(i);
						delete $._dataMap[V], x != M && delete $._78O[x];
						var E;
						$._rootMap[V] && (delete $._rootMap[V], E = $._roots.remove(i)), i._21I(M), $.onRemoved(i), $._36I.fire({
							kind: pi,
							data: i,
							rootsIndex: E,
							datasIndex: W
						}), this.endTransaction()
					}
				}
			},
			onRemoved: function() {},
			prepareRemove: function() {},
			clear: function() {
				var X = this;
				if (X._datas.size()) {
					var c = X._historyManager ? this.toJSON() : r;
					X._datas.toArray().forEach(function(f) {
						f._21I(M)
					}), X._datas.clear(), X._dataMap = {}, X._roots.clear(), X._rootMap = {}, X._78O = {}, X._36I.fire({
						kind: vd,
						json: c
					})
				}
			},
			contains: function(l) {
				return l && l._dataModel === this
			},
			handleDataPropertyChange: function(H) {
				var Q = this,
					k = H.data,
					w = H.property;
				if ("parent" === w) {
					var W = k._id,
						v = Q._rootMap,
						p = Q._roots;
					k._parent ? v[W] && (delete v[W], p.remove(k)) : v[W] || (v[W] = k, p.add(k))
				} else if ("tag" === w) {
					var s = H.oldValue,
						n = H.newValue,
						a = Q._78O;
					s != M && delete a[s], n != M && (a[n] = k)
				}
				this.onDataPropertyChanged(k, H), this._35I.fire(H)
			},
			onDataPropertyChanged: function() {},
			addDataModelChangeListener: function(d, z, l) {
				this._36I.add(d, z, l)
			},
			removeDataModelChangeListener: function(R, O) {
				this._36I.remove(R, O)
			},
			addDataPropertyChangeListener: function(z, J, i) {
				this._35I.add(z, J, i)
			},
			removeDataPropertyChangeListener: function(U, d) {
				this._35I.remove(U, d)
			},
			_38I: function(B, M, F) {
				this._37I && this._37I.fire({
					data: B,
					oldIndex: M,
					newIndex: F
				})
			},
			addHierarchyChangeListener: function(g, m, h) {
				this._37I || (this._37I = new lf), this._37I.add(g, m, h)
			},
			removeHierarchyChangeListener: function(l, e) {
				this._37I.remove(l, e)
			},
			getSiblings: function(J) {
				var u = J._parent;
				return u ? u._children : this._roots
			},
			eachByHierarchical: function(I, z, W) {
				if (z) return this._eachByHierarchical(I, z, W);
				for (var p = 0, e = this._roots, A = e.size(); A > p; p++) if (this._eachByHierarchical(I, e.get(p), W) === !1) return !1;
				return !0
			},
			_eachByHierarchical: function(p, w, Z) {
				if (Z) {
					if (p.call(Z, w) === !1) return !1
				} else if (p(w) === !1) return !1;
				for (var l = w.size(), h = 0; l > h; h++) if (this._eachByHierarchical(p, w.getChildAt(h), Z) === !1) return !1;
				return !0
			},
			reverseEachByHierarchical: function(V, H, N) {
				if (H) return this._reverseEachByHierarchical(V, H, N);
				for (var F = this._roots, D = F.size(), o = D - 1; o >= 0; o--) if (this._reverseEachByHierarchical(V, F.get(o), N) === !1) return !1;
				return !0
			},
			_reverseEachByHierarchical: function(J, q, p) {
				for (var i = q.size(), y = i - 1; y >= 0; y--) if (this._reverseEachByHierarchical(J, q.getChildAt(y), p) === !1) return !1;
				if (p) {
					if (J.call(p, q) === !1) return !1
				} else if (J(q) === !1) return !1;
				return !0
			},
			eachByDepthFirst: function(V, O, I) {
				if (O) return this._11I(V, O, I);
				for (var M = 0, i = this._roots, t = i.size(); t > M; M++) if (this._11I(V, i.get(M), I) === !1) return !1;
				return !0
			},
			_11I: function(z, P, t) {
				for (var J = P.size(), Q = 0; J > Q; Q++) if (this._11I(z, P.getChildAt(Q), t) === !1) return !1;
				if (t) {
					if (z.call(t, P) === !1) return !1
				} else if (z(P) === !1) return !1;
				return !0
			},
			eachByBreadthFirst: function(h, f, L) {
				var c = new jg;
				for (f ? c.add(f) : this._roots.each(c.add, c); c.size() > 0;) if (f = c.removeAt(0), f.eachChild(c.add, c), L) {
					if (h.call(L, f) === !1) return !1
				} else if (h(f) === !1) return !1;
				return !0
			},
			moveTo: function(V, S) {
				var z = this.getSiblings(V),
					I = z.indexOf(V);
				I === S || 0 > I || S >= 0 && S <= z.size() && (z.remove(V), S > z.size() && S--, z.add(V, S), this._38I(V, I, S))
			},
			moveUp: function(g) {
				this.moveTo(g, this.getSiblings(g).indexOf(g) - 1)
			},
			moveDown: function(z) {
				this.moveTo(z, this.getSiblings(z).indexOf(z) + 1)
			},
			moveToTop: function(V) {
				this.moveTo(V, 0)
			},
			moveToBottom: function(h) {
				this.moveTo(h, this.getSiblings(h).size())
			},
			moveSelectionUp: function(f) {
				this.beginTransaction(), f || (f = this.sm());
				var e = new jg;
				Nj(f, e, this._roots), e.each(this.moveUp, this), this.endTransaction()
			},
			moveSelectionDown: function(J) {
				this.beginTransaction(), J || (J = this.sm());
				var X = new jg;
				_o(J, X, this._roots), X.each(this.moveDown, this), this.endTransaction()
			},
			moveSelectionToTop: function(M) {
				this.beginTransaction(), M || (M = this.sm());
				var r = new jg;
				sr(M, r, this._roots), r.each(this.moveToTop, this), this.endTransaction()
			},
			moveSelectionToBottom: function(F) {
				this.beginTransaction(), F || (F = this.sm());
				var $ = new jg;
				Pn(F, $, this._roots), $.each(this.moveToBottom, this), this.endTransaction()
			},
			moveToIndex: function(w, c, z) {
				var f = this.getDatas();
				null == z && (z = f.indexOf(w)), z === c || 0 > z || c >= 0 && c <= f.size() && (f.remove(w), c > f.size() && c--, f.add(w, c), this._76I(w, z, c))
			},
			bringForward: function(Z) {
				this.moveToIndex(Z, this.getDatas().indexOf(Z) + 1)
			},
			bringToFront: function(O) {
				this.moveToIndex(O, this.size())
			},
			sendBackward: function(Q) {
				this.moveToIndex(Q, this.getDatas().indexOf(Q) - 1)
			},
			sendToBack: function(U) {
				this.moveToIndex(U, 0)
			},
			bringSelectionForward: function(L) {
				this.beginTransaction(), L || (L = this.sm());
				for (var h = new jg, T = this.getDatas(), J = !1, G = 0; G < T.size(); G++) {
					var B = T.get(T.size() - 1 - G);
					L.contains(B) ? J && h.add(B) : J = !0
				}
				h.each(this.bringForward, this), this.endTransaction()
			},
			bringSelectionToFront: function(E) {
				this.beginTransaction(), E || (E = this.sm());
				for (var o = new jg, s = this.getDatas(), z = 0; z < s.size(); z++) {
					var e = s.get(z);
					E.contains(e) && o.add(e)
				}
				o.each(this.bringToFront, this), this.endTransaction()
			},
			sendSelectionBackward: function(j) {
				this.beginTransaction(), j || (j = this.sm());
				for (var m = new jg, o = this.getDatas(), M = !1, I = 0; I < o.size(); I++) {
					var J = o.get(I);
					j.contains(J) ? M && m.add(J) : M = !0
				}
				m.each(this.sendBackward, this), this.endTransaction()
			},
			sendSelectionToBack: function(x) {
				this.beginTransaction(), x || (x = this.sm());
				for (var n = new jg, R = this.getDatas(), s = 0; s < R.size(); s++) {
					var t = R.get(R.size() - 1 - s);
					x.contains(t) && n.add(t)
				}
				n.each(this.sendToBack, this), this.endTransaction()
			},
			addScheduleTask: function(z) {
				var q = this;
				q.removeScheduleTask(z), z.enabled == M && (z.enabled = !0), z.interval == M && (z.interval = 10), z.action == M && (z.action = Wl), z.lastTime = Date.now(), q._29Q.push(z), q._30Q == M && (q._30Q = I.requestAnimationFrame(q._scheduleCallback))
			},
			removeScheduleTask: function(x) {
				var c = this,
					E = c._29Q,
					C = E.indexOf(x);
				C >= 0 && E.splice(C, 1), E.length || c._30Q == M || (I.cancelAnimationFrame(c._30Q), delete c._30Q)
			},
			getHistoryManager: function() {
				return this._historyManager
			},
			enableHistoryManager: function(D) {
				this._historyManager || new d.HistoryManager(this), null != D && this._historyManager.setMaxHistoryCount(D), this._historyManager.setDisabled(!1)
			},
			disableHistoryManager: function() {
				this._historyManager && this._historyManager.setDisabled(!0)
			},
			clearHistoryManager: function() {
				this._historyManager && this._historyManager.clear()
			},
			undo: function(Q) {
				this._historyManager && this._historyManager.undo(Q)
			},
			redo: function($) {
				this._historyManager && this._historyManager.redo($)
			},
			beginTransaction: function() {
				this._historyManager && this._historyManager.beginTransaction()
			},
			endTransaction: function() {
				this._historyManager && this._historyManager.endTransaction()
			},
			addHistory: function(G) {
				this._historyManager && this._historyManager.addHistory(G)
			},
			onHistoryManagerChanged: function() {}
		});
		var rr = d.SelectionModel = function(g) {
				var A = this;
				A._68O = Jg, A._map = {}, A._73O = new jg, A._74I = new lf, A._21I(g)
			};
		Xq("SelectionModel", q, {
			ms_fire: 1,
			ms_dm: 1,
			ms: function(b, u, L) {
				this.addSelectionChangeListener(b, u, L)
			},
			ums: function(Q, n) {
				this.removeSelectionChangeListener(Q, n)
			},
			fd: function() {
				return this.getFirstData()
			},
			ld: function() {
				return this.getLastData()
			},
			sg: function() {
				return this._68O === sg
			},
			co: function(f) {
				return this._map[f._id] != M
			},
			ss: function(n) {
				this.setSelection(n)
			},
			as: function(z) {
				this.appendSelection(z)
			},
			rs: function(Q) {
				this.removeSelection(Q)
			},
			cs: function() {
				this.clearSelection()
			},
			sa: function() {
				this.selectAll()
			},
			getSelectionMode: function() {
				return this._68O
			},
			setSelectionMode: function(z) {
				var D = this;
				if (D._68O !== z && (z === Db || z === sg || z === Jg)) {
					D.cs();
					var p = D._68O;
					D._68O = z, D.fp("selectionMode", p, z)
				}
			},
			_21I: function(A) {
				var o = this,
					p = o._dataModel;
				p !== A && (p && (o.cs(), p.umm(o.handleDataModelChange, o)), o._dataModel = A, A.mm(o.handleDataModelChange, o, !0), o.fp(Ke, p, A))
			},
			dispose: function() {
				var v = this;
				v.cs(), v._dataModel.umm(v.handleDataModelChange, v)
			},
			handleDataModelChange: function(x) {
				var u = this;
				if (x.kind === pi) {
					var C = x.data;
					u.co(C) && (u._73O.remove(C), delete u._map[C._id], u._75I(pi, new jg(C)))
				} else x.kind === vd && u.cs()
			},
			getFilterFunc: function() {
				return this._filterFunc
			},
			setFilterFunc: function(j) {
				var A = this;
				if (A._filterFunc !== j) {
					A.cs();
					var g = A._filterFunc;
					A._filterFunc = j, A.fp("filterFunc", g, A._filterFunc)
				}
			},
			_75I: function(K, $, Q, x) {
				Q && (this._73O.each(function(J) {
					x[J._id] ? Q.remove(J) : Q.add(J)
				}), $ = Q.toList()), this._74I.fire({
					kind: K,
					datas: new jg($)
				})
			},
			addSelectionChangeListener: function(B, A, T) {
				this._74I.add(B, A, T)
			},
			removeSelectionChangeListener: function(A, l) {
				this._74I.remove(A, l)
			},
			_97O: function(c, Z) {
				for (var P, x = this, S = 0, m = new jg(c); S < m.size(); S++) P = m.get(S), (x._filterFunc && !x._filterFunc(P) || Z && x.co(P) || !Z && !x.co(P) || !x._dataModel.contains(P)) && (m.removeAt(S), S--);
				return m
			},
			appendSelection: function(h) {
				var o = this;
				if (o._68O !== Db) {
					var f, g, L = o._73O,
						H = o._97O(h, !0);
					H.isEmpty() || (o.sg() && (f = new jg(L), g = o._map, L.clear(), o._map = {}, H = new jg(H.get(H.size() - 1))), H.each(function(k) {
						L.add(k), o._map[k._id] = k
					}), o._75I("append", H, f, g))
				}
			},
			removeSelection: function(E) {
				var n = this,
					s = n._97O(E),
					k = 0,
					f = s.size();
				if (0 !== f) {
					for (; f > k; k++) {
						var M = s.get(k);
						n._73O.remove(M), delete n._map[M._id]
					}
					n._75I(pi, s)
				}
			},
			toSelection: function(v, m) {
				return this._73O.toList(v, m)
			},
			getSelection: function() {
				return this._73O
			},
			each: function(u, K) {
				this._73O.each(u, K)
			},
			setSelection: function(q) {
				var j = this,
					U = j._73O;
				if (j._68O !== Db && !(U.isEmpty() && !q || 1 === U.size() && j.ld() === q)) {
					var y = new jg(U),
						P = j._map;
					U.clear(), j._map = {};
					var h = j._97O(q, !0);
					j.sg() && h.size() > 1 && (h = new jg(h.get(h.size() - 1))), h.each(function(_) {
						U.add(_), j._map[_._id] = _
					}), j._75I("set", M, y, P)
				}
			},
			clearSelection: function() {
				var Q = this,
					f = Q._73O;
				if (f.size() > 0) {
					var $ = f.toList();
					f.clear(), Q._map = {}, Q._75I(vd, $)
				}
			},
			selectAll: function() {
				var W = this;
				if (W._68O !== Db) {
					var K, h, x = W._dataModel.toDatas();
					if (W._filterFunc) for (K = 0; K < x.size(); K++) h = x.get(K), W._filterFunc(h) || (x.removeAt(K), K--);
					var f = W._73O,
						F = new jg(f),
						g = W._map;
					f.clear(), W._map = {}, W.sg() && x.size() > 1 && (x = new jg(x.get(x.size() - 1)));
					var B = x.size();
					for (K = 0; B > K; K++) h = x.get(K), f.add(h), W._map[h._id] = h;
					W._75I("all", M, F, g)
				}
			},
			size: function() {
				return this._73O.size()
			},
			isEmpty: function() {
				return this._73O.isEmpty()
			},
			contains: function(P) {
				return this._map[P._id] != M
			},
			getLastData: function() {
				var T = this._73O;
				return T.size() > 0 ? T.get(T.size() - 1) : M
			},
			getFirstData: function() {
				var n = this._73O;
				return n.size() > 0 ? n.get(0) : M
			},
			isSelectable: function(A) {
				var L = this;
				return A && L._68O !== Db ? L._filterFunc ? L._filterFunc(A) : !0 : !1
			},
			getTopSelection: function() {
				var w = this,
					i = new jg;
				return w._73O.each(function(N) {
					for (var L = N.getParent(); L;) {
						if (w.contains(L)) {
							N = M;
							break
						}
						L = L.parent
					}
					N && i.add(N)
				}), i
			}
		});
		var mg = function() {
				return bi(0), function(s, S) {
					var U;
					if ($f(S)) {
						var v = s.getDataUI(S);
						v && v._88I && (U = v._88I.rect)
					}
					return U ? U : S.getRect()
				}
			}();
		vq(z, {
			edgeGroupAgentFunc: M,
			graphViewAutoScrollZone: 16,
			graphViewResettable: !1,
			graphViewPannable: !0,
			graphViewRectSelectable: !0,
			graphViewScrollBarVisible: !0,
			graphViewRectSelectBorderColor: P.rectSelectBorder,
			graphViewRectSelectBackground: Ol,
			graphViewEditPointSize: Z ? 17 : 7,
			graphViewEditPointBorderColor: P.editPointBorder,
			graphViewEditPointBackground: P.editPointBackground,
			setEdgeType: function(O, A, T) {
				or[O] = A, ho[O] = T
			},
			getEdgeType: function(g) {
				return or[g]
			},
			getEdgeTypeMap: function() {
				return or
			},
			getNodeRect: mg
		}, !0), vq(e, {
			"2d.selectable": !0,
			"2d.visible": !0,
			"2d.movable": !0,
			"2d.editable": !0,
			"2d.move.mode": r,
			"image.stretch": "fill",
			icons: r,
			ingroup: !0,
			"body.color": r,
			opacity: r,
			pixelPerfect: !0,
			"clip.direction": "top",
			"clip.percentage": 1,
			"select.color": qj,
			"select.width": 1,
			"select.padding": 2,
			"select.type": Hf,
			shadow: !1,
			"shadow.blur": 6,
			"shadow.offset.x": 3,
			"shadow.offset.y": 3,
			"border.color": r,
			"border.width": 2,
			"border.padding": 2,
			"border.type": Hf,
			label: r,
			"label.font": r,
			"label.color": Dr,
			"label.background": r,
			"label.position": 31,
			"label.position.fixed": !1,
			"label.offset.x": 0,
			"label.offset.y": 2,
			"label.rotation": r,
			"label.max": r,
			"label.opacity": r,
			"label.scale": 1,
			"label.align": r,
			"label.selectable": !0,
			label2: r,
			"label2.font": r,
			"label2.color": Dr,
			"label2.background": r,
			"label2.position": 34,
			"label2.position.fixed": !1,
			"label2.offset.x": 0,
			"label2.offset.y": -2,
			"label2.rotation": r,
			"label2.max": r,
			"label2.opacity": r,
			"label2.scale": 1,
			"label2.align": r,
			"label2.selectable": !0,
			note: r,
			"note.expanded": !0,
			"note.font": r,
			"note.color": Bl,
			"note.background": qj,
			"note.position": 8,
			"note.offset.x": -3,
			"note.offset.y": 3,
			"note.max": r,
			"note.toggleable": !0,
			"note.border.width": 1,
			"note.border.color": r,
			"note.opacity": r,
			"note.scale": 1,
			"note.align": r,
			note2: r,
			"note2.expanded": !0,
			"note2.font": r,
			"note2.color": Bl,
			"note2.background": qj,
			"note2.position": 3,
			"note2.offset.x": 3,
			"note2.offset.y": -3,
			"note2.max": r,
			"note2.toggleable": !0,
			"note2.border.width": 1,
			"note2.border.color": r,
			"note2.opacity": r,
			"note2.scale": 1,
			"note2.align": r,
			"group.type": r,
			"group.image": r,
			"group.image.stretch": "fill",
			"group.repeat.image": r,
			"group.padding": 8,
			"group.padding.left": 0,
			"group.padding.right": 0,
			"group.padding.top": 0,
			"group.padding.bottom": 0,
			"group.position": 17,
			"group.toggleable": !0,
			"group.title.font": r,
			"group.title.color": Bl,
			"group.title.background": P.groupTitleBackground,
			"group.title.align": $c,
			"group.background": P.groupBackground,
			"group.depth": 1,
			"group.border.width": 1,
			"group.border.pattern": r,
			"group.border.color": Gf,
			"group.border.cap": Bn,
			"group.border.join": Zd,
			"group.gradient": M,
			"group.gradient.color": "#FFF",
			shape: r,
			"shape.background": Gf,
			"shape.repeat.image": r,
			"shape.border.width": 0,
			"shape.border.width.absolute": !1,
			"shape.border.color": Gf,
			"shape.border.3d": !1,
			"shape.border.3d.color": r,
			"shape.border.3d.accuracy": r,
			"shape.border.cap": Bn,
			"shape.border.join": Zd,
			"shape.border.pattern": r,
			"shape.gradient": M,
			"shape.gradient.color": "#FFF",
			"shape.depth": 0,
			"shape.dash": !1,
			"shape.dash.pattern": $l,
			"shape.dash.offset": 0,
			"shape.dash.color": mm,
			"shape.dash.width": r,
			"shape.dash.3d": !1,
			"shape.dash.3d.color": r,
			"shape.dash.3d.accuracy": r,
			"shape.polygon.side": 6,
			"shape.arc.from": F,
			"shape.arc.to": o,
			"shape.arc.close": !0,
			"shape.arc.oval": !1,
			"shape.corner.radius": r,
			"shape.gradient.pack": r,
			"shape.fill.rule": "nonzero",
			"shape.fill.clip.direction": "top",
			"shape.fill.clip.percentage": 1,
			"autolayout.gap": r,
			"autolayout.hgap": r,
			"autolayout.vgap": r,
			"edge.type": r,
			"edge.points": r,
			"edge.segments": r,
			"edge.color": Gf,
			"edge.width": 2,
			"edge.width.absolute": !1,
			"edge.offset": 20,
			"edge.group": 0,
			"edge.expanded": !0,
			"edge.gap": 12,
			"edge.toggleable": !0,
			"edge.center": !1,
			"edge.3d": !1,
			"edge.3d.color": r,
			"edge.3d.accuracy": r,
			"edge.cap": Bn,
			"edge.join": Zd,
			"edge.source.position": 17,
			"edge.source.anchor.x": r,
			"edge.source.anchor.y": r,
			"edge.source.offset.x": 0,
			"edge.source.offset.y": 0,
			"edge.target.position": 17,
			"edge.target.anchor.x": r,
			"edge.target.anchor.y": r,
			"edge.target.offset.x": 0,
			"edge.target.offset.y": 0,
			"edge.pattern": r,
			"edge.dash": !1,
			"edge.dash.pattern": $l,
			"edge.dash.offset": 0,
			"edge.dash.color": mm,
			"edge.dash.width": r,
			"edge.dash.3d": !1,
			"edge.dash.3d.color": r,
			"edge.dash.3d.accuracy": r,
			"edge.independent": !1,
			"attach.row.index": 0,
			"attach.column.index": 0,
			"attach.row.span": 1,
			"attach.column.span": 1,
			"attach.padding": 0,
			"attach.padding.left": 0,
			"attach.padding.right": 0,
			"attach.padding.top": 0,
			"attach.padding.bottom": 0,
			"attach.index": -1,
			"attach.offset": 0,
			"attach.offset.relative": !1,
			"attach.offset.opposite": !1,
			"attach.thickness": r,
			"attach.gap": 0,
			"attach.gap.relative": !1,
			"grid.row.count": 1,
			"grid.column.count": 1,
			"grid.row.percents": r,
			"grid.column.percents": r,
			"grid.border": 1,
			"grid.border.left": 0,
			"grid.border.right": 0,
			"grid.border.top": 0,
			"grid.border.bottom": 0,
			"grid.gap": 1,
			"grid.background": P.gridBackground,
			"grid.depth": 1,
			"grid.cell.depth": -1,
			"grid.cell.border.color": P.gridCellBorderColor,
			"grid.block": r,
			"grid.block.padding": 3,
			"grid.block.width": 1,
			"grid.block.color": P.gridBlockColor,
			text: "",
			"text.align": "left",
			"text.vAlign": "middle",
			"text.color": Dr,
			"text.font": an,
			"text.shadow": !1,
			"text.shadow.color": sm,
			"text.shadow.blur": 6,
			"text.shadow.offset.x": 3,
			"text.shadow.offset.y": 3
		}, !0), vq(Od, {
			_76I: function(e, o, _) {
				this._39I && this._39I.fire({
					data: e,
					oldIndex: o,
					newIndex: _
				})
			},
			addIndexChangeListener: function(g, r, M) {
				var H = this;
				H._39I || (H._39I = new lf), H._39I.add(g, r, M)
			},
			removeIndexChangeListener: function(i, C) {
				this._39I.remove(i, C)
			},
			prepareRemove: function(i) {
				Jj(i) && (i.setSource(M), i.setTarget(M)), i._70O && i._70O.toList().each(this.remove, this), i._69O && i._69O.toList().each(function(h) {
					h.setHost(M)
				}), i._host && i.setHost(M)
			},
			onAdded: function(P) {
				this.isAutoAdjustIndex() && this.adjustIndex(P)
			},
			onDataPropertyChanged: function(j, n) {
				bm[n.property] && this.isAutoAdjustIndex() && this.adjustIndex(j)
			},
			isAdjustable: function(m) {
				return pr(m) || Jj(m)
			},
			isAdjustedToBottom: function(v) {
				return qr(v) ? v.isExpanded() && Gq(v) : !1
			},
			adjustIndex: function(o) {
				var v = this;
				this.isHierarchicalRendering() || (v.isAdjustedToBottom(o) ? (v.sendToBottom(o), o.eachChild(v.adjustIndex, v)) : v.sendToTop(o))
			},
			sendToTop: function($) {
				var W = this;
				if (W.contains($) && W.isAdjustable($)) {
					var u = W._datas;
					if ($ !== u.get(W.size() - 1)) {
						var c = u.indexOf($);
						u.removeAt(c), u.add($), W._76I($, c, W.size() - 1)
					}
					if (Jj($)) {
						var y = $._40I;
						y && !W.isAdjustedToBottom(y) && W.sendToTop(y), y = $._41I, y && !W.isAdjustedToBottom(y) && W.sendToTop(y)
					}
					$._69O && $._69O.each(function(p) {
						p.isRelatedTo($) || pr($) && p.isLoopedHostOn($) || W.sendToTop(p)
					}), $.ISubGraph || (!qr($) || $.isExpanded()) && $._adjustChildrenToTop && $.eachChild(function(e) {
						Jj(e) || W.sendToTop(e)
					})
				}
			},
			sendToBottom: function(E, g) {
				var M = this;
				if (E !== g && M.contains(E) && M.isAdjustable(E) && (!g || M.contains(g))) {
					var T = M._datas,
						t = T.remove(E),
						v = g ? M._datas.indexOf(g) : 0;
					if (T.add(E, v), t !== v) {
						M._76I(E, t, v);
						var Z = E._parent;
						!Z || Z.ISubGraph || Jj(Z) || M.sendToBottom(E._parent, E)
					}
				}
			}
		}), vq(vb, {
			ms_edit: function(e) {
				e._46O = function(J) {
					var u = this,
						Y = u.gv.dm(),
						V = u._index,
						S = u._89I,
						Z = u._node,
						U = u._shape,
						b = u._edge,
						q = u._77I;
					Z && S ? (this.fi({
						kind: "endEditRect",
						event: J,
						data: Z,
						direction: S
					}), Y.endTransaction()) : U && V >= 0 ? (u.fi({
						kind: "endEditPoint",
						event: J,
						data: U,
						index: V
					}), Y.endTransaction()) : b && V >= 0 ? (u.fi({
						kind: "endEditPoint",
						event: J,
						data: b,
						index: V
					}), Y.endTransaction()) : q && (u.fi({
						kind: "endEditRotation",
						event: J,
						data: q
					}), Y.endTransaction())
				}, e._78I = function(Z) {
					var t = this;
					t.autoScroll(Z);
					var i = t.gv.lp(Z),
						X = t._index,
						E = t._89I,
						Y = t._node,
						s = t._shape,
						v = t._edge,
						D = t._77I;
					if (Y && E) t._80O(i), t.fi({
						kind: "betweenEditRect",
						event: Z,
						data: Y,
						direction: E
					});
					else if (s && X >= 0) i.e = s.getPoints().get(X).e, s.setPoint(X, i), t.fi({
						kind: "betweenEditPoint",
						event: Z,
						data: s,
						index: X
					});
					else if (v && X >= 0) {
						var B = v.s(sc);
						i.e = B.get(X).e, B.set(X, i), v.fp(sc, M, B), t.fi({
							kind: "betweenEditPoint",
							event: Z,
							data: v,
							index: X
						})
					} else if (D) {
						var c = D.p(),
							g = D.getScale(),
							n = T + G(i.y - c.y, i.x - c.x);
						g.y < 0 && (n += F), R(n) < .04 && (n = 0), D.setRotation(n), t.fi({
							kind: "betweenEditRotation",
							event: Z,
							data: D
						})
					}
				}, e._80O = function(Q) {
					var t = this,
						f = t._node,
						o = t._rect,
						Y = o.x,
						u = o.y,
						a = o.width,
						h = o.height,
						m = t._89I,
						T = t._anchor,
						s = t._matrix,
						Q = s.tfi(Q);
					"northwest" === m ? o = cp(Q, {
						x: Y + a,
						y: u + h
					}) : m === Tc ? o = cp({
						x: Y,
						y: Q.y
					}, {
						x: Y + a,
						y: u + h
					}) : "northeast" === m ? o = cp({
						x: Y,
						y: Q.y
					}, {
						x: Q.x,
						y: u + h
					}) : m === yb ? o = cp({
						x: Q.x,
						y: u
					}, {
						x: Y + a,
						y: u + h
					}) : m === zn ? o = cp({
						x: Y,
						y: u
					}, {
						x: Q.x,
						y: u + h
					}) : "southwest" === m ? o = cp({
						x: Q.x,
						y: u
					}, {
						x: Y + a,
						y: Q.y
					}) : "south" === m ? o = cp({
						x: Y,
						y: u
					}, {
						x: Y + a,
						y: Q.y
					}) : "southeast" === m && (o = cp({
						x: Y,
						y: u
					}, Q)), f.setPosition(s.tf(o.x + o.width * T.x, o.y + o.height * T.y)), f.setWidth(o.width), f.setHeight(o.height)
				}, e._80I = function(t, i, M, _) {
					var I = this,
						y = I.gv._zoom,
						E = (I.gv.getEditPointSize() + 2) / y;
					return Gn({
						x: i - E / 2,
						y: M - E / 2,
						width: E,
						height: E
					}, t) ? (I._89I !== _ && (I._89I = _), !0) : !1
				}, e._79I = function(N, J, I) {
					var w = this,
						D = w.gv,
						Z = J ? D.getDataUI(J) : M,
						r = Z ? Z._55O : M;
					if (r) {
						var h, k, p, P, S = D._zoom,
							t = (D.getEditPointSize() + 2) / S,
							u = D.lp(N);
						if (pr(J)) {
							if (r._56O && pr(J) && (k = r._98o, Gn({
								x: k.x - t / 2,
								y: k.y - t / 2,
								width: t,
								height: t
							}, u))) return w._77I = J, I && w.fi({
								kind: "beginEditRotation",
								event: N,
								data: J
							}), w.setCursor("crosshair"), !0;
							if (r._43O && J instanceof Yq) for (p = J.getPoints(), h = p.size() - 1; h >= 0; h--) if (k = p.get(h), Gn({
								x: k.x - t / 2,
								y: k.y - t / 2,
								width: t,
								height: t
							}, u)) return w._index = h, w._shape = J, I && w.fi({
								kind: "beginEditPoint",
								event: N,
								data: J,
								index: h
							}), w.setCursor("crosshair"), !0;
							if (r._42O) for (var V = J.getEditControlPoints(), s = ["northwest", -1, -1, yb, -1, 0, "southwest", -1, 1, "south", 0, 1, "southeast", 1, 1, zn, 1, 0, "northeast", 1, -1, Tc, 0, -1], h = 0, P = V.length; P > h; h++) {
								var W = s[3 * h],
									L = V[h];
								if (w._80I(u, L.x, L.y, W)) {
									w._node = J;
									var G = J.getWidth(),
										E = J.getHeight(),
										z = J.getAnchor();
									w._rect = {
										x: -G * z.x,
										y: -E * z.y,
										width: G,
										height: E
									}, w._anchor = z, w._matrix = J.getMatrix();
									var H = J.getRotation(),
										f = K(H),
										n = C(H),
										i = s[3 * h + 1] * Of(J.getScale().x),
										O = s[3 * h + 2] * Of(J.getScale().y),
										q = Math.atan2(-n * i - f * O, f * i - n * O),
										_ = (Math.round(q / (Math.PI / 4)) + 8) % 8,
										v = [fi, "nesw-resize", Vj, "nwse-resize", fi, "nesw-resize", Vj, "nwse-resize"][_];
									return w.setCursor(v), I && w.fi({
										kind: "beginEditRect",
										event: N,
										data: J,
										direction: w._89I
									}), !0
								}
							}
						}
						if (r._43O && Jj(J) && J.s(Yn) === co && (p = J.s(sc))) for (h = p.size() - 1; h >= 0; h--) if (k = p.get(h), Gn({
							x: k.x - t / 2,
							y: k.y - t / 2,
							width: t,
							height: t
						}, u)) return w._index = h, w._edge = J, I && w.fi({
							kind: "beginEditPoint",
							event: N,
							data: J,
							index: h
						}), w.setCursor("crosshair"), !0
					}
					return !1
				}
			},
			ms_gv: function(k) {
				k._currentSubGraph = M, k.upSubGraph = function() {
					this.setCurrentSubGraph(Uh(this._currentSubGraph))
				}, k.isVisible = function(E) {
					var P = this;
					if (Uh(E) !== P._currentSubGraph) return !1;
					if (Jj(E)) {
						var D = E._40I,
							G = E._41I;
						if (!D || !G) return !1;
						if (!(E.s("edge.independent") || P.isVisible(D) && P.isVisible(G))) return !1;
						if (E.isEdgeGroupHidden()) return !1
					} else for (var m = E._parent; m && !m.ISubGraph;) {
						if (qr(m) && (!m.isExpanded() || !P.isVisible(m))) return !1;
						m = m._parent
					}
					if (E._parent instanceof zm && !P.isVisible(E._parent)) return !1;
					if (E._refGraph instanceof Ei && !P.isVisible(E._refGraph)) return !1;
					if (P instanceof cc) {
						if (!E.s("3d.visible")) return !1
					} else {
						var k = P.getLayersInfo();
						if (k) {
							var F = k[E._layer];
							if (F && F.visible === !1) return !1
						}
						if (!E.s("2d.visible")) return !1
					}
					return P._visibleFunc ? P._visibleFunc(E) : !0
				}, k.handleSelectionChange = function(P) {
					var n = this;
					P.datas.each(function(c) {
						n.invalidateData(c);
						var O = c._parent;
						qr(O) && pr(c) && c.s(sh) && (n.invalidateData(O), O._49I && O._49I.each(function(Y) {
							n.invalidateData(Y)
						}))
					}), n.onSelectionChanged(P)
				}, k.onSelectionChanged = function(E) {
					var T = this,
						o = T.sm();
					if (1 === o.size() && ("set" === E.kind || "append" === E.kind)) {
						var u = o.ld();
						T.isAutoMakeVisible() && T.makeVisible(u), T.adjustIndex && T._dataModel.isAutoAdjustIndex() && T.adjustIndex(u)
					}
				}, k.makeVisible = function(k) {
					if (k) {
						var W = this,
							v = W.getDataUI ? W.getDataUI(k) : W.getData3dUI(k);
						if (v) {
							var g = k,
								D = Uh(k);
							for (D !== W._currentSubGraph && W.setCurrentSubGraph(D);
							(g = g._parent) && g !== D;) qr(g) && g.setExpanded(!0);
							W._23I = k, W.iv()
						}
					}
				}, k.getLabel = function(j) {
					var n = j.getStyle(ob);
					return n === r ? j.getName() : n
				}, k.getLabelBackground = function(t) {
					return t.getStyle("label.background")
				}, k.getLabelColor = function(b) {
					return b.getStyle("label.color")
				}, k.getLabel2 = function(x) {
					return x.getStyle("label2")
				}, k.getLabel2Background = function(U) {
					return U.getStyle("label2.background")
				}, k.getLabel2Color = function(o) {
					return o.getStyle("label2.color")
				}, k.getNote = function(I) {
					return I.getStyle(ud)
				}, k.getNoteBackground = function(E) {
					return E.getStyle("note.background")
				}, k.getNote2 = function(R) {
					return R.getStyle(bl)
				}, k.getNote2Background = function($) {
					return $.getStyle("note2.background")
				}, k.handleClick = function(e, B, X) {
					var g = this;
					B ? (g.fi({
						kind: "clickData",
						event: e,
						data: B,
						part: X
					}), g.onDataClicked(B, e)) : (g.fi({
						kind: "clickBackground",
						event: e
					}), g.onBackgroundClicked(e))
				}, k.handleDoubleClick = function(u, o, w) {
					var S = this;
					Dg(u) && (o ? (S.fi({
						kind: "doubleClickData",
						event: u,
						data: o,
						part: w
					}), S.onDataDoubleClicked(o, u, w), S.checkDoubleClickOnNote(u, o, w) || S.checkDoubleClickOnRotation && S.checkDoubleClickOnRotation(u, o, w) || (Jj(o) ? S.onEdgeDoubleClicked(o, u, w) : o.ISubGraph ? S.onSubGraphDoubleClicked(o, u, w) : qr(o) ? S.onGroupDoubleClicked(o, u, w) : o.IDoorWindow ? S.onDoorWindowDoubleClicked(o, u, w) : o.ICSGBox && S.onCSGBoxDoubleClicked(o, u, w))) : (S.fi({
						kind: "doubleClickBackground",
						event: u
					}), S.onBackgroundDoubleClicked(u)))
				}, k.onSubGraphDoubleClicked = function(H) {
					this.setCurrentSubGraph(H)
				}, k.onEdgeDoubleClicked = function(h, Q) {
					h.ISubGraph && !Ik(Q) ? this.setCurrentSubGraph(h) : h.s("edge.toggleable") && h.toggle()
				}, k.onGroupDoubleClicked = function(S) {
					S.s("group.toggleable") && S.toggle()
				}, k.onDoorWindowDoubleClicked = function(O) {
					O.s("dw.toggleable") && O.toggle(!0)
				}, k.onCSGBoxDoubleClicked = function(w, d) {
					var q = this;
					if (q instanceof cc) {
						var H = q.getHitFaceInfo(d);
						H && H.face && w.s(H.face + ".toggleable") && w.toggleFace(H.face, !0)
					}
				}, k.onBackgroundClicked = function() {}, k.onBackgroundDoubleClicked = function() {
					this.upSubGraph()
				}, k.onDataClicked = function() {}, k.onDataDoubleClicked = function() {}, k.onAutoLayoutEnded = function() {}, k.onMoveEnded = function() {}, k.onPanEnded = function() {}, k.onPinchEnded = function() {}, k.onRectSelectEnded = function() {}, k.onZoomEnded = function() {}
			},
			ms_icons: function(I) {
				I.getRotation = function(s) {
					return s == M ? 0 : s
				}, I._15O = function() {
					var w = this,
						F = w.s(jl);
					if (F) {
						var i = w,
							E = w.data || w._data,
							b = w._38o = {
								icons: F,
								rects: {}
							};
						for (var r in F) {
							var z = F[r],
								N = El(z.shape3d, E, i);
							if (!(El(z.visible, E, i) === !1 || El(z.for3d, E, i) && !w.I3d || N && !w.I3d)) {
								var G = N ? [N] : El(z.names, E, i),
									s = G ? G.length : 0,
									H = El(z.position, E, i) || 3,
									S = El(z.offsetX, E, i) || 0,
									e = El(z.offsetY, E, i) || 0,
									X = El(z.direction, E, i) || zn,
									o = El(z.gap, E, i),
									I = o != M ? o : 1,
									O = El(z.rotation, E, i),
									x = El(z.keepOrien, E, i),
									p = El(z.rotationFixed, E, i) ? O : w.getRotation(O, x, H),
									V = M,
									A = b.rects[r] = new Array(s);
								A.rotation = p;
								for (var D = 0; s > D; D++) {
									var T, h, L, c, P = G[D];
									if (N) L = 0, c = 0;
									else {
										var U = Ob(P);
										L = El(z.width, E, i), c = El(z.height, E, i), L == M && (L = Dc(U, E)), c == M && (c = pd(U, E))
									}
									if (V ? X === zn ? S += L / 2 : X === yb ? S -= L / 2 : X === Tc ? e -= c / 2 : e += c / 2 : V = {
										width: L,
										height: c
									}, w.I3d) {
										var l = -L / 2,
											$ = -c / 2;
										h = {
											width: L,
											height: c,
											mat: w._16O(El(z.autorotate, E, i), H, V, El(z.face, E, i) || Km, El(z.t3, E, i), El(z.r3, E, i), El(z.rotationMode, E, i), S, e),
											vs: new Cm([l, -$, 0, l, -$ - c, 0, l + L, -$ - c, 0, l + L, -$, 0])
										}
									} else T = w.getPosition(H, S, e, V, El(z.positionFixed, E, i)), h = {
										x: T.x - L / 2,
										y: T.y - c / 2,
										width: L,
										height: c
									}, w._68o(h, p);
									A[D] = h, X === zn ? S += L / 2 + I : X === yb ? S -= L / 2 + I : X === Tc ? e -= c / 2 + I : e += c / 2 + I
								}
							}
						}
					}
				}
			}
		});
		var Fn = {
			1: 1,
			2: 1,
			6: 1,
			9: 1,
			10: 1,
			14: 1,
			15: 1,
			16: 1,
			21: 1,
			22: 1,
			26: 1,
			29: 1,
			30: 1,
			34: 1,
			36: 1,
			38: 1,
			40: 1,
			42: 1,
			45: 1,
			50: 1,
			52: 1,
			54: 1
		},
			qn = {
				3: 1,
				7: 1,
				11: 1,
				17: 1,
				23: 1,
				27: 1,
				31: 1,
				44: 1,
				46: 1,
				47: 1,
				49: 1
			},
			Vm = {
				translateX: 1,
				translateY: 1,
				zoom: 1,
				scrollBarVisible: 1
			},
			bm = {
				sourceAgent: 1,
				targetAgent: 1,
				expanded: 1,
				parent: 1,
				host: 1
			},
			vp = {
				position: 1,
				width: 1,
				height: 1,
				expanded: 1,
				rotation: 1,
				anchor: 1,
				scale: 1,
				"s:edge.points": 1
			},
			Sh = {
				"edge.type": 1,
				"edge.group": 1
			},
			Jo = {
				rotation: 1,
				rotationX: 1,
				rotationZ: 1
			},
			Rm = {
				position: 1,
				width: 1,
				height: 1,
				anchor: 1,
				scale: 1,
				"s:grid.row.count": 1,
				"s:grid.column.count": 1,
				"s:grid.row.percents": 1,
				"s:grid.column.percents": 1,
				"s:grid.border": 1,
				"s:grid.border.left": 1,
				"s:grid.border.right": 1,
				"s:grid.border.top": 1,
				"s:grid.border.bottom": 1,
				"s:grid.gap": 1
			},
			mr = {
				"attach.row.index": 1,
				"attach.column.index": 1,
				"attach.row.span": 1,
				"attach.column.span": 1,
				"attach.padding": 1,
				"attach.padding.left": 1,
				"attach.padding.right": 1,
				"attach.padding.top": 1,
				"attach.padding.bottom": 1,
				"attach.index": 1,
				"attach.offset": 1,
				"attach.offset.relative": 1,
				"attach.offset.opposite": 1,
				"attach.gap": 1,
				"attach.gap.relative": 1,
				"attach.thickness": 1
			},
			pk = {
				shape: 1,
				thickness: 1,
				position: 1,
				anchor: 1,
				scale: 1
			},
			xk = function(K, w) {
				if (!K || !qr(w) || w.isEmpty()) return !1;
				for (K = K._parent; qr(K);) {
					if (K === w) return !0;
					K = K._parent
				}
				return !1
			},
			gn = function(Q, F) {
				if (!Q || !Cj(F) || F.isEmpty()) return !1;
				for (Q = Q._parent; Cj(Q);) {
					if (Q === F) return !0;
					Q = Q._parent
				}
				return !1
			},
			Uh = function(E) {
				if (!E) return M;
				if (Jj(E)) {
					var Q = E._40I,
						l = E._41I;
					if (!Q || !l) return M;
					var h = Uh(Q),
						_ = Uh(l);
					return h === _ ? h : M
				}
				for (var P = E._parent; Jj(P) && !P.ISubGraph;) P = P._parent;
				return P ? P.ISubGraph ? P : Uh(P) : M
			},
			Yo = function(c, j, O, U) {
				var u = j.getStyle(O) * U;
				u && Td(c, u), u = j.getStyle(O + ".left") * U, u && (c.x -= u, c.width += u), u = j.getStyle(O + ".right") * U, u && (c.width += u), u = j.getStyle(O + ".top") * U, u && (c.y -= u, c.height += u), u = j.getStyle(O + ".bottom") * U, u && (c.height += u), c.width < 0 && (c.width = -c.width, c.x -= c.width), c.height < 0 && (c.height = -c.height, c.y -= c.height)
			},
			Gq = function(R) {
				for (var X, Y = 0, T = R.size(); T > Y; Y++) if (X = R.getChildAt(Y), pr(X) && Gq(X)) return !0;
				return R.hasAgentEdges()
			},
			_d = function(S) {
				if (!S) return M;
				for (var e = S._parent; qr(e);) {
					if (!qr(e._parent)) return e.isExpanded() ? S : e;
					e.isExpanded() || (S = e), e = e._parent
				}
				return S
			},
			Og = function(d, q) {
				if (!d || !q) return M;
				var o, R, D, y = Uh(d),
					Z = Uh(q);
				if (y !== Z) {
					for (; Z && y !== Z;) Z = Uh(Z);
					if (y === Z) return d;
					o = new jg, o.add(d, 0);
					for (var c = d._parent; pr(c) && !q.isDescendantOf(c);) o.add(c, 0), c = c._parent;
					for (D = o.size(), R = 0; D > R; R++) {
						var Y = o.get(R);
						if (qr(Y) && !Y.isExpanded()) return Y;
						if (Y.ISubGraph) return Y
					}
					return d
				}
				return d
			},
			yo = function(c) {
				if (c.isLooped()) return c._source;
				var o = _d(c._source),
					_ = _d(c._target);
				return o === _ ? c._source : Og(o, _)
			},
			Mm = function(S) {
				if (S.isLooped()) return S._target;
				var k = _d(S._source),
					A = _d(S._target);
				return k === A ? S._target : Og(A, k)
			},
			Jf = function(U, R, k, q, W, z, P) {
				if (!R) return M;
				var i, A = R.getRotation ? R.getRotation() : 0;
				if (z !== r || P !== r) if (z = z === r ? .5 : z, P = P === r ? .5 : P, A && !$f(R, U)) {
					var G = R.getPosition(),
						b = R.getWidth(),
						o = R.getHeight(),
						h = R.getAnchor(),
						g = R.getScale(),
						a = new Gk(A, G.x, G.y, g.x, g.y);
					k = a.tf((z - h.x) * b, (P - h.y) * o)
				} else i = mg(U, R), k = {
					x: i.x + z * i.width,
					y: i.y + P * i.height
				};
				else k = Dd(k, mg(U, R));
				if (A) {
					var t = K(A),
						N = C(A),
						Q = q * t - W * N;
					W = q * N + W * t, q = Q
				}
				return k.x += q, k.y += W, k
			},
			Dq = function(S, F) {
				if (!S || !F) return M;
				var $, _, m, e, p, j;
				if (S === F) {
					if (e = S.getLoopedEdges(), !e) return M;
					e = new jg(e)
				} else {
					if (p = S.getAgentEdges(), j = F.getAgentEdges(), !p || !j) return M;
					for (_ = p.size(), $ = 0; _ > $; $++) m = p.get($), j.contains(m) && (e || (e = new jg), e.add(m))
				}
				if (e) for ($ = 0; $ < e.size(); $++) m = e.get($), m.getStyle(Yn) === co && (m._22I(M), e.removeAt($), $--);
				return e
			},
			tm = function(A, T) {
				var I = Dq(A, T);
				if (I && !I.isEmpty()) {
					if (1 === I.size()) return I.get(0)._22I(M), void 0;
					var S = new jg,
						Q = new jg;
					I.each(function(e) {
						var U = e.s("edge.group");
						S.contains(U) || S.add(U)
					}), S.sort(), S.each(function(t) {
						Q.add(new d.EdgeGroup(I.toList(function(f) {
							return t === f.s("edge.group")
						}), Q))
					}), Q.each(function(_) {
						_.each(function(P) {
							P._22I(_)
						})
					})
				}
			},
			Wg = function(N, g) {
				if (g) {
					var u = g.rect,
						H = g.color,
						F = g.rotation,
						K = g.labelWidth,
						B = g.background,
						z = g.opacity,
						J = g.scale,
						C = J != M && 1 !== J;
					if (z != M) {
						var R = N.globalAlpha;
						N.globalAlpha *= z
					}
					if (F || C) {
						N.save();
						var x = u.x + u.width / 2,
							s = u.y + u.height / 2;
						Wj(N, x, s), F && mq(N, F), C && N.scale(J, J), Wj(N, -x, -s)
					}
					if (B && kq(N, u.x, u.y, u.width, u.height, B), K) {
						var d = u.width,
							t = N.createLinearGradient(u.x, u.y, u.x + d, u.y);
						t.addColorStop(0, H), t.addColorStop(.9, H), t.addColorStop(1, Lb), H = t, u.width = K
					}
					Eg(N, g.ss, u, g.font, H, g.align), K && (u.width = d), (F || C) && N.restore(), z != M && (N.globalAlpha = R)
				}
			},
			uh = function(I, _) {
				if (_) {
					var r = _.rect,
						v = r.x,
						w = r.y,
						n = r.width,
						U = r.height,
						K = _.background,
						R = _.backgroundImage,
						e = _.borderWidth,
						u = _.borderColor,
						N = _.labelWidth,
						s = _.opacity,
						O = _.scale,
						D = O != M && 1 !== O;
					if (s != M) {
						var g = I.globalAlpha;
						I.globalAlpha *= s
					}
					if (D) {
						I.save();
						var V = r.x + r.width / 2,
							c = r.y + r.height / 2;
						Wj(I, V, c), I.scale(O, O), Wj(I, -V, -c)
					}
					if (_.expanded) {
						var Z = k(8, n / 4),
							l = w + U - 8;
						if (I.fillStyle = K, I.beginPath(), I.moveTo(v, w), I.lineTo(v, l), I.lineTo(v + n / 2, l), I.lineTo(v + n / 2, w + U), I.lineTo(v + n / 2 + Z, l), I.lineTo(v + n, l), I.lineTo(v + n, w), I.closePath(), I.fill(), e && (I.lineWidth = e, I.lineJoin = "round", I.lineCap = "round", u ? (I.strokeStyle = u, I.stroke()) : (I.strokeStyle = li(K), I.beginPath(), I.moveTo(v + n, w), I.lineTo(v + n, l), I.lineTo(v + n / 2 + Z, l), I.lineTo(v + n / 2, w + U), I.stroke(), I.strokeStyle = Mp(K), I.beginPath(), I.moveTo(v + n, w), I.lineTo(v, w), I.lineTo(v, l), I.lineTo(v + n / 2, l), I.lineTo(v + n / 2, w + U), I.stroke())), R) Bb(I, Ob(R), Xk, r.x, r.y, r.width, r.height - 8, _.data, _.view);
						else {
							if (r.height -= 8, K = _.color, N) {
								var t = n,
									q = I.createLinearGradient(v, w, v + t, w);
								q.addColorStop(0, K), q.addColorStop(.9, K), q.addColorStop(1, Lb), K = q, r.width = N
							}
							Eg(I, _.ss, r, _.font, K, _.align), N && (r.width = t), r.height += 8
						}
					} else if (_.icon) od(I, Ob(_.icon), v, w, n, U, _.data, _.view);
					else {
						var X = n / 2;
						e && (I.lineWidth = e, I.lineJoin = "round", I.lineCap = "round", I.strokeStyle = u ? u : li(K), I.beginPath(), I.arc(v + X, w + X, X, T, 1.6 * F, !0), I.moveTo(v + X, w + U), I.lineTo(v + n - X / 5, w + X), I.stroke(), I.strokeStyle = u ? u : Mp(K), I.beginPath(), I.arc(v + X, w + X, X, 1.6 * F, T, !0), I.moveTo(v + X, w + U), I.lineTo(v + X / 5, w + X), I.stroke()), I.fillStyle = K, I.beginPath(), I.arc(v + X, w + X, X, 0, o, !0), I.moveTo(v + X, w + U), I.lineTo(v + n - X / 5, w + X), I.lineTo(v + X / 5, w + X), I.closePath(), I.fill(), I.fillStyle = _.color, I.beginPath(), I.arc(v + X, w + X, X / 3, 0, o, !0), I.fill()
					}
					D && I.restore(), s != M && (I.globalAlpha = g)
				}
			},
			Bi = function(k, s) {
				return s > 2 * k ? k : s / 2
			},
			Xb = function(Q, f, U, p) {
				if (!Q || !f) return 0;
				var r = G(f.y - Q.y, f.x - Q.x);
				return U || (r = f.x < Q.x ? r + F : r), r + p
			},
			pp = function(S, g, m, r, X, Y, C) {
				C && (S.x > g.x || S.x === g.x && S.y > g.y) && (m = xp[m], X = -X);
				var B = Dd(m, {
					x: 0,
					y: 0,
					width: Zg(S, g),
					height: 0
				}, Y);
				return B.x += r, B.y += X, B = new Gk(G(g.y - S.y, g.x - S.x)).tf(B), B.x += S.x, B.y += S.y, B
			},
			Ud = function(m, W, q, M, w) {
				if (m._19Q = !0, !q.getEdgeGroup()) return M ? q.s("edge.gap") : 0;
				var H, T = 0,
					d = 0,
					y = 0;
				if (q.getEdgeGroup().getSiblings().each(function(c) {
					c.each(function(L) {
						if (W.isVisible(L) && L.s(Yn) == w) {
							var o = L.s("edge.gap");
							H ? (d += y / 2 + o / 2, y = o) : (H = L, y = o), L === q && (T = d)
						}
					})
				}), M) return d - T + y;
				var E = T - d / 2;
				return H && q._40I !== H._40I && (m._19Q = !1), E
			},
			Do = function() {
				var W = function(k) {
						var W = [];
						return k.forEach(function(s) {
							W.push({
								x: s.x,
								y: s.y
							}), W.push({
								x: s.x + s.width,
								y: s.y + s.height
							}), W.push({
								x: s.x + s.width,
								y: s.y
							}), W.push({
								x: s.x,
								y: s.y + s.height
							})
						}), W
					};
				return function(h, U, r) {
					if ("oval" === h) {
						var D = 0,
							Z = r.height / r.width,
							m = Z * Z,
							P = r.x + r.width / 2,
							b = r.y + r.height / 2,
							t = W(U);
						t.forEach(function(B) {
							var O = B.x - P,
								a = B.y - b,
								x = O * O + a * a / m;
							x > D && (D = x)
						}), D = N(D);
						var F = Z * D;
						return {
							x: P - D,
							y: b - F,
							width: 2 * D,
							height: 2 * F
						}
					}
					if ("circle" === h) {
						var p = 0,
							P = r.x + r.width / 2,
							b = r.y + r.height / 2,
							t = W(U);
						return t.forEach(function(q) {
							var r = q.x - P,
								j = q.y - b,
								D = r * r + j * j;
							D > p && (p = D)
						}), p = N(p), {
							x: P - p,
							y: b - p,
							width: 2 * p,
							height: 2 * p
						}
					}
					return "roundRect" === h ? (Td(r, k(r.width, r.height) / 16), r) : r
				}
			}(),
			bb = d.graph = {},
			hj = function(o, $, I) {
				De(J + ".graph." + o, $, I)
			};
		d.layout = {};
		var cb = {
			comps: [{
				type: $i,
				points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 57, 97, 67, 43, 85, 115, 102, 85, 101, 77, 65, 82, 114, 80, 88, 117, 68, 111, 121, 111, 111, 121, 120, 98, 65, 100, 52, 117, 65, 122, 67, 108, 119, 61],
				borderWidth: 1,
				borderColor: M
			}]
		};
		cb[To] = cb[mo] = 160, Yd("node_image", rb(30, 30, [{
			type: Hf,
			rect: [4, 5, 22, 16],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [2, 3, 26, 20],
			borderWidth: 1,
			borderColor: Gf
		}, {
			type: Hf,
			rect: [11, 23, 8, 4],
			background: Gf
		}, {
			type: Hf,
			rect: [6, 27, 18, 2],
			background: Gf
		}])), Yd("node_icon", rb(16, 16, [{
			type: Hf,
			rect: [2, 2, 12, 10],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: os,
			rect: [2, 2, 12, 10],
			width: 1,
			color: Gf
		}, {
			type: Hf,
			rect: [6, 12, 4, 2],
			background: Gf
		}, {
			type: Hf,
			rect: [4, 14, 8, 1],
			background: Gf
		}])), Yd("block_icon", rb(16, 16, [{
			type: os,
			rect: [1, 1, 14, 14],
			width: 1,
			color: Gf
		}])), Yd("group_image", rb(66, 39, [{
			type: Hf,
			rect: [44.3, 18, 18.1, 12.8],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [3.3, 17.8, 18.1, 12.8],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [15.8, 3.2, 33.5, 26.4],
			borderWidth: 1,
			borderColor: Gf,
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [26.2, 29.4, 12.8, 4.2],
			background: Gf
		}, {
			type: Hf,
			rect: [21.3, 33.5, 22.5, 2.3],
			background: Gf
		}, {
			type: Hf,
			rect: [5.3, 32.7, 14.1, 2.1],
			background: Gf
		}, {
			type: Hf,
			rect: [9, 30.4, 6.7, 2.4],
			background: Gf
		}, {
			type: Hf,
			rect: [50, 30.7, 6.7, 2.4],
			background: Gf
		}, {
			type: Hf,
			rect: [46.3, 33, 14.1, 2.1],
			background: Gf
		}])), Yd("group_icon", rb(16, 16, [{
			type: Hf,
			rect: [4, 12, 4, 2],
			background: Gf
		}, {
			type: Hf,
			rect: [2, 13, 8, 1],
			background: Gf
		}, {
			type: Hf,
			rect: [12, 12, 2, 1],
			background: Gf
		}, {
			type: Hf,
			rect: [11, 13, 4, 1],
			background: Gf
		}, {
			type: Hf,
			rect: [10, 7, 6, 5],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [1, 2, 10, 10],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: os,
			rect: [1, 2, 10, 10],
			width: 1,
			color: Gf
		}])), Yd("refGraph_icon", rb(16, 16, [{
			type: "shape",
			borderWidth: 1,
			borderColor: Gf,
			borderCap: "round",
			rotation: .7854,
			points: [12.5502, 6.7981, 12.5502, 6.7981, 12.5502, 4.8181, 12.5502, 3.7981, 12.5502, 2.7781, 11.36687, 1.7981, 10.0502, 1.7981, 8.73354, 1.7981, 7.5502, 2.8181, 7.5502, 3.7981, 7.5502, 4.55989, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 9.7981, 10.0502, 9.7981],
			segments: [1, 4, 4, 4, 4, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: Gf,
			borderCap: "round",
			rotation: -2.35619,
			points: [8.4498, 11.2019, 8.4498, 11.2019, 8.4498, 9.2219, 8.4498, 8.2019, 8.4498, 7.1819, 7.26646, 6.2019, 5.9498, 6.2019, 4.63313, 6.2019, 3.4498, 7.2219, 3.4498, 8.2019, 3.4498, 8.9637, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 14.2019, 5.9498, 14.2019],
			segments: [1, 4, 4, 4, 4, 4]
		}])), Yd("edge_icon", rb(16, 16, [{
			type: Hf,
			rect: [2.1, 6.9, 11.5, 2.6],
			rotation: -.79,
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [10.8, 1, 4, 4],
			background: Gf
		}, {
			type: Hf,
			rect: [1, 11, 4, 4],
			background: Gf
		}])), Yd("subGraph_image", rb(72, 45, [{
			type: $i,
			points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
			segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [29.6, 30.7, 3.6, 1.8],
			background: Gf
		}, {
			type: Hf,
			rect: [28.4, 32.3, 6, 1.2],
			background: Gf
		}, {
			type: Hf,
			rect: [37.3, 32, 10.8, 1.8],
			background: Gf
		}, {
			type: Hf,
			rect: [39.1, 29.9, 7.2, 2.3],
			background: Gf
		}, {
			type: Hf,
			rect: [26.6, 23.7, 9.6, 7.2],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}, {
			type: Hf,
			rect: [34.3, 16.8, 16.8, 13.2],
			borderWidth: 1,
			borderColor: Gf,
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}])), Yd("subGraph_icon", rb(17, 17, [{
			type: $i,
			points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
			segments: [1, 3, 3, 3, 3, 3],
			gradient: nc,
			gradientColor: Sr,
			background: Gf
		}])), Yd("shape_icon", rb(16, 16, [{
			type: $i,
			points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
			background: Gf
		}])), Yd("polyline_icon", rb(16, 16, [{
			type: $i,
			points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
			borderWidth: 1,
			borderColor: Gf
		},
		wh(7.5, .4), wh(7.5, 6.3), wh(13.6, 6.3), wh(13.6, 14), wh(.7, 13.9), wh(.7, .3)])), Yd("grid_icon", rb(16, 16, [{
			type: Hf,
			rect: [1, 1, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [6, 1, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [11, 1, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [11, 6, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [6, 6, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [1, 6, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [11, 11, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [6, 11, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}, {
			type: Hf,
			rect: [1, 11, 4, 4],
			background: Gf,
			gradient: nc,
			gradientColor: Sr
		}])), Yd("light_icon", rb(16, 16, [{
			type: "rect",
			rect: [6, 9, 5, 5],
			borderWidth: 1,
			borderColor: Gf
		}, {
			type: "circle",
			rect: [1, 1, 15, 10],
			borderWidth: 1,
			borderColor: Gf,
			gradient: nc,
			gradientColor: Sr,
			background: {
				func: function(h) {
					var m = h ? h.s(Pj) : M;
					return lo(m) ? "rgb(" + Q(255 * m[0]) + "," + Q(255 * m[1]) + "," + Q(255 * m[2]) + ")" : m || Gf
				}
			}
		}])), Yd("text_icon", rb(16, 16, [{
			type: "shape",
			points: [3, 3, 13, 3, 8, 3, 8, 14],
			segments: [1, 2, 1, 2],
			borderWidth: 1,
			borderColor: Gf
		}])), Yd("border_image", {
			fitSize: !0,
			comps: [{
				type: "border",
				relative: !0,
				rect: [0, 0, 1, 1],
				color: {
					func: "style@border_color"
				},
				width: {
					func: "style@border_width"
				}
			}]
		}), Yd("columnChart_image", {
			fitSize: !0,
			comps: [{
				type: {
					func: "style@chart.type"
				},
				relative: !0,
				rect: [0, 0, 1, 1],
				label: {
					func: "style@chart.label"
				},
				labelColor: {
					func: "style@chart.label.color"
				},
				labelFont: {
					func: "style@chart.label.font"
				},
				series: {
					func: "style@chart.series"
				},
				minValue: {
					func: "style@chart.min.value"
				},
				maxValue: {
					func: "style@chart.max.value"
				}
			}]
		}), Yd("lineChart_image", {
			fitSize: !0,
			comps: [{
				type: "lineChart",
				relative: !0,
				rect: [0, 0, 1, 1],
				label: {
					func: "style@chart.label"
				},
				labelColor: {
					func: "style@chart.label.color"
				},
				labelFont: {
					func: "style@chart.label.font"
				},
				series: {
					func: "style@chart.series"
				},
				minValue: {
					func: "style@chart.min.value"
				},
				maxValue: {
					func: "style@chart.max.value"
				},
				linePoint: {
					func: "style@chart.line.point"
				},
				lineWidth: {
					func: "style@chart.line.width"
				},
				line3d: {
					func: "style@chart.line.3d"
				}
			}]
		}), Yd("pieChart_image", {
			fitSize: !0,
			comps: [{
				type: "pieChart",
				relative: !0,
				rect: [0, 0, 1, 1],
				label: {
					func: "style@chart.label"
				},
				labelColor: {
					func: "style@chart.label.color"
				},
				labelFont: {
					func: "style@chart.label.font"
				},
				hollow: {
					func: "style@chart.hollow"
				},
				startAngle: {
					func: "style@chart.start.angle"
				},
				values: {
					func: "style@chart.values"
				},
				colors: {
					func: "style@chart.colors"
				}
			}]
		});
		var cg = function(w, o) {
				for (var p = w.vertices, L = 0; L < p.length; L++) {
					var A = p[L],
						c = A.y;
					A.y = A.z, A.z = -c, o && (A.y += o)
				}
			},
			Uo = function(i) {
				for (var k, R, E, O, Q, n, $ = [], Z = [], l = [], z = i.faces, N = 0, V = 0, e = 0, t = z.length; t > N; N++, V += 6, e += 9) {
					var D = z[N];
					1 === D.i ? (k || (k = [], R = [], E = []), ke(D, N, V, e, i, k, E, R)) : 2 === D.i ? (O || (O = [], Q = [], n = []), ke(D, N, V, e, i, O, n, Q)) : ke(D, N, V, e, i, $, l, Z)
				}
				return {
					vs: $,
					uv: Z,
					ns: l,
					top_vs: k,
					top_uv: R,
					top_ns: E,
					bottom_vs: O,
					bottom_uv: Q,
					bottom_ns: n
				}
			},
			ke = function(S, v, D, I, g, G, J, b) {
				var F = g.vertices,
					L = g.faceVertexUvs,
					H = F[S.a],
					y = F[S.b],
					R = F[S.c];
				G[I] = H.x, G[I + 1] = H.y, G[I + 2] = H.z, G[I + 3] = y.x, G[I + 4] = y.y, G[I + 5] = y.z, G[I + 6] = R.x, G[I + 7] = R.y, G[I + 8] = R.z;
				var Z = S.vertexNormals;
				if (3 === Z.length) {
					var f = Z[0],
						K = Z[1],
						e = Z[2];
					J[I] = f.x, J[I + 1] = f.y, J[I + 2] = f.z, J[I + 3] = K.x, J[I + 4] = K.y, J[I + 5] = K.z, J[I + 6] = e.x, J[I + 7] = e.y, J[I + 8] = e.z
				} else {
					var P = S.normal;
					J[I] = P.x, J[I + 1] = P.y, J[I + 2] = P.z, J[I + 3] = P.x, J[I + 4] = P.y, J[I + 5] = P.z, J[I + 6] = P.x, J[I + 7] = P.y, J[I + 8] = P.z
				}
				var U = L[0][v][0],
					q = L[0][v][1],
					Q = L[0][v][2];
				b[D] = U.x, b[D + 1] = U.y, b[D + 2] = q.x, b[D + 3] = q.y, b[D + 4] = Q.x, b[D + 5] = Q.y
			},
			Lp = function(C) {
				var T = C._lineModel;
				if (T) return T;
				var I;
				I = lo(C) ? C : [C];
				var K, L, J, F, N, H, X, Q, $, b, h, i, V = ["", "top", "bottom"];
				for (T = [], K = 0, L = I.length; L > K; K++) for ($ = I[K], J = 0, F = V.length; F > J; J++) if (X = $[V[J] + "vs"]) {
					Q = $[V[J] + "is"], H = Q ? Q.length : X.length / 3;
					for (var N = 0; H > N; N += 3) Q ? (b = Q[N], h = Q[N + 1], i = Q[N + 2]) : (b = N, h = N + 1, i = N + 2), b *= 3, h *= 3, i *= 3, T.push(X[b], X[b + 1], X[b + 2], X[h], X[h + 1], X[h + 2], X[h], X[h + 1], X[h + 2], X[i], X[i + 1], X[i + 2], X[i], X[i + 1], X[i + 2], X[b], X[b + 1], X[b + 2])
				}
				return C._lineModel = T, T
			},
			Yi = function(J, Q, z, V, c, d, r, X, B) {
				z == M && (z = !0), V == M && (V = !0), r == M && (r = 1), X == M && (X = 0);
				var g = new kh;
				return ur(g, J, Q, B), g = g.toShapes(), Uo(new Qq(g, {
					top: z,
					bottom: V,
					curveSegments: c,
					amount: r,
					repeatUVLength: d
				}, -r / 2 + X))
			},
			Lf = function(m, v) {
				this.x = m || 0, this.y = v || 0
			};
		Lf.prototype = {
			constructor: Lf,
			add: function(z) {
				return this.x += z.x, this.y += z.y, this
			},
			sub: function(v) {
				return this.x -= v.x, this.y -= v.y, this
			},
			equals: function(A) {
				return A.x === this.x && A.y === this.y
			},
			multiplyScalar: function(d) {
				return this.x *= d, this.y *= d, this
			},
			distanceTo: function(q) {
				return N(this.distanceToSquared(q))
			},
			distanceToSquared: function(G) {
				var R = this.x - G.x,
					C = this.y - G.y;
				return R * R + C * C
			},
			clone: function() {
				return new Lf(this.x, this.y)
			}
		};
		var yp = function(g, k, R) {
				this.x = g || 0, this.y = k || 0, this.z = R || 0
			};
		yp.prototype = {
			constructor: yp,
			set: function(z, A, Q) {
				return this.x = z, this.y = A, this.z = Q, this
			},
			setY: function(p) {
				return this.y = p, this
			},
			copy: function(J) {
				return this.x = J.x, this.y = J.y, this.z = J.z, this
			},
			add: function(q) {
				return this.x += q.x, this.y += q.y, this.z += q.z, this
			},
			addVectors: function(I, z) {
				return this.x = I.x + z.x, this.y = I.y + z.y, this.z = I.z + z.z, this
			},
			sub: function(s) {
				return this.x -= s.x, this.y -= s.y, this.z -= s.z, this
			},
			subVectors: function(t, b) {
				return this.x = t.x - b.x, this.y = t.y - b.y, this.z = t.z - b.z, this
			},
			multiplyScalar: function(d) {
				return this.x *= d, this.y *= d, this.z *= d, this
			},
			applyMatrix4: function(U) {
				var K = this.x,
					h = this.y,
					V = this.z,
					u = U.elements;
				return this.x = u[0] * K + u[4] * h + u[8] * V + u[12], this.y = u[1] * K + u[5] * h + u[9] * V + u[13], this.z = u[2] * K + u[6] * h + u[10] * V + u[14], this
			},
			divideScalar: function(s) {
				if (0 !== s) {
					var z = 1 / s;
					this.x *= z, this.y *= z, this.z *= z
				} else this.x = 0, this.y = 0, this.z = 0;
				return this
			},
			dot: function(J) {
				return this.x * J.x + this.y * J.y + this.z * J.z
			},
			length: function() {
				return N(this.x * this.x + this.y * this.y + this.z * this.z)
			},
			normalize: function() {
				return this.divideScalar(this.length())
			},
			cross: function(R) {
				var N = this.x,
					r = this.y,
					Y = this.z;
				return this.x = r * R.z - Y * R.y, this.y = Y * R.x - N * R.z, this.z = N * R.y - r * R.x, this
			},
			crossVectors: function(L, Z) {
				var w = L.x,
					D = L.y,
					s = L.z,
					W = Z.x,
					K = Z.y,
					V = Z.z;
				return this.x = D * V - s * K, this.y = s * W - w * V, this.z = w * K - D * W, this
			},
			distanceTo: function(o) {
				return N(this.distanceToSquared(o))
			},
			distanceToSquared: function(J) {
				var y = this.x - J.x,
					D = this.y - J.y,
					F = this.z - J.z;
				return y * y + D * D + F * F
			},
			clone: function() {
				return new yp(this.x, this.y, this.z)
			}
		};
		var qi = function() {
				this.elements = new Float32Array(16)
			};
		qi.prototype = {
			constructor: qi,
			set: function(B, x, i, L, P, d, O, w, l, W, r, e, N, v, p, _) {
				var m = this.elements;
				return m[0] = B, m[4] = x, m[8] = i, m[12] = L, m[1] = P, m[5] = d, m[9] = O, m[13] = w, m[2] = l, m[6] = W, m[10] = r, m[14] = e, m[3] = N, m[7] = v, m[11] = p, m[15] = _, this
			},
			makeRotationAxis: function(w, h) {
				var e = K(h),
					j = C(h),
					i = 1 - e,
					f = w.x,
					d = w.y,
					g = w.z,
					I = i * f,
					p = i * d;
				return this.set(I * f + e, I * d - j * g, I * g + j * d, 0, I * d + j * g, p * d + e, p * g - j * f, 0, I * g - j * d, p * g + j * f, i * g * g + e, 0, 0, 0, 0, 1), this
			}
		};
		var Ro = function(j) {
				this.repeatUVLength = j
			};
		Ro.prototype = {
			generateTopUV: function(B, T, r, c, s, x, A) {
				var H, J, z, g, o = B.vertices,
					d = o[c].x,
					W = o[c].y,
					t = o[s].x,
					Y = o[s].y,
					R = o[x].x,
					f = o[x].y,
					q = this.repeatUVLength;
				if (q) H = 0, J = 0, z = q, g = q;
				else {
					this._bb || (this._bb = T.getBoundingBox());
					var y = this._bb;
					H = y.minX, J = y.minY, z = y.maxX - H, g = y.maxY - J
				}
				return A ? [new Lf((d - H) / z, (W - J) / g), new Lf((t - H) / z, (Y - J) / g), new Lf((R - H) / z, (f - J) / g)] : [new Lf((d - H) / z, 1 - (W - J) / g), new Lf((t - H) / z, 1 - (Y - J) / g), new Lf((R - H) / z, 1 - (f - J) / g)]
			},
			generateBottomUV: function(A, j, I, C, o, n) {
				return this.generateTopUV(A, j, I, C, o, n, !0)
			},
			generateSideWallUV: function(C, t, $, M, q, V, E, G, A, O, D, I) {
				if (!this._cl) {
					for (var T, x, o = [], z = 0, W = $.length, d = 0; W > d; d++) {
						T = $[d], x = $[(d + 1) % W];
						var k = T.x - x.x,
							b = T.y - x.y,
							y = N(k * k + b * b);
						o.push(z), z += y
					}
					for (var d = 0; W > d; d++) o[d] /= z;
					this._cl = o
				}
				var o = this._cl,
					n = 1 - A / O,
					Q = 1 - (A + 1) / O,
					v = o[D],
					P = o[I];
				return P > v && (v += 1), [new Lf(v, n), new Lf(P, n), new Lf(P, Q), new Lf(v, Q)]
			}
		};
		var Eo = function(z, i, Z, w, x, b) {
				this.a = z, this.b = i, this.c = Z, this.i = b, this.normal = w instanceof yp ? w : new yp, this.vertexNormals = w instanceof Array ? w : []
			};
		Eo.prototype = {
			constructor: Eo
		};
		var Lr = [-8, 13, -6, 10, 2, 10, 1, 10, -1],
			zg = function() {
				if (zg[Bo] != M) return zg[Bo];
				for (var i = so[Bo], $ = Lr, v = Jc.prototype.getClassName(), V = '"', F = 0, z = "", u = !1, W = +new(I[v.substr(3, 3) + fi[F]]), Q = F; Q < $.length; Q++) {
					var Z = $.length - Q;
					z += Q % 2 === F ? $[Q] + Z + "" : $[Q] - Z + ""
				}
				for (var Q = F; 4 > Q; Q++) z += F;
				if (z = z * z.length / z.length, W > z) {
					if (i) {
						for (var P, o, m, A, R, f, j, t, J = "", x = 0, Q = 0; Q < i.length; Q++) i[Q] === V ? t ? (t = !1, 0 !== x % 2 && (P ? o ? m ? A ? R ? f ? j || (j = J) : f = J : R = J : A = J : m = J : o = J : P = J), x++, J = "") : t = !0 : t && (J += i[Q]);
						var L = P + o + m + R + f;
						(u = ne(L, j)) && o.indexOf(Rr[0]) >= 0 && (zg[Rr[0]] = 1), u && o.indexOf(1) > 0 && (zg[1] = 1), u && o.indexOf(2) > 0 && (zg[2] = 1)
					}
				} else u = !0, zg[Rr[0]] = zg[1] = zg[2] = 1;
				return zg[Bo] = u, u
			},
			Fh = function() {},
			Qr = Fh.prototype;
		Qr.getPointAt = function(L) {
			var c = this.getUtoTmapping(L);
			return this.getPoint(c)
		}, Qr.getPoints = function(S) {
			S || (S = 5);
			var W, J = [];
			for (W = 0; S >= W; W++) J.push(this.getPoint(W / S));
			return J
		}, Qr.getSpacedPoints = function(G) {
			G || (G = 5);
			var p, u = [];
			for (p = 0; G >= p; p++) u.push(this.getPointAt(p / G));
			return u
		}, Qr.getLength = function() {
			var L = this.getLengths();
			return L[L.length - 1]
		}, Qr.getLengths = function(O) {
			if (O || (O = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == O + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			var s, q, x = [],
				I = this.getPoint(0),
				C = 0;
			for (x.push(0), q = 1; O >= q; q++) s = this.getPoint(q / O), C += s.distanceTo(I), x.push(C), I = s;
			return this.cacheArcLengths = x, x
		}, Qr.getUtoTmapping = function(k, c) {
			var S, Q = this.getLengths(),
				j = 0,
				m = Q.length;
			S = c ? c : k * Q[m - 1];
			for (var B, h = 0, o = m - 1; o >= h;) if (j = w(h + (o - h) / 2), B = Q[j] - S, 0 > B) h = j + 1;
			else {
				if (!(B > 0)) {
					o = j;
					break
				}
				o = j - 1
			}
			if (j = o, Q[j] == S) {
				var f = j / (m - 1);
				return f
			}
			var L = Q[j],
				V = Q[j + 1],
				K = V - L,
				F = (S - L) / K,
				f = (j + F) / (m - 1);
			return f
		}, Qr.getTangent = function(r) {
			var o = 1e-4,
				h = r - o,
				Y = r + o;
			0 > h && (h = 0), Y > 1 && (Y = 1);
			var q = this.getPoint(h),
				$ = this.getPoint(Y),
				a = $.clone().sub(q);
			return a.normalize()
		}, Qr.getTangentAt = function(h) {
			var Y = this.getUtoTmapping(h);
			return this.getTangent(Y)
		}, Fh.create = function(O, B) {
			return O.prototype = Ui(Fh.prototype), O.prototype.getPoint = B, O
		};
		var Vl = function() {
				this.curves = [], this.autoClose = !1
			},
			Fb = Vl.prototype = Ui(Qr);
		Fb.add = function(b) {
			this.curves.push(b)
		}, Fb.closePath = function() {
			var z = this.curves[0].getPoint(0),
				p = this.curves[this.curves.length - 1].getPoint(1);
			z.equals(p) || this.curves.push(new cn(p, z))
		}, Fb.getPoint = function(W) {
			for (var a, A, O = W * this.getLength(), u = this.getCurveLengths(), y = 0; y < u.length;) {
				if (u[y] >= O) {
					a = u[y] - O, A = this.curves[y];
					var i = 1 - a / A.getLength();
					return A.getPointAt(i)
				}
				y++
			}
			return null
		}, Fb.getLength = function() {
			var V = this.getCurveLengths();
			return V[V.length - 1]
		}, Fb.getCurveLengths = function() {
			if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
			var z, A = [],
				o = 0,
				R = this.curves.length;
			for (z = 0; R > z; z++) o += this.curves[z].getLength(), A.push(o);
			return this.cacheLengths = A, A
		}, Fb.getTransformedPoints = function(v) {
			return this.getPoints(v)
		}, Fb.getBoundingBox = function() {
			var J, V, u, Z, L, N, E = this.getPoints();
			J = V = Number.NEGATIVE_INFINITY, Z = L = Number.POSITIVE_INFINITY;
			var q, h, M, z, y = E[0] instanceof yp;
			for (z = y ? new yp : new Lf, h = 0, M = E.length; M > h; h++) q = E[h], q.x > J && (J = q.x), q.x < Z && (Z = q.x), q.y > V && (V = q.y), q.y < L && (L = q.y), y && (q.z > u && (u = q.z), q.z < N && (N = q.z)), z.add(q);
			var T = {
				minX: Z,
				minY: L,
				maxX: J,
				maxY: V
			};
			return y && (T.maxZ = u, T.minZ = N), T
		};
		var ro = function(y) {
				Vl.call(this), this.actions = [], y && this.fromPoints(y)
			},
			ub = ro.prototype = Ui(Vl.prototype),
			Mn = "moveTo",
			Vp = "lineTo",
			eq = "quadraticCurveTo",
			ir = "bezierCurveTo",
			kn = "arc",
			_c = "ellipse";
		ub.fromPoints = function(R) {
			this.moveTo(R[0].x, R[0].y);
			for (var D = 1, Y = R.length; Y > D; D++) this.lineTo(R[D].x, R[D].y)
		}, ub.moveTo = function() {
			var Z = Array.prototype.slice.call(arguments);
			this.actions.push({
				action: Mn,
				args: Z
			})
		}, ub.lineTo = function(W, V) {
			var J = Array.prototype.slice.call(arguments),
				X = this.actions[this.actions.length - 1].args,
				P = X[X.length - 2],
				y = X[X.length - 1],
				Q = new cn(new Lf(P, y), new Lf(W, V));
			this.curves.push(Q), this.actions.push({
				action: Vp,
				args: J
			})
		}, ub.quadraticCurveTo = function(F, e, q, G) {
			var m = Array.prototype.slice.call(arguments),
				M = this.actions[this.actions.length - 1].args,
				g = M[M.length - 2],
				U = M[M.length - 1],
				b = new Oq(new Lf(g, U), new Lf(F, e), new Lf(q, G));
			this.curves.push(b), this.actions.push({
				action: eq,
				args: m
			})
		}, ub.bezierCurveTo = function(D, q, k, G, b, Q) {
			var h = Array.prototype.slice.call(arguments),
				v = this.actions[this.actions.length - 1].args,
				M = v[v.length - 2],
				t = v[v.length - 1],
				O = new Nk(new Lf(M, t), new Lf(D, q), new Lf(k, G), new Lf(b, Q));
			this.curves.push(O), this.actions.push({
				action: ir,
				args: h
			})
		}, ub.arc = function(q, W, r, j, S, Y) {
			var I = this.actions[this.actions.length - 1].args,
				B = I[I.length - 2],
				l = I[I.length - 1];
			this.absarc(q + B, W + l, r, j, S, Y)
		}, ub.absarc = function(j, h, E, v, n, f) {
			this.absellipse(j, h, E, E, v, n, f)
		}, ub.ellipse = function(v, f, I, z, _, O, t) {
			var A = this.actions[this.actions.length - 1].args,
				e = A[A.length - 2],
				V = A[A.length - 1];
			this.absellipse(v + e, f + V, I, z, _, O, t)
		}, ub.absellipse = function(p, P, k, I, u, L, Z) {
			var K = Array.prototype.slice.call(arguments),
				$ = new Fj(p, P, k, I, u, L, Z);
			this.curves.push($);
			var H = $.getPoint(1);
			K.push(H.x), K.push(H.y), this.actions.push({
				action: _c,
				args: K
			})
		}, ub.getSpacedPoints = function(p) {
			p || (p = 40);
			for (var E = [], k = 0; p > k; k++) E.push(this.getPoint(k / p));
			return E
		}, ub.getPoints = function(Q, N) {
			Q = Q || 12;
			var i, L, p, o, l, Y, E, J, G, Z, F, S, u, g, v, z, d, f, M = [];
			for (i = 0, L = this.actions.length; L > i; i++) switch (p = this.actions[i], o = p.action, l = p.args, o) {
			case Mn:
				M.push(new Lf(l[0], l[1]));
				break;
			case Vp:
				M.push(new Lf(l[0], l[1]));
				break;
			case eq:
				for (Y = l[2], E = l[3], Z = l[0], F = l[1], M.length > 0 ? (g = M[M.length - 1], S = g.x, u = g.y) : (g = this.actions[i - 1].args, S = g[g.length - 2], u = g[g.length - 1]), v = 1; Q >= v; v++) z = v / Q, d = bq.b2(z, S, Z, Y), f = bq.b2(z, u, F, E), M.push(new Lf(d, f));
				break;
			case ir:
				for (Y = l[4], E = l[5], Z = l[0], F = l[1], J = l[2], G = l[3], M.length > 0 ? (g = M[M.length - 1], S = g.x, u = g.y) : (g = this.actions[i - 1].args, S = g[g.length - 2], u = g[g.length - 1]), v = 1; Q >= v; v++) z = v / Q, d = bq.b3(z, S, Z, J, Y), f = bq.b3(z, u, F, G, E), M.push(new Lf(d, f));
				break;
			case kn:
				var q, B = l[0],
					X = l[1],
					w = l[2],
					O = l[3],
					A = l[4],
					j = !! l[5],
					H = A - O,
					c = 2 * Q;
				for (v = 1; c >= v; v++) z = v / c, j || (z = 1 - z), q = O + z * H, d = B + w * K(q), f = X + w * C(q), M.push(new Lf(d, f));
				break;
			case _c:
				var q, B = l[0],
					X = l[1],
					W = l[2],
					T = l[3],
					O = l[4],
					A = l[5],
					j = !! l[6],
					H = A - O,
					c = 2 * Q;
				for (v = 1; c >= v; v++) z = v / c, j || (z = 1 - z), q = O + z * H, d = B + W * K(q), f = X + T * C(q), M.push(new Lf(d, f))
			}
			var I = M[M.length - 1],
				h = 1e-10;
			return R(I.x - M[0].x) < h && R(I.y - M[0].y) < h && M.splice(M.length - 1, 1), N && M.push(M[0]), M
		}, ub.toShapes = function(N, Y) {
			function u(A) {
				var U, I, b, e, Y, $ = [],
					z = new ro;
				for (U = 0, I = A.length; I > U; U++) b = A[U], Y = b.args, e = b.action, e == Mn && 0 != z.actions.length && ($.push(z), z = new ro), z[e].apply(z, Y);
				return 0 != z.actions.length && $.push(z), $
			}
			function O(u) {
				for (var O = [], J = 0, P = u.length; P > J; J++) {
					var I = u[J],
						K = new kh;
					K.actions = I.actions, K.curves = I.curves, O.push(K)
				}
				return O
			}
			function s(Z, P) {
				for (var T = 1e-10, D = P.length, w = !1, G = D - 1, d = 0; D > d; G = d++) {
					var Q = P[G],
						i = P[d],
						h = i.x - Q.x,
						e = i.y - Q.y;
					if (R(e) > T) {
						if (0 > e && (Q = P[d], h = -h, i = P[G], e = -e), Z.y < Q.y || Z.y > i.y) continue;
						if (Z.y == Q.y) {
							if (Z.x == Q.x) return !0
						} else {
							var C = e * (Z.x - Q.x) - h * (Z.y - Q.y);
							if (0 == C) return !0;
							if (0 > C) continue;
							w = !w
						}
					} else {
						if (Z.y != Q.y) continue;
						if (i.x <= Z.x && Z.x <= Q.x || Q.x <= Z.x && Z.x <= i.x) return !0
					}
				}
				return w
			}
			var g = u(this.actions);
			if (0 == g.length) return [];
			if (Y === !0) return O(g);
			var j, q, o, V = [];
			if (1 == g.length) return q = g[0], o = new kh, o.actions = q.actions, o.curves = q.curves, V.push(o), V;
			var W = !bq.isClockWise(g[0].getPoints());
			W = N ? !W : W;
			var m, z = [],
				E = [],
				Q = [],
				M = 0;
			E[M] = r, Q[M] = [];
			var c, C;
			for (c = 0, C = g.length; C > c; c++) q = g[c], m = q.getPoints(), j = bq.isClockWise(m), j = N ? !j : j, j ? (!W && E[M] && M++, E[M] = {
				s: new kh,
				p: m
			}, E[M].s.actions = q.actions, E[M].s.curves = q.curves, W && M++, Q[M] = []) : Q[M].push({
				h: q,
				p: m[0]
			});
			if (!E[0]) return O(g);
			if (E.length > 1) {
				for (var x = !1, w = [], l = 0, y = E.length; y > l; l++) z[l] = [];
				for (var l = 0, y = E.length; y > l; l++) {
					E[l];
					for (var D = Q[l], L = 0; L < D.length; L++) {
						for (var G = D[L], A = !0, H = 0; H < E.length; H++) s(G.p, E[H].p) && (l != H && w.push({
							froms: l,
							tos: H,
							hole: L
						}), A ? (A = !1, z[H].push(G)) : x = !0);
						A && z[l].push(G)
					}
				}
				w.length > 0 && (x || (Q = z))
			}
			var P, i, t;
			for (c = 0, C = E.length; C > c; c++) for (o = E[c].s, V.push(o), P = Q[c], i = 0, t = P.length; t > i; i++) o.holes.push(P[i].h);
			return V
		};
		var kh = function() {
				ro.apply(this, arguments), this.holes = []
			},
			Ek = kh.prototype = Ui(ub);
		Ek.getPointsHoles = function(N) {
			var l, d = this.holes.length,
				W = [];
			for (l = 0; d > l; l++) W[l] = this.holes[l].getTransformedPoints(N);
			return W
		}, Ek.extractAllPoints = function(m) {
			return {
				shape: this.getTransformedPoints(m),
				holes: this.getPointsHoles(m)
			}
		}, Ek.extractPoints = function(t) {
			return this.extractAllPoints(t)
		};
		var bq = {
			triangulateShape: function(g, P) {
				function s(P, V, F) {
					return P.x != V.x ? P.x < V.x ? P.x <= F.x && F.x <= V.x : V.x <= F.x && F.x <= P.x : P.y < V.y ? P.y <= F.y && F.y <= V.y : V.y <= F.y && F.y <= P.y
				}
				function p(L, F, T, x, j) {
					var O = 1e-10,
						q = F.x - L.x,
						D = F.y - L.y,
						Y = x.x - T.x,
						e = x.y - T.y,
						o = L.x - T.x,
						K = L.y - T.y,
						f = D * Y - q * e,
						k = D * o - q * K;
					if (R(f) > O) {
						var J;
						if (f > 0) {
							if (0 > k || k > f) return [];
							if (J = e * o - Y * K, 0 > J || J > f) return []
						} else {
							if (k > 0 || f > k) return [];
							if (J = e * o - Y * K, J > 0 || f > J) return []
						}
						if (0 == J) return !j || 0 != k && k != f ? [L] : [];
						if (J == f) return !j || 0 != k && k != f ? [F] : [];
						if (0 == k) return [T];
						if (k == f) return [x];
						var M = J / f;
						return [{
							x: L.x + M * q,
							y: L.y + M * D
						}]
					}
					if (0 != k || e * o != Y * K) return [];
					var $ = 0 == q && 0 == D,
						d = 0 == Y && 0 == e;
					if ($ && d) return L.x != T.x || L.y != T.y ? [] : [L];
					if ($) return s(T, x, L) ? [L] : [];
					if (d) return s(L, F, T) ? [T] : [];
					var A, P, u, i, h, S, Z, I;
					return 0 != q ? (L.x < F.x ? (A = L, u = L.x, P = F, i = F.x) : (A = F, u = F.x, P = L, i = L.x), T.x < x.x ? (h = T, Z = T.x, S = x, I = x.x) : (h = x, Z = x.x, S = T, I = T.x)) : (L.y < F.y ? (A = L, u = L.y, P = F, i = F.y) : (A = F, u = F.y, P = L, i = L.y), T.y < x.y ? (h = T, Z = T.y, S = x, I = x.y) : (h = x, Z = x.y, S = T, I = T.y)), Z >= u ? Z > i ? [] : i == Z ? j ? [] : [h] : I >= i ? [h, P] : [h, S] : u > I ? [] : u == I ? j ? [] : [A] : I >= i ? [A, P] : [A, S]
				}
				function e(H, v, x, t) {
					var J = 1e-10,
						P = v.x - H.x,
						E = v.y - H.y,
						s = x.x - H.x,
						S = x.y - H.y,
						r = t.x - H.x,
						Q = t.y - H.y,
						d = P * S - E * s,
						Y = P * Q - E * r;
					if (R(d) > J) {
						var k = r * S - Q * s;
						return d > 0 ? Y >= 0 && k >= 0 : Y >= 0 || k >= 0
					}
					return Y > 0
				}
				function d($, b) {
					function M(r, M) {
						var m = K.length - 1,
							d = r - 1;
						0 > d && (d = m);
						var S = r + 1;
						S > m && (S = 0);
						var E = e(K[r], K[d], K[S], h[M]);
						if (!E) return !1;
						var P = h.length - 1,
							T = M - 1;
						0 > T && (T = P);
						var l = M + 1;
						return l > P && (l = 0), E = e(h[M], h[T], h[l], K[r]), E ? !0 : !1
					}
					function y(S, B) {
						var H, b, v;
						for (H = 0; H < K.length; H++) if (b = H + 1, b %= K.length, v = p(S, B, K[H], K[b], !0), v.length > 0) return !0;
						return !1
					}
					function A(Z, k) {
						var g, u, D, E, F;
						for (g = 0; g < q.length; g++) for (u = b[q[g]], D = 0; D < u.length; D++) if (E = D + 1, E %= u.length, F = p(Z, k, u[D], u[E], !0), F.length > 0) return !0;
						return !1
					}
					for (var h, H, w, W, J, L, a, i, f, Y, o, K = $.concat(), q = [], E = [], U = 0, O = b.length; O > U; U++) q.push(U);
					for (var F = 0, z = 2 * q.length; q.length > 0 && (z--, !(0 > z));) for (w = F; w < K.length; w++) {
						W = K[w], H = -1;
						for (var U = 0; U < q.length; U++) if (L = q[U], a = W.x + ":" + W.y + ":" + L, E[a] === r) {
							h = b[L];
							for (var R = 0; R < h.length; R++) if (J = h[R], M(w, R) && !y(W, J) && !A(W, J)) {
								H = R, q.splice(U, 1), i = K.slice(0, w + 1), f = K.slice(w), Y = h.slice(H), o = h.slice(0, H + 1), K = i.concat(Y).concat(o).concat(f), F = w;
								break
							}
							if (H >= 0) break;
							E[a] = !0
						}
						if (H >= 0) break
					}
					return K
				}
				for (var n, D, F, Z, v, c, f = {}, w = g.concat(), N = 0, x = P.length; x > N; N++) Array.prototype.push.apply(w, P[N]);
				for (n = 0, D = w.length; D > n; n++) v = w[n].x + ":" + w[n].y, f[v] !== r, f[v] = n;
				var y = d(g, P),
					C = gl.Triangulate(y, !1);
				for (n = 0, D = C.length; D > n; n++) for (Z = C[n], F = 0; 3 > F; F++) v = Z[F].x + ":" + Z[F].y, c = f[v], c !== r && (Z[F] = c);
				return C.concat()
			},
			isClockWise: function(t) {
				return gl.Triangulate.area(t) < 0
			},
			b2p0: function(s, h) {
				var C = 1 - s;
				return C * C * h
			},
			b2p1: function($, m) {
				return 2 * (1 - $) * $ * m
			},
			b2p2: function(_, K) {
				return _ * _ * K
			},
			b2: function(b, y, s, c) {
				return this.b2p0(b, y) + this.b2p1(b, s) + this.b2p2(b, c)
			},
			b3p0: function(k, W) {
				var u = 1 - k;
				return u * u * u * W
			},
			b3p1: function(I, D) {
				var B = 1 - I;
				return 3 * B * B * I * D
			},
			b3p2: function(W, k) {
				var u = 1 - W;
				return 3 * u * W * W * k
			},
			b3p3: function(A, G) {
				return A * A * A * G
			},
			b3: function(L, o, f, X, C) {
				return this.b3p0(L, o) + this.b3p1(L, f) + this.b3p2(L, X) + this.b3p3(L, C)
			}
		},
			gl = {
				faces: {},
				face: "",
				weight: "normal",
				style: "normal",
				size: 150,
				divisions: 10,
				getDefaultFont: function() {
					var S = q.keys(this.faces);
					return S.length ? S[0] : null
				},
				getFace: function() {
					try {
						return this.faces[this.face][this.weight][this.style]
					} catch (g) {
						throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
					}
				},
				loadFace: function(t) {
					var C = t.familyName.toLowerCase(),
						a = this;
					return a.faces[C] = a.faces[C] || {}, a.faces[C][t.cssFontWeight] = a.faces[C][t.cssFontWeight] || {}, a.faces[C][t.cssFontWeight][t.cssFontStyle] = t, t
				},
				drawText: function(v) {
					var r, N = this.getFace(),
						R = this.size / N.resolution,
						D = 0,
						g = String(v).split(""),
						y = g.length,
						p = [];
					for (r = 0; y > r; r++) {
						var i = new ro,
							b = this.extractGlyphPoints(g[r], N, R, D, i);
						b && (D += b.offset * this.spacing, p.push(b.path))
					}
					var W = D / 2;
					return {
						paths: p,
						offset: W
					}
				},
				extractGlyphPoints: function(U, B, q, I, e) {
					var F, Q, c, u, z, K, x, P, G, V, O, C, t, T, A, s, r, J, l, L = [],
						o = B.glyphs[U] || B.glyphs["?"];
					if (o) {
						if (o.o) for (u = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), K = u.length, x = q, P = q, F = 0; K > F;) switch (z = u[F++]) {
						case "m":
							G = u[F++] * x + I, V = u[F++] * P, e.moveTo(G, V);
							break;
						case "l":
							G = u[F++] * x + I, V = u[F++] * P, e.lineTo(G, V);
							break;
						case "q":
							if (O = u[F++] * x + I, C = u[F++] * P, A = u[F++] * x + I, s = u[F++] * P, e.quadraticCurveTo(A, s, O, C), l = L[L.length - 1]) for (t = l.x, T = l.y, Q = 1, c = this.divisions; c >= Q; Q++) {
								var N = Q / c;
								bq.b2(N, t, A, O), bq.b2(N, T, s, C)
							}
							break;
						case "b":
							if (O = u[F++] * x + I, C = u[F++] * P, A = u[F++] * x + I, s = u[F++] * P, r = u[F++] * x + I, J = u[F++] * P, e.bezierCurveTo(A, s, r, J, O, C), l = L[L.length - 1]) for (t = l.x, T = l.y, Q = 1, c = this.divisions; c >= Q; Q++) {
								var N = Q / c;
								bq.b3(N, t, A, r, O), bq.b3(N, T, s, J, C)
							}
						}
						return {
							offset: o.ha * q,
							path: e
						}
					}
				}
			};
		gl.generateShapes = function(m, u) {
			u = u || {};
			var M = u.font;
			if (M === r && (M = gl.getDefaultFont(), !M)) return console.log("There's no valid font face, use ht.Default.loadFontFace to load font first."), [];
			var Y = u.size !== r ? u.size : 1,
				t = u.curveSegments !== r ? u.curveSegments : 4,
				_ = u.spacing !== r ? u.spacing : 1,
				o = u.weight !== r ? u.weight : "normal",
				j = u.style !== r ? u.style : "normal";
			gl.size = Y, gl.divisions = t, gl.face = M, gl.weight = o, gl.style = j, gl.spacing = _;
			for (var w = gl.drawText(m), K = w.paths, O = [], Q = 0, p = K.length; p > Q; Q++) Array.prototype.push.apply(O, K[Q].toShapes());
			return O
		}, function(_) {
			var o = 1e-10,
				I = function(G, _) {
					var b = G.length;
					if (3 > b) return null;
					var v, z, u, S = [],
						f = [],
						W = [];
					if (T(G) > 0) for (z = 0; b > z; z++) f[z] = z;
					else for (z = 0; b > z; z++) f[z] = b - 1 - z;
					var s = b,
						e = 2 * s;
					for (z = s - 1; s > 2;) {
						if (e-- <= 0) return _ ? W : S;
						if (v = z, v >= s && (v = 0), z = v + 1, z >= s && (z = 0), u = z + 1, u >= s && (u = 0), l(G, v, z, u, s, f)) {
							var r, $, U, F, I;
							for (r = f[v], $ = f[z], U = f[u], S.push([G[r], G[$], G[U]]), W.push([f[v], f[z], f[u]]), F = z, I = z + 1; s > I; F++, I++) f[F] = f[I];
							s--, e = 2 * s
						}
					}
					return _ ? W : S
				},
				T = function(c) {
					for (var g = c.length, f = 0, L = g - 1, K = 0; g > K; L = K++) f += c[L].x * c[K].y - c[K].x * c[L].y;
					return .5 * f
				},
				l = function(S, Y, A, E, j, v) {
					var M, I, U, $, r, B, _, y, u;
					if (I = S[v[Y]].x, U = S[v[Y]].y, $ = S[v[A]].x, r = S[v[A]].y, B = S[v[E]].x, _ = S[v[E]].y, o > ($ - I) * (_ - U) - (r - U) * (B - I)) return !1;
					var P, N, K, e, R, V, W, l, k, p, z, X, c, Z, Q;
					for (P = B - $, N = _ - r, K = I - B, e = U - _, R = $ - I, V = r - U, M = 0; j > M; M++) if (y = S[v[M]].x, u = S[v[M]].y, !(y === I && u === U || y === $ && u === r || y === B && u === _) && (W = y - I, l = u - U, k = y - $, p = u - r, z = y - B, X = u - _, Q = P * p - N * k, c = R * l - V * W, Z = K * X - e * z, Q >= -o && Z >= -o && c >= -o)) return !1;
					return !0
				};
			return _.Triangulate = I, _.Triangulate.area = T, _
		}(gl), I._typeface_js = {
			faces: gl.faces,
			loadFace: gl.loadFace
		};
		var wr = function() {
				this.vertices = [], this.faces = [], this.faceVertexUvs = [
					[]
				]
			},
			Oi = wr.prototype = {
				constructor: wr,
				computeFaceNormals: function() {
					for (var q = new yp, S = new yp, P = 0, Y = this.faces.length; Y > P; P++) {
						var l = this.faces[P],
							x = this.vertices[l.a],
							d = this.vertices[l.b],
							i = this.vertices[l.c];
						q.subVectors(i, d), S.subVectors(x, d), q.cross(S), q.normalize(), l.normal.copy(q)
					}
				},
				computeVertexNormals: function(C) {
					var U, N, F, V, s, O;
					for (O = new Array(this.vertices.length), U = 0, N = this.vertices.length; N > U; U++) O[U] = new yp;
					if (C) {
						var x, J, A, Y = new yp,
							w = new yp;
						for (F = 0, V = this.faces.length; V > F; F++) s = this.faces[F], x = this.vertices[s.a], J = this.vertices[s.b], A = this.vertices[s.c], Y.subVectors(A, J), w.subVectors(x, J), Y.cross(w), O[s.a].add(Y), O[s.b].add(Y), O[s.c].add(Y)
					} else for (F = 0, V = this.faces.length; V > F; F++) s = this.faces[F], O[s.a].add(s.normal), O[s.b].add(s.normal), O[s.c].add(s.normal);
					for (U = 0, N = this.vertices.length; N > U; U++) O[U].normalize();
					for (F = 0, V = this.faces.length; V > F; F++) s = this.faces[F], s.vertexNormals[0] = O[s.a].clone(), s.vertexNormals[1] = O[s.b].clone(), s.vertexNormals[2] = O[s.c].clone()
				},
				mergeVertices: function() {
					var m, X, g, l, U, x, L, V, Y = {},
						M = [],
						q = [],
						h = 4,
						o = _(10, h);
					for (g = 0, l = this.vertices.length; l > g; g++) m = this.vertices[g], X = W(m.x * o) + "_" + W(m.y * o) + "_" + W(m.z * o), Y[X] === r ? (Y[X] = g, M.push(this.vertices[g]), q[g] = M.length - 1) : q[g] = q[Y[X]];
					var f = [];
					for (g = 0, l = this.faces.length; l > g; g++) {
						U = this.faces[g], U.a = q[U.a], U.b = q[U.b], U.c = q[U.c], x = [U.a, U.b, U.c];
						for (var y = 0; 3 > y; y++) if (x[y] == x[(y + 1) % 3]) {
							f.push(g);
							break
						}
					}
					for (g = f.length - 1; g >= 0; g--) {
						var z = f[g];
						for (this.faces.splice(z, 1), L = 0, V = this.faceVertexUvs.length; V > L; L++) this.faceVertexUvs[L].splice(z, 1)
					}
					var J = this.vertices.length - M.length;
					return this.vertices = M, J
				}
			},
			Fj = function(r, t, L, e, _, g, q) {
				this.aX = r, this.aY = t, this.xRadius = L, this.yRadius = e, this.aStartAngle = _, this.aEndAngle = g, this.aClockwise = q
			};
		Fj.prototype = Ui(Qr), Fj.prototype.getPoint = function(U) {
			var X, M = this.aEndAngle - this.aStartAngle;
			0 > M && (M += o), M > o && (M -= o), X = this.aClockwise === !0 ? this.aEndAngle + (1 - U) * (o - M) : this.aStartAngle + U * M;
			var F = this.aX + this.xRadius * K(X),
				m = this.aY + this.yRadius * C(X);
			return new Lf(F, m)
		};
		var cn = function(_, U) {
				this.v1 = _, this.v2 = U
			},
			Be = cn.prototype = Ui(Qr);
		Be.getPoint = function(d) {
			var k = this.v2.clone().sub(this.v1);
			return k.multiplyScalar(d).add(this.v1), k
		}, Be.getPointAt = function(v) {
			return this.getPoint(v)
		}, Be.getTangent = function() {
			var M = this.v2.clone().sub(this.v1);
			return M.normalize()
		};
		var Oq = function(o, w, Y) {
				this.v0 = o, this.v1 = w, this.v2 = Y
			};
		Oq.prototype = Ui(Qr), Oq.prototype.getPoint = function(r) {
			var A, f;
			return A = bq.b2(r, this.v0.x, this.v1.x, this.v2.x), f = bq.b2(r, this.v0.y, this.v1.y, this.v2.y), new Lf(A, f)
		};
		var Nk = function(X, f, p, y) {
				this.v0 = X, this.v1 = f, this.v2 = p, this.v3 = y
			};
		Nk.prototype = Ui(Qr), Nk.prototype.getPoint = function(f) {
			var Y, B;
			return Y = bq.b3(f, this.v0.x, this.v1.x, this.v2.x, this.v3.x), B = bq.b3(f, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new Lf(Y, B)
		}, Fh.create(function(e, p) {
			this.v1 = e, this.v2 = p
		}, function(W) {
			var p = new yp;
			return p.subVectors(this.v2, this.v1), p.multiplyScalar(W), p.add(this.v1), p
		});
		var ze = Fh.create(function(F, n, i) {
			this.v0 = F, this.v1 = n, this.v2 = i
		}, function(q) {
			var F, T, L;
			return F = bq.b2(q, this.v0.x, this.v1.x, this.v2.x), T = bq.b2(q, this.v0.y, this.v1.y, this.v2.y), L = bq.b2(q, this.v0.z, this.v1.z, this.v2.z), new yp(F, T, L)
		}),
			gb = Fh.create(function(M, j, D, k) {
				this.v0 = M, this.v1 = j, this.v2 = D, this.v3 = k
			}, function(B) {
				var i, H, k;
				return i = bq.b3(B, this.v0.x, this.v1.x, this.v2.x, this.v3.x), H = bq.b3(B, this.v0.y, this.v1.y, this.v2.y, this.v3.y), k = bq.b3(B, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new yp(i, H, k)
			}),
			xs = function(b, E, e, X, d, G, h, u) {
				wr.call(this), X = X !== r ? X : .5, d = d !== r ? d : .5, u = u !== r ? u : 1, b = b || 8, G = G || 0, h = h || o;
				var v, y, x = 1,
					l = u / 2,
					j = [],
					Q = [],
					k = this.vertices,
					t = this.faces,
					M = this.faceVertexUvs;
				for (y = 0; x >= y; y++) {
					var a = [],
						c = [],
						$ = y / x,
						W = $ * (d - X) + X;
					for (v = 0; b >= v; v++) {
						var Y = v / b,
							S = new yp,
							V = -(Y * h + G);
						S.z = W * C(V), S.y = -$ * u + l, S.x = W * K(V), k.push(S), a.push(k.length - 1), c.push(new Lf(Y, $))
					}
					j.push(a), Q.push(c)
				}
				var z, T, L = (d - X) / u;
				for (v = 0; b > v; v++) for (0 !== X ? (z = k[j[0][v]].clone(), T = k[j[0][v + 1]].clone()) : (z = k[j[1][v]].clone(), T = k[j[1][v + 1]].clone()), z.setY(N(z.x * z.x + z.z * z.z) * L).normalize(), T.setY(N(T.x * T.x + T.z * T.z) * L).normalize(), y = 0; x > y; y++) {
					var P = j[y][v],
						m = j[y + 1][v],
						p = j[y + 1][v + 1],
						i = j[y][v + 1],
						n = z.clone(),
						U = z.clone(),
						q = T.clone(),
						R = T.clone(),
						H = Q[y][v].clone(),
						I = Q[y + 1][v].clone(),
						B = Q[y + 1][v + 1].clone(),
						J = Q[y][v + 1].clone();
					t.push(new Eo(P, m, i, [n, U, R])), M[0].push([H, I, J]), t.push(new Eo(m, p, i, [U.clone(), q, R.clone()])), M[0].push([I.clone(), B, J.clone()])
				}
				if (E && X > 0) for (this.vertices.push(new yp(0, l, 0)), v = 0; b > v; v++) {
					var P = j[0][v],
						m = j[0][v + 1],
						p = this.vertices.length - 1,
						n = new yp(0, 1, 0),
						U = new yp(0, 1, 0),
						q = new yp(0, 1, 0),
						H = Q[0][v].clone(),
						I = Q[0][v + 1].clone(),
						B = new Lf(I.x, 0);
					t.push(new Eo(P, m, p, [n, U, q], null, 1));
					var w = v / b * o,
						O = K(w),
						A = C(w),
						s = (v + 1) / b * o,
						F = K(s),
						_ = C(s);
					M[0].push([new Lf(.5 + .5 * O, .5 + .5 * A), new Lf(.5 + .5 * F, .5 + .5 * _), new Lf(.5, .5)])
				}
				if (e && d > 0) for (this.vertices.push(new yp(0, -l, 0)), v = 0; b > v; v++) {
					var P = j[y][v + 1],
						m = j[y][v],
						p = k.length - 1,
						n = new yp(0, -1, 0),
						U = new yp(0, -1, 0),
						q = new yp(0, -1, 0),
						H = Q[y][v + 1].clone(),
						I = Q[y][v].clone();
					t.push(new Eo(P, m, p, [n, U, q], null, 2));
					var w = v / b * o,
						O = K(w),
						A = C(w),
						s = (v + 1) / b * o,
						F = K(s),
						_ = C(s);
					M[0].push([new Lf(.5 + .5 * F, .5 - .5 * _), new Lf(.5 + .5 * O, .5 - .5 * A), new Lf(.5, .5)])
				}
			};
		xs.prototype = Ui(Oi);
		var Md = function(Y, d, W, Z, X, c, x) {
				wr.call(this), x = x || .5, Y = Y || 16, d = d || 16, W = (W !== r ? W : 0) - F, Z = Z !== r ? Z : o, X = X !== r ? X : 0, c = c !== r ? c : F;
				var V, E, q = [],
					i = [],
					j = this.vertices,
					Q = this.faces,
					P = this.faceVertexUvs;
				for (E = 0; d >= E; E++) {
					var _ = [],
						k = [];
					for (V = 0; Y >= V; V++) {
						var z = V / Y,
							f = E / d,
							w = new yp;
						w.x = -x * K(W + z * Z) * C(X + f * c), w.y = x * K(X + f * c), w.z = x * C(W + z * Z) * C(X + f * c), j.push(w), _.push(j.length - 1), k.push(new Lf(z, f))
					}
					q.push(_), i.push(k)
				}
				for (E = 0; d > E; E++) for (V = 0; Y > V; V++) {
					var n = q[E][V + 1],
						S = q[E][V],
						t = q[E + 1][V],
						h = q[E + 1][V + 1],
						G = j[n].clone().normalize(),
						M = j[S].clone().normalize(),
						u = j[t].clone().normalize(),
						p = j[h].clone().normalize(),
						e = i[E][V + 1].clone(),
						m = i[E][V].clone(),
						H = i[E + 1][V].clone(),
						D = i[E + 1][V + 1].clone();
					R(j[n].y) === x ? (e.x = (e.x + m.x) / 2, Q.push(new Eo(n, t, h, [G, u, p])), P[0].push([e, H, D])) : R(j[t].y) === x ? (H.x = (H.x + D.x) / 2, Q.push(new Eo(n, S, t, [G, M, u])), P[0].push([e, m, H])) : (Q.push(new Eo(n, S, h, [G, M, p])), P[0].push([e, m, D]), Q.push(new Eo(S, t, h, [M.clone(), u, p.clone()])), P[0].push([m.clone(), H, D.clone()]))
				}
			};
		Md.prototype = Ui(Oi);
		var hq = function(h, B, P, D, T, v) {
				wr.call(this), h = h || .33, B = B || .17, D = D || 8, P = P || 6, T = T || 0, v = v || o;
				for (var R = new yp, e = [], M = [], m = 0; D >= m; m++) for (var x = m / D * o + F, q = 0; P >= q; q++) {
					var j = q / P * v + T;
					R.x = h * K(j), R.z = -h * C(j);
					var E = new yp,
						W = h + B * K(x);
					E.x = W * K(j), E.z = -W * C(j), E.y = B * C(x), this.vertices.push(E), e.push(new Lf(q / P, 1 - m / D)), M.push(E.clone().sub(R).normalize())
				}
				for (var m = 1; D >= m; m++) for (var q = 1; P >= q; q++) {
					var f = (P + 1) * m + q - 1,
						X = (P + 1) * (m - 1) + q - 1,
						G = (P + 1) * (m - 1) + q,
						Q = (P + 1) * m + q,
						J = new Eo(f, X, Q, [M[f].clone(), M[X].clone(), M[Q].clone()]);
					this.faces.push(J), this.faceVertexUvs[0].push([e[f].clone(), e[X].clone(), e[Q].clone()]), J = new Eo(X, G, Q, [M[X].clone(), M[G].clone(), M[Q].clone()]), this.faces.push(J), this.faceVertexUvs[0].push([e[X].clone(), e[G].clone(), e[Q].clone()])
				}
				this.computeFaceNormals()
			};
		hq.prototype = Ui(Oi);
		var Qq = function(l, i, S) {
				return l ? (wr.call(this), l = l instanceof Array ? l : [l], this.addShapeList(l, i), i.convertYZ !== !1 && cg(this, S), this.computeFaceNormals(), void 0) : (l = [], void 0)
			},
			Ti = Qq.prototype = Ui(wr.prototype);
		Ti.addShapeList = function(g, w) {
			for (var k = g.length, N = 0; k > N; N++) {
				var z = g[N];
				this.addShape(z, w)
			}
		}, Ti.addShape = function(N, $) {
			function j() {
				if ($.bottom) for (var C = 0; U > C; C++) X = L[C], J(X[2], X[1], X[0], !0);
				if ($.top) for (C = 0; U > C; C++) X = L[C], J(X[0] + a * c, X[1] + a * c, X[2] + a * c, !1)
			}
			function S() {
				var c = 0;
				for (k(y, c), c += y.length, M = 0, t = A.length; t > M; M++) C = A[M], k(C, c), c += C.length
			}
			function k(p, w) {
				for (var A, d, M = p.length; --M >= 0;) {
					A = M, d = M - 1, 0 > d && (d = p.length - 1);
					var i = 0,
						e = c;
					for (i = 0; e > i; i++) {
						var T = a * i,
							g = a * (i + 1),
							L = w + A + T,
							r = w + d + T,
							x = w + d + g,
							H = w + A + g;
						K(L, r, x, H, p, i, e, A, d)
					}
				}
			}
			function m(G, c, I) {
				E.vertices.push(new yp(G, c, I))
			}
			function J(M, p, y, B) {
				M += e, p += e, y += e, E.faces.push(new Eo(M, p, y, null, null, B ? 2 : 1));
				var s = B ? W.generateBottomUV(E, N, $, M, p, y) : W.generateTopUV(E, N, $, M, p, y);
				E.faceVertexUvs[0].push(s)
			}
			function K(P, p, R, l, n, m, I, Z, K) {
				P += e, p += e, R += e, l += e, E.faces.push(new Eo(P, p, l)), E.faces.push(new Eo(p, R, l));
				var D = W.generateSideWallUV(E, N, n, $, P, p, R, l, m, I, Z, K);
				E.faceVertexUvs[0].push([D[0], D[1], D[3]]), E.faceVertexUvs[0].push([D[1], D[2], D[3]])
			}
			var Y, s, b, f, z, B = $.amount,
				p = $.curveSegments || oi,
				c = $.steps || 1,
				Z = $.extrudePath,
				H = !1,
				W = new Ro($.repeatUVLength);
			Z && (Y = Z.getSpacedPoints(c), H = !0, s = $.frames !== r ? $.frames : new yq.FrenetFrames(Z, c, !1), b = new yp, f = new yp, z = new yp);
			var C, M, t, E = this,
				e = this.vertices.length,
				_ = N.extractPoints(p),
				x = _.shape,
				A = _.holes,
				D = !bq.isClockWise(x);
			if (D) {
				for (x = x.reverse(), M = 0, t = A.length; t > M; M++) C = A[M], bq.isClockWise(C) && (A[M] = C.reverse());
				D = !1
			}
			var L = bq.triangulateShape(x, A),
				y = x;
			for (M = 0, t = A.length; t > M; M++) C = A[M], x = x.concat(C);
			for (var G, X, a = x.length, U = L.length, R = 0; a > R; R++) G = x[R], H ? (f.copy(s.normals[0]).multiplyScalar(G.x), b.copy(s.binormals[0]).multiplyScalar(G.y), z.copy(Y[0]).add(f).add(b), m(z.x, z.y, z.z)) : m(G.x, G.y, 0);
			var O;
			for (O = 1; c >= O; O++) for (R = 0; a > R; R++) G = x[R], H ? (f.copy(s.normals[O]).multiplyScalar(G.x), b.copy(s.binormals[O]).multiplyScalar(G.y), z.copy(Y[O]).add(f).add(b), m(z.x, z.y, z.z)) : m(G.x, G.y, B / c * O);
			j(), S()
		};
		var yq = function(Z, W, T, n, d) {
				function w(X, z, Y) {
					return f.vertices.push(new yp(X, z, Y)) - 1
				}
				wr.call(this), W = W || 64, T = T || 1, n = n || 8, d = d || !1;
				var D, k, y, M, j, c, Q, H, N, x, F, g, _, z, B, a, e, R, r, X, v = [],
					f = this,
					s = W + 1,
					b = new yp,
					Y = new yq.FrenetFrames(Z, W, d),
					J = Y.tangents,
					q = Y.normals,
					i = Y.binormals;
				for (this.tangents = J, this.normals = q, this.binormals = i, N = 0; s > N; N++) for (v[N] = [], M = N / (s - 1), H = Z.getPointAt(M), D = J[N], k = q[N], y = i[N], x = 0; n > x; x++) j = x / n * o, c = -T * K(j), Q = T * C(j), b.copy(H), b.x += c * k.x + Q * y.x, b.y += c * k.y + Q * y.y, b.z += c * k.z + Q * y.z, v[N][x] = w(b.x, b.y, b.z);
				for (N = 0; W > N; N++) for (x = 0; n > x; x++) F = d ? (N + 1) % W : N + 1, g = (x + 1) % n, _ = v[N][x], z = v[F][x], B = v[F][g], a = v[N][g], e = new Lf(N / W, x / n), R = new Lf((N + 1) / W, x / n), r = new Lf((N + 1) / W, (x + 1) / n), X = new Lf(N / W, (x + 1) / n), this.faces.push(new Eo(_, z, a)), this.faceVertexUvs[0].push([e, R, X]), this.faces.push(new Eo(z, B, a)), this.faceVertexUvs[0].push([R.clone(), r, X.clone()]);
				this.computeFaceNormals(), this.computeVertexNormals()
			};
		yq.prototype = Ui(Oi), yq.FrenetFrames = function(D, Q, T) {
			function w() {
				n[0] = new yp, u[0] = new yp, m = Number.MAX_VALUE, i = R(O[0].x), r = R(O[0].y), I = R(O[0].z), m >= i && (m = i, y.set(1, 0, 0)), m >= r && (m = r, y.set(0, 1, 0)), m >= I && y.set(0, 0, 1), d.crossVectors(O[0], y).normalize(), n[0].crossVectors(O[0], d), u[0].crossVectors(O[0], n[0])
			}
			var $, m, i, r, I, _, e, y = new yp,
				O = [],
				n = [],
				u = [],
				d = new yp,
				H = new qi,
				z = Q + 1,
				a = 1e-4;
			for (this.tangents = O, this.normals = n, this.binormals = u, _ = 0; z > _; _++) e = _ / (z - 1), O[_] = D.getTangentAt(e), O[_].normalize();
			for (w(), _ = 1; z > _; _++) n[_] = n[_ - 1].clone(), u[_] = u[_ - 1].clone(), d.crossVectors(O[_ - 1], O[_]), d.length() > a && (d.normalize(), $ = f(dd(O[_ - 1].dot(O[_]), -1, 1)), n[_].applyMatrix4(H.makeRotationAxis(d, $))), u[_].crossVectors(O[_], n[_]);
			if (T) for ($ = f(dd(n[0].dot(n[z - 1]), -1, 1)), $ /= z - 1, O[0].dot(d.crossVectors(n[0], n[z - 1])) > 0 && ($ = -$), _ = 1; z > _; _++) n[_].applyMatrix4(H.makeRotationAxis(O[_], $ * _)), u[_].crossVectors(O[_], n[_])
		};
		var mk = function(q, f, t, r) {
				wr.call(this), f = f || 18, t = t || 0, r = r == M ? o : r;
				for (var d = 1 / (q.length - 1), z = 1 / f, Q = 0, c = f; c >= Q; Q++) for (var F = t + Q * z * r, i = K(F), T = C(F), J = 0, N = q.length; N > J; J++) {
					var j = q[J],
						G = new yp;
					G.x = i * j.x - T * j.y, G.y = T * j.x + i * j.y, G.z = j.z, this.vertices.push(G)
				}
				for (var x = q.length, Q = 0, c = f; c > Q; Q++) for (var J = 0, N = q.length - 1; N > J; J++) {
					var W = J + x * Q,
						v = W,
						E = W + x,
						i = W + 1 + x,
						B = W + 1,
						R = Q * z,
						p = J * d,
						$ = R + z,
						Y = p + d;
					this.faces.push(new Eo(v, B, E)), this.faceVertexUvs[0].push([new Lf(R, p), new Lf(R, Y), new Lf($, p)]), this.faces.push(new Eo(E, B, i)), this.faceVertexUvs[0].push([new Lf($, p), new Lf(R, Y), new Lf($, Y)])
				}
				this.mergeVertices(), cg(this), this.computeFaceNormals(), this.computeVertexNormals()
			};
		mk.prototype = Ui(Oi);
		var zd = function(O, M) {
				M = M || {};
				var u = gl.generateShapes(O, M);
				M.amount = M.amount !== r ? M.amount : .5, M.convertYZ = !1, M.fill !== !1 && (M.bottom = !0, M.top = !0), Qq.call(this, u, M)
			};
		zd.prototype = Ui(Ti);
		var fb = d.Node = function() {
				im(fb, this)
			},
			vj = {
				X: Rq,
				Y: jj,
				Z: $q
			},
			sb = {
				xyz: "XYZ",
				xzy: "XZY",
				yxz: "YXZ",
				yzx: "YZX",
				zxy: "ZXY",
				zyx: "ZYX"
			},
			np = "xzy",
			hf = function(i, n, b) {
				if (n) {
					var S = n[0],
						l = n[1],
						Q = n[2];
					"xzy" === b ? (jj(i, l), $q(i, Q), Rq(i, S)) : "xyz" === b ? ($q(i, Q), jj(i, l), Rq(i, S)) : "yxz" === b ? ($q(i, Q), Rq(i, S), jj(i, l)) : "yzx" === b ? (Rq(i, S), $q(i, Q), jj(i, l)) : "zxy" === b ? (jj(i, l), Rq(i, S), $q(i, Q)) : "zyx" === b ? (Rq(i, S), jj(i, l), $q(i, Q)) : (jj(i, l), $q(i, Q), Rq(i, S))
				}
			};
		Xq("Node", Jc, {
			ms_ac: ["rotationMode", "anchorElevation"],
			_adjustChildrenToTop: !0,
			_icon: "node_icon",
			_image: "node_image",
			_rotationMode: np,
			_64O: 0,
			_rotationX: 0,
			_53O: 0,
			_host: M,
			_position: {
				x: 0,
				y: 0
			},
			_anchor: {
				x: .5,
				y: .5
			},
			_anchorElevation: .5,
			_scale: {
				x: 1,
				y: 1
			},
			_scaleTall: 1,
			_54O: 0,
			getUIClass: function() {
				return sf
			},
			_22Q: function() {
				return Ym
			},
			getX: function() {
				return this.p().x
			},
			setX: function(N) {
				this.p(N, this.p().y)
			},
			getY: function() {
				return this.p().y
			},
			setY: function(E) {
				this.p(this.p().x, E)
			},
			getAnchorX: function() {
				return this.getAnchor().x
			},
			setAnchorX: function(P) {
				this.setAnchor(P, this.getAnchor().y)
			},
			getAnchorY: function() {
				return this.getAnchor().y
			},
			setAnchorY: function(K) {
				this.setAnchor(this.getAnchor().x, K)
			},
			getScaleX: function() {
				return this.getScale().x
			},
			setScaleX: function(r) {
				this.setScale(r, this.getScale().y)
			},
			getScaleY: function() {
				return this.getScale().y
			},
			setScaleY: function(v) {
				this.setScale(this.getScale().x, v)
			},
			p: function() {
				return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
			},
			p3: function() {
				return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
			},
			s3: function() {
				return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
			},
			r3: function() {
				return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
			},
			t3: function() {
				return this.translate3d.apply(this, arguments), this
			},
			translate3dBy: function(l, L) {
				lc(l, Gb(M, M, this.r3(), this.getRotationMode())), this.translate3d(l[0] * L, l[1] * L, l[2] * L)
			},
			translateFront: function(i) {
				this.translate3dBy([0, 0, 1], i)
			},
			translateBack: function(u) {
				this.translate3dBy([0, 0, -1], u)
			},
			translateLeft: function(l) {
				this.translate3dBy([-1, 0, 0], l)
			},
			translateRight: function(S) {
				this.translate3dBy([1, 0, 0], S)
			},
			translateTop: function(C) {
				this.translate3dBy([0, 1, 0], C)
			},
			translateBottom: function(o) {
				this.translate3dBy([0, -1, 0], o)
			},
			getPosition3d: function() {
				return [this._position.x, this._54O, this._position.y]
			},
			setPosition3d: function(W, g, l) {
				1 === arguments.length && (g = W[1], l = W[2], W = W[0]), this.p(W, l), this.setElevation(g)
			},
			translate3d: function(T, Y, l) {
				1 === arguments.length && (Y = T[1], l = T[2], T = T[0]), this.translate(T, l), this.setElevation(this._54O + Y)
			},
			getSize3d: function() {
				return [this.getWidth(), this.getTall(), this.getHeight()]
			},
			setSize3d: function(c, K, G) {
				1 === arguments.length && (K = c[1], G = c[2], c = c[0]), this.setSize(c, G), this.setTall(K)
			},
			getRotation3d: function() {
				return [this._rotationX, -this._64O, this._53O]
			},
			setRotation3d: function(k, e, x) {
				1 === arguments.length && (e = k[1], x = k[2], k = k[0]), this.setRotationX(k), this.setRotation(-e), this.setRotationZ(x)
			},
			setRotationY: function(m) {
				this.setRotation(-m)
			},
			getRotationY: function() {
				return -this._64O
			},
			lookAt: function(D, H) {
				H = H || Km;
				var v = this,
					w = Yg(D, v.p3()),
					M = Zg(w);
				H === Km ? (v.r3([-c(w[1] / M), -G(w[2], w[0]) + T, 0]), v.setRotationMode("xzy")) : H === Oj ? (v.r3(0, -G(w[2], w[0]), c(w[1] / M)), v.setRotationMode("zyx")) : H === $c ? (v.r3(0, -G(w[2], w[0]) + F, -c(w[1] / M)), v.setRotationMode("zyx")) : H === Mr ? (v.r3([-c(w[1] / M) + T, -G(w[2], w[0]) + T, 0]), v.setRotationMode("xzy")) : H === pb && (v.r3([-c(w[1] / M) - T, -G(w[2], w[0]) + T, 0]), v.setRotationMode("xzy")), H === Uj && (v.r3([-c(w[1] / M) + F, -G(w[2], w[0]) + T, F]), v.setRotationMode("zxy"))
			},
			getLoopedEdges: function() {
				return this._45I
			},
			getEdges: function() {
				return this._70O
			},
			getAgentEdges: function() {
				return this._49I
			},
			getHost: function() {
				return this._host
			},
			setHost: function(W) {
				var f = this;
				if (f !== W && f._host !== W) {
					var E = f._host;
					E && E._removeAttach(f), f._host = W, f._host && f._host._addAttach(f), f.fp("host", E, W), f.onHostChanged(E, W)
				}
			},
			getAttaches: function() {
				return this._69O
			},
			_addAttach: function(G) {
				var Q = this;
				Q._69O || (Q._69O = new jg), Q._69O.add(G), Q.fp("attaches", M, G)
			},
			_removeAttach: function(w) {
				var X = this;
				X._69O.remove(w), X._69O.isEmpty() && delete X._69O, X.fp("attaches", w, M)
			},
			getSourceEdges: function() {
				return this._42I
			},
			getTargetEdges: function() {
				return this._43I
			},
			_2I: function(t) {
				var A = this;
				A._44I || (A._44I = new jg), A._42I || (A._42I = new jg), A._44I.add(t), A._42I.add(t), A._20I()
			},
			_4I: function(X) {
				var w = this;
				w._44I || (w._44I = new jg), w._43I || (w._43I = new jg), w._44I.add(X), w._43I.add(X), w._20I()
			},
			_16I: function(K) {
				var H = this;
				H._44I.remove(K), H._42I.remove(K), H._44I.isEmpty() && delete H._44I, H._42I.isEmpty() && delete H._42I, H._20I()
			},
			_18I: function(o) {
				var L = this;
				L._44I.remove(o), L._43I.remove(o), L._44I.isEmpty() && delete L._44I, L._43I.isEmpty() && delete L._43I, L._20I()
			},
			_20I: function() {
				var U = this;
				if (delete U._45I, !U._44I || U._44I.isEmpty()) return delete U._70O, void 0;
				var N;
				U._44I.each(function(_) {
					_.isLooped() && (N || (N = {}), N[_._id] || (U._45I || (U._45I = new jg), U._45I.add(_), N[_._id] = _))
				}), N ? (U._70O = new jg, U._44I.each(function(d) {
					N[d._id] ? "A" === N[d._id] || (N[d._id] = "A", U._70O.add(d)) : U._70O.add(d)
				})) : U._70O = U._44I
			},
			hasAgentEdges: function() {
				return !!this._49I && !this._49I.isEmpty()
			},
			getSourceAgentEdges: function() {
				return this._46I
			},
			getTargetAgentEdges: function() {
				return this._47I
			},
			_1I: function(K) {
				var P = this;
				P._46I || (P._46I = new jg), P._48I || (P._48I = new jg), P._46I.add(K), P._48I.add(K), P._19I()
			},
			_3I: function(r) {
				var T = this;
				T._47I || (T._47I = new jg), T._48I || (T._48I = new jg), T._47I.add(r), T._48I.add(r), T._19I()
			},
			_15I: function(h) {
				var t = this;
				t._46I.remove(h), t._48I.remove(h), t._46I.isEmpty() && delete t._46I, t._48I.isEmpty() && delete t._48I, t._19I()
			},
			_17I: function(V) {
				var k = this;
				k._47I.remove(V), k._48I.remove(V), k._47I.isEmpty() && delete k._47I, k._48I.isEmpty() && delete k._48I, k._19I()
			},
			_19I: function() {
				var E = this;
				delete E._49I;
				var O = E._48I;
				if (O && !O.isEmpty()) {
					var D = {};
					O.each(function(O) {
						D[O._id] ? E._49I || (E._49I = new jg) : D[O._id] = O
					}), E._49I ? O.each(function(c) {
						D[c._id] && (E._49I.add(c), delete D[c._id])
					}) : E._49I = O
				}
			},
			getImage: function() {
				if (this._pendingCheckImageJSON) {
					var f = z.getImage(this._image);
					f && (this._pendingCheckImageJSON = !1, this.getParent() instanceof Ei && this.getParent().checkPendingUpdateInfo())
				}
				return this._image
			},
			setImage: function(c) {
				var i = this,
					t = i._image,
					C = i.getWidth(),
					g = i.getHeight();
				i._image = c, i.fp("image", t, c) && (null != c && (Hj(c) || bc(c) && /\.json$/i.test(c)) && (this._pendingCheckImageJSON = !0), i.fp(To, C, i.getWidth()), i.fp(mo, g, i.getHeight()))
			},
			getElevation: function() {
				return this._54O
			},
			setElevation: function(Q) {
				var q = this;
				if (!q._50O) {
					q._50O = 1;
					var O = q._54O;
					q._54O = Q, q.fp(He, O, Q), delete this._50O
				}
			},
			getRotation: function() {
				return this._64O
			},
			setRotation: function(Y) {
				var B = this;
				if (!B._49O) {
					B._49O = 1;
					var A = B._64O;
					B._64O = Y, B.fp(Qd, A, Y), delete B._49O
				}
			},
			getRotationX: function() {
				return this._rotationX
			},
			setRotationX: function(Z) {
				var n = this;
				if (!n._51O) {
					n._51O = 1;
					var E = n._rotationX;
					n._rotationX = Z, n.fp("rotationX", E, Z), delete n._51O
				}
			},
			getRotationZ: function() {
				return this._53O
			},
			setRotationZ: function(H) {
				var W = this;
				if (!W._52O) {
					W._52O = 1;
					var d = W._53O;
					W._53O = H, W.fp("rotationZ", d, H), delete W._52O
				}
			},
			getPosition: function() {
				return this._position
			},
			setPosition: function(n, c) {
				var N = this;
				if (!N._50I) {
					N._50I = 1;
					var h;
					if (h = 2 === arguments.length ? {
						x: n,
						y: c
					} : n, h.x !== N._position.x || h.y !== N._position.y) {
						var p = N._position;
						N._position = h, N.fp(vs, p, h)
					}
					delete N._50I
				}
			},
			translate: function(c, g) {
				var C = this._position;
				this.p(C.x + c, C.y + g)
			},
			getWidth: function() {
				var r = this;
				if (r._width >= 0) return r._width;
				var e = r.getStyle("shape3d");
				if (e) {
					var Q = jo(e);
					if (Q && Q.rawS3) return Q.rawS3[0]
				}
				var M = Ob(r._image);
				return M ? Dc(M, r) : 20
			},
			setWidth: function(t) {
				var N = this,
					L = N._width;
				N._width = t, N.fp(To, L, t)
			},
			getHeight: function() {
				var V = this;
				if (V._height >= 0) return V._height;
				var x = V.getStyle("shape3d");
				if (x) {
					var o = jo(x);
					if (o && o.rawS3) return o.rawS3[2]
				}
				var F = Ob(V._image);
				return F ? pd(F, V) : 20
			},
			setHeight: function(I) {
				var R = this,
					_ = R._height;
				R._height = I, R.fp(mo, _, I)
			},
			getTall: function() {
				var P = this;
				if (P._tall >= 0) return P._tall;
				var l = P.getStyle("shape3d");
				if (l) {
					var v = jo(l);
					if (v && v.rawS3) return v.rawS3[1]
				}
				return 20
			},
			setTall: function(U) {
				var H = this,
					t = H._tall;
				H._tall = U, H.fp("tall", t, U)
			},
			setSize: function($, y) {
				var X = this;
				2 === arguments.length ? (X.setWidth($), X.setHeight(y)) : (X.setWidth($.width), X.setHeight($.height))
			},
			getSize: function() {
				return {
					width: this.getWidth(),
					height: this.getHeight()
				}
			},
			setRect: function(A, N, n, P, r) {
				var q = this,
					h = q.getAnchor(),
					V = q.getScale();
				arguments.length <= 2 && (r = N, N = A.y, n = A.width, P = A.height, A = A.x);
				var m = r && V.x < 0 ? 1 - h.x : h.x,
					J = r && V.y < 0 ? 1 - h.y : h.y;
				q.p(A + n * m, N + P * J), r && (n /= Math.abs(V.x), P /= Math.abs(V.y)), q.setWidth(n), q.setHeight(P)
			},
			getMatrix: function() {
				var Z = this,
					w = Z._64O,
					x = Z._position,
					Q = Z.getScale();
				return new Gk(w, x.x, x.y, Q.x, Q.y)
			},
			getAnchorRect: function() {
				var Q = this,
					z = Q.getWidth(),
					e = Q.getHeight(),
					L = Q.getAnchor();
				return {
					x: -z * L.x,
					y: -e * L.y,
					width: z,
					height: e
				}
			},
			toLocal: function(Z) {
				return this.getMatrix().tfi(Z)
			},
			toGlobal: function(S) {
				return this.getMatrix().tf(S)
			},
			isInRect: function(y) {
				y = this.toLocal(y);
				var e = this.getWidth(),
					m = this.getHeight();
				return y.x += e * this.getAnchorX(), y.y += m * this.getAnchorY(), !(y.x < 0 || y.y < 0 || y.x > e || y.y > m)
			},
			getRect: function() {
				var I = this,
					m = I.getWidth(),
					F = I.getHeight(),
					M = I.getAnchor(),
					w = {
						x: -m * M.x,
						y: -F * M.y,
						width: m,
						height: F
					},
					Q = I.getMatrix();
				return w = cp([Q.tf(w.x, w.y), Q.tf(w.x + w.width, w.y), Q.tf(w.x + w.width, w.y + w.height), Q.tf(w.x, w.y + w.height)])
			},
			getAnchorElevation: function() {
				return this._anchorElevation
			},
			getAnchor3d: function() {
				var Q = this,
					I = Q.getAnchor(),
					v = Q._anchorElevation;
				return {
					x: I.x,
					y: v,
					z: I.y
				}
			},
			setAnchorElevation: function(V) {
				var S = this,
					L = S._anchorElevation;
				L !== V && (S._anchorElevation = V, S.fp("anchorElevation", L, V))
			},
			setAnchor3d: function($, r, N, l) {
				var S, Y = this;
				"number" == typeof $ ? S = {
					x: $,
					y: r,
					z: N
				} : (S = $.length ? {
					x: $[0],
					y: $[1],
					z: $[2]
				} : $, l = r), Y.setAnchor(S.x, S.z, l), Y.setAnchorElevation(S.y)
			},
			getAnchor: function() {
				var J = this;
				if (J.hasOwnProperty("_anchor")) return J._anchor;
				var L = Ob(J._image);
				return L && L.anchorX !== r ? {
					x: L.anchorX,
					y: L.anchorY
				} : J._anchor
			},
			setAnchor: function(U, w, q) {
				var M, i = this;
				"number" == typeof U ? M = {
					x: U,
					y: w
				} : (M = U.length ? {
					x: U[0],
					y: U[1]
				} : U, q = w);
				var A = i.getAnchor();
				if (A.x !== M.x || A.y !== M.y) {
					var j = i.getDataModel();
					if (j && j.beginTransaction(), i._anchor = M, i.fp("anchor", A, M), q && !_f) {
						var W = i.getPosition(),
							N = i.getSize(),
							Z = i.getRotation(),
							G = i.getScale(),
							g = -N.width * (A.x - M.x) * G.x,
							L = -N.height * (A.y - M.y) * G.y,
							t = C(Z),
							l = K(Z);
						i.setPosition(W.x + l * g - t * L, W.y + t * g + l * L)
					}
					j && j.endTransaction()
				}
			},
			getScale: function() {
				return this._scale
			},
			setScale: function(V, P) {
				var s, x = this;
				s = 2 === arguments.length ? {
					x: V,
					y: P
				} : V;
				var y = x.getScale();
				(y.x !== s.x || y.y !== s.y) && (x._scale = s, x.fp("scale", y, s))
			},
			getScaleTall: function() {
				return this._scaleTall
			},
			getScale3d: function() {
				var v = this,
					U = v._scaleTall,
					t = v.getScale();
				return [t.x, U, t.y]
			},
			getFinalScale3d: function() {
				var T = this,
					z = T.s3(),
					Z = T._dynamicScale3d,
					E = T.getScale3d();
				return z && (E[0] *= z[0], E[1] *= z[1], E[2] *= z[2]), Z && (E[0] *= Z[0], E[1] *= Z[1], E[2] *= Z[2]), E
			},
			setScaleTall: function($) {
				var l = this,
					V = l._scaleTall;
				V !== $ && (l._scaleTall = $, l.fp("scaleTall", V, $))
			},
			setScale3d: function(Y, h, N) {
				var O, c = this;
				O = "number" == typeof Y ? {
					x: Y,
					y: h,
					z: N
				} : Y.length ? {
					x: Y[0],
					y: Y[1],
					z: Y[2]
				} : Y, c.setScaleTall(O.y), c.setScale(O.x, O.z)
			},
			getCorners: function(k, I) {
				k == M && (k = 0), I == M && (I = k);
				var a = this,
					H = a.getAnchor(),
					n = a.getWidth(),
					F = a.getHeight(),
					X = -n * H.x - k,
					q = -F * H.y - I,
					G = n + 2 * k,
					Z = F + 2 * I,
					W = a.getMatrix();
				return [W.tf(X, q), W.tf(X, q + Z), W.tf(X + G, q + Z), W.tf(X + G, q)]
			},
			getEditControlPoints: function(I, i, K) {
				i == M && (i = 0), K == M && (K = i);
				var D = this,
					p = D.getAnchor(),
					f = D.getWidth(),
					X = D.getHeight(),
					C = -f * p.x - i,
					S = -X * p.y - K,
					T = f + 2 * i,
					t = X + 2 * K;
				if (I) return [{
					x: C,
					y: S
				}, {
					x: C,
					y: 0
				}, {
					x: C,
					y: S + t
				}, {
					x: 0,
					y: S + t
				}, {
					x: C + T,
					y: S + t
				}, {
					x: C + T,
					y: 0
				}, {
					x: C + T,
					y: S
				}, {
					x: 0,
					y: S
				}];
				var R = D.getMatrix();
				return [R.tf(C, S), R.tf(C, 0), R.tf(C, S + t), R.tf(0, S + t), R.tf(C + T, S + t), R.tf(C + T, 0), R.tf(C + T, S), R.tf(0, S)]
			},
			rotateAt: function(g, M, T) {
				var $ = this,
					l = $._position,
					Q = $._64O,
					r = new Gk(Q, l.x, l.y).tf(g, M),
					w = N(g * g + M * M),
					n = G(l.y - r.y, l.x - r.x) + T;
				$.setRotation(Q + T), $.p(r.x + w * K(n), r.y + w * C(n))
			},
			onParentChanged: function() {
				fb.superClass.onParentChanged.apply(this, arguments), this._8I()
			},
			_8I: function() {
				this._70O && this._70O.each(function(M) {
					M._7I()
				})
			},
			onPropertyChanged: function(T) {
				var R = this;
				fb.superClass.onPropertyChanged.call(R, T), R._69O && R._69O.each(function(m) {
					m.handleHostPropertyChange(T)
				}), R._49I && R._49I.each(function(y) {
					y.fp("agentChange", !0, !1)
				})
			},
			onHostChanged: function() {
				this.updateAttach()
			},
			handleHostPropertyChange: function(V) {
				this.updateAttach(V)
			},
			onStyleChanged: function(p) {
				fb.superClass.onStyleChanged.apply(this, arguments), mr[p] && this.updateAttach()
			},
			updateAttach: function(u) {
				var P = this;
				P._51I || _f || (P._51I = 1, P._71O(u), delete P._51I)
			},
			_71O: function(X) {
				var _, H, m, J, V, I, t = this,
					c = t._host,
					R = X ? X.property : M,
					K = X ? X.oldValue : M,
					Q = X ? X.newValue : M;
				if (c instanceof d.Grid) {
					if (R === He) t.setElevation(t._54O + Q - K);
					else if (!X || Rm[R]) {
						if (_ = t.s("attach.row.index"), H = t.s("attach.column.index"), m = c.getCellRect(_, H), !m) return;
						J = t.s("attach.row.span"), V = t.s("attach.column.span"), (1 !== J || 1 !== V) && (m = kb(m, c.getCellRect(_ + J - 1, H + V - 1))), Yo(m, t, "attach.padding", 1), t.setRect(m)
					}
				} else if (c instanceof Yq && (I = t.s("attach.index")) >= 0 && (!X || pk[R])) {
					var x = t.s("attach.thickness");
					x != M && t.setHeight(c.getThickness() * x);
					var h = t.s("attach.offset"),
						T = c.getPoints(),
						B = T.size();
					if (B > I) {
						var W = T.get(I),
							y = B === I + 1 ? T.get(0) : T.get(I + 1),
							A = [y.x - W.x, y.y - W.y],
							o = Zg(A);
						if (o) {
							t.s("attach.offset.relative") && (h *= o), t.s("attach.offset.opposite") && (h = o - h);
							var i = {
								x: W.x + A[0] / o * h,
								y: W.y + A[1] / o * h
							},
								w = t.s("attach.gap");
							w && (t.s("attach.gap.relative") && (w *= c.getThickness()), i = nr(M, i, y, w)), t.p(i), t.setRotation(G(A[1], A[0]))
						}
					}
				} else X && (R === vs ? t.translate(Q.x - K.x, Q.y - K.y) : R === He ? t.setElevation(t._54O + Q - K) : Jo[R] && t._11Q(c, R, Q - K))
			},
			_11Q: function(k, E, p) {
				var o = this,
					q = k.p3(),
					x = Yg(o.p3(), q),
					X = nd(),
					B = sb[o.getRotationMode()],
					R = B[0],
					j = B[1],
					D = B[2],
					J = vj[R],
					e = vj[j],
					f = vj[D];
				E === Qd && (E = "rotationY", p = -p), E === Qd + R ? (f(X, k[go + D]()), e(X, k[go + j]()), J(X, p), e(X, -k[go + j]()), f(X, -k[go + D]()), o[ac + R](o[go + R]() + p)) : E === Qd + j ? (f(X, k[go + D]()), e(X, p), f(X, -k[go + D]()), o[ac + j](o[go + j]() + p)) : E === Qd + D && (f(X, p), o[ac + D](o[go + D]() + p)), lc(x, X), o.p3(q[0] + x[0], q[1] + x[1], q[2] + x[2])
			},
			isHostOn: function(m) {
				var q = this;
				if (q._host && m && m._69O) for (var U = {}, h = q._host; h && h !== q && !U[h._id];) {
					if (h === m) return !0;
					U[h._id] = h, h = h._host
				}
				return !1
			},
			isLoopedHostOn: function(r) {
				return this.isHostOn(r) && r.isHostOn(this)
			},
			getSerializableProperties: function() {
				var T = fb.superClass.getSerializableProperties.call(this);
				return vq(T, {
					image: 1,
					host: 1,
					rotation: 1,
					rotationX: 1,
					rotationZ: 1,
					rotationMode: 1,
					position: 1,
					anchor: 1,
					anchorElevation: 1,
					scale: 1,
					scaleTall: 1,
					_width: 1,
					_height: 1,
					_tall: 1,
					elevation: 1
				}), T
			}
		});
		var bo = d.Edge = function(r, N) {
				var Y = this;
				im(bo, Y), Y.setSource(r), Y.setTarget(N)
			};
		Xq("Edge", Jc, {
			_icon: "edge_icon",
			getUIClass: function() {
				return Wq
			},
			_22Q: function() {
				return Gp
			},
			getSource: function() {
				return this._source
			},
			getTarget: function() {
				return this._target
			},
			getSourceAgent: function() {
				return this._40I
			},
			getTargetAgent: function() {
				return this._41I
			},
			setSource: function(H) {
				var D = this;
				if (D._source !== H) {
					var N = D._source;
					D._source = H, N && N._16I(D), H && H._2I(D), D._7I(), D.fp("source", N, H)
				}
			},
			setTarget: function(q) {
				var E = this;
				if (E._target !== q) {
					var N = E._target;
					E._target = q, N && N._18I(E), q && q._4I(E), E._7I(), E.fp("target", N, q)
				}
			},
			isLooped: function() {
				var y = this;
				return y._source === y._target && !! y._source && !! y._target
			},
			_7I: function() {
				var M, F = this,
					J = yo(F);
				F._40I !== J && (M = this._40I, M && M._15I(F), F._40I = J, J && J._1I(F), F.fp("sourceAgent", M, J), tm(M, F._41I), tm(J, F._41I));
				var z = Mm(F);
				F._41I !== z && (M = F._41I, M && M._17I(F), F._41I = z, z && z._3I(F), F.fp("targetAgent", M, z), tm(M, F._40I), tm(z, F._40I))
			},
			_22I: function(O) {
				this._52I = O, this.fp("edgeGroup", !0, !1)
			},
			getEdgeGroup: function() {
				return this._52I
			},
			isEdgeGroupHidden: function() {
				var l = this;
				return l._52I && l._52I.get(0) !== l && !l.getStyle(ym)
			},
			getEdgeGroupSize: function() {
				return this._52I ? this._52I.size() : 1
			},
			getEdgeGroupIndex: function() {
				return this._52I ? this._52I.indexOf(this) : 0
			},
			isEdgeGroupAgent: function() {
				var H = this,
					x = H._52I;
				return x && !H.getStyle(ym) && x.size() > 1 && H === x.get(0)
			},
			toggle: function() {
				var c = this._52I,
					$ = !this.s(ym);
				c && c.size() > 1 && (c.each(function(J) {
					J.s(ym, $)
				}), c.getSiblings().each(function(W) {
					W !== c && W.each(function(O) {
						O.fp("edgeGroup", M, W)
					})
				}))
			},
			setStyle: function(V, Q) {
				(V === sc || "edge.segments" === V) && (Q = ii(Q)), bo.superClass.setStyle.call(this, V, Q)
			},
			onStyleChanged: function(u) {
				bo.superClass.onStyleChanged.apply(this, arguments), Sh[u] && tm(this._41I, this._40I)
			},
			getSerializableProperties: function() {
				var M = bo.superClass.getSerializableProperties.call(this);
				return vq(M, {
					source: 1,
					target: 1
				}), M
			}
		});
		var Go = d.Group = function() {
				im(Go, this)
			};
		Xq("Group", fb, {
			_image: "group_image",
			_icon: "group_icon",
			_57O: !1,
			getUIClass: function() {
				return Kg
			},
			onChildAdded: function() {
				Go.superClass.onChildAdded.apply(this, arguments), this._81I()
			},
			onChildRemoved: function() {
				Go.superClass.onChildRemoved.apply(this, arguments), this._81I()
			},
			_81I: function() {
				var U = this;
				if (!U._54I && !_f) {
					var S = U.getChildrenRect();
					S && (U._53I = 1, U.p(Dd(U.s("group.position"), S, U.getSize())), delete U._53I)
				}
			},
			getChildrenRect: function() {
				var V, G = this;
				return G.eachChild(function(F) {
					V = kb(V, G.getChildRect(F))
				}), V
			},
			getChildRect: function(f) {
				var V;
				return pr(f) && f.s(sh) && (qr(f) && f.isExpanded() && f.eachChild(function(L) {
					V = kb(V, f.getChildRect(L))
				}), !V && f.getRect && (V = f.getRect())), V
			},
			setPosition: function(H, X) {
				var K = this;
				if (!K._54I) {
					var u;
					u = 2 === arguments.length ? {
						x: H,
						y: X
					} : H, _f || K._53I || (K._54I = 1, Mg(K._children, u.x - K._position.x, u.y - K._position.y), delete K._54I), Go.superClass.setPosition.call(this, u)
				}
			},
			toggle: function() {
				this.setExpanded(!this.isExpanded())
			},
			isExpanded: function() {
				return this._57O
			},
			setExpanded: function(X) {
				var h = this;
				if (h._57O !== X) {
					var q = h._57O;
					h._57O = X, h.fp("expanded", q, h._57O), h._8I()
				}
			},
			_8I: function() {
				Go.superClass._8I.call(this), this.eachChild(function(I) {
					pr(I) && I._8I()
				})
			},
			onStyleChanged: function($) {
				Go.superClass.onStyleChanged.apply(this, arguments), "group.position" === $ && this._81I()
			},
			getSerializableProperties: function() {
				var b = Go.superClass.getSerializableProperties.call(this);
				return b.expanded = 1, b
			}
		});
		var zm = d.Block = function() {
				im(zm, this)
			};
		Xq("Block", fb, {
			_icon: "block_icon",
			_clickThroughEnabled: !1,
			_syncSize: !0,
			ms_ac: ["clickThroughEnabled", "syncSize"],
			getUIClass: function() {
				return Yf
			},
			onChildAdded: function() {
				zm.superClass.onChildAdded.apply(this, arguments), this.updateFromChildren()
			},
			onChildRemoved: function() {
				zm.superClass.onChildRemoved.apply(this, arguments), this.updateFromChildren()
			},
			updateFromChildren: function() {
				var I = this;
				if (!_f && !I._updatingToChildren && I._syncSize) {
					var S, U, P, m, E, W = [],
						n = I.getRotation();
					if (I.eachChild(function(a) {
						pr(a) && W.push.apply(W, a.getCorners())
					}), W.length) {
						I._updatingFromChildren = 1;
						var i = K(-n),
							y = C(-n),
							F = 1 / 0,
							Y = -1 / 0,
							p = 1 / 0,
							d = -1 / 0;
						for (m = 0, E = W.length; E > m; m++) P = W[m], S = P.x, U = P.y, P.x = i * S - y * U, P.y = y * S + i * U, F = k(F, P.x), Y = D(Y, P.x), p = k(p, P.y), d = D(d, P.y);
						var v = I.getScale();
						I.setSize(R((Y - F) / v.x), R((d - p) / v.y));
						var g;
						v.x < 0 && (g = F, F = Y, Y = g), v.y < 0 && (g = p, p = d, d = g), i = K(n), y = C(n);
						var z = I.getAnchor();
						S = F + (Y - F) * z.x, U = p + (d - p) * z.y, I.setPosition(i * S - y * U, y * S + i * U), delete I._updatingFromChildren
					}
				}
			},
			setPosition: function(h, o) {
				var c = this;
				if (!c._updatingToChildren) {
					var N;
					N = 2 === arguments.length ? {
						x: h,
						y: o
					} : h, _f || c._updatingFromChildren || (c._updatingToChildren = 1, Mg(c._children, N.x - c._position.x, N.y - c._position.y), delete c._updatingToChildren), zm.superClass.setPosition.call(this, N)
				}
			},
			setWidth: function(u) {
				return this.setSize(u, this.getHeight())
			},
			setHeight: function(g) {
				return this.setSize(this.getWidth(), g)
			},
			setSize: function(D, p) {
				1 > D && (D = 1), 1 > p && (p = 1);
				var Q = this;
				if (!Q._updatingToChildren) {
					2 !== arguments.length && (p = D.height, D = D.width);
					var i = Q.getWidth(),
						J = Q.getHeight();
					if (D !== i && zm.superClass.setWidth.call(Q, D), p !== J && zm.superClass.setHeight.call(Q, p), !_f && !Q._updatingFromChildren) {
						Q._updatingToChildren = 1;
						var q = D / i,
							I = p / J;
						Q._adjustChildScaleOrSize(q, I, "size"), delete Q._updatingToChildren, Q.updateFromChildren()
					}
				}
			},
			_adjustChildScaleOrSize: function(W, w, B) {
				var e = this;
				if (e._syncSize) {
					var E = e.getPosition(),
						J = e.getRotation();
					e.getScale(), e.eachChild(function(R) {
						if (pr(R)) {
							var M = R.getPosition(),
								f = R.getRotation(),
								F = R.getWidth(),
								t = R.getHeight(),
								e = R.getScale(),
								m = e.x * F,
								H = e.y * t,
								x = new Gk(f, M.x, M.y, m, H);
							x.translate(-E.x, -E.y), x.rotate(-J), f = G(x.b * Math.sign(m), x.a * Math.sign(m)), x.scale(W, w);
							var A, j, r, l = K(f);
							if (Math.abs(l) < .001 ? (A = C(f), j = x.b / A, r = -x.c / A) : (j = x.a / l, r = x.d / l), "scale" === B) R.setScale(j / F, r / t);
							else if ("size" === B) {
								var N = j / e.x,
									u = r / e.y;
								R.setScale(Of(j) * Math.abs(e.x), Of(r) * Math.abs(e.y)), R.setSize(Math.max(.1, Math.abs(N)), Math.max(.1, Math.abs(u)))
							}
							x.rotate(J), x.translate(E.x, E.y), R.setPosition(x.tx, x.ty)
						}
					})
				}
			},
			_calcChangeFactor: function(K, w, F, O) {
				var j, p, $, B;
				return j = R(K), p = R(F), $ = j > p ? j / p : p / j, j = R(w), p = R(O), B = j > p ? j / p : p / j, D($, B)
			},
			setAnchor: function() {
				var a = this;
				if (!a._updatingToChildren) {
					var J = a.getAnchor();
					if (zm.superClass.setAnchor.apply(a, arguments), !_f && !a._updatingFromChildren && a._syncSize) {
						a._updatingToChildren = 1;
						var U = a.getAnchor();
						a.getPosition();
						var V = a.getSize(),
							j = a.getScale(),
							W = a.getRotation(),
							R = -V.width * j.x * (J.x - U.x),
							P = -V.height * j.y * (J.y - U.y),
							c = C(W),
							w = K(W),
							H = w * R - c * P,
							A = c * R + w * P;
						a.eachChild(function(X) {
							if (pr(X)) {
								var I = X.getPosition();
								X.setPosition(I.x - H, I.y - A)
							}
						}), delete a._updatingToChildren
					}
				}
			},
			setRotation: function(N) {
				var j = this;
				if (!j._updatingToChildren) {
					var H = j.getRotation();
					if (zm.superClass.setRotation.apply(j, arguments), !_f && !j._updatingFromChildren) {
						j._updatingToChildren = 1;
						var X = j.getPosition(),
							b = N - H;
						j.eachChild(function(t) {
							if (pr(t)) {
								var Q = t.getMatrix();
								Q.translate(-X.x, -X.y), Q.rotate(b), Q.translate(X.x, X.y);
								var d = Math.sign(t.getScale().x);
								t.setRotation(G(Q.b * d, Q.a * d)), t.setPosition(Q.tx, Q.ty)
							}
						}), delete j._updatingToChildren
					}
				}
			},
			setScale: function(v, Q) {
				var O = this;
				if (!O._updatingToChildren) {
					null == Q && (Q = v.y, v = v.x);
					var y = O.getScale();
					if (R(v) < .01 && (v = .01 * (Of(v) || Of(y.x))), R(Q) < .01 && (Q = .01 * (Of(Q) || Of(y.y))), zm.superClass.setScale.call(O, v, Q), !_f && !O._updatingFromChildren) {
						O._updatingToChildren = 1;
						var U = v / y.x,
							p = Q / y.y;
						O._adjustChildScaleOrSize(U, p, "size"), delete O._updatingToChildren, O.updateFromChildren()
					}
				}
			},
			getSerializableProperties: function() {
				var X = zm.superClass.getSerializableProperties.call(this);
				return X.clickThroughEnabled = 1, X.syncSize = 1, X
			}
		});
		var we = d.Grid = function() {
				im(d.Grid, this)
			};
		Xq("Grid", fb, {
			IRotatable: !1,
			_icon: "grid_icon",
			_image: M,
			getUIClass: function() {
				return Pl
			},
			setRotation: function() {},
			getCellRect: function(J, d) {
				var y = this,
					a = y.s("grid.row.count"),
					w = y.s("grid.column.count");
				if (0 >= a || 0 >= w || 0 > J || J >= a || 0 > d || d >= w) return M;
				var R, e, U, o = y.getRect(),
					O = y.s("grid.row.percents"),
					W = y.s("grid.column.percents");
				if (Yo(o, y, "grid.border", -1), O && O._as && (O = O._as), W && W._as && (W = W._as), O && O.length === a) {
					for (U = 0, R = 0; J > R; R++) U += o.height * O[R];
					o.y += U, o.height = o.height * O[J]
				} else o.height = o.height / a, o.y += o.height * J;
				if (W && W.length === w) {
					for (e = 0, R = 0; d > R; R++) e += o.width * W[R];
					o.x += e, o.width = o.width * W[d]
				} else o.width = o.width / w, o.x += o.width * d;
				return Td(o, -y.s("grid.gap")), o
			}
		});
		var Vo = d.Text = function() {
				im(Vo, this), this.setSize(100, 50), this.s("text", "TEXT")
			};
		Xq("Text", fb, {
			_icon: "text_icon",
			_image: "__text__",
			getUIClass: function() {
				return ff
			},
			setWidth: function(e) {
				e || (e = .001), Vo.superClass.setWidth.call(this, e)
			},
			setHeight: function(R) {
				R || (R = .001), Vo.superClass.setHeight.call(this, R)
			},
			toLabel: function() {
				return this._displayName || this._name || this.s("text")
			}
		}), Yd("__text__", {
			width: {
				value: 100,
				isSafeFunc: !0,
				func: function(j) {
					return j._width
				}
			},
			height: {
				value: 50,
				isSafeFunc: !0,
				func: function(t) {
					return t._height
				}
			},
			comps: [{
				type: "text",
				relative: !0,
				rect: [0, 0, 1, 1],
				text: {
					func: "style@text"
				},
				align: {
					func: "style@text.align"
				},
				vAlign: {
					func: "style@text.vAlign"
				},
				color: {
					func: "style@text.color"
				},
				font: {
					func: "style@text.font"
				},
				shadow: {
					func: "style@text.shadow"
				},
				shadowColor: {
					func: "style@text.shadow.color"
				},
				shadowBlur: {
					func: "style@text.shadow.blur"
				},
				shadowOffsetX: {
					func: "style@text.shadow.offset.x"
				},
				shadowOffsetY: {
					func: "style@text.shadow.offset.y"
				}
			}]
		});
		var Yq = d.Shape = function() {
				im(Yq, this), this._59O = new jg
			};
		Yq.__de__ = cb, Xq("Shape", fb, {
			ms_ac: ["thickness", "closePath"],
			_icon: "shape_icon",
			_thickness: 10,
			_closePath: !1,
			getUIClass: function() {
				return ul
			},
			_22Q: function() {
				return am
			},
			getLength: function(O) {
				return Zh(vk(this._59O, this._58O, O, this._closePath))
			},
			getSegments: function() {
				return this._58O
			},
			toSegments: function() {
				var l = this._58O;
				return l ? new jg(l._as.slice(0)) : l
			},
			setSegments: function(w) {
				var r = this._58O;
				w = w ? lo(w) ? new jg(w.slice(0)) : new jg(w._as.slice(0)) : null, (r && w && r._as.join(",") !== w._as.join(",") || r !== w) && (this._58O = w, this.fp("segments", r, w))
			},
			getPoints: function() {
				return this._59O
			},
			toPoints: function() {
				var x = this._59O;
				return new jg(x._as.slice(0))
			},
			setPoints: function(K, I) {
				var V = this,
					g = V._59O;
				K = K ? lo(K) ? new jg(K.slice(0)) : new jg(K._as.slice(0)) : new jg;
				var h, Z, N, z, r, F;
				I && (h = V.getPosition(), F = new Gk(V.getRotation(), 0, 0, V.getScale().x, V.getScale().y)), (g && K && g._as.join(",") !== K._as.join(",") || g !== K) && (V._59O = K, V.fs(), V.fp("points", g, K)), I && (Z = V.getPosition(), N = Z.x - h.x, z = Z.y - h.y, r = F.tf(N, z), V.setPosition(Z.x - N + r.x, Z.y - z + r.y))
			},
			addPoint: function(k, T, t) {
				var U = this.toPoints();
				U.add(k, T), this.setPoints(U, t)
			},
			setPoint: function(A, H, s) {
				var g = this.toPoints();
				g.set(A, H), this.setPoints(g, s)
			},
			removePointAt: function(Y) {
				var y = this.toPoints();
				y.removeAt(Y), this.setPoints(y)
			},
			setWidth: function(r) {
				var o = this;
				if (1 > r && (r = 1), !o._55I && !_f && o.getWidth()) {
					o._55I = 1;
					var e = o._position.x,
						z = r / o.getWidth(),
						E = o.toPoints(),
						W = new jg;
					E.each(function(t) {
						W.add({
							x: (t.x - e) * z + e,
							y: t.y,
							e: t.e
						})
					}), o.setPoints(W);
					var R = o.s("shape.gradient.pack");
					R && ld(R, [z, 0, 0, 1, e * (1 - z), 0]), o.fs(), delete o._55I
				}
				Yq.superClass.setWidth.call(o, r)
			},
			setHeight: function(A) {
				var r = this;
				if (1 > A && (A = 1), !r._55I && !_f && r.getHeight()) {
					r._55I = 1;
					var L = r._position.y,
						O = A / r.getHeight(),
						$ = r.toPoints(),
						B = new jg;
					$.each(function(Q) {
						B.add({
							x: Q.x,
							y: (Q.y - L) * O + L,
							e: Q.e
						})
					}), r.setPoints(B);
					var g = r.s("shape.gradient.pack");
					g && ld(g, [1, 0, 0, O, 0, L * (1 - O)]), r.fs(), delete r._55I
				}
				Yq.superClass.setHeight.call(r, A)
			},
			setAnchorElevation: function(D) {
				var m = this;
				if (m._55I = !0, !_f) {
					var I, r = D,
						P = m.getAnchorElevation(),
						T = m.getTall();
					I = T * (P - r), m.shiftPointsElevation(I)
				}
				Yq.superClass.setAnchorElevation.apply(m, arguments), delete m._55I
			},
			getShapeElevation: function() {
				var M = this,
					s = M._54O;
				return s - (M.getTall() || 0) * (M._anchorElevation - .5)
			},
			setAnchor: function(P, _, h) {
				var L = this;
				if (L._55I = !0, !_f) {
					var F, s, J;
					"number" == typeof P ? J = {
						x: P,
						y: _
					} : (J = P.length ? {
						x: P[0],
						y: P[1]
					} : P, h = _);
					var U = L.getAnchor(),
						Y = L.getSize();
					F = Y.width * (U.x - J.x), s = Y.height * (U.y - J.y), h || L.shiftPoints(F, s);
					var y = L.getPosition()
				}
				if (Yq.superClass.setAnchor.apply(L, arguments), !_f) {
					var D = L.getPosition();
					h && L.shiftPoints(D.x - y.x + F, D.y - y.y + s)
				}
				delete L._55I
			},
			shiftPoints: function(R, i) {
				var M = this,
					I = M.toPoints(),
					z = new jg;
				I.each(function(c) {
					z.add({
						x: c.x + R,
						y: c.y + i,
						e: c.e
					})
				}), M.setPoints(z), M.fs()
			},
			shiftPointsElevation: function(W) {
				var y = this;
				y._59O.each(function(I) {
					I.e == M ? I.e = W : I.e += W
				}), y.fs()
			},
			setPosition: function(V, f) {
				var R, S = this;
				if (!S._28Q) {
					if (S._28Q = 1, !S._55I && !_f) {
						R = 2 === arguments.length ? {
							x: V,
							y: f
						} : V;
						var I = R.x - S._position.x,
							x = R.y - S._position.y;
						if (0 === I && 0 === x) return delete S._28Q, void 0;
						S._55I = 1, S.shiftPoints(I, x);
						var z = S.s("shape.gradient.pack");
						z && ld(z, [1, 0, 0, 1, I, x]), delete S._55I
					}
					Yq.superClass.setPosition.apply(S, arguments), delete S._28Q
				}
			},
			fs: function() {
				this.fireShapeChange()
			},
			_70I: function() {
				var p = this;
				if (2 !== p._59O.size()) return !1;
				var k = p._58O;
				return k ? 2 === k.size() && 1 === k.get(0) && 2 === k.get(1) ? !0 : !1 : !0
			},
			fireShapeChange: function() {
				var r = this;
				if (!r._55I && !_f) {
					var O = cp(r._59O);
					O && (r._55I = 1, r.setRect(O), delete r._55I)
				}
				r.fp($i, !1, !0)
			},
			getSerializableProperties: function() {
				var Q = Yq.superClass.getSerializableProperties.call(this);
				return Q.segments = 1, Q.points = 1, Q.thickness = 1, Q.closePath = 1, Q
			}
		});
		var oo = d.Polyline = function() {
				im(oo, this), this.s({
					"shape.background": null,
					"shape.border.width": 2
				})
			};
		Xq("Polyline", Yq, {
			_icon: "polyline_icon",
			_22Q: function() {
				return re
			},
			getUIClass: function() {
				return hk
			},
			setClosePath: function() {},
			shiftPointsElevation: function() {
				var v = this;
				v._24Q || _f || (v._24Q = 1, oo.superClass.shiftPointsElevation.apply(v, arguments), delete v._24Q)
			},
			setTall: function(H) {
				var Z = this;
				if (!Z._24Q && !_f && Z.getTall()) {
					Z._24Q = 1;
					var B = Z._54O,
						O = H / Z.getTall();
					Z._59O.each(function(k) {
						k.e = k.e == M ? B : (k.e - B) * O + B
					}), Z.fs(), delete Z._24Q
				}
				oo.superClass.setTall.call(Z, H)
			},
			setElevation: function(w) {
				var n = this;
				if (!n._24Q && !_f) {
					n._24Q = 1;
					var R = w - n._54O;
					n._59O.each(function(_) {
						_.e == M ? _.e = w : _.e += R
					}), n.fs(), delete n._24Q
				}
				oo.superClass.setElevation.apply(n, arguments)
			},
			fireShapeChange: function() {
				var f = this,
					Y = f._59O;
				if (!f._24Q && !_f) {
					var F = Y.size();
					if (F) {
						var v = 1,
							C = Y.get(0),
							n = f._54O;
						C.e == M && (C.e = n);
						for (var q = C.e, E = 0; F > v; v++) {
							C = Y.get(v), C.e == M && (C.e = n);
							var Z = k(q, C.e),
								G = D(q + E, C.e);
							q = Z, E = G - Z
						}
						f._24Q = 1, f.setTall(E), f.setElevation(q + E * f._anchorElevation), delete f._24Q
					}
				}
				oo.superClass.fireShapeChange.apply(f, arguments)
			}
		});
		var ej = d.SubGraph = function() {
				im(ej, this)
			};
		Xq("SubGraph", fb, {
			ISubGraph: 1,
			_image: "subGraph_image",
			_icon: "subGraph_icon",
			_8I: function() {
				ej.superClass._8I.call(this), this.eachChild(function(I) {
					pr(I) && I._8I()
				})
			}
		});
		var Ei = d.RefGraph = function() {
				im(Ei, this)
			};
		Xq("RefGraph", zm, {
			_icon: "refGraph_icon",
			getRef: function() {
				return this._ref
			},
			setRef: function(k) {
				var z = this._ref;
				this._ref = k, this.fp("ref", z, k), this._pendingUpdateFromChidlren = !0, this.updateRef()
			},
			_21I: function() {
				Ei.superClass._21I.apply(this, arguments), this.updateRef()
			},
			updateRef: function() {
				var X = this;
				if (X.clearChildrenFromDataModel(), X._ref && X._dataModel) {
					X._xhrLoadHandler && (X._xhrLoadHandler.cancel = !0);
					var f = _f,
						d = X._xhrLoadHandler = function(v) {
							if (v && X._dataModel) {
								z.loadingRefGraph = !0;
								var t = X._pendingUpdateInfo = {
									needToRestore: f
								};
								f && (t.position = X.p(), t.width = X.getWidth(), t.height = X.getHeight(), t.rotation = X.getRotation(), t.anchor = X.getAnchor(), t.scale = X.getScale()), X.p(0, 0), X.setAnchor(.5, .5), X.setRotation(0), X.setScale(1, 1);
								var g = z.parse(v),
									d = X._dataModel.deserialize(g, X, {
										justDatas: !0
									});
								d.each(function(M) {
									M._refGraph = X
								}), X.checkPendingUpdateInfo(), z.loadingRefGraph = !1, z.handleRefGraphLoaded(X, d, g)
							}
						};
					z.xhrLoad(X._ref, function(r) {
						d.cancel || d(r)
					})
				}
			},
			checkPendingUpdateInfo: function() {
				var M = this,
					u = M._pendingUpdateInfo;
				if (!u) return M.onPendingUpdated && M.onPendingUpdated(), void 0;
				var B = !0;
				this.eachChild(function(y) {
					(y._pendingCheckImageJSON || y._pendingUpdateInfo) && (B = !1)
				}), B && (M._pendingUpdateInfo = null, M.updateFromChildren(), u.needToRestore && (M.setSize(u.width, u.height), M.setAnchor(u.anchor), M.setRotation(u.rotation), M.setScale(u.scale), M.p(u.position)), this.getParent() instanceof Ei && this.getParent().checkPendingUpdateInfo(), M.onPendingUpdated && M.onPendingUpdated())
			},
			getSerializableProperties: function() {
				var P = Ei.superClass.getSerializableProperties.call(this);
				return P.ref = 1, P
			}
		}), d.EdgeGroup = function(W, $) {
			this._70O = W, this._siblings = $;
			for (var c, Y, j = 0, v = W.size(), K = e[ym]; v > j; j++) if (c = W.get(j).getStyle(ym, !1), c != M) {
				K = c;
				break
			}
			K == M && (K = !0);
			var n = z.edgeGroupAgentFunc;
			for (n && (Y = n(W), Y && Y !== W.get(0) && (W.remove(Y), W.add(Y, 0))), j = 0; v > j; j++) W.get(j).s(ym, K)
		}, Xq("EdgeGroup", q, {
			getEdges: function() {
				return this._70O
			},
			size: function() {
				return this._70O.size()
			},
			get: function(W) {
				return this._70O.get(W)
			},
			indexOf: function(z) {
				return this._70O.indexOf(z)
			},
			each: function(e, K) {
				this._70O.each(e, K)
			},
			getSiblings: function() {
				return this._siblings
			},
			eachSiblingEdge: function(Q, s) {
				this._siblings.each(function(J) {
					J._70O.each(Q, s)
				})
			}
		});
		var cf = function(H, R, L) {
				var r = gi[H] = {
					type: H,
					action: R
				};
				if (L) for (var D in L) r[D] = L[D]
			};
		cf("host", function(G, u) {
			u && G.setHost(u)
		}, {
			"delete": {
				visible: function(W) {
					return W.getHost()
				},
				action: function(q) {
					q.setHost(null)
				}
			}
		}), cf("parent", function(U, u) {
			u && U.setParent(u)
		}, {
			"delete": {
				visible: function(S) {
					return S.getParent()
				},
				action: function(l) {
					l.setParent(null)
				}
			}
		}), cf("copySize", function(t, x) {
			if (x) {
				var Y = x.getSize();
				t.setSize(Y)
			}
		}), cf("copyRotation", function(Z, B) {
			if (B) {
				var P = B.getRotation();
				Z.setRotation(P)
			}
		}), cf("edge", function(L, D) {
			if (D) {
				var b = new d.Edge(L, D);
				L.dm().add(b)
			}
		});
		var Ah = "host";
		vq(z, {
			setConnectAction: cf,
			getConnectAction: function(v) {
				return v = v || Ah, gi[v]
			},
			doConnectAction: function(s, j, C) {
				C = C || Ah;
				var O = gi[C];
				if (!O) return !1;
				var f = O.action;
				return f ? (f.call(null, s, j), !0) : !1
			},
			doDeleteConnectionAction: function(f, A) {
				A = A || Ah;
				var h = gi[A];
				if (!h || !h.delete) return !1;
				var C = h.delete.action;
				return C ? (C.call(null, f), !0) : !1
			},
			getCurrentConnectActionType: function() {
				return Ah
			},
			setCurrentConnectActionType: function(m) {
				return gi[m] ? (Ah = m, !0) : !1
			}
		});
		var Op = d.JSONSerializer = function(I, D) {
				this.dm = this._dataModel = I, this._hierarchical = z.forceHierarchicalSerialization ? !0 : D == M ? I.isHierarchicalRendering() : D
			};
		Xq("JSONSerializer", q, {
			ms_ac: ["hierarchical"],
			serialize: function(W) {
				return z.stringify(this.toJSON(), W)
			},
			toJSON: function() {
				var J = this,
					B = J.dm,
					S = B.getRoots(),
					v = J.json = {
						v: z.getVersion(),
						p: {},
						a: {},
						d: []
					},
					t = B.getSerializableAttrs();
				B.getInit() && (v.init = B.getInit()), B.getName() && (v.p.name = B.getName()), B.getBackground() && (v.p.background = B.getBackground()), B.getLayers() && (v.p.layers = B.getLayers()), v.p.autoAdjustIndex = B.isAutoAdjustIndex(), v.p.hierarchicalRendering = B.isHierarchicalRendering();
				for (var D in t) {
					var E = B.a(D);
					E !== r && J[ge](D, E, v.a)
				}
				return ei(v.a) && delete v.a, J._hierarchical ? S.each(J.serializeData, this) : B.each(function(l) {
					J.serializeData(l)
				}), v
			},
			isSerializable: function() {
				return !0
			},
			getProperties: function(S) {
				return S.getSerializableProperties()
			},
			getStyles: function(l) {
				return l.getSerializableStyles()
			},
			getAttrs: function(o) {
				return o.getSerializableAttrs()
			},
			serializeData: function(c) {
				var $ = this;
				if ($.isSerializable(c) && !c._refGraph) {
					var Z, R, g, e, B = Tp(c.getClassName()) || c.getClass(),
						b = new B,
						f = {
							c: c.getClassName(),
							i: c.getId(),
							p: {},
							s: {},
							a: {}
						};
					$.json.d.push(f), Z = $.getProperties(c);
					for (R in Z) / ^ _ / .test(R) ? (g = c[R], g !== b[R] && $[ge](R.substr(1), g, f.p)) : (e = Hh(R), c[e] && (g = c[e](), g !== b[e]() && $[ge](R, g, f.p)));
					Z = $.getStyles(c);
					for (R in Z) g = c.s(R), g !== b.s(R) && $[ge](R, g, f.s);
					Z = $.getAttrs(c);
					for (R in Z) g = c.a(R), g !== b.a(R) && $[ge](R, g, f.a);
					ei(f.p) && delete f.p, ei(f.s) && delete f.s, ei(f.a) && delete f.a
				}
				$._hierarchical && c.getChildren().each($.serializeData, $)
			},
			serializeValue: function(z, o, q) {
				_n(o) ? o = {
					__a: o._as
				} : o instanceof Jc && (o = {
					__i: o.getId()
				}), q[z] = o
			},
			deserialize: function(F, _, H) {
				var m = this,
					h = m.dm;
				h.beginTransaction(), _f = !0, H = Gc(H) ? {
					setId: H
				} : H || {}, F = m.json = bc(F) ? z.parse(F) : F, m._82I = {};
				var J = new jg,
					c = new jg,
					g = 0,
					A = F.d.length;
				if (H.justDatas || (Vb(F.init) && F.init(h), h.setInit(F.init)), !H.justDatas) {
					for (var C in F.a) h.a(C, m[yi](F.a[C]));
					for (var w in F.p) h[kf(w)](F.p[w])
				}
				for (; A > g; g++) {
					var e = F.d[g],
						r = Tp(e.c),
						O = new r,
						W = e.i;
					H.setId && W != M && (O._id = W), m._82I[W] = O, J.add(O), c.add(e)
				}
				for (g = 0; A > g; g++) m.deserializeData(J.get(g), c.get(g));
				return J.each(function(n) {
					_ && !n.getParent() && n.setParent(_), h.add(n)
				}), _f = !1, h.endTransaction(), J
			},
			deserializeData: function(e, k) {
				for (var W in k.p) e[kf(W)](this[yi](k.p[W]));
				for (W in k.s) e.s(W, this[yi](k.s[W]));
				for (W in k.a) e.a(W, this[yi](k.a[W]))
			},
			deserializeValue: function(_) {
				if (Hj(_)) {
					var z = _.__i;
					if (z != M) return this._82I[z];
					if (z = _.__a, lo(z)) return new jg(z)
				}
				return _
			}
		}), vq(Od, {
			serialize: function(U, T) {
				return new Op(this, T).serialize(U)
			},
			toJSON: function(q) {
				return new Op(this, q).toJSON()
			},
			deserialize: function(O, C, F) {
				return new Op(this).deserialize(O, C, F)
			}
		}), bb.GraphView = function(_) {
			var p = this;
			p._24I = {}, p._34I = new jg, p._25I = {}, p._56I = {}, p._view = _h(1, p), p._canvas = Yk(p._view), p.dm(_ ? _ : new Od), this._coreInteractor = new af(this), p.setEditable(!1), p.setScrollBarVisible(z.graphViewScrollBarVisible)
		}, hj("GraphView", q, {
			ms_v: 1,
			ms_gv: 1,
			ms_bnb: 1,
			ms_tip: 1,
			ms_dm: 1,
			ms_lp: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			_52o: 1,
			_51o: 1,
			ms_ac: [ni, ic, Cp, uc, "resettable", "editInteractor", mi, "pannable", "rectSelectable", "autoScrollZone", Eh, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "anchorEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
			_resettable: z.graphViewResettable,
			_pannable: z.graphViewPannable,
			_rectSelectable: z.graphViewRectSelectable,
			_autoScrollZone: z.graphViewAutoScrollZone,
			_rectSelectBackground: z.graphViewRectSelectBackground,
			_rectSelectBorderColor: z.graphViewRectSelectBorderColor,
			_editPointSize: z.graphViewEditPointSize,
			_editPointBorderColor: z.graphViewEditPointBorderColor,
			_editPointBackground: z.graphViewEditPointBackground,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoHideScrollBar: zf,
			_autoMakeVisible: mh,
			getCoreInteractor: function() {
				return this._coreInteractor
			},
			getLayers: function() {
				return this._dataModel.getLayers()
			},
			setLayers: function(y) {
				this._dataModel.setLayers(y)
			},
			setEditable: function(X) {
				var j = this,
					p = j.__interactorMap__;
				if (!p) {
					var B = bb.XEditInteractor;
					p = j.__interactorMap__ = {
						scrollBar: new zp(j),
						select: new rm(j),
						edit: B ? new B(j) : new rl(j),
						move: new Am(j),
						"default": new Nh(j),
						touch: new Jb(j, {
							editable: !1
						})
					}
				}
				X ? (j._uieditable = !0, j.setInteractors([p.scrollBar, p.select, p.edit, p.move, p.
			default, p.touch])) : (j._uieditable = !1, j.setInteractors([p.scrollBar, p.select, p.move, p.
			default, p.touch]))
			},
			getCanvas: function() {
				return this._canvas
			},
			_33I: function(D) {
				var l = D.getUIClass();
				return l ? new l(this, D) : M
			},
			getDataUI: function(D) {
				var F = this,
					C = F._25I[D._id];
				return C === r && (C = F._33I(D), F._25I[D._id] = C), C
			},
			getNodeRect: function(W) {
				return z.getNodeRect(this, W)
			},
			getEdgeInfo: function(N) {
				var V = this.getDataUI(N);
				return V ? (V._79o(), V._78o) : null
			},
			getEdgeSourcePosition: function(N) {
				var x = this,
					l = x.getDataUI(N),
					Z = l.s,
					k = l._data._40I;
				return Jf(x, k, Z("edge.source.position"), Z("edge.source.offset.x"), Z("edge.source.offset.y"), Z("edge.source.anchor.x"), Z("edge.source.anchor.y"))
			},
			getEdgeTargetPosition: function(J) {
				var S = this,
					s = S.getDataUI(J),
					c = s.s,
					K = s._data._41I;
				return Jf(S, K, c("edge.target.position"), c("edge.target.offset.x"), c("edge.target.offset.y"), c("edge.target.anchor.x"), c("edge.target.anchor.y"))
			},
			invalidateAll: function(Q) {
				var K = this;
				if (Q) {
					for (var e in K._25I) {
						var c = K._25I[e];
						c && c.dispose()
					}
					K._25I = {}, K._56I = {}, K._24I = {}, K._34I.clear(), K.redraw()
				} else K.dm().each(function(r) {
					K.invalidateData(r)
				})
			},
			invalidateSelection: function() {
				var q = this;
				q.sm().each(function(A) {
					q.invalidateData(A)
				})
			},
			invalidateData: function(F) {
				var h = this;
				h._24I[F._id] = F, h._21Q(F), h.iv()
			},
			_21Q: function(k) {
				var P = this,
					l = P._24I;
				if (Jj(k) && ho[k.s(Yn)]) {
					var Z = k.getSourceAgent();
					Z && Z.getAgentEdges().each(function(E) {
						l[E._id] = E
					}), Z = k.getTargetAgent(), Z && Z.getAgentEdges().each(function(D) {
						l[D._id] = D
					}), P.iv()
				}
			},
			redraw: function(j) {
				var K = this;
				K._32I || (j ? K._34I.add(j) : (K._32I = 1, K._34I.clear()), K.iv())
			},
			each: function(E, Z) {
				var c, O, B, z = 0,
					A = this.getLayers(),
					e = this._dataModel,
					V = e._datas._as,
					W = V.length;
				if (A) {
					for (var Y = A.length; Y > z; z++) if (B = A[z], Hj(B) && (B = B.name), e.isHierarchicalRendering()) {
						var u = function(X) {
								return X._layer === B ? Z ? E.call(Z, X) : E(X) : void 0
							};
						if (this._dataModel.eachByHierarchical(u) === !1) return
					} else for (var d = 0; W > d; d++) if (c = V[d], c._layer === B && (O = Z ? E.call(Z, c) : E(c), O === !1)) return
				} else if (e.isHierarchicalRendering()) this._dataModel.eachByHierarchical(E, null, Z);
				else for (; W > z; z++) if (c = V[z], O = Z ? E.call(Z, c) : E(c), O === !1) return
			},
			reverseEach: function(U, s) {
				var M, g, b, l, c = this._dataModel,
					$ = c._layers,
					h = c._datas._as,
					p = h.length;
				if ($) {
					for (M = $.length - 1; M >= 0; M--) if (l = $[M], Hj(l) && (l = l.name), c.isHierarchicalRendering()) {
						var X = function(j) {
								return j._layer === l ? s ? U.call(s, j) : U(j) : void 0
							};
						if (c.reverseEachByHierarchical(X) === !1) return
					} else for (var q = p - 1; q >= 0; q--) if (g = h[q], g._layer === l && (b = s ? U.call(s, g) : U(g), b === !1)) return
				} else if (c.isHierarchicalRendering()) c.reverseEachByHierarchical(U, null, s);
				else for (M = p - 1; M >= 0; M--) if (g = h[M], b = s ? U.call(s, g) : U(g), b === !1) return
			},
			getViewRect: function() {
				return this._29I
			},
			getContentRect: function() {
				var n = this,
					z = n._84I;
				if (!z) {
					var H = this.dm().a("width"),
						I = this.dm().a("height");
					H > 0 && I > 0 ? n._84I = {
						x: 0,
						y: 0,
						width: H,
						height: I
					} : (n.each(function(u) {
						n.isVisible(u) && (z = kb(z, n.getDataUIBounds(u)))
					}), n._84I = z ? z : kp)
				}
				return n._84I
			},
			getScrollRect: function() {
				return kb(this.getContentRect(), this._29I)
			},
			makeCenter: function(p, l, s) {
				var x = this;
				if (!x.getWidth() || !x.getHeight()) return s || We(x.centerData, x, [p, l, !0], 500), void 0;
				x.makeVisible(p), x.validate();
				var A = x.getDataUIBounds(p);
				if (A) {
					var j = x.getWidth(),
						o = x.getHeight(),
						V = A.x + A.width / 2,
						z = A.y + A.height / 2,
						w = -V * x._zoom + j / 2,
						G = -z * x._zoom + o / 2;
					x.setTranslate(w, G, l)
				}
			},
			fitData: function(I, e, X, Q, y) {
				var R = this;
				if (!R.getWidth() || !R.getHeight()) return y || We(R.fitData, R, [I, e, X, Q, !0], 500), void 0;
				var j = function() {
						R.makeVisible(I), R.validate();
						var u = R.getDataUIBounds(I);
						u && (u = Hg(u), Td(u, X == M ? 20 : X), R.fitRect(u, e, Q))
					};
				e ? z.callWhenLoaded(j) : j()
			},
			fitContent: function(J, o, X, V) {
				var K = this;
				if (!K.getWidth() || !K.getHeight()) return V || We(K.fitContent, K, [J, o, X, !0], 500), void 0;
				var x = function() {
						K.validate();
						var i = Hg(K.getContentRect());
						Td(i, o == M ? 20 : o), K.fitRect(i, J, X)
					};
				J ? z.callWhenLoaded(x) : x()
			},
			fitRect: function(Z, W, C) {
				var o = this,
					K = o.getWidth(),
					h = o.getHeight(),
					R = Z.x + Z.width / 2,
					V = Z.y + Z.height / 2,
					i = k(K / Z.width, h / Z.height),
					P = o._zoom,
					T = -R * P + K / 2,
					J = -V * P + h / 2;
				0 === i || isNaN(i) || (C && (i = k(1, i)), W ? o.setTranslate(T, J, {
					finishFunc: function() {
						o.setZoom(i, W)
					}
				}) : (o.setTranslate(T, J), o.setZoom(i)))
			},
			toCanvas: function(D, $) {
				$ = $ || this._zoom, this.validateImpl();
				var x = this,
					F = x.getContentRect();
				F.width || (F.width = 10), F.height || (F.height = 10);
				var j = Yk(),
					L = F.x * $,
					i = F.y * $,
					p = F.width * $,
					H = F.height * $;
				Xo(j, p, H, 1);
				var q = js(j);
				return D = D || this._dataModel.getBackground(), D && kq(q, 0, 0, p, H, D), Wj(q, -L, -i), q.scale($, $), x._42(q), q.restore(), j
			},
			toDataURL: function(I, y, P) {
				return this.toCanvas(I, P).toDataURL(y || "image/png", 1)
			},
			getClipBounds: function() {
				return this._74O
			},
			_42: function(C, t) {
				var e, g, N = this;
				N._93db(C, t), N.each(function(i) {
					N._56I[i._id] && (e = N.getDataUI(i), e && (g = e._79o(), d.HtmlNode && i instanceof d.HtmlNode ? e._42(C) : (!t || td(t, g)) && e._42(C)))
				}), N._92db(C, t)
			},
			validateImpl: function() {
				var G, C, q, r, e, Z = this,
					f = Z.tx(),
					c = Z.ty(),
					Q = Z._zoom,
					$ = Z._canvas,
					j = this.getWidth(),
					o = this.getHeight(),
					h = Z._29I,
					l = {
						x: -f / Q,
						y: -c / Q,
						width: j / Q,
						height: o / Q
					},
					g = {},
					A = Z._34I,
					U = Z._24I,
					m = Z._32I,
					T = Z._23I;
				Z._24I = {}, (j !== $.clientWidth || o !== $.clientHeight) && (Xo($, j, o), m = 1), m || Il(l, h) || (m = 1), Z._29I = l, Z.each(function(B) {
					C = B._id;
					var G = g[C] = Z.isVisible(B);
					G !== Z._56I[C] && (U[C] = B, q = Z.getDataUI(U[C]), q && q._84o(G), Z._84o(B, G))
				}, Z);
				for (C in U) q = Z.getDataUI(U[C]), q && (!m && Z._56I[C] && (e = q._79o(), e && A.add(e)), q.invalidate()), Z._83I = 1;
				if (Z._56I = g, !m) for (C in U) g[C] && (q = Z.getDataUI(U[C]), q && (e = q._79o(), e && A.add(e)));
				if (m ? r = l : (A.each(function(b) {
					td(l, b) && (r = kb(r, b))
				}), r && (Td(r, D(1, 1 / Q)), r.x = w(r.x * Q) / Q, r.y = w(r.y * Q) / Q, r.width = b(r.width * Q) / Q, r.height = b(r.height * Q) / Q, r = Di(l, r))), Z._74O = r, r) {
					G = js($);
					var d = r.x,
						E = r.y,
						J = r.width,
						O = r.height;
					d = Math.floor((d * Q + f) * Gl), E = Math.floor((E * Q + c) * Gl), J = Math.ceil(J * Q * Gl) + 1, O = Math.ceil(O * Q * Gl) + 1, G.beginPath(), G.rect(d, E, J, O), G.clip(), G.clearRect(d, E, J, O), sl(G, f, c, Q), Z._42(G, r), G.restore(), delete Z._74O
				}
				if (A.clear(), delete Z._32I, T && j > 0 && o > 0) {
					var q = Z.getDataUI(T);
					if (q) {
						var e = q._79o(),
							s = Z._29I,
							i = s.x,
							V = s.y,
							L = s.width,
							_ = s.height,
							Q = Z._zoom;
						e && !td(e, s) && (e.x + e.width < i && Z.tx(-e.x * Q), e.x > i + L && Z.tx(-(e.x + e.width - L) * Q), e.y + e.height < V && Z.ty(-e.y * Q), e.y > V + _ && Z.ty(-(e.y + e.height - _) * Q))
					}
					delete Z._23I
				}
				Z._83I && (delete Z._83I, delete Z._84I), Z._98O(), ei(Z._24I) || We(Z.iv, Z)
			},
			isScrollBarVisible: function() {
				return !!this._79O
			},
			setScrollBarVisible: function(Y) {
				var m = this;
				Y !== m.isScrollBarVisible() && (Y ? (gm(m._view, m._79O = Dn()), gm(m._79O, m._27I = Dn()), gm(m._79O, m._28I = Dn())) : (Er(m._79O), delete m._79O, delete m._27I, delete m._28I), m.fp("scrollBarVisible", !Y, Y))
			},
			showScrollBar: function() {
				var L = this;
				L._79O && (L._85I || (u(function() {
					L._86I()
				}, zo), L.iv()), L._85I = new Date)
			},
			_86I: function() {
				var t = this;
				if (t._85I) {
					var p = new Date,
						o = p.getTime();
					o - t._85I.getTime() >= zo ? (delete t._85I, t.iv()) : u(function() {
						t._86I()
					}, zo)
				}
			},
			_98O: function() {
				var $ = this,
					M = this._27I,
					b = this._28I;
				if ($._79O) {
					if ($._autoHideScrollBar && !$._85I) return M.style.visibility = ae, b.style.visibility = ae, void 0;
					var P = $.getScrollBarColor(),
						x = $._zoom,
						C = $.getScrollBarSize(),
						Z = $.getViewRect(),
						W = $.getScrollRect(),
						Y = Z.height * x,
						n = W.height * x,
						z = Z.width * x - C - 2,
						c = Y * ((Z.y - W.y) * x / n),
						O = Y * (Y / n),
						k = M.style;
					n - .5 > Y ? (pm > O && (c = c + O / 2 - pm / 2, 0 > c && (c = 0), c + pm > Y && (c = Y - pm), O = pm), Mb(M, z, c, C, O), k.visibility = gj, k.background = P, k.borderRadius = C / 2 + Ub) : k.visibility = ae;
					var H = Z.width * x,
						r = W.width * x,
						c = Z.height * x - C - 2,
						z = H * ((Z.x - W.x) * x / r),
						N = H * (H / r),
						k = b.style;
					r - .5 > H ? (pm > N && (z = z + N / 2 - pm / 2, 0 > z && (z = 0), z + pm > H && (z = H - pm), N = pm), Mb(b, z, c, N, C), k.visibility = gj, k.background = P, k.borderRadius = C / 2 + Ub) : k.visibility = ae
				}
			},
			setDataModel: function($) {
				var e = this,
					t = e._dataModel,
					E = e._selectionModel;
				t !== $ && (t && (t.ump(e.handleDataModelPropertyChange, e), t.umm(e.handleDataModelChange, e), t.umd(e.handleDataPropertyChange, e), t.removeIndexChangeListener(e._75O, e), t.removeHierarchyChangeListener(e.handleHierarchyChange, e), E || t.sm().ums(e.handleSelectionChange, e)), e._dataModel = $, $.mp(e.handleDataModelPropertyChange, e), $.mm(e.handleDataModelChange, e), $.md(e.handleDataPropertyChange, e), $.addIndexChangeListener(e._75O, e), $.addHierarchyChangeListener(e.handleHierarchyChange, e), E ? E._21I($) : $.sm().ms(e.handleSelectionChange, e), e.invalidateAll(!0), e.fp(Ke, t, $), e._canvas.style.background = $.getBackground() || "")
			},
			getLayersInfo: function() {
				if (this._layersInfo === r) {
					var d = this.getLayers();
					d ? (this._layersInfo = {}, d.forEach(function(V) {
						var A = Hj(V) ? V.name : V;
						this._layersInfo[A] = V
					}, this)) : this._layersInfo = null
				}
				return this._layersInfo
			},
			updateLayers: function() {
				this._layersInfo = r, this.invalidateSelection(), this.redraw()
			},
			handleDataModelPropertyChange: function(T) {
				if ("background" === T.property) {
					var D = this._canvas.style.background,
						f = T.newValue || "";
					this._canvas.style.background = f, this.fp("canvasBackground", D, f)
				} else "a:width" === T.property || "a:height" === T.property ? (this._83I = 1, this.redraw()) : "layers" === T.property ? this.updateLayers() : "hierarchicalRendering" === T.property && this.redraw()
			},
			handleDataPropertyChange: function(B) {
				this.dm().isHierarchicalRendering() && "parent" === B.property && B.data.hasChildren() && this.redraw(), this.invalidateData(B.data)
			},
			onPropertyChanged: function(y) {
				var l = this,
					g = y.property;
				if (l.redraw(), "zoom" === g) {
					var f = l.sm().getSelection();
					f.size() && f.each(function(k) {
						k.invalidate()
					})
				}
				Vm[g] ? l.showScrollBar() : g === mi && l.onCurrentSubGraphChanged(y)
			},
			onCurrentSubGraphChanged: function() {
				this.sm().cs(), this.reset()
			},
			handleDataModelChange: function(c) {
				var X = this,
					W = c.kind,
					_ = c.data;
				if (X._83I = 1, "add" === W) X.invalidateData(_), Jj(_) && _.getEdgeGroup() && _.getEdgeGroup().eachSiblingEdge(X.invalidateData, X);
				else if (W === pi) {
					X._21Q(_);
					var D = _._id,
						Q = X._25I[D];
					if (Q) {
						if (X._56I[D]) {
							var a = Q._79o();
							a && X.redraw(a)
						}
						Q.dispose(), delete X._25I[D], delete X._24I[D], delete X._56I[D]
					}
					_ === X._currentSubGraph && X.setCurrentSubGraph(M)
				} else W === vd && (X.invalidateAll(!0), X.setCurrentSubGraph(M))
			},
			_75O: function(H) {
				this.invalidateData(H.data)
			},
			handleHierarchyChange: function(b) {
				this.dm().isHierarchicalRendering() && b.data.hasChildren() && this.redraw(), this.invalidateData(b.data)
			},
			adjustIndex: function(L) {
				var t = this;
				if (t.isVisible(L)) {
					for (var x = L; x._parent && t.isVisible(x._parent);) x = x._parent;
					x && x !== L && t._dataModel.adjustIndex(x), t._dataModel.adjustIndex(L)
				}
			},
			getImage: function(S) {
				return S.getImage()
			},
			getSelectWidth: function(U) {
				return U.s("select.width")
			},
			isSelectable: function(X) {
				if (!this._clickThroughChecking && X.getParent() instanceof zm && X.getParent().isSyncSize()) return !1;
				var n = this.getLayersInfo();
				if (n) {
					var I = n[X._layer];
					if (I && I.selectable === !1) return !1
				}
				return X.s("2d.selectable") && this.sm().isSelectable(X)
			},
			isMovable: function(S) {
				var R = this;
				if (Jj(S) && S.getStyle(Yn) !== co) return !1;
				var d = this.getLayersInfo();
				if (d) {
					var $ = d[S._layer];
					if ($ && $.movable === !1) return !1
				}
				return S.s("2d.movable") ? R._movableFunc ? R._movableFunc(S) : !0 : !1
			},
			isEditable: function(i) {
				var w = this;
				if (d._uiSerializing) return w._uieditable;
				if (!w._editInteractor || !w.isSelected(i)) return !1;
				if (qr(i)) {
					var j = w.getDataUI(i);
					if (!j || j._88I) return !1
				}
				if (Jj(i) && i.getStyle(Yn) !== co) return !1;
				var I = this.getLayersInfo();
				if (I) {
					var s = I[i._layer];
					if (s && s.editable === !1) return !1
				}
				return i.s("2d.editable") ? w._editableFunc ? w._editableFunc(i) : !0 : !1
			},
			handleDelete: function() {
				this._editInteractor && (this._editInteractor.handleDelete ? this._editInteractor.handleDelete() : this.removeSelection())
			},
			isPointEditable: function(x) {
				return pr(x) && 0 !== x.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(x) : !0
			},
			isRectEditable: function(q) {
				return this._rectEditableFunc ? this._rectEditableFunc(q) : !0
			},
			isAnchorEditable: function(r) {
				return this._anchorEditableFunc ? this._anchorEditableFunc(r) : !0
			},
			isRotationEditable: function(V) {
				return V.setRotation && V.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(V) : !0 : !1
			},
			getRotationPoint: function(E) {
				var o = E.getAnchor(),
					h = E.getScale(),
					V = this._zoom,
					N = Kj(E.getRotation(), 0, -E.getHeight() * h.y * o.y - (h.y < 0 ? -1 : 1) * (Z ? 32 : 16) / V),
					x = E.p();
				return N.x += x.x, N.y += x.y, N
			},
			getLogicalPoint: function(n) {
				var A = this;
				return Vd(n, A._canvas, A.tx(), A.ty(), A._zoom, A._zoom)
			},
			getSelectedDataAt: function(E) {
				var w = this;
				return this.getDataAt(E, function(j) {
					return w.isSelected(j)
				})
			},
			getDataInfoAt: function(V, U, k) {
				var c, u = this.lp(V),
					H = this.getDataAt(u, U, k);
				if (H) {
					var l = this.getDataUI(H);
					c = {
						data: H,
						ui: l
					};
					var b = l._38o;
					if (b) {
						var C = b.icons;
						for (var _ in C) {
							var v = C[_],
								m = b.rects[_];
							if (m) for (var x = El(v.names, H, this), I = x ? x.length : 0, q = m.rotation, N = 0; I > N; N++) {
								var Q = x[N],
									P = m[N];
								if (Gn(P, u, q)) return c.part = "icons", c.icon = Q, c.rect = P, c.index = N, c.rotation = q, c
							}
						}
					}
					if (this.isNoteVisible(H)) {
						if (l.note2Info && Gn(l.note2Info.clickRect, u, M, l.note2Info.scale)) return c.part = "note2", c;
						if (l.noteInfo && Gn(l.noteInfo.clickRect, u, M, l.noteInfo.scale)) return c.part = "note", c
					}
					if (this.isLabelVisible(H)) {
						if (l.label2Info && Gn(l.label2Info.rect, u, l.label2Info.rotation, l.label2Info.scale)) return c.part = "label2", c;
						if (l.labelInfo && Gn(l.labelInfo.rect, u, l.labelInfo.rotation, l.labelInfo.scale)) return c.part = "label", c
					}
					if (H.isInRect && H.isInRect(u)) return c.part = "rect", c
				}
				return c
			},
			getDataAt: function(S, W, r) {
				S.target && (S = this.lp(S));
				var g, O = this._zoom;
				return this.reverseEach(function(i) {
					return (W ? W(i) : this.isSelectable(i)) && this.rectIntersects(i, Ql(S.x, S.y, r, O)) ? (g = i, !1) : void 0
				}, this), g
			},
			getIconInfoAt: function(t, Q) {
				var x = this;
				if (t.target && (t = x.lp(t)), Q || (Q = x.getDataAt(t)), Q) {
					var U = x.getDataUI(Q);
					if (U && U._38o) {
						var w, a = U._38o,
							j = new jg;
						for (w in a.icons) j.add(w);
						for (var c = j.size() - 1; c >= 0; c--) {
							w = j.get(c);
							for (var R = a.rects[w], s = R.rotation, S = R.length - 1; S >= 0; S--) {
								var Z = R[S],
									W = Z.width,
									J = Z.height,
									q = {
										x: t.x - Z.x - W / 2,
										y: t.y - Z.y - J / 2
									};
								s != M && (q = Kj(-s, q.x, q.y));
								var Z = {
									x: -W / 2,
									y: -J / 2,
									width: W,
									height: J
								};
								if (Gn(Z, q)) return {
									key: w,
									index: S,
									name: a.icons[w].names[S],
									rect: R[S],
									point: t,
									rotation: s,
									relativeRect: Z,
									relativePoint: q,
									data: Q
								}
							}
						}
					}
				}
				return M
			},
			getDatasInRect: function(H, e, f) {
				f === r && (f = 1);
				var Q = this,
					C = new jg;
				return Q.reverseEach(function(u) {
					f && !Q.isSelectable(u) || (e ? Q.rectIntersects(u, H) : Q.rectContains(u, H)) && C.add(u)
				}), C
			},
			moveSelection: function(t, N) {
				var o = this;
				o.dm().beginTransaction(), Mg(o.sm().toSelection(o.isMovable, o), t, N), o.dm().endTransaction()
			},
			moveDatas: function(n, O, t) {
				var h = this;
				h.dm().beginTransaction(), n instanceof jg || (n = new jg(n)), Mg(n, O, t), h.dm().endTransaction()
			},
			getDataUIBounds: function(o) {
				var q = this.getDataUI(o);
				return q ? q._79o() : M
			},
			drawData: function(I, g) {
				var v = this.getDataUI(g);
				v && (v._79o(), v._42(I)), g instanceof d.Block && g.eachChild(function(r) {
					this.drawData(I, r)
				}, this)
			},
			getBoundsForGroup: function(A) {
				return A.s(sh) ? this.getDataUIBounds(A) : M
			},
			rectIntersects: function(l, H) {
				this.validate();
				var A = M;
				if (this._56I[l._id]) {
					var o = this._25I[l._id];
					if (o) {
						var t = o._79o();
						if (ui(H, t)) A = !0;
						else if ((H = Di(H, t)) && (o.rectIntersects && (A = o.rectIntersects(H)), A == M)) {
							if (!l.s("pixelPerfect")) return !0;
							var w = H.x,
								C = H.y,
								b = H.width,
								d = H.height,
								h = this._zoom,
								U = z.hitMaxArea,
								s = b * d * h * h;
							if (s > U) {
								var $ = Math.sqrt(U / s);
								h *= $
							}
							b *= h, d *= h, 2 > b && (b = 2), 2 > d && (d = 2), w *= h, C *= h;
							var W = Ep(b, d);
							Wj(W, -w, -C), W.scale(h, h), this._drawForChecking = !0, this.drawData(W, l), this._drawForChecking = !1;
							try {
								for (var J = 0, a = W.getImageData(0, 0, b, d).data; J < a.length; J += 4) if (0 !== a[J + 3]) {
									A = !0;
									break
								}
								W.restore()
							} catch (G) {
								zh = M, A = !1
							}
						}
					}
				}
				return A ? !0 : !1
			},
			rectContains: function(f, h) {
				if (this._56I[f._id]) {
					var F = this._25I[f._id];
					if (F) return ui(h, F._79o())
				}
				return !1
			},
			reset: function() {
				this.setZoom(1), this.setTranslate(0, 0)
			},
			handleKeyDown: function(s) {
				if (!z.isInput(s.target)) {
					var o = this,
						D = o._focusData,
						A = D && o._25I[D._id],
						V = 0,
						Q = o._dataModel._datas;
					if (!(D && D._enabled && D._editable && A && A.onKeyDown && A.onKeyDown(s) === !0)) if (9 === s.keyCode && (D && (V = Q.indexOf(D), Dm(s) ? -1 === --V && (V = 0) : ++V === Q.size() && (V = 0)), o._focusData = D = Q.get(V), o.sm().setSelection(D)), zr(s) ? o.selectAll() : Co(s) && o.isResettable() && o.reset(), o.sm().isEmpty()) {
						if (o._editing) return;
						var X = o.tx(),
							M = o.ty(),
							x = !1,
							C = Dm() ? 100 : 10;
						id(s) && (X -= C, x = !0), ar(s) && (M -= C, x = !0), Zc(s) && (X += C, x = !0), qm(s) && (M += C, x = !0), x && o.setTranslate(X, M)
					} else {
						mb(s) && o.handleDelete(s);
						var W = Dm() ? 10 : 1;
						id(s) && (o.moveSelection(-W, 0), o.fi({
							kind: "moveLeft"
						})), ar(s) && (o.moveSelection(0, -W), o.fi({
							kind: "moveUp"
						})), Zc(s) && (o.moveSelection(W, 0), o.fi({
							kind: "moveRight"
						})), qm(s) && (o.moveSelection(0, W), o.fi({
							kind: "moveDown"
						}))
					}
				}
			},
			handleScroll: function(Q, j) {
				ap(Q);
				var U = this.lp(Q);
				j > 0 ? this.scrollZoomIn(U) : 0 > j && this.scrollZoomOut(U)
			},
			handlePinch: function(L, k, P) {
				this._68I || (k > P ? this.pinchZoomIn(L) : this.pinchZoomOut(L))
			},
			checkDoubleClickOnNote: function(k, F) {
				var z = this,
					q = z.lp(k),
					E = z.getDataUI(F),
					L = E.note2Info;
				return L && F.s("note2.toggleable") && Gn(L.clickRect, q) ? (F.s(el, !F.s(el)), z.fi({
					kind: "toggleNote2",
					event: k,
					data: F
				}), !0) : (L = E.noteInfo, L && F.s("note.toggleable") && Gn(L.clickRect, q) ? (F.s(Bg, !F.s(Bg)), z.fi({
					kind: "toggleNote",
					event: k,
					data: F
				}), !0) : !1)
			},
			_84o: function() {},
			isNoteVisible: function() {
				return this._zoom > .15
			},
			isLabelVisible: function() {
				return this._zoom > .15
			},
			isEditVisible: function() {
				return this._zoom > .15
			},
			autoScroll: function(S, F) {
				var H = this,
					f = H.getAutoScrollZone(),
					s = f / H.getZoom(),
					p = f / 4,
					Y = H._29I,
					m = H.lp(S),
					C = {
						x: H.tx(),
						y: H.ty()
					};
				return m && f > 0 && Y && (m.x - Y.x < s ? H.translate(p, 0) : Y.x + Y.width - m.x < s && H.translate(-p, 0), m.y - Y.y < s ? H.translate(0, p) : Y.y + Y.height - m.y < s && H.translate(0, -p)), C.x = H.tx() - C.x, C.y = H.ty() - C.y, F && (F.x += C.x, F.y += C.y), C
			},
			getMoveMode: function(l, x) {
				var U = x.s("2d.move.mode");
				return U ? U : Rc["88"] ? "x" : Rc["89"] ? "y" : "xy"
			},
			getSerializableProperties: function() {
				return {
					scrollBarColor: 1,
					scrollBarSize: 1,
					autoMakeVisible: 1,
					autoHideScrollBar: 1,
					editable: 1,
					resettable: 1,
					pannable: 1,
					rectSelectable: 1,
					autoScrollZone: 1,
					visibleFunc: 1,
					movableFunc: 1,
					editableFunc: 1,
					pointEditableFunc: 1,
					rectEditableFunc: 1,
					anchorEditableFunc: 1,
					rotationEditableFunc: 1,
					rectSelectBackground: 1,
					rectSelectBorderColor: 1,
					editPointSize: 1,
					editPointBorderColor: 1,
					editPointBackground: 1,
					hoverDelay: 1,
					dataModel: 1,
					selectionModel: 1,
					currentSubGraph: 1,
					zoom: 1,
					translateX: 1,
					translateY: 1
				}
			},
			serializeProperty: function(E, X, G) {
				var Q = this;
				return "currentSubGraph" === X ? {
					__i: E.getId()
				} : G.serializeProperty(E, X, Q)
			},
			deserializeProperty: function(K, Z, E) {
				var G = this;
				if ("currentSubGraph" === Z) {
					var l = G.dm(),
						L = l.__idMap;
					return L[K.__i]
				}
				return E.deserializeProperty(K, Z, G)
			},
			setDefaultCursor: function(v, k) {
				this._defaultCursor = v, k !== !1 && this.setCursor(v)
			},
			setCursor: function(p) {
				"default" === p && (p = this._defaultCursor || p);
				var P = this.getView().style;
				P.cursor = p, P.cursor = "-webkit-" + p, P.cursor = "-moz-" + p
			}
		});
		var Xe = function(U, a) {
				var c = this;
				c.gv = U, c.s = function(G) {
					return a.getStyle(G)
				}, c._data = a, c._87I = new jg
			};
		De(Xe, q, {
			_6I: M,
			ms_icons: 1,
			_84o: function() {},
			dispose: function() {},
			isShadowed: function() {
				return this.s("shadow") || this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
			},
			getSelectWidth: function() {
				var G = this,
					W = G.gv.isSelected(G._data);
				return !W || G.isShadowed() ? 0 : G.gv.getSelectWidth(G._data)
			},
			getBodyColor: function(R) {
				var i = this._data,
					J = this.gv.getBodyColor(i);
				return J ? J : R ? i.getStyle(R) : M
			},
			_2Q: function(n) {
				return this.s(n)
			},
			_1Q: function(r, M, I, a) {
				var H = this.s,
					W = H(M + ".dash.color");
				r.strokeStyle = W, r.lineWidth = I, r.stroke(), H(M + ".dash.3d") && $m(r, W, H(M + ".dash.3d.color"), I, this.gv._zoom, H(M + ".dash.3d.accuracy")), nn(r, a)
			},
			invalidate: function() {
				this._6I = M
			},
			_79o: function() {
				var u = this;
				if (!u._6I) {
					u.labelInfo = u.label2Info = u.noteInfo = u.note2Info = u._38o = M, u._87I.clear(), u._3O();
					var y = u._data,
						h = u.gv;
					u._55O = h.isEditable(y) ? {
						_42O: h.isRectEditable(y),
						_43O: h.isPointEditable(y),
						_56O: h.isRotationEditable(y)
					} : M, u._6I = u._81o()
				}
				return u._6I
			},
			_3O: function() {},
			getPosition: function() {
				return kp
			},
			_68o: function(W, A) {
				W && this._87I.add(Hc(W, A))
			},
			_81o: function() {
				var E = this,
					G = E.s;
				E._24O(ob, "getLabel"), E._24O(cj, "getLabel2"), E._26O(ud, "getNote"), E._26O(bl, "getNote2"), E._15O(), E._55O && E._48O();
				var P;
				if (E._87I.each(function(h) {
					P = kb(P, h)
				}), P && E.isShadowed()) {
					var j = Hg(P);
					j.x += G("shadow.offset.x"), j.y += G("shadow.offset.y"), Td(j, G("shadow.blur")), P = kb(P, j)
				}
				return E._87I.clear(), P
			},
			_42: function(S) {
				var W = this,
					c = W._data,
					U = W.gv,
					I = W.s,
					P = I("opacity"),
					n = this.isShadowed();
				if (n) {
					var v = S.shadowOffsetX,
						h = S.shadowOffsetY,
						t = S.shadowBlur,
						E = S.shadowColor,
						L = U.getZoom();
					S.shadowOffsetX = I("shadow.offset.x") * L, S.shadowOffsetY = I("shadow.offset.y") * L, S.shadowBlur = I("shadow.blur") * L, S.shadowColor = I("select.color")
				}
				if (P != M) {
					var D = S.globalAlpha;
					S.globalAlpha = P
				}
				W._80o(S), U.isLabelVisible(c) && ((!U._drawForChecking || I("label.selectable")) && Wg(S, W.labelInfo), (!U._drawForChecking || I("label2.selectable")) && Wg(S, W.label2Info)), U.isNoteVisible(c) && (uh(S, W.noteInfo), uh(S, W.note2Info)), W._99O(S), P != M && (S.globalAlpha = D), n && (S.shadowOffsetX = v, S.shadowOffsetY = h, S.shadowBlur = t, S.shadowColor = E)
			},
			_80o: function() {},
			_47O: function() {},
			_24O: function(I, l) {
				var f = this,
					J = f._data,
					H = f.gv,
					k = f.s,
					Y = H[l](J);
				if (Y != M) {
					var R = k(I + ".scale"),
						d = k(I + ".max"),
						z = k(I + ".position"),
						V = f[I + "Info"] = {
							label: Y,
							scale: R,
							color: H[l + "Color"](J),
							font: k(I + ".font"),
							opacity: k(I + ".opacity"),
							align: k(I + ".align"),
							rotation: f.getRotation(k(I + ".rotation"), !1, z),
							background: H[l + "Background"](J)
						},
						t = Ai(V, Y);
					d > 0 && d < t.width && (V.labelWidth = t.width, t.width = d), 1 !== R && (t.width *= R, t.height *= R);
					var m = f.getPosition(z, k(I + ".offset.x"), k(I + ".offset.y"), t, k(I + ".position.fixed"));
					if (t.x = m.x - t.width / 2, t.y = m.y - t.height / 2, f._68o(V.rect = t, V.rotation), 1 !== R) {
						var c = t.width / R,
							B = t.height / R;
						V.rect = {
							x: m.x - c / 2,
							y: m.y - B / 2,
							width: c,
							height: B
						}
					}
				}
			},
			_26O: function(A, r) {
				var Z = this,
					F = Z.gv,
					i = Z._data,
					n = Z.s,
					C = F[r](i);
				if (C != M) {
					var k, Q, B = n(A + ".scale"),
						h = Z[A + "Info"] = {
							note: C,
							scale: B,
							data: i,
							view: F,
							expanded: n(A + ".expanded"),
							font: n(A + ".font"),
							color: n(A + ".color"),
							opacity: n(A + ".opacity"),
							align: n(A + ".align"),
							icon: n(A + ".icon"),
							backgroundImage: n(A + ".backgroundImage"),
							borderWidth: n(A + ".border.width"),
							borderColor: n(A + ".border.color"),
							background: F[r + "Background"](i)
						},
						S = Z.getPosition(n(A + ".position"), n(A + ".offset.x"), n(A + ".offset.y")),
						u = S.x,
						U = S.y;
					if (h.expanded) {
						var G, d = n(A + ".max"),
							g = n(A + ".backgroundImage");
						g ? (g = Ob(g), G = {
							width: Dc(g, i),
							height: pd(g, i)
						}) : G = Ai(h, C), G.width += 6, G.height += 2, d > 0 && d < G.width && (h.labelWidth = G.width, G.width = d), k = G.width, Q = G.height + 8, h.clickRect = {
							x: u - k * B / 2,
							y: U - Q * B,
							width: k * B,
							height: Q * B * G.height / Q
						}
					} else {
						var q = n(A + ".icon");
						q ? (q = Ob(q), k = Dc(q, i), Q = pd(q, i)) : (k = 12, Q = 18), h.clickRect = {
							x: u - k * B / 2,
							y: U - Q * B,
							width: k * B,
							height: Q * B
						}
					}
					h.rect = {
						x: u - k / 2,
						y: U - Q * B / 2 - Q / 2,
						width: k,
						height: Q
					};
					var w = b(h.borderWidth / 2) * B;
					Z._68o({
						x: u - k * B / 2 - w,
						y: U - Q * B - w,
						width: k * B + 2 * w,
						height: Q * B + 2 * w
					})
				}
			},
			_48O: function() {},
			_99O: function(c) {
				var a = this,
					I = a._38o;
				if (I) {
					var z = a.gv,
						r = a._data,
						k = I.icons;
					for (var b in k) {
						var Q = k[b],
							i = I.rects[b];
						if (i) {
							var H = El(Q.opacity, r, z),
								w = El(Q.names, r, z),
								Z = w ? w.length : 0,
								g = i.rotation;
							if (H != M) {
								var e = c.globalAlpha;
								c.globalAlpha *= H
							}
							for (var h = 0; Z > h; h++) {
								var S = w[h],
									p = Ob(S),
									K = i[h];
								if (g) {
									var L = K.x + K.width / 2,
										R = K.y + K.height / 2;
									c.save(), Wj(c, L, R), mq(c, g), Wj(c, -L, -R)
								}
								Bb(c, p, El(Q.stretch, r, z), K.x, K.y, K.width, K.height, a._data, a.gv), g && c.restore()
							}
							H != M && (c.globalAlpha = e)
						}
					}
				}
			}
		});
		var sf = function(g, E) {
				im(sf, this, [g, E])
			};
		De(sf, Xe, {
			_checkEmptyRect: !0,
			_40O: function(k, N) {
				var G = this,
					J = G.s,
					Y = k.rect;
				(k.borderColor = G.gv.getBorderColor(G._data)) && (k.borderType = J("border.type"), k.borderWidth = J("border.width"), k.borderPadding = J("border.padding"), N = D(N, k.borderPadding + k.borderWidth / 2));
				var O = G._data.getScale(),
					b = D(1, D(R(O.x), R(O.y)));
				if (k.selectWidth = G.getSelectWidth()) {
					var Q = G.gv._zoom;
					k.selectType = J("select.type"), k._97o = J("select.color"), k.selectPadding = J("select.padding"), N = D(N, (k.selectPadding + k.selectWidth / 2 / Q) / b)
				}
				N > 0 && (N *= b, Y = Hg(Y), Td(Y, N)), G._68o(Y)
			},
			_39O: function(V, i) {
				var u, h = this,
					Z = i.rect;
				if (i.borderWidth > 0 && (u = i.borderPadding, V.strokeStyle = i.borderColor, V.lineWidth = i.borderWidth, dq(V, i.borderType, {
					x: Z.x - u,
					y: Z.y - u,
					width: Z.width + 2 * u,
					height: Z.height + 2 * u
				}), V.stroke()), i.selectWidth > 0) {
					var U = h.gv._zoom;
					if (u = i.selectPadding, V.strokeStyle = i._97o, V.lineWidth = i.selectWidth / U, i.rotation != M) {
						V.save(), V.translate(i.position.x, i.position.y), V.rotate(i.rotation);
						var R = h._data,
							t = R.getWidth(),
							L = R.getHeight(),
							r = i.scale,
							n = i.anchor;
						Z = {
							x: r.x * -t * n.x,
							y: r.y * -L * n.y,
							width: r.x * t,
							height: r.y * L
						}
					}
					dq(V, i.selectType, {
						x: Z.x - u,
						y: Z.y - u,
						width: Z.width + 2 * u,
						height: Z.height + 2 * u
					}), i.rotation != M && V.restore(), V.stroke()
				}
			},
			_3O: function() {
				var v = this,
					n = v.s,
					u = v._data,
					Q = u.getStyle($i),
					K = v.getBodyColor(),
					X = v._83o = Q ? {
						shape: Q,
						_53o: v.getBodyColor("shape.background"),
						_27Q: Ob(n("shape.repeat.image"), K),
						shapeGradientPack: n("shape.gradient.pack"),
						_54o: n("shape.border.width"),
						_55o: n("shape.border.color"),
						_56o: n("shape.border.3d"),
						_57o: n("shape.border.3d.color"),
						_58o: n("shape.border.3d.accuracy"),
						shapeGradient: n("shape.gradient"),
						_59o: n("shape.gradient.color"),
						_60o: n("shape.border.pattern"),
						_61o: n("shape.border.cap"),
						_62o: n("shape.border.join"),
						bodyColor: K
					} : {
						img: Ob(v.gv.getImage(u), K),
						bodyColor: K,
						stretch: n("image.stretch")
					};
				if (s && !H);
				else {
					X.rect = u.getRect(), X.position = u.p(), X.scale = u.getScale(), X.anchor = u.getAnchor(), X.rotation = u.getRotation(), Q === Hf && (X._63o = n("shape.depth"));
					var O = 0;
					if (Q) O = so(M, X._54o / 2, X._62o), v.s("shape.dash") && (O = D(O, (v.s("shape.dash.width") || X._54o) / 2));
					else if (X.img && X.img.boundExtend) if (O = El(X.img.boundExtend, u, v.gv), X.img.boundExtendAbsolute) {
						var j = u.getScale();
						O /= v.gv._zoom * D(1, D(R(j.x), R(j.y)))
					} else if (!El(X.img.fitSize, u, v.gv)) {
						var C = El(X.img.width, u, v.gv),
							y = El(X.img.height, u, v.gv);
						O *= D(u.getWidth() / C, u.getHeight() / y)
					}
					v._40O(X, O);
					var r = n("clip.percentage");
					if (1 > r && (0 > r && (r = 0), X.clipRect = Cn(u.getAnchorRect(), n("clip.direction"), r)), Q) {
						var G = n("shape.fill.clip.percentage");
						1 > G && (0 > G && (G = 0), X.shapeClipRect = Cn(u.getAnchorRect(), n("shape.fill.clip.direction"), G))
					}
				}
			},
			getPosition: function(M, i, U, u) {
				var H = Dd(M, this._83o.rect, u);
				return H.x += i, H.y += U, H
			},
			_80o: function(T) {
				var w = this,
					y = w.s,
					j = w.gv,
					z = w._data,
					o = w._83o,
					h = o.rect,
					W = o.position,
					B = o.rotation,
					p = o.anchor,
					Z = o.scale,
					E = o.shape,
					I = o.clipRect;
				if (!w._checkEmptyRect || h.width > 0 && h.height > 0) {
					var O = z.getSize();
					if (O.x = -O.width * p.x, O.y = -O.height * p.y, T.save(), Wj(T, W.x, W.y), mq(T, B), ll(T, Z.x, Z.y), I && (T.beginPath(), T.rect(I.x, I.y, I.width, I.height), T.clip()), w.freeDraw) w.freeDraw(T, O, o);
					else if (E) {
						var N, $, C, l, x = o._60o,
							G = qd(T, x),
							M = o._53o,
							F = o._27Q,
							P = o._54o,
							q = o._55o,
							t = o.shapeGradientPack,
							e = T.lineJoin,
							b = T.lineCap;
						if ("roundRect" === E ? N = y("shape.corner.radius") : "polygon" === E ? N = y("shape.polygon.side") : "arc" === E && (N = y("shape.arc.from"), $ = y("shape.arc.to"), C = y("shape.arc.close"), l = y("shape.arc.oval")), T.lineJoin = o._62o, T.lineCap = o._61o, M || F || t) {
							var A = o.shapeClipRect;
							A && (T.save(), T.beginPath(), T.rect(A.x, A.y, A.width, A.height), T.clip()), dq(T, E, O, N, $, C, l), t ? sq(T, t) : F ? Hd(T, F, o.bodyColor, null, z, j) : Ff(T, M, o.shapeGradient, o._59o, O), T.fill(), A && T.restore(), t && T.restore(), T !== G && dq(G, E, O, N, $, C, l)
						} else dq(G, E, O, N, $, C, l);
						if (P > 0) {
							var S = y("shape.border.width.absolute");
							S && (T.save(), T.setTransform(1, 0, 0, 1, 0, 0)), T.lineWidth = P, T.strokeStyle = q, T.stroke(), S && T.restore(), o._56o && $m(T, q, o._57o, P, j._zoom, o._58o)
						}
						if (nn(T, x), y("shape.dash")) {
							var _ = y("shape.dash.width") || P;
							if (_ > 0) {
								x = y("shape.dash.pattern");
								var G = qd(T, x, w._2Q("shape.dash.offset"));
								G !== T && dq(G, E, O, N, $, C, l), w._1Q(T, "shape", _, x)
							}
						}
						Uk(T, M, o._63o, O), T.lineJoin = e, T.lineCap = b
					} else Bb(T, o.img, o.stretch, O.x, O.y, O.width, O.height, z, j, o.bodyColor);
					T.restore()
				}
				w._39O(T, o)
			},
			_48O: function() {},
			_47O: function() {}
		});
		var Wq = function(M, z) {
				im(Wq, this, [M, z])
			},
			dp = function(w, K, T, a) {
				var I = Zg(w, K);
				return T = a ? k(T, I) : Bi(T, I), I ? T /= I : T = 0, {
					x: w.x + (K.x - w.x) * T,
					y: w.y + (K.y - w.y) * T
				}
			};
		De(Wq, Xe, {
			_3O: function() {
				var V, u = this,
					N = u._data,
					g = u.gv,
					J = u.s,
					Q = J(Yn),
					U = N.isLooped(),
					d = J("edge.width"),
					C = J("edge.center"),
					y = J("edge.offset"),
					$ = g.getBorderColor(N),
					a = $ ? J("border.width") : 0,
					O = u.getSelectWidth(),
					W = N._40I,
					f = N._41I,
					X = u._78o = W && f ? {
						looped: U,
						type: Q,
						width: d,
						center: C,
						color: u.getBodyColor("edge.color"),
						borderColor: $,
						borderWidth: a,
						_97o: O ? J("select.color") : M,
						selectWidth: O,
						pattern: J("edge.pattern"),
						cap: J("edge.cap"),
						join: J("edge.join"),
						is3d: J("edge.3d"),
						_67o: J("edge.3d.color"),
						_66o: J("edge.3d.accuracy")
					} : M;
				if (X) {
					var A = z.getEdgeType(Q);
					if (A) {
						var i = A(N, Ud(u, g, N, U, Q), g, u._19Q);
						i.points && i.points.size() > 1 ? (X._4O = i, V = cp(X._4O.points)) : i[Aq] && i.rect && (X._4O = i, V = i.rect)
					} else {
						var I = J("edge.source.anchor.x"),
							T = J("edge.source.anchor.y"),
							q = J("edge.target.anchor.x"),
							v = J("edge.target.anchor.y"),
							S = Jf(g, W, J("edge.source.position"), J("edge.source.offset.x"), J("edge.source.offset.y"), I, T),
							p = Jf(g, f, J("edge.target.position"), J("edge.target.offset.x"), J("edge.target.offset.y"), q, v);
						if (Q === co) {
							var w = X.points = J(sc) || Zi,
								Y = w.size();
							X.segments = J("edge.segments");
							var L = I !== r || T !== r,
								K = q !== r || v !== r;
							if (!C) if (y) L || (S = dp(S, Y ? w.get(0) : p, y, Y)), K || (p = dp(p, Y ? w.get(Y - 1) : S, y, Y));
							else {
								var e;
								L || (e = Ar(S, Y ? w.get(0) : p, mg(g, W)), e && (S = {
									x: e[0],
									y: e[1]
								})), K || (e = Ar(Y ? w.get(Y - 1) : S, p, mg(g, f)), e && (p = {
									x: e[0],
									y: e[1]
								}))
							}
							V = kb(cp(X.points), cp(S, p))
						} else {
							var B = Ud(u, g, N, U, Q);
							if (u._19Q || (B = -B), U) S = Hg(S), S.x = g.getNodeRect(W).x, X.radius = B, V = {
								x: S.x - B,
								y: S.y - B,
								width: 2 * B,
								height: 2 * B
							};
							else {
								var l = Zg(S, p),
									k = Bi(y, l),
									c = {
										x: k,
										y: B
									},
									n = {
										x: l - k,
										y: B
									},
									R = G(p.y - S.y, p.x - S.x),
									h = X.mat = new Gk(R);
								if (X.orienAngle = R, X.angle = p.x < S.x ? R + F : R, X.rect = {
									x: c.x,
									y: c.y,
									width: n.x - c.x,
									height: 0
								}, X.origin = S, c = h.tf(c), c.x += S.x, c.y += S.y, n = h.tf(n), n.x += S.x, n.y += S.y, C) {
									var o = {
										x: l,
										y: 0
									};
									o = h.tf(o), o.x += S.x, o.y += S.y, V = cp([S, c, n, o]), X.c1 = S, X.c2 = o
								} else V = cp(c, n);
								S = c, p = n
							}
						}
						X.sourcePoint = S, X.targetPoint = p, N._lastSourcePoint = S, N._lastTargetPoint = p
					}
					var Z = 0;
					J("edge.dash") && (Z = J("edge.dash.width") || d);
					var E = "square" === X.cap ? .71 : .5;
					so(V, D(Z * E, d * E + a + O), X.join), u._68o(V)
				}
			},
			getRotation: function(X, V, j) {
				X = X || 0;
				var y = this._78o;
				if (y) {
					var R, P = y.angle,
						B = y.points,
						H = y._4O;
					if (P != M) return V ? y.orienAngle + X : P + X;
					if (H && H[Aq]) return H.getRotation ? H.getRotation(this, X, V, j) : 0;
					if (H && H.points) {
						var q = H.points;
						return R = q.size(), qn[j] ? R && 0 === R % 2 ? Xb(q.get(R / 2 - 1), q.get(R / 2), V, X) : X : Fn[j] ? Xb(q.get(0), q.get(1), V, X) : Xb(q.get(R - 2), q.get(R - 1), V, X)
					}
					if (B) return R = B.size(), qn[j] ? R && 0 === R % 2 ? Xb(B.get(R / 2 - 1), B.get(R / 2), V, X) : X : Fn[j] ? Xb(y.sourcePoint, R ? B.get(0) : y.targetPoint, V, X) : Xb(R ? B.get(R - 1) : y.sourcePoint, y.targetPoint, V, X)
				}
				return X
			},
			getPosition: function(W, s, J, m, $) {
				var o = this._78o;
				if (o) {
					var Y, k = o.type,
						F = o.points,
						r = o._4O,
						I = o.sourcePoint,
						z = o.targetPoint;
					if (!k) return o.looped ? {
						x: I.x - o.radius + s,
						y: I.y + J
					} : ($ && I && z && (I.x > z.x || I.x === z.x && I.y > z.y) && (W = xp[W], J = -J), Y = Dd(W, o.rect, m), Y.x += s, Y.y += J, Y = o.mat.tf(Y), Y.x += o.origin.x, Y.y += o.origin.y, Y);
					if (r && r[Aq]) return r.getPosition ? r.getPosition(this, W, s, J, m, $) : {
						x: (I.x + z.x) / 2,
						y: (I.y + z.y) / 2
					};
					if (F) {
						var Y, B = F.size();
						if (qn[W]) {
							if (B) {
								var c = B % 2;
								if (0 === c) return pp(F.get(B / 2 - 1), F.get(B / 2), W, s, J, m, $);
								Y = F.get((B - c) / 2)
							} else Y = {
								x: (I.x + z.x) / 2,
								y: (I.y + z.y) / 2
							};
							return Y = Dd(W, {
								x: Y.x,
								y: Y.y,
								width: 0,
								height: 0
							}, m), Y.x += s, Y.y += J, Y
						}
						return Fn[W] ? pp(I, B ? F.get(0) : z, W, s, J, m, $) : pp(B ? F.get(B - 1) : I, z, W, s, J, m, $)
					}
					if (r) {
						var D = r.points,
							B = D.size();
						if (qn[W]) {
							var c = B % 2;
							return 0 === c ? pp(D.get(B / 2 - 1), D.get(B / 2), W, s, J, m, $) : (Y = D.get((B - c) / 2), Y = Dd(W, {
								x: Y.x,
								y: Y.y,
								width: 0,
								height: 0
							}, m), Y.x += s, Y.y += J, Y)
						}
						return Fn[W] ? pp(D.get(0), D.get(1), W, s, J, m, $) : pp(D.get(B - 2), D.get(B - 1), W, s, J, m, $)
					}
				}
				return kp
			},
			_42: function(G) {
				this._78o && Wq.superClass._42.call(this, G)
			},
			drawPath: function(q, V) {
				q.beginPath();
				var P = V.type,
					m = V.points,
					K = V.segments,
					h = V._4O;
				if (!P || m) {
					var c = V.sourcePoint,
						C = c.x,
						b = c.y,
						X = V.targetPoint,
						t = X.x,
						$ = X.y;
					if (P) if (K) {
						var f = new jg({
							x: C,
							y: b
						});
						f.addAll(m), f.add({
							x: t,
							y: $
						}), ur(q, f, K)
					} else q.moveTo(C, b), m.each(function(A) {
						q.lineTo(A.x, A.y)
					}), q.lineTo(t, $);
					else V.looped ? q.arc(C, b, V.radius, 0, o, !0) : V.center ? (q.moveTo(V.c1.x, V.c1.y), q.lineTo(C, b), q.lineTo(t, $), q.lineTo(V.c2.x, V.c2.y)) : (q.moveTo(C, b), q.lineTo(t, $))
				} else h && (h.points ? ur(q, h.points, h.segments) : h[Aq] && h[Aq](q, h))
			},
			_80o: function(k) {
				var B = this,
					n = B.s,
					v = B._78o,
					f = v.width,
					C = v.selectWidth,
					o = v.borderWidth,
					M = v.color,
					z = k.lineJoin,
					p = k.lineCap,
					h = v.pattern;
				k.lineJoin = v.join, k.lineCap = v.cap, B.drawPath(qd(k, h), v);
				var D = n("edge.width.absolute");
				if (D && (k.save(), k.setTransform(1, 0, 0, 1, 0, 0)), C && (k.strokeStyle = v._97o, k.lineWidth = f + 2 * (o + C), k.stroke()), o && (k.strokeStyle = v.borderColor, k.lineWidth = f + 2 * o, k.stroke()), k.strokeStyle = M, k.lineWidth = f, k.stroke(), v.is3d && $m(k, M, v._67o, f, B.gv._zoom, v._66o), D && k.restore(), nn(k, h), n("edge.dash")) {
					h = n("edge.dash.pattern");
					var X = qd(k, h, B._2Q("edge.dash.offset"));
					X !== k && B.drawPath(X, v), B._1Q(k, "edge", n("edge.dash.width") || f, h)
				}
				k.lineJoin = z, k.lineCap = p
			},
			_48O: function() {},
			_47O: function() {},
			_71o: function(r, u) {
				var K = this,
					x = K._data;
				if (K._19Q = !0, !x.getEdgeGroup()) return r ? x.s("edge.gap") : 0;
				var b, c = 0,
					g = 0,
					N = 0;
				if (x.getEdgeGroup().getSiblings().each(function(y) {
					y.each(function(i) {
						if (K.gv.isVisible(i) && i.s(Yn) == u) {
							var k = i.s("edge.gap");
							b ? (g += N / 2 + k / 2, N = k) : (b = i, N = k), i === x && (c = g)
						}
					})
				}), r) return g - c + N;
				var P = c - g / 2;
				return b && x._40I !== b._40I && (K._19Q = !1), P
			}
		});
		var Kg = function(A, L) {
				im(Kg, this, [A, L])
			};
		De(Kg, sf, {
			_3O: function() {
				var V, m, X = this,
					L = X.s,
					R = X._data,
					Y = X.gv;
				if (X._88I = M, R.isExpanded() && R.eachChild(function(U) {
					var h = Y.getBoundsForGroup(U);
					h && (m || (m = []), m.push(h), V = kb(V, h))
				}), V) {
					var N = Y.getLabel(R),
						w = L("group.type");
					V = Do(w, m, V), Yo(V, R, "group.padding", 1);
					var u = X._88I = {
						type: w,
						rect: V,
						_64o: V
					};
					if (!w && N != M) {
						var O, Q = X.labelInfo = {
							label: N,
							color: L("group.title.color"),
							font: L("group.title.font"),
							align: L("group.title.align")
						},
							p = Ai(Q, N),
							H = p.width,
							C = p.height,
							G = L("group.title.align");
						H > V.width && (V.width = H), Q.rect = {
							y: V.y - C,
							width: p.width,
							height: C
						}, O = G === $c ? V.x : G === Oj ? V.x + V.width - H : V.x + V.width / 2 - H / 2, Q.rect.x = O, u.titleRect = {
							x: V.x,
							y: V.y - C,
							width: V.width,
							height: C + 1
						}, u.rect = {
							x: V.x,
							y: V.y - C,
							width: V.width,
							height: V.height + C
						}
					}
					X._40O(u, L("group.border.width") / 2)
				} else Kg.superClass._3O.call(X)
			},
			getPosition: function(D, e, b, a) {
				var h = this._88I;
				if (h) {
					var k = Dd(D, h.rect, a);
					return k.x += e, k.y += b, k
				}
				return Kg.superClass.getPosition.apply(this, arguments)
			},
			_24O: function(j, x) {
				var $ = this._88I;
				(!$ || $.type || "label2" === j) && Kg.superClass._24O.call(this, j, x)
			},
			_80o: function(E) {
				var t = this,
					y = t._88I;
				if (y) {
					var h = t._data,
						i = t.s,
						r = t.gv,
						u = y.type,
						Q = y.rect,
						Z = y._64o,
						$ = y.titleRect,
						U = t.getBodyColor(),
						j = Ob(i("group.image"), U),
						F = i("group.image.stretch"),
						J = t.getBodyColor("group.background"),
						D = Ob(i("group.repeat.image"), U),
						z = i("group.gradient.pack"),
						b = i("group.gradient"),
						n = i("group.gradient.color"),
						g = i("group.depth");
					if (u) {
						var d = i("group.border.pattern"),
							l = i("group.border.width"),
							e = E.lineJoin,
							X = E.lineCap;
						if (E.lineJoin = i("group.border.join"), E.lineCap = i("group.border.cap"), j) {
							if (E.save(), dq(E, u, Q), E.clip(), Bb(E, j, F, Q.x, Q.y, Q.width, Q.height, h, r, U), E.restore(), l > 0) {
								var O = qd(E, d);
								dq(O, u, Q), E.lineWidth = l, E.strokeStyle = i("group.border.color"), E.stroke(), nn(E, d)
							}
						} else {
							var O = qd(E, d);
							J || D || z ? (dq(E, u, Q), z ? sq(E, z) : D ? Hd(E, D, U, null, h, r) : Ff(E, J, b, n, Q), E.fill(), z && E.restore(), E !== O && dq(O, u, Q)) : dq(O, u, Q), l > 0 && (E.lineWidth = l, E.strokeStyle = i("group.border.color"), E.stroke()), nn(E, d), u === Hf && Uk(E, J, g, Q)
						}
						E.lineJoin = e, E.lineCap = X
					} else if (j ? Bb(E, j, F, Z.x, Z.y, Z.width, Z.height, h, r, t.getBodyColor()) : (J || D) && (D ? Hd(E, D, U, null, h, r) : Ff(E, J, b, n, Z), dq(E, Hf, Z), E.fill(), Uk(E, J, g, Z)), $) {
						var L = i("group.title.background");
						kq(E, $.x, $.y, $.width, $.height, L), Uk(E, L, g, $)
					}
					t._39O(E, y)
				} else Kg.superClass._80o.call(t, E)
			}
		});
		var Yf = function(r, R) {
				im(Yf, this, [r, R])
			};
		De(Yf, sf, {
			_80o: function(z) {
				this._39O(z, this._83o)
			}
		});
		var ul = function(K, w) {
				im(ul, this, [K, w])
			};
		De(ul, sf, {
			_3O: function() {
				var j = this,
					N = j._data,
					E = j.s,
					O = j.gv,
					W = N.getPoints(),
					w = O.getBorderColor(N),
					g = w ? E("border.width") : 0,
					b = j.getSelectWidth(),
					h = E("shape.border.width"),
					K = N.getRect(),
					a = O.getBodyColor(N),
					i = j._99o = W.isEmpty() ? M : {
						rect: K,
						rotation: N.getRotation(),
						fillRule: E("shape.fill.rule"),
						scale: N.getScale(),
						position: N.p(),
						points: W,
						segments: N.getSegments(),
						bodyColor: a,
						borderColor: w,
						borderWidth: g,
						_94o: E("shape.border.3d"),
						_95o: E("shape.border.3d.color"),
						_96o: E("shape.border.3d.accuracy"),
						_97o: b ? E("select.color") : M,
						selectWidth: b,
						_53o: E("shape.background"),
						_27Q: Ob(E("shape.repeat.image"), a),
						shapeGradientPack: E("shape.gradient.pack"),
						_54o: h,
						_55o: E("shape.border.color"),
						shapeGradient: E("shape.gradient"),
						_59o: E("shape.gradient.color"),
						_60o: E("shape.border.pattern"),
						_61o: E("shape.border.cap"),
						_62o: E("shape.border.join")
					};
				if (i) {
					var r = N.getScale(),
						Y = D(1, D(R(r.x), R(r.y)));
					E("shape.dash") && E("shape.dash.width") > h && (h = E("shape.dash.width"));
					var q = h * ("square" === i._61o ? .71 : .5) + g + b / j.gv._zoom / Y;
					q && (q *= Y, K = Hg(K), so(K, q, i._62o)), j._68o(K);
					var v = E("clip.percentage");
					1 > v && (0 > v && (v = 0), i.clipRect = Cn(N.getAnchorRect(), E("clip.direction"), v));
					var z = E("shape.fill.clip.percentage");
					1 > z && (0 > z && (z = 0), i.shapeClipRect = Cn(N.getAnchorRect(), E("shape.fill.clip.direction"), z))
				}
			},
			getPosition: function(T, M, c, H) {
				var g = this._99o;
				if (g) {
					var F = Dd(T, g.rect, H);
					return F.x += M, F.y += c, F
				}
				return kp
			},
			_42: function(U) {
				this._99o && ul.superClass._42.call(this, U)
			},
			_80o: function(r) {
				var Q, z = this,
					y = z.s,
					g = z._99o,
					h = g.position,
					a = g.scale,
					p = g.rotation,
					f = g.bodyColor,
					L = g.borderWidth,
					V = g.selectWidth,
					q = g._53o,
					S = g._27Q,
					$ = g.shapeGradientPack,
					j = g._54o,
					R = g.clipRect,
					x = g.shapeClipRect,
					k = g.points,
					e = g.segments,
					c = z._data.isClosePath(),
					N = g.fillRule,
					o = q || S || $;
				r.save(), Wj(r, h.x, h.y), mq(r, p), ll(r, a.x, a.y), R && (r.beginPath(), r.rect(R.x, R.y, R.width, R.height), r.clip()), o && x && (r.save(), r.beginPath(), r.rect(x.x, x.y, x.width, x.height), r.clip()), Wj(r, -h.x, -h.y);
				var W = g._60o,
					K = qd(r, W),
					d = r.lineJoin,
					I = r.lineCap;
				r.lineJoin = g._62o, r.lineCap = g._61o, o ? (ur(r, k, e, c), $ ? sq(r, $) : S ? Hd(r, S, f, null, z._data, z.gv) : (Q = f ? f : q, Ff(r, Q, g.shapeGradient, g._59o, g.rect)), r.fill(N), x && (r.restore(), Wj(r, -h.x, -h.y)), $ && r.restore(), K !== r && ur(K, k, e, c)) : ur(K, k, e, c);
				var F = y("shape.border.width.absolute");
				if (F && (r.save(), r.setTransform(1, 0, 0, 1, 0, 0)), V && (r.strokeStyle = g._97o, r.lineWidth = j + 2 * (L + V), r.stroke()), L && (r.strokeStyle = g.borderColor, r.lineWidth = j + 2 * L, r.stroke()), j && (Q = g._55o, !q && f && (Q = f), r.strokeStyle = Q, r.lineWidth = j, r.stroke(), g._94o && $m(r, Q, g._95o, j, z.gv._zoom, g._96o)), F && r.restore(), nn(r, W), y("shape.dash")) {
					var M = y("shape.dash.width") || j;
					if (M > 0) {
						W = y("shape.dash.pattern");
						var K = qd(r, W, z._2Q("shape.dash.offset"));
						K !== r && ur(K, k, e, c), z._1Q(r, "shape", M, W)
					}
				}
				r.lineJoin = d, r.lineCap = I, r.restore()
			},
			_48O: function() {},
			_47O: function() {}
		});
		var hk = function(y, J) {
				im(hk, this, [y, J])
			};
		De(hk, ul, {
			getRotation: function(z, i, v) {
				z = z || 0;
				var A = this._data.getPoints(),
					h = A.size();
				return h > 1 ? qn[v] ? h && 0 === h % 2 ? Xb(A.get(h / 2 - 1), A.get(h / 2), i, z) : z : Fn[v] ? Xb(A.get(0), A.get(1), i, z) : Xb(A.get(h - 2), A.get(h - 1), i, z) : z
			},
			getPosition: function(v, J, r, W, l) {
				var j = this._data.getPoints(),
					_ = j.size();
				if (_ > 1) {
					if (qn[v]) {
						var e = _ % 2;
						if (0 === e) return pp(j.get(_ / 2 - 1), j.get(_ / 2), v, J, r, W, l);
						var P = j.get((_ - e) / 2),
							n = {
								x: P.x,
								y: P.y,
								width: 0,
								height: 0
							};
						return P = Dd(v, n, W), P.x += J, P.y += r, P
					}
					return Fn[v] ? pp(j.get(0), j.get(1), v, J, r, W, l) : pp(j.get(_ - 2), j.get(_ - 1), v, J, r, W, l)
				}
				return kp
			}
		});
		var Pl = function(y, w) {
				im(Pl, this, [y, w])
			};
		De(Pl, sf, {
			_3O: function() {
				var I = this;
				Pl.superClass._3O.call(I);
				var w = I.s,
					Y = I._83o;
				I._82o = Y.img || Y.shape ? M : {
					background: I.getBodyColor("grid.background"),
					depth: w("grid.depth"),
					rect: Y.rect,
					_88o: w("grid.cell.depth"),
					cellBorderColor: w("grid.cell.border.color"),
					_89o: w("grid.row.count"),
					_90o: w("grid.column.count"),
					block: w("grid.block"),
					_91o: w("grid.block.color"),
					_92o: w("grid.block.padding"),
					_93o: w("grid.block.width")
				}
			},
			_80o: function(d) {
				var x = this,
					H = x._82o;
				if (!H) return Pl.superClass._80o.call(x, d), void 0;
				var u, o, P = x._data,
					n = H.background,
					D = H.rect,
					$ = H.block,
					r = H._91o,
					R = H._92o,
					k = H._93o,
					p = H._88o,
					M = H.cellBorderColor,
					g = H._89o,
					s = H._90o;
				if (n) if (kq(d, D.x, D.y, D.width, D.height, n), Uk(d, n, H.depth, D), p) for (u = 0; g > u; u++) for (o = 0; s > o; o++) D = P.getCellRect(u, o), D && Uk(d, n, p, D);
				else if (M) {
					for (d.beginPath(), u = 0; g > u; u++) for (o = 0; s > o; o++) D = P.getCellRect(u, o), D && d.rect(D.x, D.y, D.width, D.height);
					d.strokeStyle = M, d.lineWidth = 1, d.stroke()
				}
				if ("h" === $) for (u = 0; g > u; u++) D = kb(P.getCellRect(u, 0), P.getCellRect(u, s - 1)), Td(D, R), Qc(d, r, D.x, D.y, D.width, D.height, k);
				else if ("v" === $) for (o = 0; s > o; o++) D = kb(P.getCellRect(0, o), P.getCellRect(g - 1, o)), Td(D, R), Qc(d, r, D.x, D.y, D.width, D.height, k);
				x._39O(d, x._83o)
			}
		});
		var ff = function(h, N) {
				im(ff, this, [h, N])
			};
		De(ff, sf, {
			_checkEmptyRect: !1,
			_81o: function() {
				var B = this._data,
					n = ff.superClass._81o.call(this),
					h = B.s("text");
				if (h != M) {
					var i, v, U = B.s("text.font"),
						Z = B.s("text.align"),
						j = B.s("text.vAlign"),
						I = ib(U, h),
						p = I.width,
						T = I.height,
						t = B.getAnchor(),
						m = B.getWidth(),
						k = B.getHeight();
					"left" === Z ? i = -m * t.x : "center" === Z ? i = -m * t.x + (m - p) / 2 : "right" === Z && (i = m * (1 - t.x) - I.width), "top" === j ? v = -k * t.y : "middle" === j ? v = -k * t.y + (k - T) / 2 : "bottom" === j && (v = k * (1 - t.y) - I.height);
					var W, g = B.getMatrix();
					if (W = cp([g.tf(i, v), g.tf(i + p, v), g.tf(i + p, v + T), g.tf(i, v + T)]), n = kb(n, W), n && B.s("text.shadow")) {
						var c = Hg(n);
						c.x += B.s("text.shadow.offset.x"), c.y += B.s("text.shadow.offset.y"), Td(c, B.s("text.shadow.blur")), n = kb(n, c)
					}
				}
				return n
			}
		});
		var uo = bb.Interactor = function(Z) {
				this.gv = this._graphView = Z
			};
		hj("Interactor", q, {
			ms_listener: 1,
			getView: function() {
				return this.gv.getView()
			},
			setUp: function() {
				this.addListeners()
			},
			tearDown: function() {
				this.removeListeners(), this.clear()
			},
			clear: function() {},
			fi: function(C) {
				this.gv.fi(C)
			},
			setCursor: function(r) {
				Z || this.gv.setCursor(r)
			},
			startDragging: function(S) {
				var E = this;
				E._lastClientPoint = km(S), E._lastLogicalPoint = E.gv.lp(S), Gm(E, S)
			},
			clearDragging: function() {
				var C = this;
				C._lastClientPoint = C._lastLogicalPoint = C._logicalPoint = M
			},
			autoScroll: function(A) {
				return this.gv.autoScroll(A, this._lastClientPoint)
			}
		});
		var af = function(C) {
				var P = this;
				P.gv = C, C.getView(), ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchsend"].forEach(function(S) {
					P.addListener(S)
				})
			};
		De(af, uo, {
			interactiveDisabled: !1,
			addListener: function(k) {
				var L = this;
				L.gv.getView().addEventListener(k, function(n) {
					z.preventDefault(n), L.interactiveDisabled || L["handle_" + k](n)
				}, !1)
			},
			handle: function(J, y, P) {
				var o = this.gv;
				if (P = P || o.getDataInfoAt(y)) {
					var X = P.part,
						G = P.data,
						Y = P.ui;
					G[J] && G[J](y, G, o);
					var $;
					return "rect" === X && Y._83o && Y._83o.img ? $ = o.getImage(G) : "icons" === X && ($ = P.icon), this.handleImage($, J, y, G, o), P
				}
			},
			handleImage: function(b, x, S, W, Z) {
				if (b && (b = Ob(b)) && (b[x] && b[x](S, W, Z), b.comps)) for (var G = 0; G < b.comps.length; G++) {
					var B = b.comps[G];
					B[x] && B[x](S, W, Z)
				}
			},
			handle_mousedown: function(W) {
				this.handle("onDown", W)
			},
			handle_mousemove: function(c) {
				var I = this,
					a = I.gv;
				I._hoverTimer && (p(I._hoverTimer), delete I._hoverTimer);
				var n = I.handle("onMove", c);
				n && (I._hoverTimer = u(function() {
					p(I._hoverTimer), delete I._hoverTimer, I.handle("onHover", c, n)
				}, a.getHoverDelay() || z.hoverDelay))
			},
			handle_mouseup: function(c) {
				this.handle("onUp", c)
			},
			handle_touchstart: function(Q) {
				this.handle("onDown", Q)
			},
			handle_touchmove: function(A) {
				this.handle("onMove", A)
			},
			handle_touchend: function(I) {
				this.handle("onUp", I)
			},
			handleWindowMouseMove: function() {},
			handleWindowMouseUp: function() {}
		});
		var Nh = bb.DefaultInteractor = function(b) {
				im(Nh, this, [b])
			};
		hj("DefaultInteractor", uo, {
			handle_mousedown: function(u) {
				ap(u);
				var h = this,
					D = h.gv,
					G = D.getDataAt(u);
				!D.setFocus(u) || D._editing || D._scrolling || (hm(u) ? D.handleDoubleClick(u, G) : D.handleClick(u, G), !Co() && G || !D.isPannable() || !Dg(u) || Ik(u) || (h._tx = D.tx(), h._ty = D.ty(), h.startDragging(u)))
			},
			handleWindowMouseUp: function(e) {
				var O = this,
					D = O.gv;
				D._panning && (delete D._panning, D.onPanEnded(), O.fi({
					kind: "endPan",
					event: e
				})), delete O._tx, delete O._ty, O.clearDragging()
			},
			handle_mousemove: function(l) {
				var U = this,
					r = U.gv;
				U._hoverTimer && (p(U._hoverTimer), delete U._hoverTimer), U._hoverTimer = u(function() {
					U.fi({
						kind: "hover",
						event: l
					}), p(U._hoverTimer), delete U._hoverTimer
				}, r.getHoverDelay() || z.hoverDelay)
			},
			handle_touchmove: function(Y) {
				this.handle_mousemove(Y)
			},
			handleWindowMouseMove: function(n) {
				var P = this,
					l = P.gv,
					y = P._lastClientPoint;
				P.fi({
					kind: l._panning ? "betweenPan" : "beginPan",
					event: n
				}), l._panning = 1, l.setTranslate(P._tx + n.clientX - y.x, P._ty + n.clientY - y.y)
			},
			handle_mousewheel: function(g) {
				this.gv.handleScroll(g, g.wheelDelta)
			},
			handle_DOMMouseScroll: function(G) {
				2 === G.axis && this.gv.handleScroll(G, -G.detail)
			},
			handle_keydown: function(X) {
				this.gv.handleKeyDown(X)
			}
		});
		var rm = bb.SelectInteractor = function(S) {
				im(rm, this, [S])
			};
		hj("SelectInteractor", uo, {
			_42: function() {
				var N = this,
					Z = N.gv,
					M = Z.getZoom(),
					B = N.mark,
					k = N.div;
				k || (k = N.div = Dn(), gm(N.getView(), k));
				var b = {};
				b.x = B.x * M + Z.tx(), b.y = B.y * M + Z.ty(), b.width = B.width * M, b.height = B.height * M, Mb(k, b), this.intersects() ? (k.style.border = "", k.style.background = Z.getRectSelectBackground()) : (k.style.background = "", k.style.border = "1px solid " + Z.getRectSelectBorderColor())
			},
			handle_mousedown: function(S) {
				var U = this,
					y = U.gv;
				if (U._57I = M, !(y._editing || y._scrolling || Co())) {
					var e = y.getDataAt(S),
						R = y.sm();
					if (e) if (Ik(S)) R.co(e) ? R.rs(e) : R.as(e);
					else if (R.co(e)) {
						if (hm(S) && e instanceof zm && e.isClickThroughEnabled()) {
							var l = y.getDataAt(S, function(b) {
								y._clickThroughChecking = !0;
								var I = b.getParent() === e && y.isSelectable(b);
								return delete y._clickThroughChecking, I
							});
							l && (S.clickThrough = !0, R.ss(l))
						}
					} else R.ss(e);
					else Ik(S) || !y.isPannable() ? Dg(S) && (Ik(S) || R.cs(), y.isRectSelectable() && (U.startDragging(S), y._77O = 1)) : Dg(S) && (U._57I = km(S))
				}
			},
			handle_mouseup: function(d) {
				var c = this,
					$ = c._57I;
				$ && (Zg($, km(d)) <= 1 && c.gv.sm().cs(), c._57I = M)
			},
			handleWindowMouseUp: function(v) {
				this.clear(v)
			},
			handleWindowMouseMove: function(V) {
				var g = this,
					E = g.gv;
				g._logicalPoint = E.lp(V), g.mark ? (g.fi({
					kind: "betweenRectSelect",
					event: V
				}), E.isPannable() && g.autoScroll(V), g.redraw()) : g.fi({
					kind: "beginRectSelect",
					event: V
				}), g.mark = cp(g._lastLogicalPoint, g._logicalPoint), g.redraw()
			},
			intersects: function() {
				var H = this,
					Y = H._lastLogicalPoint,
					o = H._logicalPoint;
				return Y.x > o.x || Y.y > o.y
			},
			clear: function(t) {
				var U = this,
					w = U.gv,
					H = U.mark;
				if (U._57I = M, U._lastLogicalPoint) {
					if (H) {
						if (0 !== H.width && 0 !== H.height) {
							var C = w.getDatasInRect(H, U.intersects());
							if (!C.isEmpty()) {
								var e = w.sm(),
									j = e.toSelection();
								C.each(function(d) {
									e.co(d) ? j.remove(d) : j.add(d)
								}), e.ss(j)
							}
						}
						Er(U.div), delete U.div, delete U.mark, U.redraw(), U.fi({
							kind: "endRectSelect",
							event: t
						}), w.onRectSelectEnded()
					}
					U.clearDragging(), delete w._77O
				}
			},
			redraw: function() {
				var N = this;
				N._draw || (N._draw = 1, u(function() {
					N.mark && N._42(), delete N._draw
				}, 16))
			}
		});
		var Am = bb.MoveInteractor = function(i) {
				im(Am, this, [i])
			};
		hj("MoveInteractor", uo, {
			handle_mousedown: function(d) {
				var j = this,
					$ = j.gv;
				if (Dg(d) && !$._editing && !$._scrolling && !Co()) {
					var o = $.getSelectedDataAt(d);
					o ? (j._data = o, $.handleMouseDown && $.handleMouseDown(d, o), j.startDragging(d), $.isMovable(o) && ($._moving = 1)) : $._focusData = M
				}
			},
			handleWindowMouseUp: function(q) {
				var B = this,
					C = B.gv;
				C.handleMouseUp && C.handleMouseUp(q, B._data), B.clear(q)
			},
			handleWindowMouseMove: function(j) {
				var B = this,
					N = B._data,
					M = B.gv;
				if ((!M._93O || !M._93O(j, N)) && M._moving) {
					B._logicalPoint || B.fi({
						kind: "prepareMove",
						event: j
					});
					var K = B._logicalPoint ? "betweenMove" : "beginMove",
						x = {
							kind: K,
							event: j
						},
						b = B._logicalPoint = M.lp(j);
					"beginMove" !== K || B._alreadyBeginTransaction || (B._alreadyBeginTransaction = !0, M.getDataModel().beginTransaction());
					var q = B._calcShift(K, j),
						m = q.x,
						V = q.y,
						z = B.gv.getMoveMode(j, N);
					z && ("x" === z ? V = 0 : "y" === z ? m = 0 : "xy" !== z && (m = V = 0)), M.moveSelection(m, V), B._lastLogicalPoint = b, B.autoScroll(j), B.fi(x)
				}
			},
			_calcShift: function() {
				var Q = this,
					l = Q._logicalPoint,
					m = Q._lastLogicalPoint,
					Y = l.x - m.x,
					T = l.y - m.y;
				return {
					x: Y,
					y: T
				}
			},
			clear: function(A) {
				var z = this,
					p = z.gv;
				z._lastLogicalPoint && (z._lastLogicalPoint = z._data = p._moving = M, z._logicalPoint && (z.fi({
					kind: "endMove",
					event: A
				}), p.onMoveEnded()), z.clearDragging()), z._alreadyBeginTransaction && (z._alreadyBeginTransaction = !1, p.getDataModel().endTransaction())
			}
		});
		var zp = bb.ScrollBarInteractor = function(i) {
				im(zp, this, [i])
			};
		hj("ScrollBarInteractor", uo, {
			_41o: function() {
				return this.gv.getViewRect().height < this.gv.getScrollRect().height
			},
			_40o: function() {
				return this.gv.getViewRect().width < this.gv.getScrollRect().width
			},
			isV: function(T) {
				var f = this.gv.getViewRect();
				return this._41o() && (f.x + f.width - this.gv.lp(T).x) * this.gv.getZoom() < pj
			},
			isH: function(O) {
				var y = this.gv.getViewRect();
				return this._40o() && (y.y + y.height - this.gv.lp(O).y) * this.gv.getZoom() < pj
			},
			handle_mousemove: function(X) {
				this.handle_touchmove(X)
			},
			handle_touchmove: function(l) {
				if (!$b && Dg(l) && this.gv.isScrollBarVisible()) {
					var D = this,
						$ = D.isV(l),
						w = D.isH(l);
					($ || w) && D.gv.showScrollBar(), D.gv._scrolling = $ || w
				}
			},
			handleWindowMouseUp: function(A) {
				this.handleWindowTouchEnd(A)
			},
			handleWindowTouchEnd: function(e) {
				this._state = this._cp = this._tx = this._ty = this.gv._scrolling = M, this.fi({
					kind: "endScroll",
					event: e
				})
			},
			handle_mousedown: function(e) {
				this.handle_touchstart(e)
			},
			handle_touchstart: function(Y) {
				var m = this;
				if (m.gv.setFocus(Y), ap(Y), m.handle_touchmove(Y), !(So(Y) > 1) && m.gv._scrolling && m.gv.isScrollBarVisible()) {
					m._cp = km(Y), m._tx = m.gv.tx(), m._ty = m.gv.ty();
					var x = m.isV(Y);
					m._state = x ? "vScroll" : "hScroll", Gm(m, Y), m.fi({
						kind: "beginScroll",
						event: Y
					})
				}
			},
			handleWindowMouseMove: function(C) {
				this.handleWindowTouchMove(C)
			},
			handleWindowTouchMove: function(N) {
				var U = km(N),
					z = this.gv.getViewRect(),
					$ = this.gv.getScrollRect();
				"vScroll" === this._state ? this.gv.ty(this._ty + (this._cp.y - U.y) * $.height / z.height) : "hScroll" === this._state && this.gv.tx(this._tx + (this._cp.x - U.x) * $.width / z.width), this.fi({
					kind: "betweenScroll",
					event: N
				})
			}
		});
		var Jb = bb.TouchInteractor = function(p, A) {
				A = A || {}, A.selectable === r && (A.selectable = !0), A.movable === r && (A.movable = !0), A.pannable === r && (A.pannable = !0), A.pinchable === r && (A.pinchable = !0), A.editable === r && (A.editable = !0), this.params = A, im(Jb, this, [p])
			};
		hj("TouchInteractor", uo, {
			ms_edit: 1,
			setUp: function() {
				var V = this;
				Jb.superClass.setUp.call(V), Z && V.params.editable && V.gv.setEditInteractor(V)
			},
			tearDown: function() {
				var v = this;
				Jb.superClass.tearDown.call(v), Z && v.params.editable && v.gv.setEditInteractor(M)
			},
			clear: function(R) {
				var e = this,
					U = e.gv;
				U._moving && (e.fi({
					kind: "endMove",
					event: R
				}), delete U._moving, U.onMoveEnded(), U.dm().endTransaction()), U._panning && (e.fi({
					kind: "endPan",
					event: R
				}), delete U._panning, U.onPanEnded()), U._pinching && (e.fi({
					kind: "endPinch",
					event: R
				}), delete U._pinching, U.onPinchEnded()), U._editing && (e._46O(R), e._77I = e._node = e._edge = e._shape = e._rect = e._89I = e._index = U._editing = M), e._moving = e._panning = e._pinching = e._editing = e._57I = e._data = e._beginHistory = M, e.clearDragging()
			},
			handle_touchstart: function(A) {
				var b = this;
				if (!b.gv._editing) {
					ap(A), b._57I = M;
					var y = b.params,
						D = b.gv,
						N = D.sm(),
						h = D.getDataAt(A),
						L = So(A);
					if (1 === L) {
						if (hm(A)) return D.handleDoubleClick(A, h), void 0;
						D.handleClick(A, h), h && (D.handleMouseDown && D.handleMouseDown(A, h), b._data = h), y.selectable || (h = M), h ? (N.co(h) || N.ss(h), y.editable && D.isEditable(h) && b._79I(A, h, !0) ? (b._editing = 1, b.startDragging(A)) : y.movable && D.isMovable(h) && (b._moving = 1, b.startDragging(A))) : (b._57I = km(A), y.pannable && D.isPannable() && (b._panning = 1, b.startDragging(A), b._translate = {
							x: D.tx(),
							y: D.ty()
						}))
					} else if (y.pinchable && 2 === L) {
						b._pinching = 1, b.startDragging(A);
						var I = D.getView(),
							d = D.getZoom(),
							x = I.getBoundingClientRect(),
							s = A.touches[0],
							e = A.touches[1],
							$ = {
								x: (s.clientX + e.clientX) / 2 - x.left,
								y: (s.clientY + e.clientY) / 2 - x.top
							};
						$.x -= D.tx(), $.y -= D.ty(), $.x /= d, $.y /= d, b._p = $, b._d = Ri(A)
					}
				}
			},
			handle_touchend: function(G) {
				var y = this,
					f = y.gv,
					X = y._57I,
					o = y._data;
				X && (Zg(X, km(G)) <= 1 && f.sm().cs(), y._57I = M), o && f.handleMouseUp && f.handleMouseUp(G, o)
			},
			handleWindowTouchEnd: function(M) {
				this.clear(M)
			},
			handleWindowTouchMove: function(a) {
				var n = this,
					U = n.gv,
					d = So(a);
				if (1 === d) {
					if (n._editing && (n._beginHistory || (n._beginHistory = 1, U.dm().beginTransaction()), U._editing = 1, n._78I(a)), n._moving) n._beginHistory || (n._beginHistory = 1, U.dm().beginTransaction()), n.handleMove(a);
					else if (n._panning) {
						var o = km(a);
						U.setTranslate(n._translate.x + o.x - n._lastClientPoint.x, n._translate.y + o.y - n._lastClientPoint.y), n.fi({
							kind: U._panning ? "betweenPan" : "beginPan",
							event: a
						}), U._panning = 1
					}
				} else if (2 === d && n._pinching) {
					var _ = Ri(a);
					U.handlePinch(n._p, _, n._d), n._d = _, n.fi({
						kind: U._pinching ? "betweenPinch" : "beginPinch",
						event: a
					}), U._pinching = 1
				}
			},
			handleMove: function(x) {
				var J = this,
					O = J.gv,
					X = O.lp(x);
				O._93O && O._93O(x, J._data) || (O.moveSelection(X.x - J._lastLogicalPoint.x, X.y - J._lastLogicalPoint.y), J._lastLogicalPoint = X, J.autoScroll(x), J.fi({
					kind: O._moving ? "betweenMove" : "beginMove",
					event: x
				}), O._moving = 1)
			}
		});
		var d = I.ht,
			ki = d.graph._editor = {
				Math: {},
				Guide: {}
			};
		d.Math = ki.Math, ki.getStyle = function(X) {
			var x, R = ki.StyleMap;
			return R && (x = R[X], x !== r) ? x : ki.DefaultStyleMap[X]
		}, ki.setStyle = function(f, p) {
			var z = ki.StyleMap;
			z || (z = ki.StyleMap = {}), z[f] = p
		}, ki.inEdit = function(f) {
			return f._inXEdit === !0
		}, ki.startEdit = function(b) {
			b._inXEdit = !0, ki.Inject.doInject(b)
		}, ki._46O = function(V) {
			V._inXEdit = !1, ki.Inject.undoInject(V)
		}, ki.toScreenPosition = function(h, G) {
			var i = h.tx(),
				n = h.ty(),
				x = h._zoom;
			return new ki.Math.Vector2(G.x * x + i, G.y * x + n)
		}, ki.checkHit = function(P, z, x) {
			return P.distanceTo(z) < x ? !0 : !1
		}, ki.toWorldPosition = function(Q, N) {
			var g = Q.tx(),
				w = Q.ty(),
				o = Q._zoom;
			return {
				x: (N.x - g) / o,
				y: (N.y - w) / o
			}
		}, ki.setAntialias = function(S, O) {
			for (var R, p = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], C = 0, k = p.length; k > C && (R = p[C], !(R in S)); C++);
			S[R], S[R] = O
		}, ki.getTargetCornersOnScreen = function(X, T) {
			if (!T) return null;
			var f, A = [];
			if ($f(T, X)) {
				var v = mg(X, T);
				f = [{
					x: v.x,
					y: v.y
				}, {
					x: v.x + v.width,
					y: v.y
				}, {
					x: v.x + v.width,
					y: v.y + v.height
				}, {
					x: v.x,
					y: v.y + v.height
				}]
			} else {
				if (!T.getCorners) return null;
				f = T.getCorners()
			}
			return f.forEach(function(I) {
				var s = ki.toScreenPosition(X, I);
				A.push(s.x, s.y)
			}), A
		}, ki.log = function() {};
		var Xj = ki.Inject = {
			_modules: []
		};
		Xj.registAsModule = function(G, f) {
			var k = {},
				V = {};
			for (var O in G) {
				var C = f.prototype[O];
				k[O] = C
			}
			G.getBackup = function(J) {
				return k[J]
			}, G.getBackups = function() {
				return k
			}, V.doInject = function() {
				for (var E in G)"getBackup" !== E && (f.prototype[E] = G[E])
			}, V.undoInject = function() {
				for (var h in G)"getBackup" !== h && (f.prototype[h] = k[h])
			}, Xj._modules.push(V)
		}, Xj.doInject = function(r) {
			for (var N, v = Xj._modules, Q = 0, Z = v.length; Z > Q; Q++) N = v[Q], N.doInject(r)
		}, Xj.undoInject = function(U) {
			for (var E, r = Xj._modules, O = 0, T = r.length; T > O; O++) E = r[O], E.undoInject(U)
		};
		var uo = d.graph.EditInteractor = function(_) {
				var $ = this,
					y = x.createElement("canvas");
				y.className = "editCanvas", y.style.position = "absolute", $._styleMap = {}, $._canvas = y, $._context = y.getContext("2d"), uo.superClass.constructor.call($, _), ki.setAntialias($._context, !1), $._subModules = [new ki.Anchor($), new ki.Rect($), new ki.Curve($), new ki.MoveHelper($)], $._gridGuide = new ki.Guide.Grid($), $._rectGuide = new ki.Guide.Rect($)
			},
			rl = uo;
		d.Default.def(uo, d.graph.Interactor, {
			ms_edit: 1,
			ms_fire: 1
		}), q.defineProperties(uo.prototype, {
			editDetail: {
				get: function() {
					var V = !! this._editDetail;
					return V
				},
				set: function(p) {
					var j = this,
						f = j._editDetail;
					f !== p && (j._editDetail = p, j.gv._editing = p, j.fp("editDetail", f, p), j.fp("pointsEditingMode", f, p), j.fi({
						kind: p ? "beginEditPoints" : "endEditPoints"
					}))
				}
			},
			gvEditing: {
				get: function() {
					return this.gv._editing
				},
				set: function(e) {
					(!this._editDetail || e) && (this.gv._editing = e, e || (this.editDetail = !1))
				}
			},
			editing: {
				get: function() {
					return this._editing
				},
				set: function(X) {
					this._editing = X, this.gvEditing = X
				}
			},
			pointsEditingMode: {
				get: function() {
					return this.editDetail
				},
				set: function(Z) {
					var b = this;
					b.editDetail !== Z && (Z ? b._tryEnterEditDetailMode() : b._tryQuitEditDetailMode())
				}
			},
			gridEnabled: {
				get: function() {
					var q = this._gridEnabled;
					if (!q) return !1;
					var g = this.gv;
					return g ? !0 : !0
				},
				set: function(S) {
					S !== this._gridEnabled && (this._gridEnabled = S, this._42())
				}
			},
			alignmentGuideEnabled: {
				get: function() {
					return this._agEnabled
				},
				set: function(m) {
					m !== this._agEnabled && (this._agEnabled = m, this._42())
				}
			},
			gridGuide: {
				get: function() {
					return this._gridGuide
				}
			},
			rectGuide: {
				get: function() {
					return this._rectGuide
				}
			}
		}), uo.prototype.getSubModule = function(C) {
			var V, u, z, f = this._subModules;
			for (u = 0, z = f.length; z > u; u++) if (V = f[u], V.catalog === C) return V
		}, uo.prototype.invokeSubModule = function(H, N) {
			var U = this,
				l = U._subModules;
			if (l) for (var v, O, a, d = Array.prototype.slice.call(arguments, 2), q = 0, n = l.length; n > q; q++) if (v = l[q], O = v[H], O && (a = O.apply(v, d), a != r && N)) return v
		}, uo.prototype.invokeSubModuleInverse = function(T, z) {
			var H = this,
				K = H._subModules;
			if (K) for (var Y, w, h, C = Array.prototype.slice.call(arguments, 2), s = K.length - 1; s >= 0; s--) if (Y = K[s], w = Y[T], w && (h = w.apply(Y, C), h != r && z)) return Y
		}, uo.prototype.setUp = function() {
			ki.log("setUp");
			var u = this,
				o = u.gv,
				d = o.getView(),
				A = u._canvas;
			uo.superClass.setUp.call(u), o.setEditInteractor(u), o._79O ? d.insertBefore(A, o._79O) : d.appendChild(A), ki.startEdit(o), u.invokeSubModule("setUp"), o.dm().mm(u._onDataModelChanged, u), o.dm().md(u._onDataPropertyChanged, u)
		}, uo.prototype.tearDown = function() {
			ki.log("tearDown");
			var u = this,
				G = u.gv,
				e = G.getView();
			u._resetCustomCursorStyle(), uo.superClass.tearDown.call(u), G.dm().umm(u._onDataModelChanged, u), G.dm().umd(u._onDataPropertyChanged, u), G.setEditInteractor(null), e.removeChild(u._canvas), u._drawTimer && (p(u._drawTimer), u._drawTimer = null), ki._46O(G), u.invokeSubModule("tearDown")
		}, uo.prototype._onDataModelChanged = function(s) {
			var t = this;
			("clear" === s.kind || "remove" === s.kind && t.editDetail && s.data === t.getSubModule("Curve").target) && (t.editDetail = !1, t._42())
		}, uo.prototype._onDataPropertyChanged = function(h) {
			var Z = this;
			if (Z.editDetail) {
				var U = Z.getSubModule("Curve"),
					I = h.data;
				I === U.target && (I._writing || U._handleDataChanged())
			}
		}, uo.prototype.clear = function() {
			ki.log("clear")
		}, uo.prototype.redraw = function() {
			this._42()
		}, uo.prototype._42 = function() {
			var j = this;
			j._drawTimer || (j._drawTimer = u(function() {
				j._drawTimer = null, j.drawImpl()
			}, 0))
		}, uo.prototype.drawImpl = function() {
			var c;
			for (c in {
				_42: !0
			}) break;
			return function() {
				var F = this,
					V = F._canvas,
					S = F.gv,
					Q = S.getWidth(),
					g = S.getHeight(),
					R = F._context,
					x = d.Default.getInternal();
				(V.width !== Q || V.height !== g) && x.setCanvas(V, Q, g), R.clearRect(0, 0, V.width, V.height);
				var r = F._getValidSelection();
				R.save();
				var W = d.Default.devicePixelRatio;
				R.scale(W, W), F._gridGuide._42(), F._rectGuide._42(), F.invokeSubModuleInverse(c, !1, R, S, r), R.restore()
			}
		}(), uo.prototype._getValidSelection = function() {
			var w = this,
				t = w.gv,
				G = t.sm().getSelection(),
				o = [];
			return G.each(function(U) {
				t.isVisible(U) && t.isEditable(U) && o.push(U)
			}), o
		}, uo.prototype.handle_touchmove = function(l) {
			return this.handle_mousemove(l)
		}, uo.prototype.handle_mousemove = function(W) {
			if (!d.Default.isDragging()) {
				var M = this;
				(M.editDetail || !Co()) && (M.gvEditing = !1, M._checkEdit(W) && (M.gvEditing = !0))
			}
		}, uo.prototype.handle_touchstart = function(z) {
			return this.handle_mousedown(z)
		}, uo.prototype.handle_mousedown = function(F) {
			ap(F);
			var e = this;
			if (e.editDetail || !Co()) {
				if (hm(F) && !F.clickThrough) {
					if (e.editDetail) {
						if (e._tryQuitEditDetailMode(F)) return
					} else if (e._tryEnterEditDetailMode()) return;
					e.gv.dm().beginTransaction();
					var H = e.invokeSubModule("handleDoubleClick", !0, F);
					if (e.gv.dm().endTransaction(), H) return
				}
				var j = e._checkEdit(F);
				j && (e._downPosition = e._getLogicalPoint(F), e.gv.dm().beginTransaction(), j.startEdit(e, F), e.editing = !0)
			}
		}, uo.prototype._checkEdit = function(a) {
			var m = this,
				h = m.gv,
				_ = m._getLogicalPoint(a),
				d = m.invokeSubModule("check", !0, h, a, _) || null;
			return m._editMod = d, d
		}, uo.prototype.handleWindowTouchMove = function(s) {
			return this.handleWindowMouseMove(s)
		}, uo.prototype.handleWindowMouseMove = function(p) {
			var J = this,
				z = J._downPosition;
			if (z) {
				var t = J._getLogicalPoint(p);
				if (t.distanceTo(z) < J.getStyle("moveSensitivity")) return;
				delete J._downPosition
			}
			var i = J._editMod;
			i && i.handleEdit(J.gv, p)
		}, uo.prototype._getLogicalPoint = function(r) {
			var F = this,
				X = d.Default.getLogicalPoint(r, F._canvas);
			return new ki.Math.Vector2(X)
		}, uo.prototype.handleWindowTouchEnd = function(T) {
			return this.handleWindowMouseUp(T)
		}, uo.prototype.handleWindowMouseUp = function() {
			var P;
			for (P in {
				_46O: !0
			}) break;
			return function(z) {
				var R = this;
				R.editing = !1, R.setCursor("default"), R.invokeSubModule(P, !1, z), R._42(), R.gv.dm().endTransaction()
			}
		}(), uo.prototype.handle_mousewheel = function(J) {
			var c = this;
			ap(J), c.invokeSubModule("preHandleScroll", !0) || c.gv.handleScroll(J, J.wheelDelta)
		}, uo.prototype.handleDelete = function() {
			var I = this;
			if (!I.editDetail) {
				I.gv.dm().beginTransaction();
				var f = I.invokeSubModule("handleNormalStateDelete", !0);
				return I.gv.dm().endTransaction(), f || I.gv.removeSelection(), void 0
			}
			I.gv.dm().beginTransaction(), I.invokeSubModule("handleDelete", !0), I.gv.dm().endTransaction(), I._42()
		}, uo.prototype.handle_keydown = function(G) {
			var O = this;
			if ((G.metaKey || G.ctrlKey) && O._42(), Co(G) && !O.editing) return O.gvEditing = !1, O.setCursor("default"), O._42(), void 0;
			var B = gq(G);
			return O.editDetail ? ((B || gk(G)) && (O.editDetail = !1, O._42()), O.gv.dm().beginTransaction(), O.invokeSubModule("handle_keydown", !0, G), O.gv.dm().endTransaction(), void 0) : (O.gv.dm().beginTransaction(), O.invokeSubModule("handleNormalStateKeyDown", !0, G), O.gv.dm().endTransaction(), B && O._tryEnterEditDetailMode(), void 0)
		}, uo.prototype.handle_keyup = function(s) {
			this.gv.dm().beginTransaction(), this.invokeSubModule("handle_keyup", !0, s), this.gv.dm().endTransaction()
		}, uo.prototype._tryEnterEditDetailMode = function() {
			var C = this;
			return !C.editDetail && C.invokeSubModule("canEnterEditDetailMode", !0) && 1 === C._getValidSelection().length ? (C.editDetail = !0, C._42(), !0) : void 0
		}, uo.prototype._tryQuitEditDetailMode = function(y) {
			var J = this;
			if (J.editDetail) {
				var w = J.gv,
					B = J.getSubModule("Curve").target;
				return y && w.getDataAt(y) === B ? void 0 : (J.editDetail = !1, J._42(), !0)
			}
		}, uo.prototype.setStyle = function(i, x, t) {
			var p = this;
			t ? ki.setStyle(i, x) : p._styleMap[i] = x, p.fp("styleChanged", null, {
				key: i,
				value: x,
				base: t
			}), p._42()
		}, uo.prototype.getStyle = function(I) {
			var k = this,
				L = k._styleMap[I];
			return L !== r ? L : ki.getStyle(I)
		}, uo.prototype.setCursor = function(p) {
			this._resetCustomCursorStyle(), d.graph.EditInteractor.superClass.setCursor.call(this, p)
		}, uo.prototype._resetCustomCursorStyle = function() {
			var v = this;
			if (v._customStyle) {
				var l = this.gv.getView();
				l.classList && l.classList.remove && l.classList.remove(v._customStyle), v._customStyle = null
			}
		}, uo.prototype._setRotateCursor = function(v) {
			var M = this,
				D = M._cursorFactory;
			D || (D = M._cursorFactory = new ki.CursorFactory(M));
			var c = D.getRotateCursor(v),
				R = M.gv.getView();
			M._resetCustomCursorStyle(), M._customStyle = c, R.classList && R.classList.add && R.classList.add(c)
		};
		var yj = ki.Group = function(K) {
				var m = this;
				m._entities = K, m._64O = 0, m._position = {
					x: 0,
					y: 0
				}, m._scale = {
					x: 1,
					y: 1
				}, m._anchor = {
					x: .5,
					y: .5
				}, m._anchor2 = {
					x: .5,
					y: .5
				}
			};
		yj.prototype = {}, yj.prototype.constructor = yj;
		var Rp = null;
		yj.findOrCreateGroup = function(r) {
			if (Rp && Rp.checkIsMe(r)) return Rp;
			var P = new ki.Group(r);
			return P.getKeyOb() ? (Rp = P, P) : void 0
		}, yj.prototype.checkIsMe = function(p) {
			var o = this._entities;
			if (o.length !== p.length) return !1;
			var V, h = {},
				j = p.length;
			for (V = 0; j > V; V++) h[p[V]._id] = !0;
			for (V = 0; j > V; V++) if (!h[o[V]._id]) return !1;
			return !0
		}, yj.prototype.getRotation = function() {
			return this._64O
		}, yj.prototype.getPosition = function() {
			return this._position
		}, yj.prototype.getAnchor = function() {
			return this._anchor
		}, yj.prototype.getWidth = function() {
			return this._width
		}, yj.prototype.getScale = function() {
			return this._scale
		}, yj.prototype.getSize = function() {
			return {
				width: this._width,
				height: this._height
			}
		}, yj.prototype.getHeight = function() {
			return this._height
		}, yj.prototype.getKeyOb = function() {
			for (var M = this._entities, o = M.length - 1; o >= 0; o--) {
				var $ = M[o];
				if (this.isNode($)) return $
			}
		}, yj.prototype.getAnchor2 = function() {
			var J = this,
				X = J.rotateCenter;
			if (X) return X;
			var P = J.getKeyOb();
			if (!P) return J._anchor;
			var H = J._anchor2,
				V = P.getMatrix();
			return V.tf({
				x: P.getWidth() * (H.x - P.getAnchor().x),
				y: P.getHeight() * (H.y - P.getAnchor().y)
			})
		}, yj.prototype.setAnchor2 = function(M, T) {
			var Y = this,
				m = Y.getKeyOb();
			if (m) {
				var B, i = m.getMatrix();
				B = "number" == typeof M ? {
					x: M,
					y: T
				} : M;
				var U = i.tfi(B);
				Y._anchor2 = {
					x: m.getAnchor().x + U.x / m.getWidth(),
					y: m.getAnchor().y + U.y / m.getHeight()
				}
			}
		}, yj.prototype.setRotation = function() {}, yj.prototype.beginRotate = function(H) {
			this.rotateCenter = H.pos, this.rotateMode = H.groupRotateMode
		}, yj.prototype.endRotate = function() {
			delete this.rotateCenter, delete this.rotateMode
		}, yj.prototype.addRotation = function(v, b) {
			return "batch" === b ? this._addRotationInBatchMode(v) : "block" === b ? this._addRotationInBlockMode(v) : void 0
		}, yj.prototype._addRotationInBlockMode = function($) {
			var n = this,
				U = n.rotateCenter || n.getPosition();
			n._entities.forEach(function(H) {
				if (n.isNode(H)) {
					var q = H.getMatrix();
					q.translate(-U.x, -U.y), q.rotate($), q.translate(U.x, U.y);
					var o = Math.sign(H.getScale().x);
					H.setRotation(G(q.b * o, q.a * o)), H.setPosition(q.tx, q.ty)
				}
			})
		}, yj.prototype._addRotationInBatchMode = function(A) {
			var K = this,
				C = K._anchor2;
			K._entities.forEach(function(W) {
				if (K.isNode(W)) {
					var R = W.getAnchor(),
						m = W.getMatrix(),
						q = m.tf({
							x: W.getWidth() * (C.x - R.x),
							y: W.getHeight() * (C.y - R.y)
						}),
						$ = new ki.Math.Matrix2;
					$.set(m.a, m.b, m.c, m.d, m.tx, m.ty), $.translate(-q.x, -q.y), $.rotate(A), $.translate(q.x, q.y);
					var b = Math.sign(W.getScale().x);
					W.setRotation(G($.b * b, $.a * b)), W.setPosition($.tx, $.ty)
				}
			})
		}, yj.prototype.setPosition = function(r) {
			var Q, m, S, p, b = this,
				t = b._position,
				C = r.x - t.x,
				i = r.y - t.y,
				D = b._entities;
			for (m = 0, S = D.length; S > m; m++) Q = D[m], pr(Q) && (p = Q.getPosition(), Q.setPosition(p.x + C, p.y + i));
			b._position = r
		}, yj.prototype.setScale = function(i, H) {
			var C = this,
				V = i / C._scale.x,
				I = H / C._scale.y;
			C._adjustChildScaleOrSize(V, I, "size"), C._scale = {
				x: i,
				y: H
			}
		}, yj.prototype.getRect = function() {
			var z = this,
				m = z._position,
				J = z._width,
				y = z._height;
			return {
				x: m.x - J / 2,
				y: m.y - y / 2,
				width: J,
				height: y
			}
		}, yj.prototype.setSize = function(i, O) {
			var R = this,
				i = Math.max(1, i),
				O = Math.max(1, O),
				f = i / R._width,
				Z = O / R._height;
			R._adjustChildScaleOrSize(f, Z, "size"), R._width = i, R._height = O
		}, yj.prototype._adjustChildScaleOrSize = function(m, _, F) {
			var g, P, X, a, y, Y, U, d, V, w, r, T, l, R, K = this,
				B = K._position,
				o = K._entities,
				n = new ki.Math.Matrix2;
			for (P = 0, X = o.length; X > P; P++) if (g = o[P], K.isNode(g)) {
				if (a = g.getPosition(), y = g.getRotation(), Y = g.getWidth(), U = g.getHeight(), d = g.getScale(), r = d.x * Y, T = d.y * U, n.identity().scale(r, T).rotate(y).translate(a.x, a.y).translate(-B.x, -B.y).rotate(-K._64O), y = G(n.b * Math.sign(r), n.a * Math.sign(r)), n.scale(m, _), V = Math.cos(y), w = Math.sin(y), Math.abs(V) < .001 ? (l = n.b / w, R = -n.c / w) : (l = n.a / V, R = n.d / V), "scale" === F) g.setScale(l / Y, R / U);
				else if ("size" === F) {
					var L = l / d.x,
						b = R / d.y;
					g.setScale(Of(l) * Math.abs(d.x), Of(R) * Math.abs(d.y)), g.setSize(Math.max(.1, Math.abs(L)), Math.max(.1, Math.abs(b)))
				}
				n.rotate(K._64O).translate(B.x, B.y), g.setPosition(n.tx, n.ty)
			}
		}, yj.prototype.getMatrix = function() {
			var h = this,
				q = h._position,
				F = d.Default.getInternal(),
				N = h._scale;
			return new F.Mat(h._64O, q.x, q.y, N.x, N.y)
		}, yj.prototype.getCorners = function() {
			var r = this,
				z = r._width,
				i = r._height,
				u = r._anchor,
				j = -z * u.x,
				J = -i * u.y,
				o = r.getMatrix();
			return [o.tf(j, J), o.tf(j, J + i), o.tf(j + z, J + i), o.tf(j + z, J)]
		}, yj.prototype.calcInfo = function() {
			var p, O, X, D, T, N, R = this,
				e = [],
				J = R._entities,
				G = R._64O;
			for (D = 0, T = J.length; T > D; D++) N = J[D], R.isNode(N) && N.getCorners && e.push.apply(e, N.getCorners());
			if (e.length) {
				var f = Math.cos(-G),
					C = Math.sin(-G),
					P = 1 / 0,
					a = -1 / 0,
					n = 1 / 0,
					M = -1 / 0;
				for (D = 0, T = e.length; T > D; D++) X = e[D], p = X.x, O = X.y, X.x = f * p - C * O, X.y = C * p + f * O, P = Math.min(P, X.x), a = Math.max(a, X.x), n = Math.min(n, X.y), M = Math.max(M, X.y);
				R._width = (a - P) / R._scale.x, R._height = (M - n) / R._scale.y, f = Math.cos(G), C = Math.sin(G);
				var V = R._anchor;
				p = P + (a - P) * V.x, O = n + (M - n) * V.y, R._position = {
					x: f * p - C * O,
					y: C * p + f * O
				}
			}
		}, yj.prototype.isNode = function(v) {
			return pr(v) ? $f(v) ? !1 : !0 : !1
		}, yj.prototype._42 = function(D, x, w) {
			var v, e, r, P, H, a, B, W, b = this,
				A = b._entities,
				R = b.rotateMode;
			for ("batch" === R && (W = b.getKeyOb()), v = 0, e = A.length; e > v; v++) r = A[v], b.isNode(r) && (a = r.getRect(), P = ki.toScreenPosition(w, {
				x: a.x,
				y: a.y
			}), H = ki.toScreenPosition(w, {
				x: a.x + a.width,
				y: a.y + a.height
			}), B = {
				min: P,
				max: H
			}, r === W && (B.isKeyOb = !0), ki.Icons.DrawIcon(D, x, ki.Icons.GroupSubEntityRect, B))
		};
		var nj = ki.CurveActiving = function(l, a) {
				this._curve = l, this._interactor = l._interactor;
				for (var b in a) this[b] = a[b]
			};
		nj.prototype = {}, nj.prototype.constructor = nj, q.defineProperties(nj.prototype, {
			point: {
				get: function() {
					return this._point
				},
				set: function(R) {
					var D = this;
					D._point = R, D.editingCtrl || D._firePointChange()
				}
			},
			pairs: {
				get: function() {
					return this._pairs
				},
				set: function(X) {
					var p = this;
					p._pairs = X, p.editingCtrl && p._firePointChange()
				}
			}
		}), nj.prototype._firePointChange = function() {
			var Y = this,
				w = Y.getCurrentEditingPoint();
			if (!w) return _.fi({
				kind: "selectPoint"
			}), void 0;
			var _ = Y._interactor,
				y = this._curve.target;
			if (y) {
				var S = ki.getDataMatrix(y).invert(),
					Q = w.e;
				w = S.apply(ki.toWorldPosition(_.gv, w)), w.e = Q;
				var g = Y._lastFirePoint;
				g && Math.abs(w.x - g.x) < 1e-5 && Math.abs(w.y - g.y) < 1e-5 && (w.e == r && g.e == r || Math.abs(w.e - g.e) < 1e-5) || (Y._lastFirePoint = w, _.fi({
					kind: "selectPoint",
					x: w.x,
					y: w.y,
					e: w.e
				}))
			}
		}, nj.prototype.dispose = function() {
			this._interactor.fi({
				kind: "selectPoint"
			})
		}, nj.prototype.getCurrentEditingPoint = function() {
			var N = this,
				d = N.editingCtrl;
			if (d) {
				var b = N.pairs;
				if (b) {
					var t = b[d.pairId],
						e = t[d.type];
					if (e) return e
				}
			}
			return N._point
		};
		var Wn = ki.CursorFactory = function(D) {
				var r = this;
				r._interactor = D, r._rotateCursorStyles = {}
			};
		Wn.prototype = {}, Wn.prototype.constructor = Wn, Wn.prototype.getRotateCursor = function(J) {
			var G = this;
			0 > J && (J += 2 * Math.PI);
			var I = G._interactor,
				r = I.getStyle("rotateCursorSize"),
				O = I.getStyle("rotateCursorRound"),
				n = Math.round(180 * (J / Math.PI) / O);
			n * O >= 360 && (n = 0);
			var c = G._rotateCursorStyles,
				D = "htCustomRotateStyle_" + r + "_" + O + "_" + n;
			return c[D] || (G._produceRotateCursor(D, r, O, n), c[D] = !0), D
		}, Wn.prototype._produceRotateCursor = function(L, Y, E, v) {
			var d = this;
			d._interactor;
			var m = d._canvas;
			m || (m = d._canvas = x.createElement("canvas")), m.width = m.height = Y * devicePixelRatio, m.style.width = m.style.height = Y + " px";
			var A = m.getContext("2d");
			ki.setAntialias(A, !1), A.scale(devicePixelRatio, devicePixelRatio);
			var V, K, Q, C, U, o = Math.round(Y / 2),
				i = "" + o + " " + o + ",auto !important;";
			V = Math.PI / 180 * v * E, A.clearRect(0, 0, Y, Y), A.save(), A.scale(Y / 32, Y / 32), A.translate(16, 16), A.rotate(V + Math.PI / 2), A.beginPath(), A.moveTo(-8, 0), A.lineTo(-8, 3), A.lineTo(-5, 3), A.moveTo(8, 0), A.lineTo(8, 3), A.lineTo(5, 3), A.moveTo(-8, 3), A.quadraticCurveTo(0, -6, 8, 3), A.restore(), A.strokeStyle = "white", A.lineWidth = 4, A.stroke(), A.strokeStyle = "black", A.lineWidth = 2, A.stroke(), K = JSON.stringify(m.toDataURL()), C = "cursor:url(" + K + ")" + i, 1 !== devicePixelRatio && (Q = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + Y + 'px" height="' + Y + 'px"><image xlink:href=' + K + ' width="' + Y + '" height="' + Y + '"/></svg>', C += "cursor:url(data:image/svg+xml;base64," + btoa(Q) + ")" + i, C += "cursor:-webkit-image-set(url(" + K + ")" + devicePixelRatio + "x,url(" + K + ")1x)" + i), U = x.createElement("style"), U.textContent = "body." + L + " *, ." + L + "{" + C + "}", x.head.appendChild(U)
		};
		var we = ki.Guide.Grid = function(x) {
				var g = this;
				g._interactor = x, g._alignmentGuideId = 0, g._xAlignmentGuide = [], g._yAlignmentGuide = []
			};
		we.prototype = {}, we.prototype.constructor = we, q.defineProperties(we.prototype, {
			gridBlockSize: {
				get: function() {
					var k = this;
					return k._gridBlockSize || k._interactor.getStyle("gridBlockSize")
				},
				set: function(M) {
					this._gridBlockSize = M, this._interactor._42()
				}
			},
			gridThickLinesEvery: {
				get: function() {
					var U = this;
					return U._gridThickLinesEvery || U._interactor.getStyle("gridThickLinesEvery")
				},
				set: function(K) {
					this._gridThickLinesEvery = K, this._interactor._42()
				}
			},
			gridEnabled: {
				get: function() {
					var R = this,
						V = R._interactor;
					return V.gridEnabled && R.isValidGrid()
				}
			}
		}), we.prototype._42 = function() {
			var Z = this,
				z = Z._interactor;
			Z.gridEnabled && Z.drawGrid(), z.alignmentGuideEnabled && Z.drawAlignmentGuide()
		}, we.prototype.makeMatrix = function() {
			var y = this,
				g = y._interactor.getStyle("gridAngle"),
				b = y._interactor.getStyle("gridRotation"),
				v = new ki.Math.Matrix2,
				Z = Math.sin(g),
				P = Math.cos(g);
			return v.set(1, 0, P, Z, 0, 0), v.rotate(b), v
		}, we.prototype.isValidGrid = function() {
			var L = this,
				I = Math.PI,
				E = L._interactor,
				t = E.gv;
			if (t._zoom < E.getStyle("gridZoomThreshold")) return !1;
			var A = E.getStyle("gridAngle"),
				x = Math.abs(180 * (A % I / I)),
				y = 1 - 1e-8;
			return y > x || x > 180 - y ? !1 : !0
		}, we.prototype.drawAlignmentGuide = function() {
			var T = this,
				d = T._interactor,
				u = d.gv,
				o = d._canvas,
				y = d._context,
				h = o.width,
				$ = o.height,
				P = u.tx(),
				i = u.ty(),
				v = u._zoom;
			y.beginPath(), y.strokeStyle = d.getStyle("gridAlignmentGuideColor"), y.lineWidth = 1, T._xAlignmentGuide.forEach(function(l) {
				var J = l.p * v + P;
				y.moveTo(J, 0), y.lineTo(J, $)
			}), T._yAlignmentGuide.forEach(function(u) {
				var L = u.p * v + i;
				y.moveTo(0, L), y.lineTo(h, L)
			}), y.stroke()
		}, we.prototype.drawGrid = function() {
			function M(Q, K, V, r) {
				var v = ki.toScreenPosition(i, D.apply({
					x: Q,
					y: K
				})),
					H = ki.toScreenPosition(i, D.apply({
						x: V,
						y: r
					}));
				x.moveTo(v.x, v.y), x.lineTo(H.x, H.y)
			}
			var B = this,
				A = B._interactor,
				V = B.gridBlockSize,
				W = B.gridThickLinesEvery,
				z = A.getStyle("gridThickColor"),
				K = A.getStyle("gridLightColor"),
				i = A.gv,
				h = A._canvas,
				x = A._context,
				S = h.width,
				U = h.height,
				D = B.makeMatrix(),
				H = D.applyInverse(ki.toWorldPosition(i, {
					x: 0,
					y: 0
				})),
				E = D.applyInverse(ki.toWorldPosition(i, {
					x: S,
					y: 0
				})),
				n = D.applyInverse(ki.toWorldPosition(i, {
					x: 0,
					y: U
				})),
				F = D.applyInverse(ki.toWorldPosition(i, {
					x: S,
					y: U
				})),
				v = Math.min(H.x, E.x, n.x, F.x),
				Y = Math.max(H.x, E.x, n.x, F.x),
				N = Math.min(H.y, E.y, n.y, F.y),
				p = Math.max(H.y, E.y, n.y, F.y);
			S = Y - v, U = p - N;
			var r = Math.ceil(v / V),
				J = Math.floor(Y / V),
				q = Math.ceil(N / V),
				j = Math.floor(p / V);
			i.tx(), i.ty(), i._zoom;
			var l, b, s;
			for (x.save(), x.lineWidth = 1, x.beginPath(), x.strokeStyle = z, s = Math.ceil(r / W) * W; J >= s; s += W) l = s * V, M(l, N, l, p);
			for (s = Math.ceil(q / W) * W; j >= s; s += W) b = s * V, M(v, b, Y, b);
			for (x.stroke(), x.beginPath(), x.strokeStyle = K, s = r; J >= s; s++) 0 !== s % W && (l = s * V, M(l, N, l, p));
			for (s = q; j >= s; s++) 0 !== s % W && (b = s * V, M(v, b, Y, b));
			x.stroke(), x.restore()
		}, we.prototype.getAlignmentGuides = function() {
			var U = this;
			return {
				x: U._xAlignmentGuide,
				y: U._yAlignmentGuide
			}
		}, we.prototype.addAlignmentGuide = function(g, k, Y) {
			var O = this,
				C = "x" === g ? O._xAlignmentGuide : O._yAlignmentGuide,
				Y = Y ? Y : ++O._alignmentGuideId,
				d = {
					p: k,
					id: Y
				};
			if (C.length) {
				var W = O._findClosestAlignmentGuide(d.p, C);
				W.dis < 0 ? C.splice(W.index + 1, 0, d) : C.splice(W.index, 0, d)
			} else C.push(d);
			return O._interactor._42(), Y
		}, we.prototype.findClosest = function(d, c, I) {
			var A = this,
				j = A._interactor,
				B = j.gv;
			I && (d = ki.toWorldPosition(B, d));
			var W, e, E, T = 1 / 0,
				k = 1 / 0,
				$ = d.x,
				P = d.y;
			if (A.gridEnabled) {
				var D = A.gridBlockSize,
					t = A.makeMatrix(),
					J = t.applyInverse(d);
				J = t.apply({
					x: Math.round(J.x / D) * D,
					y: Math.round(J.y / D) * D
				}), T = J.x - $, k = J.y - P, E = !0
			}
			if (j.alignmentGuideEnabled && (W = A._findClosestAlignmentGuide($, A._xAlignmentGuide).dis, e = A._findClosestAlignmentGuide(P, A._yAlignmentGuide).dis, Math.abs(W) < Math.abs(T) && (T = W, E = !0), Math.abs(e) < Math.abs(k) && (k = e, E = !0)), E) {
				E = !1;
				var O = B._zoom,
					Z = j.getStyle("smartGuideSensitivity") / O,
					o = {};
				if (Math.abs(T) < Z && "y" !== c && (o.x = I ? T * O : T, E = !0), Math.abs(k) < Z && "x" !== c && (o.y = I ? k * O : k, E = !0), E) return o
			}
		}, we.prototype._findClosestAlignmentGuide = function(x, n) {
			if (!n.length) return {
				dis: 1 / 0
			};
			for (var d, Q = 0, o = n.length - 1; o - Q > 1;) d = Math.floor((Q + o) / 2), n[d].p < x ? Q = d : o = d;
			var f = n[Q].p - x,
				b = n[o].p - x;
			return Math.abs(f) <= Math.abs(b) ? {
				line: n[Q],
				dis: f,
				index: Q
			} : {
				line: n[o],
				dis: b,
				index: o
			}
		}, we.prototype.removeAllAlignmentGuide = function(l) {
			var I = this;
			"y" !== l && (I._xAlignmentGuide = []), "x" !== l && (I._yAlignmentGuide = []), I._interactor._42()
		}, we.prototype.removeAlignmentGuide = function(C) {
			for (var l, j, a, $ = this, o = $._xAlignmentGuide, A = 0; 2 > A; A++) for (o = 0 === A ? $._xAlignmentGuide : $._yAlignmentGuide, l = 0, j = o.length; j > l; l++) if (a = o[l], a.id === C) return o.splice(l, 1), $._interactor._42(), {
				axis: 0 === A ? "x" : "y",
				position: a.p
			};
			return !1
		}, we.prototype.adjustAlignmentGuide = function(S, N) {
			var b = this,
				f = b.removeAlignmentGuide(S);
			return f ? (b.addAlignmentGuide(f.axis, N, S), !0) : !1
		};
		var Pc = ki.Guide.Rect = function(L) {
				var l = this;
				l._interactor = L
			};
		Pc.prototype = {}, Pc.prototype.constructor = Pc, Pc.prototype.gatherRects = function() {
			var R, B, X, E, L = this,
				t = L._interactor.gv,
				Z = [],
				P = [],
				u = {
					x: Z,
					y: P
				},
				y = {},
				F = t.getDataModel(),
				m = F.a("width"),
				V = F.a("height");
			m && V && (R = 0, B = 0, X = m, E = V, Z.push({
				node: F,
				type: 0,
				p: R
			}, {
				node: F,
				type: 1,
				p: R + X / 2
			}, {
				node: F,
				type: 2,
				p: R + X
			}), P.push({
				node: F,
				type: 0,
				p: B
			}, {
				node: F,
				type: 1,
				p: B + E / 2
			}, {
				node: F,
				type: 2,
				p: B + E
			}), y[F._id || 0] = {
				x: R,
				y: B,
				width: X,
				height: E
			}), F.each(function(i) {
				if (pr(i) && !t.isSelected(i) && t.isVisible(i)) {
					var F = !1;
					if (t.sm().getSelection().each(function(l) {
						F || (i.isHostOn(l) ? F = !0 : i.isDescendantOf(l) && (F = !0))
					}), !F) {
						var g = i.getRect();
						R = g.x, B = g.y, X = g.width, E = g.height, Z.push({
							node: i,
							type: 0,
							p: R
						}, {
							node: i,
							type: 1,
							p: R + X / 2
						}, {
							node: i,
							type: 2,
							p: R + X
						}), P.push({
							node: i,
							type: 0,
							p: B
						}, {
							node: i,
							type: 1,
							p: B + E / 2
						}, {
							node: i,
							type: 2,
							p: B + E
						}), y[i._id] = g
					}
				}
			}), Z.sort(function(S, d) {
				return S.p - d.p
			}), P.sort(function(c, r) {
				return c.p - r.p
			}), L._grid = u, L._87I = y
		}, Pc.prototype.gatherLines = function(L, r, F) {
			var s, g, n, R, f, j, Z, k, P, x, u, N, b = this,
				M = [b.findClosest({
					x: L.x,
					y: L.y
				}, r), b.findClosest({
					x: L.x + L.w / 2,
					y: L.y + L.h / 2
				}, r), b.findClosest({
					x: L.x + L.w,
					y: L.y + L.h
				}, r)],
				o = {},
				G = b._87I;
			F = F || 255;
			var B, z;
			for (b._guideLine = [], s = 0; 2 > s; s++) for (o = {}, 0 === s ? (R = "y", k = L.x, P = k + L.w) : (R = "x", k = L.y, P = k + L.h), g = 0; 3 > g; g++) f = M[g], f && isFinite(f[R]) && (B = 1 << 3 * s + g, F & B && (j = f[R + "Line"], Z = j.node, z = Z._id || 0, o[z] || (o[z] = !0, N = G[z], "y" === R ? (x = N.x, u = N.x + N.width) : (x = N.y, u = N.y + N.height), n = j.p, b._guideLine.push({
				type: R,
				a: k,
				b: P,
				c: x,
				d: u,
				p: n
			}))))
		}, Pc.prototype._binarySearchClosest = function(C, N) {
			if (!N.length) return {
				dis: 1 / 0
			};
			for (var X, B = 0, u = N.length - 1; u - B > 1;) X = Math.floor((B + u) / 2), N[X].p < C ? B = X : u = X;
			var m = N[B].p - C,
				o = N[u].p - C;
			return Math.abs(m) <= Math.abs(o) ? {
				line: N[B],
				dis: m
			} : {
				line: N[u],
				dis: o
			}
		}, Pc.prototype.findClosest = function(Q, b, j) {
			var c = this,
				C = c._interactor,
				h = C.gv,
				O = c._grid;
			j && (Q = ki.toWorldPosition(h, Q));
			var X, k = c._binarySearchClosest(Q.x, O.x),
				U = c._binarySearchClosest(Q.y, O.y),
				u = k.dis,
				$ = U.dis,
				_ = h._zoom,
				H = C.getStyle("smartGuideSensitivity") / _,
				g = {};
			return Math.abs(u) < H && "y" !== b && (g.x = j ? u * _ : u, g.xLine = k.line, X = !0), Math.abs($) < H && "x" !== b && (g.y = j ? $ * _ : $, g.yLine = U.line, X = !0), X ? g : void 0
		}, Pc.prototype._42 = function() {
			var w = this,
				G = w._guideLine;
			if (G && !d.Default.isCtrlDown()) {
				var b, Y, q, J, g, k, X, h, M, A, V, y, U, u, p, R, z, r = w._interactor,
					B = r.gv,
					j = r._context,
					E = B.tx(),
					K = B.ty(),
					S = B._zoom,
					L = r.getStyle("guideLineTextSpacing");
				for (b = 0, Y = G.length; Y > b; b++) q = G[b], h = q.type, M = q.p, A = q.a, V = q.b, y = q.c, U = q.d, u = Math.min(A, y), p = Math.max(V, U), "x" === h ? (J = M * S + E, g = u * S + K, k = J, X = p * S + K) : (J = u * S + E, g = M * S + K, k = p * S + E, X = g), ki.Icons.DrawIcon(r, j, ki.Icons.MoveLineGuide, [J, g, k, X]), U >= A && V >= y || (u = A > U ? U : V, p = A > U ? A : y, z = p - u, "x" === h ? (q.center2center || (J -= L, k = J), g = u * S + K, X = p * S + K, R = ki.Icons.MoveLineGuideDistanceV) : "y" === h && (q.center2center || (g -= L, X = g), J = u * S + E, k = p * S + E, R = ki.Icons.MoveLineGuideDistanceH), ki.Icons.DrawIcon(r, j, R, {
					x0: J,
					y0: g,
					x1: k,
					y1: X,
					dis: z
				}))
			}
		}, Pc.prototype.clear = function() {
			this._guideLine = null
		}, ki.DefaultStyleMap = {
			pointSize: [24, 9],
			checkSize: 7,
			rotateCheckSize: 10,
			moveSensitivity: 10,
			rotateRound: Math.PI / 2,
			rotateSensitivity: Math.PI / 60,
			shiftRotateRound: Math.PI / 12,
			shiftLineRotateRound: Math.PI / 4,
			anchorMovable: !0,
			anchorVisible: !0,
			anchorHideThreshold: 25,
			anchorOutsideVisibleThreshold: .25,
			anchorRound: .25,
			anchorSensitivity: .02,
			smartGuideSensitivity: 8,
			curveIntersectSize: 5,
			curvePointIntersectSize: 8,
			edgeHostDetectPerFrame: !0,
			guideLineTextSpacing: 32,
			gridBlockSize: 40,
			gridThickLinesEvery: 10,
			gridThickColor: "#5d5d5d",
			gridLightColor: "#d0d0d0",
			gridZoomThreshold: .25,
			gridAlignmentGuideColor: "#ff0000",
			gridAngle: Math.PI / 2,
			gridRotation: 0,
			groupRotateModeDefault: "block",
			groupRotateModeKey: ["ctrlKey", "metaKey"],
			rotateCursorSize: 32,
			rotateCursorRound: 45,
			tipTextColor: "#ffffff",
			tipBackground: "#333333",
			curveHighlightColor: "#30599e",
			rectPointBackground: "white",
			rectPointBorderColor: "#666666",
			rectPointShadowColor: "rgba(0,0,0,0.35)",
			shapeCtrlPointBackground: "white",
			shapeCtrlPointBorderColor: "#707070",
			shapeCtrlPointHighlightBorder: "black",
			shapeHighlighPointBackground: "#30599e",
			curveElevationVisible: !0,
			curveElevationIntersectSize: 8,
			curveElevationGuideShift: [20, 0],
			connectGuideVisible: !0,
			connectGuideShift: [1, .25, 8, 0],
			connectGuideIntersectSize: 8,
			connectGuideGarbageIntersectsize: 25,
			connectGuideGarbageShift: [1, 1, -48, -48]
		};
		var jq = ki.Icons = {},
			Ul = 1e4,
			Wh = null,
			gg = 8;
		d.Default.setImage("Icons.RectPoint", {
			width: gg,
			height: gg,
			comps: [{
				type: "shape",
				points: [0, 0, 0, gg, gg, gg, gg, 0],
				segments: [1, 2, 2, 2, 5],
				shadow: !0,
				borderWidth: 1,
				shadowColor: {
					func: function() {
						return Wh.getStyle("rectPointShadowColor")
					}
				},
				background: {
					func: function() {
						return Wh.getStyle("rectPointBackground")
					}
				},
				borderColor: {
					func: function() {
						return Wh.getStyle("rectPointBorderColor")
					}
				}
			}]
		});
		var Cs = "#e000e0";
		jq.GroupSubEntityRect = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						var G = jq.GroupSubEntityRect.data;
						if (!G) return [];
						var g = G.min,
							P = G.max;
						return [g.x, g.y, g.x, P.y, P.x, P.y, P.x, g.y]
					}
				},
				segments: [1, 2, 2, 2, 5],
				background: null,
				borderWidth: 1,
				borderColor: {
					func: function() {
						return jq.GroupSubEntityRect.data.isKeyOb ? Cs : "#666666"
					}
				}
			}]
		}, jq.Line = {
			comps: [{
				type: "image",
				name: "Icons.RectPoint",
				rect: {
					func: function() {
						return [[jq.Line.data.P1.x, jq.Line.data.P1.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				rect: {
					func: function() {
						return [[jq.Line.data.P2.x, jq.Line.data.P2.y], gg, gg]
					}
				}
			}]
		}, jq.NodeHoverGuide = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						return jq.NodeHoverGuide.data
					}
				},
				segments: [1, 2, 2, 2, 5],
				background: null,
				borderWidth: 1,
				borderColor: "#3399FF"
			}]
		}, jq.Rect = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						var c = jq.Rect.data;
						if (!c) return [];
						var C = c.LT,
							y = c.LB,
							_ = c.RB,
							Z = c.RT;
						return [C.x, C.y, y.x, y.y, _.x, _.y, Z.x, Z.y]
					}
				},
				segments: [1, 2, 2, 2, 5],
				background: null,
				borderWidth: 1,
				borderColor: "#666666"
			}, {
				type: "image",
				name: "Icons.RectPoint",
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.LT.x, jq.Rect.data.LT.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.LB.x, jq.Rect.data.LB.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.RB.x, jq.Rect.data.RB.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.RT.x, jq.Rect.data.RT.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				scaleX: .9,
				scaleY: .9,
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				visible: {
					func: function() {
						return jq.Rect.data.L ? !0 : !1
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.L.x, jq.Rect.data.L.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				scaleX: .9,
				scaleY: .9,
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				visible: {
					func: function() {
						return jq.Rect.data.R ? !0 : !1
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.R.x, jq.Rect.data.R.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				scaleX: .9,
				scaleY: .9,
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				visible: {
					func: function() {
						return jq.Rect.data.T ? !0 : !1
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.T.x, jq.Rect.data.T.y], gg, gg]
					}
				}
			}, {
				type: "image",
				name: "Icons.RectPoint",
				scaleX: .9,
				scaleY: .9,
				rotation: {
					func: function() {
						return jq.Rect.data.rotation
					}
				},
				visible: {
					func: function() {
						return jq.Rect.data.B ? !0 : !1
					}
				},
				rect: {
					func: function() {
						return [[jq.Rect.data.B.x, jq.Rect.data.B.y], gg, gg]
					}
				}
			}]
		};
		var rj = 18;
		d.Default.setImage("Icons.Anchor", {
			width: rj,
			height: rj,
			comps: [{
				type: "arc",
				rect: [4, 4, rj - 8, rj - 8],
				arcFrom: 0,
				arcClose: !1,
				background: "#ffffff",
				borderWidth: 0,
				borderColor: "#000000"
			}, {
				type: "shape",
				points: [2, rj / 2, rj - 2, rj / 2, rj / 2, 2, rj / 2, rj - 2],
				segments: [1, 2, 1, 2],
				background: null,
				borderWidth: 1,
				borderColor: "#111111"
			}, {
				type: "arc",
				rect: [5.5, 5.5, rj - 11, rj - 11],
				arcFrom: 0,
				arcClose: !1,
				background: null,
				borderWidth: 1,
				borderColor: "#111111"
			}]
		}), jq.Anchor = {
			comps: [{
				type: "image",
				name: "Icons.Anchor",
				rect: {
					func: function() {
						return [[jq.Anchor.data.POS.x, jq.Anchor.data.POS.y], rj, rj]
					}
				}
			}]
		}, jq.TipShiftX = 12, jq.TipShiftY = 12;
		var Se = [8, 28];
		jq.TipHelper = {
			comps: [{
				type: "roundRect",
				rect: {
					func: function() {
						return [jq.TipHelper.data.helperPos.x, jq.TipHelper.data.helperPos.y, Se[0] * jq.TipHelper.data.size, Se[1]]
					}
				},
				background: {
					func: function() {
						return Wh.getStyle("tipBackground")
					}
				},
				opacity: .6
			}, {
				type: "text",
				text: {
					func: function() {
						return jq.TipHelper.data.text
					}
				},
				rect: {
					func: function() {
						return [jq.TipHelper.data.helperPos.x, jq.TipHelper.data.helperPos.y, Se[0] * jq.TipHelper.data.size, Se[1]]
					}
				},
				color: {
					func: function() {
						return Wh.getStyle("tipTextColor")
					}
				},
				font: "bold 12px Arial",
				align: "center"
			}]
		};
		var Tq = 7;
		jq.ShapePoint = {
			comps: [{
				type: "circle",
				rect: {
					func: function() {
						var J = jq.ShapePoint.data;
						return [J, Tq, Tq]
					}
				},
				background: "#ffffff",
				borderWidth: 1,
				borderColor: "#333333"
			}]
		}, jq.ShapeBgCurve = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						return jq.ShapeBgCurve.data.P
					}
				},
				segments: {
					func: function() {
						return jq.ShapeBgCurve.data.S
					}
				},
				background: null,
				borderWidth: 1,
				borderColor: "#333333"
			}]
		};
		var Ao = 8;
		jq.ShapeHighlighPoint = {
			comps: [{
				type: "circle",
				rect: {
					func: function() {
						var U = jq.ShapeHighlighPoint.data;
						return [[U.x, U.y], Ao, Ao]
					}
				},
				background: {
					func: function() {
						return Wh.getStyle("shapeHighlighPointBackground")
					}
				},
				borderWidth: 0
			}]
		};
		var Me = 10;
		jq.ShapeHighlighRealPoint = {
			comps: [{
				type: "circle",
				rect: {
					func: function() {
						var m = jq.ShapeHighlighRealPoint.data;
						return [[m.x, m.y], Me, Me]
					}
				},
				background: "#ffffff",
				borderWidth: 2,
				borderColor: "#333333"
			}]
		};
		var ml = 8;
		jq.ShapeHighlighCtrlPoint = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						var H = jq.ShapeHighlighCtrlPoint.data,
							h = H.x,
							p = H.y,
							y = ml / 2;
						return [h - y, p - y, h - y, p + y, h + y, p + y, h + y, p - y]
					}
				},
				segments: [1, 2, 2, 2, 5],
				borderWidth: 2,
				background: {
					func: function() {
						return Wh.getStyle("shapeCtrlPointBackground")
					}
				},
				borderColor: {
					func: function() {
						return Wh.getStyle("shapeCtrlPointBorderColor")
					}
				}
			}]
		};
		var Gj = 3;
		jq.ShapeHighlightCurve = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						return jq.ShapeHighlightCurve.data
					}
				},
				segments: [1, 4],
				background: null,
				borderWidth: Gj,
				borderColor: {
					func: function() {
						return Wh.getStyle("curveHighlightColor")
					}
				}
			}]
		}, jq.ShapeGuideLine = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						return jq.ShapeGuideLine.data
					}
				},
				background: null,
				borderWidth: 1,
				borderColor: "red"
			}]
		}, jq.MoveLineGuide = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						return jq.MoveLineGuide.data
					}
				},
				background: null,
				borderWidth: 1,
				borderColor: "red"
			}]
		};
		var An = 5;
		jq.MoveLineGuideDistanceH = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						var f = jq.MoveLineGuideDistanceH.data,
							b = f.x0,
							Y = f.y0,
							P = f.x1,
							I = f.y1;
						return [b, Y, P, I, b, Y - An, b, Y + An, P, I - An, P, I + An]
					}
				},
				segments: [1, 2, 1, 2, 1, 2],
				background: null,
				borderWidth: 1,
				borderColor: "red"
			}, {
				type: "text",
				text: {
					func: function() {
						return Math.round(jq.MoveLineGuideDistanceH.data.dis)
					}
				},
				rect: {
					func: function() {
						var B = jq.MoveLineGuideDistanceH.data;
						return [[(B.x0 + B.x1) / 2, B.y0 - 10], 20, 20]
					}
				},
				color: "red",
				font: "12px Arial",
				align: "center"
			}]
		}, jq.MoveLineGuideDistanceV = {
			comps: [{
				type: "shape",
				points: {
					func: function() {
						var v = jq.MoveLineGuideDistanceV.data,
							T = v.x0,
							l = v.y0,
							K = v.x1,
							p = v.y1;
						return [T, l, K, p, T - An, l, T + An, l, K - An, p, K + An, p]
					}
				},
				segments: [1, 2, 1, 2, 1, 2],
				background: null,
				borderWidth: 1,
				borderColor: "red"
			}, {
				type: "text",
				text: {
					func: function() {
						return Math.round(jq.MoveLineGuideDistanceV.data.dis)
					}
				},
				rect: {
					func: function() {
						var D = jq.MoveLineGuideDistanceV.data;
						return [[D.x0 - 10, (D.y0 + D.y1) / 2], 20, 20]
					}
				},
				color: "red",
				font: "12px Arial",
				align: "center"
			}]
		}, d.Default.setImage("Icons.EdgeElevationGuideImage", {
			width: 16,
			height: 16,
			comps: [{
				type: "oval",
				background: "rgb(255,255,255)",
				borderWidth: 1,
				borderColor: "rgb(138,138,138)",
				rect: [.5, .5, 15, 15]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(44,44,44)",
				borderCap: "round",
				points: [4, 8, 8, 4, 12, 8, 8, 4, 8, 13],
				segments: [1, 2, 2, 1, 2]
			}]
		}), jq.EdgeElevationGuide = {
			comps: [{
				type: "image",
				name: "Icons.EdgeElevationGuideImage",
				rect: {
					func: function() {
						var r = jq.EdgeElevationGuide.data,
							o = r.x,
							g = r.y,
							N = Wh.getStyle("curveElevationIntersectSize"),
							B = Wh.getStyle("curveElevationGuideShift");
						return o += B[0], g += B[1], [o - N, g - N, 2 * N, 2 * N]
					}
				}
			}]
		}, d.Default.setImage("Icons.ConnectGuideBgImage", {
			width: 12,
			height: 12,
			comps: [{
				type: "shape",
				background: "#3399ff",
				fillRule: "evenodd",
				shadowColor: "#1ABC9C",
				rotation: 3.14159,
				points: [6.00001, 11.99999, 6.00001, 11.99999, 2.6863, 11.99999, 1e-5, 9.30695, 1e-5, 5.99999, 1e-5, 5.99999, 1e-5, 2.68628, 2.69305, -1e-5, 6.00001, -1e-5, 12.00001, -1e-5, 11.99998, 12.00001, 6.00001, 11.99999],
				segments: [1, 2, 4, 2, 4, 2, 2, 2]
			}]
		}), d.Default.setImage("Icons.ConnectGuideHeaderImage", {
			width: 12,
			height: 12,
			comps: [{
				type: "oval",
				background: "#3399FF",
				borderColor: "#3399FF",
				shadowColor: "#1ABC9C",
				rect: [0, 0, 12, 12]
			}, {
				type: "shape",
				borderWidth: 1,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [4.76, 2.56, 8.2, 5.98, 4.76, 9.44]
			}]
		}), jq.ConnectGuide = {
			comps: [{
				type: "image",
				name: "Icons.ConnectGuideBgImage",
				rotation: {
					func: function() {
						return jq.ConnectGuide.data.rotation
					}
				},
				rect: {
					func: function() {
						var I = jq.ConnectGuide.data.connect;
						I.x, I.y;
						var y = Wh.getStyle("connectGuideIntersectSize");
						return [[I.x, I.y], 2 * y, 2 * y]
					}
				}
			}, {
				type: "image",
				name: "Icons.ConnectGuideHeaderImage",
				rect: {
					func: function() {
						var t = jq.ConnectGuide.data.cursorPos || jq.ConnectGuide.data.connect,
							i = Wh.getStyle("connectGuideIntersectSize");
						return [[t.x, t.y], 2 * i - 2, 2 * i - 2]
					}
				}
			}, {
				type: "shape",
				background: null,
				borderColor: "#3399ff",
				borderWidth: 2,
				segments: [1, 4],
				points: {
					func: function() {
						var h = jq.ConnectGuide.data.connect,
							n = jq.ConnectGuide.data.cursorPos || h;
						return [h.x, h.y, h.x + .5 * (n.x - h.x), h.y, n.x + .5 * (h.x - n.x), n.y, n.x, n.y]
					}
				}
			}]
		}, d.Default.setImage("Icons.ConnectGuideGarbageImage", {
			width: 48,
			height: 48,
			comps: [{
				type: "oval",
				background: "rgba(0,0,0,0.1)",
				borderColor: "#979797",
				shadowColor: "#1ABC9C",
				rect: [0, 0, 48, 48]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [19.84721, 19.69091, 19.84721, 32.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [24.10371, 19.69091, 24.10371, 32.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [28.15279, 19.69091, 28.15279, 32.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [11.23055, 15.22377, 36.76945, 15.189, 19.12302, 15.17121, 20.94722, 11.5228, 26.41985, 11.5228, 28.24406, 15.17121]
			}, {
				type: "rect",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				shadowColor: "#1ABC9C",
				rect: [15.48702, 15.22377, 17.02595, 21.25344]
			}]
		}), d.Default.setImage("Icons.ConnectGuideDeletingImage", {
			width: 56,
			height: 56,
			comps: [{
				type: "oval",
				background: "rgba(232,0,0,0.75)",
				borderColor: "#979797",
				shadowColor: "#1ABC9C",
				rect: [0, 0, 56, 56]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [22.67939, 27.69091, 22.67939, 40.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [26.93588, 27.69091, 26.93588, 40.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				points: [30.98497, 27.69091, 30.98497, 40.25123]
			}, {
				type: "shape",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				borderCap: "round",
				shadowColor: "#1ABC9C",
				anchorX: 0,
				anchorY: 1,
				rotation: 5.65062,
				points: [14.06272, 23.22377, 39.60163, 23.189, 21.9552, 23.17121, 23.7794, 19.5228, 29.25203, 19.5228, 31.07623, 23.17121]
			}, {
				type: "rect",
				borderWidth: 2,
				borderColor: "rgb(255,255,255)",
				shadowColor: "#1ABC9C",
				rect: [18.3192, 23.22377, 17.02595, 21.25344]
			}]
		}), jq.ConnectGuideGarbage = {
			comps: [{
				type: "image",
				name: {
					func: function() {
						var X = jq.ConnectGuideGarbage.data.hover;
						return X ? "Icons.ConnectGuideDeletingImage" : "Icons.ConnectGuideGarbageImage"
					}
				},
				rect: {
					func: function() {
						var R = jq.ConnectGuideGarbage.data,
							o = Wh.getStyle("connectGuideGarbageIntersectsize");
						return R.hover && (o += 5), [
							[R.x, R.y], 2 * o, 2 * o]
					}
				}
			}]
		};
		var ee = 6;
		jq.ShapeActivingCtrl = {
			comps: [{
				type: "shape",
				visible: {
					func: function() {
						return jq.ShapeActivingCtrl.data.c1 ? !0 : !1
					}
				},
				points: {
					func: function() {
						var C = jq.ShapeActivingCtrl.data;
						return [C.point.x, C.point.y, C.c1.x, C.c1.y]
					}
				},
				segments: [1, 2],
				background: null,
				borderWidth: 1,
				borderColor: "#707070"
			}, {
				type: "shape",
				visible: {
					func: function() {
						return jq.ShapeActivingCtrl.data.c2 ? !0 : !1
					}
				},
				points: {
					func: function() {
						var O = jq.ShapeActivingCtrl.data;
						return [O.point.x, O.point.y, O.c2.x, O.c2.y]
					}
				},
				segments: [1, 2],
				background: null,
				borderWidth: 1,
				borderColor: "#707070"
			}, {
				type: "shape",
				visible: {
					func: function() {
						return jq.ShapeActivingCtrl.data.c1 ? !0 : !1
					}
				},
				points: {
					func: function() {
						var s = jq.ShapeActivingCtrl.data.c1,
							b = s.x,
							f = s.y,
							Y = ee / 2;
						return "c1" === jq.ShapeActivingCtrl.data.hl && (Y += .5), [b - Y, f - Y, b - Y, f + Y, b + Y, f + Y, b + Y, f - Y]
					}
				},
				segments: [1, 2, 2, 2, 5],
				borderWidth: 2,
				background: {
					func: function() {
						return Wh.getStyle("shapeCtrlPointBackground")
					}
				},
				borderColor: {
					func: function() {
						return "c1" === jq.ShapeActivingCtrl.data.hl ? Wh.getStyle("shapeCtrlPointHighlightBorder") : Wh.getStyle("shapeCtrlPointBorderColor")
					}
				}
			}, {
				type: "shape",
				visible: {
					func: function() {
						return jq.ShapeActivingCtrl.data.c2 ? !0 : !1
					}
				},
				points: {
					func: function() {
						var o = jq.ShapeActivingCtrl.data.c2,
							$ = o.x,
							v = o.y,
							m = ee / 2;
						return "c2" === jq.ShapeActivingCtrl.data.hl && (m += .5), [$ - m, v - m, $ - m, v + m, $ + m, v + m, $ + m, v - m]
					}
				},
				segments: [1, 2, 2, 2, 5],
				borderWidth: 2,
				background: {
					func: function() {
						return Wh.getStyle("shapeCtrlPointBackground")
					}
				},
				borderColor: {
					func: function() {
						return "c2" === jq.ShapeActivingCtrl.data.hl ? Wh.getStyle("shapeCtrlPointHighlightBorder") : Wh.getStyle("shapeCtrlPointBorderColor")
					}
				}
			}]
		}, ki.Icons.DrawIcon = function(x, u, V, E) {
			V.width = V.height = Ul, V.data = E, Wh = x, d.Default.drawImage(u, V, 0, 0, Ul, Ul)
		}, ki.Icons.MapPoints = function(_, b) {
			for (var v = 0, t = _.length; t > v; v++) _[v] /= b
		}, ki.roundTo = function(E, K, Q) {
			var u = Math.abs(E % K);
			return Q > u || Q > K - u ? K * Math.round(E / K) : E
		}, ki.toFixed = function(y) {
			return Math.round(100 * y) / 100
		}, ki.getDataMatrix = function(r) {
			if (r instanceof d.Shape) {
				var t = new ki.Math.Matrix2,
					b = r.getPosition();
				return t.translate(-b.x, -b.y).scale(r.getScale().x, r.getScale().y).rotate(r.getRotation()).translate(b.x, b.y), t
			}
			return r.getMatrix ? r.getMatrix() : new ki.Math.Matrix2
		}, Math.sign === r && (Math.sign = function(B) {
			return 0 > B ? -1 : B > 0 ? 1 : +B
		});
		var fc = ki.Math.Matrix2 = function() {
				this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
			};
		fc.prototype = {}, fc.prototype.constructor = fc, fc.prototype.set = function(h, E, d, L, Z, n) {
			return this.a = h, this.b = E, this.c = d, this.d = L, this.tx = Z, this.ty = n, this
		}, fc.prototype.apply = function(c, w) {
			w = w || new Lq;
			var L = c.x,
				z = c.y;
			return w.x = this.a * L + this.c * z + this.tx, w.y = this.b * L + this.d * z + this.ty, w
		}, fc.prototype.applyInverse = function(p, Z) {
			Z = Z || new Lq;
			var s = 1 / (this.a * this.d + this.c * -this.b),
				U = p.x,
				G = p.y;
			return Z.x = this.d * s * U + -this.c * s * G + (this.ty * this.c - this.tx * this.d) * s, Z.y = this.a * s * G + -this.b * s * U + (-this.ty * this.a + this.tx * this.b) * s, Z
		}, fc.prototype.translate = function(r, f) {
			return this.tx += r, this.ty += f, this
		}, fc.prototype.scale = function(q, H) {
			return this.a *= q, this.d *= H, this.c *= q, this.b *= H, this.tx *= q, this.ty *= H, this
		}, fc.prototype.rotate = function(y) {
			var $ = Math.cos(y),
				Z = Math.sin(y),
				o = this.a,
				l = this.c,
				S = this.tx;
			return this.a = o * $ - this.b * Z, this.b = o * Z + this.b * $, this.c = l * $ - this.d * Z, this.d = l * Z + this.d * $, this.tx = S * $ - this.ty * Z, this.ty = S * Z + this.ty * $, this
		}, fc.prototype.append = function(S) {
			var E = this.a,
				V = this.b,
				r = this.c,
				m = this.d;
			return this.a = S.a * E + S.b * r, this.b = S.a * V + S.b * m, this.c = S.c * E + S.d * r, this.d = S.c * V + S.d * m, this.tx = S.tx * E + S.ty * r + this.tx, this.ty = S.tx * V + S.ty * m + this.ty, this
		}, fc.prototype.setTransform = function(f, P, o, z, R, s, A, n, S) {
			var Z, X, U, r, C, i, l, V, d, L;
			return C = Math.sin(A), i = Math.cos(A), l = Math.cos(S), V = Math.sin(S), d = -Math.sin(n), L = Math.cos(n), Z = i * R, X = C * R, U = -C * s, r = i * s, this.a = l * Z + V * U, this.b = l * X + V * r, this.c = d * Z + L * U, this.d = d * X + L * r, this.tx = f + (o * Z + z * U), this.ty = P + (o * X + z * r), this
		}, fc.prototype.prepend = function(l) {
			var $ = this.tx;
			if (1 !== l.a || 0 !== l.b || 0 !== l.c || 1 !== l.d) {
				var g = this.a,
					O = this.c;
				this.a = g * l.a + this.b * l.c, this.b = g * l.b + this.b * l.d, this.c = O * l.a + this.d * l.c, this.d = O * l.b + this.d * l.d
			}
			return this.tx = $ * l.a + this.ty * l.c + l.tx, this.ty = $ * l.b + this.ty * l.d + l.ty, this
		}, fc.prototype.invert = function() {
			var F = this.a,
				z = this.b,
				B = this.c,
				h = this.d,
				G = this.tx,
				E = F * h - z * B;
			return this.a = h / E, this.b = -z / E, this.c = -B / E, this.d = F / E, this.tx = (B * this.ty - h * G) / E, this.ty = -(F * this.ty - z * G) / E, this
		}, fc.prototype.identity = function() {
			return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
		}, fc.prototype.clone = function() {
			var m = new fc;
			return m.a = this.a, m.b = this.b, m.c = this.c, m.d = this.d, m.tx = this.tx, m.ty = this.ty, m
		}, fc.prototype.copy = function(N) {
			return N.a = this.a, N.b = this.b, N.c = this.c, N.d = this.d, N.tx = this.tx, N.ty = this.ty, N
		}, fc.IDENTITY = new fc, fc.TEMP_MATRIX = new fc;
		var Lq = ki.Math.Vector2 = function(e, G, L) {
				"object" == typeof e && (e.x != r ? (G = e.y, e = e.x, L = e.e) : (L = e[2], G = e[1], e = e[0])), this.set(e || 0, G || 0, L)
			};
		Lq.prototype = {}, Lq.prototype.constructor = Lq, q.defineProperties(Lq.prototype, {
			width: {
				get: function() {
					return this.x
				},
				set: function(F) {
					this.x = F
				}
			},
			height: {
				get: function() {
					return this.y
				},
				set: function(Z) {
					this.y = Z
				}
			}
		}), Lq.prototype.clone = function() {
			return new Lq(this.x, this.y, this.e)
		}, Lq.prototype.copy = function(E) {
			return this.set(E.x, E.y, E.e), this
		}, Lq.prototype.equals = function(G) {
			return G.x === this.x && G.y === this.y
		}, Lq.prototype.set = function(H, y, T) {
			return this.x = H || 0, this.y = y || (0 !== y ? this.x : 0), T != r && (this.e = T), this
		}, Lq.prototype.setScalar = function(z) {
			return this.x = z, this.y = z, this
		}, Lq.prototype.setX = function(l) {
			return this.x = l || 0, this
		}, Lq.prototype.setY = function(e) {
			return this.y = e || 0, this
		}, Lq.prototype.add = function(Q) {
			return this.x += Q.x, this.y += Q.y, this
		}, Lq.prototype.addVectors = function(r, k) {
			return this.x = r.x + k.x, this.y = r.y + k.y, this
		}, Lq.prototype.addScalar = function(p) {
			return this.x += p, this.y += p, this
		}, Lq.prototype.addScaledVector = function(Y, f) {
			return this.x += Y.x * f, this.y += Y.y * f, this
		}, Lq.prototype.sub = function(b) {
			return this.x -= b.x, this.y -= b.y, this
		}, Lq.prototype.subScalar = function(w) {
			return this.x -= w, this.y -= w, this
		}, Lq.prototype.subVectors = function(H, W) {
			return this.x = H.x - W.x, this.y = H.y - W.y, this
		}, Lq.prototype.multiply = function(J) {
			return this.x *= J.x, this.y *= J.y, this
		}, Lq.prototype.multiplyScalar = function(B) {
			return this.x *= B, this.y *= B, this
		}, Lq.prototype.divide = function(l) {
			return this.x /= l.x, this.y /= l.y, this
		}, Lq.prototype.divideScalar = function(b) {
			return this.multiplyScalar(1 / b)
		}, Lq.prototype.min = function(y) {
			return this.x = Math.min(this.x, y.x), this.y = Math.min(this.y, y.y), this
		}, Lq.prototype.max = function(Q) {
			return this.x = Math.max(this.x, Q.x), this.y = Math.max(this.y, Q.y), this
		}, Lq.prototype.clamp = function(X, F) {
			return this.x = Math.max(X.x, Math.min(F.x, this.x)), this.y = Math.max(X.y, Math.min(F.y, this.y)), this
		}, Lq.prototype.clampScalar = function() {
			var M, d;
			return function(A, $) {
				return M === r && (M = new Lq, d = new Lq), M.set(A, A), d.set($, $), this.clamp(M, d)
			}
		}(), Lq.prototype.clampLength = function(E, A) {
			var x = this.length();
			return this.multiplyScalar(Math.max(E, Math.min(A, x)) / x)
		}, Lq.prototype.dot = function(e) {
			return this.x * e.x + this.y * e.y
		}, Lq.prototype.lengthSq = function() {
			return this.x * this.x + this.y * this.y
		}, Lq.prototype.length = function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		}, Lq.prototype.normalize = function() {
			return this.divideScalar(this.length())
		}, Lq.prototype.angle = function() {
			var L = Math.atan2(this.y, this.x);
			return 0 > L && (L += 2 * Math.PI), L
		}, Lq.prototype.distanceTo = function(m) {
			return Math.sqrt(this.distanceToSquared(m))
		}, Lq.prototype.distanceToSquared = function(M) {
			var i = this.x - M.x,
				d = this.y - M.y;
			return i * i + d * d
		}, Lq.prototype.isNearEnough = function(w) {
			return this.distanceToSquared(w) < 1e-8
		}, Lq.prototype.setLength = function(C) {
			return this.multiplyScalar(C / this.length())
		}, Lq.prototype.lerp = function(L, O) {
			return this.x += (L.x - this.x) * O, this.y += (L.y - this.y) * O, this
		}, Lq.prototype.lerpVectors = function(J, U, b) {
			return this.subVectors(U, J).multiplyScalar(b).add(J)
		}, Lq.prototype.rotateAround = function(i, X) {
			var D = Math.cos(X),
				j = Math.sin(X),
				n = this.x - i.x,
				s = this.y - i.y;
			return this.x = n * D - s * j + i.x, this.y = n * j + s * D + i.y, this
		};
		var Rd = ki.Math.Curve = function() {
				this._curves = []
			};
		Rd.prototype = {}, Rd.prototype.constructor = Rd, Rd.prototype.createFromHtShape = function(D, v, U) {
			v instanceof d.List && (v = v.toArray());
			var z, F, K, V, o, k, Y, L = this,
				a = null,
				t = null,
				R = 0,
				H = ki.Math.Vector2,
				S = ki.Math.CubicBezier,
				M = function(p) {
					return new H(D[p], D[p + 1], U ? U[p / 2] : r)
				};
			for (F = 0, K = v.length; K > F; F++) {
				switch (V = v[F], o = null, V) {
				case 1:
					t = M(R), a = t, R += 2;
					break;
				case 2:
					z = M(R), R += 2, o = new S(t, t.clone(), z.clone(), z), t = z;
					break;
				case 3:
					k = M(R), z = M(R + 2), R += 4, o = new S(t, k.clone().sub(t).multiplyScalar(2 / 3).add(t), k.clone().sub(z).multiplyScalar(2 / 3).add(z), z), t = z;
					break;
				case 4:
					k = M(R), Y = M(R + 2), z = M(R + 4), R += 6, o = new S(t, k, Y, z), t = z;
					break;
				case 5:
					if (!a) break;
					o = new S(t, t.clone(), a.clone(), a), t = null, a = null
				}
				o && (o._index = L._curves.length, L._curves.push(o))
			}
		}, Rd.prototype.checkPoint = function(r, Q) {
			var H, s, z, A, c, x = this,
				B = x._curves;
			for (H = 0, s = B.length; s > H; H++) if (A = B[H], c = A.intersectRect(r, Q, Q), c.length) return z = 0, c.forEach(function(l) {
				z += l.t
			}), z /= c.length, r = A.getPointAt(z), r.t = z, {
				bezier: A,
				intersection: r
			}
		}, Rd.prototype.insertKnot = function(a, T) {
			var r = a.insertKnot(T),
				x = this,
				t = x._curves;
			t.splice(a._index, 1, r[0], r[1])
		}, Rd.prototype._isCloseEnough = function(O, E) {
			return Math.abs(O.x - E.x) < 1e-6 && Math.abs(O.y - E.y) < 1e-6
		}, Rd.prototype._isSamePoint = function(P, z) {
			return P === z
		}, Rd.prototype.moveRealPoint = function(D, Q) {
			var F = this,
				S = F._curves,
				G = Q.clone().sub(D);
			S.forEach(function(l) {
				var y = l._p1;
				l._p2, l._p3;
				var T = l._p4;
				F._isSamePoint(y, D) && (l._p2.add(G), l._p1 = Q), F._isSamePoint(T, D) && (l._p3.add(G), l._p4 = Q)
			})
		}, Rd.prototype.moveCtrlDueToRealPointMovement = function(E, e) {
			var s = this,
				V = s._curves,
				x = function(w) {
					w.add(e), w.e && e.e && (w.e += e.e)
				};
			V.forEach(function(q) {
				var j = q._p1;
				q._p2, q._p3;
				var e = q._p4;
				s._isSamePoint(j, E) && x(q._p2), s._isSamePoint(e, E) && x(q._p3)
			})
		}, Rd.prototype.moveCtrlPoint = function(t, U, $) {
			var n = t[$];
			if (n) {
				n.e !== r && (U.e = n.e);
				var C = this,
					d = C._curves;
				U.clone().sub(n), d.forEach(function(F) {
					var r;
					"c2" === $ ? r = "_p2" : "c1" === $ && (r = "_p3"), C._isSamePoint(F[r], n) && (F[r] = U)
				}), t[$] = U
			}
		}, Rd.prototype.deleteRealPoint = function(Q, u) {
			var k, O, w, D, F, G, A, h = this,
				m = h._curves,
				l = {},
				L = [],
				Z = ki.Math.CubicBezier;
			for (O = 0, w = m.length; w > O; O++) k = m[O], D = k._p1, F = k._p2, G = k._p3, A = k._p4, (l[O] || !h._isSamePoint(D, Q)) && (h._isSamePoint(A, Q) ? w > O + 1 && h._isSamePoint(m[O + 1]._p1, Q) && (u || L.push(new Z(D, F, m[O + 1]._p3, m[O + 1]._p4))) : L.push(k));
			h._curves = L
		}, Rd.prototype.findPairs = function($, m) {
			var x, d, K, n, U, v, D, B, u = this,
				Y = u._curves,
				V = {},
				M = [];
			for (d = 0, K = Y.length; K > d; d++) x = Y[d], n = x._p1, U = x._p2, v = x._p3, D = x._p4, !V[d] && u._isSamePoint(n, $) && (m ? M.push({
				point: n,
				r2: D
			}) : M.push({
				point: n,
				c2: U
			})), u._isSamePoint(D, $) && (B = m ? {
				point: D,
				r1: n
			} : {
				point: D,
				c1: v
			}, K > d + 1 && u._isSamePoint(Y[d + 1]._p1, $) && (m ? B.r2 = Y[d + 1]._p4 : B.c2 = Y[d + 1]._p2, V[d + 1] = !0), M.push(B));
			return M
		}, Rd.prototype.toHtShape = function() {
			var F = this,
				y = F._curves,
				J = [],
				$ = [],
				_ = {
					x: 1 / 0,
					y: 1 / 0
				};
			return y.forEach(function(H) {
				var T = H._p1,
					l = H._p2,
					p = H._p3,
					V = H._p4;
				return F._isCloseEnough(T, _) || (J.push(1), $.push(T.clone())), _ = V, F._isCloseEnough(T, l) && F._isCloseEnough(p, V) ? (J.push(2), $.push(V.clone()), void 0) : (J.push(4), $.push(l.clone(), p.clone(), V.clone()), void 0)
			}), {
				segments: J,
				points: $
			}
		};
		var Ll = ki.Math.CubicBezier = function(K, Q, D, q) {
				var A = this;
				A._id = ki.Math.CubicBezier._globalId++, A._p1 = K, A._p2 = Q, A._p3 = D, A._p4 = q
			};
		Ll._globalId = 1, Ll.prototype = {}, Ll.prototype.constructor = Ll, Ll.prototype.toString = function() {
			return this._id
		}, Ll.prototype.intersectRect = function(M, T, r) {
			var A = T / 2,
				v = r / 2,
				Y = M.x,
				Z = M.y,
				s = ki.Math.Vector2,
				q = new s(-A + Y, -v + Z),
				I = new s(A + Y, v + Z),
				U = new s(I.x, q.y),
				z = new s(q.x, I.y),
				L = this,
				x = L.intersectLine(q, U),
				K = L.intersectLine(U, I),
				e = L.intersectLine(I, z),
				N = L.intersectLine(z, q),
				w = x.concat(K).concat(e).concat(N);
			return w
		}, Ll.prototype.intersectLine = function(H, N) {
			var K, A, _, Y, n, z, Z, v, O, l, h, I, f, y = this,
				r = H.clone().min(N),
				u = H.clone().max(N);
			Y = y._p1, n = y._p2, z = y._p3, Z = y._p4, K = Y.clone().multiplyScalar(-1), A = n.clone().multiplyScalar(3), _ = z.clone().multiplyScalar(-3), h = K.add(A).add(_).add(Z), K = Y.clone().multiplyScalar(3), A = n.clone().multiplyScalar(-6), _ = z.clone().multiplyScalar(3), l = K.add(A).add(_), K = Y.clone().multiplyScalar(-3), A = n.clone().multiplyScalar(3), O = K.add(A), v = Y.clone(), f = new ki.Math.Vector2(H.y - N.y, N.x - H.x), I = H.x * N.y - N.x * H.y;
			for (var t = y.getRoots(f.dot(h), f.dot(l), f.dot(O), f.dot(v) + I), e = new Array, W = 0, x = t.length; x > W; W++) {
				var c = t[W];
				if (!(0 > c || c > 1)) {
					var X = Y.clone().lerp(n, c),
						q = n.clone().lerp(z, c),
						V = z.clone().lerp(Z, c),
						Q = X.lerp(q, c),
						d = q.lerp(V, c),
						g = Q.lerp(d, c);
					g.t = c, H.x == N.x ? r.y <= g.y && g.y <= u.y && e.push(g) : H.y == N.y ? r.x <= g.x && g.x <= u.x && e.push(g) : g.x >= r.x && g.y >= r.y && g.x <= u.x && g.y <= u.y && e.push(g)
				}
			}
			return e
		}, Ll.prototype.solveTForPoint = function(e) {
			var S, X, y, I, n = this;
			S = n._p1.x - e.x, X = n._p2.x - e.x, y = n._p3.x - e.x, I = n._p4.x - e.x;
			for (var j = n.getRoots(I - 3 * y + 3 * X - S, 3 * y - 6 * X + 3 * S, 3 * X - 3 * S, S), a = r, d = 1 / 0, A = 0, J = j.length; J > A; A++) {
				var P = j[A];
				if (!(0 > P || P > 1)) {
					var Z = n._p1.clone().lerp(n._p2, P),
						s = n._p2.clone().lerp(n._p3, P),
						W = n._p3.clone().lerp(n._p4, P),
						O = Z.lerp(s, P),
						p = s.lerp(W, P),
						k = O.lerp(p, P);
					k.t = P;
					var b = Math.abs(k.y - e.y);
					d > b && (d = b, a = k)
				}
			}
			return a
		}, Ll.prototype.getPointAt = function(C) {
			var S = this,
				m = S._p1,
				w = S._p2,
				T = S._p3,
				v = S._p4,
				r = m.clone().lerp(w, C),
				j = w.clone().lerp(T, C),
				V = T.clone().lerp(v, C),
				$ = r.lerp(j, C),
				M = j.lerp(V, C);
			return $.lerp(M, C)
		}, Ll.prototype.getRoots = function(Z, K, r, Q) {
			var D, O, e, I, z, d = new Array;
			if (Math.abs(Z) < 1e-6) {
				var D = K,
					O = r / D,
					e = Q / D,
					I = O * O - 4 * e;
				if (I > 0) {
					var z = Math.sqrt(I);
					d.push(.5 * (-O + z)), d.push(.5 * (-O - z))
				} else 0 == I && d.push(.5 * -O)
			}
			K /= Z, r /= Z, Q /= Z, D = (3 * r - K * K) / 3, O = (2 * K * K * K - 9 * r * K + 27 * Q) / 27;
			var E = K / 3,
				k = O * O / 4 + D * D * D / 27,
				b = O / 2;
			if (Math.abs(k) <= 1e-6 && (k = 0), k > 0) {
				var m, U, z = Math.sqrt(k);
				m = -b + z, U = m >= 0 ? Math.pow(m, 1 / 3) : -Math.pow(-m, 1 / 3), m = -b - z, m >= 0 ? U += Math.pow(m, 1 / 3) : U -= Math.pow(-m, 1 / 3), d.push(U - E)
			} else if (0 > k) {
				var w = Math.sqrt(-D / 3),
					J = Math.atan2(Math.sqrt(-k), -b) / 3,
					M = Math.cos(J),
					p = Math.sin(J),
					g = Math.sqrt(3);
				d.push(2 * w * M - E), d.push(-w * (M + g * p) - E), d.push(-w * (M - g * p) - E)
			} else {
				var m;
				m = b >= 0 ? -Math.pow(b, 1 / 3) : Math.pow(-b, 1 / 3), d.push(2 * m - E), d.push(-m - E)
			}
			return d
		}, Ll.prototype._70I = function() {
			var d = this;
			return d._p1.distanceToSquared(d._p2) < 1e-10 && d._p3.distanceToSquared(d._p4) < 1e-10
		}, Ll.prototype.insertKnot = function(D) {
			var B = this,
				a = B._p1,
				q = B._p2,
				v = B._p3,
				M = B._p4,
				N = a.clone().lerp(q, D),
				h = q.clone().lerp(v, D),
				m = v.clone().lerp(M, D),
				E = N.clone().lerp(h, D),
				s = h.clone().lerp(m, D),
				H = E.clone().lerp(s, D);
			return B._70I() ? (a.clone().lerp(M, D), [new ki.Math.CubicBezier(a, a.clone(), H.clone(), H), new ki.Math.CubicBezier(H, H.clone(), M.clone(), M)]) : [new ki.Math.CubicBezier(a, N, E, H), new ki.Math.CubicBezier(H, s, m, M)]
		};
		var Wq = d.Default.getInternal().ui().EdgeUI,
			tf = {
				_47O: function(g) {
					var i = this,
						B = tf.getBackups()._47O;
					ki.inEdit(i.gv) || B.call(i, g)
				}
			};
		ki.Inject.registAsModule(tf, Wq);
		var sf = d.Default.getInternal().ui().NodeUI,
			fp = {
				_47O: function(L) {
					var D = this,
						y = fp.getBackups()._47O;
					ki.inEdit(D.gv) || y.call(D, L)
				},
				getSelectWidth: function() {
					var e = this,
						a = e.gv,
						G = e._data;
					if (a.isEditable(G) && ki.inEdit(a)) return 0;
					var k = fp.getBackup("getSelectWidth");
					return k.call(e)
				}
			};
		ki.Inject.registAsModule(fp, sf);
		var oj = d.graph.GraphView,
			xh = {
				_editPointSize: function() {
					var S = d.Default.isTouchable,
						q = ki.getStyle("pointSize");
					return q[S ? 0 : 1]
				}(),
				isPointEditable: function(c) {
					var A = this;
					if (ki.inEdit(A)) return A._pointEditableFunc ? A._pointEditableFunc(c) : !0;
					var q = xh.getBackup("isPointEditable");
					q.call(A, c)
				},
				isEditable: function(t) {
					var C, U = this,
						y = xh.getBackup("isEditable");
					if (C = t instanceof ki.Group ? !0 : y.call(U, t), !ki.inEdit(U)) return C;
					if (!(t instanceof d.Edge)) return C;
					if (!t.s("2d.editable")) return !1;
					var $ = U.getEditableFunc();
					return $ ? $(t) : !0
				},
				_42: function(K, b) {
					var f = this,
						C = xh.getBackups()._42;
					if (C.call(f, K, b), ki.inEdit(f)) {
						var A = f.getEditInteractor();
						A.drawImpl()
					}
				}
			};
		ki.Inject.registAsModule(xh, oj);
		var ul = d.Default.getInternal().ui().ShapeUI,
			se = {
				_47O: function(L) {
					var $ = this,
						C = se.getBackups()._47O;
					ki.inEdit($.gv) || C.call($, L)
				}
			};
		ki.Inject.registAsModule(se, ul);
		var Nh = d.graph.DefaultInteractor,
			Yb = {
				handle_mousewheel: function(x) {
					var C = this,
						g = Yb.getBackup("handle_mousewheel");
					ki.inEdit(C.gv) || g.call(C, x)
				}
			};
		ki.Inject.registAsModule(Yb, Nh);
		var Am = d.graph.MoveInteractor,
			Fk = {
				_calcShift: function(M, t) {
					var k = this,
						e = Fk.getBackup("_calcShift"),
						y = k.gv;
					if (!ki.inEdit(y)) return e.call(k, M, t);
					var u = y.getEditInteractor(),
						N = u.getSubModule("Move").calcShift(M, t, k);
					return N || e.call(k, M, t)
				},
				clear: function(B) {
					var z = this,
						y = Fk.getBackup("clear");
					y.call(z, B);
					var t = z.gv;
					if (ki.inEdit(t)) {
						var n = t.getEditInteractor();
						n.getSubModule("Move").clear(B)
					}
				}
			};
		ki.Inject.registAsModule(Fk, Am);
		var Pc = ki.Rect = function(n) {
				this.catalog = "Rect", this._interactor = n
			};
		Pc.prototype = {}, Pc.prototype.constructor = Pc, Pc.prototype.gatherInfo = function(H, Y) {
			var I = this;
			if (1 === Y.length) {
				var w = Y[0];
				return w instanceof d.Shape && w._70I() ? I.gatherLine(H, w) : $f(w, H) ? !1 : I.gatherSingleTarget(H, w)
			}
			return Y.length > 1 ? I.gatherMultiTargets(H, Y) : !1
		}, Pc.prototype.gatherSingleTarget = function(_, m) {
			if (m.getCorners) {
				var M, L = this,
					r = L.info;
				L.target = m, M = L.screenInfo = {};
				var U = m.getCorners();
				r.LT = new ki.Math.Vector2(U[0]), r.LB = new ki.Math.Vector2(U[1]), r.RB = new ki.Math.Vector2(U[2]), r.RT = new ki.Math.Vector2(U[3]), r.T = r.LT.clone().add(r.RT).divideScalar(2), r.B = r.LB.clone().add(r.RB).divideScalar(2), r.L = r.LT.clone().add(r.LB).divideScalar(2), r.R = r.RT.clone().add(r.RB).divideScalar(2);
				for (var s in r) M[s] = ki.toScreenPosition(_, r[s]);
				var S = L._interactor,
					w = S.getStyle("checkSize"),
					k = function(t, d, R) {
						var Y = d.clone().sub(t).setLength(-w),
							$ = R.clone().sub(t).setLength(-w),
							r = Y.add($).add(t);
						return r
					};
				return M.rotLT = k(M.LT, M.RT, M.LB), M.rotLB = k(M.LB, M.LT, M.RB), M.rotRB = k(M.RB, M.LB, M.RT), M.rotRT = k(M.RT, M.LT, M.RB), M.rotT = M.rotLT.clone().add(M.rotRT).divideScalar(2), M.rotB = M.rotLB.clone().add(M.rotRB).divideScalar(2), M.rotL = M.rotLT.clone().add(M.rotLB).divideScalar(2), M.rotR = M.rotRT.clone().add(M.rotRB).divideScalar(2), M.rotation = m.getRotation(), L.gatherConnectInfo(), !0
			}
		}, Pc.prototype.gatherConnectInfo = function() {
			var p = this,
				e = p.target,
				S = p._interactor,
				v = p.screenInfo,
				q = S.gv;
			if (e instanceof d.Node && S.getStyle("connectGuideVisible")) {
				var F = e.s("connectGuideShift") || S.getStyle("connectGuideShift"),
					N = e.getAnchor(),
					n = e.getSize(),
					y = e.toGlobal({
						x: n.width * (F[0] - N.x),
						y: n.height * (F[1] - N.y)
					});
				y = ki.toScreenPosition(q, y), v.P1 ? y.add(v.P2.clone().sub(v.P1).setLength(F[2])) : (y.add(v.RT.clone().sub(v.LT).setLength(F[2])), y.add(v.LB.clone().sub(v.LT).setLength(F[3]))), v.connect = y
			}
		}, Pc.prototype.gatherMultiTargets = function(X, q) {
			var D = ki.Group.findOrCreateGroup(q);
			if (!D) return !1;
			var W = this;
			return W.editing && "rotate" !== W.editing.mode || D.calcInfo(), W.gatherSingleTarget(X, D)
		}, Pc.prototype.gatherLine = function(p, P) {
			this.target = P;
			var U = this.screenInfo = {},
				n = P.getPoints(),
				g = ki.getDataMatrix(P);
			return U.P1 = ki.toScreenPosition(p, g.apply(n.get(0))), U.P2 = ki.toScreenPosition(p, g.apply(n.get(1))), this.gatherConnectInfo(), !0
		}, Pc.ResizeKeys = ["LT", "RB", "LB", "RT", "L", "R", "B", "T"], Pc.ResizeDirection = [{
			x: -1,
			y: -1
		}, {
			x: 1,
			y: 1
		}, {
			x: -1,
			y: 1
		}, {
			x: 1,
			y: -1
		}, {
			x: -1,
			y: 0
		}, {
			x: 1,
			y: 0
		}, {
			x: 0,
			y: 1
		}, {
			x: 0,
			y: -1
		}], Pc.RotateKeys = ["rotLT", "rotRB", "rotLB", "rotRT", "rotL", "rotR", "rotB", "rotT"], Pc.prototype.check = function($, w, q) {
			if (d.Default.isLeftButton(w)) {
				var M = this;
				if (M.editing = null, M.tipInfo = null, M.screenInfo) {
					var g = M.target,
						E = $.isEditable(g),
						B = M.screenInfo;
					if (E && B.connect) {
						var K = M._checkConnect(q);
						if (K) return K
					}
					if (B.P1) return M._checkLine(q);
					var c, O, C, H = null,
						F = M._interactor,
						s = F.getStyle("checkSize");
					if (E && $.isRectEditable(g)) for (O = 0; O < ki.Rect.ResizeKeys.length; O++) if (C = ki.Rect.ResizeKeys[O], ki.checkHit(q, B[C], s)) {
						H = C, c = "resize";
						break
					}
					if (!H && E && $.isRotationEditable(g)) {
						var o = F.getStyle("rotateCheckSize");
						for (O = 0; O < ki.Rect.RotateKeys.length; O++) if (C = ki.Rect.RotateKeys[O], ki.checkHit(q, B[C], o)) {
							H = C, c = "rotate";
							break
						}
					}
					if (!H) return F.setCursor("default"), void 0;
					if ("rotate" === c) {
						var u, P = $.lp(w);
						if (g instanceof ki.Group) {
							var i = F.getStyle("groupRotateModeKey");
							"string" == typeof i && (i = [i]);
							for (var j = !1, h = 0, e = i.length; e > h; h++) if (w[i[h]]) {
								j = !0;
								break
							}
							var l = F.getStyle("groupRotateModeDefault");
							u = j ? "batch" === l ? "block" : "batch" : l
						}
						var L = "batch" === u ? g.getAnchor2() : g.getPosition(),
							Q = Math.atan2(P.y - L.y, P.x - L.x);
						F._setRotateCursor(Q), M.editing = {
							mode: c,
							key: H,
							pos: L,
							flipY: g.getScale().y < 0,
							rotation: g.getRotation(),
							hitRot: Q
						}, u && (M.editing.groupRotateMode = u)
					} else {
						var k = ki.Rect.ResizeKeys.indexOf(H),
							Y = ki.Rect.ResizeDirection[k],
							J = Math.cos(g.getRotation()),
							X = Math.sin(g.getRotation()),
							f = Y.x * Math.sign(g.getScale().x),
							G = Y.y * Math.sign(g.getScale().y),
							r = Math.atan2(-X * f - J * G, J * f - X * G),
							z = (Math.round(r / (Math.PI / 4)) + 8) % 8,
							S = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][z];
						this._interactor.setCursor(S);
						var t = g.getWidth(),
							N = g.getHeight(),
							Z = g.getAnchor();
						M.editing = {
							mode: c,
							key: H,
							rect: {
								x: -t * Z.x,
								y: -N * Z.y,
								width: t,
								height: N
							},
							anchor: Z,
							matrix: g.getMatrix()
						}
					}
					return H
				}
			}
		}, Pc.prototype._checkLine = function(i) {
			var M = this;
			M.screenInfo;
			var X, A = M._interactor.getStyle("checkSize");
			if (ki.checkHit(i, M.screenInfo.P1, A)) X = "P1";
			else {
				if (!ki.checkHit(i, M.screenInfo.P2, A)) return this._interactor.setCursor("default"), void 0;
				X = "P2"
			}
			return M.editing = {
				mode: "line",
				key: X
			}, X
		}, Pc.prototype._checkConnect = function(Q) {
			var U = this,
				e = U.screenInfo,
				N = U._interactor,
				I = N.getStyle("connectGuideIntersectSize");
			if (ki.checkHit(Q, e.connect, I)) {
				var J = "connect",
					p = z.getConnectAction();
				return U.editing = {
					mode: J
				}, p && p.delete && p.delete.visible.call(null, U.target) && (U.editing.hasDeleteAction = !0), N.setCursor("default"), J
			}
		}, Pc.prototype._fireEditEvent = function(Y, x) {
			var M = this._interactor,
				A = this.editing;
			if (A) {
				var l = A.mode;
				l = "rotate" === l ? "Rotation" : "connect" === l ? "Connection" : l[0].toUpperCase() + l.slice(1), M.fi({
					kind: Y + "Edit" + l,
					event: x
				})
			}
		}, Pc.prototype.startEdit = function(b, P) {
			b.startDragging(P);
			var T = this;
			T._interactor.fi({
				kind: "prepareEdit",
				event: P
			});
			var j = T.editing,
				o = T.target;
			if (j) {
				if (T._fireEditEvent("begin", P), "rotate" === j.mode) return j.groupRotateMode && o.beginRotate(j), void 0;
				if ("connect" !== j.mode)("line" === j.mode || o && 0 === o.getRotation()) && (T._inSmartGuide = !0, T._interactor.rectGuide.gatherRects());
				else if (j.hasDeleteAction) {
					var O = b.gv,
						R = T._interactor.getStyle("connectGuideGarbageShift");
					j.garbageInfo = {
						x: O.getWidth() * R[0] + R[2],
						y: O.getHeight() * R[1] + R[3],
						size: T._interactor.getStyle("connectGuideGarbageIntersectsize")
					}, b._42()
				}
			}
		}, Pc.prototype._46O = function(h) {
			var v, G = this,
				B = G.editing;
			if (B) {
				if ("connect" === B.mode && !B.canceled && !B.deleted) try {
					B.garbageInfo && B.garbageInfo.hover ? z.doDeleteConnectionAction(G.target) : z.doConnectAction(G.target, B.target)
				} catch (h) {}
				v = G.editing.groupRotateMode, G._fireEditEvent("end", h), G.editing = null
			}
			G.tipInfo = null, G._inSmartGuide && (G._interactor.rectGuide.clear(), G._inSmartGuide = !1), v && G.target && G.target.endRotate()
		}, Pc.prototype.handleNormalStateDelete = function() {
			var o = this,
				S = o.editing;
			if (S && "connect" === S.mode && !S.canceled && !S.deleted) {
				if (S.garbageInfo) {
					try {
						z.doDeleteConnectionAction(o.target)
					} catch (h) {}
					S.garbageInfo = null
				}
				return S.cursorPos = null, S.targetCorners = null, S.deleted = !0, o._interactor._42(), !0
			}
		}, Pc.prototype.handleNormalStateKeyDown = function(n) {
			var G = this,
				w = G.editing;
			return !w || "connect" !== w.mode || w.canceled || w.deleted ? void 0 : d.Default.isEsc(n) ? (w.cursorPos = null, w.targetCorners = null, w.canceled = !0, G._interactor._42(), !0) : void 0
		}, Pc.prototype.handleEdit = function(p, M) {
			var q = this,
				Y = q.editing;
			if (Y) {
				var i, Z, k, w, T, B = q.target,
					X = Y.key,
					I = Y.mode,
					O = p.lp(M),
					z = q._interactor;
				if ("connect" === I) {
					if (Y.canceled) return;
					if (Y.deleted) return;
					Y.cursorPos = z._getLogicalPoint(M);
					var v = Y.garbageInfo;
					return v && ki.checkHit(Y.cursorPos, v, v.size) ? (v.hover = !0, Y.target = null, Y.targetCorners = null) : (v && (v.hover = !1), Y.target = p.getDataAt(O, function(Y) {
						return p.isSelectable(Y) ? pr(Y) ? !0 : !1 : !1
					}) || null, Y.targetCorners = ki.getTargetCornersOnScreen(p, Y.target)), z._42(), void 0
				}
				if ("rotate" === I) {
					var H, b, y = Y.pos,
						G = Math.atan2(O.y - y.y, O.x - y.x);
					if (Y.groupRotateMode ? b = G - Y.hitRot : (H = G - Y.hitRot, b = Y.rotation + H), b %= 2 * Math.PI, 0 > b && (b += 2 * Math.PI), !d.Default.isCtrlDown(M)) {
						var $, g;
						Dm(M) ? ($ = z.getStyle("shiftRotateRound"), g = $ / 2) : ($ = z.getStyle("rotateRound"), g = z.getStyle("rotateSensitivity")), b = ki.roundTo(b, $, g)
					}
					Y.groupRotateMode ? (H = b - (Y.lastRotation || 0), 0 !== H && (B.addRotation(H, Y.groupRotateMode), Y.lastRotation = b)) : B.setRotation(b), z._setRotateCursor(G), b > Math.PI && (b -= 2 * Math.PI);
					var N = 180 * (b / Math.PI);
					N = N.toFixed(2), i = "" + N + "°"
				} else if ("resize" === I) {
					var f = Y.rect;
					k = f.x, w = f.y;
					var W, r = f.width,
						D = f.height,
						J = Y.anchor,
						s = Y.matrix,
						x = Dm(M),
						t = q._unionPointMode1,
						V = q._unionPointMode2;
					if (q._inSmartGuide && !d.Default.isCtrlDown(M) && !x) {
						var u;
						"L" === X || "R" === X ? u = "x" : ("T" === X || "B" === X) && (u = "y"), q._adsorbedToClosest(O, u), T = !0
					}
					W = s.tfi(O);
					var S;
					"LT" === X ? (f = t(W, {
						x: k + r,
						y: w + D
					}, r, D, x), S = 9) : "T" === X ? (f = V({
						x: k,
						y: W.y
					}, {
						x: k + r,
						y: w + D
					}, r, D, x, "v"), S = 1) : "RT" === X ? (f = t(W, {
						x: k,
						y: w + D
					}, r, D, x), S = 33) : "L" === X ? (f = V({
						x: W.x,
						y: w
					}, {
						x: k + r,
						y: w + D
					}, r, D, x, "h"), S = 8) : "R" === X ? (f = V({
						x: k,
						y: w
					}, {
						x: W.x,
						y: w + D
					}, r, D, x, "h"), S = 32) : "LB" === X ? (f = t(W, {
						x: k + r,
						y: w
					}, r, D, x), S = 12) : "B" === X ? (f = V({
						x: k,
						y: w
					}, {
						x: k + r,
						y: W.y
					}, r, D, x, "v"), S = 4) : "RB" === X && (f = t(W, {
						x: k,
						y: w
					}, r, D, x), S = 36);
					var Q = s.tf(f.x + f.width * J.x, f.y + f.height * J.y);
					B.setPosition(Q), B.setSize(f.width, f.height), T && (Z = B.getRect(), z.rectGuide.gatherLines({
						node: B,
						x: Z.x,
						y: Z.y,
						w: Z.width,
						h: Z.height
					}, u, S)), i = "" + Math.round(f.width) + " * " + Math.round(f.height)
				} else if ("line" === I) {
					if (Dm(M)) {
						var U = B.getPoints(),
							c = "P1" === X ? U.get(1) : U.get(0),
							m = {
								x: O.x - c.x,
								y: O.y - c.y
							},
							L = z.getStyle("shiftLineRotateRound"),
							R = q._shiftDirList;
						if (!R || q._shiftRotateRound !== L) {
							q._shiftRotateRound = L, q._shiftDirList = R = [];
							for (var o = 0; o < Math.PI; o += L) R.push({
								x: C(o),
								y: K(o)
							})
						}
						for (var P, e = 0, F = 0, l = R.length; l > F; F++) {
							var n = R[F],
								h = n.x * m.x + n.y * m.y;
							Math.abs(h) > Math.abs(e) && (e = h, P = n)
						}
						O = {
							x: c.x + P.x * e,
							y: c.y + P.y * e
						}, z.rectGuide.clear()
					} else q._inSmartGuide && !d.Default.isCtrlDown(M) && (q._adsorbedToClosest(O), T = !0);
					var A = ki.getDataMatrix(B).applyInverse(O);
					B.setPoint("P1" === X ? 0 : 1, A, !0);
					var j = B.getPoints(),
						a = j.get(0),
						_ = j.get(1);
					k = a.x - _.x, w = a.y - _.y, i = " " + Math.round(Math.sqrt(k * k + w * w)) + " ", T && (Z = B.getRect(), z.rectGuide.gatherLines({
						node: B,
						x: Z.x,
						y: Z.y,
						w: Z.width,
						h: Z.height
					}))
				}
				if (i) {
					var E = d.Default.getLogicalPoint(M, z._canvas);
					E.x += ki.Icons.TipShiftX, E.y += ki.Icons.TipShiftY, q.tipInfo = {
						helperPos: E,
						text: i,
						size: i.length
					}
				}
				q._fireEditEvent("between", M)
			}
		}, Pc.prototype._unionPointMode1 = function(b, V, Z, w, P) {
			if (P && Z && w) {
				var I = b.x - V.x,
					j = b.y - V.y;
				Math.abs(I * w) < Math.abs(j * Z) ? (j = Math.sign(j) * Math.abs(I * w / Z), b.y = V.y + j) : (I = Math.sign(I) * Math.abs(j * Z / w), b.x = V.x + I)
			}
			return d.Default.unionPoint(b, V)
		}, Pc.prototype._unionPointMode2 = function(i, T, n, $, E, z) {
			var q = d.Default.unionPoint(i, T);
			if (E && n && $) {
				var Z;
				"v" === z ? (Z = q.x + q.width / 2, q.width = n * q.height / $, q.x = Z - q.width / 2) : (Z = q.y + q.height / 2, q.height = $ * q.width / n, q.y = Z - q.height / 2)
			}
			return q
		}, Pc.prototype._adsorbedToClosest = function(e, W) {
			var G = this,
				Y = G._interactor,
				t = Y.rectGuide.findClosest(e, W),
				b = Y.gridGuide.findClosest(e, W),
				q = 1 / 0,
				m = 1 / 0;
			t && (isFinite(t.x) && (q = t.x), isFinite(t.y) && (m = t.y)), b && (isFinite(b.x) && Math.abs(b.x) < Math.abs(q) && (q = b.x), isFinite(b.y) && Math.abs(b.y) < Math.abs(m) && (m = b.y)), isFinite(q) && (e.x += q), isFinite(m) && (e.y += m)
		}, Pc.prototype._42 = function(R, F, i) {
			var Z = this;
			Z.info = {}, Z.screenInfo = null;
			var P = Z._interactor;
			if (!P.editDetail && Z.gatherInfo(F, i)) {
				var Y = Z.editing,
					u = Y ? Y.groupRotateMode : null,
					t = Z.screenInfo;
				"block" !== u && (t.P1 ? ki.Icons.DrawIcon(P, R, ki.Icons.Line, t) : ki.Icons.DrawIcon(P, R, ki.Icons.Rect, t), t.connect && (ki.Icons.DrawIcon(P, R, ki.Icons.ConnectGuide, {
					rotation: t.rotation,
					connect: t.connect,
					cursorPos: Y ? Y.cursorPos : null
				}), Y && (Y.targetCorners && ki.Icons.DrawIcon(P, R, ki.Icons.NodeHoverGuide, Y.targetCorners), Y.garbageInfo && ki.Icons.DrawIcon(P, R, ki.Icons.ConnectGuideGarbage, Y.garbageInfo))), Z.tipInfo && ki.Icons.DrawIcon(P, R, ki.Icons.TipHelper, Z.tipInfo)), Z.target instanceof ki.Group && Z.target._42(P, R, F)
			}
		};
		var xo = ki.Anchor = function(i) {
				this.catalog = "Anchor", this._interactor = i
			};
		xo.prototype = {}, xo.prototype.constructor = xo, xo.prototype.gatherInfo = function(F, E) {
			var g = this;
			if (1 === E.length) {
				var S = E[0];
				if (!S.getAnchor) return;
				if (S instanceof d.Shape && S._70I()) return;
				if ($f(S, F)) return;
				return g.gatherSingleTarget(F, E[0])
			}
			return E.length > 1 ? g.gatherMultiTargets(F, E) : !1
		}, xo.prototype.gatherSingleTarget = function(w, B) {
			var H = this;
			return H.info.POS = B.getPosition(), H.screenInfo.POS = ki.toScreenPosition(w, H.info.POS), H.target = B, !0
		}, xo.prototype.gatherMultiTargets = function(n, $) {
			var H = this,
				s = ki.Group.findOrCreateGroup($);
			return s ? (H.screenInfo.POS = ki.toScreenPosition(n, s.getAnchor2()), H.target = s, !0) : !1
		}, xo.prototype.isVisible = function() {
			var Q = this,
				R = Q._interactor;
			if (R.getStyle("anchorVisible") === !1) return !1;
			var K = Q.target;
			if (K) {
				if (this.editing) return !0;
				var B = K.getAnchor(),
					z = R.getStyle("anchorOutsideVisibleThreshold");
				if (B.x < -z || B.x > 1 + z || B.y < -z || B.y > 1 + z) return !0;
				var O = K.getSize(),
					s = K.getScale(),
					q = Math.min(Math.abs(O.width * s.x), Math.abs(O.height * s.y));
				if (q * R.gv._zoom < R.getStyle("anchorHideThreshold")) return !1
			}
			return !0
		}, xo.prototype.check = function(R, W, f) {
			if (d.Default.isLeftButton(W)) {
				var P = this,
					K = P._interactor;
				if (P.isVisible() && K.getStyle("anchorMovable") !== !1) {
					P.editing = null, P.tipInfo = null;
					var c = P.target;
					if (c && R.isAnchorEditable(c) && R.isEditable(c)) {
						var i;
						if (P.screenInfo && (i = P.screenInfo.POS) && ki.checkHit(f, new ki.Math.Vector2(i), K.getStyle("checkSize"))) {
							if (c instanceof ki.Group) return P.editing = {}, !0;
							var w = c.getWidth(),
								u = c.getHeight(),
								p = c.getAnchor();
							return P.editing = {
								rect: {
									x: -w * p.x,
									y: -u * p.y,
									width: w,
									height: u
								},
								anchor: p,
								matrix: c.getMatrix()
							}, !0
						}
					}
				}
			}
		}, xo.prototype.startEdit = function(o, t) {
			o.startDragging(t), o.fi({
				kind: "beginEditAnchor",
				event: t
			})
		}, xo.prototype._46O = function(E) {
			var q = this;
			q.editing && (q.editing = null, q._interactor.fi({
				kind: "endEditAnchor",
				event: E
			})), q.tipInfo = null
		}, xo.prototype.handleEdit = function(t, p) {
			var A = this,
				I = A.target;
			if (I) {
				var k = A.editing;
				if (k) {
					var h = t.lp(p),
						j = A._interactor;
					if (I instanceof ki.Group) return I.setAnchor2(h), j._42(), void 0;
					var N = k.matrix,
						Y = N.tfi(h),
						H = k.rect,
						D = (Y.x - H.x) / H.width,
						r = (Y.y - H.y) / H.height;
					if (!d.Default.isCtrlDown(p)) {
						var U = j.getStyle("anchorRound"),
							z = j.getStyle("anchorSensitivity");
						D = ki.roundTo(D, U, z), r = ki.roundTo(r, U, z)
					}
					I.setAnchor(D, r, !0);
					var G = d.Default.getLogicalPoint(p, j._canvas);
					G.x += ki.Icons.TipShiftX, G.y += ki.Icons.TipShiftY;
					var C = "" + D.toFixed(2) + ", " + r.toFixed(2);
					A.tipInfo = {
						helperPos: G,
						text: C,
						size: C.length
					}, j.fi({
						kind: "betweenEditAnchor",
						event: p
					})
				}
			}
		}, xo.prototype._42 = function(Y, Q, A) {
			var S = this;
			S.info = {}, S.screenInfo = {};
			var F = S._interactor;
			F.editDetail || S.gatherInfo(Q, A) && S.isVisible() && (ki.Icons.DrawIcon(F, Y, ki.Icons.Anchor, S.screenInfo), S.tipInfo && ki.Icons.DrawIcon(F, Y, ki.Icons.TipHelper, S.tipInfo))
		};
		var Rd = ki.Curve = function(J) {
				this.catalog = "Curve", this._interactor = J
			};
		Rd.prototype = {}, Rd.prototype.constructor = Rd, q.defineProperties(Rd.prototype, {
			activing: {
				get: function() {
					return this._activing
				},
				set: function(W) {
					var t = this;
					if (W) t._activing = new ki.CurveActiving(this, W);
					else {
						var _ = t._activing;
						_ && _.dispose(), t._activing = null
					}
				}
			}
		}), Rd.PointType = {
			Mirrored: 0,
			Straight: 1,
			Disconnected: 2,
			Asymmetric: 3
		}, Rd.prototype.setUp = function() {
			var w = this,
				k = w._interactor;
			k && k.gv.mp(w._onGraphviewPropertyChanged, w)
		}, Rd.prototype._onGraphviewPropertyChanged = function(N) {
			("zoom" === N.property || "translateX" === N.property || "translateY" === N.property) && this._handleDataChanged()
		}, Rd.prototype.tearDown = function() {
			var g = this,
				I = g._interactor;
			I && I.gv.ump(g._onGraphviewPropertyChanged, g)
		}, Rd.prototype.canEnterEditDetailMode = function() {
			var Y = this,
				g = Y._interactor,
				i = g._getValidSelection();
			if (1 === i.length) {
				var w = i[0],
					q = w instanceof d.Edge;
				if (w instanceof d.Shape || q) {
					if (q) {
						var c = w.s("edge.type");
						if (c && "points" !== c) return
					}
					var D = g.gv;
					if (D.isPointEditable(w) && D.isEditable(w)) return Y.target = w, !0
				}
			}
		}, Rd.prototype.preHandleScroll = function() {
			var E = this.editing;
			return E && E.inEdit ? !0 : void 0
		}, Rd.prototype.getCurrentSelectintStatus = function() {
			var J = this;
			if (J.activing && !J.activing.selections) {
				if (J.activing.status != r) return J.activing.status;
				var n = function(U) {
						var z = J.activing.status;
						J.activing.status = U, J._interactor.fp("shapePointStatus", z, U)
					},
					Y = ki.Curve.PointType,
					T = J.activing.point,
					M = J.activing.pairs;
				if (!M || 1 !== M.length) return n(Y.Mirrored);
				var $ = M[0],
					F = $.c1 && $.c1.isNearEnough(T),
					S = $.c2 && $.c2.isNearEnough(T);
				if (!$.c1 || !$.c2) return F || S ? n(Y.Straight) : n(Y.Disconnected);
				if (F && S) return n(Y.Straight);
				if (F || S) return n(Y.Asymmetric);
				var i = $.c1.clone().sub(T),
					P = $.c2.clone().sub(T);
				return Math.abs(i.x * P.y - i.y * P.x) > 1e-5 || i.x * P.x > 0 ? n(Y.Disconnected) : Math.abs(i.length() - P.length()) > 1e-5 ? n(Y.Asymmetric) : n(Y.Mirrored)
			}
		}, Rd.prototype.handle_keydown = function(D) {
			var _ = this;
			if (_._interactor.editDetail) {
				var j = ki.Curve.PointType;
				"1" === D.key ? _.setCurrentSelectionStatus(j.Straight) : "2" === D.key ? _.setCurrentSelectionStatus(j.Mirrored) : "3" === D.key ? _.setCurrentSelectionStatus(j.Disconnected) : "4" === D.key && _.setCurrentSelectionStatus(j.Asymmetric)
			}
		}, Rd.prototype.setCurrentSelectionStatus = function(N) {
			var K = this,
				C = K.activing;
			if (C) {
				var d = K.getCurrentSelectintStatus();
				if (null !== d && d !== N) {
					C.status = N;
					var V = K.activing.point,
						m = K.activing.pairs;
					if (m && 1 === m.length) {
						var s = m[0],
							x = K.screenInfo.curve,
							Z = ki.Curve.PointType,
							I = function() {
								K._writeToHt(), K._interactor.fp("shapePointStatus", d, N)
							};
						if (N === Z.Straight) return x.moveCtrlPoint(s, V, "c1"), x.moveCtrlPoint(s, V, "c2"), I(), void 0;
						if (d === Z.Straight) {
							var L = x.findPairs(V, !0),
								O = L[0],
								J = O.r1 || V,
								l = O.r2 || V,
								p = l.clone().sub(J).multiplyScalar(.25);
							return x.moveCtrlPoint(s, V.clone().sub(p), "c1"), x.moveCtrlPoint(s, V.clone().add(p), "c2"), I(), void 0
						}
						var w = s.c1,
							c = s.c2;
						if (w && c) {
							if (N === Z.Mirrored) return x.moveCtrlPoint(s, V.clone().multiplyScalar(2).sub(c), "c1"), I(), void 0;
							if (N === Z.Asymmetric && d === Z.Disconnected) {
								var t = w.clone().sub(V).length(),
									p = V.clone().sub(c).setLength(t).add(V);
								return x.moveCtrlPoint(s, p, "c1"), I(), void 0
							}
						}
						C._firePointChange(), K._interactor.fp("shapePointStatus", d, N)
					}
				}
			}
		}, Rd.prototype._handleDataChanged = function(g) {
			var m = this;
			if (m.screenInfo && m.target) {
				var S = m._interactor;
				m.gatherSingleTarget(S.gv, m.target, !0), m.check(S.gv, null, g ? S._getLogicalPoint(g) : new ki.Math.Vector2(S._lastClientPoint)), S._42()
			}
		}, Rd.prototype.gatherSingleTarget = function(b, N, P) {
			var v, V, t = this;
			t.screenInfo && t.screenInfo.curve && (V = t.screenInfo.curve._curves);
			var k = t.editing;
			v = k ? t.screenInfo : t.screenInfo = {};
			var Q, E, C = N instanceof d.Edge;
			C ? (Q = N.s("edge.segments"), E = N.s("edge.points") || new d.List) : (Q = N._58O, E = N._59O), v.S = Q;
			var s, D = v.P = [],
				i = ki.getDataMatrix(N);
			if (N instanceof d.Polyline && (s = N.getElevation() || 0, v.E = []), E.each(function(M) {
				v.E && v.E.push(M.e || s), M = i.apply(M);
				var l = ki.toScreenPosition(b, M);
				D.push(l.x, l.y)
			}), C) {
				var n = ki.toScreenPosition(b, N._lastSourcePoint),
					z = ki.toScreenPosition(b, N._lastTargetPoint);
				D.splice(0, 0, n.x, n.y), D.push(z.x, z.y)
			}
			if (!v.S || !v.S.size()) {
				v.S = new d.List, v.S.add(1);
				for (var y = 0; y < D.length / 2 - 1; y++) v.S.add(2)
			}
			if ((!k || P) && t.convertToCubicBezier(V), t.activing && (P || !t.editing || "realPoint" === t.editing.type)) {
				var W = v.curve.findPairs(t.activing.point);
				t.activing.pairs = W
			}
			C && "points" !== N.s("edge.type") && t._writeToHt()
		}, Rd.prototype._convertToNewPoint = function(d, R, E) {
			var r, A, p;
			for (r = 0, A = R.length; A > r; r++) {
				if (p = R[r], p._p1.isNearEnough(d)) return p._p1;
				if (p._p4.isNearEnough(d)) return p._p4
			}
			if (E) for (r = 0, A = Math.min(E.length, A); A > r; r++) {
				if (p = E[r], p._p1 === d) return R[r]._p1;
				if (p._p4 === d) return R[r]._p4
			}
		}, Rd.prototype.convertToCubicBezier = function(Z) {
			var N, i, S = this,
				B = new ki.Math.Curve,
				I = S.screenInfo;
			if (B.createFromHtShape(I.P, I.S, I.E), I.curve = B, S.activing) {
				var g = B._curves;
				if (N = S.activing.point, i = S._convertToNewPoint(N, g, Z), i && (S.activing.point = i), S.activing.selections) {
					var V = -1,
						P = S.activing.selections;
					P.forEach(function(X) {
						V++, i = S._convertToNewPoint(X, g, Z), i && (P[V] = i)
					})
				}
			}
		}, Rd.prototype.check = function(o, k, C) {
			if (!k || d.Default.isLeftButton(k)) {
				var e = this;
				if (e._interactor.setCursor("default"), e.editing = null, e.highlight = null, e.tipInfo = null, e.screenInfo) {
					if (Co()) return e._interactor._42(), !0;
					if (e._checkEditCtrlPoint(C)) return e._interactor._42(), !0;
					if (e._checkEditRealPoint(C)) return e._interactor._42(), !0;
					if (e._checkEditElevation(C)) return e._interactor._42(), !0;
					var B = e.screenInfo.curve,
						g = B.checkPoint(C, e._interactor.getStyle("curveIntersectSize"));
					if (g) {
						var V = e.highlight = {};
						V.type = "insertKnot", V.bezier = g.bezier, V.point = g.intersection
					}
					return e._interactor._42(), !0
				}
			}
		}, Rd.prototype._checkEditRealPoint = function(W) {
			var v, Y, L, e, p, m, r = this,
				q = r.screenInfo.curve._curves,
				U = r._interactor.getStyle("curvePointIntersectSize"),
				J = 1 / 0;
			for (U *= U, L = 0, e = q.length; e > L; L++) v = q[L], p = v._p1, m = W.distanceToSquared(p), J > m && (J = m, Y = p), p = v._p4, m = W.distanceToSquared(p), J > m && (J = m, Y = p);
			if (J > U) return !1;
			var D = r.highlight = {};
			return D.type = "changeRealPoint", D.point = Y, r.editing = {
				type: "realPoint",
				point: Y,
				shiftGuide: {
					point: Y.clone(),
					dir: "x",
					limit: 0
				}
			}, r._interactor.setCursor("crosshair"), !0
		}, Rd.prototype._checkEditElevation = function(b) {
			var P = this;
			if (!P._interactor.getStyle("curveElevationVisible")) return !1;
			var E = P.activing;
			if (!E) return !1;
			var B = E.getCurrentEditingPoint();
			if (!B) return !1;
			var H = P._interactor,
				I = H.getStyle("curveElevationGuideShift"),
				p = H.getStyle("curveElevationIntersectSize"),
				T = b.distanceToSquared({
					x: B.x + I[0],
					y: B.y + I[1]
				});
			if (!(T > p * p)) {
				var y = P.highlight = {};
				y.type = "elevation";
				var X = new ki.Math.Vector2(b.x, b.y, B.e);
				return P.editing = {
					type: "elevation",
					startPoint: X
				}, P._interactor.setCursor("crosshair"), !0
			}
		}, Rd.prototype._checkEditCtrlPoint = function(C) {
			var k = this;
			if (k.activing && !k.activing.selections) {
				var R = k.getCurrentSelectintStatus();
				if (R !== ki.Curve.PointType.Straight) {
					var t = k.activing.pairs;
					if (t) {
						var x = k._interactor.getStyle("curvePointIntersectSize");
						x *= x;
						var Z, w, n, D, o, F, T, u, $, V = 1 / 0;
						for (T = 0, $ = t.length; $ > T; T++) for (D = t[T], u = 0; 2 > u; u++) o = 0 === u ? "c1" : "c2", D[o] && (F = C.distanceToSquared(D[o]), V > F && (V = F, Z = D, w = T, n = o));
						if (V > x) return !1;
						k.activing.hlpair = Z, k.activing.hltype = n;
						var O = k.highlight = {};
						return O.type = "changeCtrlPoint", O.point = Z[n], k.editing = {
							type: "ctrlPoint",
							pair: Z,
							pairId: w,
							ctrlType: n,
							direction: Z[n].clone().sub(k.activing.point).normalize()
						}, k._interactor.setCursor("crosshair"), !0
					}
				}
			}
		}, Rd.prototype.startEdit = function(e, Z) {
			e.startDragging(Z);
			var r = this;
			r.highlight && "insertKnot" === r.highlight.type && (r.insertKnot(), r.gatherSingleTarget(r._interactor.gv, r.target), r.activing = null, r._checkEditRealPoint(r._interactor._getLogicalPoint(Z)));
			var H = r._activing;
			if (H) {
				var x = r.editing ? r.editing.type : null;
				"ctrlPoint" === x ? H.editingCtrl = {
					pairId: r.editing.pairId,
					type: H.hltype
				} : "realPoint" === x && (H.editingCtrl = !1)
			}
			var u = r.highlight,
				m = d.Default.isCtrlDown(Z);
			if (!u || Co()) {
				var L = r._interactor.gv;
				if (!L.setFocus(Z) || L._scrolling) return;
				return L.isPannable() && Dg(Z) && !m && (r._pan = {
					tx: L.tx(),
					ty: L.ty()
				}, e.fi({
					kind: "beginPan",
					event: Z
				})), void 0
			}
			if ("changeRealPoint" === u.type) {
				var g, v = r.activing ? r.activing.point : null,
					n = r.activing ? r.activing.selections : null;
				if (m && r.activing) v === u.point ? (n ? (r.activing = {
					point: n[0]
				}, n.length > 1 && (n.splice(0, 1), r.activing.selections = n)) : r.activing = null, r.editing = null) : n && (g = n.indexOf(u.point)) >= 0 ? (n.length > 1 ? n.splice(g, 1) : delete r.activing.selections, r.editing = null) : n ? (n.push(v), r.activing = {
					point: u.point,
					selections: n
				}) : r.activing = {
					point: u.point,
					selections: [v]
				};
				else if (n) v === u.point || ((g = n.indexOf(u.point)) >= 0 ? (n.splice(g, 1, v), r.activing = {
					point: u.point,
					selections: n
				}) : r.activing = {
					point: u.point
				});
				else {
					var t;
					v === u.point && (t = r.activing.status), r.activing = {
						point: u.point
					}, t && (r.activing.status = t)
				}
				e.fi({
					kind: "beginEditPoint",
					event: Z
				})
			}
		}, Rd.prototype.insertKnot = function() {
			var W = this,
				t = W.highlight,
				s = W.screenInfo.curve;
			s.insertKnot(t.bezier, t.point.t), W._writeToHt()
		}, Rd.prototype._writeToHt = function() {
			var A, F, G, o, t = this,
				Z = t.screenInfo.curve,
				g = Z.toHtShape(),
				I = g.points,
				n = [],
				Y = g.segments,
				N = t._interactor.gv,
				B = t.target,
				T = B instanceof d.Edge,
				P = ki.getDataMatrix(B).invert();
			o = B instanceof d.Polyline, o && (G = B.getElevation());
			for (var i = 0, y = I.length; y > i; i++) A = I[i], F = ki.toWorldPosition(N, A), F = P.apply(F), A.e != r && A.e !== G && (F.e = A.e), n.push(F);
			if (B._writing = !0, T) {
				B.s("edge.type", "points"), B.setStyle("edge.segments", Y), B.setStyle("edge.points", n.slice(1, n.length - 1)), B.setStyle("edge.source.offset.x", 0), B.setStyle("edge.source.offset.y", 0), B.setStyle("edge.target.offset.x", 0), B.setStyle("edge.target.offset.y", 0);
				var e = t._nextChangeEdgeHost;
				delete t._nextChangeEdgeHost, e && ("source" === e.type ? B.setSource(e.host) : B.setTarget(e.host)), t._writeEdgeHostAnchor("source", n[0]), t._writeEdgeHostAnchor("target", n[n.length - 1])
			} else n.length ? (B.setSegments(Y), B.setPoints(n, !0)) : B.removeFromDataModel();
			delete B._writing
		}, Rd.prototype._writeEdgeHostAnchor = function($, Z) {
			var j = this,
				Y = j.target,
				K = j._calcHostAnchor(Y, $, Z);
			Y.s("edge." + $ + ".anchor.x", K.x), Y.s("edge." + $ + ".anchor.y", K.y)
		}, Rd.prototype._calcHostAnchor = function($, n, m, f) {
			f || (f = "source" === n ? $.getSource() : $.getTarget());
			var t = f.getRotation(),
				l = f.getAnchor(),
				U = this._interactor.gv;
			if ($f(f, U) && (t = 0), t) {
				var p = f.getMatrix(),
					F = p.tfi(m),
					K = f.getSize();
				return {
					x: F.x / K.width + l.x,
					y: F.y / K.height + l.y
				}
			}
			var h = mg(U, f),
				s = {
					x: (m.x - h.x) / h.width,
					y: (m.y - h.y) / h.height
				};
			return s
		}, Rd.prototype._handlePanning = function(C) {
			var v = this,
				u = v._pan;
			if (u) {
				u.started = !0;
				var G = v._interactor,
					n = G.gv,
					s = G._lastClientPoint,
					T = km(C);
				n.setTranslate(u.tx + T.x - s.x, u.ty + T.y - s.y), v.gatherSingleTarget(G.gv, v.target), G._42(), G.fi({
					kind: "betweenPan",
					event: C
				})
			}
		}, Rd.prototype.handleEdit = function(l, z) {
			var $ = this,
				c = $.editing;
			if ($._pan) return $._handlePanning(z), void 0;
			if (c) {
				c.inEdit = !0;
				var A, O, q, y = $._interactor._getLogicalPoint(z),
					m = d.Default.isCtrlDown(z),
					R = d.Default.isShiftDown(z),
					u = c.type,
					B = $.activing;
				if ($._guideInfo = null, "ctrlPoint" === u && R) {
					var w = $.editing.direction.clone();
					A = B.point;
					var Q = w.dot(y.clone().sub(A));
					y = w.setLength(Q).add(A)
				} else if ("ctrlPoint" === u || "realPoint" === u) {
					var w;
					if ("realPoint" === u && R) {
						var I = $.editing.shiftGuide;
						O = I.point;
						var H = Math.abs(y.x - O.x),
							C = Math.abs(y.y - O.y);
						H > C && H > I.limit && "y" === I.dir && (I.dir = "x"), C > H && C > I.limit && "x" === I.dir && (I.dir = "y"), w = I.dir, "x" === w ? (y.y = O.y, I.limit = Math.max(I.limit, H)) : "y" === w && (y.x = O.x, I.limit = Math.max(I.limit, C))
					}
					var x = $._isEditEdgeSourceTarget();
					if (x) {
						var k = $._editEdgeSourceTarget(x, y, m);
						k && (q = k.tipText)
					} else if (!m) {
						var N = $._guidingToEdit(y, w),
							b = "realPoint" === u ? $._interactor.gridGuide.findClosest(y, w, !0) : null,
							p = 1 / 0,
							o = 1 / 0;
						b && (b.x && (p = b.x), b.y && (o = b.y));
						var E = !1;
						N && (N.xList && (Math.abs(N.x) <= Math.abs(p) ? (E = !0, p = N.x) : delete N.xList), N.yList && (Math.abs(N.y) <= Math.abs(o) ? (E = !0, o = N.y) : delete N.yList), E && ($._guideInfo = N)), isFinite(p) && (y.x += p), isFinite(o) && (y.y += o), E && (N.v = y)
					}
				}
				var v = $.screenInfo.curve;
				if ("realPoint" === c.type) {
					A = c.point, A.e !== r && (y.e = A.e), v.moveRealPoint(A, y), c.point = y, $.highlight.point = y;
					var h = B.status,
						L = B.selections;
					if ($.activing = {
						point: y,
						status: h
					}, L) {
						var V = y.clone().sub(A),
							f = 0;
						L.forEach(function(j) {
							var n = j.clone().add(V);
							v.moveRealPoint(j, n), L[f++] = n
						}), $.activing.selections = L
					}
				} else if ("ctrlPoint" === c.type) {
					var J = B.pairs,
						W = J[c.pairId];
					v.moveCtrlPoint(W, y, c.ctrlType);
					var s = B.status,
						K = ki.Curve.PointType;
					if ((s === K.Mirrored || s === K.Asymmetric) && W.c1 && W.c2) {
						var A = new ki.Math.Vector2(B.point),
							i = "c1" === c.ctrlType ? "c2" : "c1";
						if (s === ki.Curve.PointType.Mirrored) v.moveCtrlPoint(W, A.clone().multiplyScalar(2).sub(y), i);
						else if (s === K.Asymmetric) {
							var Q = W[i].clone().sub(A).length(),
								X = A.clone().sub(W[c.ctrlType]).setLength(Q).add(A);
							isNaN(X.x) || v.moveCtrlPoint(W, X, i)
						}
					}
					B._firePointChange()
				} else if ("elevation" === c.type) {
					O = c.startPoint;
					var a = O.e + (O.y - y.y) / l._zoom;
					$._setCurrentPointImpl("e", a), B._firePointChange(), q = "E: " + ki.toFixed(a)
				}
				var S = d.Default.getLogicalPoint(z, $._interactor._canvas);
				if (S.x += ki.Icons.TipShiftX, S.y += ki.Icons.TipShiftY, !q) {
					var M = ki.toWorldPosition(l, y);
					q = "" + ki.toFixed(M.x) + ", " + ki.toFixed(M.y)
				}
				$.tipInfo = {
					helperPos: S,
					text: q,
					size: q.length
				}, $._writeToHt(), $._interactor.fi({
					kind: "betweenEditPoint",
					event: z
				})
			}
		}, Rd.prototype._setCurrentPointImpl = function(_, a) {
			var d = this,
				s = d._activing;
			if (!s) return !1;
			var g = d.target;
			if (!g) return !1;
			var l = s.getCurrentEditingPoint();
			if (!l) return !1;
			var z = s.editingCtrl;
			if (!z) var b = l.clone();
			if ("e" === _) l.e = a;
			else {
				var F;
				if ("x" === _ || "y" === _) {
					var y = s._lastFirePoint;
					F = "x" === _ ? {
						x: a,
						y: y ? y.y : 0
					} : {
						x: y ? y.x : 0,
						y: a
					}
				} else "object" == typeof _ ? (F = _, _.e !== r && (l.e = _.e)) : (F = {
					x: arguments[0],
					y: arguments[1]
				}, arguments[2] !== r && (l.e = arguments[2]));
				var V = ki.getDataMatrix(g);
				F = ki.toScreenPosition(d._interactor.gv, V.apply(F)), l.x = F.x, l.y = F.y
			}
			if (!z) {
				var J = b.multiplyScalar(-1).add(l);
				l.e && b.e && (J.e = l.e - b.e), d.screenInfo.curve.moveCtrlDueToRealPointMovement(l, J)
			}
			return !0
		}, Rd.prototype.setCurrentPoint = function(Q, v) {
			return this._setCurrentPointImpl(Q, v) ? (this._writeToHt(), !0) : !1
		}, Rd.prototype._isEditEdgeSourceTarget = function() {
			var T = this,
				A = T.target;
			if (!(A instanceof d.Edge)) return !1;
			var w = T.editing.point,
				N = T.screenInfo.curve._curves;
			return w === N[0]._p1 ? "source" : w === N[N.length - 1]._p4 ? "target" : !1
		}, Rd.prototype._editEdgeSourceTarget = function(J, M, P) {
			var j, w = this,
				U = w.target;
			if (j = "source" === J ? U.getSource() : U.getTarget()) {
				var a = w._interactor.gv,
					k = ki.toWorldPosition(a, M),
					T = w._calcHostAnchor(U, J, k, j);
				if (!P) {
					var H = w._interactor.getStyle("anchorRound"),
						W = w._interactor.getStyle("anchorSensitivity");
					T.x = ki.roundTo(T.x, H, W), T.y = ki.roundTo(T.y, H, W)
				}
				if (w._interactor.getStyle("edgeHostDetectPerFrame") || T.x < 0 || T.x > 1 || T.y < 0 || T.y > 1) {
					var F = a.getDataAt(k, function(r) {
						return a.isSelectable(r) ? pr(r) ? !0 : !1 : !1
					});
					if (F) {
						var z = w._calcHostAnchor(U, J, k, F);
						j = F, w._nextChangeEdgeHost = {
							type: J,
							host: F
						}, T = z, P || (T.x = ki.roundTo(T.x, H, W), T.y = ki.roundTo(T.y, H, W))
					}
				}
				if (!P) {
					var Q = Jf(a, j, 0, 0, 0, T.x, T.y),
						C = ki.toScreenPosition(a, Q);
					M.x = C.x, M.y = C.y
				}
				return w._edgeHostGuideInfo = ki.getTargetCornersOnScreen(a, j), {
					host: j,
					anchor: T,
					tipText: "" + T.x.toFixed(2) + ", " + T.y.toFixed(2)
				}
			}
		}, Rd.prototype._guidingToEdit = function(t, h) {
			var X, W, U = this;
			if (X = U.screenInfo.curve) {
				W = X._curves;
				var N, b, v, R, F, O, V, g, l = 1 / 0,
					k = 1 / 0,
					B = [];
				for (U.editing && "realPoint" === U.editing.type && (g = U.editing.point), F = 0, O = 2 * W.length; O > F; F++) V = W[Math.floor(F / 2)][F % 2 ? "_p4" : "_p1"], B.indexOf(V) >= 0 || (B.push(V), g && g === V || (v = V.x - t.x, R = V.y - t.y, Math.abs(v) < Math.abs(l) ? (l = v, N = [V]) : v === l && N.push(V), Math.abs(R) < Math.abs(k) ? (k = R, b = [V]) : R === k && b.push(V)));
				var K = U._interactor.getStyle("smartGuideSensitivity");
				if ((Math.abs(l) > K || "y" === h) && (N = null), (Math.abs(k) > K || "x" === h) && (b = null), N || b) {
					var $ = !1,
						y = {};
					if (N && ($ = !0, y.xList = N, y.x = l), b && ($ = !0, y.yList = b, y.y = k), $) return y
				}
			}
		}, Rd.prototype._46O = function(z) {
			var e = this;
			e.editing && (e.editing = null, e._interactor.fi({
				kind: "endEditPoint",
				event: z
			})), e._guideInfo = null, e._edgeHostGuideInfo = null, e._pan && (e._pan = null, e._interactor.fi({
				kind: "endPan",
				event: z
			})), e.tipInfo = null
		}, Rd.prototype._canDeletePoint = function(v, u) {
			var q = this.target;
			if (!(q instanceof d.Edge)) return !0;
			var h = v._curves[0],
				B = v._curves[v._curves.length - 1];
			return h._p1 === u || B._p4 === u ? !1 : !0
		}, Rd.prototype.handleDelete = function() {
			var h = this;
			if (h.activing && h.screenInfo) {
				var $ = d.Default.isShiftDown(),
					O = h.screenInfo.curve;
				h._canDeletePoint(O, h.activing.point) && O.deleteRealPoint(h.activing.point, $), h.activing.selections && h.activing.selections.forEach(function(N) {
					h._canDeletePoint(O, N) && O.deleteRealPoint(N, $)
				}), h.activing = null, delete h.editing, delete h.tipInfo, delete h._pan, h._writeToHt(), h._interactor.fp("deleteShapePoint", !1, !0)
			}
		}, Rd.prototype.handleDoubleClick = function(c) {
			var P = this,
				l = P._interactor._getLogicalPoint(c);
			if (P.screenInfo && P._checkEditRealPoint(l)) {
				var m = P.getCurrentSelectintStatus(),
					r = ki.Curve.PointType;
				return m = m === r.Mirrored ? r.Straight : r.Mirrored, P.setCurrentSelectionStatus(m), P._interactor._42(), !0
			}
		}, Rd.prototype._drawHighlight = function(j) {
			var L = this,
				d = L.highlight;
			if (d) {
				var h = d.bezier,
					U = L._interactor;
				h && ki.Icons.DrawIcon(U, j, ki.Icons.ShapeHighlightCurve, [h._p1.x, h._p1.y, h._p2.x, h._p2.y, h._p3.x, h._p3.y, h._p4.x, h._p4.y]);
				var m = d.point;
				m && "insertKnot" === d.type && ki.Icons.DrawIcon(U, j, ki.Icons.ShapeHighlighPoint, m)
			}
		}, Rd.prototype._drawGuide = function(T) {
			var N = this,
				K = N._guideInfo;
			if (K) {
				var W, F, L, f, P = K.v;
				for (W = 0; 2 > W; W++) if (f = 0 === W ? K.xList : K.yList) for (F = 0, L = f.length; L > F; F++) ki.Icons.DrawIcon(N._interactor, T, ki.Icons.ShapeGuideLine, [P.x, P.y, f[F].x, f[F].y])
			}
		}, Rd.prototype._drawCurrentPoint = function(O) {
			var c = this;
			if (c.activing) {
				var p = c.activing,
					B = c.getCurrentSelectintStatus(),
					_ = c._interactor;
				if (B !== ki.Curve.PointType.Straight) {
					var V = p.pairs;
					p.hlpair, p.hltype;
					var g = p.selections,
						o = p.editingCtrl;
					if (V && !g) {
						var F, L, P;
						for (L = 0, P = V.length; P > L; L++) F = V[L], o && L === o.pairId && F[o.type] ? ki.Icons.DrawIcon(_, O, ki.Icons.ShapeActivingCtrl, {
							point: F.point,
							c1: F.c1,
							c2: F.c2,
							hl: o.type
						}) : ki.Icons.DrawIcon(_, O, ki.Icons.ShapeActivingCtrl, F)
					}
				}
				ki.Icons.DrawIcon(_, O, ki.Icons.ShapeHighlighRealPoint, c.activing.point), g && g.forEach(function(r) {
					ki.Icons.DrawIcon(_, O, ki.Icons.ShapeHighlighRealPoint, r)
				})
			}
		}, Rd.prototype.clear = function() {
			var x = this;
			x.editing = null, x._guideInfo = null, x.activing = null, x.highlight = null
		}, Rd.prototype._42 = function(W) {
			var $ = this;
			$.info = {}, $.editing || ($.screenInfo = null);
			var g = $._interactor;
			if (!g.editDetail) return $.clear(), void 0;
			if (!$.target || !$._interactor.gv.isSelected($.target) || !$._interactor.gv.isVisible($.target)) return g.editDetail = !1, $.clear(), void 0;
			if ($.gatherSingleTarget(g.gv, $.target), ki.Icons.DrawIcon(g, W, ki.Icons.ShapeBgCurve, $.screenInfo), $._drawHighlight(W), $._drawCurrentPoint(W), $._getRealPoint().forEach(function(Q) {
				ki.Icons.DrawIcon(g, W, ki.Icons.ShapePoint, Q)
			}), $._drawGuide(W), $.tipInfo && ki.Icons.DrawIcon(g, W, ki.Icons.TipHelper, $.tipInfo), $._edgeHostGuideInfo && ki.Icons.DrawIcon(g, W, ki.Icons.NodeHoverGuide, $._edgeHostGuideInfo), $._interactor.getStyle("curveElevationVisible") && $.target instanceof d.Polyline && $.activing) {
				var v = $.activing.getCurrentEditingPoint();
				v && ki.Icons.DrawIcon(g, W, ki.Icons.EdgeElevationGuide, v)
			}
		}, Rd.prototype._getRealPoint = function() {
			var w = this.screenInfo,
				R = w.P,
				v = w.S,
				g = -1,
				N = [];
			return v.each(function(W) {
				var H = 1;
				if (3 === W) H = 2;
				else if (4 === W) H = 3;
				else if (5 === W) return;
				g += H, N.push({
					x: R[2 * g],
					y: R[2 * g + 1]
				})
			}), N
		};
		var Xi = ki.MoveHelper = function(a) {
				var F = this;
				F.catalog = "Move", F._interactor = a
			};
		Xi.prototype = {}, Xi.prototype.constructor = Xi, Xi.prototype.calcShift = function(m, i, L) {
			var O, p, H = this,
				b = H._interactor.gv,
				C = b.lp(i);
			if ("beginMove" === m && H._gatherGridInfo(L._lastLogicalPoint || C), O = H._target) {
				var j = O.downPosition;
				if (j) {
					var o = H._interactor.getStyle("moveSensitivity") / b._zoom;
					if (j.distanceTo(C) < o) return {
						x: 0,
						y: 0
					};
					delete O.downPosition
				}
				var T;
				p = d.Default.isShiftDown(i), p && (C = H._dealShiftDown(C), T = O.shiftGuide.dir);
				var M, N = O.rawPos = {
					x: O.pos.x + C.x - O.lp.x,
					y: O.pos.y + C.y - O.lp.y
				};
				if (d.Default.isCtrlDown(i)) {
					if (M = H._calcShiftByAddon(), H._target.node instanceof ki.Group) {
						var W = H._target.node;
						W._position.x += M.x, W._position.y += M.y
					}
					return M
				}
				for (var $, Q = O.x + N.x, G = O.y + N.y, U = {
					x: Q,
					y: G
				}, B = {
					x: Q + O.w / 2,
					y: G + O.h / 2
				}, S = {
					x: Q + O.w,
					y: G + O.h
				}, A = H._interactor.rectGuide, Y = H._interactor.gridGuide, h = [A.findClosest(U, T), A.findClosest(B, T), A.findClosest(S, T), Y.findClosest(U, T), Y.findClosest(B, T), Y.findClosest(S, T)], J = 1 / 0, g = 1 / 0, R = 0, l = h.length; l > R; R++) $ = h[R], $ && (Q = $.x, G = $.y, isFinite(Q) && Math.abs(Q) < Math.abs(J) && (J = Q), isFinite(G) && Math.abs(G) < Math.abs(g) && (g = G));
				if (isFinite(J) || (J = 0), isFinite(g) || (g = 0), M = H._calcShiftByAddon(J, g), H._target.node instanceof ki.Group) {
					var W = H._target.node;
					W._position.x += M.x, W._position.y += M.y
				}
				var X = O.node;
				if (!$f(X, b)) {
					var r = N.x + J,
						z = N.y + g;
					H._interactor.rectGuide.gatherLines({
						node: X,
						x: O.x + r,
						y: O.y + z,
						w: O.w,
						h: O.h
					}, T)
				}
				return M
			}
		}, Xi.prototype._calcShiftByAddon = function(C, Z) {
			var g = this._target,
				O = g.rawPos,
				X = g.node.getPosition();
			return C = C || 0, Z = Z || 0, {
				x: O.x - X.x + C,
				y: O.y - X.y + Z
			}
		}, Xi.prototype._dealShiftDown = function(F) {
			var $ = this,
				_ = $._target.shiftGuide,
				s = $._target.lp,
				x = Math.abs(F.x - s.x),
				c = Math.abs(F.y - s.y);
			x > c && x > _.limit && "y" === _.dir && (_.dir = "x"), c > x && c > _.limit && "x" === _.dir && (_.dir = "y");
			var H = _.dir;
			return "x" === H ? (F.y = s.y, _.limit = Math.max(_.limit, x)) : "y" === H && (F.x = s.x, _.limit = Math.max(_.limit, c)), F
		}, Xi.prototype._gatherGridInfo = function(v) {
			var g, S = this,
				L = S._interactor,
				H = L._getValidSelection();
			if (1 === H.length) {
				if (g = H[0], !g.getRect) return S._target = null, void 0
			} else if (g = ki.Group.findOrCreateGroup(H), !g) return S._target = null, void 0;
			var Q = g.getPosition(),
				c = g.getRect();
			S._target = {
				node: g,
				x: c.x - Q.x,
				y: c.y - Q.y,
				w: c.width,
				h: c.height,
				lp: {
					x: v.x,
					y: v.y
				},
				pos: {
					x: Q.x,
					y: Q.y
				},
				shiftGuide: {
					dir: "x",
					limit: 0
				},
				downPosition: new ki.Math.Vector2(v)
			}, L.rectGuide.gatherRects()
		}, Xi.prototype.clear = function() {
			var l = this;
			l._interactor.rectGuide.clear(), l._interactor._42()
		};
		var Hp = "directional",
			fl = "point",
			$h = "spot",
			Pj = "light.color",
			Nb = function(l, G) {
				bc(G) && Wm.test(G) ? Fi(l, G) : Hj(G) && G.modelType ? nk(l, G) : Qp[l] = G
			},
			jo = function(q) {
				if (Hj(q)) return q;
				var l = Qp[q];
				return q && l === r && Wm.test(q) && (tq && tq[q] || Fi(q, q)), l
			};
		vq(z, {
			graph3dViewAttributes: M,
			graph3dViewFirstPersonMode: !1,
			graph3dViewMouseRoamable: !0,
			graph3dViewMoveStep: 15,
			graph3dViewRotateStep: F / 60,
			graph3dViewEditHelperDisabled: !1,
			graph3dViewPannable: !0,
			graph3dViewRotatable: !0,
			graph3dViewWalkable: !0,
			graph3dViewResettable: !0,
			graph3dViewZoomable: !0,
			graph3dViewRectSelectable: !0,
			graph3dViewRectSelectBackground: Ol,
			graph3dViewGridVisible: !1,
			graph3dViewGridSize: 50,
			graph3dViewGridGap: 50,
			graph3dViewGridColor: [.4, .75, .85, 1],
			graph3dViewOriginAxisVisible: !1,
			graph3dViewCenterAxisVisible: !1,
			graph3dViewAxisXColor: [1, 0, 0, 1],
			graph3dViewAxisYColor: [0, 1, 0, 1],
			graph3dViewAxisZColor: [0, 0, 1, 1],
			graph3dViewEditSizeColor: [1, 1, 0, 1],
			graph3dViewOrtho: !1,
			graph3dViewOrthoWidth: 2e3,
			graph3dViewFovy: F / 4,
			graph3dViewNear: 10,
			graph3dViewFar: 1e4,
			graph3dViewEye: [0, 300, 1e3],
			graph3dViewCenter: [0, 0, 0],
			graph3dViewUp: [0, 1, -1e-7],
			graph3dViewHeadlightRange: 0,
			graph3dViewHeadlightColor: [1, 1, 1, 1],
			graph3dViewHeadlightIntensity: 1,
			graph3dViewHeadlightDisabled: !1,
			graph3dViewFogDisabled: !0,
			graph3dViewFogColor: "white",
			graph3dViewFogNear: 1,
			graph3dViewFogFar: 2e3,
			graph3dViewDashDisabled: !0,
			graph3dViewBatchBlendDisabled: !0,
			graph3dViewBatchBrightnessDisabled: !0,
			graph3dViewBatchColorDisabled: !1,
			setShape3dModel: Nb,
			getShape3dModel: jo,
			createMatrix: function(U, f) {
				lo(U) || (U = [U]);
				for (var x = U.length - 1; x >= 0; x--) {
					var K = U[x];
					f = Gb(K.mat, K.s3, K.r3, K.rotationMode, K.t3, f)
				}
				return f
			},
			transformVec: function(z, R) {
				return lc(z, R)
			},
			createBoxModel: function() {
				return {
					vs: Gd,
					ns: Ur,
					uv: Pd,
					is: Dj
				}
			},
			createRoundRectModel: function(l, r) {
				return Ec.roundRect(l, r)
			},
			createStarModel: function(k, y) {
				return Ec.star(k, y)
			},
			createRectModel: function(T, l) {
				return Ec.rect(T, l)
			},
			createTriangleModel: function(z, i) {
				return Ec.triangle(z, i)
			},
			createRightTriangleModel: function(J, K) {
				return Ec.rightTriangle(J, K)
			},
			createParallelogramModel: function(p, x) {
				return Ec.parallelogram(p, x)
			},
			createTrapezoidModel: function(c, U) {
				return Ec.trapezoid(c, U)
			},
			createSmoothSphereModel: function(u, I, p, e, K, c, b) {
				return Uo(new Md(u, I, p, e, K, c, b))
			},
			createSphereModel: function(B, m, q, R, G, X) {
				return B ? Fo(B, m, q, R, G, X) : z.createSmoothSphereModel()
			},
			createSmoothConeModel: function(n, R, g, x, Z) {
				return Uf(n, R, g, x, Z)
			},
			createConeModel: function(G, K, _, M, p, u) {
				return G ? Sk(G, K, _, M, p, u) : Uf(u)
			},
			createSmoothCylinderModel: function(F, P, f, U, g, D, y, t) {
				return Uo(new xs(F, P, f, U, g, D, y, t))
			},
			createCylinderModel: function(w, Y, E, O, L, k, x) {
				return w ? Cl(w, Y, E, O, L, k, x) : tc(k, x)
			},
			createSmoothTorusModel: function(B, G, v, i, W, D) {
				return Uo(new hq(B, G, v, i, W, D))
			},
			createTorusModel: function(F, m, I, Z, n, u, C) {
				return F ? $o(F, m, I, Z, n, u, C) : Po(u, C)
			},
			createExtrusionModel: function(w, a, t, s, F, i, G, B) {
				return fs(w, a, t, s, F, i, G, B)
			},
			createSmoothRingModel: function(M, k, r, U, F, d) {
				for (var B = [], c = 0; c < M.length - 1; c += 2) B.push({
					x: M[c],
					y: M[c + 1]
				});
				for (M = vk(B, k, r)[0], B = [], c = 0; c < M.length; c++) {
					var v = M[c];
					B.push(new yp(v.x, 0, v.y))
				}
				return Uo(new mk(B, d, U, F))
			},
			createTextGeometry: function(Z, p) {
				return Uo(new zd(Z, p))
			},
			loadFontFace: function(i, I) {
				z.xhrLoad(i, function(Y) {
					if (!Y) return I();
					var P;
					try {
						P = JSON.parse(Y)
					} catch (U) {
						P = JSON.parse(Y.substring(65, Y.length - 2))
					}
					gl.loadFace(P), I && I(P.familyName.toLowerCase())
				}, I ? null : {
					sync: !0
				})
			},
			getRotationFromMatrix4: function(j, G) {
				var d = O,
					S = j[0],
					t = j[4],
					E = j[8],
					s = j[1],
					H = j[5],
					g = j[9],
					l = j[2],
					$ = j[6],
					n = j[10];
				G = G || "xyz", G = G[2] + G[1] + G[0], G = G.toUpperCase();
				var P = {};
				if ("XYZ" === G) P._y = Math.asin(d(E, -1, 1)), Math.abs(E) < .99999 ? (P._x = Math.atan2(-g, n), P._z = Math.atan2(-t, S)) : (P._x = Math.atan2($, H), P._z = 0);
				else if ("YXZ" === G) P._x = Math.asin(-d(g, -1, 1)), Math.abs(g) < .99999 ? (P._y = Math.atan2(E, n), P._z = Math.atan2(s, H)) : (P._y = Math.atan2(-l, S), P._z = 0);
				else if ("ZXY" === G) P._x = Math.asin(d($, -1, 1)), Math.abs($) < .99999 ? (P._y = Math.atan2(-l, n), P._z = Math.atan2(-t, H)) : (P._y = 0, P._z = Math.atan2(s, S));
				else if ("ZYX" === G) P._y = Math.asin(-d(l, -1, 1)), Math.abs(l) < .99999 ? (P._x = Math.atan2($, n), P._z = Math.atan2(s, S)) : (P._x = 0, P._z = Math.atan2(-t, H));
				else if ("YZX" === G) P._z = Math.asin(d(s, -1, 1)), Math.abs(s) < .99999 ? (P._x = Math.atan2(-g, H), P._y = Math.atan2(-l, S)) : (P._x = 0, P._y = Math.atan2(E, n));
				else {
					if ("XZY" !== G) return null;
					P._z = Math.asin(-d(t, -1, 1)), Math.abs(t) < .99999 ? (P._x = Math.atan2($, H), P._y = Math.atan2(E, S)) : (P._x = Math.atan2(-g, n), P._y = 0)
				}
				return [P._x, P._y, P._z]
			},
			createRingModel: function(E, A, y, X, Z, B, Q, l, $, g) {
				for (var p = [], j = 0; j < E.length - 1; j += 2) p.push({
					x: E[j],
					y: E[j + 1]
				});
				B = B || z.shapeSide, Q = Q || 0, l = l || B;
				var d, u, x, o, i, s, S, I, h, J, j, O, m, b, f, N, R, c, G = [],
					W = [],
					U = $ ? [] : M,
					w = $ ? [] : M,
					_ = g ? [] : M,
					P = g ? [] : M,
					v = X ? [] : M,
					k = X ? [] : M,
					q = Z ? [] : M,
					e = Z ? [] : M,
					E = vk(p, A, y),
					F = Zh(E),
					L = 0,
					V = 2 * Math.PI / B;
				return E.forEach(function(z) {
					if (x = z.length, x > 1) {
						if (o = z[0], X) for (s = o.x, I = o.y, j = Q; l > j; j++) O = j + 1, m = j * V, b = O * V, f = K(m), N = C(m), R = K(b), c = C(b), v.push(f * s, I, -N * s, R * s, I, -c * s, 0, I, 0), k.push(.5 - .5 * f, .5 - .5 * N, .5 - .5 * R, .5 - .5 * c, .5, .5);
						for (J = 0; x > J; J++) {
							for (i = z[J], s = o.x, S = i.x, I = o.y, h = i.y, d = L / F, L += Zg(o, i), u = L / F, j = Q; l > j; j++) O = j + 1, m = j * V, b = O * V, f = K(m), N = C(m), R = K(b), c = C(b), G.push(f * S, h, -N * S, R * S, h, -c * S, f * s, I, -N * s, R * S, h, -c * S, R * s, I, -c * s, f * s, I, -N * s), W.push(j / B, u, O / B, u, j / B, d, O / B, u, O / B, d, j / B, d), $ && j === Q && (U.push(0, I, 0, 0, h, 0, f * S, h, -N * S, f * S, h, -N * S, f * s, I, -N * s, 0, I, 0), w.push(0, .5 - I, 0, .5 - h, 2 * S, .5 - h, 2 * S, .5 - h, 2 * s, .5 - I, 0, .5 - I)), g && O === l && (_.push(0, I, 0, R * S, h, -c * S, 0, h, 0, R * S, h, -c * S, 0, I, 0, R * s, I, -c * s), P.push(1, .5 - I, 1 - 2 * S, .5 - h, 1, .5 - h, 1 - 2 * S, .5 - h, 1, .5 - I, 1 - 2 * s, .5 - I));
							o = i
						}
						if (Z) for (s = o.x, I = o.y, j = Q; l > j; j++) O = j + 1, m = j * V, b = O * V, f = K(m), N = C(m), R = K(b), c = C(b), q.push(R * s, I, -c * s, f * s, I, -N * s, 0, I, 0), e.push(.5 - .5 * R, .5 + .5 * c, .5 - .5 * f, .5 + .5 * N, .5, .5)
					}
				}), {
					vs: G,
					uv: W,
					bottom_vs: q,
					bottom_uv: e,
					top_vs: v,
					top_uv: k,
					from_vs: U,
					from_uv: w,
					to_vs: _,
					to_uv: P
				}
			}
		}, !0), vq(e, {
			"3d.move.mode": r,
			"3d.selectable": !0,
			"3d.visible": !0,
			"3d.movable": !0,
			"3d.editable": !0,
			"shape.border.gradient.color": r,
			"edge.gradient.color": r,
			"edge.source.t3": r,
			"edge.target.t3": r,
			"light.type": fl,
			"light.center": [0, 0, 0],
			"light.color": [1, 1, 1, 1],
			"light.disabled": !1,
			"light.angle": F / 4,
			"light.range": 0,
			"light.exponent": 1,
			"light.intensity": 1,
			"wf.visible": !1,
			"wf.width": 1,
			"wf.color": qj,
			"wf.short": !1,
			"wf.mat": r,
			"wf.geometry": !1,
			batch: r,
			"transparent.mask": !1,
			brightness: r,
			"select.brightness": .7,
			"repeat.uv.length": r,
			alphaTest: .4,
			"label.face": Km,
			"label.t3": r,
			"label.r3": r,
			"label.texture.scale": 2,
			"label.rotationMode": np,
			"label.light": !1,
			"label.blend": r,
			"label.reverse.flip": !1,
			"label.reverse.color": Vc,
			"label.reverse.cull": !1,
			"label.transparent": !1,
			"label.autorotate": !1,
			"label2.face": Km,
			"label2.t3": r,
			"label2.r3": r,
			"label2.texture.scale": 2,
			"label2.rotationMode": np,
			"label2.light": !1,
			"label2.blend": r,
			"label2.reverse.flip": !1,
			"label2.reverse.color": Vc,
			"label2.reverse.cull": !1,
			"label2.transparent": !1,
			"label2.autorotate": !1,
			"note.face": Km,
			"note.t3": r,
			"note.r3": r,
			"note.texture.scale": 2,
			"note.rotationMode": np,
			"note.light": !1,
			"note.blend": r,
			"note.reverse.flip": !1,
			"note.reverse.color": Vc,
			"note.reverse.cull": !1,
			"note.transparent": !1,
			"note.autorotate": !1,
			"note2.face": Km,
			"note2.t3": r,
			"note2.r3": r,
			"note2.texture.scale": 2,
			"note2.rotationMode": np,
			"note2.light": !1,
			"note2.blend": r,
			"note2.reverse.flip": !1,
			"note2.reverse.color": Vc,
			"note2.reverse.cull": !1,
			"note2.transparent": !1,
			"note2.autorotate": !1,
			shape3d: r,
			"shape3d.color": Gf,
			"shape3d.top.color": r,
			"shape3d.bottom.color": r,
			"shape3d.from.color": r,
			"shape3d.to.color": r,
			"shape3d.image": r,
			"shape3d.top.image": r,
			"shape3d.bottom.image": r,
			"shape3d.from.image": r,
			"shape3d.to.image": r,
			"shape3d.light": !0,
			"shape3d.side": 0,
			"shape3d.side.from": r,
			"shape3d.side.to": r,
			"shape3d.visible": !0,
			"shape3d.from.visible": !0,
			"shape3d.to.visible": !0,
			"shape3d.top.visible": !0,
			"shape3d.bottom.visible": !0,
			"shape3d.torus.radius": .17,
			"shape3d.resolution": 0,
			"shape3d.blend": r,
			"shape3d.opacity": r,
			"shape3d.reverse.flip": !1,
			"shape3d.reverse.color": Vc,
			"shape3d.reverse.cull": !1,
			"shape3d.transparent": !1,
			"shape3d.uv.offset": r,
			"shape3d.uv.scale": r,
			"shape3d.top.uv.offset": r,
			"shape3d.top.uv.scale": r,
			"shape3d.bottom.uv.offset": r,
			"shape3d.bottom.uv.scale": r,
			"shape3d.from.uv.offset": r,
			"shape3d.from.uv.scale": r,
			"shape3d.to.uv.offset": r,
			"shape3d.to.uv.scale": r,
			"shape3d.top.cap": r,
			"shape3d.bottom.cap": r,
			"shape3d.start.angle": 0,
			"shape3d.sweep.angle": o,
			"shape3d.discard.selectable": !0,
			"shape3d.top.discard.selectable": !0,
			"shape3d.bottom.discard.selectable": !0,
			"shape3d.from.discard.selectable": !0,
			"shape3d.to.discard.selectable": !0,
			"shape3d.scaleable": !0,
			"shape3d.autorotate": !1,
			"shape3d.fixSizeOnScreen": r,
			"shape3d.image.cache": !1,
			"shape3d.alwaysOnTop": !1,
			"all.light": !0,
			"all.visible": !0,
			"all.color": Gf,
			"all.image": r,
			"all.blend": r,
			"all.opacity": r,
			"all.reverse.flip": !1,
			"all.reverse.color": Vc,
			"all.reverse.cull": !1,
			"all.transparent": !1,
			"all.uv": r,
			"all.uv.offset": r,
			"all.uv.scale": r,
			"all.discard.selectable": !0,
			mat: r,
			"left.mat": r,
			"right.mat": r,
			"top.mat": r,
			"bottom.mat": r,
			"front.mat": r,
			"back.mat": r
		}, !0);
		var zi, qq = !1,
			zs = [0, 0, 0, 0],
			_j = {
				left: [1 / 255, 0, 0, 1],
				right: [2 / 255, 0, 0, 1],
				top: [3 / 255, 0, 0, 1],
				bottom: [4 / 255, 0, 0, 1],
				front: [5 / 255, 0, 0, 1],
				back: [6 / 255, 0, 0, 1],
				m: {
					1: $c,
					2: Oj,
					3: Mr,
					4: pb,
					5: Km,
					6: Uj
				}
			},
			yr = function(g, c, b, p) {
				if (c.getFaceVisible(g, b)) {
					Qe(c, Jd(g, c.getFaceMat(g, b) || c.getMat(g)));
					var e = c._26I;
					c.getFaceReverseCull(g, b) ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE), ce(e, c._prg.uFixPickReverseColor, _j[b]), sj(e), ao(e, p, 6), Cr(e), Dk(c)
				}
			},
			uq = function(p) {
				return p instanceof qc
			},
			cq = function(S) {
				return [S.x, S.e || 0, S.y]
			},
			ts = function(K, m, S) {
				for (var m = qe(m), W = m[0], x = m[1], N = m[2]; S--;) K.push(W, x, N)
			},
			eb = function(B, n, D) {
				for (var n = qe(n), g = n[0], $ = n[1], l = n[2], m = n[3]; D--;) B.push(g, $, l, m)
			},
			si = function(N, H, v) {
				if (H) for (var k, j, M, y = H[0], J = H[1], L = H[2], $ = H[4], m = H[5], C = H[6], S = H[8], p = H[9], E = H[10], Z = H[12], B = H[13], A = H[14], D = v.length, V = 0, V = 0; D > V; V += 3) k = v[V], j = v[V + 1], M = v[V + 2], N.push(y * k + $ * j + S * M + Z, J * k + m * j + p * M + B, L * k + C * j + E * M + A);
				else _r(N, v)
			},
			Ir = function(g, U) {
				var N = U.s("light.intensity"),
					a = qe(U.s(Pj)),
					P = a[0],
					J = a[1],
					u = a[2];
				1 !== N && (P *= N, J *= N, u *= N), g.push(P, J, u, U.s("light.disabled") ? 1 : 0)
			},
			Si = function(h, s, r) {
				ce(s, r.uHeadlightRange, h._headlightRange);
				var M = h._headlightIntensity,
					A = qe(h._headlightColor);
				1 !== M && (A = [A[0] * M, A[1] * M, A[2] * M]), ce(s, r.uHeadlightColor, [A[0], A[1], A[2], h._headlightDisabled ? 1 : 0]);
				var i = h._59O,
					V = h._spots,
					l = h._dirs;
				if (i.length) {
					var _ = [],
						J = [],
						E = [];
					i.forEach(function(s) {
						Ir(_, s), _r(J, h._transformPointToViewSpace(s.p3())), E.push(s.s("light.range"))
					}), s.uniform4fv(r.uPointColor, _), s.uniform1fv(r.uPointRange, E), s.uniform3fv(r.uPointPosition, J)
				}
				if (V.length) {
					var U = [],
						X = [],
						a = [],
						Y = [],
						w = [],
						L = [];
					V.forEach(function(N) {
						Ir(U, N), _r(X, h._transformPointToViewSpace(N.p3())), _r(w, h._transformDirectionToViewSpace(N.p3(), N.s("light.center"))), a.push(N.s("light.range")), Y.push(K(N.s("light.angle") / 2)), L.push(N.s("light.exponent"))
					}), s.uniform4fv(r.uSpotColor, U), s.uniform1fv(r.uSpotRange, a), s.uniform1fv(r.uSpotAngle, Y), s.uniform1fv(r.uSpotExponent, L), s.uniform3fv(r.uSpotPosition, X), s.uniform3fv(r.uSpotDirection, w)
				}
				if (l.length) {
					var O = [],
						T = [];
					l.forEach(function(e) {
						Ir(O, e), _r(T, h._transformDirectionToViewSpace(e.p3()))
					}), s.uniform4fv(r.uDirColor, O), s.uniform3fv(r.uDirDirection, T)
				}
			},
			Ci = function(l) {
				return l > 0 && 0 === (l - 1 & l)
			},
			Mf = function(r) {
				return r = D(0, k(F, r)), r = D(qk, k(F - qk, r))
			},
			fn = function() {
				return .05 + g() / 2
			},
			Sq = function(R, e, J, v) {
				var c, g = R.getEye();
				return R.isOrtho() ? (c = Yg(R.getCenter(), g), c[0] += v[0], c[1] += v[1], c[2] += v[2]) : c = g, Nf(e, J, v, c)
			},
			Nf = function(S, F, J, B) {
				var Z = nb(S, F),
					e = Yg(B, J, !0),
					u = nb(e, F);
				if (R(u) < qk) return M;
				var C = (Z - nb(J, F)) / u;
				return [J[0] + e[0] * C, J[1] + e[1] * C, J[2] + e[2] * C]
			},
			Jp = function(g, s) {
				return {
					x: 2 * g.x - s.x,
					y: 2 * g.y - s.y
				}
			},
			nr = function(E, W, i, Z) {
				var U, J;
				if (!E) return U = G(W.y - i.y, i.x - W.x), {
					x: W.x + Z * C(U),
					y: W.y + Z * K(U)
				};
				if (!i) return U = G(E.y - W.y, W.x - E.x), {
					x: W.x + Z * C(U),
					y: W.y + Z * K(U)
				};
				var O = Yg([E.x, E.y, 0], [W.x, W.y, 0], !0),
					c = Yg([i.x, i.y, 0], [W.x, W.y, 0], !0),
					p = -(O[0] + c[0]) / 2,
					r = -(O[1] + c[1]) / 2,
					l = N(p * p + r * r);
				if (qk > l) return U = G(E.y - W.y, W.x - E.x), {
					x: W.x + Z * C(U),
					y: W.y + Z * K(U)
				};
				var o = E.x - W.x,
					e = E.y - W.y,
					x = i.x - W.x,
					t = i.y - W.y,
					d = N(o * o + e * e),
					A = N(x * x + t * t);
				U = f(nb(O, c)) / 2, J = O[1] * c[0] - O[0] * c[1] > 0 ? -1 : 1, p /= l, r /= l;
				var j = Z / C(U),
					L = D(d, A) / K(U);
				l = Math.min(j, L);
				var u = {
					x: W.x + J * l * p,
					y: W.y + J * l * r
				};
				return i.b && j > A / K(U) && (u.adjust = !0), u
			},
			Zf = function(N) {
				var c = N[1],
					w = N[2],
					b = N[3],
					j = N[6],
					n = N[7],
					U = N[11];
				N[1] = N[4], N[2] = N[8], N[3] = N[12], N[4] = c, N[6] = N[9], N[7] = N[13], N[8] = w, N[9] = j, N[11] = N[14], N[12] = b, N[13] = n, N[14] = U
			},
			xi = function(P) {
				var F = P[0],
					G = P[1],
					D = P[2],
					p = P[3],
					N = P[4],
					t = P[5],
					q = P[6],
					c = P[7],
					B = P[8],
					I = P[9],
					O = P[10],
					g = P[11],
					H = P[12],
					i = P[13],
					_ = P[14],
					Q = P[15],
					W = F * t - G * N,
					V = F * q - D * N,
					v = F * c - p * N,
					e = G * q - D * t,
					X = G * c - p * t,
					C = D * c - p * q,
					f = B * i - I * H,
					a = B * _ - O * H,
					x = B * Q - g * H,
					d = I * _ - O * i,
					n = I * Q - g * i,
					s = O * Q - g * _,
					U = W * s - V * n + v * d + e * x - X * a + C * f;
				return U ? (U = 1 / U, P[0] = (t * s - q * n + c * d) * U, P[1] = (D * n - G * s - p * d) * U, P[2] = (i * C - _ * X + Q * e) * U, P[3] = (O * X - I * C - g * e) * U, P[4] = (q * x - N * s - c * a) * U, P[5] = (F * s - D * x + p * a) * U, P[6] = (_ * v - H * C - Q * V) * U, P[7] = (B * C - O * v + g * V) * U, P[8] = (N * n - t * x + c * f) * U, P[9] = (G * x - F * n - p * f) * U, P[10] = (H * X - i * v + Q * W) * U, P[11] = (I * v - B * X - g * W) * U, P[12] = (t * a - N * d - q * f) * U, P[13] = (F * d - G * a + D * f) * U, P[14] = (i * V - H * e - _ * W) * U, P[15] = (B * e - I * V + O * W) * U, void 0) : M
			},
			Qf = function(y, K) {
				if (K) {
					var L = K[0],
						o = K[1],
						r = K[2];
					y[12] = y[0] * L + y[4] * o + y[8] * r + y[12], y[13] = y[1] * L + y[5] * o + y[9] * r + y[13], y[14] = y[2] * L + y[6] * o + y[10] * r + y[14], y[15] = y[3] * L + y[7] * o + y[11] * r + y[15]
				}
			},
			Zj = function(C, L) {
				if (L) {
					var J = L[0],
						z = L[1],
						S = L[2];
					C[0] = C[0] * J, C[1] = C[1] * J, C[2] = C[2] * J, C[3] = C[3] * J, C[4] = C[4] * z, C[5] = C[5] * z, C[6] = C[6] * z, C[7] = C[7] * z, C[8] = C[8] * S, C[9] = C[9] * S, C[10] = C[10] * S, C[11] = C[11] * S
				}
			},
			Pq = function(O, T, q) {
				var w = T[0],
					Z = T[1],
					b = T[2],
					P = T[3],
					A = T[4],
					h = T[5],
					v = T[6],
					W = T[7],
					V = T[8],
					J = T[9],
					j = T[10],
					D = T[11],
					S = T[12],
					C = T[13],
					_ = T[14],
					l = T[15],
					K = q[0],
					E = q[1],
					o = q[2],
					k = q[3];
				return O[0] = K * w + E * A + o * V + k * S, O[1] = K * Z + E * h + o * J + k * C, O[2] = K * b + E * v + o * j + k * _, O[3] = K * P + E * W + o * D + k * l, K = q[4], E = q[5], o = q[6], k = q[7], O[4] = K * w + E * A + o * V + k * S, O[5] = K * Z + E * h + o * J + k * C, O[6] = K * b + E * v + o * j + k * _, O[7] = K * P + E * W + o * D + k * l, K = q[8], E = q[9], o = q[10], k = q[11], O[8] = K * w + E * A + o * V + k * S, O[9] = K * Z + E * h + o * J + k * C, O[10] = K * b + E * v + o * j + k * _, O[11] = K * P + E * W + o * D + k * l, K = q[12], E = q[13], o = q[14], k = q[15], O[12] = K * w + E * A + o * V + k * S, O[13] = K * Z + E * h + o * J + k * C, O[14] = K * b + E * v + o * j + k * _, O[15] = K * P + E * W + o * D + k * l, O
			},
			en = function(s, X, g, u) {
				var k, O, i, E, j, t, A, z, n, e, F = X[0],
					B = X[1],
					x = X[2],
					T = u[0],
					Q = u[1],
					I = u[2],
					w = g[0],
					Y = g[1],
					q = g[2];
				return R(F - w) < qk && R(B - Y) < qk && R(x - q) < qk ? pn(s) : (A = F - w, z = B - Y, n = x - q, e = 1 / N(A * A + z * z + n * n), A *= e, z *= e, n *= e, k = Q * n - I * z, O = I * A - T * n, i = T * z - Q * A, e = N(k * k + O * O + i * i), e ? (e = 1 / e, k *= e, O *= e, i *= e) : (k = 0, O = 0, i = 0), E = z * i - n * O, j = n * k - A * i, t = A * O - z * k, e = N(E * E + j * j + t * t), e ? (e = 1 / e, E *= e, j *= e, t *= e) : (E = 0, j = 0, t = 0), s[0] = k, s[1] = E, s[2] = A, s[3] = 0, s[4] = O, s[5] = j, s[6] = z, s[7] = 0, s[8] = i, s[9] = t, s[10] = n, s[11] = 0, s[12] = -(k * F + O * B + i * x), s[13] = -(E * F + j * B + t * x), s[14] = -(A * F + z * B + n * x), s[15] = 1, s)
			},
			pc = function(i, H, V, C, D) {
				var l = 1 / t(H / 2),
					M = 1 / (C - D);
				return i[0] = l / V, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = l, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (D + C) * M, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = 2 * D * C * M, i[15] = 0, i
			},
			xn = function(E, L, t, S, i, j, H) {
				var J = 1 / (L - t),
					b = 1 / (S - i),
					C = 1 / (j - H);
				return E[0] = -2 * J, E[1] = 0, E[2] = 0, E[3] = 0, E[4] = 0, E[5] = -2 * b, E[6] = 0, E[7] = 0, E[8] = 0, E[9] = 0, E[10] = 2 * C, E[11] = 0, E[12] = (L + t) * J, E[13] = (i + S) * b, E[14] = (H + j) * C, E[15] = 1, E
			},
			oc = function(h, o) {
				var U = o[0],
					u = o[1],
					y = o[2],
					r = o[3],
					A = U * U + u * u + y * y + r * r,
					F = A ? 1 / A : 0;
				return h[0] = -U * F, h[1] = -u * F, h[2] = -y * F, h[3] = r * F, h
			},
			Nq = function(n, m) {
				var j = m[0] + m[5] + m[10],
					$ = 0;
				return j > 0 ? ($ = 2 * Math.sqrt(j + 1), n[3] = .25 * $, n[0] = (m[6] - m[9]) / $, n[1] = (m[8] - m[2]) / $, n[2] = (m[1] - m[4]) / $) : m[0] > m[5] & m[0] > m[10] ? ($ = 2 * Math.sqrt(1 + m[0] - m[5] - m[10]), n[3] = (m[6] - m[9]) / $, n[0] = .25 * $, n[1] = (m[1] + m[4]) / $, n[2] = (m[8] + m[2]) / $) : m[5] > m[10] ? ($ = 2 * Math.sqrt(1 + m[5] - m[0] - m[10]), n[3] = (m[8] - m[2]) / $, n[0] = (m[1] + m[4]) / $, n[1] = .25 * $, n[2] = (m[6] + m[9]) / $) : ($ = 2 * Math.sqrt(1 + m[10] - m[0] - m[5]), n[3] = (m[1] - m[4]) / $, n[0] = (m[8] + m[2]) / $, n[1] = (m[6] + m[9]) / $, n[2] = .25 * $), n
			},
			Tr = function(w, n, i) {
				var h = n[0],
					U = n[1],
					o = n[2],
					O = n[3],
					G = h + h,
					a = U + U,
					g = o + o,
					W = h * G,
					A = h * a,
					T = h * g,
					P = U * a,
					s = U * g,
					f = o * g,
					L = O * G,
					E = O * a,
					z = O * g;
				return w[0] = 1 - (P + f), w[1] = A + z, w[2] = T - E, w[3] = 0, w[4] = A - z, w[5] = 1 - (W + f), w[6] = s + L, w[7] = 0, w[8] = T + E, w[9] = s - L, w[10] = 1 - (W + P), w[11] = 0, w[12] = i[0], w[13] = i[1], w[14] = i[2], w[15] = 1, w
			},
			Hi = z.getRotationFromMatrix4,
			ns = function() {
				var g = [0, 0, 0],
					U = [0, 0, 0],
					Q = [0, 0, 0],
					F = function(D, I, n) {
						D[0] = I[1] * n[2] - I[2] * n[1], D[1] = I[2] * n[0] - I[0] * n[2], D[2] = I[0] * n[1] - I[1] * n[0]
					},
					G = function(t) {
						return t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
					},
					p = function(K) {
						var z = Math.sqrt(G(K));
						K[0] /= z, K[1] /= z, K[2] /= z
					},
					c = function(I, W, l) {
						I[0] = W[0] - l[0], I[1] = W[1] - l[1], I[2] = W[2] - l[2]
					};
				return function(u, Y, P) {
					var _ = nd();
					return c(Q, u, Y), 0 === G(Q) && (Q[2] = 1), p(Q), F(g, P, Q), 0 === G(g) && (1 === Math.abs(P[2]) ? Q[0] += 1e-4 : Q[2] += 1e-4, p(Q), F(g, P, Q)), p(g), F(U, Q, g), _[0] = g[0], _[4] = U[0], _[8] = Q[0], _[1] = g[1], _[5] = U[1], _[9] = Q[1], _[2] = g[2], _[6] = U[2], _[10] = Q[2], _
				}
			}(),
			vi = function(O, y) {
				return en(y ? y : nd(), O._eye, O._center, O._up)
			},
			ri = function(s) {
				var y = s.getAspect(),
					J = s._near,
					d = s._far,
					N = nd();
				if (s._ortho) {
					var h = s._orthoWidth / 2,
						O = h / y;
					xn(N, -h, h, -O, O, J, d)
				} else pc(N, s._fovy, y, J, d);
				return N
			},
			Mq = function(q, X) {
				if (!q) return M;
				var S = 0,
					I = 1,
					j = 2,
					e = [],
					Y = 0,
					d = q.length,
					U = d / 3;
				if (X) {
					for (; d > Y; Y++) e[Y] = 0;
					for (Y = 0; Y < X.length; Y += 3) {
						var P = [],
							y = [],
							u = [];
						P[S] = q[3 * X[Y + 1] + S] - q[3 * X[Y] + S], P[I] = q[3 * X[Y + 1] + I] - q[3 * X[Y] + I], P[j] = q[3 * X[Y + 1] + j] - q[3 * X[Y] + j], y[S] = q[3 * X[Y + 2] + S] - q[3 * X[Y + 1] + S], y[I] = q[3 * X[Y + 2] + I] - q[3 * X[Y + 1] + I], y[j] = q[3 * X[Y + 2] + j] - q[3 * X[Y + 1] + j], u[S] = P[I] * y[j] - P[j] * y[I], u[I] = P[j] * y[S] - P[S] * y[j], u[j] = P[S] * y[I] - P[I] * y[S];
						for (var W = 0; 3 > W; W++) e[3 * X[Y + W] + S] += u[S], e[3 * X[Y + W] + I] += u[I], e[3 * X[Y + W] + j] += u[j]
					}
				} else for (Y = 0; U > Y; Y += 3) {
					var P = [],
						y = [],
						u = [];
					P[S] = q[3 * (Y + 1) + S] - q[3 * Y + S], P[I] = q[3 * (Y + 1) + I] - q[3 * Y + I], P[j] = q[3 * (Y + 1) + j] - q[3 * Y + j], y[S] = q[3 * (Y + 2) + S] - q[3 * (Y + 1) + S], y[I] = q[3 * (Y + 2) + I] - q[3 * (Y + 1) + I], y[j] = q[3 * (Y + 2) + j] - q[3 * (Y + 1) + j], u[S] = P[I] * y[j] - P[j] * y[I], u[I] = P[j] * y[S] - P[S] * y[j], u[j] = P[S] * y[I] - P[I] * y[S];
					for (var W = 0; 3 > W; W++) e[3 * (Y + W) + S] = u[S], e[3 * (Y + W) + I] = u[I], e[3 * (Y + W) + j] = u[j]
				}
				for (Y = 0; d > Y; Y += 3) {
					var E = [];
					E[S] = e[Y + S], E[I] = e[Y + I], E[j] = e[Y + j];
					var f = N(E[S] * E[S] + E[I] * E[I] + E[j] * E[j]);
					0 === f && (f = qk), E[S] = E[S] / f, E[I] = E[I] / f, E[j] = E[j] / f, e[Y + S] = E[S], e[Y + I] = E[I], e[Y + j] = E[j]
				}
				return new Cm(e)
			},
			hp = function(x, d, R, m) {
				if (R || (R = x.createTexture()), d) {
					var q = x.TEXTURE_2D,
						B = x.REPEAT,
						i = x.CLAMP_TO_EDGE,
						E = x.TEXTURE_MIN_FILTER;
					m !== x.NEAREST && (m = x.LINEAR), Bj(x, R), x.texImage2D(q, 0, x.RGBA, x.RGBA, x.UNSIGNED_BYTE, d), Wi(x, x.TEXTURE_MAG_FILTER, m), Ci(d.width) && Ci(d.height) && !d.clampToEdge ? (Wi(x, x.TEXTURE_WRAP_S, B), Wi(x, x.TEXTURE_WRAP_T, B), Wi(x, E, x.LINEAR_MIPMAP_LINEAR), x.generateMipmap(q)) : (Wi(x, x.TEXTURE_WRAP_S, i), Wi(x, x.TEXTURE_WRAP_T, i), Wi(x, E, m)), Bj(x, M)
				}
				return R
			},
			ds = function(T, V) {
				var W = new Uint8Array(3);
				return V = V || T.createTexture(), Bj(T, V), Wi(T, T.TEXTURE_MIN_FILTER, T.LINEAR), T.texImage2D(T.TEXTURE_2D, 0, T.RGB, 1, 1, 0, T.RGB, T.UNSIGNED_BYTE, W), V
			},
			Nn = function(d) {
				d._26I && d._prg && (d._26I.deleteProgram(d._prg), d._prg = M)
			},
			ek = function(w, e, O, E) {
				var D = w.createShader(O);
				return w.shaderSource(D, E), w.compileShader(D), w.attachShader(e, D), D
			},
			Ee = function(c) {
				return c.createBuffer()
			},
			Bj = function(r, J) {
				r.bindTexture(r.TEXTURE_2D, J)
			},
			of = function(_, D) {
				_.bindFramebuffer(_.FRAMEBUFFER, D)
			},
			Wi = function(O, D, f) {
				O.texParameteri(O.TEXTURE_2D, D, f)
			},
			wj = function(i, k) {
				if (k) {
					var k = qe(k);
					i.clearColor(k[0], k[1], k[2], k[3])
				}
			},
			Ne = function(u, q) {
				ce(u, q.uFix, !0), jb(u, q.aNormal)
			},
			Ad = function(M, I) {
				ce(M, I.uFix, !1), Cc(M, I.aNormal)
			},
			iq = function(F, C, X, N, v, d, j, c) {
				F._picking || (X ? (ce(F, C.uBlend, !0), ce(F, C.uBlendColor, X)) : ce(F, C.uBlend, !1), ce(F, C.uLight, N == M ? !0 : N), Up(v) && 1 !== v && ce(F, C.uPartOpacity, v), ce(F, C.uReverseFlip, d == M ? !1 : d), ce(F, C.uFixPickReverseColor, j || Vc)), c ? F.enable(F.CULL_FACE) : F.disable(F.CULL_FACE)
			},
			dh = function(W, i) {
				W._picking || ce(W, i.uPartOpacity, 1)
			},
			sj = function(D, i, I, z, X, j, V, h, H) {
				if (!I) return D.activeTexture(D.TEXTURE0), Bj(D, D._emptyTexture), D.activeTexture(D.TEXTURE1), Bj(D, D._emptyBlendTexture), void 0;
				ce(D, i.uTexture, !0), ce(D, i.uDiscardSelectable, Gc(z) ? z : !0), Cc(D, i.aUv), Xr(D, X, j, i.aUv, 2), H ? (ce(D, i.uBlendTexture, !0), D.activeTexture(D.TEXTURE1), Bj(D, H), D.uniform1i(i.uBlendSampler, 1)) : (ce(D, i.uBlendTexture, !1), D.activeTexture(D.TEXTURE1), Bj(D, D._emptyBlendTexture)), D.activeTexture(D.TEXTURE0), Bj(D, I), D.uniform1i(i.uSampler, 0);
				var q = [0, 0, 1, 1];
				V && (q[0] = V[0], q[1] = V[1]), h && (q[2] = h[0], q[3] = h[1]), ce(D, i.uOffsetScale, q)
			},
			Cr = function(i, s, C) {
				i.activeTexture(i.TEXTURE0), Bj(i, M), i.activeTexture(i.TEXTURE1), Bj(i, M), C && (jb(i, s.aUv), ce(i, s.uTexture, !1), ce(i, s.uBlendTexture, !1))
			},
			mc = function(A, a, c, H, t, $) {
				!c || L || X || A.lineWidth(c), H && !A._picking && ce(A, a.uFixPickReverseColor, H), t && Xr(A, t, $, a.aPosition)
			},
			Pm = function(g, J, W, V) {
				zi && (V = g[zi]), g.drawArrays(V == M ? g.TRIANGLES : V, J, W);
				var D = g._renderInfo;
				D && (D.calls++, D.vertices += W, (V == M || V === g.TRIANGLES) && (D.faces += W / 3), V === g.LINES && (D.lines += W / 2))
			},
			ao = function(q, S, _, n) {
				zi && (n = q[zi]), q.drawElements(n == M ? q.TRIANGLES : n, _, q.UNSIGNED_SHORT, S == M ? 0 : 2 * S);
				var A = q._renderInfo;
				A && (A.calls++, A.vertices += _, (n == M || n === q.TRIANGLES) && (A.faces += _ / 3), n === q.LINES && (A.lines += _ / 2))
			},
			fq = function(E, e, L, m, f) {
				var j = E.ARRAY_BUFFER;
				E.bindBuffer(j, e), L && E.bufferData(j, L, E.STATIC_DRAW), m != M && E.vertexAttribPointer(m, f ? f : 3, E.FLOAT, !1, 0, 0)
			},
			Xr = function(D, t, f, X, v) {
				return f ? (hd(D, D.ARRAY_BUFFER, t, f), X != M && D.vertexAttribPointer(X, v ? v : 3, D.FLOAT, !1, 0, 0), void 0) : fq(D, t, f, X, v)
			},
			Qm = function(o, Z, d) {
				var E = o.ELEMENT_ARRAY_BUFFER;
				o.bindBuffer(E, Z), d && o.bufferData(E, d, o.STATIC_DRAW)
			},
			kl = function(k, R, c) {
				hd(k, k.ELEMENT_ARRAY_BUFFER, R, c)
			},
			hd = function(y, p, H, q) {
				var H, K = q.glBuf,
					X = y._id;
				K && (H = K[X]) && H._buf ? y.bindBuffer(p, H._buf) : (H = {
					_buf: Ee(y)
				}, y._bufPool.push(H), y.bindBuffer(p, H._buf), y.bufferData(p, q, y.STATIC_DRAW), K || (K = q.glBuf = {}), K[X] = H), H._fid = y._renderInfo.frame
			},
			ce = function(x, T, w) {
				if (w != M && T != M) {
					w = qe(w);
					var C = w.length;
					3 === C ? x.uniform3fv(T, w) : 4 === C ? x.uniform4fv(T, w) : 16 === C ? x.uniformMatrix4fv(T, !1, w) : Gc(w) ? x.uniform1i(T, w ? 1 : 0) : 2 === C ? x.uniform2fv(T, w) : x.uniform1f(T, w)
				}
			},
			Cc = function(T, v) {
				v != M && v >= 0 && T.enableVertexAttribArray(v)
			},
			jb = function(X, U) {
				U != M && U >= 0 && X.disableVertexAttribArray(U)
			},
			Dk = function(U, m) {
				var d = U.getGL(),
					H = U._prg;
				U._7O = U._8O.pop(), m && (ce(d, H.uMVMatrix, U._7O), U._6O = m, ce(d, H.uNMatrix, m))
			},
			gd = function(F, D) {
				return D || (D = nd()), Yl(D, F), xi(D), Zf(D), D
			},
			Qe = function(z, P) {
				var G = z.getGL(),
					H = z._prg,
					A = z._7O;
				P && (z._8O.push(ko(A)), Pq(A, A, P)), ce(G, H.uMVMatrix, A), ce(G, H.uNMatrix, gd(A, z._6O))
			},
			qg = function(m, j, v, K, I, k) {
				if (v) {
					if (K) {
						var r = v.value++,
							p = 2147483648 | r,
							h = [(255 & p >> 16) / 255, (255 & p >> 8) / 255, (255 & p) / 255, (255 & p >> 24) / 255];
						v[r] = {
							data: I,
							part: k
						}
					} else h = zs;
					return ce(m, j.uFixPickReverseColor, h), h
				}
			},
			eo = function() {
				var R = {
					center: function(b, Z, u, K, h) {
						var V = -Z[1] / 2,
							m = {
								x: -Z[0] / 2,
								y: V,
								width: Z[0],
								height: Z[1]
							},
							g = Dd(b, m, u);
						return [g.x + K, -g.y - h, fn()]
					},
					front: function(t, H, B, s, f) {
						var I = -H[1] / 2,
							l = {
								x: -H[0] / 2,
								y: I,
								width: H[0],
								height: H[1]
							},
							A = Dd(t, l, B);
						return [A.x + s, -A.y - f, H[2] / 2 + fn()]
					},
					back: function(X, C, $, n, K) {
						var D = -C[0] / 2,
							c = -C[1] / 2,
							w = {
								x: D,
								y: c,
								width: C[0],
								height: C[1]
							},
							E = Dd(X, w, $);
						return [-E.x - n, -E.y - K, -C[2] / 2 - fn()]
					},
					left: function(s, d, U, N, k) {
						var E = -d[1] / 2,
							l = {
								x: -d[2] / 2,
								y: E,
								width: d[2],
								height: d[1]
							},
							H = Dd(s, l, U);
						return [-d[0] / 2 - fn(), -H.y - k, H.x + N]
					},
					right: function(I, d, t, q, e) {
						var v = -d[2] / 2,
							c = -d[1] / 2,
							X = {
								x: v,
								y: c,
								width: d[2],
								height: d[1]
							},
							R = Dd(I, X, t);
						return [d[0] / 2 + fn(), -R.y - e, -R.x - q]
					},
					top: function(t, u, $, Y, F) {
						var i = {
							x: -u[0] / 2,
							y: -u[2] / 2,
							width: u[0],
							height: u[2]
						},
							B = Dd(t, i, $);
						return [B.x + Y, u[1] / 2 + fn(), B.y + F]
					},
					bottom: function(F, E, Y, e, y) {
						var h = -E[2] / 2,
							K = {
								x: -E[0] / 2,
								y: h,
								width: E[0],
								height: E[2]
							},
							o = Dd(F, K, Y);
						return [o.x + e, -E[1] / 2 - fn(), -o.y - y]
					}
				};
				return function(x, l, Y, j, F, N) {
					return R[j](x, l, Y, F || 0, N || 0)
				}
			}(),
			Ib = function(C, u, K, p, q, o, J, x, G, f) {
				if (q && (u[0] += q[0], u[1] += q[1], u[2] += q[2]), Qf(C, K), x) {
					var H = nd();
					if (hf(H, G, f), lc(u, H), Qf(C, u), C.auto = x, C.pos = lc([0, 0, 0], C), o) {
						var j = C.mat2 = nd();
						hf(j, o, J)
					}
				} else hf(C, G, f), Qf(C, u), p === $c ? jj(C, -T) : p === Oj ? jj(C, T) : p === Mr ? Rq(C, -T) : p === pb ? Rq(C, T) : p === Uj && jj(C, F), hf(C, o, J);
				return C
			},
			Rb = function(X, V) {
				var E = V.auto,
					i = V.mat2,
					Z = X.gv;
				if (E) {
					var Y, a = nd(),
						$ = [0, 0, 0, 0];
					Y = "string" == typeof E ? [E.indexOf("x") < 0 ? Z._eye[0] : Z._center[0], E.indexOf("y") < 0 ? Z._eye[1] : Z._center[1], E.indexOf("z") < 0 ? Z._eye[2] : Z._center[2]] : Z._eye, Nq($, en(nd(), Y, Z._center, Z._up)), Tr(a, oc($, $), V.pos), i && Pq(a, a, i), Qe(Z, a)
				} else Qe(Z, V)
			},
			Tj = function(M, k, z, w, i) {
				var c = M.s,
					h = M.gv,
					Y = h.getGL(),
					S = h._prg,
					_ = h._buffer,
					s = h._1O;
				hp(Y, zh, s), Rb(M, z), iq(Y, S, c(k + ".blend"), c(k + ".light"), c(k + ".opacity"), c(k + ".reverse.flip"), c(k + ".reverse.color"), c(k + ".reverse.cull")), sj(Y, S, s, i, _.uv, vm), Xr(Y, _.vs, w, S.aPosition), Xr(Y, _.ns, vl, S.aNormal), kl(Y, _.is, Ce), ao(Y, 0, Ce.length), Cr(Y, S, s), dh(Y, S), Dk(h)
			},
			Wo = function($, U, j) {
				var d = $.gv,
					t = $.data,
					p = $[U] = {
						blend: d.getBodyColor(t) || d.getFaceBlend(t, U),
						light: d.getFaceLight(t, U),
						color: d.getFaceColor(t, U),
						opacity: d.getFaceOpacity(t, U),
						transparent: d.getFaceTransparent(t, U),
						reverseFlip: d.getFaceReverseFlip(t, U),
						reverseColor: d.getFaceReverseColor(t, U),
						reverseCull: d.getFaceReverseCull(t, U),
						texture: d.getFaceImage(t, U),
						blendTexture: d.getFaceBlendImage(t, U),
						discardSelectable: d.getFaceDiscardSelectable(t, U)
					};
				if ("csg" !== U) {
					p.uv = d.getFaceUv(t, U) || j && j[U + "Uv"], p.uvScale = d.getFaceUvScale(t, U) || j && j[U + "UvScale"], p.uvOffset = d.getFaceUvOffset(t, U) || j && j[U + "UvOffset"];
					var _ = d.getFaceMat(t, U);
					_ && (p.mat = Jd(t, _))
				}
				return p
			},
			nq = function(v, d, H, x, c) {
				if (x) {
					if (!c(x.transparent)) return;
					var J = v.data,
						r = v.gv,
						L = r._buffer,
						P = r.getTexture(x.texture, J),
						e = r.getTexture(x.blendTexture, J);
					sj(d, H, P, x.discardSelectable, L.uv, x.tuv, x.uvOffset, x.uvScale, e), iq(d, H, x.blend, x.light, x.opacity, x.reverseFlip, x.reverseColor, x.reverseCull), ce(d, H.uDiffuse, x.color), Xr(d, L.vs, x.vs, H.aPosition), Xr(d, L.ns, x.ns, H.aNormal), Pm(d, 0, x.vs.length / 3), dh(d, H), Cr(d, H, P)
				}
			},
			Xh = function(A, m, H, T, s, e) {
				var V, g, f, o, v, r, y, W, j, u, C, i = [T - m, s - H],
					B = A ? A.length : 0;
				for (f = 0; B > f; f++) {
					for (o = 2, V = A[f], v = V[0], r = V[1]; o + 1 < V.length;) {
						if (y = V[o], W = V[o + 1], g = Lm(m, H, T, s, v, r, y, W, !0)) {
							j = [y - v, W - r], u = Zg(j), j[0] /= u, j[1] /= u, u = nb(i, j), u = u > 0 ? e : -e, C = [j[0] * u, j[1] * u];
							break
						}
						v = y, r = W, o += 2
					}
					if (C) break
				}
				if (C) for (T = m + C[0], s = H + C[1], f = 0; B > f; f++) for (o = 2, V = A[f], v = V[0], r = V[1]; o + 1 < V.length;) {
					if (y = V[o], W = V[o + 1], g = Lm(m, H, T, s, v, r, y, W, !0)) return [0, 0];
					v = y, r = W, o += 2
				}
				return C ? C : [T - m, s - H]
			},
			zl = d.graph3d = {},
			je = function(L, i, O) {
				De(J + ".graph3d." + L, i, O)
			},
			bh = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<wVb!>!wVs|*fsvuyfUeofmCv)gj~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVs!3dfw!hojzsbw<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUeofmCv!mppc!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
			Sl = "~~<eJ!>!spmpDhbsG`mh~<spmpDsfmqnbTwv!>+!eJ<*wVs!-sfmqnbTeofmCv)E3fsvuyfu!>!spmpDsfmqnbTwv!5dfw|!*fsvuyfUeofmCv)!gj!!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTv)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTv!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQv!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEv)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~~!<esbdtje!|!*1/1!>>!b/spmpDhbsG`mh)!gj!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~!<esbdtje!|!*utfUbiqmBv!>=!b/spmpDwv)!gj!!!!|!ftmf~~!<esbdtje!|!*1/1!>>!b/spmpDwv)!gj!!!!|!*uofsbqtobsUv)!gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<wVs!3dfw!hojzsbw<sfmqnbTeofmCv!E3sfmqnbt!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUeofmCv!mppc!nspgjov<fsvuyfUv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov<utfUbiqmBv!ubpmg!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
		vq(z, {
			setBatchInfo: function(C, l) {
				ik[C] = l
			},
			getBatchInfo: function(Y) {
				return ik[Y]
			}
		}, !0);
		var Sj = [1, 1, 1],
			Ij = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
			wf = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
			ed = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
			Pf = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
			tj = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
			Xp = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
			$p = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
			le = function(R, p) {
				Mc(R, p, "_batchModelMap", "_batchIndexMap"), gh(R, p, "_wireframeModelMap", "_wireframeIndexMap"), gh(R, p, "_polylineModelMap", "_polylineIndexMap"), gh(R, p, "_wireframeModelMapSwap", "_wireframeIndexMapSwap"), gh(R, p, "_polylineModelMapSwap", "_polylineIndexMapSwap")
			},
			Mc = function(u, b, d, X) {
				if (!b) return u[d] = {}, u[X] = {}, void 0;
				var R = b._id,
					z = u[X],
					S = z[R];
				if (S) {
					var q = u[d],
						g = S.batch,
						V = q[g],
						y = V.ds,
						O = S.index;
					if (V.invalidate = !0, delete z[R], y.splice(O, 1), yd(y)) return delete q[g], void 0;
					for (var k = S.begin, M = S.size, r = 3 * k, I = 3 * M, l = 4 * k, p = 4 * M, Z = V.vs, t = V.ps, A = V.uv, $ = V.cs, L = V.bs, i = V.rs, B = V.ns, F = V.ls; O < y.length; O++) S = z[y[O]._id], S.index--, S.begin -= M;
					Z.splice(r, I), t.splice(l, p), A && A.splice(2 * k, 2 * M), $ && $.splice(l, p), L && L.splice(r, I), i && i.splice(k, M), B && B.splice(r, I), F && F.splice(k, M)
				}
			},
			gh = Mc,
			Fe = function(s, i, S, v) {
				if (!v) return M;
				var p = i[v];
				if (!p) {
					var R = ik[v] || Kf,
						F = R.image ? [] : M;
					p = i[v] = {
						vs: [],
						ns: [],
						uv: F,
						cs: F ? M : R.color ? M : [],
						bs: R.blend ? [] : M,
						ps: [],
						rs: R.brightness ? [] : M,
						ds: []
					}
				}
				return p.invalidate = !0, s[S._id] = {
					index: p.ds.length,
					begin: p.vs.length / 3,
					batch: v
				}, p.ds.push(S), p
			},
			fe = function(n, X) {
				return X != M && 1 !== X ? [n[0] * X, n[1] * X, n[2] * X, n[3]] : n
			},
			Bc = function(R, S, b) {
				var z = R.getBrightness(S),
					d = qe(b.color || "white"),
					p = d[3] < 1,
					W = Math.ceil(b.width) || 1,
					r = (p ? "T" : "O") + W,
					x = R._wireframeIndexMap,
					B = R._wireframeModelMap,
					q = B[r];
				q || (q = B[r] = {
					vs: [],
					cs: [],
					ps: [],
					ds: [],
					T: p,
					W: W
				});
				var l, O = R.getData3dUI(S),
					V = Rg(O);
				if (b.geometry) {
					if (!V) return;
					if (l = Lp(V), !l) return
				} else l = b.short ? qp : ln;
				q.invalidate = !0;
				var A = q.vs,
					H = q.cs,
					u = q.ds,
					N = x[S._id] = {
						index: u.length,
						begin: A.length / 3,
						batch: r
					};
				u.push(S);
				var D = Jd(S, b.mat),
					m = O._calcAnchorMat(S);
				m && Pq(D, D, m), si(A, D, l);
				var Z = N.size = A.length / 3 - N.begin;
				eb(H, fe(d, z), Z)
			},
			fh = function(f, D, z, I, U, $, A, v, y) {
				var W = f.getBrightness(D);
				W == M && (W = 1);
				var u = fe(qe(I), W),
					d = u[3] < 1;
				$ = Math.ceil($) || 1;
				var w = (d ? "T" : "O") + $;
				if (A) {
					var V = A[0],
						X = (A[1] || V) + V;
					w += "-" + V + "-" + X, y && (w += "-" + Xg(y) + "-" + W, y = fe(qe(y), W))
				}
				var H = f._polylineIndexMap,
					m = f._polylineModelMap,
					k = m[w];
				k || (k = m[w] = {
					vs: [],
					cs: [],
					ps: [],
					ds: [],
					ls: A ? [] : M,
					T: d,
					W: $
				}, A && (k.D = V, k.G = X, k.A = y)), k.invalidate = !0;
				var g, Z = k.vs,
					G = k.cs,
					e = k.ds,
					x = k.ls,
					t = H[D._id] = {
						index: e.length,
						begin: Z.length / 3,
						batch: w
					};
				e.push(D), _r(Z, z);
				var _, N = t.size = Z.length / 3 - t.begin,
					C = z.length,
					i = 0,
					c = [];
				if (A || U) for (g = 0; C > g; g += 6) _ = Zg([z[g], z[g + 1], z[g + 2]], [z[g + 3], z[g + 4], z[g + 5]]), c.push(_), i += _;
				if (i && U) {
					var F, Q = fe(qe(U), W),
						L = [Q[0] - u[0], Q[1] - u[1], Q[2] - u[2], Q[3] - u[3]],
						p = 0;
					for (g = 0; C > g; g += 6) F = p / i, eb(G, [u[0] + L[0] * F, u[1] + L[1] * F, u[2] + L[2] * F, u[3] + L[3] * F], 1), p += c[g / 6], F = p / i, eb(G, [u[0] + L[0] * F, u[1] + L[1] * F, u[2] + L[2] * F, u[3] + L[3] * F], 1)
				} else eb(G, u, N);
				if (A) for (p = v || 0, g = 0; C > g; g += 6) x.push(p), p += c[g / 6], x.push(p)
			},
			ij = function(_, M, F) {
				if (M) for (var x = 4 * M.begin, X = F[M.batch].ps, R = 0; R < M.size; R++) X[x++] = _[0], X[x++] = _[1], X[x++] = _[2], X[x++] = _[3]
			},
			Rk = function(N, b) {
				var W = b + ["32"],
					p = N[b],
					s = N[W];
				p ? s && s.length === p.length ? (s.set(p), s.glBuf = null) : N[W] = new Cm(p) : delete N[W]
			},
			sp = function($, j, J, r, o, l, B, X, k) {
				if (lo(J)) J.forEach(function(t) {
					sp($, j, t, r, o, l, B, X, k)
				});
				else if (bc(J)) sp($, j, Rg(r, J), r, o, l, B, X, k);
				else if (Hj(J)) {
					var C, c = El(J.mat, j, $),
						Z = El(J.s3, j, $),
						n = El(J.t3, j, $),
						t = El(J.r3, j, $);
					if ((Z || t || n || c) && (C = Gb(c, Z, t, El(J.rotationMode, j, $), n), l.push(C)), J.shape3d) sp($, j, J.shape3d, r, o, l, B, X, J);
					else {
						var W = r.s;
						k = k || Kf;
						var u = l[0],
							V = l.length,
							x = W("shape3d.color", J.color, k.color);
						if (o || (o = W("shape3d.blend", J.blend, k.blend)), V > 1) {
							u = ko(u);
							for (var T = 1; V > T; T++) Pq(u, u, l[T])
						}
						J.vs && W(Bm, J.visible, k.visible) && br(u, B, X, J.vs, J.uv, J.is, o, x), J.top_vs && W(Oe, J.topVisible, k.topVisible) && br(u, B, X, J.top_vs, J.top_uv, J.top_is, o, W("shape3d.top.color", J.topColor, k.topColor) || x), J.bottom_vs && W(Lh, J.bottomVisible, k.bottomVisible) && br(u, B, X, J.bottom_vs, J.bottom_uv, J.bottom_is, o, W("shape3d.bottom.color", J.bottomColor, k.bottomColor) || x), J.from_vs && W(xc, J.fromVisible, k.fromVisible) && br(u, B, X, J.from_vs, J.from_uv, J.from_is, o, W("shape3d.from.color", J.fromColor, k.fromColor) || x), J.to_vs && W(ph, J.toVisible, k.toVisible) && br(u, B, X, J.to_vs, J.to_uv, J.to_is, o, W("shape3d.to.color", J.toColor, k.toColor) || x)
					}
					C && l.pop()
				}
			},
			br = function(B, b, W, i, D, d, E, Q) {
				var p, $ = b.cs,
					u = b.uv,
					o = b.bs;
				if (d) {
					p = d.length;
					for (var M = 0; p > M; M++) {
						var a = d[M];
						si(W, B, [i[3 * a], i[3 * a + 1], i[3 * a + 2]]), u && _r(u, [D[2 * a], D[2 * a + 1]])
					}
				} else p = i.length / 3, si(W, B, i), u && _r(u, D);
				$ && eb($, Q, p), o && (E ? ts(o, E, p) : _r(o, Sj, p))
			},
			Zq = function(z, m, R, U) {
				var D = [];
				U ? sp(z.gv, z.data, U, z, z.getBodyColor(), [m], R, D) : (ws(z, $c, m, R, D), ws(z, Oj, m, R, D), ws(z, Km, m, R, D), ws(z, Uj, m, R, D), ws(z, Mr, m, R, D), ws(z, pb, m, R, D), ws(z, "csg", m, R, D)), D.length && (_r(R.vs, D), _r(R.ns, Mq(D)))
			},
			ws = function(m, Y, V, I, k) {
				var G = m[Y];
				if (G) {
					var F = G.tuv;
					if (F) {
						var e, r, B, W, C = G.uvScale,
							o = G.uvOffset;
						if (C) for (e = F.length, r = C[0], B = C[1], W = 0; e > W; W += 2) F[W] *= r, F[W + 1] *= B;
						if (o) for (e = F.length, r = o[0], B = o[1], W = 0; e > W; W += 2) F[W] += r, F[W + 1] += B
					}
					br(V, I, k, G.vs, F, M, G.blend, G.color)
				}
			},
			Ho = function(W, C, P, S, R, X, L, O) {
				var b, s = P.cs,
					k = P.uv,
					t = P.bs;
				if (W.getFaceVisible(C, X)) {
					var J = W.getFaceMat(C, X);
					if (J && (R = Jd(C, J)), si(L, R, O), s && eb(s, W.getFaceColor(C, X), 6), k) {
						var H = W.getFaceUv(C, X) || S[X + "Uv"],
							m = W.getFaceUvScale(C, X) || S[X + "UvScale"],
							n = W.getFaceUvOffset(C, X) || S[X + "UvOffset"];
						H = H ? [H[6], H[7], H[0], H[1], H[2], H[3], H[2], H[3], H[4], H[5], H[6], H[7]] : Ij;
						var Z = H[0],
							j = H[1],
							A = H[2],
							F = H[3],
							_ = H[4],
							U = H[5],
							V = H[6],
							e = H[7],
							p = H[8],
							u = H[9],
							v = H[10],
							z = H[11];
						if (m) {
							var r = m[0],
								c = m[1];
							Z *= r, j *= c, A *= r, F *= c, _ *= r, U *= c, V *= r, e *= c, p *= r, u *= c, v *= r, z *= c
						}
						if (n) {
							var B = n[0],
								d = n[1];
							Z += B, j += d, A += B, F += d, _ += B, U += d, V += B, e += d, p += B, u += d, v += B, z += d
						}
						k.push(Z, j, A, F, _, U, V, e, p, u, v, z)
					}
					t && (b = W.getBodyColor(C) || W.getFaceBlend(C, X), b ? ts(t, b, 6) : _r(t, Sj, 6))
				}
			},
			If = function(u, H, U, F) {
				var $ = u.getGL(),
					h = u._prg,
					G = u._buffer;
				if (!ei(H)) {
					Qe(u), Ne($, h);
					for (var i in H) {
						var m = H[i];
						if (!(F && !m.T || !F && m.T)) {
							m.invalidate ? (m.invalidate = !1, Rk(m, "vs"), Rk(m, "cs"), Rk(m, "ls"), Rk(m, "ps")) : U && Rk(m, "ps");
							var S = m.vs32,
								a = U ? m.ps32 : m.cs32;
							mc($, h, m.W, M, G.vs, S);
							var C = m.D,
								J = !u._dashDisabled && C;
							ce($, h.uAlphaTest, e.alphaTest), J && (ce($, h.uDash, !0), ce($, h.uDashDistance, C), ce($, h.uDashGapDistance, m.G), Cc($, h.aLineDistance), Xr($, G.lineDistance, m.ls32, h.aLineDistance, 1), ce($, h.uDiffuse, m.A || xe));
							var K = !u._batchColorDisabled;
							K && (ce($, h.uBatchColor, !0), Cc($, h.aBatchColor), Xr($, G.batchColor, a, h.aBatchColor, 4)), sj($), Pm($, 0, S.length / 3, $.LINES), Cr($), K && (ce($, h.uBatchColor, !1), jb($, h.aBatchColor)), J && (ce($, h.uDash, !1), jb($, h.aLineDistance))
						}
					}
					Ad($, h)
				}
			},
			qf = function(m, z, R) {
				var J, C, j, b, N, n, q, P, x, _, S, H = m.getGL(),
					o = m._prg,
					f = m._buffer,
					u = m._batchModelMap;
				if (!ei(u)) {
					Qe(m);
					for (J in u) if (C = ik[J] || Kf, !(R && !C.transparent || !R && C.transparent) && (j = u[J], z || !C.transparentMask)) {
						var W = R && C.autoSort !== !1 && (m._33Q || j.invalidate);
						if (j.invalidate ? (j.invalidate = !1, Rk(j, "vs"), Rk(j, "ns"), Rk(j, "cs"), Rk(j, "rs"), Rk(j, "ps"), Rk(j, "bs"), Rk(j, "uv")) : z && Rk(j, "ps"), N = j.vs32, n = z ? j.ps32 : j.cs32, x = j.uv32, q = j.bs32, P = j.rs32, S = N.length / 3, W && (j.is = wi(N, m.getEye())), S) {
							b = C.light, _ = m.getTexture(C.image), iq(H, o, M, C.light, C.opacity, C.reverseFlip, C.reverseColor, C.reverseCull), n ? m._batchColorDisabled || (ce(H, o.uBatchColor, !0), Cc(H, o.aBatchColor), Xr(H, f.batchColor, n, o.aBatchColor, 4)) : ce(H, o.uDiffuse, C.color);
							var A = C.alphaTest;
							ce(H, o.uAlphaTest, A === r ? e.alphaTest : A);
							var L = q && !m._batchBlendDisabled;
							L && (ce(H, o.uBatchBlend, !0), Cc(H, o.aBatchBlend), Xr(H, f.batchBlend, q, o.aBatchBlend));
							var c = P && !m._batchBrightnessDisabled;
							c && (ce(H, o.uBatchBrightness, !0), Cc(H, o.aBatchBrightness), Xr(H, f.batchBrightness, P, o.aBatchBrightness, 1)), x ? sj(H, o, _, C.discardSelectable, f.uv, x, C.uvOffset, C.uvScale) : sj(H), Xr(H, f.vs, N, o.aPosition), Xr(H, f.ns, j.ns32, o.aNormal), j.is ? (Qm(H, f.is, j.is), ao(H, 0, S)) : Pm(H, 0, S), x ? Cr(H, o, _) : Cr(H), n && !m._batchColorDisabled && (ce(H, o.uBatchColor, !1), jb(H, o.aBatchColor)), L && (ce(H, o.uBatchBlend, !1), jb(H, o.aBatchBlend)), c && (ce(H, o.uBatchBrightness, !1), jb(H, o.aBatchBrightness)), dh(H, o)
						}
					}
				}
			},
			wi = function(A, j) {
				for (var e = A.length / 3, Y = new Array(e), F = e / 3, x = new Array(F), U = 0; F > U; U++) x[U] = U;
				x.sort(function(s, x) {
					var h = 9 * s,
						O = [(A[h] + A[h + 3] + 2 * A[h + 6]) / 4, (A[h + 1] + A[h + 4] + 2 * A[h + 7]) / 4, (A[h + 2] + A[h + 5] + 2 * A[h + 8]) / 4];
					h = 9 * x;
					var D = [(A[h] + A[h + 3] + 2 * A[h + 6]) / 4, (A[h + 1] + A[h + 4] + 2 * A[h + 7]) / 4, (A[h + 2] + A[h + 5] + 2 * A[h + 8]) / 4],
						K = Zg(j, O) - Zg(j, D);
					return K > 0 ? -1 : 0 > K ? 1 : 0
				});
				for (var U = 0; F > U; U++) {
					var b = 3 * U,
						O = 3 * x[U];
					Y[b] = O, Y[b + 1] = O + 1, Y[b + 2] = O + 2
				}
				return new ps(Y)
			};
		z.handleModelLoaded = function() {}, z.handleUnfoundModel = function() {};
		var tq = M,
			ls = M,
			Tb = function(w) {
				tq && !w._loadingModelView_ && (ls || (ls = {}), ls[w._loadingModelView_ = zj()] = w)
			},
			Fi = function(m, Q) {
				tq || (tq = {});
				var P = tq[m];
				if (P) {
					if (P.url === Q) return;
					P.request.onload = Wl, P.request.onerror = Wl
				}
				var J = new XMLHttpRequest;
				if (tq[m] = {
					request: J,
					url: Q
				}, J.overrideMimeType && J.overrideMimeType("text/plain"), Q = z.beforeLoadURL(Q), Q.data) {
					var L = z.parse(Q.data);
					nk(m, L, Q)
				} else J.open("GET", encodeURI(Q), !0), J.onload = function(H) {
					if (200 === this.status || 0 === this.status) {
						var X = z.parse(H.target.response || H.target.responseText);
						nk(m, X, Q)
					} else pf(m, z.handleUnfoundModel(m, Q) || M)
				}, J.onerror = function() {
					pf(m, z.handleUnfoundModel(m, Q) || M)
				}, J.send(null)
			},
			nk = function(g, w, Y) {
				var c = w.modelType;
				if (c) if ("obj" === c) {
					var h = {
						mat: w.mat,
						s3: w.s3,
						r3: w.r3,
						rotationMode: w.rotationMode,
						t3: w.t3,
						cube: w.cube == M ? !0 : w.cube,
						center: w.center == M ? !0 : w.center,
						ignoreMtls: w.ignoreMtls,
						ignoreTransparent: w.ignoreTransparent,
						ignoreColor: w.ignoreColor,
						ignoreImage: w.ignoreImage,
						ignoreNormal: w.ignoreNormal,
						prefix: w.prefix,
						flipY: w.flipY,
						flipFace: w.flipFace,
						reverseFlipMtls: w.reverseFlipMtls,
						finishFunc: function(C, l) {
							if (C) {
								var l = [];
								for (var j in C) {
									var o = C[j];
									l.rawS3 = o.rawS3, l.push(o), w.eachModel && w.eachModel(j, o)
								}
								l.json = w, pf(g, l), z.handleModelLoaded(g, l)
							} else pf(g, z.handleUnfoundModel(g, Y) || M)
						}
					};
					z.loadObj(w.obj, w.mtl, h)
				} else pf(g, z.handleUnfoundModel(g, Y) || M);
				else pf(g, w), z.handleModelLoaded(g, w)
			},
			pf = function(C, Y) {
				if (Qp[C] = Y, delete tq[C], ei(tq) && (tq = M, ls)) {
					for (var A in ls) {
						var t = ls[A];
						t._2O && (t._2O = {}), t.invalidateAll && t.invalidateAll(r, "modelLoaded", C), t.redraw && t.redraw(), t.iv(), delete t._loadingModelView_
					}
					ls = M
				}
				if (Y && ls) for (var A in ls) {
					var t = ls[A];
					t.invalidateAll && t.invalidateAll(r, "modelLoading", C), t.redraw && t.redraw(), t.iv()
				}
			},
			vm = new Cm([0, 0, 0, 1, 1, 1, 1, 0]),
			vl = new Cm([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
			Ce = new ps([0, 1, 2, 2, 3, 0]),
			Gd = new Cm([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
			Dj = new ps([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
			Pd = new Cm([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
			Ur = Mq(Gd, Dj),
			ln = (new Cm([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new ps([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
			qp = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
			Fo = function(B, H, R, X, O, d) {
				d = d || 16, B = B || 16, H = H || 0, R = R || B;
				var Z, m, P, V, z, J, A, n, b = .5,
					q = [],
					i = [],
					p = o / B,
					a = F / d;
				for (Z = 0; d > Z; Z++) for (z = Z + 1, V = Z * a, n = z * a, m = H; R > m; m++) J = m + 1, P = m * p, A = J * p, q.push(b * C(V) * K(P), b * K(V), -b * C(V) * C(P), b * C(n) * K(A), b * K(n), -b * C(n) * C(A), b * C(V) * K(A), b * K(V), -b * C(V) * C(A), b * C(V) * K(P), b * K(V), -b * C(V) * C(P), b * C(n) * K(P), b * K(n), -b * C(n) * C(P), b * C(n) * K(A), b * K(n), -b * C(n) * C(A)), i.push(m / B, Z / d, J / B, z / d, J / B, Z / d, m / B, Z / d, m / B, z / d, J / B, z / d);
				if (X) {
					var j = [],
						L = [];
					for (P = H * p, Z = 0; d > Z; Z++) z = Z + 1, V = Z * a, n = z * a, j.push(0, 0, 0, b * C(n) * K(P), b * K(n), -b * C(n) * C(P), b * C(V) * K(P), b * K(V), -b * C(V) * C(P)), L.push(0, .5, H / B, z / d, H / B, Z / d)
				}
				if (O) {
					var x = [],
						h = [];
					for (P = R * p, Z = 0; d > Z; Z++) z = Z + 1, V = Z * a, n = z * a, x.push(0, 0, 0, b * C(V) * K(P), b * K(V), -b * C(V) * C(P), b * C(n) * K(P), b * K(n), -b * C(n) * C(P)), h.push(1, .5, R / B, Z / d, R / B, z / d)
				}
				return {
					vs: q,
					uv: i,
					from_vs: j,
					from_uv: L,
					to_vs: x,
					to_uv: h
				}
			},
			Po = function(b, n, s) {
				b = b || .17, n = n || 12, s = s || 18, 0 > b ? b = 0 : b > .25 && (b = .25);
				var W, y, p, i, M, O, k, Z = .5,
					l = [],
					X = [],
					E = [],
					U = o / s,
					c = o / n,
					e = Z - b;
				for (y = 0; n >= y; y++) for (i = -F + y * c, O = K(i), M = C(i), W = 0; s >= W; W++) p = W * U, k = e + b * O, l.push(K(p) * k, M * b, -C(p) * k), X.push(W / s, 1 - y / n);
				for (y = 0; n > y; y++) {
					var H = y * (s + 1),
						P = (y + 1) * (s + 1);
					for (W = 0; s > W; W++) E.push(H + W, P + W + 1, P + W, H + W, H + W + 1, P + W + 1)
				}
				return {
					vs: l,
					uv: X,
					is: E
				}
			},
			$o = function(O, R, X, G, s, W, L) {
				L = L || 12, O = O || 18, R = R || 0, X = X || O, W = W || .17, 0 > W ? W = 0 : W > .25 && (W = .25);
				var j, w, d, N, n, P, e, q, V, Q, b = .5,
					H = [],
					c = [],
					g = o / O,
					u = o / L,
					l = b - W;
				for (d = 0; L > d; d++) for (N = d + 1, e = -F + d * u, q = -F + N * u, j = R; X > j; j++) w = j + 1, n = j * g, P = w * g, V = l + W * K(e), Q = l + W * K(q), H.push(K(n) * V, C(e) * W, -C(n) * V, K(P) * V, C(e) * W, -C(P) * V, K(P) * Q, C(q) * W, -C(P) * Q, K(n) * V, C(e) * W, -C(n) * V, K(P) * Q, C(q) * W, -C(P) * Q, K(n) * Q, C(q) * W, -C(n) * Q), c.push(j / O, 1 - d / L, w / O, 1 - d / L, w / O, 1 - N / L, j / O, 1 - d / L, w / O, 1 - N / L, j / O, 1 - N / L);
				if (G) {
					var Y = [],
						m = [];
					for (d = 0; L > d; d++) N = d + 1, e = -F + d * u, q = -F + N * u, n = R * g, V = l + W * K(e), Q = l + W * K(q), Y.push(K(n) * V, C(e) * W, -C(n) * V, K(n) * Q, C(q) * W, -C(n) * Q, K(n) * l, 0, -C(n) * l), m.push(.5 + .5 * K(e), .5 - .5 * C(e), .5 + .5 * K(q), .5 - .5 * C(q), .5, .5)
				}
				if (s) {
					var _ = [],
						p = [];
					for (d = 0; L > d; d++) N = d + 1, e = -F + d * u, q = -F + N * u, n = X * g, V = l + W * K(e), Q = l + W * K(q), _.push(K(n) * V, C(e) * W, -C(n) * V, K(n) * l, 0, -C(n) * l, K(n) * Q, C(q) * W, -C(n) * Q), p.push(.5 - .5 * K(e), .5 - .5 * C(e), .5, .5, .5 - .5 * K(q), .5 - .5 * C(q))
				}
				return {
					vs: H,
					uv: c,
					from_vs: Y,
					from_uv: m,
					to_vs: _,
					to_uv: p
				}
			},
			tc = function(j, i) {
				for (var P, s, H, D = .5, v = 16, Y = [], u = [], I = [], e = o / v, V = 0; v >= V; V++) P = V * e, s = K(P) * D, H = C(P) * D, Y.push(s, -D, H, s, D, H), u.push(1 - V / v, 1, 1 - V / v, 0);
				for (V = 0; v > V; V++) I.push(2 * V, 2 * V + 1, 2 * V + 3, 2 * V, 2 * V + 3, 2 * V + 2);
				if (i) {
					var Q = [],
						q = [],
						F = [];
					for (Q.push(0, -D, 0), q.push(.5, .5), V = 0; v >= V; V++) P = V * e, s = K(P), H = C(P), Q.push(s * D, -D, -H * D), q.push(.5 + .5 * s, .5 + .5 * H);
					for (V = 0; v > V; V++) F.push(0, V + 2, V + 1)
				}
				if (j) {
					var r = [],
						m = [],
						a = [];
					for (r.push(0, D, 0), m.push(.5, .5), V = 0; v >= V; V++) P = V * e, s = K(P), H = C(P), r.push(s * D, D, -H * D), m.push(.5 + .5 * s, .5 - .5 * H);
					for (V = 0; v > V; V++) a.push(0, V + 1, V + 2)
				}
				return {
					vs: Y,
					uv: u,
					is: I,
					bottom_vs: Q,
					bottom_uv: q,
					bottom_is: F,
					top_vs: r,
					top_uv: m,
					top_is: a
				}
			},
			Cl = function(e, H, m, S, d, l, U) {
				e = e || 12, H = H || 0, m = m || e;
				for (var t, Z, P, M, R, c, F, J, v = .5, q = [], j = [], r = o / e, g = H; m > g; g++) t = g + 1, Z = g * r, P = t * r, M = K(Z) * v, R = C(Z) * v, c = K(P) * v, F = C(P) * v, q.push(M, -v, -R, c, -v, -F, M, v, -R, c, -v, -F, c, v, -F, M, v, -R), j.push(g / e, 1, t / e, 1, g / e, 0, t / e, 1, t / e, 0, g / e, 0);
				if (U) {
					var a = [],
						D = [];
					for (g = H; m > g; g++) Z = r * g, P = r * (g + 1), M = K(Z), R = C(Z), c = K(P), F = C(P), a.push(M * v, -v, -R * v, 0, -v, 0, c * v, -v, -F * v), D.push(.5 + .5 * M, .5 + .5 * R, .5, .5, .5 + .5 * c, .5 + .5 * F)
				}
				if (l) {
					var Q = [],
						W = [];
					for (g = H; m > g; g++) Z = r * g, P = r * (g + 1), M = K(Z), R = C(Z), c = K(P), F = C(P), Q.push(M * v, v, -R * v, c * v, v, -F * v, 0, v, 0), W.push(.5 + .5 * M, .5 - .5 * R, .5 + .5 * c, .5 - .5 * F, .5, .5)
				}
				if (S) {
					var p = [],
						L = [];
					Z = r * H, M = K(Z) * v, R = C(Z) * v, J = H / e, p.push(0, v, 0, 0, -v, 0, M, -v, -R, M, -v, -R, M, v, -R, 0, v, 0), L.push(0, 0, 0, 1, J, 1, J, 1, J, 0, 0, 0)
				}
				if (d) {
					var A = [],
						O = [];
					Z = r * m, M = K(Z) * v, R = C(Z) * v, J = m / e, A.push(0, -v, 0, 0, v, 0, M, v, -R, M, v, -R, M, -v, -R, 0, -v, 0), O.push(1, 1, 1, 0, J, 0, J, 0, J, 1, 1, 1)
				}
				return {
					vs: q,
					uv: j,
					bottom_vs: a,
					bottom_uv: D,
					top_vs: Q,
					top_uv: W,
					from_vs: p,
					from_uv: L,
					to_vs: A,
					to_uv: O
				}
			},
			Uf = function($, c, f, g, i) {
				c = c || 18, f = f || 0, g = g == M ? o : g, i = i == M ? .5 : i;
				for (var S, N, j, A, w, L, W = [0, .5, .75, .875, .9375], Y = [], P = [], v = [], d = g / c, O = 0; O < W.length; O++) {
					var _ = 0 === O % 2 ? 0 : .5;
					for (S = 0; c >= S; S++) N = (S + _) * d + f, j = 1 - W[O], Y.push(K(N) * i * j, -i + 2 * W[O] * i, -C(N) * i * j), P.push((S + _) / c, j)
				}
				for (O = 0; O < W.length - 1; O++) {
					var k = O * (c + 1),
						J = (O + 1) * (c + 1);
					for (S = 0; c > S; S++) v.push(k + S, J + S + 1, J + S, k + S, k + S + 1, J + S + 1)
				}
				for (L = Y.length / 3 - (c + 1), S = 0; c > S; S++) Y.push(0, i, 0), P.push((S + .5) / c, 0);
				for (S = 0; c > S; S++) v.push(L + S, L + S + 1, L + (c + 1) + S);
				if ($) {
					var U = [],
						h = [],
						p = [];
					for (U.push(0, -i, 0), h.push(.5, .5), S = 0; c >= S; S++) N = S * d + f, A = K(N), w = C(N), U.push(A * i, -i, -w * i), h.push(.5 + .5 * A, .5 + .5 * w);
					for (S = 0; c > S; S++) p.push(0, S + 2, S + 1)
				}
				return {
					vs: Y,
					uv: P,
					is: v,
					bottom_vs: U,
					bottom_uv: h,
					bottom_is: p
				}
			},
			Sk = function(Z, s, n, S, W, M) {
				Z = Z || 16, s = s || 0, n = n || Z;
				for (var z = .5, k = [], I = [], G = o / Z, d = s; n > d; d++) {
					var p = d + 1,
						r = G * d,
						L = G * p;
					k.push(K(r) * z, -z, -C(r) * z, K(L) * z, -z, -C(L) * z, 0, z, 0), I.push(d / Z, 1, p / Z, 1, (d + p) / 2 / Z, 0)
				}
				if (M) {
					var U = [],
						F = [];
					for (d = s; n > d; d++) {
						r = G * d, L = G * (d + 1);
						var v = K(r),
							a = C(r),
							B = K(L),
							u = C(L);
						U.push(v * z, -z, -a * z, 0, -z, 0, B * z, -z, -u * z), F.push(.5 + .5 * v, .5 + .5 * a, .5, .5, .5 + .5 * B, .5 + .5 * u)
					}
				}
				if (S) {
					var m = [],
						$ = [];
					r = G * s, m.push(0, z, 0, 0, -z, 0, K(r) * z, -z, -C(r) * z), $.push(0, 0, 0, 1, s / Z, 1)
				}
				if (W) {
					var N = [],
						f = [];
					r = G * n, N.push(0, -z, 0, 0, z, 0, K(r) * z, -z, -C(r) * z), f.push(1, 1, 1, 0, n / Z, 1)
				}
				return {
					vs: k,
					uv: I,
					bottom_vs: U,
					bottom_uv: F,
					from_vs: m,
					from_uv: $,
					to_vs: N,
					to_uv: f
				}
			},
			fs = function(t, D, V, e, v, S, d, X) {
				for (var $ = [], i = 0; i < t.length - 1; i += 2) $.push({
					x: t[i],
					y: t[i + 1]
				});
				return Yi($, D, V, e, v, S, d, X, !1)
			},
			Ec = {
				roundRect: function(X, P) {
					return fs([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], X, P, 3)
				},
				star: function(A, d) {
					return fs([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], A, d)
				},
				rect: function(k, b) {
					return fs([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], k, b)
				},
				billboard: function() {
					return {
						vs: [-.5, .5, 0, -.5, -.5, 0, .5, .5, 0, .5, .5, 0, -.5, -.5, 0, .5, -.5, 0],
						uv: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
						ns: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
					}
				},
				plane: function() {
					return {
						vs: [-.5, 0, -.5, -.5, 0, .5, .5, 0, -.5, .5, 0, -.5, -.5, 0, .5, .5, 0, .5],
						uv: [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
						ns: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
					}
				},
				triangle: function(L, b) {
					return fs([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], L, b)
				},
				rightTriangle: function(x, W) {
					return fs([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], x, W)
				},
				parallelogram: function(N, X) {
					return fs([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], N, X)
				},
				trapezoid: function(y, t) {
					return fs([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], y, t)
				}
			},
			Ii = {
				sphere: 1,
				cylinder: 1,
				cone: 1,
				torus: 1
			},
			lb = {
				torus: 1,
				sphere: 1
			},
			Oc = vq(Hg(Ec), {
				cylinder: 1
			}),
			Jm = vq(Hg(Ec), {
				cylinder: 1,
				cone: 1
			}),
			eh = function(G, d, a) {
				var P, v = El(G.mat, a, d),
					j = El(G.s3, a, d),
					o = El(G.t3, a, d),
					u = El(G.r3, a, d);
				return (j || u || o || v) && (P = ko(d._6O), Qe(d, Gb(v, j, u, El(G.rotationMode, a, d), o))), P
			},
			Dh = function(K, c, R, l, e, F, o) {
				if (lo(R)) R.forEach(function(d) {
					Dh(K, c, d, l, e, F, o)
				});
				else if (bc(R)) Dh(K, c, Rg(l, R), l, e, F, o);
				else if (Hj(R)) if (R.shape3d) {
					var k = eh(R, K, c);
					Dh(K, c, R.shape3d, l, e, F, R), k && Dk(K, k)
				} else il(K, c, R, l.s, e, F, o)
			},
			il = function(p, T, I, t, s, U, G) {
				if (G = G || Kf, !U || U(t("shape3d.transparent", I.transparent, G.transparent))) {
					var f = eh(I, p, T);
					Im(I);
					var j = p._26I,
						N = p._prg,
						P = p._buffer,
						h = t("shape3d.color", I.color, G.color);
					s || (s = t("shape3d.blend", I.blend, G.blend));
					var i, v = I.opacity == M ? G.opacity : I.opacity,
						u = t("shape3d.opacity");
					i = u != M && v != M ? v * u : v != M ? v : u, iq(j, N, s, t("shape3d.light", I.light, G.light), i, t("shape3d.reverse.flip", I.reverseFlip, G.reverseFlip), t("shape3d.reverse.color", I.reverseColor, G.reverseColor), t("shape3d.reverse.cull", I.reverseCull, G.reverseCull)), I.vs && t(Bm, I.visible, G.visible) && Qn(j, N, P, h, p.getTexture(t("shape3d.image", I.image, G.image), T), t("shape3d.discard.selectable", I.discardSelectable, G.discardSelectable), I.vs, I.uv, I.ns, I.is, t("shape3d.uv.offset", I.uvOffset, G.uvOffset), t("shape3d.uv.scale", I.uvScale, G.uvScale)), I.top_vs && t(Oe, I.topVisible, G.topVisible) && Qn(j, N, P, t("shape3d.top.color", I.topColor, G.topColor) || h, p.getTexture(t("shape3d.top.image", I.topImage, G.topImage), T), t("shape3d.top.discard.selectable", I.topDiscardSelectable, G.topDiscardSelectable), I.top_vs, I.top_uv, I.top_ns, I.top_is, t("shape3d.top.uv.offset", I.topUvOffset, G.topUvOffset), t("shape3d.top.uv.scale", I.topUvScale, G.topUvScale)), I.bottom_vs && t(Lh, I.bottomVisible, G.bottomVisible) && Qn(j, N, P, t("shape3d.bottom.color", I.bottomColor, G.bottomColor) || h, p.getTexture(t("shape3d.bottom.image", I.bottomImage, G.bottomImage), T), t("shape3d.bottom.discard.selectable", I.bottomDiscardSelectable, G.bottomDiscardSelectable), I.bottom_vs, I.bottom_uv, I.bottom_ns, I.bottom_is, t("shape3d.bottom.uv.offset", I.bottomUvOffset, G.bottomUvOffset), t("shape3d.bottom.uv.scale", I.bottomUvScale, G.bottomUvScale)), I.from_vs && t(xc, I.fromVisible, G.fromVisible) && Qn(j, N, P, t("shape3d.from.color", I.fromColor, G.fromColor) || h, p.getTexture(t("shape3d.from.image", I.fromImage, G.fromImage), T), t("shape3d.from.discard.selectable", I.fromDiscardSelectable, G.fromDiscardSelectable), I.from_vs, I.from_uv, I.from_ns, I.from_is, t("shape3d.from.uv.offset", I.fromUvOffset, G.fromUvOffset), t("shape3d.from.uv.scale", I.fromUvScale, G.fromUvScale)), I.to_vs && t(ph, I.toVisible, G.toVisible) && Qn(j, N, P, t("shape3d.to.color", I.toColor, G.toColor) || h, p.getTexture(t("shape3d.to.image", I.toImage, G.toImage), T), t("shape3d.to.discard.selectable", I.toDiscardSelectable, G.toDiscardSelectable), I.to_vs, I.to_uv, I.to_ns, I.to_is, t("shape3d.to.uv.offset", I.toUvOffset, G.toUvOffset), t("shape3d.to.uv.scale", I.toUvScale, G.toUvScale)), dh(j, N), f && Dk(p, f)
				}
			},
			Qn = function(t, T, m, N, M, i, g, k, G, K, r, l) {
				g && (ce(t, T.uDiffuse, N), k ? sj(t, T, M, i, m.uv, k, r, l) : sj(t), Xr(t, m.vs, g, T.aPosition), Xr(t, m.ns, G, T.aNormal), K ? (kl(t, m.is, K), ao(t, 0, K.length)) : Pm(t, 0, g.length / 3), k ? Cr(t, T, M) : Cr(t))
			},
			Rg = function(j, m) {
				var q = j.s;
				if (m || (m = q(ok)), !m) return M;
				var g = jo(m);
				if (g) return g;
				if ("text" === m) {
					var t = {
						amount: q("shape3d.text.amount"),
						size: q("shape3d.text.size"),
						font: q("shape3d.text.font"),
						style: q("shape3d.text.style"),
						weight: q("shape3d.text.weight"),
						fill: q("shape3d.text.fill"),
						curveSegments: q("shape3d.text.curveSegments"),
						spacing: q("shape3d.text.spacing")
					},
						w = j.gv.getShape3dText(j.data),
						O = w;
					for (var T in t) O += "_" + (t[T] === r ? "U" : t[T]);
					return j._cachedTextKey === O ? j._cachedTextGeometry : (j._cachedTextKey = O, j._cachedTextGeometry = z.createTextGeometry(w, t))
				}
				var T = m;
				if (Ii[m]) {
					var X = q("shape3d.side"),
						e = q("shape3d.side.from"),
						k = q("shape3d.side.to"),
						U = q(xc),
						n = q(ph);
					3 > X ? (X = 0, e = 0, k = 0, U = !1, n = !1) : ((e == M || 0 > e) && (e = 0), (k == M || k > X) && (k = X), 0 === e && k === X && (U = !1, n = !1)), T += "-" + X + "-" + e + "-" + k + "-" + U + "-" + n
				}
				if (Oc[m]) {
					var i = q(Oe);
					T += "-" + i
				}
				if (Jm[m]) {
					var Q = q(Lh);
					T += "-" + Q
				}
				if ("torus" === m) {
					var R = q("shape3d.torus.radius");
					0 > R ? R = 0 : R > .25 && (R = .25), T += "-" + R
				}
				if (lb[m]) {
					var o = q(Mk);
					T += "-" + o
				}
				return g = ef[T], g || ("box" === m ? g = z.createBoxModel() : Ec[m] ? g = Ec[m](i, Q) : "sphere" === m ? g = z.createSphereModel(X, e, k, U, n, o) : m === pq ? g = z.createCylinderModel(X, e, k, U, n, i, Q) : "cone" === m ? g = z.createConeModel(X, e, k, U, n, Q) : "torus" === m && (g = z.createTorusModel(X, e, k, U, n, R, o)), ef[T] = g), g
			},
			Im = function() {
				var V = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
					C = ["is", "top_is", "bottom_is", "from_is", "to_is"];
				return m = Rf(bh.substr(bh.indexOf("^#") + 2)), is(z[Hh(In + V[15] + "n" + V[16])]()) && tg() ?
				function(k) {
					k && !k._complete_ && (k._complete_ = !0, k.vs && yd(k.ns) && (k.ns = Mq(k.vs, k.is)), k.top_vs && yd(k.top_ns) && (k.top_ns = Mq(k.top_vs, k.top_is)), k.bottom_vs && yd(k.bottom_ns) && (k.bottom_ns = Mq(k.bottom_vs, k.bottom_is)), k.from_vs && yd(k.from_ns) && (k.from_ns = Mq(k.from_vs, k.from_is)), k.to_vs && yd(k.to_ns) && (k.to_ns = Mq(k.to_vs, k.to_is)), V.forEach(function(Z) {
						var O = k[Z];
						lo(O) && (k[Z] = new Cm(O))
					}), C.forEach(function(o) {
						var c = k[o];
						lo(c) && (k[o] = new ps(c))
					}))
				} : void 0
			}(),
			Sf = function(Q, j) {
				var f = Q[j];
				lo(f) && (Q[j] = new Cm(f))
			};
		vq(vb, {
			_25Q: function($) {
				$._16O = function(M, S, b, A, g, K, P, s, J) {
					var U = this.info;
					if (U) {
						var f, u, D, a, Z, V, m = nd();
						if (qn[S] ? (f = U.p3, u = U.c1, D = U.c2) : Fn[S] ? (u = U.s1 || U.c1, D = U.s2 || U.c2) : (u = U.t1 || U.c1, D = U.t2 || U.c2), f) V = eo(S, Rr, b, A, s, J);
						else {
							var p = Yg(D, u),
								o = Zg(u, D);
							a = [0, -G(p[2], p[0]), c(p[1] / o)], Z = "zyx", f = [(u[0] + D[0]) / 2, (u[1] + D[1]) / 2, (u[2] + D[2]) / 2], V = eo(S, [o, 0, 0], b, A, s, J)
						}
						return Ib(m, V, f, A, g, K, P, M, a, Z)
					}
					return Tl
				}, $._80o = function(q, j, t) {
					var r = this,
						o = r.shapeModel;
					if (o) {
						var e = r.gv;
						Qe(e), Dh(e, r.data, o, r, r.getBodyColor(), t)
					}
				}, $.createLineModel = function(r, Q, i, R, V) {
					for (var d = this, u = d.s, j = Mo(r, Q, u(Mk)), b = [], c = 0; c < j.length; c++) {
						var F = j[c],
							P = F.length;
						if (P > 1) {
							var l = F[0];
							b.push(l.x, l.y, l.z);
							for (var K = 1; P - 1 > K; K++) l = F[K], b.push(l.x, l.y, l.z), b.push(l.x, l.y, l.z);
							l = F[P - 1], b.push(l.x, l.y, l.z)
						}
					}
					var n, $, y, E = u(R + ".color"),
						O = u(V),
						Y = 0;
					return O && ($ = u(V + ".color"), n = u(V + ".pattern"), Y = u(V + ".offset"), y = E), fh(d.gv, d.data, b, $ || E, y ? M : u(R + ".gradient.color"), i, n || u(R + ".pattern"), Y, y), j
				}, $.createTubeModel = function(p, T, y, F) {
					for (var Q = this, d = Q.s, _ = d("shape3d.side") || wq, z = d("shape3d.start.angle"), m = d("shape3d.sweep.angle"), E = d(Oe) ? d("shape3d.top.cap") : M, c = d(Lh) ? d("shape3d.bottom.cap") : M, Z = "flat" === E, R = "flat" === c, A = Z && (F ? F.uv : d("shape3d.top.image")), D = R && (F ? F.uv : d("shape3d.bottom.image")), s = F ? F.uv : d("shape3d.image"), J = {
						vs: [],
						uv: s ? [] : M,
						top_vs: Z ? [] : M,
						top_uv: A ? [] : M,
						bottom_vs: R ? [] : M,
						bottom_uv: D ? [] : M
					}, B = Mo(p, T, d(Mk), y), n = 0, x = B.length; x > n; n++) Lk(J, B[n], d(Qo), y, _, z, m, E, c);
					if (F) {
						var N = [];
						sp(Q.gv, Q.data, J, Q, Q.getBodyColor(), [], F, N), N.length && (_r(F.vs, N), _r(F.ns, Mq(N)))
					} else Q.shapeModel = J;
					return B
				}, $.getCache = function() {
					var d = this.info;
					if (d) {
						var C = d.list;
						if (C) {
							var R = d.cache;
							return R || (R = d.cache = Oo(C)), R
						}
					}
					return M
				}
			}
		});
		var ec = function(V, u) {
				for (var W, A = 0, c = V.length, S = 0, b = c - 1; b >= S;) if (A = w(S + (b - S) / 2), W = V[A].length - u, 0 > W) S = A + 1;
				else {
					if (!(W > 0)) {
						b = A;
						break
					}
					b = A - 1
				}
				A = b;
				var y = V[A],
					B = y.point;
				return A === c - 1 || y.length === u || (B = (new yp).subVectors(V[A + 1].point, B).normalize().multiplyScalar(u - y.length).add(B)), {
					point: B,
					tangent: y.tangent
				}
			},
			Oo = function(y) {
				for (var t, o, G = [], j = 0, e = 0; e < y.length; e++) {
					for (var i = y[e], Z = 0; Z < i.length; Z++) {
						t = i[Z], o && (j += o.distanceTo(t));
						var w = new yp,
							$ = i[Z + 1];
						$ ? w.subVectors($, t) : o ? w.subVectors(t, o) : w.x = 1, w.normalize(), G.push({
							point: t,
							length: j,
							tangent: w
						}), o = t
					}
					o = null
				}
				return G
			},
			Mo = function(e, d, Z, r) {
				Z = Z || _q;
				for (var j = [], F = 0, A = e.size(); A > F; F++) {
					var W = e.get(F);
					j.push(new yp(W.x, W.e || 0, W.y))
				}
				d && (_n(d) && (d = d._as), d.length || (d = null));
				for (var c, I, X, y, t, f = [], Q = 0, z = 0, _ = d ? d.length : A; _ > z; z++) if (t = d ? d[z] : 0 === z ? 1 : 2, 1 === t) f.push(X = []), X.push(j[Q++]);
				else if (2 === t || 5 === t) if (y = 2 === t ? j[Q++] : X[0], r) {
					var o = d ? d[z + 1] : _ > z + 1 ? 2 : M;
					if (2 === o || 5 === o) {
						var D = X[X.length - 1],
							N = 2 === o ? j[Q] : X[0],
							O = (new yp).subVectors(D, y),
							s = (new yp).subVectors(N, y),
							J = O.length(),
							x = s.length();
						if (J && x) if (r > J / 2 && r > x / 2) X.push(y);
						else for (O.multiplyScalar(k(r, J / 2) / J).add(y), s.multiplyScalar(k(r, x / 2) / x).add(y), c = new ze(O, y, s).getPoints(Z), I = 0; Z >= I; I++) X.push(c[I])
					} else X.push(y)
				} else X.push(y);
				else if (3 === t) for (c = new ze(X[X.length - 1], j[Q++], j[Q++]).getPoints(Z), I = 1; Z >= I; I++) X.push(c[I]);
				else if (4 === t) for (c = new gb(X[X.length - 1], j[Q++], j[Q++], j[Q++]).getPoints(Z), I = 1; Z >= I; I++) X.push(c[I]);
				return f
			},
			wg = function(_) {
				for (var z, v, x = new yp, U = [], b = [], A = [], E = 0, w = _.length; w > E; E++) z = _[E], v = _[E + 1], v ? x.subVectors(v, z) : x.subVectors(z, _[E - 1]), U.push(x.normalize().clone());
				var M, C, Y, i, O = new yp,
					y = new yp,
					a = new qi,
					n = 1e-4,
					J = Number.MAX_VALUE,
					h = U[0],
					X = b[0] = new yp,
					H = A[0] = new yp;
				for (C = R(h.x), Y = R(h.y), i = R(h.z), J >= C && (J = C, O.set(1, 0, 0)), J >= Y && (J = Y, O.set(0, 1, 0)), J >= i && O.set(0, 0, 1), y.crossVectors(h, O).normalize(), X.crossVectors(h, y), H.crossVectors(h, X), E = 1; w > E; E++) b[E] = b[E - 1].clone(), A[E] = A[E - 1].clone(), y.crossVectors(U[E - 1], U[E]), y.length() > n && (y.normalize(), M = f(dd(U[E - 1].dot(U[E]), -1, 1)), b[E].applyMatrix4(a.makeRotationAxis(y, M))), A[E].crossVectors(U[E], b[E]);
				return {
					B: A,
					T: U,
					N: b
				}
			},
			Lk = function() {
				var A = function(k) {
						for (var j = 1; j < arguments.length; j++) {
							var e = arguments[j];
							k.push(e.x, e.y, e.z)
						}
					},
					Q = function(Y) {
						for (var _ = 1; _ < arguments.length; _++) {
							var u = arguments[_].uv;
							Y.push(u[0], u[1])
						}
					},
					x = function(Q, i, e, a, s) {
						var W = -a * K(s),
							n = a * C(s);
						return new yp(Q.x + W * e.x + n * i.x, Q.y + W * e.y + n * i.y, Q.z + W * e.z + n * i.z)
					},
					Z = function(D, N, Z, q, C, v, m, F) {
						m = m || o;
						for (var s = [], l = m / C, V = 0; C >= V; V++) {
							var z = x(D, N, Z, q, V * l + v);
							s.push(z), F != M && (z.uv = [F, V / C])
						}
						return s
					},
					y = function(T, r, F, $, J, G, I, e, q) {
						q = q || o;
						var h = r ? T.top_vs : T.bottom_vs;
						if (h) for (var k = r ? T.top_uv : T.bottom_uv, u = q / I, p = 0; I > p; p++) {
							var S, H;
							r ? (S = p * u + e, H = (p + 1) * u + e) : (H = p * u + e, S = (p + 1) * u + e), A(h, x(F, $, J, G, S), x(F, $, J, G, H), F), k && k.push(.5 - .5 * K(S), .5 - .5 * C(S), .5 - .5 * K(H), .5 - .5 * C(H), .5, .5)
						}
					};
				return function(c, d, D, w, l, z, X, s, h) {
					var x = d.length;
					if (x > 1) {
						var m, P, t, S, E, v, J, Y = wg(d),
							L = Y.T,
							i = Y.N,
							K = Y.B;
						"flat" === s && y(c, !0, d[0], K[0], i[0], w, l, z, X), "flat" === h && y(c, !1, d[x - 1], K[x - 1], i[x - 1], w, l, z, X);
						var _, f, V = [],
							j = b(l / 2),
							H = "round" === s,
							W = "round" === h,
							p = d[0],
							G = L[0],
							q = K[0],
							F = i[0],
							k = d[x - 1],
							n = L[x - 1],
							C = K[x - 1],
							R = i[x - 1];
						if (H) {
							for (t = 1; j >= t; t++) i.splice(0, 0, F), K.splice(0, 0, q), L.splice(0, 0, G), f = -t / j * w, d.splice(0, 0, G.clone().multiplyScalar(f).add(p)), V[j - t] = N(w * w - f * f);
							x += j
						}
						if (W) {
							for (t = 1; j >= t; t++) i.push(R), K.push(C), L.push(n), f = t / j * w, d.push(n.clone().multiplyScalar(f).add(k)), V[d.length - 1] = N(w * w - f * f);
							x += j
						}
						if (c.uv) {
							var o = 0,
								T = 0,
								O = [];
							for (D && (o = D), E = d[0], O[0] = 0, t = 1; x > t; t++) S = d[t], O[t] = E.distanceTo(S), E = S, D || (o += O[t]);
							for (_ = [], t = 0; x > t; t++) T += O[t], _[t] = o ? T / o : 0
						}
						for (t = 0; x > t; t++) {
							if (S = d[t], v = K[t], J = i[t], m = Z(S, v, J, V[t] === r ? w : V[t], l, z, X, _ ? _[t] : M), P) for (var B = 0; l > B; B++) {
								var u = P[B],
									a = P[B + 1] || P[0],
									$ = m[B],
									I = m[B + 1] || m[0];
								A(c.vs, a, u, $, $, I, a), c.uv && Q(c.uv, a, u, $, $, I, a)
							}
							P = m
						}
					}
				}
			}();
		vq(z, {
			getLineLength: function(c) {
				return c[c.length - 1].length
			},
			getLineOffset: function(R, U) {
				return ec(R, U)
			},
			getLineCacheInfo: function(j, E, J, u) {
				return Oo(Mo(j, E, J, u))
			}
		});
		var qc = d.Light = function() {
				im(qc, this), this.s(Pj, e[Pj]), this.s(ok, "sphere"), this.s3(20, 20, 20)
			};
		Xq("Light", fb, {
			_image: "light_icon",
			_icon: "light_icon",
			onStyleChanged: function(S, C, x) {
				qc.superClass.onStyleChanged.apply(this, arguments), S === Pj && this.s("shape3d.color", x)
			}
		});
		var cc = zl.Graph3dView = function(c, x) {
				var F = this;
				F._attributes = x || z.graph3dViewAttributes, F._25I = {}, F._view = _h(1, F);
				var h = F._canvas = Yk(F._view);
				h.addEventListener("webglcontextlost", function(y) {
					y.preventDefault(), Nn(F), F._26I && F._doBufferGC(F._26I, !0), F._26I = M, F._1o.texture = M, F._35O = !0
				}, !1), h.addEventListener("webglcontextrestored", function() {
					F._35O = !1, F.iv()
				}, !1), F._batchIndexMap = {}, F._batchModelMap = {}, F._wireframeIndexMap = {}, F._wireframeModelMap = {}, F._wireframeIndexMapSwap = {}, F._wireframeModelMapSwap = {}, F._polylineIndexMap = {}, F._polylineIndexMap = {}, F._polylineIndexMapSwap = {}, F._polylineIndexMapSwap = {}, F._8O = [], F._7O = nd(), F._6O = nd(), F._1o = new Tn(F), F._30O = new Jr(F), F._31O = new Pg(F), F._32O = new Nl(F), F._33Q = !0, F._eye = Hg(z.graph3dViewEye), F._center = Hg(z.graph3dViewCenter), F._up = Hg(z.graph3dViewUp), F._lightChanged = !1, F._59O = [], F._spots = [], F._dirs = [], F._frameId = 0, F.dm(c ? c : new Od), F.setInteractors([new hb(F)])
			},
			sd = {
				fogDisabled: 1,
				dashDisabled: 1,
				batchColorDisabled: 1,
				batchBlendDisabled: 1,
				batchBrightnessDisabled: 1
			},
			tr = 0;
		je("Graph3dView", q, {
			ms_v: 1,
			ms_tip: 1,
			ms_gv: 1,
			ms_dm: 1,
			ms_lp: 1,
			ms_fire: 1,
			ms_sm: 1,
			_51o: 1,
			ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "editHelperDisabled", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", mi, Cp, "firstPersonMode", Eh, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", Bo, rn, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
			_editable: !1,
			_editHelperDisabled: z.graph3dViewEditHelperDisabled,
			_devicePixelRatio: r,
			_boundaries: r,
			_moveStep: z.graph3dViewMoveStep,
			_rotateStep: z.graph3dViewRotateStep,
			_pannable: z.graph3dViewPannable,
			_rotatable: z.graph3dViewRotatable,
			_walkable: z.graph3dViewWalkable,
			_resettable: z.graph3dViewResettable,
			_zoomable: z.graph3dViewZoomable,
			_firstPersonMode: z.graph3dViewFirstPersonMode,
			_mouseRoamable: z.graph3dViewMouseRoamable,
			_gridVisible: z.graph3dViewGridVisible,
			_gridSize: z.graph3dViewGridSize,
			_gridGap: z.graph3dViewGridGap,
			_gridColor: z.graph3dViewGridColor,
			_originAxisVisible: z.graph3dViewOriginAxisVisible,
			_centerAxisVisible: z.graph3dViewCenterAxisVisible,
			_axisXColor: z.graph3dViewAxisXColor,
			_axisYColor: z.graph3dViewAxisYColor,
			_axisZColor: z.graph3dViewAxisZColor,
			_ortho: z.graph3dViewOrtho,
			_orthoWidth: z.graph3dViewOrthoWidth,
			_fovy: z.graph3dViewFovy,
			_near: z.graph3dViewNear,
			_far: z.graph3dViewFar,
			_headlightColor: z.graph3dViewHeadlightColor,
			_headlightIntensity: z.graph3dViewHeadlightIntensity,
			_headlightRange: z.graph3dViewHeadlightRange,
			_headlightDisabled: z.graph3dViewHeadlightDisabled,
			_rectSelectable: z.graph3dViewRectSelectable,
			_rectSelectBackground: z.graph3dViewRectSelectBackground,
			_editSizeColor: z.graph3dViewEditSizeColor,
			_autoMakeVisible: mh,
			_fogDisabled: z.graph3dViewFogDisabled,
			_fogColor: z.graph3dViewFogColor,
			_fogNear: z.graph3dViewFogNear,
			_fogFar: z.graph3dViewFogFar,
			_dashDisabled: z.graph3dViewDashDisabled,
			_batchColorDisabled: z.graph3dViewBatchColorDisabled,
			_batchBlendDisabled: z.graph3dViewBatchBlendDisabled,
			_batchBrightnessDisabled: z.graph3dViewBatchBrightnessDisabled,
			setEye: function(C, z, g) {
				1 === arguments.length && (z = C[1], g = C[2], C = C[0]);
				var U = this._eye;
				U[0] = C, U[1] = z, U[2] = g, this.fp(Bo, M, U)
			},
			setCenter: function(r, _, j) {
				1 === arguments.length && (_ = r[1], j = r[2], r = r[0]);
				var G = this._center;
				G[0] = r, G[1] = _, G[2] = j, this.fp(rn, M, G)
			},
			setUp: function(O, Y, R) {
				1 === arguments.length && (Y = O[1], R = O[2], O = O[0]);
				var w = this._up;
				w[0] = O, w[1] = Y, w[2] = R, this.fp("up", M, w)
			},
			isTransparentMask: function(D) {
				return D.s("transparent.mask")
			},
			getAspect: function() {
				var x = this,
					S = x._aspect;
				return S ? S : x.getWidth() / x.getHeight()
			},
			getCanvas: function() {
				return this._canvas
			},
			setDataModel: function(f) {
				var Y = this,
					z = Y._dataModel,
					T = Y._selectionModel;
				z !== f && (z && (z.ump(Y.handleDataModelPropertyChange, Y), z.umm(Y.handleDataModelChange, Y), z.umd(Y.handleDataPropertyChange, Y), T || z.sm().ums(Y.handleSelectionChange, Y)), Y._dataModel = f, f.mp(Y.handleDataModelPropertyChange, Y), f.mm(Y.handleDataModelChange, Y), f.md(Y.handleDataPropertyChange, Y), T ? T._21I(f) : f.sm().ms(Y.handleSelectionChange, Y), Y.invalidateAll(!0), Y.invalidateLight(), Y.fp(Ke, z, f), Y._canvas.style.background = f.getBackground() || "")
			},
			handleDataModelPropertyChange: function(H) {
				if ("background" === H.property) {
					var J = this._canvas.style.background,
						b = H.newValue || "";
					this._canvas.style.background = b, this.fp("canvasBackground", J, b)
				}
			},
			handleDataPropertyChange: function(p) {
				var r = p.data;
				this.invalidateData(r), uq(r) && "s:light.type" === p.property && this.invalidateLight()
			},
			invalidateLight: function() {
				this._lightChanged || (this._lightChanged = !0, this.iv())
			},
			onPropertyChanged: function(Q) {
				var v = this,
					B = Q.property;
				v.iv(), v._18Q = M, "eye" === B ? v._33Q = !0 : "devicePixelRatio" === B ? v._42(M, v._devicePixelRatio || Gl) : sd[B] && Nn(v)
			},
			_5O: function(G) {
				var X = G._22Q();
				return X ? new X(this, G) : M
			},
			getData3dUI: function(W) {
				var P = this._25I[W._id];
				return P === r && (P = this._5O(W), this._25I[W._id] = P), P
			},
			invalidateAll: function(W) {
				var o = this;
				if (W) {
					for (var k in o._25I) {
						var m = o._25I[k];
						m && m.dispose()
					}
					o._25I = {}, o.iv(), le(o)
				} else o.dm().each(function(c) {
					o.invalidateData(c)
				})
			},
			invalidateSelection: function() {
				var t = this;
				t.sm().each(function(P) {
					t.invalidateData(P)
				})
			},
			invalidateData: function(p) {
				var M = this,
					J = M.getData3dUI(p);
				J && (J.iv(), M.iv()), le(M, p)
			},
			getShape3dText: function(L) {
				return L.getStyle("shape3d.text") || this.getLabel(L)
			},
			invalidateBatch: function(p) {
				var B = this,
					g = B._batchModelMap,
					z = g[p],
					q = [],
					R = {};
				if (z) {
					z.ds.forEach(function(A) {
						var O = B.getData3dUI(A);
						O && O.iv(), delete B._batchIndexMap[A._id], q.push(A._id)
					}), delete g[p];
					for (var C, D, k, E, A, G, F, I, T, N = ["_wireframeModelMap", "_polylineModelMap", "_wireframeModelMapSwap", "_polylineModelMapSwap"], t = ["_wireframeIndexMap", "_polylineIndexMap", "_wireframeIndexMapSwap", "_polylineIndexMapSwap"], Z = 0; Z < N.length; Z++) {
						var $ = B[N[Z]],
							c = B[t[Z]];
						for (R = {}, I = 0; I < q.length; I++) {
							var d = c[q[I]];
							if (d) {
								delete c[q[I]], T = d.batch, C = $[T];
								var S = d.begin,
									j = d.size,
									O = 3 * S,
									f = 3 * j,
									Q = 4 * S,
									i = 4 * j;
								for (D = C.ds, k = C.vs, E = C.cs, A = C.ps, G = C.ls, F = d.index, C.invalidate = !0, D[F] = r, F = O; O + f > F; F++) k[F] = r;
								for (F = Q; Q + i > F; F++) E[F] = r;
								for (F = Q; Q + i > F; F++) A[F] = r;
								if (G) for (F = O; O + f > F; F++) G[F] = r;
								R[T] = !0
							}
						}
						for (T in R) {
							C = $[T], D = C.ds, k = C.vs, E = C.cs, A = C.ps, G = C.ls;
							var a = [];
							for (F = 0; F < D.length; F++) D[F] !== r && a.push(D[F]);
							if (0 === a.length) delete $[T];
							else {
								for (C.ds = a, a = [], F = 0; F < k.length; F++) k[F] !== r && a.push(k[F]);
								for (C.vs = a, a = [], F = 0; F < E.length; F++) E[F] !== r && a.push(E[F]);
								for (C.cs = a, a = [], F = 0; F < A.length; F++) A[F] !== r && a.push(A[F]);
								if (C.ps = a, G) {
									for (a = [], F = 0; F < G.length; F++) G[F] !== r && a.push(G[F]);
									C.ls = a
								}
							}
						}
					}
					B.iv()
				}
			},
			handleDataModelChange: function(X) {
				var K = this,
					O = X.kind,
					U = X.data;
				if ("add" === O) K.invalidateData(U), Jj(U) && U.getEdgeGroup() && U.getEdgeGroup().eachSiblingEdge(K.invalidateData, K), uq(U) && K.invalidateLight();
				else if (O === pi) {
					var y = U._id,
						J = K._25I[y];
					J && (J.dispose(), delete K._25I[y], K.iv()), U === K._currentSubGraph && K.setCurrentSubGraph(M), le(K, U), uq(U) && K.invalidateLight()
				} else O === vd && (K.invalidateAll(!0), K.setCurrentSubGraph(M), le(K), K.invalidateLight())
			},
			toCanvas: function(i) {
				var A = this,
					F = A.getGL();
				if (A.validate(), i) {
					var s = F.getParameter(F.COLOR_CLEAR_VALUE);
					wj(F, i)
				}
				A._42(M, 1);
				var B = A.getWidth(),
					E = A.getHeight(),
					Q = new Uint8Array(4 * B * E),
					G = Yk(),
					g = G.getContext("2d");
				F.readPixels(0, 0, B, E, F.RGBA, F.UNSIGNED_BYTE, Q), Xo(G, B, E, 1);
				for (var m = g.getImageData(0, 0, B, E), C = m.data, N = 0; N < C.length; N += 4) {
					var V = N / 4,
						d = w(V / B),
						r = V - d * B;
					V = 4 * ((E - 1 - d) * B + r), C[V] = Q[N], C[V + 1] = Q[N + 1], C[V + 2] = Q[N + 2], C[V + 3] = Q[N + 3]
				}
				return g.putImageData(m, 0, 0), i && wj(F, s), A._42(M, A._devicePixelRatio || Gl), G
			},
			toDataURL: function(j, b) {
				var n = this,
					m = n.getGL();
				if (n.validate(), j) {
					var w = m.getParameter(m.COLOR_CLEAR_VALUE);
					wj(m, j)
				}
				n._42(M, 1);
				var p = n._canvas.toDataURL(b || "image/png", 1);
				return j && wj(m, w), n._42(M, n._devicePixelRatio || Gl), p
			},
			getGL: function() {
				var E = this,
					d = E._26I,
					B = E._prg;
				if (!d) try {
					E._2O = {}, d = E._26I = E._canvas.getContext("webgl", E._attributes) || E._canvas.getContext("experimental-webgl", E._attributes), d._emptyTexture = ds(d), d._emptyBlendTexture = ds(d), d._bufPool = [], d._id = ++tr, E._buffer = {
						vs: Ee(d),
						ns: Ee(d),
						is: Ee(d),
						uv: Ee(d),
						batchColor: Ee(d),
						batchBlend: Ee(d),
						batchBrightness: Ee(d),
						lineDistance: Ee(d)
					}, E._1O = hp(d);
					var w = E._cube = {
						vs: Ee(d),
						ns: Ee(d),
						is: Ee(d),
						uv: Ee(d)
					};
					fq(d, w.vs, Gd), fq(d, w.ns, Ur), fq(d, w.uv, Pd), Qm(d, w.is, Dj)
				} catch (Z) {}
				if (d && !B) {
					if (B = E._prg = d.createProgram(), !B) return M;
					var P = E._dirs.length,
						J = E._spots.length,
						l = E._59O.length,
						g = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uAlphaTest", "uTransparent", "uTexture", "uBlendTexture", "uSampler", "uBlendSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
					P && g.push("uDirColor", "uDirDirection"), J && g.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotDirection"), l && g.push("uPointColor", "uPointRange", "uPointPosition"), wj(d, [0, 0, 0, 0]), d.clearDepth(1), d.enable(d.DEPTH_TEST), d.depthFunc(d.LEQUAL), d.enable(d.BLEND), d.blendFuncSeparate(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA, d.ONE, d.ONE_MINUS_SRC_ALPHA), qq || (bh = Rf(bh.substring(0, bh.indexOf("^#"))), Sl = Rf(Sl), qq = !0);
					var x = ["#define MAX_DIR " + P, "#define MAX_SPOT " + J, "#define MAX_POINT " + l, E._fogDisabled ? "" : "#define FOG", E._dashDisabled ? "" : "#define DASH", E._batchColorDisabled ? "" : "#define BATCHCOLOR", E._batchBlendDisabled ? "" : "#define BATCHBLEND", E._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
						Q = ek(d, B, d.VERTEX_SHADER, bh.replace("PREFIX", x)),
						W = ek(d, B, d.FRAGMENT_SHADER, Sl.replace("PREFIX", x));
					L ? g.push("aPosition") : (B.aPosition = 0, d.bindAttribLocation(B, 0, "aPosition")), d.linkProgram(B), g.forEach(function(f) {
						B[f] = /^u/.test(f) ? d.getUniformLocation(B, f) : d.getAttribLocation(B, f)
					}), d.useProgram(B), d.deleteShader(Q), d.deleteShader(W)
				}
				return d
			},
			getBrightness: function(H) {
				var v = H.s("brightness"),
					K = this.isSelected(H) ? H.s("select.brightness") : M;
				return v == M ? K : K == M ? v : v * K
			},
			getWireframe: function($) {
				var X = $.s("wf.visible"),
					B = $.s("wf.width");
				return X === !0 || B > 0 && "selected" === X && this.isSelected($) ? {
					color: $.s("wf.color"),
					width: B,
					"short": $.s("wf.short"),
					mat: $.s("wf.mat")
				} : void 0
			},
			_transformPointToViewSpace: function(P) {
				var f = [P[0], P[1], P[2]];
				return lc(f, this._viewMatrix), f
			},
			_transformDirectionToViewSpace: function(V, E) {
				var w = [V[0], V[1], V[2]];
				lc(w, this._viewMatrix);
				var i = E ? [E[0], E[1], E[2]] : [0, 0, 0];
				lc(i, this._viewMatrix);
				var l = i[0] - w[0],
					j = i[1] - w[1],
					q = i[2] - w[2],
					f = Math.sqrt(l * l + j * j + q * q);
				return f ? [l / f, j / f, q / f] : [l, j, q]
			},
			getWireframeGeometry: function(q) {
				return q.s("wf.geometry") ? {
					color: q.s("wf.color"),
					width: q.s("wf.width"),
					mat: q.s("wf.mat"),
					geometry: !0
				} : void 0
			},
			getBodyColor: function(G) {
				return G.s("body.color")
			},
			getMat: function(W) {
				return W.getMat ? W.getMat() : W.s("mat")
			},
			getFaceMat: function(F, r) {
				return F.getFaceMat ? F.getFaceMat(r) : F.s(r + ".mat")
			},
			getFaceBlend: function(M, l) {
				return M.s(l + ".blend") || M.s("all.blend")
			},
			getFaceColor: function(S, h) {
				return S.s(h + ".color") || S.s("all.color")
			},
			getFaceImage: function(b, p) {
				return b.s(p + ".image") || b.s("all.image")
			},
			getFaceBlendImage: function(R, s) {
				return R.s(s + ".blend.image") || R.s("all.blend.image")
			},
			getFaceDiscardSelectable: function(O, g) {
				var l = O.s(g + ".discard.selectable");
				return l == M ? O.s("all.discard.selectable") : l
			},
			getFaceUv: function(y, j) {
				return y.s(j + ".uv") || y.s("all.uv")
			},
			getFaceUvOffset: function(R, L) {
				return R.s(L + ".uv.offset") || R.s("all.uv.offset")
			},
			getFaceUvScale: function(s, v) {
				return s.s(v + ".uv.scale") || s.s("all.uv.scale")
			},
			getFaceLight: function(t, r) {
				var d = t.s(r + ".light");
				return d == M ? t.s("all.light") : d
			},
			getFaceVisible: function(I, s) {
				var N = I.s(s + ".visible");
				return N == M ? I.s("all.visible") : N
			},
			getFaceOpacity: function(E, $) {
				var Z = E.s($ + ".opacity");
				return Z == M ? E.s("all.opacity") : Z
			},
			getFaceTransparent: function(k, S) {
				var D = k.s(S + ".transparent");
				return D == M ? k.s("all.transparent") : D
			},
			getFaceReverseColor: function(R, T) {
				return R.s(T + ".reverse.color") || R.s("all.reverse.color")
			},
			getFaceReverseFlip: function(Q, x) {
				var t = Q.s(x + ".reverse.flip");
				return t == M ? Q.s("all.reverse.flip") : t
			},
			getFaceReverseCull: function(L, X) {
				var V = L.s(X + ".reverse.cull");
				return V == M ? L.s("all.reverse.cull") : V
			},
			getTextureMap: function() {
				return this._2O
			},
			deleteTexture: function(P) {
				var p = this,
					j = p._2O[P];
				j && (delete p._2O[P], p.getGL().deleteTexture(j))
			},
			invalidateShape3dCachedImage: function(P) {
				var o = P._shape3dCachedImage;
				o && (this.getGL().deleteTexture(o), delete P._shape3dCachedImage)
			},
			getTexture: function(V, w) {
				if (!V) return M;
				var g = this,
					y = g.getGL(),
					A = g._2O[V];
				if (!A) {
					var z = Ob(V);
					if (z) if (z.tagName) {
						if (z.dynamic) return hp(y, z, g._1O);
						A = g._2O[V] = hp(y, z)
					} else {
						var d = w && w.s("shape3d.image.cache");
						if (d && w._shape3dCachedImage && (A = w._shape3dCachedImage), !A) {
							var L = w && w.s("shape3d.fixSizeOnScreen"),
								C = L && L[0] > 0 ? L[0] : Dc(z, w),
								n = L && L[1] > 0 ? L[1] : pd(z, w);
							if (C >= 1 && n >= 1) {
								C *= devicePixelRatio, n *= devicePixelRatio;
								var h = Ep(C, n);
								od(h, z, 0, 0, C, n, w, g), h.restore();
								var f = L ? y.NEAREST : y.LINEAR;
								d && Ok(z, w) ? (A = w._shape3dCachedImage = hp(y, zh, null, f), zh = null) : A = hp(y, zh, g._1O, f)
							}
						}
					}
				}
				return A
			},
			redraw: function() {
				this.iv()
			},
			validateImpl: function() {
				var v = this;
				if (v._lightChanged) {
					v._lightChanged = !1;
					var k = [],
						E = [],
						i = [];
					v.dm().each(function(c) {
						if (uq(c)) {
							var q = c.s("light.type");
							q === fl ? k.push(c) : q === $h ? E.push(c) : q === Hp && i.push(c)
						}
					}), (k.length !== v._59O.length || E.length !== v._spots.length || i.length !== v._dirs.length) && Nn(v), v._59O = k, v._spots = E, v._dirs = i
				}
				v._42(), v._1o.iv()
			},
			getRenderInfo: function() {
				var x = this.getGL();
				return x ? x._renderInfo : void 0
			},
			showDebugTip: function() {
				var X = this,
					L = X._debugDiv;
				if (!L) {
					L = X._debugDiv = x.createElement("div"), L.style.position = "absolute", L.style.overflow = "hidden", L.style.backgroundColor = "white", L.style.color = "black";
					var D = X.getView();
					X._79O ? D.insertBefore(L, X._79O) : D.appendChild(L), X._debugTipTimerId = setInterval(function() {
						var R = X.getRenderInfo();
						if (R) {
							var Y = X.getGL()._bufPool,
								z = Y.length - (Y._ivCount || 0),
								u = "Draw Calls: " + R.calls + "<br/>" + "Vertices: " + R.vertices + "<br/>" + "Faces: " + R.faces + "<br/>" + "Lines: " + R.lines + "<br/>" + "Buffer Count: " + z;
							L.innerHTML = u
						}
					}, 10)
				}
			},
			hideDebugTip: function() {
				var o = this,
					p = o._debugDiv;
				p && (delete o._debugDiv, cancelAnimationFrame(o._debugTipTimerId), delete o._debugTipTimerId, o.getView().removeChild(p))
			},
			_42: function(t, Q) {
				var Z = this;
				if (!Z._35O && (!$d || Pp($d))) {
					var g, E;
					t && (t instanceof fb ? E = t : g = t);
					var y = Z._canvas,
						S = Z.getWidth(),
						m = Z.getHeight(),
						U = Z.getGL(),
						q = Z._prg;
					if (U) {
						if (Q ? t || Xo(y, S, m, Q) : (Q = Z._devicePixelRatio || Gl, t || S === y.clientWidth && m === y.clientHeight || Xo(y, S, m, Q)), U.viewport(0, 0, S * Q, m * Q), U._renderInfo = {
							calls: 0,
							vertices: 0,
							faces: 0,
							lines: 0,
							frame: ++Z._frameId
						}, Z._81O = M, U.clear(U.COLOR_BUFFER_BIT | U.DEPTH_BUFFER_BIT), ce(U, q.uBrightness, 1), ce(U, q.uOpacity, 1), ce(U, q.uPartOpacity, 1), U._picking = !! t, ce(U, q.uPick, !! t), ce(U, q.uTexture, !1), ce(U, q.uBlendTexture, !1), ce(U, q.uAlphaTest, e.alphaTest), ce(U, q.uTransparent, !1), ce(U, q.uFix, !1), ce(U, q.uBatchColor, !1), ce(U, q.uBatchBlend, !1), ce(U, q.uBatchBrightness, !1), ce(U, q.uPMatrix, Z._projectMatrix = ri(Z)), ce(U, q.uViewMatrix, vi(Z, Z._7O)), Z._viewMatrix = ko(Z._7O), t || (Si(Z, U, q), Z._fogDisabled || (ce(U, q.uFogColor, Z._fogColor), ce(U, q.uFogNear, Z._fogNear), ce(U, q.uFogFar, Z._fogFar))), Cc(U, q.aPosition), Cc(U, q.aNormal), jb(U, q.aUv), jb(U, q.aBatchColor), jb(U, q.aBatchBlend), jb(U, q.aBatchBrightness), jb(U, q.aLineDistance), E) {
							var H = U.getParameter(U.COLOR_CLEAR_VALUE);
							U.clearColor(0, 0, 0, 0), U.disable(U.BLEND), jb(U, q.aNormal), fq(U, Z._cube.vs, M, q.aPosition), Qm(U, Z._cube.is), yr(E, Z, $c, 0), yr(E, Z, Km, 6), yr(E, Z, Oj, 12), yr(E, Z, Uj, 18), yr(E, Z, Mr, 24), yr(E, Z, pb, 30), Cc(U, q.aNormal), wj(U, H)
						} else if (g) {
							g.value = 2;
							var H = U.getParameter(U.COLOR_CLEAR_VALUE);
							U.clearColor(0, 0, 0, 0), U.disable(U.BLEND), Z._95I(U, q, g), qf(Z, g), If(Z, Z._polylineModelMap, g), If(Z, Z._wireframeModelMap, g), ce(U, q.uTransparent, !0), Z._95I(U, q, g, !0), qf(Z, g, !0), If(Z, Z._polylineModelMap, g, !0), If(Z, Z._wireframeModelMap, g, !0), ce(U, q.uTransparent, !1), U.clear(U.DEPTH_BUFFER_BIT), Z._swapLineMap(), Z._95I(U, q, g, !1, !0), If(Z, Z._polylineModelMap, g), If(Z, Z._wireframeModelMap, g), Z._swapLineMap(), U.disable(U.DEPTH_TEST), Z._30O._42(U, q, g), U.enable(U.DEPTH_TEST), wj(U, H)
						} else U.disable(U.BLEND), Z.drawSky(U, q), Z._31O._42(U, q), Z._95I(U, q), qf(Z), If(Z, Z._polylineModelMap), If(Z, Z._wireframeModelMap), U.enable(U.BLEND), ce(U, q.uTransparent, !0), U.depthMask(!1), Z._95I(U, q, M, !0), qf(Z, M, !0), If(Z, Z._polylineModelMap, M, !0), If(Z, Z._wireframeModelMap, M, !0), U.depthMask(!0), ce(U, q.uTransparent, !1), U.clear(U.DEPTH_BUFFER_BIT), Z._swapLineMap(), Z._95I(U, q, M, !1, !0), If(Z, Z._polylineModelMap), If(Z, Z._wireframeModelMap), Z._swapLineMap(), U.disable(U.DEPTH_TEST), U.disable(U.BLEND), Z._32O._42(U, q), Z._30O._42(U, q), U.enable(U.DEPTH_TEST);
						fq(U, M), Qm(U, M), Z._33Q = !1, Z._doBufferGC(U)
					}
				}
			},
			setBufferGCInterval: function(t) {
				this._bufferGCInterval = t
			},
			_doBufferGC: function(Y, r) {
				var T = Y._bufPool,
					A = T.length;
				if (A) {
					var D, F, U = Y._renderInfo.frame,
						o = this._bufferGCInterval || 10,
						Q = 0;
					for (D = 0; A > D; D++) F = T[D], F ? (r || U - F._fid > o) && (Q++, Y.deleteBuffer(F._buf), F._buf = null, T[D] = null) : Q++;
					if (Q > A / 2 && Q > 128) {
						var E = [];
						for (D = 0; A > D; D++) T[D] && E.push(T[D]);
						Y._bufPool = E
					} else T._ivCount = Q
				}
			},
			_swapLineMap: function() {
				var i = this;
				$ = i._polylineModelMap, i._polylineModelMap = i._polylineModelMapSwap, i._polylineModelMapSwap = $, $ = i._wireframeModelMap, i._wireframeModelMap = i._wireframeModelMapSwap, i._wireframeModelMapSwap = $, $ = i._polylineIndexMap, i._polylineIndexMap = i._polylineIndexMapSwap, i._polylineIndexMapSwap = $, $ = i._wireframeIndexMap, i._wireframeIndexMap = i._wireframeIndexMapSwap, i._wireframeIndexMapSwap = $
			},
			_updateSkyBoxPosition: function(i) {
				if (this._skyBox && i && "eye" === i.property) {
					var w = i.newValue;
					this._skyBox.p3(w[0], w[1], w[2]), this.invalidateData(this._skyBox)
				}
			},
			setSkyBox: function(E) {
				this._skyBox = E, this.ump(this._updateSkyBoxPosition, this), this.invalidateAll(), E && (this.mp(this._updateSkyBoxPosition, this), this._updateSkyBoxPosition())
			},
			drawSky: function(V, _, w) {
				var g = this,
					X = g._skyBox;
				if (X) {
					var N = g._headlightIntensity,
						O = qe(g._headlightColor),
						_ = g._prg;
					1 !== N && (O = [O[0] * N, O[1] * N, O[2] * N]), ce(V, _.uHeadlightColor, [O[0], O[1], O[2], 1]);
					var Z = g.getData3dUI(X);
					Z && Z._42(V, _, w, function() {
						return !0
					}), V.clear(V.DEPTH_BUFFER_BIT), ce(V, _.uHeadlightColor, [O[0], O[1], O[2], g._headlightDisabled ? 1 : 0])
				}
			},
			_95I: function(A, R, v, t, q) {
				function f(V) {
					if ( !! V.s("shape3d.alwaysOnTop") == !! q && d.isVisible(V) && (!s || H)) {
						if (!v && d.isTransparentMask(V)) return;
						var Z = d.getData3dUI(V);
						Z && Z._42(A, R, v, I)
					}
				}
				var d = this,
					I = function(Q) {
						return t ? Q : !Q
					};
				d.sky && A.clear(A.DEPTH_BUFFER_BIT), d.dm().each(f)
			},
			getLogicalPoint: function(q) {
				return Vd(q, this._canvas)
			},
			getHitFaceInfo: function(e) {
				e.target && (e = this.lp(e));
				var X = this.getDataInfoAt(e);
				if (X) {
					var v = this._1o.face(X.data, Ql(e.x, e.y));
					if (v) return {
						data: X.data,
						face: v
					}
				}
				return M
			},
			unproject: function(i, w) {
				var W = this,
					$ = W.getWidth(),
					E = W.getHeight(),
					N = i.target ? W.lp(i) : i,
					K = N.x - $ / 2,
					u = N.y - E / 2,
					L = 2 * (K / $),
					F = 2 * (-1 * u / E);
				w = w || 0;
				var p = nd(),
					x = ri(W),
					z = vi(W);
				Pq(p, x, z), xi(p);
				var s = Ue([L, F, w, 1], p);
				return [s[0] / s[3], s[1] / s[3], s[2] / s[3]]
			},
			getDataAt: function(U) {
				var r = this.getDataInfoAt(U);
				return r ? r.data : M
			},
			getDataInfoAt: function(l, z) {
				return l.target && (l = this.lp(l)), this._1o.get(Ql(l.x, l.y, z), !0)
			},
			getDatasInRect: function(y) {
				return this._1o.get(y)
			},
			setEditable: function(x) {
				var $ = this,
					m = $._editable;
				$._editable = x, this.fp(Mi, m, x)
			},
			isEditable: function($) {
				var X = this;
				return X._editable ? pr($) ? $.s("3d.editable") ? X._editableFunc ? X._editableFunc($) : !0 : !1 : !1 : !1
			},
			isSelectable: function(h) {
				return h.s("3d.selectable") && this.sm().isSelectable(h)
			},
			isMovable: function(c) {
				var h = this;
				return Jj(c) && c.getStyle(Yn) !== co ? !1 : c.s("3d.movable") ? h._movableFunc ? h._movableFunc(c) : !0 : !1
			},
			isSizeEditable: function(j) {
				return pr(j) ? this._sizeEditableFunc ? this._sizeEditableFunc(j) : !0 : !1
			},
			isRotationEditable: function(x) {
				return pr(x) && x.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(x) : !0 : !1
			},
			handleDelete: function() {
				this._editable && this.removeSelection()
			},
			zoomIn: function(e) {
				this.setZoom(ve, e)
			},
			zoomOut: function($) {
				this.setZoom(1 / ve, $)
			},
			setZoom: function(P, j) {
				if (1 !== P) {
					var d = this;
					if (d._ortho) return d.setOrthoZoom(P, j), void 0;
					d._14o && d._14o.stop(!0);
					var Q = 1 / P,
						O = d._eye,
						V = d._center,
						m = V[0] + (O[0] - V[0]) * Q - O[0],
						C = V[1] + (O[1] - V[1]) * Q - O[1],
						n = V[2] + (O[2] - V[2]) * Q - O[2];
					if (!(Zg(O, V) < d._moveStep && 1 > Q)) {
						if (j = Sc(j)) {
							var T = Hg(O);
							return j.action = function(t) {
								d.fi({
									kind: d._zooming ? "betweenZoom" : "beginZoom"
								}), d._zooming = 1, O[0] = T[0] + m * t, O[1] = T[1] + C * t, O[2] = T[2] + n * t, d.fp(Bo, M, O)
							}, j._37o = function() {
								delete d._14o, delete d._zooming, d.fi({
									kind: "endZoom"
								}), d.onZoomEnded()
							}, d._14o = Ie(j)
						}
						O[0] += m, O[1] += C, O[2] += n, d.fp(Bo, M, O)
					}
				}
			},
			setOrthoZoom: function(l, J) {
				if (1 !== l) {
					var Y = this;
					Y._14o && Y._14o.stop(!0);
					var L = Y._orthoWidth,
						$ = L / l - L;
					if (!(L < Y._moveStep && l > 1)) return (J = Sc(J)) ? (J.action = function(o) {
						Y.fi({
							kind: Y._zooming ? "betweenZoom" : "beginZoom"
						}), Y._zooming = 1, Y.setOrthoWidth(L + $ * o)
					}, J._37o = function() {
						delete Y._14o, delete Y._zooming, Y.fi({
							kind: "endZoom"
						}), Y.onZoomEnded()
					}, Y._14o = Ie(J)) : (Y.setOrthoWidth(L / l), void 0)
				}
			},
			getPositionInfo: function(x) {
				var o = this,
					v = o._eye,
					G = o._center,
					W = o.getAspect(),
					z = x ? nb(Yg(G, v, !0), Yg(x, v)) : Zg(v, G);
				if (o._ortho) {
					var s = o._orthoWidth;
					return {
						length: z,
						height: s / W,
						width: s
					}
				}
				var V = 2 * t(o._fovy / 2) * z;
				return {
					length: z,
					height: V,
					width: V * W
				}
			},
			getCenterInfo: function() {
				var c = this;
				return c._81O || (c._81O = c.getPositionInfo()), Hg(c._81O)
			},
			rotate: function(g, s, n, Y) {
				var l = this;
				if (g || s) {
					Y == M && (Y = l._firstPersonMode), l._88O && l._88O.stop(!0);
					var P = l._center,
						o = l._eye,
						b = l.getCenterInfo().length,
						m = Y ? P : o,
						O = Y ? o : P,
						F = Yg(m, O),
						f = G(F[0], F[2]),
						_ = G(N(F[0] * F[0] + F[2] * F[2]), F[1]),
						p = Y ? rn : Bo;
					return Y && (s = -s), (n = Sc(n)) ? (n.action = function(c) {
						l.fi({
							kind: l._rotating ? "betweenRotate" : "beginRotate"
						}), l._rotating = 1;
						var i = f + g * c,
							D = _ + s * c;
						D = Mf(D), F[0] = b * C(D) * C(i), F[1] = b * K(D), F[2] = b * C(D) * K(i), m[0] = O[0] + F[0], m[1] = O[1] + F[1], m[2] = O[2] + F[2], l.fp(p, M, m)
					}, n._37o = function() {
						delete l._88O, delete l._rotating, l.fi({
							kind: "endRotate"
						}), l.onRotateEnded()
					}, l._88O = Ie(n)) : (f += g, _ += s, _ = Mf(_), F[0] = b * C(_) * C(f), F[1] = b * K(_), F[2] = b * C(_) * K(f), m[0] = O[0] + F[0], m[1] = O[1] + F[1], m[2] = O[2] + F[2], l.fp(p, M, m), void 0)
				}
			},
			pan: function(B, f, a, g) {
				if (B || f) {
					var G = this;
					g == M && (g = G._firstPersonMode), G._89O && G._89O.stop(!0);
					var X = vi(G),
						k = [X[0] * B, X[4] * B, X[8] * B],
						I = [X[1] * f, X[5] * f, X[9] * f],
						c = k[0] + I[0],
						E = k[1] + I[1],
						S = k[2] + I[2],
						o = G._center,
						L = G._eye;
					if (g) {
						var s = Xh(G.getBoundaries(), L[0], L[2], L[0] + c, L[2] + S, N(c * c + S * S));
						c = s[0], S = s[1]
					}
					if (a = Sc(a)) {
						var U = Hg(L),
							T = Hg(o);
						return a.action = function(e) {
							G.fi({
								kind: G._panning ? "betweenPan" : "beginPan"
							}), G._panning = 1, o[0] = T[0] + c * e, o[1] = T[1] + E * e, o[2] = T[2] + S * e, L[0] = U[0] + c * e, L[1] = U[1] + E * e, L[2] = U[2] + S * e, G.fp(Bo, M, L), G.fp(rn, M, o)
						}, a._37o = function() {
							delete G._89O, delete G._panning, G.fi({
								kind: "endPan"
							}), G.onPanEnded()
						}, G._89O = Ie(a)
					}
					o[0] += c, o[1] += E, o[2] += S, L[0] += c, L[1] += E, L[2] += S, G.fp(Bo, M, L), G.fp(rn, M, o)
				}
			},
			walk: function(J, o, s) {
				if (J) {
					var d = this;
					s == M && (s = d._firstPersonMode), d._90O && d._90O.stop(!0);
					var Q = d._center,
						E = d._eye,
						i = Yg(Q, E, !0);
					if (s) {
						var j = Xh(d.getBoundaries(), E[0], E[2], E[0] + i[0] * J, E[2] + i[2] * J, R(J));
						if (J = Zg(j), !J) return;
						i = [j[0] / J, 0, j[1] / J]
					}
					if (o = Sc(o)) {
						var G = Hg(E),
							w = Hg(Q);
						return o.action = function(q) {
							d.fi({
								kind: d._walking ? "betweenWalk" : "beginWalk"
							}), d._walking = 1;
							var H = J * q;
							E[0] = G[0] + i[0] * H, E[1] = G[1] + i[1] * H, E[2] = G[2] + i[2] * H, Q[0] = w[0] + i[0] * H, Q[1] = w[1] + i[1] * H, Q[2] = w[2] + i[2] * H, d.fp(Bo, M, E), d.fp(rn, M, Q)
						}, o._37o = function() {
							delete d._90O, delete d._walking, d.fi({
								kind: "endWalk"
							}), d.onWalkEnded()
						}, d._90O = Ie(o)
					}
					E[0] += i[0] * J, E[1] += i[1] * J, E[2] += i[2] * J, Q[0] += i[0] * J, Q[1] += i[1] * J, Q[2] += i[2] * J, d.fp(Bo, M, E), d.fp(rn, M, Q)
				}
			},
			handleScroll: function(R, A) {
				R.preventDefault();
				var E = this,
					q = E._moveStep;
				E.isFirstPersonMode() ? E.isPannable() && E.pan(0, A > 0 ? q : -q) : E.isZoomable() && E.setZoom(0 > A ? 1 / Id : Id)
			},
			handlePinch: function(q, a) {
				this.isZoomable() && this.setZoom(a > q ? 1 / hs : hs)
			},
			reset: function() {
				this.setCenter(z.graph3dViewCenter), this.setEye(z.graph3dViewEye), this.setUp(z.graph3dViewUp)
			},
			moveSelection: function(r, m, v) {
				var I = this;
				I.dm().beginTransaction(), Mg(this.sm().toSelection(this.isMovable, this), r, m, v), I.dm().endTransaction()
			},
			getMoveMode: function(u, A) {
				var m = A.s("3d.move.mode");
				if (m) return m;
				var X = "88",
					D = "89",
					q = "90";
				return Dm(u) || Rc[X] && Rc[D] && Rc[q] ? "xyz" : Rc[X] && Rc[D] ? "xy" : Rc[X] && Rc[q] ? "xz" : Rc[D] && Rc[q] ? "yz" : Rc[X] ? "x" : Rc[D] ? "y" : Rc[q] ? "z" : "xz"
			},
			handleTick: function() {
				var k = this,
					x = !1,
					v = k._moveStep,
					s = v,
					z = !1,
					i = !0,
					F = k._rotateStep * (i ? -1 : 1);
				if (k.isWalkable() || (s = 0), k.isPannable() || (v = 0), k.isRotatable() || (F = 0), k._32Q) {
					var B = (kr() - k._32Q) / 50;
					s *= B, v *= B, F *= B
				}
				k._31Q && (fk(k._31Q), delete k._31Q, delete k._32Q), wm() && (x = !0, k.pan(-v, 0, z, i)), aj() && (x = !0, k.pan(v, 0, z, i)), Ph() && (x = !0, Dm() ? k.pan(0, v, z, i) : k.walk(s, z, i)), hh() && (x = !0, Dm() ? k.pan(0, -v, z, i) : k.walk(-s, z, i)), id() && (x = !0, k.rotate(-F, 0, z, i)), Zc() && (x = !0, k.rotate(F, 0, z, i)), ar() && (x = !0, k.rotate(0, -F / 2, z, i)), qm() && (x = !0, k.rotate(0, F / 2, z, i)), x && (k._32Q = kr(), k._31Q = We(k.handleTick, k))
			},
			handleKeyDown: function(m) {
				var J = this;
				!Ik(m) && Wb[m.keyCode] ? J.handleTick() : zr(m) ? J.selectAll() : mb(m) ? J.handleDelete(m) : Co(m) && this.isResettable() && J.reset()
			},
			checkDoubleClickOnNote: function(m, w, g) {
				var Y = this;
				if (g === ud) {
					if (w.s("note.toggleable")) return w.s(Bg, !w.s(Bg)), Y.fi({
						kind: "toggleNote",
						event: m,
						data: w,
						part: g
					}), !0
				} else if (g === bl && w.s("note2.toggleable")) return w.s(el, !w.s(el)), Y.fi({
					kind: "toggleNote2",
					event: m,
					data: w,
					part: g
				}), !0;
				return !1
			},
			checkDoubleClickOnRotation: function(p, a, I) {
				return I === no ? (a.setRotationX(0), !0) : I === Ig ? (a.setRotationY(0), !0) : I === hi ? (a.setRotationZ(0), !0) : !1
			},
			onRotateEnded: function() {},
			onWalkEnded: function() {},
			toViewPosition: function(s) {
				var W = this,
					o = W.getWidth() / 2,
					S = W.getHeight() / 2,
					P = W._18Q;
				return P && P._wh === o / S || (P = ri(W), W._18Q = Pq(P, P, vi(W)), W._18Q._wh !== o / S), s = Ue([s[0], s[1], s[2], 1], P), {
					x: o + o * s[0] / s[3],
					y: S - S * s[1] / s[3]
				}
			},
			getHitPosition: function(M, g, F) {
				var s = this,
					r = s.getWidth(),
					f = s.getHeight(),
					P = M.target ? s.lp(M) : M,
					A = P.x - r / 2,
					n = P.y - f / 2,
					O = s.getCenterInfo(),
					T = vi(s);
				g = g ? g : [0, 0, 0], F = F ? F : [0, 1, 0], A = A / r * O.width, n = -1 * n / f * O.height;
				var K = [T[0] * A, T[4] * A, T[8] * A],
					h = [T[1] * n, T[5] * n, T[9] * n],
					w = [K[0] + h[0], K[1] + h[1], K[2] + h[2]],
					z = s.getCenter(),
					i = Sq(s, g, F, [w[0] + z[0], w[1] + z[1], w[2] + z[2]]);
				return i ? i : [0, 0, 0]
			},
			getLineLength: function(H) {
				this.validate();
				var g = this.getData3dUI(H);
				if (g && g.getCache) {
					var G = g.getCache();
					if (G) return G[G.length - 1].length
				}
				return 0
			},
			getLineOffset: function(Y, N) {
				var o = this.getData3dUI(Y);
				if (o && o.getCache) {
					var z = o.getCache();
					if (z) return ec(z, N)
				}
				return M
			},
			isLabelVisible: function() {
				return !0
			},
			isNoteVisible: function() {
				return !0
			}
		});
		var Jh = zl.Interactor = function(r) {
				this.gv = r
			};
		je("Interactor", q, {
			ms_listener: 1,
			getView: function() {
				return this.gv.getView()
			},
			setUp: function() {
				this.addListeners()
			},
			tearDown: function() {
				this.removeListeners()
			}
		});
		var hb = zl.DefaultInteractor = function(x) {
				im(hb, this, [x])
			};
		je("DefaultInteractor", Jh, {
			handle_contextmenu: function(N) {
				ap(N)
			},
			handle_mousewheel: function(A) {
				this.gv.handleScroll(A, A.wheelDelta / 40)
			},
			handle_DOMMouseScroll: function(u) {
				2 === u.axis && this.gv.handleScroll(u, -u.detail)
			},
			handle_keydown: function(D) {
				this.gv.handleKeyDown(D)
			},
			handle_mousedown: function(W) {
				this.handle_touchstart(W)
			},
			handle_touchstart: function(y) {
				ap(y);
				var X = this,
					E = X.gv,
					h = Dg(y),
					b = E.getDataInfoAt(y),
					O = b ? b.data : M,
					Y = b ? b.part : M,
					n = E.sm(),
					W = Nm(y),
					s = So(y);
				E.setFocus(y) && (X._62O = M, X._57I = M, O ? Ik(y) ? n.co(O) ? n.rs(O) : n.as(O) : n.co(O) || n.ss(O) : h && (Ik(y) ? E.isRectSelectable() && (X._62O = gc) : X._57I = km(y)), X._31Q && (fk(X._31Q), delete X._31Q, delete X._32Q), X._62O || (E.isFirstPersonMode() && (Dm(y) || s > 2 ? X._62O = "pan" : E.isMouseRoamable() || Z ? (X._62O = "roaming", X.foward = W && Dg(y), X._32Q = kr(), X._31Q = We(X.tick, X)) : h || (X._62O = "roaming")), X._62O || (h && W && Tg[Y] ? (X._62O = Y, X.p3 = O.p3()) : h && W && pr(O) && E.isSelected(O) && E.isMovable(O) ? (X._62O = "move", X.p3 = O.p3(), X.movedata = O) : Z && (s > 2 ? X._62O = "pan" : 2 === s && (X.dist = Ri(y), X._62O = "pinch")))), X.point = E.lp(y), Gm(X, y), hm(y) ? E.handleDoubleClick(y, O, Y) : E.handleClick(y, O, Y))
			},
			tick: function() {
				var K = this,
					Q = K.gv,
					C = Q._moveStep;
				K.point && Q.isWalkable() && (K._32Q && (C *= (kr() - K._32Q) / 50), Q.walk(K.foward ? C : -C), K._32Q = kr(), K._31Q = We(K.tick, K))
			},
			handle_mouseup: function(N) {
				this.handle_touchend(N)
			},
			handle_touchend: function(Z) {
				var R = this._57I;
				R && (Zg(R, km(Z)) <= 1 && this.gv.sm().cs(), this._57I = M)
			},
			handleWindowMouseMove: function(m) {
				this.handleWindowTouchMove(m)
			},
			handleWindowTouchMove: function(C) {
				var J, G, b = this,
					A = b.gv,
					f = b._62O,
					d = b.point,
					U = A.dm(),
					T = A.lp(C),
					y = T.x - d.x,
					z = T.y - d.y,
					i = -o * y / A.getWidth(),
					u = -o * z / A.getHeight();
				if ("roaming" === f) b.rotate(C, i / 2, u / 2);
				else if (f === no || f === Ig || f === hi) A._86O || U.beginTransaction(), A.fi({
					kind: A._86O ? "betweenEditRotation" : "beginEditRotation",
					event: C
				}), A._86O = 1, A.sm().each(function(s) {
					if (pr(s) && A.isRotationEditable(s)) {
						var v = R(i) > R(u) ? i : u;
						f === no ? s.setRotationX(s.getRotationX() + v) : f === Ig ? s.setRotationY(s.getRotationY() + v) : f === hi && s.setRotationZ(s.getRotationZ() + v)
					}
				});
				else if ("move" === f || Tg[f]) {
					f === Yj || f === Tk || f === Kd ? (A._87O || U.beginTransaction(), A.fi({
						kind: A._87O ? "betweenEditSize" : "beginEditSize",
						event: C
					}), A._87O = 1) : (A._moving || U.beginTransaction(), A.fi({
						kind: A._moving ? "betweenMove" : "beginMove",
						event: C
					}), A._moving = 1);
					var s, k = b.p3,
						x = A.getPositionInfo(k),
						P = vi(A);
					s = f === Hb ? "x" : f === Cq ? "y" : f === _i ? "z" : f === Yj ? "sx" : f === Tk ? "sy" : f === Kd ? "sz" : A.getMoveMode(C, b.movedata), y = y / A.getWidth() * x.width, z = -1 * z / A.getHeight() * x.height;
					var E, p, v = [P[0] * y, P[4] * y, P[8] * y],
						F = [P[1] * z, P[5] * z, P[9] * z],
						W = v[0] + F[0],
						I = v[1] + F[1],
						Z = v[2] + F[2],
						h = [k[0] + W, k[1] + I, k[2] + Z],
						O = Yg(A.getEye(), h, !0);
					if ("xyz" === s ? (E = h, A.moveSelection(W, I, Z)) : "xz" === s ? (E = Sq(A, k, [0, 1, 0], h), E && A.moveSelection(E[0] - k[0], 0, E[2] - k[2])) : "xy" === s ? (E = Sq(A, k, [0, 0, 1], h), E && A.moveSelection(E[0] - k[0], E[1] - k[1], 0)) : "yz" === s ? (E = Sq(A, k, [1, 0, 0], h), E && A.moveSelection(0, E[1] - k[1], E[2] - k[2])) : "x" === s || "sx" === s ? (O[0] = 0, E = Sq(A, k, O, h), E && (p = E[0] - k[0], "x" === s ? A.moveSelection(p, 0, 0) : A.sm().each(function(b) {
						pr(b) && A.isSizeEditable(b) && (J = D(qk, b.getWidth() + p), G = J / b.getWidth(), b.setWidth(J), Dm(C) && (b.setHeight(b.getHeight() * G), b.setTall(b.getTall() * G)))
					}))) : "y" === s || "sy" === s ? (O[1] = 0, E = Sq(A, k, O, h), E && (p = E[1] - k[1], "y" === s ? A.moveSelection(0, p, 0) : A.sm().each(function(w) {
						pr(w) && A.isSizeEditable(w) && (J = D(qk, w.getTall() + p), G = J / w.getTall(), w.setTall(J), Dm(C) && (w.setHeight(w.getHeight() * G), w.setWidth(w.getWidth() * G)))
					}))) : ("z" === s || "sz" === s) && (O[2] = 0, E = Sq(A, k, O, h), E && (p = E[2] - k[2], "z" === s ? A.moveSelection(0, 0, p) : A.sm().each(function(Q) {
						pr(Q) && A.isSizeEditable(Q) && (J = D(qk, Q.getHeight() + p), G = J / Q.getHeight(), Q.setHeight(J), Dm(C) && (Q.setTall(Q.getTall() * G), Q.setWidth(Q.getWidth() * G)))
					}))), !E) return;
					b.p3 = E
				} else if (f === gc) {
					var c = b.div;
					c || (c = b.div = Dn(), gm(b.getView(), c), c.op = d, c.style.background = A.getRectSelectBackground()), A.fi({
						kind: A._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
						event: C
					}), A._rectSelecting = 1, c.rect = cp(c.op, T), Mb(c, c.rect)
				} else if ("pinch" === f && 2 === So(C)) {
					A.fi({
						kind: A._pinching ? "betweenPinch" : "beginPinch",
						event: C
					}), A._pinching = 1;
					var p = Ri(C);
					A.handlePinch(p, b.dist), b.dist = p
				} else "pan" === f || Dm(C) ? b.pan(C, y, z) : A.isFirstPersonMode() || (Dg(C) ? b.rotate(C, i, u) : (b.pan(C, y, 0), A.isWalkable() && (A.fi({
					kind: A._walking ? "betweenWalk" : "beginWalk",
					event: C
				}), A._walking = 1, A.walk(z / A.getHeight() * A.getCenterInfo().height))));
				b.point = T
			},
			pan: function(O, T, M) {
				var m = this.gv;
				if (m.isPannable()) {
					var H = m.getCenterInfo(),
						U = T / m.getWidth() * H.width,
						P = -1 * M / m.getHeight() * H.height;
					m.fi({
						kind: m._panning ? "betweenPan" : "beginPan",
						event: O
					}), m._panning = 1, m.pan(-U, -P)
				}
			},
			rotate: function(E, w, J) {
				var f = this.gv;
				f.isRotatable() && (f.fi({
					kind: f._rotating ? "betweenRotate" : "beginRotate",
					event: E
				}), f._rotating = 1, f.rotate(w, J))
			},
			handleWindowMouseUp: function(L) {
				this.handleWindowTouchEnd(L)
			},
			handleWindowTouchEnd: function(h) {
				var O = this,
					Z = O.gv,
					e = Z.dm(),
					D = O.div;
				if (D) {
					var u = Z.getDatasInRect(D.rect);
					if (!u.isEmpty()) {
						var B = Z.sm(),
							G = B.toSelection();
						u.each(function(m) {
							B.co(m) ? G.remove(m) : G.add(m)
						}), B.ss(G)
					}
					Er(D)
				}
				Z._moving && (delete Z._moving, Z.fi({
					kind: "endMove",
					event: h
				}), Z.onMoveEnded(), e.endTransaction()), Z._panning && (delete Z._panning, Z.fi({
					kind: "endPan",
					event: h
				}), Z.onPanEnded()), Z._rotating && (delete Z._rotating, Z.fi({
					kind: "endRotate",
					event: h
				}), Z.onRotateEnded()), Z._86O && (delete Z._86O, Z.fi({
					kind: "endEditRotation",
					event: h
				}), e.endTransaction()), Z._87O && (delete Z._87O, Z.fi({
					kind: "endEditSize",
					event: h
				}), e.endTransaction()), Z._pinching && (delete Z._pinching, Z.fi({
					kind: "endPinch",
					event: h
				}), Z.onPinchEnded()), Z._rectSelecting && (delete Z._rectSelecting, Z.fi({
					kind: "endRectSelect",
					event: h
				}), Z.onRectSelectEnded()), Z._walking && (delete Z._walking, Z.fi({
					kind: "endWalk",
					event: h
				}), Z.onWalkEnded()), O.dist = O.point = O._62O = O.p3 = O.movedata = O.div = O._57I = O._32Q = O._31Q = O.foward = M
			}
		});
		var Tn = function(V) {
				this.gv = V
			};
		De(Tn, q, {
			_iv: !0,
			iv: function() {
				this._iv = !0
			},
			face: function(z, g) {
				var i = this,
					c = i.gv.getGL();
				if (!c || !pr(z)) return M;
				var L = g.x,
					W = g.width,
					E = g.height,
					y = i.height - g.y - E,
					N = w(W / 2),
					j = new Uint8Array(4 * W * E),
					U = 0;
				for (i.iv(), i.validate(z), of(c, i.frame), c.readPixels(L, y, W, E, c.RGBA, c.UNSIGNED_BYTE, j), of(c, M), i.iv(); N >= U; U++) for (var t = N - U, q = N + U, J = t; q >= J; J++) for (var b = t; q >= b; b++) if (J === t || J === q || b === t || b === q) {
					var R = _j.m[j[4 * (J * W + b)]];
					if (R) return R
				}
			},
			get: function(k, D) {
				this.validate();
				var p = this,
					I = p.gv.getGL();
				if (!I) return M;
				var T, y, F = k.x,
					j = k.width,
					i = k.height,
					O = p.height - k.y - i,
					c = w(j / 2),
					h = new Uint8Array(4 * j * i),
					f = 0,
					R = h.length,
					z = D ? M : new jg,
					u = D ? M : {};
				if (of(I, p.frame), I.readPixels(F, O, j, i, I.RGBA, I.UNSIGNED_BYTE, h), of(I, M), D) {
					for (; c >= f; f++) for (var $ = c - f, o = c + f, Y = $; o >= Y; Y++) for (var N = $; o >= N; N++) if ((Y === $ || Y === o || N === $ || N === o) && (T = p.info(h, 4 * (Y * j + N)))) return T
				} else for (; R > f; f += 4) T = p.info(h, f), T && (y = T.data, u[y._id] || (z.add(y), u[y._id] = y));
				return z
			},
			info: function($, Z) {
				return this.colorMap[($[Z] << 16) + ($[Z + 1] << 8) + $[Z + 2] + ((127 & $[Z + 3]) << 24)]
			},
			validate: function(c) {
				var L = this,
					t = L.gv,
					C = t.getGL();
				if (C) {
					var V = t.getWidth(),
						E = t.getHeight(),
						P = C.RGBA,
						r = C.TEXTURE_2D,
						y = C.RENDERBUFFER,
						f = C.FRAMEBUFFER;
					L.texture || (L.texture = hp(C), L.render = C.createRenderbuffer(), L.frame = C.createFramebuffer()), (L.width !== V || L.height !== E) && (Bj(C, L.texture), C.texImage2D(r, 0, P, V, E, 0, P, C.UNSIGNED_BYTE, M), Wi(C, C.TEXTURE_MIN_FILTER, C.LINEAR), C.bindRenderbuffer(y, L.render), C.renderbufferStorage(y, C.DEPTH_COMPONENT16, V, E), of(C, L.frame), C.framebufferTexture2D(f, C.COLOR_ATTACHMENT0, r, L.texture, 0), C.framebufferRenderbuffer(f, C.DEPTH_ATTACHMENT, y, L.render), Bj(C, M), C.bindRenderbuffer(y, M), of(C, M), L.width = V, L.height = E), L._iv && (L._iv = !1, of(C, L.frame), t._42(c || (L.colorMap = {}), 1), of(C, M))
				}
			}
		});
		var Pg = function(i) {
				this.gv = i
			};
		De(Pg, q, {
			gap: 0,
			size: 0,
			_42: function(m, f) {
				var D = this,
					Y = D.gv,
					I = Y._gridGap,
					W = Y._gridSize;
				if (Y._gridVisible) {
					if (D.gap !== I || D.size !== W) {
						for (var B = [], r = Y._gridSize / 2, c = I * r, z = 0; 2 * r + 1 > z; z++) {
							var t = 6 * z,
								u = 6 * (2 * r + 1) + t;
							B[t] = -c, B[t + 1] = 0, B[t + 2] = -c + z * I, B[t + 3] = c, B[t + 4] = 0, B[t + 5] = -c + z * I, B[u] = -c + z * I, B[u + 1] = 0, B[u + 2] = -c, B[u + 3] = -c + z * I, B[u + 4] = 0, B[u + 5] = c
						}
						D.vs = new Cm(B), D.gap = I, D.size = W
					}
					Qe(Y), Ne(m, f), sj(m), mc(m, f, 1, Y._gridColor, Y._buffer.vs, D.vs), Pm(m, 0, D.vs.length / 3, m.LINES), Cr(m), Ad(m, f)
				} else D.vs = D.gap = D.size = M
			}
		});
		var Nl = function(t) {
				this.gv = t
			};
		De(Nl, q, {
			_42: function(P, O) {
				var $ = this.gv,
					r = $._buffer.vs,
					T = $._axisXColor,
					e = $._axisYColor,
					D = $._axisZColor,
					n = $._originAxisVisible,
					z = $._centerAxisVisible;
				if (n || z) {
					var X = L ? P.TRIANGLES : P.TRIANGLE_FAN,
						I = P.LINES;
					if (Qe($), Ne(P, O), sj(P), n) {
						var b = $.getCenterInfo(),
							a = k(b.width, b.height) / 5,
							h = .8 * a,
							p = .05 * a;
						mc(P, O, 1.5, T, r, new Cm([0, 0, 0, a, 0, 0, h, p, 0, h, 0, p, h, -p, 0, h, 0, -p, h, p, 0, 0, 0, 0, 0, a, 0, p, h, 0, 0, h, p, -p, h, 0, 0, h, -p, p, h, 0, 0, 0, 0, 0, 0, a, p, 0, h, 0, p, h, -p, 0, h, 0, -p, h, p, 0, h])), Pm(P, 0, 2, I), Pm(P, 1, 6, X), mc(P, O, M, e), Pm(P, 7, 2, I), Pm(P, 8, 6, X), mc(P, O, M, D), Pm(P, 14, 2, I), Pm(P, 15, 6, X)
					}
					if (z) {
						var G = $._center,
							s = G[0],
							Z = G[1],
							t = G[2],
							b = $.getPositionInfo(G);
						a = k(b.width, b.height) / 20, mc(P, O, 1.5, T, r, new Cm([s, Z, t, s + a, Z, t, s, Z, t, s, Z + a, t, s, Z, t, s, Z, t + a])), Pm(P, 0, 2, I), mc(P, O, M, e), Pm(P, 2, 2, I), mc(P, O, M, D), Pm(P, 4, 2, I)
					}
					Cr(P), Ad(P, O)
				}
			}
		});
		var Jr = function(R) {
				this.gv = R
			},
			Hb = "edit_tx",
			Cq = "edit_ty",
			_i = "edit_tz",
			no = "edit_rx",
			Ig = "edit_ry",
			hi = "edit_rz",
			Yj = "edit_sx",
			Tk = "edit_sy",
			Kd = "edit_sz",
			Tg = {};
		Tg[Hb] = 1, Tg[Cq] = 1, Tg[_i] = 1, Tg[no] = 1, Tg[Ig] = 1, Tg[hi] = 1, Tg[Yj] = 1, Tg[Tk] = 1, Tg[Kd] = 1, De(Jr, q, {
			_42: function(M, F, P) {
				var B = this,
					X = B.gv,
					l = X.sm().ld();
				if (X.isEditable(l) && !X.isEditHelperDisabled() && pr(l) && (!X.isFirstPersonMode() || !X.isMouseRoamable() && !Z)) {
					Qe(X);
					var x, f, d = X.isMovable(l),
						K = X.isRotationEditable(l),
						p = X.isSizeEditable(l),
						N = X._axisXColor,
						I = X._axisYColor,
						m = X._axisZColor,
						_ = X._editSizeColor,
						H = X.getCenterInfo(),
						q = k(H.width, H.height) / 10,
						C = q / (P ? 5 : 10),
						R = .7 * q,
						n = .4 * R,
						O = l.p3(),
						c = O[0],
						g = O[1],
						D = O[2];
					x = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], d && B._17O(M, F, l, P, Hb, N, x, [c, g - C, D, c + R, g - C, D, c + R, g, D, c + R, g, D, c, g, D, c, g - C, D, c, g - C, D + C, c + R, g - C, D + C, c + R, g - C, D, c + R, g - C, D, c, g - C, D, c, g - C, D + C]), f = c + R, p && B._17O(M, F, l, P, Yj, _, x, [f, g - C, D, f + n, g - C, D, f + n, g, D, f + n, g, D, f, g, D, f, g - C, D, f, g - C, D + C, f + n, g - C, D + C, f + n, g - C, D, f + n, g - C, D, f, g - C, D, f, g - C, D + C]), f += n, K && B._17O(M, F, l, P, no, N, x, [f, g - C, D, f + n, g - C, D, f + n, g, D, f + n, g, D, f, g, D, f, g - C, D, f, g - C, D + C, f + n, g - C, D + C, f + n, g - C, D, f + n, g - C, D, f, g - C, D, f, g - C, D + C]), x = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], d && B._17O(M, F, l, P, Cq, I, x, [c, g, D, c, g + R, D, c - C, g + R, D, c - C, g + R, D, c - C, g, D, c, g, D, c, g, D, c, g, D - C, c, g + R, D - C, c, g + R, D - C, c, g + R, D, c, g, D]), f = g + R, p && B._17O(M, F, l, P, Tk, _, x, [c, f, D, c, f + n, D, c - C, f + n, D, c - C, f + n, D, c - C, f, D, c, f, D, c, f, D, c, f, D - C, c, f + n, D - C, c, f + n, D - C, c, f + n, D, c, f, D]), f += n, K && B._17O(M, F, l, P, Ig, I, x, [c, f, D, c, f + n, D, c - C, f + n, D, c - C, f + n, D, c - C, f, D, c, f, D, c, f, D, c, f, D - C, c, f + n, D - C, c, f + n, D - C, c, f + n, D, c, f, D]), x = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], d && B._17O(M, F, l, P, _i, m, x, [c, g, D, c, g, D + R, c, g - C, D + R, c, g - C, D + R, c, g - C, D, c, g, D, c, g - C, D, c - C, g - C, D, c - C, g - C, D + R, c - C, g - C, D + R, c, g - C, D + R, c, g - C, D]), f = D + R, p && B._17O(M, F, l, P, Kd, _, x, [c, g, f, c, g, f + n, c, g - C, f + n, c, g - C, f + n, c, g - C, f, c, g, f, c, g - C, f, c - C, g - C, f, c - C, g - C, f + n, c - C, g - C, f + n, c, g - C, f + n, c, g - C, f]), f += n, K && B._17O(M, F, l, P, hi, m, x, [c, g, f, c, g, f + n, c, g - C, f + n, c, g - C, f + n, c, g - C, f, c, g, f, c, g - C, f, c - C, g - C, f, c - C, g - C, f + n, c - C, g - C, f + n, c, g - C, f + n, c, g - C, f])
				}
			},
			_17O: function(T, x, J, i, Q, p, n, C) {
				var P = this.gv._buffer;
				qg(T, x, i, !0, J, Q), iq(T, x, M, !0, M, !0, M, !1), ce(T, x.uDiffuse, p), fq(T, P.vs, new Cm(C), x.aPosition), fq(T, P.ns, new Cm(n), x.aNormal), sj(T), Pm(T, 0, 12), Cr(T), dh(T, x)
			}
		});
		var rq = function(s, d) {
				this.gv = s, this.s = function(W, l, A) {
					return l == M && (l = A), l == M ? d.getStyle(W) : El(l, d, s)
				}, this.data = d
			};
		De(rq, q, {
			I3d: !0,
			ms_icons: 1,
			_iv: !0,
			iv: function() {
				this._iv = !0
			},
			_42: function(s, n, G, h) {
				var N = this,
					I = N.data;
				if (!(I instanceof zm)) {
					var F, q, g, y, Y, O, V, K = N.gv,
						f = I._id,
						W = N.s("shape3d.alwaysOnTop") ? null : N.s("batch"),
						j = K._batchIndexMap,
						v = K._batchModelMap,
						z = K.isSelectable(I),
						R = K.getBrightness(I),
						P = R != M && 1 !== R;
					if (N.needValidate(s)) {
						if (g = Fe(j, v, I, W), N.validate(g, W ? ik[W] || Kf : M), g && (y = j[f], Y = y.size = g.vs.length / 3 - y.begin, V = g.rs)) for (R = P ? R : 1, O = 0; Y > O; O++) V.push(R);
						if (pr(I)) {
							var Z = K.getWireframeGeometry(I);
							if (Z) Bc(K, I, Z);
							else {
								var d = K.getWireframe(I);
								d && Bc(K, I, d)
							}
						}
						N.labelInfo = N.label2Info = N.noteInfo = N.note2Info = N._38o = M, N._24O(ob, "getLabel"), N._24O(cj, "getLabel2"), N._26O(ud, "getNote"), N._26O(bl, "getNote2"), N._15O(), N._iv = !1
					}
					P && ce(s, n.uBrightness, R), ce(s, n.uAlphaTest, N.s("alphaTest")), q = qg(s, n, G, z, I, xr), q && (ij(q, j[f], v), ij(q, K._polylineIndexMap[f], K._polylineModelMap), ij(q, K._wireframeIndexMap[f], K._wireframeModelMap)), j[f] || N._80o(s, n, h), K.isLabelVisible(I) && ((F = N.labelInfo) && (qg(s, n, G, z, I, ob), N._28O(F, ob, h)), (F = N.label2Info) && (qg(s, n, G, z, I, cj), N._28O(F, cj, h))), K.isNoteVisible(I) && ((F = N.noteInfo) && (qg(s, n, G, z, I, ud), N._29O(F, ud, h)), (F = N.note2Info) && (qg(s, n, G, z, I, bl), N._29O(F, bl, h))), (F = N._38o) && N._99O(s, n, F, G, z, h), P && ce(s, n.uBrightness, 1)
				}
			},
			needValidate: function() {
				return this._iv
			},
			validate: function() {},
			_16O: function() {
				return Tl
			},
			_80o: function() {},
			dispose: function() {},
			_calcAnchorMat: function(Y) {
				if (Y.hasOwnProperty("_anchor") || Y.hasOwnProperty("_anchorElevation")) {
					var O = Y.getAnchor3d(),
						_ = {
							x: O.x - .5,
							y: O.y - .5,
							z: O.z - .5
						},
						f = nd();
					return Qf(f, [-_.x, -_.y, -_.z]), f
				}
			},
			getBodyColor: function(_) {
				var m = this.data,
					b = this.gv.getBodyColor(m);
				return b ? b : _ ? m.getStyle(_) : M
			},
			_24O: function(X, P) {
				var F = this,
					W = F.data,
					S = F.gv,
					s = F.s,
					p = S[P](W);
				if (p != M) {
					var a = s(X + ".scale"),
						B = s(X + ".max"),
						b = F[X + "Info"] = {
							label: p,
							textureScale: s(X + ".texture.scale"),
							color: S[P + "Color"](W),
							font: s(X + ".font"),
							align: s(X + ".align"),
							background: S[P + "Background"](W)
						},
						i = b.rect = Ai(b, p);
					B > 0 && B < i.width && (b.labelWidth = i.width, i.width = B), i.x = i.y = 0, i.width *= a, i.height *= a, b.mat = F._16O(s(X + ".autorotate"), s(X + ".position"), i, s(X + ".face"), s(X + ".t3"), s(X + ".r3"), s(X + ".rotationMode"));
					var t = i.width / 2,
						Q = i.height / 2;
					b.vs = new Cm([-t, Q, 0, -t, -Q, 0, t, -Q, 0, t, Q, 0]), i.width /= a, i.height /= a
				}
			},
			_26O: function(p, d) {
				var w = this,
					s = w.data,
					T = w.gv,
					L = w.s,
					N = T[d](s);
				if (N != M) {
					var t = L(p + ".scale"),
						r = this[p + "Info"] = {
							note: N,
							textureScale: L(p + ".texture.scale"),
							expanded: L(p + ".expanded"),
							font: L(p + ".font"),
							color: L(p + ".color"),
							align: L(p + ".align"),
							borderWidth: L(p + ".border.width"),
							borderColor: L(p + ".border.color"),
							background: T[d + "Background"](s)
						};
					if (r.expanded) {
						var H = L(p + ".max"),
							A = Ai(r, N);
						A.width += 6, A.height += 2, H > 0 && H < A.width && (r.labelWidth = A.width, A.width = H);
						var S = {
							x: -A.width / 2,
							y: -8 - A.height,
							width: A.width,
							height: A.height + 8
						}
					} else S = {
						x: -6,
						y: -18,
						width: 12,
						height: 18
					};
					r.mat = w._16O(L(p + ".autorotate"), L(p + ".position"), M, L(p + ".face"), L(p + ".t3"), L(p + ".r3"), L(p + ".rotationMode")), r.rect = S, 1 !== t && (S = Hg(S), S.x *= t, S.height *= t, S.y = -S.height, S.width *= t);
					var c = S.x,
						I = S.y,
						Z = S.width,
						_ = S.height;
					r.vs = new Cm([c, -I, 0, c, -I - _, 0, c + Z, -I - _, 0, c + Z, -I, 0])
				}
			},
			_28O: function(p, D, x) {
				if (x(this.s(D + ".transparent"))) {
					var S = p.rect,
						W = p.textureScale,
						q = S.width * W,
						v = S.height * W;
					if (q >= 1 && v >= 1) {
						var B = Ep(q, v);
						1 !== W && (B.translate(B, S.x, S.y), B.scale(W, W), B.translate(B, -S.x, -S.y)), Wg(B, p), B.restore(), Tj(this, D, p.mat, p.vs, !0)
					}
				}
			},
			_29O: function(M, u, F) {
				if (F(this.s(u + ".transparent"))) {
					var d = M.rect,
						R = M.textureScale,
						j = d.x,
						a = d.y,
						O = d.width * R,
						Y = d.height * R;
					if (O >= 1 && Y >= 1) {
						d.x = d.y = 0;
						var U = Ep(O, Y);
						1 !== R && U.scale(R, R), uh(U, M), U.restore(), d.x = j, d.y = a, Tj(this, u, M.mat, M.vs, !1)
					}
				}
			},
			_99O: function(V, j, t, u, o, $) {
				if (t) {
					var B = this,
						q = B.gv,
						Z = B.data,
						v = q._buffer,
						C = q._1O,
						J = t.icons;
					for (var m in J) {
						var Y = J[m],
							A = t.rects[m];
						if (A && $(El(Y.transparent, Z, q))) {
							qg(V, j, u, o, Z, m);
							var I = El(Y.shape3d, Z, q),
								l = I ? [I] : El(Y.names, Z, q),
								_ = l ? l.length : 0,
								n = El(Y.textureScale, Z, q) || 1,
								R = El(Y.light, Z, q);
							R == M && (R = I ? !0 : !1), iq(V, j, El(Y.blend, Z, q), R, El(Y.opacity, Z, q), El(Y.reverseFlip, Z, q), El(Y.reverseColor, Z, q), El(Y.reverseCull, Z, q));
							for (var X = 0; _ > X; X++) {
								var h = l[X],
									a = A[X];
								if (Rb(B, a.mat), I) Dh(q, Z, Rg(B, I), B);
								else {
									var i = Ob(h);
									if (i) {
										var G = a.width * n,
											S = a.height * n;
										if (G >= 1 && S >= 1) {
											var g = Ep(G, S);
											Bb(g, i, El(Y.stretch, Z, q), 0, 0, G, S, Z, q), g.restore(), hp(V, zh, C), sj(V, j, C, El(Y.discardSelectable, Z, q), v.uv, vm), fq(V, v.vs, a.vs, j.aPosition), Xr(V, v.ns, vl, j.aNormal), kl(V, v.is, Ce), ao(V, 0, Ce.length), Cr(V, j, C)
										}
									}
								}
								Dk(q)
							}
							dh(V, j)
						}
					}
				}
			}
		});
		var Ym = function(y, J) {
				im(Ym, this, [y, J])
			};
		De(Ym, rq, {
			_16O: function(F, _, Y, V, n, I, x, Z, N) {
				var A = this.data,
					f = A.getFinalScale3d(),
					v = eo(_, f, Y, V, Z, N);
				if (A.hasOwnProperty("_anchor") || A.hasOwnProperty("_anchorElevation")) {
					var d = A.getAnchor3d();
					v[0] -= (d.x - .5) * f[0], v[1] -= (d.y - .5) * f[1], v[2] -= (d.z - .5) * f[2]
				}
				return Ib(nd(), v, A.p3(), V, n, I, x, F, A.r3(), A.getRotationMode())
			},
			clear: function() {
				var f = this;
				f.faceMat = f.mat = f.shapeModel = f.left = f.right = f.front = f.back = f.top = f.bottom = f.csg = M
			},
			needValidate: function(y) {
				if (this._iv) return this._validateFrameId = y._renderInfo.frame, !0;
				if (this.s("shape3d.autorotate") || this.s("shape3d.fixSizeOnScreen")) {
					var W = y._renderInfo.frame;
					if (this._validateFrameId !== W) return this._validateFrameId = W, !0
				}
				return !1
			},
			validate: function(c, R) {
				var L = this,
					S = L.gv,
					H = L.data,
					Q = Rg(L);
				L._updateAutoRotation(), L._updateFixSize2d(), (this.s("shape3d.autorotate") || this.s("shape3d.fixSizeOnScreen")) && (gh(S, H, "_wireframeModelMap", "_wireframeIndexMap"), gh(S, H, "_wireframeModelMapSwap", "_wireframeIndexMapSwap"));
				var U = Jd(H, S.getMat(H), Q ? L.s("shape3d.scaleable") : !0),
					d = L._calcAnchorMat(H);
				if (d && Pq(U, U, d), L.clear(), c) {
					var p = [];
					Q ? sp(S, H, Q, L, L.getBodyColor(), [U], c, p) : (Ho(S, H, c, R, U, $c, p, wf), Ho(S, H, c, R, U, Oj, p, ed), Ho(S, H, c, R, U, Mr, p, Pf), Ho(S, H, c, R, U, pb, p, tj), Ho(S, H, c, R, U, Km, p, Xp), Ho(S, H, c, R, U, Uj, p, $p)), p.length && (_r(c.vs, p), _r(c.ns, Mq(p)))
				} else L.mat = U, (L.shapeModel = Q) || (L._cubeUvs = null, L.vf($c, 0), L.vf(Oj, 16), L.vf(Km, 8), L.vf(Uj, 24), L.vf(Mr, 32), L.vf(pb, 40))
			},
			_updateAutoRotation: function() {
				var e = this,
					t = e.s("shape3d.autorotate");
				if (t) {
					var S, G = e.gv,
						a = e.data;
					S = "string" == typeof t ? [t.indexOf("x") < 0 ? G._eye[0] : G._center[0], t.indexOf("y") < 0 ? G._eye[1] : G._center[1], t.indexOf("z") < 0 ? G._eye[2] : G._center[2]] : G._eye;
					var V = G._center,
						l = [S[0] - V[0], S[1] - V[1], S[2] - V[2]],
						C = a.p3(),
						Z = ns([C[0] + l[0], C[1] + l[1], C[2] + l[2]], C, G._up),
						j = a.r3(),
						y = Hi(Z, a.getRotationMode());
					Math.abs(j[0] - y[0]) < 1e-5 && Math.abs(j[1] - y[1]) < 1e-5 && Math.abs(j[2] - y[2]) < 1e-5 || a.r3(y)
				}
			},
			_updateFixSize2d: function() {
				var U = this,
					R = U.data,
					o = U.s("shape3d.fixSizeOnScreen");
				if (!o) return R._dynamicScale3d && delete R._dynamicScale3d, void 0;
				var h = U.gv;
				R.getFinalScale3d();
				var L = Jd(R, h.getMat(R)),
					N = lc([0, 0, 0], L),
					c = h.toViewPosition(N);
				if (!isNaN(c.x) && !isNaN(c.y)) {
					var V = lc([1, 0, 0], L),
						i = h.toViewPosition(V),
						D = lc([0, 1, 0], L),
						y = h.toViewPosition(D),
						E = i.x - c.x,
						A = y.y - c.y,
						W = R._dynamicScale3d || [1, 1, 1],
						C = Ob(R.s("shape3d.image")),
						B = o[0] > 0 ? o[0] : C ? Dc(C, U) : 20,
						T = o[1] > 0 ? o[1] : C ? pd(C, U) : 20,
						w = Math.abs(E / B),
						p = Math.abs(A / T);
					Math.abs(w - 1) < .001 && Math.abs(p - 1) < .001 || (R._dynamicScale3d = [W[0] / w, W[1] / p, W[2]])
				}
			},
			vf: function(N, p) {
				var K = this;
				if (K.gv.getFaceVisible(K.data, N)) {
					var F = Wo(K, N);
					F.mat && (K.faceMat = !0);
					var s = F.uv;
					if (s) {
						var m = K._cubeUvs;
						m || (m = K._cubeUvs = new Cm([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]));
						for (var L = 0; 8 > L; L++) m[p + L] = s[L]
					}
					return F
				}
			},
			_80o: function(j, C, N) {
				var z = this,
					G = z.gv,
					e = z.data,
					u = G._cube,
					q = z.shapeModel;
				Qe(G, z.mat), q ? Dh(G, e, q, z, z.getBodyColor(), N) : (fq(j, u.vs, M, C.aPosition), fq(j, u.ns, M, C.aNormal), Qm(j, u.is), z._18O(j, C, z.left, 0, N), z._18O(j, C, z.front, 6, N), z._18O(j, C, z.right, 12, N), z._18O(j, C, z.back, 18, N), z._18O(j, C, z.top, 24, N), z._18O(j, C, z.bottom, 30, N)), Dk(G), z.faceMat && (z._18O(j, C, z.left, 0, N, !0), z._18O(j, C, z.front, 6, N, !0), z._18O(j, C, z.right, 12, N, !0), z._18O(j, C, z.back, 18, N, !0), z._18O(j, C, z.top, 24, N, !0), z._18O(j, C, z.bottom, 30, N, !0))
			},
			_18O: function(r, J, O, p, $, I) {
				if (O) {
					if (!$(O.transparent)) return;
					if (I && !O.mat || !I && O.mat) return;
					I && Qe(this.gv, O.mat);
					var D = this,
						v = D.data,
						w = D.gv,
						P = w.getTexture(O.texture, v),
						n = O.uv,
						y = O.uvScale,
						z = O.uvOffset,
						E = O.discardSelectable;
					P ? n ? sj(r, J, P, E, w._buffer.uv, D._cubeUvs, z, y) : sj(r, J, P, E, w._cube.uv, M, z, y) : sj(r), iq(r, J, O.blend, O.light, O.opacity, O.reverseFlip, O.reverseColor, O.reverseCull), ce(r, J.uDiffuse, O.color), ao(r, p, 6), dh(r, J), Cr(r, J, P), I && Dk(w)
				}
			}
		});
		var Gp = function(q, L) {
				im(Gp, this, [q, L])
			};
		De(Gp, rq, {
			_25Q: 1,
			validate: function(Y) {
				var i = this,
					r = i.gv,
					R = i.data,
					d = i.s,
					Z = d("edge.width"),
					N = R._40I,
					u = R._41I;
				if (i.shapeModel = i.info = M, N && u) {
					var s, W, y, F, J, h, P, c, G, o, v = R.isLooped(),
						Q = d(Yn),
						D = z.getEdgeType(Q);
					if (D) {
						var x = D(R, Ud(i, r, R, v, Q), r, i._19Q);
						if (!x.points || x.points.isEmpty()) return;
						h = i.info = {}, P = x.segments, J = x.points, c = J.size();
						for (var T = N.getElevation(), g = u.getElevation(), f = 0; c > f; f++) {
							var X = J.get(f);
							X.e == M && (X.e = T + (g - T) * f / (c - 1))
						}
						G = cq(J.get(0)), o = cq(J.get(c - 1));
						var C = c % 2;
						0 === C ? (h.c1 = cq(J.get(c / 2 - 1)), h.c2 = cq(J.get(c / 2))) : h.p3 = cq(J.get((c - C) / 2)), h.s1 = G, h.s2 = cq(J.get(1)), h.t1 = cq(J.get(c - 2)), h.t2 = o
					} else {
						J = new jg, h = i.info = {};
						var B = d("edge.offset"),
							p = d("edge.center"),
							K = d("edge.source.t3"),
							m = d("edge.target.t3"),
							e = N.p3(),
							A = u.p3();
						if (K && (e[0] += K[0], e[1] += K[1], e[2] += K[2]), m && (A[0] += m[0], A[1] += m[1], A[2] += m[2]), Q === co) {
							P = d("edge.segments");
							var b = h.points = d(sc) || Zi;
							if (c = b.size()) {
								G = cq(b.get(0)), o = cq(b.get(c - 1)), !p && B && (y = Yg(G, e, !0), B = k(B, Zg(e, G)), e = [e[0] + y[0] * B, e[1] + y[1] * B, e[2] + y[2] * B], y = Yg(A, o, !0), B = k(B, Zg(o, A)), A = [A[0] - y[0] * B, A[1] - y[1] * B, A[2] - y[2] * B]);
								var C = c % 2;
								0 === C ? (s = cq(b.get(c / 2 - 1)), W = cq(b.get(c / 2))) : h.p3 = cq(b.get((c - C) / 2)), h.s1 = e, h.s2 = G, h.t1 = o, h.t2 = A
							} else!p && B && (y = Yg(A, e, !0), F = Zg(e, A), B = Bi(B, F), e = [e[0] + y[0] * B, e[1] + y[1] * B, e[2] + y[2] * B], A = [A[0] - y[0] * B, A[1] - y[1] * B, A[2] - y[2] * B]), s = e, W = A;
							J.add({
								x: e[0],
								y: e[2],
								e: e[1]
							}), J.addAll(b), J.add({
								x: A[0],
								y: A[2],
								e: A[1]
							})
						} else {
							var n = Ud(i, r, R, v, Q);
							if (i._19Q || (n = -n), v) {
								var L = e[0],
									S = e[1],
									t = e[2],
									$ = N.getTall() / 2 + n;
								s = [L - n, S + $, t], W = [L + n, S + $, t], J.add({
									x: L - n,
									y: t,
									e: S
								}), J.add({
									x: L - n,
									y: t,
									e: S + $
								}), J.add({
									x: L + n,
									y: t,
									e: S + $
								}), J.add({
									x: L + n,
									y: t,
									e: S
								})
							} else {
								y = Yg(A, e, !0), F = Zg(e, A);
								var a = {
									x: e[0],
									y: e[2]
								},
									q = {
										x: A[0],
										y: A[2]
									},
									O = nr(M, a, q, n),
									U = O.x - a.x,
									_ = O.y - a.y;
								B = Bi(B, F), y[0] *= B, y[1] *= B, y[2] *= B, s = [e[0] + y[0] + U, e[1] + y[1], e[2] + y[2] + _], W = [A[0] - y[0] + U, A[1] - y[1], A[2] - y[2] + _], p ? (J.add({
									x: e[0],
									y: e[2],
									e: e[1]
								}), J.add({
									x: s[0],
									y: s[2],
									e: s[1]
								}), J.add({
									x: W[0],
									y: W[2],
									e: W[1]
								}), J.add({
									x: A[0],
									y: A[2],
									e: A[1]
								})) : (J.add({
									x: s[0],
									y: s[2],
									e: s[1]
								}), J.add({
									x: W[0],
									y: W[2],
									e: W[1]
								}))
							}
						}
						h.c1 = s, h.c2 = W
					}
					h.list = d(ok) === pq ? i.createTubeModel(J, P, Z / 2, Y) : i.createLineModel(J, P, Z, "edge", "edge.dash")
				}
			}
		});
		var am = function(d, g) {
				im(am, this, [d, g])
			};
		De(am, Ym, {
			_80o: function(Z, y, B) {
				var t = this,
					K = t.gv,
					S = t.shapeModel;
				Qe(K, t.mat), S ? Dh(K, t.data, S, t, t.getBodyColor(), B) : (nq(t, Z, y, t.left, B), nq(t, Z, y, t.front, B), nq(t, Z, y, t.right, B), nq(t, Z, y, t.back, B), nq(t, Z, y, t.top, B), nq(t, Z, y, t.bottom, B)), Dk(K)
			},
			validate: function(o, _) {
				var j, O, e = this,
					U = e.s,
					J = e.data,
					I = J.p3(),
					Z = J._thickness / 2,
					D = J.isClosePath(),
					f = J.getPoints(),
					B = J.getSegments(),
					C = U(Mk),
					h = o && o.uv;
				if (e.clear(), 0 > Z) O = e.shapeModel = Yi(f, B, U(Oe), U(Lh), C, U(Qo), J.getTall(), J.getShapeElevation(), D), U(Bm) ? U("shape3d.image") || delete O.uv : (delete O.vs, delete O.ns, delete O.uv), U("shape3d.top.image") || delete O.top_uv, U("shape3d.bottom.image") || delete O.bottom_uv;
				else if (U(ok) === pq) j = vk(f, B, C, D), O = e.shapeModel = {
					vs: []
				}, U("shape3d.image") && (O.uv = [], O.sum = U(Qo) || Zh(j) || 1, O.len = 0), U(Oe) && !D && (O.top_vs = [], U("shape3d.top.image") && (O.top_uv = [])), U(Lh) && !D && (O.bottom_vs = [], U("shape3d.bottom.image") && (O.bottom_uv = [])), e._12O(j, Z);
				else {
					var t, Q, T, c, m, P, G, L, q, n;
					if (j = vk(f, B, C, D), m = e.vf(Km, h, !1, _), Z && (P = e.vf(Uj, h, !1, _), G = D ? M : e.vf($c, h, !1, _), L = D ? M : e.vf(Oj, h, !1, _), q = e.vf(Mr, h, !1, _), n = e.vf(pb, h, !1, _)), Z) {
						for (var i = 0, K = j.length; K > i; i++) j[i] = e._tryRemoveBezierPoints(j[i], Z);
						e._12O(j, Z)
					} else m && j.forEach(function(A) {
						if (c = A.length, c > 0) for (t = A[0], T = 1; c > T; T++) Q = A[T], e.addV(m.vs, t, Q), t = Q
					});
					e._20Q(j), o || (m && (m.ns = Mq(m.vs), Sf(m, "vs"), Sf(m, Bf)), Z && (P && (P.ns = Mq(P.vs), Sf(P, "vs"), Sf(P, Bf)), G && (G.ns = Mq(G.vs), Sf(G, "vs"), Sf(G, Bf)), L && (L.ns = Mq(L.vs), Sf(L, "vs"), Sf(L, Bf)), q && (q.ns = Mq(q.vs), Sf(q, "vs"), Sf(q, Bf)), n && (n.ns = Mq(n.vs), Sf(n, "vs"), Sf(n, Bf))))
				}
				var X = e.mat = nd();
				Qf(X, I), hf(X, J.r3(), J.getRotationMode());
				var g = J.getScale3d(),
					H = J._dynamicScale3d;
				H && (g[0] *= H[0], g[1] *= H[1], g[2] *= H[2]), Zj(X, g), Qf(X, Ze(I)), o && (Zq(e, X, o, O), e.clear())
			},
			_20Q: function(r) {
				var C, Y, d, V, S, Q, m, G = this,
					c = G.front,
					t = G.back,
					l = G.top,
					X = G.bottom,
					H = c ? c.tuv : M,
					a = t ? t.tuv : M,
					F = l ? l.tuv : M,
					K = X ? X.tuv : M,
					E = 0;
				(H || a || F || K) && (C = G.s(Qo) || Zh(r) || 1, r.forEach(function(W) {
					if (Y = W.length, Y > 0) for (Q = W[0], d = 1; Y > d; d++) m = W[d], V = E / C, E += Zg(Q, m), S = E / C, G._14O(c, V, S), G._14O(t, 1 - S, 1 - V), G._14O(l, V, S), G._14O(X, V, S), Q = m
				}))
			},
			_14O: function(q, m, e) {
				if (q) {
					var h = q.uv,
						C = q.tuv;
					if (C) {
						if (h) var o = h[0] + (h[6] - h[0]) * m,
							F = h[1] + (h[7] - h[1]) * m,
							j = h[2] + (h[4] - h[2]) * m,
							b = h[3] + (h[5] - h[3]) * m,
							W = h[2] + (h[4] - h[2]) * e,
							u = h[3] + (h[5] - h[3]) * e,
							G = h[0] + (h[6] - h[0]) * e,
							w = h[1] + (h[7] - h[1]) * e;
						else o = m, F = 0, j = m, b = 1, W = e, u = 1, G = e, w = 0;
						C.push(j, b, W, u, G, w, G, w, o, F, j, b)
					}
				}
			},
			_13O: function(P) {
				var T = P.uv,
					M = P.tuv;
				M && (T ? M.push(T[2], T[3], T[4], T[5], T[6], T[7], T[6], T[7], T[0], T[1], T[2], T[3]) : M.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
			},
			_tryRemoveBezierPoints: function(v, b) {
				var P = v.length;
				if (4 > P) return v;
				var S, e, T, D, N, A, m = !1,
					U = function(Q) {
						return v[Q]
					},
					l = function(p) {
						return v[P - 1 - p]
					};
				for (N = 0; 1 >= N; N++) for (A = N ? l : U, e = A(0), T = A(1), S = 2; P - 1 > S; S++) if (D = A(S), !D.remove) if (D.b) {
					var C = nr(e, T, D, b);
					C.adjust ? (D.remove = !0, m = !0) : (e = T, T = D)
				} else e = T, T = D;
				if (!m) return v;
				var r = [];
				for (S = 0; P > S; S++) v[S].remove || r.push(v[S]);
				return r
			},
			_12O: function(O, U) {
				var A, z, k, g, B, s = this;
				O.forEach(function(D) {
					if (B = D.length, B > 0) for (A = {
						p: D[0],
						n: !0
					}, g = 1; B > g; g++) z = D[g], k = B - 1 > g ? D[g + 1] : M, s.addPoint(A, z, k, U, D)
				})
			},
			addPoint: function(r, W, R, p, Z) {
				var w, o, N, B, $, I, k, t, H, Q = this,
					O = r.p,
					J = r.f,
					Y = r.b,
					q = Q.s("shape3d.side") || wq,
					z = Q.s("shape3d.start.angle"),
					E = Q.s("shape3d.sweep.angle"),
					G = Q.shapeModel,
					j = Q.data.isClosePath();
				if (r.n && (r.n = !1, J = j && Z.length > 2 ? nr(Z[Z.length - 2], O, W, p) : nr(M, O, W, p), Y = Jp(O, J), G ? G.top_vs && Q._10O(Y, J, q, z, E, G.top_vs, G.top_uv) : (w = Q.left) && (Q.addV(w.vs, Y, J), Q._13O(w))), o = R ? nr(O, W, R, p) : j && Z.length > 2 ? nr(O, W, Z[1], p) : nr(O, W, M, p), N = Jp(W, o), G) {
					var A, f, l = G.vs,
						d = G.uv,
						D = G.sum;
					for (d && (A = G.len / D, G.len += Zg(O, W), f = G.len / D), I = Q._9O(Y, J, q, z, E), k = Q._9O(N, o, q, z, E), t = 0; q > t; t++) H = t + 1, _r(l, I[H]), _r(l, k[t]), _r(l, I[t]), _r(l, k[t]), _r(l, I[H]), _r(l, k[H]), d && (B = t / q, $ = H / q, d.push(A, $, f, B, A, B, f, B, A, $, f, $));
					!R && G.bottom_vs && Q._10O(N, o, q, z, E, G.bottom_vs, G.bottom_uv, !0)
				} else!R && (w = Q.right) && (Q.addV(w.vs, o, N), Q._13O(w)), (w = Q.front) && Q.addV(w.vs, J, o), (w = Q.back) && Q.addV(w.vs, N, Y), (w = Q.top) && Q.addH(w.vs, J, o, N, Y, !0), (w = Q.bottom) && Q.addH(w.vs, Y, N, o, J);
				r.p = W, r.f = o, r.b = N
			},
			_10O: function(H, z, L, I, u, h, m, T) {
				var W, N, E = this,
					k = E.data,
					R = E._9O(H, z, L, I, u),
					i = (H.x + z.x) / 2,
					Z = (H.y + z.y) / 2,
					s = k.getShapeElevation(),
					d = 0;
				for (d = 0; L > d; d++) T ? (_r(h, R[d]), _r(h, R[d + 1])) : (_r(h, R[d + 1]), _r(h, R[d])), _r(h, [i, s, Z]), m && (T ? (W = o * (d + 1) / L + I, N = o * d / L + I) : (W = o * d / L + I, N = o * (d + 1) / L + I), m.push(.5 - .5 * K(N), .5 - .5 * C(N), .5 - .5 * K(W), .5 - .5 * C(W), .5, .5))
			},
			_9O: function(b, D, U, Y, M) {
				var n, Q, z = this,
					c = z.data,
					S = [],
					R = (b.x + D.x) / 2,
					t = (b.y + D.y) / 2,
					u = c.getTall() / 2,
					$ = c.getShapeElevation(),
					L = 0;
				for (M = M || o; U >= L; L++) n = M * L / U + Y, Q = K(n), S.push([R + (b.x - R) * Q, $ + u * C(n), t + (b.y - t) * Q]);
				return S
			},
			addV: function(e, g, l) {
				var Q = g.x,
					z = g.y,
					n = l.x,
					u = l.y,
					W = this.data,
					O = W.getShapeElevation(),
					G = W.getTall() / 2;
				e.push(Q, O - G, z, n, O - G, u, n, O + G, u, n, O + G, u, Q, O + G, z, Q, O - G, z)
			},
			addH: function(M, z, v, F, B, G) {
				var L = this.data,
					p = L.getTall() / 2,
					d = L.getShapeElevation() + (G ? p : -p);
				M.push(z.x, d, z.y, v.x, d, v.y, F.x, d, F.y, F.x, d, F.y, B.x, d, B.y, z.x, d, z.y)
			},
			vf: function(m, L, E, J) {
				var o, u = this,
					A = u.gv.getFaceVisible(u.data, m);
				return (E || A) && (o = Wo(u, m, J), o.vs = [], o.tuv = A && (o.texture || L) ? [] : M, o.visible = A), o
			}
		});
		var re = function(R, $) {
				im(re, this, [R, $])
			};
		De(re, rq, {
			_25Q: 1,
			validate: function(J) {
				var t = this,
					L = t.data,
					K = t.s,
					Z = L.getPoints(),
					x = Z.size();
				if (t.shapeModel = t.info = M, x > 1) {
					var o = t.info = {},
						h = L.getSegments(),
						X = L.getThickness(),
						b = cq(Z.get(0)),
						O = cq(Z.get(x - 1)),
						Y = x % 2;
					0 === Y ? (o.c1 = cq(Z.get(x / 2 - 1)), o.c2 = cq(Z.get(x / 2))) : o.p3 = cq(Z.get((x - Y) / 2)), o.s1 = b, o.s2 = cq(Z.get(1)), o.t1 = cq(Z.get(x - 2)), o.t2 = O, o.list = K(ok) === pq ? t.createTubeModel(Z, h, X / 2, J) : t.createLineModel(Z, h, X, "shape.border", "shape.dash")
				}
				var c = L.p3(),
					V = t.mat = nd();
				Qf(V, c), hf(V, L.r3(), L.getRotationMode());
				var j = L.getScale3d(),
					f = L._dynamicScale3d;
				f && (j[0] *= f[0], j[1] *= f[1], j[2] *= f[2]), Zj(V, j), Qf(V, Ze(c))
			},
			_80o: function(m, r, z) {
				var d = this,
					H = d.shapeModel;
				if (H) {
					var Z = d.gv;
					Qe(Z, d.mat), Dh(Z, d.data, H, d, d.getBodyColor(), z), Dk(Z)
				}
			}
		}), vq(z, {
			accordionViewExpandIcon: Fl(Gh),
			accordionViewCollapseIcon: Fl(Gh, !0),
			accordionViewLabelColor: Bl,
			accordionViewLabelFont: an,
			accordionViewTitleBackground: Lj,
			accordionViewSelectBackground: qj,
			accordionViewSelectWidth: 3,
			accordionViewSeparatorColor: r,
			splitViewDividerSize: 1,
			splitViewDividerBackground: Lj,
			splitViewDragOpacity: .5,
			splitViewToggleIcon: {
				width: 16,
				height: 16,
				comps: [{
					type: lp,
					rect: [2, 2, 12, 12],
					background: Gh
				}]
			},
			propertyViewLabelColor: Dr,
			propertyViewLabelSelectColor: Bl,
			propertyViewLabelFont: an,
			propertyViewExpandIcon: Fl(Vq),
			propertyViewCollapseIcon: Fl(Vq, !0),
			propertyViewBackground: Kr,
			propertyViewRowLineVisible: !0,
			propertyViewColumnLineVisible: !0,
			propertyViewRowLineColor: ol,
			propertyViewColumnLineColor: ol,
			propertyViewSelectBackground: qj,
			listViewLabelColor: Dr,
			listViewLabelSelectColor: Bl,
			listViewLabelFont: an,
			listViewRowLineVisible: !1,
			listViewRowLineColor: ol,
			listViewSelectBackground: qj,
			treeViewLabelColor: Dr,
			treeViewLabelSelectColor: Bl,
			treeViewLabelFont: an,
			treeViewExpandIcon: Fl(Ak),
			treeViewCollapseIcon: Fl(Ak, !0),
			treeViewRowLineVisible: !1,
			treeViewRowLineColor: ol,
			treeViewSelectBackground: qj,
			treeViewDoubleClickToToggle: !0,
			tableViewLabelColor: Dr,
			tableViewLabelSelectColor: Bl,
			tableViewLabelFont: an,
			tableViewRowLineVisible: !0,
			tableViewColumnLineVisible: !0,
			tableViewRowLineColor: ol,
			tableViewColumnLineColor: ol,
			tableViewSelectBackground: qj,
			treeTableViewLabelColor: Dr,
			treeTableViewLabelSelectColor: Bl,
			treeTableViewLabelFont: an,
			treeTableViewExpandIcon: Fl(Ak),
			treeTableViewCollapseIcon: Fl(Ak, !0),
			treeTableViewRowLineVisible: !0,
			treeTableViewColumnLineVisible: !0,
			treeTableViewRowLineColor: ol,
			treeTableViewColumnLineColor: ol,
			treeTableViewSelectBackground: qj,
			tableHeaderLabelColor: Dr,
			tableHeaderLabelFont: an,
			tableHeaderColumnLineVisible: !0,
			tableHeaderColumnLineColor: $r,
			tableHeaderBackground: Kr,
			tableHeaderMoveBackground: sm,
			tableHeaderInsertColor: qj,
			tableHeaderSortDescIcon: Np(Vq, !0),
			tableHeaderSortAscIcon: Np(Vq),
			tabViewTabGap: 1,
			tabViewLabelColor: Bl,
			tabViewLabelFont: an,
			tabViewTabBackground: Lj,
			tabViewSelectWidth: 3,
			tabViewSelectBackground: qj,
			tabViewMoveBackground: sm,
			tabViewInsertColor: qj,
			toolbarLabelColor: Dr,
			toolbarLabelSelectColor: Bl,
			toolbarLabelFont: an,
			toolbarBackground: Kr,
			toolbarSelectBackground: qj,
			toolbarItemGap: 8,
			toolbarSeparatorColor: th
		}, !0);
		var io = {
			translateX: 1,
			sortColumn: 1
		},
			he = {
				sortable: 1,
				sortOrder: 1,
				sortFunc: 1
			},
			vn = {
				focusData: 1
			},
			dl = {
				dataModel: 1,
				sortColumn: 1,
				sortFunc: 1,
				visibleFunc: 1,
				rootData: 1,
				rootVisible: 1
			},
			gp = {
				dataModel: 1,
				sortFunc: 1,
				visibleFunc: 1,
				categorizable: 1
			},
			Ap = function(Y, u) {
				u.add(Y), Y.hasChildren() && Y.eachChild(function(v) {
					Ap(v, u)
				})
			},
			lj = function(o, c, b, K, G, q, X, d, H, s, $) {
				var E, a = b.getValueType(s),
					J = b.getAlign(s);
				if (b.getEnumValues(s)) {
					var T = b.toEnumLabel(c, s),
						y = Vr || 0,
						B = 0,
						x = q,
						k = z.getTextSize(K, T).width;
					return E = Ob(b.toEnumIcon(c, s)), E && (B = q + Vr / 2, "center" === J ? B += (d - (y + k)) / 2 : "right" === J && (B = B + d - (y + k)), xd(o, E, B, X + H / 2, s, $), x = B + Vr / 2), T != M && (E ? jh(o, T, K, G, x, X, d - (x - q), H) : jh(o, T, K, G, q, X, d, H, J)), void 0
				}
				return c = b.formatValue(c), c != M ? a === Bq ? (kq(o, q, X, d, H, c), void 0) : a === ug || !a && Gc(c) ? (E = Ob(c ? Ji : Nr), xd(o, E, q + d / 2, X + H / 2, s, $), void 0) : (jh(o, c, K, G, q, X, d, H, J), void 0) : void 0
			},
			Kb = function(s, E) {
				var T = E.view,
					K = Tf(s),
					g = E.column || E.property;
				T.getDataModel().beginTransaction(), E.editor = s, s.info = E, T.setCurrentEditor(s), T.getView().insertBefore(K, T._79O), Mb(s, E.editorRect), s.setFocus ? s.setFocus() : jf(s), s.commitValue = function() {
					s._17Q && (s = s._17Q), T.setValue(E.data, g, s.getValue ? s.getValue() : s.value), s.close && s.close(), Er(K)
				}, g.onEditorCreated && g.onEditorCreated(E)
			},
			Ag = function(C, p, P, j, u) {
				var n = ag(C, P),
					T = p.value,
					c = p.view,
					a = u.getValueType(p.data);
				return n.onblur = n.onchange = function() {
					c.endEditing()
				}, "input" === C ? (T = u.formatValue(T), T != M && (n.value = T), n.onkeydown = function(P) {
					gq(P) && c.endEditing()
				}, (a === In || a === Bd) && n.addEventListener(on, z.numberListener, !1)) : C === gc && j.forEach(function(Q) {
					var i = x.createElement("option");
					i.innerHTML = u.toEnumLabel(Q), i.value = Q, u.isEnumEqual(T, Q) && (i.selected = !0), gm(n, i)
				}), Kb(n, p), n
			},
			cs = d.widget = {},
			wb = function(A, Y, C) {
				De(J + ".widget." + A, Y, C)
			};
		vq(vb, {
			ms_value: function(t) {
				t.getValue = function(b) {
					var o = this.getItemById(b),
						z = o.element;
					return bc(z) ? z : z ? z.getValue ? z.getValue() : z.value : o.selected
				}, t.setValue = function(u, D) {
					var P = this.getItemById(u),
						_ = P.element;
					_ && !bc(_) ? _.setValue ? _.setValue(D) : _.value = D : Gc(D) ? (P.selected = D, this.iv()) : (P.element = D, this.iv())
				}, t.v = function(w, K) {
					var U = this;
					if (2 === arguments.length) U.setValue(w, K);
					else {
						if (!Hj(w)) return U.getValue(w);
						for (var y in w) U.setValue(y, w[y])
					}
					return U
				}
			},
			_46o: function(R) {
				R._icon = M, R._accessType = M, R._valueType = M, R._editable = !1, R._batchEditable = !0, R._align = $c, R._nullable = !0, R._emptiable = !1, R.setParent = Ye, R.formatValue = function(T) {
					var Q = this,
						g = Q._valueType;
					return Q.getEnumValues() ? Q.toEnumLabel(T) : g === ug ? !! T : T != M && g === In ? W(T) : T
				}, R.setEnum = function(W, l, r, S, I, A, g) {
					var N = this;
					W && !lo(W) && W.values && (S = W.editable, r = W.icons, l = W.labels, I = W.strict, A = W.maxHeight, g = W.dropDownWidth, W = W.values), _n(W) && (W = W._as), _n(l) && (l = l._as), _n(r) && (r = r._as), N._enumValues = W, N._enumLabels = l, N._enumIcons = r, N._enumEditable = S, N._enumStrict = I == M ? !0 : I, N._enumMaxHeight = A, N._enumDropDownWidth = g, W && W.length && Up(W[0]) && (N._valueType = Bd), N.fp("enum", !1, !0)
				}, R.getEnumDropDownWidth = function() {
					return this._enumDropDownWidth
				}, R.getEnumMaxHeight = function() {
					return this._enumMaxHeight
				}, R.isEnumEditable = function() {
					return this._enumEditable
				}, R.getEnumValues = function() {
					return this._enumValues
				}, R.getEnumLabels = function() {
					return this._enumLabels
				}, R.getEnumIcons = function() {
					return this._enumIcons
				}, R.isEnumStrict = function() {
					return this._enumStrict
				}, R.isEnumEqual = function(T, k) {
					return this._enumStrict ? T === k : T == k
				}, R.toEnumLabel = function(l, H) {
					var F = this,
						D = F.getEnumValues(H),
						S = F.getEnumLabels(H);
					if (D && S) for (var R = 0; R < D.length; R++) if (F.isEnumEqual(l, D[R])) return S[R];
					return l
				}, R.toEnumIcon = function(T, c) {
					var C = this,
						H = C.getEnumValues(c),
						S = C.getEnumIcons(c);
					if (H && S) for (var j = 0; j < H.length; j++) if (C.isEnumEqual(T, H[j])) return S[j];
					return r
				}
			},
			_45o: function(r) {
				r._87o = function(g, $, L, _, a, H) {
					if (g) {
						var q = this,
							B = q._90I,
							X = Dn(1);
						q._columnLineVisible && (a -= 1), q._rowLineVisible && (H -= 1), 0 >= a || 0 >= H || (q._90I || (B = q._90I = {}), B[$] || (B[$] = new jg), Mb(X, q.tx() + L, q.ty() + _, a, H), gm(X, g), q._view.insertBefore(X, q._79O), g.onParentAdded && g.onParentAdded(X), B[$].add(X))
					}
				}, r._76o = function() {
					var m = this,
						H = m._90I;
					if (H) {
						for (var d in H) H[d].each(function(y) {
							Er(y)
						});
						delete m._90I
					}
				}, r._77o = function(O) {
					var q = this;
					if (q._90I) {
						var J = q._90I[O];
						J && (J.each(function(S) {
							Er(S)
						}), delete q._90I[O])
					}
				}
			},
			_47o: function(x) {
				x.getValue = function(y, B) {
					return B.getValue ? B.getValue(y, B, this) : fg(y, B.getAccessType(), B.getName())
				}, x.setValue = function(g, N, b) {
					if (N.isEmptiable(g) || "" !== b || (b = r), N.isNullable(g) || b != M) {
						var z = this,
							W = N.getName(g),
							G = N.getAccessType(g),
							V = N.getValueType(g);
						V === In && bc(b) ? b = Q(b) : V === Bd && bc(b) ? b = parseFloat(b) : V === ug && bc(b) && (b = "true" === b), z._batchEditable && N._batchEditable && z.isSelected(g) ? z.sm().each(function(y) {
							N.setValue ? N.setValue(y, N, b, z) : Ki(y, G, W, b)
						}) : N.setValue ? N.setValue(g, N, b, z) : Ki(g, G, W, b)
					}
				}, x.setCurrentEditor = function(K) {
					this.endEditing(), this._currentEditor = K, this.redraw()
				}, x.isEditing = function(J, W) {
					var l = this,
						B = l._currentEditor;
					if (!B) return !1;
					if (W) {
						var D = B.info;
						return D ? (D.column || D.property) === W && D.data === J : !1
					}
					return !0
				}, x.endEditing = function() {
					var u = this,
						c = u._currentEditor;
					c && (delete u._currentEditor, c.commitValue && c.commitValue(c.info), u.redraw(), u.getDataModel().endTransaction())
				}, x.beginEditing = function(Y) {
					this.endEditing();
					var I = this,
						L = Y.column || Y.property;
					if (L.beginEditing) L.beginEditing(Y);
					else {
						var Z = Y.data,
							b = Y.value,
							o = I.getSelectBackground(Z),
							D = L.getEnumValues(Z),
							K = L.getSlider(Z),
							j = L.getColorPicker(Z);
						if (K) {
							var T = jn(cs.Slider, K);
							return T.setValue(b), T.getView().onblur = function() {
								I.endEditing()
							}, T.isInstant() && (T.onValueChanged = function() {
								I.setValue(Z, L, T.getValue())
							}), Kb(T, Y), void 0
						}
						if (j || L.getValueType(Z) === Bq) {
							var y = jn(cs.ColorPicker, j);
							return y.setValue(b), y.onClosed = function() {
								I.endEditing()
							}, y.isInstant() && (y.onValueChanged = function(y, Y) {
								I.setValue(Z, L, Y)
							}), Kb(y, Y), y.open(), void 0
						}
						if (D) {
							if (cs.ComboBox) {
								var x = new cs.ComboBox;
								x.setValue(b), x.setValues(D), x.setLabels(L.getEnumLabels(Z)), x.setIcons(L.getEnumIcons(Z)), x.setEditable(L.isEnumEditable(Z)), x.setStrict(L.isEnumStrict(Z)), x.setMaxHeight(L.getEnumMaxHeight(Z)), x.setDropDownWidth(L.getEnumDropDownWidth(Z)), x.onClosed = function() {
									I.endEditing()
								}, Kb(x, Y), x.open()
							} else Ag(gc, Y, o, D, L);
							return
						}
						var n = L.getValueType(Z);
						if (n === ug || Gc(b)) return I.setValue(Z, L, !b), void 0;
						if (L.getItemEditor(Z)) {
							var N = Tp(L.getItemEditor(Z)),
								u = new N(Z, L, I, Y),
								A = u.getView();
							return A._17Q = u, u.setValue(b), pl(A), Kb(A, Y), u.editBeginning && u.editBeginning(), void 0
						}
						Ag("input", Y, o, M, L)
					}
				}
			},
			_44o: function(A) {
				A.init = function(y) {
					var d = this,
						W = d.th = new zc(y),
						M = d._view = _h(1, d);
					d.tv = d._tableView = y, gm(M, W.getView()), gm(M, y.getView()), W.mp(function(_) {
						_.property === mo && d.iv()
					}), d.iv()
				}, A.getTableView = function() {
					return this.tv
				}, A.getTableHeader = function() {
					return this.th
				}, A.getDataModel = function() {
					return this.tv.dm()
				}, A.getColumnModel = function() {
					return this.tv.getColumnModel()
				}, A.setColumns = function(g) {
					this.tv.setColumns(g)
				}, A.addColumns = function(Y) {
					this.tv.addColumns(Y)
				}, A.endEditing = function() {
					this.tv.endEditing()
				}, A.validateImpl = function() {
					var c = this,
						n = c.th,
						j = _g(n),
						C = {
							x: 0,
							y: 0,
							width: c.getWidth(),
							height: j
						};
					Mb(n, C), C.y = j, C.height = D(0, c.getHeight() - j), Mb(c.tv, C)
				}
			},
			ms_vs: function(k) {
				k._41o = function() {
					return this._29I.height < this._59I
				}, k._43o = function() {
					var y = this;
					y._41o() && (y._58I || (u(function() {
						y._94O()
					}, zo), y.iv()), y._58I = new Date)
				}, k._94O = function() {
					var d = this;
					if (d._58I) {
						var g = new Date;
						g.getTime() - d._58I.getTime() >= zo ? (delete d._58I, d.iv()) : u(function() {
							d._94O()
						}, zo)
					}
				}, k._93I = function() {
					var M = this,
						z = M._27I;
					if (M._58I || !M._autoHideScrollBar) {
						z || gm(M._79O, z = M._27I = Dn());
						var r = M._29I,
							v = r.height,
							F = M._59I,
							Y = M.getScrollBarSize(),
							h = r.width - Y - 2,
							s = v * (-M.ty() / F),
							O = v * (v / F),
							o = z.style;
						F > v ? (pm > O && (s = s + O / 2 - pm / 2, 0 > s && (s = 0), s + pm > v && (s = v - pm), O = pm), o.visibility = gj, o.background = M.getScrollBarColor(), o.borderRadius = Y / 2 + Ub, Mb(z, h, s, Y, O)) : o.visibility = ae
					} else z && (z.style.visibility = ae)
				}
			},
			ms_hs: function(z) {
				z._40o = function() {
					return this._29I.width < this._91I
				}, z._42o = function() {
					var w = this;
					w._40o() && (w._95O || (u(function() {
						w._94I()
					}, zo), w.iv()), w._95O = new Date)
				}, z._94I = function() {
					var j = this;
					if (j._95O) {
						var c = new Date;
						c.getTime() - j._95O.getTime() >= zo ? (delete j._95O, j.iv()) : u(function() {
							j._94I()
						}, zo)
					}
				}, z._92I = function() {
					var c = this,
						Q = c._28I;
					if (c._95O || !c._autoHideScrollBar) {
						Q || gm(c._79O, Q = c._28I = Dn());
						var r = c._29I,
							F = r.width,
							G = c._91I,
							Y = c.getScrollBarSize(),
							u = r.height - Y - 2,
							C = F * (-c.tx() / G),
							f = F * (F / G),
							p = Q.style;
						G > F ? (pm > f && (C = C + f / 2 - pm / 2, 0 > C && (C = 0), C + pm > F && (C = F - pm), f = pm), p.visibility = gj, p.background = c.getScrollBarColor(), p.borderRadius = Y / 2 + Ub, Mb(Q, C, u, f, Y)) : p.visibility = ae
					} else Q && (Q.style.visibility = ae)
				}
			}
		}), Yd(Ji, rb(16, 16, [{
			type: Hf,
			rect: [1, 1, 14, 14],
			background: qj
		}, {
			type: os,
			rect: [1, 1, 14, 14],
			width: 1,
			color: Nd
		}, {
			type: $i,
			points: [13, 3, 7, 12, 4, 8],
			borderWidth: 2,
			borderColor: "#FFF"
		}])), Yd(Nr, rb(16, 16, {
			type: os,
			rect: [1, 1, 14, 14],
			width: 1,
			color: Nd
		})), Yd(Pe, rb(16, 16, [{
			type: Wk,
			rect: [2, 2, 12, 12],
			borderWidth: 1,
			borderColor: Nd,
			background: "#FFF"
		}, {
			type: Wk,
			rect: [4, 4, 8, 8],
			background: qj
		}])), Yd(Yc, rb(16, 16, {
			type: Wk,
			rect: [2, 2, 12, 12],
			borderWidth: 1,
			borderColor: Nd
		})), vb._15Q = function(f) {
			f._29I = kp, f._59I = 0, f._91I = 0, f._5o = function(O) {
				var K = this;
				K._30I = new jg, K._rows = new jg, K._rowMap = {}, K._31I = 0, K._14I = 0, K._view = _h(1, K), K._canvas = Yk(K._view), gm(K._view, K._79O = Dn()), K.dm(O ? O : new Od)
			}, f.getCheckIcon = function(Q) {
				var H = this.sm(),
					r = H.co(Q);
				return H.sg() ? Ob(r ? Pe : Yc) : Ob(r ? Ji : Nr)
			}, f.checkData = function(i) {
				var l = this.sm(),
					r = l.co(i);
				l.sg() && r || (this._32o = 1, r ? l.rs(i) : l.as(i), delete this._32o)
			}, f.getDataAt = function(E) {
				E.target && (E = this.lp(E));
				var k = w(E.y / this._rowHeight),
					q = this._rows;
				return 0 > k || k >= q.size() ? M : q.get(k)
			}, f.onDataDoubleClicked = function() {}, f.onDataClicked = function() {}, f.adjustTranslateX = function() {
				return 0
			}, f.adjustTranslateY = function(q) {
				var H = this.getHeight() - this._59I;
				return H > q && (q = H), q > 0 ? 0 : W(q)
			}, f.onPropertyChanged = function(f) {
				var I = this,
					l = f.property;
				dl[l] ? I.ivm() : vn[l] || I.redraw(), l === om ? I._42o() : l === Zn && I._43o()
			}, f.getLabel = function(q) {
				return q.toLabel()
			}, f.getLabelFont = function() {
				return this._labelFont
			}, f.getLabelColor = function(d) {
				var $ = this;
				if ($.isCheckMode()) {
					if ($._focusData === d) return $._labelSelectColor
				} else if ($.isSelected(d)) return $._labelSelectColor;
				return $._labelColor
			}, f.getStartRowIndex = function() {
				return this._31I
			}, f.getEndRowIndex = function() {
				return this._14I
			}, f.getRowDatas = function() {
				return this._rows
			}, f.getRowIndex = function(o) {
				return this._rowMap[o._id]
			}, f.getRowSize = function() {
				return this._rows.size()
			}, f.getViewRect = function() {
				return Hg(this._29I)
			}, f.isVisible = function(W) {
				return this._visibleFunc ? this._visibleFunc(W) : !0
			}, f.getCurrentSortFunc = function() {
				return this._sortFunc
			}, f.setDataModel = function(U) {
				var f = this,
					Q = f._dataModel,
					x = f._selectionModel;
				Q !== U && (Q && (Q.umm(f.handleDataModelChange, f), Q.umd(f.handleDataPropertyChange, f), Q.umh(f.handleHierarchyChange, f), x || Q.sm().ums(f.handleSelectionChange, f)), f._dataModel = U, U.mm(f.handleDataModelChange, f), U.md(f.handleDataPropertyChange, f), U.mh(f.handleHierarchyChange, f), x ? x._21I(U) : U.sm().ms(f.handleSelectionChange, f), f.fp("dataModel", Q, U))
			}, f.validateModel = function() {
				var D = this;
				D._rows.clear(), D._rowMap = {}, D.buildChildren(D._dataModel._roots);
				var A = D._rows = D._rows.toList(D.isVisible, D),
					r = 0,
					e = D.getCurrentSortFunc(),
					T = A.size();
				for (e && A.sort(e); T > r; r++) D._rowMap[A.get(r)._id] = r
			}, f.buildChildren = function(Z) {
				var C = this;
				Z.each(function(B) {
					C._rows.add(B), C.buildChildren(B._children)
				})
			}, f.handleDataModelChange = function() {
				this.ivm()
			}, f.handleDataPropertyChange = function(y) {
				"parent" === y.property ? this.ivm() : this.invalidateData(y.data)
			}, f.handleHierarchyChange = function() {
				this.ivm()
			}, f.handleSelectionChange = function(o) {
				o.datas.each(this.invalidateData, this), this.onSelectionChanged(o)
			}, f.onSelectionChanged = function(A) {
				var Z = this,
					W = Z.sm();
				!Z.isAutoMakeVisible() || 1 !== W.size() || "set" !== A.kind && "append" !== A.kind || Z._32o || Z.makeVisible(W.ld())
			}, f.handleBackgroundClick = function(K) {
				Dg(K) && !this.isCheckMode() && this.sm().cs()
			}, f.makeVisible = function(z) {
				z && (this._23I = z, this.iv())
			}, f.scrollToIndex = function(W) {
				var m = this,
					A = m._29I,
					f = A.height,
					k = m._rowHeight,
					c = k * W;
				W >= 0 && W < m._rows.size() && f > 0 && (c + k > A.y + f ? m.ty(-c + f - k) : c < A.y && m.ty(-c))
			}, f.autoScroll = function(n, v) {
				var x = this,
					V = x._rowHeight,
					d = V,
					H = V / 4,
					B = x._29I,
					D = x.lp(n),
					p = {
						x: x.tx(),
						y: x.ty()
					};
				return V > 0 && B && (D.x - B.x < d ? x.translate(H, 0) : B.x + B.width - D.x < d && x.translate(-H, 0), D.y - B.y < d ? x.translate(0, H) : B.y + B.height - D.y < d && x.translate(0, -H)), p.x = x.tx() - p.x, p.y = x.ty() - p.y, v && (v.x += p.x, v.y += p.y), p
			}, f.getTopRowOrderSelection = function() {
				var V = this.sm().getTopSelection(),
					X = {},
					_ = new jg;
				return V.each(function(o) {
					X[o._id] = o
				}), this._rows.each(function(j) {
					X[j._id] && _.add(j)
				}), _
			}, f.getRowOrderSelection = function() {
				var n = new jg;
				return this._rows.each(function(l) {
					this.isSelected(l) && n.add(l)
				}, this), n
			}, f.ivm = function() {
				this.invalidateModel()
			}, f.invalidateModel = function() {
				var N = this;
				N._96I || (N._96I = 1, N._32I = 1, delete N._24I), N.iv()
			}, f.redraw = function() {
				var e = this;
				e._32I || (e._32I = 1, delete e._24I, e.iv())
			}, f.invalidateData = function(R) {
				var k = this;
				S ? k.redraw() : k._32I || (k._24I || (k._24I = {}), k._24I[R._id] = R, k.iv())
			}, f.getFocusData = function() {
				return this._focusData
			}, f.setFocusDataById = function(g) {
				this.setFocusData(this.dm().getDataById(g))
			}, f.setFocusData = function(H) {
				var t = this,
					O = t._focusData;
				O !== H && (t._focusData = H, t.fp("focusData", O, H), O && t.invalidateData(O), H && (t.invalidateData(H), t.isAutoMakeVisible() && t.makeVisible(H)))
			}, f.drawRowBackground = function(T, r, f, J, l, q, Y) {
				var i = this,
					s = i.isCheckMode();
				(r === i._focusData && s || f && !s) && kq(T, J, l, q, Y, i.getSelectBackground(r))
			}, f.drawData = function(y, Z, D) {
				var M = this,
					z = M._rowHeight,
					L = z * D,
					N = M._29I,
					v = N.x,
					k = N.width;
				y.save(), y.beginPath(), y.rect(v, L, k, z), y.clip(), M._87o(M.drawRow(y, Z, M.isSelected(Z), v, L, k, z), D, v, L, k, z), y.restore(), M._rowLineVisible && kq(y, v, L + z - 1, k, 1, M._rowLineColor)
			}, f._12I = function(T) {
				var h = this,
					r = h._31I,
					F = h._29I,
					I = F.x,
					G = F.y,
					C = F.width,
					j = F.height;
				for (T.beginPath(), T.rect(I, G, C, j), T.clip(), T.clearRect(I, G, C, j), h._76o(), h._93db(T); r < h._14I; r++) h.drawData(T, h._rows.get(r), r);
				h._92db(T)
			}, f._13I = function(f) {
				for (var W, E = this, B = E._rowHeight, H = E._29I, h = H.x, c = H.width, P = E._31I, U = E._30I; P < E._14I; P++) W = E._rows.get(P), E._24I[W._id] && U.add({
					data: W,
					index: P
				});
				U.isEmpty() || (f.beginPath(), U.each(function(k) {
					f.rect(h, k.index * B, c, B)
				}), f.clip(), U.each(function(x) {
					f.clearRect(h, x.index * B, c, B)
				}), U.each(function(n) {
					E._77o(n.index)
				}), E._93db(f), U.each(function(c) {
					E.drawData(f, c.data, c.index)
				}), E._92db(f), U.clear())
			}, f.validateImpl = function() {
				var U = this,
					W = U._canvas,
					k = U.getWidth(),
					N = U.getHeight(),
					J = U._rowHeight,
					$ = U._32I;
				(k !== W.clientWidth || N !== W.clientHeight) && (Xo(W, k, N), $ = 1);
				var Y = s && !H;
				U._96I && !Y && U.validateModel();
				var V = U._29I,
					p = {
						x: -U.tx(),
						y: -U.ty(),
						width: k,
						height: N
					},
					o = U._rows.size(),
					h = js(W),
					R = U._23I;
				$ || Il(p, V) || ($ = 1), U._29I = p, U._59I = o * J, U._31I = w(p.y / J), U._14I = b((p.y + p.height) / J), U._31I < 0 && (U._31I = 0), U._14I > o && (U._14I = o), U._99I && $ && U._99I(), sl(h, U.tx(), U.ty(), 1), $ ? U._12I(h) : U._24I && U._13I(h), U._93I(), U._92I(), h.restore(), U._32I = U._24I = U._96I = M, R && (U.scrollToIndex(U.getRowIndex(R)), delete U._23I), U.tx(U.tx()), U.ty(U.ty())
			}
		}, vb._48o = function(h) {
			h._rootVisible = !0, h._rootData = M, h._35o = function() {
				this._expandMap = {}, this._levelMap = {}
			}, h.validateModel = function() {
				var d = this,
					Z = d._rootData;
				d._rows.clear(), d._levelMap = {}, d._rowMap = {}, d._currentLevel = 0, Z ? d._rootVisible ? d.isVisible(Z) && d.buildData(Z) : d.buildChildren(Z) : d.buildChildren(), delete d._currentLevel
			}, h.buildData = function(y) {
				var K = this,
					B = y._id,
					E = K._rows;
				K._rowMap[B] = E.size(), E.add(y), K._levelMap[B] = K._currentLevel, K.isExpanded(y) && (K._currentLevel++, K.buildChildren(y), K._currentLevel--)
			}, h.buildChildren = function(A) {
				var O = this,
					z = A ? A._children : O._dataModel._roots,
					V = O.getCurrentSortFunc();
				V && O.isChildrenSortable(A) ? z.toList(O.isVisible, O).sort(V).each(O.buildData, O) : z.each(function(f) {
					O.isVisible(f) && O.buildData(f)
				})
			}, h.getLevel = function(R) {
				return this._levelMap[R._id]
			}, h.getToggleIcon = function(W) {
				var C = this,
					O = C._loader,
					c = C._collapseIcon;
				return O && !O.isLoaded(W) ? c : W.hasChildren() ? C.isExpanded(W) ? C._expandIcon : c : M
			}, h.isCheckMode = function() {
				return this._checkMode != M
			}, h.isChildrenSortable = function() {
				return !0
			}, h.handleDataModelChange = function(X) {
				var Q = this;
				X.kind === pi ? delete Q._expandMap[X.data._id] : X.kind === vd && (Q._expandMap = {}), Q.ivm()
			}, h.toggle = function(Z) {
				var B = this;
				B.isExpanded(Z) ? B.collapse(Z) : B.expand(Z)
			}, h.isExpanded = function(l) {
				return 1 === this._expandMap[l._id]
			}, h.expand = function(c) {
				var I = this,
					m = I._loader;
				I.isExpanded(c) || (m && !m.isLoaded(c) && m.load(c), I._expandMap[c._id] = 1, I.ivm(), I.onExpanded(c))
			}, h.onExpanded = function() {}, h.collapse = function(d) {
				var A = this;
				A.isExpanded(d) && (delete A._expandMap[d._id], A.ivm(), A.onCollapsed(d))
			}, h.onCollapsed = function() {}, h.expandAll = function(N) {
				if (N) this.expand(N), N.eachChild(function(n) {
					this.expandAll(n)
				}, this);
				else {
					var f = this;
					f._dataModel.each(function(F) {
						F.hasChildren() && (f._expandMap[F._id] = 1)
					}), f.ivm()
				}
			}, h.collapseAll = function() {
				this._expandMap = {}, this.ivm()
			}, h.makeVisible = function(O) {
				if (O) {
					var j = this;
					if (!j._rootData || O.isDescendantOf(j._rootData)) {
						for (var T = O._parent; T;) j.expand(T), T = T._parent;
						j._23I = O, j.iv()
					}
				}
			}, h.checkData = function(A) {
				var i, L = this,
					E = L._checkMode,
					z = L.sm(),
					Q = z.co(A);
				if (!z.sg() || !Q) {
					if (L._32o = 1, E === ak) Q ? z.rs(A) : z.as(A);
					else if (E === _k) i = new jg(A), i.addAll(A._children);
					else if ("descendant" === E) i = new jg, Ap(A, i);
					else if ("all" === E && (i = new jg, Ap(A, i), !Q)) for (var d = A._parent; d;) i.add(d), d = d._parent;
					i && (Q ? z.rs(i) : z.as(i)), delete L._32o
				}
			}, h._97I = function(g, H, U, D, C, w, x) {
				var O = this,
					K = O._indent,
					q = O._levelMap[H._id],
					m = O.getIconWidth(H),
					y = Ob(O.getToggleIcon(H));
				y ? (D += K * q, xd(g, y, D + K / 2, C + x / 2, H, O), D += K) : D += K * (q + 1), O._checkMode && (xd(g, O.getCheckIcon(H), D + K / 2, C + x / 2, H, O), D += K), O.drawIcon(g, H, D, C, m, x), O.drawLabel(g, H, D + m, C, x)
			}
		}, vb._14Q = function(H) {
			H.getIcon = function(k) {
				return k.getIcon()
			}, H.getIconWidth = function(K) {
				return this.getIcon(K) ? this._indent : 0
			}, H.drawIcon = function(D, U, X, o, C, y) {
				if (C) {
					var F = this,
						P = F.getBodyColor(U),
						i = Ob(F.getIcon(U), P);
					i && (y -= F.isRowLineVisible() ? 1 : 0, Bb(D, i, Xk, X, o, C, y, U, F, P), Qc(D, F.getBorderColor(U), X, o, C, y))
				}
			}, H.drawLabel = function(I, G, m, s, r) {
				var u = this;
				jh(I, u.getLabel(G), u.getLabelFont(G), u.getLabelColor(G), m, s, 0, r)
			}
		}, vb._50o = function(u) {
			u._98I = function() {
				var z = this,
					W = z._39o = new Od;
				z._60I = new jg, W.mm(z._17o, z), W.md(z._18o, z), W.mh(z._19o, z)
			}, u.setColumns = function(C) {
				this._39o.clear(), this.addColumns(C)
			}, u.addColumns = function(W) {
				var M = this._39o;
				W.forEach(function(V) {
					if (!(V instanceof us)) {
						var L = Tp(V.className);
						V = jn(L ? L : us, V)
					}
					M.add(V)
				})
			}, u.onColumnClicked = function() {}, u.onCheckColumnClicked = function() {}, u._3Q = function(d) {
				for (var l, U = 0, X = this._60I, R = X.size(); R > U; U++) if (l = X.get(U), l.column === d) return l;
				return M
			}, u.getColumnAt = function(i) {
				var _ = this._4Q(i);
				return _ ? _.column : M
			}, u._4Q = function(e) {
				for (var P = this, g = e.target ? P.lp(e).x : e.x, r = P._60I, I = 0; I < r.size(); I++) {
					var N = r.get(I),
						Q = N.startX;
					if (g >= Q && g < Q + N.column.getWidth()) return N
				}
				return M
			}, u.getToolTip = function(T) {
				var y = this,
					f = y.getDataAt(T),
					t = y.getColumnAt(T);
				return f && t ? t.getToolTip(f, y) : M
			}, u.adjustTranslateX = function(i) {
				var l = this.getWidth() - this._91I;
				return l > i && (i = l), i > 0 ? 0 : W(i)
			}, u._99I = function() {
				var n = this,
					m = n._29I,
					S = n._60I;
				S.clear(), n._91I = 0, n._39o._roots.each(function(B) {
					if (B.isVisible()) {
						var i = n._91I + B.getWidth();
						n._91I <= m.x + m.width && i >= m.x && S.add({
							column: B,
							startX: n._91I
						}), n._91I = i
					}
				})
			}, u.drawData = function(s, Q, k) {
				var F = this,
					x = F._rowHeight,
					$ = x * k,
					R = F.isSelected(Q),
					I = F._29I,
					K = I.x,
					a = I.width;
				F.drawRowBackground(s, Q, R, K, $, a, x), F._60I.each(function(K) {
					var O = K.column,
						a = K.startX,
						M = O.getWidth();
					M > 0 && !F.isEditing(Q, O) && (s.save(), s.beginPath(), s.rect(a, $, M, x), s.clip(), F._87o(F.drawCell(s, Q, R, O, a, $, M, x), k, a, $, M, x), F._columnLineVisible && kq(s, a + M - 1, $, 1, x, F._columnLineColor), s.restore())
				}), F._rowLineVisible && kq(s, K, $ + x - 1, a, 1, F._rowLineColor)
			}, u.drawCell = function(o, R, g, N, j, T, H, C) {
				var K = this;
				if (N.drawCell) return N.drawCell(o, R, g, N, j, T, H, C, K);
				var c = K.getValue(R, N);
				lj(o, c, N, K.getLabelFont(R, N, c), K.getLabelColor(R, N, c), j, T, H, C, R, K)
			}, u.getColumnModel = function() {
				return this._39o
			}, u._17o = function() {
				this.redraw()
			}, u._18o = function(h) {
				var q = this;
				h.data === q._sortColumn && he[h.property] ? q.ivm() : (q._42o(), q.redraw())
			}, u._19o = function() {
				this.redraw()
			}, u.getCurrentSortFunc = function() {
				var u = this,
					m = u._sortColumn;
				if (m && m.isSortable()) {
					var N = m.getSortFunc(),
						s = to === m.getSortOrder() ? 1 : -1;
					return N || (N = Or), function(T, S) {
						return N.call(u, u.getValue(T, m), u.getValue(S, m), T, S) * s
					}
				}
				return u._sortFunc
			}, u.isCellEditable = function(s, P) {
				return !this.isCheckMode() && this.isSelected(s) || this.isCheckMode() && s === this._focusData ? P.isEditable() && this.isEditable() : !1
			}, u._37O = function(u, x) {
				if (Dg(x)) for (var s = this, w = s.lp(x), _ = s._60I, m = s._rowHeight, W = s._29I, o = W.x, h = W.y, N = W.width, S = W.height, Y = 0; Y < _.size(); Y++) {
					var j = _.get(Y),
						d = j.startX,
						H = j.column,
						q = H.getWidth();
					if (H !== s._31o && H !== s._4o && s.isCellEditable(u, H, x) && w.x >= d && w.x < d + q) {
						var i = {
							x: d,
							y: s.getRowIndex(u) * m,
							width: q,
							height: m
						},
							c = {
								x: i.x + s.tx(),
								y: i.y + s.ty(),
								width: i.width,
								height: i.height
							},
							f = 0,
							M = 0;
						return i.x < o ? f = i.x - o : i.x + i.width > o + N && (f = i.x + i.width - o - N), f && (s.tx(s.tx() - f), c.x -= f), i.y < h ? M = i.y - h : i.y + m > h + S && (M = i.y + m - h - S), M && (s.ty(s.ty() - M), c.y -= M), s.beginEditing({
							data: u,
							column: H,
							value: s.getValue(u, H),
							event: x,
							rect: i,
							editorRect: c,
							view: s
						}), void 0
					}
				}
			}
		}, cs.BaseItemEditor = function(G, J, b, u) {
			this._data = G, this._column = J, this._master = b, this._editInfo = u
		}, wb("BaseItemEditor", q, {
			ms_ac: ["data", "column", "master", "editInfo"],
			editBeginning: function() {},
			getView: function() {},
			getValue: function() {},
			setValue: function() {}
		});
		var vo = d.Tab = function() {
				im(vo, this)
			};
		Xq("Tab", Jc, {
			ms_ac: ["view", "closable", "disabled"],
			_icon: M,
			_closable: !1,
			_disabled: !1,
			setParent: Ye
		});
		var us = d.Column = function() {
				im(us, this)
			};
		Xq("Column", Jc, {
			_46o: 1,
			ms_ac: ["accessType", "valueType", gj, Mi, Vh, To, "align", Bq, "sortOrder", yc, "sortable", "clickable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
			_visible: !0,
			_width: 80,
			_sortOrder: to,
			_sortFunc: M,
			_sortable: !0,
			_clickable: !0,
			setWidth: function(f) {
				16 > f && (f = 16);
				var M = this._width;
				this._width = f, this.fp(To, M, f)
			},
			getToolTip: function(p, q) {
				return this.formatValue(q.getValue(p, this))
			}
		});
		var Ic = d.Property = function() {
				im(Ic, this)
			};
		Xq("Property", Jc, {
			_46o: 1,
			ms_ac: ["accessType", "valueType", Mi, Vh, "categoryName", Bq, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
			_categoryName: M,
			getToolTip: function(T, w, B) {
				var E = this;
				return w ? E.formatValue(B.getValue(T, E)) : B.getPropertyName(E)
			}
		}), cs.AccordionView = function() {
			var d = this;
			d._20o = {}, d._21o = new jg, d._10o = M, d._9o = M, d._11o = M, d._view = _h(0, d), d.iv()
		}, wb("AccordionView", q, {
			ms_v: 1,
			ms_fire: 1,
			ms_ac: [Wf, _l, "titleHeight", Eb, bn, "titleBackground", "selectWidth", Kc, "orientation", "separatorColor"],
			_expandIcon: z.accordionViewExpandIcon,
			_collapseIcon: z.accordionViewCollapseIcon,
			_titleHeight: cd,
			_labelColor: z.accordionViewLabelColor,
			_labelFont: z.accordionViewLabelFont,
			_titleBackground: z.accordionViewTitleBackground,
			_selectBackground: z.accordionViewSelectBackground,
			_selectWidth: z.accordionViewSelectWidth,
			_orientation: "v",
			_separatorColor: z.accordionViewSeparatorColor,
			onPropertyChanged: function() {
				this.iv()
			},
			getView: function() {
				return this._view
			},
			getTitles: function() {
				return this._21o
			},
			getCurrentTitle: function() {
				return this._10o
			},
			add: function(A, _, h, f) {
				var e = this,
					C = Dn();
				if (e._20o[A]) throw A + " already exists";
				C.onmousedown = ap, C.style.cursor = Vi, C.addEventListener(Z ? aq : mn, function(S) {
					ap(S)
				}, !1), C.addEventListener(Z ? Eq : ji, function(G) {
					ap(G), Dg(G) && (e._10o === A ? e.collapse() : e.expand(A))
				}, !1), gm(e._view, C), e._20o[A] = {
					content: _,
					div: C,
					canvas: Yk(C),
					icon: f
				}, e._21o.add(A), h && e.expand(A), e.iv()
			},
			remove: function(N) {
				var Z = this,
					A = Z._20o[N];
				A && (Er(A.div), delete Z._20o[N], Z._21o.remove(N), Z.iv())
			},
			clear: function() {
				var B = this;
				B._20o = {}, B._21o.clear(), B.iv()
			},
			isExpanded: function(L) {
				return this._10o === L
			},
			expand: function(G) {
				var R = this;
				R._20o[G] && R._10o !== G && (R._10o = G, R.onExpanded(G), R.iv())
			},
			onExpanded: function() {},
			collapse: function() {
				var d = this;
				d._10o && (d.onCollapsed(d._10o), delete d._10o, d.iv())
			},
			onCollapsed: function() {},
			initCanvas: function(V, L, u) {
				Xo(V, L, u);
				var i = js(V);
				return sl(i, 0, 0, 1), i.clearRect(0, 0, L, u), i
			},
			drawTitle: function(n, c, T, C, X) {
				var s = this,
					$ = Ob(X.icon),
					i = s.isExpanded(c),
					v = s._titleHeight,
					S = s._titleBackground,
					r = s._selectWidth,
					V = s._separatorColor,
					w = Ob(i ? s._expandIcon : s._collapseIcon),
					e = r + 4;
				kq(n, 0, 0, T, C, S), i && r && kq(n, 0, 0, r, C, s._selectBackground), (i || s._21o.get(s._21o.size() - 1) !== c) && kq(n, 0, C - 1, T, 1, V ? V : Mp(S)), $ && (xd(n, $, e + Dc($) / 2, v / 2), e += Dc($) + 2), jh(n, c, s.getLabelFont(c), s.getLabelColor(c), e, 0, 0, v), w && xd(n, w, T - Dc(w) / 2 - 4, v / 2)
			},
			validateImpl: function() {
				var k = this,
					R = k._view,
					K = 0,
					M = 0,
					Q = k.getWidth(),
					w = k.getHeight(),
					v = k._titleHeight,
					j = k._21o.size() * v,
					V = k._11o,
					b = k._9o;
				delete k._11o, delete k._9o, k._21o.each(function(X) {
					var G, B, z = k._20o[X],
						$ = z.content,
						Z = k._10o === X;
					Nc(k) ? (Mb(z.div, K, 0, v, w), G = k.initCanvas(z.canvas, v, w), Wj(G, 0, w), mq(G, -T), k.drawTitle(G, X, w, v, z), G.restore(), Z ? (B = D(0, Q - j), $ && (k._11o = $, k._9o = Tf($), Mb($, K + v, 0, B, w)), K += v + B) : K += v) : (Mb(z.div, 0, M, Q, v), G = k.initCanvas(z.canvas, Q, v), k.drawTitle(G, X, Q, v, z), G.restore(), Z ? (B = D(0, w - j), $ && (k._11o = $, k._9o = Tf($), Mb($, 0, M + v, Q, B)), M += v + B) : M += v)
				});
				var C = k._9o;
				V && V !== k._11o && V.endEditing && V.endEditing(), C && C !== b && gm(R, C), b && b !== C && Er(b)
			}
		}), cs.SplitView = function(L, p, x, G) {
			var N = this,
				D = N._dividerDiv = Dn(),
				q = N._60O = Yk(),
				r = N._61O = Yk(),
				o = q.style,
				P = r.style;
			N._view = _h(1, N), gm(N._view, D), o.msTouchAction = rg, o.pointerEvents = rg, o.cursor = Vi, P.msTouchAction = rg, P.pointerEvents = rg, P.cursor = Vi, L && N.setLeftView(L), p && N.setRightView(p), x && N.setOrientation(x), G != M && N.setPosition(G), N.setStatus(bg), new ch(N)
		}, wb("SplitView", q, {
			ms_v: 1,
			ms_fire: 1,
			ms_ac: ["continuousLayout", "dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
			_continuousLayout: !1,
			_position: .5,
			_togglable: !0,
			_orientation: "h",
			_draggable: !0,
			_dividerSize: z.splitViewDividerSize,
			_dividerBackground: z.splitViewDividerBackground,
			_dragOpacity: z.splitViewDragOpacity,
			_toggleIcon: z.splitViewToggleIcon,
			onPropertyChanged: function() {
				this.iv()
			},
			getDividerDiv: function() {
				return this._dividerDiv
			},
			getPosition: function() {
				return this._position
			},
			setPosition: function(H, W) {
				var X = this,
					g = X._position;
				isNaN(H) || (W || (X._82O = 0 > H ? -1 : H > 1 ? 1 : 0), X._position = H, X.fp(vs, g, H))
			},
			getLeftView: function() {
				return this._leftView
			},
			setLeftView: function(x) {
				var P = this,
					H = P._leftView,
					Z = P._view;
				if (P._leftView !== x) {
					if (H && H !== P._rightView) {
						var n = Tf(H);
						n.parentNode === Z && Er(n)
					}
					if (P._leftView = x, x) {
						var u = Tf(x);
						u.parentNode !== Z && Z.insertBefore(u, P._dividerDiv)
					}
					P.fp("leftView", H, x)
				}
			},
			getRightView: function() {
				return this._rightView
			},
			setRightView: function(E) {
				var q = this,
					z = q._rightView,
					S = q._view;
				if (q._rightView !== E) {
					if (z && z !== q._leftView) {
						var c = Tf(z);
						c.parentNode === S && Er(c)
					}
					if (q._rightView = E, E) {
						var $ = Tf(E);
						$.parentNode !== S && S.insertBefore($, q._dividerDiv)
					}
					q.fp("rightView", z, E)
				}
			},
			validateImpl: function() {
				var w = this,
					o = w._draggable,
					a = w._position,
					j = w.getWidth(),
					Q = w.getHeight(),
					Y = w._dividerSize,
					u = w._dividerBackground,
					v = Z ? 18 : 8,
					M = w._dividerDiv,
					H = w._82O,
					t = w._60O,
					y = w._61O,
					c = w._toggleIcon,
					x = w._status,
					N = M.style,
					C = null,
					S = Z ? 20 : 4,
					z = c.comps[0];
				Y >= v || 0 === Y ? w._coverDiv && (Er(w._coverDiv), delete w._coverDiv) : w._coverDiv || (w._coverDiv = Dn(), L && (w._coverDiv.style.background = Lb), gm(M, w._coverDiv)), w._togglable ? t.parentNode || (gm(M, t), gm(M, y)) : (Er(t), Er(y));
				var O = w._coverDiv,
					m = w._leftView,
					J = w._rightView;
				if (Nc(w)) {
					if (Y > j && (Y = j), x === bg) if (1 === H) var l = k(a, j),
						q = D(0, j - Y - l);
					else - 1 === H ? (q = k(-a, j), l = D(0, j - Y - q)) : (l = W((j - Y) * a), q = D(0, j - Y - l));
					else "cl" === x ? (l = 0, q = D(0, j - Y)) : "cr" === x && (q = 0, l = D(0, j - Y));
					m && Mb(m, 0, 0, l, Q), J && Mb(J, l + Y, 0, q, Q), Mb(M, l, 0, Y, Q), w._22o = l, O && (Mb(O, Y / 2 - v / 2, 0, v, Q), O.style.cursor = o ? fi : ""), M.style.cursor = o ? fi : "";
					var I = M.clientHeight / 2,
						f = M.clientWidth;
					Xo(t, f, f), Mb(t, 0, I - f - S, f, f), C = js(t), sl(C, 0, 0, 1), z.rotation = -T, od(C, c, 0, 0, f, f), C.restore(), Xo(y, f, f), Mb(y, 0, I + S, f, f), C = js(y), sl(C, 0, 0, 1), z.rotation = T, od(C, c, 0, 0, f, f), C.restore()
				} else {
					if (Y > Q && (Y = Q), x === bg) if (1 === H) var r = k(a, Q),
						B = D(0, Q - Y - r);
					else - 1 === H ? (B = k(-a, Q), r = D(0, Q - Y - B)) : (r = W((Q - Y) * a), B = D(0, Q - Y - r));
					else "cl" === x ? (r = 0, B = D(0, Q - Y)) : "cr" === x && (B = 0, r = D(0, Q - Y));
					m && Mb(m, 0, 0, j, r), J && Mb(J, 0, r + Y, j, B), Mb(M, 0, r, j, Y), w._22o = r, O && (Mb(O, 0, Y / 2 - v / 2, j, v), O.style.cursor = o ? Vj : ""), N.cursor = o ? Vj : "";
					var P = M.clientWidth / 2,
						f = M.clientHeight;
					Xo(t, f, f), Mb(t, P - f - S, 0, f, f), C = js(t), sl(C, 0, 0, 1), z.rotation = 0, od(C, c, 0, 0, f, f), C.restore(), Xo(y, f, f), Mb(y, P + S, 0, f, f), C = js(y), sl(C, 0, 0, 1), z.rotation = F, od(C, c, 0, 0, f, f), C.restore()
				}
				N.background = u
			}
		});
		var ch = function(D) {
				this.sv = D, this.addListeners()
			};
		De(ch, q, {
			ms_listener: 1,
			getView: function() {
				return this.sv.getView()
			},
			handle_touchstart: function(N) {
				var j = this,
					E = j.sv,
					Q = E._dividerDiv,
					b = E._60O,
					S = E._61O,
					z = E._status,
					n = N.target;
				if (n === b) z === bg ? E.setStatus("cl") : "cr" === z && E.setStatus(bg);
				else if (n === S) z === bg ? E.setStatus("cr") : "cl" === z && E.setStatus(bg);
				else if (Nm(N) && (n === Q || n === E._coverDiv) && (ap(N), E.isDraggable())) {
					E.getLeftView(), E.getRightView();
					var Z = j.maskDiv = Dn();
					if (Z.style.left = 0, Z.style.top = 0, Z.style.width = E.getWidth() + "px", Z.style.height = E.getHeight() + "px", E.getView().appendChild(Z), !E.isContinuousLayout()) {
						var U = j.resizeDiv = Dn();
						U.style.left = Q.style.left, U.style.top = Q.style.top, U.style.width = Q.style.width, U.style.height = Q.style.height, U.style.opacity = E.getDragOpacity(), U.style.background = E.getDividerBackground(), gm(j.getView(), U)
					}
					j._lastAbsPosition = E._22o, j._86o = Nc(E) ? km(N).x : km(N).y, Gm(j, N)
				}
			},
			handleWindowTouchMove: function(j) {
				Nm(j) && this.update(j, this.sv.isContinuousLayout())
			},
			handleWindowTouchEnd: function(l) {
				var Z = this;
				Z.update(l, !0), Z.sv.setStatus(bg), Z.maskDiv && Er(Z.maskDiv), Z.resizeDiv && Er(Z.resizeDiv), Z.maskDiv = Z.resizeDiv = M
			},
			handle_mousedown: function(K) {
				Dg(K) && this.handle_touchstart(K)
			},
			handleWindowMouseMove: function(B) {
				this.handleWindowTouchMove(B)
			},
			handleWindowMouseUp: function(q) {
				this.handleWindowTouchEnd(q)
			},
			update: function(p, v) {
				var g = this,
					U = g.sv,
					l = Nc(U) ? U.getWidth() : U.getHeight(),
					P = U._dividerSize,
					k = g._lastAbsPosition - g._86o;
				Nc(U) ? (k += km(p).x, k > l - P && (k = l - P), 0 > k && (k = 0), g.resizeDiv && (g.resizeDiv.style.left = k + Ub)) : (k += km(p).y, k > l - P && (k = l - P), 0 > k && (k = 0), g.resizeDiv && (g.resizeDiv.style.top = k + Ub)), v && l !== P && (1 === U._82O ? U.setPosition(k, 1) : -1 === U._82O ? U.setPosition(k - l + P, 1) : U.setPosition(k / (l - P), 1))
			}
		}), cs.TabView = function() {
			var L = this,
				V = L._view = _h(1, L),
				t = L._91O = Dn(1),
				g = L._tabModel = new Od,
				c = g.sm(),
				C = L.invalidate;
			L._7o = new jg, L._canvas = Yk(t), gm(V, t), gm(V, L._92O = Dn(1)), c.setSelectionMode(sg), c.ms(C, L), g.mm(C, L), g.md(C, L), g.mh(C, L), new Al(L), L.iv()
		}, wb("TabView", q, {
			ms_v: 1,
			ms_fire: 1,
			ms_tx: 1,
			ms_ty: 1,
			ms_lp: 1,
			ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Eb, bn, "tabBackground", "selectWidth", Kc, "moveBackground", "insertColor"],
			_tabPosition: Mr,
			_tabHeight: cd,
			_tabGap: z.tabViewTabGap,
			_labelColor: z.tabViewLabelColor,
			_labelFont: z.tabViewLabelFont,
			_tabBackground: z.tabViewTabBackground,
			_selectWidth: z.tabViewSelectWidth,
			_selectBackground: z.tabViewSelectBackground,
			_moveBackground: z.tabViewMoveBackground,
			_insertColor: z.tabViewInsertColor,
			_movable: !0,
			getContentDiv: function() {
				return this._92O
			},
			getTitleDiv: function() {
				return this._91O
			},
			getTabModel: function() {
				return this._tabModel
			},
			add: function(X, $, r) {
				var j = new vo,
					J = this._tabModel;
				return j.setName(X), j.setView($), J.add(j), r && J.sm().ss(j), j
			},
			getLabel: function(c) {
				return c.toLabel()
			},
			onPropertyChanged: function() {
				this.iv()
			},
			_7Q: function(W) {
				this._23o = W, this.iv()
			},
			get: function(y) {
				var i = this,
					o = i._tabModel;
				if (Up(y)) return o._roots.get(y);
				if (bc(y)) {
					var W;
					return o.each(function(X) {
						y === i.getLabel(X) && (W = X)
					}), W
				}
				return y instanceof vo ? y : M
			},
			select: function(F) {
				this._tabModel.sm().ss(this.get(F))
			},
			remove: function(Y) {
				var C = this;
				if (Y = C.get(Y)) {
					var D = C._tabModel,
						G = D._roots.indexOf(Y);
					C._tabModel.remove(Y), C._12Q(--G)
				}
			},
			getCurrentTab: function() {
				return this._8o
			},
			hideTabView: function(p, O) {
				O.parentNode === this._92O && (es(O) ? (O.style.display = Db, O._tab_ = p) : Er(O), rd())
			},
			showTabView: function(B, a) {
				es(a) && (a.style.display = "block", a._tab_ = B), a.parentNode !== this._92O && (gm(this._92O, a), rd())
			},
			_24o: function() {
				var t, O = this,
					p = O._8o,
					Q = O._9o,
					e = O._tabModel.sm().ld();
				e && (t = Tf(e.getView())), t !== Q && (Q && (p.getView() && p.getView().endEditing && p.getView().endEditing(), O.hideTabView(p, Q)), t && O.showTabView(e, t)), O._8o = e, O._9o = t, p !== e && O.onTabChanged(p, e)
			},
			onTabClosing: function() {
				return !0
			},
			onTabChanged: function() {},
			onTabClosed: function(M, _) {
				this._12Q(--_)
			},
			_12Q: function(_) {
				var r = this,
					z = r._tabModel,
					y = z.size();
				if (y && !z.sm().ld()) {
					_ == M && (_ = 0), _ >= y && (_ = y - 1), 0 > _ && (_ = 0);
					for (var A = _; A >= 0; A--) {
						var Z = r.get(A);
						if (!Z.isDisabled()) return r.select(Z), Z
					}
					for (A = _ + 1; y > A; A++) if (Z = r.get(A), !Z.isDisabled()) return r.select(Z), Z
				}
			},
			getTabWidth: function(z) {
				var C = 4,
					j = Ob(z.getIcon());
				j && (C += Dc(j, z) + 4);
				var G = this.getLabel(z);
				return G && (C += ib(this.getLabelFont(z), G).width + 4), z.isClosable() && (C += 10), C
			},
			drawTab: function(U, E, C, l, S, k, Y) {
				var H, I = this,
					A = I._tabPosition,
					s = C + 4,
					a = I._selectWidth,
					g = Ob(E.getIcon()),
					u = E.isDisabled(),
					R = I.getLabelColor(E),
					$ = I.getLabelFont(E),
					W = I.getLabel(E),
					N = I._selectBackground,
					h = A === $c + "-vertical",
					Q = A === Oj + "-vertical";
				(h || Q) && (s = l + 4), u && (U.globalAlpha = Wd), kq(U, C, l, S, k, Y), E === I._8o && a && (A === Mr ? kq(U, C, l + k - a, S, a, N) : A === $c ? kq(U, C + S - a, l, a, k, N) : A === Oj ? kq(U, C, l, a, k, N) : h ? kq(U, C + S - a, l, a, k, N) : Q ? kq(U, C, l, a, k, N) : kq(U, C, l, S, a, N));
				var M = S / 2;
				if (h && (Wj(U, M, l + k / 2), mq(U, F), Wj(U, -M, -l - k / 2)), g) {
					var x = pd(g, E),
						L = Dc(g, E);
					if (h || Q) {
						var v = C + S / 2,
							f = s + x / 2;
						Wj(U, v, f), mq(U, T), Wj(U, -v, -f), xd(U, g, C + S / 2, s + x / 2, E, I), Wj(U, v, f), mq(U, -T), Wj(U, -v, -f), s += x + 4
					} else xd(U, g, s + L / 2, l + k / 2, E, I), s += L + 4
				}
				return h || Q ? (Wj(U, S / 2, s + S / 2), mq(U, T), Wj(U, -S / 2, -s - S / 2), jh(U, W, $, R, C, s, k, S), Wj(U, S / 2, s + S / 2), mq(U, -T), Wj(U, -S / 2, -s - S / 2)) : jh(U, W, $, R, s, l, S, k), h && (Wj(U, M, l + k / 2), mq(U, -F), Wj(U, -M, -l - k / 2)), E.isClosable() && (H = Q ? {
					x: C + S - 12,
					y: l + k - 12,
					width: 12,
					height: 12
				} : {
					x: C + S - 12,
					y: l + 2,
					width: 12,
					height: 12
				}, this.drawCloseIcon(E, U, R, H)), u && (U.globalAlpha = 1), H
			},
			drawCloseIcon: function(Z, t, I, y) {
				var m = y.x,
					w = y.y;
				t.strokeStyle = I, t.lineWidth = 1, t.beginPath(), t.moveTo(m + 2, w + 8), t.lineTo(m + 8, w + 2), t.moveTo(m + 8, w + 8), t.lineTo(m + 2, w + 2), t.stroke()
			},
			validateImpl: function() {
				var C = this;
				C._24o();
				var T, $ = C._canvas,
					x = C._tabPosition,
					B = C._91O,
					P = C._92O,
					X = C._tabModel,
					G = C.getWidth(),
					e = C.getHeight(),
					z = C._tabHeight,
					H = C._7o,
					c = C._tabGap,
					n = x === Mr,
					L = x === $c,
					p = x === Oj,
					k = x === $c + "-vertical",
					w = x === Oj + "-vertical",
					r = C._23o,
					v = 0;
				if ((L || p) && X._roots.each(function(x) {
					v = D(C.getTabWidth(x), v)
				}), n ? (Mb(B, 0, 0, G, z), T = {
					x: 0,
					y: z,
					width: G,
					height: D(0, e - z)
				}) : L ? (Mb(B, 0, 0, v, e), T = {
					x: v,
					y: 0,
					width: D(0, G - v),
					height: e
				}) : p ? (Mb(B, G - v, 0, v, e), T = {
					x: 0,
					y: 0,
					width: D(0, G - v),
					height: e
				}) : k ? (Mb(B, 0, 0, z, e), T = {
					x: z,
					y: 0,
					width: D(0, G - z),
					height: e
				}) : w ? (Mb(B, G - z, 0, z, e), T = {
					x: 0,
					y: 0,
					width: D(0, G - z),
					height: e
				}) : (Mb(B, 0, e - z, G, z), T = {
					x: 0,
					y: 0,
					width: G,
					height: D(0, e - z)
				}), Mb(P, T), k || w) {
					C._9o && (T.x = 0, Mb(C._8o.getView(), T)), Xo($, z, e);
					var M = js($),
						t = 0;
					if (sl(M, 0, C.ty(), 1), M.clearRect(0, 0, z, e), H.clear(), X._roots.each(function(q) {
						var P, e = C.getTabWidth(q);
						r && r.tab === q || (P = C.drawTab(M, q, 0, t, z, e, C._tabBackground)), H.add({
							_75o: P,
							tab: q,
							startY: t,
							endY: t + e,
							height: e
						}), t += e + c
					}), C._23Q = D(0, t - c), r) {
						var R = r.position;
						C.drawTab(M, r.tab, 0, r.startY, z, r.height, C._moveBackground), kq(M, 0, R, z, 1, C._insertColor)
					}
					M.restore(), C.ty(C.ty())
				} else if (L || p) {
					C._9o && (T.x = 0, Mb(C._8o.getView(), T)), Xo($, v, e);
					var M = js($),
						t = 0;
					if (sl(M, 0, C.ty(), 1), M.clearRect(0, 0, v, e), H.clear(), X._roots.each(function(R) {
						var T;
						r && r.tab === R || (T = C.drawTab(M, R, 0, t, v, z, C._tabBackground)), H.add({
							_75o: T,
							tab: R,
							startY: t,
							endY: t + z,
							height: z
						}), t += z + c
					}), C._23Q = D(0, t - c), r) {
						var R = r.position;
						C.drawTab(M, r.tab, 0, r.startY, v, r.height, C._moveBackground), kq(M, 0, R, v, 1, C._insertColor)
					}
					M.restore(), C.ty(C.ty())
				} else {
					C._9o && (T.y = 0, Mb(C._8o.getView(), T)), Xo($, G, z);
					var M = js($),
						I = 0;
					if (sl(M, C.tx(), 0, 1), M.clearRect(0, 0, G, z), H.clear(), X._roots.each(function(Y) {
						var G, K = C.getTabWidth(Y);
						r && r.tab === Y || (G = C.drawTab(M, Y, I, 0, K, z, C._tabBackground)), H.add({
							_75o: G,
							tab: Y,
							startX: I,
							endX: I + K,
							width: K
						}), I += K + c
					}), C._64I = D(0, I - c), r) {
						var R = r.position;
						C.drawTab(M, r.tab, r.startX, 0, r.width, z, C._moveBackground), Te(M, C._insertColor, R, 0, z)
					}
					M.restore(), C.tx(C.tx())
				}
				for (var m = [], s = P.children, N = 0; N < s.length; N++) {
					var Z = s[N],
						i = Z._tab_;
					i && !X.contains(i) && m.push(Z)
				}
				m.forEach(function(U) {
					P.removeChild(U)
				})
			}
		});
		var Al = function(R) {
				this.tv = R, this.addListeners()
			};
		De(Al, q, {
			ms_listener: 1,
			getView: function() {
				return this.tv._91O
			},
			handle_mousewheel: function(Q) {
				this.handleScroll(Q, 10 * (Q.wheelDelta / 40))
			},
			handle_DOMMouseScroll: function(C) {
				this.handleScroll(C, 10 * -C.detail)
			},
			handleScroll: function(i, r) {
				ap(i);
				var k = this.tv,
					$ = k._tabPosition;
				!k._40o() || $ !== Mr && $ !== pb || k.tx(this.tv.tx() + r), !k._41o() || $ !== $c && $ !== Oj && $ !== $c + "-vertical" && $ !== Oj + "-vertical" || k.ty(this.tv.ty() + r)
			},
			_8Q: function(N) {
				var S, Q, h = this.tv,
					P = h._tabPosition,
					p = h._7o;
				if (P === Mr || P === pb) {
					var O = h.lp(N).x;
					for (S = 0; S < p.size(); S++) if (Q = p.get(S), Q.startX <= O && O <= Q.endX) return Q
				} else if (P === $c || P === Oj || P === $c + "-vertical" || P === Oj + "-vertical") {
					var R = h.lp(N).y;
					for (S = 0; S < p.size(); S++) if (Q = p.get(S), Q.startY <= R && R <= Q.endY) return Q
				}
				return M
			},
			isClickable: function(r) {
				var V = this.tv,
					x = V._tabPosition,
					y = this._73o = this._8Q(r);
				return !V._40o() || x !== Mr && x !== pb ? !V._41o() || x !== $c && x !== Oj && x !== $c + "-vertical" && x !== Oj + "-vertical" ? y && (!y.tab.isDisabled() || V.isMovable()) : !0 : !0
			},
			handle_mousemove: function(y) {
				var I = this;
				$b ? I._74o = I._8Q(y) : I.getView().style.cursor = I.isClickable(y) ? Vi : ""
			},
			handle_mousedown: function(W) {
				this.handle_mousemove(W), this.handle_touchstart(W)
			},
			handle_touchstart: function(h) {
				var v = this,
					E = v.tv,
					D = E._tabPosition;
				ap(h), v.isClickable(h) && (D === Mr || D === pb ? (v.x = km(h).x, v.lp = E.lp(h), v.tx = E.tx()) : (v.y = km(h).y, v.lp = E.lp(h), v.ty = E.ty()), Gm(v, h))
			},
			handleWindowMouseMove: function(h) {
				this.handleWindowTouchMove(h)
			},
			handleWindowTouchMove: function(r) {
				var z, V = this,
					J = V.tv,
					y = J._tabPosition,
					F = V._73o;
				if (y === Mr || y === pb) {
					if (z = km(r).x - V.x, !V._25o && !V.moving && R(z) > 2 && (J._40o() && !Ik(r) ? V._25o = 1 : F && J.isMovable() && (V.moving = 1)), V._25o) J.tx(V.tx + z);
					else if (V.moving) {
						var W = V.lp.x + z,
							_ = J._tabGap / 2;
						J._7o.each(function(L) {
							var P = L.endX,
								b = W - L.startX < P - W;
							W >= L.startX && P >= W && J._7Q({
								tab: F.tab,
								startX: F.startX + z,
								width: F.width,
								front: b,
								insertTab: L.tab,
								position: b ? D(0, L.startX - _) : k(J._64I, P + _)
							})
						})
					}
				} else if (z = km(r).y - V.y, !V._25o && !V.moving && R(z) > 2 && (J._41o() && !Ik(r) ? V._25o = 1 : F && J.isMovable() && (V.moving = 1)), V._25o) J.ty(V.ty + z);
				else if (V.moving) {
					var E = V.lp.y + z,
						_ = J._tabGap / 2;
					J._7o.each(function(R) {
						var m = R.endY,
							t = E - R.startY < m - E;
						E >= R.startY && m >= E && J._7Q({
							tab: F.tab,
							startY: F.startY + z,
							height: F.height,
							front: t,
							insertTab: R.tab,
							position: t ? D(0, R.startY - _) : k(J._23Q, m + _)
						})
					})
				}
			},
			handleWindowMouseUp: function(k) {
				this.handleWindowTouchEnd(k)
			},
			handleWindowTouchEnd: function() {
				var V = this,
					q = V.tv,
					l = q._tabPosition,
					r = q.getTabModel(),
					n = r._roots,
					s = V._73o;
				if (V.moving) {
					var P = q._23o;
					if (P && P.insertTab !== P.tab) {
						var C = P.tab,
							A = n.remove(C),
							b = n.indexOf(P.insertTab);
						b >= 0 && (P.front || b++, b <= n.size() && (n.add(C, b), r._38I(C, A, b)))
					}
					q._7Q(M), delete V.moving
				} else if (!V._25o && s) {
					C = s.tab;
					var i = V._74o;
					if (!i || i.tab === C) if (!C.isDisabled() && Gn(s._75o, V.lp)) {
						var O = function() {
								var m = n.indexOf(C);
								r.remove(C), q.onTabClosed(C, m)
							};
						q.onTabClosing(C, O) && O()
					} else C.isDisabled() || q._8o === C || r.sm().ss(C)
				}
				V._25o = V._73o = V._74o = l === Mr || l === pb ? V.x = V.lp = V.tx = M : V.y = V.lp = V.ty = M
			}
		}), cs.PropertyView = function(W) {
			var j = this;
			j._view = _h(1, j), j._canvas = Yk(j._view), gm(j._view, j._79O = Dn()), j._rows = new jg, j._28o = new jg, j._26o = {}, j._26Q = {};
			var J = j._propertyModel = new Od,
				L = j.ivm;
			J.mm(L, j), J.md(L, j), J.mh(L, j), j.dm(W ? W : new Od), new ab(j)
		}, wb("PropertyView", q, {
			ms_ac: [Eb, Ip, bn, Mi, Vh, "categorizable", bd, yc, Eh, Wf, _l, ni, ic, uc, "selectRowIndex", Kc, "background", df, xf, Tm, pe, un],
			ms_v: 1,
			ms_dm: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			ms_lp: 1,
			ms_vs: 1,
			_45o: 1,
			_47o: 1,
			ms_tip: 1,
			_29I: kp,
			_59I: 0,
			_9I: 0,
			_selectRowIndex: -1,
			_editable: !0,
			_batchEditable: !0,
			_categorizable: !0,
			_indent: Vr,
			_background: z.propertyViewBackground,
			_expandIcon: z.propertyViewExpandIcon,
			_collapseIcon: z.propertyViewCollapseIcon,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoHideScrollBar: zf,
			_selectBackground: z.propertyViewSelectBackground,
			_rowHeight: Sb,
			_rowLineVisible: z.propertyViewRowLineVisible,
			_rowLineColor: z.propertyViewRowLineColor,
			_10I: .5,
			_columnLineVisible: z.propertyViewColumnLineVisible,
			_columnLineColor: z.propertyViewColumnLineColor,
			_labelColor: z.propertyViewLabelColor,
			_labelSelectColor: z.propertyViewLabelSelectColor,
			_labelFont: z.propertyViewLabelFont,
			getRows: function() {
				return this._rows
			},
			getColumnPosition: function() {
				return this._10I
			},
			setColumnPosition: function($) {
				0 > $ && ($ = 0), $ > 1 && ($ = 1);
				var I = this,
					s = I._10I;
				I._10I = $, I.fp("columnPosition", s, $)
			},
			getPropertyName: function(z) {
				return z.toLabel()
			},
			getLabelFont: function() {
				return this._labelFont
			},
			getLabelColor: function(v, X, V) {
				return V === this._selectRowIndex ? this._labelSelectColor : this._labelColor
			},
			getPropertyFont: function() {
				return this._labelFont
			},
			getPropertyColor: function(A, e) {
				return e === this._selectRowIndex ? this._labelSelectColor : A.getColor() || this._labelColor
			},
			getCategoryFont: function() {
				return this._labelFont
			},
			getCategoryColor: function() {
				return this._labelColor
			},
			adjustTranslateX: function() {
				return 0
			},
			adjustTranslateY: function(Z) {
				var P = this.getHeight() - this._59I;
				return P > Z && (Z = P), Z > 0 ? 0 : W(Z)
			},
			isExpanded: function(Z) {
				if (!Z) return !0;
				var $ = this._26o[Z];
				return $ ? $.isExpanded : !(this._26Q[Z] === !1)
			},
			toggle: function(Z) {
				var g = this;
				g.isExpanded(Z) ? g.collapse(Z) : g.expand(Z)
			},
			expandAll: function() {
				this.validate();
				for (var P in this._26o) this.expand(P)
			},
			expand: function(b) {
				if (b && b !== Db) {
					var L = this,
						l = L._26o[b];
					l && !l.isExpanded && (l.isExpanded = !0, L.onExpanded(b), L.ivm())
				}
			},
			onExpanded: function() {},
			collapseAll: function() {
				this.validate();
				for (var I in this._26o) this.collapse(I)
			},
			collapse: function(j) {
				if (j && j !== Db) {
					var k = this,
						_ = k._26o[j];
					_ && _.isExpanded && (_.isExpanded = !1, k.onCollapsed(j), k.ivm())
				}
			},
			onCollapsed: function() {},
			getCategoryName: function(S) {
				if (!this.isCategorizable()) return Db;
				var Z = S.getCategoryName();
				return Z ? Z : Db
			},
			getPropertyModel: function() {
				return this._propertyModel
			},
			handleSelectionChange: function() {
				this.ivm()
			},
			setDataModel: function(u) {
				var q = this,
					N = q._dataModel;
				N !== u && (N && (N.umd(q.handlePropertyChange, q), q._selectionModel || N.sm().ums(q.handleSelectionChange, q)), q._dataModel = u, u.md(q.handlePropertyChange, q), q._selectionModel ? q._selectionModel._21I(u) : u.sm().ms(q.handleSelectionChange, q), q.fp(Ke, N, u))
			},
			isVisible: function(z) {
				return this._visibleFunc ? this._visibleFunc(z) : !0
			},
			onPropertyChanged: function(y) {
				var E = this,
					j = y.property;
				gp[j] ? E.ivm() : E.iv(), j === Zn && E._43o()
			},
			getCurrentData: function() {
				return this._27o
			},
			updateCurrentData: function() {
				this._27o = this.sm().ld()
			},
			getRawProperties: function() {
				return this._27o ? this._propertyModel._roots : Zi
			},
			handlePropertyChange: function(T) {
				this._27o === T.data && this.iv()
			},
			ivm: function() {
				this.invalidateModel()
			},
			invalidateModel: function() {
				var p = this;
				p._96I || (p.setSelectRowIndex(-1), p._96I = 1, p.iv())
			},
			redraw: function() {
				this.iv()
			},
			validateModel: function() {
				var C = this,
					K = C._rows,
					R = C._28o,
					o = {},
					T = new jg,
					p = C._27o;
				C.updateCurrentData(), p !== C._27o && C.endEditing(), K.clear(), R.clear(), C.getRawProperties().each(function(m) {
					if (C.isVisible(m)) {
						T.add(m);
						var F = C.getCategoryName(m);
						o[F] || (R.add(F, F === Db ? 0 : r), o[F] = {
							isExpanded: C.isExpanded(F),
							properties: new jg
						})
					}
				}), C._sortFunc && T.sort(C._sortFunc);
				for (var H in C._26o) C._26Q[H] = C.isExpanded(H);
				C._26o = o, R.each(function(S) {
					S !== Db && K.add(S);
					var J = o[S];
					J.isExpanded && T.each(function(Q) {
						C.getCategoryName(Q) === S && (J.properties.add(Q), K.add({
							property: Q,
							data: C._27o
						}))
					}, C)
				})
			},
			validateImpl: function() {
				var C = this;
				C._76o(), C._96I && (C.validateModel(), delete C._96I);
				var B = C._canvas,
					s = C.getWidth(),
					n = C.getHeight(),
					t = -C.ty(),
					x = C._rowHeight,
					X = C._indent,
					Z = s - X,
					D = C._rows,
					f = D.size(),
					i = C._9I = X + Z * C._10I,
					E = C._59I = f * x;
				Xo(B, s, n), C._29I = {
					x: 0,
					y: t,
					width: s,
					height: n
				}, C._31I = w(t / x), C._14I = b((t + n) / x), C._31I < 0 && (C._31I = 0), C._14I > f && (C._14I = f);
				var N, m = js(B),
					A = C._background;
				sl(m, 0, -t, 1), m.beginPath(), m.rect(0, t, s, n), m.clip(), m.clearRect(0, t, s, n), C._93db(m), A && kq(m, 0, 0, X, E, A);
				for (var u = C._31I; u < C._14I; u++) {
					var p = D.get(u),
						t = x * u;
					if (bc(p)) A && kq(m, X, t, Z, x, A), N = Ob(C.isExpanded(p) ? C._expandIcon : C._collapseIcon), N && Bb(m, N, Xk, 0, t, X, x), m.save(), m.beginPath(), m.rect(X, t, Z, x), m.clip(), C.drawCategoryName(m, p, u, X, t, Z, x), m.restore();
					else {
						var y = p.property,
							S = p.data,
							N = Ob(y.getIcon()),
							e = C._selectRowIndex === u ? C.getSelectBackground() : M;
						if (N && Bb(m, N, Xk, 0, t, X, x), e && kq(m, X, t, Z, x, e), m.save(), m.beginPath(), m.rect(X, t, i - X, x), m.clip(), C.drawPropertyName(m, y, u, X, t, i - X, x), m.restore(), !C.isEditing(S, y)) {
							var Y = i + 1,
								d = s - i - 1;
							m.save(), m.beginPath(), m.rect(Y, t, d, x), m.clip(), C._87o(C.drawPropertyValue(m, y, C.getValue(S, y), u, Y, t, d, x, S), u, Y, t, d, x), m.restore()
						}
					}
					C._rowLineVisible && kq(m, X, t + x - 1, Z, 1, C._rowLineColor)
				}
				C._columnLineVisible && (kq(m, i, 0, 1, E, C._columnLineColor), kq(m, s - 1, 0, 1, E)), C._92db(m), C._93I(), m.restore(), C.ty(C.ty())
			},
			drawCategoryName: function(C, m, o, r, K, c, h) {
				jh(C, m, this.getCategoryFont(m), this.getCategoryColor(m), r, K, c, h)
			},
			drawPropertyName: function(e, h, z, c, V, f, E) {
				return h.drawPropertyName ? (h.drawPropertyName(e, h, z, c, V, f, E, this), void 0) : (jh(e, this.getPropertyName(h), this.getPropertyFont(h, z), this.getPropertyColor(h, z), c, V, f, E), void 0)
			},
			drawPropertyValue: function(j, s, K, R, l, S, o, J, M) {
				return s.drawPropertyValue ? s.drawPropertyValue(j, s, K, R, l, S, o, J, M, this) : (lj(j, K, s, this.getLabelFont(s, K, R), this.getLabelColor(s, K, R), l, S, o, J, M, this), void 0)
			},
			isPropertyEditable: function(u) {
				return u.isEditable() && this.isEditable()
			},
			setProperties: function(Y) {
				this._propertyModel.clear(), this.addProperties(Y)
			},
			addProperties: function(f) {
				if (f) {
					var L = this._propertyModel;
					f.forEach(function(e) {
						if (!(e instanceof Ic)) {
							var v = Tp(e.className);
							e = jn(v ? v : Ic, e)
						}
						L.add(e)
					})
				}
			},
			getRowIndexAt: function(q) {
				var i = this,
					r = w(i.lp(q).y / i._rowHeight);
				return r >= 0 && r < i._rows.size() ? r : -1
			},
			getPropertyAt: function(h) {
				var T = this,
					G = T.getRowIndexAt(h);
				return G >= 0 ? T._rows.get(G).property : M
			},
			getToolTip: function(D) {
				var N = this,
					W = N.getPropertyAt(D),
					p = N._27o;
				return W && p ? W.getToolTip(p, N._9I < N.lp(D).x, N) : M
			}
		});
		var ab = function(S) {
				this.pv = S, this.addListeners()
			};
		De(ab, q, {
			ms_listener: 1,
			getView: function() {
				return this.pv._view
			},
			setCursor: function(w) {
				this.getView().style.cursor = w
			},
			clear: function() {
				var r = this;
				r._62O = r.cp = r.ty = r.p = M, r.setCursor(ak)
			},
			handle_mousedown: function(L) {
				this.handle_touchstart(L)
			},
			handle_touchstart: function(K) {
				var A = this,
					b = A.pv;
				ap(K), b.setFocus(K) && (Dg(K) ? (A.cp = km(K), A.ty = b.ty(), A.p = b.getColumnPosition(), A.handle_touchmove(K)) : b.setSelectRowIndex(b.getRowIndexAt(K)))
			},
			handleWindowMouseUp: function() {
				this.clear()
			},
			handleWindowTouchEnd: function() {
				this.clear()
			},
			handle_mouseup: function(L) {
				this.handle_touchend(L)
			},
			handle_touchend: function($) {
				var c = this;
				if (c.cp && !c._62O) {
					var g = c.pv,
						p = g.lp($),
						E = p.x,
						J = p.y,
						r = g._indent,
						K = g.getRowIndexAt($),
						n = g._9I;
					if (K >= 0) {
						var t = g._rowHeight,
							B = t * K,
							b = g._rows.get(K),
							U = b.property;
						if (bc(b)) Ob(g.isExpanded(b) ? g._expandIcon : g._collapseIcon) && E >= 0 && r >= E && J >= B && B + t >= J ? g.toggle(b) : hm($) && g.toggle(b);
						else if (E > n && g.isPropertyEditable(U, $)) {
							var m = {
								x: n + 1,
								y: B,
								width: g.getWidth() - n - 1,
								height: t
							},
								e = {
									x: m.x + g.tx(),
									y: m.y + g.ty(),
									width: m.width,
									height: m.height
								},
								o = 0,
								z = g._29I;
							m.y < z.y ? o = m.y - z.y : m.y + t > z.y + z.height && (o = m.y + t - z.y - z.height), o && (g.ty(g.ty() - o), e.y -= o), g.beginEditing({
								data: b.data,
								property: U,
								value: g.getValue(b.data, U),
								event: $,
								rect: m,
								editorRect: e,
								view: g
							})
						}
					}
					g.setSelectRowIndex(K)
				}
				c.clear()
			},
			handleWindowMouseMove: function(u) {
				this.handleWindowTouchMove(u)
			},
			handleWindowTouchMove: function(Z) {
				var v = this,
					T = v.pv,
					j = v.ty,
					u = v.cp,
					x = km(Z),
					t = v._62O;
				if ("p" === t) T.setTranslateY(j + x.y - u.y);
				else if ("c" === t) {
					var N = T.getWidth() - T._indent;
					if (N > 16) {
						var U = v.p - (u.x - x.x) / N,
							H = 16 / N;
						H > U && (U = H), U > 1 - H && (U = 1 - H), T.setColumnPosition(U)
					}
				} else "s" === t && T.setTranslateY(j + (u.y - x.y) * T._59I / T._29I.height)
			},
			handle_mousemove: function(h) {
				this.handle_touchmove(h)
			},
			handle_touchmove: function(m) {
				if (!$b && Dg(m)) {
					var h = this,
						f = h.pv,
						j = R(f.lp(m).x - f._9I) <= (Z ? 8 : 3);
					h.cp ? h._62O || (j ? (h._62O = "c", Gm(h)) : R(km(m).y - h.cp.y) >= 2 && (h._62O = h.isV(m) ? "s" : "p", Gm(h))) : (j ? h.setCursor(fi) : h.setCursor(ak), h.isV(m) && f._43o())
				}
			},
			isV: function(y) {
				var u = this.pv,
					h = u._29I;
				return u._41o() && h.x + h.width - u.lp(y).x < pj
			},
			handle_mousewheel: function($) {
				this.handleScroll($, $.wheelDelta / 40)
			},
			handle_DOMMouseScroll: function(t) {
				2 === t.axis && this.handleScroll(t, -t.detail)
			},
			handleScroll: function(c, D) {
				var N = this.pv;
				ap(c), N.endEditing(), N.translate(0, D * N.getRowHeight())
			},
			handle_keydown: function(B) {
				var F = this.pv,
					w = F._rows.size(),
					R = F._selectRowIndex + (ar(B) ? -1 : 1);
				(ar(B) || qm(B)) && (0 > R && (R = 0), R >= w && (R = w - 1), F.setSelectRowIndex(R))
			}
		}), cs.ListView = function(P) {
			this._5o(P), new ai(this)
		}, wb("ListView", q, {
			ms_ac: [Eb, Ip, bn, df, bd, xf, Tm, yc, Eh, ni, ic, uc, Cp, Kc],
			ms_v: 1,
			ms_bnb: 1,
			ms_tip: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			ms_lp: 1,
			ms_vs: 1,
			ms_hs: 1,
			_15Q: 1,
			_14Q: 1,
			ms_dm: 1,
			_45o: 1,
			_checkMode: !1,
			_indent: Vr,
			_rowHeight: Sb,
			_rowLineVisible: z.listViewRowLineVisible,
			_rowLineColor: z.listViewRowLineColor,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoMakeVisible: mh,
			_autoHideScrollBar: zf,
			_selectBackground: z.listViewSelectBackground,
			_labelColor: z.listViewLabelColor,
			_labelSelectColor: z.listViewLabelSelectColor,
			_labelFont: z.listViewLabelFont,
			isCheckMode: function() {
				return this._checkMode
			},
			setCheckMode: function(r) {
				var M = this,
					m = M._checkMode;
				M._checkMode = r, M.fp(Rj, m, r)
			},
			drawRow: function(W, K, R, X, E, S, N) {
				var g = this,
					j = 0,
					l = g._indent,
					A = g.getIconWidth(K);
				g.drawRowBackground(W, K, R, X, E, S, N), g._checkMode && (xd(W, Ob(g.getCheckIcon(K)), j + l / 2, E + N / 2, K, g), j += l), g.drawIcon(W, K, j, E, A, N), g.drawLabel(W, K, j + A, E, N)
			}
		});
		var ai = function(b) {
				this.list = b, this._lastSelectDataTime = kr(), this.addListeners()
			};
		De(ai, q, {
			ms_listener: 1,
			getView: function() {
				return this.list._view
			},
			clear: function(e) {
				var o = this,
					q = o.list;
				e && "d" === o._62O && !o.dragCancel && q.handleDragAndDrop(e, "end"), q.draggingData && (q.draggingData = null, q.redraw()), o.dragCancel = o._62O = o._isV = o._isH = o.cp = o.tx = o.ty = M
			},
			handle_mousedown: function(t) {
				this.handle_touchstart(t)
			},
			handle_touchstart: function(n) {
				var e = this,
					k = e.list;
				if (ap(n), k.setFocus(n)) {
					var Z = k.getDataAt(n);
					e.cp = km(n), e.tx = k.tx(), e.ty = k.ty(), Dg(n) ? Z && k.handleDragAndDrop && !e.isV(n) && !e.isH(n) && (k.draggingData = Z, k.redraw(), k.handleDragAndDrop(n, "prepare")) : (Z && e._33o(n, Z), e.clear(n))
				}
			},
			handleWindowMouseUp: function(x) {
				this.clear(x)
			},
			handleWindowTouchEnd: function(J) {
				this.clear(J)
			},
			handle_mouseup: function(A) {
				this.handle_touchend(A)
			},
			handle_touchend: function(f) {
				var H = this,
					E = H.list;
				if (!H._isV && !H._isH && H.cp && !H._62O) {
					var z = E.getDataAt(f);
					z ? (E.isCheckMode() ? H._34o(f, z) : H._33o(f, z), hm(f) ? E.onDataDoubleClicked(z, f) : E.onDataClicked(z, f)) : E.handleBackgroundClick(f)
				}
				H.clear(f)
			},
			handleWindowMouseMove: function(k) {
				this.handleWindowTouchMove(k)
			},
			handleWindowTouchMove: function($) {
				var K = this,
					H = K.list,
					q = K._62O,
					M = K.tx,
					p = K.ty,
					W = K.cp,
					A = km($),
					U = H._29I;
				"p" === q ? H.setTranslate(M + A.x - W.x, p + A.y - W.y) : "v" === q ? H.ty(p + (W.y - A.y) * H._59I / U.height) : "h" === q ? H.tx(M + (W.x - A.x) * H._91I / U.width) : "d" === q && (K.dragCancel || H.handleDragAndDrop($, "between"))
			},
			handle_mousemove: function(F) {
				this.handle_touchmove(F)
			},
			handle_touchmove: function(k) {
				if (!$b && Dg(k)) {
					var A = this,
						X = A.list;
					if (A._isV = A.isV(k), A._isH = A.isH(k), A.cp) {
						if (!A._62O) {
							if (Zg(km(k), A.cp) < 2) return;
							A._isV ? A._62O = "v" : A._isH ? A._62O = "h" : X.draggingData && !this.dragCancel ? (A._62O = "d", X.handleDragAndDrop(k, "begin")) : A._62O = "p", A._62O && "d" !== A._62O && X.draggingData && (X.draggingData = null, X.redraw()), Gm(A)
						}
					} else A._isV && X._43o(), A._isH && X._42o()
				}
			},
			isV: function(g) {
				var f = this.list,
					t = f._29I;
				return f._41o() && t.x + t.width - f.lp(g).x < pj
			},
			isH: function(S) {
				var D = this.list,
					M = D._29I;
				return D._40o() && M.y + M.height - D.lp(S).y < pj
			},
			handle_mousewheel: function(m) {
				this.handleScroll(m, m.wheelDelta / 40, m.wheelDelta !== m.wheelDeltaX)
			},
			handle_DOMMouseScroll: function(Q) {
				this.handleScroll(Q, -Q.detail, 1)
			},
			handleScroll: function(g, B, h) {
				var Q = this.list;
				ap(g), Q.endEditing && Q.endEditing(), h && Q._41o() ? Q.translate(0, B * Q.getRowHeight()) : Q._40o() && Q.translate(10 * B, 0)
			},
			handle_keydown: function(D) {
				if (!z.isInput(D.target)) {
					var r, O = this.list,
						l = O.sm(),
						R = O._rows,
						h = R.size();
					if (zr(D)) O.selectAll();
					else if (mb(D)) O.handleDelete && O.handleDelete(D);
					else if (gk(D))"d" !== this._62O || this.dragCancel || (O.handleDragAndDrop(D, "cancel"), this.dragCancel = !0);
					else if (Co(D)) O.isCheckMode() && (r = O.getFocusData(), r && O.checkData(r));
					else if (ar(D) || qm(D)) {
						var N = O.isCheckMode();
						if (r = N ? O.getFocusData() : l.ld()) {
							var p = O.getRowIndex(r);
							p >= 0 && (ar(D) ? 0 !== p && (r = R.get(p - 1), N ? O.setFocusData(r) : l.ss(r)) : p !== h - 1 && (r = R.get(p + 1), N ? O.setFocusData(r) : l.ss(r)))
						} else h > 0 && (r = R.get(0), N ? O.setFocusData(r) : l.ss(r))
					}
				}
			},
			_34o: function(U, V) {
				var b = this.list,
					t = b.lp(U).x;
				return t >= 0 && t <= b._indent ? (b.checkData(V), void 0) : (b.setFocusData(V), void 0)
			},
			_33o: function($, O) {
				var j = this.list,
					q = j.sm(),
					a = q.ld();
				if (Ik($)) j.isSelected(O) ? q.rs(O) : q.as(O);
				else if (Dm($)) if (a) for (var p = j.getRowIndex(a), b = j.getRowIndex(O); p !== b;) p += b > p ? 1 : -1, q.as(j._rows.get(p));
				else q.ss(O);
				else if (Dg($)) {
					var L = kr();
					if (q.contains(O)) {
						var w = L - this._lastSelectDataTime;
						j.handleDataDoubleSelect && w > 500 && 1500 > w && j.handleDataDoubleSelect($, O)
					}
					q.ss(O), this._lastSelectDataTime = L
				} else q.contains(O) || q.ss(O)
			}
		}), cs.TreeView = function(J) {
			var j = this;
			j._35o(), j._5o(J), new Fg(j)
		}, wb("TreeView", q, {
			ms_ac: [Eb, Ip, bn, "rootVisible", Rj, "rootData", yc, Eh, ni, ic, uc, bd, df, xf, Tm, Wf, _l, Cp, Kc, "loader", "doubleClickToToggle"],
			ms_v: 1,
			ms_bnb: 1,
			ms_tip: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			ms_lp: 1,
			ms_vs: 1,
			ms_hs: 1,
			_15Q: 1,
			ms_dm: 1,
			_48o: 1,
			_14Q: 1,
			_45o: 1,
			_checkMode: M,
			_indent: Vr,
			_rowHeight: Sb,
			_rowLineVisible: z.treeViewRowLineVisible,
			_rowLineColor: z.treeViewRowLineColor,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoHideScrollBar: zf,
			_expandIcon: z.treeViewExpandIcon,
			_collapseIcon: z.treeViewCollapseIcon,
			_autoMakeVisible: mh,
			_selectBackground: z.treeViewSelectBackground,
			_labelColor: z.treeViewLabelColor,
			_labelSelectColor: z.treeViewLabelSelectColor,
			_labelFont: z.treeViewLabelFont,
			_doubleClickToToggle: z.treeViewDoubleClickToToggle,
			drawRow: function(y, K, p, t, W, J, e) {
				var l = this;
				l.drawRowBackground(y, K, p, t, W, J, e), l._97I(y, K, p, 0, W, J, e)
			},
			isOnToggleIcon: function(V) {
				var R = this.getDataAt(V);
				if (R) {
					var e = this.getIndent(),
						G = this.lp(V).x;
					if (Ob(this.getToggleIcon(R))) {
						var p = e * this.getLevel(R);
						if (G >= p && p + e >= G) return !0
					}
				}
				return !1
			}
		});
		var Fg = function(c) {
				im(Fg, this, [c])
			};
		De(Fg, ai, {
			toggle: function(h, m, T, a) {
				var l = this.list,
					Y = l.lp(h).x;
				if (Ob(l.getToggleIcon(m))) {
					var B = T * a;
					if (Y >= B && B + T >= Y) return l.toggle(m), !0
				}
				return l.isDoubleClickToToggle() && hm(h) ? (l.toggle(m), !0) : !1
			},
			_34o: function(E, x) {
				var n = this.list,
					V = n.lp(E).x,
					Y = n._levelMap[x._id],
					J = n._indent,
					I = J * (Y + 1);
				return V >= I && I + J >= V ? (n.checkData(x), void 0) : (this.toggle(E, x, J, Y) || n.setFocusData(x), void 0)
			},
			_33o: function(M, N) {
				var w = this,
					d = w.list;
				w.toggle(M, N, d._indent, d.getLevel(N)) || Fg.superClass._33o.call(w, M, N)
			},
			handle_keydown: function(Y) {
				if (id(Y) || Zc(Y)) {
					var i = this.list,
						q = i._rows,
						H = i.isCheckMode(),
						w = i.sm(),
						p = H ? i.getFocusData() : w.ld();
					p ? p.hasChildren() && (id(Y) ? i.collapse(p) : i.expand(p)) : q.size() > 0 && (p = q.get(0), H ? i.setFocusData(p) : w.ss(p))
				} else Fg.superClass.handle_keydown.call(this, Y)
			}
		});
		var dg = cs.TableView = function(s) {
				this._98I(), this._5o(s), new dr(this)
			};
		wb("TableView", q, {
			ms_ac: [Eb, Ip, bn, "sortMode", Mi, Vh, df, xf, Tm, pe, un, "sortColumn", yc, Eh, ni, ic, uc, Cp, Kc],
			ms_v: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			ms_lp: 1,
			ms_vs: 1,
			ms_hs: 1,
			_15Q: 1,
			ms_dm: 1,
			ms_tip: 1,
			_50o: 1,
			_45o: 1,
			_47o: 1,
			_sortMode: Ug,
			_editable: !0,
			_batchEditable: !1,
			_rowHeight: Sb,
			_rowLineVisible: z.tableViewRowLineVisible,
			_rowLineColor: z.tableViewRowLineColor,
			_columnLineVisible: z.tableViewColumnLineVisible,
			_columnLineColor: z.tableViewColumnLineColor,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoHideScrollBar: zf,
			_autoMakeVisible: mh,
			_selectBackground: z.tableViewSelectBackground,
			_labelColor: z.tableViewLabelColor,
			_labelSelectColor: z.tableViewLabelSelectColor,
			_labelFont: z.tableViewLabelFont,
			getCheckColumn: function() {
				var D = this;
				if (!D._31o) {
					var Y = D._31o = new us;
					Y.setEditable(!0), Y.setWidth(40), Y.getValue = D.getCheckColumValue, Y.drawCell = D.drawCheckColumnCell
				}
				return D._31o
			},
			isCheckMode: function() {
				return this._39o.contains(this._31o)
			},
			setCheckMode: function(L) {
				var Y = this,
					b = Y._39o,
					A = Y.getCheckColumn();
				L !== Y.isCheckMode() && (L ? b.add(A, 0) : b.remove(A), Y.fp(Rj, !L, L))
			},
			getCheckColumValue: function(M, b, i) {
				return i.isSelected(M)
			},
			drawCheckColumnCell: function(e, P, K, r, A, j, O, H, R) {
				xd(e, R.getCheckIcon(P), A + O / 2, j + H / 2, P, R)
			}
		});
		var dr = function(D) {
				im(dr, this, [D])
			};
		De(dr, ai, {
			_34o: function(e, H) {
				var w = this.list,
					l = w._31o;
				if (w.isCellEditable(H, l, e)) {
					var S = w._3Q(l),
						x = w.lp(e).x;
					if (S && x >= S.startX && x < S.startX + l.getWidth()) return w.checkData(H), void 0
				}
				w._37O(H, e), w.setFocusData(H)
			},
			_33o: function(n, d) {
				this.list._37O(d, n), dr.superClass._33o.apply(this, arguments)
			}
		});
		var hn = cs.TreeTableView = function(j) {
				var r = this,
					Y = r._4o = new us;
				r._35o(), r._98I(), r._5o(j), Y.setDisplayName("Name"), Y.setEditable(!0), Y.setWidth(180), Y.drawCell = yk, Y.getValue = Xl, r._39o.add(Y), new jm(r)
			},
			yk = function(R, e, d, m, n, x, v, O, W) {
				W._97I(R, e, d, n, x, v, O)
			},
			Xl = function(M, C, g) {
				return g.getLabel(M)
			};
		wb("TreeTableView", q, {
			ms_ac: [Eb, Ip, bn, "sortMode", Mi, Vh, bd, Rj, "rootData", "rootVisible", yc, Eh, "sortColumn", Wf, _l, ni, ic, uc, Cp, Tm, df, xf, pe, un, Kc, "loader"],
			ms_v: 1,
			ms_bnb: 1,
			ms_fire: 1,
			ms_sm: 1,
			_49o: 1,
			ms_txy: 1,
			ms_lp: 1,
			ms_vs: 1,
			ms_hs: 1,
			_15Q: 1,
			ms_dm: 1,
			ms_tip: 1,
			_50o: 1,
			_48o: 1,
			_14Q: 1,
			_45o: 1,
			_47o: 1,
			_sortMode: Ug,
			_checkMode: M,
			_editable: !0,
			_batchEditable: !1,
			_indent: Vr,
			_rowHeight: Sb,
			_rowLineVisible: z.treeTableViewRowLineVisible,
			_rowLineColor: z.treeTableViewRowLineColor,
			_columnLineVisible: z.treeTableViewColumnLineVisible,
			_columnLineColor: z.treeTableViewColumnLineColor,
			_expandIcon: z.treeTableViewExpandIcon,
			_collapseIcon: z.treeTableViewCollapseIcon,
			_scrollBarColor: lh,
			_scrollBarSize: be,
			_autoHideScrollBar: zf,
			_autoMakeVisible: mh,
			_selectBackground: z.treeTableViewSelectBackground,
			_labelColor: z.treeTableViewLabelColor,
			_labelSelectColor: z.treeTableViewLabelSelectColor,
			_labelFont: z.treeTableViewLabelFont,
			getTreeColumn: function() {
				return this._4o
			}
		});
		var jm = function(n) {
				im(jm, this, [n])
			};
		De(jm, ai, {
			_34o: function(b, A) {
				var X = this.list,
					v = X._4o,
					o = X._3Q(v),
					l = X.lp(b).x;
				if (o) {
					var M = X._indent,
						V = o.startX + M * X.getLevel(A);
					if (Ob(X.getToggleIcon(A)) && l >= V && V + M >= l) return X.toggle(A), void 0;
					if (X.isCellEditable(A, v) && (V += M, l >= V && V + M >= l)) return X.checkData(A), void 0
				}
				X._37O(A, b), X.setFocusData(A)
			},
			_33o: function(t, a) {
				var G = this.list,
					n = G.lp(t).x;
				if (Ob(G.getToggleIcon(a))) {
					var u = G._3Q(G._4o);
					if (u) {
						var r = G._indent,
							x = u.startX + r * G.getLevel(a);
						if (n >= x && x + r >= n) return G.toggle(a), void 0
					}
				}
				G._37O(a, t), jm.superClass._33o.apply(this, arguments)
			}
		});
		var zc = cs.TableHeader = function(Y) {
				var D = this,
					k = D._view = _h(1, D),
					P = D._39o = Y.getColumnModel(),
					L = D.iv;
				D.tv = D._tableView = Y, D._60I = new jg, D._canvas = Yk(k), k.style.background = z.tableHeaderBackground || "", k.style.height = Je + Ub, P.mm(L, D), P.md(L, D), P.mh(L, D), Y.mp(function(P) {
					io[P.property] && D.iv()
				}, D), new _e(D), D.iv()
			};
		wb("TableHeader", q, {
			ms_v: 1,
			ms_lp: 1,
			ms_fire: 1,
			ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Eb, bn, bd, "moveBackground", "insertColor", pe, un, "resizable", "movable"],
			_checkIcon: Nr,
			_movable: !0,
			_resizable: !0,
			_labelColor: z.tableHeaderLabelColor,
			_labelFont: z.tableHeaderLabelFont,
			_columnLineColor: z.tableHeaderColumnLineColor,
			_columnLineVisible: z.tableHeaderColumnLineVisible,
			_sortDescIcon: z.tableHeaderSortDescIcon,
			_sortAscIcon: z.tableHeaderSortAscIcon,
			_moveBackground: z.tableHeaderMoveBackground,
			_insertColor: z.tableHeaderInsertColor,
			_indent: Vr,
			getCheckIcon: function() {
				return this._checkIcon
			},
			getTableView: function() {
				return this.tv
			},
			getLabel: function(X) {
				return X.toLabel()
			},
			getLabelFont: function() {
				return this._labelFont
			},
			getLabelColor: function(f) {
				return f.getColor() || this._labelColor
			},
			getLabelAlign: function(w) {
				return w._align
			},
			onPropertyChanged: function() {
				this.iv()
			},
			_5Q: function(k) {
				this._61I = k, this.iv()
			},
			getLogicalPoint: function(T) {
				return Vd(T, this._canvas, this.tv.tx())
			},
			validateImpl: function() {
				var v = this,
					A = v._canvas,
					H = v.getWidth(),
					D = v.getHeight(),
					Z = v.tv,
					P = v._60I,
					q = v._61I,
					I = -Z.tx(),
					K = 0;
				(H !== A.clientWidth || D !== A.clientHeight) && Xo(A, H, D), P.clear(), v._39o._roots.each(function(J) {
					if (J.isVisible()) {
						var i = K + J.getWidth();
						I + H >= K && i >= I && P.add({
							column: J,
							startX: K
						}), K = i
					}
				});
				var $ = js(A);
				if (sl($, -I, 0, 1), $.beginPath(), $.rect(I, 0, H, D), $.clip(), $.clearRect(I, 0, H, D), P.each(function(U) {
					var R = U.column,
						G = U.startX,
						m = R.getWidth();
					m > 0 && ($.save(), $.beginPath(), $.rect(G, 0, m, D), $.clip(), q && q.column === R || v.drawColumn($, R, G, 0, m, D), v._columnLineVisible && kq($, G + m - 1, 0, 1, D, v._columnLineColor), $.restore())
				}), q) {
					var s = q.column,
						K = q.startX,
						w = q.position,
						i = s.getWidth();
					$.save(), $.beginPath(), $.rect(K, 0, i, D), $.clip(), $.fillStyle = v._moveBackground, $.fill(), v.drawColumn($, s, K, 0, i, D), $.restore(), Te($, v._insertColor, w, 0, D)
				}
				$.restore()
			},
			_6Q: function(X) {
				var C = this.tv;
				return C._31o === X && C.sm().getSelectionMode() === Jg
			},
			drawColumn: function(R, i, U, k, Q, Y) {
				var _ = this,
					j = _.tv,
					s = Ob(i.getIcon()),
					P = _.getLabelAlign(i);
				if (_._6Q(i)) {
					var L = Ob(_._checkIcon);
					xd(R, L, U + Q / 2, k + Y / 2, i, _)
				} else {
					var F = _.getLabel(i),
						C = _.getLabelFont(i),
						T = _.getLabelColor(i),
						y = ib(C, F).width,
						l = s ? _._indent : 0;
					P === $c ? (s && Bb(R, s, Xk, U, k, l, Y), jh(R, F, C, T, U + l, k, Q, Y, $c)) : P === Oj ? (s && Bb(R, s, Xk, U + Q - y - l, k, l, Y), jh(R, F, C, T, U, k, Q, Y, Oj)) : (s && Bb(R, s, Xk, U + (Q - y - l) / 2, k, l, Y), jh(R, F, C, T, U + (Q - y + l) / 2, k, 0, Y, $c))
				}
				if (i.isSortable() && j.getSortColumn() === i && (s = Ob(i.getSortOrder() === to ? _._sortAscIcon : _._sortDescIcon))) {
					var N = Dc(s, i) / 2 + 2;
					xd(R, s, P === Oj ? U + N : U + Q - N, k + Y / 2, i, j)
				}
			}
		});
		var _e = function(T) {
				var b = this;
				b.th = T, b.tv = T._tableView, b.addListeners()
			};
		De(_e, q, {
			ms_listener: 1,
			getView: function() {
				return this.th.getView()
			},
			setCursor: function(Y) {
				this.getView().style.cursor = Y
			},
			handle_mousemove: function(P) {
				if (!$b) {
					var H = this;
					delete H._29o, H.setCursor(ak);
					for (var q = H.th, A = q._60I, m = q.lp(P).x, X = A.size() - 1; X >= 0; X--) {
						var Q = A.get(X),
							u = Q.column,
							D = Q.startX + u.getWidth();
						if (q.isResizable() && R(D - m) <= (Z ? 10 : 3)) return H._29o = Q, H.setCursor(fi), void 0;
						m > Q.startX && D > m && (H._29o = Q), (u.isClickable() || u.isSortable() || q.isMovable() || H.tv.getCheckColumn && u === H.tv.getCheckColumn()) && m > Q.startX && D > m && H.setCursor(Vi)
					}
				}
			},
			handle_mousedown: function(Z) {
				this.handle_touchstart(Z)
			},
			handle_touchstart: function(M) {
				var $ = this;
				ap(M), $.tv.endEditing(), $.handle_mousemove(M), $._29o && ($.x = km(M).x, $.lx = $.th.lp(M).x, $.w = $._29o.column.getWidth(), Gm($, M))
			},
			handleWindowMouseMove: function(h) {
				this.handleWindowTouchMove(h)
			},
			handleWindowTouchMove: function(C) {
				var W = this,
					V = W.th,
					P = W.getView().style.cursor,
					B = W._29o,
					Q = km(C).x - W.x;
				if (W.resizing || W.moving || (P === fi ? W.resizing = 1 : V.isMovable() && P === Vi && R(Q) > 2 && (W.moving = 1)), W.resizing) B.column.setWidth(W.w + Q);
				else if (W.moving) {
					var h = W.lx + Q;
					V._60I.each(function(n) {
						var j = n.startX,
							S = j + n.column.getWidth();
						if (h >= j && S >= h) {
							var w = {
								column: B.column,
								startX: B.startX + Q,
								front: S - h > h - j,
								insertColumn: n.column
							};
							w.position = w.front ? j : S, V._5Q(w)
						}
					})
				}
			},
			_16Q: function(P, o) {
				var r = this,
					k = r.tv,
					j = r.th,
					T = j._checkIcon;
				if (j._6Q(P)) {
					var x = Ob(T),
						Y = r.lx,
						i = P.getWidth(),
						$ = Dc(x, P);
					if (Y >= o + i / 2 - $ && o + i / 2 + $ >= Y) {
						j.setCheckIcon(T === Ji ? Nr : Ji);
						var d = k.sm(),
							F = k._rows;
						return T === Ji ? d.rs(F) : d.ss(F), k.onCheckColumnClicked(P), !0
					}
				}
				return !1
			},
			handleWindowMouseUp: function(m) {
				this.handleWindowTouchEnd(m)
			},
			handleWindowTouchEnd: function(F) {
				var $ = this,
					g = $.tv,
					b = $.th,
					P = $._29o;
				if ($.moving) {
					var K = b._61I;
					if (K && K.insertColumn !== K.column) {
						var J = K.column,
							s = g.getColumnModel()._roots,
							f = s.remove(J),
							V = s.indexOf(K.insertColumn);
						V >= 0 && (K.front || V++, V <= s.size() && (s.add(J, V), g.getColumnModel()._38I(J, f, V)))
					}
					b._5Q(M), delete $.moving
				} else if (!$.resizing && P) {
					J = P.column;
					var o = b.lp(F).x,
						A = P.startX,
						R = !0;
					if (b.onColumnClicked) {
						var O = b.onColumnClicked(J, F, A);
						O === !1 && (R = !1)
					}
					if (R && o >= A && o <= A + J.getWidth() && !$._16Q(J, A)) {
						if (J.isSortable()) {
							var w = g.getSortMode(),
								p = J.getSortOrder();
							w === Ug ? g.getSortColumn() === J ? (p === al && g.setSortColumn(M), J.setSortOrder(p === to ? al : to)) : g.setSortColumn(J) : "bistate" === w && (g.getSortColumn() === J ? J.setSortOrder(p === to ? al : to) : g.setSortColumn(J))
						}
						g.onColumnClicked(J, F, A)
					}
				}
				$._29o = $.resizing = $.x = $.lx = $.w = M
			}
		}), cs.TablePane = function(r) {
			this.init(new dg(r))
		}, wb("TablePane", q, {
			ms_v: 1,
			_44o: 1
		}), cs.TreeTablePane = function(S) {
			this.init(new hn(S))
		}, wb("TreeTablePane", q, {
			ms_v: 1,
			_44o: 1
		}), cs.Toolbar = function(N) {
			var L = this,
				g = L._view = _h(1, L),
				E = g.style;
			E.background = z.toolbarBackground || "", E.height = cd + Ub, L._canvas = Yk(g), L._30o = new jg, L._90I = new jg, L.setItems(N || []), g.handleGroupSelectedChanged = function(Y) {
				if (Y.isSelected()) {
					var f = Y.getGroupId();
					null != f && L._items.forEach(function(Z) {
						var A = Z.element;
						A && A !== Y && A.setSelected && A.getGroupId && A.getGroupId() === f && A.setSelected(!1)
					})
				}
			}, new lq(L)
		}, wb("Toolbar", q, {
			ms_v: 1,
			ms_fire: 1,
			ms_tx: 1,
			ms_lp: 1,
			ms_tip: 1,
			ms_value: 1,
			ms_ac: [em, Eb, bn, Ip, Kc, "itemGap", "separatorColor", "currentItem", "stickToRight"],
			_labelColor: z.toolbarLabelColor,
			_labelSelectColor: z.toolbarLabelSelectColor,
			_labelFont: z.toolbarLabelFont,
			_selectBackground: z.toolbarSelectBackground,
			_itemGap: z.toolbarItemGap,
			_separatorColor: z.toolbarSeparatorColor,
			_stickToRight: !1,
			getSumWidth: function() {
				return this._64I
			},
			getToolTip: function(C) {
				var H = this.getItemInfoAt(C);
				return H ? H.item.toolTip : M
			},
			getLabelColor: function(E) {
				return E && E.selected && E.type !== Ji && E.type !== $k ? this._labelSelectColor : this._labelColor
			},
			onPropertyChanged: function(h) {
				this.iv(), h.property === em && this._items.forEach(function(O) {
					gr(O)
				})
			},
			redraw: function() {
				this.iv()
			},
			addItem: function(U, j) {
				var i = this._items;
				j == M ? i.push(U) : i.splice(j, 0, U), this.fp(em, M, i)
			},
			removeItem: function(L) {
				if (L) for (var U = this._items, $ = 0; $ < U.length; $++) L === U[$] && (U.splice($, 1), this.fp(em, M, U))
			},
			removeItemById: function(R) {
				if (R != M) for (var z = this._items, K = 0; K < z.length; K++) if (R === z[K].id) {
					var P = z.splice(K, 1)[0];
					return this.fp(em, M, z), P
				}
			},
			getItemById: function(G) {
				if (G != M) for (var E = this._items, $ = 0; $ < E.length; $++) {
					var n = E[$];
					if (G === n.id) return n
				}
			},
			setItemVisible: function(U, Y) {
				var R = this.getItemById(U);
				R && (R.visible = Y)
			},
			getItemInfos: function() {
				return this._30o
			},
			getItemInfoAt: function(S) {
				var x = this,
					k = 0,
					O = x._30o,
					_ = x.lp(S),
					G = _.x,
					W = _.y;
				if (W >= 0 && W <= x.getHeight()) for (; k < O.size(); k++) {
					var L = O.get(k);
					if (L.startX <= G && G <= L.endX) return L
				}
				return M
			},
			drawItem: function(l, j, $, F, d) {
				if (j.visible === !1) return 0;
				if (Vb(j.visible) && !j.visible()) return 0;
				var I = this,
					m = j.disabled;
				m && (l.globalAlpha = Wd);
				var Z = I.drawItemImpl(l, j, $, F, d),
					g = I._itemGap;
				return m && (l.globalAlpha = 1), this._currentItem !== j || "separator" === j || j.separator === !0 || j.unfocusable || Qc(l, I._separatorColor, $ - g / 2, 0, Z + g, F), Z
			},
			drawItemImpl: function(i, $, f, D, k) {
				var s = this,
					y = s._view,
					l = s._itemGap,
					K = D / 2,
					c = $.type,
					h = $.element,
					J = $.label;
				bc(h) && (J = h, h = M);
				var n, Q = s.getLabelFont($),
					F = s.getLabelColor($),
					V = $.selected,
					b = Ob($.icon),
					Y = Dc(b, $),
					o = 0,
					B = Y + (J ? ib(Q, J).width : 0);
				if ("separator" === $ || $.separator === !0) return Te(i, s._separatorColor, f, D / 4, K), 1;
				if (h) {
					b && xd(i, b, f + Y / 2, K, $, s), jh(i, J, Q, F, f + Y, 0, 0, D);
					var x = Tf(h);
					k || s._90I.add(x), x.parentNode !== y && gm(y, x), h.iv && h.iv(), h.validate && h.validate();
					var P = x.getBoundingClientRect(),
						E = P.width,
						r = x.style;
					return pl(x), r.left = s.tx() + f + B + Ub, r.top = (D - P.height) / 2 + Ub, B + E
				}
				return c === $k ? n = Ob(V ? Pe : Yc) : c === Ji && (n = Ob(V ? Ji : Nr)), n ? (o = Dc(n, $), xd(i, n, f + o / 2, K, $, s), f += o, B += o) : V && kq(i, f - l / 2, 0, B + l, D, s.getSelectBackground($)), b && xd(i, b, f + Y / 2, K, $, s), jh(i, J, Q, F, f + Y, 0, 0, D), B
			},
			validateImpl: function() {
				var k = this,
					B = k._canvas,
					Q = k.getWidth(),
					b = k.getHeight(),
					c = k._30o,
					T = k._items;
				Xo(B, Q, b);
				var N = js(B),
					q = k._itemGap,
					w = q / 2;
				sl(N, k.tx(), 0, 1), N.clearRect(0, 0, Q, b);
				var e = k._90I;
				k._90I = new jg, c.clear(), T.forEach(function(y) {
					var o = k.drawItem(N, y, w, b);
					c.add({
						item: y,
						startX: w,
						endX: w + o,
						width: o
					}), o && (w += o + q)
				}), e.each(function($) {
					k._90I.contains($) || Er($)
				});
				var H = k._64I;
				k._64I = D(0, w), N.restore(), k._stickToRight ? (k._65O = 0, N = js(B), w = Q - k._64I + q, sl(N, 0, 0, 1), N.clearRect(0, 0, Q, b), c.clear(), T.forEach(function(X) {
					var H = k.drawItem(N, X, w, b, !0);
					c.add({
						item: X,
						startX: w,
						endX: w + H,
						width: H
					}), H && (w += H + q)
				}), N.restore()) : k.tx(k.tx()), H !== k._64I && k.onSumWidthChanged(H, k._64I)
			},
			onSumWidthChanged: function() {},
			handleClick: function(k, Y) {
				var y = this,
					m = k.type,
					A = k.action,
					t = k.groupId,
					u = k.selected;
				k.disabled || (t != M ? u || (k.selected = !0, this._items.forEach(function(C) {
					C.groupId === t && k !== C && (C.selected = !1)
				}), A && k.action(k, y, Y)) : m === Ji || "toggle" === m ? (k.selected = !u, A && k.action(k, y, Y)) : A && k.action(k, y, Y)), rd(), y.iv()
			}
		});
		var lq = function(W) {
				this.tb = W, this.addListeners()
			};
		De(lq, q, {
			ms_listener: 1,
			getView: function() {
				return this.tb._view
			},
			handle_mousewheel: function(L) {
				this.handleScroll(L, 10 * (L.wheelDelta / 40))
			},
			handle_DOMMouseScroll: function(S) {
				this.handleScroll(S, 10 * -S.detail)
			},
			handleScroll: function(b, r) {
				ap(b);
				var T = this.tb;
				T.isScrollable() && !T._stickToRight && (T.tx(T.tx() + r), xl())
			},
			handle_mousemove: function(N) {
				var V = this;
				$b || V.setItem(N)
			},
			handle_mouseout: function(E) {
				var w = this;
				E.target === w.getView() ? w.tb.setCurrentItem(M) : w.handle_mousemove(E)
			},
			handle_mousedown: function(W) {
				this.handle_mousemove(W), this.handle_touchstart(W)
			},
			handle_touchstart: function(M) {
				var X = this,
					I = X.tb,
					h = M.target;
				Dg(M) && (h === X.getView() || h === I._canvas) && (ap(M), I.setFocus(M) && (this.setItem(M, !0), (I.isScrollable() || X.info && !X.info.item.disabled) && (X.x = km(M).x, X.tx = I.tx(), Gm(X, M))))
			},
			handleWindowMouseMove: function(L) {
				this.handleWindowTouchMove(L)
			},
			handleWindowTouchMove: function(_) {
				var C = this,
					q = C.tb;
				if (!q._stickToRight) {
					var c = km(_).x - C.x;
					!C._25o && R(c) > 2 && q.isScrollable() && (C._25o = 1), C._25o && q.tx(C.tx + c)
				}
			},
			handleWindowMouseUp: function(c) {
				this.handleWindowTouchEnd(c)
			},
			handleWindowTouchEnd: function(w) {
				var o = this,
					N = o.tb,
					c = o.info,
					A = o.tb.getItemInfoAt(w);
				if (!o._25o && c) {
					var B = c.item;
					A && A.item === B && N.handleClick(B, w)
				}
				o._25o = o.x = o.tx = M, o.setItem()
			},
			setItem: function(T, f) {
				var d = this,
					x = d.tb,
					n = d.info = T ? x.getItemInfoAt(T) : M,
					D = n ? n.item : M;
				x.setCurrentItem(D), f && D && Vb(D.onDown) && D.onDown(T)
			}
		}), cs.BorderPane = function() {
			this._view = _h(1, this), this.iv()
		}, wb("BorderPane", q, {
			ms_v: 1,
			ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
			ms_fire: 1,
			getLeftView: function() {
				return this._leftView
			},
			setLeftView: function(b, F) {
				this._12o("leftView", b), F != M && this.setLeftWidth(F)
			},
			getRightView: function() {
				return this._rightView
			},
			setRightView: function(i, N) {
				this._12o("rightView", i), N != M && this.setRightWidth(N)
			},
			getTopView: function() {
				return this._topView
			},
			setTopView: function(P, R) {
				this._12o("topView", P), R != M && this.setTopHeight(R)
			},
			getBottomView: function() {
				return this._bottomView
			},
			setBottomView: function(y, w) {
				this._12o("bottomView", y), w != M && this.setBottomHeight(w)
			},
			getCenterView: function() {
				return this._centerView
			},
			setCenterView: function(C) {
				this._12o("centerView", C)
			},
			_12o: function(r, I) {
				var R = this,
					L = "_" + r,
					S = R._view,
					U = R[L];
				U !== I && (U && (U.getView ? Er(U.getView()) : Er(U)), R[L] = I, I && (I.getView ? gm(S, I.getView(), 1) : gm(S, I, 1)), R.fp(r, U, I))
			},
			onPropertyChanged: function() {
				this.iv()
			},
			validateImpl: function() {
				var J = this,
					n = J._topView,
					i = J._bottomView,
					z = J._leftView,
					b = J._rightView,
					e = J._centerView,
					m = J.getWidth(),
					x = J.getHeight(),
					F = 0,
					f = 0,
					t = m,
					s = x,
					B = 0,
					Y = 0,
					j = 0,
					u = 0;
				n && (B = J._topHeight == M ? _g(n) : J._topHeight, f = B), i && (Y = J._bottomHeight == M ? _g(i) : J._bottomHeight, s = x - Y), z && (j = J._leftWidth == M ? Hr(z) : J._leftWidth, F = j), b && (u = J._rightWidth == M ? Hr(b) : J._rightWidth, t = m - u);
				var g = D(0, t - F),
					O = D(0, s - f);
				n && Mb(n, 0, 0, m, B), i && Mb(i, 0, s, m, Y), z && Mb(z, 0, f, j, O), b && Mb(b, t, f, u, O), e && Mb(e, F, f, g, O)
			}
		})
	}
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);