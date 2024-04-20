$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./pages/lvpai/lvpaiHome/lvpaiHome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/lvpai/lvpaiHome/lvpaiHome.wxml'] = [$gwx_XC_20, './pages/lvpai/lvpaiHome/lvpaiHome.wxml'];else __wxAppCode__['pages/lvpai/lvpaiHome/lvpaiHome.wxml'] = $gwx_XC_20( './pages/lvpai/lvpaiHome/lvpaiHome.wxml' );
	;__wxRoute = "pages/lvpai/lvpaiHome/lvpaiHome";__wxRouteBegin = true;__wxAppCurrentFile__="pages/lvpai/lvpaiHome/lvpaiHome.js";define("pages/lvpai/lvpaiHome/lvpaiHome.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/createClass"),i=require("../../../@babel/runtime/helpers/classCallCheck"),a=require("../../../@babel/runtime/helpers/assertThisInitialized"),n=require("../../../@babel/runtime/helpers/inherits"),r=require("../../../@babel/runtime/helpers/createSuper"),s=require("../../../cwx/cwx.js"),o=e(require("../common/common.js")),c=e(require("../../../cwx/component/cwebview/CWebviewBaseClass"));s.cwx.config.init(),(new(function(e){n(h,e);var c=r(h);function h(e){var t;return i(this,h),t=c.call(this,e),wx.j("kKJ"),Object.assign(a(t),{jumpData:null,pageId:"10650051973",data:{canWebView:s.cwx.canIUse("web-view"),pageName:"cwebview",url:"",wsg:"",envIsMini:!0,isNavigate:!0,loginErrorUrl:"",pageId:"",h5Url:"",fromPage:"",fromShare:0,noShareFlag:0,needLogin:!1,auth:"",needWriteCrossTicket:!0},auth:s.cwx.user.auth,observerKey:"",onLoad:function(e){var t=e.tabCode||"",i=o.default.newUrlPrefix()+"home/home?seo=0&isMini=2&isHideHeader=true&isHideNavBar=YES&autoawaken=close&popup=close&tabCode="+t,a={url:encodeURIComponent(i),needLogin:!1,isNavigate:!1};this.jumpData=a;var n=a.url||e.url||"";this.observerKey=a.observerKey||e.observerKey||"",console.log("onloiad",this),n.length<=0?this.showUrlError():(n=decodeURIComponent(n),console.log("onloiadurl",n),this.isWhiteDomain(n||"",179576),this.sendWebViewPv(a),this._syncDataFromOptions(a,n),this._handlerLoading(a),this._handlerShare(a,e),this._handleOptionsData(a,e))},onShow:function(){this.auth!==s.cwx.user.auth&&this._handleOptionsData(this.jumpData,this.jumpData)},onHide:function(){this.auth=s.cwx.user.auth},_handleOptionsData:function(e,t){wx.j("uYd");var i=!(!e.needLogin||e.noForceLogin)&&{},a=e.url||t.url||"";a=decodeURIComponent(a),i&&((e.IsAuthentication||t.IsAuthentication)&&(i.IsAuthentication=e.IsAuthentication||t.IsAuthentication),(e.showDirectLoginBtn||t.showDirectLoginBtn)&&(i.showDirectLoginBtn=e.showDirectLoginBtn||t.showDirectLoginBtn));var n=this;s.cwx.syncLogin.load({url:a,isLogin:i,loginErrorUrl:n.data.loginErrorUrl,needWriteCrossTicket:n.data.needWriteCrossTicket,success:function(e){wx.j("qIC"),n.webLoadUrl(e,!0)},fail:function(t){wx.j("Jna"),n.data.isNavigate?s.cwx.navigateBack():n.setData({wsg:e.wsg,url:t})}})},onShareAppMessage:function(e){return this.shareData.title||(this.shareData.title="分享旅行 发现世界"),this.shareData.path||(this.shareData.path="pages/lvpai/lvpaiHome/lvpaiHome"),this.shareData}}),t}return t(h)}(c.default))).register(),s.cwx.defaultEnvObject={cid:s.cwx.clientID,appid:s.__global.appId,mpopenid:s.cwx.cwx_mkt&&s.cwx.cwx_mkt.openid||""},s.cwx.setEnvObject=function(e){wx.j("YjU"),Object.assign(s.cwx.defaultEnvObject,e)};
},{isPage:true,isComponent:true,currentFile:'pages/lvpai/lvpaiHome/lvpaiHome.js'});require("pages/lvpai/lvpaiHome/lvpaiHome.js");