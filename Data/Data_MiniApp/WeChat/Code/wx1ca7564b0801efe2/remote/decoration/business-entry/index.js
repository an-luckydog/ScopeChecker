var e = require("../../../b/helpers/interopRequireDefault"), i = e(require("../../../miniprogram_npm/@limo/core/index.js")), t = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), n = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), a = e(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ a.default, t.commonBehavior, t.limoShim ],
    properties: {
        businessList: {
            type: Array,
            value: [],
            observer: function(e) {
                Array.isArray(e) && this.setData({
                    mainClassName: this.getMainClassName(e)
                });
            }
        }
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    data: {
        mainClassName: ""
    },
    methods: {
        limoPageShow: function() {
            i.default.getLimoRuntime().sendMV("b_eco_5kwdusmk_mv");
        },
        getMainClassName: function(e) {
            var i = "";
            return 1 === (null == e ? void 0 : e.length) && (i = "one"), 2 === (null == e ? void 0 : e.length) && (i = "two"), 
            3 === (null == e ? void 0 : e.length) && (i = "three"), i;
        },
        tapToJump: function(e) {
            var t = e.currentTarget.dataset.index, a = this.data.businessList[t], o = a.redirectUrl || "";
            i.default.getLimoRuntime().sendMC("b_eco_5kwdusmk_mc", {
                custom: {
                    button_name: a.name || ""
                }
            }), a && a.action ? (0, n.tapActionHandler)(a.action, {
                compInst: this
            }) : o && i.default.getLimoRuntime().navigateTo({
                url: o,
                success: function() {},
                fail: function() {}
            });
        }
    },
    attached: function() {
        this.limoPageShow();
    }
});