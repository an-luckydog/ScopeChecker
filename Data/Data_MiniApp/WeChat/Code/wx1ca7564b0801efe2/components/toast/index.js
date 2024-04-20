Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showToast = function t(e, o) {
    var s = o.title, a = o.mask, u = o.duration, i = void 0 === u ? 1500 : u, n = o.complete;
    if (!e.toastTimer) return e.setData({
        toast: {
            title: s,
            mask: a
        }
    }), void (e.toastTimer = setTimeout(function() {
        e.toastTimer = null, e.setData({
            toast: null
        }, function() {
            "function" == typeof n && n();
            var o = e.toastQueue.shift();
            o && t(e, o);
        });
    }, i));
    e.toastQueue || (e.toastQueue = []), e.toastQueue.push({
        title: s,
        mask: a,
        duration: i,
        complete: n
    });
};