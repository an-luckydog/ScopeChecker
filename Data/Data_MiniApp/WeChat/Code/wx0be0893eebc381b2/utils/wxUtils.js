Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = getApp(), t = {
    requestSubscribeMessage: function(t) {
        return new Promise(function(s, r) {
            wx.requestSubscribeMessage({
                tmplIds: t,
                complete: function(u) {
                    if ("requestSubscribeMessage:ok" == u.errMsg) {
                        for (var a in t) {
                            var o = t[a], c = 1;
                            c = "accept" === u[o] ? 1 : 0, e.post_ajax("/user/wechat-template", {
                                type: c,
                                templateId: o
                            }, function(e) {});
                        }
                        s(u);
                    } else r(u);
                }
            });
        });
    }
};

exports.default = t;