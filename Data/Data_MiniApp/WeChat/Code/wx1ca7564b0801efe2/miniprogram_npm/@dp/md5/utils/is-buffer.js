function t(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
}

module.exports = function(n) {
    return null != n && (t(n) || function(n) {
        return "function" == typeof n.readFloatLE && "function" == typeof n.slice && t(n.slice(0, 0));
    }(n) || !!n._isBuffer);
};