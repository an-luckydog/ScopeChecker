(0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/wxUtils.js"));

var t = getApp();

Page({
    data: {
        subMsgs: []
    },
    onLoad: function(e) {
        var s = this;
        t.post_ajax("/user/sub-list", {}, function(t) {
            s.setData({
                subMsgs: t.data.resInfo
            });
        });
    },
    onSubscribe: function(e) {
        var s = this, a = e.currentTarget.dataset, u = a.tmplid, r = a.index, i = this.data.subMsgs;
        wx.requestSubscribeMessage({
            tmplIds: [ u ],
            complete: function(e) {
                "requestSubscribeMessage:ok" == e.errMsg && ("accept" === e[u] ? t.post_ajax("/user/add-sub", {
                    templateId: u
                }, function(t) {
                    0 === t.data.state && (i[r].subNum += 1, s.setData({
                        subMsgs: i
                    }));
                }) : t.post_ajax("/user/wechat-template", {
                    type: 0,
                    templateId: u
                }, function(t) {
                    0 === t.data.state && (i.splice(r, 1), s.setData({
                        subMsgs: i
                    }));
                }));
            }
        });
    }
});