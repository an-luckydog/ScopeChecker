var setPrototypeOf = require("./setPrototypeOf"), isNativeReflectConstruct = require("./isNativeReflectConstruct");

function _construct(t, e, r) {
    return isNativeReflectConstruct() ? module.exports = _construct = Reflect.construct : module.exports = _construct = function(t, e, r) {
        var o = [ null ];
        o.push.apply(o, e);
        var c = new (Function.bind.apply(t, o))();
        return r && setPrototypeOf(c, r.prototype), c;
    }, _construct.apply(null, arguments);
}

module.exports = _construct;