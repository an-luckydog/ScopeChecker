var superPropBase = require("./superPropBase");

function _get(e, t, r) {
    return "undefined" != typeof Reflect && Reflect.get ? module.exports = _get = Reflect.get : module.exports = _get = function(e, t, r) {
        var o = superPropBase(e, t);
        if (o) {
            var u = Object.getOwnPropertyDescriptor(o, t);
            return u.get ? u.get.call(r) : u.value;
        }
    }, _get(e, t, r || e);
}

module.exports = _get;