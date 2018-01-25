!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function() {
    "use strict";
    var e = {
            globalEvent: new ht.Notifier
        },
        t = ["box", "cloud", "component-group", "computer", "cross", "cylinder", "flow", "host", "server-component", "storage"],
        o = new ht.widget.Palette,
        n = o.getDataModel(),
        i = new ht.Group,
        a = new ht.Group,
        s = new ht.Group;
    i.setName("基本节点"), i.setExpanded(!0), n.add(i);
    var r = new ht.Text;
    n.add(r), r.setParent(i), r.s("draggable", !0), r.setSize(52, 52), r.s("text", "文本"), r.s("text.align", "center"), r.setDisplayName("文本"), r.a("nodeType", 2), r.setName("文本"), r.s("image.stretch", "centerUniform");
    var d = new ht.Node;
    n.add(d), d.setParent(i), d.s("draggable", !0), d.a("nodeType", 1), d.setName("节点"), d.s("image.stretch", "centerUniform");
    var l = new ht.Node;
    n.add(l), l.setParent(i), l.s("draggable", !0), l.setImage("group_image"), l.a("nodeType", 3), l.setName("组"), l.s("image.stretch", "centerUniform"), a.setName("注册图片"), a.setExpanded(!0), t.forEach(function(e) {
        var t = new ht.Node;
        t.setImage("json/" + e + ".json"), n.add(t), t.setParent(a), t.a("type", 2), t.s("draggable", !0), t.a("nodeType", 1), t.s("image.stretch", "centerUniform")
    }), n.add(a), s.setName("默认形状"), n.add(s), o.setItemImageHeight(62), o.setItemImageWidth(52);
    var c = {
            view: o
        },
        h = window.gv = new ht.graph.GraphView;
    h.setEditable(!0);
    var p = h.getView();
    p.style.background = "#fff", p.style.border = "1px solid rgb(240, 239, 238)";
    h.dm();
    e.globalEvent.add(function(e) {
        "load" === e.type && setTimeout(function() {
            h.setZoom(1, !0)
        }, 100)
    }), h.getView().addEventListener("dragover", function(e) {
        e.preventDefault(), e.dataTransfer.dropEffect = "copy"
    });
    var u = 1;
    h.getView().addEventListener("drop", function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = c.view.dm().sm().ld(),
            o = null,
            n = h.lp(e);
        if (t) {
            var i = t.a("nodeType");
            2 === i ? (console.log("text"), (o = new ht.Text).setDisplayName(t.getDisplayName())) : 1 === i ? ((o = new ht.Node).setName("node" + u++), o.setImage(t.getImage())) : 3 === i && (o = new ht.Group), o.setPosition(n.x, n.y), h.dm().add(o)
        }
    });
    var g = {
            view: h
        },
        f = function(e) {
            var t = this;
            this.dm = e, this._preKeyWord = null, this._preResult = null, this._index = 0, this.dm.mm(function() {
                t._preKeyWord && (t._preKeyWord = null, t._preResult = null, t._index = 0)
            })
        };
    f.prototype.find = function(e) {
        if (!e) return [];
        var t = [];
        return this.dm.getDatas().each(function(o) {
            var n = o.getName();
            n && n.indexOf(e) >= 0 && t.push(o)
        }), t
    }, f.prototype.findEach = function(e) {
        if (!e) return null;
        if (e !== this._preKeyWord && (this._preResult = this.find(e), this._preKeyWord = e, this._index = 0), 0 === this._preResult.length) return null;
        var t = this._preResult[this._index % this._preResult.length];
        return this._index++, t
    };
    var m = function e(t, o) {
        e.superClass.constructor.call(this, t), this._edgeType = o
    };
    ht.Default.def(m, ht.graph.Interactor, {
        setUp: function() {
            m.superClass.setUp.call(this), this._autoMakeVisible = this._graphView.isAutoMakeVisible(), this._graphView.setAutoMakeVisible(!1)
        },
        tearDown: function() {
            m.superClass.tearDown.call(this), this._graphView.setAutoMakeVisible(this._autoMakeVisible), this._graphView.getSelectionModel().clearSelection()
        },
        handle_mousedown: function(e) {
            this.handle_touchstart(e)
        },
        handle_touchstart: function(t) {
            e.globalEvent.fire({
                type: "startCreateEdge"
            }), this._sourceNode = this.getNodeAt(t), this._sourceNode && (this._targetNode = null, this.startDragging(t), this._graphView.addTopPainter(this), this._graphView.getSelectionModel().setSelection(this._sourceNode))
        },
        getNodeAt: function(e) {
            if (ht.Default.isLeftButton(e) && 1 === ht.Default.getTouchCount(e)) {
                var t = this._graphView.getDataAt(e);
                if (t instanceof ht.Node) return t
            }
            return null
        },
        handleWindowMouseMove: function(e) {
            this.handleWindowTouchMove(e)
        },
        handleWindowMouseUp: function(e) {
            this.handleWindowTouchEnd(e)
        },
        handleWindowTouchMove: function(e) {
            var t = this._graphView;
            this.redraw(), this._logicalPoint = t.getLogicalPoint(e), this.autoScroll(e), this._targetNode = this.getNodeAt(e), this._targetNode ? t.getSelectionModel().setSelection([this._sourceNode, this._targetNode]) : t.getSelectionModel().setSelection([this._sourceNode]), this.redraw()
        },
        handleWindowTouchEnd: function(t) {
            if (e.globalEvent.fire({
                type: "endCreateEdge"
            }), this.redraw(), this._targetNode) {
                var o = new ht.Edge(this._sourceNode, this._targetNode);
                o.setParent(this._graphView.getCurrentSubGraph()), this._graphView.getDataModel().add(o), this._graphView.getSelectionModel().setSelection(o), this._edgeType && o.s("edge.type", this._edgeType)
            }
            this._graphView.removeTopPainter(this)
        },
        redraw: function() {
            var e = this._sourceNode.getPosition(),
                t = this._logicalPoint;
            if (e && t) {
                var o = ht.Default.unionPoint(e, t);
                ht.Default.grow(o, 1), this._graphView.redraw(o)
            }
        },
        draw: function(e) {
            var t = this._sourceNode.getPosition(),
                o = this._logicalPoint;
            t && o && (e.lineWidth = 1, e.strokeStyle = "#1ABC9C", e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(o.x, o.y), e.stroke())
        }
    });
    var y = function e(t) {
        e.superClass.constructor.call(this, t), this._points = new ht.List
    };
    ht.Default.def(y, ht.graph.Interactor, {
        setUp: function() {
            y.superClass.setUp.call(this), this._graphView.addTopPainter(this), this._onBackgroundDoubleClicked = this._graphView.onBackgroundDoubleClicked, this._graphView.onBackgroundDoubleClicked = function() {}
        },
        tearDown: function() {
            y.superClass.tearDown.call(this), this._graphView.removeTopPainter(this), this._graphView.onBackgroundDoubleClicked = this._onBackgroundDoubleClicked
        },
        handle_mousedown: function(e) {
            this.handle_touchstart(e)
        },
        handle_touchstart: function(e) {
            this.isLeftClick = ht.Default.isLeftButton(e) && 1 === ht.Default.getTouchCount(e)
        },
        handle_mouseup: function(e) {
            this.handle_touchend(e)
        },
        handle_touchend: function(e) {
            var t = this._graphView;
            if (!t._panning && !t._pinching && this.isLeftClick) {
                if (this.redraw(), ht.Default.isDoubleClick(e)) {
                    if (this._points.size() > 1) {
                        var o = new ht.Shape;
                        o.setPoints(this._points), o.setParent(t.getCurrentSubGraph()), t.getDataModel().add(o), t.getSelectionModel().setSelection(o), this._points = new ht.List
                    } else this._points.clear();
                    this._movePoint = null
                } else this._points.add(this._graphView.getLogicalPoint(e));
                this.redraw(), delete this.isLeftClick
            }
        },
        handle_mousemove: function(e) {
            this._points.size() > 0 && (this.redraw(), this.autoScroll(e), this._movePoint = this._graphView.getLogicalPoint(e), this.redraw())
        },
        redraw: function() {
            var e = this._points;
            if (e.size() > 0) {
                this._movePoint && (e = new ht.List(e)).add(this._movePoint);
                var t = ht.Default.unionPoint(e);
                t && (ht.Default.grow(t, 5), this._graphView.redraw(t))
            }
        },
        draw: function(e) {
            var t = this._points.size();
            if (t > 0) {
                var o = this._points.get(0);
                e.lineWidth = 1, e.strokeStyle = "#1ABC9C", e.beginPath(), e.moveTo(o.x, o.y);
                for (var n = 1; n < t; n++) o = this._points.get(n), e.lineTo(o.x, o.y);
                for (this._movePoint && e.lineTo(this._movePoint.x, this._movePoint.y), e.stroke(), n = 0; n < t; n++) o = this._points.get(n), e.fillStyle = "white", e.strokeStyle = "#34495E", e.lineWidth = 1, e.beginPath(), e.arc(o.x, o.y, 4, 0, 2 * Math.PI, !0), e.fill(), e.stroke()
            }
        }
    });
    var w = new ht.widget.FormPane,
        _ = g.view,
        v = new ht.widget.TextField,
        b = "rgb(159, 159, 159)",
        T = "rgb(231, 231, 231)",
        N = new f(_.dm());
    w.setVGap(0), w.setHGap(0), w.setHPadding(4), w.setVPadding(4), w.addRow(["", {
        button: {
            background: "#fff",
            icon: "json/select.json",
            iconColor: b,
            selectBackground: T,
            togglable: !0,
            groupId: "t",
            selected: !0,
            toolTip: "选择",
            onClicked: function() {
                e.globalEvent.fire({
                    type: "endCreateEdge"
                }), _.setEditable(!0)
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/zoom-in.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "放大",
            onClicked: function() {
                _.zoomIn(!0)
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/zoom-out.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "缩小",
            onClicked: function() {
                _.zoomOut(!0)
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/proportion.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "1:1",
            onClicked: function() {
                _.setZoom(1, !0)
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/full-screen.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "纵览",
            onClicked: function() {
                _.fitContent(!0)
            }
        }
    }, "", {
        button: {
            background: "#fff",
            icon: "json/line.json",
            iconColor: b,
            selectBackground: T,
            togglable: !0,
            groupId: "t",
            toolTip: "直线",
            onClicked: function() {
                _.setInteractors([new ht.graph.DefaultInteractor(_), new ht.graph.TouchInteractor(_, {
                    selectable: !1
                }), new m(_)])
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/right-angle.json",
            iconColor: b,
            selectBackground: T,
            togglable: !0,
            groupId: "t",
            toolTip: "直角线",
            onClicked: function() {
                _.setInteractors([new ht.graph.DefaultInteractor(_), new ht.graph.TouchInteractor(_, {
                    selectable: !1
                }), new m(_, "ortho")])
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/polygon.json",
            iconColor: b,
            selectBackground: T,
            togglable: !0,
            groupId: "t",
            toolTip: "多边形",
            onClicked: function() {
                _.setInteractors([new ht.graph.DefaultInteractor(_), new ht.graph.TouchInteractor(_, {
                    selectable: !1
                }), new y(_)])
            }
        }
    }, {
        button: {
            background: "#fff",
            icon: "json/broken-line.json",
            iconColor: b,
            selectBackground: T,
            togglable: !0,
            groupId: "t",
            toolTip: "折点线",
            onClicked: function() {
                _.setInteractors([new ht.graph.DefaultInteractor(_), new ht.graph.TouchInteractor(_, {
                    selectable: !1
                }), new m(_, "points")])
            }
        }
    }, "", {
        id: "searchInput",
        element: v
    }, {
        button: {
            background: "#fff",
            icon: "json/search.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "搜索",
            onClicked: function() {
                var e = N.findEach(v.getValue());
                e && (_.fitData(e, !0, 20, !0), _.sm().ss(e))
            }
        }
    }, "", {
        button: {
            background: "#fff",
            icon: "json/export.json",
            iconColor: b,
            selectBackground: T,
            toolTip: "导出",
            onClicked: function() {
                var e = window.open().document;
                e.open(), e.write("<pre>" + _.dm().serialize() + "</pre>"), e.close(), e.body.style.margin = "0", e.title = "Export JSON at " + new Date
            }
        }
    }, ""], [.1, 36, 36, 36, 36, 36, 20, 36, 36, 36, 36, 20, 120, 36, 20, 36, .1], 30);
    var k = {
            view: w
        },
        C = function(e, t) {
            this._gv = e, this.init(t)
        };
    C.prototype.init = function(e) {
        var t = this;
        if (!e || !e.formItems) throw new Error("options error");
        var o = this.root = new ht.widget.FormPane;
        o.setHPadding(0), o.setVPadding(0), o.setVGap(0), o.getView().style.display = "none", this._categoryInfo = [], this.elements = [], this.formMap = {}, this.vGap = 6, this.addCatygory("__node", "节点"), e.categories.forEach(function(e) {
            t.addCatygory(e.id, e.label)
        }), e.formItems.forEach(function(e) {
            t.addItem(e)
        }), this._addCatygoryToRoot(), this._addListener()
    }, C.prototype._addCatygoryToRoot = function() {
        var e = 0;
        for (var t in this.formMap) {
            var o = this.formMap[t].getRows().length * (25 + this.vGap) + 1;
            this.root.addRow([this.formMap[t]], [.1], o), this.formMap[t].__rowIndex = e, this._categoryInfo[e].isExpand = !0, this._categoryInfo[e].expandHeight = o, e++
        }
    }, C.prototype._setNodeInfoToForm = function(e) {
        e instanceof ht.Node && this.elements.forEach(function(t) {
            switch (t.accessType) {
                case "style":
                    t.element.setValue(e.s(t.name) || "");
                    break;
                case "attr":
                    t.element.setValue(e.a(t.name) || "");
                default:
                    "name" === t.name ? t.element.setValue(e.getName() || "") : "width" === t.name ? t.element.setValue(e.getWidth()) : "height" === t.name ? t.element.setValue(e.getHeight()) : "positionX" === t.name ? t.element.setValue(e.p().x) : "positionY" === t.name ? t.element.setValue(e.p().y) : "rotation" === t.name && t.element.setValue(parseInt(e.getRotation() / Math.PI * 180))
            }
        })
    }, C.prototype._addListener = function() {
        var t = this;
        e && e.globalEvent.add(function(e) {
            "startCreateEdge" === e.type ? t.disable = !0 : "endCreateEdge" === e.type && (t.disable = !1)
        }), this._gv.sm().ms(function(e) {
            if (!t.disable) {
                var o = t._gv.sm().ld();
                t._selectedNode = o || null, o && o instanceof ht.Node ? (t.root.getView().style.display = "block", t.root.iv(), t.countOffsetTop(), t._setNodeInfoToForm(o)) : t.root.getView().style.display = "none"
            }
        }), this._gv.dm().md(function(e) {
            t._setNodeInfoToForm(e.data)
        })
    }, C.prototype.countOffsetTop = function() {
        if (!this.hasOwnProperty("_offsetTop")) {
            for (var e = this.root.getView(), t = 0;;)
                if (t += e.offsetTop, !(e = e.parentNode) || void 0 === e.offsetTop) break;
            this._offsetTop = t, console.log(t)
        }
    }, C.prototype.addItem = function(e) {
        var t = this;
        t.formMap[e.catygory || "__node"].addRow([{
            element: e.displayName,
            align: e.align || "right"
        }, {
            element: t.createElement(e)
        }, ""], [.2, .3, 3], 25)
    }, C.prototype.createElement = function(e) {
        var t = this,
            o = e.type,
            n = e.name,
            i = e.accessType,
            a = e.valueEnum,
            s = null,
            r = function(e) {
                var t = /[^0-9]/g,
                    o = e.value || e.target.value;
                t.test(e.value) && (e.hasOwnProperty("value") ? e.value = o.replace(t, "") : e.target.value = o.replace(t, ""))
            },
            d = function(e) {
                var t = /^\d*\.?\d{0,2}$/g,
                    o = /[^0-9\.]/g,
                    n = e.value || e.target.value;
                t.test(n) || (e.hasOwnProperty("value") ? e.value = n.replace(o, "") : e.target.value = n.replace(o, ""))
            };
        switch (o) {
            case C.TEXT:
                s = new ht.widget.TextField;
                break;
            case C.COLOR:
                s = new ht.widget.ColorPicker;
                break;
            case C.COMBO_BOX:
                var l = a[0],
                    c = a[1] || a[0];
                (s = new ht.widget.ComboBox).setValues(l), s.setLabels(c);
                break;
            case C.NUMBER:
                (s = new ht.widget.TextField).getElement().addEventListener("propertychange", d), s.getElement().addEventListener("input", d);
                break;
            case C.INT:
                (s = new ht.widget.TextField).getElement().addEventListener("propertychange", r), s.getElement().addEventListener("input", r);
                break;
            default:
                s = new ht.widget.TextField
        }
        return this.elements.push({
            element: s,
            name: n,
            accessType: i || "other"
        }), o === C.TEXT || o === C.NUMBER || o === C.INT ? (s.getElement().addEventListener("blur", function() {
            t._selectedNode && t.updateNode(n, s.getValue(), i, o)
        }), s.getElement().addEventListener("keyup", function(e) {
            13 === e.keyCode && t._selectedNode && t.updateNode(n, s.getValue(), i, o)
        })) : o !== C.COLOR && o !== C.COMBO_BOX || (s.onValueChanged = function(e, a) {
            e !== a && t.updateNode(n, s.getValue(), i, o)
        }), s
    }, C.prototype.updateNode = function(e, t, o, n) {
        if (this._selectedNode) switch (t = t || (n === C.NUMBER || n === C.INT ? 0 : ""), o) {
            case "style":
                this._selectedNode.s(e, t);
                break;
            case "attr":
                this._selectedNode.a(e, t);
                break;
            default:
                "name" === e ? this._selectedNode.setName(t) : "width" === e ? this._selectedNode.setWidth(parseInt(t)) : "height" === e ? this._selectedNode.setHeight(parseInt(t)) : "positionX" === e ? this._selectedNode.p({
                    x: parseInt(t),
                    y: this._selectedNode.p().y
                }) : "positionY" === e ? this._selectedNode.p({
                    y: parseInt(t),
                    x: this._selectedNode.p().x
                }) : "rotation" === e && (t = parseInt(t), this._selectedNode.setRotation(t / 180 * Math.PI))
        }
    }, C.prototype.addCatygory = function(e, t) {
        var o = this,
            n = new ht.widget.FormPane;
        this._categoryInfo.push({
            id: e
        }), this.formMap[e] = n, n.setHPadding(0), n.setVPadding(0), n.setVGap(this.vGap), n.getView().style.borderTop = "1px solid rgb(197, 193, 189)", n.addRow([{
            element: t,
            background: "rgb(240, 239, 238)"
        }], [.1], 25), n.getView().addEventListener("click", function(e) {
            if (e.preventDefault(), e.stopPropagation(), n.getView() === e.target && e.clientY - e.target.offsetTop - o._offsetTop <= 25) {
                var t = n.__rowIndex;
                o._categoryInfo[t].isExpand ? o.root._rows[t].height = 26 : o.root._rows[t].height = o._categoryInfo[t].expandHeight, o.root.iv(), o._categoryInfo[t].isExpand = !o._categoryInfo[t].isExpand
            }
        })
    }, C.TEXT = "text", C.NUMBER = "number", C.INT = "int", C.COLOR = "color", C.COMBO_BOX = "combo";
    var E = {
            view: (window.pf = new C(g.view, {
                categories: [{
                    id: "properties",
                    label: "属性"
                }],
                formItems: [{
                    name: "name",
                    displayName: "名称",
                    type: C.TEXT
                }, {
                    name: "label.font",
                    displayName: "字体",
                    type: C.TEXT,
                    accessType: "style"
                }, {
                    name: "label.color",
                    displayName: "文本颜色",
                    type: C.COLOR,
                    accessType: "style"
                }, {
                    name: "body.color",
                    displayName: "渲染色",
                    type: C.COLOR,
                    accessType: "style"
                }, {
                    name: "width",
                    displayName: "宽度",
                    type: C.NUMBER
                }, {
                    name: "height",
                    displayName: "高度",
                    type: C.NUMBER
                }, {
                    name: "positionX",
                    displayName: "横坐标",
                    type: C.NUMBER
                }, {
                    name: "positionY",
                    displayName: "纵坐标",
                    type: C.NUMBER
                }, {
                    name: "rotation",
                    displayName: "旋转",
                    type: C.NUMBER
                }, {
                    name: "border.width",
                    displayName: "边框大小",
                    type: C.NUMBER,
                    accessType: "style"
                }, {
                    name: "border.color",
                    displayName: "边框颜色",
                    type: C.COLOR,
                    accessType: "style"
                }, {
                    name: "decivename",
                    displayName: "设备名",
                    type: C.TEXT,
                    accessType: "attr",
                    catygory: "properties"
                }, {
                    name: "address",
                    displayName: "设备位置",
                    type: C.TEXT,
                    accessType: "attr",
                    catygory: "properties"
                }]
            })).root
        },
        V = new ht.widget.BorderPane;
    V.setTopView(k.view), V.setTopHeight(38), V.setCenterView(g.view), V.setLeftView(c.view), V.setLeftWidth(200), V.setRightView(E.view), V.setRightWidth(200);
    var I = {
        view: V
    };
    window.addEventListener("load", function() {
        I.view.addToDOM(), e.globalEvent.fire({
            type: "load"
        })
    })
});