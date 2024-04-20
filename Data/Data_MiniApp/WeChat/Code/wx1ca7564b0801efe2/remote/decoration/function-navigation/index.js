var t = require("../../../b/helpers/interopRequireDefault"), e = t(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), o = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), r = t(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ r.default, i.commonBehavior, i.limoShim ],
    properties: {
        functionList: {
            type: Array,
            value: []
        },
        displayStyle: {
            type: Number,
            value: 1,
            observer: function(t) {
                this.setData({
                    displayMode: 2 === t ? "row-style" : "col-style"
                });
            }
        },
        customTitle: {
            type: String,
            value: ""
        },
        tagBgColor: {
            type: String,
            value: "",
            observer: function() {
                this.formatTagStyle();
            }
        },
        tagTextColor: {
            type: String,
            value: "",
            observer: function() {
                this.formatTagStyle();
            }
        }
    },
    data: {
        displayMode: "col-style",
        actionType: {
            weChat: 9,
            enterprise: 10
        },
        tagStyle: ""
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.formatTagStyle(), e.default.getLimoRuntime().sendMV("b_eco_xk4lds1p_mv");
        },
        navigateTo: function(t) {
            t && e.default.getLimoRuntime().navigateTo({
                url: t
            });
        },
        handleItemClick: function(t) {
            var i = t.currentTarget.dataset.adItem, r = t.currentTarget.dataset.index, a = (null == i ? void 0 : i.indexOf("cardId")) > -1, n = this.properties.functionList[r].action;
            e.default.getLimoRuntime().sendMC("b_eco_xk4lds1p_mc", {
                custom: {
                    index: r,
                    redirectUrl: i
                }
            }), n ? (0, o.tapActionHandler)(n, {
                compInst: this
            }) : i && (a ? this.revoke("onJumpWithCardId", i) : this.navigateTo(i));
        },
        handleStatusClick: function(t) {
            var e, i = t.currentTarget.dataset.index, o = this.properties.functionList, r = void 0 === o ? [] : o, a = r ? null == (e = r[i]) ? void 0 : e.statusId : null;
            a && this.triggerEvent("bindStatusClickEvent", {
                statusId: a
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        formatTagStyle: function() {
            var t = this.properties, e = t.tagBgColor, i = t.tagTextColor;
            this.setData({
                tagStyle: "background: ".concat(e, ";color: ").concat(i, ";")
            });
        }
    }
});