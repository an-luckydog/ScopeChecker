$gwx_XC_134=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_134 || [];
function gz$gwx_XC_134_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_134_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'loginSuccess'])
Z([[7],[3,'loading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_134_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_134_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_134=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_134=true;
var x=['./pages/ihmp_payment/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_134_1()
var aN8=_v()
_(r,aN8)
if(_oz(z,0,e,s,gg)){aN8.wxVkey=1
var eP8=_n('cy-authorize-login')
_rz(z,eP8,'bindloginSuccess',1,e,s,gg)
_(aN8,eP8)
}
var tO8=_v()
_(r,tO8)
if(_oz(z,2,e,s,gg)){tO8.wxVkey=1
}
aN8.wxXCkey=1
aN8.wxXCkey=3
tO8.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_134";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_134();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ihmp_payment/index.wxml'] = [$gwx_XC_134, './pages/ihmp_payment/index.wxml'];else __wxAppCode__['pages/ihmp_payment/index.wxml'] = $gwx_XC_134( './pages/ihmp_payment/index.wxml' );
	;__wxRoute = "pages/ihmp_payment/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/ihmp_payment/index.js";define("pages/ihmp_payment/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=getApp(),t=require("../../BC983DD1829A079CDAFE55D6E84D7B70.js").baseUrl,i=require("../../92BC1755829A079CF4DA7F52C55D7B70.js");Page({data:{paymentUrl:"",isLogin:!1,loading:!0,canUseWebView:wx.canIUse("web-view"),type:"",id:0},onLoad:function(t){var i=this;e.globalData.appIsLogin.then((function(){i.loginSuccess(t)}),(function(){i.setData({isLogin:!1})})),this.parseUrl(t)},parseUrl:function(e){if(e.scene){var a=decodeURIComponent(e.scene),n=a.match(/t=(.+)&/)[1],s=a.match(/id=(\d+)/)[1];console.log(a,n,s),"link"===n?this.setData({paymentUrl:i.setWebviewUrlWithLoginCredentials("".concat(t,"/rec/").concat(s)),loading:!1,type:n,id:s}):"invoice"===n&&this.setData({paymentUrl:i.setWebviewUrlWithLoginCredentials("".concat(t,"/mall/order/invoice/redirect/?pharmacy_version=1&id=").concat(s)),loading:!1,type:n,id:s})}else e.id?"link"===e.type?this.setData({paymentUrl:i.setWebviewUrlWithLoginCredentials("".concat(t,"/rec/").concat(e.id)),loading:!1,type:e.type,id:e.id}):"invoice"===e.type&&this.setData({paymentUrl:i.setWebviewUrlWithLoginCredentials("".concat(t,"/mall/order/invoice/redirect/?pharmacy_version=1&id=").concat(e.id)),loading:!1,type:e.type,id:e.id}):console.log("NO SCENE DATA FOUNDED")},loginSuccess:function(){this.setData({isLogin:!0})},onShareAppMessage:function(){return{title:"商品订单",path:"/pages/ihmp_payment/index?type=".concat(this.data.type,"&id=").concat(this.data.id)}}});
},{isPage:true,isComponent:true,currentFile:'pages/ihmp_payment/index.js'});require("pages/ihmp_payment/index.js");