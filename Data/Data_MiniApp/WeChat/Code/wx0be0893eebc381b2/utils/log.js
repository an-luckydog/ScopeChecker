var e = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;

module.exports = {
    info: function() {
        e && e.info.apply(e, arguments);
    },
    warn: function() {
        e && e.warn.apply(e, arguments);
    },
    error: function() {
        e && e.error.apply(e, arguments);
    },
    setFilterMsg: function(t) {
        e && e.setFilterMsg && "string" == typeof t && e.setFilterMsg(t);
    }
};