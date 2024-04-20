$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'root',[[7],[3,'root']]])
Z([3,'taro_tmpl'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./pages/web.wxml','../base.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var bO=e_[x[0]].i
_ai(bO,x[1],e_,x[0],1,1)
var oP=_v()
_(r,oP)
var xQ=_oz(z,1,e,s,gg)
var oR=_gd(x[0],xQ,e_,d_)
if(oR){
var fS=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[0],2,14)
bO.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/web.wxml'] = [$gwx_XC_2, './pages/web.wxml'];else __wxAppCode__['pages/web.wxml'] = $gwx_XC_2( './pages/web.wxml' );
	;__wxRoute = "pages/web";__wxRouteBegin = true;__wxAppCurrentFile__="pages/web.js";define("pages/web.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[138], { 1408: function _(n, e, r) {
    var t = r(9195),
        c = r(1629),
        o = r(8977),
        i = r(4656),
        a = r(3581),
        s = r(2678),
        f = r(2849),
        u = r(9296),
        l = r(7732),
        w = r(9610),
        p = r(6472),
        g = r(5861),
        v = r(9517),
        d = g.ag.getLocale(),
        b = { state: { url: null }, async: { initEffect: function initEffect() {
          var n = this;return (0, i.Z)((0, o.Z)().mark(function e() {
            var r, t, c, i, s, w, g, v;return (0, o.Z)().wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {case 0:
                    if (r = (0, a.mN)().params, t = r.src || "", c = (0, f.FE)("esid") || "", i = t.indexOf("/common/help") > -1, c || i || (s = (0, u.Jz)(), (0, u.gB)({ url: "/pages/login/index?src=".concat(encodeURIComponent(s)) })), !/dian\.so/.test(t) || i) {
                      e.next = 16;break;
                    }return e.next = 8, l.hI.getUserInfo({}, { pageError: !0 });case 8:
                    w = e.sent, n.setState({ userInfo: w }), g = p.nm.stringify({ minToken: c, env: "weapp" }), t = t.indexOf("?") > -1 ? "".concat(r.src, "&").concat(g) : "".concat(r.src, "?").concat(g), n.setUrl(t), (0, f.lK)("webviewUrl", "", !0), e.next = 20;break;case 16:
                    n.setState({ userInfo: {} }), i && (v = p.nm.stringify({ locale: d, minToken: c, env: "weapp" }), t = t.indexOf("?") > -1 ? "".concat(r.src, "&").concat(v) : "".concat(r.src, "?").concat(v)), n.setUrl(t), (0, f.lK)("webviewUrl", "", !0);case 20:case "end":
                    return e.stop();}
              }
            }, e);
          }))();
        } }, setUrl: function setUrl(n) {
        this.setState({ url: n });
      }, initShow: function initShow() {
        var n = (0, a.mN)().params,
            e = (0, f.FE)("esid") || "",
            r = (0, f.FE)("webviewUrl");if (r) {
          var t = "",
              c = p.nm.stringify({ minToken: e, env: "weapp" });n.src && n.src.indexOf("?") > -1 ? t = "".concat(r, "&").concat(c) : n.src && (t = "".concat(r, "?").concat(c)), this.setUrl(t), (0, f.lK)("webviewUrl", "", !0);
        }
      }, onWebViewload: function onWebViewload(n) {}, onWebViewError: function onWebViewError(n) {
        var e = n.detail,
            r = e.errMsg,
            t = e.url;this.log("lei6egffsvc13j", { errMsg: r, url: t, env: "weapp" });
      } };function m() {
      var n = (0, a.qt)(b),
          e = (0, c.Z)(n, 4),
          r = e[0],
          t = e[1],
          o = e[3],
          i = r.url;return (0, a.b6)(function () {
        t.initEffect();
      }), (0, a.ou)(function () {
        t.initShow();
      }), (0, v.jsx)(w.Z, { loading: !r.userInfo, error: o, children: (0, v.jsx)(s.kh, { src: i, onLoad: t.onWebViewload, onError: t.onWebViewError }) });
    }var x = m,
        h = { navigationBarTitleText: "" };Page((0, t.createPageConfig)(x, "pages/web", { root: { cn: [] } }, h || {}));
  } }, function (n) {
  var e = function e(_e) {
    return n(n.s = _e);
  };n.O(0, [2107, 1216, 8592], function () {
    return e(1408);
  });n.O();
}]);
},{isPage:true,isComponent:true,currentFile:'pages/web.js'});require("pages/web.js");