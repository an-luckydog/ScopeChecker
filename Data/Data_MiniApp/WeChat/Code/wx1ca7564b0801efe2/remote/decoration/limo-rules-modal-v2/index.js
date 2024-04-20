var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../b/helpers/objectSpread2"), a = e(require("../../../miniprogram_npm/@limo/core/index.js")), i = require("../../../miniprogram_npm/@limo/container/behaviors/index");

Component({
    behaviors: [ i.commonBehavior, i.limoShim ],
    properties: {
        headers: {
            type: Object,
            value: {}
        },
        agreement: {
            type: Object,
            value: {
                contentUrl: {
                    type: String,
                    value: null
                },
                name: {
                    type: String,
                    value: ""
                },
                snapshotId: {
                    type: String,
                    value: null
                },
                type: {
                    type: String || Number,
                    value: null
                }
            }
        }
    },
    data: {
        rulesData: "",
        hasTabBar: !1
    },
    attached: function() {
        this.limoAttached();
    },
    methods: {
        limoAttached: function() {
            this.initData();
        },
        initData: function() {
            var e = this, i = this.properties, r = i.agreement, n = i.headers, l = (r || {}).contentUrl, o = void 0 === l ? "" : l;
            a.default.getLimoRuntime().request({
                url: o,
                method: "GET",
                data: "true",
                header: t(t({
                    "Content-Type": "text/plain"
                }, n), {}, {
                    withCredentials: !0
                }),
                responseType: "text",
                dataType: "text",
                fail: function(e) {},
                complete: function(t) {
                    var i = (t.data || {}).code, r = void 0 === i ? null : i, n = r || 0 === r ? "" : t.data, l = !1;
                    if (!a.default.getLimoRuntime().isWeb && e.getTabBar && (l = !!e.getTabBar()), a.default.getLimoRuntime().isAliPayMp && !a.default.getLimoRuntime().isWeb) try {
                        n = n.replace(/<style.*<\/style>/, ""), parse(n, function(t, a) {
                            t || e.setData({
                                rulesData: a || "暂无内容",
                                hasTabBar: l
                            });
                        });
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        e.setData({
                            rulesData: "暂无内容",
                            hasTabBar: l
                        });
                    } else e.setData({
                        rulesData: n || "暂无内容",
                        hasTabBar: l
                    });
                }
            });
        },
        clickCloseRulesModal: function() {
            this.closeDialog("limo-rules-modal-v2");
        }
    }
});