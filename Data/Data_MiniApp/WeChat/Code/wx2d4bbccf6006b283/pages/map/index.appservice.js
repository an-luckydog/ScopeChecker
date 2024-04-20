$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'root',[[7],[3,'root']]])
Z([3,'taro_tmpl'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./pages/map/index.wxml','../../base.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var cI=e_[x[0]].i
_ai(cI,x[1],e_,x[0],1,1)
var oJ=_v()
_(r,oJ)
var lK=_oz(z,1,e,s,gg)
var aL=_gd(x[0],lK,e_,d_)
if(aL){
var tM=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[0],2,14)
cI.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/map/index.wxml'] = [$gwx_XC_1, './pages/map/index.wxml'];else __wxAppCode__['pages/map/index.wxml'] = $gwx_XC_1( './pages/map/index.wxml' );
	;__wxRoute = "pages/map/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/map/index.js";define("pages/map/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[5723], { 3020: function _(e, s, a) {
    var n = a(9195),
        t = a(1629),
        i = a(8977),
        c = a(4656),
        r = a(3581),
        o = a(2678),
        l = a(2462),
        d = a(9296),
        h = a(4996),
        m = a(9517),
        u = { state: { current: 0 }, changeTab: function changeTab(e, s) {
        var a = this.state.current,
            n = s.tabs;e !== a && (this.setState({ current: e }), (0, h.yM)("_mapTabChange", n[e]), this.log("kgw1d009h3cgtq", { current: e }));
      } };function p(e) {
      var s = (0, r.qt)(u),
          a = (0, t.Z)(s, 2),
          n = a[0],
          i = a[1],
          c = n.current,
          l = e.tabs,
          d = e.locale,
          h = "en" === d;return l && l.length > 0 ? (0, m.jsx)(o.G7, { className: "components-map-com-index-tab ".concat(l.length >= 3 ? "" : "extra"), children: l && l.map(function (s, a) {
          var n = h && "all_power_banks" === s.desc ? "en-all-power-bank" : "";return (0, m.jsx)(o.G7, { className: "tab ".concat(n), onClick: function onClick() {
              return i.changeTab(a, e);
            }, style: { backgroundImage: "url(".concat(a === c ? s.highlightIcon : s.icon, ")") } }, s.type);
        }) }) : (0, m.jsx)(o.G7, {});
    }var g = p,
        x = a(2849),
        f = a(6472),
        b = { state: { homePageActivity: {}, applyHomePageActivity: !1 }, checkUserInfo: function checkUserInfo() {
        (0, d.T8)({ url: "/pages/users/index" });
      }, checkShopList: function checkShopList() {
        (0, d.T8)({ url: "/pages/map/list/index" });
      }, async: {}, onLoad: function onLoad() {
        var e = (0, x.FE)("appConfig", !1),
            s = e.homePageActivity,
            a = e.applyHomePageActivity;this.setState({ homePageActivity: s, applyHomePageActivity: a });
      } };function j(e) {
      var s,
          a,
          n = (0, r.qt)(b),
          i = (0, t.Z)(n, 2),
          c = i[0],
          l = i[1],
          d = f.Xd.getSafeArea(),
          h = d.topSafe,
          u = c.homePageActivity,
          p = c.applyHomePageActivity;(0, r.b6)(function () {
        l.onLoad();
      });var x = p ? u : {};return (0, m.jsxs)(o.G7, { className: "components-map-com-index-header", style: { backgroundColor: x && x.topPic ? "transparent" : "#FFFFFF", backgroundImage: x && x.topPic ? "url(".concat(x.topPic, ")") : "transparent" }, children: [(0, m.jsx)(o.G7, { className: "head-title-box", style: { height: "".concat(h, "px") }, children: (0, m.jsx)(o.G7, { className: "head-title", style: { bottom: "11px", fontSize: "18px", height: x && x.topPic ? "18px" : "25px", lineHeight: "25px", backgroundImage: x && x.topPic ? "url(".concat(x.titleIcon, ")") : "transparent" }, children: !x || x && !x.topPic ? "\u5C0F\u7535\u5145\u7535" : null }) }), (0, m.jsxs)(o.G7, { className: "map-header", children: [(0, m.jsxs)(o.G7, { className: "map-header-stick", children: [(0, m.jsx)(o.G7, { "data-click-id": "4", className: "avatar-pic", style: { backgroundImage: "url(".concat(e.user && e.user.picUrl || "https://lhc-image.oss-cn-beijing.aliyuncs.com/lhc/2017/09/18/240w_240h_FA9371505705108.jpg", ")") }, onClick: l.checkUserInfo, children: e.user && (e.user.budge || e.user.namiyaMsgCount) && (0, m.jsx)(o.G7, { className: "bar-budge" }) }), (0, m.jsxs)(o.G7, { className: "name", style: { height: x && x.nickIcon ? "32rpx" : "44rpx", backgroundImage: x && x.nickIcon ? "url(".concat(x.nickIcon, ")") : "transparent" }, children: [x && x.nickIcon ? null : e.greetings, x && x.nickIcon ? null : (null === (s = e.user) || void 0 === s ? void 0 : s.nick) && "\uFF0C".concat(e.user && (e.user.nick || ""))] }), (0, m.jsxs)(o.G7, { "data-click-id": "127", className: "shop-list-btn", style: { backgroundColor: x && x.storesIcon ? "transparent" : "#F2F4F2", backgroundImage: x && x.storesIcon ? "url(".concat(x.storesIcon, ")") : "transparent" }, onClick: l.checkShopList, children: [x && x.storesIcon ? null : (0, m.jsx)(o.G7, { className: "shop-icon" }), x && x.storesIcon ? null : (0, m.jsx)(o.xv, { children: e.$message.nearbyStores })] })] }), (null === e || void 0 === e || null === (a = e.tabs) || void 0 === a ? void 0 : a.length) > 0 && (0, m.jsx)(g, { tabs: e.tabs, locale: e.locale })] })] });
    }var k = j,
        v = { state: {}, async: {}, handleGoPowerbank: function handleGoPowerbank(e) {
        var s = e && e.list ? e.list.length : 0;if (1 === s && [0, 1].includes(e.list[0].status)) {
          var a = f.nm.stringify({ deviceNo: e.list[0].deviceNo || e.list[0].boxNo, deviceType: e.list[0].deviceType, bizType: 1 });(0, d.UY)({ url: "/pages/powerBank/loan/result?".concat(a) });
        } else (0, d.UY)({ url: 1 === s ? "/pages/powerBank/charging/index?orderNo=".concat(e.list[0].orderNo) : "/pages/orders/list/index" });
      }, handleGoDesktop: function handleGoDesktop() {
        (0, d.CF)("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301\u67E5\u770B\u5EA7\u5145\u8BA2\u5355");
      } };function N(e) {
      var s = (0, r.qt)(v),
          a = (0, t.Z)(s, 2),
          n = a[1],
          i = e.$message,
          c = [i.zero, i.one, i.two, i.three, i.four, i.five, i.six, i.seven, i.eight, i.nine],
          l = e.form && e.form.list ? e.form.list.length : 0,
          d = !0;return d ? (0, m.jsx)(o.G7, { className: "new-ui-order-message", children: (0, m.jsx)(o.G7, { className: "order-status-container", children: (0, m.jsxs)(o.G7, { className: "one-order", onClick: function onClick() {
              n.handleGoPowerbank(e.form);
            }, children: [(0, m.jsxs)(o.UB, { className: "left", children: [(0, m.jsx)(o.y5, { className: "icon", src: "https://img3.dian.so/lhc/2023/10/25/84w_84h_1D3501698200063.png" }), (0, m.jsx)(o.UB, { className: "order-info", children: (0, m.jsx)(o.UB, { className: "status", children: i.newUIPowerBankInUse.replace("{$n}", c[l]) }) })] }), (0, m.jsx)(o.y5, { className: "new-ui-message-nav-icon", src: "https://img3.dian.so/lhc/2023/10/25/18w_29h_58A201698199623.png" })] }) }) }) : (0, m.jsx)(o.gO, { children: (0, m.jsx)(o.G7, { className: "components-map-com-index-message", children: (0, m.jsx)(o.G7, { className: "order-status-container", children: (0, m.jsx)(o.G7, { className: "one-order", children: (0, m.jsxs)(o.gO, { children: [(0, m.jsxs)(o.G7, { className: "left", children: [(0, m.jsx)(o.G7, { className: "icon", style: { backgroundImage: "url(".concat("https://img3.dian.so/lhc/2019/08/28/114w_114h_5E0901566991911.jpg", ")") } }), (0, m.jsxs)(o.G7, { className: "order-info", children: [(0, m.jsx)(o.G7, { className: "status", children: i.powerBankInUse.replace("{$n}", c[l]) }), (0, m.jsx)(o.G7, { className: "des", children: i.returnPowerBank })] })] }), (0, m.jsx)(o.G7, { className: "right", onClick: function onClick() {
                    n.handleGoPowerbank(e.form);
                  }, children: i.viewDetails })] }) }) }) }) });
    }var y = N,
        w = a(3854),
        C = a(7732),
        I = a(9709),
        G = a(9699),
        S = a(8463),
        B = a(4399),
        A = a(9341),
        T = a(6390),
        M = a(943),
        _ = a(8303),
        U = a(1900),
        P = a(6488),
        R = a(6821),
        L = a(2563),
        D = a(8913),
        Z = a(9889),
        E = a(5025),
        O = a(7775),
        F = a(2546),
        q = a(3561),
        H = a(4157),
        X = a(8439),
        V = a(3242),
        z = a(5311),
        Y = a(8079),
        W = a(8149),
        K = 100,
        Q = { 1: { imgUrl: "https://img3.dian.so/lhc/2020/05/07/226w_226h_C6EA91588842601.png", type: 4 }, 2: { imgUrl: "https://img3.dian.so/lhc/2020/05/07/226w_226h_85A5C1588842565.png", type: 4 }, 3: { imgUrl: "https://img3.dian.so/lhc/2019/12/27/339w_351h_298D71577418604.png", type: 4 }, 4: { enImgUrl: "https://img3.dian.so/lhc/2023/08/24/372w_387h_5E93B1692861376.png", imgUrl: "https://img3.dian.so/lhc/2019/12/27/339w_351h_298D71577418604.png", type: 4 } },
        J = { state: { mapAdParams: {}, ipxStatus: "", mapFix: !1, longitude: I.nN.LONGITUDE, latitude: I.nN.LATITUDE, scale: I.nN.SCALE, markers: [], marked: null, form: null, button: Q[4], homePageActivity: {}, applyHomePageActivity: !1, showPrivacyModal: !1 }, async: { getSpecialShopDetail: function getSpecialShopDetail(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n, t;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    return a.next = 2, (0, d.k$)();case 2:
                    return n = a.sent, a.next = 5, C.Hn.getSpecialShopDetail((0, w.Z)({ userLatitude: n.latitude, userLongitude: n.longitude }, e), { proxy: !1 });case 5:
                    t = a.sent, t.success && s.setState({ specialShopDetail: t.data });case 7:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        }, getShopList: function getShopList(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n, t, c, r, o, l;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    if (!s.__excta && s.fetchedGetShopList && 0 !== (null === (n = s.state.markers) || void 0 === n ? void 0 : n.length) && (!e || e.latitude === s.state.latitude && e.longitude === s.state.longitude)) {
                      a.next = 11;break;
                    }return (0, d.$g)(), e && s.setState((0, w.Z)((0, w.Z)({}, e), {}, { marked: null })), t = s.__excta || {}, s.fetchedGetShopList = !0, a.next = 7, C.Hn.getShopList((0, w.Z)({ keywords: "", deviceType: 0, latitude: (0, S.hu)(e && e.latitude || s.state.latitude), longitude: (0, S.hu)(e && e.longitude || s.state.longitude), userLatitude: (0, S.hu)(s.currentLocation && s.currentLocation.latitude || e && e.latitude || s.state.latitude), userLongitude: (0, S.hu)(s.currentLocation && s.currentLocation.longitude || e && e.longitude || s.state.longitude), offset: 0, pageSize: K, priShopType: 0, secShopType: 0, onlineDeviceRate: 1 }, t), { proxy: !1 });case 7:
                    c = a.sent, r = c.code, c.success ? (l = f.dE.isArray(null === c || void 0 === c || null === (o = c.data) || void 0 === o ? void 0 : o.shops) && c.data.shops.map(function (e) {
                      return e.formatDistance = f.Xd.formatDistance(e.distance), e.picUrl = f.Xd.scaleImage(e.picUrl, 60, 60), e;
                    }).filter(function (e) {
                      return 0 !== e.shopDeviceType;
                    }), s.shops = l, s.setState({ marked: null }), s.onRenderMapMarkers(l)) : "".concat(r) !== I.cO.API_CODE_NEED_LOGIN && (0, d.CF)("\u8BF7\u6C42\u5F02\u5E38"), (0, d.hh)();case 11:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        }, getButtonStatus: function getButtonStatus(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    if (!e.buttonType) {
                      a.next = 13;break;
                    }n = e.buttonType, s.setState({ button: Q[n] }), a.t0 = n, a.next = 1 === a.t0 ? 6 : 2 === a.t0 ? 8 : 3 === a.t0 ? 10 : 12;break;case 6:
                    return s.log(411), a.abrupt("break", 13);case 8:
                    return s.log(413), a.abrupt("break", 13);case 10:
                    return s.log(413), a.abrupt("break", 13);case 12:
                    return a.abrupt("break", 13);case 13:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        }, checkAndExcute: function checkAndExcute(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    a.next = 12;break;case 6:
                    return a.next = 8, C.hI.getPrivacyStatus({ proxy: !1 });case 8:
                    n = a.sent, n ? e() : s.setState({ showPrivacyModal: !0 });case 10:
                    a.next = 13;break;case 12:
                    e();case 13:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        } }, handleCustomService: function handleCustomService() {
        (0, d.T8)({ url: "/pages/common/questionReport" });
      }, handleClickMap: function handleClickMap() {
        this.state.marked && (this.setState({ marked: null }), this.onRenderMapMarkers(this.shops));
      }, handleMarkerTap: function handleMarkerTap(e) {
        var s = this.state.markers;if (e && (e.markerId || f.dE.isNumber(e.markerId))) {
          var a, n;if (this.log("lo5692ry94ahqh"), this.log("37", { redPacketType: null === (a = s[e.markerId]) || void 0 === a ? void 0 : a.redPacketType }), null !== (n = this.shops[e.markerId]) && void 0 !== n && n.specialShop) {
            var t,
                i = { shopId: null === (t = this.shops[e.markerId]) || void 0 === t ? void 0 : t.id, specialShop: !0 };this.__excta && this.__excta.seriesId && (i.seriesId = this.__excta.seriesId), this.getSpecialShopDetail(i);
          }this.setState({ marked: this.shops[e.markerId] }), this.onRenderMapMarkers(this.shops, e.markerId);
        }
      }, handleRegionChange: function handleRegionChange(e) {
        var s = this;e.scale && this.setState({ scale: e.scale }), e && "end" === e.type ? this.mapCtx && this.mapCtx.getCenterLocation && this.mapCtx.getCenterLocation({ success: function success(e) {
            s.state.latitude !== e.latitude && s.state.longitude !== e.longitude && s.getShopList({ longitude: e.longitude, latitude: e.latitude });
          } }) : clearTimeout(this.getShopsByLocationTimer);
      }, handleLocate: function handleLocate() {
        var e = this;this.checkAndExcute(function () {
          (0, d.k$)({ force: !0 }).then(function () {
            e.mapCtx.moveToLocation({ success: function success(e) {
                console.log(e);
              }, fail: function fail(e) {
                console.log(e);
              } });
          });
        });
      }, handleSearch: function handleSearch() {
        var e = this;this.log("lo56jj9sj62vk3"), (0, d.Yc)().then(function (s) {
          e.getShopList({ longitude: s.longitude, latitude: s.latitude }), (0, d.k$)().then(function (s) {
            e.currentLocation = { latitude: s.latitude, longitude: s.longitude };
          });
        });
      }, handleGoDetailPage: function handleGoDetailPage() {
        this.state.marked && (this.log("lo56w8f5xypfpv"), (0, d.T8)({ url: "/pages/map/list/detail?id=".concat(this.state.marked.id, "&seriesId=").concat(this.__excta && this.__excta.seriesId, "&specialShop=").concat(this.state.marked.specialShop) }));
      }, handleCurrentMap: function handleCurrentMap() {
        (0, d.sx)({ latitude: this.state.marked.latitude, longitude: this.state.marked.longitude, name: this.state.marked.shopName, address: this.state.marked.address });
      }, handleScan: function handleScan() {
        f.Xd.scanDevice();
      }, handleTopPersonal: function handleTopPersonal() {
        this.log("lo56r26shdlfvf"), (0, d.T8)({ url: "/pages/users/index" });
      }, onRenderMapMarkers: function onRenderMapMarkers() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            s = arguments.length > 1 ? arguments[1] : void 0,
            a = this.state.seriesCodes,
            n = (0, x.FE)("appConfig", !1),
            t = n.homePageActivity,
            i = n.applyHomePageActivity,
            c = !0,
            r = e && e.map(function (e, n) {
          var r = "".concat(s) === "".concat(n),
              o = { id: n, latitude: e.latitude, longitude: e.longitude, anchor: { x: .5, y: 1 }, anchorX: .5, anchorY: 1, redPacketType: e.redPacketType || "", zIndex: r ? 2 : 1, width: r ? 65 : 41, height: r ? 64 : 40 };if (c && (r ? (o.width = 79, o.height = 86) : (o.width = 36, o.height = 40), r && (o.callout = { content: "".concat(e.formatDistance), color: "#FFF", fontSize: 10, borderRadius: 20, bgColor: "#2D2D2D", padding: 5, display: "ALWAYS", textAlign: "center", anchorY: 5 })), 440900 === e.cityCode) return o.iconPath = r ? M : _, o;if (e.shopDeviceType === I.nN.MAP_DESKTOP_DEVICE_IN_SHOP) return o.iconPath = r ? U : P, o;if ("LOAN" === e.redPacketType || "RETURN" === e.redPacketType) return o.iconPath = r ? A : T, o;if (e.specialShop) return o.iconPath = "KING" === a ? r ? E : O : "XIAOXIAOLE" === a ? r ? F : q : "NTES_MUSIC" === a ? r ? V : z : "SHENDU" === a ? r ? H : X : r ? D : Z, o.zIndex = r ? 5 : 4, o;var l = c ? W : L,
              d = c ? Y : R;return i && (null !== t && void 0 !== t && t.mapSmallIcon && (l = t.mapSmallIcon), null !== t && void 0 !== t && t.mapLargeIcon && (d = t.mapLargeIcon)), o.iconPath = r ? d : l, o;
        });this.setState({ markers: r });
      }, onMapInit: function onMapInit() {
        var e = this;this.currentLocation = {}, this.mapCtx = (0, d.yJ)("map"), this.mapCtx.showsCompass && this.mapCtx.showsCompass({ isShowsCompass: 0 });var s = (0, x.FE)("sysInfo");(0, h.DU)("_mapTabChange", function (s) {
          var a = s.type,
              n = s.wxSkinBannerId,
              t = (s.alipaySkinBannerId, s.seriesId),
              i = s.seriesCodes,
              c = s.bannerIdentification;e.__excta = { subfieldType: a, seriesId: t, seriesCodes: i, bannerId: n }, e.setState({ subfieldType: a, seriesCodes: i, tabReId: c }), e.getShopList(null), e.setState({ wzryAdVisible: 3 === a });
        }), (0, h.DU)("_mapUserVip", function (s) {
          var a = s.user,
              n = s.quBaoButtonStatus,
              t = a.memberId;2101 !== t && 2102 !== t || e.getButtonStatus(n);
        }), this.checkAndExcute(this.initLocation.bind(this)), this.setState({ ipxStatus: s.ipxStatus ? "true" : "false" });
      }, initLocation: function initLocation() {
        var e = this;(0, d.k$)().then(function (s) {
          (0, x.lK)("userLocation", s), e.currentLocation = { latitude: s.latitude, longitude: s.longitude }, s.precise && e.getShopList({ longitude: s.longitude, latitude: s.latitude }), setTimeout(function () {
            e.fetchedGetShopList || e.getShopList({ longitude: e.currentLocation.longitude || I.nN.LONGITUDE, latitude: e.currentLocation.latitude || I.nN.LATITUDE });
          }, 2100);
        });
      }, initAd: function initAd(e) {
        e && this.setState({ tabReId: e });
      }, onPageShow: function onPageShow() {
        var e;0 === (null === (e = this.state.markers) || void 0 === e ? void 0 : e.length) && this.getShopList();
      }, handleScanCenter: function handleScanCenter(e) {
        switch (e) {case 1:
            this.log(412), this.handleScan();break;case 2:
            this.log(414), this.handleScan();break;case 3:
            this.log(414), (0, d.CF)("\u8BF7\u5148\u7ED1\u5B9A\u5145\u7535\u5B9D"), setTimeout(function () {
              (0, d.Zk)(), (0, d.T8)({ url: "/pages/horseman/bind" });
            }, 1500);break;case 4:
            this.handleScan();break;default:
            break;}this.log("lo56rvekq8rw2s", { type: e });
      }, closeComfirmPrivacyModal: function closeComfirmPrivacyModal() {
        this.setState({ showPrivacyModal: !1 });
      }, jumpMapList: function jumpMapList() {
        this.log("lo55xj38yyc829"), (0, d.T8)({ url: "/pages/map/list/index" });
      }, handleHelp: function handleHelp() {
        this.log("lo56kvpp6pkvbv"), f.WW.connectService({ gid: 397712250, robotId: 195771 });
      }, newUILog: function newUILog(e) {
        this.log(e);
      } };function $(e) {
      var s,
          a,
          n,
          i,
          c = (0, r.qt)(J, e),
          l = (0, t.Z)(c, 2),
          h = l[0],
          u = l[1],
          p = e.$message,
          g = e.locale,
          b = u.initAd,
          j = "en" === g;(0, r.b6)(function () {
        u.onMapInit();
      }), (0, r.ou)(function () {
        u.onPageShow();
      }), (0, r.d4)(function () {
        b(e.tabReId);
      }, [b, e.tabReId]);var k,
          v = "true" === h.ipxStatus ? "left-normal ipx" : "left-normal",
          N = "true" === h.ipxStatus ? "scan-normal ipx" : "scan-normal",
          w = "true" === h.ipxStatus ? "right-normal ipx" : "right-normal",
          C = h.marked,
          I = !C || "LOAN" !== C.redPacketType && "RETURN" !== C.redPacketType ? "selected-marker" : "selected-marker red-selected-marker",
          S = "true" === h.ipxStatus ? "".concat(I, " ipx") : I,
          A = (null === e || void 0 === e || null === (s = e.form) || void 0 === s || null === (a = s.list) || void 0 === a ? void 0 : a.length) > 0,
          T = !0,
          M = f.Xd.getSafeArea(),
          _ = M.topSafe,
          U = (0, x.FE)("sysInfo"),
          P = !0;return P ? h.showPrivacyModal ? (0, m.jsx)(B.Z, { needPhoneNumber: !1, onSuccess: u.handleLocate, onClose: u.closeComfirmPrivacyModal }) : (0, m.jsxs)(o.G7, { className: "components-map-com-index-map", children: [(0, m.jsx)(o.D5, { id: "map", className: "map", longitude: h.longitude, latitude: h.latitude, scale: h.scale, markers: h.markers, onClick: u.handleClickMap, onMarkerTap: u.handleMarkerTap, onRegionChange: u.handleRegionChange, showCompass: !1, showLocation: !0 }), (0, m.jsxs)(o.G7, { className: "new-ui", children: [(0, m.jsxs)(o.G7, { className: "fox-map-image", style: { marginTop: "".concat(_ + 16, "px"), top: "0" }, children: [(h.tabReId || 0 === h.tabReId) && (0, m.jsx)(o.G7, { onClick: function onClick() {
                return u.newUILog("lo55o787vkdio8");
              }, children: (0, m.jsx)(G.Z, { reId: h.tabReId, needCoverView: !0 }) }), (null === (n = e.form) || void 0 === n || null === (i = n.list) || void 0 === i ? void 0 : i.length) > 0 && (0, m.jsx)(y, { form: e.form, $message: p })] }), (0, m.jsx)(o.UB, { className: "zuobiao", children: (0, m.jsx)(o.y5, { className: "center-point", src: "https://img3.dian.so/lhc/2019/12/18/54w_102h_022CD1576662047.png" }) }), (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(o.y5, { onClick: u.jumpMapList, className: null !== C && void 0 !== C && C.id ? "new-shop-icon lg-bottom-locate" : "new-shop-icon", src: "https://img3.dian.so/lhc/2023/10/24/390w_174h_301081698137314.png" }), (0, m.jsx)(o.y5, { onClick: u.handleSearch, className: null !== C && void 0 !== C && C.id ? "new-search-icon lg-bottom-new-search-icon" : "new-search-icon", src: "https://img3.dian.so/lhc/2023/11/21/174w_174h_3661B1700551628.png" }), (0, m.jsx)(o.y5, { onClick: u.handleLocate, className: null !== C && void 0 !== C && C.id ? "new-locate lg-bottom-locate" : "new-locate", src: "https://img3.dian.so/lhc/2023/11/21/174w_174h_E8F821700551545.png" })] }), (0, m.jsx)(o.gO, { children: (null === C || void 0 === C ? void 0 : C.id) && (0, m.jsx)(o.G7, { className: "new-ui-selected-marker", children: (0, m.jsxs)(o.G7, { className: "marker-content", children: [(0, m.jsx)(o.Ee, { className: "info-question ".concat(j ? "localeEn" : ""), src: j ? "https://img3.dian.so/lhc/2023/08/23/273w_66h_6E9831692759106.png" : "https://fed.dian.so/image/4709680fdb3b2c0e2e338f9a9e650fc5.png", onClick: function onClick() {
                    (0, d.T8)({ url: "/pages/common/shopQuestionFeedback?shopId=".concat(h.marked.id, "&shopName=").concat(h.marked.shopName, "&address=").concat(h.marked.address) });
                  } }), (0, m.jsxs)(o.UB, { className: "shop-container", children: [(0, m.jsxs)(o.UB, { className: "shop-left", onClick: u.handleGoDetailPage, children: [(0, m.jsx)(o.y5, { className: "shop-pic", src: null === C || void 0 === C ? void 0 : C.picUrl }), (0, m.jsxs)(o.UB, { className: "shop-info", children: [(0, m.jsx)(o.UB, { className: "shop-name", children: null === C || void 0 === C ? void 0 : C.shopName }), (0, m.jsx)(o.UB, { className: "shop-address", children: null === C || void 0 === C ? void 0 : C.address }), (0, m.jsxs)(o.UB, { className: "shop-address", children: [p.operatingHours, ": ", null === C || void 0 === C ? void 0 : C.bizTime] }), (0, m.jsxs)(o.UB, { className: "box-container", children: [(0, m.jsxs)(o.UB, { className: null !== C && void 0 !== C && C.borrowNum ? "useable" : "unuseable", children: [(0, m.jsx)(o.y5, { className: "borrow-icon", src: null !== C && void 0 !== C && C.borrowNum ? "https://img3.dian.so/lhc/2023/10/24/45w_45h_FD53D1698117285.png" : "https://img3.dian.so/lhc/2023/10/25/45w_45h_25BE71698205037.png" }), (0, m.jsx)(o.UB, { className: "ios" === (null === U || void 0 === U ? void 0 : U.platform) ? "text text-ios" : "text text-android", children: null !== C && void 0 !== C && C.borrowNum ? p.availableRental : p.notAvailableRental })] }), (0, m.jsxs)(o.UB, { className: null !== C && void 0 !== C && C.returnNum ? "useable" : "unuseable", children: [(0, m.jsx)(o.y5, { className: "borrow-icon", src: null !== C && void 0 !== C && C.returnNum ? "https://img3.dian.so/lhc/2023/10/24/45w_45h_951411698117705.png" : "https://img3.dian.so/lhc/2023/10/25/45w_45h_44ED21698205101.png" }), (0, m.jsx)(o.UB, { className: "ios" === (null === U || void 0 === U ? void 0 : U.platform) ? "text text-ios" : "text text-android", children: null !== C && void 0 !== C && C.returnNum ? p.availableReturn : p.notAvailableReturn })] })] })] })] }), (0, m.jsxs)(o.UB, { class: "shop-right", children: [(0, m.jsx)(o.y5, { onClick: 2 === h.subfieldType ? u.handleGoDetailPage : u.handleCurrentMap, src: "https://img3.dian.so/lhc/2023/10/24/102w_102h_796CF1698118147.png", className: "location-icon" }), (0, m.jsx)(o.UB, { onClick: 2 === h.subfieldType ? u.handleGoDetailPage : u.handleCurrentMap, className: "distance", children: null === C || void 0 === C ? void 0 : C.formatDistance })] })] })] }) }, null === C || void 0 === C ? void 0 : C.id) }), (0, m.jsxs)(o.UB, { className: "new-ui-footer-btns", children: [(0, m.jsx)(o.y5, { mode: "widthFix", className: "new-ui-footer-btns-top", src: "https://img3.dian.so/lhc/2023/08/02/1125w_48h_E68FF1690942554.png" }), (0, m.jsxs)(o.UB, { className: "footer-btns-content", children: [(0, m.jsxs)(o.UB, { className: "btn", onClick: u.handleHelp, children: [(0, m.jsx)(o.y5, { className: "service-icon", src: "https://img3.dian.so/lhc/2023/10/24/138w_138h_C12F41698116861.png" }), (0, m.jsx)(o.UB, { className: "btn-title", children: p.contactCustomerService })] }), (0, m.jsxs)(o.UB, { className: "scan-btn", onClick: function onClick() {
                  return u.handleScanCenter(h.button.type);
                }, children: [(0, m.jsx)(o.y5, { className: "btn-icon", src: "https://img3.dian.so/lhc/2023/09/06/63w_63h_88CF91693996106.png" }), (0, m.jsxs)(o.UB, { className: "scan-text", children: [p.scan, " ", (0, m.jsx)(o.UB, { className: "space" })] })] }), (0, m.jsxs)(o.UB, { className: "btn", onClick: u.handleTopPersonal, children: [(0, m.jsx)(o.y5, { className: "user-icon", src: "https://img3.dian.so/lhc/2023/10/24/138w_138h_847451698116987.png" }), (0, m.jsxs)(o.UB, { className: "btn-title", children: [p.me, (0, m.jsx)(o.UB, { className: "space" })] })] })] })] })] })] }) : (0, m.jsxs)(o.G7, { className: "components-map-com-index-map", children: [!h.showPrivacyModal && (0, m.jsx)(o.D5, { id: "map", className: "map", longitude: h.longitude, latitude: h.latitude, scale: h.scale, markers: h.markers, onClick: u.handleClickMap, onMarkerTap: u.handleMarkerTap, onRegionChange: u.handleRegionChange, showCompass: !1, showLocation: !0 }), !h.showPrivacyModal && (0, m.jsx)(o.UB, { className: "zuobiao", children: (0, m.jsx)(o.y5, { className: "center-point", src: "https://img3.dian.so/lhc/2019/12/18/54w_102h_022CD1576662047.png" }) }), !h.showPrivacyModal && (0, m.jsx)(o.UB, { className: "line-shadow" }), !A && (0, m.jsx)(o.G7, { className: "fox-map-image ".concat(A ? T ? "fixed-has-message-tab" : "fixed-has-message" : T ? "fixed-has-tab" : ""), style: { marginTop: "".concat(_, "px"), top: "196rpx" }, children: (h.tabReId || 0 === h.tabReId) && (0, m.jsx)(G.Z, { reId: h.tabReId, needCoverView: !0 }) }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && (0, m.jsx)(o.y5, { "data-click-id": "145", className: "search-icon", onClick: u.handleSearch, src: "https://img3.dian.so/lhc/2018/12/24/168w_168h_AA04B1545622650.png" }) }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && (0, m.jsxs)(o.UB, { className: "servicer", onClick: u.handleCustomService, children: [(0, m.jsx)(o.y5, { className: "service-image", "data-click-id": "130", src: "http://img3.dian.so/lhc/2023/09/28/210w_210h_CF74B1695885733.png" }), (0, m.jsx)(o.UB, { className: "contract-customer", children: "\u8054\u7CFB\u5BA2\u670D" })] }) }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && (0, m.jsx)(o.y5, { className: "locate", onClick: u.handleLocate, src: "https://img3.dian.so/lhc/2018/12/24/168w_168h_537FE1545622724.png" }) }), (0, m.jsxs)(o.UB, { className: "right-fixed-area".concat(A ? " fixed-has-message" : ""), children: [(0, m.jsx)(G.Z, { reId: "12", needCoverView: !0, style: { width: "80rpx", height: "80rpx", marginBottom: "24rpx" } }), (0, m.jsx)(G.Z, { reId: "13", needCoverView: !0, style: { width: "80rpx", height: "80rpx", marginBottom: "24rpx" } })] }), (0, m.jsx)(o.UB, { className: "right-bottom-icon", children: (0, m.jsx)(G.Z, { reId: "15", needCoverView: !0, style: { width: "80rpx", height: "80rpx" } }) }), (0, m.jsx)(o.G7, { children: h.marked && h.marked.specialShop && h.ipxStatus && (0, m.jsxs)(o.UB, { className: "mark-num", children: ["\u672C\u5E97\u6709", (null === (k = h.specialShopDetail) || void 0 === k ? void 0 : k.totalStyleCnt) || 0, "\u6B3E\u5B9A\u5236\u5B9D\u53EF\u79DF\u501F"] }) }), (0, m.jsxs)(o.G7, { children: [h.marked && h.ipxStatus && (0, m.jsxs)(o.UB, { className: S, children: [(0, m.jsx)(o.y5, { className: "LOAN" === h.marked.redPacketType || "RETURN" === h.marked.redPacketType ? "red-marker-bg" : "marker-bg", src: "LOAN" === h.marked.redPacketType || "RETURN" === h.marked.redPacketType ? "https://img3.dian.so/lhc/2018/12/24/1125w_570h_B4DC81545631427.png" : "https://img3.dian.so/lhc/2018/12/24/1125w_480h_F77571545617505.png" }), "LOAN" === h.marked.redPacketType ? (0, m.jsx)(o.UB, { className: "redpack-title", children: "\u6B64\u5904\u79DF\u501F\u53EF\u83B7\u5F97\u7EA2\u5305\u54E6~" }) : "RETURN" === h.marked.redPacketType ? (0, m.jsx)(o.UB, { className: "redpack-title", children: "\u6B64\u5904\u5F52\u8FD8\u53EF\u83B7\u5F97\u7EA2\u5305\u54E6~" }) : (0, m.jsx)(o.UB, {}), (0, m.jsxs)(o.UB, { className: "LOAN" === h.marked.redPacketType || "RETURN" === h.marked.redPacketType ? "marker-content red-marker-content" : "marker-content", children: [2 === h.subfieldType ? (0, m.jsx)(o.UB, { className: "guide guide-skin", children: h.specialShopDetail && h.specialShopDetail.showSkin && (0, m.jsx)(o.y5, { className: "skin", src: h.specialShopDetail.showSkin }) }) : (0, m.jsxs)(o.UB, { className: "guide", children: [(0, m.jsx)(o.y5, { className: "guide-icon", src: "https://img3.dian.so/lhc/2018/12/21/237w_237h_181E71545382806.png" }), (0, m.jsxs)(o.UB, { className: "distance distance-alipay", children: [h.marked.formatDistance, (0, m.jsx)(o.UB, { class: "space" })] })] }), (0, m.jsx)(o.y5, { className: "info-question ".concat(j ? "localeEn" : ""), src: j ? "https://img3.dian.so/lhc/2023/08/23/273w_66h_6E9831692759106.png" : "https://fed.dian.so/image/4709680fdb3b2c0e2e338f9a9e650fc5.png", onClick: function onClick() {
                  (0, d.T8)({ url: "/pages/common/shopQuestionFeedback?shopId=".concat(h.marked.id, "&shopName=").concat(h.marked.shopName, "&address=").concat(h.marked.address) });
                } }), (0, m.jsxs)(o.UB, { className: "info-container", children: [(0, m.jsx)(o.y5, { className: "shop-pic", src: h.marked.picUrl }), (0, m.jsxs)(o.UB, { className: "shop-detail", children: [(0, m.jsx)(o.UB, { className: "title", children: h.marked.shopName }), (0, m.jsx)(o.UB, { className: "sub-title", children: h.marked.address })] })] }), (0, m.jsx)(o.UB, { className: "amount", children: (0, m.jsxs)(o.UB, { className: "box-container", children: [(0, m.jsx)(o.y5, { className: "box-icon", src: "https://static.dian.so/static/mfed/images/xmdian/horseman/store_box.png" }), (0, m.jsx)(o.UB, { className: h.marked.borrowNum ? "usable" : "unusable", children: h.marked.borrowNum ? p.availableRental : p.notAvailableRental }), (0, m.jsx)(o.UB, { className: h.marked.returnNum ? "usable" : "unusable", children: h.marked.returnNum ? p.availableReturn : p.notAvailableReturn })] }) }), (0, m.jsx)(o.UB, { className: "left", onClick: u.handleGoDetailPage }), (0, m.jsx)(o.UB, { className: "right", onClick: 2 === h.subfieldType ? u.handleGoDetailPage : u.handleCurrentMap })] })] }), (0, m.jsx)(o.G7, {}), !h.marked && !h.showPrivacyModal && h.ipxStatus && (0, m.jsx)(o.y5, { className: "bg-chrismas", src: "https://img3.dian.so/lhc/2018/09/11/750w_164h_48ECF1536652466.png" })] }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && h.ipxStatus && (0, m.jsx)(o.UB, { className: v, children: j ? (0, m.jsx)(G.Z, { reId: "2010", needCoverView: !0 }) : (0, m.jsx)(G.Z, { reId: "1968", needCoverView: !0 }) }) }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && h.ipxStatus && (0, m.jsx)(o.y5, { className: N, onClick: function onClick() {
              return u.handleScanCenter(h.button.type);
            }, src: j && h.button.enImgUrl ? h.button.enImgUrl : h.button.imgUrl }) }), (0, m.jsx)(o.G7, { children: !h.marked && !h.showPrivacyModal && h.ipxStatus && (0, m.jsx)(o.y5, { onClick: u.handleTopPersonal, "data-click-id": "129", className: w, src: j ? "https://img3.dian.so/lhc/2023/08/24/360w_276h_EC6051692861171.png" : "https://img3.dian.so/lhc/2019/12/27/327w_252h_DBAB81577418564.png" }) }), h.showPrivacyModal && (0, m.jsx)(B.Z, { needPhoneNumber: !1, onSuccess: u.handleLocate, onClose: u.closeComfirmPrivacyModal })] });
    }var ee = $,
        se = a(6238),
        ae = "monthlyCardReminder",
        ne = { noReminder: 1, remindeMe: 2 },
        te = { state: { modalType: 1 }, handleCloseModal: function handleCloseModal() {
        (0, x.lK)(ae, ne.noReminder, !0), this.close();
      }, handleRemindMeLater: function handleRemindMeLater() {
        f.Xd.openOnceOneDay("monthlyCardTime", function () {}), (0, x.lK)(ae, ne.remindeMe, !0), this.close();
      }, handleBuyMembership: function handleBuyMembership() {
        (0, x.lK)(ae, ne.noReminder, !0), this.close(), (0, d.T8)({ url: "/pages/activity/landing/index?clickId=303&spm=monthlyCard" });
      }, close: function close() {
        this.setState({ visible: !1 });
      }, showModal: function showModal() {
        this.setState({ visible: !0 });
      }, checkModalType: function checkModalType() {
        var e = this.props.userInfo;e && (e.memberType === I.HB.MONTHLY_MODEL_TYPE ? e.showExpireNotice && (this.showModal(), this.setState({ modalType: 1 })) : e.showInvalidNotice && (this.showModal(), this.setState({ modalType: 2 })));
      }, initData: function initData() {
        var e = this,
            s = (0, x.FE)(ae);s && s !== ne.remindeMe || (s === ne.remindeMe ? f.Xd.openOnceOneDay("monthlyCardTime", function () {
          e.checkModalType();
        }) : this.checkModalType());
      }, async: {} };function ie(e) {
      var s = (0, r.qt)(te, e),
          a = (0, t.Z)(s, 2),
          n = a[0],
          i = a[1],
          c = n.modalType,
          l = n.visible,
          d = e.userInfo,
          h = i.handleBuyMembership,
          u = i.handleCloseModal,
          p = i.handleRemindMeLater,
          g = i.initData;return (0, r.b6)(function () {
        g();
      }), (0, m.jsx)(o.gO, { children: l && (0, m.jsxs)(o.UB, { className: "components-membership-monthly-card-modal", children: [(0, m.jsx)(o.UB, { className: "components-membership-monthly-card-modal-backdrop", onClick: u }), (0, m.jsxs)(o.UB, { className: "membership-expiration-body", children: [(0, m.jsxs)(o.UB, { className: "membership-expiration-modal-header", children: [(0, m.jsx)(o.y5, { className: "membership-expiration-modal-header-bg", src: "https://img3.dian.so/lhc/2018/10/22/686w_260h_B67801540199614.png" }), (0, m.jsx)(o.y5, { className: "close-membership-expiration-modal", onClick: u, src: "https://img3.dian.so/lhc/2018/08/30/48w_48h_0F8F61535617686.png" })] }), (0, m.jsxs)(o.UB, { className: "membership-expiration-modal-content", children: [(0, m.jsx)(o.UB, { className: "content-info", children: "\u4F60\u7684\u6708\u5361\u4F1A\u5458" }), 1 === c && (0, m.jsxs)(o.gO, { children: [(0, m.jsxs)(o.UB, { className: "content-info strong", children: ["\u8FD8\u6709", d.days, "\u5929\u5230\u671F"] }), (0, m.jsx)(o.UB, { className: "content-info", children: "\u7EED\u8D39\u7EE7\u7EED\u4EAB\u53D7\u514D\u8D39\u5145\u7535\u7279\u6743" })] }), 2 === c && (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(o.UB, { className: "content-info strong", children: "\u5DF2\u8FC7\u671F" }), (0, m.jsx)(o.UB, { className: "active-next-time", children: "\u7EED\u8D39\u540E\u4F1A\u5458\u4E0B\u6B21\u5145\u7535\u65F6\u5F00\u59CB\u8BA1\u7B97\u6709\u6548\u671F" })] }), (0, m.jsxs)(o.UB, { className: "membership-expiration-modal-actions", children: [(0, m.jsx)(o.UB, { className: "reminder-me-later", onClick: p, children: "\u7A0D\u540E\u63D0\u9192" }), (0, m.jsx)(o.UB, { className: "get-membership-now", onClick: h, children: "\u7ACB\u5373\u7EED\u8D39" })] })] })] })] }) });
    }var ce = ie,
        re = "merchantCardReminder",
        oe = { noReminder: 1, remindeMe: 2 },
        le = { state: { modalType: 1 }, handleCloseModal: function handleCloseModal() {
        (0, x.lK)(re, oe.noReminder, !0), this.close();
      }, handleRemindMeLater: function handleRemindMeLater() {
        (0, x.lK)(re, oe.remindeMe, !0), this.close();
      }, handleBuyMembership: function handleBuyMembership() {
        (0, x.lK)(re, oe.noReminder, !0);var e = this.state.userInfo.memberId;(0, d.T8)({ url: "/pages/users/member/merchantMember?modelId=".concat(e, "&ref=S0001") });
      }, close: function close() {
        this.setState({ visible: !1 });
      }, showModal: function showModal() {
        this.setState({ visible: !0 });
      }, async: {} };function de(e) {
      var s = (0, r.qt)(le, e),
          a = (0, t.Z)(s, 2),
          n = a[0],
          i = a[1],
          c = n.modalType,
          l = n.visible,
          d = e.userInfo,
          h = i.handleBuyMembership,
          u = i.handleCloseModal,
          p = i.handleRemindMeLater;return (0, m.jsx)(o.gO, { children: l && (0, m.jsx)(o.UB, { className: "components-reminder-modal-merchant-member-modal", children: (0, m.jsxs)(o.UB, { className: "merchant-member-body", children: [(0, m.jsxs)(o.UB, { className: "merchant-member-modal-header", children: [(0, m.jsx)(o.y5, { className: "merchant-member-modal-header-bg", src: "https://img3.dian.so/lhc/2018/11/30/686w_260h_141D11543559039.png" }), (0, m.jsx)(o.y5, { className: "close-merchant-member-modal", src: "https://img3.dian.so/lhc/2018/08/30/48w_48h_0F8F61535617686.png", onClick: u })] }), (0, m.jsxs)(o.UB, { className: "merchant-member-modal-content", children: [1 === c && (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(o.UB, { className: "content-info", children: "\u4F60\u7684\u5546\u5BB6\u4F1A\u5458" }), (0, m.jsxs)(o.UB, { className: "content-info strong", children: ["\u8FD8\u6709", d.days, "\u5929\u5230\u671F"] }), (0, m.jsx)(o.UB, { className: "content-info", children: "\u7EED\u8D39\u7EE7\u7EED\u4EAB\u53D7\u514D\u8D39\u5145\u7535\u7279\u6743" })] }), (0, m.jsxs)(o.UB, { className: "merchant-member-modal-actions", children: [(0, m.jsx)(o.UB, { className: "merchant-member-modal-button", onClick: p, children: "\u4E0B\u6B21\u518D\u8BF4" }), (0, m.jsx)(o.UB, { className: "merchant-member-modal-button", onClick: h, children: "\u7ACB\u5373\u5F00\u901A" })] })] })] }) }) });
    }var he = de,
        me = a(8592),
        ue = a(5230),
        pe = a(8619),
        ge = a(7734),
        xe = a(1858),
        fe = { state: { status: { 1: "\u5728\u95E8\u5E97\u91CC", 2: "\u6301\u6709\u4E2D", 3: "\u5F52\u8FD8\u5F02\u5E38" }, memberIconActive: !1, benefits: ["https://img3.dian.so/lhc/2020/08/14/160w_172h_957B61597393273.png", "https://img3.dian.so/lhc/2020/08/14/128w_170h_41D3C1597393437.png", "https://img3.dian.so/lhc/2020/08/14/160w_172h_E79571597393455.png", "https://img3.dian.so/lhc/2020/08/14/144w_172h_495271597393473.png"] }, showRights: function showRights() {
        var e = this.state.memberIconActive;this.setState({ memberIconActive: !e });
      }, toMap: function toMap() {
        (0, d.T8)({ url: "/pages/map/memberMap/index" });
      }, goOrders: function goOrders() {
        (0, d.T8)({ url: "/pages/map/index" });var e = this.props.isMerchantMember;this.log("keuvgkpmp4qb5g", { isMerchantMember: e });
      }, checkPrivileges: function checkPrivileges() {
        var e = this.props.userInfo,
            s = void 0 === e ? {} : e;s.isMemberFrozen ? (0, d.T8)({ url: "/pages/users/member/invalidMember" }) : (0, d.T8)({ url: "/pages/users/member/membershipCenter" });
      }, goEcommerce: function goEcommerce() {
        (0, d.T8)({ url: "/pages/map/index" });var e = this.props.isMerchantMember;this.log("keuvgsz60zyj8k", { isMerchantMember: e });
      }, handleRent: function handleRent() {
        f.Xd.scanDevice();
      }, handleNavigate: function handleNavigate(e) {
        var s = this.props.memberInfo;"/pages/horseman/share/index" !== e.url ? (0, d.T8)({ url: e.url }) : (0, d.T8)({ url: "".concat(e.url, "?type=").concat(s.memberType) });
      }, acClick: function acClick(e) {
        var s = this.state.memberIconActive;switch (e.remark) {case "rider":case "enjoy":case "exchange":
            this.setState({ memberIconActive: !s });break;case "map":
            this.toMap();break;case "invite":
            this.handleNavigate(e);break;case "taobao":
            this.toThird();break;case "eleme":
            this.toMiniProgram();break;case "loan":
            this.handleRent();break;case "orders":
            this.goOrders();break;case "bussiness":
            this.checkPrivileges();break;case "bargaining":
            this.goEcommerce();break;case "changing":
            this.toExchangeRecord(e);break;default:
            break;}
      }, toExchangeRecord: function toExchangeRecord(e) {
        (0, d.T8)({ url: e.url });
      }, toThird: function toThird() {
        (0, d.T8)({ url: "/pages/memberHome/qrcode" });
      }, horsemanClick: function horsemanClick(e) {
        switch (e) {case 1:
            f.Xd.scanDevice();break;case 2:
            f.Xd.scanDevice();break;case 3:
            (0, d.CF)("\u8BF7\u5148\u7ED1\u5B9A\u5145\u7535\u5B9D"), setTimeout(function () {
              (0, d.Zk)(), (0, d.T8)({ url: "/pages/horseman/bind" });
            }, 1500);break;default:
            break;}
      }, toRecord: function toRecord() {
        (0, d.T8)({ url: "/pages/horseman/exchangeRecord" });
      }, toUserIndex: function toUserIndex() {
        (0, d.T8)({ url: "/pages/users/index" });
      }, toRenewal: function toRenewal() {
        (0, d.T8)({ url: "/pages/users/renewal/index" });
      }, initLoad: function initLoad() {
        var e = "",
            s = new Date(),
            a = s.getHours();e = a >= 6 && a < 11 ? "\u65E9\u4E0A\u597D" : a >= 11 && a < 12 ? "\u4E2D\u5348\u597D" : a >= 12 && a < 18 ? "\u4E0B\u5348\u597D" : "\u665A\u4E0A\u597D", this.setState({ greetings: e });
      }, hideModal: function hideModal() {
        this.setState({ modalVisible: !1 });
      }, questionClick: function questionClick(e) {
        var s = this.props.memberInfo.modelId;e.rightDesc && (1 === e.rightDesc.type && this.setState({ modalContent: e.rightDesc.content, modalVisible: !0 }), 2 === e.rightDesc.type && (0, d.T8)({ url: "/pages/users/member/question?modelId=".concat(s) }));
      }, checkCanRenewal: function checkCanRenewal(e) {
        return 1 === e || 2 === e || 3 === e;
      }, async: { toMiniProgram: function toMiniProgram() {
          return (0, c.Z)((0, i.Z)().mark(function e() {
            var s, a;return (0, i.Z)().wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {case 0:
                    return (0, d.QP)("\u8D44\u6E90\u52A0\u8F7D\u4E2D..."), s = {}, s.elemeChannle = 1, e.next = 6, se.qg.getEleme(s, { proxy: !1 });case 6:
                    a = e.sent, a.success ? ((0, d.Zk)(), (0, d.Be)({ appId: a.data.appId, path: a.data.path, extraData: {} }, !0)) : (0, d.Zk)();case 8:case "end":
                    return e.stop();}
              }
            }, e);
          }))();
        } } };function be(e) {
      var s = (0, r.qt)(fe, e),
          a = (0, t.Z)(s, 2),
          n = a[0],
          i = a[1],
          c = e.memberInfo,
          l = void 0 === c ? {} : c,
          d = e.greetings,
          h = e.isMerchantMember,
          u = e.mapAidosAd,
          p = n.memberIconActive,
          g = n.modalVisible,
          x = n.modalContent,
          f = n.status,
          b = n.benefits,
          j = i.handleRent,
          k = i.showRights,
          v = i.toMap,
          N = i.toRecord,
          y = i.acClick,
          w = i.horsemanClick,
          C = i.toUserIndex,
          I = i.initLoad,
          S = i.hideModal,
          B = i.questionClick,
          A = i.toRenewal,
          T = i.checkCanRenewal;return (0, r.b6)(function () {
        I();
      }), (0, m.jsxs)(o.G7, { children: [Object.keys(l).length > 0 && (0, m.jsxs)(o.G7, { className: "components-map-com-test", children: [(0, m.jsxs)(o.G7, { className: "header-bg".concat(h ? " merchant-member" : ""), children: [u && (0, m.jsx)(G.Z, { reId: "3" }), !u && !h && (0, m.jsx)(G.Z, { reId: "3" }), (0, m.jsxs)(o.G7, { className: "userinfo-container ".concat(h ? "merchant-top" : ""), children: [(0, m.jsxs)(o.G7, { children: [(0, m.jsxs)(o.G7, { className: "name", children: [d, "\uFF0C", l.nick] }), (0, m.jsxs)(o.G7, { className: "time-container", children: [(0, m.jsx)(o.G7, { className: "member-icon ".concat(3 === l.memberType ? "member-enjoy" : ""), style: { backgroundImage: "url(".concat(l.modelIcon, ")") } }), !l.isMemberFrozen && l.expirationDate && (0, m.jsxs)(o.G7, { className: "end-time", children: ["\u5230\u671F\u65F6\u95F4\uFF1A", l.expirationDate] }), l.isMemberFrozen && (0, m.jsx)(o.G7, { className: "end-time", children: "\u4F1A\u5458\u6743\u76CA\u5DF2\u5931\u6548" }), l.memberType && T(l.memberType) && (0, m.jsx)(o.G7, { className: "renewal", onClick: A, children: "\u7ACB\u5373\u7EED\u8D39" })] })] }), (0, m.jsx)(o.G7, { className: "avatar", onClick: C, style: { backgroundImage: "url(".concat(l.avatar, ")") } })] }), (0, m.jsxs)(o.G7, { className: "member-rights-container ".concat(p ? "active" : "").concat(h ? " merchant-rights-container" : ""), children: [(0, m.jsxs)(o.G7, { className: "ac-button-container", children: [(0, m.jsx)(o.G7, { className: "ac-icon-container", children: l.columnFunctionList.map(function (e, s) {
                    return (0, m.jsxs)(o.G7, { className: "icon-container", onClick: function onClick() {
                        return y(e);
                      }, children: [(0, m.jsx)(o.G7, { className: "ac-icon ".concat(3 === l.memberType && 0 === s ? "enjoy-ac" : ""), style: { backgroundImage: "url(".concat(e.icon, ")") } }), (0, m.jsx)(o.G7, { className: "ac-name", children: e.name })] }, e.name);
                  }) }), h ? (0, m.jsx)(o.G7, { className: "button", onClick: j, children: (0, m.jsx)(o.G7, { className: "loan-btn" }) }) : (0, m.jsx)(o.G7, { className: "button", onClick: function onClick() {
                    return w(l.buttonType);
                  }, children: 1 === l.buttonType ? (0, m.jsx)(o.G7, { className: "take-btn" }) : (0, m.jsx)(o.G7, { className: "return-btn" }) })] }), !h && (0, m.jsxs)(o.gO, { children: [(0, m.jsxs)(o.G7, { className: "check-btn", onClick: k, children: ["\u67E5\u770B\u4F1A\u5458\u6743\u76CA", (0, m.jsx)(o.G7, { className: "icon ".concat(p ? "up-icon" : "down-icon") })] }), p && (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(o.G7, { className: "rights-container", children: 3 === l.memberType ? b.map(function (e) {
                      return (0, m.jsx)(o.G7, { className: "benefit", style: { backgroundImage: "url(".concat(e, ")") } }, e);
                    }) : l.memberEquityList.map(function (e) {
                      return (0, m.jsxs)(o.G7, { className: "rights", children: [(0, m.jsx)(o.G7, { className: "icon", style: { backgroundImage: "url(".concat(e.icon, ")") }, children: (0, m.jsx)(o.G7, { className: "des-bg", children: e.equityRangeDesc }) }), (0, m.jsxs)(o.G7, { className: "title", children: [e.equityName, e.rightDesc && (0, m.jsx)(o.G7, { onClick: function onClick() {
                              return B(e);
                            }, children: 3 !== l.memberType && (0, m.jsx)(xe.Z, { type: "wenhao", size: 26, color: "#EBCDA2" }) })] }), (0, m.jsx)(o.G7, { className: "sub-title", children: e.equityDesc })] }, e.equityName);
                    }) }), !h && (0, m.jsxs)(o.G7, { className: "record", onClick: N, children: [(0, m.jsx)(xe.Z, { type: "jifeizhong", color: "#EBCDA2", size: 20 }), (0, m.jsx)(o.xv, { className: "record-btn", children: "\u6362\u5B9D\u8BB0\u5F55" })] })] })] })] }), !h && (0, m.jsxs)(o.G7, { className: "card-container", children: [(0, m.jsx)(o.G7, { className: "status-card", children: l.userPowerBankStatusInfo && 1 === l.userPowerBankStatusInfo.userPowerbankStatus ? (0, m.jsxs)(o.G7, { onClick: v, children: [(0, m.jsx)(o.G7, { className: "title", children: "\u5168\u56FD\u5145\u7535\u5B9D\uFF0C\u4EFB\u60A8\u53D6\u8D70" }), (0, m.jsxs)(o.G7, { className: "status", children: [(0, m.jsx)(o.G7, { className: "left", children: "\u60A8\u7684\u5145\u7535\u5B9D\u72B6\u6001" }), (0, m.jsx)(o.G7, { className: "right", children: "\u5728\u95E8\u5E97\u91CC" })] }), (0, m.jsxs)(o.G7, { className: "footer", children: [(0, m.jsx)(o.xv, { className: "nearby", children: "\u9644\u8FD1\u5145\u7535\u5B9D" }), (0, m.jsx)(xe.Z, { type: "jinru", size: 20, color: "#634110" })] }), (0, m.jsx)(o.G7, { className: "status-icon in-store" })] }) : (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(o.G7, { className: "title", children: "\u4E0D\u7528\u5F52\u8FD8\uFF0C\u968F\u65F6\u53EF\u6362" }), (0, m.jsxs)(o.G7, { className: "status", children: [(0, m.jsx)(o.G7, { className: "left", children: "\u60A8\u7684\u5145\u7535\u5B9D\u72B6\u6001" }), (0, m.jsx)(o.G7, { className: "right", children: f[l.userPowerBankStatusInfo.userPowerbankStatus] })] }), (0, m.jsx)(o.G7, { className: "footer", children: (0, m.jsxs)(o.G7, { children: ["\u5145\u7535\u5B9DID\uFF1A", l.userPowerBankStatusInfo.powerBankNo] }) }), (0, m.jsx)(o.G7, { className: "status-icon holding" })] }) }), (0, m.jsx)(o.G7, { className: "right-card", onClick: v })] })] }), g && (0, m.jsx)(o.G7, { className: "modal-mask", children: (0, m.jsxs)(o.G7, { className: "modal", children: [(0, m.jsx)(o.G7, { className: "rights-content", children: (0, m.jsx)(o.xv, { children: x }) }), (0, m.jsx)(o.G7, { className: "button", onClick: S })] }) })] }), u ? (0, m.jsx)(G.Z, { reId: "1310" }) : (0, m.jsx)(G.Z, { reId: "1941" })] });
    }var je = be,
        ke = a(5861),
        ve = ke.ag.getMessage(["map", "shop", "number"]),
        Ne = ke.ag.getLocale(),
        ye = { state: { user: null, form: null, pageLoading: !0, tabs: [] }, onGlobalLoop: function onGlobalLoop(e) {
        this.setState({ form: e });
      }, onLaunch: function onLaunch() {
        var e = (0, r.mN)().params,
            s = e.sharePage,
            a = e.scene,
            n = e.q,
            t = e.scanNow;if (n) {
          var i = f.nm.parseHrefOrSearch(n),
              c = i.params;t = c.scanNow;
        }if ("true" === t) setTimeout(function () {
          f.Xd.scanDevice();
        }, 600);else if (s) (0, d.T8)({ url: s });else if (a) for (var o = a, l = Object.keys(I.nN.PAGE_MAP), h = 0; h < l.length; h++) {
          var m = l[h];if (~o.indexOf(m)) {
            o = o.replace(m, I.nN.PAGE_MAP[m]), (0, d.T8)({ url: o });break;
          }
        }se.hS.bindThirdRelationByWX((0, r.mN)().params);
      }, onShow: function onShow() {}, onReachBottom: function onReachBottom() {
        var e = this.state.user;e && e.isMutex && (0, h.yM)("_updateAroundShopList");
      }, getGreetings: function getGreetings(e) {
        var s = "",
            a = new Date(),
            n = a.getHours();return s = n >= 6 && n < 11 ? e.morning : n >= 11 && n < 12 ? e.noon : n >= 12 && n < 18 ? e.afternoon : e.evening, s;
      }, async: { getUserInfo: function getUserInfo() {
          var e = this;return (0, c.Z)((0, i.Z)().mark(function s() {
            var a, n, t, c, o, l, d;return (0, i.Z)().wrap(function (s) {
              while (1) {
                switch (s.prev = s.next) {case 0:
                    return a = (0, r.mN)().params.source, n = {}, s.next = 4, C.iv.getPanMapPageInfo({}, { proxy: !1 });case 4:
                    if (n = s.sent, n.success) {
                      s.next = 10;break;
                    }return s.next = 8, Promise.all([C.iv.getUserInfo({ isMemberConfigOption: !0 }, { proxy: !1 }), C.iv.getTabsInfo({ isMemberConfigOption: !0 }, { proxy: !1 })]);case 8:
                    c = s.sent, n = { success: !0, data: { tabs: (null === (t = c[1]) || void 0 === t ? void 0 : t.subfieldDetails) || [], userInfo: c[0] } };case 10:
                    n.success ? (o = n.data, o && o.userInfo ? (l = o.userInfo, l && l.isMutex && "memberIndex" !== a || l.modelType === I.HB.MODEL_TYPE.merchantMember || e.setState({ pageLoading: !1 }), l && l.isMutex && (e.log("kw4n503oabta52"), e.getButtonStatus(l)), e.setState({ user: l })) : e.setState({ pageLoading: !1 }), o && o.tabs && (d = o.tabs, e.setState({ tabs: d }))) : e.setState({ pageLoading: !1, tabs: [] });case 11:case "end":
                    return s.stop();}
              }
            }, s);
          }))();
        }, getMemberIndex: function getMemberIndex(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n, t, c;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    return n = {}, n.channel = 1, t = e.memberType === I.HB.MERCHANT_MODEL_TYPE, t && s.log("kw4n8oe2n63ugh"), a.next = 7, se.qg.getMemberIndex(n, { proxy: !1 });case 7:
                    c = a.sent, c.success ? ((0, d._i)({ backgroundColor: "#282D36", frontColor: "#ffffff" }), setTimeout(function () {
                      s.setState({ memberInfo: c.data, pageLoading: !1, showMember: !0, isMerchantMember: t });
                    }, 300)) : s.setState({ pageLoading: !1 });case 9:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        }, getButtonStatus: function getButtonStatus(e) {
          var s = this;return (0, c.Z)((0, i.Z)().mark(function a() {
            var n, t;return (0, i.Z)().wrap(function (a) {
              while (1) {
                switch (a.prev = a.next) {case 0:
                    return a.next = 2, C.hI.getButtonStatus({}, { proxy: !1 });case 2:
                    n = a.sent, t = n.success ? n.data : {}, s.setState({ quBaoButtonStatus: t }), (0, h.yM)("_mapUserVip", { user: e, quBaoButtonStatus: t });case 6:case "end":
                    return a.stop();}
              }
            }, a);
          }))();
        } }, initShow: function initShow() {
        var e = this.location.params;this.onShow();var s = e.q;s && f.Xd.handleRedirect(s), this.getUserInfo();
      }, initEffect: function initEffect() {
        var e = this,
            s = this.state.memberInfo;return s || (0, d._i)({ backgroundColor: "#FFFFFF", frontColor: "#000000" }), this.onLaunch(), setTimeout(function () {
          (0, l.Yv)();
        }, 1e3), (0, l.HO)(I.Ot.GLOBAL_BOX_ORDER, function (s) {
          e.onGlobalLoop(s);
        }), function () {
          (0, l.a6)(I.Ot.GLOBAL_BOX_ORDER, !0);
        };
      }, onShareAppMessage: function onShareAppMessage() {
        return { title: "\u5C0F\u7535\u5145\u7535", path: "/pages/map/index" };
      } };function we() {
      var e,
          s = (0, r.qt)(ye),
          a = (0, t.Z)(s, 2),
          n = a[0],
          i = a[1],
          c = (0, r.tv)().params || {},
          l = c.source,
          h = f.Xd.getSafeArea(),
          u = h.topSafe,
          p = n.showMember,
          g = n.user,
          b = n.pageLoading,
          j = void 0 === b || b,
          v = n.memberInfo,
          N = n.quBaoButtonStatus,
          w = n.isMerchantMember,
          C = n.tabs,
          S = i.initShow,
          B = i.onShareAppMessage,
          A = i.getMemberIndex,
          T = (0, x.FE)("appConfig", !1) || {},
          M = T.mapAidosAd,
          _ = !0;(0, r.ou)(function () {
        var e = n.user;e && e.isMutex && (0, d._i)({ backgroundColor: "#282D36", frontColor: "#ffffff" }), S();
      }), (0, r.b6)(function () {
        i.initEffect();
      }), (0, r.d4)(function () {
        var e;return (null !== g && void 0 !== g && g.isMutex && "memberIndex" !== l || (null === g || void 0 === g ? void 0 : g.modelType) === I.HB.MODEL_TYPE.merchantMember) && (e = setInterval(function () {
          A(g);
        }, 3e3)), function () {
          clearInterval(e), e = null;
        };
      }, [g]), (0, r.L$)(function () {
        i.onReachBottom();
      }), (0, r.Bk)(function () {
        return B();
      });var U,
          P,
          R,
          L,
          D,
          Z = i.getGreetings(ve);return j ? (0, m.jsx)(ue.Z, {}) : p ? (0, m.jsxs)(o.G7, { className: "member-index-container", children: [(0, m.jsx)(o.G7, { className: "head-title-box", style: { height: "".concat(u, "px") }, children: (0, m.jsx)(o.G7, { className: "head-title", style: { bottom: "11px", fontSize: "18px", height: "25px", lineHeight: "25px" }, children: "\u5C0F\u7535\u5145\u7535" }) }), (0, m.jsx)(je, { userInfo: g, isMerchantMember: w, memberInfo: v, greetings: Z, quBaoButtonStatus: N, mapAidosAd: M }), (0, m.jsxs)(o.G7, { children: [M && (0, m.jsxs)(o.G7, { children: [(0, m.jsx)(G.Z, { reId: "1958" }), " ", (0, m.jsx)(G.Z, { reId: "1951" }), " ", (0, m.jsxs)(o.G7, { className: "weapp-ad-box", children: [(0, m.jsx)(G.Z, { reId: "1952" }), " "] }), (0, m.jsx)(G.Z, { reId: "1953" }), " "] }), !M && w && (0, m.jsxs)(o.G7, { children: [(0, m.jsx)(G.Z, { reId: "1958" }), " ", (0, m.jsx)(G.Z, { reId: "1951" }), " ", (0, m.jsxs)(o.G7, { className: "weapp-ad-box", children: [(0, m.jsx)(G.Z, { reId: "1952" }), " "] }), (0, m.jsx)(G.Z, { reId: "1953" }), " "] }), (0, m.jsx)(me.Z, { needAroundShop: !!g && g.isMutex })] }), (0, m.jsx)(pe.Z, {}), (0, m.jsx)(ge.Z, {})] }) : p || _ ? (0, m.jsxs)(o.G7, { className: "pages-map-index", children: [(0, m.jsxs)(o.G7, { className: "new-ui", children: [(0, m.jsxs)(o.UB, { className: "new-map-header", style: { height: "".concat(u + 26, "px") }, children: [(0, m.jsx)(o.y5, { className: "new-map-header-bg", mode: "widthFix", src: "https://img3.dian.so/lhc/2023/10/24/1125w_339h_910751698129354.png" }), (0, m.jsx)(o.y5, { src: "https://img3.dian.so/lhc/2023/10/24/133w_58h_C58321698128481.png", className: "new-logo" })] }), (0, m.jsx)(o.G7, { className: "map-section", children: (0, m.jsx)(ee, { user: n.user, form: n.form, tabReId: (null === C || void 0 === C || null === (e = C[0]) || void 0 === e ? void 0 : e.bannerIdentification) || "", $message: ve, locale: Ne }) }), n.user && (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(ce, { userInfo: n.user }), (0, m.jsx)(he, { userInfo: n.user })] }), (0, m.jsx)(G.Z, { reId: "1310", needCoverView: !0 }), (0, m.jsx)(G.Z, { reId: "3306", needCoverView: !0 })] }), (0, m.jsx)(ge.Z, {}), (0, m.jsx)(pe.Z, {})] }) : (0, m.jsxs)(o.G7, { className: "pages-map-index", children: [(0, m.jsx)(o.G7, { className: "header-section", children: (0, m.jsx)(k, { greetings: Z, user: n.user, tabs: C, $message: ve, locale: Ne }) }), (null === n || void 0 === n || null === (U = n.form) || void 0 === U || null === (P = U.list) || void 0 === P ? void 0 : P.length) > 0 && (0, m.jsx)(o.G7, { className: "message-section", children: (0, m.jsx)(y, { form: n.form, $message: ve }) }), (0, m.jsx)(o.G7, { className: (null === n || void 0 === n || null === (R = n.form) || void 0 === R || null === (L = R.list) || void 0 === L ? void 0 : L.length) > 0 ? "map-section has-message" : "map-section", children: (0, m.jsx)(ee, { user: n.user, form: n.form, tabReId: (null === C || void 0 === C || null === (D = C[0]) || void 0 === D ? void 0 : D.bannerIdentification) || "", $message: ve, locale: Ne }) }), n.user && (0, m.jsxs)(o.gO, { children: [(0, m.jsx)(ce, { userInfo: n.user }), (0, m.jsx)(he, { userInfo: n.user })] }), (0, m.jsx)(G.Z, { reId: "1310", needCoverView: !0 }), (0, m.jsx)(G.Z, { reId: "3306", needCoverView: !0 }), (0, m.jsx)(pe.Z, {}), (0, m.jsx)(ge.Z, {})] });
    }var Ce = we,
        Ie = { navigationBarTitleText: "", navigationStyle: "custom", initialRenderingCache: "static" };Ce.enableShareAppMessage = !0;Page((0, n.createPageConfig)(Ce, "pages/map/index", { root: { cn: [] } }, Ie || {}));
  }, 943: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_activity.png";
  }, 1900: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_desktop.png";
  }, 5025: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_king.png";
  }, 8079: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_new_powerbank.png";
  }, 6821: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_powerbank.png";
  }, 4157: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_shendu.png";
  }, 8913: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_spec.png";
  }, 2546: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_xiaoxiaole.png";
  }, 3242: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_l_yyy.png";
  }, 8303: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_activity.png";
  }, 6488: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_desktop.png";
  }, 7775: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_king.png";
  }, 8149: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_new_powerbank.png";
  }, 2563: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_powerbank.png";
  }, 8439: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_shendu.png";
  }, 9889: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_spec.png";
  }, 3561: function _(e, s, a) {
    e.exports = a.p + "resources/icons/map_s_xiaoxiaole.png";
  }, 5311: function _(e) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB4CAMAAADljX3jAAAAe1BMVEUAAAAEAAAAAAAAAAABAAABAAAEAAADAADcABrbABvdABvXABraABrSABnbABvaABzhACXcABvcAB3bAB7bABvMABpaAAyIABGlABTdABv////gDSf4wsnpVGbkLkTtb3/61Nn+8fPwh5TiHTX85ej/+vvymqX1rrjnQVYwIy55AAAAGXRSTlMABhIdDCc5MOvZ+MSwnYlJD1sqG205UG2IKDT4MQAABqxJREFUaN7sl8vSoyAQhfPvvGtMsmhAVBT1/Z9waqZUhEYjGmdmkW+VIqkc6T59wNuXL1/+P7LXPYl83wsAwPP8MH6mj9tf4CdNQrDgx/eL9dMogHXCZ3a7iDzx4A1BlN4uII9gF/79GuV/oZ4lAbgQ5p9zmAeOBEn2mU3HcAD/E1vPfThEcL7r9wCOEv+ck37CCcJTTU9gH4NgjPWCG2X3T8TsTpeVLRlhheG4x7XSnJEFHdXFsysLzluiUVHU86tsRlti0INGdMDtL9hFRxANaCTuaeatGYu1C0dxgilAx/lYjTYtLWBEkJG6ny03gI73+ESzh2r8eznVdVro6ey6CmeMk/QjAEzT47rKpbkb9vsjB8TzbMWH2dGqrnSa6uk3ZUFBcaTqKWBKSRQtRdqbxPu1fUAIsqCerVyPWQpveO0+N7fHWHZqgtm4RGGb6Mi2sXTXWL4o4A350W2XSpnpNi5Qw89tPEQOVzYToMFVtrBOWdxCsGvjOZrrWnlMWxcV0ZD9RumTQ0dnP0sPS+VOEky1qu7v0fZAp7BKlzWxw/jxMUtXD+hi/ejEw4+J3UteWmxGGdlCgA3PcbjVtmW1WKvINuLYiGcr25ZcM5+iJRZKsPB0DZYKh0e5EBZ8inRZMO3ugokc283VZWGCy9lVJV1UYQCu1GVzoOGR/fjqcCVIxbUZFNpBywCTuVhNCXE87oyOIUOIuisNtaq664T/GC5X/zvBplY35vP9WSikul6Y3Le1H6AxoKFp8G1UaOYuldcdIz23t3tAJmf4AXu9MJVrsuX2Y4RuXhbq0fbGHAyOQ/YChdpDi1Zq2xM2+uN1jtqp1eYM7ZHZsm/QM6EFg3C/tlLq8YrFkbJExtfxnbRV9ba0ueFssTLioUu/KdZu0amGtNVknvKaRLvEF3KlVRgZ0Ltp52v9xkGC1969rcROudaimChwZNLaTIFWaTvkWmbNFglYqKdm3DBzNCvHy4NnfRfiuMCE/eLU7JYTBoEoPNh0Jpqx0apXCCQhf+//hJUmeIq7UMnJeKMj3yzZ3bgHlxKSE23gPc+us4YSQzPWDpgJ1axGDA72JUWH1z2/ZPh5qJ6GZBZEw7Z8Uy0zjZaeaVF3Ft3QmjOktWQV+MQsY3sG3Wqm5jLSHMnGlhTgDUXPsc2C6kybR7YIPDGXNDqWJNBB5E7+ow9MhvvR/w26k1xT6EhHzRxMdGTOkWZq10oykv+GzjfZKj7bhplYyHpWKgAkf69d8u0WTXoHET+3qg2GiyjJHYdxSUW9mfyGCn3Fhv/pf7SOzSX7bUaugp8h3z7AuG+0c49RZ6/XSbRqY8lRnrY62E3CTIFkF5+/r5tPiGz/ho80N3HTYy+yD0v4g6jJcmS0WTw885JcuAs1TuC+lYV4axAzVw/VunJc+FSgucWeXU2ntJXS6tmMLx+NjJcqgODIiNulWxk/LUlrMOzMLzyX0gFedY6eWqTVz9RfEqsQN+U+wNCRP3VNa+gkNXFPWJTb9+XNQKcqcdqc4eMebiIUG7dXsVyXPQOXCfo0c559XfyuCPRy8RteeH2XfOOccN9Dh5HTuVgkPD4Zd+HoO6cb4IGkCsuqvXsw0XXntNIROE/2YMAjfK1M142dMcom/mKz2xE4LW2QH+ziCcc936CDixr0WNxgI+yPx+uz2o4ua891wQAu4nE/yR9OP52XUY7DIAxEK0W206bs3ya5/0k3UG9HYEOA+a2Up4cnJp2Hr79LTHIw5hndaC8aes+hn6IPcE69CNj/5C/9Zwb9piUG4m1vhRfaC9HxGkYHIiWrONgPG8NOeErZ18GCH3RF6WBXe/5wvCmx5YI/h1q2JzTUoV3xhriy4S3E20DLdiESsFW75a10FP3SVm8R4dCL3lgE2vbIndhTh7hE+NnXuHChRbWpaQ1yUbdFzSHOx9rRsjOiJddO0ka7/p5FPsQTm+8btx78YUs5bPf2hjcKp+aAi8K3u4IzM7QdNFL9VDTmkR3zbrYMaHIbDmcPn5l78LOxRjlG0SmQhnZt4vY9t/Dqgj25Yg1wXVt/rKsrfPXXaI62Fye4DbxHh7pf91XRkM4n3UWGu6vOKZtdo0C7x92m31+pMOdQrlGDzo5b4V3k/HPdOfd8wQYl1zoGcl9At+55416n52z+/w2Q7YYHHAsWa7Q+6PHg5K26um/aMmkNepJeuNtVE3BZO8etD5hPZdfQJ2cgBRsy7qtpsu+ueIDNLrGZn7tRR0AG+sZ6fu7ggzvsPP++IwBPzrl70YIOvufchf8DVvrqMcdLC3UAAAAASUVORK5CYII=";
  } }, function (e) {
  var s = function s(_s) {
    return e(e.s = _s);
  };e.O(0, [2107, 1216, 8592], function () {
    return s(3020);
  });e.O();
}]);
},{isPage:true,isComponent:true,currentFile:'pages/map/index.js'});require("pages/map/index.js");