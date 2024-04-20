var t = require("../@babel/runtime/helpers/typeof");

module.exports = {
    showToast: function(e) {
        if ("object" == t(e) && e.title) {
            e.duration && "number" == typeof e.duration || (e.duration = 1500);
            var o = getCurrentPages()[getCurrentPages().length - 1];
            e.isShow = !0, e.duration < 1e4 && setTimeout(function() {
                e.isShow = !1, e.cb && "function" == typeof e.cb && e.cb(), o.setData({
                    "showToast.isShow": e.isShow
                });
            }, e.duration), o.setData({
                showToast: e
            });
        } else console.log("showToast fail:请确保传入的是对象并且title必填");
    },
    hideToast: function() {
        var t = getCurrentPages()[getCurrentPages().length - 1];
        t.data.showToast && t.setData({
            "showToast.isShow": !1
        });
    }
};