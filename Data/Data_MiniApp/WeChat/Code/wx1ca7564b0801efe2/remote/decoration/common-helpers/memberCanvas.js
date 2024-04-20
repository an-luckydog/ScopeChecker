Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.generateGraphQL = exports.formatMemberElements = exports.formatElementName = void 0, 
exports.replaceVariable = function(e, r, m, t) {
    return e.replace(/&lt;(.*?)&gt;/g, function(e, n) {
        var a = r[m[n]];
        return "nickName" !== m[n] || a && "亲爱的用户" !== a ? a || "" : t || "";
    });
};

var e = require("../../../b/helpers/objectSpread2");

require("../../../b/helpers/Objectvalues");

var r = [ "element-member-balance", "element-member-point", "element-member-coupon" ];

exports.formatElementName = function(e) {
    return r.indexOf(e) > -1 ? "element-member-property" : "element-member-head" === e ? "element-picture" : e;
};

var m = {
    "element-member-head": "header",
    "element-member-identity": "memberIdentity{nickName, cardTypeName, cardGradeName}",
    "element-member-progress": "memberGrade{percent,currentNum, totalNum, prompt, isCurrentMaxSort}",
    "element-member-card": "memberCardSurface{bgType,bgColor,bgPicUrl,fontColor}",
    "element-member-balance": "balance",
    "element-member-point": "point",
    "element-member-coupon": "coupon"
};

exports.generateGraphQL = function(e, r) {
    return e.reduce(function(e, r) {
        return m[r] ? e + m[r] + "," : e;
    }, "") + Object.values(r).join(",");
};

exports.formatMemberElements = function(r, m) {
    return r.map(function(r) {
        return "element-member-head" === r ? {
            elementName: r,
            avatarUrl: m.header
        } : "element-member-identity" === r ? e({
            elementName: r
        }, m.memberIdentity) : "element-member-progress" === r ? {
            elementName: r,
            memberGradeRight: e({}, m.memberGrade)
        } : "element-member-card" === r ? e({
            elementName: r
        }, m.memberCardSurface) : "element-member-balance" === r ? {
            elementName: r,
            balance: m.balance
        } : "element-member-point" === r ? {
            elementName: r,
            point: m.point
        } : "element-member-coupon" === r ? {
            elementName: r,
            coupon: m.coupon
        } : {
            elementName: r
        };
    });
};