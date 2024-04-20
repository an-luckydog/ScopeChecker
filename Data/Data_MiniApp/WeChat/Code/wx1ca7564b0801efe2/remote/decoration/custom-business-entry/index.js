var e = require("../../../b/helpers/interopRequireDefault"), r = require("../../../b/helpers/objectSpread2"), t = e(require("../../../miniprogram_npm/@limo/core/index.js")), o = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), i = require("../common-helpers/formatStyle"), n = e(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ n.default, o.commonBehavior, o.limoShim ],
    properties: {
        businessList: {
            type: Array,
            value: [],
            observer: function() {
                this.formatBusinessList();
            }
        },
        templateStyle: {
            type: Number,
            value: 1
        },
        infoList: {
            type: Array,
            value: [ 1, 2, 3, 4 ]
        },
        theme: {
            type: Object,
            value: {},
            observer: function(e) {
                this.transformTheme(e);
            }
        }
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    data: {
        mainClassName: "",
        themeStyle: {},
        dividerConfig: {},
        rowDividerConfig: {},
        entryList: [],
        extraStyle: {},
        wrapperConfig: {
            style: ""
        }
    },
    methods: {
        limoPageShow: function() {
            t.default.getLimoRuntime().sendMV("b_eco_2pd00krg_mv");
        },
        formatModuleStyle: function(e) {
            if (e) {
                var r = {}, t = {};
                return Object.keys(e).forEach(function(o) {
                    var n = JSON.parse(e[o]);
                    "iconConfig" !== o ? "dividerConfig" !== o ? r[o] = (0, i.formatStyle)(n) : t = n : r[o] = n;
                }), {
                    themeStyle: r,
                    dividerConfig: t
                };
            }
        },
        transformTheme: function(e) {
            if (e) {
                var t = e.componentStyle, o = e.basicConfig, n = e.extraConfig, a = JSON.parse(t || "{}"), s = this.formatModuleStyle(o, a.background), l = s.themeStyle, m = s.dividerConfig, u = this.formatModuleStyle(n, a.background), c = m.borderColor, d = m.dividerType, f = m.columnWidth, h = m.rowWidth, p = {
                    borderStyle: r(r({}, m), {}, {
                        borderColor: {
                            color: c
                        }
                    }),
                    dividerType: d
                }, g = this.properties, y = g.templateStyle, b = 29 * g.businessList.length, S = (0, 
                i.formatStyle)(a);
                this.setData({
                    themeStyle: l,
                    dividerConfig: p,
                    rowDividerConfig: r(r({}, p), {}, {
                        lineType: "row"
                    }),
                    lineStyle: {
                        rowStyle: "width: ".concat(h || 60, "%"),
                        columnStyle: "height: ".concat(f || 60, "%")
                    },
                    extraStyle: (null == u ? void 0 : u.themeStyle) || {},
                    wrapperConfig: {
                        style: 9 === y ? "width: ".concat(b, "%; ").concat(S) : S,
                        compStyle: a.background ? "background-color: #fff;" : "",
                        backgroundClass: a.background || a.backgroundColor && "transparent" !== a.backgroundColor ? "has-background" : ""
                    }
                });
            }
        },
        formatBusinessList: function() {
            var e = this.properties.businessList;
            if (!e) return [];
            var r = e.map(function(e) {
                return e.moduleStyle = e.bgImgUrl ? "background: url(".concat(e.bgImgUrl, ") center / 100% 100% no-repeat") : "", 
                e;
            });
            this.setData({
                entryList: r
            });
        }
    },
    attached: function() {
        this.limoPageShow();
    }
});