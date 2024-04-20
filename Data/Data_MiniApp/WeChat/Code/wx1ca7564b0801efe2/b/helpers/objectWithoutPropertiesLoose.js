function _objectWithoutPropertiesLoose(e, o) {
    if (null == e) return {};
    var t, r, i = {}, n = Object.keys(e);
    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || (i[t] = e[t]);
    return i;
}

module.exports = _objectWithoutPropertiesLoose;