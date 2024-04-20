var e = require("../../../b/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.beforeCartGotoOrderReport = function() {
    var e = +r.default.getFirstAddDishTime();
    r.default.setFirstAddDishTime(null), +(0, a.getMixUrlParam)("reserveMode") === i.DISH_SOURCE.RESERVE ? (0, 
    t.sendMC)("b_saaspay_ne6rleg7_mc", {
        duration: Date.now() - e
    }) : (0, t.sendMC)("b_saaspay_st445ch8_mc", {
        duration: Date.now() - e
    });
};

var r = e(require("../../../api/rmsStorage")), t = require("../../LXHelper"), a = require("../../../lib/mix/util"), i = require("../../../constants/bizConstants");