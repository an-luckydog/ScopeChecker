var e = require("../b/helpers/interopRequireDefault")(require("../miniprogram_npm/@limo/core/index.js")), t = require("../miniprogram_npm/@limo/container/behaviors/index.js"), a = require("../miniprogram_npm/@mtfe/rms-sdk/index.js"), r = require("../lib/wx/app-info");

Component({
    behaviors: [ t.commonBehavior, t.limoShim ],
    attached: function() {
        this.limoAttached();
    },
    data: {
        tabbarList: [],
        color: "#999999",
        selectedColor: "#333333",
        selectedIndex: 0,
        borderStyle: "",
        showNativeTabBar: !1,
        tabBarStyle: "1",
        middleIndex: 0
    },
    methods: {
        limoAttached: function() {
            a.LXReporter.sendMV("b_eco_bjhfku7a_mv");
            var e = (0, r.getTabbarPageInfo)(), t = e.tabbar, i = e.borderStyle, o = e.color, n = e.selectedColor, d = e.showNativeTabBar, s = e.tabBarStyle, l = Math.floor(t.length / 2);
            this.setData({
                tabbarList: t,
                borderStyle: i,
                color: o,
                selectedColor: n,
                showNativeTabBar: "1" === d,
                tabBarStyle: s || "1",
                middleIndex: l
            });
        },
        changeTabbarIndex: function(e) {
            this.setData({
                selectedIndex: e
            });
        },
        switchTab: function(t) {
            var r = t.currentTarget.dataset.selectedBar || t.currentTarget.selectedBar, i = t.currentTarget.dataset.index;
            if (i !== this.data.selectedIndex) {
                var o = r.pagePath || "";
                a.LXReporter.sendMC("b_eco_bjhfku7a_mc", {
                    button_index: i,
                    button_name: r.text
                }), /^\/?pages\//.test(o) ? e.default.getLimoRuntime().switchTab({
                    url: o,
                    newAlipay: !0
                }) : e.default.getLimoRuntime().navigateTo({
                    url: o
                });
            }
        }
    }
});