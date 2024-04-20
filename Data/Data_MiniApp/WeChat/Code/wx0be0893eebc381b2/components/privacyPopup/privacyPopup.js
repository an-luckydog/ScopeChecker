var e, t = require("../../@babel/runtime/helpers/interopRequireDefault").default, i = require("../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../@babel/runtime/helpers/asyncToGenerator"), n = t(require("../../config/config")), a = require("../../utils/promisify");

Component({
    data: {
        visible: !1,
        appName: "对啊背单词"
    },
    lifetimes: {
        attached: (e = r(i().mark(function e() {
            return i().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!wx.getPrivacySetting) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 3, (0, a.promisify)(wx.getPrivacySetting)();

                  case 3:
                    e.sent.needAuthorization && this.setData({
                        visible: !0
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function() {
            return e.apply(this, arguments);
        })
    },
    methods: {
        handleDisagree: function() {
            return r(i().mark(function e() {
                return i().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, a.promisify)(wx.exitMiniProgram)();

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        handleDetail: function() {
            wx.navigateTo({
                url: "/pages/webview/index?url=".concat(n.default.listapiDomain + "policy")
            });
        },
        handleAgree: function() {
            this.setData({
                visible: !1
            });
        }
    }
});