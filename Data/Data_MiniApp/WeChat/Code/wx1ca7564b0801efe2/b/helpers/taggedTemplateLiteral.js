function _taggedTemplateLiteral(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }));
}

module.exports = _taggedTemplateLiteral;