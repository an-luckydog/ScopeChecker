$gwx_XC_81=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_81 || [];
function gz$gwx_XC_81_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_81_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_81_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_81=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_81=true;
var x=['./pages/facility-abutment-login/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_81_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_81";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_81();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/facility-abutment-login/index.wxml'] = [$gwx_XC_81, './pages/facility-abutment-login/index.wxml'];else __wxAppCode__['pages/facility-abutment-login/index.wxml'] = $gwx_XC_81( './pages/facility-abutment-login/index.wxml' );
	;__wxRoute = "pages/facility-abutment-login/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/facility-abutment-login/index.js";define("pages/facility-abutment-login/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../A9EAB7C2829A079CCF8CDFC58A3C7B70.js"),n=require("../../92BC1755829A079CF4DA7F52C55D7B70.js"),i=n.wxShowToast,o=n.wxShowLoading,c=require("../../92BC1755829A079CF4DA7F52C55D7B70.js");Page({data:{isLogin:!1,deviceId:"",deviceType:""},onLoad:function(e){if(e.scene){var n=decodeURIComponent(decodeURIComponent(e.scene)),o=c.getQueryStr("id",n)||"",t=c.getQueryStr("t","&".concat(n))||"";console.log("设备方参数",o,t),this.setData({deviceId:o,deviceType:t})}else i("设备方参数错误")},onShow:function(){var n=this;o("登录中"),new Promise((function(n,i){(0,e.appIsLogin)({success:function(){n()},fail:function(){i("用户未登录")},isNumberLogin:!0})})).then((function(e){console.log("用户已登录",e),n.onLoginSuccess(n)})).catch((function(e){console.log("用户未登录",e),wx.hideLoading()}))},getPhoneNumber:function(e){var n=e.detail;if("getPhoneNumber:ok"===(null==n?void 0:n.errMsg)){var o={encryptedData:null,iv:null};if(n){var c=n.encryptedData,t=n.iv;o.encryptedData=c||null,o.iv=t||null}this.onGetPhoneNumberSuccess(o)}else i("请先授权")},onGetPhoneNumberSuccess:function(n){console.log("onGetPhoneNumberSuccess执行了",n),o("登录中");var i=n.encryptedData,c=n.iv,t=this;i&&c?(0,e.appLogin)({success:function(){t.onLoginSuccess(t)},fail:function(){wx.hideLoading()},encryptedData:i,iv:c,isNumberLogin:!0}):this.onLoginFail("请先授权")},onLoginSuccess:function(){var e=this.data,n=e.deviceId,i=e.deviceType;wx.redirectTo({url:"/pages/device_use/index?device_id=".concat(n,"&device_type=").concat(i),success:function(){wx.hideLoading()}})},onLoginFail:function(e){wx.hideLoading(),i(e||"登录失败，请重试")}});
},{isPage:true,isComponent:true,currentFile:'pages/facility-abutment-login/index.js'});require("pages/facility-abutment-login/index.js");