var e = (0, require("../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../utils/http.js"));

getApp();

function t() {
    return [ {
        current: 0,
        pagePath: "/pages/index/index",
        iconPath: e.default.imgUrl + "/index/index.png",
        selectedIconPath: e.default.imgUrl + "/index/iconActive.png",
        text: "首页"
    }, {
        text: "",
        current: 0,
        pagePath: "",
        iconPath: e.default.imgUrl + "/index/scan.png",
        selectedIconPath: "",
        isGetUserInfoFlag: !1
    }, {
        current: 0,
        pagePath: "/pages/info/info",
        iconPath: e.default.imgUrl + "/index/list.png",
        selectedIconPath: e.default.imgUrl + "/index/listActive.png",
        text: "我的"
    } ];
}

module.exports = {
    tabbar: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tabdata", n = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, l = arguments.length > 4 ? arguments[4] : void 0, r = i, d = {}, c = t();
        c[n].iconPath = c[n].selectedIconPath, c[0].isFullSucreen = l, c[n].current = 1, 
        c[1].isGetUserInfoFlag = a, d[e] = c, d.isFullSucreen = l, r.setData({
            bindData: d
        });
    }
};