var e = require("../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var a = e(require("../lib/mix/request")), t = require("../lib/mix/util"), r = a.default, u = {
    saveLocalData: function(e) {
        return r.post((0, t.getTakeAwayHost)() + "/api/rmstakeaway/saveLocalData", e);
    },
    queryLocalData: function(e) {
        return r.get((0, t.getTakeAwayHost)() + "/api/rmstakeaway/queryLocalData", {
            params: e
        });
    }
};

exports.default = u;