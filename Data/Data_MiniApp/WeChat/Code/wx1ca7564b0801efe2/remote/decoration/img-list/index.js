var e = require("../../../b/helpers/interopRequireDefault"), t = require("../../../b/helpers/toConsumableArray"), i = e(require("../../../miniprogram_npm/@limo/core/index.js")), a = require("../../../miniprogram_npm/@limo/container/behaviors/index.js"), n = require("../../../miniprogram_npm/@mtfe/rms-sdk/index.js"), r = e(require("../decor-comp-behavior/index"));

Component({
    behaviors: [ r.default, a.commonBehavior, a.limoShim ],
    properties: {
        columnType: {
            type: Number,
            value: 1,
            observer: function(e) {
                e && this.initData(this.data);
            }
        },
        defaultImgUrl: {
            type: String,
            value: ""
        },
        imgList: {
            type: Array,
            value: [],
            observer: function(e) {
                e && this.initData(this.data);
            }
        },
        heightImg: {
            type: Number,
            value: 300,
            observer: function(e) {
                e && this.initData(this.data);
            }
        }
    },
    data: {
        newimgList: [],
        heightStyle: ""
    },
    pageLifetimes: {
        show: function() {
            this.limoPageShow();
        }
    },
    attached: function() {
        this.limoAttached(), this.limoPageShow();
    },
    methods: {
        limoPageShow: function() {
            i.default.getLimoRuntime().sendMV("b_eco_wby2yycn_mv", {
                custom: {
                    id: this.id
                }
            });
        },
        limoAttached: function() {
            this.initData(this.properties);
        },
        initData: function(e) {
            var t = e.heightImg;
            switch (e.columnType) {
              case 1:
              case 2:
              case 5:
              case 3:
                this.setData({
                    heightStyle: "height: ".concat(t || 300, "rpx;")
                });
                break;

              case 4:
                this.setData({
                    leftHeight: "height: ".concat(t || 300, "rpx;"),
                    heightStyle: "height: ".concat((t || 300) / 2, "rpx;")
                });
            }
            this.changeListFromColumnType(e);
        },
        changeListFromColumnType: function(e) {
            var i, a, n = e.columnType, r = e.imgList, s = r && r.length > 0 ? t(r) : [];
            switch (n) {
              case 1:
              case 2:
              case 3:
                r.length < n ? (i = s).push.apply(i, t(Array(n - r.length))) : s = r.slice(0, n);
                break;

              case 4:
              case 5:
                r.length < n - 1 ? (a = s).push.apply(a, t(Array(n - 1 - r.length))) : s = r.slice(0, n - 1);
            }
            this.setData({
                newimgList: s
            });
        },
        onImgClick: function(e) {
            var t, a, r, s = +e.currentTarget.dataset.index || +e.currentTarget.index || 0, o = this.properties.imgList, h = null == (t = o[s]) ? void 0 : t.action, c = null == (a = o[s]) ? void 0 : a.redirectUrl, m = (null == (r = o[s]) ? void 0 : r.type) || 1;
            if (i.default.getLimoRuntime().sendMC("b_eco_wby2yycn_mc", {
                custom: {
                    id: this.id,
                    image_index: s
                }
            }), h) (0, n.tapActionHandler)(h, {
                compInst: this
            }); else if (c) switch (m) {
              case 1:
              default:
                i.default.getLimoRuntime().navigateTo({
                    url: c
                });
                break;

              case 2:
                i.default.getLimoRuntime().redirectTo({
                    url: c
                });
            }
        }
    }
});